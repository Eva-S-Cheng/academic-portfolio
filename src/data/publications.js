// ============================================================
// PUBLICATIONS — données locales (étape 1).
//
// Le format est volontairement identique à celui que produira
// src/lib/openalex.js (étape 2) : le jour où tu branches l'API,
// l'UI ne change pas d'une ligne.
//
// types possibles : 'article' | 'working-paper' | 'conference' | 'chapter' | 'these'
// ============================================================

export const publications = [
  {
    id: 'wp-2026-evt-hft',
    title: 'Extreme Value Theory for Intraday Drawdowns: Evidence from High-Frequency Data',
    authors: ['Eva Dupont', 'Co-Auteur A'],
    venue: 'Working paper',
    year: 2026,
    type: 'working-paper',
    doi: null,
    url: 'https://www.ssrn.com/',
    abstract:
      "Nous adaptons le cadre GARCH-EVT à la mesure des drawdowns intrajournaliers et montrons que les mesures de risque classiques sous-estiment systématiquement les pertes extrêmes aux horizons haute fréquence.",
    tags: ['EVT', 'HFT', 'Drawdown'],
  },
  {
    id: 'art-2025-drawdown',
    title: 'On the Distribution of Maximum Drawdown Duration under Regime Switching',
    authors: ['Eva Dupont'],
    venue: 'Journal of Empirical Finance',
    year: 2025,
    type: 'article',
    doi: '10.0000/exemple.2025',
    url: 'https://doi.org/10.0000/exemple.2025',
    abstract:
      "Cet article caractérise la distribution de la durée du maximum drawdown lorsque les rendements suivent un processus à changements de régime, avec une application à l'allocation dynamique.",
    tags: ['Drawdown', 'Regime switching'],
  },
  {
    id: 'conf-2024-sbti',
    title: 'Do Science-Based Targets Move Bond Spreads? Evidence from SBTi Commitments',
    authors: ['Eva Dupont', 'Co-Auteur B', 'Co-Auteur C'],
    venue: 'Conférence AFFI, Paris',
    year: 2024,
    type: 'conference',
    doi: null,
    url: null,
    abstract:
      "À partir des engagements SBTi appariés aux identifiants obligataires (ISIN/RIC), nous mesurons la réaction des spreads de crédit aux annonces de cibles climatiques validées.",
    tags: ['Finance durable', 'Obligations', 'Event study'],
  },
]
