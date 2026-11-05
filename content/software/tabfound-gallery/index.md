---
title: "Tabular Foundation Model Architecture Gallery"
url: "/software/tabfound/gallery/"
date: 2026-11-05
summary: "Every architecture tabfound runs, drawn from the models themselves, in five styles, two levels of detail and both themes."
description: "Architecture diagrams of TabPFN v2.5 to v3.5, TabICL, TabFM, Mitra and Kumo Tabular, drawn by the tabfound R package from each model's published configuration."
tags:
  - Tabular Foundation Models
  - R Package
build:
  list: never
ShowToc: false
ShowPostNavLinks: false
---

[← tabfound overview](/software/tabfound/)

Every diagram on this page was drawn by [`tabfound`](/software/tabfound/)
from a network built from the model's published configuration. None is
drawn by hand or transcribed from a paper. The stages come from each
backend's own description of its network, and the widths, head counts and
parameter counts are read off the network itself.

What makes a tabular foundation model different from a language model is
that **an attention layer has an axis**. It can run down a column, across a
row's features, or over the rows of the table. Every attention block in
these diagrams is tagged with its axis, and that is the single most useful
thing to compare across models.

Pick a model and a way of drawing it, or compare two side by side. The
theme follows the site unless you choose one, and every view has its own
link.

{{< tabfound-gallery >}}

## Where to start

- **One lineage, four generations.** Step through
  [TabPFN v2.5](#model=tabpfn&style=cards&detail=overview),
  [v2.6](#model=tabpfn26&style=cards&detail=overview),
  [v3](#model=tabpfn3&style=cards&detail=overview) and
  [v3.5](#model=tabpfn35&style=cards&detail=overview) to watch the design
  change from one two-way stack to three stages.
- **The axis tags at work.** [TabPFN v3 in full](#model=tabpfn3&style=cards&detail=full):
  its column stage attends over rows, its aggregator over columns, and its
  in-context stack over rows again.
- **Where the parameters are.** [TabFM as an icicle](#model=tabfm&style=icicle&detail=overview)
  shows how much of 1.64 B parameters sits in its in-context stack.
- **How a block runs.** [TabICL as a schematic, in full](#model=tabicl&style=schematic&detail=full),
  with residual connections and a dotted box showing what each
  feed-forward computes inside.
- **Two independent designs.** [TabPFN v3 against TabICL](#compare=tabpfn3,tabicl):
  the same three stages, arrived at separately.
- **One architecture, three sizes.** [Kumo Tabular small against medium](#compare=kumo,kumo-medium),
  then [medium against large](#compare=kumo-medium,kumo-large).

## Drawing your own

Any model `tabfound` loads can be drawn the same way, as SVG, PNG or PDF:

```r
library(tabfound)
clf <- tabular_classifier("tabicl-v2-classifier")

plot_architecture(clf, "tabicl.svg")
plot_architecture(clf, "tabicl-schematic.svg", style = "schematic",
                  detail = "full", theme = "dark")

pfn <- tabular_classifier("tabpfn-v3-classifier")
plot_architecture_diff(clf, pfn, "tabicl-vs-tabpfn3.svg")
```

## How these figures were made

The figures come from tabfound's
[`inst/gallery/make-gallery.R`](https://github.com/mneunhoe/tabfound/blob/main/inst/gallery/make-gallery.R),
which builds each network from its `config.json` **without loading any
weights**. A diagram depends only on the architecture and on the shapes of
the parameters, both fixed by the config, so a randomly initialised
network reports exactly what the trained one does. The schematics are
checked against the code: a test traces each model's forward pass and
requires the steps to be listed in the order they run, and each
feed-forward's widths must account for its parameter count.

The layout owes its shape to Sebastian Raschka's
[LLM architecture gallery](https://sebastianraschka.com/llm-architecture-gallery/).
For the full discussion of each architecture and style, see the package's
[architecture gallery vignette](https://github.com/mneunhoe/tabfound/blob/main/vignettes/architecture-gallery.qmd).
