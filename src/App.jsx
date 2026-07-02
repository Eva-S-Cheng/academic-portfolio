import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, AFFILIATION, HERO_LEDE, BIO, SKILLS, LANGUAGES,
  RESEARCH_STATEMENT, INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, ACADEMIC_POSITIONS, PROFESSIONAL_EXPERIENCE, COURSE, COPYRIGHT_NOTICE,
} from "./content.js";

/* ============================================================
   Eva Cheng — Academic Portfolio · v7
   Strict contemporary academic design. One typeface (EB Garamond),
   full-width rigorous grid, heavy structural rules, square motif,
   a single deep green accent. Light and dark themes.
   ============================================================ */

const PHOTO_URL = import.meta.env.BASE_URL + "photo.jpg";

/* ---------- ORCID ---------- */

const TYPE_LABELS = {
  "journal-article": "Journal article",
  "working-paper": "Working paper",
  preprint: "Preprint",
  "conference-paper": "Conference paper",
  "book-chapter": "Book chapter",
  report: "Report",
  dissertation: "Thesis",
  "dissertation-thesis": "Thesis",
  other: "Work",
};

function pickLink(work) {
  const ids = work?.["external-ids"]?.["external-id"] ?? [];
  const doi = ids.find((i) => i["external-id-type"] === "doi");
  if (doi) return doi["external-id-url"]?.value || `https://doi.org/${doi["external-id-value"]}`;
  const anyUrl = ids.find((i) => i["external-id-url"]?.value);
  if (anyUrl) return anyUrl["external-id-url"].value;
  if (work?.url?.value) return work.url.value;
  return null;
}

function contributorsOf(work) {
  const list = work?.contributors?.contributor ?? [];
  return list.map((c) => c["credit-name"]?.value).filter(Boolean);
}

