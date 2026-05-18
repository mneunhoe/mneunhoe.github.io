---
title: "To Count or Not to Count: Practical DP Mean Estimation with Unknown Dataset Size"
date: 2026-05-17
summary: "Poster Presentation at TPDP 2026"
tags:
  - Differential Privacy
  - Unknown Dataset Size
cover:
  image: "featured.jpg"
  alt: "TPDP 2026"
  relative: true
ShowToc: false
---

**Event:** TPDP 2026 - Theory and Practice of Differential Privacy

**Location:** Northeastern University, Boston, MA, USA

**Date:** June 02, 2026

**Type:** Poster Presentation

**Authors:** Marcel Neunhoeffer, Shlomi Hod, Jörg Drechsler

---

Differentially private mean estimation with unknown dataset size n requires a choice: should the analyst spend part of the privacy budget estimating n, or avoid counting entirely? Several mechanisms exist for this problem, from OpenDP’s resize mean [OpenDP, 2025] to the minimax-optimal 2D hourglass [Kulesza et al., 2024] and simplex augmentation [Fitzsimons et al., 2025], but no systematic comparison characterizes when each is preferred. We provide such a comparison. We derive closed-form MSE expressions for the presented strategies spanning a spectrum from no counting (fixed denominator) through implicit counting (simplex augmentation) to explicit counting (noisy count with budget splitting), and empirically evaluate them via simulation. Our main findings: (1) centering the sum at (L + U )/2, a step absent from current DP libraries, reduces variance by a factor up to 4; (2) when dataset size uncertainty is small, avoiding the count entirely is optimal; (3) when uncertainty is large, the simplex mechanism [Fitzsimons et al., 2025] dominates, achieving minimax-optimal worst-case MSE while adapting to the true mean, using only standard Laplace noise. These findings yield a practical two-level decision: first decide whether to count, then decide how.

## Links

- [Extended Abstract](pdf/20260518_DP_Resized_Mean.pdf)
