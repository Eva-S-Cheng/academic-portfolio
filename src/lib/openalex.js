// ============================================================
// ÉTAPE 2 — Récupération automatique des publications.
//
// OpenAlex (https://openalex.org) est l'option idéale pour un
// site statique sur GitHub Pages :
//   - gratuit, sans clé API
//   - CORS ouvert → appel direct depuis le navigateur
//   - indexe articles, working papers, actes de conférence
//   - se requête par ORCID iD
//
// Alternatives / compléments :
//   - API publique ORCID (https://pub.orcid.org/v3.0/{orcid}/works)
//     → la liste que TU cures toi-même sur ton profil ORCID
//   - Semantic Scholar (https://api.semanticscholar.org)
//     → bons comptages de citations, rate-limit sans clé
//   - Crossref (https://api.crossref.org) → métadonnées DOI
//
// Usage dans App.jsx :
//   import { fetchWorksByOrcid } from './lib/openalex.js'
//   const pubs = await fetchWorksByOrcid(profile.orcid)
// ============================================================

const OPENALEX = 'https://api.openalex.org'

// "polite pool" OpenAlex : ajoute ton email pour de meilleures
// performances (recommandé par leur doc, pas obligatoire).
const MAILTO = '' // ex. 'prenom.nom@univ.fr'

function mapWork(w) {
  const doi = w.doi ? w.doi.replace('https://doi.org/', '') : null
  return {
    id: w.id,
    title: w.title ?? w.display_name,
    authors: (w.authorships ?? []).map((a) => a.author?.display_name).filter(Boolean),
    venue:
      w.primary_location?.source?.display_name ??
      (w.type === 'preprint' ? 'Working paper' : ''),
    year: w.publication_year,
    type:
      w.type === 'article'
        ? 'article'
        : w.type === 'preprint'
          ? 'working-paper'
          : w.type === 'book-chapter'
            ? 'chapter'
            : w.type === 'dissertation'
              ? 'these'
              : 'article',
    doi,
    url: doi ? `https://doi.org/${doi}` : w.primary_location?.landing_page_url ?? null,
    abstract: invertAbstract(w.abstract_inverted_index),
    tags: (w.topics ?? []).slice(0, 3).map((t) => t.display_name),
    citations: w.cited_by_count ?? 0,
  }
}

// OpenAlex stocke les abstracts sous forme d'index inversé
// (mot → positions) pour des raisons de droits ; on le reconstruit.
function invertAbstract(inv) {
  if (!inv) return null
  const words = []
  for (const [word, positions] of Object.entries(inv)) {
    for (const pos of positions) words[pos] = word
  }
  return words.join(' ')
}

export async function fetchWorksByOrcid(orcid) {
  if (!orcid) throw new Error('ORCID manquant : renseigne profile.orcid dans src/data/profile.js')
  const params = new URLSearchParams({
    filter: `author.orcid:${orcid}`,
    'per-page': '100',
    sort: 'publication_date:desc',
  })
  if (MAILTO) params.set('mailto', MAILTO)
  const res = await fetch(`${OPENALEX}/works?${params}`)
  if (!res.ok) throw new Error(`OpenAlex ${res.status}`)
  const json = await res.json()
  return (json.results ?? []).map(mapWork)
}
