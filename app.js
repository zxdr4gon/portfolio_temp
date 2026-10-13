/* Portfolio renderer. All editable content and theme settings live in config.js. */
(() => {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;
  if (!config || typeof config !== "object") {
    document.body.innerHTML = '<main class="p-8"><h1>Portfolio configuration not found</h1><p>Place config.js beside index.html.</p></main>';
    return;
  }

  const $ = (id) => document.getElementById(id);
  const text = (value, fallback = "") =>
    typeof value === "string" && value.trim() ? value.trim() : fallback;
  const make = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  };
  const validHex = (value) => typeof value === "string" && /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
  const themeKeys = ["canvas", "surface", "line", "muted", "accent", "foreground", "selection"];
  const theme = config.theme;

  if (!theme || !themeKeys.every((key) => validHex(theme[key]))) {
    document.body.innerHTML = '<main class="p-8"><h1>Invalid theme settings</h1><p>Check that all seven theme colors in config.js are valid hex colors.</p></main>';
    return;
  }

  const root = document.documentElement;
  themeKeys.forEach((key) => root.style.setProperty(`--color-${key}`, theme[key]));
  const hex = theme.canvas.replace("#", "");
  const expanded = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  const rgb = [0, 2, 4].map((i) => parseInt(expanded.slice(i, i + 2), 16));
  const luminance = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
  root.style.colorScheme = luminance > 0.45 ? "light" : "dark";

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
  const emailValue = text(config.email);
  const email = emailValue && !/(you@example\.com|\[REPLACE\]|your@email)/i.test(emailValue) ? emailValue : "";
  const name = text(config.name, "Your Name").replace(/^\[REPLACE\]\s*/i, "");
  const brand = text(config.shortName, name).replace(/^\[REPLACE\]\s*/i, "") || name;
  const socials = Array.isArray(config.socials) ? config.socials.filter((item) => item && text(item.label) && safeUrl(item.url)) : [];

  document.title = text(config.pageTitle, `${name} — Portfolio`).replace(/^\[REPLACE\]\s*/i, "");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.content = text(config.description, `Portfolio of ${name}`).replace(/^\[REPLACE\]\s*/i, "");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.content = theme.canvas;

  $("brand-name").textContent = brand;
  $("brand-mark").textContent = (brand.match(/[A-Za-z0-9]/)?.[0] || "Y").toUpperCase() + ".";
  $("brand-link").setAttribute("aria-label", `${name}, home`);

  const navSocials = $("nav-socials");
  navSocials.replaceChildren();
  socials.slice(0, 3).forEach((social) => {
    const link = make("a", "focus-ring rounded-sm text-sm text-muted transition hover:text-foreground", `${text(social.label)} ↗`);
    link.href = safeUrl(social.url);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    navSocials.append(link);
  });

  $("header-contact").href = email ? `mailto:${email}` : "#contact";
  $("eyebrow").textContent = text(config.role, "Developer · Designer · Creator").replace(/^\[REPLACE\]\s*/i, "");
  $("hero-title").replaceChildren(
    document.createTextNode(text(config.headlineStart, "Building things with")),
    make("span", "text-muted", ` ${text(config.headlineAccent, "purpose.")}`)
  );
  $("bio").textContent = text(config.bio, "I enjoy exploring ideas and turning them into useful projects.").replace(/^\[REPLACE\]\s*/i, "");
  $("hero-button-text").textContent = text(config.heroButton, "Explore selected work");
  $("gallery-subtitle").textContent = text(config.gallerySubtitle, "Projects, experiments & ideas");
  $("projects-kicker").textContent = text(config.projectsKicker, "01 / Portfolio");
  $("projects-title").textContent = text(config.projectsTitle, "Selected projects");
  $("projects-intro").textContent = text(config.projectsIntro, "A few things I've built, explored, and learned from.");

  $("about-kicker").textContent = text(config.aboutKicker, "02 / About");
  $("about-title").textContent = text(config.aboutTitle, "A little about me.");
  $("about-copy").textContent = text(config.aboutText, "I enjoy learning by building, experimenting, and sharing what I discover.").replace(/^\[REPLACE\]\s*/i, "");
  const aboutLinks = $("about-links");
  aboutLinks.replaceChildren();
  (Array.isArray(config.aboutLinks) ? config.aboutLinks : []).forEach((item) => {
    const href = item && safeUrl(item.url);
    if (!href || !text(item.label)) return;
    const link = make("a", "focus-ring rounded-sm text-muted underline decoration-line underline-offset-4 transition hover:text-accent", `${text(item.label)} ↗`);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    aboutLinks.append(link);
  });

  $("contact-kicker").textContent = text(config.contactKicker, "03 / Contact");
  $("contact-title").textContent = text(config.contactTitle, "Let's make something useful.");
  $("contact-copy").textContent = text(config.contactText, "Have a question, an idea, or a project in mind? Feel free to get in touch.");
  $("contact-button").href = email ? `mailto:${email}` : "#home";
  $("contact-button").replaceChildren(document.createTextNode(text(config.contactButton, "Get in touch") + " "), make("span", "", "↗"));
  $("contact-button").lastElementChild.setAttribute("aria-hidden", "true");
  $("copyright").textContent = `© ${new Date().getFullYear()} ${name}. ${text(config.footerNote, "Made with care.")}`;

  const footer = $("footer-socials");
  footer.replaceChildren();
  socials.forEach((social) => {
    const link = make("a", "focus-ring rounded-sm transition hover:text-foreground", `${text(social.label)} ↗`);
    link.href = safeUrl(social.url);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    footer.append(link);
  });
  if (email) {
    const link = make("a", "focus-ring rounded-sm transition hover:text-foreground", "Email ↗");
    link.href = `mailto:${email}`;
    footer.append(link);
  }

  const grid = $("project-grid");
  grid.replaceChildren();
  const projects = Array.isArray(config.projects) ? config.projects : [];
  const validProjects = projects.filter((project) => project && text(project.title) && !/^\[REPLACE\]/i.test(text(project.title)));
  $("no-projects").classList.toggle("hidden", validProjects.length > 0);

  const placeholder = (title) => {
    const color = (value) => value.slice(1).replace(/[^0-9a-f]/gi, "");
    return `https://placehold.co/960x600/${color(theme.surface)}/${color(theme.accent)}?text=${encodeURIComponent(title)}`;
  };

  validProjects.forEach((project) => {
    const article = make("article", "project-card group overflow-hidden rounded-2xl border border-line bg-surface/60");
    const imageWrap = make("div", "relative aspect-[16/10] overflow-hidden border-b border-line bg-surface");
    const img = make("img", "project-image h-full w-full object-cover");
    const imagePath = text(project.image);
    img.src = imagePath && !imagePath.includes("[REPLACE]") ? imagePath : placeholder(text(project.title));
    img.alt = text(project.imageAlt, `Screenshot of ${text(project.title)}`);
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 960;
    img.height = 600;
    img.onerror = () => {
      img.onerror = null;
      img.src = placeholder(text(project.title));
    };
    imageWrap.append(img);

    const category = make("span", "absolute left-4 top-4 rounded-full border border-line bg-canvas/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.13em] text-muted backdrop-blur", text(project.category, "Project"));
    imageWrap.append(category);
    article.append(imageWrap);

    const content = make("div", "p-5 sm:p-6");
    const titleRow = make("div", "flex items-start justify-between gap-4");
    titleRow.append(make("h3", "font-display text-xl font-semibold tracking-tight", text(project.title)));
    titleRow.append(make("span", "pt-1 text-sm text-muted transition group-hover:text-accent", "↗"));
    content.append(titleRow);
    content.append(make("p", "mt-3 min-h-[3.5rem] text-sm leading-6 text-muted", text(project.description, "Project details coming soon.").replace(/^\[REPLACE\]\s*/i, "")));

    const tags = make("ul", "mt-5 flex flex-wrap gap-2");
    (Array.isArray(project.tags) ? project.tags : []).filter(Boolean).forEach((tag) => {
      tags.append(make("li", "rounded-md border border-line px-2.5 py-1 text-[11px] font-medium text-muted", String(tag).replace(/^#/, "")));
    });
    if (tags.childElementCount) content.append(tags);

    const actions = make("div", "mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4");
    const demoUrl = safeUrl(project.url);
    const sourceUrl = safeUrl(project.sourceUrl);
    const addAction = (label, href, primary = false) => {
      if (!href) return;
      const link = make("a", primary
        ? "focus-ring rounded-sm text-sm font-semibold text-accent transition hover:brightness-125"
        : "focus-ring rounded-sm text-sm font-medium text-muted transition hover:text-foreground", `${label} ↗`);
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      actions.append(link);
    };
    addAction("Live preview", demoUrl, true);
    addAction("Source code", sourceUrl || (!demoUrl ? "" : ""), false);
    if (!demoUrl && !sourceUrl) {
      const note = make("span", "text-xs text-muted", "Add a project link in config.js");
      actions.append(note);
    }
    if (actions.childElementCount) content.append(actions);
    article.append(content);
    grid.append(article);
  });
})();