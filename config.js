/*
  PORTFOLIO CONFIGURATION
  =======================

  START HERE
  1. Replace the sample text marked "[REPLACE]".
  2. Make sure you remove the '[REPLACE]' tag as well
  3. Choose a theme by changing selectedTheme below.
  4. Replace the sample project links and image filenames.
  5. Remove any social links you do not use.

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
  // Deep space vibe with high-contrast electric indigo & purple highlights
  cyberpunk: {
    canvas: "#0d0e15",        // Deep space night
    surface: "#181926",       // Elevated dark panel
    line: "#2e3146",          // Muted grid line
    muted: "#89b4fa",         // Soft periwinkle
    accent: "#cba6f7",        // Neon violet accent
    foreground: "#cdd6f4",    // Crisp light text
    selection: "#f5e0dc"      // Warm glow highlight
  },

  // Retro 80s synthwave / dusk sunset feel
  sunsetGlow: {
    canvas: "#181124",        // Velvet dusk sky
    surface: "#2a1b3d",       // Deep plum surface
    line: "#442852",          // Soft magenta divider
    muted: "#a885a8",         // Muted mauve
    accent: "#ff6b6b",        // Coral pink highlight
    foreground: "#f7d6e0",    // Creamy blush text
    selection: "#e056fd"      // Electric orchid selection
  },

  // Botanical / matcha tea inspired natural palette
  matchaStudio: {
    canvas: "#f4f6f0",        // Soft steamy white
    surface: "#e3e8dc",       // Creamy matcha foam
    line: "#c8d3bc",          // Sage leaf border
    muted: "#6e7e65",         // Mossy secondary text
    accent: "#3d5a36",        // Deep green tea leaves
    foreground: "#1c2819",    // Earthy black-green text
    selection: "#d2e3c8"      // Pastel leaf selection
  },

  // Italian espresso & roasted coffee bean mood
  espressoBar: {
    canvas: "#1f1a17",        // Dark roasted espresso
    surface: "#2c2522",       // Rich coffee bean
    line: "#403632",          // Warm dark border
    muted: "#a18d83",         // Cinnamon / steamed oat
    accent: "#d97736",        // Toasted terracotta highlight
    foreground: "#f5ebd9",    // Creamy foam text
    selection: "#594235"      // Coffee crema selection
  },

  // Fresh 90s editorial paper with rich ink & lavender pops
  editorialPaper: {
    canvas: "#f6f3ee",        // Off-white newsprint
    surface: "#e8e3d9",       // Recycled cardstock
    line: "#d1c7b7",          // Warm pencil rule
    muted: "#665d54",         // Sepia text
    accent: "#7c3aed",        // Electric ink violet
    foreground: "#1a1615",    // Rich black ink
    selection: "#ddd6fe"      // Soft lavender highlight
  },

  // Nordic coastal mist with frosted teal & navy
  nordicMist: {
    canvas: "#f0f4f5",        // Frosted morning mist
    surface: "#dce6e8",       // Cool pebble tone
    line: "#b8cbd0",          // Glacier line divider
    muted: "#527580",         // Slate teal text
    accent: "#0d9488",        // Deep fjord teal
    foreground: "#0f2327",    // Deep navy black
    selection: "#99f6e4"      // Ice mint selection
  },

  // Rich deep emerald with mint and sage accents
  emeraldNight: {
    canvas: "#091a13",        // Deep emerald forest shade
    surface: "#102a1e",       // Dark pine card background
    line: "#1f4735",          // Muted forest border
    muted: "#6b9e85",         // Soft sage text
    accent: "#34d399",        // Bright mint highlight
    foreground: "#e6f4ed",    // Pale frosted green text
    selection: "#134e35"      // Emerald glow selection
  },

  // Regal, luxurious dark gold and champagne
  regalGold: {
    canvas: "#14120e",        // Deep obsidian canvas
    surface: "#211d16",       // Dark bronze surface
    line: "#383124",          // Warm metallic border
    muted: "#a39379",         // Antique gold text
    accent: "#fbbf24",        // Radiant polished gold
    foreground: "#f7f3e8",    // Soft champagne text
    selection: "#45381d"      // Rich amber selection
  },

  // Elegant, moody mauve and velvet rose
  velvetRose: {
    canvas: "#1c1417",        // Deep plum-black
    surface: "#2c1e23",       // Muted rosewood surface
    line: "#452d36",          // Dusty mauve line
    muted: "#a8818f",         // Soft rose text
    accent: "#f472b6",        // Electric pink highlight
    foreground: "#fce7f1",    // Pale blush text
    selection: "#502837"      // Deep berry selection
  },

  // Soft cream with romantic cherry blossom pinks
  sakuraBlossom: {
    canvas: "#fdf8f9",        // Soft porcelain background
    surface: "#f8e9ed",       // Soft cherry blossom card
    line: "#edd0d8",          // Gentle rose border
    muted: "#a0717e",         // Soft plum text
    accent: "#db2777",        // Vivid raspberry accent
    foreground: "#2a151b",    // Deep plum-black text
    selection: "#fbcfe8"      // Pastel pink selection
  },
  
  // CHANGE HEX VALUES HERE TO USE CUSTOM COLORS
  custom: {
    canvas: "#fbf8f3",
    surface: "#f3ede3",
    line: "#e2d7c5",
    muted: "#8c7e6c",
    accent: "#d97706",
    foreground: "#292524",
    selection: "#fde68a"
  }
};

// To use CUSTOM, change the hex codes above in the 'custom' list and set below line to "custom"
const selectedTheme = "emeraldNight"; // CHANGE THIS to: "nordicMist", "sakuraBlossom", "cyberpunk", or "regalGold".

const customTheme = null; // Ignore line
const chosenTheme =
  customTheme || PORTFOLIO_THEME_PRESETS[selectedTheme] || PORTFOLIO_THEME_PRESETS.warm;

window.PORTFOLIO_CONFIG = {
  /* ------------------------------------------------------------------------
     2. PERSONAL INFORMATION
     Replace the sample values with your own details.
     shortName is the small brand shown in the header. Use "" to use your name.
  ------------------------------------------------------------------------ */
  name: "[REPLACE] Your Name",
  shortName: "[REPLACE] Nickname",
  pageTitle: "[REPLACE] Your Name — Portfolio",
  description: "[REPLACE] A short description of your portfolio.",

  /* ------------------------------------------------------------------------
     3. HERO SECTION
     This is the first text visitors see on your portfolio.
  ------------------------------------------------------------------------ */
  role: "[REPLACE] Developer · Designer · Creator",
  headlineStart: "Turning ideas into",
  headlineAccent: "things that work.",
  bio: "[REPLACE] Write 1–3 sentences about yourself or what you enjoy building.",
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
  contactText: "[REPLACE] Add a short invitation for visitors to get in touch.",
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
  email: "[REPLACE] youremail@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/YOUR-USERNAME" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR-PROFILE" },
    { label: "Instagram", url: "https://www.instagram.com/YOUR-HANDLE" }
    // To add another social, create an entry
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
      title: "[REPLACE] Python Data Project",
      description: "[REPLACE] Describe the question this project explores and what you learned.",
      category: "Data project",
      url: "https://github.com/YOUR-USERNAME/YOUR-DATA-PROJECT",
      image: "images/[REPLACE]-data-project.png",
      imageAlt: "[REPLACE] Screenshot showing the data project",
      tags: ["Python", "Data"]
    },
    {
      // EXAMPLE 2: Website or web application
      title: "[REPLACE] Web Application",
      description: "[REPLACE] Explain what the app does and who it helps.",
      category: "Web application",
      url: "https://github.com/YOUR-USERNAME/YOUR-WEB-APP",
      image: "images/[REPLACE]-web-app.png",
      imageAlt: "[REPLACE] Screenshot of the web application",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      // EXAMPLE 3: Game or interactive project
      title: "[REPLACE] Small Game",
      description: "[REPLACE] Describe the game and one interesting feature you built.",
      category: "Game",
      url: "https://github.com/YOUR-USERNAME/YOUR-GAME",
      image: "images/[REPLACE]-game.png",
      imageAlt: "[REPLACE] Screenshot of the game",
      tags: ["Game", "JavaScript"]
    },
    {
      // EXAMPLE 4: Command-line tool or library (a live demo is not required)
      title: "[REPLACE] Developer Tool",
      description: "[REPLACE] Explain what the tool automates or makes easier.",
      category: "Developer tool",
      url: "https://github.com/YOUR-USERNAME/YOUR-TOOL",
      image: "images/[REPLACE]-tool.png",
      imageAlt: "[REPLACE] Screenshot or illustration of the tool",
      tags: ["Python", "CLI"]
    }
    // COPY-PASTE an entry here to showcase more projects
    // MAKE SURE YOU REMEMBER A COMMA (,) AFTER EACH ENTRY
  ]
};
