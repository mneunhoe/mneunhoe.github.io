---
title: "Private Post-GAN Boosting"
date: 2021-05-01
summary: "Differentially private method combining samples from GAN training to create high-quality synthetic data."
tags:
  - Machine Learning
  - Differential Privacy
  - Generative Adversarial Networks
  - Synthetic Data
cover:
  image: "featured.png"
  alt: "Post-GAN Boosting visualization"
  relative: true
ShowToc: false
---

**Authors:** Marcel Neunhoeffer, Zhiwei Steven Wu, Cynthia Dwork

**Published in:** Ninth International Conference on Learning Representations (ICLR 2021)

## Abstract

Differentially private GANs have proven to be a promising approach for generating realistic synthetic data without compromising the privacy of individuals. However, due to the privacy-protective noise introduced in the training, the convergence of GANs becomes even more elusive, which often leads to poor utility in the output generator at the end of training. We propose Private post-GAN boosting (Private PGB), a differentially private method that combines samples produced by the sequence of generators obtained during GAN training to create a high-quality synthetic dataset. Our method leverages the Private Multiplicative Weights method (Hardt and Rothblum, 2010) and the discriminator rejection sampling technique (Azadi et al., 2019) for reweighting generated samples, to obtain high quality synthetic data even in cases where GAN training does not converge. We evaluate Private PGB on a Gaussian mixture dataset and two US Census datasets, and demonstrate that Private PGB improves upon the standard private GAN approach across a collection of quality measures. Finally, we provide a non-private variant of PGB that improves the data quality of standard GAN training.

## Links

- [PDF](https://openreview.net/pdf?id=6isfR3JCbi)
- [Code](https://github.com/mneunhoe/post-gan-boosting)
- [Dataset](https://github.com/mneunhoe/post-gan-boosting)
