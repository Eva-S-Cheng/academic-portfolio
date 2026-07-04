import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ORCID_ID, LINKS, PROFILE_LINKS, AFFILIATION, HERO_LEDE, BIO, SKILLS, LANGUAGES,
  RESEARCH_STATEMENT, INTERESTS, WORKING_PAPERS, REPORTS, PROJECTS, EDUCATION,
  TEACHING_EXPERIENCE, ACADEMIC_POSITIONS, PROFESSIONAL_EXPERIENCE, COURSES, COLLABORATORS, COPYRIGHT_NOTICE,
} from "./content.js";
import { FR } from "./content.fr.js";

/* ---------- Language (EN default, FR optional; courses stay EN) ---------- */

const EN_CONTENT = {
  AFFILIATION, HERO_LEDE, BIO, RESEARCH_STATEMENT, INTERESTS, LANGUAGES, PROJECTS,
  COLLABORATORS, EDUCATION, TEACHING_EXPERIENCE, ACADEMIC_POSITIONS, PROFESSIONAL_EXPERIENCE,
};

const UI = {
  en: {
    nav: { home: "Home", research: "Research", teaching: "Teaching", projects: "Projects", cv: "Curriculum Vitae" },
    heroExplore: "Explore my research", heroDownload: "Download CV ↗",
    aboutEyebrow: "About", aboutTitle: ["Finance, sustainability & ", "quantitative methods"],
    interestsLabel: "Research interests", skillsLabel: "Technical skills", languagesLabel: "Languages",
    exploreEyebrow: "Explore", browse: "Browse →",
    cardResearchP: "Publications synchronized from ORCID, working papers, theses and co-authors.",
    cardTeachingP: "My teaching positions and courses, with material available online for enrolled students.",
    cardProjectsP: "Side projects around data, music and automation, built outside of research.",
    cardCvP: "Education, academic positions and professional experience. Full CV in English and French.",
    researchTitle: ["Research & ", "projects"],
    pubEyebrow: "Synchronized from ORCID ", pubTitle: ["Publications & ", "working papers"],
    reportsEyebrow: "Not for publication", reportsTitle: ["Theses & ", "research reports"],
    interestsTitle: ["Research ", "interests"],
    peopleEyebrow: "People", peopleTitle: ["Co-authors & ", "supervisors"],
    discussBtn: "Discuss research",
    orcidError: ["The ORCID record could not be loaded. It remains available on ", " and ", ". The entries below are listed from this site's records."],
    abstract: "Abstract", hideAbstract: "Hide abstract", cite: "Cite", view: "View",
    copyClipboard: "Copy to clipboard", copied: "Copied ✓",
    teachingTitle: "Teaching", positionsEyebrow: "Positions",
    coursesEyebrow: "Courses", coursesTitle: ["Course ", "material"],
    pagesOf: "pages of material", codeRequired: "access code required",
    satisfaction: "student satisfaction", openCourse: "Open the course →",
    contactTeaching: "Contact about teaching",
    projectsTitle: ["Side ", "projects"],
    projectsSub: "Personal projects built outside of research, around data, music and automation.",
    cvTitle: ["Curriculum ", "Vitae"],
    academicPositions: "Academic positions", education: "Education", professionalExp: "Professional experience",
    getInTouch: "Get in touch", details: "Details", hideDetails: "Hide details",
    courseContents: "Course contents",
    gateTitle: "This material is reserved for enrolled students.",
    gateSub: "Enter the access code provided in class. It will be remembered on this device.",
    gatePlaceholder: "Access code", gateUnlock: "Unlock", gateChecking: "Checking…",
    gateError: "Incorrect code. Please try again.", gateNoCode: "No code?", gateContact: "Contact me by email",
    notFoundEyebrow: "Error 404", notFoundTitle: "This page does not exist", backHome: "Back to home",
    footContact: "Contact", footProfiles: "Profiles", footNavigate: "Navigate",
    colophon: ["Publications are synchronized from ", "."],
  },
  fr: {
    nav: { home: "Accueil", research: "Recherche", teaching: "Enseignement", projects: "Projets", cv: "Curriculum Vitae" },
    heroExplore: "Explorer ma recherche", heroDownload: "Télécharger le CV ↗",
    aboutEyebrow: "À propos", aboutTitle: ["Finance, durabilité & ", "méthodes quantitatives"],
    interestsLabel: "Intérêts de recherche", skillsLabel: "Compétences techniques", languagesLabel: "Langues",
    exploreEyebrow: "Explorer", browse: "Parcourir →",
    cardResearchP: "Publications synchronisées depuis ORCID, documents de travail, thèses et co-auteurs.",
    cardTeachingP: "Mes postes d'enseignement et mes cours, avec les supports en ligne pour les étudiants inscrits.",
    cardProjectsP: "Projets personnels autour de la data, de la musique et de l'automatisation, hors recherche.",
    cardCvP: "Formation, positions académiques et expérience professionnelle. CV complet en anglais et en français.",
    researchTitle: ["Recherche & ", "projets"],
    pubEyebrow: "Synchronisé depuis ORCID ", pubTitle: ["Publications & ", "documents de travail"],
    reportsEyebrow: "Non destinés à publication", reportsTitle: ["Thèses & ", "rapports de recherche"],
    interestsTitle: ["Intérêts de ", "recherche"],
    peopleEyebrow: "Collaborations", peopleTitle: ["Co-auteurs & ", "encadrants"],
    discussBtn: "Discuter de recherche",
    orcidError: ["Le registre ORCID n'a pas pu être chargé. Il reste disponible sur ", " et ", ". Les entrées ci-dessous proviennent des fiches de ce site."],
    abstract: "Résumé", hideAbstract: "Masquer le résumé", cite: "Citer", view: "Voir",
    copyClipboard: "Copier", copied: "Copié ✓",
    teachingTitle: "Enseignement", positionsEyebrow: "Postes",
    coursesEyebrow: "Cours", coursesTitle: ["Supports de ", "cours"],
    pagesOf: "pages de contenu", codeRequired: "code d'accès requis",
    satisfaction: "de satisfaction étudiante", openCourse: "Ouvrir le cours →",
    contactTeaching: "Me contacter (enseignement)",
    projectsTitle: ["Projets ", "personnels"],
    projectsSub: "Projets personnels menés en dehors de la recherche, autour de la data, de la musique et de l'automatisation.",
    cvTitle: ["Curriculum ", "Vitae"],
    academicPositions: "Positions académiques", education: "Formation", professionalExp: "Expérience professionnelle",
    getInTouch: "Me contacter", details: "Détails", hideDetails: "Masquer les détails",
    courseContents: "Sommaire du cours",
    gateTitle: "Ce contenu est réservé aux étudiants inscrits.",
    gateSub: "Saisissez le code d'accès communiqué en cours. Il sera mémorisé sur cet appareil.",
    gatePlaceholder: "Code d'accès", gateUnlock: "Déverrouiller", gateChecking: "Vérification…",
    gateError: "Code incorrect. Veuillez réessayer.", gateNoCode: "Pas de code ?", gateContact: "Contactez-moi par email",
    notFoundEyebrow: "Erreur 404", notFoundTitle: "Cette page n'existe pas", backHome: "Retour à l'accueil",
    footContact: "Contact", footProfiles: "Profils", footNavigate: "Navigation",
    colophon: ["Les publications sont synchronisées depuis ", "."],
  },
};

const LangContext = createContext({ lang: "en", setLang: () => {}, t: UI.en, pick: (k) => EN_CONTENT[k] });
const useLang = () => useContext(LangContext);

