/* Portfolio renderer. All editable content and theme settings live in config.js. */
(() => {
  "use strict";

  const root = document.documentElement;
  const config = window.PORTFOLIO_CONFIG;
  const fail = (title, message) => {
    root.classList.add("rendered");
    document.body.innerHTML = `<main style="padding:2rem;font-family:system-ui"><h1>${title}</h1><p>${message}</p></main>`;
  };
  if (!config || typeof config !== "object") return fail("Portfolio configuration not found", "Place config.js beside index.html.");
  if (!window.PortfolioTheme?.valid) return fail("Invalid theme settings", "Check that all seven theme colors in config.js are valid hex colors.");

  const $ = (id) => document.getElementById(id);
  const text = (value, fallback = "") =>
    typeof value === "string" && value.trim() ? value.trim() : fallback;
  const clean = (value, fallback = "") => text(value, fallback).replace(/^\[REPLACE\]\s*/i, "");
  const make = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  };
  const icon = (name, className = "icon icon-sm") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#i-${name}`);
    svg.append(use);
    return svg;
  };
  const externalLink = (className, label, href) => {
    const link = make("a", className, label);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const safeUrl = (value) => {
    if (typeof value !== "string" || !value.trim()) return "";
    try {
      const parsed = new URL(value.trim(), window.location.href);
      if (!["http:", "https:", "mailto:"].includes(parsed.protocol)) return "";
      if (/(YOUR-|\[REPLACE\]|example\.com)/i.test(parsed.href)) return "";
      if (parsed.hostname === "github.com" || parsed.hostname === "linkedin.com" || parsed.hostname === "www.linkedin.com") {
        if (parsed.pathname === "/" || !parsed.pathname.replaceAll("/", "")) return "";
      }
      return parsed.href;
    } catch {
      return "";
    }
  };

  /* ---------- Toasts ---------- */
  const toast = (message, action) => {
    const region = $("toast-region");
    const item = make("div", "toast");
    item.append(make("span", "", message));
    if (action) {
      const button = make("button", "focus-ring", action.label);
      button.type = "button";
      button.addEventListener("click", () => { action.run(); dismiss(); });
      item.append(button);
    }
    const dismiss = () => {
      item.classList.add("is-leaving");
      item.addEventListener("animationend", () => item.remove(), { once: true });
      setTimeout(() => item.remove(), 400);
    };
    region.append(item);
    setTimeout(dismiss, action ? 7000 : 2600);
  };

  const copyText = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      const area = make("textarea");
      area.value = value;
      area.setAttribute("readonly", "");
      area.style.cssText = "position:fixed;opacity:0";
      document.body.append(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    }
  };

  /* ---------- Content ---------- */
  const emailValue = text(config.email);
  const email = emailValue && !/(you@example\.com|\[REPLACE\]|your@email)/i.test(emailValue) ? emailValue : "";
  const name = clean(config.name, "Your Name");
  const brand = clean(config.shortName, name) || name;
  const socials = Array.isArray(config.socials) ? config.socials.filter((item) => item && text(item.label) && safeUrl(item.url)) : [];

  document.title = clean(config.pageTitle, `${name} — Portfolio`);
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.content = clean(config.description, `Portfolio of ${name}`);

  $("brand-name").textContent = brand;
  $("brand-mark").textContent = (brand.match(/[A-Za-z0-9]/)?.[0] || "Y").toUpperCase() + ".";
  $("brand-link").setAttribute("aria-label", `${name}, home`);

  $("nav-socials").replaceChildren(...socials.slice(0, 3).map((social) =>
    externalLink("focus-ring", `${text(social.label)} ↗`, safeUrl(social.url))));

  $("header-contact").href = "#contact";
  $("eyebrow").textContent = clean(config.role, "Developer · Designer · Creator");
  $("hero-title").replaceChildren(
    document.createTextNode(text(config.headlineStart, "Building things with")),
    make("span", "muted", ` ${text(config.headlineAccent, "purpose.")}`)
  );
  $("bio").textContent = clean(config.bio, "I enjoy exploring ideas and turning them into useful projects.");
  $("hero-button-text").textContent = text(config.heroButton, "Explore selected work");
  $("gallery-subtitle").textContent = text(config.gallerySubtitle, "Projects, experiments & ideas");
  $("projects-kicker").textContent = text(config.projectsKicker, "01 / Portfolio");
  $("projects-title").textContent = text(config.projectsTitle, "Selected projects");
  $("projects-intro").textContent = text(config.projectsIntro, "A few things I've built, explored, and learned from.");

  $("about-kicker").textContent = text(config.aboutKicker, "02 / About");
  $("about-title").textContent = text(config.aboutTitle, "A little about me.");
  $("about-copy").textContent = clean(config.aboutText, "I enjoy learning by building, experimenting, and sharing what I discover.");
  $("about-links").replaceChildren(...(Array.isArray(config.aboutLinks) ? config.aboutLinks : [])
    .filter((item) => item && safeUrl(item.url) && text(item.label))
    .map((item) => externalLink("focus-ring", `${text(item.label)} ↗`, safeUrl(item.url))));

  $("contact-kicker").textContent = text(config.contactKicker, "03 / Contact");
  $("contact-title").textContent = text(config.contactTitle, "Let's make something useful.");
  $("contact-copy").textContent = text(config.contactText, "Have a question, an idea, or a project in mind? Feel free to get in touch.");
  $("contact-button").href = email ? `mailto:${email}` : "#home";
  $("contact-button-text").textContent = text(config.contactButton, "Get in touch");
  $("copyright").textContent = `© ${new Date().getFullYear()} ${name}. ${text(config.footerNote, "Made with care.")}`;

  const footerLinks = socials.map((social) => externalLink("focus-ring", `${text(social.label)} ↗`, safeUrl(social.url)));
  if (email) {
    const link = make("a", "focus-ring", "Email ↗");
    link.href = `mailto:${email}`;
    footerLinks.push(link);
  }
  $("footer-socials").replaceChildren(...footerLinks);

  if (email) {
    const copyButton = $("copy-email");
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      toast(await copyText(email) ? "Email copied to clipboard" : email);
    });
  }

  $("share-button").addEventListener("click", async () => {
    const url = window.location.href.split("#")[0];
    if (navigator.share) {
      try { await navigator.share({ title: document.title, text: clean(config.description), url }); } catch { /* cancelled */ }
    } else {
      toast(await copyText(url) ? "Link copied to clipboard" : url);
    }
  });

  /* ---------- Projects ---------- */
  const grid = $("project-grid");
  const projects = (Array.isArray(config.projects) ? config.projects : [])
    .filter((project) => project && text(project.title) && !/^\[REPLACE\]/i.test(text(project.title)));
  $("no-projects").hidden = projects.length > 0;

  const theme = config.theme;
  const placeholder = (title) => {
    const color = (value) => value.slice(1).replace(/[^0-9a-f]/gi, "");
    return `https://placehold.co/960x600/${color(theme.surface)}/${color(theme.accent)}?text=${encodeURIComponent(title)}`;
  };
  const tagsOf = (project) => (Array.isArray(project.tags) ? project.tags : []).filter(Boolean).map((tag) => String(tag).replace(/^#/, ""));

  const cards = projects.map((project, index) => {
    const title = text(project.title);
    const article = make("article", "project-card");
    article.dataset.reveal = "";
    article.dataset.tags = JSON.stringify(tagsOf(project));
    article.style.transitionDelay = `${(index % 2) * 80}ms`;

    const media = make("div", "project-media");
    const img = make("img", "project-image");
    const imagePath = text(project.image);
    const smallPath = text(project.imageSmall);
    img.alt = text(project.imageAlt, `Screenshot of ${title}`);
    img.loading = index < 2 ? "eager" : "lazy";
    img.decoding = "async";
    img.width = 960;
    img.height = 600;
    if (imagePath && !imagePath.includes("[REPLACE]")) {
      if (smallPath) {
        img.srcset = `${smallPath} 640w, ${imagePath} 1200w`;
        img.sizes = "(min-width: 1216px) 576px, (min-width: 640px) 46vw, 100vw";
      }
      img.src = imagePath;
    } else {
      img.src = placeholder(title);
    }
    const loaded = () => media.classList.add("is-loaded");
    img.addEventListener("load", loaded, { once: true });
    img.onerror = () => {
      img.onerror = null;
      img.removeAttribute("srcset");
      img.src = placeholder(title);
    };
    if (img.complete && img.naturalWidth) loaded();
    media.append(img, make("span", "project-category", text(project.category, "Project")));
    article.append(media);

    const body = make("div", "project-body");
    const titleRow = make("div", "project-title-row");
    const heading = make("h3", "project-title");
    const demoUrl = safeUrl(project.url);
    const sourceUrl = safeUrl(project.sourceUrl);
    const mainUrl = demoUrl || sourceUrl;
    if (mainUrl) heading.append(externalLink("", title, mainUrl));
    else heading.textContent = title;
    titleRow.append(heading, icon("arrow", "icon project-arrow"));
    body.append(titleRow, make("p", "project-desc", clean(project.description, "Project details coming soon.")));

    const tags = make("ul", "tags");
    tagsOf(project).forEach((tag) => tags.append(make("li", "tag", tag)));
    if (tags.childElementCount) body.append(tags);

    const actions = make("div", "project-actions");
    if (demoUrl) actions.append(externalLink("primary focus-ring", "Live preview ↗", demoUrl));
    if (sourceUrl) actions.append(externalLink("focus-ring", "Source code ↗", sourceUrl));
    if (!demoUrl && !sourceUrl) actions.append(make("span", "note", "Add a project link in config.js"));
    body.append(actions);
    article.append(body);
    grid.append(article);
    return article;
  });

  // Filter chips, built from the tags used across projects.
  const tagCounts = new Map();
  cards.forEach((card) => JSON.parse(card.dataset.tags).forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)));
  if (tagCounts.size > 1 && cards.length > 2) {
    const filters = $("project-filters");
    const status = $("filter-status");
    const chips = [];
    const select = (tag) => {
      const apply = () => {
        let shown = 0;
        cards.forEach((card) => {
          const match = !tag || JSON.parse(card.dataset.tags).includes(tag);
          card.classList.toggle("is-filtered-out", !match);
          if (match) shown += 1;
        });
        chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.tag === (tag || ""))));
        status.textContent = `${shown} project${shown === 1 ? "" : "s"} shown`;
      };
      if (document.startViewTransition && !reducedMotion.matches) document.startViewTransition(apply);
      else apply();
    };
    const addChip = (label, tag, count) => {
      const chip = make("button", "chip focus-ring", label);
      chip.type = "button";
      chip.dataset.tag = tag;
      chip.setAttribute("aria-pressed", String(tag === ""));
      chip.append(make("span", "chip-count", String(count)));
      chip.addEventListener("click", () => {
        select(tag);
        chip.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
      });
      chips.push(chip);
      filters.append(chip);
    };
    addChip("All", "", cards.length);
    [...tagCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(([tag, count]) => addChip(tag, tag, count));
    filters.hidden = false;
    cards.forEach((card, i) => { card.style.viewTransitionName = `project-${i}`; });
  }

  root.classList.add("rendered");

  /* ---------- Scroll reveal ---------- */
  const revealed = (el) => {
    el.classList.add("is-visible");
    // Drop the reveal styles once done so hover effects work normally.
    setTimeout(() => { el.removeAttribute("data-reveal"); el.classList.remove("is-visible"); el.style.transitionDelay = ""; }, 900);
  };
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealed(entry.target);
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    revealTargets.forEach(revealed);
  }

  /* ---------- Active section in nav ---------- */
  const navItems = document.querySelectorAll("[data-section]");
  const setActive = (id) => navItems.forEach((item) => {
    const active = item.dataset.section === id;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "true");
    else item.removeAttribute("aria-current");
  });
  const sections = [...document.querySelectorAll("[data-section-anchor]")];
  if ("IntersectionObserver" in window) {
    const visible = new Map();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
      // At the very bottom, the last section wins even if it's short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) return setActive(sections.at(-1).id);
      const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
      if (best && best[1] > 0) setActive(best[0]);
    }, { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.01, 0.25, 0.5, 0.75, 1] });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Keep in-page links from piling up history entries; tapping the current tab scrolls to its top.
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey) return;
    const id = link.getAttribute("href").slice(1);
    const target = id ? $(id) : null;
    if (!target) return;
    event.preventDefault();
    const top = id === "home" ? 0 : target.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(root).scrollPaddingTop || "0");
    window.scrollTo({ top, behavior: reducedMotion.matches ? "auto" : "smooth" });
    history.replaceState(null, "", id === "home" ? window.location.pathname + window.location.search : `#${id}`);
    if (id === "main-content") target.focus?.({ preventScroll: true });
  });

  /* ---------- Scroll-driven chrome ---------- */
  const header = $("site-header");
  const progress = $("scroll-progress");
  const backToTop = $("back-to-top");
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("is-scrolled", y > 8);
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    backToTop.classList.toggle("is-visible", y > window.innerHeight * 0.9);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
    $("brand-link").focus({ preventScroll: true });
  });

  /* ---------- Theme toggle ---------- */
  const themeToggle = $("theme-toggle");
  if (window.PortfolioTheme.canToggle) {
    themeToggle.hidden = false;
    const label = () => themeToggle.setAttribute("aria-label", `Switch to ${window.PortfolioTheme.mode() === "dark" ? "light" : "dark"} theme`);
    label();
    themeToggle.addEventListener("click", () => {
      window.PortfolioTheme.toggle();
      label();
      // Restart the little icon animation.
      themeToggle.querySelectorAll(".icon").forEach((svg) => { svg.style.animation = "none"; void svg.getBoundingClientRect(); svg.style.animation = ""; });
    });
  }

  /* ---------- Installable app ---------- */
  const installButton = $("install-button");
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    installButton.hidden = true;
    if (outcome === "accepted") toast("Installing…");
  });
  window.addEventListener("appinstalled", () => {
    installButton.hidden = true;
    toast("Installed. Find it on your home screen.");
  });

  // iPhone/iPad Safari has no install prompt, so offer a one-time hint.
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS && !isStandalone()) {
    let seen = false;
    try { seen = localStorage.getItem("portfolio-ios-hint") === "1"; } catch { /* ignore */ }
    if (!seen) {
      setTimeout(() => {
        toast("Tip: tap Share, then “Add to Home Screen” to install this app", { label: "Got it", run: () => {} });
        try { localStorage.setItem("portfolio-ios-hint", "1"); } catch { /* ignore */ }
      }, 4000);
    }
  }

  /* ---------- Offline support ---------- */
  window.addEventListener("offline", () => toast("You're offline. Saved pages still work."));
  window.addEventListener("online", () => toast("Back online"));

  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    window.addEventListener("load", () => {
      const hadController = !!navigator.serviceWorker.controller;
      navigator.serviceWorker.register("sw.js").then((registration) => {
        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          worker?.addEventListener("statechange", () => {
            // A newer version finished installing while an older one controls this page.
            if (worker.state === "activated" && hadController) {
              toast("A new version is available", { label: "Refresh", run: () => window.location.reload() });
            }
          });
        });
      }).catch(() => { /* site still works without offline support */ });
    });
  }
})();
