import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, AFFILIATION, HERO_LEDE, BIO, SKILLS, LANGUAGES,
  RESEARCH_STATEMENT, INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, WORK_EXPERIENCE, COURSE, COPYRIGHT_NOTICE,
} from "./content.js";

/* ============================================================
   Eva Cheng — Academic Portfolio · v5
   Single typeface (EB Garamond), classic academic register.
   ORCID is the primary source for publications; curated entries
   in content.js supplement it with abstracts, citations, links.
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

        /* The summary endpoint omits contributors; a bulk call on the
           put-codes returns the full records, including coauthors. */
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

/* Merge an ORCID work with a matching curated entry: ORCID provides the
   record (title, year, contributors); the curated entry provides the
   abstract, the citation and the canonical link. */
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

function Label({ children, className = "" }) {
  return <p className={`label ${className}`}>{children}</p>;
}

function Fade({ children, as: Tag = "div", className = "", ...rest }) {
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
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`fade ${className}`} {...rest}>{children}</Tag>;
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

/* Publication entry, vita style */
function PubItem({ title, authors, venue, year, link, citation, abstract }) {
  const [open, setOpen] = useState(false);
  const [citing, setCiting] = useState(false);
  return (
    <Fade as="article" className="pub">
      <div className="pub-head">
        <h3 className="pub-title">{title}</h3>
        {year && <span className="pub-year">{year}</span>}
      </div>
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
      {citing && <CiteModal citation={citation} onClose={() => setCiting(false)} />}
    </Fade>
  );
}

