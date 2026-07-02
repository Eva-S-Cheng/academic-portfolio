# Portfolio académique

Site statique React (Vite) déployé sur GitHub Pages. Publications gérées en données locales pour l'instant, avec un client OpenAlex déjà prêt pour l'étape 2.

## Démarrage local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:5173.

## Personnalisation

Tout se passe dans deux fichiers :

- `src/data/profile.js` — nom, titre, affiliation, bio, axes de recherche, liens (ORCID, Scholar, SSRN…), enseignement.
- `src/data/publications.js` — la liste des publications (format documenté dans le fichier).

Le style est centralisé dans `src/index.css` (variables CSS en haut du fichier).

## Déploiement GitHub Pages

1. Crée un dépôt GitHub (par ex. `academic-portfolio`) et pousse ce projet dessus (branche `main`).
2. Dans `vite.config.js`, vérifie que `base` correspond au nom du dépôt : `base: '/academic-portfolio/'`. Avec un domaine custom ou un dépôt `<user>.github.io`, mets `base: '/'`.
3. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
4. Le workflow `.github/workflows/deploy.yml` construit et déploie automatiquement à chaque push sur `main`.

Le site sera disponible sur `https://<user>.github.io/academic-portfolio/`.

Note : GitHub Pages sur dépôt privé nécessite un plan payant ; en dépôt public c'est gratuit.

## Étape 2 — Publications automatiques via API

Le client est déjà écrit dans `src/lib/openalex.js` :

1. Renseigne ton ORCID iD dans `src/data/profile.js` (`orcid: '0000-...'`).
2. Dans `App.jsx`, remplace l'import des données locales par un chargement `fetchWorksByOrcid(profile.orcid)` dans un `useEffect`.

Pourquoi OpenAlex : gratuit, sans clé API, CORS ouvert (fonctionne côté client sur un site statique), interrogeable par ORCID. Alternatives complémentaires documentées dans le fichier : API publique ORCID (liste curée par toi), Semantic Scholar (citations), Crossref (métadonnées DOI).

## Étape 3 — pistes

- Compteurs de citations (Semantic Scholar / OpenAlex `cited_by_count`, déjà mappé).
- Export BibTeX par publication.
- CV en PDF téléchargeable.
- Page par projet de recherche.
- i18n FR/EN.
