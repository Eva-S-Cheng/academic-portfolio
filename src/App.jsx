import { useState } from 'react'
import { profile } from './data/profile.js'
import { publications } from './data/publications.js'

// STEP 2 (later) — replace local data with the API:
// import { fetchWorksByOrcid } from './lib/openalex.js'
// load in a useEffect + useState. The UI is already compatible.

const TYPE_LABELS = {
  article: 'Article',
  'working-paper': 'Working paper',
  conference: 'Conference',
  chapter: 'Chapter',
  thesis: 'Thesis',
}

function CapitalizationFigure() {
  // Stylized price line with a "policy" step — nods to the energy-standards
  // capitalization paper, drawn like a figure in an article.
  const path =
    'M0,64 L36,60 L72,62 L108,56 L144,58 L180,52 L216,54 L252,50 ' +
    'L288,52 L300,52 L300,40 L336,42 L372,36 L408,38 L444,30 L480,32 ' +
    'L516,26 L552,28 L588,20 L600,20'
  return (
    <figure className="figure" aria-label="Stylized figure: house price line with a policy step change">
      <svg viewBox="0 0 600 90" role="img">
        <path d={path} fill="none" stroke="var(--ink)" strokeWidth="1.6" />
        {/* policy date */}
        <line x1="300" y1="14" x2="300" y2="80" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="300" cy="52" r="2.4" fill="var(--accent)" />
        <circle cx="300" cy="40" r="2.4" fill="var(--accent)" />
      </svg>
      <figcaption className="caption">
        Fig. 1 &mdash; House prices around a regulatory threshold (stylized). Red line: <em>policy date</em>.
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
              {' \u00b7 '}
              <span className="venue">{pub.venue}</span>
            </>
          )}
          {' \u00b7 '}
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
              {open ? '\u2212 Hide abstract' : '+ Abstract'}
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
  const { teaching, cv, languages } = profile

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="#top">
            {profile.name}
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            {teaching.length > 0 && <a href="#teaching">Teaching</a>}
            {cv.length > 0 && <a href="#cv">CV</a>}
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
              {profile.affiliation} &middot; {profile.location}
            </p>
            <div className="hero-links">
              {profile.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                  {l.label} &#8599;
                </a>
              ))}
            </div>
            <CapitalizationFigure />
          </div>

          <section id="research">
            <h2 className="section-title">Research</h2>
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

          {teaching.length > 0 && (
            <section id="teaching">
              <h2 className="section-title">Teaching</h2>
              <ul className="teach">
                {teaching.map((t) => (
                  <li key={t.course + t.years}>
                    <span>{t.course}</span>
                    <span className="level">{t.level}</span>
                    <span className="years">{t.years}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {cv.length > 0 && (
            <section id="cv">
              <h2 className="section-title">Curriculum vitae</h2>
              <ul className="cv">
                {cv.map((c) => (
                  <li key={c.role + c.years}>
                    <span className="years">{c.years}</span>
                    <span className="role">{c.role}</span>
                    <span className="org">{c.org}</span>
                  </li>
                ))}
              </ul>
              {languages.length > 0 && (
                <p className="languages">
                  <span className="lbl">Languages</span> {languages.join(' \u00b7 ')}
                </p>
              )}
            </section>
          )}
        </div>
      </main>

      <footer className="site-footer" id="contact">
        <div className="wrap">
          <p>
            Contact: <a href={`mailto:${profile.email}`}>{profile.email}</a>
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
