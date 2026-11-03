# Developer Portfolio Template

A polished, responsive portfolio for GitHub Pages, built with plain HTML, CSS, and vanilla JavaScript. There is no build step or package installation. Visitors can install it on their phone or desktop as an app (PWA), and it keeps working offline.

**Live example:** https://zxdr4gon.github.io/portfolio_temp/

## Quick start

1. Fork this repository or use **Use this template** to create your own copy.
2. Open `config.js` and replace the `[REPLACE]` values with your details.
3. Choose a theme by setting `selectedTheme`.
4. Replace the example project entries with your own projects.
5. Add screenshots to `images/` and update the matching image paths.
6. Update the app name, link-preview tags, and (optionally) icons. See [Installable app](#installable-app).
7. Enable GitHub Pages in **Settings → Pages**, selecting the `main` branch and `/(root)`.

Most customization should only require `config.js` and the `images/` folder. You should not need to edit `app.js`; `index.html` only needs its link-preview tags updated.

## Features

- Light/dark theme toggle that follows the visitor's device setting
- Project filter buttons generated from your tags
- Whole-card project links, loading placeholders, and responsive screenshots
- App-style bottom tab bar on phones, with the current section highlighted
- Copy-email and share buttons, scroll progress bar, and back-to-top button
- Install button, offline support, and link-preview tags
- Respects reduced-motion settings and supports keyboard navigation

## Files

- `index.html` — page structure and link-preview tags.
- `styles.css` — visual design.
- `config.js` — personal information, copy, theme, social links, and projects.
- `theme.js` — applies the theme colors before the page paints and powers the light/dark toggle.
- `app.js` — reads the configuration, renders the content, and handles interactions.
- `sw.js` — service worker for offline support.
- `manifest.webmanifest` — app name, icons, and colors used when the site is installed.
- `icons/` — app icons, favicon, and link-preview image.
- `images/` — screenshots.

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

Use the exact name, including capitalization.

### Light/dark toggle

`alternateTheme` sets an optional second palette. When one theme is dark and the other is light, a sun/moon toggle appears in the header. The site follows the visitor's device setting until they choose. The default pairs `graphiteGold` with `paper`. Set `alternateTheme = null` to use only `selectedTheme` and hide the toggle.

### Custom colors

To customize colors, edit the seven values in the `custom` object and set `selectedTheme = "custom"`. Alternatively, set `customTheme` to an object with all seven keys: `canvas`, `surface`, `line`, `muted`, `accent`, `foreground`, and `selection`. Each value must be a valid 3- or 6-digit hex color.

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
| `imageSmall` | Optional smaller copy (about 640px wide) that phones load instead. |
| `imageAlt` | Short description of the screenshot. |
| `tags` | Technologies or topics, such as `["JavaScript", "CSS"]`. These become filter buttons above the grid. |

To add a project, copy one object in the array and change its values. Keep a comma between adjacent objects, but not after the last object. Delete any sample projects you don't need. A project with no link will display without broken or generic external links.

### Writing project descriptions

Aim for one or two specific sentences. Explain what the project does, what you built, and a notable feature or challenge. Avoid descriptions like “a website with many features.” A real screenshot and working demo are more persuasive than a generic placeholder.

### Screenshots

1. Put each screenshot in `images/`.
2. Use clear filenames and match the exact capitalization in `config.js`.
3. Prefer consistent landscape screenshots (16:10 fits the cards best). Export them as WebP about 1200px wide, and optionally a 640px copy for `imageSmall`. Squoosh (https://squoosh.app) does this in the browser. A WebP screenshot is often 20–50 KB, while the same PNG can be over 1 MB.
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

Run a local server from this folder, such as VS Code's Live Server extension or `python -m http.server`, then open the address it prints. Opening `index.html` directly also works, but offline support and installing need a server.

The fonts come from Google Fonts. After the first visit, the service worker caches them along with the rest of the site.

### GitHub Pages

1. Commit your files to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. Wait for the deployment and visit the URL shown in the Pages settings.

## Installable app

Once the site is live on GitHub Pages (HTTPS is required), visitors can install it:

- **Android / Chrome / Edge:** an **Install app** button appears in the header, or use the browser menu → *Install app*.
- **iPhone / iPad (Safari):** **Share → Add to Home Screen**. iPhone visitors see this tip once.

The installed app opens full-screen. On Android, long-pressing its icon shows shortcuts to Projects and Contact.

### Make it yours

1. **App name and colors:** in `manifest.webmanifest`, set `name` (full name), `short_name` (shown under the home-screen icon, 12 characters or fewer), and `description`. Set `background_color` and `theme_color` to your theme's `canvas` color.
2. **Link previews:** in `index.html`, update `<title>`, the `description` meta tag, `apple-mobile-web-app-title`, and the `og:` tags. `og:url` and `og:image` must be full addresses, such as `https://YOUR-USERNAME.github.io/YOUR-REPO/icons/og-image.jpg`. Link-preview services don't run JavaScript, so `config.js` can't fill these in.
3. **Icons (optional):** replace the files in `icons/` with your own, keeping the same names and sizes:

| File | Size | Notes |
| --- | --- | --- |
| `icon.svg` | any | Browser-tab icon. Edit the colors directly in the file. |
| `favicon-48.png` | 48×48 | Fallback tab icon |
| `icon-192.png`, `icon-512.png` | 192×192, 512×512 | App icons |
| `maskable-512.png` | 512×512 | Android adaptive icon. Keep the logo inside the middle ~60%, since the edges get cropped. |
| `apple-touch-icon.png` | 180×180 | iPhone home screen. Use a solid background with no transparency. |
| `og-image.jpg` | 1200×630 | Link-preview image |

A tool like https://realfavicongenerator.net can make these from one image.

### Updating a published site

- Changes to `config.js`, `index.html`, `styles.css`, and the scripts appear on the next visit, because the service worker checks the network first.
- Images and icons are cached once. If you replace one but keep its filename, change `VERSION` in `sw.js` (for example `"v2"`) so returning visitors get the new file.

## Before publishing

- [ ] Replace all `[REPLACE]` values.
- [ ] Remove example projects and placeholder links.
- [ ] Set a real email address and only the social profiles you use.
- [ ] Choose a theme.
- [ ] Add real screenshots and accurate alt text.
- [ ] Check all live-preview and source links.
- [ ] Update the app name in `manifest.webmanifest` and the link-preview tags in `index.html`.
- [ ] Test the site on desktop and mobile, in both light and dark themes.
- [ ] Confirm GitHub Pages is enabled.

## Notes

- This is a static, client-side site. Never put passwords, API keys, or confidential information in `config.js`.
- Keep all files in the same folder structure. The service worker and manifest use paths relative to `index.html`.
