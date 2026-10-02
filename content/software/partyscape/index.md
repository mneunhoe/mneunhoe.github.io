---
title: "partyscape: Diversity Profiles for Party Systems"
date: 2026-04-23
summary: "Diversity profiles, profile crossings and beta diversity for party-system research."
tags:
  - R Package
  - Party Systems
  - Measurement
  - Open Source
weight: 4
ShowToc: false
---

**Author:** Marcel Neunhoeffer

**Status:** Available on GitHub

## Overview

`partyscape` implements the tools proposed in my paper "Diversity Profiles for Party Systems" (under review). The effective number of parties summarizes a party system in one number. A diversity profile shows how the count of relevant parties changes as small parties are weighted more or less heavily, and the effective number of parties is one point on that profile.

The package computes diversity profiles, finds where the profiles of two party systems cross, and decomposes diversity across elections into its within- and between-election parts (beta diversity). It works on party-labeled vote or seat shares, because sorting shares by size discards the information that the between-election decomposition needs.

## Installation

```r
# install.packages("remotes")
remotes::install_github("mneunhoe/partyscape")
```

## Links

- [GitHub](https://github.com/mneunhoe/partyscape)