/* ============================================================
   Eva Cheng — Academic Portfolio · v8
   The green identity, balanced between academic and modern.
   One typeface (Fraunces), full-width layout, soft cards,
   assertive green, light and dark themes.
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
    /* The curated author string preserves the correct author order;
       ORCID contributors are only a fallback. */
    authors: match.authors || (work.contributors.length > 0 ? work.contributors.join(", ") : null),
    venue: work.journal || match.venue,
    link: match.link || (work.url ? { label: "View", url: work.url } : null),
    abstract: match.abstract,
    citation: match.citation,
  };
}

/* ---------- Course access (private material) ---------- */

function findCourse(slug) {
  return COURSES.find((c) => c.slug === slug) || null;
}

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/* The entered code is remembered in the browser (localStorage),
   so students only type it once per device. */
function useCourseAccess(course) {
  const storageKey = `course-access:${course?.slug}`;
  const [unlocked, setUnlocked] = useState(() => {
    if (!course?.accessCodeHash) return true;
    try { return localStorage.getItem(storageKey) === course.accessCodeHash; }
    catch { return false; }
  });

  const tryUnlock = useCallback(async (code) => {
    const hash = await sha256Hex(code.trim());
    if (hash === course.accessCodeHash) {
      try { localStorage.setItem(storageKey, hash); } catch { /* cache unavailable */ }
      setUnlocked(true);
      return true;
    }
    return false;
  }, [course, storageKey]);

  return { unlocked, tryUnlock };
}

function AccessGate({ course, onUnlock }) {
  const { t } = useLang();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  const submit = async () => {
    if (!code.trim() || checking) return;
    setChecking(true);
    const ok = await onUnlock(code);
    setChecking(false);
    if (!ok) setError(true);
  };

  return (
    <div className="gate">
      <p className="gate-title">{t.gateTitle}</p>
      <p className="gate-sub">{t.gateSub}</p>
      <div className="gate-row">
        <input
          className="gate-input"
          type="password"
          value={code}
          placeholder={t.gatePlaceholder}
          aria-label="Access code"
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
        />
        <button className="btn btn-solid" onClick={submit} disabled={checking}>
          {checking ? t.gateChecking : t.gateUnlock}
        </button>
      </div>
      {error && <p className="gate-error">{t.gateError}</p>}
      <p className="gate-help">
        {t.gateNoCode} <a href={`mailto:${LINKS.emailPro}?subject=[QUESTION_PYTHON] Access code`}>{t.gateContact}</a>.
      </p>
    </div>
  );
}

/* ---------- Primitives ---------- */

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
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
  const { t } = useLang();
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
            {copied ? t.copied : t.copyClipboard}
          </button>
        </div>
      </div>
    </div>
  );
}

function PubItem({ title, authors, venue, year, type, link, citation, abstract }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [citing, setCiting] = useState(false);
  return (
    <article className="pub">
      <div className="pub-meta">
        {type && <span className="chip">{type}</span>}
        {year && <span className="pub-year">{year}</span>}
      </div>
      <h3 className="pub-title">{title}</h3>
      {authors && <p className="pub-authors">{authors}</p>}
      {venue && <p className="pub-venue">{venue}</p>}
      <div className="pub-actions">
        {link && <a href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>}
        {citation && <button onClick={() => setCiting(true)}>{t.cite}</button>}
        {abstract && (
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? t.hideAbstract : t.abstract}
          </button>
        )}
      </div>
      {open && <p className="pub-abstract">{abstract}</p>}
      {citing && <CiteModal citation={citation} onClose={() => setCiting(false)} />}
    </article>
  );
}

function OrgMark({ domain, name, logoUrl }) {
  const [stage, setStage] = useState(0);
  const sources = [
    ...(logoUrl ? [logoUrl] : []),
    ...(domain ? [
      `https://logo.clearbit.com/${domain}`,
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    ] : []),
  ];
  if (stage >= sources.length) {
    return <span className="org-mark org-mark-fallback" aria-hidden="true">{(name || "?")[0]}</span>;
  }
  return (
    <img className="org-mark" src={sources[stage]} alt="" loading="lazy"
      onError={() => setStage((s) => s + 1)} />
  );
}

function CvEntry({ heading, org, orgUrl, orgDomain, logoUrl, period, honors, details }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <article className="cv-entry">
      <OrgMark domain={orgDomain} name={org} logoUrl={logoUrl} />
      <div className="cv-main">
        <div className="cv-top">
          <h3 className="cv-heading">{heading}</h3>
          <span className="cv-period">{period}</span>
        </div>
        <p className="cv-org">
          {orgUrl ? <a href={orgUrl} target="_blank" rel="noreferrer">{org}</a> : org}
          {honors && <span className="cv-honors"> · {honors}</span>}
        </p>
        {details && (
          <>
            <button className="text-link" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? t.hideDetails : t.details}
            </button>
            {open && <p className="cv-details">{details}</p>}
          </>
        )}
      </div>
    </article>
  );
}

/* ---------- Chrome ---------- */

const NAV = [
  { to: "/", key: "home", end: true },
  { to: "/research", key: "research" },
  { to: "/teaching", key: "teaching" },
  { to: "/projects", key: "projects" },
  { to: "/cv", key: "cv" },
];

