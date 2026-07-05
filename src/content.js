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
       link: { label: "eva-s-cheng.github.io", url: "https://eva-s-cheng.com/" },
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
       satisfaction: "91%",
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
         { slug: "session-1", label: "Session 1", title: "Introduction to Python for Finance", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>This class aims to help you understand how Python can enhance your efficiency in finance-related activities. The course will present various use cases in Corporate Finance and Market Finance. You will learn about:</p>
<ul>
<li>The basics of Python programming</li>
<li>Data analytics and visualization</li>
<li>Financial analysis and corporate finance using Python</li>
<li>The application of Python in quantitative finance and asset management</li>
</ul>
<p>This session aims to introduce you to the fundamentals of Python programming and guide you through the process of writing code step by step. It will cover:</p>
<ul>
<li>How to obtain input from the user</li>
<li>How to use conditional statements</li>
<li>How to display results</li>
<li>How to utilize loops and functions</li>
</ul></div>
<h2 id="I---What-is-Python-?">I - What is Python ?</h2>
<p>Python is an<code>object-oriented</code> programming language deveopped by Guido van Rossum and released in 1991. It is widely used in finance due to its:</p>
<ul>
<li>Ease of use and high readability</li>
<li>Extensive libraries and frameworks</li>
<li>Similarity to mathematical syntax</li>
<li>Ability to analyze large datasets</li>
</ul>
<p>The execution of a Python program is linear, meaning the code is executed step by step in the order of each statement. In this context, every variable must be pre-defined, although they can be redefined as needed.</p>
<h2 id="II---First-lines-of-code-in-Python">II - First lines of code in Python</h2>
<p>Python is a programming language, and the software you use to write and execute your code is known as an Integrated Development Environment (IDE). You can choose from various tools to write your code, such as Spyder, Jupyter, PyCharm, Visual Studio Code, and others. In this class, we will primarily use Jupyter and PyCharm.</p>
<p>The first line of code you will learn is one of the simplest and most commonly used examples to illustrate basic syntax: having the computer display "Hello, World!"</p>
<div class="nb-code"><pre><span></span><span class="c1"># Lines of comments are preceded by a hash, they help you and the person who is reading your code to better understand </span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Hello, World!"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Hello, World!</pre></details>
<p>Each time a code is executed, a portion of the computer's memory is allocated to Python. In this context, you can create a variable or an object to store data in that allocated memory.</p>
<div class="nb-code"><pre><span></span><span class="c1"># It is important to use a relevant name for your variables </span>
<span class="n">var</span> <span class="o">=</span> <span class="mi">5</span> 
<span class="c1"># Several strings can be concatenated into one </span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"var = "</span><span class="p">,</span><span class="n">var</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>var =  5</pre></details>
<p>Mathematical and logical operations can be performed on variables using operands such as addition, subtraction, multiplication, and division.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Variables</span>
<span class="n">x</span> <span class="o">=</span> <span class="mi">2</span>
<span class="n">y</span> <span class="o">=</span> <span class="mi">3</span>
<span class="n">z</span> <span class="o">=</span> <span class="n">x</span> <span class="o">+</span> <span class="n">y</span>

<span class="c1"># Displays</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"z = "</span><span class="p">,</span> <span class="n">z</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"x + y = "</span><span class="p">,</span> <span class="n">x</span> <span class="o">+</span> <span class="n">y</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"x - y = "</span><span class="p">,</span> <span class="n">x</span> <span class="o">-</span> <span class="n">y</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>z =  5
x + y =  5
x - y =  -1</pre></details>
<p>To make your code more understandable, it is essential to use relevant and descriptive names for your variables. Variable names cannot start with a number and may only contain letters, numbers, and underscores (no spaces). There are several types of variables, not just integers or numbers. The most common types include:</p>
<ul>
<li>Text : str (stands for string)</li>
<li>Numbers : int, float and complex (Integer, Float &amp; Complex)</li>
<li>Sequence type : list, tuple, range</li>
<li>Mapping : dict (Dictionnary)</li>
<li>Boolean : Bool</li>
<li>Objects : Obj</li>
</ul>
<h2 id="III---Conditionnal-statements-in-Python">III - Conditionnal statements in Python</h2>
<p>Conditional statements are used to control the flow of a program based on specific conditions, allowing a piece of code to execute if the statement evaluates to true. In finance, for instance, they can be used to determine whether to buy or sell a stock based on its price.</p>
<div class="nb-code"><pre><span></span><span class="c1"># An investor is taking a long poisition (the investor buys the stock with the expectation that its price will increase)</span>
<span class="n">initial_price</span> <span class="o">=</span> <span class="mi">100</span>
<span class="n">threshold_profit</span> <span class="o">=</span> <span class="mf">0.15</span>      <span class="c1"># The % at which the investor accepts to take the profit</span>
<span class="n">threshold_loss</span> <span class="o">=</span> <span class="mf">0.05</span>        <span class="c1"># The percentage at which the investor accepts the loss</span>

<span class="c1"># Stop loss and take profit</span>
<span class="n">long_sl</span> <span class="o">=</span> <span class="mi">100</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="n">threshold_loss</span><span class="p">)</span>      <span class="c1"># The price at which the stock will be sold at a loss (to avoid future losses)</span>
<span class="n">long_tp</span> <span class="o">=</span> <span class="mi">100</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">threshold_profit</span><span class="p">)</span>    <span class="c1"># The price at which the stock will be sold at a profit</span></pre></div>
<p>In this section, we will also introduce how to obtain input from the user. Each time the following lines of code are executed, the input variable is redefined by the user. You will also notice that the previous variables are stored in the computer's memory.</p>
<div class="nb-code"><pre><span></span><span class="n">market_price</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Enter a market price : "</span><span class="p">)</span>       <span class="c1"># Getting an input from the user (The type of variable is a string)</span>
<span class="n">market_price</span> <span class="o">=</span> <span class="nb">float</span><span class="p">(</span><span class="n">market_price</span><span class="p">)</span>                    <span class="c1"># Converting into a number</span>
<span class="k">if</span> <span class="n">market_price</span> <span class="o">&gt;</span> <span class="n">long_tp</span> <span class="p">:</span>                           <span class="c1"># If the price is higher than the Take profit limit</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The investor sells the stock at the price : "</span><span class="p">,</span> <span class="n">market_price</span><span class="p">)</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The profit is = "</span><span class="p">,</span> <span class="n">market_price</span> <span class="o">-</span> <span class="n">initial_price</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">market_price</span> <span class="o">&lt;</span> <span class="n">long_sl</span> <span class="p">:</span>                         <span class="c1"># If the first condition is not met then, if this one is met (else if)</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The investor sells the stock at the price : "</span><span class="p">,</span> <span class="n">market_price</span><span class="p">)</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The loss is = "</span><span class="p">,</span> <span class="n">market_price</span> <span class="o">-</span> <span class="n">initial_price</span><span class="p">)</span>
<span class="k">else</span> <span class="p">:</span>                                                <span class="c1"># Every other cases</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The investor keeps a long position"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Enter a market price : 120
The investor sells the stock at the price :  120.0
The profit is =  20.0</pre></details>
<p>As you may have noticed, some statements are preceded by indentations. Statements that share the same level of indentation belong to the same block, indicating that they should be executed together.</p>
<aside class="nb-exercise"><span class="nb-ex-tag">Blitz exercise</span><h3>Blitz Exercise (15 min) : Automated traditing with a long position</h3><p>Using the same process as described earlier, generate the orders for an investor who holds a short position on a stock sold at $95, with a threshold set at 13%. You will have 15 minutes to complete this exercise.</p></aside><h2 id="IV---Loops">IV - Loops</h2><p>Loops are used when you need to repeat a statement or a block of statements multiple times, such as when working with lists, strings, or datasets. There are two basic types of loops:</p>
<ul>
<li>"For" loops used when the number of iteration is known</li>
<li>"While" loops that are used when the number of iteration is not known</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># Creation of a list </span>
<span class="n">list_of_number</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="mi">20</span><span class="p">))</span>      <span class="c1"># Automatically generate a sequence of 20 numbers</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"List 1 : "</span><span class="p">,</span> <span class="n">list_of_number</span><span class="p">)</span>                 <span class="c1"># You will notice that the range starts from 0 and stops at n - 1</span>

<span class="n">new_list</span> <span class="o">=</span> <span class="p">[]</span>
<span class="c1"># For loop, multiply all element by 2</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_of_number</span><span class="p">))</span> <span class="p">:</span>       <span class="c1"># By convention, we use i, j, k, l, m. The len function returns the length of a list</span>
    <span class="c1"># The for loop, in this case always goes from 0 to the number set as "range parameter" - 1</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"i = "</span><span class="p">,</span> <span class="n">i</span><span class="p">)</span>
    <span class="n">new_list</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">list_of_number</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span>  <span class="c1"># Adding elements to the list "new_list", element at index i</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"List 2 : "</span><span class="p">,</span> <span class="n">new_list</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>List 1 :  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
i =  0
i =  1
i =  2
i =  3
i =  4
i =  5
i =  6
i =  7
i =  8
i =  9
i =  10
i =  11
i =  12
i =  13
i =  14
i =  15
i =  16
i =  17
i =  18
i =  19
List 2 :  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Live coding the equivalent with another synthax</span>
<span class="n">new_list</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">e</span> <span class="ow">in</span> <span class="n">list_of_number</span> <span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"i = "</span><span class="p">,</span> <span class="n">e</span><span class="p">)</span>
    <span class="n">new_list</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">e</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"List 2 : "</span><span class="p">,</span> <span class="n">new_list</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>i =  0
i =  1
i =  2
i =  3
i =  4
i =  5
i =  6
i =  7
i =  8
i =  9
i =  10
i =  11
i =  12
i =  13
i =  14
i =  15
i =  16
i =  17
i =  18
i =  19
List 2 :  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]</pre></details>
<p>While "For" loops are used to repeat a group of statements for a known number of iterations, "While" loops are typically employed to repeat blocks of statements for an unknown number of iterations. For example, they can be used to search for an item in a list.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We generate 100 random numbers from 1 to 100 </span>
<span class="kn">import</span> <span class="nn">random</span>                         <span class="c1"># Import the library</span>
<span class="n">random_numbers</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">100</span><span class="p">):</span>                  <span class="c1"># Execute the code 100 times          </span>
    <span class="n">n</span> <span class="o">=</span> <span class="n">random</span><span class="o">.</span> <span class="n">randint</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span><span class="mi">100</span><span class="p">)</span>        <span class="c1"># Generate a random number from 1 to 100</span>
    <span class="n">random_numbers</span><span class="o">.</span> <span class="n">append</span><span class="p">(</span><span class="n">n</span><span class="p">)</span>

<span class="c1"># Then we try to find the first occurrence of the number 5</span>
<span class="n">iterator</span> <span class="o">=</span> <span class="mi">0</span>                          <span class="c1"># It is important to set a starting value for the iterator</span>
<span class="n">i</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">while</span> <span class="n">iterator</span> <span class="o">!=</span> <span class="mi">5</span> <span class="p">:</span>                 <span class="c1"># Not equal to</span>
    <span class="k">if</span> <span class="n">i</span> <span class="o">&gt;=</span> <span class="nb">len</span><span class="p">(</span><span class="n">random_numbers</span><span class="p">):</span>      <span class="c1"># If i is bigger than the length of the list, then we did not find the variable</span>
        <span class="nb">print</span><span class="p">(</span><span class="s2">"Number 5 not found !"</span><span class="p">)</span>
        <span class="k">break</span>                         <span class="c1"># Exit the loop</span>
    <span class="n">iterator</span> <span class="o">=</span> <span class="n">random_numbers</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
    <span class="k">if</span> <span class="n">iterator</span> <span class="o">==</span> <span class="mi">5</span> <span class="p">:</span>                <span class="c1"># Double = for comparison</span>
        <span class="nb">print</span><span class="p">(</span><span class="s2">"Number 5 found ! It is the "</span><span class="p">,</span> <span class="n">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span><span class="s2">"th number"</span><span class="p">)</span>
    <span class="n">i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">+</span> <span class="mi">1</span>                         <span class="c1"># DO NOT FORGET to increment the i, otherwise it will create an infinite loop</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\\n</span><span class="s2">"</span><span class="p">)</span>                           <span class="c1"># Line break</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"List : "</span><span class="p">,</span> <span class="n">random_numbers</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Number 5 found ! It is the  97 th number


List :  [81, 39, 22, 1, 29, 84, 21, 71, 76, 43, 81, 41, 52, 64, 6, 12, 80, 34, 33, 95, 30, 96, 79, 89, 92, 8, 3, 21, 7, 56, 64, 11, 75, 44, 81, 23, 85, 66, 27, 19, 92, 48, 91, 8, 72, 43, 18, 77, 88, 6, 45, 34, 67, 79, 2, 86, 47, 99, 4, 96, 92, 2, 10, 41, 20, 99, 29, 19, 60, 77, 90, 72, 58, 69, 36, 30, 64, 34, 15, 100, 33, 98, 32, 73, 50, 17, 66, 89, 60, 15, 44, 54, 36, 20, 96, 9, 5, 48, 91, 72]</pre></details>
<h2 id="V---Functions">V - Functions</h2><p>To avoid repeating the same lines of code multiple times, you can use functions to enhance code readability and improve understanding. However, functions should be used judiciously.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Every function is preceded by the "def" key word</span>
<span class="k">def</span> <span class="nf">say_hello</span><span class="p">():</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"Hello World!"</span><span class="p">)</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Everytime the function is called, the statement block inside the function is executed</span>
<span class="n">say_hello</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Hello World!</pre></details>
<p>Variables defined inside a function are limited to the scope of that function (passed by value). It is possible to pass information as arguments, which are specified within the parentheses, with multiple arguments separated by commas.</p>
<div class="nb-code"><pre><span></span><span class="k">def</span> <span class="nf">double</span><span class="p">(</span><span class="n">a</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"2 x "</span><span class="p">,</span> <span class="n">a</span><span class="p">,</span> <span class="s2">" = "</span><span class="p">,</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">)</span>

<span class="c1"># Testing the function</span>
<span class="n">double</span><span class="p">(</span><span class="mi">12</span><span class="p">)</span>
<span class="n">double</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>2 x  12  =  24
2 x  5  =  10</pre></details>
<p>You can pass information as arguments to a function, and it is also possible to obtain a result from the function and store it in another variable outside of the function.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the return of a stock </span>
<span class="k">def</span> <span class="nf">calculate_return</span><span class="p">(</span><span class="n">final_price</span><span class="p">,</span> <span class="n">initial_price</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">final_price</span><span class="o">/</span><span class="n">initial_price</span> <span class="o">-</span> <span class="mi">1</span>

<span class="n">return_stock</span> <span class="o">=</span> <span class="n">calculate_return</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">9</span><span class="p">)</span>                   <span class="c1"># Calling the function and storing into a variable</span>
<span class="n">return_stock</span> <span class="o">=</span> <span class="nb">round</span><span class="p">(</span><span class="n">return_stock</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>                    <span class="c1"># Round to 4 decimals</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Return = "</span><span class="p">,</span> <span class="n">return_stock</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"%"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Return =  11.1 %</pre></details>
<p>As previously mentionned, variables are <code>passed by value</code>, and the operations performed inside the function are only valid within that function. If the result of the function is not stored, it will not be retained in memory.</p>
<div class="nb-code"><pre><span></span><span class="k">def</span> <span class="nf">add_five</span><span class="p">(</span><span class="n">number</span><span class="p">):</span>
    <span class="n">number</span> <span class="o">=</span> <span class="n">number</span> <span class="o">+</span> <span class="mi">5</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The number inside the function : "</span><span class="p">,</span> <span class="n">number</span><span class="p">)</span>

<span class="n">number</span> <span class="o">=</span> <span class="mi">15</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Number before function : "</span><span class="p">,</span> <span class="n">number</span><span class="p">)</span>
<span class="n">add_five</span><span class="p">(</span><span class="n">number</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The number after the function : "</span><span class="p">,</span> <span class="n">number</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Number before function :  15
The number inside the function :  20
The number after the function :  15</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># We define a function to see whether a buy order or a sell order is executed</span>
<span class="k">def</span> <span class="nf">calculate_profit_trading_strategy</span><span class="p">(</span><span class="n">initial_price</span><span class="p">,</span> <span class="n">market_price</span><span class="p">,</span> <span class="n">threshold_loss</span><span class="p">,</span> <span class="n">threshold_profit</span><span class="p">,</span> <span class="n">strategy</span><span class="p">):</span>
    <span class="n">profit</span> <span class="o">=</span> <span class="mi">0</span>                     <span class="c1"># Setting a default value for the profit, if no order is excuted the profit  </span>
    <span class="k">if</span> <span class="n">strategy</span> <span class="o">==</span> <span class="s2">"long"</span> <span class="p">:</span>        <span class="c1"># If the trading strategy is a long then execute the following statements</span>
        <span class="n">stop_loss</span> <span class="o">=</span> <span class="n">initial_price</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="n">threshold_loss</span><span class="p">)</span>     
        <span class="n">take_profit</span> <span class="o">=</span> <span class="n">initial_price</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">threshold_profit</span><span class="p">)</span>            <span class="c1"># Strategy is profitable when the price is higher</span>
        <span class="k">if</span> <span class="p">(</span><span class="n">market_price</span> <span class="o">&lt;</span> <span class="n">stop_loss</span><span class="p">)</span> <span class="ow">or</span> <span class="p">(</span><span class="n">market_price</span> <span class="o">&gt;</span> <span class="n">take_profit</span><span class="p">)</span> <span class="p">:</span> <span class="c1"># When the market price has reached a certain level</span>
            <span class="n">profit</span> <span class="o">=</span> <span class="n">market_price</span> <span class="o">-</span> <span class="n">initial_price</span>                       <span class="c1"># revenue - cost : the stock is bought at initial_price and sold at market_price</span>
    <span class="k">elif</span> <span class="n">strategy</span> <span class="o">==</span> <span class="s2">"short"</span> <span class="p">:</span>     <span class="c1"># If the strategy is not equal to "long" but is equal to "short", execute the following statements</span>
        <span class="n">stop_loss</span> <span class="o">=</span> <span class="n">initial_price</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">threshold_loss</span><span class="p">)</span>     
        <span class="n">take_profit</span> <span class="o">=</span> <span class="n">initial_price</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="n">threshold_profit</span><span class="p">)</span>              <span class="c1"># Strategy is profitable when the price is lower</span>
        <span class="k">if</span> <span class="p">(</span><span class="n">market_price</span> <span class="o">&gt;</span> <span class="n">stop_loss</span><span class="p">)</span> <span class="ow">or</span> <span class="p">(</span><span class="n">market_price</span> <span class="o">&lt;</span> <span class="n">take_profit</span><span class="p">)</span> <span class="p">:</span> <span class="c1"># When the market price has reached a certain level, outside the range</span>
            <span class="n">profit</span> <span class="o">=</span> <span class="n">initial_price</span> <span class="o">-</span> <span class="n">market_price</span>                       <span class="c1"># revenue - cost : the stock is sold at initial_price and bought at market_price</span>
    <span class="k">else</span> <span class="p">:</span>                         <span class="c1"># If the strategy is neither long or short, basically in every other cases</span>
        <span class="nb">print</span><span class="p">(</span><span class="s2">"Strategy incorrect"</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">profit</span>                  <span class="c1"># return the value of the profit outside the function</span>

<span class="c1"># Create examples</span>
<span class="n">initial_price_1</span> <span class="o">=</span> <span class="mi">100</span>
<span class="n">market_price_1</span> <span class="o">=</span> <span class="mi">90</span>
<span class="n">threshold_loss_1</span> <span class="o">=</span> <span class="mf">0.05</span>
<span class="n">threshold_profit_1</span> <span class="o">=</span> <span class="mf">0.15</span>

<span class="c1"># Calling functions</span>
<span class="n">long_profit_1</span> <span class="o">=</span> <span class="n">calculate_profit_trading_strategy</span><span class="p">(</span><span class="n">initial_price_1</span><span class="p">,</span> <span class="n">market_price_1</span><span class="p">,</span> <span class="n">threshold_loss_1</span><span class="p">,</span> <span class="n">threshold_profit_1</span><span class="p">,</span> <span class="s2">"long"</span><span class="p">)</span>
<span class="n">short_profit_1</span> <span class="o">=</span> <span class="n">calculate_profit_trading_strategy</span><span class="p">(</span><span class="n">initial_price_1</span><span class="p">,</span> <span class="n">market_price_1</span><span class="p">,</span> <span class="n">threshold_loss_1</span><span class="p">,</span> <span class="n">threshold_profit_1</span><span class="p">,</span> <span class="s2">"short"</span><span class="p">)</span>

<span class="c1"># Showing the results</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"1) Long strategy on a stock initially priced"</span><span class="p">,</span> <span class="n">initial_price_1</span><span class="p">,</span> <span class="s2">" for which the market price is "</span><span class="p">,</span> <span class="n">market_price_1</span><span class="p">,</span> <span class="s2">" which threshold profit "</span><span class="p">,</span>
      <span class="n">threshold_profit_1</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"</span><span class="si">% a</span><span class="s2">nd threshold loss "</span><span class="p">,</span> <span class="n">threshold_loss_1</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"%, has a profit of "</span><span class="p">,</span> <span class="n">long_profit_1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"2) Short strategy on a stock initially priced"</span><span class="p">,</span> <span class="n">initial_price_1</span><span class="p">,</span> <span class="s2">" for which the market price is "</span><span class="p">,</span> <span class="n">market_price_1</span><span class="p">,</span> <span class="s2">" which threshold profit "</span><span class="p">,</span>
      <span class="n">threshold_profit_1</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"</span><span class="si">% a</span><span class="s2">nd threshold loss "</span><span class="p">,</span> <span class="n">threshold_loss_1</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"%, has a profit of "</span><span class="p">,</span> <span class="n">short_profit_1</span><span class="p">)</span>

<span class="c1"># Create examples</span>
<span class="n">initial_price_2</span> <span class="o">=</span> <span class="mi">110</span>
<span class="n">market_price_2</span> <span class="o">=</span> <span class="mi">130</span>
<span class="n">threshold_loss_2</span> <span class="o">=</span> <span class="mf">0.03</span>
<span class="n">threshold_profit_2</span> <span class="o">=</span> <span class="mf">0.11</span>

<span class="c1"># Calling functions</span>
<span class="n">long_profit_2</span> <span class="o">=</span> <span class="n">calculate_profit_trading_strategy</span><span class="p">(</span><span class="n">initial_price_2</span><span class="p">,</span> <span class="n">market_price_2</span><span class="p">,</span> <span class="n">threshold_loss_2</span><span class="p">,</span> <span class="n">threshold_profit_2</span><span class="p">,</span> <span class="s2">"long"</span><span class="p">)</span>
<span class="n">short_profit_2</span> <span class="o">=</span> <span class="n">calculate_profit_trading_strategy</span><span class="p">(</span><span class="n">initial_price_2</span><span class="p">,</span> <span class="n">market_price_2</span><span class="p">,</span> <span class="n">threshold_loss_2</span><span class="p">,</span> <span class="n">threshold_profit_2</span><span class="p">,</span> <span class="s2">"short"</span><span class="p">)</span>

<span class="c1"># Showing the results</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"3) Long strategy on a stock initially priced"</span><span class="p">,</span> <span class="n">initial_price_2</span><span class="p">,</span> <span class="s2">" for which the market price is "</span><span class="p">,</span> <span class="n">market_price_2</span><span class="p">,</span> <span class="s2">" which threshold profit "</span><span class="p">,</span>
      <span class="n">threshold_profit_2</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"</span><span class="si">% a</span><span class="s2">nd threshold loss "</span><span class="p">,</span> <span class="n">threshold_loss_2</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"%, has a profit of "</span><span class="p">,</span> <span class="n">long_profit_2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"4) Short strategy on a stock initially priced"</span><span class="p">,</span> <span class="n">initial_price_1</span><span class="p">,</span> <span class="s2">" for which the market price is "</span><span class="p">,</span> <span class="n">market_price_2</span><span class="p">,</span> <span class="s2">" which threshold profit "</span><span class="p">,</span>
      <span class="n">threshold_profit_2</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"</span><span class="si">% a</span><span class="s2">nd threshold loss "</span><span class="p">,</span> <span class="n">threshold_loss_2</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"%, has a profit of "</span><span class="p">,</span> <span class="n">short_profit_2</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>1) Long strategy on a stock initially priced 100  for which the market price is  90  which threshold profit  15.0 % and threshold loss  5.0 %, has a profit of  -10
2) Short strategy on a stock initially priced 100  for which the market price is  90  which threshold profit  15.0 % and threshold loss  5.0 %, has a profit of  0
3) Long strategy on a stock initially priced 110  for which the market price is  130  which threshold profit  11.0 % and threshold loss  3.0 %, has a profit of  20
4) Short strategy on a stock initially priced 100  for which the market price is  130  which threshold profit  11.0 % and threshold loss  3.0 %, has a profit of  -20</pre></details>
<aside class="nb-exercise"><span class="nb-ex-tag">Assignment</span><h3>Assignment : Writing functions used in financial analysis</h3><p>Write a program in Jupyter that calculates the current ratio, return on assets (ROA), and internal rate of return (IRR) using a list of cash flows. Include three examples to illustrate the formulas. Please send the code to the email: eva.cheng@audencia.com</p></aside>` },
         { slug: "session-2", label: "Session 2", title: "Advanced basics of Python for Finance", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>This session aims to make you as autonomous as possible while writing programs in Python. It will help you understand:</p>
<ul>
<li>The principles of object-oriented programming</li>
<li>How to identify recurring errors and debug code</li>
<li>How to install packages and libraries</li>
</ul></div>
<h2 id="I---Principles-of-object-oriented-programming">I - Principles of object oriented programming</h2><p>To store information, a computer can use either variables or objects. Variables can include integers, strings, floats, and complex numbers, while objects encompass data structures such as dataframes and lists. In this section, you will learn about the specifics of objects and how to create them.</p>
<p>An object is an instance (or element) of a specific class. A class is a particular data structure that can be user-defined or pre-defined through Python packages. The class defines the nature of an object with:</p>
<ul>
<li>Values for state (attributes or variables)</li>
<li>Behaviors (methods)</li>
</ul>
<p>As a simple example, at school :</p>
<ul>
<li><code>Student</code> would be a class.</li>
<li>Each individual student would be an instance or element of that class.</li>
<li>Attributes might include name, gender, age, major, grades, and classes.</li>
<li>Methods could include actions like receiving a grade, enrolling in a class, walking, or interacting with other students.</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># An example of how we define a class in Python </span>
<span class="k">class</span> <span class="nc">Vehicle</span> <span class="p">:</span>
    <span class="k">def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">brand</span><span class="p">,</span> <span class="n">model</span><span class="p">,</span> <span class="n">color</span><span class="p">,</span> <span class="n">passengers</span><span class="p">,</span> <span class="n">speed</span><span class="p">):</span> <span class="c1"># A vehicle is defined by brand, model, color, passengers, speed</span>
        <span class="bp">self</span><span class="o">.</span><span class="n">brand</span> <span class="o">=</span> <span class="n">brand</span>                                      <span class="c1"># Brand of the object (represented as "self") = value of brand</span>
        <span class="bp">self</span><span class="o">.</span><span class="n">model</span> <span class="o">=</span> <span class="n">model</span>  
        <span class="bp">self</span><span class="o">.</span><span class="n">color</span> <span class="o">=</span> <span class="n">color</span>  
        <span class="bp">self</span><span class="o">.</span><span class="n">passengers</span> <span class="o">=</span> <span class="n">passengers</span>  
        <span class="bp">self</span><span class="o">.</span><span class="n">speed</span> <span class="o">=</span> <span class="n">speed</span>  
        
    <span class="k">def</span> <span class="nf">accelerate</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>                                       <span class="c1"># Adding a method (behavior), a vehicle can accelerate</span>
        <span class="bp">self</span><span class="o">.</span><span class="n">speed</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">speed</span> <span class="o">+</span> <span class="mi">10</span>
        <span class="nb">print</span><span class="p">(</span><span class="s2">"The vehicle is going 10 km/h faster"</span><span class="p">)</span>

    <span class="k">def</span> <span class="nf">add_passengers</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">number</span><span class="p">):</span>                           <span class="c1"># Passengers can get off and get on a vehicle</span>
        <span class="bp">self</span><span class="o">.</span><span class="n">passengers</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">passengers</span> <span class="o">+</span> <span class="n">number</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">number</span><span class="p">,</span> <span class="s2">"new passenger(s) got on the vehicle"</span><span class="p">)</span>
        
    <span class="k">def</span> <span class="nf">get_info</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="nb">print</span><span class="p">(</span><span class="s2">"The vehicle is a"</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">color</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">model</span><span class="p">,</span> <span class="s2">"from"</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">brand</span><span class="p">,</span> 
              <span class="s2">"with"</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">passengers</span><span class="p">,</span> <span class="s2">"passengers and going "</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">speed</span><span class="p">,</span> <span class="s2">"km/h"</span><span class="p">)</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Testing the class</span>
<span class="n">bmwv_car</span> <span class="o">=</span> <span class="n">Vehicle</span><span class="p">(</span><span class="s2">"BMW"</span><span class="p">,</span> <span class="s2">"Model 4"</span><span class="p">,</span> <span class="s2">"Blue"</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">120</span><span class="p">)</span>
<span class="n">bmwv_car</span><span class="o">.</span><span class="n">get_info</span><span class="p">()</span>
<span class="n">bmwv_car</span><span class="o">.</span><span class="n">accelerate</span><span class="p">()</span>
<span class="n">bmwv_car</span><span class="o">.</span><span class="n">add_passengers</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="n">bmwv_car</span><span class="o">.</span><span class="n">get_info</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The vehicle is a Blue Model 4 from BMW with 4 passengers and going  120 km/h
The vehicle is going 10 km/h faster
1 new passenger(s) got on the vehicle
The vehicle is a Blue Model 4 from BMW with 5 passengers and going  130 km/h</pre></details>
<p>As you may have noticed, whenever we refer to a class method, the method is preceded by the name of the object, followed by a period, and then the parentheses that indicate we are calling a function. Each attribute of the object is preceded by the name of the object and a period only.</p>
<p>The major difference between variables and objects is that objects are references, while variables hold values in functions. In other words:</p>
<div class="nb-code"><pre><span></span><span class="c1"># Example with variables</span>
<span class="n">x</span> <span class="o">=</span> <span class="mi">10</span>
<span class="n">y</span> <span class="o">=</span> <span class="n">x</span>
<span class="n">y</span> <span class="o">=</span> <span class="mi">15</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">"Value of x :"</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="s2">"&amp; Value of y :"</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span>

<span class="c1"># Example with objects</span>
<span class="n">tesla_car</span> <span class="o">=</span> <span class="n">Vehicle</span><span class="p">(</span><span class="s2">"Tesla"</span><span class="p">,</span> <span class="s2">"Model X"</span><span class="p">,</span> <span class="s2">"Black"</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">100</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Initial of the car's speed value :"</span><span class="p">,</span> <span class="n">tesla_car</span><span class="o">.</span><span class="n">speed</span><span class="p">)</span>
<span class="n">another_tesla</span> <span class="o">=</span> <span class="n">tesla_car</span>
<span class="n">another_tesla</span><span class="o">.</span><span class="n">speed</span> <span class="o">=</span> <span class="mi">80</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Value of speed of first Tesla :"</span><span class="p">,</span> <span class="n">tesla_car</span><span class="o">.</span><span class="n">speed</span><span class="p">,</span> <span class="s2">"&amp; Value of speed of second Tesla :"</span><span class="p">,</span> <span class="n">another_tesla</span><span class="o">.</span><span class="n">speed</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Value of x : 10 & Value of y : 15
Initial of the car's speed value : 100
Value of speed of first Tesla : 80 & Value of speed of second Tesla : 80</pre></details>
<p>Therefore, it is crucial to understand that when an object is mentioned, we are referring to a reference in the computer's memory. This statement applies equally to user-defined objects and to those that already exist in Python, such as lists, dataframes, series, and arrays.</p>
<p>Different levels of encapsulation exist in object-oriented programming (which will not be covered in this class). In the example above, all elements were public. However, for advanced Python programming, developers need to understand the distinctions between the different levels of encapsulation:</p>
<ul>
<li><code>Private</code>: Private methods and attributes are preceded by <code>__</code>, and their access is restricted to the class level only (these attributes and methods cannot be called outside the class).</li>
<li><code>Protected</code>: Protected methods and attributes are preceded by <code>_</code>, and their access is restricted to the class and its subclasses only (this relates to inheritance, which is not covered in this class).</li>
<li><code>Public</code>: Public methods and attributes can be accessed from outside the class.</li>
</ul>
<h2 id="II---Installing-packages">II - Installing packages</h2><p>Existing objects in Python typically come from packages or libraries that often require installation before use. The main packages commonly used for finance include:</p>
<ul>
<li><code>pandas</code> : For data manipulation</li>
<li><code>numpy</code> : Supports large multi-dimensional arrays and high-level mathematical operations</li>
<li><code>matplotlib</code> and <code>seaborn</code> : For visualization</li>
<li><code>statsmodels</code> : Provides statistical tools</li>
<li><code>scipy</code> : Primarily used for scientific computing, including linear algebra, optimization, and integration</li>
</ul>
<p>These packages are usually installed via the Anaconda Prompt in the Anaconda environment or through the command line with the statement <code>pip install [name of package]</code></p>
<div class="nb-code"><pre><span></span><span class="c1"># Before using the module / package, the package needs to be imported with the following statement</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>                 <span class="c1"># pd is the convetionnal shortname for pandas</span></pre></div>
<p>They can also be installed manually through the IDE directly. You can view the packages that are already installed by using the <code>pip list</code> command in the prompt.</p>
<h2 id="III---Recurrent-errors">III - Recurrent errors</h2><p>As you begin learning Python, it is important to become more independent and self-sufficient when writing programs. Errors are often indicators of whether the code is correct. If there are issues, the computer will typically either: not produce the expected result, generate an error or a bug, or cause the program to crash.</p>
<p>There are common errors that can lead to bugs (where no result is generated):</p>
<ul>
<li>Syntax Error: Occurs when the interpreter encounters lines of code that do not adhere to syntax rules (e.g., unclosed strings, missing commas, misspelled keywords, missing parentheses, etc.)</li>
<li>Indentation Error: Occurs when the spacing used for a nested block is incorrect.</li>
<li>Name Error: Commonly occurs when referring to a variable that has not been defined previously.</li>
<li>Value Error: Occurs when the data type passed as an argument to a function is correct, but the value is invalid.</li>
<li>Type Error: Happens when an invalid data type is used for certain operations or when the variable passed as an argument to a function does not have the correct data type.</li>
<li>Zero Division Error: Occurs when the program attempts to divide a number by zero.</li>
<li>File Not Found Error: Occurs when trying to read a file that cannot be found in the directory (usually due to a missing file or a misspelled file name).</li>
<li>Module Not Found Error: Occurs when the module being imported is not recognized by the computer (due to misspelling, the package not being installed, or the module not existing).</li>
<li>Memory Error: Typically arises when performing large operations and the system runs out of RAM.</li>
<li>Index Error: Occurs when trying to access an index in a sequence (such as a list, dataframe, or array) that is outside the valid range (remember that indices start from 0 up to the length of the list minus one).</li>
<li>Permission Error: Occurs when a user attempts to execute an operation without the required privileges.</li>
<li>Attribute Error: Occurs in object-oriented programming when trying to refer to an attribute or method of an object that is not defined.</li>
<li>Unbound Local Error: Occurs inside functions when referring to a name that is defined outside the function but not defined within it.</li>
</ul>
<p>PyCharm is a helpful tool for correcting common errors. There are various ways to debug code, and some websites can assist by allowing you to copy and paste error messages online:</p>
<ol>
<li>Stack Overflow: <a href="https://stackoverflow.com/">https://stackoverflow.com/</a></li>
<li>GeeksforGeeks: <a href="https://www.geeksforgeeks.org/">https://www.geeksforgeeks.org/</a></li>
<li>Python.org: <a href="https://discuss.python.org/">https://discuss.python.org/</a></li>
</ol>
<aside class="nb-exercise"><span class="nb-ex-tag">Assignment</span><h3>Assignment : Correct the following code</h3><p>In order to practice and enhance your independence with Python before delving into the more challenging finance section, you will be required to correct the following code. (Be careful ⚠️ The errors can either generate explicit error messages or produce incorrect results without any feedback from the Python interpreter. These errors may include logical or calculation mistakes, and you will need knowledge in areas beyond Python to successfully complete this exercise.)</p></aside><div class="nb-code"><pre><span></span><span class="c1"># Precisions : There will be syntax errors and logical errors (wrong calculations for example)</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>

<span class="sd">"""" ---------------- Part 1 : Simplified Real Estate Valuation ---------------- """</span>

<span class="c1"># Imagining you are investing in a real asset sold at price $250,0000 and annual revenue $10,000 and annual cost $7,500</span>
<span class="n">real</span> <span class="n">asset</span> <span class="o">=</span> <span class="mi">45000</span>
<span class="n">revenue</span> <span class="o">=</span> <span class="mi">10000</span>

<span class="c1"># The Annual Net Operating Income is the income generated each year with the revenue and the costs implied after the acquistion </span>
<span class="k">def</span> <span class="nf">calculate_NOI</span><span class="p">(</span><span class="n">revenue</span><span class="p">):</span>
    <span class="n">net_operating_income</span> <span class="o">=</span> <span class="n">cost</span> <span class="o">-</span> <span class="n">revenue</span>
<span class="k">return</span> <span class="n">revenue</span>

<span class="n">Afterwards</span><span class="p">,</span> <span class="n">we</span> <span class="n">can</span> <span class="n">calculate</span> <span class="n">the</span> <span class="n">capitalization</span> <span class="n">rate</span><span class="o">.</span> <span class="n">The</span> <span class="n">capitalization</span> <span class="n">rate</span> <span class="ow">is</span> <span class="n">basically</span> <span class="n">the</span> <span class="n">expected</span> <span class="k">return</span> <span class="n">on</span> <span class="n">real</span> <span class="n">assets</span>
<span class="k">def</span> <span class="nf">calculate_cap_rate</span><span class="p">(</span><span class="n">net_operating_income</span><span class="p">,</span> <span class="n">value</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">net_operating_income</span> <span class="o">/</span> <span class="n">value</span>

<span class="c1"># We can also calculate the investment payback period. It is by definition the time required to generate profit on investment</span>
<span class="n">get_payback_period</span><span class="p">(</span><span class="n">net_operating_income</span><span class="p">,</span> <span class="n">value</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">get_payback_period</span><span class="p">(</span><span class="n">net_operating_income</span><span class="p">,</span> <span class="n">value</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">value</span> <span class="o">/</span> <span class="n">net_operating</span> <span class="n">income</span>

<span class="c1"># Testing the formulas</span>
<span class="n">net_op_income</span> <span class="o">=</span> <span class="n">calculate_NOI</span><span class="p">(</span><span class="n">revenue</span><span class="p">,</span> <span class="n">cost</span><span class="p">)</span>
<span class="n">cap_rate</span> <span class="o">=</span> <span class="k">def</span> <span class="nf">calculate_cap_rate</span><span class="p">(</span><span class="n">net_operating_income</span><span class="p">,</span> <span class="n">real</span> <span class="n">asset</span><span class="p">)</span>
    <span class="n">payback_period</span> <span class="o">=</span> <span class="n">get_payback_period</span><span class="p">(</span><span class="n">net_op_income</span><span class="p">,</span> <span class="n">real</span> <span class="n">asset</span><span class="p">)</span>

<span class="c1"># Displaying the results </span>
<span class="nb">print</span><span class="p">(</span><span class="n">The</span> <span class="n">real</span> <span class="n">asset</span> <span class="n">that</span> <span class="n">inital</span> <span class="n">cost</span><span class="p">,</span> <span class="s2">"real asset"</span><span class="p">,</span> <span class="s2">"has a"</span><span class="p">,</span> <span class="n">payback_period</span><span class="p">,</span> 
      <span class="s2">"- year payback period and a cap rate of "</span><span class="p">,</span> <span class="n">cap_rate</span><span class="p">,</span> <span class="s2">"%"</span><span class="p">)</span>

<span class="sd">"""" ---------------- Part 2 : Simplfied Mortgage Payment ---------------- """</span>
<span class="c1"># A mortgage loan is defined by : a Home Price, a down payment (initial payment), a term, an interest rate. (without taxes)</span>
<span class="c1"># We are usually interested in knowing the paid interests and the total mortgage payment</span>
<span class="n">home_price</span> <span class="o">=</span> <span class="mi">450000</span>
<span class="n">term</span> <span class="o">=</span> <span class="mi">30</span> <span class="n">years</span>
<span class="n">initial_payment</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span><span class="mi">2</span>              <span class="c1"># 20% </span>

<span class="c1"># We let the user choose the interest rate</span>
<span class="nb">input</span><span class="p">(</span><span class="s2">"Please enter an interest rate : "</span><span class="p">)</span>

<span class="c1"># The principal is the amount of the loan (The home price - initial payment), n the number of payment per year (assume months)</span>
<span class="k">def</span> <span class="nf">calculate_periodic_payment</span><span class="p">(</span><span class="n">principal</span><span class="p">,</span> <span class="n">term</span><span class="p">,</span> <span class="n">interest_rate</span><span class="p">,</span> <span class="n">n</span><span class="p">):</span>
<span class="n">number_of_payment</span> <span class="o">=</span> <span class="n">n</span> <span class="o">*</span> <span class="n">principal</span>
    <span class="n">interest_rate_per_period</span> <span class="o">=</span> <span class="n">interest_rate</span> <span class="o">/</span> <span class="n">n</span>
    <span class="k">return</span> <span class="n">principal</span> <span class="o">*</span> <span class="n">interest_rate_per_period</span> <span class="o">/</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">interest_rate_per_period</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="o">-</span><span class="n">number_of_payment</span><span class="p">))</span>
<span class="c1"># The official formula is (P x (r/n))/(1 - (1 + r/n)^(-nt)) </span>
<span class="c1"># P : the principal, r the interest, n the number of month, t the term</span>

<span class="n">principal</span> <span class="o">=</span> <span class="n">home_price</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="n">initial_payment</span><span class="p">)</span>
<span class="n">periodic_payment</span> <span class="o">=</span> <span class="n">calculate_periodic_payment</span><span class="p">(</span><span class="n">principal</span><span class="p">,</span> <span class="n">term</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">12</span><span class="p">)</span>
<span class="c1"># We create the lists of the payments (the interests and the principal)</span>
<span class="n">number_of_period</span> <span class="o">=</span> <span class="mi">12</span> <span class="o">*</span> <span class="n">term</span>

<span class="n">interests</span> <span class="o">=</span> <span class="p">[]</span>
<span class="n">reimbursement_of_principal</span> <span class="o">=</span> <span class="p">[]</span>
<span class="n">remaining_capital</span> <span class="o">=</span> <span class="n">principal</span>
<span class="n">total_reimbursement</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">interest_per_period</span> <span class="o">=</span> <span class="n">interest_rate</span> <span class="o">/</span> <span class="mi">12</span>

<span class="c1"># We calculate the payments</span>
<span class="k">while</span> <span class="n">remaining_capital</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
    <span class="n">interest</span><span class="o">.</span><span class="n">add</span><span class="p">(</span><span class="n">remaining_capital</span> <span class="o">*</span> <span class="n">interest_per_period</span>
    <span class="n">reimbursement_of_principal</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">periodic_payment</span> <span class="o">-</span> <span class="n">interests</span><span class="p">[</span><span class="nb">len</span><span class="p">(</span><span class="n">interest</span><span class="p">)])</span> <span class="c1"># Last element of the list named interests</span>

<span class="c1"># Total interest</span>
<span class="n">paid_interests</span> <span class="o">=</span> <span class="nb">sum</span><span class="p">(</span><span class="n">interests</span><span class="p">)</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">"Total payment = "</span> <span class="n">paid_interests</span> <span class="o">+</span> <span class="n">principal</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Reimbursement : "</span><span class="p">,</span> <span class="n">reimbursement_of_principal</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Interests : "</span><span class="p">,</span> <span class="n">interests</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre><span class="ansi-cyan-intense-fg ansi-bold">  Cell </span><span class="ansi-green-intense-fg ansi-bold">In[17], line 7</span>
<span class="ansi-yellow-intense-fg ansi-bold">    real asset = 45000</span>
<span class="ansi-white-intense-fg ansi-bold">         ^</span>
<span class="ansi-red-intense-fg ansi-bold">SyntaxError</span><span class="ansi-red-intense-fg ansi-bold">:</span> invalid syntax</pre></details>
` },
         { slug: "session-3", label: "Session 3", title: "Basics of Data Analysis in Python", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>This session aims to equip you with essential skills for preparing data and creating visualizations for data analysis. We will cover the following key topics:</p>
<ul>
<li>Data collection and file reading</li>
<li>Data processing and cleaning</li>
<li>Basic operations and aggregations</li>
<li>Graph creation</li>
</ul></div>
<h2 id="I---Data-collection">I - Data collection</h2>
<p>In this class, we will focus on utilizing structured data for analysis in Python, excluding unstructured data from our scope. Structured data can be organized into tables and includes various types such as numbers, strings, text, dates, and booleans. A convenient method for collecting structured data is by reusing Excel tables.</p>
<p>To illustrate this, we will download datasets available online, specifically from Kaggle, which offers a vast collection of datasets. For our next class, we will use a dataset representing seismic activity around the world, accessible via the following link: <a href="https://www.kaggle.com/datasets/stealthtechnologies/earthquakes-dataset?resource=download">https://www.kaggle.com/datasets/stealthtechnologies/earthquakes-dataset?resource=download</a></p>
<p>To begin our analysis, we need to instruct Python to read data from an Excel file and store it in a variable for further processing.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Libraries </span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>                <span class="c1"># The library used for data manipulation</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">warnings</span>

<span class="c1"># We first set the working directory (The pathway were the all data can be found on the computer)</span>
<span class="n">MAIN_PATH</span> <span class="o">=</span> <span class="s1">'C:/Users/evche/Documents/Lessons - Audencia BS/Data'</span>
<span class="c1"># Then we store the data into a dataframe (by refering to the path of the file, this file is a csv)</span>
<span class="n">earthquake_data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_excel</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 3/earthquake_dataset.xlsx'</span><span class="p">)</span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s2">"ignore"</span><span class="p">)</span></pre></div>
<h2 id="II---Identifying-the-data">II - Identifying the data</h2><p>Before performing any operations, it is crucial to understand the dataset by displaying key information, such as the first few rows and the data types of each column.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We first display the first 5 rows of the dataset </span>
<span class="n">earthquake_data</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>

<span class="c1"># NB : We can also display the last 5 rows by using tail instead of head</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Time (utc)</th>
<th>Region</th>
<th>Magnitude</th>
<th>Depth (km)</th>
<th>Latitude</th>
<th>Longitude</th>
<th>Mode</th>
<th>Map</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2024-06-23</td>
<td>04:51:49</td>
<td>Mindanao, Philippine</td>
<td>4.8</td>
<td>342</td>
<td>8.01N</td>
<td>125.20E</td>
<td>A</td>
<td>-</td>
</tr>
<tr>
<th>1</th>
<td>2024-06-23</td>
<td>03:58:03</td>
<td>Near Coast of Venezuela</td>
<td>5.9</td>
<td>105</td>
<td>10.80N</td>
<td>62.65W</td>
<td>A</td>
<td>-</td>
</tr>
<tr>
<th>2</th>
<td>2024-06-23</td>
<td>03:12:08</td>
<td>Near East Coast of Honshu, japan</td>
<td>5.0</td>
<td>55</td>
<td>37.16N</td>
<td>141.09E</td>
<td>A</td>
<td>-</td>
</tr>
<tr>
<th>3</th>
<td>2024-06-22</td>
<td>20:46:51</td>
<td>Near Coast of Peru</td>
<td>5.3</td>
<td>64</td>
<td>15.79S</td>
<td>74.47W</td>
<td>A</td>
<td>-</td>
</tr>
<tr>
<th>4</th>
<td>2024-06-22</td>
<td>18:08:44</td>
<td>Afghanistan-Tajikistan Border Region</td>
<td>3.8</td>
<td>179</td>
<td>36.36N</td>
<td>71.45E</td>
<td>M</td>
<td>-</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Let us get the type of variable stored in the dataset</span>
<span class="n">earthquake_data</span><span class="o">.</span><span class="n">dtypes</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Date          datetime64[ns]
Time (utc)            object
Region                object
Magnitude            float64
Depth (km)             int64
Latitude              object
Longitude             object
Mode                  object
Map                   object
dtype: object</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Then we can get the structure of the data</span>
<span class="n">earthquake_data</span><span class="o">.</span><span class="n">shape</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>(14668, 9)</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Then we can get the number of unique values of each column</span>
<span class="n">earthquake_data</span><span class="o">.</span><span class="n">nunique</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Date           2671
Time (utc)    13344
Region         3206
Magnitude        77
Depth (km)      601
Latitude       5504
Longitude      6697
Mode              2
Map               1
dtype: int64</pre></details>
<p>The dataset contains 14,726 records distributed across 9 columns, representing the following attributes: date, time, region, magnitude, depth, latitude, longitude, detection mode (automatic or manual), and map. There are 2,672 unique dates on which earthquakes were recorded across 3,221 unique regions.</p>
<p>⚠️ Note: The data has not been cleaned yet; therefore, the actual number of unique regions may be smaller. For instance, variations in casing (e.g., uppercase vs. lowercase) may lead Python to count them as distinct regions.</p>
<h2 id="III---Data-processing-and-cleaning">III - Data processing and cleaning</h2>
<p>To facilitate analysis, we will convert the data types of several variables, including:</p>
<ul>
<li>Date: Converted to a date format</li>
<li>Time: Converted to a time format</li>
<li>Latitude and Longitude: Converted to float types</li>
<li>Mode: Converted to binary values (1 for automatic and 0 for manual)</li>
<li>The last column will be excluded from our analysis.</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># Converting the column date &amp; time to a datetime value, into a new variable called "moment"</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Moment'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">]</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">str</span><span class="p">)</span><span class="o">.</span><span class="n">str</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">10</span><span class="p">]</span> <span class="o">+</span> <span class="s2">" "</span> <span class="o">+</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Time (utc)'</span><span class="p">]</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">str</span><span class="p">)</span>
<span class="c1"># Then we convert the whole column to datetime with a format (it is important so the interpreter can understand the format)</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Moment'</span><span class="p">]</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">to_datetime</span><span class="p">(</span><span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Moment'</span><span class="p">],</span> <span class="nb">format</span> <span class="o">=</span><span class="s2">"%Y-%m-</span><span class="si">%d</span><span class="s2"> %H:%M:%S"</span><span class="p">)</span>
<span class="c1"># Display </span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Moment'</span><span class="p">]</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>0   2024-06-23 04:51:49
1   2024-06-23 03:58:03
2   2024-06-23 03:12:08
3   2024-06-22 20:46:51
4   2024-06-22 18:08:44
Name: Moment, dtype: datetime64[ns]</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Then we can process the latitude and the longitude, we have to convert the numbers that are followed by W and S to negative</span>
<span class="c1"># Basically, to do so, we just remove the last 2 digits of the longitude and the latitude (Space + Direction)</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Latitude'</span><span class="p">]</span><span class="o">.</span><span class="n">str</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s2">" "</span><span class="p">,</span><span class="s2">""</span><span class="p">)</span>          
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Longitude'</span><span class="p">]</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s2">" "</span><span class="p">,</span><span class="s2">""</span><span class="p">)</span>        

<span class="c1"># Remove the spaces in the strings</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span><span class="o">.</span><span class="n">str</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>              <span class="c1"># 0:-1 = From beginning to 2nd last</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span><span class="o">.</span><span class="n">str</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>            <span class="c1"># Str = The string value</span>

<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span><span class="o">.</span><span class="n">str</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s2">" "</span><span class="p">,</span><span class="s2">""</span><span class="p">)</span>          
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s2">" "</span><span class="p">,</span><span class="s2">""</span><span class="p">)</span>   

<span class="c1"># Converting to float</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Lat'</span><span class="p">]</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">float</span><span class="p">)</span>
<span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Long'</span><span class="p">]</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">float</span><span class="p">)</span>

<span class="c1"># Now, if last digit of Latitude is S or Last digit of Longitude is W, make it negative, for from 0 to length - 1</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">earthquake_data</span><span class="p">)):</span> 
    <span class="c1"># First dimension i always represent the rows and the second is the column</span>
    <span class="k">if</span> <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Latitude'</span><span class="p">][</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'S'</span><span class="p">:</span>
        <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Lat'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Lat'</span><span class="p">]</span> <span class="o">*</span> <span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span>
    <span class="k">if</span> <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Longitude'</span><span class="p">][</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'W'</span><span class="p">:</span>
        <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Long'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Long'</span><span class="p">]</span> <span class="o">*</span> <span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span>

