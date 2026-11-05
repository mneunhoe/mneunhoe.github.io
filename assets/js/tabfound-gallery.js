// The tabfound architecture gallery: picks one of the pre-drawn figures
// from the reader's choice of model, style, detail and theme, or a pair
// of models side by side. The view is kept in the URL hash, so a link
// opens the same view:
//
//   #model=tabicl&style=schematic&detail=full&theme=dark
//   #compare=tabicl,tabpfn3
//
// "theme" is left out of the hash while it follows the site.

(function () {
  "use strict";

  var root = document.getElementById("tf-gallery");
  var dataEl = document.getElementById("tf-gallery-data");
  if (!root || !dataEl) return;

  var data = JSON.parse(dataEl.textContent);
  var base = data.base;
  var manifest = data.manifest;
  var text = data.text;

  var models = manifest.models;
  var order = {};
  models.forEach(function (m, i) { order[m.key] = i; });
  var byKey = {};
  models.forEach(function (m) { byKey[m.key] = m; });

  var THEMES = [
    { value: "auto", label: "Follow site" },
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" }
  ];

  var state = {
    mode: "single",
    model: text.default.model,
    style: text.default.style,
    detail: text.default.detail,
    a: text.default.compare[0],
    b: text.default.compare[1],
    theme: "auto"
  };

  // ---------------------------------------------------------------------
  // Helpers

  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

  function name(key) { return text.models[key].name; }

  function formatParams(n) {
    if (n >= 1e9) return (n / 1e9).toFixed(2) + " B";
    if (n >= 1e6) return (n / 1e6).toFixed(1) + " M";
    return Math.round(n / 1e3) + " k";
  }

  function details(key, style) {
    return (byKey[key].views[style] || []).map(function (v) { return v.detail; });
  }

  function view(key, style, detail) {
    var views = byKey[key].views[style] || [];
    for (var i = 0; i < views.length; i++) if (views[i].detail === detail) return views[i];
    return views[0];
  }

  // The detail actually drawn: the reader's choice where the style has it,
  // otherwise overview. The choice itself is kept, so moving back to a
  // style that has a full view restores it.
  function effectiveDetail() {
    var d = details(state.model, state.style);
    return d.indexOf(state.detail) >= 0 ? state.detail : d[0];
  }

  function siteTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function effectiveTheme() {
    return state.theme === "auto" ? siteTheme() : state.theme;
  }

  // Each pair is drawn once, in manifest order.
  function pair() {
    var a = state.a, b = state.b;
    if (order[a] > order[b]) { var t = a; a = b; b = t; }
    var hit = manifest.compare.filter(function (p) { return p.a === a && p.b === b; })[0];
    return { a: a, b: b, size: hit };
  }

  // ---------------------------------------------------------------------
  // URL hash

  function readHash() {
    var params = new URLSearchParams(location.hash.replace(/^#/, ""));
    var next = Object.assign({}, state);
    if (params.has("compare")) {
      var keys = params.get("compare").split(",");
      if (keys.length === 2 && byKey[keys[0]] && byKey[keys[1]] && keys[0] !== keys[1]) {
        next.mode = "compare";
        next.a = keys[0];
        next.b = keys[1];
      }
    } else if (params.has("model") || params.has("style") || params.has("detail")) {
      next.mode = "single";
    }
    if (byKey[params.get("model")]) next.model = params.get("model");
    if (manifest.styles.indexOf(params.get("style")) >= 0) next.style = params.get("style");
    if (params.get("detail") === "overview" || params.get("detail") === "full") {
      next.detail = params.get("detail");
    }
    var theme = params.get("theme");
    next.theme = theme === "light" || theme === "dark" ? theme : "auto";
    state = next;
  }

  // Keys and values are all [a-z0-9-], so the hash is written by hand to
  // keep the comma in "compare=a,b" readable.
  function hashFor(s) {
    var parts = s.mode === "compare"
      ? ["compare=" + s.a + "," + s.b]
      : ["model=" + s.model, "style=" + s.style, "detail=" + s.detail];
    if (s.theme !== "auto") parts.push("theme=" + s.theme);
    return "#" + parts.join("&");
  }

  function writeHash() {
    history.replaceState(null, "", hashFor(state));
  }

  // ---------------------------------------------------------------------
  // Controls

  function fillSelect(select, value) {
    select.innerHTML = "";
    var groups = {};
    models.forEach(function (m) {
      var family = text.models[m.key].family;
      if (!groups[family]) {
        groups[family] = document.createElement("optgroup");
        groups[family].label = family;
        select.appendChild(groups[family]);
      }
      var opt = document.createElement("option");
      opt.value = m.key;
      opt.textContent = name(m.key) + " · " + formatParams(m.params);
      groups[family].appendChild(opt);
    });
    select.value = value;
  }

  function fillSegments(fieldset, options) {
    var group = "tf-" + fieldset.dataset.name;
    options.forEach(function (o) {
      var id = group + "-" + o.value;
      var input = document.createElement("input");
      input.type = "radio";
      input.name = group;
      input.id = id;
      input.value = o.value;
      var label = document.createElement("label");
      label.htmlFor = id;
      label.textContent = o.label;
      fieldset.appendChild(input);
      fieldset.appendChild(label);
    });
  }

  function setRadio(name, value) {
    $all('input[name="tf-' + name + '"]').forEach(function (r) { r.checked = r.value === value; });
  }

  function syncControls() {
    $all(".tf-mode button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.mode === state.mode));
    });
    $all("[data-for]").forEach(function (el) { el.hidden = el.dataset.for !== state.mode; });
    $("#tf-model").value = state.model;
    $("#tf-a").value = state.a;
    $("#tf-b").value = state.b;
    setRadio("style", state.style);
    setRadio("theme", state.theme);

    var available = details(state.model, state.style);
    $all('input[name="tf-detail"]').forEach(function (r) {
      r.disabled = available.indexOf(r.value) < 0;
    });
    setRadio("detail", effectiveDetail());
  }

  // ---------------------------------------------------------------------
  // Figure and caption

  var img = $(".tf-img");
  var link = $(".tf-link");
  var open = $(".tf-open");
  var download = $(".tf-download");

  var current = null;

  function show(src, size, alt, file) {
    current = { src: src, size: size, file: file };
    if (img.getAttribute("src") !== src) {
      img.classList.add("tf-loading");
      img.width = size.width;
      img.height = size.height;
      img.src = src;
    }
    img.alt = alt;
    link.href = src;
    open.href = src;
    download.href = src;
    download.setAttribute("download", file);
  }

  // Under the figure: where each model shown is published.
  function huggingface(keys) {
    var list = $(".tf-hf");
    list.innerHTML = "";
    keys.forEach(function (key) {
      var repo = text.models[key].huggingface;
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(name(key) + " on Hugging Face: "));
      var a = document.createElement("a");
      a.href = "https://huggingface.co/" + repo;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = repo;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function render() {
    var theme = effectiveTheme();
    var title = $(".tf-title");

    if (state.mode === "compare") {
      var p = pair();
      var file = p.a + "_vs_" + p.b + "-" + theme + ".svg";
      show(base + "/compare/" + file, p.size,
        name(p.a) + " and " + name(p.b) + " side by side, stage against stage.",
        file);
      title.textContent = name(p.a) + " and " + name(p.b);
      huggingface([p.a, p.b]);
      return;
    }

    var m = byKey[state.model];
    var detail = effectiveDetail();
    var style = text.styles[state.style];
    var stem = state.style + "-" + detail + "-" + theme + ".svg";
    show(base + "/" + m.key + "/" + stem, view(m.key, state.style, detail),
      name(m.key) + " in the " + style.label.toLowerCase() + " style" +
        (detail === "full" ? ", with every block expanded" : "") + ": " + m.subtitle,
      m.key + "-" + stem);

    title.textContent = name(m.key) + " ";
    var span = document.createElement("span");
    span.className = "tf-title-style";
    span.textContent = "· " + style.label + (detail === "full" ? ", full" : "");
    title.appendChild(span);
    huggingface([m.key]);
  }

  function update() {
    syncControls();
    render();
  }

  // ---------------------------------------------------------------------
  // Wiring

  fillSelect($("#tf-model"), state.model);
  fillSelect($("#tf-a"), state.a);
  fillSelect($("#tf-b"), state.b);
  fillSegments($('[data-name="style"]'), manifest.styles.map(function (s) {
    return { value: s, label: text.styles[s].label };
  }));
  fillSegments($('[data-name="detail"]'), ["overview", "full"].map(function (d) {
    return { value: d, label: text.details[d].label };
  }));
  fillSegments($('[data-name="theme"]'), THEMES);

  function change(patch) {
    Object.assign(state, patch);
    writeHash();
    update();
  }

  $all(".tf-mode button").forEach(function (b) {
    b.addEventListener("click", function () { change({ mode: b.dataset.mode }); });
  });
  $("#tf-model").addEventListener("change", function (e) { change({ model: e.target.value }); });
  // Picking the model already on the other side swaps the two.
  $("#tf-a").addEventListener("change", function (e) {
    var v = e.target.value;
    change(v === state.b ? { a: v, b: state.a } : { a: v });
  });
  $("#tf-b").addEventListener("change", function (e) {
    var v = e.target.value;
    change(v === state.a ? { b: v, a: state.b } : { b: v });
  });
  root.addEventListener("change", function (e) {
    var t = e.target;
    if (t.name === "tf-style") change({ style: t.value });
    else if (t.name === "tf-detail") change({ detail: t.value });
    else if (t.name === "tf-theme") change({ theme: t.value });
  });

  img.addEventListener("load", function () { img.classList.remove("tf-loading"); });
  img.addEventListener("error", function () { img.classList.remove("tf-loading"); });

  // Downloads are transparent. The figures on the page are drawn on the
  // site's background, which is the SVG's first element: a rect the size
  // of the whole figure. Downloads drop it, so a figure sits on whatever
  // slide or document it is put in. Fills inside the drawing stay.
  function transparentSvg(view) {
    return fetch(view.src).then(function (r) {
      if (!r.ok) throw new Error("could not fetch " + view.src);
      return r.text();
    }).then(function (text) {
      var doc = new DOMParser().parseFromString(text, "image/svg+xml");
      var svg = doc.documentElement;
      var bg = svg.querySelector(":scope > rect");
      if (bg && bg.getAttribute("width") === svg.getAttribute("width") &&
          bg.getAttribute("height") === svg.getAttribute("height")) {
        bg.remove();
      }
      return new Blob([new XMLSerializer().serializeToString(doc)],
                      { type: "image/svg+xml" });
    });
  }

  // PNGs are drawn here from the SVG rather than shipped, at twice the
  // figure's size so they stay sharp on a slide or in a document.
  var PNG_SCALE = 2;

  function pngBlob(view) {
    return transparentSvg(view).then(function (svgBlob) {
      var url = URL.createObjectURL(svgBlob);
      return new Promise(function (resolve, reject) {
        var source = new Image();
        source.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = view.size.width * PNG_SCALE;
          canvas.height = view.size.height * PNG_SCALE;
          canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(url);
          canvas.toBlob(function (blob) {
            if (blob) resolve(blob); else reject(new Error("PNG encoding failed"));
          }, "image/png");
        };
        source.onerror = function (e) { URL.revokeObjectURL(url); reject(e); };
        source.src = url;
      });
    });
  }

  function save(blob, file) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = file;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  // Without the script the link still downloads the figure as shown.
  download.addEventListener("click", function (e) {
    var view = current;
    e.preventDefault();
    transparentSvg(view).then(function (blob) {
      save(blob, view.file);
    }).catch(function () {
      window.open(view.src, "_blank", "noopener");
    });
  });

  var png = $(".tf-png");
  png.hidden = false;
  png.addEventListener("click", function () {
    var view = current;
    png.disabled = true;
    png.textContent = "Drawing PNG…";
    pngBlob(view).then(function (blob) {
      save(blob, view.file.replace(/\.svg$/, ".png"));
    }).catch(function () {
      window.open(view.src, "_blank", "noopener");
    }).then(function () {
      png.disabled = false;
      png.textContent = "Download PNG";
    });
  });

  var copy = $(".tf-copy");
  if (navigator.clipboard && window.isSecureContext) {
    copy.hidden = false;
    copy.addEventListener("click", function () {
      navigator.clipboard.writeText(location.href).then(function () {
        copy.textContent = "Link copied";
        setTimeout(function () { copy.textContent = "Copy link to this view"; }, 2000);
      });
    });
  }

  // Follow the site's theme toggle while the reader has not picked one.
  new MutationObserver(function () {
    if (state.theme === "auto") render();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // Links elsewhere on the page (and the back button) change the view
  // through the hash. PaperMod smooth-scrolls every "#..." link to the
  // element with that id and cancels the navigation, which fails for a
  // view link, so those are caught first, while the click is still
  // travelling down to the link.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#model="], a[href^="#compare="]');
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    location.hash = a.getAttribute("href");
  }, true);

  // A link to a view the gallery no longer has (a dropped style, say)
  // falls back to the default; the hash is rewritten to the view shown.
  function followHash() {
    readHash();
    if (location.hash) writeHash();
  }

  window.addEventListener("hashchange", function () {
    followHash();
    update();
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  followHash();
  $(".tf-controls").hidden = false;
  update();
})();
