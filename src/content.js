/* ============================================================
   All editable content lives here.
   Facts sourced from sites.google.com/view/eva-cheng and ORCID.
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
     /* CV PDFs are served by the site itself: download them from your Drive
        and upload the two files to the repository's public/ folder as
        cv-en.pdf and cv-fr.pdf (same place as photo.jpg). */
     cvEN: (import.meta.env?.BASE_URL ?? "/") + "cv-en.pdf",
     cvFR: (import.meta.env?.BASE_URL ?? "/") + "cv-fr.pdf",
   };
   
   export const PROFILE_LINKS = [
     { label: "ORCID", url: LINKS.orcid },
     { label: "Google Scholar", url: LINKS.scholar },
     { label: "ResearchGate", url: LINKS.researchgate },
     { label: "LinkedIn", url: LINKS.linkedin },
     { label: "GitHub", url: LINKS.github },
   ];
   
   export const AFFILIATION =
     "Visiting Researcher, Audencia Business School · Incoming doctoral student, ESCP Business School";
   
   export const HERO_LEDE =
     "I study how climate, nature and social risks affect corporate decisions and financial markets, how investors influence corporate sustainability practices, and how artificial intelligence can support the analysis of corporate disclosures.";
   
   export const BIO = [
     "My research lies at the intersection of finance, sustainability and quantitative methods. I examine how climate, nature and social risks affect corporate decisions and financial markets, how investors influence corporate sustainability practices, and how artificial intelligence can be applied to the analysis of corporate disclosures and sustainability reporting. My work draws on econometrics, asset and property pricing, and machine learning applied to finance.",
     "I came to research after several years in industry. Following an MSc in Data Management for Finance, from which I graduated valedictorian, I worked as a Financial Analyst in real estate development and as an Asset and Liability Manager in banking, building on earlier experience as a Data Analyst. This background informs the empirical questions I pursue.",
     "I am currently a Visiting Researcher at Audencia Business School, in a predoctoral position, preparing my doctoral studies at ESCP Business School. I have also taught Python and Quantitative Finance to postgraduate students as an adjunct lecturer.",
   ];
   
   export const SKILLS = ["Python", "R", "SQL", "Excel", "C++", "Power BI"];
   
   export const LANGUAGES = [
     "French (fluent)",
     "English (fluent)",
     "Cantonese (fluent)",
     "Chinese (professional)",
     "German (basic)",
   ];
   
   export const RESEARCH_STATEMENT = [
     "My research interests focus on areas at the intersection of finance, sustainability and mathematics. This includes quantitative finance, econometrics, financial asset and property pricing, and the application of machine learning to finance.",
     "I am particularly interested in the role of responsible finance, corporate social responsibility and the effects of regulation on investment behavior. I also study financial risks, climate-conscious finance and ESG factors, with a focus on how markets respond to environmental and social issues and to evolving regulatory frameworks.",
   ];
   
   export const INTERESTS = [
     "Sustainable finance",
     "Climate and nature related financial risks",
     "AI-based textual analysis",
     "Shareholder voting and governance",
     "ESG controversies",
     "Corporate decisions under ESG risk",
     "Market reactions to news and disclosures",
     "Investor influence on sustainability practices",
   ];
   
   /* Curated entries supplement the ORCID record. When a work appears in
      both, the site displays the ORCID version (with its contributors)
      and attaches the abstract, citation and link below. */
   
   export const WORKING_PAPERS = [
     {
       title:
         "Minimum Energy Performance Standards and Housing Price Capitalization: Evidence from France's Rental Ban on \u201cEnergy Sieves\u201d",
       authors: "Alexandre Garel and Eva Cheng",
       venue: "Working paper",
       link: { label: "SSRN", url: "https://ssrn.com/abstract=5815923" },
       abstract:
         "Energy performance disclosure is increasingly paired with minimum energy performance standards to accelerate the capitalization of energy inefficiency into housing prices and strengthen homeowners\u2019 incentives to retrofit inefficient dwellings. We study the 2021 French policy implementing a progressive rental ban on the least energy-efficient houses (\u201cenergy sieves\u201d) and examine whether this minimum standard affected housing prices. Using more than one million housing transactions over 2014\u20132024, we document that energy sieves sell at an additional discount of about 9 percentage points following the policy announcement, on top of a substantial pre-existing pricing penalty relative to better-rated houses. The discount is robust to energy performance certificate methodological revisions and controls for energy use and energy costs. In line with the two mechanisms we posit (the loss of the rental option and the cost of renovation), the discount is more pronounced in communes with greater rental activity and for houses for which retrofits are expected to be more costly. Finally, the share of energy sieves in sale transactions increases notably after the announcement, suggesting that some owners prefer selling at a discount rather than financing retrofits.",
       citation: {
         bibtex:
           "@unpublished{garel_cheng_energy_sieves,\n  author = {Garel, Alexandre and Cheng, Eva},\n  title  = {Minimum Energy Performance Standards and Housing Price Capitalization: Evidence from France's Rental Ban on ``Energy Sieves''},\n  note   = {Working paper. Available at SSRN: https://ssrn.com/abstract=5815923}\n}",
         apa: "Garel, A., & Cheng, E. (2025). Minimum energy performance standards and housing price capitalization: Evidence from France's rental ban on \u201cenergy sieves\u201d [Working paper]. SSRN. https://ssrn.com/abstract=5815923",
       },
     },
   ];
   
   export const REPORTS = [
     {
       title:
         "Index Replication using the Alpha Cointegration: An Application to the S&P 500",
       authors:
         "E. Cheng, I. El Guerch, A. Langle, K. Lim and N. Lucarotti (2021); revised by E. Cheng (2025)",
       venue: "Research report, not for publication",
       year: "2025",
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
       authors: "E. Cheng (2022), supervised by A. Garel",
       venue: "Master's thesis, not for publication",
       year: "2022",
       link: {
         label: "ResearchGate",
         url: "https://www.researchgate.net/publication/369188793_Do_ESG_controversies_drive_the_investors%27_reaction_in_the_French_market",
       },
       abstract:
         "The importance of ESG (Environmental, Social, and Governance) criteria and Corporate Social Responsibility (CSR) has significantly increased over the past decade. These criteria not only reflect the well-being, responsibility, and culture of a firm, but also offer insights into the macroeconomic climate of a country. ESG standards often mirror the values and norms of a population, indicating what is embraced or discouraged within a society. In France, a growing number of individuals are adopting pro-social and environmentally conscious preferences, making the population more sensitive to negative environmental and social events, and, by extension, the market may react similarly. This paper provides evidence of a negative market reaction to controversies, demonstrating that such reactions can extend beyond the affected company to impact entire industries or the broader market. The research question explored in this study is: \u201cHow do investors respond to social and environmental controversies in the French stock market, and how can these controversies be predicted and prevented?\u201d",
       citation: {
         bibtex:
           "@mastersthesis{cheng2022esg,\n  author = {Cheng, Eva},\n  title  = {Do ESG Controversies Drive the Investors' Reaction in the French Market?},\n  school = {Audencia Business School},\n  year   = {2022},\n  note   = {Supervised by A. Garel. Not for publication}\n}",
         apa: "Cheng, E. (2022). Do ESG controversies drive the investors' reaction in the French market? [Master's thesis, Audencia Business School]. ResearchGate.",
       },
     },
   ];
   
   export const PROJECTS = [
     {
       name: "Your Spotify, Uncovered",
       description:
         "A personal analytics dashboard for Spotify listening history, built in React. It enriches listening data with genres and artist countries, computes diversity and novelty metrics, and provides interactive visualizations of listening patterns over time.",
       tags: ["React", "Data visualization", "APIs"],
       link: { label: "sound-print.fr", url: "https://sound-print.fr" },
     },
     {
       name: "Academic Portfolio",
       description:
         "This website. A React application with publications synchronized from the ORCID public API, access-protected course material, and a light and dark design system, deployed on GitHub Pages.",
       tags: ["React", "ORCID API", "GitHub Pages"],
       link: { label: "eva-s-cheng.github.io", url: "https://eva-s-cheng.github.io/academic-portfolio/" },
     },
     {
       name: "Research Paper Digest Agent",
       description:
         "An automated agent that monitors selected academic journals, retrieves new articles and working papers on a given subject, and delivers a curated daily digest by email.",
       tags: ["Automation", "Literature monitoring"],
     },
     {
       name: "News Digest",
       description:
         "An automated pipeline that collects daily news, produces general, category-level and article-level summaries with keywords and sources, and sends the compiled digest by scheduled email.",
       tags: ["NLP", "Summarization", "Scheduling"],
     },
   ];
   
   /* Co-authors and supervisors. Fill in the empty links (scholar,
      linkedin, website) for each person as you retrieve them; only
      non-empty links are displayed. */
   export const COLLABORATORS = [
    {
      name: "Alberta Di Giuli",
      role: "PhD supervisor",
      org: "Full Professor in Finance & Dean of Turin Campus, ESCP Business School",
      scholar: "https://scholar.google.com/citations?user=wyQf0M0AAAAJ",
      linkedin: "https://it.linkedin.com/in/alberta-di-giuli",
      website: "https://sites.google.com/site/albertadigiuli/home",
    },
     {
       name: "Alexandre Garel",
       role: "Co-author · Research supervisor",
       org: "Full Professor in Sustainable Finance, Audencia Business School",
       scholar: "https://scholar.google.com/citations?user=YdbSEhwAAAAJ",
       linkedin: "https://www.linkedin.com/in/alexandre-garel-baa75429/",
       website: "https://agarel86.github.io/site/index.html",
     },
   ];
   
   /* Institution metadata: url opens on click, domain drives the logo. */
   
   export const EDUCATION = [
     {
       degree: "MSc in Data Management for Finance",
       school: "Audencia Business School",
       orgUrl: "https://www.audencia.com",
       orgDomain: "audencia.com",
       year: "2022",
       honors: "Valedictorian",
       details:
         "Audencia Business School offers an internationally recognized program with triple accreditation from AACSB, EQUIS, and AMBA. The curriculum combines finance, strategic analysis, and data tools, enriched by practical insights from industry professionals. Core courses encompass contemporary economics, financial engineering and valuation, accounting and financial analysis, data management and visualization, strategic analysis, programming, quantitative methods, econometrics, big data, machine learning, and international management. Students gain proficiency in software such as Alteryx, Microsoft Power BI, Tableau, IBM Planning Analytics, SQL and NoSQL, R, and Python, enabling them to analyze large volumes of structured and unstructured data for informed financial decision-making.",
     },
     {
       degree: "MEng in Quantitative Finance and Financial Engineering",
       school: "De Vinci Engineering School (ESILV), Paris",
       orgUrl: "https://www.esilv.fr",
       orgDomain: "esilv.fr",
       year: "2021",
       honors: null,
       details:
         "De Vinci Engineering School (ESILV) offers a comprehensive program that prepares students to become general engineers with a strong focus on digital technologies. The curriculum integrates market finance, programming, and advanced applied mathematics, equipping students with a solid foundation in quantitative finance. Core courses encompass financial concepts, market risks, programming for finance (R, Python, VBA, and C++), machine learning for asset management, econometrics, advanced probabilities, stochastic calculus, investment and asset management, and pricing and hedging derivatives.",
     },
     {
       degree:
         "BSc in Sciences, Technologies, and Health, specialization in Computer Science",
       school: "Gustave Eiffel University",
       orgUrl: "https://www.univ-gustave-eiffel.fr",
       orgDomain: "univ-gustave-eiffel.fr",
       year: "2021",
       honors: "Highest honors (mention tr\u00e8s bien)",
       details:
         "Gustave Eiffel University is a public institution renowned for its research in civil engineering and urban planning. The curriculum integrates advanced mathematics and computer science, with core courses including advanced physics, programming, advanced mathematics, and management.",
     },
     {
       degree: "Bachelor of Engineering Sciences",
       school: "EFREI Paris",
       orgUrl: "https://www.efrei.fr",
       orgDomain: "efrei.fr",
       year: "2020",
       honors: "Summa cum laude",
       details:
         "EFREI Paris is a general engineering school specializing in computer science and digital technologies. The curriculum offers a robust technical foundation in areas such as computer science, programming, advanced mathematics, optimization, and physics (including thermodynamics, mechanics, and quantum physics). Additionally, it encompasses management, communication, economics, corporate finance, and law.",
     },
     {
       degree: "Continuing Education Semester, Computer Science and Management",
       school: "Concordia University, Montreal",
       orgUrl: "https://www.concordia.ca",
       orgDomain: "concordia.ca",
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
       orgUrl: "https://www.audencia.com",
       orgDomain: "audencia.com",
       period: "2024 \u2013 Present",
       details:
         "As a Lecturer at Audencia, I teach courses on Python, Quantitative Finance, and Data Analysis, focusing on practical applications of financial theory. The curriculum covers financial modeling, risk assessment, and data analysis using Python. Students learn Python programming methods for finance, enabling them to process, explore, visualize, and analyze data. The course includes topics such as data analysis, portfolio construction, risk measurement, and the use of Python libraries for financial simulations and predictions.",
     },
   ];
   
   export const ACADEMIC_POSITIONS = [
     {
       role: "Visiting Assistant in Research",
       org: "Audencia Business School",
       orgUrl: "https://www.audencia.com",
       orgDomain: "audencia.com",
       period: "2025 \u2013 Present",
       details: null,
     },
     {
       role: "Adjunct Lecturer in Python and Quantitative Finance",
       org: "Audencia Business School",
       orgUrl: "https://www.audencia.com",
       orgDomain: "audencia.com",
       period: "2024 \u2013 Present",
       details:
         "As a Lecturer at Audencia, I teach courses on Python, Quantitative Finance, and Data Analysis, focusing on practical applications of financial theory. The curriculum covers financial modeling, risk assessment, and data analysis using Python. Students learn Python programming methods for finance, enabling them to process, explore, visualize, and analyze data. The course includes topics such as data analysis, portfolio construction, risk measurement, and the use of Python libraries for financial simulations and predictions.",
     },
   ];
   
   export const PROFESSIONAL_EXPERIENCE = [
     {
       role: "Asset and Liability Manager",
       org: "Caisse d'Epargne Bretagne Pays de Loire",
       orgUrl: "https://www.caisse-epargne.fr",
       orgDomain: "caisse-epargne.fr",
       logoUrl: "https://www.google.com/s2/favicons?domain=caisse-epargne.fr&sz=128",
       period: "2025",
       details:
         "Within the ALM team of the Financial Management Department, I monitored liquidity and interest rate risks: periodic balance-sheet indicators, net interest margin analysis, pricing scales for the commercial bank, and scenario-based assessments of balance-sheet risks.",
     },
     {
       role: "Financial Analyst",
       org: "Groupe REALITES",
       orgUrl: "https://www.realites.com",
       orgDomain: "realites.com",
       period: "2023 \u2013 2025",
       details:
         "Within the Finance Department of this real estate developer, I built financial models, forecasts and cash projections for development projects, prepared quarterly reports and presentations for investors and the Board, managed debt reporting, and designed Power BI dashboards. I also supported the Business Intelligence team part-time as a Data Analyst.",
     },
     {
       role: "Data and Digital Transformation Consultant",
       org: "Sopra Steria Next",
       orgUrl: "https://www.soprasteria.com",
       orgDomain: "soprasteria.com",
       period: "2022",
       details:
         "Within a change management consulting team, I brought data analysis and dashboarding to internal and client projects: financial and HR management dashboards, Big Data and BI applied to financial management and economic modeling, a dashboard for prioritizing CSR projects, and workshops on data, BI and AI, including for the Nantes Digital Week.",
     },
   ];
   
   /* ---------- Courses ----------
      COURSES is an array: add new courses here and they appear
      automatically on the Teaching page with their own pages.
   
      accessCodeHash: SHA-256 hash of the access code required to view
      session material (leave "" to disable the gate for a course).
      Once entered, the code is remembered in the visitor's browser.
      To generate a hash for a new code, run in a terminal:
        node -e "console.log(require('crypto').createHash('sha256').update('YOUR-CODE').digest('hex'))"
      Current hash corresponds to the code: DMCF513
   */
   
   export const COURSES = [
     {
       slug: "python-for-finance",
       title: "Python for Finance",
       org: "Audencia Business School",
       accessCodeHash:
         "7fdf98b53e01373c764f61cb6038465eafcb04fafc3307a7a28692fc216f14dd",
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
         { slug: "session-4", label: "Session 4", title: "Financial Analysis Using Python: Application with the Dupont Analysis", embedUrl: "" },
         { slug: "session-5", label: "Session 5", title: "Introduction to time series and Linear Regression using OLS", embedUrl: "" },
         { slug: "session-6", label: "Session 6", title: "Building a portfolio and valuing different types of assets", embedUrl: "" },
         { slug: "session-7", label: "Session 7", title: "Quantitative methods and simulations for Finance", embedUrl: "" },
         { slug: "session-8", label: "Session 8", title: "Financial risk assessment", embedUrl: "" },
         { slug: "final-project", label: "Final Project", title: "Portfolio diversification, risk management, and strategy development", embedUrl: "", html: `
   <p>Create a comprehensive financial analysis project in a Jupyter Notebook that focuses on portfolio diversification, risk management, and strategy development. The project should solve a real-world financial problem, integrate multiple sources of data, and incorporate external factors like company news, market sentiment, and broader economic trends. You will be required to demonstrate the ability to build a diversified portfolio, assess its risk, and reflect on the impact of external factors on performance. Your Jupyter Notebook should include six sections, with flexibility in the methods and techniques you choose to apply. The project should require significant effort in data handling, analysis, and strategy development, and you should reflect on your choices, assumptions, and trade-offs.</p>
   <h2>1. Data Collection, Preprocessing, and Feature Engineering</h2>
   <ul>
   <li>Collect data from multiple sources relevant to your financial problem (e.g., historical asset prices, economic indicators, sentiment data, etc.).</li>
   <li>Preprocess the data, addressing any issues such as missing values, noise, or data inconsistencies.</li>
   <li>Engineer meaningful features that are crucial for the portfolio construction and risk analysis (e.g., returns, volatility, or market sentiment indicators).</li>
   <li><em>Reflection:</em> How did you choose the sources and features for your analysis? What challenges did you face in preparing the data, and how did you handle them?</li>
   </ul>
   <h2>2. Exploratory Data Analysis (EDA) and Insights</h2>
   <ul>
   <li>Perform an exploratory analysis to uncover relationships, patterns, and outliers in the data. Identify potential correlations between assets, sectors, and broader economic or market factors.</li>
   <li>Visualize the data to gain insights into the behavior of individual assets and their potential for diversification when combined into a portfolio.</li>
   <li>Identify any anomalies or market events that could impact portfolio performance.</li>
   <li><em>Reflection:</em> What insights did you gain about the assets, and how did these insights inform your approach to portfolio construction? Did you discover any patterns, correlations, or outliers that should be considered in the diversification process? How did external factors, such as news or economic indicators, impact the EDA?</li>
   </ul>
   <h2>3. Portfolio Diversification and Construction</h2>
   <ul>
   <li>Build a diversified portfolio from the assets selected. The portfolio should aim to balance risk and return, considering both the relationships between the assets and their individual characteristics.</li>
   <li>Assess the portfolio's performance and how diversification impacts its risk. Consider using risk-return metrics to evaluate the portfolio's effectiveness.</li>
   <li>Backtest the portfolio using historical data to assess its performance and make necessary adjustments.</li>
   <li><em>Reflection:</em> How did you select the assets for your portfolio, and what criteria did you use to ensure diversification? How did diversification reduce the overall risk of the portfolio? How do external factors, such as news events or market sentiment, influence the assets in your portfolio?</li>
   </ul>
   <h2>4. Risk Management and Stress Testing</h2>
   <ul>
   <li>Assess the risk of the portfolio by calculating relevant risk metrics. Evaluate the portfolio's sensitivity to extreme market conditions through stress testing.</li>
   <li>Simulate the portfolio's performance during various stress scenarios, such as economic crises or geopolitical events, to understand its resilience.</li>
   <li>Analyze how the portfolio might respond to different economic or market scenarios.</li>
   <li><em>Reflection:</em> What risk measures did you consider, and why did you choose them? How did stress testing impact your understanding of the portfolio's risk and potential vulnerabilities? How would external events, such as major market news or policy changes, influence your portfolio's performance during stressful conditions?</li>
   </ul>
   <h2>5. Strategy Development and Performance Evaluation</h2>
   <ul>
   <li>Develop a strategy based on the portfolio, considering factors like rebalancing, tactical shifts, or asset allocation adjustments over time.</li>
   <li>Evaluate the performance of the strategy, including comparing it to a benchmark or original portfolio. Assess the risk-adjusted returns and overall effectiveness.</li>
   <li>Backtest the strategy using historical data, and compare it against the performance of the original portfolio and relevant benchmarks.</li>
   <li><em>Reflection:</em> What strategy did you develop, and how did you decide on the key components? How did the strategy perform compared to the original portfolio or benchmark? What trade-offs did you make between flexibility and stability in your strategy?</li>
   </ul>
   <h2>6. Ethical, Practical, and Strategic Considerations</h2>
   <ul>
   <li>Discuss the broader implications of your financial strategy and portfolio, considering ethical factors, market efficiency, and potential misuses.</li>
   <li>Reflect on the practical challenges of applying your strategy in real-world markets, including issues like data availability, transaction costs, and liquidity.</li>
   <li>Suggest future improvements or extensions to your strategy based on evolving market conditions or new research.</li>
   <li><em>Reflection:</em> What ethical considerations should be taken into account when implementing your strategy? How practical and scalable is your approach for real-world use? What changes would you make to adapt to different market conditions or regulatory environments?</li>
   </ul>
   <h2>7. Optional Challenges</h2>
   <ul>
   <li>Integrate real-time news data or sentiment analysis using APIs and adjust portfolio allocations based on changing market conditions.</li>
   <li>Create a multi-strategy portfolio that adapts to changing market conditions based on both fundamental and technical analysis.</li>
   <li>Implement machine learning models to predict asset returns or risk, and adjust portfolio allocations accordingly.</li>
   </ul>
   <h2>8. Requirements</h2>
   <p>Your Jupyter Notebook must:</p>
   <ul>
   <li>Be self-contained: Include all code, explanations, and results in one document.</li>
   <li>Use markdown effectively: Provide clear, structured explanations of each section, including insights, methodology, and reflections on decisions made throughout the project.</li>
   <li>Contain high-quality visualizations: Use appropriate tools and techniques to create visualizations that help communicate the findings, such as asset returns, portfolio performance, or risk metrics.</li>
   <li>Include well-documented code: Ensure that your code is modular, clean, and easily understandable. Provide comments where necessary to clarify the logic and reasoning behind your implementation.</li>
   </ul>
   <h2>9. Evaluation Criteria</h2>
   <ul>
   <li>Creativity and Innovation (30%): Does the project demonstrate originality in portfolio construction, risk management, and strategy development? How effectively do you integrate external factors like news and sentiment?</li>
   <li>Technical Execution (30%): Are the methods correctly applied and well-executed? Is the analysis comprehensive and robust, considering both traditional financial metrics and external influences?</li>
   <li>Clarity and Communication (20%): Is the notebook well-organized, clear, and easy to follow? Are the visualizations insightful and aligned with the analysis?</li>
   <li>Reflection and Critical Thinking (20%): Does the notebook reflect thoughtful decision-making and consideration of trade-offs, ethical considerations, and practical challenges?</li>
   </ul>
   ` },
         { slug: "additional-references", label: "References", title: "Additional resources and references", embedUrl: "", public: true, html: `
   <div class="ref-columns"><div><h2>Learning about Python</h2>
   <ul>
   <li>Python official website: Documentation for the technical implementation of Python functionalities can be found <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noreferrer">here</a></li>
   <li>GeeksforGeeks: A leading platform offering extensive computer science resources, including a wide variety of tutorials, available <a href="https://www.geeksforgeeks.org/python-programming-language-tutorial/" target="_blank" rel="noreferrer">here</a></li>
   <li>W3Schools: A user-friendly learning platform designed to help you prepare for official certifications in computer science, accessible <a href="https://www.w3schools.com/python/default.asp" target="_blank" rel="noreferrer">here</a></li>
   <li>OpenClassrooms: Free access to a course on the basics of Python for Data Analytics, available <a href="https://openclassrooms.com/fr/courses/2304731-learn-python-basics-for-data-analysis" target="_blank" rel="noreferrer">here</a></li>
   <li>edX: A free course by IBM covering the basics of Python for Data Science, available <a href="https://www.edx.org/learn/python/ibm-python-basics-for-data-science" target="_blank" rel="noreferrer">here</a></li>
   </ul></div><div><h2>Learning about Finance</h2>
   <ul>
   <li>Investopedia: Learn about key financial concepts and terminology on Investopedia, available <a href="https://www.investopedia.com/" target="_blank" rel="noreferrer">here</a></li>
   <li>Options, Futures, and Other Derivatives: The ultimate reference handbook for market finance, especially in the derivatives market, available <a href="https://www.pearson.fr/fr/book/?GCOI=27440100780520" target="_blank" rel="noreferrer">here</a></li>
   <li>Chartered Financial Analyst Institute: A global nonprofit organization dedicated to finance education, accessible <a href="https://www.cfainstitute.org/" target="_blank" rel="noreferrer">here</a></li>
   <li>Financial Times: Stay up-to-date with the latest financial news and events that may impact the market, available <a href="https://www.ft.com/" target="_blank" rel="noreferrer">here</a></li>
   <li>Bloomberg: A reliable resource for learning finance fundamentals, available <a href="https://www.bloomberg.com/professional/products/bloomberg-terminal/education/certificate-courses/#overview" target="_blank" rel="noreferrer">here</a></li>
   </ul></div></div>
   <div class="video-row"><div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/-tZ58TARrwQ" title="Video resource" allowfullscreen loading="lazy"></iframe></div><div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/84Up9kFVl4A" title="Video resource" allowfullscreen loading="lazy"></iframe></div><div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/oo5RRP5AV7A" title="Video resource" allowfullscreen loading="lazy"></iframe></div></div>
   <h2>Additional readings</h2>
   <ul>
   <li>Python for Finance professionals, Ned Krastev: A summary of financial concepts and theories commonly applied in Python for finance, available <a href="https://365datascience.com/resources-center/course-notes/python-for-finance/" target="_blank" rel="noreferrer">here</a></li>
   <li>Python for Finance, Yves Hilpisch: A resource for mastering data-driven finance, offering advanced insights into concepts covered in courses, available <a href="https://home.tpq.io/books/py4fi/" target="_blank" rel="noreferrer">here</a></li>
   <li>Financial Theory with Python, Yves Hilpisch: A guide to the finance theory using Python, available <a href="https://home.tpq.io/books/ftwp/" target="_blank" rel="noreferrer">here</a></li>
   <li>May Contain Lies: How Stories, Statistics and Studies Exploit Our Biases, Alex Edmans: An excellent resource that provides methodology for conducting analyses, though not directly related to the course, available <a href="https://www.amazon.com/May-Contain-Lies-Stories-Statistics/dp/0241630169" target="_blank" rel="noreferrer">here</a></li>
   </ul>
   ` },
       ],
     },
   ];
   
   export const COPYRIGHT_NOTICE =
     "All content on this website, including courses, texts, videos, graphics, and other elements, is protected by French and international intellectual property laws. Any reproduction, distribution, modification, or reuse of the content, in whole or in part, without prior written consent from the owner is strictly prohibited.";