<span class="n">earthquake_data</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Time (utc)</th>
<th>Region</th>
<th>Magnitude</th>
<th>Depth (km)</th>
<th>Latitude</th>
<th>Longitude</th>
<th>Mode</th>
<th>Map</th>
<th>Moment</th>
<th>Lat</th>
<th>Long</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2024-06-23</td>
<td>04:51:49</td>
<td>Mindanao, Philippine</td>
<td>4.8</td>
<td>342</td>
<td>8.01N</td>
<td>125.20E</td>
<td>A</td>
<td>-</td>
<td>2024-06-23 04:51:49</td>
<td>8.01</td>
<td>125.20</td>
</tr>
<tr>
<th>1</th>
<td>2024-06-23</td>
<td>03:58:03</td>
<td>Near Coast of Venezuela</td>
<td>5.9</td>
<td>105</td>
<td>10.80N</td>
<td>62.65W</td>
<td>A</td>
<td>-</td>
<td>2024-06-23 03:58:03</td>
<td>10.80</td>
<td>-62.65</td>
</tr>
<tr>
<th>2</th>
<td>2024-06-23</td>
<td>03:12:08</td>
<td>Near East Coast of Honshu, japan</td>
<td>5.0</td>
<td>55</td>
<td>37.16N</td>
<td>141.09E</td>
<td>A</td>
<td>-</td>
<td>2024-06-23 03:12:08</td>
<td>37.16</td>
<td>141.09</td>
</tr>
<tr>
<th>3</th>
<td>2024-06-22</td>
<td>20:46:51</td>
<td>Near Coast of Peru</td>
<td>5.3</td>
<td>64</td>
<td>15.79S</td>
<td>74.47W</td>
<td>A</td>
<td>-</td>
<td>2024-06-22 20:46:51</td>
<td>-15.79</td>
<td>-74.47</td>
</tr>
<tr>
<th>4</th>
<td>2024-06-22</td>
<td>18:08:44</td>
<td>Afghanistan-Tajikistan Border Region</td>
<td>3.8</td>
<td>179</td>
<td>36.36N</td>
<td>71.45E</td>
<td>M</td>
<td>-</td>
<td>2024-06-22 18:08:44</td>
<td>36.36</td>
<td>71.45</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Converting the mode : 1 for automatic detection and 0 for manual detection (in further classes we will learn another syntax)</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">earthquake_data</span><span class="p">)):</span>
    <span class="k">if</span> <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Mode'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'A'</span> <span class="p">:</span>
        <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Mode'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>
    <span class="k">if</span> <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Mode'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'M'</span><span class="p">:</span>
        <span class="n">earthquake_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="s1">'Mode'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>

<span class="n">earthquake_data</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Time (utc)</th>
<th>Region</th>
<th>Magnitude</th>
<th>Depth (km)</th>
<th>Latitude</th>
<th>Longitude</th>
<th>Mode</th>
<th>Map</th>
<th>Moment</th>
<th>Lat</th>
<th>Long</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2024-06-23</td>
<td>04:51:49</td>
<td>Mindanao, Philippine</td>
<td>4.8</td>
<td>342</td>
<td>8.01N</td>
<td>125.20E</td>
<td>1</td>
<td>-</td>
<td>2024-06-23 04:51:49</td>
<td>8.01</td>
<td>125.20</td>
</tr>
<tr>
<th>1</th>
<td>2024-06-23</td>
<td>03:58:03</td>
<td>Near Coast of Venezuela</td>
<td>5.9</td>
<td>105</td>
<td>10.80N</td>
<td>62.65W</td>
<td>1</td>
<td>-</td>
<td>2024-06-23 03:58:03</td>
<td>10.80</td>
<td>-62.65</td>
</tr>
<tr>
<th>2</th>
<td>2024-06-23</td>
<td>03:12:08</td>
<td>Near East Coast of Honshu, japan</td>
<td>5.0</td>
<td>55</td>
<td>37.16N</td>
<td>141.09E</td>
<td>1</td>
<td>-</td>
<td>2024-06-23 03:12:08</td>
<td>37.16</td>
<td>141.09</td>
</tr>
<tr>
<th>3</th>
<td>2024-06-22</td>
<td>20:46:51</td>
<td>Near Coast of Peru</td>
<td>5.3</td>
<td>64</td>
<td>15.79S</td>
<td>74.47W</td>
<td>1</td>
<td>-</td>
<td>2024-06-22 20:46:51</td>
<td>-15.79</td>
<td>-74.47</td>
</tr>
<tr>
<th>4</th>
<td>2024-06-22</td>
<td>18:08:44</td>
<td>Afghanistan-Tajikistan Border Region</td>
<td>3.8</td>
<td>179</td>
<td>36.36N</td>
<td>71.45E</td>
<td>0</td>
<td>-</td>
<td>2024-06-22 18:08:44</td>
<td>36.36</td>
<td>71.45</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can reorder the colmumns and remove the columns that are not useful for further analysis</span>
<span class="n">earthquake_data</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[[</span><span class="s1">'Date'</span><span class="p">,</span><span class="s1">'Moment'</span><span class="p">,</span> <span class="s1">'Region'</span><span class="p">,</span> <span class="s1">'Lat'</span><span class="p">,</span> <span class="s1">'Long'</span><span class="p">,</span> <span class="s1">'Magnitude'</span><span class="p">,</span> <span class="s1">'Depth (km)'</span><span class="p">,</span> <span class="s1">'Mode'</span><span class="p">]]</span>
<span class="n">earthquake_data</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Moment</th>
<th>Region</th>
<th>Lat</th>
<th>Long</th>
<th>Magnitude</th>
<th>Depth (km)</th>
<th>Mode</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2024-06-23</td>
<td>2024-06-23 04:51:49</td>
<td>Mindanao, Philippine</td>
<td>8.01</td>
<td>125.20</td>
<td>4.8</td>
<td>342</td>
<td>1</td>
</tr>
<tr>
<th>1</th>
<td>2024-06-23</td>
<td>2024-06-23 03:58:03</td>
<td>Near Coast of Venezuela</td>
<td>10.80</td>
<td>-62.65</td>
<td>5.9</td>
<td>105</td>
<td>1</td>
</tr>
<tr>
<th>2</th>
<td>2024-06-23</td>
<td>2024-06-23 03:12:08</td>
<td>Near East Coast of Honshu, japan</td>
<td>37.16</td>
<td>141.09</td>
<td>5.0</td>
<td>55</td>
<td>1</td>
</tr>
<tr>
<th>3</th>
<td>2024-06-22</td>
<td>2024-06-22 20:46:51</td>
<td>Near Coast of Peru</td>
<td>-15.79</td>
<td>-74.47</td>
<td>5.3</td>
<td>64</td>
<td>1</td>
</tr>
<tr>
<th>4</th>
<td>2024-06-22</td>
<td>2024-06-22 18:08:44</td>
<td>Afghanistan-Tajikistan Border Region</td>
<td>36.36</td>
<td>71.45</td>
<td>3.8</td>
<td>179</td>
<td>0</td>
</tr>
</tbody>
</table></div></details>
<p>Once the data is cleaned, we can proceed to data manipulation, which encompasses exploration, analysis, and visualization. Data analysis involves preparing the data, deriving insights, and visualizing the results.</p>
<h2 id="IV---Statistics-with-pandas-dataframe">IV - Statistics with pandas dataframe</h2><p>The pandas library in Python makes it convenient to calculate statistics on a dataset, enabling a better understanding of the data's characteristics.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We can calculate the average magnitude and the average depth</span>
<span class="n">avg_magnitude</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="n">var_magnitude</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span><span class="o">.</span><span class="n">var</span><span class="p">()</span>
<span class="n">avg_depth</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">"The Average magnitude of the earthquakes included in the dataset is"</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">avg_magnitude</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> 
      <span class="s2">"with a variance of"</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">var_magnitude</span><span class="p">,</span><span class="mi">2</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Average depth is"</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">avg_depth</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"km"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The Average magnitude of the earthquakes included in the dataset is 4.47 with a variance of 1.1
The Average depth is 94.53 km</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can even go further by counting the number of earthquakes that have a magnitude that is superior to the average</span>
<span class="c1"># Dataset containing the earthquake with a magnitude higher than 4.47</span>
<span class="n">earthquake_above</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">avg_magnitude</span><span class="p">]</span>
<span class="c1"># We count the rows to get the number of earthquakes </span>
<span class="n">nb_above</span> <span class="o">=</span> <span class="n">earthquake_above</span><span class="o">.</span><span class="n">count</span><span class="p">()[</span><span class="mi">0</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"There are"</span><span class="p">,</span> <span class="n">nb_above</span><span class="p">,</span><span class="s2">"earthquakes that have a magnitude that is higher than the average"</span><span class="p">)</span>

<span class="c1"># Calculate the percentage of earthquakes that this number represents </span>
<span class="n">percentage_of_earthquake</span> <span class="o">=</span> <span class="n">nb_above</span><span class="o">/</span><span class="n">earthquake_data</span><span class="o">.</span><span class="n">count</span><span class="p">()[</span><span class="mi">0</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"It represents "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">percentage_of_earthquake</span> <span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span><span class="s2">"</span><span class="si">% o</span><span class="s2">f the earthquakes in the dataset"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>There are 8021 earthquakes that have a magnitude that is higher than the average
It represents  54.68 % of the earthquakes in the dataset</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can see whether the Magnitude and the Depth are correlated</span>
<span class="n">corr_depth_mag</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[[</span><span class="s1">'Magnitude'</span><span class="p">,</span> <span class="s1">'Depth (km)'</span><span class="p">]]</span><span class="o">.</span><span class="n">corr</span><span class="p">()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">corr_depth_mag</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Magnitude  Depth (km)
Magnitude    1.000000   -0.006207
Depth (km)  -0.006207    1.000000</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can do the same with the other variables</span>
<span class="n">corr_all</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[[</span><span class="s1">'Magnitude'</span><span class="p">,</span> <span class="s1">'Depth (km)'</span><span class="p">,</span><span class="s1">'Lat'</span><span class="p">,</span><span class="s1">'Long'</span><span class="p">]]</span><span class="o">.</span><span class="n">corr</span><span class="p">()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">corr_all</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Magnitude  Depth (km)       Lat      Long
Magnitude    1.000000   -0.006207 -0.038868 -0.024570
Depth (km)  -0.006207    1.000000 -0.000292 -0.049223
Lat         -0.038868   -0.000292  1.000000  0.004581
Long        -0.024570   -0.049223  0.004581  1.000000</pre></details>
<p>From the correlation table generated, we can conclude that there is no statistical evidence suggesting correlation or anti-correlation among the variables; thus, they appear to be independent.</p>
<h2 id="V---Data-Visualization-basics">V - Data Visualization basics</h2>
<p>There are four primary types of data analysis:</p>
<ul>
<li>Descriptive Analysis: Answers the question, "What happened?" using statistical methods.</li>
<li>Prescriptive Analysis: Addresses, "Why did it happen?" by combining statistics with subject matter expertise.</li>
<li>Predictive Analysis: Explores, "Can we make it happen, or prevent it? And how?" by utilizing statistics, subject knowledge, and external factors.</li>
<li>Cognitive Analysis: Asks, "What can we conclude?" by providing additional insights into complex problems.</li>
</ul>
<p>Data visualization enhances various levels of analysis, particularly descriptive analysis, by revealing insights that may not be immediately apparent. This session will focus exclusively on descriptive analysis due to the dataset's format. Other analysis types will be explored in future sessions, especially in a financial context.</p>
<div class="nb-code"><pre><span></span><span class="c1"># To visualize our data, we may require the following libraries</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="kn">import</span> <span class="nn">plotly.express</span> <span class="k">as</span> <span class="nn">px</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># We first plot the magnitude by depth of each earthquake </span>
<span class="c1"># Clearing the plot first so the window can be further used for plots</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">],</span><span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 1" data-asset="session-3/fig-1.png" loading="lazy"/></figure></details>
<p>To improve the readability of visual representations, it is essential to exclude outliers, label axes, and set appropriate limits. In quantitative methods, several approaches can be used to identify and exclude outliers:</p>
<ul>
<li>In <code>normal distribution</code>, points below <span class="nb-math">µ - 3σ</span> or above <span class="nb-math">µ + 3σ</span> are typically excluded.</li>
<li>In <code>skewed distribution</code>, points below Q1 - 1.5IQR and above Q3 + 1.5IQR are excluded where (Q1 is the first quartile and IQR is the interquartile range)</li>
<li>In <code>any other distribution</code>, a percentile approach can be adopted; for instance, excluding data above the 95th percentile and below the 5th percentile.</li>
</ul>
<p>For this analysis, we will set the interval to  [1% ; 99%]</p>
<div class="nb-code"><pre><span></span><span class="c1"># Let us plot the distribution of the data, using the box plots</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Distribution of the Depth of the earthquakes"</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">x</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">],</span> <span class="n">y</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 2" data-asset="session-3/fig-2.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Distribution of the magnitude</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Distribution of the Magnitude of the earthquakes"</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">x</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">],</span> <span class="n">y</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 3" data-asset="session-3/fig-3.png" loading="lazy"/></figure></details>
<p>From the graph, we can observe that manually recorded earthquakes display a broader range of magnitudes, while their depths appear more homogeneous. Conversely, automatically recorded earthquakes show greater variability in depth but maintain a more consistent magnitude.</p>
<p>Two hypotheses may explain this phenomenon:</p>
<ol>
<li>Significant-depth earthquakes may not be manually recorded, and their magnitudes could be less accurate than those recorded manually (potential errors in manual recording).</li>
<li>While automatically recorded earthquakes may reach considerable depths, there may be limitations to the magnitudes that can be captured automatically.</li>
</ol>
<div class="nb-code"><pre><span></span><span class="c1"># We can get the percentile using pandas' quantile method</span>
<span class="n">upper_bound_magnitude</span> <span class="o">=</span>  <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span><span class="o">.</span><span class="n">quantile</span><span class="p">(</span><span class="mf">0.99</span><span class="p">)</span>
<span class="n">lower_bound_magnitude</span> <span class="o">=</span>  <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span><span class="o">.</span><span class="n">quantile</span><span class="p">(</span><span class="mf">0.01</span><span class="p">)</span>
<span class="n">upper_bound_depth</span> <span class="o">=</span>  <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">]</span><span class="o">.</span><span class="n">quantile</span><span class="p">(</span><span class="mf">0.99</span><span class="p">)</span>
<span class="n">lower_bound_depth</span> <span class="o">=</span>  <span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">]</span><span class="o">.</span><span class="n">quantile</span><span class="p">(</span><span class="mf">0.01</span><span class="p">)</span>
<span class="c1"># Display</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Upper limit of Magnitude : "</span><span class="p">,</span> <span class="n">upper_bound_magnitude</span><span class="p">,</span> <span class="s2">"&amp; Lower limit of Magnitude : "</span><span class="p">,</span> <span class="n">lower_bound_magnitude</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Upper limit of Depth : "</span><span class="p">,</span> <span class="n">upper_bound_depth</span><span class="p">,</span> <span class="s2">"&amp; Lower limit of Depth : "</span><span class="p">,</span> <span class="n">lower_bound_depth</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Upper limit of Magnitude :  6.5 &amp; Lower limit of Magnitude :  2.2670000000000017
Upper limit of Depth :  576.0 &amp; Lower limit of Depth :  5.0</pre></details>
<p>After establishing the limits, we will exclude outliers—values falling outside the defined interval. This process will enhance the readability of our boxplot.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Excluding the earthquakes that have a magnitude higher to the upper bound and lower bound</span>
<span class="n">earthquake_cleaned_data</span> <span class="o">=</span> <span class="n">earthquake_data</span><span class="p">[(</span><span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">upper_bound_magnitude</span><span class="p">)</span> <span class="o">&amp;</span> <span class="p">(</span><span class="n">earthquake_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">]</span> <span class="o">&gt;=</span> <span class="n">lower_bound_magnitude</span><span class="p">)]</span>

<span class="c1"># Now excluding the data that have a depth that is higher or lower to the limits (Using the new data frame)</span>
<span class="n">earthquake_cleaned_data</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="p">[(</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">upper_bound_depth</span><span class="p">)</span> <span class="o">&amp;</span> <span class="p">(</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">]</span> <span class="o">&gt;=</span> <span class="n">lower_bound_depth</span><span class="p">)]</span>

<span class="c1"># Display</span>
<span class="n">earthquake_cleaned_data</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Moment</th>
<th>Region</th>
<th>Lat</th>
<th>Long</th>
<th>Magnitude</th>
<th>Depth (km)</th>
<th>Mode</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2024-06-23</td>
<td>2024-06-23 04:51:49</td>
<td>Mindanao, Philippine</td>
<td>8.01</td>
<td>125.20</td>
<td>4.8</td>
<td>342</td>
<td>1</td>
</tr>
<tr>
<th>1</th>
<td>2024-06-23</td>
<td>2024-06-23 03:58:03</td>
<td>Near Coast of Venezuela</td>
<td>10.80</td>
<td>-62.65</td>
<td>5.9</td>
<td>105</td>
<td>1</td>
</tr>
<tr>
<th>2</th>
<td>2024-06-23</td>
<td>2024-06-23 03:12:08</td>
<td>Near East Coast of Honshu, japan</td>
<td>37.16</td>
<td>141.09</td>
<td>5.0</td>
<td>55</td>
<td>1</td>
</tr>
<tr>
<th>3</th>
<td>2024-06-22</td>
<td>2024-06-22 20:46:51</td>
<td>Near Coast of Peru</td>
<td>-15.79</td>
<td>-74.47</td>
<td>5.3</td>
<td>64</td>
<td>1</td>
</tr>
<tr>
<th>4</th>
<td>2024-06-22</td>
<td>2024-06-22 18:08:44</td>
<td>Afghanistan-Tajikistan Border Region</td>
<td>36.36</td>
<td>71.45</td>
<td>3.8</td>
<td>179</td>
<td>0</td>
</tr>
</tbody>
</table></div></details>
<p>Once the data is cleaned, we can display boxplots to illustrate the distribution. The distribution should theoretically appear more homogeneous compared to before outlier exclusion.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the magnitude </span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Distribution of the Magnitude of the earthquakes"</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">x</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">],</span> <span class="n">y</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Magnitude'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 4" data-asset="session-3/fig-4.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the depth</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Distribution of the Magnitude of the earthquakes"</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">x</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">],</span> <span class="n">y</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Depth (km)'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 5" data-asset="session-3/fig-5.png" loading="lazy"/></figure></details>
<p>Next, we will create a scatter plot reflecting the data without outliers. This visualization will enhance clarity by adding titles to the axes and a main title for the graph, along with any necessary axis limits.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Creating the visual</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="c1"># Representing the points depending the data depending on the mode</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">]</span><span class="o">==</span><span class="mi">0</span><span class="p">][</span><span class="s1">'Depth (km)'</span><span class="p">],</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">]</span><span class="o">==</span><span class="mi">0</span><span class="p">][</span><span class="s1">'Magnitude'</span><span class="p">],</span> <span class="n">label</span> <span class="o">=</span> <span class="s2">"Manual"</span><span class="p">,</span> <span class="n">marker</span> <span class="o">=</span><span class="s2">"1"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">]</span><span class="o">==</span><span class="mi">1</span><span class="p">][</span><span class="s1">'Depth (km)'</span><span class="p">],</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">]</span><span class="o">==</span><span class="mi">1</span><span class="p">][</span><span class="s1">'Magnitude'</span><span class="p">],</span> <span class="n">label</span> <span class="o">=</span> <span class="s2">"Automatic"</span><span class="p">,</span> <span class="n">marker</span> <span class="o">=</span> <span class="s2">"."</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span> <span class="o">=</span> <span class="s2">"upper right"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Depth in km"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Magnitude"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Magnitude and depth of the recorded earthquakes depending on the mode of detection"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 6" data-asset="session-3/fig-6.png" loading="lazy"/></figure></details>
<p>From the scatter plot, we can conclude that there is no evidence of a relationship between the magnitude and depth of the earthquakes. The manual detection mode identifies lower-magnitude earthquakes, while the automatic method detects those occurring at greater depths.</p>
<p>Python's capabilities for visualizing data are crucial, highlighting the importance of cleaning latitude and longitude data prior to analysis.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Let us show a first map with all the data, then we can either separate the data by mode of detection or by year of occurence</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">fig</span> <span class="o">=</span> <span class="n">px</span><span class="o">.</span><span class="n">scatter_geo</span><span class="p">(</span><span class="n">earthquake_cleaned_data</span><span class="p">,</span> <span class="n">lat</span><span class="o">=</span><span class="s1">'Lat'</span><span class="p">,</span> <span class="n">lon</span><span class="o">=</span><span class="s1">'Long'</span><span class="p">,</span> 
                     <span class="n">color</span> <span class="o">=</span><span class="s1">'Magnitude'</span><span class="p">,</span> <span class="n">hover_name</span> <span class="o">=</span><span class="s1">'Region'</span><span class="p">,</span> <span class="n">title</span> <span class="o">=</span> <span class="s2">"Magnitude of the earthquakes"</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Let us represent only the earthquakes that are detected automatically</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">fig</span> <span class="o">=</span> <span class="n">px</span><span class="o">.</span><span class="n">scatter_geo</span><span class="p">(</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">]</span><span class="o">==</span><span class="mi">1</span><span class="p">],</span> <span class="n">lat</span><span class="o">=</span><span class="s1">'Lat'</span><span class="p">,</span> <span class="n">lon</span><span class="o">=</span><span class="s1">'Long'</span><span class="p">,</span> 
                     <span class="n">color</span> <span class="o">=</span><span class="s1">'Magnitude'</span><span class="p">,</span> <span class="n">hover_name</span> <span class="o">=</span><span class="s1">'Region'</span><span class="p">,</span> <span class="n">title</span> <span class="o">=</span> <span class="s2">"Magnitude of the automatically detected earthquakes"</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># And the earthquakes that are detected manually</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">fig</span> <span class="o">=</span> <span class="n">px</span><span class="o">.</span><span class="n">scatter_geo</span><span class="p">(</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Mode'</span><span class="p">]</span><span class="o">==</span><span class="mi">0</span><span class="p">],</span> <span class="n">lat</span><span class="o">=</span><span class="s1">'Lat'</span><span class="p">,</span> <span class="n">lon</span><span class="o">=</span><span class="s1">'Long'</span><span class="p">,</span> 
                     <span class="n">color</span> <span class="o">=</span><span class="s1">'Magnitude'</span><span class="p">,</span> <span class="n">hover_name</span> <span class="o">=</span><span class="s1">'Region'</span><span class="p">,</span>  <span class="n">title</span> <span class="o">=</span> <span class="s2">"Magnitude of the manually detected earthquakes"</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<aside class="nb-exercise"><span class="nb-ex-tag">Blitz exercise</span><h3>Evolution in 5 years : <em>In class Exercise (Blitz 15 min) or Assignment</em></h3><p>From our visuals, we observe that a larger number of earthquakes in the dataset were detected automatically. Manually recorded earthquakes were predominantly located in the Middle East and exhibited lower magnitudes compared to those recorded automatically. To gain further insights, we will compare data from 2018 to 2023.</p></aside><div class="nb-code"><pre><span></span><span class="c1"># Filter by date</span>

