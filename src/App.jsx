import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, BIO, SKILLS, RESEARCH_STATEMENT,
  INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, WORK_EXPERIENCE, COURSE, COPYRIGHT_NOTICE,
} from "./content.js";

/* ============================================================
   Eva Cheng — Academic Portfolio · v3
   Green identity, dual theme, refined to studio-grade polish.
   Content lives in src/content.js.
   ============================================================ */

/* ---------- ORCID (live publications) ---------- */

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

function pickLink(summary) {
  const ids = summary?.["external-ids"]?.["external-id"] ?? [];
  const doi = ids.find((i) => i["external-id-type"] === "doi");
  if (doi) return doi["external-id-url"]?.value || `https://doi.org/${doi["external-id-value"]}`;
  const anyUrl = ids.find((i) => i["external-id-url"]?.value);
  if (anyUrl) return anyUrl["external-id-url"].value;
  if (summary?.url?.value) return summary.url.value;
  return LINKS.orcid;
}

function normalizeTitle(t) {
  return (t || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().slice(0, 60);
}

function useOrcidWorks() {
  const [state, setState] = useState({ status: "loading", works: [] });
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(`ORCID API responded ${res.status}`);
        const data = await res.json();
        const works = (data.group ?? [])
          .map((g) => g["work-summary"]?.[0])
          .filter(Boolean)
          .map((s) => ({
            putCode: s["put-code"],
            title: s.title?.title?.value ?? "Untitled work",
            year: s["publication-date"]?.year?.value ?? null,
            journal: s["journal-title"]?.value ?? null,
            type: TYPE_LABELS[s.type] ?? s.type ?? "Work",
            url: pickLink(s),
          }))
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
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
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
    } catch (err) {
      console.error("Clipboard failed:", err);
    }
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

function PaperCard({ paper, delay = 0 }) {
  const [open, setOpen] = useState(false);
  const [citing, setCiting] = useState(false);
  return (
    <Reveal as="article" className="paper" delay={delay}>
      <div className="paper-rail" aria-hidden="true" />
      <div className="paper-body">
        <div className="paper-meta">
          <span className="chip">{paper.venue}</span>
        </div>
        <h3 className="paper-title">{paper.title}</h3>
        <p className="paper-authors">{paper.authors}</p>
        <div className="paper-actions">
          {paper.link && (
            <a className="btn btn-outline" href={paper.link.url} target="_blank" rel="noreferrer">
              {paper.link.label} <span className="arr">↗</span>
            </a>
          )}
          {paper.citation && (
            <button className="btn btn-outline" onClick={() => setCiting(true)}>Cite</button>
          )}
          {paper.abstract && (
            <button className="btn btn-ghost" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Hide abstract ↑" : "Read abstract ↓"}
            </button>
          )}
        </div>
        <div className={`collapse ${open ? "open" : ""}`}>
          <p className="paper-abstract">{paper.abstract}</p>
        </div>
      </div>
      {citing && <CiteModal paper={paper} onClose={() => setCiting(false)} />}
    </Reveal>
  );
}

function TimelineEntry({ heading, org, period, honors, details, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="article" className="tl-entry" delay={delay}>
      <div className="tl-rail" aria-hidden="true"><span className="tl-dot" /></div>
      <div className="tl-body">
        <p className="tl-period">{period}</p>
        <h3 className="tl-heading">{heading}</h3>
        <p className="tl-org">{org}</p>
        {honors && <p className="tl-honors">✦ {honors}</p>}
        {details && (
          <>
            <button className="btn btn-ghost tl-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Show less ↑" : "Details ↓"}
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
  { to: "/cv", label: "Curriculum Vitae" },
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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
            <NavLink key={item.to} to={item.to} end={item.end}>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span className={`toggle-icon ${theme}`}>{theme === "dark" ? "☀" : "☾"}</span>
        </button>
        <button className="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" aria-label="Main mobile">
          {NAV.map((item, i) => (
            <NavLink key={item.to} to={item.to} end={item.end} style={{ transitionDelay: `${60 + i * 50}ms` }}>
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
    <button
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      ↑
    </button>
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
              <a href={`mailto:${LINKS.emailAcademic}`}>{LINKS.emailAcademic}</a>
              <br />
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
              {NAV.map((item) => (
                <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
              ))}
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

/* Decorative hero chart — pure ornament, no data implied */
function HeroChart() {
  return (
    <svg className="hero-chart" viewBox="0 0 640 260" aria-hidden="true" preserveAspectRatio="none">
      <g className="hc-grid">
        {[40, 90, 140, 190].map((y) => (
          <line key={y} x1="0" y1={y} x2="640" y2={y} />
        ))}
      </g>
      <path
        className="hc-area"
        d="M0,210 C60,205 90,190 140,185 C200,178 230,150 290,142 C330,137 360,120 420,105 C470,92 520,60 580,42 L640,28 L640,260 L0,260 Z"
      />
      <path
        className="hc-line"
        d="M0,210 C60,205 90,190 140,185 C200,178 230,150 290,142 C330,137 360,120 420,105 C470,92 520,60 580,42 L640,28"
      />
      <line className="hc-marker" x1="420" y1="20" x2="420" y2="240" />
      <circle className="hc-point" cx="420" cy="105" r="4.5" />
    </svg>
  );
}

/* ---------- Pages ---------- */

function HomePage() {
  return (
    <>
      <PageHead title="" />
      <section className="hero">
        <HeroChart />
        <div className="hero-content">
          <Reveal delay={0}>
            <Eyebrow>visiting researcher · audencia&nbsp;&nbsp;→&nbsp;&nbsp;future phd · escp</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-name">Eva <em>Cheng</em></h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="hero-lede">
              Research at the intersection of <strong>finance, sustainability and
              mathematics</strong> — how climate, nature and social risks shape
              corporate decisions and financial markets, and how AI can analyze
              disclosures to support sustainability reporting.
            </p>
          </Reveal>
          <Reveal delay={280} className="hero-links">
            <Link className="btn btn-solid btn-lg" to="/research">Explore my research</Link>
            <a className="btn btn-outline btn-lg" href={LINKS.cvEN} target="_blank" rel="noreferrer">
              Download CV <span className="arr">↗</span>
            </a>
          </Reveal>
          <Reveal delay={380}>
            <ul className="profile-links" aria-label="Profiles">
              {PROFILE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>about</Eyebrow>
          <h2 className="section-title">Toward an <em>academic career</em></h2>
        </Reveal>
        <div className="two-col">
          <Reveal className="prose">
            {BIO.map((p, i) => (<p key={i}>{p}</p>))}
          </Reveal>
          <Reveal delay={120} className="side-panel">
            <p className="side-label">Finance, computing &amp; analytics</p>
            <ul className="tag-cloud" aria-label="Technical skills">
              {SKILLS.map((s) => (<li key={s} className="tag">{s}</li>))}
            </ul>
            <p className="side-label" style={{ marginTop: "30px" }}>Languages</p>
            <ul className="tag-cloud" aria-label="Languages">
              {["French", "English", "Cantonese", "Chinese", "German (basic)"].map((l) => (
                <li key={l} className="tag tag-quiet">{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>quick.access</Eyebrow>
          <h2 className="section-title">Explore the <em>site</em></h2>
        </Reveal>
        <div className="card-grid">
          {[
            { to: "/research", n: "01", h: "Research", p: "Working papers, publications synced live from ORCID, theses, reports and side-projects." },
            { to: "/teaching", n: "02", h: "Teaching", p: "Python for Finance at Audencia — eight sessions, a final project and additional references." },
            { to: "/cv", n: "03", h: "Curriculum Vitae", p: "Education, teaching and professional experience — with the full CV in English and French." },
          ].map((c, i) => (
            <Reveal as={Link} to={c.to} className="nav-card" key={c.to} delay={i * 90}>
              <span className="nav-card-n">{c.n}</span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <span className="nav-card-cta">Browse <span className="arr">→</span></span>
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

  const curatedTitles = useMemo(
    () => new Set([...WORKING_PAPERS, ...REPORTS].map((p) => normalizeTitle(p.title))),
    []
  );
  const orcidWorks = works.filter((w) => !curatedTitles.has(normalizeTitle(w.title)));
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
        <Reveal delay={80}><h1 className="page-title">Research &amp; <em>projects</em></h1></Reveal>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            {RESEARCH_STATEMENT.map((p, i) => (<p key={i}>{p}</p>))}
          </Reveal>
          <Reveal delay={120} className="side-panel">
            <p className="side-label">Interests</p>
            <ul className="tag-cloud" aria-label="Research interests">
              {INTERESTS.map((t) => (<li key={t} className="tag">{t}</li>))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>working.papers</Eyebrow>
          <h2 className="section-title">Working <em>papers</em></h2>
        </Reveal>
        <div className="paper-list">
          {WORKING_PAPERS.map((p, i) => (<PaperCard paper={p} key={p.title} delay={i * 80} />))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>works.orcid — live from {ORCID_ID}</Eyebrow>
          <h2 className="section-title">Publications &amp; <em>works</em></h2>
        </Reveal>

        {status === "loading" && (
          <div className="skeleton-list" aria-hidden="true">
            <div className="skeleton" /><div className="skeleton" />
          </div>
        )}
        {status === "error" && (
          <Reveal className="notice">
            <p>
              The ORCID record could not be loaded right now. You can browse it directly on{" "}
              <a href={LINKS.orcid} target="_blank" rel="noreferrer">orcid.org</a> or{" "}
              <a href={LINKS.scholar} target="_blank" rel="noreferrer">Google Scholar</a>.
            </p>
          </Reveal>
        )}
        {status === "ready" && orcidWorks.length === 0 && (
          <Reveal className="notice">
            <p>
              New entries on the{" "}
              <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID record</a>{" "}
              appear here automatically.
            </p>
          </Reveal>
        )}

        {orcidWorks.length > 0 && types.length > 2 && (
          <Reveal className="filter-row" role="group" aria-label="Filter by type">
            {types.map((t) => (
              <button
                key={t}
                className={`filter-chip ${filter === t ? "on" : ""}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </Reveal>
        )}

        <div className="paper-list">
          {shown.map((w, i) => (
            <Reveal as="article" className="paper" key={w.putCode} delay={i * 60}>
              <div className="paper-rail" aria-hidden="true" />
              <div className="paper-body">
                <div className="paper-meta">
                  <span className="chip">{w.type}</span>
                  {w.year && <span className="paper-year">{w.year}</span>}
                </div>
                <h3 className="paper-title">{w.title}</h3>
                {w.journal && <p className="paper-authors">{w.journal}</p>}
                <div className="paper-actions">
                  <a className="btn btn-outline" href={w.url} target="_blank" rel="noreferrer">
                    View <span className="arr">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>theses.reports</Eyebrow>
          <h2 className="section-title">Completed theses &amp; <em>research reports</em></h2>
        </Reveal>
        <div className="paper-list">
          {REPORTS.map((p, i) => (<PaperCard paper={p} key={p.title} delay={i * 80} />))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>side.projects</Eyebrow>
          <h2 className="section-title">Side-<em>projects</em></h2>
        </Reveal>
        <div className="card-grid">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" className="project" key={p.name} delay={i * 90}>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="project-tags">
                {p.tags.map((t) => (<li key={t}>{t}</li>))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-solid btn-lg" href={`mailto:${LINKS.emailPro}?subject=[RESEARCH]`}>
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
        <Reveal delay={80}><h1 className="page-title">Teaching <em>quantitative finance</em></h1></Reveal>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            {TEACHING_EXPERIENCE.map((t) => (
              <div key={t.role}>
                <h2 className="inline-heading">{t.role}</h2>
                <p className="tl-org">{t.org} · {t.period}</p>
                <p style={{ marginTop: "16px" }}>{t.details}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <Link to="/teaching/python-for-finance" className="nav-card nav-card-tall">
              <span className="nav-card-n">→</span>
              <h3>Python for Finance</h3>
              <p>Full course material — eight sessions, a final project and additional references.</p>
              <span className="nav-card-cta">Open the course <span className="arr">→</span></span>
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
          <Eyebrow>
            <Link to="/teaching" className="crumb">teaching</Link> / python-for-finance
          </Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="page-title">{COURSE.title} <em>— {COURSE.org}</em></h1>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="prose narrow">
          <p>{COURSE.description}</p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>learning.outcomes</Eyebrow>
          <h2 className="section-title">At the end of the class, you will be capable of</h2>
        </Reveal>
        <ul className="outcome-list">
          {COURSE.outcomes.map((o, i) => (
            <Reveal as="li" key={o} delay={i * 50}>{o}</Reveal>
          ))}
        </ul>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>course.content</Eyebrow>
          <h2 className="section-title">Direct access to the <em>content</em></h2>
        </Reveal>
        <div className="session-list">
          {COURSE.sessions.map((s, i) => (
            <Reveal
              as={Link}
              to={`/teaching/python-for-finance/${s.slug}`}
              className="session-row"
              key={s.slug}
              delay={i * 40}
            >
              <span className="session-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="session-label">{s.label}</span>
              <span className="session-title">{s.title}</span>
              <span className="session-arrow" aria-hidden="true">→</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="notice" style={{ marginTop: "28px" }}>
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
        <Reveal delay={80}>
          <h1 className="page-title">{session.label}<em> — {session.title}</em></h1>
        </Reveal>
      </section>

      <section className="section">
        {session.embedUrl ? (
          <Reveal className="embed-frame">
            <iframe
              src={session.embedUrl}
              title={`${session.label} — ${session.title}`}
              allowFullScreen
              loading="lazy"
            />
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
            <Link className="btn btn-outline" to={`/teaching/python-for-finance/${prev.slug}`}>
              ← {prev.label}
            </Link>
          ) : <span />}
          {next ? (
            <Link className="btn btn-outline" to={`/teaching/python-for-finance/${next.slug}`}>
              {next.label} →
            </Link>
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
        <Reveal delay={80}><h1 className="page-title">Curriculum <em>Vitae</em></h1></Reveal>
        <Reveal delay={160} className="hero-links">
          <a className="btn btn-solid" href={LINKS.cvEN} target="_blank" rel="noreferrer">
            Download (EN) <span className="arr">↗</span>
          </a>
          <a className="btn btn-outline" href={LINKS.cvFR} target="_blank" rel="noreferrer">
            Télécharger (FR) <span className="arr">↗</span>
          </a>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>education</Eyebrow>
          <h2 className="section-title">Education</h2>
        </Reveal>
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <TimelineEntry
              key={e.degree}
              heading={e.degree}
              org={e.school}
              period={e.year}
              honors={e.honors}
              details={e.details}
              delay={i * 60}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>teaching.experience</Eyebrow>
          <h2 className="section-title">Teaching experience</h2>
        </Reveal>
        <div className="timeline">
          {TEACHING_EXPERIENCE.map((t) => (
            <TimelineEntry key={t.role} heading={t.role} org={t.org} period={t.period} details={t.details} />
          ))}
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-ghost" href={`mailto:${LINKS.emailPro}?subject=[TEACHING]`}>
            Interested in my teaching? →
          </a>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>work.experience</Eyebrow>
          <h2 className="section-title">Work experience</h2>
        </Reveal>
        <div className="timeline">
          {WORK_EXPERIENCE.map((w, i) => (
            <TimelineEntry
              key={w.role + w.period}
              heading={w.role}
              org={w.org}
              period={w.period}
              details={w.details}
              delay={i * 60}
            />
          ))}
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-solid btn-lg" href={`mailto:${LINKS.emailPro}?subject=[WORK]`}>
            Let's work together
          </a>
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
  --line-soft: #e7ede4;
  --accent: #1f7a54;
  --accent-strong: #135c3d;
  --accent-bright: #2a9a6c;
  --accent-wash: #e5f0e8;
  --glow: rgba(31, 122, 84, 0.10);
  --card-shadow: 0 1px 2px rgba(20, 32, 25, 0.04), 0 10px 30px -12px rgba(20, 32, 25, 0.10);
  --card-shadow-hover: 0 2px 4px rgba(20, 32, 25, 0.05), 0 18px 44px -14px rgba(20, 32, 25, 0.16);
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
  --glow: rgba(82, 193, 139, 0.09);
  --card-shadow: 0 0 0 1px rgba(82, 193, 139, 0.03), 0 12px 32px -14px rgba(0, 0, 0, 0.55);
  --card-shadow-hover: 0 0 0 1px rgba(82, 193, 139, 0.10), 0 18px 44px -14px rgba(0, 0, 0, 0.65);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.68;
  -webkit-font-smoothing: antialiased;
  transition: background 0.35s ease, color 0.35s ease;
}

::selection { background: var(--accent); color: var(--paper); }
::-webkit-scrollbar { width: 11px; }
::-webkit-scrollbar-track { background: var(--paper); }
::-webkit-scrollbar-thumb { background: var(--line); border-radius: 8px; border: 3px solid var(--paper); }
::-webkit-scrollbar-thumb:hover { background: var(--ink-soft); }

a { color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { color: var(--accent-strong); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 3px; }

main { max-width: 1020px; margin: 0 auto; padding: 0 28px; min-height: 60vh; }

.arr { display: inline-block; transition: transform 0.2s ease; }
a:hover .arr, .btn:hover .arr { transform: translate(2px, -1px); }

/* --- scroll progress --- */
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 2px; z-index: 30;
  background: linear-gradient(90deg, var(--accent), var(--accent-strong));
}

/* --- header --- */
.site-header { position: sticky; top: 0; z-index: 20; transition: background 0.3s ease; }
.site-header.scrolled {
  background: color-mix(in srgb, var(--paper) 82%, transparent);
  backdrop-filter: blur(14px) saturate(1.4);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  border-bottom: 1px solid var(--line-soft);
}
.header-inner {
  display: flex; align-items: center; gap: 30px;
  max-width: 1020px; margin: 0 auto; padding: 16px 28px;
}
.wordmark {
  font-family: var(--font-display); font-weight: 560; font-size: 1.12rem;
  color: var(--ink); text-decoration: none; display: flex; align-items: center; gap: 9px;
}
.wordmark-mono {
  font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent);
  width: 28px; height: 28px; display: grid; place-items: center;
  border: 1px solid var(--line); border-radius: 8px; background: var(--paper-raised);
  transition: border-color 0.2s ease, transform 0.25s ease;
}
.wordmark:hover .wordmark-mono { border-color: var(--accent); transform: rotate(-8deg); }

.nav { display: flex; gap: 4px; margin-left: auto; }
.nav a {
  position: relative; font-size: 0.88rem; color: var(--ink-soft);
  text-decoration: none; letter-spacing: 0.01em; padding: 7px 13px; border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;
}
.nav a:hover { color: var(--ink); background: var(--accent-wash); }
.nav a.active { color: var(--accent-strong); background: var(--accent-wash); font-weight: 500; }

.theme-toggle {
  border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink);
  width: 36px; height: 36px; border-radius: 50%; cursor: pointer;
  display: grid; place-items: center; flex-shrink: 0; overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.theme-toggle:hover { border-color: var(--accent); transform: rotate(15deg); }
.toggle-icon { font-size: 0.95rem; line-height: 1; }

.menu-toggle {
  display: none; border: 1px solid var(--line); background: var(--paper-raised);
  color: var(--ink); width: 36px; height: 36px; border-radius: 10px;
  cursor: pointer; font-size: 1rem; line-height: 1; z-index: 25;
}

.mobile-overlay {
  display: none; position: fixed; inset: 0; z-index: 15;
  background: color-mix(in srgb, var(--paper) 96%, transparent);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
}
.mobile-overlay.open { opacity: 1; pointer-events: auto; }
.mobile-nav { display: flex; flex-direction: column; gap: 6px; padding: 110px 32px 0; }
.mobile-nav a {
  font-family: var(--font-display); font-size: 2rem; font-weight: 440;
  color: var(--ink); text-decoration: none; padding: 12px 0;
  border-bottom: 1px solid var(--line-soft);
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.35s ease, transform 0.35s ease, color 0.2s ease;
}
.mobile-overlay.open .mobile-nav a { opacity: 1; transform: none; }
.mobile-nav a.active { color: var(--accent-strong); }
.mobile-idx { font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-right: 14px; }

/* --- eyebrow (signature) --- */
.eyebrow {
  font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.07em;
  color: var(--accent); margin-bottom: 16px;
}
.eyebrow::before { content: "▸ "; opacity: 0.55; }
.crumb { color: var(--accent); text-decoration: none; }
.crumb:hover { text-decoration: underline; }

/* --- hero --- */
.hero { position: relative; padding: 104px 0 84px; border-bottom: 1px solid var(--line-soft); }
.hero::before {
  content: ""; position: absolute; top: -140px; left: -180px;
  width: 560px; height: 560px; border-radius: 50%;
  background: radial-gradient(circle, var(--glow), transparent 65%);
  pointer-events: none;
}
.hero-content { position: relative; z-index: 1; }
.hero-name {
  font-family: var(--font-display); font-weight: 350;
  font-size: clamp(3.4rem, 10vw, 6.6rem); line-height: 0.98;
  letter-spacing: -0.022em; margin: 6px 0 30px;
  font-variation-settings: "opsz" 144;
}
.hero-name em, .page-title em, .section-title em {
  font-style: italic; font-weight: 470; color: var(--accent-strong);
}
.hero-lede { max-width: 620px; font-size: 1.2rem; line-height: 1.62; color: var(--ink-soft); }
.hero-lede strong { color: var(--ink); font-weight: 600; }
.hero-links { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
.profile-links { display: flex; flex-wrap: wrap; gap: 10px 24px; list-style: none; margin-top: 40px; }
.profile-links a {
  font-family: var(--font-mono); font-size: 0.78rem; color: var(--ink-soft);
  text-decoration: none; border-bottom: 1px solid var(--line); padding-bottom: 3px;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.profile-links a:hover { color: var(--accent-strong); border-color: var(--accent); }

.hero-chart {
  position: absolute; right: -40px; bottom: 0; width: min(58%, 620px); height: 78%;
  pointer-events: none; opacity: 0.9;
  -webkit-mask-image: linear-gradient(to right, transparent, black 32%);
  mask-image: linear-gradient(to right, transparent, black 32%);
}
.hc-grid line { stroke: var(--line); stroke-width: 1; stroke-dasharray: 2 6; }
.hc-area { fill: var(--accent); opacity: 0.07; }
.hc-line {
  fill: none; stroke: var(--accent); stroke-width: 2; stroke-linecap: round;
  stroke-dasharray: 900; stroke-dashoffset: 900;
  animation: draw 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}
.hc-marker { stroke: var(--accent-strong); stroke-width: 1; stroke-dasharray: 3 5; opacity: 0.55; }
.hc-point { fill: var(--paper); stroke: var(--accent-strong); stroke-width: 2; }
@keyframes draw { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) { .hc-line { animation: none; stroke-dashoffset: 0; } }

.page-hero { position: relative; padding: 72px 0 46px; border-bottom: 1px solid var(--line-soft); }
.page-title {
  font-family: var(--font-display); font-weight: 390;
  font-size: clamp(2.3rem, 6.5vw, 3.9rem); line-height: 1.08; letter-spacing: -0.015em;
  font-variation-settings: "opsz" 100;
}

/* --- buttons --- */
.btn {
  display: inline-block; font-family: var(--font-body); font-size: 0.9rem;
  font-weight: 500; padding: 10px 21px; border-radius: 999px;
  text-decoration: none; cursor: pointer; border: 1px solid transparent;
  transition: transform 0.18s ease, background 0.2s ease, color 0.2s ease,
              border-color 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:active { transform: scale(0.98); }
.btn-lg { padding: 13px 26px; font-size: 0.95rem; }
.btn-solid {
  background: var(--accent-strong); color: #f6f8f3; border-color: var(--accent-strong);
  box-shadow: 0 6px 18px -8px var(--accent-strong);
}
[data-theme="dark"] .btn-solid { color: #0b110d; }
.btn-solid:hover { background: var(--accent-bright); border-color: var(--accent-bright); color: #f6f8f3; }
[data-theme="dark"] .btn-solid:hover { color: #0b110d; }
.btn-outline { border-color: var(--line); color: var(--ink); background: var(--paper-raised); }
.btn-outline:hover { border-color: var(--accent); color: var(--accent-strong); }
.btn-ghost { background: none; color: var(--ink-soft); border: none; padding: 10px 8px; }
.btn-ghost:hover { color: var(--accent-strong); transform: none; }

/* --- sections --- */
.section { padding: 72px 0; border-bottom: 1px solid var(--line-soft); }
.section:last-of-type { border-bottom: none; }
.section-title {
  font-family: var(--font-display); font-weight: 410;
  font-size: clamp(1.75rem, 4vw, 2.5rem); line-height: 1.14; margin-bottom: 34px;
  letter-spacing: -0.01em;
}
.inline-heading { font-family: var(--font-display); font-weight: 480; font-size: 1.45rem; }
.two-col { display: grid; grid-template-columns: 3fr 2fr; gap: 56px; align-items: start; }
.prose p + p, .prose div + div { margin-top: 17px; }
.narrow { max-width: 690px; }
.side-panel {
  background: var(--paper-raised); border: 1px solid var(--line-soft);
  border-radius: 18px; padding: 26px 28px; box-shadow: var(--card-shadow);
}
.side-label {
  font-family: var(--font-mono); font-size: 0.71rem; letter-spacing: 0.09em;
  text-transform: uppercase; color: var(--ink-soft); margin-bottom: 13px;
}
.cta-line { margin-top: 40px; }

.tag-cloud { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-size: 0.83rem; padding: 6px 14px; border-radius: 999px;
  background: var(--accent-wash); color: var(--accent-strong);
  transition: transform 0.15s ease;
}
.tag:hover { transform: translateY(-1px); }
.tag-quiet { background: transparent; border: 1px solid var(--line); color: var(--ink-soft); }

/* --- cards --- */
.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.nav-card, .project {
  position: relative; display: block; background: var(--paper-raised);
  border: 1px solid var(--line-soft); border-radius: 18px; padding: 26px 28px;
  text-decoration: none; color: var(--ink);
  box-shadow: var(--card-shadow);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.nav-card:hover, .project:hover {
  border-color: var(--accent); transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover); color: var(--ink);
}
.nav-card-n {
  font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent);
  display: block; margin-bottom: 16px;
}
.nav-card h3, .project-name { font-family: var(--font-display); font-weight: 480; font-size: 1.16rem; }
.nav-card p, .project-desc { color: var(--ink-soft); font-size: 0.92rem; margin-top: 10px; line-height: 1.6; }
.nav-card-cta {
  display: inline-block; margin-top: 18px; font-family: var(--font-mono);
  font-size: 0.76rem; color: var(--accent-strong);
}
.nav-card-tall { height: 100%; }
.project-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
.project-tags li {
  font-family: var(--font-mono); font-size: 0.67rem; letter-spacing: 0.04em;
  padding: 3px 10px; border-radius: 999px; border: 1px solid var(--line); color: var(--ink-soft);
}

/* --- papers --- */
.paper-list { display: flex; flex-direction: column; gap: 18px; }
.paper {
  position: relative; display: flex; background: var(--paper-raised);
  border: 1px solid var(--line-soft); border-radius: 18px; overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.paper:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: var(--card-shadow-hover); }
.paper-rail { width: 4px; background: linear-gradient(180deg, var(--accent), var(--accent-strong)); flex-shrink: 0; opacity: 0.85; }
.paper-body { padding: 25px 28px; flex: 1; min-width: 0; }
.paper-meta { display: flex; align-items: baseline; gap: 12px; margin-bottom: 11px; }
.chip {
  font-family: var(--font-mono); font-size: 0.69rem; letter-spacing: 0.05em;
  padding: 3px 11px; border-radius: 999px; background: var(--accent-wash); color: var(--accent-strong);
}
.paper-year { font-family: var(--font-mono); font-size: 0.78rem; color: var(--ink-soft); }
.paper-title { font-family: var(--font-display); font-weight: 480; font-size: 1.24rem; line-height: 1.34; letter-spacing: -0.005em; }
.paper-authors { color: var(--ink-soft); font-size: 0.92rem; margin-top: 7px; }
.paper-actions { display: flex; gap: 10px; align-items: center; margin-top: 18px; flex-wrap: wrap; }
.paper-abstract {
  padding-top: 16px; margin-top: 16px; border-top: 1px dashed var(--line);
  color: var(--ink-soft); font-size: 0.95rem; line-height: 1.72;
}
.collapse { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.35s ease; }
.collapse.open { grid-template-rows: 1fr; }
.collapse > * { overflow: hidden; }

.filter-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.filter-chip {
  font-family: var(--font-body); font-size: 0.82rem; padding: 6px 15px;
  border-radius: 999px; border: 1px solid var(--line); background: var(--paper-raised);
  color: var(--ink-soft); cursor: pointer; transition: all 0.18s ease;
}
.filter-chip:hover { border-color: var(--accent); color: var(--accent-strong); }
.filter-chip.on { background: var(--accent-strong); border-color: var(--accent-strong); color: var(--paper); }
[data-theme="dark"] .filter-chip.on { color: #0b110d; }

.skeleton-list { display: flex; flex-direction: column; gap: 18px; }
.skeleton {
  height: 120px; border-radius: 18px; border: 1px solid var(--line-soft);
  background: linear-gradient(100deg, var(--paper-raised) 40%, var(--accent-wash) 50%, var(--paper-raised) 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  background: var(--accent-wash); border: 1px solid transparent;
  border-radius: 18px; padding: 20px 24px; font-size: 0.95rem; margin-bottom: 8px;
}
.notice-sub { margin-top: 10px; font-size: 0.84rem; color: var(--ink-soft); }

/* --- cite modal --- */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 40;
  background: color-mix(in srgb, var(--ink) 32%, transparent);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: grid; place-items: center; padding: 24px;
  animation: fade 0.2s ease;
}
.modal {
  width: min(640px, 100%); background: var(--paper-raised);
  border: 1px solid var(--line); border-radius: 20px; padding: 22px 24px;
  box-shadow: var(--card-shadow-hover);
  animation: pop 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
}
@keyframes fade { from { opacity: 0; } }
@keyframes pop { from { opacity: 0; transform: scale(0.96) translateY(8px); } }
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.seg { display: inline-flex; background: var(--accent-wash); border-radius: 999px; padding: 3px; }
.seg button {
  font-family: var(--font-body); font-size: 0.84rem; font-weight: 500;
  padding: 6px 16px; border-radius: 999px; border: none; background: none;
  color: var(--ink-soft); cursor: pointer; transition: all 0.18s ease;
}
.seg button.on { background: var(--paper-raised); color: var(--accent-strong); box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.modal-close {
  border: none; background: none; color: var(--ink-soft); cursor: pointer;
  font-size: 0.95rem; width: 32px; height: 32px; border-radius: 50%;
}
.modal-close:hover { background: var(--accent-wash); color: var(--ink); }
.cite-block {
  font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.65;
  background: var(--paper); border: 1px solid var(--line-soft); border-radius: 12px;
  padding: 16px 18px; white-space: pre-wrap; word-break: break-word; color: var(--ink);
}
.modal-foot { display: flex; justify-content: flex-end; margin-top: 16px; }

/* --- timeline (CV) --- */
.timeline { position: relative; display: flex; flex-direction: column; }
.tl-entry { display: grid; grid-template-columns: 26px 1fr; gap: 22px; padding: 24px 0; }
.tl-rail { position: relative; display: flex; justify-content: center; }
.tl-rail::before {
  content: ""; position: absolute; top: 0; bottom: 0; width: 1px;
  background: var(--line);
}
.tl-entry:first-child .tl-rail::before { top: 14px; }
.tl-entry:last-child .tl-rail::before { bottom: calc(100% - 14px); }
.tl-dot {
  position: relative; z-index: 1; width: 12px; height: 12px; border-radius: 50%;
  background: var(--paper); border: 2.5px solid var(--accent); margin-top: 7px;
  transition: transform 0.2s ease, background 0.2s ease;
}
.tl-entry:hover .tl-dot { transform: scale(1.25); background: var(--accent); }
.tl-period { font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-strong); }
.tl-heading { font-family: var(--font-display); font-weight: 480; font-size: 1.22rem; margin-top: 5px; letter-spacing: -0.005em; }
.tl-org { color: var(--ink-soft); font-size: 0.93rem; margin-top: 3px; }
.tl-honors { font-size: 0.88rem; color: var(--accent-strong); margin-top: 7px; }
.tl-toggle { padding-left: 0; font-size: 0.84rem; }
.tl-details { color: var(--ink-soft); font-size: 0.94rem; line-height: 1.72; padding-top: 8px; max-width: 740px; }

/* --- course --- */
.outcome-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 32px; max-width: 860px; }
.outcome-list li { padding-left: 26px; position: relative; font-size: 0.97rem; }
.outcome-list li::before {
  content: "✓"; position: absolute; left: 0; top: 1px;
  color: var(--accent); font-weight: 600; font-size: 0.9rem;
  width: 18px; height: 18px; display: grid; place-items: center;
  background: var(--accent-wash); border-radius: 50%;
}

.session-list { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.session-row {
  display: grid; grid-template-columns: 44px 140px 1fr 28px; gap: 18px; align-items: baseline;
  padding: 17px 14px; border-bottom: 1px solid var(--line);
  text-decoration: none; color: var(--ink);
  transition: background 0.18s ease, padding-left 0.18s ease;
}
.session-row:hover { background: var(--paper-raised); padding-left: 22px; }
.session-row:hover .session-arrow { color: var(--accent-strong); transform: translateX(4px); }
.session-idx { font-family: var(--font-mono); font-size: 0.72rem; color: var(--ink-soft); opacity: 0.6; }
.session-label { font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-strong); }
.session-title { font-size: 0.98rem; }
.session-arrow { color: var(--ink-soft); transition: transform 0.18s ease, color 0.18s ease; }

.embed-frame {
  border: 1px solid var(--line); border-radius: 18px; overflow: hidden;
  background: var(--paper-raised); box-shadow: var(--card-shadow);
}
.embed-frame iframe { display: block; width: 100%; height: 75vh; border: 0; }
.pager { display: flex; justify-content: space-between; margin-top: 34px; }

/* --- back to top --- */
.back-to-top {
  position: fixed; right: 26px; bottom: 26px; z-index: 18;
  width: 44px; height: 44px; border-radius: 50%;
  border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink);
  cursor: pointer; font-size: 1rem; box-shadow: var(--card-shadow);
  opacity: 0; transform: translateY(12px); pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease, border-color 0.2s ease;
}
.back-to-top.show { opacity: 1; transform: none; pointer-events: auto; }
.back-to-top:hover { border-color: var(--accent); color: var(--accent-strong); }

/* --- footer --- */
.site-footer { border-top: 1px solid var(--line-soft); margin-top: 48px; background: var(--paper-raised); }
.footer-inner {
  max-width: 1020px; margin: 0 auto; padding: 56px 28px 12px;
  display: grid; grid-template-columns: 1.4fr 2fr; gap: 40px;
}
.footer-wordmark {
  font-family: var(--font-display); font-weight: 380; font-size: 2.2rem;
  line-height: 1; letter-spacing: -0.015em;
}
.footer-wordmark em { font-style: italic; color: var(--accent-strong); }
.footer-tag { color: var(--ink-soft); font-size: 0.9rem; margin-top: 12px; }
.footer-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.footer-links { list-style: none; }
.footer-links a { font-size: 0.9rem; color: var(--ink-soft); text-decoration: none; line-height: 2; }
.footer-links a:hover { color: var(--accent-strong); }
.footer-emails a { font-family: var(--font-mono); font-size: 0.82rem; line-height: 2.1; }
.colophon {
  max-width: 1020px; margin: 0 auto; padding: 26px 28px;
  font-size: 0.76rem; color: var(--ink-soft); line-height: 1.65;
  border-top: 1px solid var(--line-soft);
}

/* --- reveal --- */
.reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* --- print --- */
@media print {
  .site-header, .site-footer, .back-to-top, .scroll-progress, .hero-links, .cta-line { display: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
  body { background: #fff; color: #000; }
}

/* --- responsive --- */
@media (max-width: 820px) {
  .nav { display: none; }
  .menu-toggle { display: block; }
  .theme-toggle { margin-left: auto; }
  .mobile-overlay { display: block; }
  .header-inner { gap: 12px; }
  .hero { padding: 60px 0 52px; }
  .hero-chart { width: 100%; height: 45%; opacity: 0.5; }
  .page-hero { padding: 46px 0 34px; }
  .two-col, .card-grid { grid-template-columns: 1fr; gap: 30px; }
  .outcome-list { grid-template-columns: 1fr; }
  .section { padding: 52px 0; }
  .paper-body, .project, .nav-card, .side-panel { padding: 21px 22px; }
  .session-row { grid-template-columns: 1fr 28px; gap: 6px 14px; padding: 15px 10px; }
  .session-idx, .session-label { grid-column: 1 / -1; }
  .session-idx { display: none; }
  .footer-inner { grid-template-columns: 1fr; }
  .footer-cols { grid-template-columns: 1fr 1fr; }
  .embed-frame iframe { height: 60vh; }
  .back-to-top { right: 18px; bottom: 18px; }
}
`;