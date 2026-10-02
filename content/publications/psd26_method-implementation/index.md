---
title: "Method or Implementation? A Plea for More Rigor in Synthetic Data Benchmarking"
date: 2026-09-17
summary: "Benchmarks that find GANs uncompetitive for tabular synthetic data often compare a default implementation, not the method."
tags:
  - Synthetic Data
  - GANs
  - Benchmarking
  - Statistical Disclosure Control
ShowToc: false
---

**Authors:** Marcel Neunhoeffer, Jörg Drechsler

**Published in:** Privacy in Statistical Databases (PSD 2026), Lecture Notes in Computer Science, 276-291 (2027; online September 2026)

**DOI:** [10.1007/978-3-032-37883-5_18](https://doi.org/10.1007/978-3-032-37883-5_18)

## Abstract

Recent papers at the Privacy in Statistical Databases (PSD) conference have benchmarked Generative Adversarial Network (GAN) based synthesizers against simpler statistical synthesizers and concluded that GANs are not competitive for tabular synthetic data. We argue that these conclusions conflate *the method* (e.g., the adversarial training framework) with *a particular implementation*, typically an off-the-shelf model run with default hyperparameters. Experimenting with the open-source RGAN package, we re-run experiments from PSD 2024 and compare defaults to a carefully designed GAN architecture. The same datasets that produced “GANs do not work” conclusions yield competitive synthetic data when the implementation is treated with the care that any complex statistical procedure requires. Our findings illustrate a more fundamental problem in current data-synthesis benchmarking: many empirical evaluations frame their results as comparisons of methods, even though they compare specific (and sometimes weak) implementations of those methods. We close with a checklist for fair empirical evaluation of GAN-based synthesizers in the SDC literature, which is one instance of a broader need for more rigor in synthetic-data benchmarking.

## Links

- [Code](https://github.com/mneunhoe/PSD_GAN-method-vs-implementation)