<span class="c1"># Display the head</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Filter by date</span>

<span class="c1"># Display the head</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Show the earthquakes that occured in 2018</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Show the earthquakes that occured in 2023</span></pre></div>
<p>Our visuals indicate that seismic regions have remained consistent over the five-year period. However, fewer earthquakes were recorded in 2023 compared to 2018. To further investigate this trend, we can create a graph counting the number of earthquakes by date to examine temporal evolution.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We can group the data by date and count the number of earthquakes and calculate the average magnitude.</span>
<span class="n">earthquakes_data_grouped_date</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">as_index</span> <span class="o">=</span> <span class="kc">False</span><span class="p">)[</span><span class="s1">'Magnitude'</span><span class="p">]</span><span class="o">.</span><span class="n">agg</span><span class="p">([</span><span class="s1">'count'</span><span class="p">,</span> <span class="s1">'mean'</span><span class="p">])</span>
<span class="n">earthquakes_data_grouped_date</span><span class="o">.</span><span class="n">reset_index</span><span class="p">(</span><span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">earthquakes_data_grouped_date</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>index</th>
<th>Date</th>
<th>count</th>
<th>mean</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>0</td>
<td>2015-04-12</td>
<td>1</td>
<td>2.30</td>
</tr>
<tr>
<th>1</th>
<td>1</td>
<td>2015-11-19</td>
<td>1</td>
<td>3.80</td>
</tr>
<tr>
<th>2</th>
<td>2</td>
<td>2015-11-22</td>
<td>1</td>
<td>6.20</td>
</tr>
<tr>
<th>3</th>
<td>3</td>
<td>2015-11-26</td>
<td>1</td>
<td>3.00</td>
</tr>
<tr>
<th>4</th>
<td>4</td>
<td>2015-11-27</td>
<td>4</td>
<td>4.25</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the number of earthquakes that occured</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">earthquakes_data_grouped_date</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">earthquakes_data_grouped_date</span><span class="p">[</span><span class="s1">'count'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Number of earthquakes"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Number of earthquakes by date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 7" data-asset="session-3/fig-7.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the average magnitude of earthquakes by date</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">earthquakes_data_grouped_date</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">earthquakes_data_grouped_date</span><span class="p">[</span><span class="s1">'mean'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Magnitude"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Average magnitude of earthquakes by date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 8" data-asset="session-3/fig-8.png" loading="lazy"/></figure></details>
<p>The initial visuals provided lack readability and do not significantly enhance our analysis. It is crucial to maintain simplicity in reports and utilize only relevant visuals. The previous two graphs do not add value; instead, we should consider grouping the data by year for clearer insights.</p>
<div class="nb-code"><pre><span></span><span class="c1"># First, we add a column to the original table named Year</span>
<span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Year'</span><span class="p">]</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">]</span><span class="o">.</span><span class="n">dt</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s1">'%Y'</span><span class="p">)</span>
<span class="c1"># Be careful, this function is only usable because the "Date" column here is has a datatime type</span>
<span class="n">earthquake_cleaned_data</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Moment</th>
<th>Region</th>
<th>Lat</th>
<th>Long</th>
<th>Magnitude</th>
<th>Depth (km)</th>
<th>Mode</th>
<th>Year</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2024-06-23</td>
<td>2024-06-23 04:51:49</td>
<td>Mindanao, Philippine</td>
<td>8.01</td>
<td>125.20</td>
<td>4.8</td>
<td>342</td>
<td>1</td>
<td>2024</td>
</tr>
<tr>
<th>1</th>
<td>2024-06-23</td>
<td>2024-06-23 03:58:03</td>
<td>Near Coast of Venezuela</td>
<td>10.80</td>
<td>-62.65</td>
<td>5.9</td>
<td>105</td>
<td>1</td>
<td>2024</td>
</tr>
<tr>
<th>2</th>
<td>2024-06-23</td>
<td>2024-06-23 03:12:08</td>
<td>Near East Coast of Honshu, japan</td>
<td>37.16</td>
<td>141.09</td>
<td>5.0</td>
<td>55</td>
<td>1</td>
<td>2024</td>
</tr>
<tr>
<th>3</th>
<td>2024-06-22</td>
<td>2024-06-22 20:46:51</td>
<td>Near Coast of Peru</td>
<td>-15.79</td>
<td>-74.47</td>
<td>5.3</td>
<td>64</td>
<td>1</td>
<td>2024</td>
</tr>
<tr>
<th>4</th>
<td>2024-06-22</td>
<td>2024-06-22 18:08:44</td>
<td>Afghanistan-Tajikistan Border Region</td>
<td>36.36</td>
<td>71.45</td>
<td>3.8</td>
<td>179</td>
<td>0</td>
<td>2024</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Now we can group the data by year instead of dates</span>
<span class="n">earthquakes_data_grouped_year</span> <span class="o">=</span> <span class="n">earthquake_cleaned_data</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s1">'Year'</span><span class="p">],</span> <span class="n">as_index</span> <span class="o">=</span> <span class="kc">False</span><span class="p">)[</span><span class="s1">'Magnitude'</span><span class="p">]</span><span class="o">.</span><span class="n">agg</span><span class="p">([</span><span class="s1">'count'</span><span class="p">,</span> <span class="s1">'mean'</span><span class="p">])</span>
<span class="n">earthquakes_data_grouped_year</span><span class="o">.</span><span class="n">reset_index</span><span class="p">(</span><span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">earthquakes_data_grouped_year</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>index</th>
<th>Year</th>
<th>count</th>
<th>mean</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>0</td>
<td>2015</td>
<td>16</td>
<td>3.731250</td>
</tr>
<tr>
<th>1</th>
<td>1</td>
<td>2016</td>
<td>1520</td>
<td>4.361645</td>
</tr>
<tr>
<th>2</th>
<td>2</td>
<td>2017</td>
<td>1546</td>
<td>4.647801</td>
</tr>
<tr>
<th>3</th>
<td>3</td>
<td>2018</td>
<td>2752</td>
<td>4.622384</td>
</tr>
<tr>
<th>4</th>
<td>4</td>
<td>2019</td>
<td>2717</td>
<td>4.795694</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the number of earthquakes that occured by year</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">earthquakes_data_grouped_year</span><span class="p">[</span><span class="s1">'Year'</span><span class="p">],</span> <span class="n">earthquakes_data_grouped_year</span><span class="p">[</span><span class="s1">'count'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Year"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Number of earthquakes"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Number of earthquakes by year"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 9" data-asset="session-3/fig-9.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the number of earthquakes that occured by year</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">earthquakes_data_grouped_year</span><span class="p">[</span><span class="s1">'Year'</span><span class="p">],</span> <span class="n">earthquakes_data_grouped_year</span><span class="p">[</span><span class="s1">'mean'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Year"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Magnitude"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Average magnitude of earthquakes by year"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 10" data-asset="session-3/fig-10.png" loading="lazy"/></figure></details>
<p>From the graphs, we note fewer recorded earthquakes in 2020, 2021, and 2022, with notably lower recorded magnitudes in 2020. However, the average magnitude of earthquakes over the past ten years remains consistent at approximately 4 ± 0.8.</p>
<h2 id="VI---Conclusion">VI - Conclusion</h2><p>From our analysis, we can draw the following conclusions:</p>
<ul>
<li>The variables are not correlated.</li>
<li>No evident relationship exists between the depth and magnitude of earthquakes.</li>
<li>Manually recorded earthquakes primarily occurred in the Middle East, displaying lower average magnitudes and depths compared to automatically recorded earthquakes.</li>
<li>The seismic regions have remained consistent over the years.</li>
<li>There was a decline in recorded earthquakes in 2020, 2021, and 2022.</li>
</ul>
<aside class="nb-exercise"><span class="nb-ex-tag">Assignment</span><h3>VII - Assignment</h3><p>For the next session:</p><ul>
<li>Go on Kaggle and download a dataset.</li>
<li>Clean the data using the methods covered in class.</li>
<li>Create 2 to 3 visuals that might be relevant for the analysis.</li>
</ul><p>Make sure to apply the data cleaning techniques and visualization methods we discussed to ensure that your graphs are clear and meaningful.</p></aside>
` },
         { slug: "session-4", label: "Session 4", title: "Financial Analysis Using Python: Application with the Dupont Analysis", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>The content of this session will guide you through the analysis of financial data using both Excel and Jupyter Notebook. You will classify, clean, visualize, and analyze key financial statements to gain insights into the financial performance of a company. The assignment emphasizes both technical skills in data processing and interpretation of financial metrics. Follow the instructions carefully, and ensure that your work is well-documented and neatly presented.</p>
<p>It is a guided assginment that requires :</p>
<ul>
<li>Excel </li>
<li>Jupyter Notebook</li>
<li>Python libraries : pandas, numpy, matplotlib and seaborn</li>
</ul></div>
<h2 id="Step-1-:-Preparing-Data-in-Excel">Step 1 : Preparing Data in Excel</h2><ol>
<li><p><strong>Classify Balance Sheet Items:</strong> Open the balance sheet in Excel and add a new column classifying each item as current asset, non-current asset, current liability, non-current liability, or equity.</p>
</li>
<li><p><strong>Operating and Non-Operating Items:</strong> Add a second column indicating whether each item is an operating asset/liability, non-operating asset/liability, or cash.</p>
</li>
<li><p><strong>Save the File:</strong> Double-check your classifications for accuracy before proceeding to Jupyter Notebook.</p>
</li>
</ol>
<h2 id="Step-2:-Setting-Up-Jupyter-Notebook">Step 2: Setting Up Jupyter Notebook</h2><ol>
<li><strong>Title and Introduction:</strong> Begin your Jupyter Notebook with a clear title and a brief introduction to your analysis.</li>
<li><strong>Documentation:</strong> For each block of code, include a short description of its purpose. Use Markdown cells to provide explanations for key outputs.</li>
</ol>
<h2 id="Step-3:-Data-Preparation-and-Cleaning">Step 3: Data Preparation and Cleaning</h2><ol>
<li><strong>Define Constants:</strong> Set the following constants:<ul>
<li><code>TAX_RATE_2022</code> = 20.90%</li>
<li><code>TAX_RATE_2023</code> = 19.30%</li>
<li><code>OPERATIONAL_CASH_PROPORTION</code> = 20%</li>
</ul>
</li>
<li><strong>Ignore Warnings:</strong> Include code to suppress warning messages to keep your output clean and readable.</li>
<li><strong>Load Data:</strong> Read all sheets from your Excel file into six separate Pandas DataFrames.</li>
<li><strong>Clean Data:</strong> Remove rows with missing titles and those without relevant data.</li>
<li><strong>Compute Averages:</strong> Calculate the average for each DataFrame, using the end-of-year values for 2022 and 2023.</li>
<li><strong>Set Index:</strong> Use item labels as the index for each DataFrame for easier reference and analysis.</li>
</ol>
<h2 id="Step-4:-Visualization">Step 4: Visualization</h2><ol>
<li><strong>Balance Sheet Comparison:</strong> Create a visualization comparing assets to liabilities. Provide a brief analysis of the results in a Markdown cell.</li>
<li><strong>Proportion Analysis:</strong> Visualize the proportion of current vs. non-current assets and liabilities, as well as operating vs. non-operating items.</li>
<li><strong>Income Statement Insights:</strong> Create a visualization for the income statement and summarize key trends or insights.</li>
</ol>
<h2 id="Step-5:-Financial-Ratio-Calculations">Step 5: Financial Ratio Calculations</h2><ol>
<li><strong>Create Functions for Financial Analysis</strong> For each of the following calculations, <strong>implement both methods</strong>:</li>
</ol>
<ul>
<li>Working Capital Turnover Ratio: Measures how efficiently a company uses its working capital to generate sales. A higher ratio indicates better efficiency.<ul>
<li>Method 1: Direct calculation using operating working capital.</li>
<li>Method 2: Breakdown into elements like operating cash, accounts receivable, inventories, and accounts payable.</li>
</ul>
</li>
<li>Invested Capital Turnover: Reflects how effectively a company uses invested capital to generate revenue.<ul>
<li>Method 1: Use the formula directly.</li>
<li>Method 2: Decompose into components such as property, plant &amp; equipment (P,P&amp;E), goodwill, intangible assets, and other non-current operating assets.</li>
</ul>
</li>
<li>EBIT Margin (Earnings Before Interest and Taxes): Indicates operational profitability before interest and taxes.<ul>
<li>Method 1: Use the EBIT value directly.</li>
<li>Method 2: Break down into gross profit and SG&amp;A expenses (selling, general, and administrative).</li>
</ul>
</li>
<li>NOPAT Margin (Net Operating Profit After Tax): Measures profitability after taxes from core operations.<ul>
<li>Method 1: Use EBIT Margin and tax rate.</li>
<li>Method 2: Use a detailed breakdown of operating components.</li>
</ul>
</li>
<li>Return on Invested Capital (ROIC): Shows how well a company generates returns relative to its invested capital.<ul>
<li>Method 1: Use a direct formula.</li>
<li>Method 2: Combine NOPAT margin and invested capital turnover.</li>
</ul>
</li>
<li>Return on Non-Operating Assets After Tax: Evaluates returns from assets outside of core operations.<ul>
<li>Method 1: Use interest income directly.</li>
<li>Method 2: Decompose returns by type of non-operating income.</li>
</ul>
</li>
<li>Cost of Debt After Tax: The effective rate a company pays on its debt after tax deductions.<ul>
<li>Method 1: Use interest expenses and tax rate.</li>
<li>Method 2: Break down into detailed interest and debt-related costs.</li>
</ul>
</li>
<li>Return on Equity (ROE): Measures how effectively a company uses shareholder equity to generate profit.<ul>
<li>Method 1: Use the formula (Net Income / Shareholders' Equity).</li>
<li>Method 2: Decompose into return on assets, cost of debt, and financial leverage.</li>
</ul>
</li>
</ul>
<h2 id="Step-6:-Analysis-of-ROE-for-2022-and-2023">Step 6: Analysis of ROE for 2022 and 2023</h2><ol>
<li><strong>Calculate and Analyze ROE for 2023:</strong> Use iloc or loc to extract specific values and calculate ROE. Include comments on what the results indicate.</li>
<li><strong>Compare ROE for 2022:</strong> Repeat the calculation for 2022, compare with 2023 results, and discuss any changes or trends.</li>
</ol>
<h2 id="Step-7:-Advanced-Analysis-(Optional)">Step 7: Advanced Analysis (Optional)</h2><ol>
<li><strong>Develop a Comprehensive calculate_ROE Function:</strong> Create a single function that calls each of the other functions to compute ROE.</li>
<li><strong>Sensitivity Analysis:</strong> Modify constants or assumptions and observe the impact on ROE. Document your findings with visualizations that highlight these changes.</li>
</ol>
` },
         { slug: "session-5", label: "Session 5", title: "Introduction to time series and Linear Regression using OLS", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>The content of this session will establish a foundational understanding of time series and Ordinary Least Squares (OLS), commonly referred to as Linear Regression, as typically addressed in econometrics courses. In this session, you will learn about:</p>
<ul>
<li>The definition and characteristics of time series</li>
<li>The process of converting a Pandas DataFrame into a time series format</li>
<li>Applications of time series in data analysis, with a particular emphasis on finance</li>
<li>A refresher on the concepts of Linear Regression</li>
<li>Implementing Linear Regression in Python using OLS techniques</li>
</ul></div>
<h2 id="I---Time-Series">I - Time Series</h2><p>In econometrics, time series data comprises sequences of data points indexed in a specific order, typically over a temporal dimension. These series often represent repeated measurements taken at regular intervals—such as annually, monthly, daily, hourly, or minutely—and are commonly employed to illustrate the evolution of quantitative measures, including stock prices, revenue, or profit.</p>
<p>Time series data can be decomposed into four main components:</p>
<ul>
<li><code>Trend</code>: This reflects the general direction in which the data moves over the entire measurement period.</li>
<li><code>Seasonal Variation</code>: These are predictable movements that occur at regular intervals, reflecting patterns that repeat during similar periods (e.g., sales spikes during holidays).</li>
<li><code>Cyclical Fluctuation</code>: These represent longer-term oscillations that occur at irregular intervals and are influenced by economic or other cycles.</li>
<li><code>Irregular or Random Movements</code>: These are unpredictable fluctuations resulting from unforeseen events, which cannot be anticipated based on historical data.</li>
</ul>
<h2 id="II---Converting-a-dataframe-to-a-time-series">II - Converting a dataframe to a time series</h2><p>Now that you have acquired the skills to read a file and store the data in a DataFrame, you will advance to transforming that data into a time series format. In this context, the data will be indexed by date or time (referred to as a datetime object in Python) rather than by numerical index.</p>
<p>To illustrate this process, you may download financial data from specialized websites such as Refinitiv Eikon, Bloomberg, Yahoo Finance (or by utilizing the library known as yfinance), Nasdaq, Dow Jones, or S&amp;P 500.</p>
<p>For this exercise, we will concentrate on gathering data from the five major technology companies commonly referred to as GAFAM: Google, Amazon, Facebook (Meta), Apple, and Microsoft.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Basic configuration </span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">warnings</span> 

<span class="n">MAIN_PATH</span> <span class="o">=</span> <span class="s1">'C:/Users/evche/Documents/Lessons - Audencia BS/Data'</span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s2">"ignore"</span><span class="p">)</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Storing the data into 5 dataframes, the parse dates function is used to convert strings to a date datatype</span>
<span class="n">stock_GOOG</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 5/GOOG.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">])</span>
<span class="n">stock_AAPL</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 5/AAPL.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">])</span>
<span class="n">stock_MSFT</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 5/MSFT.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">])</span>
<span class="n">stock_FCBK</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 5/META.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">])</span>
<span class="n">stock_AMZN</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 5/AMZN.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">])</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># We can see the structure of the data </span>
<span class="n">stock_GOOG</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Open</th>
<th>High</th>
<th>Low</th>
<th>Close</th>
<th>Adj Close</th>
<th>Volume</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2004-08-19</td>
<td>2.490664</td>
<td>2.591785</td>
<td>2.390042</td>
<td>2.499133</td>
<td>2.496292</td>
<td>897427216</td>
</tr>
<tr>
<th>1</th>
<td>2004-08-20</td>
<td>2.515820</td>
<td>2.716817</td>
<td>2.503118</td>
<td>2.697639</td>
<td>2.694573</td>
<td>458857488</td>
</tr>
<tr>
<th>2</th>
<td>2004-08-23</td>
<td>2.758411</td>
<td>2.826406</td>
<td>2.716070</td>
<td>2.724787</td>
<td>2.721690</td>
<td>366857939</td>
</tr>
<tr>
<th>3</th>
<td>2004-08-24</td>
<td>2.770615</td>
<td>2.779581</td>
<td>2.579581</td>
<td>2.611960</td>
<td>2.608991</td>
<td>306396159</td>
</tr>
<tr>
<th>4</th>
<td>2004-08-25</td>
<td>2.614201</td>
<td>2.689918</td>
<td>2.587302</td>
<td>2.640104</td>
<td>2.637103</td>
<td>184645512</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Let us do the same with Apple</span>
<span class="n">stock_AAPL</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Open</th>
<th>High</th>
<th>Low</th>
<th>Close</th>
<th>Adj Close</th>
<th>Volume</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>1980-12-12</td>
<td>0.128348</td>
<td>0.128906</td>
<td>0.128348</td>
<td>0.128348</td>
<td>0.098943</td>
<td>469033600</td>
</tr>
<tr>
<th>1</th>
<td>1980-12-15</td>
<td>0.122210</td>
<td>0.122210</td>
<td>0.121652</td>
<td>0.121652</td>
<td>0.093781</td>
<td>175884800</td>
</tr>
<tr>
<th>2</th>
<td>1980-12-16</td>
<td>0.113281</td>
<td>0.113281</td>
<td>0.112723</td>
<td>0.112723</td>
<td>0.086898</td>
<td>105728000</td>
</tr>
<tr>
<th>3</th>
<td>1980-12-17</td>
<td>0.115513</td>
<td>0.116071</td>
<td>0.115513</td>
<td>0.115513</td>
<td>0.089049</td>
<td>86441600</td>
</tr>
<tr>
<th>4</th>
<td>1980-12-18</td>
<td>0.118862</td>
<td>0.119420</td>
<td>0.118862</td>
<td>0.118862</td>
<td>0.091630</td>
<td>73449600</td>
</tr>
</tbody>
</table></div></details>
<p>We will refrain from displaying all the DataFrames, as they exhibit the same structural format. Nonetheless, it is essential to highlight that the data in this instance comprises six columns. For our analysis, we will concentrate on two specific columns: Date and Close. This focus will enable us to examine the closing prices over time while effectively utilizing the time series format.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Keeping only the two columns for each dataframe</span>
<span class="n">stock_GOOG</span> <span class="o">=</span> <span class="n">stock_GOOG</span><span class="p">[[</span><span class="s1">'Date'</span><span class="p">,</span> <span class="s1">'Close'</span><span class="p">]]</span>
<span class="n">stock_AAPL</span> <span class="o">=</span> <span class="n">stock_AAPL</span><span class="p">[[</span><span class="s1">'Date'</span><span class="p">,</span> <span class="s1">'Close'</span><span class="p">]]</span>
<span class="n">stock_MSFT</span> <span class="o">=</span> <span class="n">stock_MSFT</span><span class="p">[[</span><span class="s1">'Date'</span><span class="p">,</span> <span class="s1">'Close'</span><span class="p">]]</span>
<span class="n">stock_FCBK</span> <span class="o">=</span> <span class="n">stock_FCBK</span><span class="p">[[</span><span class="s1">'Date'</span><span class="p">,</span> <span class="s1">'Close'</span><span class="p">]]</span>
<span class="n">stock_AMZN</span> <span class="o">=</span> <span class="n">stock_AMZN</span><span class="p">[[</span><span class="s1">'Date'</span><span class="p">,</span> <span class="s1">'Close'</span><span class="p">]]</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Showing one of the 5 dataframes</span>
<span class="n">stock_MSFT</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Date</th>
<th>Close</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>1986-03-13</td>
<td>0.097222</td>
</tr>
<tr>
<th>1</th>
<td>1986-03-14</td>
<td>0.100694</td>
</tr>
<tr>
<th>2</th>
<td>1986-03-17</td>
<td>0.102431</td>
</tr>
<tr>
<th>3</th>
<td>1986-03-18</td>
<td>0.099826</td>
</tr>
<tr>
<th>4</th>
<td>1986-03-19</td>
<td>0.098090</td>
</tr>
</tbody>
</table></div></details>
<p>Now that we have removed the unnecessary columns, we can transform the DataFrames into time series by using the first column as the index. Since we have already converted the first column into date format using the <code>parse_dates</code> function, this step will allow us to utilize the date information for time series analysis.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Now we can use the first column as index </span>
<span class="n">stock_GOOG</span> <span class="o">=</span> <span class="n">stock_GOOG</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">stock_AAPL</span> <span class="o">=</span> <span class="n">stock_AAPL</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">stock_MSFT</span> <span class="o">=</span> <span class="n">stock_MSFT</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">stock_FCBK</span> <span class="o">=</span> <span class="n">stock_FCBK</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">stock_AMZN</span> <span class="o">=</span> <span class="n">stock_AMZN</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Now we can diplay the time series, let us show an example using Google</span>
<span class="n">stock_GOOG</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Close</th>
</tr>
<tr>
<th>Date</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2004-08-19</th>
<td>2.499133</td>
</tr>
<tr>
<th>2004-08-20</th>
<td>2.697639</td>
</tr>
<tr>
<th>2004-08-23</th>
<td>2.724787</td>
</tr>
<tr>
<th>2004-08-24</th>
<td>2.611960</td>
</tr>
<tr>
<th>2004-08-25</th>
<td>2.640104</td>
</tr>
</tbody>
</table></div></details>
<p>Now that the data is correctly formatted, we will proceed to combine all the time series into a single, comprehensive DataFrame. To maintain the time series structure, we will place each series into its respective column while preserving the dates as the index. To achieve this, it is essential to rename the "Close" column of each series appropriately. This will ensure clarity and facilitate subsequent analysis.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Renaming the series</span>
<span class="n">stock_GOOG</span> <span class="o">=</span> <span class="n">stock_GOOG</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">{</span><span class="s1">'Close'</span> <span class="p">:</span> <span class="s1">'GOOGL'</span><span class="p">})</span>
<span class="n">stock_AAPL</span> <span class="o">=</span> <span class="n">stock_AAPL</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">{</span><span class="s1">'Close'</span> <span class="p">:</span> <span class="s1">'AAPL'</span><span class="p">})</span>
<span class="n">stock_MSFT</span> <span class="o">=</span> <span class="n">stock_MSFT</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">{</span><span class="s1">'Close'</span> <span class="p">:</span> <span class="s1">'MSFT'</span><span class="p">})</span>
<span class="n">stock_FCBK</span> <span class="o">=</span> <span class="n">stock_FCBK</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">{</span><span class="s1">'Close'</span> <span class="p">:</span> <span class="s1">'META'</span><span class="p">})</span>
<span class="n">stock_AMZN</span> <span class="o">=</span> <span class="n">stock_AMZN</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span> <span class="o">=</span> <span class="p">{</span><span class="s1">'Close'</span> <span class="p">:</span> <span class="s1">'AMZN'</span><span class="p">})</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the result</span>
<span class="n">stock_GOOG</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>GOOGL</th>
</tr>
<tr>
<th>Date</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2004-08-19</th>
<td>2.499133</td>
</tr>
<tr>
<th>2004-08-20</th>
<td>2.697639</td>
</tr>
<tr>
<th>2004-08-23</th>
<td>2.724787</td>
</tr>
<tr>
<th>2004-08-24</th>
<td>2.611960</td>
</tr>
<tr>
<th>2004-08-25</th>
<td>2.640104</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Now we can combine the series into one dataframe</span>
<span class="n">data_all</span> <span class="o">=</span> <span class="n">stock_GOOG</span><span class="o">.</span><span class="n">merge</span><span class="p">(</span><span class="n">stock_AAPL</span><span class="p">,</span> <span class="n">left_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">right_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">data_all</span> <span class="o">=</span> <span class="n">data_all</span><span class="o">.</span><span class="n">merge</span><span class="p">(</span><span class="n">stock_MSFT</span><span class="p">,</span> <span class="n">left_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">right_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">data_all</span> <span class="o">=</span> <span class="n">data_all</span><span class="o">.</span><span class="n">merge</span><span class="p">(</span><span class="n">stock_FCBK</span><span class="p">,</span> <span class="n">left_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">right_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">data_all</span> <span class="o">=</span> <span class="n">data_all</span><span class="o">.</span><span class="n">merge</span><span class="p">(</span><span class="n">stock_AMZN</span><span class="p">,</span> <span class="n">left_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">right_index</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">data_all</span> <span class="o">=</span> <span class="n">data_all</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="n">data_all</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>GOOGL</th>
<th>AAPL</th>
<th>MSFT</th>
<th>META</th>
<th>AMZN</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2012-05-18</th>
<td>14.953949</td>
<td>18.942142</td>
<td>29.270000</td>
<td>38.230000</td>
<td>10.6925</td>
</tr>
<tr>
<th>2012-05-21</th>
<td>15.295419</td>
<td>20.045713</td>
<td>29.750000</td>
<td>34.029999</td>
<td>10.9055</td>
</tr>
<tr>
<th>2012-05-22</th>
<td>14.963912</td>
<td>19.891787</td>
<td>29.760000</td>
<td>31.000000</td>
<td>10.7665</td>
</tr>
<tr>
<th>2012-05-23</th>
<td>15.179603</td>
<td>20.377144</td>
<td>29.110001</td>
<td>32.000000</td>
<td>10.8640</td>
</tr>
<tr>
<th>2012-05-24</th>
<td>15.035145</td>
<td>20.190001</td>
<td>29.070000</td>
<td>33.029999</td>
<td>10.7620</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can represent the time series in a graph </span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_all</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'GOOGL'</span><span class="p">,</span> <span class="s1">'AAPL'</span><span class="p">,</span> <span class="s1">'MSFT'</span><span class="p">,</span> <span class="s1">'META'</span><span class="p">,</span> <span class="s1">'AMZN'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the price over time"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 1" data-asset="session-5/fig-1.png" loading="lazy"/></figure></details>
<p>The utilization of time series data enables us to resample the information into larger time frames. Since the data in this instance is recorded on a daily basis, we have the flexibility to aggregate it into broader time intervals, such as weekly, monthly, quarterly, yearly, or even decadal intervals. This resampling capability allows for more comprehensive analysis and insights over extended periods.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We use resample function - The "last" method takes the last value, any other aggregation could have been used (sum, mean...)</span>
<span class="n">data_all_month</span> <span class="o">=</span> <span class="n">data_all</span><span class="o">.</span><span class="n">resample</span><span class="p">(</span><span class="s1">'M'</span><span class="p">)</span><span class="o">.</span><span class="n">last</span><span class="p">()</span>
<span class="c1"># M for month</span>
<span class="n">data_all_month</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>GOOGL</th>
<th>AAPL</th>
<th>MSFT</th>
<th>META</th>
<th>AMZN</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2012-05-31</th>
<td>14.467273</td>
<td>20.633215</td>
<td>29.190001</td>
<td>29.600000</td>
<td>10.6455</td>
</tr>
<tr>
<th>2012-06-30</th>
<td>14.447597</td>
<td>20.857143</td>
<td>30.590000</td>
<td>31.100000</td>
<td>11.4175</td>
</tr>
<tr>
<th>2012-07-31</th>
<td>15.765158</td>
<td>21.812857</td>
<td>29.469999</td>
<td>21.709999</td>
<td>11.6650</td>
</tr>
<tr>
<th>2012-08-31</th>
<td>17.063293</td>
<td>23.758572</td>
<td>30.820000</td>
<td>18.059999</td>
<td>12.4135</td>
</tr>
<tr>
<th>2012-09-30</th>
<td>18.792063</td>
<td>23.825001</td>
<td>29.760000</td>
<td>21.660000</td>
<td>12.7160</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can represent the time series in a graph </span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_all_month</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'GOOGL'</span><span class="p">,</span> <span class="s1">'AAPL'</span><span class="p">,</span> <span class="s1">'MSFT'</span><span class="p">,</span> <span class="s1">'META'</span><span class="p">,</span> <span class="s1">'AMZN'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Month"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the price over the months"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 2" data-asset="session-5/fig-2.png" loading="lazy"/></figure></details>
<h2 id="III---The-usage-of-Time-Series-in-Finance">III - The usage of Time Series in Finance</h2><p>In financial analysis, the absolute values of stock prices may not provide a clear representation of their evolution, particularly because the scales can vary significantly between different stocks. For instance, comparing the price movements of Microsoft and Amazon may not yield meaningful insights due to these discrepancies. Consequently, it is common practice in finance to utilize returns and cumulative returns as more effective indicators of variations in stock performance.</p>
<p>Python facilitates the calculation of both returns and cumulative returns efficiently through the use of the Pandas library, which is specifically designed for handling time series data. This approach allows for a more coherent analysis of stock performance over time.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the returns</span>
<span class="n">data_returns</span> <span class="o">=</span> <span class="n">data_all</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span>
<span class="n">data_returns</span> <span class="o">=</span> <span class="n">data_returns</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="n">data_returns</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
<span class="c1"># It is important to remember that the returns are percentages</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>GOOGL</th>
<th>AAPL</th>
<th>MSFT</th>
<th>META</th>
<th>AMZN</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2012-05-21</th>
<td>0.022835</td>
<td>0.058260</td>
<td>0.016399</td>
<td>-0.109861</td>
<td>0.019921</td>
</tr>
<tr>
<th>2012-05-22</th>
<td>-0.021674</td>
<td>-0.007679</td>
<td>0.000336</td>
<td>-0.089039</td>
<td>-0.012746</td>
</tr>
<tr>
<th>2012-05-23</th>
<td>0.014414</td>
<td>0.024400</td>
<td>-0.021841</td>
<td>0.032258</td>
<td>0.009056</td>
</tr>
<tr>
<th>2012-05-24</th>
<td>-0.009517</td>
<td>-0.009184</td>
<td>-0.001374</td>
<td>0.032187</td>
<td>-0.009389</td>
</tr>
<tr>
<th>2012-05-25</th>
<td>-0.020094</td>
<td>-0.005360</td>
<td>-0.000344</td>
<td>-0.033909</td>
<td>-0.010918</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Let us show the reason why returns can be used but are not the most suitable</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_returns</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'GOOGL'</span><span class="p">,</span> <span class="s1">'AAPL'</span><span class="p">,</span> <span class="s1">'MSFT'</span><span class="p">,</span> <span class="s1">'META'</span><span class="p">,</span> <span class="s1">'AMZN'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Month"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Return"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the returns"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 3" data-asset="session-5/fig-3.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the cumulative returns </span>
<span class="n">data_cumulative_returns</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">data_returns</span><span class="p">)</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span>
<span class="n">data_cumulative_returns</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>GOOGL</th>
<th>AAPL</th>
<th>MSFT</th>
<th>META</th>
<th>AMZN</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2012-05-21</th>
<td>0.022835</td>
<td>0.058260</td>
<td>0.016399</td>
<td>-0.109861</td>
<td>0.019921</td>
</tr>
<tr>
<th>2012-05-22</th>
<td>0.000666</td>
<td>0.050134</td>
<td>0.016741</td>
<td>-0.189118</td>
<td>0.006921</td>
</tr>
<tr>
<th>2012-05-23</th>
<td>0.015090</td>
<td>0.075757</td>
<td>-0.005466</td>
<td>-0.162961</td>
<td>0.016039</td>
</tr>
<tr>
<th>2012-05-24</th>
<td>0.005430</td>
<td>0.065877</td>
<td>-0.006833</td>
<td>-0.136019</td>
<td>0.006500</td>
</tr>
<tr>
<th>2012-05-25</th>
<td>-0.014773</td>
<td>0.060164</td>
<td>-0.007175</td>
<td>-0.165315</td>
<td>-0.004489</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Displaying the cumulative returns</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_cumulative_returns</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'GOOGL'</span><span class="p">,</span> <span class="s1">'AAPL'</span><span class="p">,</span> <span class="s1">'MSFT'</span><span class="p">,</span> <span class="s1">'META'</span><span class="p">,</span> <span class="s1">'AMZN'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Month"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Cumulative returns"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the stock price in percentage over time"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 4" data-asset="session-5/fig-4.png" loading="lazy"/></figure></details>
<p>The data presented indicates that the Amazon stock price has experienced significant growth, approximately increasing by a factor of 17.5 since 2012, making it the stock with the highest variation (or return) over the past 12 years. Notably, this considerable return occurs despite Amazon's stock not being the most expensive relative to the other companies in the analysis. As illustrated in the accompanying graph depicting the evolution of stock prices over time, all stocks have seen their prices multiply by at least a factor of 10 since 2012. This underscores the remarkable performance of these stocks in the market.</p>
<p>In the realm of technical analysis in finance, econometric methods are commonly employed to analyze and predict trends within a time series. One such method is the Moving Average, which involves transforming a series by calculating averages over different segments (or intervals) of the complete dataset. This technique is primarily utilized to identify the directional trend of a stock price's evolution.</p>
<p>In this example, we will focus solely on the Moving Average for Apple Inc.'s stock price to avoid redundancy, illustrating how this method can provide insights into the stock's performance over time.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We can either calculate the moving average on the stock price or the cumulative return. We will choose the stock price</span>
<span class="n">stock_AAPL</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>AAPL</th>
</tr>
<tr>
<th>Date</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>1980-12-12</th>
<td>0.128348</td>
</tr>
<tr>
<th>1980-12-15</th>
<td>0.121652</td>
</tr>
<tr>
<th>1980-12-16</th>
<td>0.112723</td>
</tr>
<tr>
<th>1980-12-17</th>
<td>0.115513</td>
</tr>
<tr>
<th>1980-12-18</th>
<td>0.118862</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># First of, select a portion of the data, let us keep the data from 2014 to 2024, loc function allows us to do it </span>
<span class="n">stock_AAPL_MA</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">stock_AAPL</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="s1">'2014-01-01'</span><span class="p">:])</span> <span class="c1"># (a : b) =&gt; a from b, (a : ) =&gt; from a to the end</span>
<span class="n">stock_AAPL_MA</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>AAPL</th>
</tr>
<tr>
<th>Date</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-01-02</th>
<td>19.754642</td>
</tr>
<tr>
<th>2014-01-03</th>
<td>19.320715</td>
</tr>
<tr>
<th>2014-01-06</th>
<td>19.426071</td>
</tr>
<tr>
<th>2014-01-07</th>
<td>19.287144</td>
</tr>
<tr>
<th>2014-01-08</th>
<td>19.409286</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the moving average on 30 days </span>
<span class="n">stock_AAPL_MA</span><span class="p">[</span><span class="s1">'MA_30'</span><span class="p">]</span> <span class="o">=</span>  <span class="n">stock_AAPL_MA</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="mi">30</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="c1"># Remove the na</span>
<span class="n">stock_AAPL_MA</span> <span class="o">=</span> <span class="n">stock_AAPL_MA</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="n">stock_AAPL_MA</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>AAPL</th>
<th>MA_30</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-02-13</th>
<td>19.443930</td>
<td>19.031857</td>
</tr>
<tr>
<th>2014-02-14</th>
<td>19.428213</td>
<td>19.020976</td>
</tr>
<tr>
<th>2014-02-18</th>
<td>19.499643</td>
<td>19.026940</td>
</tr>
<tr>
<th>2014-02-19</th>
<td>19.191786</td>
<td>19.019131</td>
</tr>
<tr>
<th>2014-02-20</th>
<td>18.969643</td>
<td>19.008548</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the stock price and the moving average</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">stock_AAPL_MA</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">label</span><span class="o">=</span><span class="s1">'AAPL'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Showing the stock price and the Moving average"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 5" data-asset="session-5/fig-5.png" loading="lazy"/></figure></details>
<aside class="nb-exercise"><span class="nb-ex-tag">Blitz exercise</span><h3><em>Blitz Exercise (20 min)</em></h3><p>This exercise is structured into several parts to facilitate your understanding of the concepts we have covered:</p><ol>
<li>Create a DataFrame containing the cumulative return of Microsoft’s stock price.</li>
<li>Select the data for the last five years.</li>
<li>Resample the data on a weekly basis.</li>
<li>Calculate the 3-week moving average of the cumulative return based on the weekly resampled data.</li>
</ol><p>By completing these tasks, you will gain practical experience in manipulating time series data and applying moving averages in Python.ython.</p></aside><h2 id="IV---Linear-Regression,-using-Ordinary-Least-Squares-Method">IV - Linear Regression, using Ordinary Least Squares Method</h2><p>Moving averages effectively illustrate the trend of a stock price, while the movement of a stock price can also be represented using a Linear Model. This model estimates a linear relationship between a dependent variable (regressand) Y (dependent variable) and one or more explanatory variables (regressors) X1, X2 ... Xn.</p>
<p>In Python, this is typically accomplished through a linear regression model utilizing the Ordinary Least Squares (OLS) method. This approach automatically identifies the line that minimizes the sum of the squared distances between the line and the observed data points on the graph.</p>
<p>In our case, given that the only variables available are the closing price and the date, we will use the date as the regressor and the closing price as the regressand. It is common practice to divide the data into two sets: a training set used to fit the model and a test set used to evaluate the model's performance.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Elimination of the data before 2014</span>
<span class="n">stock_AAPL_2014</span> <span class="o">=</span> <span class="n">stock_AAPL</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="s1">'2014-01-01'</span><span class="p">:]</span>
<span class="n">stock_AAPL_2014</span> <span class="o">=</span> <span class="n">stock_AAPL_2014</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
<span class="n">stock_AAPL_2014</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>

<span class="c1"># Using the splitter from the sklearn package</span>
<span class="kn">from</span> <span class="nn">sklearn.model_selection</span> <span class="kn">import</span> <span class="n">train_test_split</span>
<span class="c1"># Using 20 % as the test set</span>
<span class="n">train</span><span class="p">,</span> <span class="n">test</span> <span class="o">=</span> <span class="n">train_test_split</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">,</span> <span class="n">test_size</span><span class="o">=</span><span class="mf">0.20</span><span class="p">)</span>

<span class="c1"># Import package for linear regression</span>
<span class="kn">from</span> <span class="nn">sklearn.linear_model</span> <span class="kn">import</span> <span class="n">LinearRegression</span>

<span class="c1"># We use the index (date) as the regressor and the close as the regressand</span>
<span class="n">X_train</span> <span class="o">=</span> <span class="n">train</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">]</span><span class="o">.</span><span class="n">values</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="s2">"float64"</span><span class="p">)</span>
<span class="n">y_train</span> <span class="o">=</span> <span class="n">train</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span>

<span class="c1"># Storing the model as an Object</span>
<span class="n">linear_model</span> <span class="o">=</span> <span class="n">LinearRegression</span><span class="p">()</span>
<span class="c1"># Using the fit method to create the model</span>
<span class="n">linear_model</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">X_train</span><span class="p">,</span> <span class="n">y_train</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>LinearRegression()</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the results of the regression</span>
<span class="nb">print</span><span class="p">(</span><span class="s1">'Slope: '</span><span class="p">,</span> <span class="n">linear_model</span><span class="o">.</span><span class="n">coef_</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="s1">'Intercept: '</span><span class="p">,</span> <span class="n">linear_model</span><span class="o">.</span><span class="n">intercept_</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Slope:  5.892474026648293e-16
Intercept:  -832.1329169130705</pre></details>
<p>n this analysis, we observe that the intercept (alpha) is approximately -832.7499401708747 a while the coefficient of the linear regression is approximately 5.898140703014664e-16. This indicates that to predict the closing price for the next day, we multiply the date value by 5.898140703014664e-16.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We can now try to test the model using the X_test</span>
<span class="n">X_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">]</span><span class="o">.</span><span class="n">values</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="s2">"float64"</span><span class="p">)</span>
<span class="n">y_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span>
<span class="n">y_pred</span> <span class="o">=</span> <span class="n">linear_model</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">X_test</span><span class="p">)</span>
<span class="n">test</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]</span> <span class="o">=</span> <span class="n">y_pred</span>
<span class="n">test</span><span class="p">[</span><span class="s1">'Error'</span><span class="p">]</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]</span> <span class="o">-</span> <span class="n">test</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span>

<span class="c1"># Plot predicted vs actual prices</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">y_test</span><span class="p">,</span> <span class="n">y_pred</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">y_test</span><span class="p">,</span> <span class="n">y_test</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s2">"red"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Actual Prices'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Predicted Prices'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Predicted vs Actual Price'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 6" data-asset="session-5/fig-6.png" loading="lazy"/></figure></details>
<p>This graph illustrates the comparison between the predicted prices (represented by the red line) and the actual prices (depicted by the blue points). The proximity of the blue points to the red line indicates the accuracy of the predictions; the closer the points are to the line, the more reliable the model's predictions are. This visual representation allows for an immediate assessment of the model's performance in forecasting stock prices.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Trying with the whole data</span>
<span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]</span> <span class="o">=</span> <span class="n">linear_model</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">]</span><span class="o">.</span><span class="n">values</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="s2">"float64"</span><span class="p">))</span>
<span class="n">stock_AAPL_2014</span> <span class="o">=</span> <span class="n">stock_AAPL_2014</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">stock_AAPL_2014</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">10</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>AAPL</th>
<th>Pred</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-01-02</th>
<td>19.754642</td>
<td>-13.891717</td>
</tr>
<tr>
<th>2014-01-03</th>
<td>19.320715</td>
<td>-13.840806</td>
</tr>
<tr>
<th>2014-01-06</th>
<td>19.426071</td>
<td>-13.688073</td>
</tr>
<tr>
<th>2014-01-07</th>
<td>19.287144</td>
<td>-13.637162</td>
</tr>
<tr>
<th>2014-01-08</th>
<td>19.409286</td>
<td>-13.586251</td>
</tr>
<tr>
<th>2014-01-09</th>
<td>19.161428</td>
<td>-13.535340</td>
</tr>
<tr>
<th>2014-01-10</th>
<td>19.033571</td>
<td>-13.484429</td>
</tr>
<tr>
<th>2014-01-13</th>
<td>19.133215</td>
<td>-13.331696</td>
</tr>
<tr>
<th>2014-01-14</th>
<td>19.513929</td>
<td>-13.280786</td>
</tr>
<tr>
<th>2014-01-15</th>
<td>19.905714</td>
<td>-13.229875</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the plot</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">stock_AAPL_2014</span><span class="o">.</span><span class="n">plot</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Stock price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Comparison linear regression vs real"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 7" data-asset="session-5/fig-7.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the error</span>
<span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Error'</span><span class="p">]</span> <span class="o">=</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]</span> <span class="o">-</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span>

<span class="c1"># Plotting the error</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Error'</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Error"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Displaying the stock price error by date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 8" data-asset="session-5/fig-8.png" loading="lazy"/></figure></details>
<p>Analyzing the residuals, we observe that the predictions are not highly accurate, suggesting that a simple linear model may not be the most appropriate choice for forecasting Apple's stock price. This indicates that the relationship between the variables may be more complex and that other modeling techniques or additional variables might be needed to improve prediction accuracy.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Import norm package to plot normal distribution</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="kn">from</span> <span class="nn">scipy.stats</span> <span class="kn">import</span> <span class="n">norm</span>

<span class="c1"># Fit a normal distribution to the data:</span>
<span class="n">mu</span><span class="p">,</span> <span class="n">std</span> <span class="o">=</span> <span class="n">norm</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span> <span class="o">-</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">])</span>

<span class="n">ax</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">distplot</span><span class="p">((</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span> <span class="o">-</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]),</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Residual Histogram &amp; Distribution'</span><span class="p">)</span>

<span class="c1"># Calculate the pdf over a range of values         </span>
<span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="nb">min</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span> <span class="o">-</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]),</span> <span class="nb">max</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">]</span> <span class="o">-</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]),</span> <span class="mi">100</span><span class="p">)</span>
<span class="n">p</span> <span class="o">=</span> <span class="n">norm</span><span class="o">.</span><span class="n">pdf</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">mu</span><span class="p">,</span> <span class="n">std</span><span class="p">)</span>

<span class="c1"># And plot on the same axes that seaborn put the histogram</span>
<span class="n">ax</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">p</span><span class="p">,</span> <span class="s1">'r'</span><span class="p">,</span> <span class="n">lw</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Normal Distribution'</span><span class="p">)</span> 

<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 9" data-asset="session-5/fig-9.png" loading="lazy"/></figure></details>
<p>A suitable model would exhibit a normal distribution, characterized by lower amplitude for higher residuals. However, this graph does not display a normal distribution, indicating that the model is not appropriate for predicting Apple’s stock price.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Import metrics package from sklearn for statistical analysis</span>
<span class="kn">from</span> <span class="nn">sklearn</span> <span class="kn">import</span> <span class="n">metrics</span>

<span class="nb">print</span><span class="p">(</span><span class="s1">'Mean Absolute Error:'</span><span class="p">,</span> <span class="n">metrics</span><span class="o">.</span><span class="n">mean_absolute_error</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">],</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]))</span>  
<span class="nb">print</span><span class="p">(</span><span class="s1">'Mean Squared Error:'</span><span class="p">,</span> <span class="n">metrics</span><span class="o">.</span><span class="n">mean_squared_error</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">],</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">]))</span>  
<span class="nb">print</span><span class="p">(</span><span class="s1">'Root Mean Squared Error:'</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">metrics</span><span class="o">.</span><span class="n">mean_squared_error</span><span class="p">(</span><span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'AAPL'</span><span class="p">],</span> <span class="n">stock_AAPL_2014</span><span class="p">[</span><span class="s1">'Pred'</span><span class="p">])))</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Mean Absolute Error: 18.459360273635824
Mean Squared Error: 465.73969384840933
Root Mean Squared Error: 21.581003077901855</pre></details>
<aside class="nb-exercise"><span class="nb-ex-tag">Exercise</span><h3>V - Multiple Linear Regression (<em>In class exercise or assignment</em>)</h3><p>In this section, rather than relying on a single regressor to construct a linear model, we can incorporate multiple explanatory variables. Thus, the equation can be expressed as <span class="nb-math">Y = a + X<sub>1</sub> · b<sub>1</sub> + X<sub>2</sub> · b<sub>2</sub> + ... + X<sub>n</sub> · b<sub>n</sub></span>. We will continue to use Apple’s stock price and develop a linear regression model based on the other variables to estimate the closing price.</p></aside><div class="nb-code"><pre><span></span><span class="c1"># Defining the data</span>
<span class="n">data_multiple_regression</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/Session 5/AAPL.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">])</span>
<span class="n">data_multiple_regression</span> <span class="o">=</span> <span class="n">data_multiple_regression</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">data_multiple_regression</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Open</th>
<th>High</th>
<th>Low</th>
<th>Close</th>
<th>Adj Close</th>
<th>Volume</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>1980-12-12</th>
<td>0.128348</td>
<td>0.128906</td>
<td>0.128348</td>
<td>0.128348</td>
<td>0.098943</td>
<td>469033600</td>
</tr>
<tr>
<th>1980-12-15</th>
<td>0.122210</td>
<td>0.122210</td>
<td>0.121652</td>
<td>0.121652</td>
<td>0.093781</td>
<td>175884800</td>
</tr>
<tr>
<th>1980-12-16</th>
<td>0.113281</td>
<td>0.113281</td>
<td>0.112723</td>
<td>0.112723</td>
<td>0.086898</td>
<td>105728000</td>
</tr>
<tr>
<th>1980-12-17</th>
<td>0.115513</td>
<td>0.116071</td>
<td>0.115513</td>
<td>0.115513</td>
<td>0.089049</td>
<td>86441600</td>
</tr>
<tr>
<th>1980-12-18</th>
<td>0.118862</td>
<td>0.119420</td>
<td>0.118862</td>
<td>0.118862</td>
<td>0.091630</td>
<td>73449600</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Exercise using Multiple Linear Regression</span></pre></div>
<p>The low values of the Mean Absolute Error (MAE), Mean Squared Error (MSE), and Root Mean Squared Error (RMSE) further confirm the model's accuracy:</p>
<ul>
<li><code>MAE</code>: This represents the average absolute difference between the predicted and actual values. The MAE is preferred for its ease of interpretation, its resistance to outliers, and the fact that it is expressed in the same units as the target variable.</li>
<li><code>MSE</code>: This metric calculates the average of the squared errors. It is often favored over MAE because it places greater emphasis on larger errors, thus providing a better measure of error variability.</li>
<li><code>RMSE</code>: The square root of the MSE, this value also penalizes large errors and is expressed in the same units as the target variable.</li>
<li><code>R2</code>: Also known as the "coefficient of determination," it is calculated (1 - RSS / TSS), where RSS is the sum of squared residuals and TSS is the total sum of squares (the variation between the average and actual values). R² indicates the proportion of the variability in Y that can be explained by the explanatory variables.</li>
</ul>
` },
         { slug: "session-6", label: "Session 6", title: "Building a portfolio and valuing different types of assets", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>This session aims to provide you with methodologies for valuing various types of financial securities and for building an equity portfolio. The session’s content will cover the following key topics:</p>
<ul>
<li>Bond Pricing and Valuation</li>
<li>Stock Pricing</li>
<li>Constructing an Equity Portfolio</li>
<li>Basic Trading Strategies</li>
<li>Understanding Derivatives</li>
</ul></div>
<div class="nb-code"><pre><span></span><span class="kn">import</span> <span class="nn">warnings</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="n">MAIN_PATH</span> <span class="o">=</span> <span class="s1">'C:/Users/evche/Documents/Lessons - Audencia BS/Data/Session 6'</span>
<span class="c1"># Eliminating the waring messages </span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s2">"ignore"</span><span class="p">)</span></pre></div><h2 id="I---Bonds-:-The-(assumedly)-fixed-income">I - Bonds : The (assumedly) fixed income</h2>
<p><code>Bonds</code> are financial instruments issued by corporations or governments to raise capital, typically treated as liabilities or debt. These instruments offer investors fixed periodic interest payments (referred to as coupons, wwhich may be <strong>fixed or variable depending on the bond type</strong>) and return the principal (or face value) at maturity. A bond that does not provide periodic interest payments is known as a zero-coupon bond. The following terms are crucial in understanding bond valuation:</p>
<ul>
<li>Face Value: The original value of the bond when issued.</li>
<li>Par Value: The amount the issuer agrees to repay the bondholder at maturity (usually equivalent to the face value).</li>
<li>Coupons: The fixed periodic interest payments made to the bondholder, not to be confused with the market interest rate.</li>
<li>Market Interest Rate (r): The prevailing rate of interest in the market. In the scope of the class the yield curve will be assumedly flat for simplicity purposes, <em>in real-world valuation uses the term structure of rates</em>)</li>
<li>Present Value (PV): The sum of the discounted future cash flows from both coupon payments and the face value. It reflects the price an investor should be willing to pay for the bond. The formula for present value is: <span class="nb-math nb-math-block">PV = ∑ (Coupons/(1 + r)<sup>t</sup>) + FV /(1 + r)<sup>T</sup></span></li>
</ul>
<p>There are typically three main scenarios in bond valuation:</p>
<ul>
<li>Profit Calculation: The Trading Price, Face Value, and Interest Rates are known. These allow us to calculate the profit. Profit derives from the difference between the bond's market price and the present expected value of cash flows (coupons + face value), discounted at the interest rate.</li>
<li>Present Value Calculation: The Face Value and Interest Rate are known, so we compute the Present Value.</li>
<li>Yield to Maturity (YTM) Calculation: The Face Value and Present Value are known, and we solve for the market interest rate or * Yield to Maturity (YTM).</li>
</ul>
<h3 id="1)-Profit-Calculation">1) Profit Calculation</h3><p>The profit on a bond is determined by the periodic interest payments (coupons), the bond’s purchase price (typically the present value), and the selling price or face value upon maturity.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Definition of the function</span>
<span class="k">def</span> <span class="nf">calculate_bond_profit</span><span class="p">(</span><span class="n">coupon_value</span><span class="p">,</span> <span class="n">number_of_payments</span><span class="p">,</span> <span class="n">years</span><span class="p">,</span> <span class="n">selling_price</span><span class="p">,</span> <span class="n">purchase_price</span><span class="p">):</span>
    <span class="c1"># Calculation of the sum of interests</span>
    <span class="n">coupons</span> <span class="o">=</span> <span class="n">coupon_value</span> <span class="o">*</span> <span class="n">number_of_payments</span> <span class="o">*</span> <span class="n">years</span>
    <span class="c1"># Profit</span>
    <span class="k">return</span> <span class="n">selling_price</span> <span class="o">-</span> <span class="n">purchase_price</span> <span class="o">+</span> <span class="n">coupons</span>

<span class="c1"># Inputs</span>
<span class="n">coupon_rate</span> <span class="o">=</span> <span class="mf">0.12</span>
<span class="n">nb_payments_by_year</span> <span class="o">=</span> <span class="mi">2</span>
<span class="n">present_value</span> <span class="o">=</span> <span class="mi">105</span>
<span class="n">face_value</span> <span class="o">=</span> <span class="mi">100</span> 
<span class="n">maturity</span> <span class="o">=</span> <span class="mi">3</span>

<span class="c1"># Coupon (semi annual)</span>
<span class="n">coupon</span> <span class="o">=</span> <span class="n">coupon_rate</span> <span class="o">*</span> <span class="n">face_value</span> <span class="o">/</span> <span class="n">nb_payments_by_year</span>

<span class="c1"># Test</span>
<span class="n">bond_profit</span> <span class="o">=</span> <span class="n">calculate_bond_profit</span><span class="p">(</span><span class="n">coupon</span><span class="p">,</span> <span class="n">nb_payments_by_year</span><span class="p">,</span> <span class="n">maturity</span><span class="p">,</span> <span class="n">face_value</span><span class="p">,</span> <span class="n">present_value</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The profit generated by the bond is $"</span><span class="p">,</span> <span class="n">bond_profit</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The profit generated by the bond is $ 31.0</pre></details>
<p>It is important to understand that the Face Value and Present Value of a bond are not always identical, due to fluctuations in interest rates and market conditions. The only hypothetical scenario where the Present Value equals the Face Value is when the bond does not pay any coupons and the interest rate is 0%. However, this is unrealistic, as investors generally seek returns on their investments.</p>
<aside class="nb-exercise"><span class="nb-ex-tag">Exercise</span><h3>2) Calculating the Present Value (<em>In class exercise or assignment</em>)</h3></aside><p><strong>Question :</strong> Are the calculations and measures of Present Value (PV) and Yield to Maturity (YTM) comparable to any other metrics used in Corporate Finance?</p>
<h3 id="3)-Calculating-the-Yield-to-Maturity-(Not-to-be-known-in-the-scope-of-this-class)">3) Calculating the Yield to Maturity (Not to be known in the scope of this class)</h3>
<div class="nb-code"><pre><span></span><span class="c1"># We have to use a optimized solver, a library exists in Python</span>
<span class="kn">import</span> <span class="nn">scipy.optimize</span> <span class="k">as</span> <span class="nn">optimize</span>

<span class="k">def</span> <span class="nf">ytm_function</span><span class="p">(</span><span class="n">ytm</span><span class="p">,</span> <span class="n">face_value</span><span class="p">,</span> <span class="n">coupon</span><span class="p">,</span> <span class="n">periods</span><span class="p">,</span> <span class="n">current_price</span><span class="p">):</span>
    <span class="c1"># Define a function solve the problem by determining ytm for which Current Price = Bond Price</span>
    <span class="k">return</span> <span class="n">calculate_present_value</span><span class="p">(</span><span class="n">coupon</span><span class="p">,</span> <span class="n">periods</span><span class="p">,</span> <span class="n">face_value</span><span class="p">,</span> <span class="n">ytm</span><span class="p">)</span> <span class="o">-</span> <span class="n">current_price</span>

<span class="k">def</span> <span class="nf">calculate_ytm</span><span class="p">(</span><span class="n">face_value</span><span class="p">,</span> <span class="n">coupon</span><span class="p">,</span> <span class="n">periods</span><span class="p">,</span> <span class="n">current_price</span><span class="p">):</span>
    <span class="c1"># With Newton optimization determine the ytm for which the function has an optimized result (0)</span>
    <span class="n">ytm</span> <span class="o">=</span> <span class="n">optimize</span><span class="o">.</span><span class="n">newton</span><span class="p">(</span><span class="n">ytm_function</span><span class="p">,</span> <span class="n">x0</span><span class="o">=</span><span class="mf">0.05</span><span class="p">,</span> <span class="n">args</span><span class="o">=</span><span class="p">(</span><span class="n">face_value</span><span class="p">,</span> <span class="n">coupon</span><span class="p">,</span> <span class="n">periods</span><span class="p">,</span> <span class="n">current_price</span><span class="p">))</span>
    <span class="k">return</span> <span class="n">ytm</span>

<span class="c1"># Inputs</span>
<span class="n">mk_interest_rate</span> <span class="o">=</span> <span class="mf">0.06</span>
<span class="n">face_value</span> <span class="o">=</span> <span class="mi">1000</span>
<span class="n">maturity</span> <span class="o">=</span> <span class="mi">3</span><span class="err">²</span>
<span class="n">coupon_rate</span> <span class="o">=</span> <span class="mf">0.05</span>
<span class="n">coupon</span> <span class="o">=</span> <span class="n">coupon_rate</span> <span class="o">*</span> <span class="n">face_value</span>

<span class="n">current_price</span> <span class="o">=</span> <span class="mi">950</span>

<span class="n">ytm</span> <span class="o">=</span> <span class="n">calculate_ytm</span><span class="p">(</span><span class="n">face_value</span><span class="p">,</span> <span class="n">coupon</span><span class="p">,</span> <span class="n">maturity</span><span class="p">,</span> <span class="n">current_price</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">"The Yield to Maturity (YTM) for this example is </span><span class="si">{</span><span class="n">ytm</span><span class="w"> </span><span class="o">*</span><span class="w"> </span><span class="mi">100</span><span class="si">:</span><span class="s2">.2f</span><span class="si">}</span><span class="s2">%"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The Yield to Maturity (YTM) for this example is 6.90%</pre></details>
<h2>II - Equity / Stocks : A share of a company with uncertain return</h2><p>Investing in the stock market involves purchasing shares of a company, representing partial ownership. The value of a stock can be assessed in two primary ways:</p><ul>
<li>Market Value: This is the share price determined by the total value of the company’s outstanding shares in the stock market. It is typically used for publicly traded companies and serves as a reference for trading.</li>
<li>Book Value: This reflects the net value of a company's equity as reported on its balance sheet (accounting-based valuation).</li>
</ul><p>Unlike bonds, investing in stocks does not guarantee periodic interest payments or the return of the initial investment if the company goes bankrupt. However, shareholders often have voting rights on corporate matters at shareholder meetings (for voting stocks). As a result, investing in stocks carries more risk than fixed-income instruments, but it also offers the potential for higher returns.</p><p>In financial analysis, two key measures are commonly used to evaluate stock performance: returns and log returns. While other metrics such as CAGR (Compound Annual Growth Rate) and cumulative return can also be used, these will be discussed in future sessions.</p><aside class="nb-exercise"><span class="nb-ex-tag">Exercise</span><h3>Exercise : Measuring the performance of a stock</h3><p>Write a program in Jupyter that, given a series of daily closing prices for a stock of your choice, computes both the simple returns and the log returns of the stock. Compare the two measures and briefly comment on when the difference between them becomes material.</p></aside><aside class="nb-exercise"><span class="nb-ex-tag">Blitz exercise</span><h3><em>Blitz Exercise (10 min)</em></h3><p>Although returns and log returns are similar, they are not identical. Returns are more intuitive and straightforward to interpret, but log returns are widely favored in finance due to several advantages:</p><ul>
<li>Log returns can be added over time to calculate cumulative returns, making them easier to manipulate.</li>
<li>They scale linearly, allowing comparisons of performance across different time periods.</li>
<li>Log returns can easily be converted back (in case of single period) to standard returns with continuous compounding</li>
</ul></aside><h2 id="III---Construction-of-a-portfolio-by-allocating-different-weights">III - Construction of a portfolio by allocating different weights</h2>
<p>To build a portfolio, one must select multiple stocks and assign a specific weight to each stock within the portfolio. Weighting a portfolio means allocating a portion of the total investment across various stocks. Effective portfolio construction requires selecting stocks that are not strongly correlated, which helps diversify the portfolio and manage risk. For example, in this session, we will use stocks from the CAC 40 index.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Reading the dataframe that contains the stocks of the CAC 40</span>
<span class="n">cac_data_prices</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_excel</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/CAC 40.xlsx'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">index_col</span><span class="o">=</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="c1"># Eliminate the first column (Time in days)</span>
<span class="n">cac_data_prices</span> <span class="o">=</span> <span class="n">cac_data_prices</span><span class="o">.</span><span class="n">loc</span><span class="p">[:,</span> <span class="s1">'AIRP.PA'</span><span class="p">:]</span>
<span class="n">cac_data_prices</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>AIRP.PA</th>
<th>AXAF.PA</th>
<th>BOUY.PA</th>
<th>BNPP.PA</th>
<th>TCFP.PA</th>
<th>CAPP.PA</th>
<th>ESLX.PA</th>
<th>OREP.PA</th>
<th>LVMH.PA</th>
<th>MICP.PA</th>
<th>...</th>
<th>VIE.PA</th>
<th>VIV.PA</th>
<th>EUFI.PA</th>
<th>CAGR.PA</th>
<th>MT.AS</th>
<th>ENGIE.PA</th>
<th>LEGD.PA</th>
<th>WLN.PA</th>
<th>STLA.PA</th>
<th>CAC40</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-06-27</th>
<td>78.428267</td>
<td>17.510</td>
<td>30.400</td>
<td>49.410</td>
<td>44.385</td>
<td>52.48</td>
<td>77.87</td>
<td>125.90</td>
<td>126.487209</td>
<td>88.01</td>
<td>...</td>
<td>13.734616</td>
<td>7.444825</td>
<td>22.300</td>
<td>10.600</td>
<td>25.240572</td>
<td>19.702120</td>
<td>44.955</td>
<td>16.4</td>
<td>5.831555</td>
<td>4436.99</td>
</tr>
<tr>
<th>2014-06-30</th>
<td>79.370082</td>
<td>17.455</td>
<td>30.390</td>
<td>49.545</td>
<td>44.175</td>
<td>52.10</td>
<td>77.45</td>
<td>125.85</td>
<td>126.892762</td>
<td>87.26</td>
<td>...</td>
<td>13.416439</td>
<td>7.384903</td>
<td>22.460</td>
<td>10.300</td>
<td>25.194046</td>
<td>19.556214</td>
<td>44.685</td>
<td>16.6</td>
<td>5.717678</td>
<td>4422.84</td>
</tr>
<tr>
<th>2014-07-01</th>
<td>80.239450</td>
<td>17.575</td>
<td>30.345</td>
<td>51.330</td>
<td>44.360</td>
<td>52.65</td>
<td>78.07</td>
<td>125.90</td>
<td>127.073007</td>
<td>88.29</td>
<td>...</td>
<td>13.618915</td>
<td>7.494416</td>
<td>22.240</td>
<td>10.605</td>
<td>25.426678</td>
<td>19.609713</td>
<td>44.890</td>
<td>16.4</td>
<td>5.892466</td>
<td>4461.12</td>
</tr>
<tr>
<th>2014-07-02</th>
<td>80.175053</td>
<td>17.590</td>
<td>29.750</td>
<td>51.010</td>
<td>43.955</td>
<td>52.88</td>
<td>77.27</td>
<td>125.60</td>
<td>126.126719</td>
<td>88.60</td>
<td>...</td>
<td>13.223605</td>
<td>7.417963</td>
<td>22.625</td>
<td>10.560</td>
<td>25.833784</td>
<td>19.585395</td>
<td>44.760</td>
<td>16.3</td>
<td>5.937487</td>
<td>4444.72</td>
</tr>
<tr>
<th>2014-07-03</th>
<td>81.382508</td>
<td>18.150</td>
<td>30.310</td>
<td>51.250</td>
<td>44.300</td>
<td>55.74</td>
<td>77.63</td>
<td>127.25</td>
<td>127.839050</td>
<td>89.06</td>
<td>...</td>
<td>13.209143</td>
<td>7.550205</td>
<td>22.980</td>
<td>10.705</td>
<td>26.264153</td>
<td>19.658348</td>
<td>45.415</td>
<td>16.4</td>
<td>6.040770</td>
<td>4489.88</td>
</tr>
</tbody>
</table></div></details>
<p>A common method of diversification is to invest in the entire index or all 40 stocks within the CAC 40. However, investing in so many stocks is often inefficient and impractical. Instead, we will select a smaller group of stocks (five in this case) to form the portfolio.</p>
<div class="nb-code"><pre><span></span><span class="c1"># First of all, let us compute the returns to scale the data </span>
<span class="n">cac_data_returns</span> <span class="o">=</span> <span class="n">cac_data_prices</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span><span class="n">q</span>
<span class="c1"># Then we can calculate the correlations</span>
<span class="n">corMaxtrix</span> <span class="o">=</span> <span class="n">cac_data_returns</span><span class="o">.</span><span class="n">corr</span><span class="p">()</span>
<span class="c1"># Showing the result</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">cmap</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">diverging_palette</span><span class="p">(</span><span class="mi">230</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="n">as_cmap</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">set_theme</span><span class="p">(</span><span class="n">rc</span><span class="o">=</span><span class="p">{</span><span class="s1">'figure.figsize'</span><span class="p">:(</span><span class="mi">15</span><span class="p">,</span><span class="mi">15</span><span class="p">)})</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Correlation Matrix of the stocks'</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">heatmap</span><span class="p">(</span><span class="n">corMaxtrix</span><span class="p">,</span> <span class="n">annot</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">cmap</span><span class="o">=</span><span class="n">cmap</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 1" data-asset="session-6/fig-1.png" loading="lazy"/></figure></details>
<p>Based on a correlation heatmap, we can identify the following low pairwise correlation stocks: HRMS.PA, EUFI.PA, CARR.PA, ALSO.PA, and DAST.PA.</p>
<div class="nb-code"><pre><span></span><span class="n">selected_stocks</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'HRMS.PA'</span><span class="p">,</span> <span class="s1">'EUFI.PA'</span><span class="p">,</span><span class="s1">'CARR.PA'</span><span class="p">,</span> <span class="s1">'ALSO.PA'</span><span class="p">,</span><span class="s1">'DAST.PA'</span><span class="p">]</span>
<span class="c1"># Creating a dataframe of the selected stocks</span>
<span class="n">data_portfolio</span> <span class="o">=</span> <span class="n">cac_data_returns</span><span class="o">.</span><span class="n">loc</span><span class="p">[:,</span> <span class="n">selected_stocks</span><span class="p">]</span>
<span class="c1"># Creating the return of the equally weighted portfolio =&gt; Return = The average of the returns</span>
<span class="n">data_portfolio</span><span class="p">[</span><span class="s1">'Average'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_portfolio</span><span class="p">[</span><span class="n">selected_stocks</span><span class="p">]</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">axis</span> <span class="o">=</span> <span class="mi">1</span><span class="p">)</span><span class="o">/</span><span class="nb">len</span><span class="p">(</span><span class="n">selected_stocks</span><span class="p">)</span>
<span class="n">data_portfolio</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>HRMS.PA</th>
<th>EUFI.PA</th>
<th>CARR.PA</th>
<th>ALSO.PA</th>
<th>DAST.PA</th>
<th>Average</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-06-27</th>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
</tr>
<tr>
<th>2014-06-30</th>
<td>0.016981</td>
<td>0.007175</td>
<td>-0.008100</td>
<td>-0.007086</td>
<td>-0.000957</td>
<td>0.001603</td>
</tr>
<tr>
<th>2014-07-01</th>
<td>0.001855</td>
<td>-0.009795</td>
<td>0.013920</td>
<td>-0.011080</td>
<td>0.019264</td>
<td>0.002833</td>
</tr>
<tr>
<th>2014-07-02</th>
<td>0.000000</td>
<td>0.017311</td>
<td>0.020502</td>
<td>-0.013673</td>
<td>-0.005012</td>
<td>0.003826</td>
</tr>
<tr>
<th>2014-07-03</th>
<td>0.005926</td>
<td>0.015691</td>
<td>0.003049</td>
<td>0.004043</td>
<td>0.013223</td>
<td>0.008386</td>
</tr>
</tbody>
</table></div></details>
<p>After selecting the stocks, we can assign different weights to each. In an equally weighted portfolio, each stock is given a 20% allocation of the total investment. However, weights can be adjusted to assign different proportions of the investment to each stock. The portfolio's return is then calculated as a weighted average of the returns of the individual stocks.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Define a list containing the weight of each stock </span>
<span class="n">weights</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.3</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">,</span> <span class="mf">0.05</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">,</span> <span class="mf">0.25</span><span class="p">]</span>

<span class="c1"># Calculating the Weighted Return</span>
<span class="c1"># Setting it to 0 first</span>
<span class="n">data_portfolio</span><span class="p">[</span><span class="s1">'Weighted_pf'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>
<span class="c1"># For all the stocks that are selected</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span> <span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">selected_stocks</span><span class="p">)):</span>
    <span class="c1"># Do the sum of the return of the stock multiplied by the weight of the stock in the portfolio</span>
    <span class="n">data_portfolio</span><span class="p">[</span><span class="s1">'Weighted_pf'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_portfolio</span><span class="p">[</span><span class="s1">'Weighted_pf'</span><span class="p">]</span> <span class="o">+</span> <span class="n">weights</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">*</span> <span class="n">data_portfolio</span><span class="p">[</span><span class="n">selected_stocks</span><span class="p">[</span><span class="n">i</span><span class="p">]]</span>
<span class="c1"># Displaying the Dataframe to show the difference between the equally weighted portfolio and the new portfolio</span>
<span class="n">data_portfolio</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>HRMS.PA</th>
<th>EUFI.PA</th>
<th>CARR.PA</th>
<th>ALSO.PA</th>
<th>DAST.PA</th>
<th>Average</th>
<th>Weighted_pf</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-06-27</th>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
</tr>
<tr>
<th>2014-06-30</th>
<td>0.016981</td>
<td>0.007175</td>
<td>-0.008100</td>
<td>-0.007086</td>
<td>-0.000957</td>
<td>0.001603</td>
<td>0.004468</td>
</tr>
<tr>
<th>2014-07-01</th>
<td>0.001855</td>
<td>-0.009795</td>
<td>0.013920</td>
<td>-0.011080</td>
<td>0.019264</td>
<td>0.002833</td>
<td>0.001893</td>
</tr>
<tr>
<th>2014-07-02</th>
<td>0.000000</td>
<td>0.017311</td>
<td>0.020502</td>
<td>-0.013673</td>
<td>-0.005012</td>
<td>0.003826</td>
<td>0.000500</td>
</tr>
<tr>
<th>2014-07-03</th>
<td>0.005926</td>
<td>0.015691</td>
<td>0.003049</td>
<td>0.004043</td>
<td>0.013223</td>
<td>0.008386</td>
<td>0.009183</td>
</tr>
</tbody>
</table></div></details>
<p>It is important to note that raw returns may not be the most reliable metric for comparing performance over time. Instead, key measures such as average return, volatility, and cumulative return provide more meaningful comparisons between portfolios.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Now calculating the cumulative return and plotting it</span>
<span class="c1"># First of all, reduce the dataframe to 2 columns only</span>
<span class="n">data_portfolios</span> <span class="o">=</span> <span class="n">data_portfolio</span><span class="p">[[</span><span class="s1">'Average'</span><span class="p">,</span> <span class="s1">'Weighted_pf'</span><span class="p">]]</span>
<span class="c1"># Calculating the cumulative returns</span>
<span class="n">data_cumulative_ret</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">data_portfolios</span><span class="p">)</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span>

<span class="c1"># Adding the CAC 40 for comparison</span>
<span class="n">cac_cumulative_ret</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">cac_data_returns</span><span class="p">[</span><span class="s1">'CAC40'</span><span class="p">])</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span>

<span class="c1"># Creating the plot</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">sns</span><span class="o">.</span><span class="n">set_theme</span><span class="p">(</span><span class="n">rc</span><span class="o">=</span><span class="p">{</span><span class="s1">'figure.figsize'</span><span class="p">:(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">6</span><span class="p">)})</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_cumulative_ret</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="p">[</span><span class="s2">"Equally weighted portfolio"</span><span class="p">,</span> <span class="s2">"Second portfolio"</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">cac_cumulative_ret</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="s2">"CAC 40"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Displaying the cumulative returns of the two portfolios"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 2" data-asset="session-6/fig-2.png" loading="lazy"/></figure></details>
<p>Based on the graph presented, we can conclude that selecting a smaller, well-diversified set of stocks can lead to a strategy that potentially outperforms the broader market (represented by the CAC 40). Additionally, actively managing weight allocation can outperform a portfolio with equally weighted stocks.</p>
<h2 id="IV---Trading-strategies">IV - Trading strategies</h2>
<p>In this part of the session, we will focus on a single stock to simplify the demonstration of trading strategies. It is important to note that these strategies can also be applied to a diversified portfolio. Although there are numerous trading methods, we will limit our discussion to a strategy based on Moving Averages.</p>
<p>This method involves creating two moving averages with different rolling windows and comparing them to generate trading signals (either buying or selling a stock). The approach is as follows:</p>
<ol>
<li>Define two moving averages with different time windows—one shorter and one longer.</li>
<li>Generate signals when the two moving averages cross :<ul>
<li>When the short moving average exceeds the long moving average, it indicates that the stock price is rising faster than its historical trend, signaling a potential buying opportunity.</li>
<li>When the short moving average falls below the long moving average, it suggests that the stock price is declining more rapidly, signaling a potential selling opportunity.</li>
</ul>
</li>
<li>After generating the signals, we simulate the corresponding buy or sell actions.</li>
<li>Finally, we compare the performance of the strategy with the stock's cumulative return over the same period.</li>
</ol>
<div class="nb-code"><pre><span></span><span class="n">data_trading</span> <span class="o">=</span> <span class="n">cac_data_prices</span><span class="p">[[</span><span class="s1">'DAST.PA'</span><span class="p">]]</span>
<span class="c1"># Moving averages</span>
<span class="n">short_ma</span> <span class="o">=</span> <span class="mi">15</span>
<span class="n">long_ma</span> <span class="o">=</span> <span class="mi">60</span>

<span class="c1"># Let us create a copy of the dataframe instead of overwriting it</span>
<span class="n">data_trading_ma</span> <span class="o">=</span> <span class="n">data_trading</span><span class="o">.</span><span class="n">copy</span><span class="p">(</span><span class="n">deep</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Short_MA'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="p">[</span><span class="n">data_trading</span><span class="o">.</span><span class="n">columns</span><span class="p">]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">short_ma</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Long_MA'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="p">[</span><span class="n">data_trading</span><span class="o">.</span><span class="n">columns</span><span class="p">]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">long_ma</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>

<span class="c1"># Eliminating the data because it will pollute the dataset</span>
<span class="n">data_trading_ma</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="n">data_trading_ma</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>DAST.PA</th>
<th>Short_MA</th>
<th>Long_MA</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-09-18</th>
<td>10.550</td>
<td>10.294000</td>
<td>9.854000</td>
</tr>
<tr>
<th>2014-09-19</th>
<td>10.464</td>
<td>10.319600</td>
<td>9.871650</td>
</tr>
<tr>
<th>2014-09-22</th>
<td>10.514</td>
<td>10.348267</td>
<td>9.890283</td>
</tr>
<tr>
<th>2014-09-23</th>
<td>10.402</td>
<td>10.367333</td>
<td>9.904033</td>
</tr>
<tr>
<th>2014-09-24</th>
<td>10.426</td>
<td>10.386933</td>
<td>9.918983</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Displaying the data </span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_trading_ma</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="o">.</span><span class="n">columns</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Displaying the stock price and the moving average of DAST.PA"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 3" data-asset="session-6/fig-3.png" loading="lazy"/></figure></details>
<p>Whenever the short moving average (represented by the yellow curve) crosses the long moving average (represented by the green curve), a signal is generated, indicating whether to buy or sell the stock. To implement this, we first identify the periods where the short moving average exceeds the long moving average using an indicator. By analyzing the changes in this indicator over time, we can pinpoint when the two curves intersect and generate the appropriate trading signals.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Initial values</span>
<span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'indicator'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>
<span class="c1"># Identifying the times when the short moving average is greater than the long one</span>
<span class="n">data_trading_ma</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">data_trading_ma</span><span class="p">[</span><span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Short_MA'</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Long_MA'</span><span class="p">]]</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="s1">'indicator'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>
<span class="c1"># Then defining the positions =&gt; 1 for buy and -1 for sell</span>
<span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'indicator'</span><span class="p">]</span><span class="o">.</span><span class="n">diff</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="c1"># Eliminating the data that is not relevant</span>
<span class="n">data_trading_ma</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>

<span class="c1"># Displaying a graph with the positions</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_trading_ma</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="p">:</span><span class="o">-</span><span class="mi">2</span><span class="p">])</span>
<span class="c1"># Buy</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_trading_ma</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="mf">1.0</span><span class="p">]</span><span class="o">.</span><span class="n">index</span><span class="p">,</span>
         <span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Short_MA'</span><span class="p">][</span><span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="mf">1.0</span><span class="p">],</span> <span class="s1">'^'</span><span class="p">,</span> <span class="n">markersize</span> <span class="o">=</span> <span class="mi">8</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'g'</span><span class="p">)</span>
<span class="c1"># Sell</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_trading_ma</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="o">-</span><span class="mf">1.0</span><span class="p">]</span><span class="o">.</span><span class="n">index</span><span class="p">,</span>
         <span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Short_MA'</span><span class="p">][</span><span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="o">-</span><span class="mf">1.0</span><span class="p">],</span> <span class="s1">'v'</span><span class="p">,</span> <span class="n">markersize</span> <span class="o">=</span> <span class="mi">8</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'r'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Positions according to the Moving Average Method"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 4" data-asset="session-6/fig-4.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Assessing the strategy with cumulative returns, an indicator of 1 indicates the investor is holding the stock</span>
<span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'Strategy'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="mi">0</span><span class="p">]</span>
<span class="c1"># Taking the first and last columns</span>
<span class="n">data_comparison</span> <span class="o">=</span> <span class="n">data_trading_ma</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">]]</span>

<span class="c1"># Calculating the returns</span>
<span class="n">data_comparison_returns</span> <span class="o">=</span> <span class="n">data_comparison</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span> 
<span class="n">data_comparison_returns</span><span class="p">[</span><span class="s1">'Strategy'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data_comparison_returns</span><span class="p">[</span><span class="s1">'Strategy'</span><span class="p">]</span> <span class="o">*</span> <span class="n">data_trading_ma</span><span class="p">[</span><span class="s1">'indicator'</span><span class="p">]</span>
<span class="c1"># Calculating the cumulative returns</span>
<span class="n">data_comparison_returns</span> <span class="o">=</span> <span class="p">((</span><span class="mi">1</span> <span class="o">+</span> <span class="n">data_comparison_returns</span><span class="p">)</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>

<span class="c1"># Displaying</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">data_comparison_returns</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="n">data_comparison_returns</span><span class="o">.</span><span class="n">columns</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Comparing the strategy to the actual evolution of the stock price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 5" data-asset="session-6/fig-5.png" loading="lazy"/></figure></details>
<p>From the graph, we observe that the strategy tends to follow the same general trends as the stock’s price movements. However, the fluctuations appear less pronounced, suggesting that the strategy may help mitigate the impact of high volatility in the stock price. As a result, this approach can be particularly useful in smoothing out sharp price swings and providing a more stable trading framework.</p>
<p>On the orange curve (the curve representing our strategy), the flat parts indicates periods when the portfolio is not reallocated, thereby avoiding excessive losses</p>
<h2 id="To-go-further---Options-and-futures-:-Contracts-used-for-speculation">To go further - Options and futures : Contracts used for speculation</h2>
<p>A derivative is a financial contract whose value is derived from the performance of an underlying asset. There are several types of derivatives, with the most common being forwards, futures, options, and swaps:</p>
<ul>
<li>Futures: A standardized agreement to buy (go long) or sell (go short) a specific underlying asset at a predetermined price at a specified future date, known as the maturity date.</li>
<li>Forwards: Similar to futures, but forwards are customized contracts negotiated between two parties over-the-counter (OTC). This flexibility allows for tailored terms based on each party's needs.</li>
<li>Options: A contract granting the holder the right, but not the obligation, to buy (call) or sell (put) an underlying asset at a predetermined price (the strike price) on or before maturity. This right is purchased by paying a premium.</li>
<li>Swaps: Contracts where two parties exchange cash flows from different financial instruments. This can occur, for example, when two companies agree to swap investments in each other.</li>
</ul>
<h3 id="a)-Calculate-the-payoff-of-a-future">a) Calculate the payoff of a future</h3><p>With a future, the investor is obligated to buy or sell the asset at the predetermined price, regardless of how the market price fluctuates by the time of maturity. This contrasts with an option, where the holder has the right but not the obligation to complete the transaction, which offers more flexibility in potential payoffs.</p>
<div class="nb-code"><pre><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>

<span class="c1"># Creating the function</span>
<span class="k">def</span> <span class="nf">calculate_payoff_future</span><span class="p">(</span><span class="n">future_price</span><span class="p">,</span> <span class="n">fair_price</span><span class="p">,</span> <span class="n">contract_type</span><span class="p">):</span>
    <span class="k">if</span> <span class="n">contract_type</span> <span class="o">==</span> <span class="s2">"LONG"</span> <span class="p">:</span>
        <span class="k">return</span> <span class="n">future_price</span> <span class="o">-</span> <span class="n">fair_price</span>
    <span class="k">else</span> <span class="p">:</span>
        <span class="k">return</span> <span class="n">fair_price</span> <span class="o">-</span> <span class="n">future_price</span>

<span class="c1"># It is also possible to estimate the current value of the fair value using </span>
<span class="k">def</span> <span class="nf">fair_value_future</span><span class="p">(</span><span class="n">spot</span><span class="p">,</span> <span class="n">rf_rate</span><span class="p">,</span> <span class="n">dividend</span><span class="p">,</span> <span class="n">maturity</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">spot</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">((</span><span class="n">rf_rate</span> <span class="o">-</span> <span class="n">dividend</span><span class="p">)</span> <span class="o">*</span> <span class="n">maturity</span><span class="p">)</span>

<span class="c1"># Simulation </span>
<span class="n">current_price</span> <span class="o">=</span> <span class="mi">100</span>
<span class="n">agreement_price</span> <span class="o">=</span> <span class="mi">120</span>
<span class="n">future_price</span> <span class="o">=</span> <span class="mi">125</span>
<span class="n">duration</span> <span class="o">=</span> <span class="mi">3</span>
<span class="n">risk_free_rate</span> <span class="o">=</span> <span class="mf">0.05</span>
<span class="n">dividends</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">future_type</span> <span class="o">=</span> <span class="s2">"LONG"</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">"The payoff of the future would be "</span><span class="p">,</span> <span class="n">calculate_payoff_future</span><span class="p">(</span><span class="n">future_price</span><span class="p">,</span> <span class="n">agreement_price</span><span class="p">,</span> <span class="n">future_type</span><span class="p">))</span>
<span class="n">calculated_fair_value</span> <span class="o">=</span> <span class="nb">round</span><span class="p">(</span><span class="n">fair_value_future</span><span class="p">(</span><span class="n">current_price</span><span class="p">,</span> <span class="n">risk_free_rate</span><span class="p">,</span> <span class="n">dividends</span><span class="p">,</span> <span class="n">duration</span><span class="p">),</span><span class="mi">2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"A plausible fair value considering the previous parameters would be "</span><span class="p">,</span> <span class="n">calculated_fair_value</span><span class="p">,</span> <span class="s2">"with a payoff of "</span><span class="p">,</span> 
      <span class="n">calculate_payoff_future</span><span class="p">(</span><span class="n">future_price</span><span class="p">,</span> <span class="n">calculated_fair_value</span><span class="p">,</span> <span class="n">future_type</span><span class="p">))</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The payoff of the future would be  5
A plausible fair value considering the previous parameters would be  116.18 with a payoff of  8.819999999999993</pre></details>
<h3 id="b)-Calculate-the-payoffs-of-an-option">b) Calculate the payoffs of an option</h3><p>Options are generally sold for a premium, and the potential payoffs depend on whether the investor is buying or selling the option, as well as the type of option (call or put). Here are the common strategies and potential payoffs:</p>
<ul>
<li>Selling a Call: The seller expects the asset's price to stay below the strike price at maturity.<ul>
<li>Best case: <span class="nb-math">Profit = premium</span>.</li>
<li>Worst case: <span class="nb-math">Profit = premium - (future price - strike price)</span>.</li>
</ul>
</li>
<li>Selling a Put: The seller expects the asset's price to stay above the strike price at maturity.<ul>
<li>Best case: <span class="nb-math">Profit = premium</span>.</li>
<li>Worst case: <span class="nb-math">Profit = premium - (strike price - future price)</span>.</li>
</ul>
</li>
<li>Buying a Call: The buyer expects the asset's price to rise above the strike price at maturity.<ul>
<li>Best case: <span class="nb-math">Profit = (future price - strike price) - premium</span>.</li>
<li>Worst case: <span class="nb-math">Profit = -premium</span> (loss limited to the premium paid).</li>
</ul>
</li>
<li>Buying a Put: The buyer expects the asset's price to fall below the strike price at maturity.<ul>
<li>Best case: <span class="nb-math">Profit = (strike price - future price) - premium</span>.</li>
<li>Worst case: <span class="nb-math">Profit = -premium</span> (loss limited to the premium paid).</li>
</ul>
</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># Transforming the previous statements into lines of codes</span>
<span class="k">def</span> <span class="nf">calculate_payoff_option</span><span class="p">(</span><span class="n">strike</span><span class="p">,</span> <span class="n">future_price</span><span class="p">,</span> <span class="n">option_premium</span><span class="p">,</span> <span class="n">option_type</span><span class="p">,</span> <span class="n">side</span><span class="p">):</span>
    <span class="k">if</span> <span class="n">side</span> <span class="o">==</span> <span class="s2">"Buyer"</span> <span class="p">:</span>
        <span class="k">if</span> <span class="n">option_type</span> <span class="o">==</span> <span class="s2">"CALL"</span><span class="p">:</span>
            <span class="c1"># For the investor who buys the CALL</span>
            <span class="k">if</span> <span class="n">strike</span> <span class="o">&lt;</span> <span class="n">future_price</span> <span class="p">:</span>
                <span class="c1"># The call option is executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"CALL executed for the buyer"</span><span class="p">)</span>
                <span class="k">return</span> <span class="n">future_price</span> <span class="o">-</span> <span class="n">strike</span> <span class="o">-</span> <span class="n">option_premium</span>
            <span class="k">else</span> <span class="p">:</span>
                <span class="c1"># The call option is not executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"CALL not executed for the buyer"</span><span class="p">)</span>
                <span class="k">return</span> <span class="o">-</span> <span class="n">option_premium</span>
        <span class="k">elif</span> <span class="n">option_type</span> <span class="o">==</span> <span class="s2">"PUT"</span><span class="p">:</span>
            <span class="c1"># For the investor who buys a PUT</span>
            <span class="k">if</span> <span class="n">strike</span> <span class="o">&gt;</span> <span class="n">future_price</span> <span class="p">:</span>
                <span class="c1"># The put option is executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"PUT executed for the buyer"</span><span class="p">)</span>
                <span class="k">return</span> <span class="n">strike</span> <span class="o">-</span> <span class="n">future_price</span> <span class="o">-</span> <span class="n">option_premium</span>
            <span class="k">else</span> <span class="p">:</span>
                <span class="c1"># The put option is not executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"PUT not executed for the buyer"</span><span class="p">)</span>
                <span class="k">return</span> <span class="o">-</span> <span class="n">option_premium</span>
    <span class="k">elif</span> <span class="n">side</span> <span class="o">==</span> <span class="s2">"Seller"</span><span class="p">:</span>
        <span class="k">if</span> <span class="n">option_type</span> <span class="o">==</span> <span class="s2">"CALL"</span><span class="p">:</span>
            <span class="c1"># For the investor who sells the CALL</span>
            <span class="k">if</span> <span class="n">strike</span> <span class="o">&lt;</span> <span class="n">future_price</span> <span class="p">:</span>
                <span class="c1"># The call option is executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"CALL executed for the seller"</span><span class="p">)</span>
                <span class="k">return</span> <span class="n">option_premium</span> <span class="o">-</span> <span class="n">future_price</span> <span class="o">+</span> <span class="n">strike</span>
            <span class="k">else</span> <span class="p">:</span>
                <span class="c1"># The call option is not executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"CALL not executed for the seller"</span><span class="p">)</span>
                <span class="k">return</span> <span class="n">option_premium</span>
        <span class="k">elif</span> <span class="n">option_type</span> <span class="o">==</span> <span class="s2">"PUT"</span><span class="p">:</span>
            <span class="c1"># For the investor who buys a PUT</span>
            <span class="k">if</span> <span class="n">strike</span> <span class="o">&gt;</span> <span class="n">future_price</span> <span class="p">:</span>
                <span class="c1"># The put option is executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"PUT executed for the seller"</span><span class="p">)</span>
                <span class="k">return</span> <span class="n">option_premium</span> <span class="o">-</span> <span class="n">strike</span> <span class="o">+</span> <span class="n">future_price</span> 
            <span class="k">else</span> <span class="p">:</span>
                <span class="c1"># The put option is not executed</span>
                <span class="nb">print</span><span class="p">(</span><span class="s2">"PUT  not executed for the seller"</span><span class="p">)</span>
                <span class="k">return</span> <span class="n">option_premium</span>
            
<span class="c1"># Parameters</span>
<span class="n">contractual_strike</span> <span class="o">=</span> <span class="mi">120</span>
<span class="n">ending_price</span> <span class="o">=</span> <span class="mi">135</span>
<span class="n">option_premium</span> <span class="o">=</span> <span class="mi">5</span>

<span class="c1"># Running the test </span>
<span class="n">payoff_call_buyer</span> <span class="o">=</span> <span class="n">calculate_payoff_option</span><span class="p">(</span><span class="n">contractual_strike</span><span class="p">,</span> <span class="n">ending_price</span><span class="p">,</span> <span class="n">option_premium</span><span class="p">,</span> <span class="s2">"CALL"</span><span class="p">,</span> <span class="s2">"Buyer"</span><span class="p">)</span>
<span class="n">payoff_call_seller</span> <span class="o">=</span> <span class="n">calculate_payoff_option</span><span class="p">(</span><span class="n">contractual_strike</span><span class="p">,</span> <span class="n">ending_price</span><span class="p">,</span> <span class="n">option_premium</span><span class="p">,</span> <span class="s2">"CALL"</span><span class="p">,</span> <span class="s2">"Seller"</span><span class="p">)</span>
<span class="n">payoff_put_buyer</span> <span class="o">=</span> <span class="n">calculate_payoff_option</span><span class="p">(</span><span class="n">contractual_strike</span><span class="p">,</span> <span class="n">ending_price</span><span class="p">,</span> <span class="n">option_premium</span><span class="p">,</span> <span class="s2">"PUT"</span><span class="p">,</span> <span class="s2">"Buyer"</span><span class="p">)</span>
<span class="n">payoff_put_seller</span> <span class="o">=</span> <span class="n">calculate_payoff_option</span><span class="p">(</span><span class="n">contractual_strike</span><span class="p">,</span> <span class="n">ending_price</span><span class="p">,</span> <span class="n">option_premium</span><span class="p">,</span> <span class="s2">"PUT"</span><span class="p">,</span> <span class="s2">"Seller"</span><span class="p">)</span>

<span class="c1"># Print</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\\n</span><span class="s2">"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Payoff of the CALL Purchaser : "</span><span class="p">,</span> <span class="n">payoff_call_buyer</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Payoff of the CALL Seller : "</span><span class="p">,</span> <span class="n">payoff_call_seller</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Payoff of the PUT Purchaser : "</span><span class="p">,</span> <span class="n">payoff_put_buyer</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Payoff of the PUT Seller : "</span><span class="p">,</span> <span class="n">payoff_put_seller</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>CALL executed for the buyer
CALL executed for the seller
PUT not executed for the buyer
PUT  not executed for the seller


Payoff of the CALL Purchaser :  10
Payoff of the CALL Seller :  -10
Payoff of the PUT Purchaser :  -5
Payoff of the PUT Seller :  5</pre></details>
<p>Although this session does not cover option pricing, the pricing methods will be explored in Session 7. In that session, we will use Monte Carlo simulations to estimate the fair price of a call or put option—i.e., the amount an investor should be willing to pay for the option.</p>
<p><strong>Heuristic investment rule :</strong> When building an investment portfolio consisting of high-risk (high-yield) and low-risk (bonds) assets, it is essential to consider an individual’s age as a guiding factor for asset allocation. A general rule, endorsed by economists, is to allocate a percentage of the portfolio to low-risk assets based on your age. For instance, if you are 25 years old, 25% of your portfolio should be invested in low-risk assets, while the remaining 75% can be allocated to high-yield (riskier) investments.</p>
<p><em>This rule is purely practical and is not derived from rigorous portfolio theory</em></p>
` },
         { slug: "session-7", label: "Session 7", title: "Quantitative methods and simulations for Finance", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>This session will introduce you to quantitative simulations commonly used in finance to estimate prices, returns, or risk measures. The topics covered include:</p>
<ul>
<li>Autoregressive Model (AR)</li>
<li>ARIMA Model (AutoRegressive Integrated Moving Average)</li>
<li>Brownian Motion</li>
<li>Monte Carlo Simulations</li>
<li>Markowitz Portfolio Theory</li>
</ul>
<p>In finance, statistical and econometric methods are widely used to estimate stock prices. The underlying concept is that financial markets are driven by divergent opinions among market participants. Markets bring together buyers and sellers who trade financial instruments based on their differing views of a security’s value:</p>
<ul>
<li>Sellers typically believe that the value of a security will decrease.</li>
<li>Buyers generally believe that the value of a security will increase.</li>
</ul>
<p>Accurately predicting the future price of a financial instrument is a key advantage. To achieve this, we can apply various methods, including statistical models, econometrics, quantitative techniques, or artificial intelligence (AI).</p>
<p>While this class will focus on advanced econometric and statistical approaches, the use of AI will not be covered here. There will be a separate module dedicated to Machine Learning in Finance during the second semester of the program. For now, the emphasis is on learning how to calculate theoretical stock prices based on model-driven predictions.</p>
<p>It is important to remember that all models used to estimate current or future stock prices rely on historical data. The predictions are typically based on either:</p>
<ul>
<li>Previous stock values: Models like the Autoregressive or ARIMA assume that future prices are influenced by past prices.</li>
<li>Statistical parameters: Variables such as averages, variances, and standard deviations, derived from historical data, are also used to estimate future prices.</li>
</ul>
<p>By leveraging these techniques, this session aims to provide a solid foundation in the econometric and quantitative tools used to model stock prices and predict market behavior</p></div>
<h2 id="I---The-Autoregressive-Model-(AR)">I - The Autoregressive Model (AR)</h2><p>Autoregression is a statistical technique utilized in time-series analysis, which posits that the current value of a time series is a function of its preceding values. Similar to linear regression, the Autoregressive Model (AR) employs linear regression on the lagged outputs from previous observations. In essence, it is a linear function that incorporates past values of Y as input variables instead of utilizing independent variables.</p>
<p>The AR model can be expressed mathematically as follows: <span class="nb-math nb-math-block">Y(t) = c + ϕ_1 · Y(t - 1) + ϕ_2 · Y(t - 2) + ... + ϕ_n · Y(t - n) + ε_t</span>, for AR(n) ε representing the shock</p>
<p>However, it is crucial to note that in the scope of the class, the Autoregressive Model will only be applied to covariance stationary or strict stationary time series data. This implies that the statistical properties of the time series, such as mean, standard deviation, and covariance, must remain constant over time, a property known as <strong>covariance stationary</strong>.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Basic configuration </span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">from</span> <span class="nn">statsmodels.tsa.stattools</span> <span class="kn">import</span> <span class="n">adfuller</span>
<span class="kn">import</span> <span class="nn">warnings</span>
<span class="kn">import</span> <span class="nn">yfinance</span> <span class="k">as</span> <span class="nn">yf</span>
<span class="n">MAIN_PATH</span> <span class="o">=</span> <span class="s1">'C:/Users/evche/Documents/Lessons - Audencia BS/Data/Session 7'</span>
<span class="c1"># Eliminating the waring messages </span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s2">"ignore"</span><span class="p">)</span>

<span class="c1"># Fetch WTI Crude Oil futures data (for AR)</span>
<span class="n">crude_oil_ticker</span> <span class="o">=</span> <span class="s2">"CL=F"</span>
<span class="n">crude_oil</span> <span class="o">=</span> <span class="n">yf</span><span class="o">.</span><span class="n">Ticker</span><span class="p">(</span><span class="n">crude_oil_ticker</span><span class="p">)</span>
<span class="n">oil_data</span> <span class="o">=</span> <span class="n">crude_oil</span><span class="o">.</span><span class="n">history</span><span class="p">(</span><span class="n">period</span><span class="o">=</span><span class="s2">"4y"</span><span class="p">,</span> <span class="n">interval</span><span class="o">=</span><span class="s2">"1d"</span><span class="p">)</span>

<span class="c1"># Keeping the close only</span>
<span class="n">oil_data_close</span> <span class="o">=</span> <span class="n">oil_data</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">]</span>
<span class="n">oil_data_close</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">to_datetime</span><span class="p">(</span><span class="n">oil_data_close</span><span class="o">.</span><span class="n">index</span><span class="o">.</span><span class="n">date</span><span class="p">)</span><span class="o">.</span><span class="n">normalize</span><span class="p">()</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># We will only use the close for the analysis</span>
<span class="kn">from</span> <span class="nn">matplotlib.pyplot</span> <span class="kn">import</span> <span class="n">figure</span>
<span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">6</span><span class="p">),</span> <span class="n">dpi</span><span class="o">=</span><span class="mi">80</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Variation of the price of Crude oil"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Return"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 1" data-asset="session-7/fig-1.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Let us check the stationarity of the model by using the ADF (Augmented Dickey–Fuller test) test </span>
<span class="n">adf_result</span> <span class="o">=</span> <span class="n">adfuller</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">adf_result</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>0.16322052416223937</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># We can use the describe method to show the parameters</span>
<span class="n">oil_data_close</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span><span class="o">.</span><span class="n">T</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>count    1007.000000
mean       79.530368
std        11.989240
min        57.759998
25%        71.510002
50%        77.419998
75%        83.790001
max       123.699997
Name: Close, dtype: float64</pre></details>
<p>The Augmented Dickey-Fuller (ADF) test is a statistical test used to assess the hypothesis that a time series is stationary. The null hypothesis states that "the series is non-stationary," while the alternative hypothesis posits that "the series is stationary." Based on the results obtained, we may reject the null hypothesis at a 85% confidence level. While the ADF test shows good results, it is also possible to elevate the level of our analysis by making sure the residuals are stationary.</p>
<div class="nb-code"><pre><span></span><span class="kn">from</span> <span class="nn">statsmodels.tsa.seasonal</span> <span class="kn">import</span> <span class="n">seasonal_decompose</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>

<span class="c1"># Decomposing the time series</span>
<span class="n">oil_data_close_all_interpolated</span> <span class="o">=</span> <span class="n">oil_data_close</span><span class="o">.</span><span class="n">asfreq</span><span class="p">(</span><span class="s1">'D'</span><span class="p">)</span><span class="o">.</span><span class="n">interpolate</span><span class="p">()</span>
<span class="n">decomposition</span> <span class="o">=</span> <span class="n">seasonal_decompose</span><span class="p">(</span><span class="n">oil_data_close_all_interpolated</span><span class="p">,</span> <span class="n">model</span><span class="o">=</span><span class="s1">'additive'</span><span class="p">)</span>

<span class="c1"># Extracting the components</span>
<span class="n">trend</span> <span class="o">=</span> <span class="n">decomposition</span><span class="o">.</span><span class="n">trend</span>
<span class="n">seasonal</span> <span class="o">=</span> <span class="n">decomposition</span><span class="o">.</span><span class="n">seasonal</span>
<span class="n">residual</span> <span class="o">=</span> <span class="n">decomposition</span><span class="o">.</span><span class="n">resid</span>

<span class="c1"># Plotting the components</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">12</span><span class="p">,</span><span class="mi">8</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Decomposition of the time series of crude oil"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">subplot</span><span class="p">(</span><span class="mi">411</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">oil_data_close_all_interpolated</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Original'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">subplot</span><span class="p">(</span><span class="mi">412</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">trend</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Trend'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">subplot</span><span class="p">(</span><span class="mi">413</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">seasonal</span><span class="p">,</span><span class="n">label</span><span class="o">=</span><span class="s1">'Seasonality'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">subplot</span><span class="p">(</span><span class="mi">414</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">residual</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Residuals'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">loc</span><span class="o">=</span><span class="s1">'best'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">tight_layout</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 2" data-asset="session-7/fig-2.png" loading="lazy"/></figure></details>
<p>At first sight, residuals seem stationary and ADF test reveals favorable results when applied to the differenced data, suggesting that we should consider using this data to construct an Autoregressive Model. Nonetheless, we must also evaluate the ACF &amp; PACF to determine whether a linear relationship exists between the current stock price and its past values, and what model to use.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Drop na to check stationarity</span>
<span class="n">residual</span> <span class="o">=</span> <span class="n">residual</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="n">adf_result</span> <span class="o">=</span> <span class="n">adfuller</span><span class="p">(</span><span class="n">residual</span><span class="p">,</span> <span class="n">autolag</span><span class="o">=</span><span class="s1">'AIC'</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">adf_result</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>1.6831097694951178e-25</pre></details>
<p>The ADF test show relevant result regarding the residuals. The residuals seem stationary so the variation are well represented in the trends, and seasonality of the decomposition, therefore, we can consider that we can use AR / MA / ARIMA to model the series.</p>
<p>In the case of a AR model, there are 2 major characteristics regarding the ACF and the PACF :</p>
<ul>
<li>The ACF diminishes gradually in a geometric pattern (<code>Tail-off</code>)</li>
<li>The PACF will show significance only at a limited number of initial lags (<code>Cut off</code>)</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the ACF</span>
<span class="kn">from</span> <span class="nn">statsmodels.graphics.tsaplots</span> <span class="kn">import</span> <span class="n">plot_acf</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plot_acf</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 3" data-asset="session-7/fig-3.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Showing the PACF</span>
<span class="kn">from</span> <span class="nn">statsmodels.graphics.tsaplots</span> <span class="kn">import</span> <span class="n">plot_pacf</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plot_pacf</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 4" data-asset="session-7/fig-4.png" loading="lazy"/></figure></details>
<p>To effectively use the Autoregressive Model (here, AR(1)), the following conditions should be met:</p>
<ul>
<li>The Autocorrelation Function (ACF) should exhibit a decay toward zero.</li>
<li>The PACF should cut off quickly toward zero.</li>
<li>A significant spike should be observed at Lag 1 for on the PACF</li>
</ul>
<p>Analysis indicates that the ACF is indeed decaying toward zero progressively and exhibits strong PACF for Lag 1, remaining significant. Here, we will use AR(1), as the spikes are significant only Lag 0 and Lag 1.</p>
<p>Despite the relevant result on the ADF test, the current dataset does not exhibit the required conditions for the Autoregressive model, therefore, we will remain using the first series. To create the model, we can split the data into a train set and a test set to show the reliability of our model.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We can try to do prediction on past data to test whether the model is suitable, try for the last 6 days</span>
<span class="n">train</span> <span class="o">=</span> <span class="n">oil_data_close</span><span class="p">[:</span><span class="nb">len</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span><span class="o">-</span><span class="mi">10</span><span class="p">]</span>
<span class="n">test</span> <span class="o">=</span> <span class="n">oil_data_close</span><span class="p">[</span><span class="nb">len</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span><span class="o">-</span><span class="mi">10</span><span class="p">:]</span>

<span class="kn">from</span> <span class="nn">statsmodels.tsa.ar_model</span> <span class="kn">import</span> <span class="n">AutoReg</span>
<span class="c1"># Creating the model using the Lags 1</span>
<span class="n">ar_model</span> <span class="o">=</span> <span class="n">AutoReg</span><span class="p">(</span><span class="n">train</span><span class="p">,</span> <span class="n">lags</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">ar_model</span><span class="o">.</span><span class="n">summary</span><span class="p">())</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>AutoReg Model Results                             
==============================================================================
Dep. Variable:                  Close   No. Observations:                  997
Model:                     AutoReg(1)   Log Likelihood               -2105.344
Method:               Conditional MLE   S.D. of innovations              2.003
Date:                Wed, 19 Feb 2025   AIC                           4216.687
Time:                        02:02:59   BIC                           4231.398
Sample:                             1   HQIC                          4222.279
                                  997                                         
==============================================================================
                 coef    std err          z      P&gt;|z|      [0.025      0.975]
------------------------------------------------------------------------------
const          1.2150      0.425      2.857      0.004       0.381       2.048
Close.L1       0.9849      0.005    186.484      0.000       0.975       0.995
                                    Roots                                    
=============================================================================
                  Real          Imaginary           Modulus         Frequency
-----------------------------------------------------------------------------
AR.1            1.0153           +0.0000j            1.0153            0.0000
-----------------------------------------------------------------------------</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Creating the predictions using the AR model</span>
<span class="n">pred</span> <span class="o">=</span> <span class="n">ar_model</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">start</span><span class="o">=</span><span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">),</span> <span class="n">end</span><span class="o">=</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">))</span>
<span class="n">pred</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">test</span><span class="o">.</span><span class="n">index</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">6</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">pred</span><span class="p">,</span> <span class="n">color</span> <span class="o">=</span> <span class="s1">'blue'</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span><span class="s1">'Prediction'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">oil_data_close</span><span class="p">[</span><span class="s2">"2024"</span><span class="p">:],</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="s1">'Actual'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Comparing the AR Model prediction vs the actual variation of the week to week return (in points)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Variation of the return in points"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Week"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 5" data-asset="session-7/fig-5.png" loading="lazy"/></figure></details>
<p>While the model does capture some price variations, it struggles to accurately represent the amplitude of these fluctuations. The predictions generated by the model are generally flatter than the actual variations. Although the Autoregressive Model is useful, it has its limitations, particularly for series with high volatility, and may present challenges in interpretation.</p>
<p>The AR model captures some price variations but often fails to represent the full amplitude of fluctuations, especially in volatile series. The ARIMA model, combining AR and MA, can better capture such variations.</p>
<p>Rules for AR, MA, and ARIMA Models:</p>
<ul>
<li>AR model (p): If the ACF shows a tail-off, use AR. The PACF will show significant lags initially, then taper off.</li>
<li>MA model (q): If the PACF shows a tail-off, use MA. The ACF will show significant lags initially, then taper off.</li>
<li>ARIMA (p, q): If both ACF and PACF tail off, use ARIMA. It combines AR and MA components, with d for differencing if non-stationary. If neither ACF nor PACF clearly tail off, use ARMA, which combines AR and MA.).).</li>
</ul>
<h2 id="II---The-Autoregressive-Integrated-Moving-Average-(ARIMA-Model)">II - The Autoregressive Integrated Moving Average (ARIMA Model)</h2>
<p>The standardized ARIMA model is defined as ARIMA (p, d, q). In the scope of the class, we will only consider a model using d = 0. When both the ACF and PACF show a tail-off pattern, an ARIMA(p, 0, q) model, which combines both AR and MA models, is appropriate. The parameters p (AR part) and q (MA part) are determined based on the respective ACF and PACF patterns.</p>
<p>If both the ACF and PACF do not show a clear tail-off or cutoff pattern, this is a signal that an ARMA model, a combination of AR and MA, could be more suitable. The ARMA model is particularly flexible and useful when neither the ACF nor PACF provide clear information about which model (AR or MA) to choose. In such cases, the order of the AR (p) and MA (q) components can be selected based on a combination of ACF and PACF characteristics, or using model selection criteria like AIC (the ability to fit the data, while penalizing complexity) or BIC (similar but the penalty becomes stronger as the number of observation increases).</p>
<ul>
<li><span class="nb-math">AIC = - 2 ln(Likelihood) + 2k</span> ⇒ Not used here</li>
<li><span class="nb-math">BIC = - 2 ln(Likelihood) + k ln(n)</span> ⇒ Not used here</li>
</ul>
<p>With :</p>
<ol>
<li>Likehood indicates how well the model represents the actual data</li>
<li>k is the number of parameters</li>
<li>n is the size of the sample</li>
</ol>
<div class="nb-code"><pre><span></span><span class="c1"># use crude dataù</span>
<span class="n">arima_crude</span> <span class="o">=</span> <span class="n">oil_data</span><span class="o">.</span><span class="n">resample</span><span class="p">(</span><span class="s2">"M"</span><span class="p">)</span><span class="o">.</span><span class="n">last</span><span class="p">()</span>
<span class="n">arima_crude</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">arima_crude</span><span class="o">.</span><span class="n">index</span><span class="o">.</span><span class="n">date</span>
<span class="n">arima_crude</span> <span class="o">=</span> <span class="n">arima_crude</span><span class="p">[[</span><span class="s1">'Close'</span><span class="p">]]</span>
<span class="n">arima_crude</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Close</th>
</tr>
</thead>
<tbody>
<tr>
<th>2021-02-28</th>
<td>61.500000</td>
</tr>
<tr>
<th>2021-03-31</th>
<td>59.160000</td>
</tr>
<tr>
<th>2021-04-30</th>
<td>63.580002</td>
</tr>
<tr>
<th>2021-05-31</th>
<td>66.320000</td>
</tr>
<tr>
<th>2021-06-30</th>
<td>73.470001</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Displaying the Graph</span>
<span class="kn">from</span> <span class="nn">matplotlib.pyplot</span> <span class="kn">import</span> <span class="n">figure</span>
<span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">6</span><span class="p">),</span> <span class="n">dpi</span><span class="o">=</span><span class="mi">80</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Price of crude oil per month"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price in USD"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">arima_crude</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 6" data-asset="session-7/fig-6.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Check stationarity</span>
<span class="n">adf_result</span> <span class="o">=</span> <span class="n">adfuller</span><span class="p">(</span><span class="n">arima_crude</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">adf_result</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>0.1492486511719502</pre></details>
<p>Series is stationary at confidence level 85 %.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Let us show the PACF</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plot_pacf</span><span class="p">(</span><span class="n">arima_crude</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Autocorrelation of the google stock price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 7" data-asset="session-7/fig-7.png" loading="lazy"/></figure></details>
<p>We can see here a significant spike at lag 1 and lag 1°, so we can already say that we could use 10 for parameter p, we can then determine parameter q using the same principle.</p>
<div class="nb-code"><pre><span></span><span class="c1"># PACF</span>
<span class="n">plot_acf</span><span class="p">(</span><span class="n">arima_crude</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Autocorrelation of the google stock price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 8" data-asset="session-7/fig-8.png" loading="lazy"/></figure></details>
<p>Upon re-evaluation, we can ascertain that a significant autocorrelation exists between the current point and the previous 35 observations, with an even stronger correlation noted for the first 25 points. As a result, we will consider utilizing between 1 and 10 lags for p for optimal performance in the ARIMA model. Notably, the ARIMA model incorporates three parameters, unlike the AR model:</p>
<ul>
<li>p: The lag order of the PACF</li>
<li>d:  The degree of differencing, as the model is already stationary we can put 0.</li>
<li>q: The lag order of the ACF</li>
</ul>
<p>For this analysis, we will set p = 10, d = 0 and q = 0</p>
<div class="nb-code"><pre><span></span><span class="kn">from</span> <span class="nn">statsmodels.tsa.arima.model</span> <span class="kn">import</span> <span class="n">ARIMA</span>
<span class="c1"># Fitting the ARIMA model </span>
<span class="n">train</span><span class="p">,</span> <span class="n">test</span> <span class="o">=</span> <span class="n">arima_crude</span><span class="p">[:</span><span class="o">-</span><span class="mi">15</span><span class="p">],</span> <span class="n">arima_crude</span><span class="p">[</span><span class="o">-</span><span class="mi">15</span><span class="p">:]</span>
<span class="n">model_arima</span> <span class="o">=</span> <span class="n">ARIMA</span><span class="p">(</span><span class="n">train</span><span class="p">,</span> <span class="n">order</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">))</span><span class="o">.</span><span class="n">fit</span><span class="p">()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">model_arima</span><span class="o">.</span><span class="n">summary</span><span class="p">())</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>SARIMAX Results                                
==============================================================================
Dep. Variable:                  Close   No. Observations:                   34
Model:                ARIMA(10, 0, 0)   Log Likelihood                -110.772
Date:                Wed, 19 Feb 2025   AIC                            245.543
Time:                        02:03:00   BIC                            263.859
Sample:                    02-28-2021   HQIC                           251.789
                         - 11-30-2023                                         
Covariance Type:                  opg                                         
==============================================================================
                 coef    std err          z      P&gt;|z|      [0.025      0.975]
------------------------------------------------------------------------------
const         82.3280      3.189     25.816      0.000      76.078      88.578
ar.L1          0.8723      0.212      4.114      0.000       0.457       1.288
ar.L2         -0.1760      0.386     -0.456      0.648      -0.933       0.581
ar.L3          0.3335      0.338      0.986      0.324      -0.329       0.996
ar.L4         -0.4050      0.334     -1.211      0.226      -1.061       0.251
ar.L5          0.1381      0.351      0.394      0.694      -0.550       0.826
ar.L6         -0.3108      0.267     -1.166      0.244      -0.833       0.212
ar.L7          0.2390      0.247      0.967      0.333      -0.245       0.723
ar.L8         -0.0158      0.388     -0.041      0.968      -0.776       0.744
ar.L9          0.2993      0.507      0.591      0.555      -0.694       1.292
ar.L10        -0.4751      0.262     -1.810      0.070      -0.989       0.039
sigma2        34.8179     15.097      2.306      0.021       5.228      64.408
===================================================================================
Ljung-Box (L1) (Q):                   0.16   Jarque-Bera (JB):                 1.95
Prob(Q):                              0.69   Prob(JB):                         0.38
Heteroskedasticity (H):               0.73   Skew:                            -0.59
Prob(H) (two-sided):                  0.62   Kurtosis:                         2.93
===================================================================================

Warnings:
[1] Covariance matrix calculated using the outer product of gradients (complex-step).</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Calculation for the predictions</span>
<span class="n">pred</span> <span class="o">=</span> <span class="n">model_arima</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">start</span><span class="o">=</span><span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">),</span> <span class="n">end</span><span class="o">=</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">arima_crude</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">))</span>
<span class="n">pred</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">test</span><span class="o">.</span><span class="n">index</span>

