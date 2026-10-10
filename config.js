/*
  PORTFOLIO CONFIGURATION
  =======================
  Edit this file to personalize your portfolio. You should not need to edit index.html.

  Images:
  - Put screenshots in the images/ folder and use paths such as "images/my-project.png".
  - You can also use a full image URL.
  - To use a placeholder, set image to an empty string; a placeholder is generated automatically.

  Projects:
  - Add as many project objects as you like.
  - To hide a project, remove it from this array.
  - Use a full live URL in url. For projects without a live demo, you can link to the GitHub repo.
*/

window.PORTFOLIO_CONFIG = {
  // Identity and browser tab
  name: "Your Name",
  shortName: "YN", // Short brand shown in the header. Set to "" to use name.
  pageTitle: "YN — My Portfolio",
  description: "Explore projects, experiments, and work by me.",
  themeColor: "#0b0d10",

  // Theme — change these values to restyle the whole portfolio.
  // Use hex colors (for example, "#5498FF").
  ttheme: {
  canvas: "#0d021a",        // Deep night purple
  surface: "#17082a",       // Dark violet surface
  line: "#311454",          // Muted plum border
  muted: "#a482be",         // Soft lavender secondary text
  accent: "#ff2a85",        // Electric hot pink
  foreground: "#fcf7ff",    // Crisp bright white-violet
  selection: "#00f5d4"      // Neon turquoise focus/selection
},

  // Hero section
  role: "Role · Role · Role",
  headlineStart: "Turning ideas into",
  headlineAccent: "things that work.",
  bio: "MAKE UP YOUR BIO HERE",
  heroButton: "Explore my work",
  gallerySubtitle: "Projects, experiments & ideas",

  // Section headings
  projectsKicker: "01 / Projects",
  projectsTitle: "Things I've built",
  projectsIntro: "From small experiments to full projects, here's what I've been working on.",
  contactKicker: "02 / Contact",
  contactTitleStart: "Have an idea?",
  contactTitleAccent: "Let's connect.",
  contactText: "Interested in collaborating, discussing a project, or just connecting? My inbox is open.",
  contactButton: "Say hello",
  footerNote: "Built with curiosity.",

  // Contact and social links
  email: "your.email@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile/" },
    { label: "Instagram", url: "https://instagram.com/your-handle" }
    // Add more, for example:
    // { label: "YouTube", url: "https://youtube.com/@YOUR-USERNAME" }
  ],

  // Project gallery — duplicate an entry to add another project.
  projects: [
    {
      title: "Project One",
      description: "Description of your first project goes here. Explain what it does and the tech stack used.",
      category: "Featured game",
      url: "https://github.com/your-username/project-one (or) [LINK TO PROJECT]",
      image: "images/project-one.png",
      imageAlt: "Screenshot of Project One",
      tags: ["Python"]
    },
    {
      title: "Project Two",
      description: "Description of your second project goes here.",
      category: "Web application",
      url: "https://github.com/your-username/project-two",
      image: "images/project-two.png",
      imageAlt: "Screenshot of Project Two",
      tags: ["JavaScript", "HTML"]
    },
    {
      title: "Project Three",
      description: "Description of your third project goes here.",
      category: "Personal project",
      url: "https://github.com/your-username/project-three",
      image: "images/project-three.png",
      imageAlt: "Screenshot of Project Three",
      tags: ["HTML", "JavaScript", "CSS"]
    },
    {
      title: "Project Four",
      description: "Description of your fourth project goes here.",
      category: "Personal Project",
      url: "https://github.com/your-username/project-four",
      image: "images/project-four.png",
      imageAlt: "Screenshot of Project Four",
      tags: ["HTML", "AI"]
    }
  ]
};
