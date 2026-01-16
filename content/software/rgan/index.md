---
title: "RGAN: Generative Adversarial Networks in R"
date: 2023-01-01
summary: "R package for training Generative Adversarial Networks, available on CRAN with 8,300+ downloads."
tags:
  - R Package
  - GANs
  - Deep Learning
  - Open Source
weight: 1
cover:
  image: "featured.png"
  alt: "RGAN Package"
  relative: true
ShowToc: false
---

**Author:** Marcel Neunhoeffer

**Status:** Published on CRAN

**Downloads:** 8,300+ (check current count on [CRAN logs](https://cranlogs.r-pkg.org/badges/grand-total/RGAN))

## Overview

RGAN is an R package that enables social scientists and researchers to train Generative Adversarial Networks without needing Python or PyTorch expertise. Built on the torch library in R (native implementation, not through Python), RGAN makes deep generative models accessible to the R community.

## Features

- **Multiple GAN Variants:**
  - Original GAN
  - Wasserstein GAN (WGAN)
  - f-WGAN

- **Post-Processing Methods:**
  - Discriminator Rejection Sampling
  - Post-GAN Boosting

- **Native R Implementation:** Built on torch for R, no Python dependencies required

## Installation

```r
# Install from CRAN
install.packages("RGAN")

# Or install development version from GitHub
# devtools::install_github("mneunhoe/RGAN")
```

## Why RGAN?

Many social scientists work primarily in R and face barriers when trying to use deep learning methods typically implemented in Python. RGAN bridges this gap by providing a native R implementation of GANs, enabling researchers to:

- Generate synthetic data for privacy-preserving data sharing
- Augment small datasets
- Explore generative modeling without switching languages

## Links

- [CRAN](https://cran.r-project.org/package=RGAN)
- [GitHub](https://github.com/mneunhoe/RGAN)
- [Documentation](https://cran.r-project.org/web/packages/RGAN/RGAN.pdf)
