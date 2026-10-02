---
title: "Using Prior Knowledge to Improve GANs for Tabular Data Without Compromising Privacy"
date: 2026-05-01
summary: "Three ways to build prior knowledge about the data into GANs for private tabular synthetic data, with differential privacy."
tags:
  - Synthetic Data
  - GANs
  - Differential Privacy
ShowToc: false
---

**Authors:** Sonakshi Garg, Marcel Neunhoeffer, Jörg Drechsler, Vicenç Torra

**Published in:** Data Privacy Management (DPM 2025), held with ESORICS 2025, Lecture Notes in Computer Science, 137-153 (2026)

**DOI:** [10.1007/978-3-032-16089-8_10](https://doi.org/10.1007/978-3-032-16089-8_10)

## Abstract

In this paper, we explore whether incorporating prior knowledge about the data can enhance GAN performance in the context of synthetic data generation for privacy protection and identify effective methodologies for doing so. We propose three approaches for integrating auxiliary information: (1) embedding public constraints into the adversarial loss function, (2) preserving correlation structures between attributes, and (3) leveraging Bayesian networks to model attribute dependencies and encode them into Conditional GANs. Through comprehensive empirical evaluations against existing baselines, we demonstrate that Bayesian networks and public constraints significantly improve the fidelity and realism of synthetic data. Furthermore, GAN-generated synthetic data lacks inherent privacy protections, making it susceptible to privacy attacks. To address this, we incorporate DP mechanisms into the GAN framework, ensuring robust privacy guarantees while maintaining data utility. The proposed approaches are evaluated for their effectiveness in generating high-quality, privacy-preserving synthetic data, offering valuable insights for future advancements in GAN-based synthetic data generation.
