import { useState } from 'react'
import { profile } from './data/profile.js'
import { publications } from './data/publications.js'

// ÉTAPE 2 (plus tard) — remplacer les données locales par l'API :
// import { fetchWorksByOrcid } from './lib/openalex.js'
// puis charger dans un useEffect + useState. L'UI est déjà compatible.

const TYPE_LABELS = {
  article: 'Article',
  'working-paper': 'Working paper',
  conference: 'Conférence',
  chapter: 'Chapitre',
  these: 'Thèse',
}

function DrawdownFigure() {
  // Courbe de valeur cumulée stylisée, avec annotation du max drawdown —
  // un clin d'œil au sujet de recherche, dessiné comme une figure d'article.
  const path =
    'M0,58 L28,50 L52,54 L80,40 L108,44 L136,30 L164,36 L192,22 L214,26 ' +
    'L238,48 L262,66 L286,60 L310,74 L334,68 L360,52 L388,56 L416,42 ' +
    'L444,46 L472,34 L500,38 L528,26 L560,30 L600,18'
  return (
    <figure className="figure" aria-label="Figure stylisée : courbe de valeur avec max drawdown annoté">
      <svg viewBox="0 0 600 90" role="img">
        <path d={path} fill="none" stroke="var(--ink)" strokeWidth="1.6" />
        {/* pic avant drawdown */}
        <line x1="192" y1="22" x2="192" y2="74" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
        {/* creux */}
        <line x1="310" y1="22" x2="310" y2="74" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="192" y1="80" x2="310" y2="80" stroke="var(--accent)" strokeWidth="1.2" />
        <circle cx="192" cy="22" r="2.4" fill="var(--accent)" />
        <circle cx="310" cy="74" r="2.4" fill="var(--accent)" />
      </svg>
      <figcaption className="caption">
        Fig. 1 — Valeur cumulée d'un portefeuille (stylisée). Segment rouge : <em>maximum drawdown</em>.
      </figcaption>
    </figure>
  )
}

function Publication({ pub, index }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="pub" id={pub.id}>
      <span className="num">[{index}]</span>
      <div>
        <h3>
          {pub.url ? (
            <a href={pub.url} target="_blank" rel="noreferrer">
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h3>
        <p className="meta">
          {pub.authors.join(', ')}
          {pub.venue && (
            <>
              {' · '}
              <span className="venue">{pub.venue}</span>
            </>
          )}
          {' · '}
          {pub.year}
        </p>
        <div className="badges">
          <span className="badge type">{TYPE_LABELS[pub.type] ?? pub.type}</span>
          {pub.doi && <span className="badge">DOI {pub.doi}</span>}
          {pub.tags?.map((t) => (
            <span className="badge" key={t}>
              {t}
            </span>
          ))}
        </div>
        {pub.abstract && (
          <>
            <button className="toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
              {open ? '− Masquer le résumé' : '+ Résumé'}
            </button>
            {open && <p className="abstract">{pub.abstract}</p>}
          </>
        )}
      </div>
    </li>
  )
}

export default function App() {
  const pubs = [...publications].sort((a, b) => b.year - a.year)

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="#top">
            {profile.name}
          </a>
          <nav className="site-nav" aria-label="Navigation principale">
            <a href="#recherche">Recherche</a>
            <a href="#publications">Publications</a>
            {profile.teaching.length > 0 && <a href="#enseignement">Enseignement</a>}
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap">
          <div className="hero">
            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <p className="affiliation">
              {profile.affiliation} · {profile.location}
            </p>
            <div className="hero-links">
              {profile.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
            <DrawdownFigure />
          </div>

          <section id="recherche">
            <h2 className="section-title">Recherche</h2>
            <p className="bio">{profile.bio}</p>
            <ul className="interests">
              {profile.researchInterests.map((r) => (
                <li key={r.title}>
                  <span className="t">{r.title}</span>
                  <span className="d">{r.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="publications">
            <h2 className="section-title">Publications & working papers</h2>
            <ul className="publist">
              {pubs.map((p, i) => (
                <Publication key={p.id} pub={p} index={pubs.length - i} />
              ))}
            </ul>
          </section>

          {profile.teaching.length > 0 && (
            <section id="enseignement">
              <h2 className="section-title">Enseignement</h2>
              <ul className="teach">
                {profile.teaching.map((t) => (
                  <li key={t.course + t.years}>
                    <span>{t.course}</span>
                    <span className="level">{t.level}</span>
                    <span className="years">{t.years}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>

      <footer className="site-footer" id="contact">
        <div className="wrap">
          <p>
            Contact : <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="links">
            {profile.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
