# Developer Portfolio Template

A polished, responsive portfolio for GitHub Pages, built with HTML, Tailwind CSS via CDN, and vanilla JavaScript. There is no build step or package installation.

**Live example:** https://zxdr4gon.github.io/portfolio_temp/

## Quick start

1. Fork this repository or use **Use this template** to create your own copy.
2. Open `config.js` and replace the `[REPLACE]` values with your details.
3. Choose a theme by setting `selectedTheme`.
4. Replace the example project entries with your own projects.
5. Add screenshots to `images/` and update the matching image paths.
6. Enable GitHub Pages in **Settings → Pages**, selecting the `main` branch and `/(root)`.

Most customization should only require `config.js` and the `images/` folder. You should not need to edit `index.html` or `app.js`.

## Files

- `index.html` — page structure and visual design.
- `config.js` — personal information, copy, theme, social links, and projects.
- `app.js` — reads the configuration and renders the content.
- `images/` — screenshots and optional favicon.

## Choose a theme

Near the top of `config.js`, edit:

```js
const selectedTheme = "graphiteGold";
```

Available presets:

| Name | Style |
| --- | --- |
| `graphiteGold` | Dark graphite with a restrained gold accent (default) |
| `slateBlue` | Cool blue-gray |
| `evergreen` | Deep green with a mint accent |
| `paper` | Warm light background and ink-colored text |
| `violet` | Dark charcoal with muted violet |
| `custom` | Your own palette |

Use the exact name, including capitalization. To customize colors, edit the seven values in the `custom` object and set `selectedTheme = "custom"`. Alternatively, set `customTheme` to an object with all seven keys: `canvas`, `surface`, `line`, `muted`, `accent`, `foreground`, and `selection`. Each value must be a valid 3- or 6-digit hex color.

## Personal details

Update these fields in `config.js`:

- `name` and `shortName` — name shown in the footer and header.
- `pageTitle` — browser tab title.
- `description` — short search/social preview description.
- `role`, `headlineStart`, `headlineAccent`, and `bio` — hero text.
- `aboutText` — short personal introduction.
- `email` — contact address.
- `socials` — the social profiles you actually use.

Delete any social entry you don't need. Navigation links are generated from this list, so unused social buttons won't appear. Replace every sample URL before publishing.

## Projects

Each item in the `projects` array supports:

| Field | Purpose |
| --- | --- |
| `title` | Project name. Required. |
| `description` | Explain what it does and a feature or problem it addresses. |
| `category` | Short type label, such as “Web application” or “Data project”. |
| `url` | Live preview or main project link. |
| `sourceUrl` | Optional source-code repository link. |
| `image` | Screenshot path, such as `images/weather-app.webp`. Use `""` for a placeholder. |
| `imageAlt` | Short description of the screenshot. |
| `tags` | Technologies or topics, such as `["JavaScript", "CSS"]`. |

To add a project, copy one object in the array and change its values. Keep a comma between adjacent objects, but not after the last object. Delete any sample projects you don't need. A project with no link will display without broken or generic external links.

### Writing project descriptions

Aim for one or two specific sentences. Explain what the project does, what you built, and a notable feature or challenge. Avoid descriptions like “a website with many features.” A real screenshot and working demo are more persuasive than a generic placeholder.

### Screenshots

1. Put each screenshot in `images/`.
2. Use clear filenames and match the exact capitalization in `config.js`.
3. Prefer consistent landscape screenshots. WebP usually gives smaller files than PNG for screenshots.
4. Add meaningful `imageAlt` text.

If an image is missing, the page falls back to a generated placeholder. Replace it with a real screenshot before treating the portfolio as finished.

## About section

Edit `aboutText` to describe your interests and what you enjoy exploring. You can optionally add links in `aboutLinks`:

```js
aboutLinks: [
  { label: "GitHub", url: "https://github.com/YOUR-USERNAME" },
  { label: "Resume", url: "https://example.com/resume.pdf" }
],
```

Remove the example links or replace them with real destinations before publishing.

## Preview and publish

### Preview

Open `index.html` in a modern browser. If local file restrictions interfere with JavaScript, use VS Code's Live Server extension. Tailwind CSS and the fonts are loaded from online CDNs, so an internet connection is required for the intended appearance.

### GitHub Pages

1. Commit your files to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. Wait for the deployment and visit the URL shown in the Pages settings.

## Before publishing

- [ ] Replace all `[REPLACE]` values.
- [ ] Remove example projects and placeholder links.
- [ ] Set a real email address and only the social profiles you use.
- [ ] Choose a theme.
- [ ] Add real screenshots and accurate alt text.
- [ ] Check all live-preview and source links.
- [ ] Test the site on desktop and mobile.
- [ ] Confirm GitHub Pages is enabled.

## Notes

- This is a static, client-side site. Never put passwords, API keys, or confidential information in `config.js`.
- The Tailwind CDN is convenient for a no-build template. For a larger production site, compiling Tailwind into a local CSS file is more efficient.
- Keep `index.html`, `config.js`, and `app.js` in the same directory.