<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">6</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">pred</span><span class="p">,</span> <span class="n">color</span> <span class="o">=</span> <span class="s1">'blue'</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span><span class="s1">'Prediction'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">arima_crude</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="s1">'Actual'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Comparing the AR Model prediction vs the actual value of the crude oil"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price in USD"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Week"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 9" data-asset="session-7/fig-9.png" loading="lazy"/></figure></details>
<p>The resulting graph suggests that while the variations are not perfectly aligned, the model successfully identifies the overall trend, and the scale remains accurate. The model can be further refined by adjusting the parameters p, d &amp; q to achieve a better fit. In this instance, we might consider using returns to illustrate that the predicted variations align closely with the actual values.
ARIMA models are commonly employed for predicting stock prices in market finance and can also be adapted for corporate finance applications, such as forecasting seasonal sales trends.</p>
<h2 id="III---The-theory-of-the-Brownian-Motion-in-Finance">III - The theory of the Brownian Motion in Finance</h2>
<p>Brownian motion, in the context of finance, is characterized by random fluctuations that begin from a specific position and are followed by successive relocations of that position. Each relocation is accompanied by additional random fluctuations. Technically, it is defined as a continuous stochastic process with normally distributed fluctuations.</p>
<p>A stochastic process is a mathematical framework consisting of a sequence of random variables indexed typically by time, modeling systems that evolve over time and space according to probabilistic laws.</p>
<p>The standard Brownian motion can be represented using Wiener notation as follows:<span class="nb-math">dS/S = µdt + σdX</span>, where :</p>
<ul>
<li>dS : Instantaneous change in the stock price S</li>
<li>dt : Instantaneous change in time t</li>
<li>µ : Average growth rate of the asset price (drift).</li>
<li>σ : Volatility of the asset price.</li>
<li>dX : Random component, where X,follows a standard normal distribution, denoted as ~ <em>N(0,1)</em></li>
<li>S : the stock price</li>
</ul>
<p>For standard Brownian motion, we typically assume <span class="nb-math">(µ, σ²) = (0, σ²)</span>, However, stock price evolution can also be modeled using Geometric Brownian Motion (GBM), which incorporates a drift and a scale (or volatility, in our application to finance).</p>
<ul>
<li>Growth Rate: The average of daily returns can simplify the model.</li>
<li>Volatility: This can be approximated by the standard deviation of stock price changes over a defined period. For GBM, we may also utilize the average log return and the standard deviation of log returns.</li>
</ul>
<p>Using the aforementioned random fluctuations, we can generate simulations for future stock prices, allowing us to forecast potential outcomes. It is vital to utilize a normal distribution for the random variable because smaller variations are more probable in the short term compared to larger fluctuations.</p>
<p>For our analysis, we will assume that the stock returns can be modeled as Brownian motions, though we will not provide a formal proof. In finance, Brownian motion is commonly employed to create various “random walks,” illustrating potential paths that the stock price might take.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Rereading the data again (Even though the data is already stored)</span>
<span class="n">google_data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/GOOG.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">index_col</span><span class="o">=</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">google_data</span> <span class="o">=</span> <span class="n">google_data</span><span class="p">[[</span><span class="s1">'Close'</span><span class="p">]]</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">google_data</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"The evolution of the google stock price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price in USD"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 10" data-asset="session-7/fig-10.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="c1"># Defining the function that will be used for the creation of the points</span>
<span class="k">def</span> <span class="nf">simulate_bm</span><span class="p">(</span><span class="n">mu</span><span class="p">,</span> <span class="n">sigma</span><span class="p">,</span> <span class="n">number_of_steps</span><span class="p">,</span> <span class="n">dt</span><span class="p">,</span> <span class="n">initial_value</span><span class="p">):</span>
    <span class="c1"># Repeat n times (number of steps) : calculate the dS = µ * dt + σ * dX, with dX following a standard normal distribution</span>
    <span class="n">dS</span> <span class="o">=</span> <span class="p">[</span> <span class="n">mu</span> <span class="o">*</span> <span class="n">dt</span> <span class="o">+</span> <span class="n">sigma</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">size</span> <span class="o">=</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span> <span class="p">(</span><span class="n">number_of_steps</span><span class="p">)]</span>
    <span class="c1"># The total path is for each step, the sum of the previous one + the variation (added to the initial value)</span>
    <span class="n">dS</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="n">dS</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="n">initial_value</span>
    <span class="n">path</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">cumsum</span><span class="p">(</span><span class="n">dS</span><span class="p">)</span>
    <span class="c1"># This illustrate the time component in with the path is followed</span>
    <span class="n">time_component</span> <span class="o">=</span> <span class="p">[</span> <span class="n">t</span><span class="o">*</span><span class="n">i</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">number_of_steps</span><span class="p">)</span> <span class="p">]</span>
    <span class="k">return</span> <span class="n">path</span><span class="p">,</span> <span class="n">time_component</span></pre></div>
<h3 id="a---The-standardized-Brownian-Motion-(No-drift-and-no-scale-/-volatility)">a - The standardized Brownian Motion (No drift and no scale / volatility)</h3><p>When discussing standardized Brownian motion, we assume that the drift μ is 0 and the scale σ is 1. Thus, the formula for each variation in stock price simplifies t <span class="nb-math">dS = dX</span>, where X follows a normal distribution. However, this simplified model may not be suitable for our stock analysis, as it lacks scaling and constant drift considerations.</p>
<div class="nb-code"><pre><span></span><span class="kn">import</span> <span class="nn">plotly.express</span> <span class="k">as</span> <span class="nn">px</span>

<span class="c1"># We can try to use a short time frame that is equal to 0.01, the time is expressed in day here</span>
<span class="n">std_mu</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">std_sigma</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">t</span> <span class="o">=</span> <span class="mf">0.01</span>
<span class="c1"># Let us generate 10000 steps, which will represent 100 days</span>
<span class="n">steps</span> <span class="o">=</span> <span class="mi">10000</span>
<span class="c1"># We can do 10 simulations</span>
<span class="n">simulations</span> <span class="o">=</span> <span class="mi">10</span>
<span class="c1"># Storing the brownian motion data</span>
<span class="n">simulation_data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">()</span>

<span class="c1"># Generating the simulations</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">simulations</span><span class="p">):</span>
    <span class="n">prices</span><span class="p">,</span> <span class="n">time</span> <span class="o">=</span> <span class="n">simulate_bm</span><span class="p">(</span><span class="n">std_mu</span><span class="p">,</span> <span class="n">std_sigma</span><span class="p">,</span> <span class="n">steps</span><span class="p">,</span> <span class="n">t</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
    <span class="n">simulation_data</span><span class="p">[</span><span class="s1">'prices (in USD) - simulation '</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">=</span> <span class="n">prices</span>
    <span class="n">simulation_data</span><span class="p">[</span><span class="s1">'Time (in days)'</span><span class="p">]</span> <span class="o">=</span> <span class="n">time</span>

<span class="n">simulation_data</span> <span class="o">=</span> <span class="n">simulation_data</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Time (in days)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">fig</span> <span class="o">=</span> <span class="n">px</span><span class="o">.</span><span class="n">line</span><span class="p">(</span><span class="n">simulation_data</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<p>The previous graph illustrates how Brownian motion can represent various scenarios for the future evolution of an asset's price. However, it is important to note that standardized Brownian motion may not be suitable for the stock we are analyzing for the following reasons:</p>
<ul>
<li>Lack of Scaling: Standardized Brownian motion assumes a constant variance (scale) of 1, which may not accurately reflect the actual volatility of the stock. This simplification can lead to predictions that do not capture the true range of price fluctuations.</li>
<li>Absence of Constant Drift: Standardized Brownian motion also ignores the concept of drift, which represents the average expected change in price over time. Without incorporating a drift, the model fails to account for the inherent upward or downward trend in the asset's price, leading to unrealistic forecasts.</li>
</ul>
<p>To enhance the accuracy of our price predictions, it is essential to incorporate both drift and scale:</p>
<ul>
<li>Drift (μ): This represents the constant expected variation in the stock price, independent of time. By estimating drift as the average return or log return of the asset, we can better model the general direction in which the stock is likely to move over time.</li>
<li>Scale (σ): This parameter allows us to define the range within which the asset's price is expected to fluctuate around the drift. The scale is typically represented by the standard deviation of the stock price changes, providing a more realistic measure of volatility.</li>
</ul>
<h3 id="b---The-Brownian-Motion-considering-a-drift-and-a-scale-/-Volatility">b - The Brownian Motion considering a drift and a scale / Volatility</h3><p>To conduct our simulation, we will utilize data from the beginning of the dataset up to the 50th measurement before the last value of the Carrefour stock price. This approach enables a comparison of the simulations against actual price movements.</p>
<div class="nb-code"><pre><span></span><span class="n">carrefour_data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/CA.PA.csv'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">index_col</span><span class="o">=</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">carrefour_data</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[[</span><span class="s1">'Close'</span><span class="p">]]</span>

<span class="c1"># Showing</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">carrefour_data</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'The Carrefour stock price in USD'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price in USD"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 11" data-asset="session-7/fig-11.png" loading="lazy"/></figure></details>
<p>To mitigate volatility that could skew predictions, we will exclude data prior to 2012. Notably, there was a significant drop in stock prices around 2008 due to the financial crisis (the Great Recession), which could introduce bias in our analysis.</p>
<div class="nb-code"><pre><span></span><span class="n">carrefour_data</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="s1">'2014-01-01'</span><span class="p">:]</span>
<span class="c1"># Calculating the changes in the prices</span>
<span class="n">carrefour_data_train</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[:</span><span class="o">-</span><span class="mi">50</span><span class="p">]</span>
<span class="n">carrefour_data_ref</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">carrefour_data_train</span><span class="p">)</span>
<span class="c1"># Calculating the difference to the previous value</span>
<span class="n">carrefour_variation_ref</span> <span class="o">=</span> <span class="n">carrefour_data_ref</span><span class="o">.</span><span class="n">diff</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the drift and the scale volatility</span>
<span class="n">drift_carrefour</span> <span class="o">=</span> <span class="n">carrefour_variation_ref</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="n">scale_carrefour</span> <span class="o">=</span> <span class="n">carrefour_variation_ref</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">]</span><span class="o">.</span><span class="n">std</span><span class="p">()</span>

<span class="c1"># We use the log returns because, it reduces the volatility. It does not exist a specific rule regarding the scale and the drift</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Drift :"</span><span class="p">,</span> <span class="n">drift_carrefour</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Scale :"</span><span class="p">,</span> <span class="n">scale_carrefour</span><span class="p">)</span>
<span class="c1"># Some test have to be done to define a good drift and a good scale, however, it is possible to use the log returns too</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Drift : -0.0002761841155139823
Scale : 0.016481181640191255</pre></details>
<p>Once we calculate the drift and scale / volatility, we can proceed to generate multiple simulations of Brownian motion. For our analysis, we will create five simulations spanning 50 days.</p>
<div class="nb-code"><pre><span></span><span class="n">t</span> <span class="o">=</span> <span class="mf">0.02</span>
<span class="n">steps</span> <span class="o">=</span> <span class="mi">2500</span>
<span class="c1"># We can do 5 simulations</span>
<span class="n">simulations</span> <span class="o">=</span> <span class="mi">5</span>
<span class="c1"># Storing the brownian motion data</span>
<span class="n">simulation_carrefour</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">()</span>
<span class="n">last_value_carrefour</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">][</span><span class="o">-</span><span class="mi">50</span><span class="p">]</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">simulations</span><span class="p">):</span>
    <span class="n">prices</span><span class="p">,</span> <span class="n">time</span> <span class="o">=</span> <span class="n">simulate_bm</span><span class="p">(</span><span class="n">drift_carrefour</span><span class="p">,</span> <span class="n">scale_carrefour</span><span class="p">,</span> <span class="n">steps</span><span class="p">,</span> <span class="n">t</span><span class="p">,</span> <span class="n">last_value_carrefour</span><span class="p">)</span>
    <span class="n">simulation_carrefour</span><span class="p">[</span><span class="s1">'Carrefour stock price - simulation '</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)]</span> <span class="o">=</span> <span class="p">(</span><span class="n">prices</span><span class="p">)</span>
    <span class="n">simulation_carrefour</span><span class="p">[</span><span class="s1">'Time (in days)'</span><span class="p">]</span> <span class="o">=</span> <span class="n">time</span>

<span class="n">carrefour_data_test</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[</span><span class="o">-</span><span class="mi">50</span><span class="p">:]</span>
<span class="n">carrefour_data_test</span> <span class="o">=</span> <span class="n">carrefour_data_test</span><span class="o">.</span><span class="n">reset_index</span><span class="p">(</span><span class="n">drop</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">simulation_carrefour</span> <span class="o">=</span> <span class="n">simulation_carrefour</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s1">'Time (in days)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">6</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">simulation_carrefour</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="n">simulation_carrefour</span><span class="o">.</span><span class="n">columns</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Real data vs 5 simulations using Brownian Motion"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">carrefour_data_test</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="s2">"Actual Price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price in USD"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Time in days"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 12" data-asset="session-7/fig-12.png" loading="lazy"/></figure></details>
<p>The generated drifted and scaled Brownian motions produce various scenarios for potential price evolution. This approach allows us to explore several possibilities, including best- and worst-case scenarios, based on statistical measures. For predictive purposes, rather than commencing from 50 steps before the end, we can initiate our simulations directly from the final data point of the series.</p>
<p>This framework provides a robust method for utilizing Brownian motion in finance, allowing for the generation of potential future stock prices and enhancing our understanding of the inherent risks and rewards associated with stock market investments. The analysis of drift and scale plays a crucial role in creating accurate simulations that reflect realistic market behavior.</p>
<h2 id="IV---Approximation-with-Monte-Carlo">IV - Approximation with Monte Carlo</h2><p>We define a Monte Carlo simulation a model that uses randomness to solve problem that can either be deterministic or stochastic. It allows one to solve optimization problems, calculation of integrals problems and problems with random outcomes; by generating random inputs and applying a specific function to the inputs to generate deterministic outputs.</p>
<p>A Monte Carlo simulation takes a variable that has uncertainty and assigns it random values, repeats the process again again with a wide number of different values, once done, the result is aggregated to arrive to a certain estimate.</p>
<p>In a nutshell, a Monte Carlo simulation always follow the same procedure :</p>
<ul>
<li>Definition a domain of possible inputs</li>
<li>Generate input randomly from probability distribution (Randomness, inside the domain)</li>
<li>Perform a deterministic computation of the outputs (apply a function to the random inputs to generate the outputs)</li>
<li>Aggregate the results (Can be an average in case of estimation of a possible outcome, can be a sum in case of integrals, or other aggregate functions)</li>
</ul>
<p>Let us show a first example of the next day stock price, using the price of the last day. We will use the priciples that have been used for the Brownian motion to calculate the stock price variation, using the log returns here instead of the returns. (We will note that the returns can nevertheless be used as well)</p>
<p>From the previous formula (dt = 1), we can say <code>Not expected to be known in the scope of this class</code>:</p>
<ul>
<li><span class="nb-math">dS = µ · 1 + σ · dX</span></li>
<li><span class="nb-math">S(t) = dS + S(t-1)</span><ul>
<li>S(t-1) is the previous price</li>
<li>With Îto's formula (assumed in the scope of this class) : <span class="nb-math">ln(S(t)/S(t-1)) = (µ · 1 + σ · dX)</span></li>
<li>So <span class="nb-math">ln(S(t)) = (µ + σ · dX) + ln(S(t-1))</span></li>
<li>Then <span class="nb-math">S(t) = exp((µ + σ · dX) + ln(S(t-1)))</span></li>
<li>So <span class="nb-math">S(t) = exp((µ + σ · dX)) · S(t-1)</span></li>
</ul>
</li>
<li>With µ and σ calculated on the log returns, we can use :<ul>
<li>The drift, or <span class="nb-math">µ = Avg(ln(Days's Price / Previous Days Price)) - Var(ln(Days's Price / Previous Days Price))/2</span>, under the risk neutral probability measure (present value is equal to the expected value of its future payoffs, discounted at the risk-free rate, and all assets grow at the risk-free rate)</li>
<li>The scale, or the variable σ = The standard deviation of the log returns  log volatility</li>
</ul>
</li>
</ul>
<p>Therefore, we can, by the the Îto's formula and the previous demonstration say that we can calculate the next day's price using :</p>
<ul>
<li><span class="nb-math">S(t) = exp((µ + σ · dX)) · S(t-1)</span></li>
<li><span class="nb-math">µ = Average(ln(Days's Price / Previous Days Price)) - Var(ln(Days's Price / Previous Days Price))/2</span></li>
<li>σ = The standard deviation of the log returns</li>
<li>dX a standard normally distributed random variable</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># We will first try to predict the stock price of the next day using this formula</span>
<span class="c1"># Input variables</span>
<span class="n">last_price</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">]</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>
<span class="n">log_prices_carrefour</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">carrefour_data</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">])</span>

