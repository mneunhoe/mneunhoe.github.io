---
title: "Deceptively Real – Yet Privacy-Compliant? Synthetic Data with Formal Privacy Guarantees"
date: 2026-05-05
summary: "Invited Talk at the Center for Clinical Data Science on synthetic data and privacy guarantees."
tags:
  - Synthetic Data
  - Formal Privacy
  - Generative AI
cover:
  image: "featured.jpg"
  alt: "DSTS 2026"
  relative: true
ShowToc: false
---

**Event:** DSTS Two-day Meeting Spring 2026

**Location:** Center for Clinical Data Science, Aalborg, Denmark

**Date:** May 05, 2026

**Type:** Invited Talk

---

Synthetic data has emerged as a promising approach for protecting sensitive information while preserving analytical utility. But how privacy-compliant is synthetic data actually, and under what conditions can formal guarantees be derived? This talk addresses these questions from two angles. First, I examine whether traditional synthesizers, designed without formal privacy guarantees, can nonetheless satisfy differential privacy. Using a simplified Gaussian setting, I show that certain parametric synthesizers directly translate into ρ-zCDP guarantees. However, extending this to realistic models proves considerably harder. Second, I present algorithms for continually releasing differentially private synthetic data from longitudinal studies, such as for example patient trajectories. These algorithms preserve a fixed time window and cumulative time queries with near-optimal error bounds. Together, these results highlight both opportunities and fundamental limits when balancing analytical utility against formal privacy protection in synthetic data generation.

## Links

- [Slides](pdf/20260505_neunhoeffer_synthetic_data_DSTS.pdf)
