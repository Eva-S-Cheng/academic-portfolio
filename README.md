# Eva Cheng — Academic Portfolio

Full academic website replacing the previous Google Sites, built with
**Vite + React 19 + React Router**, deployed on **GitHub Pages**.

**Live site:** https://eva-s-cheng.github.io/academic-portfolio/

## Pages

| Route | Content |
|---|---|
| `/` | Hero, full bio, skills & languages, quick-access cards |
| `/research` | Research statement & interests, working papers (with abstracts), publications **synced live from ORCID**, theses & reports, side-projects |
| `/teaching` | Teaching experience + link to the course |
| `/teaching/python-for-finance` | Course description, learning outcomes, list of all sessions |
| `/teaching/python-for-finance/{session}` | One page per session (1–8, final project, additional references) with prev/next navigation |
| `/cv` | Education / teaching / work experience timelines + CV downloads (EN & FR) |

Deep links work on GitHub Pages thanks to a `404.html` SPA fallback generated at build time.

## Local development

```bash
npm install
npm run dev
```

## Deployment (one-time setup)

1. Push to `main` on `Eva-S-Cheng/academic-portfolio`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` then builds and deploys automatically.

## Editing content

**All content lives in `src/content.js`** — bio, links, papers, CV entries,
course sessions. Layout, styles and logic live in `src/App.jsx`
(CSS variables at the top of the `STYLES` constant).

ORCID works whose titles match a curated entry are de-duplicated automatically.

## Remaining TODOs (the only content not migrated)

The session pages of the old Google Sites embed course material that is not
publicly accessible, so it could not be migrated automatically:

1. **Session embeds** — in `src/content.js`, each session has an `embedUrl: ""`.
   Paste a Google Drive/Slides *preview* link (`https://drive.google.com/file/d/FILE_ID/preview`)
   to display the material inline. Until then, the page shows a
   "material on request" card consistent with your IP notice.
2. **CV PDFs** — currently linked to your existing Google Drive files (EN/FR).
   If you want the site fully independent from Google, drop the PDFs in
   `public/` and point `LINKS.cvEN` / `LINKS.cvFR` to them
   (e.g. `import.meta.env.BASE_URL + "cv-en.pdf"`).

## Custom domain

Set `base: "/"` in `vite.config.js` and add a `public/CNAME` file containing the domain.
