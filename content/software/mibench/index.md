---
title: "MIBench: Multiple Imputation Benchmark"
date: 2022-01-01
summary: "First standardized benchmark for evaluating multiple imputation algorithms across diverse scenarios."
tags:
  - Benchmark
  - Multiple Imputation
  - Missing Data
  - R Package
weight: 2
cover:
  image: "featured.png"
  alt: "MIBench Benchmark"
  relative: true
ShowToc: false
---

**Author:** Marcel Neunhoeffer

**Status:** Available on GitHub

## Overview

MIBench is the first standardized benchmark for evaluating multiple imputation algorithms. It provides a systematic framework for comparing different imputation methods across various data-generating processes and missingness mechanisms.

## Key Features

- **11 Experimental Scenarios:** Covering different data-generating processes and missingness mechanisms (MCAR, MAR, MNAR)

- **9 MI Methods Compared:**
  - Traditional methods: Amelia, mice, missForest
  - Neural network-based: GAIN, MIDAS
  - And more

- **Comprehensive Evaluation:** Tests whether imputed datasets produce valid statistical inferences following Rubin's rules

## Key Finding

**GAN-based and deep learning MI methods fail to produce valid inferences in most scenarios.**

This finding demonstrates my research philosophy: newer and more complex methods are not automatically better. Rigorous benchmarking reveals that traditional methods often outperform hyped deep learning approaches for multiple imputation tasks.

## Why This Matters

Multiple imputation is fundamental to handling missing data in social science research. Without proper benchmarking, researchers may adopt new methods based on hype rather than evidence. MIBench provides the rigorous evaluation framework needed to make informed methodological choices.

## Links

- [GitHub](https://github.com/mneunhoe/MIBench)