function titleKey(t) {
  return (t || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function sameWork(a, b) {
  const A = titleKey(a), B = titleKey(b);
  if (!A || !B) return false;
  if (A.includes(B.slice(0, 45)) || B.includes(A.slice(0, 45))) return true;
  const ta = new Set(A.split(" ")), tb = new Set(B.split(" "));
  let inter = 0;
  ta.forEach((w) => { if (tb.has(w)) inter += 1; });
  return inter / Math.min(ta.size, tb.size) > 0.7;
}

function useOrcidWorks() {
  const [state, setState] = useState({ status: "loading", works: [] });
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const headers = { Accept: "application/json" };
        const res = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, { headers });
        if (!res.ok) throw new Error(`ORCID API responded ${res.status}`);
        const data = await res.json();
        const summaries = (data.group ?? []).map((g) => g["work-summary"]?.[0]).filter(Boolean);

        const details = new Map();
        if (summaries.length > 0) {
          const codes = summaries.map((s) => s["put-code"]).slice(0, 50).join(",");
          try {
            const resFull = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works/${codes}`, { headers });
            if (resFull.ok) {
              const bulk = await resFull.json();
              (bulk.bulk ?? []).forEach((b) => { if (b.work) details.set(b.work["put-code"], b.work); });
            }
          } catch { /* summaries remain usable */ }
        }

        const works = summaries
          .map((s) => {
            const full = details.get(s["put-code"]) ?? s;
            return {
              putCode: s["put-code"],
              title: full.title?.title?.value ?? s.title?.title?.value ?? "Untitled work",
              year: s["publication-date"]?.year?.value ?? full["publication-date"]?.year?.value ?? null,
              journal: full["journal-title"]?.value ?? s["journal-title"]?.value ?? null,
              type: TYPE_LABELS[s.type] ?? s.type ?? "Work",
              contributors: contributorsOf(full),
              url: pickLink(full),
            };
          })
          .sort((a, b) => (b.year ?? 9999) - (a.year ?? 9999));

        if (!cancelled) setState({ status: "ready", works });
      } catch (err) {
        console.error("ORCID fetch failed:", err);
        if (!cancelled) setState({ status: "error", works: [] });
      }
    })();
    return () => { cancelled = true; };
  }, []);
  return state;
}

function mergeWithCurated(work, curated) {
  const match = curated.find((p) => sameWork(work.title, p.title));
  if (!match) return { ...work, matched: false };
  return {
    ...work,
    matched: true,
    authors: work.contributors.length > 0 ? work.contributors.join(", ") : match.authors,
    venue: work.journal || match.venue,
    link: match.link || (work.url ? { label: "View", url: work.url } : null),
    abstract: match.abstract,
    citation: match.citation,
  };
}

/* ---------- Primitives ---------- */

function SectionHead({ title, meta }) {
  return (
    <div className="sec-head">
      <h2 className="sec-title"><span className="sq" aria-hidden="true" />{title}</h2>
      {meta && <span className="sec-meta">{meta}</span>}
    </div>
  );
}

function useClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) { console.error("Clipboard failed:", err); }
  }, []);
  return { copied, copy };
}

function CiteModal({ citation, onClose }) {
  const [tab, setTab] = useState("bibtex");
  const { copied, copy } = useClipboard();
  const text = tab === "bibtex" ? citation.bibtex : citation.apa;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Cite this work">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div className="seg" role="tablist" aria-label="Citation format">
            <button role="tab" aria-selected={tab === "bibtex"} className={tab === "bibtex" ? "on" : ""} onClick={() => setTab("bibtex")}>BibTeX</button>
            <button role="tab" aria-selected={tab === "apa"} className={tab === "apa" ? "on" : ""} onClick={() => setTab("apa")}>APA</button>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <pre className="cite-block">{text}</pre>
        <div className="modal-foot">
          <button className="btn btn-solid" onClick={() => copy(text)}>
            {copied ? "Copied" : "Copy to clipboard"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PubItem({ title, authors, venue, year, link, citation, abstract }) {
  const [open, setOpen] = useState(false);
  const [citing, setCiting] = useState(false);
  return (
    <article className="pub">
      <div className="pub-year">{year || ""}</div>
      <div className="pub-main">
        <h3 className="pub-title">{title}</h3>
        {authors && <p className="pub-authors">{authors}</p>}
        {venue && <p className="pub-venue">{venue}</p>}
        <div className="pub-actions">
          {link && <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>}
          {citation && <button onClick={() => setCiting(true)}>Cite</button>}
          {abstract && (
            <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Hide abstract" : "Abstract"}
            </button>
          )}
        </div>
        {open && <p className="pub-abstract">{abstract}</p>}
      </div>
      {citing && <CiteModal citation={citation} onClose={() => setCiting(false)} />}
    </article>
  );
}

function OrgMark({ domain, name }) {
  const [stage, setStage] = useState(0);
  if (!domain || stage >= 2) {
    return <span className="org-mark org-mark-fallback" aria-hidden="true">{(name || "?")[0]}</span>;
  }
  const src = stage === 0
    ? `https://logo.clearbit.com/${domain}`
    : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  return (
    <img className="org-mark" src={src} alt="" loading="lazy"
      onError={() => setStage((s) => s + 1)} />
  );
}

function CvEntry({ heading, org, orgUrl, orgDomain, period, honors, details }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="cv-entry">
      <OrgMark domain={orgDomain} name={org} />
      <div className="cv-main">
        <h3 className="cv-heading">{heading}</h3>
        <p className="cv-org">
          {orgUrl ? <a href={orgUrl} target="_blank" rel="noreferrer">{org}</a> : org}
          {honors && <span className="cv-honors"> · {honors}</span>}
        </p>
        {details && (
          <>
            <button className="text-link" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Hide details" : "Details"}
            </button>
            {open && <p className="cv-details">{details}</p>}
          </>
        )}
      </div>
      <span className="cv-period">{period}</span>
    </article>
  );
}

/* ---------- Chrome ---------- */

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/teaching", label: "Teaching" },
  { to: "/cv", label: "Curriculum Vitae" },
];

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="wordmark" to="/">
          <span className="sq" aria-hidden="true" />Eva Cheng
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>
          ))}
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen} aria-label="Menu">
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <nav className="wrap mobile-nav" aria-label="Main mobile">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>
          ))}
          <button className="theme-toggle mobile-theme" onClick={onToggleTheme}>
            {theme === "dark" ? "Light theme" : "Dark theme"}
          </button>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name"><span className="sq" aria-hidden="true" />Eva Cheng</p>
          <p className="footer-aff">{AFFILIATION}</p>
        </div>
        <div>
          <p className="foot-label">Contact</p>
          <p className="foot-line"><a href={`mailto:${LINKS.emailAcademic}`}>{LINKS.emailAcademic}</a></p>
          <p className="foot-line"><a href={`mailto:${LINKS.emailPro}`}>{LINKS.emailPro}</a></p>
        </div>
        <div>
          <p className="foot-label">Profiles</p>
          {PROFILE_LINKS.map((l) => (
            <p className="foot-line" key={l.label}>
              <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
            </p>
          ))}
        </div>
        <div>
          <p className="foot-label">Navigate</p>
          {NAV.map((item) => (
            <p className="foot-line" key={item.to}><Link to={item.to}>{item.label}</Link></p>
          ))}
          <p className="foot-line"><Link to="/teaching/python-for-finance">Python for Finance</Link></p>
        </div>
      </div>
      <div className="wrap colophon">
        © {new Date().getFullYear()} Eva Cheng. Publications are synchronized from{" "}
        <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID</a>. {COPYRIGHT_NOTICE}
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function PageHead({ title }) {
  useEffect(() => {
    document.title = title ? `${title} — Eva Cheng` : "Eva Cheng — Sustainable & Quantitative Finance";
  }, [title]);
  return null;
}