<span class="c1"># Calculate log returns, dropping NaN values</span>
<span class="n">log_returns_carrefour</span> <span class="o">=</span> <span class="n">log_prices_carrefour</span><span class="o">.</span><span class="n">diff</span><span class="p">()</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>

<span class="c1"># Parameters</span>
<span class="n">avg_log_return</span> <span class="o">=</span> <span class="n">log_returns_carrefour</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="n">variance_log_return</span> <span class="o">=</span> <span class="n">log_returns_carrefour</span><span class="o">.</span><span class="n">var</span><span class="p">()</span>
<span class="n">std_log_return</span> <span class="o">=</span> <span class="n">log_returns_carrefour</span><span class="o">.</span><span class="n">std</span><span class="p">()</span>

<span class="c1"># Drift and scale</span>
<span class="n">drift_log_carrefour</span> <span class="o">=</span> <span class="n">avg_log_return</span> <span class="o">-</span> <span class="n">variance_log_return</span> <span class="o">/</span> <span class="mi">2</span>
<span class="n">scale_log_carrefour</span> <span class="o">=</span> <span class="n">std_log_return</span>

<span class="c1"># Number of repetitions</span>
<span class="n">repetitions</span> <span class="o">=</span> <span class="mi">5000</span>

<span class="c1"># Generating random variations</span>
<span class="n">random_numbers</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">size</span><span class="o">=</span><span class="n">repetitions</span><span class="p">)</span>

