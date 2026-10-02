---
title: "Learning from Small Data: Tabular Foundation Models for Political Science"
date: 2026-09-29
summary: "Evaluates TabPFN as the prediction step in Supreme Court forecasting, double machine learning and multiple imputation, with nothing to tune."
tags:
  - Working Paper
  - Tabular Foundation Models
  - Double Machine Learning
  - Multiple Imputation
  - Judicial Politics
ShowToc: false
---

**Author:** Marcel Neunhoeffer

**Status:** Working paper (September 2026)

## Abstract

Political scientists often analyze a few hundred to a few thousand observations with mixed variable types, missing values and interactions that theory does not specify. Flexible learners need tuning, and at these sample sizes tuning competes with the analysis for the same data. Tabular foundation models are pretrained on millions of synthetic datasets and predict for a new dataset in a single pass, with nothing to tune. I evaluate one of them, TabPFN, as the prediction step in three typical applications. In a forecast of 603 Supreme Court cases decided after a published model was built, it is as accurate as that tuned model, and its probabilities score better than the published model's, even after that model is recalibrated. As the nuisance learner in double machine learning under nonlinear confounding, it reaches nominal coverage with the most accurate nuisance estimates of any learner tested, while tuned forests and boosting undercover. In multiple imputation, it recovers interactions that the imputer did not specify when the observed data identify them. I also report where it fails and provide open-source R software.

## Links

- [PDF](/pdf/papers/neunhoeffer_learning-from-small-data.pdf)
- [Software: tabfound](/software/tabfound/)
