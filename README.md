# [TEMPLATE] Developer Portfolio

A static portfolio template built with HTML, Tailwind CSS CDN, and JavaScript. It works on GitHub Pages.

## Files

- `index.html` — layout and visual design. Most users should not need to edit this.
- `config.js` — personal details, social links, section copy, and project list.
- `app.js` — reads `config.js` and renders the page.
- `images/` — put project screenshots here.

## Personalize your portfolio

1. Open `config.js`.
2. Replace `Your Name`, the short brand, bio, headings, email, and social URLs.
3. Update the `projects` array. Each project supports:
   - `title`: project name
   - `description`: short summary under the card
   - `category`: small label in the hover overlay
   - `url`: live demo or repository URL
   - `image`: screenshot path, e.g. `images/weather-app.png`
   - `imageAlt`: accessible image description
   - `tags`: technology names, e.g. `["Python", "Flask"]`
4. Put each screenshot in the `images/` folder. Use exact filename capitalization. If you leave `image` empty or the image cannot load, a placeholder is used.
5. Save and commit the changes.

You can add as many project objects as you want. To remove a card, remove that project object from the array. Keep commas between objects, but do not leave a comma after the last object if you want maximum compatibility with editors.

## Publish on GitHub Pages

1. Create a repository on GitHub and upload `index.html`, `config.js`, `app.js`, and the `images/` folder.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Wait for deployment and open the URL shown on the Pages settings screen.

## Make a copy for a friend

Friends can use **Use this template** or fork the repository, then change only `config.js` and the files in `images/`. Each person would need to publish their own repository using GitHub Pages.

## Notice

- Make sure no passwords or confidential data is included in `config.js`.
