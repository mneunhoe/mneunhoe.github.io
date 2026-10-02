---
title: "tabfound: Tabular Foundation Models in R"
date: 2026-08-11
summary: "Runs pretrained tabular foundation models (TabPFN, TabICL, TabFM, Mitra) in pure R torch, with no Python needed to fit or predict."
tags:
  - R Package
  - Tabular Foundation Models
  - Multiple Imputation
  - Open Source
weight: 1
ShowToc: false
---

**Author:** Marcel Neunhoeffer

**Status:** Available on GitHub

## Overview

A tabular foundation model is a neural network pretrained on millions of synthetic datasets. You do not train it on your data. You condition it on your data, and a single forward pass returns a full predictive distribution for new observations, with nothing to tune.

`tabfound` provides inference-only R implementations of open-weight tabular foundation models (TabPFN v2 to v3.5, Google TabFM, TabICL and Mitra) behind one interface: a formula, a data frame and `predict()`. Everything runs in R on `torch`, so the models also work inside secure data environments that hold administrative data and do not allow a Python installation.

Beyond prediction, the package uses the models' predictive distributions for multiple imputation (with `mice` and `Amelia` interoperability) and synthetic data (with `synthpop` interoperability).

## Research

The package accompanies my working paper "Learning from Small Data: Tabular Foundation Models for Political Science", which evaluates TabPFN as the prediction step in forecasting, double machine learning and multiple imputation.

## Installation

```r
# install.packages("remotes")
remotes::install_github("mneunhoe/tabfound")
```

## Links

- [GitHub](https://github.com/mneunhoe/tabfound)
