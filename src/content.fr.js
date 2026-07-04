/* ============================================================
   French version of the site content.
   Publications (titles, abstracts, citations) and course
   material intentionally stay in English.
   Same keys as content.js; anything missing falls back to EN.
   ============================================================ */

export const FR = {
  AFFILIATION:
    "Chercheuse invit\u00e9e, Audencia Business School \u00b7 Future Doctorante, ESCP Business School",

  HERO_LEDE:
    "J'\u00e9tudie la mani\u00e8re dont les risques climatiques, naturels et sociaux influencent les d\u00e9cisions des entreprises et les march\u00e9s financiers, comment les investisseurs orientent les pratiques de durabilit\u00e9 des entreprises, et comment l'intelligence artificielle peut soutenir l'analyse des publications d'entreprises.",

  BIO: [
    "Ma recherche se situe \u00e0 l'intersection de la finance, de la durabilit\u00e9 et des m\u00e9thodes quantitatives. J'examine comment les risques climatiques, naturels et sociaux influencent les d\u00e9cisions des entreprises et les march\u00e9s financiers, comment les investisseurs orientent les pratiques de durabilit\u00e9 des entreprises, et comment l'intelligence artificielle peut \u00eatre appliqu\u00e9e \u00e0 l'analyse des publications d'entreprises et du reporting de durabilit\u00e9. Mes travaux mobilisent l'\u00e9conom\u00e9trie, la valorisation d'actifs financiers et immobiliers, et le machine learning appliqu\u00e9 \u00e0 la finance.",
    "Je suis venue \u00e0 faire de la recherche apr\u00e8s plusieurs ann\u00e9es en entreprise. Apr\u00e8s un MSc in Data Management for Finance, dont je suis sortie major de promotion, j'ai travaill\u00e9 comme analyste financi\u00e8re en promotion immobili\u00e8re puis comme gestionnaire actif-passif en banque, en m'appuyant sur une premi\u00e8re exp\u00e9rience de data analyst. Ce parcours nourrit les questions empiriques que j'\u00e9tudie.",
    "Je suis actuellement chercheuse invit\u00e9e \u00e0 Audencia Business School, en position pr\u00e9doctorale, en pr\u00e9paration de mon doctorat \u00e0 ESCP Business School. J'ai \u00e9galement enseign\u00e9 Python et la finance quantitative \u00e0 des \u00e9tudiants de niveau master en tant que vacataire.",
  ],

  RESEARCH_STATEMENT: [
    "Mes int\u00e9r\u00eats de recherche se situent \u00e0 l'intersection de la finance, de la durabilit\u00e9 et des math\u00e9matiques. Cela recouvre la finance quantitative, l'\u00e9conom\u00e9trie, la valorisation d'actifs financiers et immobiliers, et l'application du machine learning \u00e0 la finance.",
    "Je m'int\u00e9resse particuli\u00e8rement au r\u00f4le de la finance responsable, \u00e0 la responsabilit\u00e9 sociale des entreprises et aux effets de la r\u00e9glementation sur les comportements d'investissement. J'\u00e9tudie \u00e9galement les risques financiers, la finance climatique et les facteurs ESG, avec un accent sur la mani\u00e8re dont les march\u00e9s r\u00e9agissent aux enjeux environnementaux et sociaux et \u00e0 l'\u00e9volution des cadres r\u00e9glementaires.",
  ],

  INTERESTS: [
    "Finance durable",
    "Risques financiers li\u00e9s au climat et \u00e0 la nature",
    "Analyse textuelle par IA",
    "Vote des actionnaires et gouvernance",
    "Controverses ESG",
    "D\u00e9cisions d'entreprise sous risque ESG",
    "R\u00e9actions des march\u00e9s aux annonces et publications",
    "Influence des investisseurs sur les pratiques de durabilit\u00e9",
  ],

  LANGUAGES: [
    "Fran\u00e7ais (courant)",
    "Anglais (courant)",
    "Cantonais (courant)",
    "Chinois (professionnel)",
    "Allemand (notions)",
  ],

  PROJECTS: [
    {
      name: "Your Spotify, Uncovered",
      description:
        "Un tableau de bord personnel d'analyse de l'historique d'\u00e9coute Spotify, d\u00e9velopp\u00e9 en React. Il enrichit les donn\u00e9es d'\u00e9coute avec les genres et les pays des artistes, calcule des indicateurs de diversit\u00e9 et de nouveaut\u00e9, et propose des visualisations interactives des habitudes d'\u00e9coute dans le temps.",
      tags: ["React", "Visualisation de donn\u00e9es", "API"],
      link: { label: "sound-print.fr", url: "https://sound-print.fr" },
    },
    {
      name: "Academic Portfolio",
      description:
        "Ce site. Une application React avec des publications synchronis\u00e9es depuis l'API publique ORCID, des supports de cours prot\u00e9g\u00e9s par code d'acc\u00e8s, et un syst\u00e8me de design clair et sombre, d\u00e9ploy\u00e9e sur GitHub Pages.",
      tags: ["React", "API ORCID", "GitHub Pages"],
      link: { label: "eva-s-cheng.github.io", url: "https://eva-s-cheng.github.io/academic-portfolio/" },
    },
    {
      name: "Research Paper Digest Agent",
      description:
        "Un agent automatis\u00e9 qui surveille une s\u00e9lection de revues acad\u00e9miques, r\u00e9cup\u00e8re les nouveaux articles et documents de travail sur un sujet donn\u00e9, et envoie chaque jour une synth\u00e8se cur\u00e9e par email.",
      tags: ["Automatisation", "Veille scientifique"],
    },
    {
      name: "News Digest",
      description:
        "Un pipeline automatis\u00e9 qui collecte l'actualit\u00e9 quotidienne, produit des synth\u00e8ses g\u00e9n\u00e9rales, par cat\u00e9gorie et par article avec mots-cl\u00e9s et sources, et envoie le condens\u00e9 par email programm\u00e9.",
      tags: ["NLP", "Synth\u00e8se", "Planification"],
    },
  ],

  COLLABORATORS: [
    {
      name: "Alberta Di Giuli",
      role: "Directrice de th\u00e8se",
      org: "Professeure de finance & Dean du campus de Turin, ESCP Business School",
      scholar: "https://scholar.google.com/citations?user=wyQf0M0AAAAJ",
      linkedin: "https://it.linkedin.com/in/alberta-di-giuli",
      website: "https://sites.google.com/site/albertadigiuli/home",
    },
    {
      name: "Alexandre Garel",
      role: "Co-auteur \u00b7 Encadrant de recherche",
      org: "Professeur titulaire en finance durable, Audencia Business School",
      scholar: "https://scholar.google.com/citations?user=YdbSEhwAAAAJ",
      linkedin: "https://www.linkedin.com/in/alexandre-garel-baa75429/",
      website: "https://agarel86.github.io/site/index.html",
    },
  ],

  EDUCATION: [
    {
      degree: "MSc in Data Management for Finance",
      school: "Audencia Business School",
      orgUrl: "https://www.audencia.com",
      orgDomain: "audencia.com",
      year: "2022",
      honors: "Major de promotion",
      details:
        "Audencia Business School propose un programme reconnu \u00e0 l'international, triplement accr\u00e9dit\u00e9 AACSB, EQUIS et AMBA. Le cursus combine finance, analyse strat\u00e9gique et outils data, enrichi par les retours de professionnels du secteur. Les enseignements couvrent l'\u00e9conomie contemporaine, l'ing\u00e9nierie financi\u00e8re et la valorisation, l'analyse comptable et financi\u00e8re, la gestion et la visualisation de donn\u00e9es, l'analyse strat\u00e9gique, la programmation, les m\u00e9thodes quantitatives, l'\u00e9conom\u00e9trie, le big data, le machine learning et le management international. Les \u00e9tudiants ma\u00eetrisent des outils tels qu'Alteryx, Microsoft Power BI, Tableau, IBM Planning Analytics, SQL et NoSQL, R et Python, pour analyser de grands volumes de donn\u00e9es structur\u00e9es et non structur\u00e9es au service de la d\u00e9cision financi\u00e8re.",
    },
    {
      degree: "Dipl\u00f4me d'ing\u00e9nieur en finance quantitative et ing\u00e9nierie financi\u00e8re",
      school: "\u00c9cole d'ing\u00e9nieurs De Vinci (ESILV), Paris",
      orgUrl: "https://www.esilv.fr",
      orgDomain: "esilv.fr",
      year: "2021",
      honors: null,
      details:
        "L'ESILV forme des ing\u00e9nieurs g\u00e9n\u00e9ralistes avec une forte dominante num\u00e9rique. Le cursus int\u00e8gre la finance de march\u00e9, la programmation et les math\u00e9matiques appliqu\u00e9es avanc\u00e9es, offrant un socle solide en finance quantitative. Les enseignements couvrent les concepts financiers, les risques de march\u00e9, la programmation pour la finance (R, Python, VBA et C++), le machine learning pour la gestion d'actifs, l'\u00e9conom\u00e9trie, les probabilit\u00e9s avanc\u00e9es, le calcul stochastique, l'investissement et la gestion d'actifs, ainsi que le pricing et la couverture de produits d\u00e9riv\u00e9s.",
    },
    {
      degree: "Licence Sciences, Technologies, Sant\u00e9, mention informatique",
      school: "Universit\u00e9 Gustave Eiffel",
      orgUrl: "https://www.univ-gustave-eiffel.fr",
      orgDomain: "univ-gustave-eiffel.fr",
      year: "2021",
      honors: "Mention tr\u00e8s bien",
      details:
        "L'Universit\u00e9 Gustave Eiffel est un \u00e9tablissement public reconnu pour sa recherche en g\u00e9nie civil et en urbanisme. Le cursus int\u00e8gre math\u00e9matiques avanc\u00e9es et informatique, avec des enseignements de physique avanc\u00e9e, de programmation, de math\u00e9matiques et de gestion.",
    },
    {
      degree: "Bachelor en sciences de l'ing\u00e9nieur",
      school: "EFREI Paris",
      orgUrl: "https://www.efrei.fr",
      orgDomain: "efrei.fr",
      year: "2020",
      honors: "Summa cum laude",
      details:
        "L'EFREI Paris est une \u00e9cole d'ing\u00e9nieurs g\u00e9n\u00e9raliste sp\u00e9cialis\u00e9e en informatique et technologies num\u00e9riques. Le cursus offre un socle technique solide en informatique, programmation, math\u00e9matiques avanc\u00e9es, optimisation et physique (thermodynamique, m\u00e9canique, physique quantique), compl\u00e9t\u00e9 par du management, de la communication, de l'\u00e9conomie, de la finance d'entreprise et du droit.",
    },
    {
      degree: "Semestre de formation continue, informatique et management",
      school: "Universit\u00e9 Concordia, Montr\u00e9al",
      orgUrl: "https://www.concordia.ca",
      orgDomain: "concordia.ca",
      year: "2019",
      honors: null,
      details:
        "L'Universit\u00e9 Concordia, universit\u00e9 de recherche publique de Montr\u00e9al, propose un programme de formation continue en informatique et management. Ce programme offre des cours avanc\u00e9s en technologies de l'information : cr\u00e9ation et gestion de bases de donn\u00e9es, r\u00e9seaux et protocoles, Java et UML, syst\u00e8mes d'exploitation, contr\u00f4le de gestion, gestion des co\u00fbts et gestion financi\u00e8re.",
    },
  ],

  TEACHING_EXPERIENCE: [
    {
      role: "Enseignante vacataire en Python et finance quantitative",
      org: "Audencia Business School",
      orgUrl: "https://www.audencia.com",
      orgDomain: "audencia.com",
      period: "2024 \u2013 aujourd'hui",
      details:
        "En tant qu'enseignante vacataire \u00e0 Audencia, j'enseigne Python, la finance quantitative et l'analyse de donn\u00e9es, avec un accent sur les applications pratiques de la th\u00e9orie financi\u00e8re. Le programme couvre la mod\u00e9lisation financi\u00e8re, l'\u00e9valuation des risques et l'analyse de donn\u00e9es en Python. Les \u00e9tudiants apprennent les m\u00e9thodes de programmation Python pour la finance, leur permettant de traiter, explorer, visualiser et analyser les donn\u00e9es. Le cours aborde notamment l'analyse de donn\u00e9es, la construction de portefeuille, la mesure du risque et l'utilisation des biblioth\u00e8ques Python pour les simulations et pr\u00e9dictions en finance de march\u00e9.",
    },
  ],

  ACADEMIC_POSITIONS: [
    {
      role: "Chercheuse invit\u00e9e (au statut prédoctoral)",
      org: "Audencia Business School",
      orgUrl: "https://www.audencia.com",
      orgDomain: "audencia.com",
      period: "2025 \u2013 aujourd'hui",
      details: null,
    },
    {
      role: "Enseignante vacataire en Python et finance quantitative",
      org: "Audencia Business School",
      orgUrl: "https://www.audencia.com",
      orgDomain: "audencia.com",
      period: "2024 \u2013 aujourd'hui",
      details:
        "En tant qu'enseignante vacataire \u00e0 Audencia, j'enseigne Python, la finance quantitative et l'analyse de donn\u00e9es, avec un accent sur les applications pratiques de la th\u00e9orie financi\u00e8re. Le programme couvre la mod\u00e9lisation financi\u00e8re, l'\u00e9valuation des risques et l'analyse de donn\u00e9es en Python. Les \u00e9tudiants apprennent les m\u00e9thodes de programmation Python pour la finance, leur permettant de traiter, explorer, visualiser et analyser les donn\u00e9es. Le cours aborde notamment l'analyse de donn\u00e9es, la construction de portefeuille, la mesure du risque et l'utilisation des biblioth\u00e8ques Python pour les simulations et pr\u00e9dictions en finance de march\u00e9.",
    },
  ],

  PROFESSIONAL_EXPERIENCE: [
    {
      role: "Gestionnaire actif-passif (ALM)",
      org: "Caisse d'Epargne Bretagne Pays de Loire",
      orgUrl: "https://www.caisse-epargne.fr",
      orgDomain: "caisse-epargne.fr",
      logoUrl: "https://www.google.com/s2/favicons?domain=caisse-epargne.fr&sz=128",
      period: "2025",
      details:
        "Au sein de l'\u00e9quipe ALM de la Direction de la gestion financi\u00e8re, j'ai suivi les risques de liquidit\u00e9 et de taux : indicateurs p\u00e9riodiques de gestion de bilan, analyse de la marge nette d'int\u00e9r\u00eats, bar\u00e8mes de taux de cession interne pour la banque commerciale, et \u00e9valuations de sc\u00e9narios sur les risques de bilan.",
    },
    {
      role: "Analyste financi\u00e8re",
      org: "Groupe REALITES",
      orgUrl: "https://www.realites.com",
      orgDomain: "realites.com",
      period: "2023 \u2013 2025",
      details:
        "Au sein de la Direction financi\u00e8re de ce promoteur immobilier, j'ai construit des mod\u00e8les financiers, pr\u00e9visions et projections de tr\u00e9sorerie pour les projets de d\u00e9veloppement, pr\u00e9par\u00e9 les rapports trimestriels et pr\u00e9sentations pour les investisseurs et le conseil d'administration, g\u00e9r\u00e9 le reporting de la dette et con\u00e7u des tableaux de bord Power BI. J'ai \u00e9galement appuy\u00e9 \u00e0 temps partiel l'\u00e9quipe Business Intelligence en tant que data analyst.",
    },
    {
      role: "Consultante Data et transformation digitale",
      org: "Sopra Steria Next",
      orgUrl: "https://www.soprasteria.com",
      orgDomain: "soprasteria.com",
      period: "2022",
      details:
        "Au sein d'une \u00e9quipe de conseil en conduite du changement, j'ai apport\u00e9 l'analyse de donn\u00e9es et le dashboarding aux projets internes et clients : tableaux de bord de gestion financi\u00e8re et RH, Big Data et BI appliqu\u00e9s \u00e0 la gestion financi\u00e8re et \u00e0 la mod\u00e9lisation \u00e9conomique, un tableau de bord de priorisation des projets RSE, et des ateliers de sensibilisation \u00e0 la data, \u00e0 la BI et \u00e0 l'IA, notamment pour la Nantes Digital Week.",
    },
  ],
};