<span class="c1"># Vectorized calculation of next price</span>
<span class="n">deterministic_output</span> <span class="o">=</span> <span class="n">last_price</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="n">drift_log_carrefour</span> <span class="o">+</span> <span class="n">scale_log_carrefour</span> <span class="o">*</span> <span class="n">random_numbers</span><span class="p">)</span>

<span class="c1"># Aggregation: Calculate the average</span>
<span class="n">calculated_next_price</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">deterministic_output</span><span class="p">)</span>

<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">"The next day's price is expected to be </span><span class="si">{</span><span class="nb">round</span><span class="p">(</span><span class="n">calculated_next_price</span><span class="p">,</span><span class="w"> </span><span class="mi">2</span><span class="p">)</span><span class="si">}</span><span class="s2"> according to the Monte Carlo simulation"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The next day's price is expected to be 14.79 according to the Monte Carlo simulation</pre></details>
<p>To test whether the model is efficient, we can perform a back test by running the monte carlo simulation on the previous prices and by trying to predict the previous prices. It can be, for example, on the last 20 days.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Use the same process by calculating the drift and the scale on the data</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>

<span class="c1"># Number of predictions</span>
<span class="n">nb_of_predictions</span> <span class="o">=</span> <span class="mi">10</span>

<span class="c1"># Backtest log returns (excluding the last nb_of_predictions days)</span>
<span class="n">log_returns_backtest</span> <span class="o">=</span> <span class="n">log_returns_carrefour</span><span class="p">[:</span><span class="o">-</span><span class="n">nb_of_predictions</span><span class="p">]</span>

<span class="c1"># Parameters calculation</span>
<span class="n">avg_log_return_backtest</span> <span class="o">=</span> <span class="n">log_returns_backtest</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="n">variance_log_return_backtest</span> <span class="o">=</span> <span class="n">log_returns_backtest</span><span class="o">.</span><span class="n">var</span><span class="p">()</span>
<span class="n">std_log_return_backtest</span> <span class="o">=</span> <span class="n">log_returns_backtest</span><span class="o">.</span><span class="n">std</span><span class="p">()</span>

<span class="c1"># Scale and drift</span>
<span class="n">drift_log</span> <span class="o">=</span> <span class="n">avg_log_return_backtest</span> <span class="o">-</span> <span class="n">variance_log_return_backtest</span> <span class="o">/</span> <span class="mi">2</span>
<span class="n">scale_log</span> <span class="o">=</span> <span class="n">std_log_return_backtest</span>

<span class="c1"># Initial price for predictions</span>
<span class="n">last_price</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">]</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="n">nb_of_predictions</span><span class="p">]</span>

<span class="c1"># Repetitions for Monte Carlo simulation (large number =&gt; Might fail to capture variability because the Law of large number says it will converge </span>
<span class="c1"># toward the average so Price + Drift</span>
<span class="n">repetitions</span> <span class="o">=</span> <span class="mi">10</span>

<span class="c1"># Lists to store actual and predicted prices</span>
<span class="n">real_prices</span> <span class="o">=</span> <span class="p">[]</span>
<span class="n">calculated_prices</span> <span class="o">=</span> <span class="p">[]</span>

<span class="c1"># Loop over each prediction step</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">nb_of_predictions</span><span class="p">):</span>
    <span class="c1"># Extract the actual price for this step</span>
    <span class="n">actual_price</span> <span class="o">=</span> <span class="n">carrefour_data</span><span class="p">[</span><span class="s1">'Close'</span><span class="p">]</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="n">nb_of_predictions</span> <span class="o">+</span> <span class="n">i</span><span class="p">]</span>
    <span class="n">real_prices</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">actual_price</span><span class="p">)</span>
    
    <span class="c1"># Generate random normal variations</span>
    <span class="n">random_numbers</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">size</span><span class="o">=</span><span class="n">repetitions</span><span class="p">)</span>
    
    <span class="c1"># Calculate simulated prices using cumulative product for more realistic variability</span>
    <span class="n">simulated_prices</span> <span class="o">=</span> <span class="n">last_price</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="n">drift_log</span> <span class="o">+</span> <span class="n">scale_log</span> <span class="o">*</span> <span class="n">random_numbers</span><span class="p">)</span>
    
    <span class="c1"># Aggregate to obtain the predicted price (use median for more variability)</span>
    <span class="n">predicted_price</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">median</span><span class="p">(</span><span class="n">simulated_prices</span><span class="p">)</span>
    <span class="n">calculated_prices</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">predicted_price</span><span class="p">)</span>
    
    <span class="c1"># Update last_price for the next iteration</span>
    <span class="n">last_price</span> <span class="o">=</span> <span class="n">predicted_price</span>