function Header({ theme, onToggleTheme }) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link className="wordmark" to="/">Eva <em>Cheng</em></Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) =>
            item.to === "/teaching" ? (
              <div className="nav-drop" key={item.to}>
                <NavLink to={item.to}>{t.nav[item.key]}</NavLink>
                <div className="nav-menu">
                  <div className="nav-menu-panel">
                    {COURSES.map((c) => (
                      <div className="nav-menu-item" key={c.slug}>
                        <Link to={`/teaching/${c.slug}`} className="nav-menu-link">
                          {c.title}
                          <span className="nav-menu-arrow" aria-hidden="true">›</span>
                        </Link>
                        <div className="nav-submenu">
                          <div className="nav-menu-panel">
                            {c.sessions.map((s) => (
                              <Link key={s.slug} to={`/teaching/${c.slug}/${s.slug}`} className="nav-menu-link nav-session-link">
                                <span className="nav-session-label">{s.label}</span>
                                <span className="nav-session-title">{s.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.end}>{t.nav[item.key]}</NavLink>
            )
          )}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen} aria-label="Menu">
          {menuOpen ? "✕" : "☰"}
        </button>
        <button className="lang-toggle" onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}>
          {lang === "fr" ? "EN" : "FR"}
        </button>
        <button className="theme-toggle" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Main mobile">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>{t.nav[item.key]}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const { t, pick } = useLang();
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">Eva <em>Cheng</em></p>
          <p className="footer-aff">{pick("AFFILIATION")}</p>
        </div>
        <div>
          <p className="foot-label">{t.footContact}</p>
          <p className="foot-line"><a href={`mailto:${LINKS.emailAcademic}`}>{LINKS.emailAcademic}</a></p>
          <p className="foot-line"><a href={`mailto:${LINKS.emailPro}`}>{LINKS.emailPro}</a></p>
        </div>
        <div>
          <p className="foot-label">{t.footProfiles}</p>
          {PROFILE_LINKS.map((l) => (
            <p className="foot-line" key={l.label}>
              <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
            </p>
          ))}
        </div>
        <div>
          <p className="foot-label">{t.footNavigate}</p>
          {NAV.map((item) => (
            <p className="foot-line" key={item.to}><Link to={item.to}>{t.nav[item.key]}</Link></p>
          ))}
          {COURSES.map((c) => (
            <p className="foot-line" key={c.slug}><Link to={`/teaching/${c.slug}`}>{c.title}</Link></p>
          ))}
        </div>
      </div>
      <div className="wrap colophon">
        © {new Date().getFullYear()} Eva Cheng. {t.colophon[0]}
        <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID</a>{t.colophon[1]} {COPYRIGHT_NOTICE}
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
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title="" />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <Eyebrow>{pick("AFFILIATION")}</Eyebrow>
            <h1 className="hero-name">Eva <em>Cheng</em></h1>
            <p className="hero-lede">{pick("HERO_LEDE")}</p>
            <div className="btn-row">
              <Link className="btn btn-solid" to="/research">{t.heroExplore}</Link>
              <a className="btn" href={LINKS.cvEN} target="_blank" rel="noreferrer">{t.heroDownload}</a>
            </div>
            <ul className="hero-profiles" aria-label="Profiles">
              {PROFILE_LINKS.map((l) => (
                <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="hero-side">
            <Portrait />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.aboutEyebrow}</Eyebrow>
          <h2 className="section-title">{t.aboutTitle[0]}<em>{t.aboutTitle[1]}</em></h2>
          <div className="cols">
            <div>
              <div className="prose about-prose">
                {pick("BIO").map((p, i) => (<p key={i}>{p}</p>))}
              </div>
              <p className="side-label">{t.interestsLabel}</p>
              <div className="tag-row">
                {pick("INTERESTS").map((x) => (<span className="tag" key={x}>{x}</span>))}
              </div>
            </div>
            <div className="side-card">
              <p className="side-label">{t.skillsLabel}</p>
              <div className="tag-row">
                {SKILLS.map((s) => (<span className="tag tag-quiet" key={s}>{s}</span>))}
              </div>
              <p className="side-label mt">{t.languagesLabel}</p>
              <div className="tag-row">
                {pick("LANGUAGES").map((l) => (<span className="tag tag-quiet" key={l}>{l}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.exploreEyebrow}</Eyebrow>
          <div className="card-grid">
            {[
              { to: "/research", h: t.nav.research, p: t.cardResearchP },
              { to: "/teaching", h: t.nav.teaching, p: t.cardTeachingP },
              { to: "/projects", h: t.nav.projects, p: t.cardProjectsP },
              { to: "/cv", h: t.nav.cv, p: t.cardCvP },
            ].map((c) => (
              <Link to={c.to} className="nav-card" key={c.to}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <span className="nav-card-cta">{t.browse}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResearchPage() {
  const { t, pick } = useLang();
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
        <div className="wrap">
          <Eyebrow>{t.nav.research}</Eyebrow>
          <h1 className="page-title">{t.researchTitle[0]}<em>{t.researchTitle[1]}</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols">
            <div className="prose">
              {pick("RESEARCH_STATEMENT").map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            <div className="side-card">
              <p className="side-label">{t.interestsLabel}</p>
              <div className="tag-row">
                {pick("INTERESTS").map((x) => (<span className="tag" key={x}>{x}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.pubEyebrow}{ORCID_ID}</Eyebrow>
          <h2 className="section-title">{t.pubTitle[0]}<em>{t.pubTitle[1]}</em></h2>

          {status === "loading" && (
            <div className="skeleton-list" aria-hidden="true">
              <div className="skeleton" /><div className="skeleton" />
            </div>
          )}
          {status === "error" && (
            <p className="notice">
              {t.orcidError[0]}
              <a href={LINKS.orcid} target="_blank" rel="noreferrer">orcid.org</a>{t.orcidError[1]}
              <a href={LINKS.scholar} target="_blank" rel="noreferrer">Google Scholar</a>{t.orcidError[2]}
            </p>
          )}

          <div className="pub-list">
            {merged.map((w) => (
              <PubItem key={w.putCode} title={w.title}
                authors={w.matched ? w.authors : (w.contributors.length > 0 ? w.contributors.join(", ") : null)}
                venue={w.matched ? w.venue : w.journal}
                type={w.type} year={w.year}
                link={w.matched ? w.link : (w.url ? { label: t.view, url: w.url } : null)}
                citation={w.citation} abstract={w.abstract} />
            ))}
            {(status !== "loading" ? wpNotInOrcid : []).map((p) => (
              <PubItem key={p.title} title={p.title} authors={p.authors}
                type={p.venue} year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
            ))}
          </div>
        </div>
      </section>

      {(status === "loading" || reportsNotInOrcid.length > 0) && (
        <section className="section">
          <div className="wrap">
            <Eyebrow>{t.reportsEyebrow}</Eyebrow>
            <h2 className="section-title">{t.reportsTitle[0]}<em>{t.reportsTitle[1]}</em></h2>
            <div className="pub-list">
              {(status !== "loading" ? reportsNotInOrcid : REPORTS).map((p) => (
                <PubItem key={p.title} title={p.title} authors={p.authors}
                  type={p.venue} year={p.year} link={p.link} citation={p.citation} abstract={p.abstract} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.peopleEyebrow}</Eyebrow>
          <h2 className="section-title">{t.peopleTitle[0]}<em>{t.peopleTitle[1]}</em></h2>
          <div className="card-grid">
            {pick("COLLABORATORS").map((p) => (
              <article className="nav-card nav-card-static collab-card" key={p.name}>
                <h3>{p.name}</h3>
                <p className="collab-role">{p.role}</p>
                {p.org && <p>{p.org}</p>}
                <div className="pub-actions mt-sm">
                  {p.scholar && <a href={p.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a>}
                  {p.website && <a href={p.website} target="_blank" rel="noreferrer">Website ↗</a>}
                  {p.linkedin && <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
                </div>
              </article>
            ))}
          </div>
          <p className="cta-line">
            <a className="btn btn-solid" href={`mailto:${LINKS.emailPro}?subject=[RESEARCH]`}>{t.discussBtn}</a>
          </p>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title="Projects" />
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>{t.nav.projects}</Eyebrow>
          <h1 className="page-title">{t.projectsTitle[0]}<em>{t.projectsTitle[1]}</em></h1>
          <p className="page-sub">{t.projectsSub}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card-grid">
            {pick("PROJECTS").map((p) => (
              <article className="nav-card nav-card-static" key={p.name}>
                <h3>
                  {p.link ? (
                    <a className="quiet-link" href={p.link.url} target="_blank" rel="noreferrer">{p.name} ↗</a>
                  ) : p.name}
                </h3>
                <p>{p.description}</p>
                <div className="tag-row mt-sm">
                  {p.tags.map((t) => (<span className="tag tag-quiet" key={t}>{t}</span>))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TeachingPage() {
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title="Teaching" />
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>{t.nav.teaching}</Eyebrow>
          <h1 className="page-title">{t.teachingTitle}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.positionsEyebrow}</Eyebrow>
          <div className="prose wide-prose">
            {pick("TEACHING_EXPERIENCE").map((x) => (
              <div key={x.role + x.period}>
                <h3 className="sub-heading">{x.role}</h3>
                <p className="pub-venue">
                  {x.orgUrl ? <a href={x.orgUrl} target="_blank" rel="noreferrer">{x.org}</a> : x.org} · {x.period}
                </p>
                {x.details && <p className="mt-sm">{x.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.coursesEyebrow}</Eyebrow>
          <h2 className="section-title">{t.coursesTitle[0]}<em>{t.coursesTitle[1]}</em></h2>
          <div className="card-grid">
            {COURSES.map((c) => (
              <Link to={`/teaching/${c.slug}`} className="nav-card" key={c.slug}>
                <h3>{c.title}</h3>
                <p>{c.org} · {c.sessions.length} {t.pagesOf}{c.accessCodeHash ? ` · ${t.codeRequired}` : ""}</p>
                {c.satisfaction && (
                  <div className="tag-row mt-sm">
                    <span className="tag">{c.satisfaction} {t.satisfaction}</span>
                  </div>
                )}
                <span className="nav-card-cta">{t.openCourse}</span>
              </Link>
            ))}
          </div>
          <p className="cta-line">
            <a className="btn" href={`mailto:${LINKS.emailPro}?subject=[TEACHING]`}>{t.contactTeaching}</a>
          </p>
        </div>
      </section>
    </>
  );
}

function CoursePage() {
  const { t } = useLang();
  const { courseSlug } = useParams();
  const course = findCourse(courseSlug);
  if (!course) return <NotFoundPage />;

  return (
    <>
      <PageHead title={course.title} />
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>
            <Link to="/teaching" className="crumb">{t.nav.teaching}</Link> / {course.title}
          </Eyebrow>
          <h1 className="page-title">{course.title}</h1>
          <p className="page-sub">{course.org}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols">
            <p className="prose">{course.description}</p>
            <div className="side-card">
              <p className="side-label">Learning outcomes</p>
              <ul className="check-list">
                {course.outcomes.map((o) => (<li key={o}>{o}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>Course content{course.accessCodeHash ? " · access code required" : ""}</Eyebrow>
          <h2 className="section-title">Direct access to the <em>material</em></h2>
          <div className="session-list">
            {course.sessions.map((s) => (
              <Link to={`/teaching/${course.slug}/${s.slug}`} className="session-row" key={s.slug}>
                <span className="session-label">{s.label}</span>
                <span className="session-title">{s.title}</span>
                <span className="session-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="notice mt">{course.ipNotice}</p>
        </div>
      </section>
    </>
  );
}

function SessionContent({ session }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll("img[data-asset]").forEach((img) => {
      img.src = (import.meta.env?.BASE_URL ?? "/") + "course-assets/" + img.dataset.asset;
    });
    root.querySelectorAll(".nb-code").forEach((block) => {
      if (block.querySelector(".nb-copy")) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nb-copy";
      btn.textContent = "Copy";
      btn.setAttribute("aria-label", "Copy code");
      btn.addEventListener("click", async () => {
        const code = block.querySelector("pre")?.innerText ?? "";
        try {
          await navigator.clipboard.writeText(code);
          btn.textContent = "Copied ✓";
          setTimeout(() => { btn.textContent = "Copy"; }, 1500);
        } catch (err) { console.error("Clipboard failed:", err); }
      });
      block.appendChild(btn);
    });
  }, [session]);

  return (
    <div
      ref={ref}
      className={session.public ? "session-content" : "session-content protected"}
      onContextMenu={session.public ? undefined : (e) => e.preventDefault()}
      dangerouslySetInnerHTML={{ __html: session.html }}
    />
  );
}

function SessionPage() {
  const { t } = useLang();
  const { courseSlug, slug } = useParams();
  const course = findCourse(courseSlug);
  const index = course ? course.sessions.findIndex((s) => s.slug === slug) : -1;
  const session = course?.sessions[index];
  const { unlocked, tryUnlock } = useCourseAccess(course);
  if (!course || !session) return <NotFoundPage />;
  const prev = course.sessions[index - 1];
  const next = course.sessions[index + 1];

  return (
    <>
      <PageHead title={`${session.label} · ${course.title}`} />
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>
            <Link to="/teaching" className="crumb">{t.nav.teaching}</Link> /{" "}
            <Link to={`/teaching/${course.slug}`} className="crumb">{course.title}</Link> /{" "}
            {session.label}
          </Eyebrow>
          <h1 className="page-title">{session.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {!session.public && !unlocked ? (
            <AccessGate course={course} onUnlock={tryUnlock} />
          ) : session.html ? (
            <SessionContent session={session} />
          ) : session.embedUrl ? (
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
              to receive it. {course.ipNotice}
            </p>
          )}
          <nav className="pager" aria-label="Sessions">
            {prev ? (
              <Link className="btn" to={`/teaching/${course.slug}/${prev.slug}`}>← {prev.label}</Link>
            ) : <span />}
            <Link className="btn btn-solid pager-toc" to={`/teaching/${course.slug}`}>{t.courseContents}</Link>
            {next ? (
              <Link className="btn pager-next" to={`/teaching/${course.slug}/${next.slug}`}>{next.label} →</Link>
            ) : <span />}
          </nav>
        </div>
      </section>
    </>
  );
}

function CVPage() {
  const { t, pick } = useLang();
  return (
    <>
      <PageHead title="Curriculum Vitae" />
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>{t.nav.cv}</Eyebrow>
          <h1 className="page-title">{t.cvTitle[0]}<em>{t.cvTitle[1]}</em></h1>
          <div className="btn-row">
            <a className="btn btn-solid" href={LINKS.cvEN} target="_blank" rel="noreferrer">Download (English) ↗</a>
            <a className="btn" href={LINKS.cvFR} target="_blank" rel="noreferrer">Télécharger (français) ↗</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.academicPositions}</Eyebrow>
          <div className="cv-list">
            {pick("ACADEMIC_POSITIONS").map((p) => (
              <CvEntry key={p.role + p.period} heading={p.role} org={p.org} orgUrl={p.orgUrl}
                orgDomain={p.orgDomain} period={p.period} details={p.details} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.education}</Eyebrow>
          <div className="cv-list">
            {pick("EDUCATION").map((e) => (
              <CvEntry key={e.degree} heading={e.degree} org={e.school} orgUrl={e.orgUrl}
                orgDomain={e.orgDomain} period={e.year} honors={e.honors} details={e.details} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>{t.professionalExp}</Eyebrow>
          <div className="cv-list">
            {pick("PROFESSIONAL_EXPERIENCE").map((w) => (
              <CvEntry key={w.role + w.period} heading={w.role} org={w.org} orgUrl={w.orgUrl}
                orgDomain={w.orgDomain} logoUrl={w.logoUrl} period={w.period} details={w.details} />
            ))}
          </div>
          <p className="cta-line">
            <a className="btn btn-solid" href={`mailto:${LINKS.emailPro}?subject=[WORK]`}>{t.getInTouch}</a>
          </p>
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  const { t } = useLang();
  return (
    <>
      <PageHead title="Page not found" />
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>{t.notFoundEyebrow}</Eyebrow>
          <h1 className="page-title">{t.notFoundTitle}</h1>
          <div className="btn-row">
            <Link className="btn btn-solid" to="/">{t.backHome}</Link>
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

  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "fr") return saved;
    } catch { /* storage unavailable */ }
    return "en";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* storage unavailable */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch { /* storage unavailable */ }
  }, [lang]);

  const langValue = useMemo(() => ({
    lang,
    setLang,
    t: UI[lang],
    pick: (k) => (lang === "fr" && FR[k] !== undefined ? FR[k] : EN_CONTENT[k]),
  }), [lang]);

  return (
    <LangContext.Provider value={langValue}>
      <style>{STYLES}</style>
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/teaching/:courseSlug" element={<CoursePage />} />
          <Route path="/teaching/:courseSlug/:slug" element={<SessionPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </LangContext.Provider>
  );
}

/* ---------- Styles ---------- */

const STYLES = `
:root {
  --bg: #f5f7f2;
  --surface: #ffffff;
  --ink: #172219;
  --soft: #58695e;
  --line: #dde4d9;
  --green: #1c7550;
  --green-deep: #135c3d;
  --wash: #e6f0e8;
  --shadow: 0 1px 2px rgba(23, 34, 25, 0.04), 0 8px 24px -12px rgba(23, 34, 25, 0.12);
  --shadow-hover: 0 2px 4px rgba(23, 34, 25, 0.05), 0 14px 32px -14px rgba(23, 34, 25, 0.18);
  --font: "Fraunces", Georgia, serif;
}

[data-theme="dark"] {
  --bg: #0e130f;
  --surface: #161d17;
  --ink: #eaf1ea;
  --soft: #98aa9d;
  --line: #263129;
  --green: #5fc292;
  --green-deep: #83d6ae;
  --wash: #182a1e;
  --shadow: 0 0 0 1px rgba(95, 194, 146, 0.04), 0 10px 28px -14px rgba(0, 0, 0, 0.55);
  --shadow-hover: 0 0 0 1px rgba(95, 194, 146, 0.12), 0 16px 36px -14px rgba(0, 0, 0, 0.65);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; background: var(--bg); }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font);
  font-size: 17px;
  line-height: 1.6;
  font-variation-settings: "opsz" 24;
  -webkit-font-smoothing: antialiased;
  transition: background 0.25s ease, color 0.25s ease;
}

::selection { background: var(--green); color: var(--bg); }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--line); border-radius: 8px; border: 3px solid var(--bg); }

a { color: var(--green); text-decoration: none; }
a:hover { color: var(--green-deep); }
:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; border-radius: 4px; }

/* Default alignment for running text: proper justification with hyphenation */
.prose, .prose p,
.hero-lede, .page-sub, .notice,
.pub-abstract, .cv-details, .footer-aff, .gate-sub,
.nav-card p, .index-item p,
.session-content p, .session-content ul > li, .session-content ol > li {
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto; -webkit-hyphens: auto; -ms-hyphens: auto;
  overflow-wrap: break-word;
}

.wrap { max-width: 1560px; margin: 0 auto; padding-left: clamp(20px, 3vw, 44px); padding-right: clamp(20px, 3vw, 44px); }

.mt { margin-top: 22px; }
.mt-sm { margin-top: 12px; }

.eyebrow {
  font-size: 0.74rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--green); margin-bottom: 14px;
}
.crumb { color: var(--green); }
.crumb:hover { text-decoration: underline; text-underline-offset: 3px; }

/* --- header --- */
.site-header { position: sticky; top: 0; z-index: 30; border-bottom: 1px solid var(--line); background: var(--bg); transition: background 0.25s ease; }
.site-header.scrolled {
  background: color-mix(in srgb, var(--bg) 84%, transparent);
  backdrop-filter: blur(12px) saturate(1.3);
  -webkit-backdrop-filter: blur(12px) saturate(1.3);
}
.header-inner { display: flex; align-items: center; gap: 28px; padding-top: 16px; padding-bottom: 14px; }
.wordmark { font-weight: 560; font-size: 1.18rem; color: var(--ink); letter-spacing: -0.01em; }
.wordmark em { font-style: italic; color: var(--green-deep); }
.wordmark:hover { color: var(--ink); }
.nav { display: flex; gap: 4px; margin-left: auto; align-items: center; }
.nav a {
  font-size: 0.87rem; font-weight: 500; color: var(--soft);
  padding: 7px 14px; border-radius: 999px;
  transition: color 0.15s ease, background 0.15s ease;
}
.nav a:hover { color: var(--ink); background: var(--wash); }
.nav a.active { color: var(--green-deep); background: var(--wash); }

/* Teaching dropdown: courses on hover, sessions on course hover */
.nav-drop { position: relative; display: flex; align-items: center; }
.nav-menu {
  display: none; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  padding-top: 10px; z-index: 40;
}
.nav-drop:hover .nav-menu, .nav-drop:focus-within .nav-menu { display: block; }
.nav-menu-panel {
  min-width: 230px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; box-shadow: var(--shadow-hover); padding: 6px;
  animation: menupop 0.16s cubic-bezier(0.34, 1.3, 0.64, 1);
}
.nav-menu-item { position: relative; }
.nav-menu-link {
  display: flex; align-items: baseline; justify-content: space-between; gap: 14px;
  font-size: 0.92rem; font-weight: 500; color: var(--ink);
  padding: 9px 13px; border-radius: 9px; white-space: nowrap;
}
.nav-menu-link:hover { background: var(--wash); color: var(--green-deep); }
.nav-menu-arrow { color: var(--soft); font-size: 1rem; }
.nav-submenu {
  display: none; position: absolute; left: 100%; top: -6px; padding-left: 8px; z-index: 41;
}
.nav-menu-item:hover .nav-submenu, .nav-menu-item:focus-within .nav-submenu { display: block; }
.nav-submenu .nav-menu-panel { min-width: 320px; max-height: 62vh; overflow-y: auto; }
.nav-session-link { display: block; }
.nav-session-label {
  display: block; font-size: 0.64rem; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--green-deep);
}
.nav-session-title {
  display: block; font-size: 0.88rem; font-weight: 400; color: var(--ink);
  max-width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.nav-session-link:hover .nav-session-title { color: var(--green-deep); }
.theme-toggle {
  border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  width: 34px; height: 34px; border-radius: 50%; cursor: pointer; font-size: 0.9rem;
  transition: border-color 0.15s ease, transform 0.2s ease;
}
.theme-toggle:hover { border-color: var(--green); transform: rotate(12deg); }
.lang-toggle {
  border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  height: 34px; padding: 0 12px; border-radius: 999px; cursor: pointer;
  font-family: var(--font); font-size: 0.74rem; font-weight: 600; letter-spacing: 0.08em;
  transition: border-color 0.15s ease, color 0.15s ease;
}
.lang-toggle:hover { border-color: var(--green); color: var(--green-deep); }
.menu-toggle {
  display: none; border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  width: 34px; height: 34px; border-radius: 10px; cursor: pointer; font-size: 0.95rem;
}
.mobile-menu {
  position: absolute; top: calc(100% + 8px); right: clamp(16px, 3vw, 44px);
  width: min(240px, calc(100vw - 32px));
  display: flex; flex-direction: column;
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
  box-shadow: var(--shadow-hover); padding: 6px;
  animation: menupop 0.16s cubic-bezier(0.34, 1.3, 0.64, 1);
}
@keyframes menupop { from { opacity: 0; transform: translateY(-6px) scale(0.98); } }
.mobile-menu a {
  font-size: 0.95rem; font-weight: 500; color: var(--ink);
  padding: 10px 14px; border-radius: 9px;
}
.mobile-menu a:hover { background: var(--wash); }
.mobile-menu a.active { color: var(--green-deep); background: var(--wash); }

/* --- collaborators --- */
.collab-card h3 { font-size: 1.08rem; }
.collab-card .collab-role { color: var(--green-deep); font-size: 0.82rem; font-weight: 600; margin-top: 4px; }
.collab-card p { margin-top: 4px; }

/* --- inline session content: plain course document --- */
.session-content { line-height: 1.5; font-size: 0.97rem; font-weight: 380; }
.session-content h2 {
  font-weight: 520; font-size: 1.24rem; letter-spacing: -0.008em;
  margin: 24px 0 8px;
}
.session-content h2:first-child { margin-top: 0; }
.session-content h1 { font-weight: 520; font-size: 1.45rem; letter-spacing: -0.01em; margin: 24px 0 8px; }
.session-content h3 { font-weight: 520; font-size: 1.08rem; margin: 16px 0 6px; }
.session-content p { margin: 7px 0; }
.session-content ul { list-style: none; margin: 4px 0 12px; }
.session-content ul > li { position: relative; padding: 2px 0 2px 20px; }
.session-content ul > li::before {
  content: ""; position: absolute; left: 2px; top: 10px;
  width: 5px; height: 5px; border-radius: 2px; background: var(--green);
}
.session-content ol { margin: 4px 0 12px; padding-left: 26px; }
.session-content ol > li { padding: 2px 0; }
.session-content ol > li::marker { color: var(--green-deep); font-weight: 600; }
.session-content li em { color: var(--green-deep); }
.session-content a { text-decoration: underline; text-underline-offset: 3px; }
.session-content code {
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 0.82em;
  background: var(--wash); padding: 1px 6px; border-radius: 6px; font-weight: 400;
}
.session-content .video-embed {
  aspect-ratio: 16 / 9; max-width: 480px; border-radius: 14px; overflow: hidden;
  border: 1px solid var(--line); background: #000; margin: 18px 0;
}
.session-content .video-embed iframe { width: 100%; height: 100%; border: 0; display: block; }
.session-content .video-row {
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px; margin: 26px 0;
}
.session-content .video-row .video-embed { max-width: none; margin: 0; }

/* Gated course material: selection and copying disabled, per the IP notice */
.session-content.protected {
  user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;
}

/* --- notebook cells (converted course material) --- */
.nb-code {
  position: relative;
  background: var(--surface); border: 1px solid var(--line); border-left: 3px solid var(--green);
  border-radius: 12px; margin: 12px 0; overflow-x: auto;
}
.nb-code pre {
  margin: 0; padding: 12px 88px 12px 18px;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.84rem; line-height: 1.5; color: var(--ink); font-weight: 400;
}
.nb-copy {
  position: absolute; top: 8px; right: 10px;
  font-family: var(--font); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em;
  padding: 4px 12px; border-radius: 999px;
  border: 1px solid var(--line); background: var(--wash); color: var(--green-deep);
  cursor: pointer; user-select: none; -webkit-user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.nb-copy:hover { border-color: var(--green); }
details.nb-output {
  background: var(--wash); border-radius: 12px; margin: -4px 0 14px; overflow: hidden;
}
details.nb-output summary {
  cursor: pointer; list-style: none; padding: 8px 18px;
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--green-deep); user-select: none; -webkit-user-select: none;
}
details.nb-output summary::-webkit-details-marker { display: none; }
details.nb-output summary::before {
  content: "▸"; display: inline-block; margin-right: 8px;
  transition: transform 0.15s ease;
}
details.nb-output[open] summary::before { transform: rotate(90deg); }
details.nb-output pre {
  margin: 0; padding: 2px 18px 12px;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.82rem; line-height: 1.5; color: var(--soft); overflow-x: auto;
}
details.nb-output .nb-figure { margin: 0; padding: 4px 18px 14px; }
details.nb-output .nb-figure img {
  display: block; margin: 0 auto; max-width: min(100%, 560px); max-height: 380px;
  width: auto; height: auto; object-fit: contain;
  border: 1px solid var(--line); border-radius: 10px; background: #fff;
}
details.nb-output .nb-table-wrap { overflow-x: auto; padding: 4px 18px 14px; }
.nb-table-wrap table {
  border-collapse: collapse;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.76rem; line-height: 1.45;
}
.nb-table-wrap th, .nb-table-wrap td {
  padding: 5px 12px; border-bottom: 1px solid var(--line); text-align: right; white-space: nowrap;
}
.nb-table-wrap thead th { color: var(--green-deep); font-weight: 600; }
.nb-table-wrap tbody th { color: var(--green-deep); font-weight: 600; text-align: left; }

/* --- learning objectives card (session intro) --- */
.session-content .nb-objectives {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  box-shadow: var(--shadow); padding: 20px 26px 14px; margin: 0 0 26px;
}
.session-content .nb-obj-label {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--soft); margin: 0 0 10px;
}
.session-content .nb-objectives ul { margin: 6px 0 8px; }
.session-content .nb-objectives ul > li { padding: 4px 0 4px 27px; }
.session-content .nb-objectives ul > li::before {
  content: "✓"; left: 0; top: 6px; width: 17px; height: 17px;
  display: grid; place-items: center; border-radius: 50%;
  font-size: 0.6rem; font-weight: 700;
  background: var(--wash); color: var(--green-deep);
}

/* --- typeset math --- */
.nb-math { font-style: italic; letter-spacing: 0.01em; white-space: normal; }
.nb-math sup { font-size: 0.7em; font-style: italic; }
.nb-math sub { font-size: 0.7em; font-style: italic; }
.nb-math-block {
  display: block; width: fit-content; max-width: 100%;
  margin: 14px auto; padding: 10px 24px;
  background: var(--wash); border-radius: 10px;
  font-size: 1.06rem; text-align: center;
}

/* --- exercises & assignments: visibly not course content --- */
:root { --ex: #9a6b1f; }
[data-theme="dark"] { --ex: #e0b070; }
.nb-exercise {
  border: 1px solid color-mix(in srgb, var(--ex) 32%, var(--line));
  border-left: 3px solid var(--ex);
  background: color-mix(in srgb, var(--ex) 6%, var(--surface));
  border-radius: 12px; padding: 14px 20px 12px; margin: 18px 0;
}
.nb-ex-tag {
  display: inline-block; font-size: 0.66rem; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--ex); background: color-mix(in srgb, var(--ex) 14%, transparent);
  padding: 3px 11px; border-radius: 999px; margin-bottom: 6px;
}
.nb-exercise h3 { margin: 4px 0 6px; font-size: 1.04rem; font-weight: 520; }
.nb-exercise h3 em { font-style: normal; }
.nb-exercise p { margin: 5px 0; }
/* syntax palette, light and dark via variables */
:root { --code-kw: #135c3d; --code-str: #995f14; --code-com: #8a9088; --code-num: #6d43ad; --code-fn: #0f5a9e; }
[data-theme="dark"] { --code-kw: #83d6ae; --code-str: #e0b070; --code-com: #7d857c; --code-num: #b79df0; --code-fn: #7db8ec; }
.nb-code .k, .nb-code .kn, .nb-code .kc, .nb-code .ow, .nb-code .bp { color: var(--code-kw); font-weight: 600; }
.nb-code .s, .nb-code .s1, .nb-code .s2, .nb-code .sa, .nb-code .si, .nb-code .se { color: var(--code-str); }
.nb-code .c, .nb-code .c1, .nb-code .ch, .nb-code .cm { color: var(--code-com); font-style: italic; }
.nb-code .mi, .nb-code .mf, .nb-code .mh { color: var(--code-num); }
.nb-code .nf, .nb-code .nb, .nb-code .fm, .nb-code .nc { color: var(--code-fn); }
.nb-code .o, .nb-code .p { color: var(--ink); opacity: 0.75; }
.session-content .ref-columns {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px clamp(32px, 4vw, 72px); align-items: start;
}
.session-content .ref-columns h2 { margin-top: 18px; }

/* --- hero --- */
.hero {
  background:
    radial-gradient(48% 62% at 88% 0%, var(--wash), transparent 72%),
    radial-gradient(36% 52% at 0% 100%, var(--wash), transparent 70%);
  padding: clamp(28px, 4vh, 44px) 0 clamp(24px, 3.5vh, 38px);
}
.hero-grid {
  display: grid; grid-template-columns: minmax(0, 780px) auto;
  justify-content: space-between; gap: clamp(28px, 4vw, 56px); align-items: center;
}
.hero-name {
  font-weight: 420; font-size: clamp(2.5rem, 5vw, 3.8rem);
  line-height: 1; letter-spacing: -0.018em; margin: 8px 0 18px;
  font-variation-settings: "opsz" 144;
}
.hero-name em, .page-title em, .section-title em, .footer-name em {
  font-style: italic; font-weight: 480; color: var(--green-deep);
}
.hero-lede { font-size: 1.12rem; line-height: 1.6; color: var(--soft); }
.btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.hero-profiles { list-style: none; display: flex; flex-wrap: wrap; gap: 8px 24px; margin-top: 26px; }
.hero-profiles a {
  font-size: 0.76rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--soft); border-bottom: 1px solid var(--line); padding-bottom: 3px;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.hero-profiles a:hover { color: var(--green-deep); border-color: var(--green); }

.hero-side { display: flex; }
.portrait {
  width: clamp(210px, 20vw, 280px); height: clamp(210px, 20vw, 280px);
  object-fit: cover; border-radius: 18px;
  border: 1px solid var(--line); box-shadow: var(--shadow);
  background: var(--surface);
}
.portrait-fallback {
  display: grid; place-items: center; font-weight: 500; font-size: 3rem;
  font-style: italic; color: var(--green-deep); background: var(--wash);
}

/* --- page hero --- */
.page-hero {
  background: radial-gradient(42% 70% at 92% 0%, var(--wash), transparent 72%);
  padding: clamp(22px, 3.5vh, 34px) 0 clamp(18px, 2.5vh, 28px);
}
.page-title {
  font-weight: 430; font-size: clamp(1.8rem, 3.6vw, 2.5rem);
  line-height: 1.06; letter-spacing: -0.012em;
  font-variation-settings: "opsz" 144;
}
.page-sub { font-size: 1.02rem; color: var(--soft); margin-top: 10px; }

/* --- buttons --- */
.btn {
  display: inline-block; font-family: var(--font);
  font-size: 0.88rem; font-weight: 560; letter-spacing: 0.01em;
  padding: 11px 24px; border-radius: 999px;
  border: 1px solid var(--line); background: var(--surface); color: var(--ink);
  cursor: pointer; text-decoration: none;
  transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
}
.btn:hover { transform: translateY(-1px); border-color: var(--green); color: var(--green-deep); }
.btn:active { transform: scale(0.98); }
.btn-solid {
  background: var(--green-deep); border-color: var(--green-deep); color: var(--bg);
  box-shadow: 0 6px 18px -9px var(--green-deep);
}
[data-theme="dark"] .btn-solid { color: #0b120d; }
.btn-solid:hover { background: var(--green); border-color: var(--green); color: var(--bg); }
[data-theme="dark"] .btn-solid:hover { color: #0b120d; }
.text-link {
  font-family: var(--font); font-size: 0.8rem; font-weight: 600;
  color: var(--green); background: none; border: none; padding: 0; margin-top: 8px; cursor: pointer;
}
.text-link:hover { color: var(--green-deep); text-decoration: underline; text-underline-offset: 3px; }

/* --- sections --- */
.section { padding: clamp(22px, 3.5vh, 36px) 0; }
.section-title {
  font-weight: 440; font-size: clamp(1.4rem, 2.6vw, 1.85rem);
  letter-spacing: -0.01em; line-height: 1.12; margin-bottom: 18px;
  font-variation-settings: "opsz" 100;
}
.sub-heading { font-weight: 520; font-size: 1.25rem; }
.cols { display: grid; grid-template-columns: 3fr 2fr; gap: clamp(28px, 4vw, 60px); align-items: start; }
.prose { max-width: 75ch; }
.prose p + p, .prose div + div { margin-top: 14px; }
.wide-prose { max-width: none; }
.wide-prose > div + div { margin-top: 22px; padding-top: 22px; border-top: 1px solid var(--line); }
.cta-line { margin-top: 24px; }

/* --- access gate --- */
.gate {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  padding: 28px 30px; box-shadow: var(--shadow); max-width: 560px;
}
.gate-title { font-weight: 520; font-size: 1.15rem; }
.gate-sub { color: var(--soft); font-size: 0.94rem; margin-top: 6px; }
.gate-row { display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap; }
.gate-input {
  flex: 1; min-width: 200px; font-family: var(--font); font-size: 0.95rem;
  padding: 10px 16px; border-radius: 999px;
  border: 1px solid var(--line); background: var(--bg); color: var(--ink);
}
.gate-input:focus { outline: 2px solid var(--green); outline-offset: 1px; border-color: var(--green); }
.gate-error { color: #b3401f; font-size: 0.88rem; margin-top: 10px; }
[data-theme="dark"] .gate-error { color: #e89273; }
.gate-help { color: var(--soft); font-size: 0.86rem; margin-top: 14px; }

.side-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
  padding: 22px 24px; box-shadow: var(--shadow);
}
.side-label {
  font-size: 0.71rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--soft); margin-bottom: 11px;
}
.tag-row { display: flex; flex-wrap: wrap; gap: 7px; }
.tag {
  font-size: 0.8rem; font-weight: 500; padding: 5px 13px; border-radius: 999px;
  background: var(--wash); color: var(--green-deep);
}
.tag-quiet { background: transparent; border: 1px solid var(--line); color: var(--soft); }
.check-list { list-style: none; }
.check-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; }
.check-list li::before {
  content: "✓"; position: absolute; left: 0; top: 8px;
  width: 16px; height: 16px; display: grid; place-items: center;
  font-size: 0.62rem; font-weight: 700; border-radius: 50%;
  background: var(--wash); color: var(--green-deep);
}

/* --- nav cards --- */
.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }
.nav-card {
  display: block; background: var(--surface); border: 1px solid var(--line);
  border-radius: 16px; padding: 24px 26px; color: var(--ink);
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.nav-card:hover { transform: translateY(-3px); border-color: var(--green); box-shadow: var(--shadow-hover); color: var(--ink); }
.nav-card-static:hover { transform: none; }
.nav-card h3 { font-weight: 520; font-size: 1.18rem; letter-spacing: -0.008em; }
.nav-card p { color: var(--soft); font-size: 0.93rem; margin-top: 9px; line-height: 1.58; }
.nav-card-cta { display: inline-block; margin-top: 16px; font-size: 0.8rem; font-weight: 600; color: var(--green-deep); }
.quiet-link { color: var(--ink); }
.quiet-link:hover { color: var(--green-deep); }

/* --- publications --- */
.pub-list { display: flex; flex-direction: column; gap: 10px; }
.pub {
  position: relative; background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; padding: 13px 18px 13px 21px;
  box-shadow: var(--shadow); overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.pub::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--green); opacity: 0.85;
}
.pub:hover { border-color: var(--green); box-shadow: var(--shadow-hover); }
.pub-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.chip {
  font-size: 0.66rem; font-weight: 600; letter-spacing: 0.03em;
  padding: 2px 10px; border-radius: 999px; background: var(--wash); color: var(--green-deep);
}
.pub-year { font-size: 0.78rem; font-weight: 600; color: var(--soft); }
.pub-title { font-weight: 520; font-size: 1.04rem; line-height: 1.32; letter-spacing: -0.006em; }
.pub-authors { font-size: 0.88rem; margin-top: 3px; }
.pub-venue { font-style: italic; font-size: 0.84rem; color: var(--soft); margin-top: 1px; }
.pub-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 7px; }
.pub-actions a, .pub-actions button {
  font-family: var(--font); font-size: 0.76rem; font-weight: 600;
  color: var(--green); background: none; border: none; padding: 0; cursor: pointer;
}
.pub-actions a:hover, .pub-actions button:hover { color: var(--green-deep); text-decoration: underline; text-underline-offset: 3px; }
.pub-abstract {
  margin-top: 10px; padding: 11px 14px; border-radius: 10px;
  background: var(--wash); color: var(--soft); font-size: 0.88rem; line-height: 1.6;
}

/* --- about meta (home) --- */
.about-prose { margin-bottom: 22px; }
.about-meta { display: flex; flex-direction: column; gap: 18px; }
.about-meta-row { display: flex; gap: clamp(28px, 4vw, 64px); flex-wrap: wrap; }

.skeleton-list { display: flex; flex-direction: column; gap: 14px; }
.skeleton {
  height: 86px; border-radius: 12px; border: 1px solid var(--line);
  background: linear-gradient(100deg, var(--surface) 40%, var(--wash) 50%, var(--surface) 60%);
  background-size: 200% 100%; animation: shimmer 1.4s infinite linear;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }

.notice {
  background: var(--wash); border-radius: 14px; padding: 16px 20px; font-size: 0.94rem;
}

/* --- cite modal --- */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 50;
  background: color-mix(in srgb, #000 42%, transparent);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: grid; place-items: center; padding: 20px;
  animation: fadein 0.18s ease;
}
.modal {
  width: min(640px, 100%); background: var(--surface);
  border: 1px solid var(--line); border-radius: 18px; padding: 20px 22px;
  box-shadow: var(--shadow-hover);
  animation: popin 0.22s cubic-bezier(0.34, 1.4, 0.64, 1);
}
@keyframes fadein { from { opacity: 0; } }
@keyframes popin { from { opacity: 0; transform: scale(0.97) translateY(6px); } }
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.seg { display: inline-flex; background: var(--wash); border-radius: 999px; padding: 3px; }
.seg button {
  font-family: var(--font); font-size: 0.84rem; font-weight: 560;
  padding: 6px 16px; border-radius: 999px; border: none; background: none;
  color: var(--soft); cursor: pointer; transition: all 0.15s ease;
}
.seg button.on { background: var(--surface); color: var(--green-deep); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.modal-close {
  border: none; background: none; color: var(--soft); cursor: pointer;
  font-size: 0.95rem; width: 32px; height: 32px; border-radius: 50%;
}
.modal-close:hover { background: var(--wash); color: var(--ink); }
.cite-block {
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 0.76rem; line-height: 1.6;
  background: var(--bg); border: 1px solid var(--line); border-radius: 12px;
  padding: 14px 16px; white-space: pre-wrap; word-break: break-word; color: var(--ink);
}
.modal-foot { display: flex; justify-content: flex-end; margin-top: 14px; }

/* --- CV --- */
.cv-list { display: flex; flex-direction: column; gap: 10px; }
.cv-entry {
  display: grid; grid-template-columns: 48px 1fr; gap: 16px;
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
  padding: 15px 20px; box-shadow: var(--shadow);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.cv-entry:hover { border-color: var(--green); box-shadow: var(--shadow-hover); }
.org-mark {
  width: 48px; height: 48px; border-radius: 12px; object-fit: contain;
  border: 1px solid var(--line); background: #fff; padding: 7px; margin-top: 2px;
}
.org-mark-fallback {
  display: grid; place-items: center; font-weight: 520; font-style: italic;
  font-size: 1.3rem; color: var(--green-deep); background: var(--wash); padding: 0;
}
.cv-top { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; }
.cv-heading { font-weight: 520; font-size: 1.02rem; line-height: 1.3; letter-spacing: -0.005em; }
.cv-period { font-size: 0.78rem; font-weight: 600; color: var(--green-deep); white-space: nowrap; }
.cv-org { font-size: 0.88rem; margin-top: 2px; }
.cv-org a { color: var(--soft); border-bottom: 1px solid var(--line); }
.cv-org a:hover { color: var(--green-deep); border-color: var(--green); }
.cv-honors { font-style: italic; color: var(--green-deep); }
.cv-details {
  margin-top: 10px; padding: 14px 18px; border-radius: 12px;
  background: var(--wash); color: var(--soft); font-size: 0.93rem; line-height: 1.62;
}

/* --- course --- */
.session-list { display: flex; flex-direction: column; gap: 8px; }
.session-row {
  display: grid; grid-template-columns: 126px 1fr 26px; gap: 16px; align-items: center;
  background: var(--surface); border: 1px solid var(--line); border-radius: 13px;
  padding: 14px 20px; color: var(--ink); box-shadow: var(--shadow);
  transition: border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}
.session-row:hover { border-color: var(--green); transform: translateX(4px); box-shadow: var(--shadow-hover); color: var(--ink); }
.session-row:hover .session-arrow { color: var(--green-deep); transform: translateX(3px); }
.session-label {
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--green-deep);
}
.session-title { font-size: 0.97rem; }
.session-arrow { color: var(--soft); transition: transform 0.18s ease, color 0.18s ease; text-align: right; }

.embed-frame { border: 1px solid var(--line); border-radius: 16px; overflow: hidden; background: var(--surface); box-shadow: var(--shadow); }
.embed-frame iframe { display: block; width: 100%; height: 76vh; border: 0; }
.pager { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 12px; margin-top: 28px; }
.pager > :first-child { justify-self: start; }
.pager .pager-toc { justify-self: center; }
.pager .pager-next, .pager > :last-child { justify-self: end; }

/* --- footer --- */
.site-footer { background: var(--wash); border-top: 1px solid var(--line); margin-top: 22px; }
.footer-grid {
  max-width: 1160px; margin: 0 auto;
  display: grid; grid-template-columns: minmax(240px, 1.4fr) repeat(3, minmax(130px, 1fr));
  gap: clamp(20px, 3vw, 40px);
  padding-top: 30px; padding-bottom: 18px;
}
.footer-name { font-weight: 500; font-size: 1.25rem; letter-spacing: -0.01em; }
.footer-aff { color: var(--soft); font-size: 0.86rem; margin-top: 8px; max-width: 32ch; line-height: 1.5; }
.foot-label {
  font-size: 0.66rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--soft); margin-bottom: 8px;
}
.foot-line { font-size: 0.88rem; line-height: 1.85; }
.foot-line a { color: var(--ink); }
.foot-line a:hover { color: var(--green-deep); }
.colophon {
  max-width: 1160px; margin: 0 auto;
  border-top: 1px solid var(--line); padding-top: 12px; padding-bottom: 18px;
  font-size: 0.72rem; color: var(--soft); line-height: 1.6;
}

/* --- print --- */
@media print {
  .site-header, .site-footer, .btn-row, .cta-line { display: none !important; }
  body { background: #fff; color: #000; }
}

/* --- responsive --- */
@media (max-width: 1100px) {
  .hero-grid { gap: 32px; }
  .cols { grid-template-columns: 1.6fr 1fr; gap: 28px; }
  .portrait, .portrait-fallback { width: 200px; height: 200px; }
}

@media (max-width: 820px) {
  .nav { display: none; }
  .menu-toggle { display: block; margin-left: auto; }
  .lang-toggle { margin-left: 8px; }
  .theme-toggle { margin-left: 8px; }
  .header-inner { gap: 10px; }
  .hero-grid { grid-template-columns: 1fr; gap: 24px; }
  .hero-side { order: -1; justify-content: center; }
  .portrait, .portrait-fallback { width: 176px; height: 176px; }
  .hero-name { font-size: clamp(2.1rem, 9vw, 2.6rem); }
  .page-title { font-size: clamp(1.6rem, 6.5vw, 2rem); }
  .cols { grid-template-columns: 1fr; gap: 22px; }
  .pub { padding: 16px 18px 16px 22px; }
  .pub-title { font-size: 1.08rem; }
  .cv-entry { grid-template-columns: 40px 1fr; padding: 16px 18px; gap: 14px; }
  .org-mark { width: 38px; height: 38px; }
  .cv-top { flex-direction: column; gap: 2px; }
  .session-row { grid-template-columns: 1fr 24px; gap: 4px 12px; padding: 12px 14px; }
  .session-label { grid-column: 1 / -1; }
  .gate { padding: 20px 20px; }
  .gate-row { flex-direction: column; }
  .gate-input { min-width: 0; }
  .session-content { grid-template-columns: 1fr; }
  .session-content .video-row { grid-template-columns: 1fr; }
  .session-content .ref-columns { grid-template-columns: 1fr; }
  .pager { grid-template-columns: 1fr 1fr; }
  .pager .pager-toc { grid-column: 1 / -1; grid-row: 2; justify-self: stretch; text-align: center; margin-top: 4px; }
  .footer-grid { grid-template-columns: 1fr 1fr; padding-top: 24px; }
  .embed-frame iframe { height: 62vh; }
}

@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; gap: 18px; }
  .btn-row { flex-direction: column; align-items: stretch; }
  .btn { text-align: center; }
  .hero-profiles { gap: 8px 16px; }
}
`;