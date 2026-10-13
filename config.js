/*
  PORTFOLIO CONFIGURATION
  =======================
  Personalize the site by editing this file and the images/ folder.
  You should not need to edit index.html or app.js.

  QUICK START
  1. Replace the personal details and sample social URLs.
  2. Pick a theme by setting selectedTheme.
  3. Replace or remove the example projects.
  4. Add screenshots to images/ and update each image path.
*/

const PORTFOLIO_THEME_PRESETS = {
  // Restrained dark graphite with a warm gold accent (default)
  graphiteGold: {
    canvas: "#11110f", surface: "#191916", line: "#34332c",
    muted: "#aaa69a", accent: "#e2bd70", foreground: "#f4f0e7",
    selection: "#574522"
  },
  // Cool, understated blue-gray
  slateBlue: {
    canvas: "#111820", surface: "#19232d", line: "#30404e",
    muted: "#a0b0be", accent: "#8db8df", foreground: "#eef4f8",
    selection: "#28445b"
  },
  // Dark evergreen with a quiet mint accent
  evergreen: {
    canvas: "#0d1713", surface: "#15231c", line: "#2c4034",
    muted: "#a2b7aa", accent: "#83d3a7", foreground: "#eff7f1",
    selection: "#294c39"
  },
  // Warm paper and ink
  paper: {
    canvas: "#f7f5f0", surface: "#eeebe3", line: "#d8d2c5",
    muted: "#68645b", accent: "#8a5b26", foreground: "#25241f",
    selection: "#e4d1ac"
  },
  // Muted violet on deep charcoal
  violet: {
    canvas: "#14131a", surface: "#201e29", line: "#393546",
    muted: "#b0a9c1", accent: "#c0a6f7", foreground: "#f4f0fb",
    selection: "#43355f"
  },
  // Edit these seven values to build your own palette.
  custom: {
    canvas: "#11110f", surface: "#191916", line: "#34332c",
    muted: "#aaa69a", accent: "#e2bd70", foreground: "#f4f0e7",
    selection: "#574522"
  }
};

// Available: "graphiteGold", "slateBlue", "evergreen", "paper", "violet", "custom"
const selectedTheme = "graphiteGold";

// Leave null to use the selected preset. To override it, set this to an object
// containing all seven color keys: canvas, surface, line, muted, accent,
// foreground, and selection.
const customTheme = null;
const chosenTheme = customTheme || PORTFOLIO_THEME_PRESETS[selectedTheme] || PORTFOLIO_THEME_PRESETS.graphiteGold;

window.PORTFOLIO_CONFIG = {
  // PERSONAL DETAILS
  name: "[REPLACE] Your Name",
  shortName: "[REPLACE] Your Name",
  pageTitle: "[REPLACE] Your Name — Portfolio",
  description: "[REPLACE] A concise description of your work and interests.",

  // HERO
  role: "[REPLACE] Developer · Designer · Student",
  headlineStart: "Building things with",
  headlineAccent: "purpose.",
  bio: "[REPLACE] In two short sentences, describe what you build, what interests you, and what you are learning.",
  heroButton: "Explore selected work",
  gallerySubtitle: "Projects, experiments & ideas",

  // PROJECT SECTION
  projectsKicker: "01 / Portfolio",
  projectsTitle: "Selected projects",
  projectsIntro: "A few things I've built, explored, and learned from.",

  // ABOUT SECTION
  aboutKicker: "02 / About",
  aboutTitle: "A little about me.",
  aboutText: "[REPLACE] Share a little context about your interests, how you approach building things, or what you hope to explore next.",
  aboutLinks: [
    // Optional links shown below the about text:
    // { label: "GitHub", url: "https://github.com/YOUR-USERNAME" }
  ],

  // CONTACT
  contactKicker: "03 / Contact",
  contactTitle: "Let's make something useful.",
  contactText: "Have a question, an idea, or a project in mind? Feel free to get in touch.",
  contactButton: "Get in touch",
  footerNote: "Made with care.",

  // THEME
  theme: chosenTheme,

  // CONTACT AND SOCIAL LINKS
  email: "you@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/YOUR-USERNAME" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR-PROFILE" }
    // Add or remove entries as needed.
    // { label: "Instagram", url: "https://www.instagram.com/YOUR-HANDLE" }
  ],

  /*
    PROJECTS
    Required: title
    Recommended: description, category, image, imageAlt, tags
    Optional: url (live demo), sourceUrl (repository)
    If you only have one link, set url to the live project or repository.
    Set image to "" to use a generated placeholder while developing.
  */
  projects: [
    {
      title: "[REPLACE] Project One",
      description: "[REPLACE] Explain what it does, who it helps, and one useful feature.",
      category: "Web application",
      url: "https://github.com/YOUR-USERNAME/YOUR-PROJECT",
      sourceUrl: "",
      image: "",
      imageAlt: "Screenshot of Project One",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "[REPLACE] Project Two",
      description: "[REPLACE] Describe the problem you explored and what you built to address it.",
      category: "Tool",
      url: "",
      sourceUrl: "https://github.com/YOUR-USERNAME/YOUR-PROJECT",
      image: "",
      imageAlt: "Screenshot of Project Two",
      tags: ["Python"]
    },
    {
      title: "[REPLACE] Project Three",
      description: "[REPLACE] Highlight a feature or technical decision that makes this project interesting.",
      category: "Experiment",
      url: "",
      sourceUrl: "https://github.com/YOUR-USERNAME/YOUR-PROJECT",
      image: "",
      imageAlt: "Screenshot of Project Three",
      tags: ["Research", "Development"]
    }
  ]
};