function Portrait() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="portrait portrait-fallback" aria-hidden="true">EC</div>;
  }
  return (
    <img className="portrait" src={PHOTO_URL} alt="Portrait of Eva Cheng"
      onError={() => setFailed(true)} />
  );
}

/* ---------- Pages ---------- */

function HomePage() {
  return (
    <>
      <PageHead title="" />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="hero-aff">{AFFILIATION}</p>
            <h1 className="hero-name">Eva Cheng</h1>
            <p className="hero-lede">{HERO_LEDE}</p>
            <div className="btn-row">
              <Link className="btn btn-solid" to="/research">Research</Link>
              <a className="btn" href={LINKS.cvEN} target="_blank" rel="noreferrer">Curriculum Vitae (PDF)</a>
            </div>
            <ul className="hero-profiles" aria-label="Profiles">
              {PROFILE_LINKS.map((l) => (
                <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="hero-side">
            <Portrait />
            <dl className="fact-list">
              <div className="fact">
                <dt>Fields</dt>
                <dd>Sustainable finance, quantitative finance, AI applied to finance</dd>
              </div>
              <div className="fact">
                <dt>Methods</dt>
                <dd>Econometrics, asset and property pricing, machine learning</dd>
              </div>
              <div className="fact">
                <dt>Languages</dt>
                <dd>{LANGUAGES.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="About" />
          <div className="cols">
            <div className="prose">
              {BIO.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            <div>
              <p className="side-label">Research interests</p>
              <ul className="plain-list">
                {INTERESTS.map((t) => (<li key={t}>{t}</li>))}
              </ul>
              <p className="side-label mt">Technical skills</p>
              <p className="side-text">{SKILLS.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Contents" />
          <div className="index-grid">
            {[
              { to: "/research", h: "Research", p: "Publications synchronized from ORCID, working papers, theses and side projects." },
              { to: "/teaching", h: "Teaching", p: "Python for Finance at Audencia: eight sessions, a final project and references." },
              { to: "/cv", h: "Curriculum Vitae", p: "Education, academic positions and professional experience. Full CV in English and French." },
            ].map((c, i) => (
              <Link to={c.to} className="index-item" key={c.to}>
                <span className="index-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </div>
                <span className="index-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResearchPage() {
  const { status, works } = useOrcidWorks();
  const curated = useMemo(() => [...WORKING_PAPERS, ...REPORTS], []);

  const merged = works.map((w) => mergeWithCurated(w, curated));
  const curatedNotInOrcid = curated.filter(
    (p) => !works.some((w) => sameWork(w.title, p.title))
  );
  const wpNotInOrcid = curatedNotInOrcid.filter((p) => WORKING_PAPERS.includes(p));
  const reportsNotInOrcid = curatedNotInOrcid.filter((p) => REPORTS.includes(p));
  const pubCount = status === "ready" ? merged.length + wpNotInOrcid.length : null;

  return (
    <>
      <PageHead title="Research" />
      <section className="page-hero">
        <div className="wrap">
          <h1 className="page-title">Research</h1>
          <p className="page-sub">{RESEARCH_STATEMENT[0]}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            title="Publications and working papers"
            meta={pubCount ? `${pubCount} ${pubCount > 1 ? "entries" : "entry"} · ORCID ${ORCID_ID}` : `ORCID ${ORCID_ID}`}
          />

          {status === "loading" && (
            <div className="skeleton-list" aria-hidden="true">
              <div className="skeleton" /><div className="skeleton" />
            </div>
          )}
          {status === "error" && (
            <p className="notice">
              The ORCID record could not be loaded. It remains available on{" "}
              <a href={LINKS.orcid} target="_blank" rel="noreferrer">orcid.org</a> and{" "}
              <a href={LINKS.scholar} target="_blank" rel="noreferrer">Google Scholar</a>.
              The entries below are listed from this site's records.
            </p>
          )}

          <div className="pub-list">
            {merged.map((w) => (
              <PubItem key={w.putCode} title={w.title}
                authors={w.matched ? w.authors : (w.contributors.length > 0 ? w.contributors.join(", ") : null)}
                venue={w.matched ? w.venue : (w.journal || w.type)}
                year={w.year}
                link={w.matched ? w.link : (w.url ? { label: "View", url: w.url } : null)}
                citation={w.citation} abstract={w.abstract} />
            ))}
            {(status !== "loading" ? wpNotInOrcid : []).map((p) => (
              <PubItem key={p.title} title={p.title} authors={p.authors} venue={p.venue}
                year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
            ))}
          </div>
        </div>
      </section>

      {(status === "loading" || reportsNotInOrcid.length > 0) && (
        <section className="section">
          <div className="wrap">
            <SectionHead title="Theses and research reports" />
            <div className="pub-list">
              {(status !== "loading" ? reportsNotInOrcid : REPORTS).map((p) => (
                <PubItem key={p.title} title={p.title} authors={p.authors} venue={p.venue}
                  year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <SectionHead title="Research interests" />
          <div className="cols">
            <div className="prose">
              {RESEARCH_STATEMENT.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            <ul className="plain-list">
              {INTERESTS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Side projects" />
          <div className="pub-list">
            {PROJECTS.map((p) => (
              <article className="pub" key={p.name}>
                <div className="pub-year" />
                <div className="pub-main">
                  <h3 className="pub-title">
                    {p.link ? (
                      <a className="quiet-link" href={p.link.url} target="_blank" rel="noreferrer">{p.name}</a>
                    ) : p.name}
                  </h3>
                  <p className="pub-authors">{p.description}</p>
                  <p className="pub-venue">{p.tags.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="cta-line">
            <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[RESEARCH]`}>Discuss research</a>
          </p>
        </div>
      </section>
    </>
  );
}

function TeachingPage() {
  return (
    <>
      <PageHead title="Teaching" />
      <section className="page-hero">
        <div className="wrap">
          <h1 className="page-title">Teaching</h1>
          <p className="page-sub">
            Postgraduate teaching in Python, quantitative finance and data analysis at Audencia Business School.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Current teaching" />
          <div className="cols">
            <div className="prose">
              {TEACHING_EXPERIENCE.map((t) => (
                <div key={t.role}>
                  <h3 className="sub-heading">{t.role}</h3>
                  <p className="pub-venue">
                    <a href={t.orgUrl} target="_blank" rel="noreferrer">{t.org}</a> · {t.period}
                  </p>
                  <p className="mt-sm">{t.details}</p>
                </div>
              ))}
            </div>
            <Link to="/teaching/python-for-finance" className="index-item index-solo">
              <span className="index-n">→</span>
              <div>
                <h3>Python for Finance</h3>
                <p>Complete course material: eight sessions, a final project and additional references.</p>
              </div>
              <span className="index-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="cta-line">
            <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[TEACHING]`}>Contact about teaching</a>
          </p>
        </div>
      </section>
    </>
  );
}

function CoursePage() {
  return (
    <>
      <PageHead title={COURSE.title} />
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/teaching">Teaching</Link> / Python for Finance
          </p>
          <h1 className="page-title">{COURSE.title}</h1>
          <p className="page-sub">{COURSE.org}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Course description" />
          <div className="cols">
            <p className="prose">{COURSE.description}</p>
            <div>
              <p className="side-label">Learning outcomes</p>
              <ul className="plain-list">
                {COURSE.outcomes.map((o) => (<li key={o}>{o}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Course content" meta={`${COURSE.sessions.length} pages`} />
          <div className="session-list">
            {COURSE.sessions.map((s) => (
              <Link to={`/teaching/python-for-finance/${s.slug}`} className="session-row" key={s.slug}>
                <span className="session-label">{s.label}</span>
                <span className="session-title">{s.title}</span>
                <span className="index-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="notice mt">{COURSE.ipNotice}</p>
        </div>
      </section>
    </>
  );
}

function SessionPage() {
  const { slug } = useParams();
  const index = COURSE.sessions.findIndex((s) => s.slug === slug);
  const session = COURSE.sessions[index];
  if (!session) return <NotFoundPage />;
  const prev = COURSE.sessions[index - 1];
  const next = COURSE.sessions[index + 1];

  return (
    <>
      <PageHead title={`${session.label} · ${COURSE.title}`} />
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/teaching">Teaching</Link> /{" "}
            <Link to="/teaching/python-for-finance">Python for Finance</Link> /{" "}
            {session.label}
          </p>
          <h1 className="page-title">{session.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {session.embedUrl ? (
            <div className="embed-frame">
              <iframe src={session.embedUrl} title={`${session.label} — ${session.title}`}
                allowFullScreen loading="lazy" />
            </div>
          ) : (
            <p className="notice">
              The material for this session is available on request.{" "}
              <a href={`mailto:${LINKS.emailPro}?subject=[QUESTION_PYTHON] ${session.label}`}>
                Contact me by email
              </a>{" "}
              to receive it. {COURSE.ipNotice}
            </p>
          )}
          <nav className="pager" aria-label="Sessions">
            {prev ? (
              <Link className="btn" to={`/teaching/python-for-finance/${prev.slug}`}>← {prev.label}</Link>
            ) : <span />}
            {next ? (
              <Link className="btn" to={`/teaching/python-for-finance/${next.slug}`}>{next.label} →</Link>
            ) : <span />}
          </nav>
        </div>
      </section>
    </>
  );
}

function CVPage() {
  return (
    <>
      <PageHead title="Curriculum Vitae" />
      <section className="page-hero">
        <div className="wrap">
          <h1 className="page-title">Curriculum Vitae</h1>
          <div className="btn-row">
            <a className="btn btn-solid" href={LINKS.cvEN} target="_blank" rel="noreferrer">Download (English)</a>
            <a className="btn" href={LINKS.cvFR} target="_blank" rel="noreferrer">Télécharger (français)</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Academic positions" />
          <div className="cv-list">
            {ACADEMIC_POSITIONS.map((p) => (
              <CvEntry key={p.role + p.period} heading={p.role} org={p.org} orgUrl={p.orgUrl}
                orgDomain={p.orgDomain} period={p.period} details={p.details} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Education" />
          <div className="cv-list">
            {EDUCATION.map((e) => (
              <CvEntry key={e.degree} heading={e.degree} org={e.school} orgUrl={e.orgUrl}
                orgDomain={e.orgDomain} period={e.year} honors={e.honors} details={e.details} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Professional experience" />
          <div className="cv-list">
            {PROFESSIONAL_EXPERIENCE.map((w) => (
              <CvEntry key={w.role + w.period} heading={w.role} org={w.org} orgUrl={w.orgUrl}
                orgDomain={w.orgDomain} period={w.period} details={w.details} />
            ))}
          </div>
          <p className="cta-line">
            <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[WORK]`}>Get in touch</a>
          </p>
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageHead title="Page not found" />
      <section className="page-hero">
        <div className="wrap">
          <h1 className="page-title">This page does not exist</h1>
          <div className="btn-row">
            <Link className="btn btn-solid" to="/">Back to home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- App ---------- */

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch { /* storage unavailable */ }
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* storage unavailable */ }
  }, [theme]);

  return (
    <>
      <style>{STYLES}</style>
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/teaching/python-for-finance" element={<CoursePage />} />
          <Route path="/teaching/python-for-finance/:slug" element={<SessionPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

/* ---------- Styles ---------- */

const STYLES = `
:root {
  --bg: #faf9f5;
  --bg-raised: #ffffff;
  --ink: #171916;
  --soft: #5a5f58;
  --line: #dcdbd2;
  --rule: #171916;
  --green: #175338;
  --green-soft: #2e6e4e;
  --font: "EB Garamond", Garamond, "Times New Roman", serif;
}

[data-theme="dark"] {
  --bg: #131512;
  --bg-raised: #1a1d19;
  --ink: #e9e8e0;
  --soft: #a1a69c;
  --line: #2e322c;
  --rule: #e9e8e0;
  --green: #8ecbaa;
  --green-soft: #6bb18d;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.58;
  -webkit-font-smoothing: antialiased;
  transition: background 0.25s ease, color 0.25s ease;
}

::selection { background: var(--green); color: var(--bg); }

a { color: var(--green); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { color: var(--green-soft); }
:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }

.wrap { max-width: 1240px; margin: 0 auto; padding-left: clamp(20px, 4vw, 56px); padding-right: clamp(20px, 4vw, 56px); }

.sq { display: inline-block; width: 10px; height: 10px; background: var(--green); margin-right: 14px; flex-shrink: 0; }

.mt { margin-top: 24px; }
.mt-sm { margin-top: 12px; }

/* --- header --- */
.site-header { border-bottom: 2px solid var(--rule); background: var(--bg); position: sticky; top: 0; z-index: 30; }
.header-inner { display: flex; align-items: center; gap: 34px; padding-top: 18px; padding-bottom: 16px; }
.wordmark {
  display: flex; align-items: center;
  font-weight: 600; font-size: 1.25rem; color: var(--ink); text-decoration: none;
  letter-spacing: 0.01em;
}
.nav { display: flex; gap: 30px; margin-left: auto; }
.nav a {
  font-size: 0.78rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--soft); text-decoration: none; padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav a:hover { color: var(--ink); }
.nav a.active { color: var(--ink); border-bottom-color: var(--green); }
.theme-toggle, .menu-toggle {
  border: none; background: none; color: var(--soft); cursor: pointer;
  font-family: var(--font); font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase;
  padding: 0;
}
.theme-toggle:hover, .menu-toggle:hover { color: var(--green); }
.menu-toggle { display: none; }
.mobile-nav { display: flex; flex-direction: column; border-top: 1px solid var(--line); padding-top: 8px; padding-bottom: 16px; }
.mobile-nav a {
  font-size: 0.85rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ink); text-decoration: none; padding: 12px 0;
  border-bottom: 1px solid var(--line);
}
.mobile-nav a.active { color: var(--green); }
.mobile-theme { text-align: left; padding: 14px 0 4px; }

/* --- hero --- */
.hero { border-bottom: 2px solid var(--rule); padding: clamp(40px, 6vh, 68px) 0 clamp(36px, 5vh, 56px); }
.hero-grid { display: grid; grid-template-columns: 1fr minmax(280px, 380px); gap: clamp(36px, 6vw, 96px); align-items: start; }
.hero-aff {
  font-size: 0.78rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--green);
}
.hero-name {
  font-weight: 600; font-size: clamp(2.7rem, 5.5vw, 4.1rem);
  line-height: 1.02; letter-spacing: -0.01em; margin: 14px 0 20px;
}
.hero-lede { max-width: 640px; font-size: 1.16rem; line-height: 1.6; color: var(--soft); }
.btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.hero-profiles { list-style: none; display: flex; flex-wrap: wrap; gap: 8px 26px; margin-top: 26px; }
.hero-profiles a {
  font-size: 0.74rem; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--soft); text-decoration: none; border-bottom: 1px solid var(--line); padding-bottom: 3px;
}
.hero-profiles a:hover { color: var(--green); border-color: var(--green); }

.hero-side { display: flex; flex-direction: column; gap: 22px; }
.portrait {
  width: 100%; max-width: 300px; aspect-ratio: 4 / 4.6; object-fit: cover;
  border: 1px solid var(--rule); display: block;
}
.portrait-fallback {
  display: grid; place-items: center; font-weight: 600; font-size: 3rem;
  color: var(--green); background: var(--bg-raised);
}
.fact-list { border-top: 1px solid var(--line); }
.fact { display: grid; grid-template-columns: 92px 1fr; gap: 14px; padding: 10px 0; border-bottom: 1px solid var(--line); }
.fact dt { font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); padding-top: 4px; }
.fact dd { font-size: 0.95rem; }

/* --- page hero --- */
.page-hero { border-bottom: 2px solid var(--rule); padding: clamp(32px, 5vh, 52px) 0 clamp(26px, 4vh, 40px); }
.page-title { font-weight: 600; font-size: clamp(2.1rem, 4.5vw, 3.1rem); line-height: 1.05; letter-spacing: -0.008em; }
.page-sub { max-width: 700px; font-size: 1.08rem; color: var(--soft); margin-top: 14px; }
.crumbs { font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); margin-bottom: 12px; }
.crumbs a { color: var(--green); text-decoration: none; }
.crumbs a:hover { text-decoration: underline; }

/* --- buttons --- */
.btn {
  display: inline-block; font-family: var(--font);
  font-size: 0.76rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase;
  padding: 11px 22px; border: 1px solid var(--rule); color: var(--ink);
  background: none; text-decoration: none; cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.btn:hover { border-color: var(--green); color: var(--green); }
.btn-solid { background: var(--rule); color: var(--bg); }
.btn-solid:hover { background: var(--green); border-color: var(--green); color: var(--bg); }
.text-link {
  font-family: var(--font); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--green); background: none; border: none; padding: 0; margin-top: 8px; cursor: pointer;
}
.text-link:hover { text-decoration: underline; text-underline-offset: 3px; }

/* --- sections --- */
.section { padding: clamp(34px, 5vh, 52px) 0; }
.section + .section { padding-top: 0; }
.sec-head {
  display: flex; align-items: baseline; justify-content: space-between; gap: 24px;
  border-top: 2px solid var(--rule); padding-top: 16px; margin-bottom: 28px;
}
.sec-title { display: flex; align-items: center; font-weight: 600; font-size: 1.5rem; letter-spacing: -0.005em; }
.sec-meta { font-size: 0.74rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); white-space: nowrap; }
.sub-heading { font-weight: 600; font-size: 1.28rem; }

.cols { display: grid; grid-template-columns: 3fr 2fr; gap: clamp(32px, 5vw, 80px); align-items: start; }
.prose { max-width: 72ch; }
.prose p + p, .prose div + div { margin-top: 15px; }
.cta-line { margin-top: 30px; }

.side-label {
  font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--soft); margin-bottom: 10px;
}
.side-text { font-size: 1rem; }
.plain-list { list-style: none; }
.plain-list li {
  padding: 7px 0 7px 22px; position: relative; font-size: 1rem;
  border-bottom: 1px solid var(--line);
}
.plain-list li::before {
  content: ""; position: absolute; left: 2px; top: 15px;
  width: 7px; height: 7px; background: var(--green);
}

/* --- index (contents) --- */
.index-grid { display: grid; grid-template-columns: 1fr; border-top: 1px solid var(--line); }
.index-item {
  display: grid; grid-template-columns: 56px 1fr 30px; gap: 20px; align-items: baseline;
  padding: 20px 4px; border-bottom: 1px solid var(--line);
  color: var(--ink); text-decoration: none;
  transition: background 0.15s ease, padding-left 0.15s ease;
}
.index-item:hover { background: var(--bg-raised); padding-left: 14px; color: var(--ink); }
.index-item:hover .index-arrow { color: var(--green); transform: translateX(4px); }
.index-n { font-size: 0.78rem; letter-spacing: 0.14em; color: var(--green); font-weight: 600; }
.index-item h3 { font-weight: 600; font-size: 1.28rem; }
.index-item p { color: var(--soft); font-size: 0.97rem; margin-top: 4px; }
.index-arrow { color: var(--soft); transition: transform 0.15s ease, color 0.15s ease; text-align: right; }
.index-solo { border-top: 1px solid var(--line); align-self: start; }

/* --- publications --- */
.pub-list { border-top: 1px solid var(--line); }
.pub {
  display: grid; grid-template-columns: 64px 1fr; gap: 22px;
  padding: 18px 4px; border-bottom: 1px solid var(--line);
  transition: background 0.15s ease;
}
.pub:hover { background: var(--bg-raised); }
.pub-year { font-size: 0.88rem; font-weight: 600; color: var(--green); padding-top: 4px; }
.pub-title { font-weight: 600; font-size: 1.18rem; line-height: 1.38; }
.pub-authors { font-size: 1rem; margin-top: 5px; }
.pub-venue { font-style: italic; font-size: 0.95rem; color: var(--soft); margin-top: 2px; }
.pub-actions { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 10px; }
.pub-actions a, .pub-actions button {
  font-family: var(--font); font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--green); background: none; border: none; padding: 0; cursor: pointer; text-decoration: none;
}
.pub-actions a:hover, .pub-actions button:hover { text-decoration: underline; text-underline-offset: 3px; }
.pub-abstract {
  margin-top: 12px; padding-left: 18px; border-left: 3px solid var(--green);
  color: var(--soft); font-size: 0.98rem; line-height: 1.62; max-width: 78ch;
}
.quiet-link { color: var(--ink); text-decoration: none; }
.quiet-link:hover { color: var(--green); }

.skeleton-list { border-top: 1px solid var(--line); }
.skeleton {
  height: 96px; border-bottom: 1px solid var(--line);
  background: linear-gradient(100deg, transparent 40%, var(--bg-raised) 50%, transparent 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  border: 1px solid var(--line); border-left: 3px solid var(--green);
  background: var(--bg-raised); padding: 15px 19px; font-size: 0.98rem;
}

/* --- cite modal --- */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 50;
  background: color-mix(in srgb, #000 42%, transparent);
  display: grid; place-items: center; padding: 20px;
}
.modal {
  width: min(640px, 100%); background: var(--bg);
  border: 2px solid var(--rule); padding: 20px 22px;
}
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.seg { display: inline-flex; gap: 20px; }
.seg button {
  font-family: var(--font); font-size: 0.76rem; letter-spacing: 0.16em; text-transform: uppercase;
  padding: 0 0 3px; border: none; background: none; color: var(--soft); cursor: pointer;
  border-bottom: 2px solid transparent;
}
.seg button.on { color: var(--ink); border-bottom-color: var(--green); }
.modal-close { border: none; background: none; color: var(--soft); cursor: pointer; font-size: 0.95rem; }
.modal-close:hover { color: var(--ink); }
.cite-block {
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 0.76rem; line-height: 1.6;
  background: var(--bg-raised); border: 1px solid var(--line);
  padding: 14px 16px; white-space: pre-wrap; word-break: break-word; color: var(--ink);
}
.modal-foot { display: flex; justify-content: flex-end; margin-top: 14px; }

/* --- CV --- */
.cv-list { border-top: 1px solid var(--line); }
.cv-entry {
  display: grid; grid-template-columns: 48px 1fr auto; gap: 20px;
  padding: 16px 4px; border-bottom: 1px solid var(--line);
  transition: background 0.15s ease;
}
.cv-entry:hover { background: var(--bg-raised); }
.org-mark {
  width: 44px; height: 44px; object-fit: contain;
  border: 1px solid var(--line); background: #fff; padding: 6px; margin-top: 3px;
}
.org-mark-fallback {
  display: grid; place-items: center; font-weight: 600; font-size: 1.25rem;
  color: var(--green); background: var(--bg-raised); padding: 0;
}
.cv-heading { font-weight: 600; font-size: 1.12rem; line-height: 1.35; }
.cv-org { font-size: 0.98rem; margin-top: 3px; }
.cv-org a { color: var(--soft); text-decoration: none; border-bottom: 1px solid var(--line); }
.cv-org a:hover { color: var(--green); border-color: var(--green); }
.cv-honors { font-style: italic; color: var(--green); }
.cv-period { font-size: 0.82rem; font-weight: 600; letter-spacing: 0.06em; color: var(--soft); white-space: nowrap; padding-top: 5px; }
.cv-details {
  margin-top: 10px; padding-left: 18px; border-left: 3px solid var(--green);
  color: var(--soft); font-size: 0.96rem; line-height: 1.6; max-width: 76ch;
}

/* --- course --- */
.session-list { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.session-row {
  display: grid; grid-template-columns: 130px 1fr 30px; gap: 20px; align-items: baseline;
  padding: 15px 4px; border-bottom: 1px solid var(--line);
  color: var(--ink); text-decoration: none;
  transition: background 0.15s ease, padding-left 0.15s ease;
}
.session-row:hover { background: var(--bg-raised); padding-left: 14px; color: var(--ink); }
.session-row:hover .index-arrow { color: var(--green); transform: translateX(4px); }
.session-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--green); }
.session-title { font-size: 1.05rem; }

.embed-frame { border: 1px solid var(--rule); background: var(--bg-raised); }
.embed-frame iframe { display: block; width: 100%; height: 76vh; border: 0; }
.pager { display: flex; justify-content: space-between; margin-top: 28px; }

/* --- footer --- */
.site-footer { border-top: 2px solid var(--rule); margin-top: 30px; }
.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: clamp(24px, 4vw, 56px);
  padding-top: 38px; padding-bottom: 26px;
}
.footer-name { display: flex; align-items: center; font-weight: 600; font-size: 1.3rem; }
.footer-aff { color: var(--soft); font-size: 0.95rem; margin-top: 10px; max-width: 34ch; }
.foot-label {
  font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--soft); margin-bottom: 10px;
}
.foot-line { font-size: 0.96rem; line-height: 1.9; }
.foot-line a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--line); }
.foot-line a:hover { color: var(--green); border-color: var(--green); }
.colophon {
  border-top: 1px solid var(--line); padding-top: 16px; padding-bottom: 24px;
  font-size: 0.8rem; color: var(--soft); line-height: 1.6;
}

/* --- print --- */
@media print {
  .site-header, .site-footer, .btn-row, .cta-line { display: none !important; }
  body { background: #fff; color: #000; }
}

/* --- responsive --- */
@media (max-width: 820px) {
  body { font-size: 17px; }
  .nav, .header-inner .theme-toggle { display: none; }
  .menu-toggle { display: block; margin-left: auto; }
  .hero-grid { grid-template-columns: 1fr; gap: 30px; }
  .portrait, .portrait-fallback { max-width: 200px; }
  .cols { grid-template-columns: 1fr; gap: 28px; }
  .pub { grid-template-columns: 1fr; gap: 2px; }
  .pub-year { padding-top: 0; }
  .cv-entry { grid-template-columns: 40px 1fr; }
  .org-mark { width: 38px; height: 38px; }
  .cv-period { grid-column: 2; padding-top: 0; }
  .index-item { grid-template-columns: 40px 1fr 24px; gap: 14px; }
  .session-row { grid-template-columns: 1fr 24px; gap: 4px 12px; }
  .session-label { grid-column: 1 / -1; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
`;