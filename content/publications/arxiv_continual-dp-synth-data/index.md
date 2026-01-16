---
title: "Continual Release of Differentially Private Synthetic Data from Longitudinal Data Collections"
date: 2024-05-14
summary: "Algorithms for continually releasing differentially private synthetic data from longitudinal data collections."
tags:
  - Algorithm
  - Differential Privacy
  - Continual Release
  - Synthetic Data
cover:
  image: "featured.png"
  alt: "Continual DP Release"
  relative: true
ShowToc: false
---

**Authors:** Mark Bun, Marco Gaboardi, Marcel Neunhoeffer, Wanrong Zhang

**Published in:** Proc. ACM Manag. Data (PODS 2024)

**DOI:** [10.1145/3651595](https://doi.org/10.1145/3651595)

## Abstract

Motivated by privacy concerns in long-term longitudinal studies in medical and social science research, we study the problem of continually releasing differentially private synthetic data from longitudinal data collections. We introduce a model where, in every time step, each individual reports a new data element, and the goal of the synthesizer is to incrementally update a synthetic dataset in a consistent way to capture a rich class of statistical properties. We give continual synthetic data generation algorithms that preserve two basic types of queries: fixed time window queries and cumulative time queries. We show nearly tight upper bounds on the error rates of these algorithms and demonstrate their empirical performance on realistically sized datasets from the U.S. Census Bureau's Survey of Income and Program Participation.

## Links

- [PDF](https://arxiv.org/pdf/2306.07884.pdf)