<span class="c1"># Plotting the actual and predicted prices</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">real_prices</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s2">"Actual Prices"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s1">'o'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'-'</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'blue'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">calculated_prices</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s2">"Calculated Prices"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s1">'o'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Prediction Step"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Actual vs Calculated Prices using Monte Carlo Simulation (Enhanced Variability)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">grid</span><span class="p">(</span><span class="n">alpha</span><span class="o">=</span><span class="mf">0.3</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">tight_layout</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 13" data-asset="session-7/fig-13.png" loading="lazy"/></figure></details>
<p>As you may notice, it might be very complicated to use Monte Carlo struggles to capture the variation of the stocks that are volatile. Monte Carlo might not be a good option for all financial assets or all estimations. The method :</p>
<ul>
<li>Relies on good quality input (Here, the price data is polluted by the macroeconomic events)</li>
<li>Is sensitive to change in volatility and average</li>
<li>Might oversimplify complex problems</li>
<li>For mathematical reasons (Law of large number, in these kind of problem, Monte Carlo might fail to capture the variability effectively)</li>
</ul>
<p>However, it might be a good solution for computation of integrals or optimization problems (such as Markowitz weighted portfolio, for example)</p>
<h2 id="V---Markowitz-and-efficient-market-theory">V - Markowitz and efficient market theory</h2>
<p>The Markowitz portfolio model is a sophisticated optimization technique that explores the intricate relationship between risk and return. Its primary objective is to maximize returns while simultaneously minimizing risk. This model operates under the premise of market efficiency, implying that investors have access to all pertinent information necessary for making well-informed investment decisions.</p>
<p>This methodology is particularly valuable when constructing a diversified portfolio of stocks. It allocates varying weights to each stock, aiming to enhance returns and mitigate volatility. To accomplish this, it is imperative to calculate both the returns and the volatility associated with individual stocks, thus enabling a comprehensive evaluation of the overall risk and return of the weighted portfolio.</p>
<p>We can employ Monte Carlo simulations to illustrate diverse scenarios for the portfolio, showcasing the potential returns and risks associated with different allocations.</p>
<div class="nb-code"><pre><span></span><span class="c1"># We use the average yearly return and the yearly volatility </span>
<span class="k">def</span> <span class="nf">compute_CAGR</span><span class="p">(</span><span class="n">prices</span><span class="p">,</span> <span class="n">annual_days</span> <span class="o">=</span> <span class="mi">256</span><span class="p">):</span>
    <span class="k">return</span> <span class="nb">round</span><span class="p">((</span><span class="n">prices</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">/</span><span class="n">prices</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span><span class="o">**</span><span class="p">(</span><span class="n">annual_days</span><span class="o">/</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">prices</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">))</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">3</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">compute_volatility</span><span class="p">(</span><span class="n">returns</span><span class="p">,</span> <span class="n">annual_days</span> <span class="o">=</span> <span class="mi">256</span><span class="p">):</span>
    <span class="n">m</span> <span class="o">=</span> <span class="n">returns</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    <span class="n">centered_ret_sq</span> <span class="o">=</span> <span class="p">(</span><span class="n">returns</span> <span class="o">-</span> <span class="n">m</span><span class="p">)</span><span class="o">**</span><span class="mi">2</span>
    <span class="n">sum_sq</span> <span class="o">=</span> <span class="n">centered_ret_sq</span><span class="o">.</span><span class="n">sum</span><span class="p">()</span>
    <span class="k">return</span> <span class="nb">round</span><span class="p">(</span><span class="n">annual_days</span><span class="o">**</span><span class="p">(</span><span class="mf">0.5</span><span class="p">)</span><span class="o">*</span><span class="p">(</span><span class="n">sum_sq</span><span class="o">/</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">returns</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">))</span><span class="o">**</span><span class="p">(</span><span class="mf">0.5</span><span class="p">),</span><span class="mi">3</span><span class="p">)</span></pre></div>
<p>In this analysis, we will utilize stocks from the CAC 40 index to exemplify the principles of the Markowitz model. It is crucial to select a diverse array of high-performing stocks while minimizing correlation among them to avoid concentration risk.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Reading the stock prices </span>
<span class="n">cac_data_prices</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_excel</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s1">'/CAC 40.xlsx'</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s1">'Date'</span><span class="p">],</span> <span class="n">index_col</span><span class="o">=</span><span class="s1">'Date'</span><span class="p">)</span>
<span class="n">cac_data_prices</span> <span class="o">=</span> <span class="n">cac_data_prices</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="s1">'2015-01-01'</span><span class="p">:]</span>
<span class="n">cac_data_return</span> <span class="o">=</span> <span class="n">cac_data_prices</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="n">cac_data_return</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Time in days</th>
<th>AIRP.PA</th>
<th>AXAF.PA</th>
<th>BOUY.PA</th>
<th>BNPP.PA</th>
<th>TCFP.PA</th>
<th>CAPP.PA</th>
<th>ESLX.PA</th>
<th>OREP.PA</th>
<th>LVMH.PA</th>
<th>...</th>
<th>VIE.PA</th>
<th>VIV.PA</th>
<th>EUFI.PA</th>
<th>CAGR.PA</th>
<th>MT.AS</th>
<th>ENGIE.PA</th>
<th>LEGD.PA</th>
<th>WLN.PA</th>
<th>STLA.PA</th>
<th>CAC40</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2015-01-02</th>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>...</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
</tr>
<tr>
<th>2015-01-05</th>
<td>0.007576</td>
<td>-0.030966</td>
<td>-0.037173</td>
<td>-0.036969</td>
<td>-0.048554</td>
<td>-0.010993</td>
<td>-0.013307</td>
<td>-0.012637</td>
<td>-0.023654</td>
<td>-0.029041</td>
<td>...</td>
<td>-0.024855</td>
<td>-0.020433</td>
<td>-0.015078</td>
<td>-0.045872</td>
<td>-0.038359</td>
<td>-0.042465</td>
<td>-0.032214</td>
<td>-0.012422</td>
<td>-0.037059</td>
<td>-0.033142</td>
</tr>
<tr>
<th>2015-01-06</th>
<td>0.007519</td>
<td>-0.008345</td>
<td>-0.010875</td>
<td>-0.007609</td>
<td>-0.026154</td>
<td>0.002919</td>
<td>-0.038604</td>
<td>-0.012577</td>
<td>0.000000</td>
<td>-0.011413</td>
<td>...</td>
<td>-0.013966</td>
<td>-0.016638</td>
<td>-0.020961</td>
<td>-0.019231</td>
<td>-0.000231</td>
<td>-0.010005</td>
<td>-0.018545</td>
<td>0.005031</td>
<td>-0.002749</td>
<td>-0.006776</td>
</tr>
<tr>
<th>2015-01-07</th>
<td>0.007463</td>
<td>0.004516</td>
<td>0.010720</td>
<td>0.011675</td>
<td>-0.016703</td>
<td>0.011978</td>
<td>0.004208</td>
<td>0.014427</td>
<td>0.005591</td>
<td>0.000796</td>
<td>...</td>
<td>0.007790</td>
<td>0.002020</td>
<td>0.016117</td>
<td>-0.014216</td>
<td>-0.001614</td>
<td>-0.009287</td>
<td>-0.007267</td>
<td>-0.001877</td>
<td>-0.002348</td>
<td>0.007158</td>
</tr>
<tr>
<th>2015-01-08</th>
<td>0.007407</td>
<td>0.042092</td>
<td>0.041338</td>
<td>0.029969</td>
<td>0.032419</td>
<td>0.018695</td>
<td>0.028462</td>
<td>0.037444</td>
<td>0.036323</td>
<td>0.031424</td>
<td>...</td>
<td>0.018623</td>
<td>0.023185</td>
<td>0.010417</td>
<td>0.024366</td>
<td>0.036614</td>
<td>0.036118</td>
<td>0.022694</td>
<td>0.006270</td>
<td>0.038682</td>
<td>0.035855</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>

<span class="n">corrCAC</span> <span class="o">=</span> <span class="n">cac_data_return</span><span class="o">.</span><span class="n">corr</span><span class="p">()</span>
<span class="c1"># Show</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">sns</span><span class="o">.</span><span class="n">set_theme</span><span class="p">(</span><span class="n">rc</span><span class="o">=</span><span class="p">{</span><span class="s1">'figure.figsize'</span><span class="p">:(</span><span class="mi">15</span><span class="p">,</span><span class="mi">15</span><span class="p">)})</span>
<span class="n">cmap</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">diverging_palette</span><span class="p">(</span><span class="mi">230</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="n">as_cmap</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">heatmap</span><span class="p">(</span><span class="n">corrCAC</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">1</span><span class="p">:,</span><span class="mi">1</span><span class="p">:],</span> <span class="n">annot</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">cmap</span><span class="o">=</span><span class="n">cmap</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 14" data-asset="session-7/fig-14.png" loading="lazy"/></figure></details>
<p>From the preceding graph, we can identify three or four stocks exhibiting low correlation (indicated by lighter color intensities). High correlation typically arises among companies within the same industry; hence, selecting stocks with strong performance is essential. To facilitate this selection, we will calculate the Compound Annual Growth Rate (CAGR) for each stock and subsequently rank them accordingly.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the CAGR</span>
<span class="n">CAGRs</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">cac_data_prices</span><span class="o">.</span><span class="n">columns</span><span class="p">)):</span>
    <span class="n">CAGRs</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">compute_CAGR</span><span class="p">(</span><span class="n">cac_data_prices</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span><span class="n">i</span><span class="p">]))</span>
<span class="n">data_cagr</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">({</span><span class="s1">'Stock'</span><span class="p">:</span><span class="n">cac_data_prices</span><span class="o">.</span><span class="n">columns</span><span class="p">,</span> <span class="s1">'CAGR'</span> <span class="p">:</span> <span class="n">CAGRs</span><span class="p">})</span>
<span class="n">data_cagr</span> <span class="o">=</span> <span class="n">data_cagr</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="n">by</span><span class="o">=</span><span class="s1">'CAGR'</span><span class="p">)</span>
<span class="n">data_cagr</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Stock</th>
<th>CAGR</th>
</tr>
</thead>
<tbody>
<tr>
<th>22</th>
<td>URW.AS</td>
<td>-0.165</td>
</tr>
<tr>
<th>14</th>
<td>RENA.PA</td>
<td>-0.095</td>
</tr>
<tr>
<th>27</th>
<td>CARR.PA</td>
<td>-0.065</td>
</tr>
<tr>
<th>23</th>
<td>ORAN.PA</td>
<td>-0.056</td>
</tr>
<tr>
<th>37</th>
<td>ENGIE.PA</td>
<td>-0.053</td>
</tr>
<tr>
<th>18</th>
<td>SOGN.PA</td>
<td>-0.024</td>
</tr>
<tr>
<th>30</th>
<td>DANO.PA</td>
<td>-0.001</td>
</tr>
<tr>
<th>13</th>
<td>PUBP.PA</td>
<td>-0.001</td>
</tr>
<tr>
<th>3</th>
<td>BOUY.PA</td>
<td>0.005</td>
</tr>
<tr>
<th>21</th>
<td>TTEF.PA</td>
<td>0.007</td>
</tr>
<tr>
<th>35</th>
<td>CAGR.PA</td>
<td>0.020</td>
</tr>
<tr>
<th>28</th>
<td>SASY.PA</td>
<td>0.022</td>
</tr>
<tr>
<th>4</th>
<td>BNPP.PA</td>
<td>0.028</td>
</tr>
<tr>
<th>36</th>
<td>MT.AS</td>
<td>0.044</td>
</tr>
<tr>
<th>2</th>
<td>AXAF.PA</td>
<td>0.045</td>
</tr>
<tr>
<th>26</th>
<td>ALSO.PA</td>
<td>0.050</td>
</tr>
<tr>
<th>33</th>
<td>VIV.PA</td>
<td>0.050</td>
</tr>
<tr>
<th>5</th>
<td>TCFP.PA</td>
<td>0.075</td>
</tr>
<tr>
<th>41</th>
<td>CAC40</td>
<td>0.076</td>
</tr>
<tr>
<th>16</th>
<td>SGOB.PA</td>
<td>0.081</td>
</tr>
<tr>
<th>1</th>
<td>AIRP.PA</td>
<td>0.092</td>
</tr>
<tr>
<th>10</th>
<td>MICP.PA</td>
<td>0.099</td>
</tr>
<tr>
<th>19</th>
<td>SGEF.PA</td>
<td>0.103</td>
</tr>
<tr>
<th>7</th>
<td>ESLX.PA</td>
<td>0.107</td>
</tr>
<tr>
<th>29</th>
<td>SAF.PA</td>
<td>0.111</td>
</tr>
<tr>
<th>32</th>
<td>VIE.PA</td>
<td>0.123</td>
</tr>
<tr>
<th>11</th>
<td>PERP.PA</td>
<td>0.128</td>
</tr>
<tr>
<th>38</th>
<td>LEGD.PA</td>
<td>0.129</td>
</tr>
<tr>
<th>31</th>
<td>AIR.PA</td>
<td>0.152</td>
</tr>
<tr>
<th>20</th>
<td>SCHN.PA</td>
<td>0.162</td>
</tr>
<tr>
<th>40</th>
<td>STLA.PA</td>
<td>0.173</td>
</tr>
<tr>
<th>39</th>
<td>WLN.PA</td>
<td>0.174</td>
</tr>
<tr>
<th>8</th>
<td>OREP.PA</td>
<td>0.175</td>
</tr>
<tr>
<th>6</th>
<td>CAPP.PA</td>
<td>0.198</td>
</tr>
<tr>
<th>12</th>
<td>PRTP.PA</td>
<td>0.248</td>
</tr>
<tr>
<th>34</th>
<td>EUFI.PA</td>
<td>0.261</td>
</tr>
<tr>
<th>24</th>
<td>HRMS.PA</td>
<td>0.265</td>
</tr>
<tr>
<th>25</th>
<td>DAST.PA</td>
<td>0.265</td>
</tr>
<tr>
<th>9</th>
<td>LVMH.PA</td>
<td>0.276</td>
</tr>
<tr>
<th>15</th>
<td>TEPRF.PA</td>
<td>0.311</td>
</tr>
<tr>
<th>17</th>
<td>STM.PA</td>
<td>0.321</td>
</tr>
</tbody>
</table></div></details>
<p>Using the previous dataset, we will initially select STM.PA, and based on the correlation heatmap, we will include DAST.PA, PERP.PA, and HRMS.PA. Please note that this can't really be used as an investment strategy because the at this stage the CAGR is already known, but this methodology could be used as a way to evaluate a past investment and a different scenario.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Selected stocks </span>
<span class="n">list_stock_cac</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'STM.PA'</span><span class="p">,</span> <span class="s1">'DAST.PA'</span><span class="p">,</span> <span class="s1">'PERP.PA'</span><span class="p">,</span> <span class="s1">'HRMS.PA'</span><span class="p">]</span>
<span class="n">selected_stocks_return</span> <span class="o">=</span> <span class="n">cac_data_return</span><span class="p">[</span><span class="n">list_stock_cac</span><span class="p">]</span>
<span class="n">selected_stocks_prices</span> <span class="o">=</span> <span class="n">cac_data_prices</span><span class="p">[</span><span class="n">list_stock_cac</span><span class="p">]</span>


<span class="c1"># We can create an equally weighted portfolio, so we can compare it to the Markowitz portfolio equally weighted portfolio</span>
<span class="n">selected_stocks_return</span><span class="p">[</span><span class="s1">'Return port.'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)):</span>
    <span class="n">selected_stocks_return</span><span class="p">[</span><span class="s1">'Return port.'</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">loc</span><span class="p">[:,</span><span class="s1">'Return port.'</span><span class="p">]</span> <span class="o">+</span> 
                                              <span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">loc</span><span class="p">[:,</span><span class="n">list_stock_cac</span><span class="p">[</span><span class="n">i</span><span class="p">]])</span>
<span class="n">selected_stocks_return</span><span class="p">[</span><span class="s1">'Return port.'</span><span class="p">]</span> <span class="o">=</span> <span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">loc</span><span class="p">[:,</span><span class="s1">'Return port.'</span><span class="p">]</span><span class="o">/</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)</span>

<span class="c1"># Displaying the dataframe</span>
<span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>

<span class="n">list_cagr</span> <span class="o">=</span> <span class="p">[]</span>
<span class="n">list_vol</span> <span class="o">=</span> <span class="p">[]</span>

<span class="c1"># Calculating the cagr and the volatility of each stock</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)):</span>
    <span class="n">list_cagr</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">compute_CAGR</span><span class="p">(</span><span class="n">selected_stocks_prices</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span><span class="n">i</span><span class="p">]))</span>
    <span class="n">list_vol</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">compute_volatility</span><span class="p">(</span><span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span><span class="n">i</span><span class="p">]))</span>

<span class="c1"># Markowitz method uses CAGR and Volatility and covariance</span>
<span class="n">data_markowitz</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">({</span><span class="s1">'Stock'</span><span class="p">:</span><span class="n">list_stock_cac</span><span class="p">,</span> <span class="s1">'CAGR'</span> <span class="p">:</span> <span class="n">list_cagr</span><span class="p">,</span> <span class="s1">'Volatility'</span><span class="p">:</span><span class="n">list_vol</span><span class="p">})</span>
<span class="nb">print</span><span class="p">(</span><span class="n">data_markowitz</span><span class="p">)</span>
<span class="c1"># Covariance matrix of the returns multiplied by 1 year</span>
<span class="n">covMatrix</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,:</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span><span class="o">.</span><span class="n">cov</span><span class="p">()</span> <span class="o">*</span> <span class="mi">256</span>
<span class="nb">print</span><span class="p">(</span><span class="n">covMatrix</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Stock   CAGR  Volatility
0   STM.PA  0.321       0.398
1  DAST.PA  0.265       0.256
2  PERP.PA  0.128       0.203
3  HRMS.PA  0.265       0.223
           STM.PA   DAST.PA   PERP.PA   HRMS.PA
STM.PA   0.158496  0.048068  0.026900  0.040508
DAST.PA  0.048068  0.065489  0.022301  0.026366
PERP.PA  0.026900  0.022301  0.041401  0.021797
HRMS.PA  0.040508  0.026366  0.021797  0.049591</pre></details>
<div class="nb-code"><pre><span></span><span class="c1"># Monte Carlo Method for the Markowitz portfolio</span>
<span class="n">nb_portfolio</span> <span class="o">=</span> <span class="mi">60000</span>
<span class="n">list_ret</span> <span class="o">=</span> <span class="p">[]</span>
<span class="n">list_risk</span> <span class="o">=</span> <span class="p">[]</span>

<span class="c1"># Converting to the matrices</span>
<span class="n">covMatrix</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asmatrix</span><span class="p">(</span><span class="n">covMatrix</span><span class="p">)</span>
<span class="n">matrix_cagr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asmatrix</span><span class="p">(</span><span class="n">list_cagr</span><span class="p">)</span>

<span class="c1"># Creating the portofolios and allocating random weights to the stocks</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">nb_portfolio</span><span class="p">):</span>
    <span class="c1"># Storing the weights</span>
    <span class="n">weights</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)):</span>
        <span class="c1"># Choosing random weights</span>
        <span class="n">weights</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">uniform</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span>
    <span class="c1"># Calculating the total weights</span>
    <span class="n">total</span> <span class="o">=</span> <span class="nb">sum</span><span class="p">(</span><span class="n">weights</span><span class="p">)</span>
    <span class="n">allocation</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)):</span>
        <span class="c1"># Allocating the weights in %</span>
        <span class="n">allocation</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">weights</span><span class="p">[</span><span class="n">k</span><span class="p">]</span><span class="o">/</span><span class="n">total</span><span class="p">)</span>
    <span class="c1"># Converting the allocation to a matrix</span>
    <span class="n">allocation</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asmatrix</span><span class="p">(</span><span class="n">allocation</span><span class="p">)</span>
    <span class="c1"># Return according to the Weights (weighted return)</span>
    <span class="n">return_port</span> <span class="o">=</span> <span class="n">matrix_cagr</span><span class="o">*</span><span class="n">allocation</span><span class="o">.</span><span class="n">transpose</span><span class="p">()</span>
    <span class="c1"># Calculating the volatility of the portfolio </span>
    <span class="n">risk_port</span> <span class="o">=</span> <span class="p">(</span><span class="n">allocation</span> <span class="o">*</span> <span class="p">(</span><span class="n">covMatrix</span> <span class="o">*</span> <span class="n">allocation</span><span class="o">.</span><span class="n">transpose</span><span class="p">()))</span><span class="o">.</span><span class="n">item</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">)</span><span class="o">**</span><span class="p">(</span><span class="mf">0.5</span><span class="p">)</span>
    <span class="c1"># Adding the results to the lists </span>
    <span class="n">list_ret</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">return_port</span><span class="o">.</span><span class="n">item</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">))</span>
    <span class="n">list_risk</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">risk_port</span><span class="p">)</span>

<span class="n">data_simulations</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">([</span><span class="n">list_ret</span><span class="p">,</span> <span class="n">list_risk</span><span class="p">])</span><span class="o">.</span><span class="n">transpose</span><span class="p">()</span>
<span class="n">data_simulations</span><span class="o">.</span><span class="n">columns</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'Returns'</span><span class="p">,</span> <span class="s1">'Volatility'</span><span class="p">]</span>
<span class="n">data_simulations</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>Returns</th>
<th>Volatility</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>0.242770</td>
<td>0.194923</td>
</tr>
<tr>
<th>1</th>
<td>0.242532</td>
<td>0.198997</td>
</tr>
<tr>
<th>2</th>
<td>0.268481</td>
<td>0.242234</td>
</tr>
<tr>
<th>3</th>
<td>0.253254</td>
<td>0.239326</td>
</tr>
<tr>
<th>4</th>
<td>0.260681</td>
<td>0.236985</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="n">sns</span><span class="o">.</span><span class="n">set_theme</span><span class="p">(</span><span class="n">rc</span><span class="o">=</span><span class="p">{</span><span class="s1">'figure.figsize'</span><span class="p">:(</span><span class="mi">15</span><span class="p">,</span><span class="mi">10</span><span class="p">)})</span>

<span class="c1"># Plotting the Markowitz efficient frontier</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">data_simulations</span><span class="p">[</span><span class="s1">'Volatility'</span><span class="p">],</span> <span class="n">data_simulations</span><span class="p">[</span><span class="s1">'Returns'</span><span class="p">],</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Portfolios'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Markowitz efficient frontier"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Volatility"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Returns"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 15" data-asset="session-7/fig-15.png" loading="lazy"/></figure></details>
<p>By employing Monte Carlo simulations, we can observe the existence of an "Efficient Frontier," which represents the optimal balance between maximized returns and minimized risks. The Markowitz approach enables us to determine the optimal allocation of the portfolio through quadratic optimization. (⚠️ It is important to note that this specific aspect falls outside the scope of this course.)</p>
<div class="nb-code"><pre><span></span><span class="c1"># Do not forget to install cvxopt</span>
<span class="kn">from</span> <span class="nn">cvxopt</span> <span class="kn">import</span> <span class="n">matrix</span><span class="p">,</span> <span class="n">solvers</span>
<span class="kn">import</span> <span class="nn">sys</span>
<span class="kn">import</span> <span class="nn">os</span>

<span class="c1"># Suppress the solver's verbose output</span>
<span class="n">sys</span><span class="o">.</span><span class="n">stdout</span> <span class="o">=</span> <span class="nb">open</span><span class="p">(</span><span class="n">os</span><span class="o">.</span><span class="n">devnull</span><span class="p">,</span> <span class="s1">'w'</span><span class="p">)</span>

<span class="c1"># Creating the matrices of constraints and the return vector</span>
<span class="n">vector</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">full</span><span class="p">((</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">),</span> <span class="mi">1</span><span class="p">),</span> <span class="mi">1</span><span class="p">)</span>
<span class="n">Amat</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asmatrix</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">concatenate</span><span class="p">((</span><span class="n">vector</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">identity</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">))),</span> <span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">))</span>
<span class="n">line_vect</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asmatrix</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">full</span><span class="p">((</span><span class="mi">1</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">),</span> <span class="mf">0.0</span><span class="p">))</span>
<span class="n">line_vect</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="mf">1.0</span>

<span class="n">gamma</span> <span class="o">=</span> <span class="mf">0.25</span>  <span class="c1"># Risk factor</span>
<span class="n">obs</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">selected_stocks_prices</span><span class="p">)</span>  <span class="c1"># Number of observation</span>
<span class="n">rolling_window</span> <span class="o">=</span> <span class="mi">35</span>
<span class="n">start</span> <span class="o">=</span> <span class="mi">500</span>
<span class="n">indexes</span> <span class="o">=</span> <span class="nb">range</span><span class="p">(</span><span class="n">start</span><span class="p">,</span> <span class="n">obs</span><span class="p">,</span> <span class="n">rolling_window</span><span class="p">)</span>

<span class="c1"># Dataframe to store the weights</span>
<span class="n">data_weights</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">columns</span><span class="o">=</span><span class="n">list_stock_cac</span><span class="p">)</span> 

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">indexes</span><span class="p">:</span>
    <span class="c1"># Moving rolling window of 1 year</span>
    <span class="n">price_roll</span> <span class="o">=</span> <span class="n">selected_stocks_prices</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">i</span> <span class="o">-</span> <span class="mi">256</span><span class="p">:</span><span class="n">i</span><span class="p">,</span> <span class="p">:]</span>
    <span class="n">return_roll</span> <span class="o">=</span> <span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">i</span> <span class="o">-</span> <span class="mi">256</span><span class="p">:</span><span class="n">i</span><span class="p">,</span> <span class="p">:</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>

    <span class="c1"># Calculating the CAGR and volatility of each portfolio</span>
    <span class="n">CAGR_1y</span> <span class="o">=</span> <span class="p">[</span><span class="n">compute_CAGR</span><span class="p">(</span><span class="n">price_roll</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="n">j</span><span class="p">])</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">))]</span>
    <span class="n">vol_1y</span> <span class="o">=</span> <span class="p">[</span><span class="n">compute_volatility</span><span class="p">(</span><span class="n">return_roll</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="n">j</span><span class="p">])</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">))]</span>

    <span class="c1"># Creating the matrices for the quadratic programming solver</span>
    <span class="n">matrix_cagr_temp</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">asmatrix</span><span class="p">(</span><span class="n">CAGR_1y</span><span class="p">)</span><span class="o">.</span><span class="n">T</span>  
    <span class="n">matrix_vol_temp</span> <span class="o">=</span> <span class="n">return_roll</span><span class="o">.</span><span class="n">cov</span><span class="p">()</span><span class="o">.</span><span class="n">to_numpy</span><span class="p">()</span> 
    <span class="c1"># Quadratic programming</span>
    <span class="n">qp_out</span> <span class="o">=</span> <span class="n">solvers</span><span class="o">.</span><span class="n">qp</span><span class="p">(</span><span class="n">matrix</span><span class="p">(</span><span class="n">matrix_vol_temp</span><span class="p">),</span> <span class="n">matrix</span><span class="p">(</span><span class="n">matrix_cagr_temp</span> <span class="o">*</span> <span class="n">gamma</span><span class="p">),</span>
                        <span class="n">matrix</span><span class="p">(</span><span class="n">Amat</span><span class="o">.</span><span class="n">T</span><span class="p">),</span> <span class="n">matrix</span><span class="p">(</span><span class="n">line_vect</span><span class="o">.</span><span class="n">T</span><span class="p">),</span> <span class="n">msg</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>
    <span class="c1"># Calculating the weights and normalizing</span>
    <span class="n">total_weight</span> <span class="o">=</span> <span class="nb">sum</span><span class="p">(</span><span class="n">qp_out</span><span class="p">[</span><span class="s1">'x'</span><span class="p">])</span>
    <span class="n">weights_val</span> <span class="o">=</span> <span class="p">[</span><span class="n">qp_out</span><span class="p">[</span><span class="s1">'x'</span><span class="p">][</span><span class="n">k</span><span class="p">]</span> <span class="o">/</span> <span class="n">total_weight</span> <span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">))]</span>
    <span class="c1"># Storing the calculated weights in a dataframe</span>
    <span class="k">if</span> <span class="nb">len</span><span class="p">(</span><span class="n">weights_val</span><span class="p">)</span> <span class="o">==</span> <span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">):</span>
        <span class="k">for</span> <span class="n">l</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">rolling_window</span><span class="p">):</span>
            <span class="n">data_weights</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="nb">len</span><span class="p">(</span><span class="n">data_weights</span><span class="p">)]</span> <span class="o">=</span> <span class="n">weights_val</span>

<span class="c1"># Indexing the dataframe with the index of the prices</span>
<span class="n">data_weights</span> <span class="o">=</span> <span class="n">data_weights</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:</span><span class="o">-</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">data_weights</span><span class="p">)</span><span class="o">-</span><span class="nb">len</span><span class="p">(</span><span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">start</span> <span class="o">-</span> <span class="mi">1</span><span class="p">:,</span> <span class="p">:])),</span> <span class="p">:]</span>
<span class="n">data_weights</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">start</span> <span class="o">-</span> <span class="mi">1</span><span class="p">:,</span> <span class="p">:]</span><span class="o">.</span><span class="n">index</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Let's plot the plot that describe how the portfolio should be allocate over time</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">data_weights</span><span class="o">.</span><span class="n">plot</span><span class="o">.</span><span class="n">area</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Portfolio allocation"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 16" data-asset="session-7/fig-16.png" loading="lazy"/></figure></details>
<p>The preceding graph illustrates the weight distribution of each stock within the portfolio over time, generated through quadratic programming. We can compare the returns of this optimized portfolio against those of an equally weighted portfolio by calculating the cumulative returns of each, with a recalibration of weights occurring every 35 days.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Let's create the dataframe that contains the returns</span>
<span class="n">zero_data</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">(</span><span class="n">shape</span><span class="o">=</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">data_weights</span><span class="p">),</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)))</span>
<span class="c1"># Return of the optimized portfolio</span>
<span class="n">return_op_port</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">zero_data</span><span class="p">,</span><span class="n">columns</span> <span class="o">=</span> <span class="p">(</span><span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,:</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span><span class="o">.</span><span class="n">columns</span><span class="p">)</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)):</span>
    <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">data_weights</span><span class="p">)):</span>
        <span class="c1"># Inserting the weights</span>
        <span class="n">return_op_port</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">j</span><span class="p">,</span><span class="n">i</span><span class="p">]</span> <span class="o">=</span> <span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">start</span><span class="o">-</span><span class="mi">1</span><span class="o">+</span><span class="n">j</span><span class="p">,</span><span class="n">i</span><span class="p">]</span> <span class="o">*</span> <span class="n">data_weights</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">j</span><span class="p">,</span><span class="n">i</span><span class="p">]</span>
<span class="c1"># Changing the index of the optimized portfolio</span>
<span class="n">return_op_port</span><span class="o">.</span><span class="n">index</span> <span class="o">=</span> <span class="n">data_weights</span><span class="o">.</span><span class="n">index</span>
<span class="n">return_op_port</span><span class="p">[</span><span class="s1">'Return'</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">list_stock_cac</span><span class="p">)):</span>
    <span class="c1"># Calculating the returns </span>
    <span class="n">return_op_port</span><span class="p">[</span><span class="s1">'Return'</span><span class="p">]</span> <span class="o">=</span> <span class="n">return_op_port</span><span class="p">[</span><span class="s1">'Return'</span><span class="p">]</span> <span class="o">+</span> <span class="n">return_op_port</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span><span class="n">i</span><span class="p">]</span>
<span class="c1"># Calculating the return of the portfolio</span>
<span class="n">return_port</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">start</span><span class="o">-</span><span class="mi">1</span><span class="p">:,</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span>

<span class="c1"># Cummulative return of the two portfolios</span>
<span class="n">cummul_op_port</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">return_op_port</span><span class="p">[[</span><span class="s1">'Return'</span><span class="p">]])</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span>
<span class="n">cummul_port</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">selected_stocks_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">start</span><span class="o">-</span><span class="mi">1</span><span class="p">:,</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span>
<span class="c1"># Comparison with the CAC 40</span>
<span class="n">cumul_cac40</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="n">cac_data_return</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">start</span><span class="o">-</span><span class="mi">1</span><span class="p">:,</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span>

<span class="c1"># Plotting the cummulative return of the optimized portfolio</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">cummul_port</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s2">"Equally weighted portfolio"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">cummul_op_port</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s2">"Markowitz weighted portfolio"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">cumul_cac40</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s2">"CAC 40"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Cummulative returns"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Cummulated return"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 17" data-asset="session-7/fig-17.png" loading="lazy"/></figure></details>
<p>From this analysis, it is evident that the selected stocks have consistently outperformed the CAC 40 index. Furthermore, the Markowitz optimized portfolio exhibits performance that is comparable to the equally weighted portfolio while demonstrating superior outcomes in specific instances.</p>
<aside class="nb-exercise"><span class="nb-ex-tag">Assignment</span><h3>Assignment : Application of the Quantitative Methods</h3><p>Download data from Refinitiv Eikon, Bloomberg, Yahoo Finance, or any financial data provider for three or four stocks, allocating weights at your discretion (please refrain from performing a Markowitz optimization if you are unfamiliar with the concept). Construct a diversified portfolio that showcases strong performance. Utilizing the concepts covered in this course, along with relevant online resources or methodologies from other courses, conduct a backtest prior to forecasting future prices.</p></aside><h2 id="To-go-further---Option-Pricing-using-Monte-Carlo">To go further - Option Pricing using Monte Carlo</h2><p>The price of an option (here, we will only consider European Options) can be succinctly represented by the following formula: <span class="nb-math nb-math-block">Estimated price = Intrinsic Value + Time Value</span>, where :</p>
<ul>
<li>Intrinsic Value is defined as the difference between the current market price of the underlying asset and the strike price of the option.</li>
<li>Time Value reflects the potential for the underlying asset’s price to increase or decrease, capturing the randomness of future price movements.</li>
<li>There is no early exercise as we are considering European Options.</li>
</ul>
<p>To estimate the price of an option more accurately, we can utilize the Black-Scholes formula, which is expressed as: <span class="nb-math nb-math-block">ST = principal · exp((rate - 0.5 · σ²) · T + σ · √(T) · X)</span> where :</p>
<ul>
<li>Principal refers to the current price of the underlying asset (also known as the spot price).</li>
<li>Rate denotes the interest rate.</li>
<li>σ represents the volatility or standard deviation of the asset price.</li>
<li>T signifies the maturity of the option.</li>
<li>X is a standard normally distributed random variable.</li>
</ul>
<p>Following this, we can calculate the option's payoff using the formula MAX(S - K, 0) for a CALL (and MAX(K - S, 0) for a PUT), where :</p>
<ul>
<li>K represents the strike price</li>
<li>S the final price which can be decomposed as S0 + Variations</li>
</ul>
<p>The price of the option can then be expressed as: <span class="nb-math">exp(-rate · T) · payoff</span>. These estimations can be performed using Monte Carlo simulations to capture the stochastic nature of the underlying asset's price.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Definition of the Monte Carlo pricer</span>
<span class="k">def</span> <span class="nf">black_scholes_MonteCarlo_call</span><span class="p">(</span><span class="n">spot</span><span class="p">,</span> <span class="n">strike</span><span class="p">,</span> <span class="n">volatility</span><span class="p">,</span> <span class="n">rate</span><span class="p">,</span> <span class="n">maturity</span><span class="p">,</span> <span class="n">simulations</span><span class="p">):</span>
    <span class="n">X</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">simulations</span><span class="p">)</span>  <span class="c1"># Generating a wide volume of random inputs</span>
    <span class="c1"># Deterministic function</span>
    <span class="n">ST</span> <span class="o">=</span> <span class="n">spot</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">((</span><span class="n">rate</span> <span class="o">-</span> <span class="mf">0.5</span> <span class="o">*</span> <span class="n">volatility</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span> <span class="o">*</span> <span class="n">maturity</span> <span class="o">+</span> <span class="n">volatility</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">maturity</span><span class="p">)</span> <span class="o">*</span> <span class="n">X</span><span class="p">)</span>
    <span class="c1"># Calculating the payoffs of the option</span>
    <span class="n">payoffs</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">maximum</span><span class="p">(</span><span class="n">ST</span> <span class="o">-</span> <span class="n">strike</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
    <span class="n">call_option_price</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="o">-</span><span class="n">rate</span> <span class="o">*</span> <span class="n">maturity</span><span class="p">)</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">payoffs</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">call_option_price</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Application </span>
