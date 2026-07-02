import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, AFFILIATION, HERO_LEDE, BIO, SKILLS, LANGUAGES,
  RESEARCH_STATEMENT, INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, WORK_EXPERIENCE, COURSE, COPYRIGHT_NOTICE,
} from "./content.js";

/* ============================================================
   Eva Cheng — Academic Portfolio · v6
   Modern climate-tech identity. Full-width layout, one typeface
   (Space Grotesk), gradient accents, light and dark themes.
   ORCID is the primary source for publications; curated entries
   in content.js attach abstracts, citations and links.
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

function Kicker({ children }) {
  return <p className="kicker">{children}</p>;
}

function Rise({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`rise ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
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
          <button className="btn btn-primary" onClick={() => copy(text)}>
            {copied ? "Copied ✓" : "Copy to clipboard"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PubCard({ title, authors, venue, year, type, link, citation, abstract }) {
  const [open, setOpen] = useState(false);
  const [citing, setCiting] = useState(false);
  return (
    <Rise as="article" className="pub">
      <div className="pub-meta">
        {type && <span className="chip">{type}</span>}
        {year && <span className="pub-year">{year}</span>}
      </div>
      <h3 className="pub-title">{title}</h3>
      {authors && <p className="pub-authors">{authors}</p>}
      {venue && <p className="pub-venue">{venue}</p>}
      <div className="pub-actions">
        {link && (
          <a className="btn btn-small" href={link.url} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        )}
        {citation && <button className="btn btn-small" onClick={() => setCiting(true)}>Cite</button>}
        {abstract && (
          <button className="btn btn-small btn-ghost" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Hide abstract" : "Abstract"}
          </button>
        )}
      </div>
      {open && <p className="pub-abstract">{abstract}</p>}
      {citing && <CiteModal citation={citation} onClose={() => setCiting(false)} />}
    </Rise>
  );
}

/* Institution logo: Clearbit first (real brand logos), then favicon, then initial */
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

function CvCard({ heading, org, orgUrl, orgDomain, period, honors, details }) {
  const [open, setOpen] = useState(false);
  return (
    <Rise as="article" className="cv-card">
      <div className="cv-head">
        <OrgMark domain={orgDomain} name={org} />
        <div className="cv-id">
          <h3 className="cv-heading">{heading}</h3>
          <p className="cv-org">
            {orgUrl ? <a href={orgUrl} target="_blank" rel="noreferrer">{org}</a> : org}
          </p>
        </div>
        <span className="cv-period">{period}</span>
      </div>
      {honors && <p className="cv-honors">✦ {honors}</p>}
      {details && (
        <>
          <button className="btn btn-small btn-ghost" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Hide details" : "Details"}
          </button>
          {open && <p className="cv-details">{details}</p>}
        </>
      )}
    </Rise>
  );
}

/* ---------- Chrome ---------- */

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/teaching", label: "Teaching" },
  { to: "/cv", label: "CV" },
];

