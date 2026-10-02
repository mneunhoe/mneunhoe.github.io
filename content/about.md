---
title: "About"
layout: "single"
url: "/about/"
ShowToc: false
ShowBreadCrumbs: false
hideMeta: true
---

## Bio

Almost every dataset a social scientist analyzes has already passed through a process the analyst did not control. More and more often, that process is an AI model. A generative model might fill in missing survey responses, or a pretrained model might supply the predictions that enter a regression. I study when researchers can still do valid statistical inference on data like this, and how.

I am a Postdoctoral Research Associate in the Statistical Methods Unit of the Institute for Employment Research (IAB) in Nuremberg and a Teaching and Research Associate in the Social Data Science and AI Lab at LMU Munich. I received my PhD in political science from the University of Mannheim in 2023, supervised by Thomas Gschwend and Frauke Kreuter. From 2021 to 2023, I was a Research Associate in the Department of Computer Science at Boston University, where I worked with Adam Smith, Marco Gaboardi, and Mark Bun on differential privacy. In 2019, I was a visiting PhD student at the Simons Institute for the Theory of Computing at UC Berkeley.

My dissertation introduced generative adversarial nets (GANs) to social scientists, with the R package [RGAN](/software/rgan/). It also showed that GAN-based multiple imputation does not support valid inference in most realistic settings. Since then, I have worked on synthetic data and differential privacy, mostly with Jörg Drechsler. With Steven Wu and Cynthia Dwork, I developed Private Post-GAN Boosting (ICLR 2021), and with Mark Bun, Marco Gaboardi, and Wanrong Zhang, I developed methods for the continual release of differentially private synthetic data (ACM PODS 2024). This work grew out of collaborations with the US Census Bureau (2021 to 2023) and the German Federal Statistical Office (since 2023).

My current work tests tabular foundation models, neural networks pretrained on millions of synthetic datasets, as the prediction step in political science analyses. Because these models need no tuning, they could help at the small sample sizes political scientists usually work with. On the 603 Supreme Court cases decided after a published forecasting model was built, TabPFN is as accurate as that tuned model, and its probabilities score better. In double machine learning under nonlinear confounding, it reaches nominal coverage with the most accurate nuisance estimates of any learner I tested. I also wrote the R package [tabfound](/software/tabfound/), which runs these models without Python, including in the secure environments that hold administrative data.

Some of my work is about how methods are used in practice. With Sebastian Sternberg, I showed that using the same cross-validation to tune a model and to estimate its error inflates the reported accuracy (Political Analysis, 2019). As a co-founder of [zweitstimme.org](https://zweitstimme.org), I co-developed the Bayesian model that combines polls with structural fundamentals and has forecast the 2017, 2021, and 2025 German federal elections. The forecasts have been covered by The Washington Post, Süddeutsche Zeitung, Zeit Online, and Tagesspiegel.

At LMU Munich, I co-lead [Applied Data Analytics for the Public Sector (ADA Bayern)](https://ada-oeffentliche-verwaltung.de) with colleagues in the Social Data Science and AI Lab. It is a data-literacy program for public administrations, run in partnership with and funded by the Bavarian State Ministry for Digital Affairs. Most projects start with the question "can't we use AI for this?" At the Bavarian State Archives, the answer turned out to be a statistical sampling tool, which the archivists built with us and have used since 2024. In ADA projects, participants learn to judge an AI tool against a simpler method themselves.

My work has appeared in computer science venues such as ICLR and ACM PODS and in journals such as PNAS, the Harvard Data Science Review, Political Analysis, and Political Science Research and Methods.

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
I study when researchers can do valid statistical inference on data that has already been transformed, for example by an imputation model, a synthetic data generator, a differentially private mechanism, or the predictions of a pretrained model. Much of this work is about sensitive data, where privacy protection and useful analysis have to be balanced.

### What are tabular foundation models?
A tabular foundation model is a neural network that its developers trained once on millions of synthetic datasets. For a new dataset, nothing is trained or tuned. The data enter as context, and the model returns predictions for new observations in a single pass. Its output can be read as an approximation to a posterior predictive distribution. I test whether these models can serve as the prediction step in forecasting, double machine learning, and multiple imputation, and I also document where they fail.

### What is differential privacy?
Differential privacy is a mathematical definition of privacy. An analysis is differentially private if its output changes only a little when any one person's data are added or removed. This means that the output reveals little about any individual, while patterns across many people can still be learned. A parameter sets how much accuracy is given up for privacy.

### How can synthetic data protect privacy?
Synthetic data are generated from a model fit to the original data. They can keep the statistical properties of the original data without containing the original records. Whether they protect privacy depends on how they were generated. In the Harvard Data Science Review (2026), Jeremy Seeman, Jörg Drechsler, and I show that for a simple synthesizer, the randomness of the synthesis can be translated into a formal differential privacy guarantee, and that this is much harder for more realistic models.

### What are Generative Adversarial Networks (GANs)?
A GAN trains two neural networks against each other. A generator produces synthetic samples from random noise, and a discriminator tries to tell them apart from real samples. The competition between the two improves the generator. My dissertation introduced GANs to social scientists, and my R package RGAN makes it easy to try different design choices, such as value functions, network architectures, noise distributions, and optimizers.

### Who do you collaborate with?
I worked with the US Census Bureau on differentially private methods for official statistics from 2021 to 2023. Since 2023, I have worked with the German Federal Statistical Office (Destatis) on privacy-preserving synthetic data. My co-authors include Jörg Drechsler, Thomas Gschwend, Frauke Kreuter, Adam Smith, Marco Gaboardi, and Mark Bun.

## Contact

- Email: [marcel@marcel-neunhoeffer.com](mailto:marcel@marcel-neunhoeffer.com)
- LinkedIn: [Marcel Neunhoeffer](https://www.linkedin.com/in/marcel-neunhoeffer/)
- GitHub: [mneunhoe](https://github.com/mneunhoe)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=Q491RXUAAAAJ&hl=en)
