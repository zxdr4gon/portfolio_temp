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
  name: "Syed Zainulabideen Mahdi",
  shortName: "ZAIN", // Short brand shown in the header. Set to "" to use name.
  pageTitle: "ZX — Developer Portfolio",
  description: "Explore projects, experiments, and work by me.",
  themeColor: "#0b0d10",

  // Hero section
  role: "Developer · ?Physicist · Student",
  headlineStart: "Turning ideas into",
  headlineAccent: "things that work.",
  bio: "I'm Zain, a developer who enjoys building useful tools, exploring new technologies, and solving interesting problems.",
  heroButton: "Explore my work",
  gallerySubtitle: "Projects, experiments & ideas",

  // Section headings
  projectsKicker: "01 / Portfolio",
  projectsTitle: "Things I've built",
  projectsIntro: "From small experiments to full projects, here's what I've been working on.",
  contactKicker: "02 / Contact",
  contactTitleStart: "Have an idea?",
  contactTitleAccent: "Let's connect.",
  contactText: "Interested in collaborating, discussing a project, or just connecting? My inbox is open.",
  contactButton: "Say hello",
  footerNote: "Built with curiosity.",

  // Contact and social links
  email: "zx.mahdi09@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/zxdr4gon" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/syed-zainulabideen-mahdi-2a5b80434/" },
    { label: "Instagram", url: "https://instagram.com/zx_04.09" }
    // Add more, for example:
    // { label: "YouTube", url: "https://youtube.com/@YOUR-USERNAME" }
  ],

  // Project gallery — duplicate an entry to add another project.
  projects: [
    {
      title: "Terminal Cricket",
      description: "A retro-style hand cricket game in your browser. Toss, bat, bowl, chase targets, view match summaries, and have fun!",
      category: "Featured game",
      url: "https://zxdr4gon.github.io/cricket/",
      image: "images/cterminal.png",
      imageAlt: "Screenshot of Project One",
      tags: ["Python"]
    },
    {
      title: "VectorBoard",
      description: "An online digital canvas with a multitude of different features.",
      category: "Web application",
      url: "https://zxdr4gon.github.io/vectorboard/",
      image: "images/vectorboard.png",
      imageAlt: "Screenshot of Project Two",
      tags: ["JavaScript", "HTML"]
    },
    {
      title: "Stats Site",
      description: "A site that reads data from Google Sheets and displays it. For Maine East Cricket Team.",
      category: "Personal project",
      url: "https://zxdr4gon.github.io/blue-demon-cricket/",
      image: "images/bdcricket.png",
      imageAlt: "Screenshot of Project Three",
      tags: ["HTML", "JavaScript", "CSS"]
    },
    {
      title: "AP Study Hub",
      description: "Place for study guides for the AP exams of various subjects",
      category: "Personal Project",
      url: "https://example.com/project-four",
      image: "images/apstudy.png",
      imageAlt: "Screenshot of Project Four",
      tags: ["HTML", "AI"]
    }
  ]
};
