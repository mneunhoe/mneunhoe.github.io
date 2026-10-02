---
title: "Generating Synthetic Data is Complicated: Know Your Data and Know Your Generator"
date: 2024-09-13
summary: "Ready-made synthetic data generators are not plug-and-play: preprocessing matters as much as tuning, and so does knowing the generator."
tags:
  - Synthetic Data
  - Statistical Disclosure Control
  - Data Preprocessing
ShowToc: false
---

**Authors:** Jonathan Latner, Marcel Neunhoeffer, Jörg Drechsler

**Published in:** Privacy in Statistical Databases (PSD 2024), Lecture Notes in Computer Science, 115-128 (2024)

**DOI:** [10.1007/978-3-031-69651-0_8](https://doi.org/10.1007/978-3-031-69651-0_8)

## Abstract

In recent years, more and more synthetic data generators (SDGs) based on various modeling strategies have been implemented as Python libraries or R packages. With this proliferation of ready-made SDGs comes a widely held perception that generating synthetic data is easy. We show that generating synthetic data is a complicated process that requires one to understand both the original dataset as well as the synthetic data generator. We make two contributions to the literature in this topic area. First, we show that it is just as important to preprocess or clean the data as it is to tune the SDG in order to create synthetic data with high levels of utility. Second, we illustrate that it is critical to understand the methodological details of the SDG to be aware of potential pitfalls and to understand for which types of analysis tasks one can expect high levels of analytical validity.

## Links

- [PDF (author copy)](/pdf/papers/PSD_paper11.pdf)
- [Code](https://github.com/jonlatner/KEM_GAN/tree/main/latner/projects/comparison)
