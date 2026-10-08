# Nat's Creatures — React

React + Vite conversion of https://github.com/Kim1-Ryan/NATS_CREATURES.
Preserves all 16 original pages, logo, copy, colours, responsive styles, and contact links.

## Run in VS Code

Open this folder in VS Code, then use Terminal > New Terminal:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal (normally http://127.0.0.1:5173).
Dependencies have already been installed on this computer.

## Edit the site

- `src/pages/IndexPage.jsx`: home page.
- `src/pages/CataloguePage.jsx`: store.
- `src/pages/PricingPage.jsx`: pricing.
- `src/pages/ContactPage.jsx`: contact details and social links.
- Other files in `src/pages/`: category pages and their original styles.
- `src/App.jsx`: page routing and document titles.
- `src/styles.css`: shared styles.
- `public/logo.png`: original logo.

Navigation uses hash URLs (for example `#/catalogue`), which also work on GitHub Pages without server rewrite rules. Each page stylesheet is scoped to its component so styles do not leak between pages. Bootstrap is installed locally; Lilita One is loaded from Google Fonts and needs internet access.

The original repository contains empty coloured product grid placeholders, rather than product images or purchase functionality. These placeholders are preserved; no checkout or product data has been invented.

## Production

```sh
npm run build
npm run preview
```

The `dist` folder contains the production build. The Vite base is relative so it can be hosted under a GitHub Pages repository path. This project has not been pushed or deployed.

## Product photos and enlarged viewer

The nine product categories and View All use `src/components/ProductQuilt.jsx`.
`src/products.json` lists 48 items and 65 photos copied into `public/products/`.
Each loose source image is a separate item. Images in each nested source folder
are grouped into one item with a carousel (12 groups). Generic folder names use
neutral category labels; descriptive folder names are preserved.

Quilt thumbnails fill equal squares. The enlarged dialog shows the full image
without cropping, with previous/next arrows, thumbnail selection, keyboard
arrow navigation, Escape to close, and touch swipe support. Closing restores
focus to the selected quilt square.

To add or rename an item, edit `src/products.json` and put its image files in
`public/products/`. The original OneDrive photos are unchanged.

## GitHub Pages deployment

The `.github/workflows/deploy.yml` workflow installs dependencies, builds the
React app with the GitHub Pages repository path, and deploys `dist` on pushes
to `main`. In GitHub, set Settings > Pages > Build and deployment > Source to
GitHub Actions. Commit and push the workflow, then check the Actions tab for
"Deploy website to GitHub Pages". Subsequent pushes rebuild the site automatically.
Do not publish the source index.html directly: it points to JSX that requires Vite.
