import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, BIO, SKILLS, RESEARCH_STATEMENT,
  INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, WORK_EXPERIENCE, COURSE, COPYRIGHT_NOTICE,
} from "./content.js";

/* ============================================================
   Eva Cheng — Academic Portfolio (multi-page)
   Content lives in src/content.js; everything else lives here.
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
  if (doi) {
    return doi["external-id-url"]?.value || `https://doi.org/${doi["external-id-value"]}`;
  }
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

/* ---------- Building blocks ---------- */

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function Reveal({ children, as: Tag = "div", className = "", ...rest }) {
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function PaperCard({ paper }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="article" className="paper">
      <div className="paper-meta">
        <span className="chip">{paper.venue}</span>
      </div>
      <h3 className="paper-title">{paper.title}</h3>
      <p className="paper-authors">{paper.authors}</p>
      <div className="paper-actions">
        {paper.link && (
          <a className="btn btn-outline" href={paper.link.url} target="_blank" rel="noreferrer">
            {paper.link.label} ↗
          </a>
        )}
        {paper.abstract && (
          <button className="btn btn-ghost" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Hide abstract" : "Read abstract"}
          </button>
        )}
      </div>
      {open && <p className="paper-abstract">{paper.abstract}</p>}
    </Reveal>
  );
}

function TimelineEntry({ heading, org, period, honors, details }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="article" className="tl-entry">
      <div className="tl-marker" aria-hidden="true" />
      <div className="tl-body">
        <p className="tl-period">{period}</p>
        <h3 className="tl-heading">{heading}</h3>
        <p className="tl-org">{org}</p>
        {honors && <p className="tl-honors">★ {honors}</p>}
        {details && (
          <>
            <button className="btn btn-ghost tl-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Less" : "More"}
            </button>
            {open && <p className="tl-details">{details}</p>}
          </>
        )}
      </div>
    </Reveal>
  );
}

/* ---------- Layout ---------- */

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/teaching", label: "Teaching" },
  { to: "/cv", label: "Curriculum Vitae" },
];

function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" to="/">Eva&nbsp;Cheng</Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Main mobile">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
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
              <li key={l.label}>
                <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
              </li>
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
      <p className="colophon">
        © {new Date().getFullYear()} Eva Cheng — {COPYRIGHT_NOTICE} Publications
        sync automatically from{" "}
        <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID</a>.
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
    document.title = title ? `${title} — Eva Cheng` : "Eva Cheng";
  }, [title]);
  return null;
}

/* ---------- Pages ---------- */

