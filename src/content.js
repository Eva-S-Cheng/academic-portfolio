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
         { slug: "session-1", label: "Session 1", title: "Introduction to Python for Finance", embedUrl: "", html: `
<p>This class aims to help you understand how Python can enhance your efficiency in finance-related activities. The course will present various use cases in Corporate Finance and Market Finance. You will learn about:</p>
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
</ul>
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
<div class="nb-output"><pre>Hello, World!</pre></div>
<p>Each time a code is executed, a portion of the computer's memory is allocated to Python. In this context, you can create a variable or an object to store data in that allocated memory.</p>
<div class="nb-code"><pre><span></span><span class="c1"># It is important to use a relevant name for your variables </span>
<span class="n">var</span> <span class="o">=</span> <span class="mi">5</span> 
<span class="c1"># Several strings can be concatenated into one </span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"var = "</span><span class="p">,</span><span class="n">var</span><span class="p">)</span></pre></div>
<div class="nb-output"><pre>var =  5</pre></div>
<p>Mathematical and logical operations can be performed on variables using operands such as addition, subtraction, multiplication, and division.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Variables</span>
<span class="n">x</span> <span class="o">=</span> <span class="mi">2</span>
<span class="n">y</span> <span class="o">=</span> <span class="mi">3</span>
<span class="n">z</span> <span class="o">=</span> <span class="n">x</span> <span class="o">+</span> <span class="n">y</span>

<span class="c1"># Displays</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"z = "</span><span class="p">,</span> <span class="n">z</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"x + y = "</span><span class="p">,</span> <span class="n">x</span> <span class="o">+</span> <span class="n">y</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"x - y = "</span><span class="p">,</span> <span class="n">x</span> <span class="o">-</span> <span class="n">y</span><span class="p">)</span></pre></div>
<div class="nb-output"><pre>z =  5
x + y =  5
x - y =  -1</pre></div>
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
<div class="nb-output"><pre>Enter a market price : 120
The investor sells the stock at the price :  120.0
The profit is =  20.0</pre></div>
<p>As you may have noticed, some statements are preceded by indentations. Statements that share the same level of indentation belong to the same block, indicating that they should be executed together.</p>
<h3 id="Blitz-Exercise-(15-min)-:-Automated-traditing-with-a-long-position"><em>Blitz Exercise (15 min) : Automated traditing with a long position</em></h3><p>Using the same process as described earlier, generate the orders for an investor who holds a short position on a stock sold at $95, with a threshold set at 13%. You will have 15 minutes to complete this exercise.</p>
<h2 id="IV---Loops">IV - Loops</h2><p>Loops are used when you need to repeat a statement or a block of statements multiple times, such as when working with lists, strings, or datasets. There are two basic types of loops:</p>
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
<div class="nb-output"><pre>List 1 :  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
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
List 2 :  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]</pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Live coding the equivalent with another synthax</span>
<span class="n">new_list</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">e</span> <span class="ow">in</span> <span class="n">list_of_number</span> <span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"i = "</span><span class="p">,</span> <span class="n">e</span><span class="p">)</span>
    <span class="n">new_list</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">e</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"List 2 : "</span><span class="p">,</span> <span class="n">new_list</span><span class="p">)</span></pre></div>
<div class="nb-output"><pre>i =  0
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
List 2 :  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]</pre></div>
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
<div class="nb-output"><pre>Number 5 found ! It is the  97 th number


List :  [81, 39, 22, 1, 29, 84, 21, 71, 76, 43, 81, 41, 52, 64, 6, 12, 80, 34, 33, 95, 30, 96, 79, 89, 92, 8, 3, 21, 7, 56, 64, 11, 75, 44, 81, 23, 85, 66, 27, 19, 92, 48, 91, 8, 72, 43, 18, 77, 88, 6, 45, 34, 67, 79, 2, 86, 47, 99, 4, 96, 92, 2, 10, 41, 20, 99, 29, 19, 60, 77, 90, 72, 58, 69, 36, 30, 64, 34, 15, 100, 33, 98, 32, 73, 50, 17, 66, 89, 60, 15, 44, 54, 36, 20, 96, 9, 5, 48, 91, 72]</pre></div>
<h2 id="V---Functions">V - Functions</h2><p>To avoid repeating the same lines of code multiple times, you can use functions to enhance code readability and improve understanding. However, functions should be used judiciously.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Every function is preceded by the "def" key word</span>
<span class="k">def</span> <span class="nf">say_hello</span><span class="p">():</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"Hello World!"</span><span class="p">)</span></pre></div>
<div class="nb-code"><pre><span></span><span class="c1"># Everytime the function is called, the statement block inside the function is executed</span>
<span class="n">say_hello</span><span class="p">()</span></pre></div>
<div class="nb-output"><pre>Hello World!</pre></div>
<p>Variables defined inside a function are limited to the scope of that function (passed by value). It is possible to pass information as arguments, which are specified within the parentheses, with multiple arguments separated by commas.</p>
<div class="nb-code"><pre><span></span><span class="k">def</span> <span class="nf">double</span><span class="p">(</span><span class="n">a</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"2 x "</span><span class="p">,</span> <span class="n">a</span><span class="p">,</span> <span class="s2">" = "</span><span class="p">,</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">)</span>

<span class="c1"># Testing the function</span>
<span class="n">double</span><span class="p">(</span><span class="mi">12</span><span class="p">)</span>
<span class="n">double</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span></pre></div>
<div class="nb-output"><pre>2 x  12  =  24
2 x  5  =  10</pre></div>
<p>You can pass information as arguments to a function, and it is also possible to obtain a result from the function and store it in another variable outside of the function.</p>
<div class="nb-code"><pre><span></span><span class="c1"># Calculating the return of a stock </span>
<span class="k">def</span> <span class="nf">calculate_return</span><span class="p">(</span><span class="n">final_price</span><span class="p">,</span> <span class="n">initial_price</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">final_price</span><span class="o">/</span><span class="n">initial_price</span> <span class="o">-</span> <span class="mi">1</span>

<span class="n">return_stock</span> <span class="o">=</span> <span class="n">calculate_return</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">9</span><span class="p">)</span>                   <span class="c1"># Calling the function and storing into a variable</span>
<span class="n">return_stock</span> <span class="o">=</span> <span class="nb">round</span><span class="p">(</span><span class="n">return_stock</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>                    <span class="c1"># Round to 4 decimals</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Return = "</span><span class="p">,</span> <span class="n">return_stock</span> <span class="o">*</span> <span class="mi">100</span><span class="p">,</span> <span class="s2">"%"</span><span class="p">)</span></pre></div>
<div class="nb-output"><pre>Return =  11.1 %</pre></div>
<p>As previously mentionned, variables are <code>passed by value</code>, and the operations performed inside the function are only valid within that function. If the result of the function is not stored, it will not be retained in memory.</p>
<div class="nb-code"><pre><span></span><span class="k">def</span> <span class="nf">add_five</span><span class="p">(</span><span class="n">number</span><span class="p">):</span>
    <span class="n">number</span> <span class="o">=</span> <span class="n">number</span> <span class="o">+</span> <span class="mi">5</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">"The number inside the function : "</span><span class="p">,</span> <span class="n">number</span><span class="p">)</span>

<span class="n">number</span> <span class="o">=</span> <span class="mi">15</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Number before function : "</span><span class="p">,</span> <span class="n">number</span><span class="p">)</span>
<span class="n">add_five</span><span class="p">(</span><span class="n">number</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"The number after the function : "</span><span class="p">,</span> <span class="n">number</span><span class="p">)</span></pre></div>
<div class="nb-output"><pre>Number before function :  15
The number inside the function :  20
The number after the function :  15</pre></div>
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
<div class="nb-output"><pre>1) Long strategy on a stock initially priced 100  for which the market price is  90  which threshold profit  15.0 % and threshold loss  5.0 %, has a profit of  -10
2) Short strategy on a stock initially priced 100  for which the market price is  90  which threshold profit  15.0 % and threshold loss  5.0 %, has a profit of  0
3) Long strategy on a stock initially priced 110  for which the market price is  130  which threshold profit  11.0 % and threshold loss  3.0 %, has a profit of  20
4) Short strategy on a stock initially priced 100  for which the market price is  130  which threshold profit  11.0 % and threshold loss  3.0 %, has a profit of  -20</pre></div>
<h3 id="Assignment-:-Writing-functions-used-in-financial-analysis"><em>Assignment : Writing functions used in financial analysis</em></h3><p>Write a program in Jupyter that calculates the current ratio, return on assets (ROA), and internal rate of return (IRR) using a list of cash flows. Include three examples to illustrate the formulas. Please send the code to the email: eva.cheng@audencia.com</p>
` },
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