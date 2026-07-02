// ============================================================
// PUBLICATIONS — local data.
//
// The shape matches what src/lib/openalex.js would return, so the
// day you switch to automatic fetching by ORCID, the UI is unchanged.
//
// types: 'article' | 'working-paper' | 'conference' | 'chapter' | 'thesis'
// ============================================================

export const publications = [
  {
    id: 'wp-meps-house-prices',
    title:
      'Minimum Energy Performance Standards and House Price Capitalization: Evidence from France\u2019s Rental Ban on \u201cEnergy Sieves\u201d',
    authors: ['Alexandre Garel', 'Eva Cheng'],
    venue: 'Working paper (SSRN)',
    year: 2025,
    type: 'working-paper',
    doi: null,
    url: 'https://ssrn.com/abstract=6109023',
    abstract:
      'We study how France\u2019s ban on renting out the worst energy-rated dwellings (\u201cpassoires \u00e9nerg\u00e9tiques\u201d) is capitalized into house prices, using energy-performance (DPE) ratings to identify affected properties.',
    tags: ['Climate policy', 'Real estate', 'Energy performance'],
  },
]
