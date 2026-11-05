---
title: "tabfound: Tabular Foundation Models in R"
date: 2026-08-11
summary: "Runs eight open-weight tabular foundation models (TabPFN v2.5 to v3.5, TabICL, TabFM, Mitra, Kumo Tabular) in pure R torch, with no Python needed to fit or predict."
description: "tabfound runs TabPFN, TabICL, TabFM, Mitra and Kumo Tabular in R on torch behind one interface, for prediction, multiple imputation and synthetic data."
tags:
  - R Package
  - Tabular Foundation Models
  - Multiple Imputation
  - Open Source
weight: 1
ShowToc: false
---

**Author:** Marcel Neunhoeffer

**Status:** Available on [GitHub](https://github.com/mneunhoe/tabfound)

## Overview

A tabular foundation model is a neural network pretrained on millions of
synthetic datasets. You do not train it on your data. You *condition* it on
your data: the training rows go in alongside the rows you want predictions
for, and a single forward pass returns a full predictive distribution, with
nothing to tune. On small and medium tables these models are often
competitive with a tuned gradient-boosted tree.

`tabfound` runs eight open-weight tabular foundation models behind one R
interface: a formula, a data frame and `predict()`. Every forward pass is
pure R `torch`, so the models also work inside secure data environments
that hold administrative data and do not allow a Python installation.

```r
library(tabfound)

fit <- tabfound(Species ~ ., data = iris[train, ], model = "tabpfn-v2.5")
predict(fit, iris[test, ])                  # predicted classes
predict(fit, iris[test, ], type = "prob")   # class probabilities

fit <- tabfound(mpg ~ ., data = mtcars[train, ], model = "tabpfn-v2.5")
predict(fit, mtcars[test, ], type = "quantiles",
        quantiles = c(0.05, 0.5, 0.95))     # prediction intervals
```

## The models

| Model | Publisher | Parameters (classifier) | Weights licence |
|---|---|---|---|
| TabPFN v2.5 | Prior Labs | 10.7 M | Prior Labs licence |
| TabPFN v2.6 | Prior Labs | 10.7 M | non-commercial |
| TabPFN v3 | Prior Labs | 53.2 M | non-commercial |
| TabPFN v3.5 | Prior Labs | 219.0 M | research only |
| TabICL v2 | soda-inria | 27.6 M | see the model repository |
| TabFM 1.0 | Google Research | 1.64 B | non-commercial |
| Mitra | AutoGluon | 75.7 M | Apache-2.0 |
| Kumo Tabular (small, medium, large) | NVIDIA | 27.5 M, 61.5 M, 213.7 M | OpenMDW-1.1 |

The package is MIT-licensed, but the weights are not: check a model's
licence before you publish or deploy with it. `list_models()` shows each
one.

**Checked against the original.** Each model is a port of the published
network *and* of the Python package around it (preprocessing, ensembling
and output), tested stage by stage against the reference implementation.
Predicted probabilities typically agree to about 1e-6, the floating-point
noise of the network itself.

## Beyond prediction

Because every model returns a predictive distribution rather than a point
estimate, `tabfound` can use it as the model inside other methods:

- **Multiple imputation.** `tabfound_impute()` runs chained equations with
  a foundation model as the imputer, and works with `mice` (pooling with
  Rubin's rules, or `method = "tabfound"` inside `mice()`) and `Amelia`. In
  the package's simulation study, TabPFN removes the bias that
  outcome-dependent missingness puts into complete-case analysis.
- **Synthetic data.** `tabfound_syn()` generates a synthetic dataset one
  variable at a time, the way `synthpop::syn()` does, and works with
  `synthpop`'s utility and comparison tools.
- **Large tables.** Memory estimates before a fit, KV caching, chunking and
  GPU support, with a guide to how large a table fits on an 8 to 64 GB
  machine.

## Architecture gallery

`tabfound` can draw the network of every model it runs, from the network
itself: `plot_architecture()` in five styles, and `plot_architecture_diff()`
for two models side by side. The [architecture gallery](/software/tabfound/gallery/)
shows all of them, in every style, both levels of detail and both themes.

{{< tabfound-figure model="tabpfn" style="cards" detail="overview" caption="TabPFN v2.5, drawn by `plot_architecture()`. [Open the gallery →](/software/tabfound/gallery/)" >}}

## Research

The package accompanies my working paper ["Learning from Small Data: Tabular Foundation Models for Political Science"](/publications/wp_learning-from-small-data/), which evaluates TabPFN as the prediction step in forecasting, double machine learning and multiple imputation.

## Installation

```r
# install.packages("remotes")
remotes::install_github("mneunhoe/tabfound")
torch::install_torch()   # once, if you have never used torch
```

The first time you use a model, `tabfound` asks before downloading its
weights, and loads them by name, offline, from then on. TabPFN, TabICL and
Kumo Tabular publish weights in a PyTorch format, so their download
converts them once with a Python interpreter that has `torch` and
`safetensors`. After that step, Python is never used again.

## Documentation

The package vignettes, on GitHub:

- [Getting started](https://github.com/mneunhoe/tabfound/blob/main/vignettes/tabfound.qmd): a longer tour, with worked examples and a comparison to `lm()`
- [Multiple imputation](https://github.com/mneunhoe/tabfound/blob/main/vignettes/multiple-imputation.qmd) and [synthetic data](https://github.com/mneunhoe/tabfound/blob/main/vignettes/synthetic-data.qmd)
- [How big a table?](https://github.com/mneunhoe/tabfound/blob/main/vignettes/how-big-a-table.qmd): memory and table size, per model
- [Advanced use](https://github.com/mneunhoe/tabfound/blob/main/vignettes/advanced.qmd): ensembles, the matrix interface, and known limitations per model
- [Architecture gallery](https://github.com/mneunhoe/tabfound/blob/main/vignettes/architecture-gallery.qmd): the diagrams, and how to add a new model

## Links

- [GitHub](https://github.com/mneunhoe/tabfound)
- [Architecture gallery](/software/tabfound/gallery/)
