// ============================================================
// PROFIL — c'est ici que tu personnalises tout.
// Aucune de ces valeurs n'est utilisée ailleurs que dans l'UI.
// ============================================================

export const profile = {
  name: 'Eva Dupont', // ← ton nom
  title: 'Doctorante en finance quantitative', // ← ton titre
  affiliation: 'Université — Laboratoire de finance', // ← ton affiliation
  location: 'France',
  email: 'prenom.nom@univ.fr',

  // Ton ORCID iD — indispensable pour l'étape 2 (récupération
  // automatique des publications via OpenAlex / ORCID).
  // Format : '0000-0002-1825-0097'
  orcid: '',

  // Liens affichés dans le header et le footer.
  links: [
    { label: 'ORCID', url: 'https://orcid.org/' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/' },
    { label: 'SSRN', url: 'https://www.ssrn.com/' },
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],

  // Le paragraphe "À propos" du haut de page.
  bio: `Mes travaux portent sur la modélisation des risques extrêmes
appliquée aux marchés financiers : théorie des valeurs extrêmes (EVT),
dynamique des drawdowns et micro-structure des marchés. Je m'intéresse
en particulier à la frontière entre modèles théoriques et contraintes
réelles des stratégies systématiques.`,

  // Axes de recherche affichés en liste.
  researchInterests: [
    {
      title: 'Théorie des valeurs extrêmes',
      detail: 'Modélisation des queues de distribution, GARCH-EVT, applications au risk management.',
    },
    {
      title: 'Drawdowns & mesures de risque',
      detail: 'Maximum drawdown, durée de recouvrement, mesures de risque au-delà de la VaR.',
    },
    {
      title: 'Trading algorithmique',
      detail: 'Adaptation des mesures de risque aux horizons haute fréquence.',
    },
  ],

  // Enseignement (optionnel — laisse le tableau vide pour masquer la section).
  teaching: [
    {
      course: 'Économétrie financière',
      level: 'M1 Finance',
      years: '2024–2026',
    },
    {
      course: 'Introduction à la gestion des risques',
      level: 'L3 Économie',
      years: '2025',
    },
  ],
}