function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen((o) => {
      document.body.style.overflow = o ? "" : "hidden";
      return !o;
    });
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link className="wordmark" to="/">
          <span className="wordmark-dot" aria-hidden="true" />
          Eva Cheng
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a className="btn btn-small btn-primary header-cta" href={LINKS.cvEN} target="_blank" rel="noreferrer">
            CV ↗
          </a>
          <button className="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" aria-label="Main mobile">
          {NAV.map((item, i) => (
            <NavLink key={item.to} to={item.to} end={item.end}
              style={{ transitionDelay: `${50 + i * 45}ms` }}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Ticker() {
  const items = [...INTERESTS, ...INTERESTS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span className="ticker-item" key={i}>{t}<span className="ticker-dot">●</span></span>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-main">
          <h2 className="footer-title">
            Let's talk about <span className="grad">sustainable finance</span>.
          </h2>
          <div className="btn-row">
            <a className="btn btn-primary" href={`mailto:${LINKS.emailAcademic}?subject=[RESEARCH]`}>
              {LINKS.emailAcademic}
            </a>
            <a className="btn" href={`mailto:${LINKS.emailPro}`}>{LINKS.emailPro}</a>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <p className="footer-label">Profiles</p>
            <ul>
              {PROFILE_LINKS.map((l) => (
                <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">Navigate</p>
            <ul>
              {NAV.map((item) => (<li key={item.to}><Link to={item.to}>{item.label}</Link></li>))}
              <li><Link to="/teaching/python-for-finance">Python for Finance</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap colophon">
        © {new Date().getFullYear()} Eva Cheng · {AFFILIATION} · Publications synchronized
        from <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID</a>. {COPYRIGHT_NOTICE}
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
  return (
    <div className="portrait-ring">
      {failed ? (
        <div className="portrait portrait-fallback" aria-hidden="true">EC</div>
      ) : (
        <img className="portrait" src={PHOTO_URL} alt="Portrait of Eva Cheng"
          onError={() => setFailed(true)} />
      )}
    </div>
  );
}

/* ---------- Pages ---------- */

function HomePage() {
  return (
    <>
      <PageHead title="" />
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-content">
            <Rise delay={0}>
              <p className="hero-aff">
                <span className="pulse" aria-hidden="true" />
                {AFFILIATION}
              </p>
            </Rise>
            <Rise delay={70}>
              <h1 className="hero-name">
                Eva Cheng<span className="grad">.</span>
              </h1>
            </Rise>
            <Rise delay={150}>
              <p className="hero-lede">{HERO_LEDE}</p>
            </Rise>
            <Rise delay={230} className="btn-row">
              <Link className="btn btn-primary btn-lg" to="/research">Explore my research</Link>
              <a className="btn btn-lg" href={LINKS.cvEN} target="_blank" rel="noreferrer">Download CV ↗</a>
            </Rise>
            <Rise delay={310}>
              <ul className="hero-profiles" aria-label="Profiles">
                {PROFILE_LINKS.map((l) => (
                  <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
                ))}
              </ul>
            </Rise>
          </div>
          <Rise delay={140} className="hero-photo">
            <Portrait />
          </Rise>
        </div>
        <Ticker />
      </section>

      <section className="band">
        <div className="wrap">
          <Kicker>About</Kicker>
          <Rise>
            <h2 className="section-title">
              Finance × sustainability × <span className="grad">AI</span>
            </h2>
          </Rise>
          <div className="about-grid">
            <Rise className="prose">
              {BIO.map((p, i) => (<p key={i}>{p}</p>))}
            </Rise>
            <Rise delay={90} className="stack">
              <div className="panel">
                <p className="panel-label">Technical skills</p>
                <div className="chip-row">
                  {SKILLS.map((s) => (<span className="chip" key={s}>{s}</span>))}
                </div>
              </div>
              <div className="panel">
                <p className="panel-label">Languages</p>
                <div className="chip-row">
                  {LANGUAGES.map((l) => (<span className="chip chip-quiet" key={l}>{l}</span>))}
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Kicker>Explore</Kicker>
          <div className="feature-grid">
            {[
              { to: "/research", n: "01", h: "Research", p: "Publications synchronized from ORCID, working papers, theses and side projects." },
              { to: "/teaching", n: "02", h: "Teaching", p: "Python for Finance at Audencia: eight sessions, a final project and references." },
              { to: "/cv", n: "03", h: "Curriculum Vitae", p: "Education and professional experience, with the full CV in English and French." },
            ].map((c, i) => (
              <Rise as={Link} to={c.to} className="feature" key={c.to} delay={i * 80}>
                <span className="feature-n">{c.n}</span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <span className="feature-arrow" aria-hidden="true">→</span>
              </Rise>
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

  return (
    <>
      <PageHead title="Research" />
      <section className="page-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <Kicker>Research</Kicker>
          <Rise><h1 className="page-title">Research &amp; <span className="grad">projects</span></h1></Rise>
        </div>
      </section>

      <section className="band">
        <div className="wrap about-grid">
          <Rise className="prose">
            {RESEARCH_STATEMENT.map((p, i) => (<p key={i}>{p}</p>))}
          </Rise>
          <Rise delay={90} className="panel">
            <p className="panel-label">Research interests</p>
            <div className="chip-row">
              {INTERESTS.map((t) => (<span className="chip" key={t}>{t}</span>))}
            </div>
          </Rise>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Kicker>Publications</Kicker>
          <Rise>
            <h2 className="section-title">Publications &amp; <span className="grad">working papers</span></h2>
            <p className="section-note">
              Synchronized from <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID {ORCID_ID}</a>.
            </p>
          </Rise>

          {status === "loading" && (
            <div className="skeleton-list" aria-hidden="true">
              <div className="skeleton" /><div className="skeleton" />
            </div>
          )}
          {status === "error" && (
            <Rise className="notice">
              The ORCID record could not be loaded. It remains available on{" "}
              <a href={LINKS.orcid} target="_blank" rel="noreferrer">orcid.org</a> and{" "}
              <a href={LINKS.scholar} target="_blank" rel="noreferrer">Google Scholar</a>.
              The entries below are listed from this site's records.
            </Rise>
          )}

          <div className="pub-grid">
            {merged.map((w) => (
              <PubCard key={w.putCode} title={w.title}
                authors={w.matched ? w.authors : (w.contributors.length > 0 ? w.contributors.join(", ") : null)}
                venue={w.matched ? w.venue : w.journal}
                type={w.type} year={w.year}
                link={w.matched ? w.link : (w.url ? { label: "View", url: w.url } : null)}
                citation={w.citation} abstract={w.abstract} />
            ))}
            {(status !== "loading" ? wpNotInOrcid : []).map((p) => (
              <PubCard key={p.title} title={p.title} authors={p.authors} venue={null}
                type={p.venue} year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
            ))}
          </div>
        </div>
      </section>

      {(status === "loading" || reportsNotInOrcid.length > 0) && (
        <section className="band">
          <div className="wrap">
            <Kicker>Reports</Kicker>
            <Rise><h2 className="section-title">Theses &amp; <span className="grad">research reports</span></h2></Rise>
            <div className="pub-grid">
              {(status !== "loading" ? reportsNotInOrcid : REPORTS).map((p) => (
                <PubCard key={p.title} title={p.title} authors={p.authors} venue={null}
                  type={p.venue} year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="band band-alt">
        <div className="wrap">
          <Kicker>Lab</Kicker>
          <Rise><h2 className="section-title">Side <span className="grad">projects</span></h2></Rise>
          <div className="feature-grid">
            {PROJECTS.map((p, i) => (
              <Rise as="article" className="feature feature-static" key={p.name} delay={i * 80}>
                <h3>
                  {p.link ? (
                    <a className="quiet-link" href={p.link.url} target="_blank" rel="noreferrer">{p.name} ↗</a>
                  ) : p.name}
                </h3>
                <p>{p.description}</p>
                <div className="chip-row">
                  {p.tags.map((t) => (<span className="chip chip-quiet" key={t}>{t}</span>))}
                </div>
              </Rise>
            ))}
          </div>
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
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <Kicker>Teaching</Kicker>
          <Rise><h1 className="page-title">Teaching <span className="grad">quantitative finance</span></h1></Rise>
        </div>
      </section>

      <section className="band">
        <div className="wrap about-grid">
          <Rise className="prose">
            {TEACHING_EXPERIENCE.map((t) => (
              <div key={t.role}>
                <h2 className="sub-heading">{t.role}</h2>
                <p className="pub-venue">
                  <a href={t.orgUrl} target="_blank" rel="noreferrer">{t.org}</a> · {t.period}
                </p>
                <p className="mt-sm">{t.details}</p>
              </div>
            ))}
          </Rise>
          <Rise delay={90} as={Link} to="/teaching/python-for-finance" className="feature">
            <span className="feature-n">→</span>
            <h3>Python for Finance</h3>
            <p>Complete course material: eight sessions, a final project and additional references.</p>
            <span className="feature-arrow" aria-hidden="true">→</span>
          </Rise>
        </div>
        <div className="wrap cta-line">
          <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[TEACHING]`}>Contact about teaching</a>
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
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <Kicker>
            <Link to="/teaching" className="crumb">Teaching</Link> / Python for Finance
          </Kicker>
          <Rise><h1 className="page-title">{COURSE.title}<span className="grad">.</span></h1></Rise>
          <Rise delay={70}><p className="section-note">{COURSE.org}</p></Rise>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Rise className="prose narrow">
            <p>{COURSE.description}</p>
          </Rise>
          <Kicker>Learning outcomes</Kicker>
          <ul className="outcome-grid">
            {COURSE.outcomes.map((o, i) => (
              <Rise as="li" key={o} delay={i * 40}>{o}</Rise>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Kicker>Content</Kicker>
          <Rise><h2 className="section-title">Direct access to the <span className="grad">material</span></h2></Rise>
          <div className="session-list">
            {COURSE.sessions.map((s, i) => (
              <Rise as={Link} to={`/teaching/python-for-finance/${s.slug}`}
                className="session-row" key={s.slug} delay={i * 30}>
                <span className="session-label">{s.label}</span>
                <span className="session-title">{s.title}</span>
                <span className="session-arrow" aria-hidden="true">→</span>
              </Rise>
            ))}
          </div>
          <Rise className="notice mt">{COURSE.ipNotice}</Rise>
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
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <Kicker>
            <Link to="/teaching" className="crumb">Teaching</Link> /{" "}
            <Link to="/teaching/python-for-finance" className="crumb">Python for Finance</Link> /{" "}
            {session.label}
          </Kicker>
          <Rise><h1 className="page-title">{session.title}</h1></Rise>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          {session.embedUrl ? (
            <div className="embed-frame">
              <iframe src={session.embedUrl} title={`${session.label} — ${session.title}`}
                allowFullScreen loading="lazy" />
            </div>
          ) : (
            <Rise className="notice">
              The material for this session is available on request.{" "}
              <a href={`mailto:${LINKS.emailPro}?subject=[QUESTION_PYTHON] ${session.label}`}>
                Contact me by email
              </a>{" "}
              to receive it. {COURSE.ipNotice}
            </Rise>
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
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <Kicker>Curriculum Vitae</Kicker>
          <Rise><h1 className="page-title">Curriculum <span className="grad">Vitae</span></h1></Rise>
          <Rise delay={80} className="btn-row">
            <a className="btn btn-primary" href={LINKS.cvEN} target="_blank" rel="noreferrer">Download (English) ↗</a>
            <a className="btn" href={LINKS.cvFR} target="_blank" rel="noreferrer">Télécharger (français) ↗</a>
          </Rise>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Kicker>Education</Kicker>
          <div className="cv-grid">
            {EDUCATION.map((e) => (
              <CvCard key={e.degree} heading={e.degree} org={e.school} orgUrl={e.orgUrl}
                orgDomain={e.orgDomain} period={e.year} honors={e.honors} details={e.details} />
            ))}
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Kicker>Teaching experience</Kicker>
          <div className="cv-grid">
            {TEACHING_EXPERIENCE.map((t) => (
              <CvCard key={t.role} heading={t.role} org={t.org} orgUrl={t.orgUrl}
                orgDomain={t.orgDomain} period={t.period} details={t.details} />
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Kicker>Professional experience</Kicker>
          <div className="cv-grid">
            {WORK_EXPERIENCE.map((w) => (
              <CvCard key={w.role + w.period} heading={w.role} org={w.org} orgUrl={w.orgUrl}
                orgDomain={w.orgDomain} period={w.period} details={w.details} />
            ))}
          </div>
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
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <Kicker>Error 404</Kicker>
          <h1 className="page-title">This page does not exist</h1>
          <div className="btn-row">
            <Link className="btn btn-primary" to="/">Back to home</Link>
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
  --bg: #f4f7f2;
  --surface: #ffffff;
  --surface-alt: #eaf0e7;
  --ink: #0e1a13;
  --ink-soft: #4e6156;
  --line: #d8e0d4;
  --g1: #059669;
  --g2: #65a30d;
  --accent: #047857;
  --accent-ink: #065f46;
  --wash: #e2efe4;
  --glow1: rgba(5, 150, 105, 0.16);
  --glow2: rgba(101, 163, 13, 0.12);
  --shadow: 0 1px 2px rgba(14, 26, 19, 0.05), 0 10px 30px -14px rgba(14, 26, 19, 0.14);
  --shadow-hover: 0 2px 4px rgba(14, 26, 19, 0.06), 0 18px 40px -16px rgba(14, 26, 19, 0.22);
  --font: "Space Grotesk", system-ui, sans-serif;
}

[data-theme="dark"] {
  --bg: #0a0f0c;
  --surface: #121a14;
  --surface-alt: #0e1510;
  --ink: #e9f2ea;
  --ink-soft: #93a898;
  --line: #223027;
  --g1: #34d399;
  --g2: #a3e635;
  --accent: #34d399;
  --accent-ink: #6ee7b7;
  --wash: #14251b;
  --glow1: rgba(52, 211, 153, 0.13);
  --glow2: rgba(163, 230, 53, 0.08);
  --shadow: 0 0 0 1px rgba(52, 211, 153, 0.05), 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  --shadow-hover: 0 0 0 1px rgba(52, 211, 153, 0.16), 0 18px 42px -16px rgba(0, 0, 0, 0.7);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font);
  font-size: 16.5px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;
}

::selection { background: var(--g1); color: #06130c; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--line); border-radius: 8px; border: 3px solid var(--bg); }

a { color: var(--accent); text-decoration: none; }
a:hover { color: var(--accent-ink); }
:focus-visible { outline: 2px solid var(--g1); outline-offset: 2px; border-radius: 4px; }

.wrap { max-width: 1200px; margin: 0 auto; padding-left: clamp(20px, 4vw, 48px); padding-right: clamp(20px, 4vw, 48px); }

.grad {
  background: linear-gradient(92deg, var(--g1), var(--g2));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}

.mt { margin-top: 26px; }
.mt-sm { margin-top: 12px; }

.kicker {
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 16px; display: flex; align-items: center; gap: 10px;
}
.kicker::before { content: ""; width: 26px; height: 2px; background: linear-gradient(90deg, var(--g1), var(--g2)); border-radius: 2px; }
.crumb { color: var(--accent); }

/* --- header --- */
.site-header { position: sticky; top: 0; z-index: 30; transition: background 0.25s ease, border-color 0.25s ease; border-bottom: 1px solid transparent; }
.site-header.scrolled {
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border-bottom-color: var(--line);
}
.header-inner { display: flex; align-items: center; gap: 28px; padding-top: 14px; padding-bottom: 14px; }
.wordmark {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 1.05rem; letter-spacing: -0.01em; color: var(--ink);
}
.wordmark-dot {
  width: 10px; height: 10px; border-radius: 3px;
  background: linear-gradient(135deg, var(--g1), var(--g2));
  transition: transform 0.25s ease;
}
.wordmark:hover { color: var(--ink); }
.wordmark:hover .wordmark-dot { transform: rotate(45deg) scale(1.1); }

.nav { display: flex; gap: 4px; margin-left: auto; }
.nav a {
  font-size: 0.88rem; font-weight: 500; color: var(--ink-soft);
  padding: 7px 14px; border-radius: 10px;
  transition: color 0.15s ease, background 0.15s ease;
}
.nav a:hover { color: var(--ink); background: var(--wash); }
.nav a.active { color: var(--accent-ink); background: var(--wash); }

.header-actions { display: flex; align-items: center; gap: 10px; }
.theme-toggle {
  border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  width: 34px; height: 34px; border-radius: 10px; cursor: pointer; font-size: 0.9rem;
  transition: border-color 0.15s ease, transform 0.2s ease;
}
.theme-toggle:hover { border-color: var(--g1); transform: rotate(12deg); }
.menu-toggle {
  display: none; border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  width: 34px; height: 34px; border-radius: 10px; cursor: pointer; font-size: 0.95rem; z-index: 40;
}

.mobile-overlay {
  display: none; position: fixed; inset: 0; z-index: 25;
  background: color-mix(in srgb, var(--bg) 96%, transparent);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  opacity: 0; pointer-events: none; transition: opacity 0.25s ease;
}
.mobile-overlay.open { opacity: 1; pointer-events: auto; }
.mobile-nav { display: flex; flex-direction: column; padding: 100px clamp(20px, 6vw, 40px) 0; }
.mobile-nav a {
  font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; color: var(--ink);
  padding: 14px 0; border-bottom: 1px solid var(--line);
  opacity: 0; transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-overlay.open .mobile-nav a { opacity: 1; transform: none; }
.mobile-nav a.active { color: var(--accent); }

/* --- buttons --- */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font); font-size: 0.88rem; font-weight: 600;
  padding: 11px 22px; border-radius: 12px; cursor: pointer;
  border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease,
              color 0.15s ease, box-shadow 0.15s ease;
}
.btn:hover { transform: translateY(-1px); border-color: var(--g1); color: var(--accent-ink); }
.btn:active { transform: scale(0.98); }
.btn-lg { padding: 14px 28px; font-size: 0.95rem; }
.btn-small { padding: 7px 14px; font-size: 0.78rem; border-radius: 9px; }
.btn-primary {
  background: linear-gradient(92deg, var(--g1), var(--g2));
  border: none; color: #07130c;
  box-shadow: 0 8px 22px -10px var(--g1);
}
.btn-primary:hover { color: #07130c; filter: brightness(1.06); box-shadow: 0 10px 26px -10px var(--g1); }
.btn-ghost { border-color: transparent; background: transparent; color: var(--ink-soft); }
.btn-ghost:hover { background: var(--wash); border-color: transparent; }

/* --- hero --- */
.hero { position: relative; overflow: hidden; border-bottom: 1px solid var(--line); }
.hero-bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(52% 68% at 82% 8%, var(--glow1), transparent 70%),
    radial-gradient(44% 60% at 8% 88%, var(--glow2), transparent 70%);
}
.hero-grid {
  position: relative; display: grid; grid-template-columns: 1fr auto;
  gap: clamp(32px, 6vw, 80px); align-items: center;
  padding-top: clamp(48px, 8vh, 84px); padding-bottom: clamp(40px, 7vh, 72px);
}
.hero-aff {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 0.8rem; font-weight: 500; color: var(--ink-soft);
  border: 1px solid var(--line); background: var(--surface);
  padding: 7px 16px; border-radius: 999px;
}
.pulse {
  width: 8px; height: 8px; border-radius: 50%; background: var(--g1);
  box-shadow: 0 0 0 0 var(--glow1); animation: pulse 2.4s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--glow1); }
  70% { box-shadow: 0 0 0 9px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
@media (prefers-reduced-motion: reduce) { .pulse { animation: none; } }
.hero-name {
  font-weight: 700; font-size: clamp(3rem, 8.5vw, 6rem);
  line-height: 0.98; letter-spacing: -0.035em; margin: 22px 0 22px;
}
.hero-lede {
  max-width: 620px; font-size: clamp(1.02rem, 1.5vw, 1.18rem);
  line-height: 1.62; color: var(--ink-soft); font-weight: 400;
}
.btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.hero-profiles { list-style: none; display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 26px; }
.hero-profiles a {
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--ink-soft); border-bottom: 2px solid var(--line); padding-bottom: 3px;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.hero-profiles a:hover { color: var(--accent-ink); border-color: var(--g1); }

.portrait-ring {
  padding: 5px; border-radius: 28px;
  background: linear-gradient(140deg, var(--g1), var(--g2));
  box-shadow: 0 22px 44px -18px var(--glow1), var(--shadow);
}
.portrait {
  display: block; width: clamp(210px, 22vw, 280px); height: clamp(210px, 22vw, 280px);
  object-fit: cover; border-radius: 24px;
}
.portrait-fallback {
  display: grid; place-items: center; font-weight: 700; font-size: 3.4rem;
  letter-spacing: -0.03em; color: var(--accent-ink); background: var(--surface);
}

/* --- ticker --- */
.ticker { position: relative; border-top: 1px solid var(--line); overflow: hidden; background: var(--surface-alt); }
.ticker-track {
  display: flex; width: max-content; padding: 12px 0;
  animation: ticker 42s linear infinite;
}
.ticker:hover .ticker-track { animation-play-state: paused; }
@keyframes ticker { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }
.ticker-item {
  display: inline-flex; align-items: center; white-space: nowrap;
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ink-soft);
}
.ticker-dot { margin: 0 22px; font-size: 0.45rem; color: var(--g1); }

/* --- page hero --- */
.page-hero { position: relative; overflow: hidden; border-bottom: 1px solid var(--line); padding: clamp(36px, 6vh, 60px) 0 clamp(28px, 5vh, 44px); }
.page-title { font-weight: 700; font-size: clamp(2.1rem, 5.5vw, 3.6rem); line-height: 1.02; letter-spacing: -0.03em; position: relative; }
.section-note { font-size: 0.92rem; color: var(--ink-soft); margin-top: 12px; position: relative; }

/* --- bands (full-width alternating) --- */
.band { padding: clamp(40px, 6vh, 64px) 0; }
.band-alt { background: var(--surface-alt); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.band + .band { border-top: 1px solid var(--line); }
main > section:last-child { border-bottom: none; }

.section-title { font-weight: 700; font-size: clamp(1.6rem, 3.6vw, 2.3rem); letter-spacing: -0.025em; line-height: 1.08; margin-bottom: 12px; }
.sub-heading { font-weight: 700; font-size: 1.35rem; letter-spacing: -0.015em; }
.section-note + .pub-grid, .section-title + .pub-grid { margin-top: 26px; }

.about-grid { display: grid; grid-template-columns: 3fr 2fr; gap: clamp(28px, 4vw, 56px); align-items: start; margin-top: 10px; }
.prose { font-size: 1rem; color: var(--ink); max-width: 68ch; }
.prose p + p, .prose div + div { margin-top: 15px; }
.narrow { max-width: 760px; margin-bottom: 30px; }
.cta-line { margin-top: 30px; }

.stack { display: flex; flex-direction: column; gap: 14px; }
.panel {
  background: var(--surface); border: 1px solid var(--line); border-radius: 18px;
  padding: 20px 22px; box-shadow: var(--shadow);
}
.panel-label {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ink-soft); margin-bottom: 12px;
}
.chip-row { display: flex; flex-wrap: wrap; gap: 7px; }
.chip {
  font-size: 0.78rem; font-weight: 600; padding: 5px 13px; border-radius: 999px;
  background: var(--wash); color: var(--accent-ink);
}
.chip-quiet { background: transparent; border: 1px solid var(--line); color: var(--ink-soft); font-weight: 500; }

/* --- feature cards --- */
.feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 10px; }
.feature {
  position: relative; display: block; background: var(--surface);
  border: 1px solid var(--line); border-radius: 20px; padding: 26px 26px 24px;
  color: var(--ink); box-shadow: var(--shadow); overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.feature::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--g1), var(--g2));
  transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
}
.feature:hover { transform: translateY(-3px); border-color: var(--g1); box-shadow: var(--shadow-hover); color: var(--ink); }
.feature:hover::before { transform: scaleX(1); }
.feature-static:hover { transform: none; }
.feature-n {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
  color: var(--accent); display: block; margin-bottom: 14px;
}
.feature h3 { font-weight: 700; font-size: 1.2rem; letter-spacing: -0.015em; }
.feature p { color: var(--ink-soft); font-size: 0.92rem; margin-top: 9px; line-height: 1.58; }
.feature .chip-row { margin-top: 14px; }
.feature-arrow {
  position: absolute; right: 22px; bottom: 18px; color: var(--accent);
  font-size: 1.1rem; transition: transform 0.2s ease;
}
.feature:hover .feature-arrow { transform: translateX(4px); }
.quiet-link { color: var(--ink); }
.quiet-link:hover { color: var(--accent-ink); }

/* --- publications --- */
.pub-grid { display: flex; flex-direction: column; gap: 14px; margin-top: 22px; }
.pub {
  background: var(--surface); border: 1px solid var(--line); border-radius: 20px;
  padding: 24px 28px; box-shadow: var(--shadow); position: relative; overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.pub::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 3px;
  background: linear-gradient(180deg, var(--g1), var(--g2));
  opacity: 0; transition: opacity 0.2s ease;
}
.pub:hover { border-color: var(--g1); box-shadow: var(--shadow-hover); }
.pub:hover::before { opacity: 1; }
.pub-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.pub-year { font-size: 0.82rem; font-weight: 600; color: var(--ink-soft); }
.pub-title { font-weight: 700; font-size: clamp(1.05rem, 2vw, 1.3rem); line-height: 1.32; letter-spacing: -0.015em; }
.pub-authors { font-size: 0.94rem; color: var(--ink); margin-top: 7px; font-weight: 500; }
.pub-venue { font-size: 0.88rem; color: var(--ink-soft); margin-top: 3px; }
.pub-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.pub-abstract {
  margin-top: 16px; padding: 16px 18px; border-radius: 14px;
  background: var(--surface-alt); border: 1px solid var(--line);
  color: var(--ink-soft); font-size: 0.93rem; line-height: 1.66;
}

.skeleton-list { display: flex; flex-direction: column; gap: 14px; margin-top: 22px; }
.skeleton {
  height: 130px; border-radius: 20px; border: 1px solid var(--line);
  background: linear-gradient(100deg, var(--surface) 40%, var(--wash) 50%, var(--surface) 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  background: var(--wash); border: 1px solid var(--line); border-radius: 16px;
  padding: 16px 20px; font-size: 0.93rem; margin-top: 18px;
}

/* --- cite modal --- */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 50;
  background: color-mix(in srgb, #000 45%, transparent);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  display: grid; place-items: center; padding: 20px;
  animation: fadein 0.18s ease;
}
.modal {
  width: min(640px, 100%); background: var(--surface);
  border: 1px solid var(--line); border-radius: 22px; padding: 20px 22px;
  box-shadow: var(--shadow-hover);
  animation: popin 0.22s cubic-bezier(0.34, 1.4, 0.64, 1);
}
@keyframes fadein { from { opacity: 0; } }
@keyframes popin { from { opacity: 0; transform: scale(0.96) translateY(6px); } }
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.seg { display: inline-flex; background: var(--surface-alt); border: 1px solid var(--line); border-radius: 12px; padding: 3px; }
.seg button {
  font-family: var(--font); font-size: 0.82rem; font-weight: 600;
  padding: 6px 16px; border-radius: 9px; border: none; background: none;
  color: var(--ink-soft); cursor: pointer; transition: all 0.15s ease;
}
.seg button.on { background: var(--surface); color: var(--accent-ink); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.modal-close {
  border: none; background: none; color: var(--ink-soft); cursor: pointer;
  font-size: 0.95rem; width: 32px; height: 32px; border-radius: 10px;
}
.modal-close:hover { background: var(--wash); color: var(--ink); }
.cite-block {
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 0.76rem; line-height: 1.6;
  background: var(--surface-alt); border: 1px solid var(--line); border-radius: 12px;
  padding: 14px 16px; white-space: pre-wrap; word-break: break-word; color: var(--ink);
}
.modal-foot { display: flex; justify-content: flex-end; margin-top: 14px; }

/* --- CV --- */
.cv-grid { display: flex; flex-direction: column; gap: 14px; margin-top: 10px; }
.cv-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 20px;
  padding: 22px 26px; box-shadow: var(--shadow);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.cv-card:hover { border-color: var(--g1); box-shadow: var(--shadow-hover); }
.cv-head { display: grid; grid-template-columns: 52px 1fr auto; gap: 18px; align-items: center; }
.org-mark {
  width: 52px; height: 52px; border-radius: 14px; object-fit: contain;
  border: 1px solid var(--line); background: #fff; padding: 8px;
}
.org-mark-fallback {
  display: grid; place-items: center; font-weight: 700; font-size: 1.3rem;
  color: var(--accent-ink); background: var(--wash); padding: 0;
}
.cv-heading { font-weight: 700; font-size: 1.08rem; letter-spacing: -0.012em; line-height: 1.3; }
.cv-org { font-size: 0.9rem; margin-top: 3px; }
.cv-org a { color: var(--ink-soft); font-weight: 500; }
.cv-org a:hover { color: var(--accent-ink); }
.cv-period { font-size: 0.82rem; font-weight: 600; color: var(--accent); white-space: nowrap; align-self: start; margin-top: 4px; }
.cv-honors { margin-top: 12px; font-size: 0.88rem; font-weight: 600; color: var(--accent-ink); }
.cv-card .btn-ghost { margin-top: 10px; margin-left: -8px; }
.cv-details {
  margin-top: 10px; padding: 16px 18px; border-radius: 14px;
  background: var(--surface-alt); border: 1px solid var(--line);
  color: var(--ink-soft); font-size: 0.92rem; line-height: 1.64;
}

/* --- course --- */
.outcome-grid { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 30px; max-width: 900px; margin-top: 6px; }
.outcome-grid li { position: relative; padding-left: 28px; font-size: 0.95rem; }
.outcome-grid li::before {
  content: "✓"; position: absolute; left: 0; top: 1px;
  width: 19px; height: 19px; display: grid; place-items: center;
  font-size: 0.7rem; font-weight: 700; color: #07130c; border-radius: 6px;
  background: linear-gradient(135deg, var(--g1), var(--g2));
}

.session-list { display: flex; flex-direction: column; gap: 8px; margin-top: 24px; }
.session-row {
  display: grid; grid-template-columns: 130px 1fr 26px; gap: 16px; align-items: center;
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
  padding: 14px 20px; color: var(--ink);
  transition: border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}
.session-row:hover { border-color: var(--g1); transform: translateX(4px); box-shadow: var(--shadow); color: var(--ink); }
.session-row:hover .session-arrow { color: var(--accent); transform: translateX(3px); }
.session-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); }
.session-title { font-size: 0.95rem; font-weight: 500; }
.session-arrow { color: var(--ink-soft); transition: transform 0.18s ease, color 0.18s ease; text-align: right; }

.embed-frame { border: 1px solid var(--line); border-radius: 18px; overflow: hidden; background: var(--surface); box-shadow: var(--shadow); }
.embed-frame iframe { display: block; width: 100%; height: 76vh; border: 0; }
.pager { display: flex; justify-content: space-between; margin-top: 28px; }

/* --- footer --- */
.site-footer { background: var(--surface-alt); border-top: 1px solid var(--line); margin-top: 20px; }
.footer-inner {
  display: grid; grid-template-columns: 3fr 2fr; gap: clamp(28px, 5vw, 64px);
  padding-top: clamp(40px, 6vh, 60px); padding-bottom: 30px; align-items: start;
}
.footer-title { font-weight: 700; font-size: clamp(1.6rem, 3.8vw, 2.4rem); letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 22px; }
.footer-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.footer-label {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ink-soft); margin-bottom: 10px;
}
.footer-cols ul { list-style: none; }
.footer-cols a { font-size: 0.92rem; color: var(--ink-soft); line-height: 2; font-weight: 500; }
.footer-cols a:hover { color: var(--accent-ink); }
.colophon {
  border-top: 1px solid var(--line);
  padding-top: 18px; padding-bottom: 24px;
  font-size: 0.76rem; color: var(--ink-soft); line-height: 1.6;
}

/* --- rise --- */
.rise { opacity: 0; transform: translateY(12px); transition: opacity 0.45s ease, transform 0.45s ease; }
.rise.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .rise { opacity: 1; transform: none; transition: none; } }

/* --- print --- */
@media print {
  .site-header, .site-footer, .btn-row, .cta-line, .ticker { display: none !important; }
  .rise { opacity: 1 !important; transform: none !important; }
  body { background: #fff; color: #000; }
}

/* --- responsive --- */
@media (max-width: 860px) {
  .nav, .header-cta { display: none; }
  .menu-toggle { display: block; }
  .mobile-overlay { display: block; }
  .hero-grid { grid-template-columns: 1fr; gap: 28px; }
  .hero-photo { order: -1; }
  .portrait, .portrait-fallback { width: 148px; height: 148px; }
  .about-grid, .feature-grid { grid-template-columns: 1fr; }
  .outcome-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; }
  .pub { padding: 20px 22px; }
  .cv-head { grid-template-columns: 44px 1fr; }
  .org-mark { width: 44px; height: 44px; }
  .cv-period { grid-column: 2; margin-top: 0; }
  .session-row { grid-template-columns: 1fr 26px; gap: 4px 12px; padding: 13px 16px; }
  .session-label { grid-column: 1 / -1; }
}
`;