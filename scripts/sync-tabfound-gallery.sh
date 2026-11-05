#!/usr/bin/env bash
# Rebuild the tabfound architecture gallery's figures from a tabfound
# checkout and copy them into the gallery page.
#
#   scripts/sync-tabfound-gallery.sh [path/to/tabfound]
#
# tabfound is the source of truth: `inst/gallery/make-gallery.R --matrix`
# draws every model in every style, detail and theme, every pair side by
# side, and a manifest.json the gallery page reads. Run this after a
# diagram changes in tabfound, then commit the result.

set -euo pipefail

TABFOUND="${1:-$HOME/Desktop/R-TabularFoundation}"
SITE="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$SITE/content/software/tabfound-gallery/figures"

if [ ! -f "$TABFOUND/inst/gallery/make-gallery.R" ]; then
  echo "No tabfound checkout at $TABFOUND" >&2
  exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# The diagrams carry non-ASCII text (×, ·, →), so R needs a UTF-8 locale.
(cd "$TABFOUND" && LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 Rscript \
  -e 'suppressMessages(devtools::load_all(quiet = TRUE)); source("inst/gallery/make-gallery.R")' \
  --matrix "$TMP")

mkdir -p "$DEST"
rsync -a --delete "$TMP/" "$DEST/"
echo "Synced $(find "$DEST" -name '*.svg' | wc -l | tr -d ' ') figures into $DEST"
