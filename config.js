/*
  PORTFOLIO CONFIGURATION
  =======================

  START HERE
  1. Replace the sample text marked "REPLACE".
  2. Choose a theme by changing selectedTheme below.
  3. Replace the sample project links and image filenames.
  4. Remove any social links you do not use.

  You should not need to edit index.html or app.js to personalize the site.
  Keep the setting names below unchanged unless you also update app.js.
*/

/* --------------------------------------------------------------------------
   1. THEME PRESETS
   --------------------------------------------------------------------------
   Choose one preset using selectedTheme below:
   "minimal", "ocean", "forest", or "warm".

   To create your own theme instead, set customTheme to an object containing
   ALL seven colors shown in the examples. Leave it as null to use a preset.
*/
const PORTFOLIO_THEME_PRESETS = {
  minimal: {
    canvas: "#f5f5f4",       // Main page background
    surface: "#e7e5e4",      // Cards and image backgrounds
    line: "#d6d3d1",         // Borders and dividers
    muted: "#78716c",        // Secondary text
    accent: "#57534e",       // Highlight color
    foreground: "#1c1917",   // Main text
    selection: "#d6d3d1"     // Text selection highlight
  },
  ocean: {
    canvas: "#eff6ff",
    surface: "#dbeafe",
    line: "#bfdbfe",
    muted: "#526985",
    accent: "#2563eb",
    foreground: "#172554",
    selection: "#bfdbfe"
  },
  forest: {
    canvas: "#f0f5ef",
    surface: "#dfeadd",
    line: "#c4d6c0",
    muted: "#60745e",
    accent: "#34734a",
    foreground: "#1e3323",
    selection: "#c4d6c0"
  },
  warm: {
    canvas: "#fbf8f3",
    surface: "#f3ede3",
    line: "#e2d7c5",
    muted: "#8c7e6c",
    accent: "#d97706",
    foreground: "#292524",
    selection: "#fde68a"
  }
};

// CHANGE THIS to: "minimal", "ocean", "forest", or "warm".
const selectedTheme = "warm";

// ADVANCED (optional): replace null with your own object containing all seven
// color keys: canvas, surface, line, muted, accent, foreground, selection.
// Example: { canvas: "#ffffff", surface: "#f4f4f5", line: "#e4e4e7",
//            muted: "#71717a", accent: "#2563eb", foreground: "#18181b",
//            selection: "#bfdbfe" }
const customTheme = null;
const chosenTheme =
  customTheme || PORTFOLIO_THEME_PRESETS[selectedTheme] || PORTFOLIO_THEME_PRESETS.warm;

window.PORTFOLIO_CONFIG = {
  /* ------------------------------------------------------------------------
     2. PERSONAL INFORMATION
     Replace the sample values with your own details.
     shortName is the small brand shown in the header. Use "" to use your name.
  ------------------------------------------------------------------------ */
  name: "REPLACE: Your Name",
  shortName: "YN",
  pageTitle: "REPLACE: Your Name — Portfolio",
  description: "REPLACE: A short description of your portfolio.",

  /* ------------------------------------------------------------------------
     3. HERO SECTION
     This is the first text visitors see on your portfolio.
  ------------------------------------------------------------------------ */
  role: "REPLACE: Developer · Designer · Creator",
  headlineStart: "Turning ideas into",
  headlineAccent: "things that work.",
  bio: "REPLACE: Write 1–3 sentences about yourself and what you enjoy building.",
  heroButton: "Explore my work",
  gallerySubtitle: "Projects, experiments & ideas",

  /* ------------------------------------------------------------------------
     4. SECTION TEXT
     These are the headings and short descriptions for each section.
  ------------------------------------------------------------------------ */
  projectsKicker: "01 / Projects",
  projectsTitle: "Things I've built",
  projectsIntro: "A selection of projects and experiments I've worked on.",
  contactKicker: "02 / Contact",
  contactTitleStart: "Have an idea?",
  contactTitleAccent: "Let's connect.",
  contactText: "REPLACE: Add a short invitation for visitors to get in touch.",
  contactButton: "Say hello",
  footerNote: "Built with curiosity.",

  /* ------------------------------------------------------------------------
     5. THEME
     Usually, only change selectedTheme near the top of this file.
     To use your own colors, fill in customTheme instead.
  ------------------------------------------------------------------------ */
  theme: chosenTheme,

  /* ------------------------------------------------------------------------
     6. CONTACT AND SOCIAL LINKS
     Replace the example email and URLs. Remove any social entries you don't
     use. Use full URLs beginning with https://.
  ------------------------------------------------------------------------ */
  email: "REPLACE: your.email@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/YOUR-USERNAME" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR-PROFILE" },
    { label: "Instagram", url: "https://www.instagram.com/YOUR-HANDLE" }
    // Example: { label: "YouTube", url: "https://www.youtube.com/@YOUR-USERNAME" }
  ],

  /* ------------------------------------------------------------------------
     7. PROJECT GALLERY
     Replace these sample projects with your own. Each entry supports:
     - title: project name (required)
     - description: short explanation shown under the title
     - category: small label shown on the project image
     - url: full URL to the live project or its repository
     - image: path to a screenshot in images/, or "" for an automatic placeholder
     - imageAlt: short description of the screenshot for accessibility
     - tags: array of technologies or topics

     To add a project, copy one complete object (including its braces and
     commas), paste it into this array, and replace its values.
     IMPORTANT: All projects below are examples. Replace or remove them before
     publishing so you don't accidentally show sample content.
  ------------------------------------------------------------------------ */
  projects: [
    {
      // EXAMPLE 1: Python or data-analysis project
      title: "REPLACE: Python Data Project",
      description: "REPLACE: Describe the question this project explores and what you learned.",
      category: "Data project",
      url: "https://github.com/YOUR-USERNAME/YOUR-DATA-PROJECT",
      image: "images/REPLACE-data-project.png",
      imageAlt: "REPLACE: Screenshot showing the data project",
      tags: ["Python", "Data"]
    },
    {
      // EXAMPLE 2: Website or web application
      title: "REPLACE: Web Application",
      description: "REPLACE: Explain what the app does and who it helps.",
      category: "Web application",
      url: "https://github.com/YOUR-USERNAME/YOUR-WEB-APP",
      image: "images/REPLACE-web-app.png",
      imageAlt: "REPLACE: Screenshot of the web application",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      // EXAMPLE 3: Game or interactive project
      title: "REPLACE: Small Game",
      description: "REPLACE: Describe the game and one interesting feature you built.",
      category: "Game",
      url: "https://github.com/YOUR-USERNAME/YOUR-GAME",
      image: "images/REPLACE-game.png",
      imageAlt: "REPLACE: Screenshot of the game",
      tags: ["Game", "JavaScript"]
    },
    {
      // EXAMPLE 4: Command-line tool or library (a live demo is not required)
      title: "REPLACE: Developer Tool",
      description: "REPLACE: Explain what the tool automates or makes easier.",
      category: "Developer tool",
      url: "https://github.com/YOUR-USERNAME/YOUR-TOOL",
      image: "images/REPLACE-tool.png",
      imageAlt: "REPLACE: Screenshot or illustration of the tool",
      tags: ["Python", "CLI"]
    }
  ]
};
