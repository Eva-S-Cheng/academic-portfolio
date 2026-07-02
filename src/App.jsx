import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, BIO, SKILLS, LANGUAGES, RESEARCH_STATEMENT,
  INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, WORK_EXPERIENCE, COURSE, COPYRIGHT_NOTICE,
} from "./content.js";

/* ============================================================
   Eva Cheng — Academic Portfolio · v4
   Dense, precise, app-grade. Content lives in src/content.js.
   ============================================================ */

const PHOTO_URL = import.meta.env.BASE_URL + "photo.jpg";

/* ---------- ORCID (live publications, with coauthors) ---------- */

const TYPE_LABELS = {
  "journal-article": "Journal article",
  "working-paper": "Working paper",
  preprint: "Preprint",
  "conference-paper": "Conference paper",
  "book-chapter": "Book chapter",
  report: "Report",
  dissertation: "Thesis",
  "dissertation-thesis": "Thesis",
  other: "Other",
};

function pickLink(work) {
  const ids = work?.["external-ids"]?.["external-id"] ?? [];
  const doi = ids.find((i) => i["external-id-type"] === "doi");
  if (doi) return doi["external-id-url"]?.value || `https://doi.org/${doi["external-id-value"]}`;
  const anyUrl = ids.find((i) => i["external-id-url"]?.value);
  if (anyUrl) return anyUrl["external-id-url"].value;
  if (work?.url?.value) return work.url.value;
  return LINKS.orcid;
}

function contributorsOf(work) {
  const list = work?.contributors?.contributor ?? [];
  return list
    .map((c) => c["credit-name"]?.value)
    .filter(Boolean);
}

