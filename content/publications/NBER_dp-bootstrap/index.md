---
title: "Bootstrap-based, General-purpose Statistical Inference from Differential Private Releases"
date: 2023-05-02
summary: "A general-purpose method combining bootstrap with differentially private non-parametric distribution estimation."
tags:
  - Statistical Inference
  - Differential Privacy
  - Bootstrap
  - Synthetic Data
cover:
  image: "featured.png"
  alt: "DP Bootstrap"
  relative: true
ShowToc: false
---

**Authors:** Marcel Neunhoeffer, Daniel Sheldon, Adam Smith

**Status:** Working Paper

## Abstract

Statistical inference with differential privacy is essential and often depends on bespoke solutions. The combination of sampling and privacy noise for proper inference is not trivial, especially when sampling and privacy noise come from different distributions. We propose a general-purpose method combining the bootstrap with differentially private non-parametric distribution estimation. Our method applies non-private estimators (e.g., MLE for logistic regression) to differentially private synthetic data or distribution estimates. The advantage of our approach is that the bootstrap is pure post-processing of a differentially private mechanism—it does not access the sensitive data multiple times and does not increase the privacy budget. The joint sampling and privacy distribution of statistical estimators is approximated through statistical simulation. We present the results of a series of Monte Carlo experiments and show that our method produces valid inferences for a wide range of data sets (univariate data, multivariate data) and statistical problems (i.e., linear and non-linear queries). Furthermore, we show that our method produces valid confidence intervals that are narrower than confidence intervals produced by bespoke methods.

## Links

- [PDF](https://conference.nber.org/conf_papers/f178219.pdf)
