// ============================================================
// PROFILE — everything you personalize lives here.
// None of these values are used anywhere except the UI.
// ============================================================

export const profile = {
  name: 'Eva Cheng',
  title: 'Visiting Researcher in Finance (pre-doctoral)',
  affiliation: 'Audencia Business School',
  location: 'Nantes, France',
  email: 'eva.cheng@audencia.com', // ← change if you prefer another address

  // Your ORCID iD — used later if/when you switch publications to the
  // automatic OpenAlex fetch (src/lib/openalex.js).
  orcid: '0009-0001-4562-7312',

  // Links shown in the header and footer.
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.fr/citations?hl=en&user=WrG3iYUAAAAJ' },
    { label: 'ORCID', url: 'https://orcid.org/0009-0001-4562-7312' },
    { label: 'SSRN', url: 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm' }, // ← paste your SSRN author page
    { label: 'Website', url: 'https://sites.google.com/view/eva-cheng/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/eva-s-cheng/' },
    { label: 'GitHub', url: 'https://github.com/Eva-S-Cheng' },
  ],

  // The "About / Research" paragraph at the top of the page.
  bio: `I work at the intersection of quantitative and sustainable finance.
My research studies how climate and environmental regulation is priced by
financial markets, how investors respond to environmental and social
information, and how machine learning and large language models can turn
unstructured corporate disclosures into measurable signals.`,

  // Research interests shown as a list.
  researchInterests: [
    {
      title: 'Climate regulation & asset pricing',
      detail:
        'How energy-performance rules and environmental policy capitalize into house prices and financial assets.',
    },
    {
      title: 'Sustainable & responsible investment',
      detail:
        'Market reactions to environmental and social controversies; investor influence on corporate sustainability.',
    },
    {
      title: 'ML & NLP for finance',
      detail:
        'Machine-learning classifiers and LLMs applied to ESG disclosures and controversy prediction.',
    },
  ],

  // Teaching (leave the array empty to hide the section).
  teaching: [
    {
      course: 'Python for Finance',
      level: 'Adjunct lecturer · Audencia',
      years: '2024–2026',
    },
  ],

  // Short professional/academic path (CV). Leave empty to hide.
  cv: [
    {
      role: 'Visiting Researcher in Finance (pre-doctoral)',
      org: 'Audencia Business School',
      years: '2024–present',
    },
    {
      role: 'Adjunct Lecturer — Python for Finance',
      org: 'Audencia Business School',
      years: '2024–present',
    },
    {
      role: 'Financial Analyst (ALM)',
      org: 'Banking / financial institution', // ← replace with the real employer
      years: '2022–2024',
    },
    {
      role: 'MSc, Data Management for Finance (with distinction)',
      org: 'Audencia Business School',
      years: '2021–2022',
    },
    {
      role: 'Data Analyst',
      org: 'Previous employer', // ← replace with the real employer
      years: '2019–2021',
    },
  ],

  // Languages (optional; leave empty array to hide).
  languages: ['English', 'French', 'Cantonese', 'Mandarin (professional)'],
}