function titleKey(t) {
  return (t || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

/* Fuzzy match so the same paper never shows twice (ORCID vs curated),
   even when titles differ in punctuation, casing or truncation. */
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

        /* Bulk-fetch full records (max 50 put-codes per call) to get contributors,
           which the /works summary endpoint does not include. */
        let details = new Map();
        if (summaries.length > 0) {
          const codes = summaries.map((s) => s["put-code"]).slice(0, 50).join(",");
          try {
            const resFull = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works/${codes}`, { headers });
            if (resFull.ok) {
              const bulk = await resFull.json();
              (bulk.bulk ?? []).forEach((b) => {
                if (b.work) details.set(b.work["put-code"], b.work);
              });
            }
          } catch { /* summaries still usable without coauthors */ }
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
              authors: contributorsOf(full),
              url: pickLink(full),
            };
          })
          .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

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

/* ---------- Primitives ---------- */

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`}
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

function CiteModal({ paper, onClose }) {
  const [tab, setTab] = useState("bibtex");
  const { copied, copy } = useClipboard();
  const text = tab === "bibtex" ? paper.citation.bibtex : paper.citation.apa;

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
            {copied ? "Copied ✓" : "Copy to clipboard"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* Dense publication row — year rail, title, authors, inline actions */
function PubRow({ title, authors, venue, year, link, citation, abstract, delay = 0 }) {
  const [open, setOpen] = useState(false);
  const [citing, setCiting] = useState(false);
  return (
    <Reveal as="article" className="pub" delay={delay}>
      <div className="pub-year">{year || "—"}</div>
      <div className="pub-main">
        <h3 className="pub-title">{title}</h3>
        <p className="pub-authors">
          {authors}
          {venue && <span className="pub-venue"> · {venue}</span>}
        </p>
        <div className="pub-actions">
          {link && (
            <a href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>
          )}
          {citation && (
            <button onClick={() => setCiting(true)}>Cite</button>
          )}
          {abstract && (
            <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Hide abstract" : "Abstract"}
            </button>
          )}
        </div>
        <div className={`collapse ${open ? "open" : ""}`}>
          <p className="pub-abstract">{abstract}</p>
        </div>
      </div>
      {citing && <CiteModal paper={{ citation }} onClose={() => setCiting(false)} />}
    </Reveal>
  );
}

function TimelineEntry({ heading, org, period, honors, details, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="article" className="tl-entry" delay={delay}>
      <div className="tl-rail" aria-hidden="true"><span className="tl-dot" /></div>
      <div className="tl-body">
        <div className="tl-top">
          <h3 className="tl-heading">{heading}</h3>
          <span className="tl-period">{period}</span>
        </div>
        <p className="tl-org">
          {org}
          {honors && <span className="tl-honors"> · {honors}</span>}
        </p>
        {details && (
          <>
            <button className="tl-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Less −" : "Details +"}
            </button>
            <div className={`collapse ${open ? "open" : ""}`}>
              <p className="tl-details">{details}</p>
            </div>
          </>
        )}
      </div>
    </Reveal>
  );
}

/* ---------- Chrome ---------- */

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/teaching", label: "Teaching" },
  { to: "/cv", label: "CV" },
];

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${p}%` }} aria-hidden="true" />;
}

function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <div className="header-inner">
        <Link className="wordmark" to="/">
          <span className="wordmark-mono">ε</span> Eva Cheng
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}><span>{item.label}</span></NavLink>
          ))}
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <button className="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" aria-label="Main mobile">
          {NAV.map((item, i) => (
            <NavLink key={item.to} to={item.to} end={item.end} style={{ transitionDelay: `${50 + i * 45}ms` }}>
              <span className="mobile-idx">0{i + 1}</span> {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`back-to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top" tabIndex={show ? 0 : -1}>↑</button>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-wordmark">Eva <em>Cheng</em></p>
          <p className="footer-tag">Sustainable &amp; quantitative finance research.</p>
        </div>
        <div className="footer-cols">
          <div>
            <p className="eyebrow">contact</p>
            <p className="footer-emails">
              <a href={`mailto:${LINKS.emailAcademic}`}>{LINKS.emailAcademic}</a><br />
              <a href={`mailto:${LINKS.emailPro}`}>{LINKS.emailPro}</a>
            </p>
          </div>
          <div>
            <p className="eyebrow">profiles</p>
            <ul className="footer-links">
              {PROFILE_LINKS.map((l) => (
                <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">navigate</p>
            <ul className="footer-links">
              {NAV.map((item) => (<li key={item.to}><Link to={item.to}>{item.label}</Link></li>))}
            </ul>
          </div>
        </div>
      </div>
      <p className="colophon">
        © {new Date().getFullYear()} Eva Cheng — {COPYRIGHT_NOTICE} Publications
        sync automatically from <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID</a>.
      </p>
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
    document.title = title ? `${title} — Eva Cheng` : "Eva Cheng — Research, Teaching & CV";
  }, [title]);
  return null;
}

function Portrait({ size = "hero" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`portrait portrait-${size} portrait-fallback`} aria-hidden="true">EC</div>;
  }
  return (
    <img
      className={`portrait portrait-${size}`}
      src={PHOTO_URL}
      alt="Portrait of Eva Cheng"
      onError={() => setFailed(true)}
    />
  );
}

/* ---------- Pages ---------- */

function HomePage() {
  return (
    <>
      <PageHead title="" />
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <Reveal delay={0}>
              <Eyebrow>visiting researcher · audencia&nbsp;&nbsp;→&nbsp;&nbsp;future phd · escp</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="hero-name">Eva <em>Cheng</em></h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="hero-lede">
                I study how <strong>climate, nature and social risks</strong> shape
                corporate decisions and financial markets, how investors influence
                corporate sustainability practices, and how AI can analyze
                disclosures to support sustainability reporting.
              </p>
            </Reveal>
            <Reveal delay={200} className="hero-links">
              <Link className="btn btn-solid" to="/research">Explore my research</Link>
              <a className="btn btn-outline" href={LINKS.cvEN} target="_blank" rel="noreferrer">
                Download CV ↗
              </a>
            </Reveal>
            <Reveal delay={270}>
              <ul className="profile-links" aria-label="Profiles">
                {PROFILE_LINKS.map((l) => (
                  <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={120} className="hero-photo">
            <Portrait size="hero" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            <Eyebrow>about</Eyebrow>
            <h2 className="section-title">Toward an <em>academic career</em></h2>
            {BIO.map((p, i) => (<p key={i}>{p}</p>))}
          </Reveal>
          <Reveal delay={100} className="side-panel">
            <p className="side-label">Finance, computing &amp; analytics</p>
            <ul className="tag-cloud" aria-label="Technical skills">
              {SKILLS.map((s) => (<li key={s} className="tag">{s}</li>))}
            </ul>
            <p className="side-label mt">Languages</p>
            <ul className="tag-cloud" aria-label="Languages">
              {LANGUAGES.map((l) => (<li key={l} className="tag tag-quiet">{l}</li>))}
            </ul>
            <p className="side-label mt">Research interests</p>
            <ul className="tag-cloud" aria-label="Research interests">
              {INTERESTS.slice(0, 5).map((t) => (<li key={t} className="tag">{t}</li>))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          {[
            { to: "/research", n: "01", h: "Research", p: "Working papers, publications synced from ORCID, theses, reports and side-projects." },
            { to: "/teaching", n: "02", h: "Teaching", p: "Python for Finance at Audencia — eight sessions, a final project and references." },
            { to: "/cv", n: "03", h: "Curriculum Vitae", p: "Education and professional experience, with the full CV in English and French." },
          ].map((c, i) => (
            <Reveal as={Link} to={c.to} className="nav-card" key={c.to} delay={i * 70}>
              <span className="nav-card-n">{c.n}</span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <span className="nav-card-cta">Browse →</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function ResearchPage() {
  const { status, works } = useOrcidWorks();
  const [filter, setFilter] = useState("All");

  const curated = [...WORKING_PAPERS, ...REPORTS];
  const orcidWorks = works.filter((w) => !curated.some((p) => sameWork(w.title, p.title)));
  const types = useMemo(
    () => ["All", ...Array.from(new Set(orcidWorks.map((w) => w.type)))],
    [orcidWorks]
  );
  const shown = filter === "All" ? orcidWorks : orcidWorks.filter((w) => w.type === filter);

  return (
    <>
      <PageHead title="Research" />
      <section className="page-hero">
        <Reveal><Eyebrow>research.interests</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="page-title">Research &amp; <em>projects</em></h1></Reveal>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            {RESEARCH_STATEMENT.map((p, i) => (<p key={i}>{p}</p>))}
          </Reveal>
          <Reveal delay={100}>
            <ul className="tag-cloud" aria-label="Research interests">
              {INTERESTS.map((t) => (<li key={t} className="tag">{t}</li>))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">Working <em>papers</em></h2>
        </Reveal>
        <div className="pub-list">
          {WORKING_PAPERS.map((p, i) => (
            <PubRow key={p.title} title={p.title} authors={p.authors} venue={p.venue}
              year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} delay={i * 60} />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">Publications &amp; <em>works</em></h2>
          <p className="section-sub">Synced live from <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID {ORCID_ID}</a>.</p>
        </Reveal>

        {status === "loading" && (
          <div className="skeleton-list" aria-hidden="true">
            <div className="skeleton" /><div className="skeleton" />
          </div>
        )}
        {status === "error" && (
          <Reveal className="notice">
            <p>
              The ORCID record could not be loaded right now. Browse it on{" "}
              <a href={LINKS.orcid} target="_blank" rel="noreferrer">orcid.org</a> or{" "}
              <a href={LINKS.scholar} target="_blank" rel="noreferrer">Google Scholar</a>.
            </p>
          </Reveal>
        )}
        {status === "ready" && orcidWorks.length === 0 && (
          <Reveal className="notice">
            <p>
              New entries on the <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID record</a>{" "}
              appear here automatically.
            </p>
          </Reveal>
        )}

        {orcidWorks.length > 0 && types.length > 2 && (
          <Reveal className="filter-row" role="group" aria-label="Filter by type">
            {types.map((t) => (
              <button key={t} className={`filter-chip ${filter === t ? "on" : ""}`} onClick={() => setFilter(t)}>
                {t}
              </button>
            ))}
          </Reveal>
        )}

        <div className="pub-list">
          {shown.map((w, i) => (
            <PubRow key={w.putCode} title={w.title}
              authors={w.authors.length > 0 ? w.authors.join(", ") : w.type}
              venue={w.journal || (w.authors.length > 0 ? w.type : null)}
              year={w.year} link={{ label: "View", url: w.url }} delay={i * 50} />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">Theses &amp; <em>research reports</em></h2>
        </Reveal>
        <div className="pub-list">
          {REPORTS.map((p, i) => (
            <PubRow key={p.title} title={p.title} authors={p.authors} venue={p.venue}
              year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} delay={i * 60} />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">Side-<em>projects</em></h2>
        </Reveal>
        <div className="card-grid">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" className="project" key={p.name} delay={i * 70}>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="project-tags">
                {p.tags.map((t) => (<li key={t}>{t}</li>))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-solid" href={`mailto:${LINKS.emailPro}?subject=[RESEARCH]`}>
            Collaborate / discuss research
          </a>
        </Reveal>
      </section>
    </>
  );
}

function TeachingPage() {
  return (
    <>
      <PageHead title="Teaching" />
      <section className="page-hero">
        <Reveal><Eyebrow>teaching</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="page-title">Teaching <em>quantitative finance</em></h1></Reveal>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            {TEACHING_EXPERIENCE.map((t) => (
              <div key={t.role}>
                <h2 className="inline-heading">{t.role}</h2>
                <p className="tl-org">{t.org} · {t.period}</p>
                <p className="mt-sm">{t.details}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <Link to="/teaching/python-for-finance" className="nav-card nav-card-tall">
              <span className="nav-card-n">→</span>
              <h3>Python for Finance</h3>
              <p>Full course material — eight sessions, a final project and additional references.</p>
              <span className="nav-card-cta">Open the course →</span>
            </Link>
          </Reveal>
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-outline" href={`mailto:${LINKS.emailPro}?subject=[TEACHING]`}>
            Interested in my teaching?
          </a>
        </Reveal>
      </section>
    </>
  );
}

function CoursePage() {
  return (
    <>
      <PageHead title={COURSE.title} />
      <section className="page-hero">
        <Reveal>
          <Eyebrow><Link to="/teaching" className="crumb">teaching</Link> / python-for-finance</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="page-title">{COURSE.title} <em>— {COURSE.org}</em></h1>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="prose narrow">
          <p>{COURSE.description}</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="side-label mt">At the end of the class, you will be capable of</p>
        </Reveal>
        <ul className="outcome-list">
          {COURSE.outcomes.map((o, i) => (
            <Reveal as="li" key={o} delay={i * 40}>{o}</Reveal>
          ))}
        </ul>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="section-title">Course <em>content</em></h2>
        </Reveal>
        <div className="session-list">
          {COURSE.sessions.map((s, i) => (
            <Reveal as={Link} to={`/teaching/python-for-finance/${s.slug}`}
              className="session-row" key={s.slug} delay={i * 30}>
              <span className="session-label">{s.label}</span>
              <span className="session-title">{s.title}</span>
              <span className="session-arrow" aria-hidden="true">→</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="notice mt">
          <p>{COURSE.ipNotice}</p>
        </Reveal>
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
        <Reveal>
          <Eyebrow>
            <Link to="/teaching" className="crumb">teaching</Link> /{" "}
            <Link to="/teaching/python-for-finance" className="crumb">python-for-finance</Link> /{" "}
            {session.slug}
          </Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="page-title">{session.label}<em> — {session.title}</em></h1>
        </Reveal>
      </section>

      <section className="section">
        {session.embedUrl ? (
          <Reveal className="embed-frame">
            <iframe src={session.embedUrl} title={`${session.label} — ${session.title}`}
              allowFullScreen loading="lazy" />
          </Reveal>
        ) : (
          <Reveal className="notice">
            <p>
              The material for this session is shared on request.{" "}
              <a href={`mailto:${LINKS.emailPro}?subject=[QUESTION_PYTHON] ${session.label}`}>
                Contact me by email
              </a>{" "}
              to receive it.
            </p>
            <p className="notice-sub">{COURSE.ipNotice}</p>
          </Reveal>
        )}

        <nav className="pager" aria-label="Sessions">
          {prev ? (
            <Link className="btn btn-outline" to={`/teaching/python-for-finance/${prev.slug}`}>← {prev.label}</Link>
          ) : <span />}
          {next ? (
            <Link className="btn btn-outline" to={`/teaching/python-for-finance/${next.slug}`}>{next.label} →</Link>
          ) : <span />}
        </nav>
      </section>
    </>
  );
}

function CVPage() {
  return (
    <>
      <PageHead title="Curriculum Vitae" />
      <section className="page-hero">
        <Reveal><Eyebrow>curriculum.vitae</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="page-title">Curriculum <em>Vitae</em></h1></Reveal>
        <Reveal delay={120} className="hero-links">
          <a className="btn btn-solid" href={LINKS.cvEN} target="_blank" rel="noreferrer">Download (EN) ↗</a>
          <a className="btn btn-outline" href={LINKS.cvFR} target="_blank" rel="noreferrer">Télécharger (FR) ↗</a>
        </Reveal>
      </section>

      <section className="section">
        <Reveal><h2 className="section-title">Education</h2></Reveal>
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <TimelineEntry key={e.degree} heading={e.degree} org={e.school}
              period={e.year} honors={e.honors} details={e.details} delay={i * 50} />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal><h2 className="section-title">Teaching experience</h2></Reveal>
        <div className="timeline">
          {TEACHING_EXPERIENCE.map((t) => (
            <TimelineEntry key={t.role} heading={t.role} org={t.org} period={t.period} details={t.details} />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal><h2 className="section-title">Work experience</h2></Reveal>
        <div className="timeline">
          {WORK_EXPERIENCE.map((w, i) => (
            <TimelineEntry key={w.role + w.period} heading={w.role} org={w.org}
              period={w.period} details={w.details} delay={i * 50} />
          ))}
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-solid" href={`mailto:${LINKS.emailPro}?subject=[WORK]`}>Let's work together</a>
        </Reveal>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageHead title="Page not found" />
      <section className="page-hero">
        <Eyebrow>error.404</Eyebrow>
        <h1 className="page-title">This page <em>does not exist</em></h1>
        <div className="hero-links">
          <Link className="btn btn-solid" to="/">Back to home</Link>
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
      <ScrollProgress />
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
      <BackToTop />
      <Footer />
    </>
  );
}

/* ---------- Styles ---------- */

const STYLES = `
:root {
  --paper: #f6f8f3;
  --paper-raised: #ffffff;
  --ink: #142019;
  --ink-soft: #55685c;
  --line: #dde5da;
  --line-soft: #e8eee5;
  --accent: #1f7a54;
  --accent-strong: #135c3d;
  --accent-bright: #2a9a6c;
  --accent-wash: #e5f0e8;
  --card-shadow: 0 1px 2px rgba(20, 32, 25, 0.05), 0 6px 18px -10px rgba(20, 32, 25, 0.10);
  --card-shadow-hover: 0 2px 4px rgba(20, 32, 25, 0.06), 0 12px 28px -12px rgba(20, 32, 25, 0.16);
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Instrument Sans", -apple-system, sans-serif;
  --font-mono: "Spline Sans Mono", ui-monospace, monospace;
}

[data-theme="dark"] {
  --paper: #0c110e;
  --paper-raised: #131a15;
  --ink: #eaf2ea;
  --ink-soft: #94a89a;
  --line: #223028;
  --line-soft: #1a251f;
  --accent: #52c18b;
  --accent-strong: #7fdcae;
  --accent-bright: #3fae79;
  --accent-wash: #152319;
  --card-shadow: 0 0 0 1px rgba(82, 193, 139, 0.04), 0 8px 22px -12px rgba(0, 0, 0, 0.55);
  --card-shadow-hover: 0 0 0 1px rgba(82, 193, 139, 0.12), 0 12px 28px -12px rgba(0, 0, 0, 0.65);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;
}

::selection { background: var(--accent); color: var(--paper); }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--paper); }
::-webkit-scrollbar-thumb { background: var(--line); border-radius: 8px; border: 3px solid var(--paper); }
::-webkit-scrollbar-thumb:hover { background: var(--ink-soft); }

a { color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { color: var(--accent-strong); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 3px; }

main { max-width: 920px; margin: 0 auto; padding: 0 24px; min-height: 60vh; }

.mt { margin-top: 22px; }
.mt-sm { margin-top: 12px; }

/* --- scroll progress --- */
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 2px; z-index: 30;
  background: var(--accent);
}

/* --- header --- */
.site-header { position: sticky; top: 0; z-index: 20; }
.site-header.scrolled {
  background: color-mix(in srgb, var(--paper) 84%, transparent);
  backdrop-filter: blur(12px) saturate(1.3);
  -webkit-backdrop-filter: blur(12px) saturate(1.3);
  border-bottom: 1px solid var(--line-soft);
}
.header-inner {
  display: flex; align-items: center; gap: 24px;
  max-width: 920px; margin: 0 auto; padding: 12px 24px;
}
.wordmark {
  font-family: var(--font-display); font-weight: 560; font-size: 1.05rem;
  color: var(--ink); text-decoration: none; display: flex; align-items: center; gap: 8px;
}
.wordmark-mono {
  font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent);
  width: 26px; height: 26px; display: grid; place-items: center;
  border: 1px solid var(--line); border-radius: 7px; background: var(--paper-raised);
  transition: border-color 0.2s ease, transform 0.25s ease;
}
.wordmark:hover .wordmark-mono { border-color: var(--accent); transform: rotate(-8deg); }

.nav { display: flex; gap: 2px; margin-left: auto; }
.nav a {
  font-size: 0.86rem; color: var(--ink-soft); text-decoration: none;
  padding: 6px 12px; border-radius: 999px;
  transition: color 0.18s ease, background 0.18s ease;
}
.nav a:hover { color: var(--ink); background: var(--accent-wash); }
.nav a.active { color: var(--accent-strong); background: var(--accent-wash); font-weight: 500; }

.theme-toggle {
  border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink);
  width: 32px; height: 32px; border-radius: 50%; cursor: pointer;
  display: grid; place-items: center; flex-shrink: 0; font-size: 0.88rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.theme-toggle:hover { border-color: var(--accent); transform: rotate(15deg); }

.menu-toggle {
  display: none; border: 1px solid var(--line); background: var(--paper-raised);
  color: var(--ink); width: 32px; height: 32px; border-radius: 9px;
  cursor: pointer; font-size: 0.95rem; z-index: 25;
}

.mobile-overlay {
  display: none; position: fixed; inset: 0; z-index: 15;
  background: color-mix(in srgb, var(--paper) 96%, transparent);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  opacity: 0; pointer-events: none; transition: opacity 0.28s ease;
}
.mobile-overlay.open { opacity: 1; pointer-events: auto; }
.mobile-nav { display: flex; flex-direction: column; gap: 2px; padding: 96px 28px 0; }
.mobile-nav a {
  font-family: var(--font-display); font-size: 1.7rem; font-weight: 440;
  color: var(--ink); text-decoration: none; padding: 12px 0;
  border-bottom: 1px solid var(--line-soft);
  opacity: 0; transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.18s ease;
}
.mobile-overlay.open .mobile-nav a { opacity: 1; transform: none; }
.mobile-nav a.active { color: var(--accent-strong); }
.mobile-idx { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); margin-right: 12px; }

/* --- eyebrow --- */
.eyebrow {
  font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.06em;
  color: var(--accent); margin-bottom: 10px;
}
.eyebrow::before { content: "▸ "; opacity: 0.55; }
.crumb { color: var(--accent); text-decoration: none; }
.crumb:hover { text-decoration: underline; }

/* --- hero --- */
.hero { padding: 52px 0 44px; border-bottom: 1px solid var(--line-soft); }
.hero-grid { display: grid; grid-template-columns: 1fr auto; gap: 44px; align-items: center; }
.hero-name {
  font-family: var(--font-display); font-weight: 360;
  font-size: clamp(2.7rem, 6.5vw, 4.3rem); line-height: 1;
  letter-spacing: -0.02em; margin: 4px 0 18px;
  font-variation-settings: "opsz" 120;
}
.hero-name em, .page-title em, .section-title em {
  font-style: italic; font-weight: 470; color: var(--accent-strong);
}
.hero-lede { max-width: 560px; font-size: 1.05rem; line-height: 1.62; color: var(--ink-soft); }
.hero-lede strong { color: var(--ink); font-weight: 600; }
.hero-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.profile-links { display: flex; flex-wrap: wrap; gap: 8px 20px; list-style: none; margin-top: 24px; }
.profile-links a {
  font-family: var(--font-mono); font-size: 0.74rem; color: var(--ink-soft);
  text-decoration: none; border-bottom: 1px solid var(--line); padding-bottom: 2px;
  transition: color 0.18s ease, border-color 0.18s ease;
}
.profile-links a:hover { color: var(--accent-strong); border-color: var(--accent); }

.portrait-hero {
  width: 208px; height: 208px; border-radius: 22px; object-fit: cover;
  border: 1px solid var(--line); box-shadow: var(--card-shadow);
}
.portrait-fallback {
  display: grid; place-items: center;
  font-family: var(--font-display); font-size: 3rem; font-weight: 400;
  color: var(--accent-strong); background: var(--accent-wash);
}

.page-hero { padding: 40px 0 30px; border-bottom: 1px solid var(--line-soft); }
.page-title {
  font-family: var(--font-display); font-weight: 390;
  font-size: clamp(1.9rem, 5vw, 2.9rem); line-height: 1.08; letter-spacing: -0.015em;
}

/* --- buttons --- */
.btn {
  display: inline-block; font-family: var(--font-body); font-size: 0.87rem;
  font-weight: 500; padding: 9px 18px; border-radius: 999px;
  text-decoration: none; cursor: pointer; border: 1px solid transparent;
  transition: transform 0.16s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:active { transform: scale(0.98); }
.btn-solid {
  background: var(--accent-strong); color: #f6f8f3; border-color: var(--accent-strong);
  box-shadow: 0 4px 14px -7px var(--accent-strong);
}
[data-theme="dark"] .btn-solid { color: #0b110d; }
.btn-solid:hover { background: var(--accent-bright); border-color: var(--accent-bright); color: #f6f8f3; }
[data-theme="dark"] .btn-solid:hover { color: #0b110d; }
.btn-outline { border-color: var(--line); color: var(--ink); background: var(--paper-raised); }
.btn-outline:hover { border-color: var(--accent); color: var(--accent-strong); }

/* --- sections --- */
.section { padding: 40px 0; border-bottom: 1px solid var(--line-soft); }
.section:last-of-type { border-bottom: none; }
.section-title {
  font-family: var(--font-display); font-weight: 420;
  font-size: clamp(1.4rem, 3vw, 1.8rem); line-height: 1.15; margin-bottom: 20px;
  letter-spacing: -0.008em;
}
.section-sub { font-size: 0.88rem; color: var(--ink-soft); margin: -12px 0 18px; }
.inline-heading { font-family: var(--font-display); font-weight: 480; font-size: 1.3rem; }
.two-col { display: grid; grid-template-columns: 3fr 2fr; gap: 36px; align-items: start; }
.prose p + p, .prose div + div { margin-top: 13px; }
.prose { font-size: 0.97rem; }
.narrow { max-width: 660px; }
.side-panel {
  background: var(--paper-raised); border: 1px solid var(--line-soft);
  border-radius: 14px; padding: 20px 22px; box-shadow: var(--card-shadow);
}
.side-label {
  font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.09em;
  text-transform: uppercase; color: var(--ink-soft); margin-bottom: 10px;
}
.cta-line { margin-top: 26px; }

.tag-cloud { list-style: none; display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  font-size: 0.79rem; padding: 4px 12px; border-radius: 999px;
  background: var(--accent-wash); color: var(--accent-strong);
}
.tag-quiet { background: transparent; border: 1px solid var(--line); color: var(--ink-soft); }

/* --- cards --- */
.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.nav-card, .project {
  display: block; background: var(--paper-raised);
  border: 1px solid var(--line-soft); border-radius: 14px; padding: 18px 20px;
  text-decoration: none; color: var(--ink); box-shadow: var(--card-shadow);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.nav-card:hover, .project:hover {
  border-color: var(--accent); transform: translateY(-2px);
  box-shadow: var(--card-shadow-hover); color: var(--ink);
}
.nav-card-n { font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); display: block; margin-bottom: 10px; }
.nav-card h3, .project-name { font-family: var(--font-display); font-weight: 490; font-size: 1.05rem; }
.nav-card p, .project-desc { color: var(--ink-soft); font-size: 0.87rem; margin-top: 7px; line-height: 1.55; }
.nav-card-cta { display: inline-block; margin-top: 12px; font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-strong); }
.nav-card-tall { height: 100%; }
.project-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 5px; margin-top: 11px; }
.project-tags li {
  font-family: var(--font-mono); font-size: 0.64rem; letter-spacing: 0.04em;
  padding: 2px 9px; border-radius: 999px; border: 1px solid var(--line); color: var(--ink-soft);
}

/* --- publications (dense rows) --- */
.pub-list { border-top: 1px solid var(--line); }
.pub {
  display: grid; grid-template-columns: 62px 1fr; gap: 18px;
  padding: 15px 4px; border-bottom: 1px solid var(--line);
  transition: background 0.15s ease;
}
.pub:hover { background: color-mix(in srgb, var(--paper-raised) 65%, transparent); }
.pub-year {
  font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-strong);
  padding-top: 3px;
}
.pub-main { min-width: 0; }
.pub-title { font-family: var(--font-display); font-weight: 490; font-size: 1.06rem; line-height: 1.35; letter-spacing: -0.004em; }
.pub-authors { color: var(--ink-soft); font-size: 0.86rem; margin-top: 4px; }
.pub-venue { font-style: italic; }
.pub-actions { display: flex; gap: 16px; margin-top: 8px; flex-wrap: wrap; }
.pub-actions a, .pub-actions button {
  font-family: var(--font-mono); font-size: 0.73rem; color: var(--accent);
  background: none; border: none; padding: 0; cursor: pointer;
  text-decoration: none; border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.pub-actions a:hover, .pub-actions button:hover { color: var(--accent-strong); border-bottom-color: var(--accent); }
.pub-abstract {
  color: var(--ink-soft); font-size: 0.9rem; line-height: 1.65;
  padding: 12px 16px; margin-top: 10px;
  background: var(--paper-raised); border-left: 2px solid var(--accent);
  border-radius: 0 10px 10px 0;
}
.collapse { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s ease; }
.collapse.open { grid-template-rows: 1fr; }
.collapse > * { overflow: hidden; }

.filter-row { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 16px; }
.filter-chip {
  font-family: var(--font-body); font-size: 0.79rem; padding: 5px 13px;
  border-radius: 999px; border: 1px solid var(--line); background: var(--paper-raised);
  color: var(--ink-soft); cursor: pointer; transition: all 0.16s ease;
}
.filter-chip:hover { border-color: var(--accent); color: var(--accent-strong); }
.filter-chip.on { background: var(--accent-strong); border-color: var(--accent-strong); color: var(--paper); }
[data-theme="dark"] .filter-chip.on { color: #0b110d; }

.skeleton-list { display: flex; flex-direction: column; gap: 2px; border-top: 1px solid var(--line); }
.skeleton {
  height: 72px; border-bottom: 1px solid var(--line);
  background: linear-gradient(100deg, transparent 40%, var(--accent-wash) 50%, transparent 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  background: var(--accent-wash); border-radius: 12px;
  padding: 15px 19px; font-size: 0.92rem;
}
.notice-sub { margin-top: 8px; font-size: 0.82rem; color: var(--ink-soft); }

/* --- cite modal --- */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 40;
  background: color-mix(in srgb, var(--ink) 32%, transparent);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: grid; place-items: center; padding: 20px;
  animation: fade 0.18s ease;
}
.modal {
  width: min(620px, 100%); background: var(--paper-raised);
  border: 1px solid var(--line); border-radius: 16px; padding: 18px 20px;
  box-shadow: var(--card-shadow-hover);
  animation: pop 0.22s cubic-bezier(0.34, 1.4, 0.64, 1);
}
@keyframes fade { from { opacity: 0; } }
@keyframes pop { from { opacity: 0; transform: scale(0.96) translateY(6px); } }
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 13px; }
.seg { display: inline-flex; background: var(--accent-wash); border-radius: 999px; padding: 3px; }
.seg button {
  font-family: var(--font-body); font-size: 0.82rem; font-weight: 500;
  padding: 5px 14px; border-radius: 999px; border: none; background: none;
  color: var(--ink-soft); cursor: pointer; transition: all 0.16s ease;
}
.seg button.on { background: var(--paper-raised); color: var(--accent-strong); box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.modal-close {
  border: none; background: none; color: var(--ink-soft); cursor: pointer;
  font-size: 0.9rem; width: 30px; height: 30px; border-radius: 50%;
}
.modal-close:hover { background: var(--accent-wash); color: var(--ink); }
.cite-block {
  font-family: var(--font-mono); font-size: 0.77rem; line-height: 1.6;
  background: var(--paper); border: 1px solid var(--line-soft); border-radius: 10px;
  padding: 13px 15px; white-space: pre-wrap; word-break: break-word; color: var(--ink);
}
.modal-foot { display: flex; justify-content: flex-end; margin-top: 13px; }

/* --- timeline (CV) --- */
.timeline { display: flex; flex-direction: column; }
.tl-entry { display: grid; grid-template-columns: 22px 1fr; gap: 16px; padding: 13px 0; }
.tl-rail { position: relative; display: flex; justify-content: center; }
.tl-rail::before { content: ""; position: absolute; top: 0; bottom: 0; width: 1px; background: var(--line); }
.tl-entry:first-child .tl-rail::before { top: 12px; }
.tl-entry:last-child .tl-rail::before { bottom: calc(100% - 12px); }
.tl-dot {
  position: relative; z-index: 1; width: 10px; height: 10px; border-radius: 50%;
  background: var(--paper); border: 2px solid var(--accent); margin-top: 7px;
  transition: transform 0.18s ease, background 0.18s ease;
}
.tl-entry:hover .tl-dot { transform: scale(1.25); background: var(--accent); }
.tl-top { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; }
.tl-period { font-family: var(--font-mono); font-size: 0.73rem; color: var(--accent-strong); white-space: nowrap; }
.tl-heading { font-family: var(--font-display); font-weight: 490; font-size: 1.07rem; letter-spacing: -0.003em; }
.tl-org { color: var(--ink-soft); font-size: 0.87rem; margin-top: 2px; }
.tl-honors { color: var(--accent-strong); }
.tl-toggle {
  font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent);
  background: none; border: none; padding: 0; margin-top: 6px; cursor: pointer;
}
.tl-toggle:hover { color: var(--accent-strong); }
.tl-details { color: var(--ink-soft); font-size: 0.9rem; line-height: 1.65; padding-top: 8px; max-width: 700px; }

/* --- course --- */
.outcome-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 26px; max-width: 800px; margin-top: 4px; }
.outcome-list li { padding-left: 22px; position: relative; font-size: 0.92rem; }
.outcome-list li::before {
  content: "✓"; position: absolute; left: 0; top: 2px;
  color: var(--accent); font-weight: 600; font-size: 0.78rem;
  width: 15px; height: 15px; display: grid; place-items: center;
  background: var(--accent-wash); border-radius: 50%;
}

.session-list { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.session-row {
  display: grid; grid-template-columns: 130px 1fr 24px; gap: 14px; align-items: baseline;
  padding: 12px 8px; border-bottom: 1px solid var(--line);
  text-decoration: none; color: var(--ink);
  transition: background 0.15s ease, padding-left 0.15s ease;
}
.session-row:hover { background: color-mix(in srgb, var(--paper-raised) 65%, transparent); padding-left: 14px; }
.session-row:hover .session-arrow { color: var(--accent-strong); transform: translateX(3px); }
.session-label { font-family: var(--font-mono); font-size: 0.73rem; color: var(--accent-strong); }
.session-title { font-size: 0.93rem; }
.session-arrow { color: var(--ink-soft); transition: transform 0.15s ease, color 0.15s ease; }

.embed-frame {
  border: 1px solid var(--line); border-radius: 14px; overflow: hidden;
  background: var(--paper-raised); box-shadow: var(--card-shadow);
}
.embed-frame iframe { display: block; width: 100%; height: 76vh; border: 0; }
.pager { display: flex; justify-content: space-between; margin-top: 24px; }

/* --- back to top --- */
.back-to-top {
  position: fixed; right: 22px; bottom: 22px; z-index: 18;
  width: 40px; height: 40px; border-radius: 50%;
  border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink);
  cursor: pointer; font-size: 0.95rem; box-shadow: var(--card-shadow);
  opacity: 0; transform: translateY(10px); pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s ease, border-color 0.18s ease;
}
.back-to-top.show { opacity: 1; transform: none; pointer-events: auto; }
.back-to-top:hover { border-color: var(--accent); color: var(--accent-strong); }

/* --- footer --- */
.site-footer { border-top: 1px solid var(--line-soft); margin-top: 36px; background: var(--paper-raised); }
.footer-inner {
  max-width: 920px; margin: 0 auto; padding: 36px 24px 8px;
  display: grid; grid-template-columns: 1.3fr 2fr; gap: 30px;
}
.footer-wordmark { font-family: var(--font-display); font-weight: 380; font-size: 1.7rem; line-height: 1; letter-spacing: -0.012em; }
.footer-wordmark em { font-style: italic; color: var(--accent-strong); }
.footer-tag { color: var(--ink-soft); font-size: 0.85rem; margin-top: 9px; }
.footer-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.footer-links { list-style: none; }
.footer-links a { font-size: 0.85rem; color: var(--ink-soft); text-decoration: none; line-height: 1.9; }
.footer-links a:hover { color: var(--accent-strong); }
.footer-emails a { font-family: var(--font-mono); font-size: 0.78rem; line-height: 2; }
.colophon {
  max-width: 920px; margin: 0 auto; padding: 18px 24px;
  font-size: 0.73rem; color: var(--ink-soft); line-height: 1.6;
  border-top: 1px solid var(--line-soft);
}

/* --- reveal --- */
.reveal { opacity: 0; transform: translateY(8px); transition: opacity 0.4s ease, transform 0.4s ease; }
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* --- print --- */
@media print {
  .site-header, .site-footer, .back-to-top, .scroll-progress, .hero-links, .cta-line { display: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
  body { background: #fff; color: #000; }
}

/* --- responsive --- */
@media (max-width: 780px) {
  .nav { display: none; }
  .menu-toggle { display: block; }
  .theme-toggle { margin-left: auto; }
  .header-inner { gap: 10px; }
  .mobile-overlay { display: block; }
  .hero { padding: 34px 0 32px; }
  .hero-grid { grid-template-columns: 1fr; gap: 26px; }
  .hero-photo { order: -1; }
  .portrait-hero { width: 128px; height: 128px; border-radius: 16px; }
  .page-hero { padding: 28px 0 24px; }
  .two-col, .card-grid { grid-template-columns: 1fr; gap: 22px; }
  .outcome-list { grid-template-columns: 1fr; }
  .section { padding: 30px 0; }
  .pub { grid-template-columns: 1fr; gap: 2px; }
  .pub-year { padding-top: 0; }
  .tl-top { flex-direction: column; gap: 2px; }
  .session-row { grid-template-columns: 1fr 24px; gap: 4px 12px; }
  .session-label { grid-column: 1 / -1; }
  .footer-inner { grid-template-columns: 1fr; }
  .footer-cols { grid-template-columns: 1fr 1fr; }
  .embed-frame iframe { height: 60vh; }
  .back-to-top { right: 16px; bottom: 16px; }
}
`;