/* Institution logo, from the organization's favicon, with fallback */
function OrgMark({ domain, name }) {
  const [failed, setFailed] = useState(false);
  if (!domain || failed) {
    return <span className="org-mark org-mark-fallback" aria-hidden="true">{(name || "?")[0]}</span>;
  }
  return (
    <img
      className="org-mark"
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function CvRow({ heading, org, orgUrl, orgDomain, period, honors, details }) {
  const [open, setOpen] = useState(false);
  return (
    <Fade as="article" className="cv-row">
      <OrgMark domain={orgDomain} name={org} />
      <div className="cv-body">
        <div className="cv-top">
          <h3 className="cv-heading">{heading}</h3>
          <span className="cv-period">{period}</span>
        </div>
        <p className="cv-org">
          {orgUrl ? (
            <a href={orgUrl} target="_blank" rel="noreferrer">{org}</a>
          ) : org}
          {honors && <span className="cv-honors"> · {honors}</span>}
        </p>
        {details && (
          <>
            <button className="text-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? "Hide details" : "Details"}
            </button>
            {open && <p className="cv-details">{details}</p>}
          </>
        )}
      </div>
    </Fade>
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
      <div className="header-inner">
        <Link className="wordmark" to="/">Eva Cheng</Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>
          ))}
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen} aria-label="Menu">
          {menuOpen ? "✕" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Main mobile">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-name">Eva Cheng</p>
      <p className="footer-aff">{AFFILIATION}</p>
      <p className="footer-emails">
        <a href={`mailto:${LINKS.emailAcademic}`}>{LINKS.emailAcademic}</a>
        <span className="sep">·</span>
        <a href={`mailto:${LINKS.emailPro}`}>{LINKS.emailPro}</a>
      </p>
      <ul className="footer-profiles">
        {PROFILE_LINKS.map((l) => (
          <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
        ))}
      </ul>
      <p className="colophon">
        © {new Date().getFullYear()} Eva Cheng. {COPYRIGHT_NOTICE} Publications are
        synchronized from <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID</a>.
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
        <div className="hero-grid">
          <div>
            <Label>{AFFILIATION}</Label>
            <h1 className="hero-name">Eva Cheng</h1>
            <p className="hero-lede">{HERO_LEDE}</p>
            <div className="btn-row">
              <Link className="btn btn-solid" to="/research">Research</Link>
              <a className="btn" href={LINKS.cvEN} target="_blank" rel="noreferrer">Curriculum Vitae (PDF)</a>
            </div>
            <ul className="inline-links" aria-label="Profiles">
              {PROFILE_LINKS.map((l, i) => (
                <li key={l.label}>
                  {i > 0 && <span className="sep">·</span>}
                  <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <Portrait />
        </div>
      </section>

      <section className="section">
        <Label>About</Label>
        <div className="two-col">
          <Fade className="prose">
            {BIO.map((p, i) => (<p key={i}>{p}</p>))}
          </Fade>
          <Fade className="aside">
            <p className="aside-label">Technical skills</p>
            <p className="aside-line">{SKILLS.join(" · ")}</p>
            <p className="aside-label">Languages</p>
            <p className="aside-line">{LANGUAGES.join(" · ")}</p>
            <p className="aside-label">Research interests</p>
            <ul className="aside-list">
              {INTERESTS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </Fade>
        </div>
      </section>

      <section className="section">
        <Label>Contents</Label>
        <div className="toc">
          {[
            { to: "/research", h: "Research", p: "Publications synchronized from ORCID, working papers, theses and side projects." },
            { to: "/teaching", h: "Teaching", p: "Python for Finance at Audencia: eight sessions, a final project and references." },
            { to: "/cv", h: "Curriculum Vitae", p: "Education and professional experience, with the full CV in English and French." },
          ].map((c) => (
            <Fade as={Link} to={c.to} className="toc-item" key={c.to}>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <span className="toc-more">Read more</span>
            </Fade>
          ))}
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
        <Label>Research</Label>
        <h1 className="page-title">Research and projects</h1>
      </section>

      <section className="section">
        <div className="two-col">
          <Fade className="prose">
            {RESEARCH_STATEMENT.map((p, i) => (<p key={i}>{p}</p>))}
          </Fade>
          <Fade className="aside">
            <p className="aside-label">Research interests</p>
            <ul className="aside-list">
              {INTERESTS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </Fade>
        </div>
      </section>

      <section className="section">
        <Label>Publications and working papers</Label>
        <p className="section-note">
          Synchronized from <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID {ORCID_ID}</a>.
        </p>

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
      </section>

      {(status === "loading" || reportsNotInOrcid.length > 0) && (
        <section className="section">
          <Label>Theses and research reports</Label>
          <div className="pub-list">
            {(status !== "loading" ? reportsNotInOrcid : REPORTS).map((p) => (
              <PubItem key={p.title} title={p.title} authors={p.authors} venue={p.venue}
                year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <Label>Side projects</Label>
        <div className="pub-list">
          {PROJECTS.map((p) => (
            <Fade as="article" className="pub" key={p.name}>
              <div className="pub-head">
                <h3 className="pub-title">
                  {p.link ? (
                    <a className="quiet-link" href={p.link.url} target="_blank" rel="noreferrer">{p.name}</a>
                  ) : p.name}
                </h3>
              </div>
              <p className="pub-authors">{p.description}</p>
              <p className="pub-venue">{p.tags.join(" · ")}</p>
            </Fade>
          ))}
        </div>
        <p className="cta-line">
          <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[RESEARCH]`}>Discuss research</a>
        </p>
      </section>
    </>
  );
}

function TeachingPage() {
  return (
    <>
      <PageHead title="Teaching" />
      <section className="page-hero">
        <Label>Teaching</Label>
        <h1 className="page-title">Teaching</h1>
      </section>

      <section className="section">
        <div className="two-col">
          <Fade className="prose">
            {TEACHING_EXPERIENCE.map((t) => (
              <div key={t.role}>
                <h2 className="sub-heading">{t.role}</h2>
                <p className="pub-venue">
                  <a href={t.orgUrl} target="_blank" rel="noreferrer">{t.org}</a> · {t.period}
                </p>
                <p className="mt-sm">{t.details}</p>
              </div>
            ))}
          </Fade>
          <Fade as={Link} to="/teaching/python-for-finance" className="toc-item">
            <h3>Python for Finance</h3>
            <p>Complete course material: eight sessions, a final project and additional references.</p>
            <span className="toc-more">Open the course</span>
          </Fade>
        </div>
        <p className="cta-line">
          <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[TEACHING]`}>Contact about teaching</a>
        </p>
      </section>
    </>
  );
}

function CoursePage() {
  return (
    <>
      <PageHead title={COURSE.title} />
      <section className="page-hero">
        <Label>
          <Link to="/teaching" className="crumb">Teaching</Link> / Python for Finance
        </Label>
        <h1 className="page-title">{COURSE.title}</h1>
        <p className="section-note">{COURSE.org}</p>
      </section>

      <section className="section">
        <Fade className="prose narrow">
          <p>{COURSE.description}</p>
        </Fade>
        <Label className="mt">Learning outcomes</Label>
        <ul className="outcome-list">
          {COURSE.outcomes.map((o) => (<Fade as="li" key={o}>{o}</Fade>))}
        </ul>
      </section>

      <section className="section">
        <Label>Course content</Label>
        <div className="session-list">
          {COURSE.sessions.map((s) => (
            <Fade as={Link} to={`/teaching/python-for-finance/${s.slug}`}
              className="session-row" key={s.slug}>
              <span className="session-label">{s.label}</span>
              <span className="session-title">{s.title}</span>
              <span className="session-arrow" aria-hidden="true">→</span>
            </Fade>
          ))}
        </div>
        <p className="notice mt">{COURSE.ipNotice}</p>
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
        <Label>
          <Link to="/teaching" className="crumb">Teaching</Link> /{" "}
          <Link to="/teaching/python-for-finance" className="crumb">Python for Finance</Link> /{" "}
          {session.label}
        </Label>
        <h1 className="page-title">{session.title}</h1>
      </section>

      <section className="section">
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
      </section>
    </>
  );
}

function CVPage() {
  return (
    <>
      <PageHead title="Curriculum Vitae" />
      <section className="page-hero">
        <Label>Curriculum Vitae</Label>
        <h1 className="page-title">Curriculum Vitae</h1>
        <div className="btn-row">
          <a className="btn btn-solid" href={LINKS.cvEN} target="_blank" rel="noreferrer">Download (English)</a>
          <a className="btn" href={LINKS.cvFR} target="_blank" rel="noreferrer">Télécharger (français)</a>
        </div>
      </section>

      <section className="section">
        <Label>Education</Label>
        <div className="cv-list">
          {EDUCATION.map((e) => (
            <CvRow key={e.degree} heading={e.degree} org={e.school} orgUrl={e.orgUrl}
              orgDomain={e.orgDomain} period={e.year} honors={e.honors} details={e.details} />
          ))}
        </div>
      </section>

      <section className="section">
        <Label>Teaching experience</Label>
        <div className="cv-list">
          {TEACHING_EXPERIENCE.map((t) => (
            <CvRow key={t.role} heading={t.role} org={t.org} orgUrl={t.orgUrl}
              orgDomain={t.orgDomain} period={t.period} details={t.details} />
          ))}
        </div>
      </section>

      <section className="section">
        <Label>Professional experience</Label>
        <div className="cv-list">
          {WORK_EXPERIENCE.map((w) => (
            <CvRow key={w.role + w.period} heading={w.role} org={w.org} orgUrl={w.orgUrl}
              orgDomain={w.orgDomain} period={w.period} details={w.details} />
          ))}
        </div>
        <p className="cta-line">
          <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[WORK]`}>Get in touch</a>
        </p>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageHead title="Page not found" />
      <section className="page-hero">
        <Label>Error 404</Label>
        <h1 className="page-title">This page does not exist</h1>
        <div className="btn-row">
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
  --paper: #f7f6f0;
  --paper-raised: #fdfcf8;
  --ink: #1e2a22;
  --ink-soft: #5a675e;
  --line: #d9ddd2;
  --line-soft: #e6e8df;
  --accent: #1c5f42;
  --accent-soft: #3d7a5c;
  --wash: #ebefe6;
  --font: "EB Garamond", Garamond, "Times New Roman", serif;
}

[data-theme="dark"] {
  --paper: #121713;
  --paper-raised: #191f1a;
  --ink: #e9ede5;
  --ink-soft: #9aa79c;
  --line: #2b342c;
  --line-soft: #212922;
  --accent: #7cc39d;
  --accent-soft: #5da881;
  --wash: #1a221b;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.62;
  -webkit-font-smoothing: antialiased;
  transition: background 0.3s ease, color 0.3s ease;
}

::selection { background: var(--accent); color: var(--paper); }

a { color: var(--accent); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; text-decoration-color: color-mix(in srgb, var(--accent) 45%, transparent); }
a:hover { text-decoration-color: var(--accent); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

main { max-width: 860px; margin: 0 auto; padding: 0 24px; min-height: 62vh; }

.mt { margin-top: 30px; }
.mt-sm { margin-top: 12px; }
.sep { margin: 0 9px; color: var(--line); }

/* --- small caps labels: the structural voice of the site --- */
.label {
  font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 14px; font-weight: 500;
}

/* --- header --- */
.site-header { border-bottom: 1px solid var(--line); background: var(--paper); position: sticky; top: 0; z-index: 20; }
.header-inner {
  display: flex; align-items: baseline; gap: 28px;
  max-width: 860px; margin: 0 auto; padding: 18px 24px 14px;
}
.wordmark {
  font-style: italic; font-weight: 500; font-size: 1.22rem;
  color: var(--ink); text-decoration: none;
}
.nav { display: flex; gap: 26px; margin-left: auto; }
.nav a {
  font-size: 0.74rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink-soft); text-decoration: none; padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav a:hover { color: var(--ink); }
.nav a.active { color: var(--accent); border-bottom-color: var(--accent); }
.theme-toggle {
  border: none; background: none; color: var(--ink-soft); cursor: pointer;
  font-size: 0.95rem; padding: 0 2px; align-self: center;
}
.theme-toggle:hover { color: var(--accent); }
.menu-toggle {
  display: none; border: none; background: none; color: var(--ink);
  font-family: var(--font); font-size: 0.74rem; letter-spacing: 0.18em;
  text-transform: uppercase; cursor: pointer; margin-left: auto;
}
.mobile-nav {
  display: flex; flex-direction: column; border-top: 1px solid var(--line-soft);
  max-width: 860px; margin: 0 auto; padding: 6px 24px 14px;
}
.mobile-nav a {
  font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink); text-decoration: none; padding: 11px 0;
  border-bottom: 1px solid var(--line-soft);
}
.mobile-nav a.active { color: var(--accent); }
.mobile-nav a:last-child { border-bottom: none; }

/* --- hero --- */
.hero { padding: 56px 0 46px; border-bottom: 1px solid var(--line); }
.hero-grid { display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center; }
.hero-name {
  font-weight: 500; font-size: clamp(2.6rem, 6vw, 3.9rem);
  line-height: 1.04; letter-spacing: -0.01em; margin: 2px 0 18px;
}
.hero-lede { max-width: 560px; font-size: 1.12rem; line-height: 1.6; color: var(--ink-soft); }
.btn-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.inline-links { list-style: none; display: flex; flex-wrap: wrap; margin-top: 22px; }
.inline-links li { display: flex; align-items: baseline; }
.inline-links a {
  font-size: 0.74rem; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ink-soft); text-decoration: none;
}
.inline-links a:hover { color: var(--accent); }

.portrait {
  width: 196px; height: 196px; object-fit: cover; border-radius: 4px;
  border: 1px solid var(--line);
  box-shadow: 6px 6px 0 var(--wash);
}
.portrait-fallback {
  display: grid; place-items: center; font-style: italic;
  font-size: 2.8rem; color: var(--accent); background: var(--wash);
}

.page-hero { padding: 44px 0 34px; border-bottom: 1px solid var(--line); }
.page-title { font-weight: 500; font-size: clamp(1.9rem, 5vw, 2.7rem); line-height: 1.08; letter-spacing: -0.008em; }
.section-note { font-size: 0.95rem; color: var(--ink-soft); margin-top: 8px; }

/* --- buttons --- */
.btn {
  display: inline-block; font-family: var(--font);
  font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase;
  padding: 10px 20px; border: 1px solid var(--ink); border-radius: 2px;
  color: var(--ink); background: none; text-decoration: none; cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.btn:hover { background: var(--ink); color: var(--paper); }
.btn-solid { background: var(--ink); color: var(--paper); }
.btn-solid:hover { background: var(--accent); border-color: var(--accent); color: var(--paper); }
.text-btn {
  font-family: var(--font); font-size: 0.72rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--accent); background: none; border: none;
  padding: 0; margin-top: 8px; cursor: pointer;
}
.text-btn:hover { text-decoration: underline; text-underline-offset: 3px; }

/* --- sections --- */
.section { padding: 42px 0; border-bottom: 1px solid var(--line); }
.section:last-of-type { border-bottom: none; }
.sub-heading { font-weight: 600; font-size: 1.25rem; }
.two-col { display: grid; grid-template-columns: 5fr 3fr; gap: 44px; align-items: start; }
.prose { text-align: justify; hyphens: auto; }
.prose p + p, .prose div + div { margin-top: 14px; }
.narrow { max-width: 640px; }
.cta-line { margin-top: 28px; }

.aside { border-left: 1px solid var(--line); padding-left: 26px; }
.aside-label {
  font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--ink-soft); margin: 18px 0 6px;
}
.aside-label:first-child { margin-top: 0; }
.aside-line { font-size: 0.98rem; }
.aside-list { list-style: none; font-size: 0.98rem; }
.aside-list li { padding: 2px 0; }

/* --- table of contents cards --- */
.toc { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.toc-item {
  padding: 22px 22px 24px; text-decoration: none; color: var(--ink);
  border-right: 1px solid var(--line); transition: background 0.15s ease;
}
.toc-item:last-child { border-right: none; }
.toc-item:hover { background: var(--paper-raised); }
.toc-item h3 { font-weight: 600; font-size: 1.15rem; font-style: italic; }
.toc-item p { color: var(--ink-soft); font-size: 0.95rem; margin-top: 8px; line-height: 1.55; }
.toc-more {
  display: inline-block; margin-top: 14px;
  font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent);
}
.two-col .toc-item { border: 1px solid var(--line); }

/* --- publications, vita style --- */
.pub-list { border-top: 1px solid var(--line); }
.pub { padding: 18px 0; border-bottom: 1px solid var(--line); }
.pub-head { display: flex; align-items: baseline; gap: 20px; }
.pub-title { font-weight: 600; font-size: 1.14rem; line-height: 1.4; flex: 1; }
.pub-year { font-size: 0.85rem; color: var(--ink-soft); white-space: nowrap; }
.pub-authors { font-size: 0.98rem; margin-top: 5px; }
.pub-venue { font-style: italic; font-size: 0.95rem; color: var(--ink-soft); margin-top: 2px; }
.pub-actions { display: flex; gap: 22px; margin-top: 9px; }
.pub-actions a, .pub-actions button {
  font-family: var(--font); font-size: 0.7rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--accent); background: none; border: none;
  padding: 0; cursor: pointer; text-decoration: none;
}
.pub-actions a:hover, .pub-actions button:hover { text-decoration: underline; text-underline-offset: 3px; }
.pub-abstract {
  margin-top: 12px; padding: 2px 0 2px 18px; border-left: 2px solid var(--line);
  color: var(--ink-soft); font-size: 0.97rem; line-height: 1.65;
  text-align: justify; hyphens: auto;
}
.quiet-link { color: var(--ink); text-decoration: none; }
.quiet-link:hover { color: var(--accent); }

.skeleton-list { border-top: 1px solid var(--line); }
.skeleton {
  height: 84px; border-bottom: 1px solid var(--line);
  background: linear-gradient(100deg, transparent 40%, var(--wash) 50%, transparent 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  background: var(--wash); padding: 15px 19px; font-size: 0.97rem;
  border-left: 2px solid var(--accent);
}

/* --- cite modal --- */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 40;
  background: color-mix(in srgb, var(--ink) 34%, transparent);
  display: grid; place-items: center; padding: 20px;
}
.modal {
  width: min(620px, 100%); background: var(--paper);
  border: 1px solid var(--ink); padding: 20px 22px;
}
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.seg { display: inline-flex; gap: 18px; }
.seg button {
  font-family: var(--font); font-size: 0.74rem; letter-spacing: 0.16em;
  text-transform: uppercase; padding: 0 0 3px; border: none; background: none;
  color: var(--ink-soft); cursor: pointer; border-bottom: 1px solid transparent;
}
.seg button.on { color: var(--accent); border-bottom-color: var(--accent); }
.modal-close { border: none; background: none; color: var(--ink-soft); cursor: pointer; font-size: 0.95rem; }
.modal-close:hover { color: var(--ink); }
.cite-block {
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 0.76rem; line-height: 1.6;
  background: var(--paper-raised); border: 1px solid var(--line);
  padding: 14px 16px; white-space: pre-wrap; word-break: break-word; color: var(--ink);
}
.modal-foot { display: flex; justify-content: flex-end; margin-top: 14px; }

/* --- CV --- */
.cv-list { border-top: 1px solid var(--line); }
.cv-row { display: grid; grid-template-columns: 44px 1fr; gap: 18px; padding: 16px 0; border-bottom: 1px solid var(--line); }
.org-mark {
  width: 36px; height: 36px; border-radius: 3px; object-fit: contain;
  border: 1px solid var(--line); background: #fff; padding: 5px; margin-top: 3px;
}
[data-theme="dark"] .org-mark { background: #f2f2ee; }
.org-mark-fallback {
  display: grid; place-items: center; font-style: italic; font-size: 1.15rem;
  color: var(--accent); background: var(--wash); padding: 0;
}
.cv-top { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; }
.cv-heading { font-weight: 600; font-size: 1.1rem; line-height: 1.35; }
.cv-period { font-size: 0.85rem; color: var(--ink-soft); white-space: nowrap; }
.cv-org { font-size: 0.97rem; margin-top: 3px; }
.cv-org a { color: var(--ink-soft); }
.cv-org a:hover { color: var(--accent); }
.cv-honors { font-style: italic; color: var(--accent); }
.cv-details {
  margin-top: 10px; padding-left: 18px; border-left: 2px solid var(--line);
  color: var(--ink-soft); font-size: 0.96rem; line-height: 1.62;
  text-align: justify; hyphens: auto; max-width: 700px;
}

/* --- course --- */
.outcome-list { list-style: none; columns: 2; column-gap: 44px; max-width: 780px; }
.outcome-list li {
  break-inside: avoid; padding: 4px 0 4px 20px; position: relative; font-size: 1rem;
}
.outcome-list li::before { content: "—"; position: absolute; left: 0; color: var(--accent); }

.session-list { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.session-row {
  display: grid; grid-template-columns: 120px 1fr 24px; gap: 16px; align-items: baseline;
  padding: 13px 2px; border-bottom: 1px solid var(--line);
  text-decoration: none; color: var(--ink);
  transition: background 0.15s ease;
}
.session-row:hover { background: var(--paper-raised); }
.session-row:hover .session-arrow { color: var(--accent); }
.session-label {
  font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent);
}
.session-title { font-size: 1.02rem; }
.session-arrow { color: var(--line); transition: color 0.15s ease; text-align: right; }

.embed-frame { border: 1px solid var(--line); background: var(--paper-raised); }
.embed-frame iframe { display: block; width: 100%; height: 76vh; border: 0; }
.pager { display: flex; justify-content: space-between; margin-top: 26px; }

/* --- footer --- */
.site-footer {
  border-top: 1px solid var(--line); margin-top: 48px;
  padding: 42px 24px 30px; text-align: center;
}
.footer-name { font-style: italic; font-weight: 500; font-size: 1.5rem; }
.footer-aff { color: var(--ink-soft); font-size: 0.95rem; margin-top: 6px; }
.footer-emails { margin-top: 14px; font-size: 0.95rem; }
.footer-profiles {
  list-style: none; display: flex; flex-wrap: wrap; justify-content: center;
  gap: 8px 26px; margin-top: 16px;
}
.footer-profiles a {
  font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ink-soft); text-decoration: none;
}
.footer-profiles a:hover { color: var(--accent); }
.colophon {
  max-width: 720px; margin: 26px auto 0; padding-top: 18px;
  border-top: 1px solid var(--line-soft);
  font-size: 0.78rem; color: var(--ink-soft); line-height: 1.6;
}

/* --- fade --- */
.fade { opacity: 0; transition: opacity 0.4s ease; }
.fade.in { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .fade { opacity: 1; transition: none; } }

/* --- print --- */
@media print {
  .site-header, .site-footer, .btn-row, .cta-line { display: none !important; }
  .fade { opacity: 1 !important; }
  body { background: #fff; color: #000; }
}

/* --- responsive --- */
@media (max-width: 720px) {
  body { font-size: 17px; }
  .nav, .site-header .theme-toggle { display: none; }
  .menu-toggle { display: block; }
  .hero { padding: 36px 0 32px; }
  .hero-grid { grid-template-columns: 1fr; gap: 26px; }
  .hero-grid .portrait, .hero-grid .portrait-fallback { order: -1; width: 128px; height: 128px; }
  .page-hero { padding: 30px 0 26px; }
  .two-col { grid-template-columns: 1fr; gap: 26px; }
  .aside { border-left: none; padding-left: 0; border-top: 1px solid var(--line); padding-top: 20px; }
  .toc { grid-template-columns: 1fr; }
  .toc-item { border-right: none; border-bottom: 1px solid var(--line); }
  .toc-item:last-child { border-bottom: none; }
  .section { padding: 32px 0; }
  .outcome-list { columns: 1; }
  .pub-head, .cv-top { flex-direction: column; gap: 2px; }
  .session-row { grid-template-columns: 1fr 24px; gap: 3px 12px; }
  .session-label { grid-column: 1 / -1; }
  .prose, .pub-abstract, .cv-details { text-align: left; hyphens: none; }
}
`;