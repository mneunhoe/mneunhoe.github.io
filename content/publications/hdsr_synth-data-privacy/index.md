---
title: "On the Formal Privacy Guarantees of Synthetic Data (Generated Without Formal Privacy Guarantees)"
date: 2025-08-20
summary: "Examining what privacy guarantees synthetic data can satisfy even without formal guarantees during synthesizer training."
tags:
  - Differential Privacy
  - Synthetic Data
  - Privacy Guarantees
  - zCDP
ShowToc: false
---

**Authors:** Marcel Neunhoeffer, Jeremy Seeman, Jörg Drechsler

**Published in:** Harvard Data Science Review, Special Issue 6: Data Privacy for Social Sciences (2025)

**DOI:** [10.1162/99608f92.1af82b35](https://doi.org/10.1162/99608f92.1af82b35)

## Abstract

The synthetic data approach for privacy protection has a history dating back more than 30 years, well before differential privacy concepts emerged. While approaches for synthetic data with formal privacy guarantees have been proposed in recent years, traditional approaches without formal guarantees are still widely used in practice, mainly because the analytical validity of differential privacy approaches is often low.

Since data synthesis involves drawing new data from a model fitted to the original data, the synthesis process introduces randomness—a prerequisite of any formally private algorithm. This naturally raises the question: what privacy guarantees can synthetic data satisfy even without formal guarantees during the training of the synthesizer?

We explore this question using a synthesizer under simplified settings to show that the privacy guarantees offered by this synthesizer and potential others can be directly translated into a ρ-zCDP (zero-concentrated differential privacy) guarantee. We further explore the conditions under which this equivalence holds and show that getting formal privacy guarantees for more realistic synthetic data models is significantly harder.

## Key Insights

- Synthetic data generation introduces randomness, which is a prerequisite for formal privacy
- Under simplified settings, privacy guarantees can be translated into ρ-zCDP guarantees
- The equivalence holds under specific conditions that we characterize
- Achieving formal privacy guarantees for realistic synthetic data models remains challenging

## Links

- [Article](https://hdsr.mitpress.mit.edu/pub/j9p0axa5/release/1)
- [DOI](https://doi.org/10.1162/99608f92.1af82b35)
