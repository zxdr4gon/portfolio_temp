# Developer Portfolio Template

A beginner-friendly, static portfolio template built with HTML, JavaScript, and Tailwind CSS via CDN. There is **no build step or package installation**. Customize your site in `config.js`, preview it locally, and publish it with GitHub Pages.

> **Example site:** [View an example portfolio](https://zxdr4gon.github.io/portfolio/)

## Quick start

1. **Get a copy** of this repository by forking it, using the template option.
2. **Open `config.js`.** Replace the sample values marked `[REPLACE]` and remove the marker text.
3. **Choose a theme.** Set `selectedTheme` to `"minimal"`, `"ocean"`, `"forest"`, `"warm"`, or `"custom"`. [Takes 1-2 minutes for the theme to update]
4. **Add your projects.** Replace the example project titles, descriptions, links, and image paths. Remove any examples you don't want to show.
5. **Preview locally.** Open `index.html` in your browser. An internet connection is needed to load Tailwind CSS and the Inter font from their CDNs.
6. **Publish when ready.** Follow [Publish with GitHub Pages](#publish-with-github-pages).

Most personalization should only require `config.js` and files in `images/`. You should not need to edit `index.html` or `app.js`.

## Repository files

- `index.html` — page layout and visual design.
- `config.js` — personal details, section text, theme, social links, and project list.
- `app.js` — reads the configuration and renders the portfolio.
- `images/` — place your project screenshots here.

## Personalize `config.js`

The file is organized into labeled sections. Keep the existing setting names and object structure intact.

### 1. Personal information and hero

Replace the values marked `[REPLACE]`, including:

- `name` — your name.
- `shortName` — short text shown in the header; set it to `""` to use your name instead.
- `pageTitle` — text shown in the browser tab.
- `description` — short page description.
- `role` and `bio` — your headline and introduction.

You can also edit the hero button text and section headings to match your style. The `[REPLACE]` marker is instructional placeholder text; remove it when entering your real content.

### 2. Choose a theme

Near the top of `config.js`, find:

```js
const selectedTheme = "forest";
```

Change the value to one of these presets:

| Theme | Style |
| --- | --- |
| `"minimal"` | Neutral, understated tones |
| `"ocean"` | Cool blues |
| `"forest"` | Muted greens |
| `"warm"` | Cream and amber |
| `"custom"` | Your own colors, edited in the `custom` theme object |

Use the exact theme name, including quotation marks. The preset applies a coordinated set of seven colors.

**Custom colors:** In `PORTFOLIO_THEME_PRESETS`, edit the seven color values inside `custom`, then set `selectedTheme` to `"custom"`. Use valid 3- or 6-digit hex colors, such as `"#2563eb"`. The color keys are `canvas`, `surface`, `line`, `muted`, `accent`, `foreground`, and `selection`. Keep all seven keys.

### 3. Contact and social links

Replace the sample email and profile URLs with your own. Remove any social entries you don't use by deleting the corresponding object from the `socials` array.

Use full URLs beginning with `https://`. The sample URLs are examples, not real profile links.

### 4. Add and edit projects

The configuration includes four examples to demonstrate different kinds of work:

- Python or data-analysis project
- Website or web application
- Game or interactive project
- Command-line tool or library

**These are examples, not real projects.** Replace them with your own work or remove any examples you don't need before publishing. Check that every project link points to a real destination.

Each project uses these fields:

| Field | What to enter |
| --- | --- |
| `title` | Project name. Required for the card to render. |
| `description` | Short explanation shown under the project title. |
| `category` | Small category label shown over the image. |
| `url` | Full URL to your live project or source repository. |
| `image` | Image path, such as `"images/weather-app.png"`. Use `""` for an automatic placeholder. |
| `imageAlt` | Short description of the screenshot for accessibility. |
| `tags` | Array of technologies or topics, such as `["Python", "Flask"]`. |

To add a project, copy one complete object in the `projects` array, paste it into the array, and replace its values. Keep a comma between adjacent objects, but do not put a comma after the final object.

For a project without a live demo, link to its repository. If you don't have a screenshot yet, set `image` to an empty string (`""`) so the site generates a placeholder. The placeholder is useful during setup, but a real screenshot usually makes a stronger portfolio.

### 5. Add project screenshots

1. Put screenshots in the `images/` folder.
2. Give each file a clear name, such as `weather-app.png`.
3. Use the exact path in `image`, including the file extension and capitalization for the image link in `config.js`.
4. Write meaningful `imageAlt` text.

Filenames are case-sensitive after publishing, so `Weather-App.png` and `weather-app.png` may not refer to the same file.

## Preview locally

1. Save your changes to `config.js`.
2. Open `index.html` in a modern browser.
3. Check the headline, project cards, theme colors, images, and links.

No local server is normally required for this static template. You do need an internet connection for the Tailwind CSS and Google Fonts CDN resources. If a screenshot is missing, check its filename and path; an automatic placeholder should appear when the image cannot load.

## Publish with GitHub Pages

1. Create your own GitHub repository and add the template files, including `index.html`, `config.js`, `app.js`, and the `images/` folder or use this template and you'd only have to change the data in `config.js` and add your screenshots in `images/`
2. Commit and push your personalized files to the `main` branch.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and the `/(root)` folder, then save.
6. Wait for GitHub Pages to finish deploying, then open the URL shown in the Pages settings.

If your repository already has GitHub Pages configured, confirm that it is deploying from the branch and folder where your `index.html` file lives.

## Checklist before you publish

- [ ] Replaced every `[REPLACE]` marker and sample personal detail.
- [ ] Removed or replaced all example projects.
- [ ] Replaced placeholder GitHub, social, and email links.
- [ ] Chosen a theme.
- [ ] Added screenshots or intentionally left image paths empty.
- [ ] Checked every project and social link.
- [ ] Previewed the site locally and checked the layout on a narrow screen.
- [ ] Confirmed GitHub Pages is enabled for your repository.

## Troubleshooting and Frequent Issues

**The page says the configuration is missing:** Make sure `config.js` is in the same folder as `index.html`.

**The theme does not load:** Check that `selectedTheme` matches one of the available names and that all seven custom colors use valid hex values.

**An image is missing:** Check the filename, extension, capitalization, and path in the `images/` folder. Use `image: ""` to show a generated placeholder.

**A link goes to the wrong place:** Replace the sample URL with the full URL for your actual project or profile.

**Styling or fonts look different offline:** The template loads Tailwind CSS and Inter from online CDNs, so those resources need an internet connection.

## Share the template

Users can fork the repository, use the template option, or download a copy. They should personalize their own `config.js` and `images/` folder, then enable GitHub Pages for their own repository.

## Note

Do not put passwords, API keys, or other confidential information in `config.js`. It is a public client-side file when published.
