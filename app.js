/* Portfolio renderer. Content is controlled by config.js. */
(() => {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;

  if (!config || typeof config !== "object") {
    document.body.innerHTML = `
      <main style="max-width:700px;margin:4rem auto;padding:1.5rem;font-family:system-ui;color:white;background:#0b0d10">
        <h1>Portfolio configuration not found</h1>
        <p>Make sure <code>config.js</code> is in the same folder as <code>index.html</code>.</p>
      </main>`;
    return;
  }

  const $ = (id) => document.getElementById(id);
  const safeText = (value, fallback = "") =>
    typeof value === "string" && value.trim() ? value.trim() : fallback;
  const safeUrl = (value) => {
    if (typeof value !== "string") return "#";
    try {
      const parsed = new URL(value, window.location.href);
      return ["http:", "https:", "mailto:"].includes(parsed.protocol) ? parsed.href : "#";
    } catch {
      return "#";
    }
  };

  const email = safeText(config.email);
  const name = safeText(config.name, "Your Name");
  const brand = safeText(config.shortName, name);

  document.title = safeText(config.pageTitle, `${name} — Developer Portfolio`);
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = safeText(config.description, `Portfolio of ${name}`);
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = safeText(config.themeColor, "#0b0d10");

  $("brand-name").textContent = brand;
  $("brand-link").setAttribute("aria-label", `${name}, home`);
  $("nav-github").href = safeUrl((config.socials || []).find(s => /github/i.test(s.label))?.url || "https://github.com");
  $("nav-linkedin").href = safeUrl((config.socials || []).find(s => /linkedin/i.test(s.label))?.url || "https://linkedin.com");
  $("nav-instagram").href = safeUrl((config.socials || []).find(s => /instagram/i.test(s.label))?.url || "https://instagram.com");
  $("header-contact").href = email ? `mailto:${email}` : "#contact-title";

  $("eyebrow").textContent = safeText(config.role, "Developer · Builder · Problem Solver");
  $("hero-title").replaceChildren();
  $("hero-title").append(document.createTextNode(safeText(config.headlineStart, "Turning ideas into")));
  const headlineAccent = document.createElement("span");
  headlineAccent.className = "text-muted";
  headlineAccent.textContent = ` ${safeText(config.headlineAccent, "things that work.")}`;
  $("hero-title").append(headlineAccent);
  $("bio").textContent = safeText(config.bio, `I'm ${name}, and I enjoy building useful things.`);
  $("hero-button-text").textContent = safeText(config.heroButton, "Explore my work");
  $("gallery-subtitle").textContent = safeText(config.gallerySubtitle, "Projects, experiments & ideas");
  $("projects-kicker").textContent = safeText(config.projectsKicker, "01 / Portfolio");
  $("projects-title").replaceChildren(document.createTextNode(safeText(config.projectsTitle, "Things I've built")));
  const titleDot = document.createElement("span");
  titleDot.className = "text-muted";
  titleDot.textContent = ".";
  $("projects-title").append(titleDot);
  $("projects-intro").textContent = safeText(config.projectsIntro, "A selection of projects and experiments.");

  $("contact-kicker").textContent = safeText(config.contactKicker, "02 / Contact");
  $("contact-title").replaceChildren(document.createTextNode(safeText(config.contactTitleStart, "Have an idea?")));
  const contactAccent = document.createElement("span");
  contactAccent.className = "text-muted";
  contactAccent.textContent = ` ${safeText(config.contactTitleAccent, "Let's connect.")}`;
  $("contact-title").append(contactAccent);
  $("contact-copy").textContent = safeText(config.contactText, "Feel free to get in touch.");
  $("contact-button").href = email ? `mailto:${email}` : "#contact-title";
  const buttonText = safeText(config.contactButton, "Say hello");
  $("contact-button").replaceChildren(document.createTextNode(buttonText + " "));
  const buttonArrow = document.createElement("span");
  buttonArrow.setAttribute("aria-hidden", "true");
  buttonArrow.textContent = "↗";
  $("contact-button").append(buttonArrow);

  $("copyright").textContent = `© ${new Date().getFullYear()} ${name}. ${safeText(config.footerNote, "Built with curiosity.")}`;

  const socialsContainer = $("footer-socials");
  socialsContainer.replaceChildren();
  (Array.isArray(config.socials) ? config.socials : []).forEach((social) => {
    if (!social || !safeText(social.label) || !safeText(social.url)) return;
    const link = document.createElement("a");
    link.textContent = `${social.label} ↗`;
    link.href = safeUrl(social.url);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "transition hover:text-white";
    socialsContainer.append(link);
  });
  if (email) {
    const mail = document.createElement("a");
    mail.textContent = "Email ↗";
    mail.href = `mailto:${email}`;
    mail.className = "transition hover:text-white";
    socialsContainer.append(mail);
  }

  const grid = $("project-grid");
  grid.replaceChildren();
  const projects = Array.isArray(config.projects) ? config.projects : [];
  $("no-projects").classList.toggle("hidden", projects.length > 0);

  projects.forEach((project, index) => {
    if (!project || !safeText(project.title)) return;

    const cardLink = document.createElement("a");
    cardLink.className = "project-card group block rounded-2xl focus-visible:outline-none";
    cardLink.href = safeUrl(project.url);
    cardLink.target = "_blank";
    cardLink.rel = "noopener noreferrer";
    cardLink.setAttribute("aria-label", `Open ${project.title} in a new tab`);

    const imageFrame = document.createElement("div");
    imageFrame.className = "relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface";

    const img = document.createElement("img");
    const imageUrl = safeText(project.image);
    img.src = imageUrl || `https://placehold.co/960x600/151a21/a3e635?text=${encodeURIComponent(project.title)}`;
    img.alt = safeText(project.imageAlt, `Screenshot of ${project.title}`);
    img.width = 960;
    img.height = 600;
    img.loading = "lazy";
    img.className = "h-full w-full object-cover";
    img.onerror = () => {
      img.onerror = null;
      img.src = `https://placehold.co/960x600/151a21/a3e635?text=${encodeURIComponent(project.title)}`;
    };
    imageFrame.append(img);

    const overlay = document.createElement("div");
    overlay.className = "project-overlay absolute inset-0 flex flex-col justify-end bg-black/30 p-6 sm:p-8";
    overlay.setAttribute("aria-hidden", "true");

    const category = document.createElement("span");
    category.className = "mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent";
    category.textContent = safeText(project.category, "Project");
    overlay.append(category);

    const overlayTitle = document.createElement("span");
    overlayTitle.className = "text-2xl font-semibold tracking-tight sm:text-3xl";
    overlayTitle.textContent = project.title;
    overlay.append(overlayTitle);

    const tags = document.createElement("div");
    tags.className = "mt-4 flex flex-wrap gap-2";
    (Array.isArray(project.tags) ? project.tags : []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs";
      chip.textContent = `#${String(tag).replace(/^#/, "")}`;
      tags.append(chip);
    });
    overlay.append(tags);

    const view = document.createElement("span");
    view.className = "mt-5 text-sm font-medium text-white";
    view.textContent = "View project ↗";
    overlay.append(view);
    imageFrame.append(overlay);

    const cardInfo = document.createElement("div");
    cardInfo.className = "flex items-start justify-between gap-4 px-1 pt-4";
    const textWrap = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "font-semibold transition group-hover:text-accent";
    title.textContent = project.title;
    const description = document.createElement("p");
    description.className = "mt-1 text-sm text-muted";
    description.textContent = safeText(project.description, "Explore this project.");
    textWrap.append(title, description);
    const arrow = document.createElement("span");
    arrow.className = "mt-1 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    cardInfo.append(textWrap, arrow);

    cardLink.append(imageFrame, cardInfo);
    const article = document.createElement("article");
    article.append(cardLink);
    grid.append(article);
  });
})();
