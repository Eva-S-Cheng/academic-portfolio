/* ============================================================
   All editable content lives here.
   Sourced from sites.google.com/view/eva-cheng — nothing invented.
   Items marked TODO are the only ones waiting for your input.
   ============================================================ */

   export const ORCID_ID = "0009-0001-4562-7312";

   export const LINKS = {
     orcid: `https://orcid.org/${ORCID_ID}`,
     scholar: "https://scholar.google.com/citations?user=WrG3iYUAAAAJ&hl=en",
     linkedin: "https://www.linkedin.com/in/eva-s-cheng/",
     github: "https://github.com/Eva-S-Cheng",
     researchgate: "https://www.researchgate.net/profile/Eva-Cheng-13",
     emailAcademic: "eva.cheng@audencia.com",
     emailPro: "evcheng.pro@gmail.com",
     cvEN:
       "https://drive.google.com/file/d/1pBss8qZHF8M2tvDXX6qIkp_bz3c3sLIG/view?usp=drive_link",
     cvFR:
       "https://drive.google.com/file/d/1O68dhVgzxGPekUV4ZjUXhsh5Tn5zBkUt/view?usp=sharing",
   };
   
   export const PROFILE_LINKS = [
     { label: "ORCID", url: LINKS.orcid },
     { label: "Google Scholar", url: LINKS.scholar },
     { label: "ResearchGate", url: LINKS.researchgate },
     { label: "LinkedIn", url: LINKS.linkedin },
     { label: "GitHub", url: LINKS.github },
   ];
   
   export const BIO = [
     "Dynamic and goal-oriented, with a strong focus on responsible and quantitative finance, I am committed to advancing an academic career that integrates rigorous research with high-quality education. My research interests examine how nature / climate, environmental and social risks affect corporate decisions and financial markets, how investors influence corporate sustainability practices, and how AI can be used to analyze disclosures and support sustainability reporting.",
     "I have developed proficiency in financial data analysis, programming, quantitative techniques, and dashboard design, drawing on earlier experience as a Data Analyst. Following an MSc in Data Management for Finance with distinction, I gained industry exposure as a Financial Analyst in real estate and later as an Asset & Liability Manager in the banking sector.",
     "In parallel with these prior roles, I previously served as an adjunct lecturer in Quantitative Finance and Python, where I introduced postgraduate students to analytical and computational approaches in market finance. I am currently a visiting researcher in a predoctoral position, dedicated to strengthening my empirical and methodological capabilities in preparation for doctoral research. This stage enables me to refine my research agenda and contribute to ongoing projects in sustainable and quantitative finance.",
     "I am fluent in French, English, and Cantonese and have professional proficiency in Chinese. I welcome communication in these languages and have basic knowledge of German.",
   ];
   
   export const SKILLS = ["Python", "R", "SQL", "Excel", "C++", "Power BI"];
   
   export const RESEARCH_STATEMENT = [
     "My research interests focus on areas at the intersection of finance, sustainability, and mathematics. This includes quantitative finance, econometrics, financial asset and property pricing, and the application of machine learning to finance.",
     "I am particularly interested in the role of responsible finance, corporate social responsibility (CSR), and the effects of regulation on investment behavior. Additionally, I explore financial risks, climate-conscious finance, and ESG factors, with a focus on how markets respond to environmental and social issues, as well as evolving regulatory frameworks.",
   ];
   
   export const INTERESTS = [
     "Sustainable finance",
     "Climate- & nature-related financial risks",
     "AI-based textual analysis",
     "Shareholder voting & governance in sustainability contexts",
     "ESG controversies",
     "Corporate decision making under ESG risk",
     "Market reactions to news & disclosures",
     "Investor influence on corporate sustainability practices",
   ];
   
   export const WORKING_PAPERS = [
     {
       title:
         "Minimum Energy Performance Standards and Housing Price Capitalization: Evidence from France's Rental Ban on \u201cEnergy Sieves\u201d",
       authors: "with Alexandre Garel",
       venue: "Working paper",
       link: { label: "SSRN", url: "https://ssrn.com/abstract=5815923" },
       abstract:
         "Energy performance disclosure is increasingly paired with minimum energy performance standards to accelerate the capitalization of energy inefficiency into housing prices and strengthen homeowners\u2019 incentives to retrofit inefficient dwellings. We study the 2021 French policy implementing a progressive rental ban on the least energy-efficient houses (\u201cenergy sieves\u201d) and examine whether this minimum standard affected housing prices. Using more than one million housing transactions over 2014\u20132024, we document that energy sieves sell at an additional discount of about 9 percentage points following the policy announcement, on top of a substantial pre-existing pricing penalty relative to better-rated houses. The discount is robust to energy performance certificate methodological revisions and controls for energy use and energy costs. In line with the two mechanisms we posit \u2014 the loss of the rental option and the cost of renovation \u2014 the discount is more pronounced in communes with greater rental activity and for houses for which retrofits are expected to be more costly. Finally, the share of energy sieves in sale transactions increases notably after the announcement, suggesting that some owners prefer selling at a discount rather than financing retrofits.",
       citation: {
         bibtex:
           "@unpublished{cheng_garel_energy_sieves,\n  author = {Cheng, Eva and Garel, Alexandre},\n  title  = {Minimum Energy Performance Standards and Housing Price Capitalization: Evidence from France's Rental Ban on ``Energy Sieves''},\n  note   = {Working paper. Available at SSRN: https://ssrn.com/abstract=5815923}\n}",
         apa: "Cheng, E., & Garel, A. Minimum energy performance standards and housing price capitalization: Evidence from France's rental ban on \u201cenergy sieves\u201d [Working paper]. SSRN. https://ssrn.com/abstract=5815923",
       },
     },
   ];
   
   export const REPORTS = [
     {
       title:
         "Index Replication using the Alpha Cointegration: An Application to the S&P 500",
       authors:
         "Originated in 2021 by E. Cheng, I. El Guerch, A. Langle, K. Lim & N. Lucarotti \u2014 refined in 2025 by E. Cheng",
       venue: "Research report (not for publication)",
       link: {
         label: "ResearchGate",
         url: "https://www.researchgate.net/publication/389042926_Index_replication_using_the_Alpha_Cointegration_An_Application_to_the_SP_500",
       },
       abstract:
         "This study examines the replication of the S&P 500 index using a cointegration-based methodology, as outlined in Alexander and Dimitriu\u2019s 2002 paper. Two primary strategies were employed: traditional index tracking and a long-short equity market-neutral approach. A dynamic portfolio was constructed based on log returns and optimized through linear regression and cointegration tests. The replication strategy proved effective under various market conditions, including during the COVID-19 pandemic. However, difficulties in developing a robust long-short strategy highlighted areas for further refinement. The results suggest that cointegration-based strategies offer a more effective approach to index replication compared to traditional correlation-driven methods, and also lay a foundation for future research and the development of more advanced long-short equity strategies.",
       citation: {
         bibtex:
           "@misc{cheng2025index,\n  author = {Cheng, E. and El Guerch, I. and Langle, A. and Lim, K. and Lucarotti, N.},\n  title  = {Index Replication using the Alpha Cointegration: An Application to the S\\&P 500},\n  year   = {2025},\n  note   = {Research report, not for publication. Available on ResearchGate}\n}",
         apa: "Cheng, E., El Guerch, I., Langle, A., Lim, K., & Lucarotti, N. (2025). Index replication using the alpha cointegration: An application to the S&P 500 [Research report]. ResearchGate.",
       },
     },
     {
       title:
         "Do ESG Controversies Drive the Investors' Reaction in the French Market?",
       authors: "E. Cheng (2022) \u2014 supervised by A. Garel",
       venue: "Master's thesis (not for publication)",
       link: {
         label: "ResearchGate",
         url: "https://www.researchgate.net/publication/369188793_Do_ESG_controversies_drive_the_investors%27_reaction_in_the_French_market",
       },
       abstract:
         "The importance of ESG (Environmental, Social, and Governance) criteria and Corporate Social Responsibility (CSR) has significantly increased over the past decade. These criteria not only reflect the well-being, responsibility, and culture of a firm, but also offer insights into the macroeconomic climate of a country. ESG standards often mirror the values and norms of a population, indicating what is embraced or discouraged within a society. In France, a growing number of individuals are adopting pro-social and environmentally conscious preferences, making the population more sensitive to negative environmental and social events \u2014 and, by extension, the market may react similarly. This paper provides evidence of a negative market reaction to controversies, demonstrating that such reactions can extend beyond the affected company to impact entire industries or the broader market. The research question explored in this study is: \u201cHow do investors respond to social and environmental controversies in the French stock market, and how can these controversies be predicted and prevented?\u201d",
       citation: {
         bibtex:
           "@mastersthesis{cheng2022esg,\n  author = {Cheng, Eva},\n  title  = {Do ESG Controversies Drive the Investors' Reaction in the French Market?},\n  school = {Audencia Business School},\n  year   = {2022},\n  note   = {Supervised by A. Garel. Not for publication}\n}",
         apa: "Cheng, E. (2022). Do ESG controversies drive the investors' reaction in the French market? [Master's thesis, Audencia Business School]. ResearchGate.",
       },
     },
   ];
   
   export const PROJECTS = [
     {
       name: "Research Paper Digest Agent",
       description:
         "An automated agent designed to systematically retrieve and compile research articles or working papers related to a specified subject from selected academic journals or websites, within a defined time frame. The agent delivers a curated daily digest of relevant publications via email to support literature monitoring.",
       tags: ["Automation", "Literature monitoring", "Email digest"],
     },
     {
       name: "Kajin",
       description:
         "A web scraping-based tool that automatically collects and compiles the latest property sale advertisements from selected online platforms. Kajin enables real-time market monitoring by providing up-to-date listings for efficient property analysis.",
       tags: ["Web scraping", "Real estate", "Market monitoring"],
     },
     {
       name: "News Digest",
       description:
         "An automated AI-based model that uses web scraping to collect daily news from a selected provider. The system generates a general summary of the day\u2019s news, category-specific summaries, and individual article summaries. For each article, it extracts key information such as keywords, main subjects, and the original source link. The results are automatically retrieved by a scheduled Python task, which compiles and sends them via email without manual intervention.",
       tags: ["NLP", "Summarization", "Scheduled tasks"],
     },
   ];
   
   export const EDUCATION = [
     {
       degree: "MSc in Data Management for Finance",
       school: "Audencia Business School",
       year: "2022",
       honors: "Graduated valedictorian",
       details:
         "Audencia Business School offers an internationally recognized program with triple accreditation from AACSB, EQUIS, and AMBA. The curriculum combines finance, strategic analysis, and data tools, enriched by practical insights from industry professionals. Core courses encompass contemporary economics, financial engineering and valuation, accounting and financial analysis, data management and visualization, strategic analysis, programming, quantitative methods, econometrics, big data, machine learning, and international management. Students gain proficiency in software such as Alteryx, Microsoft Power BI, Tableau, IBM Planning Analytics, SQL and NoSQL, R, and Python, enabling them to analyze large volumes of structured and unstructured data for informed financial decision-making.",
     },
     {
       degree: "MEng in Quantitative Finance and Financial Engineering",
       school: "De Vinci Engineering School (ESILV), Paris",
       year: "2021",
       honors: null,
       details:
         "De Vinci Engineering School (ESILV) offers a comprehensive program that prepares students to become general engineers with a strong focus on digital technologies. The curriculum integrates market finance, programming, and advanced applied mathematics, equipping students with a solid foundation in quantitative finance. Core courses encompass financial concepts, market risks, programming for finance (R, Python, VBA, and C++), machine learning for asset management, econometrics, advanced probabilities, stochastic calculus, investment and asset management, and pricing and hedging derivatives.",
     },
     {
       degree:
         "BSc in Sciences, Technologies, and Health \u2014 Specialization in Computer Science",
       school: "Gustave Eiffel University",
       year: "2021",
       honors: "Graduated with highest honors (mention tr\u00e8s bien)",
       details:
         "Gustave Eiffel University is a public institution renowned for its research in civil engineering and urban planning. The curriculum integrates advanced mathematics and computer science, with core courses including advanced physics, programming, advanced mathematics, and management.",
     },
     {
       degree: "Bachelor of Engineering Sciences",
       school: "EFREI Paris",
       year: "2020",
       honors: "Graduated summa cum laude",
       details:
         "EFREI Paris is a general engineering school specializing in computer science and digital technologies. The curriculum offers a robust technical foundation in areas such as computer science, programming, advanced mathematics, optimization, and physics (including thermodynamics, mechanics, and quantum physics). Additionally, it encompasses management, communication, economics, corporate finance, and law.",
     },
     {
       degree: "Continuing Education Semester \u2014 Computer Science and Management",
       school: "Concordia University, Montreal",
       year: "2019",
       honors: null,
       details:
         "Concordia University, a public research institution in Montreal, Canada, offers a Continuing Education program in Computer Science and Management. This program provides advanced courses in information technology, covering topics such as database creation and management, networks and protocols, Java and UML, operating systems, management control, cost management, and financial management.",
     },
   ];
   
   export const TEACHING_EXPERIENCE = [
     {
       role: "Adjunct Lecturer in Python and Quantitative Finance",
       org: "Audencia Business School",
       period: "2024 \u2013 Present",
       details:
         "As a Lecturer at Audencia, I teach courses on Python, Quantitative Finance, and Data Analysis, focusing on practical applications of financial theory. The curriculum covers financial modeling, risk assessment, and data analysis using Python. Students learn Python programming methods for finance, enabling them to process, explore, visualize, and analyze data. The course includes topics such as data analysis, portfolio construction, risk measurement, and the use of Python libraries for financial simulations and predictions.",
     },
   ];
   
   export const WORK_EXPERIENCE = [
     {
       role: "Visiting Assistant in Research",
       org: "Audencia Business School",
       period: "2025 \u2013 Present",
       details: null,
     },
     {
       role: "Asset / Liability Manager",
       org: "Caisse d'Epargne Bretagne Pays de Loire",
       period: "2025",
       details:
         "At Caisse d'Epargne Bretagne Pays de Loire, a regional bank, I worked in the Financial Management Department as part of the Asset and Liability Management (ALM) team. My role focused on liquidity and interest rate risks. I produced periodic indicators for balance-sheet management, analyzed the net interest margin, and developed pricing scales for the commercial bank to align commercial and financial interests. I also assessed balance-sheet risks and evaluated the financial impact of various scenarios.",
     },
     {
       role: "Financial Analyst",
       org: "Groupe REALITES",
       period: "2023 \u2013 2025",
       details:
         "At Groupe REALITES, a French real estate development company, I worked within the Finance Department, supporting decision-making for the management and Board through analysis and reporting. Key responsibilities included developing financial models and forecasts to inform strategic decisions, along with analyzing costs and cash flows to improve financial management across various projects. I prepared quarterly reports for a diverse portfolio of real estate projects, ensuring clear communication with investors. Additionally, I created financial presentations for both investors and the Board, distilling complex financial data into actionable insights. My work with Power BI focused on designing dashboards to enhance data visualization and drive better decision-making. On a part-time basis, I also supported the Business Intelligence team as a Data Analyst, contributing to data-driven projects. I conducted cash projections to ensure liquidity and financial stability for ongoing developments, while also managing debt reporting. Market trends and asset pricing factors were regularly analyzed to provide insight into investment opportunities and project performance.",
     },
     {
       role: "Data and Digital Transformation Consultant",
       org: "Sopra Steria Next",
       period: "2022",
       details:
         "At Sopra Steria, a European leader in digital transformation, I joined a change management consulting team to bring data expertise to both internal and client projects. I took on a new scope of responsibilities, focusing on data analysis and dashboarding. For internal projects, I built and monitored a dashboard for Financial and HR management, mastering key processes and indicators to support effective decision-making. I proposed and implemented data-driven solutions to enhance workflows and managed performance metrics to identify improvement opportunities. For client projects, I applied my data expertise in Big Data and Business Intelligence to financial management and economic modeling. I worked on designing user-centric products and created comprehensive technical documentation. Notably, I developed a dashboard to prioritize and assess CSR projects, leveraging data to inform strategic decisions. Additionally, I participated in the Nantes Digital Week Project, where I facilitated workshops to gather insights from clients, designed innovative data-driven solutions, and implemented a dashboard to track project history. I also led workshops to raise awareness of Data, BI, and Artificial Intelligence among teams.",
     },
   ];
   
   /* ---------- Python for Finance course ----------
      For each session, set `embedUrl` to a Google Drive / Slides embed link
      (File \u2192 Share \u2192 anyone with link \u2192 use the /preview URL) to display the
      material directly on the page. Until then, a "request material" card
      is shown \u2014 consistent with the IP notice below. */
   
   export const COURSE = {
     title: "Python for Finance",
     org: "Audencia Business School",
     description:
       "This class provides students with materials that will help them learn programming methods in Python. The goal for the students is to be able to understand the logic behind a Python program in finance, and by extension being able to process, explore, visualize and analyze the data. The course will guide the student in the usage of advanced Python libraries in finance to model complex concepts that are used for simulations and predictions in market finance. The course will cover different subjects from basics of Python to advanced quantitative methods for market finance, including data analysis, visualization, construction of a portfolio and measuring the risk of a portfolio.",
     outcomes: [
       "Writing and understanding Python code for financial applications.",
       "Performing data analysis and visualization using Python.",
       "Applying time series analysis to financial data.",
       "Implementing key quantitative models used in finance.",
       "Valuing financial assets and applying pricing techniques in Python.",
       "Utilizing Python for corporate finance applications.",
       "Running quantitative simulations to test financial strategies.",
       "Constructing a portfolio and developing an investment strategy.",
     ],
     ipNotice:
       "For intellectual property reasons, course content is not available for copying, pasting, or text selection. If you require a version that allows text selection and copying, please contact me by email.",
     sessions: [
       { slug: "session-1", label: "Session 1", title: "Introduction to Python for Finance", embedUrl: "" },
       { slug: "session-2", label: "Session 2", title: "Advanced basics of Python for Finance", embedUrl: "" },
       { slug: "session-3", label: "Session 3", title: "Basics of Data Analysis in Python", embedUrl: "" },
       { slug: "session-4", label: "Session 4", title: "Financial Analysis Using Python \u2014 Application with the Dupont Analysis", embedUrl: "" },
       { slug: "session-5", label: "Session 5", title: "Introduction to time series and Linear Regression using OLS (Ordinary Least Squares)", embedUrl: "" },
       { slug: "session-6", label: "Session 6", title: "Building a portfolio and valuing different types of assets", embedUrl: "" },
       { slug: "session-7", label: "Session 7", title: "Quantitative methods and simulations for Finance", embedUrl: "" },
       { slug: "session-8", label: "Session 8", title: "Financial risk assessment", embedUrl: "" },
       { slug: "final-project", label: "Final Project", title: "Portfolio diversification, risk management, and strategy development", embedUrl: "" },
       { slug: "additional-references", label: "Additional References", title: "Additional resources and references", embedUrl: "" },
     ],
   };
   
   export const COPYRIGHT_NOTICE =
     "All content on this website, including courses, texts, videos, graphics, and other elements, is protected by French and international intellectual property laws. Any reproduction, distribution, modification, or reuse of the content, in whole or in part, without prior written consent from the owner is strictly prohibited.";