function HomePage() {
  return (
    <>
      <PageHead title="" />
      <section className="hero">
        <Eyebrow>visiting researcher · audencia&nbsp;&nbsp;→&nbsp;&nbsp;future phd · escp</Eyebrow>
        <h1 className="hero-name">Eva <em>Cheng</em></h1>
        <p className="hero-lede">
          Research at the intersection of <strong>finance, sustainability and
          mathematics</strong> — how climate, nature and social risks shape
          corporate decisions and financial markets, and how AI can analyze
          disclosures to support sustainability reporting.
        </p>
        <div className="hero-links">
          <Link className="btn btn-solid" to="/research">Explore my research</Link>
          <a className="btn btn-outline" href={LINKS.cvEN} target="_blank" rel="noreferrer">
            Download CV ↗
          </a>
        </div>
        <ul className="profile-links" aria-label="Profiles">
          {PROFILE_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
            </li>
          ))}
        </ul>
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
          <Reveal>
            <p className="side-label">Finance, computing &amp; analytics</p>
            <ul className="tag-cloud" aria-label="Technical skills">
              {SKILLS.map((s) => (<li key={s} className="tag">{s}</li>))}
            </ul>
            <p className="side-label" style={{ marginTop: "28px" }}>Languages</p>
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
          <Reveal as={Link} to="/research" className="nav-card">
            <h3>Research</h3>
            <p>Working papers, publications synced from ORCID, theses, reports and side-projects.</p>
            <span className="nav-card-cta">Browse →</span>
          </Reveal>
          <Reveal as={Link} to="/teaching" className="nav-card">
            <h3>Teaching</h3>
            <p>Python for Finance at Audencia — eight sessions, a final project and additional references.</p>
            <span className="nav-card-cta">Browse →</span>
          </Reveal>
          <Reveal as={Link} to="/cv" className="nav-card">
            <h3>Curriculum Vitae</h3>
            <p>Education, teaching and professional experience — with the full CV in English and French.</p>
            <span className="nav-card-cta">Browse →</span>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ResearchPage() {
  const { status, works } = useOrcidWorks();
  const curatedTitles = useMemo(
    () => new Set([...WORKING_PAPERS, ...REPORTS].map((p) => normalizeTitle(p.title))),
    []
  );
  const orcidWorks = works.filter((w) => !curatedTitles.has(normalizeTitle(w.title)));

  return (
    <>
      <PageHead title="Research" />
      <section className="page-hero">
        <Eyebrow>research.interests</Eyebrow>
        <h1 className="page-title">Research &amp; <em>projects</em></h1>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            {RESEARCH_STATEMENT.map((p, i) => (<p key={i}>{p}</p>))}
          </Reveal>
          <Reveal>
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
          {WORKING_PAPERS.map((p) => (<PaperCard paper={p} key={p.title} />))}
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
        <div className="paper-list">
          {orcidWorks.map((w) => (
            <Reveal as="article" className="paper" key={w.putCode}>
              <div className="paper-meta">
                <span className="chip">{w.type}</span>
                {w.year && <span className="paper-year">{w.year}</span>}
              </div>
              <h3 className="paper-title">{w.title}</h3>
              {w.journal && <p className="paper-authors">{w.journal}</p>}
              <div className="paper-actions">
                <a className="btn btn-outline" href={w.url} target="_blank" rel="noreferrer">View ↗</a>
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
          {REPORTS.map((p) => (<PaperCard paper={p} key={p.title} />))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>side.projects</Eyebrow>
          <h2 className="section-title">Side-<em>projects</em></h2>
        </Reveal>
        <div className="card-grid">
          {PROJECTS.map((p) => (
            <Reveal as="article" className="project" key={p.name}>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="project-tags">
                {p.tags.map((t) => (<li key={t}>{t}</li>))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="cta-line">
          <a
            className="btn btn-solid"
            href={`mailto:${LINKS.emailPro}?subject=[RESEARCH]`}
          >
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
        <Eyebrow>teaching</Eyebrow>
        <h1 className="page-title">Teaching <em>quantitative finance</em></h1>
      </section>

      <section className="section">
        <div className="two-col">
          <Reveal className="prose">
            {TEACHING_EXPERIENCE.map((t) => (
              <div key={t.role}>
                <h2 className="inline-heading">{t.role}</h2>
                <p className="tl-org">{t.org} · {t.period}</p>
                <p style={{ marginTop: "14px" }}>{t.details}</p>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <Link to="/teaching/python-for-finance" className="nav-card">
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
        <Eyebrow>teaching / python-for-finance</Eyebrow>
        <h1 className="page-title">{COURSE.title} <em>— {COURSE.org}</em></h1>
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
        <Reveal as="ul" className="outcome-list">
          {COURSE.outcomes.map((o) => (<li key={o}>{o}</li>))}
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>course.content</Eyebrow>
          <h2 className="section-title">Direct access to the <em>content</em></h2>
        </Reveal>
        <div className="session-list">
          {COURSE.sessions.map((s) => (
            <Reveal
              as={Link}
              to={`/teaching/python-for-finance/${s.slug}`}
              className="session-row"
              key={s.slug}
            >
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
        <Eyebrow>
          <Link to="/teaching" className="crumb">teaching</Link> /{" "}
          <Link to="/teaching/python-for-finance" className="crumb">python-for-finance</Link> /{" "}
          {session.slug}
        </Eyebrow>
        <h1 className="page-title">
          {session.label}<em> — {session.title}</em>
        </h1>
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
        <Eyebrow>curriculum.vitae</Eyebrow>
        <h1 className="page-title">Curriculum <em>Vitae</em></h1>
        <div className="hero-links">
          <a className="btn btn-solid" href={LINKS.cvEN} target="_blank" rel="noreferrer">
            Download (EN) ↗
          </a>
          <a className="btn btn-outline" href={LINKS.cvFR} target="_blank" rel="noreferrer">
            Télécharger (FR) ↗
          </a>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <Eyebrow>education</Eyebrow>
          <h2 className="section-title">Education</h2>
        </Reveal>
        <div className="timeline">
          {EDUCATION.map((e) => (
            <TimelineEntry
              key={e.degree}
              heading={e.degree}
              org={e.school}
              period={e.year}
              honors={e.honors}
              details={e.details}
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
            <TimelineEntry
              key={t.role}
              heading={t.role}
              org={t.org}
              period={t.period}
              details={t.details}
            />
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
          {WORK_EXPERIENCE.map((w) => (
            <TimelineEntry
              key={w.role + w.period}
              heading={w.role}
              org={w.org}
              period={w.period}
              details={w.details}
            />
          ))}
        </div>
        <Reveal className="cta-line">
          <a className="btn btn-solid" href={`mailto:${LINKS.emailPro}?subject=[WORK]`}>
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
  --paper: #f6f8f3;
  --paper-raised: #ffffff;
  --ink: #1b2a22;
  --ink-soft: #56685d;
  --line: #d9e1d7;
  --accent: #2f7d5b;
  --accent-strong: #205c42;
  --accent-wash: #e7f0e8;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Instrument Sans", -apple-system, sans-serif;
  --font-mono: "Spline Sans Mono", ui-monospace, monospace;
}

[data-theme="dark"] {
  --paper: #101713;
  --paper-raised: #17211b;
  --ink: #e8efe8;
  --ink-soft: #9db0a3;
  --line: #26332b;
  --accent: #6fc394;
  --accent-strong: #8fd6ab;
  --accent-wash: #1b2b22;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;
}

a { color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { color: var(--accent-strong); }

:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 2px; }

main { max-width: 980px; margin: 0 auto; padding: 0 24px; min-height: 60vh; }

/* --- header --- */
.site-header { position: sticky; top: 0; z-index: 10; }
.site-header.scrolled {
  background: color-mix(in srgb, var(--paper) 90%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.header-inner {
  display: flex; align-items: center; gap: 28px;
  max-width: 980px; margin: 0 auto; padding: 18px 24px;
}
.wordmark {
  font-family: var(--font-display); font-weight: 600; font-size: 1.15rem;
  color: var(--ink); text-decoration: none;
}
.nav { display: flex; gap: 22px; margin-left: auto; }
.nav a {
  font-size: 0.88rem; color: var(--ink-soft); text-decoration: none;
  letter-spacing: 0.01em; padding-bottom: 3px; border-bottom: 1px solid transparent;
}
.nav a:hover { color: var(--accent-strong); }
.nav a.active { color: var(--ink); border-bottom-color: var(--accent); }
.theme-toggle {
  border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink);
  width: 34px; height: 34px; border-radius: 50%; cursor: pointer;
  font-size: 0.95rem; line-height: 1; flex-shrink: 0;
}
.theme-toggle:hover { border-color: var(--accent); }
.menu-toggle {
  display: none; border: 1px solid var(--line); background: var(--paper-raised);
  color: var(--ink); width: 34px; height: 34px; border-radius: 8px;
  cursor: pointer; font-size: 1rem; line-height: 1;
}
.mobile-nav {
  display: none; flex-direction: column; gap: 4px;
  padding: 8px 24px 18px; max-width: 980px; margin: 0 auto;
}
.mobile-nav a {
  font-size: 1rem; color: var(--ink); text-decoration: none;
  padding: 10px 4px; border-bottom: 1px solid var(--line);
}
.mobile-nav a.active { color: var(--accent-strong); }

/* --- eyebrow (signature: dataset-field style) --- */
.eyebrow {
  font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.06em;
  color: var(--accent); margin-bottom: 14px;
}
.eyebrow::before { content: "▸ "; opacity: 0.6; }
.crumb { color: var(--accent); text-decoration: none; }
.crumb:hover { text-decoration: underline; }

/* --- heroes --- */
.hero { padding: 88px 0 64px; border-bottom: 1px solid var(--line); }
.hero-name {
  font-family: var(--font-display); font-weight: 380;
  font-size: clamp(3.2rem, 9vw, 6rem); line-height: 1.02;
  letter-spacing: -0.015em; margin: 4px 0 26px;
}
.hero-name em, .page-title em, .section-title em {
  font-style: italic; font-weight: 460; color: var(--accent-strong);
}
.hero-lede { max-width: 640px; font-size: 1.16rem; line-height: 1.6; color: var(--ink-soft); }
.hero-lede strong { color: var(--ink); font-weight: 600; }
.hero-links { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.profile-links { display: flex; flex-wrap: wrap; gap: 8px 22px; list-style: none; margin-top: 34px; }
.profile-links a {
  font-family: var(--font-mono); font-size: 0.78rem; color: var(--ink-soft);
  text-decoration: none; border-bottom: 1px solid var(--line); padding-bottom: 2px;
}
.profile-links a:hover { color: var(--accent-strong); border-color: var(--accent); }

.page-hero { padding: 64px 0 40px; border-bottom: 1px solid var(--line); }
.page-title {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(2.2rem, 6vw, 3.6rem); line-height: 1.1; letter-spacing: -0.01em;
}

/* --- buttons --- */
.btn {
  display: inline-block; font-family: var(--font-body); font-size: 0.9rem;
  font-weight: 500; padding: 10px 20px; border-radius: 999px;
  text-decoration: none; cursor: pointer; border: 1px solid transparent;
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
}
.btn:active { transform: scale(0.98); }
.btn-solid { background: var(--accent-strong); color: var(--paper); border-color: var(--accent-strong); }
[data-theme="dark"] .btn-solid { color: #0d1410; }
.btn-solid:hover { background: var(--accent); border-color: var(--accent); color: var(--paper); }
[data-theme="dark"] .btn-solid:hover { color: #0d1410; }
.btn-outline { border-color: var(--line); color: var(--ink); background: var(--paper-raised); }
.btn-outline:hover { border-color: var(--accent); color: var(--accent-strong); }
.btn-ghost { background: none; color: var(--ink-soft); border: none; padding: 10px 8px; }
.btn-ghost:hover { color: var(--accent-strong); }

/* --- sections --- */
.section { padding: 64px 0; border-bottom: 1px solid var(--line); }
main > *:last-child .section:last-child { border-bottom: none; }
.section-title {
  font-family: var(--font-display); font-weight: 420;
  font-size: clamp(1.7rem, 4vw, 2.4rem); line-height: 1.15; margin-bottom: 30px;
}
.inline-heading { font-family: var(--font-display); font-weight: 480; font-size: 1.4rem; }
.two-col { display: grid; grid-template-columns: 3fr 2fr; gap: 48px; align-items: start; }
.prose p + p { margin-top: 16px; }
.narrow { max-width: 680px; }
.side-label {
  font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--ink-soft); margin-bottom: 12px;
}
.cta-line { margin-top: 36px; }

.tag-cloud { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-size: 0.83rem; padding: 6px 13px; border-radius: 999px;
  background: var(--accent-wash); color: var(--accent-strong);
}
.tag-quiet { background: var(--paper-raised); border: 1px solid var(--line); color: var(--ink-soft); }

/* --- cards --- */
.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.nav-card, .project {
  display: block; background: var(--paper-raised); border: 1px solid var(--line);
  border-radius: 14px; padding: 24px 26px; text-decoration: none; color: var(--ink);
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.nav-card:hover { border-color: var(--accent); transform: translateY(-2px); color: var(--ink); }
.nav-card h3, .project-name { font-family: var(--font-display); font-weight: 480; font-size: 1.12rem; }
.nav-card p, .project-desc { color: var(--ink-soft); font-size: 0.92rem; margin-top: 10px; }
.nav-card-cta {
  display: inline-block; margin-top: 16px; font-family: var(--font-mono);
  font-size: 0.76rem; color: var(--accent-strong);
}
.project:hover { border-color: var(--accent); }
.project-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
.project-tags li {
  font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.04em;
  padding: 3px 9px; border-radius: 999px; border: 1px solid var(--line); color: var(--ink-soft);
}

/* --- papers --- */
.paper-list { display: flex; flex-direction: column; gap: 16px; }
.paper {
  background: var(--paper-raised); border: 1px solid var(--line);
  border-radius: 14px; padding: 24px 26px; transition: border-color 0.2s ease;
}
.paper:hover { border-color: var(--accent); }
.paper-meta { display: flex; align-items: baseline; gap: 12px; margin-bottom: 10px; }
.chip {
  font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.05em;
  padding: 3px 10px; border-radius: 999px; background: var(--accent-wash); color: var(--accent-strong);
}
.paper-year { font-family: var(--font-mono); font-size: 0.78rem; color: var(--ink-soft); }
.paper-title { font-family: var(--font-display); font-weight: 480; font-size: 1.2rem; line-height: 1.35; }
.paper-authors { color: var(--ink-soft); font-size: 0.92rem; margin-top: 6px; }
.paper-actions { display: flex; gap: 10px; align-items: center; margin-top: 16px; flex-wrap: wrap; }
.paper-abstract {
  margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--line);
  color: var(--ink-soft); font-size: 0.95rem; line-height: 1.7;
}

.skeleton-list { display: flex; flex-direction: column; gap: 16px; }
.skeleton {
  height: 110px; border-radius: 14px; border: 1px solid var(--line);
  background: linear-gradient(100deg, var(--paper-raised) 40%, var(--accent-wash) 50%, var(--paper-raised) 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  background: var(--accent-wash); border-radius: 14px;
  padding: 18px 22px; font-size: 0.95rem; margin-bottom: 8px;
}
.notice-sub { margin-top: 10px; font-size: 0.84rem; color: var(--ink-soft); }

/* --- timeline (CV) --- */
.timeline { display: flex; flex-direction: column; }
.tl-entry {
  display: grid; grid-template-columns: 20px 1fr; gap: 20px;
  padding: 22px 0; border-bottom: 1px dashed var(--line);
}
.tl-entry:last-child { border-bottom: none; }
.tl-marker {
  width: 11px; height: 11px; border-radius: 50%;
  background: var(--accent-wash); border: 2px solid var(--accent);
  margin-top: 8px; justify-self: center;
}
.tl-period { font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-strong); }
.tl-heading { font-family: var(--font-display); font-weight: 480; font-size: 1.18rem; margin-top: 4px; }
.tl-org { color: var(--ink-soft); font-size: 0.92rem; margin-top: 3px; }
.tl-honors { font-size: 0.88rem; color: var(--accent-strong); margin-top: 6px; }
.tl-toggle { padding-left: 0; font-size: 0.84rem; }
.tl-details { color: var(--ink-soft); font-size: 0.94rem; line-height: 1.7; margin-top: 8px; max-width: 720px; }

/* --- course --- */
.outcome-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 28px; max-width: 820px; }
.outcome-list li { padding-left: 22px; position: relative; font-size: 0.96rem; }
.outcome-list li::before { content: "✓"; position: absolute; left: 0; color: var(--accent); font-weight: 600; }

.session-list { display: flex; flex-direction: column; }
.session-row {
  display: grid; grid-template-columns: 150px 1fr 24px; gap: 18px; align-items: baseline;
  padding: 16px 12px; border-bottom: 1px solid var(--line);
  text-decoration: none; color: var(--ink); transition: background 0.15s ease;
}
.session-row:hover { background: var(--paper-raised); }
.session-row:hover .session-arrow { color: var(--accent-strong); transform: translateX(3px); }
.session-label { font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-strong); }
.session-title { font-size: 0.98rem; }
.session-arrow { color: var(--ink-soft); transition: transform 0.15s ease, color 0.15s ease; }

.embed-frame {
  border: 1px solid var(--line); border-radius: 14px; overflow: hidden;
  background: var(--paper-raised);
}
.embed-frame iframe { display: block; width: 100%; height: 75vh; border: 0; }
.pager { display: flex; justify-content: space-between; margin-top: 32px; }

/* --- footer --- */
.site-footer { border-top: 1px solid var(--line); margin-top: 40px; }
.footer-inner {
  max-width: 980px; margin: 0 auto; padding: 48px 24px 8px;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
}
.footer-links { list-style: none; }
.footer-links a { font-size: 0.9rem; color: var(--ink-soft); text-decoration: none; line-height: 1.9; }
.footer-links a:hover { color: var(--accent-strong); }
.footer-emails a { font-family: var(--font-mono); font-size: 0.84rem; line-height: 2; }
.colophon {
  max-width: 980px; margin: 0 auto; padding: 24px;
  font-size: 0.76rem; color: var(--ink-soft); line-height: 1.6;
}

/* --- reveal --- */
.reveal { opacity: 0; transform: translateY(14px); transition: opacity 0.55s ease, transform 0.55s ease; }
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* --- responsive --- */
@media (max-width: 760px) {
  .nav { display: none; }
  .menu-toggle { display: block; margin-left: auto; }
  .theme-toggle { margin-left: auto; }
  .header-inner { gap: 12px; }
  .mobile-nav { display: flex; }
  .hero { padding: 56px 0 48px; }
  .page-hero { padding: 44px 0 32px; }
  .two-col, .card-grid { grid-template-columns: 1fr; gap: 28px; }
  .outcome-list { grid-template-columns: 1fr; }
  .section { padding: 48px 0; }
  .paper, .project, .nav-card { padding: 20px; }
  .session-row { grid-template-columns: 1fr 24px; }
  .session-label { grid-column: 1 / -1; }
  .footer-inner { grid-template-columns: 1fr; }
  .embed-frame iframe { height: 60vh; }
}
`;
