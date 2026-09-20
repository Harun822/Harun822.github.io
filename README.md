# Harun Nabiyev — personal website

A single-page site with no build step. Everything a visitor sees comes from **`content.js`**.

```
index.html             page structure + rendering (never needs editing)
style.css              colors and fonts (change the :root block to re-theme)
content.js             ALL the content — edit this
Harun_Nabiyev_CV.pdf   the CV behind the "Download CV" button (replace, same name)
photo.jpg              add a portrait with this name (~600×750px, portrait crop); hides if missing
.nojekyll              tells GitHub to serve the files as-is — leave it
```

## Publish on GitHub Pages (once)

1. Sign in to https://github.com as **harun822**.
2. Click **New repository**. Name it exactly `harun822.github.io`. Set visibility to **Public**
   (GitHub Pages is free only for public repositories). Leave README, .gitignore and license off.
   Click **Create repository**.
3. On the empty repository page click **uploading an existing file**. Drag in every file from this
   folder — `index.html`, `style.css`, `content.js`, `README.md`, `Harun_Nabiyev_CV.pdf`,
   `.nojekyll` (and `photo.jpg` if you have one). Click **Commit changes**.
4. Wait a minute. The site is live at **https://harun822.github.io** — that is the link to put on
   applications, the Common App activities section, and email signatures.

## Updating

Edit `content.js` in any plain-text editor (VS Code, Sublime, TextEdit in plain-text mode).
Change only the words **between** the quote marks; leave the quotes, commas and brackets alone.
Double-click `index.html` to preview. If the page comes up blank, a quote or comma is missing near
whatever you last edited.

Then on GitHub: open the repository → click `content.js` → pencil icon → paste the new contents →
**Commit changes**. Or use **Add file → Upload files** to replace it. The live site updates within
about a minute; press Cmd+Shift+R (Mac) or Ctrl+F5 (Windows) if you still see the old version.

Common edits:

- **Predicted grade / test scores** — the `facts` strip near the top and the `education` and
  `tests` lists further down. When the final IB result arrives, change "Predicted IB 40/45" to
  "IB Diploma: 40/45" in `education`, and update the first `facts` label.
- **New award or competition** — add a line to `honors`. Newest at the top.
- **The IJHSR paper goes live** — paste the article URL into that project's `link` field.
- **University decision** — change `role` at the top (e.g. "Incoming student, XYZ University, Class of 2031")
  and rewrite the sentence in the Contact section of `index.html` if it no longer applies.
- **Add an email** — fill in `email`; it adds an "Email me" button and a contact line automatically.

## Custom domain (optional)

Buy a domain (Cloudflare, Porkbun, Namecheap — about $10–15/year), then add four `A` records for
`@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 and a `CNAME`
for `www` pointing to `harun822.github.io`. In the repository, Settings → Pages → Custom domain,
enter the domain, and tick Enforce HTTPS once it verifies.
