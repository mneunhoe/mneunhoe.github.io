---
title: "About"
layout: "single"
url: "/about/"
ShowToc: false
ShowBreadCrumbs: false
hideMeta: true
---

## Bio

I am a Postdoctoral Research Associate in the Statistical Methods Unit of the Institute for Employment Research (IAB) in Nuremberg, Germany, and a Teaching and Research Associate in the Social Data Science and AI Lab of the Department of Statistics at LMU Munich.

My research asks how we can do valid statistical inference on data that an upstream process, often an AI model, has already transformed, from imputed and synthetic data to differentially private releases and the predictions of pretrained models. I completed my PhD in political science ("Generative Adversarial Nets for Social Scientists") at the University of Mannheim in 2023, supervised by Prof. Thomas Gschwend, Ph.D. and Prof. Dr. Frauke Kreuter. Previously, I was a Research Associate in Boston University's Department of Computer Science (2021–2023), working with Adam Smith, Marco Gaboardi, and Mark Bun, and a visiting PhD student at the Simons Institute for the Theory of Computing at UC Berkeley (2019).

I believe that translation from computer science to social science requires careful evaluation, not blind adoption of hyped techniques. Newer and more complex methods are not automatically better—rigorous benchmarking reveals strengths and limitations. My dissertation exemplified this: while introducing GANs to social scientists, I also demonstrated that GAN-based multiple imputation methods fail to meet the standards required for valid statistical inference in most scenarios.

My current work evaluates tabular foundation models, neural networks pretrained on millions of synthetic datasets, as the prediction step in political science analyses. On the 603 Supreme Court cases decided after a published forecasting model was built, TabPFN is as accurate as that tuned model, and its probabilities score better. As the nuisance learner in double machine learning under nonlinear confounding, it reaches nominal coverage with the most accurate nuisance estimates of any learner I tested. My R package [tabfound](/software/tabfound/) runs these models without Python, including inside the secure environments that hold administrative data.

I worked with the US Census Bureau on differentially private methods for official statistics (2021–2023), and I work with the German Federal Statistical Office (Destatis) on privacy-preserving synthetic data (since 2023). I have published in leading venues across disciplines, including ICLR, ACM PODS, PNAS, the Harvard Data Science Review, Political Analysis, and Political Science Research and Methods.

As a co-founder and contributor to [zweitstimme.org](https://zweitstimme.org), I co-built a platform that communicates scientific election forecasts for German Federal elections to a broad audience, covered by major German media including Zeit Online, Tagesspiegel, and the Washington Post.

With colleagues in the Social Data Science and AI Lab at LMU Munich, I co-lead Applied Data Analytics for the Public Sector (ADA Bayern), a data-literacy program run in partnership with and funded by the Bavarian State Ministry for Digital Affairs. Its projects often start with the question "can't we use AI for this?" For the Bavarian State Archives, a statistical sampling tool turned out to be the better answer, and it has been in use there since 2024.

## Current Affiliations

- [Institute for Employment Research (IAB)](https://iab.de/mitarbeiter/neunhoeffer-marcel/) - Statistical Methods Unit
- [Ludwig Maximilian University of Munich](https://www.soda.statistik.uni-muenchen.de/index.html) - Department of Statistics, Social Data Science and AI Lab

## Previous Positions

- **Diplomatic Academy of Vienna** - Lecturer, Machine Learning (2025-2026)
- **Boston University** - Research Associate, Department of Computer Science (2021-2023)
- **University of Mannheim** - Teaching and Research Associate (doctoral position), Quantitative Methods in the Social Sciences (2016-2021)
- **UC Berkeley, School of Information** - Lecturer, Privacy Engineering (2020)
- **Simons Institute for the Theory of Computing, UC Berkeley** - Visiting Ph.D. Student (2019)

## Research Interests

- Statistical Inference after Data Transformations
- Tabular Foundation Models & In-Context Learning
- Causal Inference & Double Machine Learning
- Multiple Imputation & Missing Data
- Privacy-Preserving Synthetic Data
- Differential Privacy
- Machine Learning & Generative Models (GANs)
- Political Methodology & Election Forecasting
- Reproducibility & Research Methods

## Software

- **[tabfound](https://github.com/mneunhoe/tabfound)** - Tabular foundation models in pure R torch, with no Python needed
- **[RGAN](https://github.com/mneunhoe/RGAN)** - Generative Adversarial Networks in R (10,000+ CRAN downloads)
- **[MIBench](https://github.com/mneunhoe/MIBench)** - First standardized benchmark for multiple imputation algorithms
- **[partyscape](https://github.com/mneunhoe/partyscape)** - Diversity profiles for party systems
- **[Post-GAN Boosting](https://github.com/mneunhoe/post-gan-boosting)** - Replication code for ICLR 2021 paper

## Education

- **Ph.D. in Political Science (Dr. rer. soc.)** - Graduate School of Economic and Social Sciences, University of Mannheim (2023)
  - Thesis: "Generative Adversarial Nets for Social Scientists"
  - Supervisors: Prof. Thomas Gschwend, Ph.D. and Prof. Dr. Frauke Kreuter
- **M.A. in Political Science** - University of Mannheim (2016)
- **B.A. in Governance and Public Policy** - University of Passau (2013)

## Frequently Asked Questions

### What is your research focus?
I study how to do valid statistical inference on data that an upstream process has already transformed: imputed values, synthetic data, differentially private releases, and predictions from pretrained AI models. Much of this work develops and evaluates methods that let organizations share and analyze sensitive data while protecting individual privacy.

### What are tabular foundation models?
Tabular foundation models are neural networks pretrained once on millions of synthetic datasets. A new dataset needs no training or tuning: its rows enter as context, and the model returns predictions for new observations in a single pass. Their output can be read as an approximation to a posterior predictive distribution. I study whether they can serve as the prediction step in social science analyses, such as forecasting, double machine learning and multiple imputation, and where they fail.

### What is differential privacy?
Differential privacy is a mathematical framework that provides formal, quantifiable privacy guarantees. It ensures that the output of a data analysis doesn't reveal whether any specific individual's data was included in the dataset, making it possible to learn aggregate patterns while protecting individual information.

### How can synthetic data protect privacy?
Synthetic data protects privacy by generating new data points that preserve the statistical properties of original data without containing real individuals' information. When combined with differential privacy guarantees, synthetic data can enable data sharing for research and policy analysis while preventing re-identification of individuals.

### What are Generative Adversarial Networks (GANs)?
GANs are a class of machine learning models where two neural networks compete: a generator creates synthetic data while a discriminator tries to distinguish synthetic from real data. This adversarial process produces increasingly realistic synthetic data. My dissertation "Generative Adversarial Nets for Social Scientists" evaluated their applications and limitations for social science research.

### Who do you collaborate with?
I worked with the U.S. Census Bureau on differentially private methods for official statistics (2021–2023), and I work with the German Federal Statistical Office (Destatis) on privacy-preserving synthetic data. My co-authors include Jörg Drechsler, Thomas Gschwend, Adam Smith, Marco Gaboardi, and Mark Bun. I also work with researchers at IAB (Institute for Employment Research) and LMU Munich.

## Contact

- Email: [marcel@marcel-neunhoeffer.com](mailto:marcel@marcel-neunhoeffer.com)
- LinkedIn: [Marcel Neunhoeffer](https://www.linkedin.com/in/marcel-neunhoeffer/)
- GitHub: [mneunhoe](https://github.com/mneunhoe)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=Q491RXUAAAAJ&hl=en)
