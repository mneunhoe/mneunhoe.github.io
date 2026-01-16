---
title: "Private Post-GAN Boosting"
date: 2021-05-01
summary: "Replication code for ICLR 2021 paper on differentially private synthetic data generation."
tags:
  - Differential Privacy
  - GANs
  - Synthetic Data
  - Replication Code
weight: 3
cover:
  image: "featured.png"
  alt: "Post-GAN Boosting"
  relative: true
ShowToc: false
---

**Authors:** Marcel Neunhoeffer, Zhiwei Steven Wu, Cynthia Dwork

**Associated Paper:** Private Post-GAN Boosting (ICLR 2021)

## Overview

This repository contains the replication code for our ICLR 2021 paper "Private Post-GAN Boosting." The method addresses a fundamental challenge in differentially private synthetic data generation: GAN training often fails to converge due to privacy-protective noise, leading to poor quality synthetic data.

## The Method

Private Post-GAN Boosting (Private PGB) combines samples from the **full sequence of generators** obtained during GAN training—not just the final generator. Using a game-theoretic formulation with multiplicative weights, the method finds an equilibrium between a synthetic data player and a distinguisher.

**Key Insight:** While individual generators during training may be poor, a weighted mixture from different training epochs can produce high-quality synthetic data with formal differential privacy guarantees.

## Experiments Included

- Toy data (Gaussian mixtures)
- MNIST
- US Census data
- Titanic dataset

## Core Components

- Private Multiplicative Weights method (Hardt and Rothblum, 2010)
- Discriminator Rejection Sampling (Azadi et al., 2019)
- Game-theoretic reweighting of generated samples

## Links

- [GitHub](https://github.com/mneunhoe/post-gan-boosting)
- [Paper (OpenReview)](https://openreview.net/pdf?id=6isfR3JCbi)
- [ICLR 2021](https://iclr.cc/virtual/2021/poster/3361)