<span class="n">S0</span> <span class="o">=</span> <span class="mi">100</span>        <span class="c1"># Initial value of the price</span>
<span class="n">K</span> <span class="o">=</span> <span class="mi">110</span>         <span class="c1"># The strike</span>
<span class="n">std</span> <span class="o">=</span> <span class="mf">0.2</span>       <span class="c1"># Volatility</span>
<span class="n">r</span> <span class="o">=</span> <span class="mf">0.05</span>        <span class="c1"># Risk free rate</span>
<span class="n">T</span> <span class="o">=</span> <span class="mi">3</span>           <span class="c1"># Maturity</span>
<span class="n">number_of_simulation</span> <span class="o">=</span> <span class="mi">10000</span>
<span class="c1"># Application of the function</span>
<span class="n">call_price</span> <span class="o">=</span> <span class="n">black_scholes_MonteCarlo_call</span><span class="p">(</span><span class="n">S0</span><span class="p">,</span> <span class="n">K</span><span class="p">,</span> <span class="n">std</span><span class="p">,</span> <span class="n">r</span><span class="p">,</span> <span class="n">T</span><span class="p">,</span> <span class="n">number_of_simulation</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Call price : "</span><span class="p">,</span> <span class="n">call_price</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>Call price :  16.324689210822992</pre></details>
<aside class="nb-exercise"><span class="nb-ex-tag">Blitz exercise</span><h3>Blitz Exercise : Price of a PUT &amp; a CALL (15 minutes)</h3><p>Using the aforementioned formulas and applications, create a program that allows the user to <strong>input parameters</strong> each time the program is executed. The program should enable the calculation of both the price of a call option and a put option based on the same parameters.</p></aside><h3 id="Next-session-:-Quizz"><em>Next session : Quizz</em></h3>
` },
         { slug: "session-8", label: "Session 8", title: "Financial risk assessment", embedUrl: "", html: `
<div class="nb-objectives"><p class="nb-obj-label">Learning objectives</p><p>When dealing with financial assets, particularly stocks, the concepts of risk aversion and risk preference become crucial. Investors who are willing to accept a higher risk of losses often seek the potential for substantial returns. Therefore, assessing an investor's risk tolerance before investing in a financial asset is essential. Various methods exist to evaluate risk, and this session will cover:</p>
<ul>
<li>Excess Return</li>
<li>Alpha and the Beta</li>
<li>Volatility</li>
<li>Value at Risk (VaR)</li>
<li>Expected Shortfall (ES)</li>
</ul>
<p>It is important to note that risk measures are not absolute; they serve informational purposes. Evaluating the level of risk involves various widely-used metrics.</p></div>
<div class="nb-code"><pre><span></span><span class="kn">import</span> <span class="nn">warnings</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">from</span> <span class="nn">scipy.stats</span> <span class="kn">import</span> <span class="n">norm</span>
<span class="n">MAIN_PATH</span> <span class="o">=</span> <span class="s1">'C:/Users/evche/Documents/Lessons - Audencia BS/Data/Session 8'</span>
<span class="c1"># Eliminating the waring messages </span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s2">"ignore"</span><span class="p">)</span></pre></div><h2 id="I---Excess-Return">I - Excess Return</h2>
<p>The Excess Return of a stock represents the portion of return that exceeds the return of a benchmark, typically represented by a market index (e.g., CAC 40, S&amp;P 500, DAX, NASDAQ). Mathematically, it is defined as the difference between the stock's return and the benchmark's return.</p>
<div class="nb-code"><pre><span></span><span class="n">data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_excel</span><span class="p">(</span><span class="n">MAIN_PATH</span> <span class="o">+</span> <span class="s2">"/CAC 40.xlsx"</span><span class="p">,</span> <span class="n">parse_dates</span><span class="o">=</span><span class="p">[</span><span class="s2">"Date"</span><span class="p">],</span> <span class="n">index_col</span><span class="o">=</span><span class="s2">"Date"</span><span class="p">)</span>
<span class="c1"># Excluding the time in days</span>
<span class="n">data</span> <span class="o">=</span> <span class="n">data</span><span class="o">.</span><span class="n">iloc</span><span class="p">[:,</span> <span class="mi">1</span><span class="p">:]</span>
<span class="c1"># Calculating the returns</span>
<span class="n">data_return</span> <span class="o">=</span> <span class="n">data</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="n">data_return</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>AIRP.PA</th>
<th>AXAF.PA</th>
<th>BOUY.PA</th>
<th>BNPP.PA</th>
<th>TCFP.PA</th>
<th>CAPP.PA</th>
<th>ESLX.PA</th>
<th>OREP.PA</th>
<th>LVMH.PA</th>
<th>MICP.PA</th>
<th>...</th>
<th>VIE.PA</th>
<th>VIV.PA</th>
<th>EUFI.PA</th>
<th>CAGR.PA</th>
<th>MT.AS</th>
<th>ENGIE.PA</th>
<th>LEGD.PA</th>
<th>WLN.PA</th>
<th>STLA.PA</th>
<th>CAC40</th>
</tr>
<tr>
<th>Date</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>2014-06-27</th>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>...</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
</tr>
<tr>
<th>2014-06-30</th>
<td>0.012009</td>
<td>-0.003141</td>
<td>-0.000329</td>
<td>0.002732</td>
<td>-0.004731</td>
<td>-0.007241</td>
<td>-0.005394</td>
<td>-0.000397</td>
<td>0.003206</td>
<td>-0.008522</td>
<td>...</td>
<td>-0.023166</td>
<td>-0.008049</td>
<td>0.007175</td>
<td>-0.028302</td>
<td>-0.001843</td>
<td>-0.007406</td>
<td>-0.006006</td>
<td>0.012195</td>
<td>-0.019528</td>
<td>-0.003189</td>
</tr>
<tr>
<th>2014-07-01</th>
<td>0.010953</td>
<td>0.006875</td>
<td>-0.001481</td>
<td>0.036028</td>
<td>0.004188</td>
<td>0.010557</td>
<td>0.008005</td>
<td>0.000397</td>
<td>0.001420</td>
<td>0.011804</td>
<td>...</td>
<td>0.015092</td>
<td>0.014829</td>
<td>-0.009795</td>
<td>0.029612</td>
<td>0.009234</td>
<td>0.002736</td>
<td>0.004588</td>
<td>-0.012048</td>
<td>0.030570</td>
<td>0.008655</td>
</tr>
<tr>
<th>2014-07-02</th>
<td>-0.000803</td>
<td>0.000853</td>
<td>-0.019608</td>
<td>-0.006234</td>
<td>-0.009130</td>
<td>0.004368</td>
<td>-0.010247</td>
<td>-0.002383</td>
<td>-0.007447</td>
<td>0.003511</td>
<td>...</td>
<td>-0.029027</td>
<td>-0.010201</td>
<td>0.017311</td>
<td>-0.004243</td>
<td>0.016011</td>
<td>-0.001240</td>
<td>-0.002896</td>
<td>-0.006098</td>
<td>0.007640</td>
<td>-0.003676</td>
</tr>
<tr>
<th>2014-07-03</th>
<td>0.015060</td>
<td>0.031836</td>
<td>0.018824</td>
<td>0.004705</td>
<td>0.007849</td>
<td>0.054085</td>
<td>0.004659</td>
<td>0.013137</td>
<td>0.013576</td>
<td>0.005192</td>
<td>...</td>
<td>-0.001094</td>
<td>0.017827</td>
<td>0.015691</td>
<td>0.013731</td>
<td>0.016659</td>
<td>0.003725</td>
<td>0.014634</td>
<td>0.006135</td>
<td>0.017395</td>
<td>0.010160</td>
</tr>
</tbody>
</table></div></details>
<p>For this session, we will focus on the stock price of Crédit Agricole, identified by the ticker CAGR.PA, and compare it to the CAC 40 index. We will create a dataframe containing these two columns and calculate the excess return.</p><aside class="nb-exercise"><span class="nb-ex-tag">Exercise</span><h3>Exercise : Computing the excess return of Crédit Agricole</h3><p>Create a dataframe containing the returns of the Crédit Agricole stock (CAGR.PA) and of the CAC 40 index, then add a column computing the excess return of the stock over the index. Finally, compute the cumulative excess return and plot its evolution over the period.</p></aside>
<div class="nb-code"><pre><span></span><span class="c1"># Calculate the average excess return</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The average excess return of Credit Agricole is :"</span><span class="p">,</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'Excess Return'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">())</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The average excess return of Credit Agricole is : -1.634681079629759e-05</pre></details>
<p>To estimate the relative return against the benchmark, we can compute the average or moving average. Although excess returns alone do not estimate the risk of a stock, they help neutralize the impact of macroeconomic factors and overall market influences on the stock price. Excess returns are most informative when combined with other methods for evaluating investments. Given that excess returns can fluctuate, they depend on various factors.</p>
<h2 id="II---The-Alpha-and-the-Beta">II - The Alpha and the Beta</h2>
<p>The Alpha α (or commonly referred to as the Jensen Alpha α) quantifies an investment strategy's ability to outperform the market. It is calculated using the formula: <span class="nb-math">α = rp - rf - β(rb - rf)</span> where :</p>
<ul>
<li>rp represents the portfolio return</li>
<li>rf denotes the risk-free rate (typically the theoretical return on long-term bonds, such as the 10-Year Treasury Rate)</li>
<li>rb signifies the benchmark return</li>
<li>β represents the portfolio's beta</li>
</ul>
<p>The alpha can be simplified to: <span class="nb-math">α = rp - rb</span> if we assume the risk-free rate is 0 and beta = 1. Alternatively, it can also be expressed as: <span class="nb-math nb-math-block">α = Excess return of the portfolio - β × Excess return of the market</span>.</p>
<p>The Beta β compares a portfolio's volatility to that of the market and is calculated using the formula: <span class="nb-math">β = Cov(rp, rb)/Var(rb)</span>, where :</p>
<ul>
<li>rb is the return of the benchmark</li>
<li>rp is the return of the portfolio</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># Define the functions</span>
<span class="c1"># Beta</span>
<span class="k">def</span> <span class="nf">calculate_beta</span><span class="p">(</span><span class="n">portfolio_return</span><span class="p">,</span> <span class="n">market_return</span><span class="p">):</span>
    <span class="c1"># Cov(rp, rb), first element of the second column of the covariance matrix</span>
    <span class="n">covMatrix</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">cov</span><span class="p">(</span><span class="n">portfolio_return</span><span class="p">,</span> <span class="n">market_return</span><span class="p">)[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span>
    <span class="c1"># Variance of the return of the market</span>
    <span class="n">varRb</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">var</span><span class="p">(</span><span class="n">market_return</span><span class="p">)</span>
    <span class="c1"># Error check</span>
    <span class="k">if</span> <span class="n">varRb</span> <span class="o">==</span> <span class="mi">0</span> <span class="p">:</span>
        <span class="k">return</span> <span class="mi">0</span>
    <span class="k">return</span> <span class="n">covMatrix</span> <span class="o">/</span> <span class="n">varRb</span>

<span class="c1"># It is also possible to calculate the rolling beta</span>
<span class="k">def</span> <span class="nf">calculate_rolling_beta</span><span class="p">(</span><span class="n">portfolio_return</span><span class="p">,</span> <span class="n">market_return</span><span class="p">,</span> <span class="n">rolling_window</span><span class="p">):</span>
    <span class="n">rolling_cov</span> <span class="o">=</span> <span class="n">portfolio_return</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">window</span><span class="o">=</span><span class="n">rolling_window</span><span class="p">)</span><span class="o">.</span><span class="n">cov</span><span class="p">(</span><span class="n">market_return</span><span class="p">)</span>
    <span class="n">rolling_var</span> <span class="o">=</span> <span class="n">market_return</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">window</span><span class="o">=</span><span class="n">rolling_window</span><span class="p">)</span><span class="o">.</span><span class="n">var</span><span class="p">()</span>
    <span class="n">rolling_beta</span> <span class="o">=</span> <span class="n">rolling_cov</span> <span class="o">/</span> <span class="n">rolling_var</span>
    <span class="k">return</span> <span class="n">rolling_beta</span>

<span class="c1"># Calculate the alpha</span>
<span class="k">def</span> <span class="nf">calculate_jensen_alpha</span><span class="p">(</span><span class="n">portfolio_return</span><span class="p">,</span> <span class="n">market_return</span><span class="p">,</span> <span class="n">rf_rate</span><span class="p">,</span> <span class="n">beta</span><span class="p">):</span>
    <span class="c1"># Calculating the excess returns compared to risk free rate </span>
    <span class="n">excess_return_portfolio</span> <span class="o">=</span> <span class="n">portfolio_return</span> <span class="o">-</span> <span class="n">rf_rate</span>
    <span class="n">excess_return_market</span> <span class="o">=</span> <span class="n">market_return</span> <span class="o">-</span> <span class="n">rf_rate</span>
    <span class="c1"># Calculating the alpha</span>
    <span class="n">alpha</span> <span class="o">=</span> <span class="n">excess_return_portfolio</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span> <span class="o">-</span> <span class="n">beta</span> <span class="o">*</span> <span class="n">excess_return_market</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>  
    <span class="k">return</span> <span class="n">alpha</span>

<span class="c1"># Rolling Jensen Alpha, </span>
<span class="k">def</span> <span class="nf">calculate_rolling_alpha</span><span class="p">(</span><span class="n">portfolio_return</span><span class="p">,</span> <span class="n">market_return</span><span class="p">,</span> <span class="n">rf_rate</span><span class="p">,</span> <span class="n">beta</span><span class="p">,</span> <span class="n">rolling_window</span><span class="p">):</span>
    <span class="c1"># Calculating the excess returns compared to risk free rate (as expressed in the explanations)</span>
    <span class="n">excess_return_portfolio</span> <span class="o">=</span> <span class="n">portfolio_return</span> <span class="o">-</span> <span class="n">rf_rate</span>
    <span class="n">excess_return_market</span> <span class="o">=</span> <span class="n">market_return</span> <span class="o">-</span> <span class="n">rf_rate</span>
    
    <span class="c1"># We can either use rolling beta or beta, but if beta is constant we create a Series with the constant (integer or float)</span>
    <span class="k">if</span> <span class="nb">isinstance</span><span class="p">(</span><span class="n">beta</span><span class="p">,</span> <span class="p">(</span><span class="nb">int</span><span class="p">,</span> <span class="nb">float</span><span class="p">)):</span>
        <span class="n">beta</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">Series</span><span class="p">([</span><span class="n">beta</span><span class="p">]</span> <span class="o">*</span> <span class="nb">len</span><span class="p">(</span><span class="n">portfolio_return</span><span class="p">),</span> <span class="n">index</span><span class="o">=</span><span class="n">portfolio_return</span><span class="o">.</span><span class="n">index</span><span class="p">)</span>
    <span class="c1"># Calculating the rolling alpha</span>
    <span class="n">rolling_alpha</span> <span class="o">=</span> <span class="n">excess_return_portfolio</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">rolling_window</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span> <span class="o">-</span> <span class="p">(</span><span class="n">beta</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">rolling_window</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span> 
                                                                  <span class="o">*</span> <span class="n">excess_return_market</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">rolling_window</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">())</span>
    <span class="k">return</span> <span class="n">rolling_alpha</span></pre></div>
<p>Once the functions are defined, we can run tests to estimate the alpha and beta for the data. It's crucial to understand the implications of these measures:</p>
<ul>
<li>For alpha α :<ul>
<li>A positive alpha indicates outperformance (returns exceed expected risk-adjusted returns).</li>
<li>A negative alpha suggests underperformance (returns fall below expected risk-adjusted returns).</li>
<li>A higher alpha signifies better performance relative to risk and the benchmark.</li>
</ul>
</li>
<li>For beta β :<ul>
<li>A beta greater than 1 implies the portfolio has higher volatility than the market (more risky).</li>
<li>A beta equal to 1 indicates alignment with the market.</li>
<li>A beta less than 1 suggests the portfolio is less volatile than the market.</li>
<li>A beta of 0 implies no correlation between market variations and portfolio returns.</li>
<li>A negative beta indicates that portfolio returns move in the opposite direction of market fluctuations.</li>
</ul>
</li>
</ul>
<div class="nb-code"><pre><span></span><span class="c1"># Testing the hypothesis using credit_agricole_return</span>

<span class="c1"># In france, the average risk free rate is 3%</span>
<span class="n">risk_free_rate</span> <span class="o">=</span> <span class="mf">0.03</span>
<span class="n">constant_beta_credit_agricole</span> <span class="o">=</span> <span class="n">calculate_beta</span><span class="p">(</span><span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">],</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAC40'</span><span class="p">])</span>
<span class="n">constant_alpha_credit_agricole</span> <span class="o">=</span> <span class="n">calculate_jensen_alpha</span><span class="p">(</span><span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">],</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAC40'</span><span class="p">],</span> 
                                                        <span class="n">risk_free_rate</span><span class="p">,</span> <span class="n">constant_beta_credit_agricole</span><span class="p">)</span>
<span class="c1"># Displaying the results</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The overall beta of Credit Agricole is "</span><span class="p">,</span> <span class="n">constant_beta_credit_agricole</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"While the overall alpha of Credit Agricole is "</span><span class="p">,</span> <span class="n">constant_alpha_credit_agricole</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The overall beta of Credit Agricole is  1.2741281897813295
While the overall alpha of Credit Agricole is  0.008119931298623609</pre></details>
<p>The risk measures indicate that the portfolio (comprising only one stock) exhibits greater volatility than the market. However, it does not outperform the market, suggesting that while the investment carries higher risk, it does not offer commensurate performance. Consequently, the alpha and beta methods may not support this investment strategy. Nevertheless, using rolling alpha and beta might provide more relevant insights.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Resampling the data by months, we will calculate the rolling alpha and beta by semester</span>
<span class="n">credit_agricole_data_month</span> <span class="o">=</span> <span class="n">data</span><span class="p">[[</span><span class="s1">'CAGR.PA'</span><span class="p">,</span> <span class="s1">'CAC40'</span><span class="p">]]</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
<span class="n">credit_agricole_data_month</span> <span class="o">=</span> <span class="n">credit_agricole_data_month</span><span class="o">.</span><span class="n">resample</span><span class="p">(</span><span class="s1">'M'</span><span class="p">)</span><span class="o">.</span><span class="n">last</span><span class="p">()</span>
<span class="n">credit_agricole_return_month</span> <span class="o">=</span> <span class="n">credit_agricole_data_month</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>

<span class="c1"># Then calculating the rolling beta and rolling alpha with a rolling window of 6</span>
<span class="n">window_months</span> <span class="o">=</span> <span class="mi">6</span>
<span class="n">roll_beta_cagr</span> <span class="o">=</span> <span class="n">calculate_rolling_beta</span><span class="p">(</span><span class="n">credit_agricole_return_month</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">],</span> 
                                                      <span class="n">credit_agricole_return_month</span><span class="p">[</span><span class="s1">'CAC40'</span><span class="p">],</span> <span class="n">window_months</span><span class="p">)</span>
<span class="n">roll_alpha_cagr</span> <span class="o">=</span> <span class="n">calculate_rolling_alpha</span><span class="p">(</span><span class="n">credit_agricole_return_month</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">],</span><span class="n">credit_agricole_return_month</span><span class="p">[</span><span class="s1">'CAC40'</span><span class="p">],</span>
                                                               <span class="n">risk_free_rate</span><span class="p">,</span> <span class="n">roll_beta_cagr</span><span class="p">,</span> <span class="n">window_months</span><span class="p">)</span></pre></div>
<p>After calculating the rolling alpha and beta, we can display graphs to illustrate their evolution over time.</p>
<div class="nb-code"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">roll_beta_cagr</span><span class="o">.</span><span class="n">plot</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the beta of Credit Agricole in time"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Beta value"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 1" data-asset="session-8/fig-1.png" loading="lazy"/></figure></details>
<div class="nb-code"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">roll_alpha_cagr</span><span class="o">.</span><span class="n">plot</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the alpha of Credit Agricole in time"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Alpha value"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 2" data-asset="session-8/fig-2.png" loading="lazy"/></figure></details>
<p>From the preceding graphs, we conclude that, although the stock price of Crédit Agricole has become more volatile over the years, it has not outperformed the market. Therefore, it may not be a suitable investment for individuals relying on alpha and beta to assess performance. However, it is worth noting that the alpha method is contested by some economists, who argue that most managers using alpha as a performance indicator often fail to consistently beat the market in the long run.</p>
<h2 id="III---The-Volatility">III - The Volatility</h2>
<p>Volatility serves as a fundamental measure of risk, reflecting the tendency of an asset's price to fluctuate. It quantifies the magnitude of price variations: the higher the volatility, the sharper the price fluctuations, whether in an upward or downward direction. Volatility is typically calculated by estimating the standard deviation of returns.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Displaying the volatility</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The volatility of Credit Agricole in terms of return is "</span><span class="p">,</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">]</span><span class="o">.</span><span class="n">std</span><span class="p">())</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The volatility of Credit Agricole in terms of return is  0.02079693550016387</pre></details>
<p>In addition to static volatility measurements, it is also possible to calculate rolling volatility. This method allows us to observe how risk varies over time, helping to identify periods of higher and lower risk.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Define the window size </span>
<span class="n">window_size</span> <span class="o">=</span> <span class="mi">30</span>
<span class="n">rolling_volatility</span> <span class="o">=</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">window</span><span class="o">=</span><span class="n">window_size</span><span class="p">)</span><span class="o">.</span><span class="n">std</span><span class="p">()</span>
<span class="c1"># Displaying</span>
<span class="n">plt</span><span class="o">.</span><span class="n">clf</span><span class="p">()</span>
<span class="n">rolling_volatility</span><span class="o">.</span><span class="n">plot</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Evolution of the volatility of the Credit Agricole stock price"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Volatility"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 3" data-asset="session-8/fig-3.png" loading="lazy"/></figure></details>
<p>Volatility (σ) represents the variations around the average return, illustrating the range within which returns fluctuate relative to the mean. If we assume a normal distribution of returns, volatility helps us determine the intervals in which most values are located:</p>
<ul>
<li>The interval [µ - σ ; µ + σ] contains approximately 68.26% of the values of the returns.</li>
<li>The interval [µ - 2σ ; µ + 2σ] encompasses about 95.44% of the values of the returns.</li>
<li>The interval [µ - 3σ ; µ + 3σ] includes roughly 99.73% of the values of the returns.</li>
</ul>
<h2 id="IV---The-Value-At-Risk">IV - The Value At Risk</h2>
<p>Value at Risk (VaR) is a widely used metric for assessing portfolio risk. It quantifies the maximum potential loss that an investment portfolio might incur within a specified probability over a defined time frame (e.g., hour, day, month, year).</p>
<p>Several methods exist for estimating Value at Risk:</p>
<ul>
<li>Historical Method: This approach involves analyzing historical return data to assess potential losses based on past performance.</li>
<li>Parametric Method: This method assumes that returns follow a Gaussian distribution and uses statistical parameters (mean and standard deviation) to estimate potential losses.</li>
<li>Non-Parametric Method: Also utilizing a Gaussian distribution, this approach employs Monte Carlo simulations to generate potential future returns based on random sampling from historical data.</li>
</ul>
<h3 id="a)-Historical-Value-at-Risk">a) Historical Value at Risk</h3><p>The historical method estimates potential losses based on past returns. It assumes that the loss experienced on the next day will be similar to those observed in previous periods. The method involves sorting historical returns and identifying the percentile that corresponds to the desired level of confidence.</p>
<div class="nb-code"><pre><span></span><span class="c1"># If we consider the returns of Credit Agricole (we have to eliminate the first value) and removing the dates</span>
<span class="n">CAGR_sorted_returns</span> <span class="o">=</span> <span class="n">credit_agricole_return</span><span class="p">[[</span><span class="s1">'CAGR.PA'</span><span class="p">]]</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">1</span><span class="p">:,:]</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="s1">'CAGR.PA'</span><span class="p">)</span><span class="o">.</span><span class="n">reset_index</span><span class="p">(</span><span class="n">drop</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>
<span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">head</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><div class="nb-table-wrap"><table>
<thead>
<tr style="text-align: right;">
<th></th>
<th>CAGR.PA</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>-0.168638</td>
</tr>
<tr>
<th>1</th>
<td>-0.164894</td>
</tr>
<tr>
<th>2</th>
<td>-0.140047</td>
</tr>
<tr>
<th>3</th>
<td>-0.114252</td>
</tr>
<tr>
<th>4</th>
<td>-0.101701</td>
</tr>
</tbody>
</table></div></details>
<div class="nb-code"><pre><span></span><span class="c1"># Now we are trying to get the percentiles (Let us try with 1, 5 and 10)</span>
<span class="n">percentile_1</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">round</span><span class="p">((</span><span class="nb">len</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">1</span> <span class="o">/</span> <span class="mi">100</span><span class="p">,</span><span class="mi">0</span><span class="p">))</span>
<span class="n">percentile_5</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">round</span><span class="p">((</span><span class="nb">len</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">5</span> <span class="o">/</span> <span class="mi">100</span><span class="p">,</span><span class="mi">0</span><span class="p">))</span>
<span class="n">percentile_10</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">round</span><span class="p">((</span><span class="nb">len</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">10</span> <span class="o">/</span> <span class="mi">100</span><span class="p">,</span><span class="mi">0</span><span class="p">))</span>

<span class="c1"># Printing the Value at Risk</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The 10 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_10</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The 5 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_5</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The 1 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The 10 % VaR is :  -2.08 %
The 5 % VaR is :  -2.95 %
The 1 % VaR is :  -5.36 %</pre></details>
<p>The Value at Risk (VaR) at a confidence level of 1 − α quantifies the potential loss of a portfolio. The interpretation of the VaR values is as follows:</p>
<ul>
<li>At 90% Confidence Level: The expected maximum loss is 2.08%. This indicates a 10% chance that the stock value may decline by more than 2.08% in one day.</li>
<li>At 95% Confidence Level: The expected maximum loss is 2.95%, meaning there is a 5% chance that the stock may drop by more than 2.95% in one day.</li>
<li>At 99% Confidence Level: The expected maximum loss is 5.36%, signifying a 1% chance that the stock could fall by more than 5.36% in one day.</li>
</ul>
<p>This calculation method requires a substantial amount of data and can be biased, as it does not account for extreme losses beyond the observed values.</p>
<div class="nb-code"><pre><span></span><span class="c1"># It is possible to show the distribution of the returns to illustrate the previous example</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="c1"># Histograms are the best to show a distribution</span>
<span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="p">,</span> <span class="n">bins</span><span class="o">=</span><span class="mi">50</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'white'</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_10</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s1">'yellow'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> 
            <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (10%): </span><span class="si">{</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_10</span><span class="p">,</span><span class="w"> </span><span class="mi">0</span><span class="p">]</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_5</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s1">'orange'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> 
            <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (5%): </span><span class="si">{</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_5</span><span class="p">,</span><span class="w"> </span><span class="mi">0</span><span class="p">]</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> 
            <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (1%): </span><span class="si">{</span><span class="n">CAGR_sorted_returns</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="n">percentile_1</span><span class="p">,</span><span class="w"> </span><span class="mi">0</span><span class="p">]</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Historical Returns of Credit Agricole'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Returns'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 4" data-asset="session-8/fig-4.png" loading="lazy"/></figure></details>
<h3 id="b)-Parametric-Value-at-Risk-using-Gaussian-Distribution-(non-historical)">b) Parametric Value at Risk using Gaussian Distribution (non historical)</h3>
<p>The historical method operates under the assumption that returns are normally distributed. By using the mean of the returns and the standard deviation, one can estimate VaR through an inverted normal distribution. The standardization of a normal distribution is achieved using the formula: <span class="nb-math">Z = (X - µ)/ σ</span>.
By obtaining the Z-score from the inverted normal distribution, we can compute the corresponding value X with the formula: <span class="nb-math">X = Z · σ + µ</span></p>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the parameters </span>
<span class="n">avg_return</span> <span class="o">=</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
<span class="n">std_return</span> <span class="o">=</span> <span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">]</span><span class="o">.</span><span class="n">std</span><span class="p">()</span>

<span class="c1"># Z-scores using inverted normal distribution</span>
<span class="n">zscore_10</span> <span class="o">=</span> <span class="n">norm</span><span class="o">.</span><span class="n">ppf</span><span class="p">(</span><span class="mf">0.1</span><span class="p">)</span>
<span class="n">zscore_5</span> <span class="o">=</span> <span class="n">norm</span><span class="o">.</span><span class="n">ppf</span><span class="p">(</span><span class="mf">0.05</span><span class="p">)</span>
<span class="n">zscore_1</span> <span class="o">=</span> <span class="n">norm</span><span class="o">.</span><span class="n">ppf</span><span class="p">(</span><span class="mf">0.01</span><span class="p">)</span>

<span class="c1"># Calculating the parametric Value at Risk</span>
<span class="n">VaR_10_parametric</span> <span class="o">=</span> <span class="n">zscore_10</span> <span class="o">*</span> <span class="n">std_return</span> <span class="o">+</span> <span class="n">avg_return</span>
<span class="n">VaR_5_parametric</span> <span class="o">=</span> <span class="n">zscore_5</span> <span class="o">*</span> <span class="n">std_return</span> <span class="o">+</span> <span class="n">avg_return</span>
<span class="n">VaR_1_parametric</span> <span class="o">=</span> <span class="n">zscore_1</span> <span class="o">*</span> <span class="n">std_return</span> <span class="o">+</span> <span class="n">avg_return</span>

<span class="c1"># Displaying the Value at Risk</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Parametric 10 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">VaR_10_parametric</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Parametric 5 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">VaR_5_parametric</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Parametric 1 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">VaR_1_parametric</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The Parametric 10 % VaR is :  -2.63 %
The Parametric 5 % VaR is :  -3.39 %
The Parametric 1 % VaR is :  -4.81 %</pre></details>
<p>Using the parametric method, which also assumes normal distribution, we can determine the following expected maximum losses:</p>
<ul>
<li>At 90% Confidence Level: The expected maximum loss is 2.63%, indicating a 10% chance of exceeding this loss in one day.</li>
<li>At 95% Confidence Level: The expected maximum loss is 3.39%, implying a 5% chance of a decline greater than this amount.</li>
<li>At 99% Confidence Level: The expected maximum loss is 4.81%, representing a 1% chance of falling below this threshold.</li>
</ul>
<p>However, it is crucial to note that actual returns often do not conform to a perfect normal distribution, and the parametric method may overlook outliers</p>
<div class="nb-code"><pre><span></span><span class="c1"># Displaying the normal distribution</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="c1"># Showing a normal distribution using the parameters, 99.7% of the values</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="n">avg_return</span> <span class="o">-</span> <span class="mi">3</span><span class="o">*</span><span class="n">std_return</span><span class="p">,</span> <span class="n">avg_return</span> <span class="o">+</span> <span class="mi">3</span><span class="o">*</span><span class="n">std_return</span><span class="p">,</span> <span class="mi">1000</span><span class="p">)</span>
<span class="c1"># Normal distribution with the parameters</span>
<span class="n">y</span> <span class="o">=</span> <span class="n">norm</span><span class="o">.</span><span class="n">pdf</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">avg_return</span><span class="p">,</span> <span class="n">std_return</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">'Normal Distribution with µ and σ'</span><span class="p">)</span>
<span class="c1"># Showing the different value at risk and the space </span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">VaR_10_parametric</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'yellow'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (10%): </span><span class="si">{</span><span class="n">VaR_10_parametric</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">fill_between</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">where</span><span class="o">=</span><span class="p">(</span><span class="n">x</span> <span class="o">&lt;=</span> <span class="n">VaR_10_parametric</span><span class="p">),</span> <span class="n">color</span><span class="o">=</span><span class="s1">'yellow'</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.5</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">VaR_5_parametric</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'orange'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (5%): </span><span class="si">{</span><span class="n">VaR_5_parametric</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">fill_between</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">where</span><span class="o">=</span><span class="p">(</span><span class="n">x</span> <span class="o">&lt;=</span> <span class="n">VaR_5_parametric</span><span class="p">),</span> <span class="n">color</span><span class="o">=</span><span class="s1">'orange'</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.5</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">VaR_1_parametric</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (1%): </span><span class="si">{</span><span class="n">VaR_1_parametric</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">fill_between</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">where</span><span class="o">=</span><span class="p">(</span><span class="n">x</span> <span class="o">&lt;=</span> <span class="n">VaR_1_parametric</span><span class="p">),</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.5</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Normal Distribution of Returns with VaR Limit'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Returns'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Probability Density'</span><span class="p">)</span>
<span class="c1"># Adding the legend</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 5" data-asset="session-8/fig-5.png" loading="lazy"/></figure></details>
<h3 id="c)-Non-parametric-method-using-Monte-Carlo-and-normal-distribution-(non-historical)">c) Non parametric method using Monte Carlo and normal distribution (non historical)</h3>
<p>As introduced in the previous session, Monte Carlo simulations can be employed to simulate potential outcomes based on historical data parameters. This involves generating a large number of "simulated portfolios" and calculating VaR similarly to the historical method to determine the relevant percentile for the chosen confidence level.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Defining the parameters of Monte Carlo simulation</span>
<span class="n">simulations</span> <span class="o">=</span> <span class="mi">200</span>
<span class="c1"># Number of trading days in a year</span>
<span class="n">horizon</span> <span class="o">=</span> <span class="mi">252</span>  
<span class="c1"># Generate random returns with a normal distribution</span>
<span class="n">simulated_returns</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">normal</span><span class="p">(</span><span class="n">avg_return</span><span class="p">,</span> <span class="n">std_return</span><span class="p">,</span> <span class="p">(</span><span class="n">horizon</span><span class="p">,</span> <span class="n">simulations</span><span class="p">)))</span>
<span class="c1"># Create a simulated portfolio</span>
<span class="n">initial_investment</span> <span class="o">=</span> <span class="mi">1000</span> 
<span class="c1"># Initial value * Cumulative return of each day (Initial investment + cumulative return = new value)</span>
<span class="n">portfolio_values</span> <span class="o">=</span> <span class="n">initial_investment</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="p">((</span><span class="mi">1</span> <span class="o">+</span> <span class="n">simulated_returns</span><span class="p">)</span><span class="o">.</span><span class="n">cumprod</span><span class="p">()</span> <span class="o">-</span> <span class="mi">1</span><span class="p">))</span>
<span class="c1"># Calculate the returns </span>
<span class="n">portfolio_returns</span> <span class="o">=</span> <span class="n">portfolio_values</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span><span class="o">.</span><span class="n">dropna</span><span class="p">()</span>
<span class="c1"># Creating a Series out of all columns combined into one column </span>
<span class="n">simulated_returns</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">portfolio_returns</span><span class="o">.</span><span class="n">stack</span><span class="p">()</span><span class="o">.</span><span class="n">reset_index</span><span class="p">(</span><span class="n">drop</span> <span class="o">=</span> <span class="kc">True</span><span class="p">))</span>
<span class="n">simulated_returns</span><span class="o">.</span><span class="n">columns</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'Daily return'</span><span class="p">]</span>

<span class="c1"># VaR</span>
<span class="n">VaR_monte_carlo_10</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">percentile</span><span class="p">(</span><span class="n">simulated_returns</span><span class="p">[</span><span class="s1">'Daily return'</span><span class="p">],</span> <span class="p">(</span><span class="mf">0.1</span><span class="p">)</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span>
<span class="n">VaR_monte_carlo_5</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">percentile</span><span class="p">(</span><span class="n">simulated_returns</span><span class="p">[</span><span class="s1">'Daily return'</span><span class="p">],</span> <span class="p">(</span><span class="mf">0.05</span><span class="p">)</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span>
<span class="n">VaR_monte_carlo_1</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">percentile</span><span class="p">(</span><span class="n">simulated_returns</span><span class="p">[</span><span class="s1">'Daily return'</span><span class="p">],</span> <span class="p">(</span><span class="mf">0.01</span><span class="p">)</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span>

<span class="c1"># Displaying the value at risk using the percentiles</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Monte Carlo 10 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">VaR_monte_carlo_10</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Monte Carlo 5 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">VaR_monte_carlo_5</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Monte Carlo 1 % VaR is : "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">VaR_monte_carlo_1</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The Monte Carlo 10 % VaR is :  -2.65 %
The Monte Carlo 5 % VaR is :  -3.42 %
The Monte Carlo 1 % VaR is :  -4.81 %</pre></details>
<p>The VaR obtained from simulated returns is generally very close to that calculated using the parametric method, which is logical since a higher number of simulations leads to a distribution that more closely approximates normality.</p>
<div class="nb-code"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">simulated_returns</span><span class="p">,</span> <span class="n">bins</span><span class="o">=</span><span class="mi">50</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.75</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'blue'</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">VaR_monte_carlo_10</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'yellow'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (10%): </span><span class="si">{</span><span class="n">VaR_monte_carlo_10</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">VaR_monte_carlo_5</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'orange'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (5%): </span><span class="si">{</span><span class="n">VaR_monte_carlo_5</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">VaR_monte_carlo_1</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s1">'--'</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="sa">f</span><span class="s1">'VaR (1%): </span><span class="si">{</span><span class="n">VaR_monte_carlo_1</span><span class="si">:</span><span class="s1">.2%</span><span class="si">}</span><span class="s1">'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Simulated Portfolio Returns Distribution'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Returns'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span></pre></div>
<details class="nb-output"><summary>Output</summary><figure class="nb-figure"><img alt="Figure 6" data-asset="session-8/fig-6.png" loading="lazy"/></figure></details>
<h2 id="V---The-Expected-Shortfall">V - The Expected Shortfall</h2>
<p>Expected Shortfall (ES), also known as Conditional Value at Risk (CVaR), represents the average loss that exceeds the Value at Risk threshold. For example, if the VaR is calculated at a 95% confidence level, the Expected Shortfall would be the average loss within the worst 5% of cases where the loss surpasses the VaR.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Function to calculate the expected shortfall</span>
<span class="k">def</span> <span class="nf">calculate_expected_shortfall</span><span class="p">(</span><span class="n">returns</span><span class="p">,</span> <span class="n">value_at_risk</span><span class="p">):</span>
    <span class="c1"># Extreme losses</span>
    <span class="n">tail_losses</span> <span class="o">=</span> <span class="n">returns</span><span class="p">[</span><span class="n">returns</span> <span class="o">&lt;=</span> <span class="n">value_at_risk</span><span class="p">]</span>
    <span class="n">expected_shortfall</span> <span class="o">=</span> <span class="n">tail_losses</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    <span class="k">return</span> <span class="n">expected_shortfall</span>

<span class="c1"># for example if we use the parametric VaR 5%</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The Expected shortfall for the param VaR 5</span><span class="si">% i</span><span class="s2">s "</span><span class="p">,</span> <span class="nb">round</span><span class="p">(</span><span class="n">calculate_expected_shortfall</span><span class="p">(</span><span class="n">credit_agricole_return</span><span class="p">[</span><span class="s1">'CAGR.PA'</span><span class="p">],</span> 
                                                                                          <span class="n">VaR_5_parametric</span><span class="p">)</span><span class="o">*</span><span class="mi">100</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span> <span class="s2">"%"</span><span class="p">)</span></pre></div>
<details class="nb-output"><summary>Output</summary><pre>The Expected shortfall for the param VaR 5% is  -5.38 %</pre></details>
<p>By employing both Value at Risk and Expected Shortfall, investors can effectively assess the risk of potential financial losses in a portfolio. Although other powerful methods exist that have not been covered in this session, VaR and ES remain essential tools in risk management.</p>
` },
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