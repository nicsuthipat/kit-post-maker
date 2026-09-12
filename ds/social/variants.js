/* Generated from variants.json. */
window.KIT_VARIANTS={
 "$schema": "kit-social-variants/2",
 "generated": "2026-09-11",
 "palette": "approved 2026-09-11",
 "about": "Machine-readable variation manifest for the KIT post-maker platform. A post = one template + one ground + one dot arrangement + a frame setting, and a multi-page post ends with a logo page. Every geometry value was produced by a clearance solver, not typed: no combination can put artwork within 40px (dots) or 48px (curve) of the type zone.",
 "contract": {
  "compose": "template.id → ground.id → dots.id → frame(framed|frameless) → endPage(none|logo|logo-qr)",
  "dropdowns": {
   "template": [
    {
     "value": "ig-portrait",
     "label": "Instagram feed portrait · 1080×1350"
    },
    {
     "value": "ig-square",
     "label": "Instagram feed square · 1080×1080"
    },
    {
     "value": "ig-story",
     "label": "Instagram Story · 1080×1920"
    },
    {
     "value": "ig-reel",
     "label": "Instagram Reel cover · 1080×1920"
    },
    {
     "value": "fb-post",
     "label": "Facebook feed post · 1200×630"
    },
    {
     "value": "fb-portrait",
     "label": "Facebook feed portrait · 1080×1350"
    },
    {
     "value": "fb-story",
     "label": "Facebook Story · 1080×1920"
    },
    {
     "value": "tiktok",
     "label": "TikTok cover / end card · 1080×1920"
    },
    {
     "value": "line-richmessage",
     "label": "LINE rich message · 1040×1040"
    },
    {
     "value": "line-cover",
     "label": "LINE OA cover · 1080×878"
    },
    {
     "value": "line-richmenu",
     "label": "LINE rich menu (3×2) · 2500×1686"
    }
   ],
   "ground": [
    {
     "value": "ink",
     "label": "ink (dark)",
     "swatch": "#14181D"
    },
    {
     "value": "ink-sage",
     "label": "ink-sage (dark)",
     "swatch": "#1C261C"
    },
    {
     "value": "slate-deep",
     "label": "slate-deep (dark)",
     "swatch": "#29303F"
    },
    {
     "value": "sand-deep",
     "label": "sand-deep (dark)",
     "swatch": "#4D3D2F"
    },
    {
     "value": "sage-deep",
     "label": "sage-deep (dark)",
     "swatch": "#3B573A"
    },
    {
     "value": "peach-deep",
     "label": "peach-deep (dark)",
     "swatch": "#81524C"
    },
    {
     "value": "slate-soft",
     "label": "slate-soft (dark)",
     "swatch": "#5A6D92"
    },
    {
     "value": "ground",
     "label": "ground (light)",
     "swatch": "#FDF9F6"
    },
    {
     "value": "slate-pale",
     "label": "slate-pale (light)",
     "swatch": "#EAF2F8"
    },
    {
     "value": "sage-pale",
     "label": "sage-pale (light)",
     "swatch": "#D7E9D6"
    }
   ],
   "dots": [
    {
     "value": "quiet-pair",
     "label": "Quiet pair · 2 shapes"
    },
    {
     "value": "soft-trio",
     "label": "Soft trio · 3 shapes"
    },
    {
     "value": "corner-tr",
     "label": "Corner — top right · 3 shapes"
    },
    {
     "value": "corner-br",
     "label": "Corner — bottom right · 3 shapes"
    },
    {
     "value": "drift-diagonal",
     "label": "Drift — diagonal · 3 shapes"
    },
    {
     "value": "pebbles",
     "label": "Pebbles · 5 shapes"
    },
    {
     "value": "edge-left",
     "label": "Left edge · 3 shapes"
    },
    {
     "value": "edge-right",
     "label": "Right edge · 3 shapes"
    },
    {
     "value": "top-band",
     "label": "Top band · 3 shapes"
    },
    {
     "value": "twin-medium",
     "label": "Twin medium · 2 shapes"
    },
    {
     "value": "scatter-four",
     "label": "Scatter — four · 4 shapes"
    },
    {
     "value": "quintet",
     "label": "Quintet · 5 shapes"
    },
    {
     "value": "single-large",
     "label": "Single — large · 1 shapes"
    },
    {
     "value": "minimal",
     "label": "Minimal · 1 shapes"
    }
   ],
   "frame": [
    {
     "value": "framed",
     "label": "With enclosing line"
    },
    {
     "value": "frameless",
     "label": "No frame (dots only)"
    }
   ],
   "endPage": [
    {
     "value": "none",
     "label": "No end page"
    },
    {
     "value": "logo",
     "label": "Full-page logo"
    },
    {
     "value": "logo-qr",
     "label": "Full-page logo + LINE QR"
    }
   ]
  },
  "render": [
   "fill canvas with ground.bg",
   "dots[].placements[template.id] — fractions of canvas; each carries its own accent index into ground.accents, and a shape (b1|b2|b3|round). Never recolour or resize: the spread and colour order ARE the arrangement.",
   "frame=framed → draw template.curvePlacement as an inline <svg viewBox=\"0 0 W H\" preserveAspectRatio=\"none\"><g transform=\"translate(x*W,y*H) scale(w*W/vbW,h*H/vbH) translate(-vbX,-vbY)\"><path d=curvePaths[curvePlacement.variant] vector-effect=\"non-scaling-stroke\" stroke=ground.curve stroke-width=strokeWidthPx/></g></svg>. Take BOTH the path and the viewBox from curvePlacement.variant — the two landscape surfaces use \"wideOpen\" and drawing the \"open\" path into their transform puts the stroke off-canvas. NEVER position by hand and never use an .svg file as an <img>: default preserveAspectRatio letterboxes a square viewBox into a portrait canvas and drops the stroke on the type. frame=frameless → omit entirely; the dots carry the identity.",
   "place ground.wordmarkAsset in template.markZone on EVERY page — wordmark only, no dots, no curve, no descriptor",
   "flow text inside template.typeZone in ground.text / ground.meta",
   "a multi-page post replaces its LAST page with endPage (see endPages below), which uses the full lockup instead of the wordmark"
  ],
  "invariants": [
   "text never leaves typeZone",
   "dots never enter typeZone, markZone or any safeArea",
   "the curve never comes within 48px of typeZone or markZone; a null curvePlacement means that template is frameless-only",
   "accent coverage ≤ ground.accentMax",
   "ground.text is the ONLY text colour on that ground",
   "every colour a ground defines is listed in ground.ratios and clears its threshold: text/meta/ctaLabel/chip ≥4.5:1, ctaFill ≥3:1. A ground colour absent from ratios is unverified and must not ship.",
   "the path drawn must be curvePaths[curvePlacement.variant], not a single default — the solved geometry and the rendered geometry have to be the same curve."
  ],
  "verifiedPairs": [
   "text",
   "meta",
   "ctaLabel",
   "ctaFill",
   "chip"
  ]
 },
 "grounds": [
  {
   "id": "sage-50",
   "kind": "light",
   "bg": "#E8F2E7",
   "note": "lightest green",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#A0A8A2",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#B05C26",
    "#90A7D3",
    "#F3AFA6",
    "#7EA97C"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 15.52,
    "meta": 7.28,
    "ctaLabel": 4.55,
    "ctaFill": 4.15,
    "chip": 7.31,
    "chipVsGround": 2.12
   }
  },
  {
   "id": "sand-50",
   "kind": "light",
   "bg": "#FFFAF3",
   "note": "lightest cream",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#AFADAA",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#7EA97C",
    "#90A7D3",
    "#F3AFA6",
    "#F1C9A7"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 17.16,
    "meta": 8.05,
    "ctaLabel": 4.55,
    "ctaFill": 4.59,
    "chip": 7.96,
    "chipVsGround": 2.16
   }
  },
  {
   "id": "slate-50",
   "kind": "light",
   "bg": "#F3F7FB",
   "note": "lightest periwinkle",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#A7ABB0",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#7EA97C",
    "#F1C9A7",
    "#F3AFA6",
    "#90A7D3"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 16.56,
    "meta": 7.77,
    "ctaLabel": 4.55,
    "ctaFill": 4.43,
    "chip": 7.72,
    "chipVsGround": 2.14
   }
  },
  {
   "id": "peach-50",
   "kind": "light",
   "bg": "#FFF4F3",
   "note": "lightest blush",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#AFA9AA",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#7EA97C",
    "#F1C9A7",
    "#90A7D3",
    "#F3AFA6"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 16.54,
    "meta": 7.76,
    "ctaLabel": 4.55,
    "ctaFill": 4.42,
    "chip": 7.71,
    "chipVsGround": 2.15
   }
  },
  {
   "id": "sage-100",
   "kind": "light",
   "bg": "#C8DEC4",
   "note": "second green",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#8B9B8B",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#B05C26",
    "#90A7D3",
    "#D13B3B",
    "#7EA97C"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 12.48,
    "meta": 5.85,
    "ctaLabel": 4.55,
    "ctaFill": 3.34,
    "chip": 6.08,
    "chipVsGround": 2.05
   }
  },
  {
   "id": "sand-100",
   "kind": "light",
   "bg": "#F9E7D6",
   "note": "second cream",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#ABA197",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#7EA97C",
    "#90A7D3",
    "#F3AFA6",
    "#B05C26"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 14.79,
    "meta": 6.94,
    "ctaLabel": 4.55,
    "ctaFill": 3.96,
    "chip": 7.02,
    "chipVsGround": 2.11
   }
  },
  {
   "id": "slate-100",
   "kind": "light",
   "bg": "#DDE7F3",
   "note": "second periwinkle",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#99A1AA",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#7EA97C",
    "#B05C26",
    "#F3AFA6",
    "#90A7D3"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 14.26,
    "meta": 6.69,
    "ctaLabel": 4.55,
    "ctaFill": 3.81,
    "chip": 6.82,
    "chipVsGround": 2.09
   }
  },
  {
   "id": "peach-100",
   "kind": "light",
   "bg": "#FCE2DE",
   "note": "second blush",
   "text": "#14181D",
   "meta": "#4A4E55",
   "metaByWeight": false,
   "curve": "#14181D",
   "ctaFill": "#5871B0",
   "ctaLabel": "#FDF9F6",
   "chip": "#AD9D9C",
   "chipText": "#14181D",
   "chipDirection": "lighter",
   "accents": [
    "#7EA97C",
    "#B05C26",
    "#90A7D3",
    "#F3AFA6"
   ],
   "accentMax": "20%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer.png",
   "markAsset": "assets/logo/kit-master.png",
   "ratios": {
    "text": 14.49,
    "meta": 6.8,
    "ctaLabel": 4.55,
    "ctaFill": 3.88,
    "chip": 6.86,
    "chipVsGround": 2.11
   }
  },
  {
   "id": "sage-1000",
   "kind": "dark",
   "bg": "#223A28",
   "note": "deepest green",
   "text": "#FDF9F6",
   "meta": "#C7D6EA",
   "metaByWeight": false,
   "curve": "#FDF9F6",
   "ctaFill": "#F1C9A7",
   "ctaLabel": "#14181D",
   "chip": "#667568",
   "chipText": "#FDF9F6",
   "chipDirection": "lighter",
   "accents": [
    "#F7DCC4",
    "#B8C8E4",
    "#F8CFC9",
    "#A7C9A1"
   ],
   "accentMax": "10%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer-ground.png",
   "markAsset": "assets/logo/kit-master-ground.png",
   "ratios": {
    "text": 11.77,
    "meta": 8.35,
    "ctaLabel": 11.59,
    "ctaFill": 8.01,
    "chip": 4.65,
    "chipVsGround": 2.53
   }
  },
  {
   "id": "sand-1000",
   "kind": "dark",
   "bg": "#4A2E1C",
   "note": "deepest brown",
   "text": "#FDF9F6",
   "meta": "#C7D6EA",
   "metaByWeight": false,
   "curve": "#FDF9F6",
   "ctaFill": "#F1C9A7",
   "ctaLabel": "#14181D",
   "chip": "#816D60",
   "chipText": "#FDF9F6",
   "chipDirection": "lighter",
   "accents": [
    "#A7C9A1",
    "#B8C8E4",
    "#F8CFC9",
    "#F7DCC4"
   ],
   "accentMax": "10%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer-ground.png",
   "markAsset": "assets/logo/kit-master-ground.png",
   "ratios": {
    "text": 11.81,
    "meta": 8.38,
    "ctaLabel": 11.59,
    "ctaFill": 8.04,
    "chip": 4.68,
    "chipVsGround": 2.53
   }
  },
  {
   "id": "slate-1000",
   "kind": "dark",
   "bg": "#2A3350",
   "note": "deepest periwinkle",
   "text": "#FDF9F6",
   "meta": "#C7D6EA",
   "metaByWeight": false,
   "curve": "#FDF9F6",
   "ctaFill": "#F1C9A7",
   "ctaLabel": "#14181D",
   "chip": "#6B7083",
   "chipText": "#FDF9F6",
   "chipDirection": "lighter",
   "accents": [
    "#A7C9A1",
    "#F7DCC4",
    "#F8CFC9",
    "#B8C8E4"
   ],
   "accentMax": "10%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer-ground.png",
   "markAsset": "assets/logo/kit-master-ground.png",
   "ratios": {
    "text": 11.88,
    "meta": 8.43,
    "ctaLabel": 11.59,
    "ctaFill": 8.09,
    "chip": 4.7,
    "chipVsGround": 2.53
   }
  },
  {
   "id": "peach-1000",
   "kind": "dark",
   "bg": "#5B2222",
   "note": "deepest maroon",
   "text": "#FDF9F6",
   "meta": "#C7D6EA",
   "metaByWeight": false,
   "curve": "#FDF9F6",
   "ctaFill": "#F1C9A7",
   "ctaLabel": "#14181D",
   "chip": "#8F6766",
   "chipText": "#FDF9F6",
   "chipDirection": "lighter",
   "accents": [
    "#A7C9A1",
    "#F7DCC4",
    "#B8C8E4",
    "#F8CFC9"
   ],
   "accentMax": "10%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer-ground.png",
   "markAsset": "assets/logo/kit-master-ground.png",
   "ratios": {
    "text": 11.82,
    "meta": 8.39,
    "ctaLabel": 11.59,
    "ctaFill": 8.05,
    "chip": 4.66,
    "chipVsGround": 2.53
   }
  },
  {
   "id": "ink",
   "kind": "dark",
   "bg": "#14181D",
   "note": "neutral near-black",
   "text": "#FDF9F6",
   "meta": "#C7D6EA",
   "metaByWeight": false,
   "curve": "#FDF9F6",
   "ctaFill": "#F1C9A7",
   "ctaLabel": "#14181D",
   "chip": "#636567",
   "chipText": "#FDF9F6",
   "chipDirection": "lighter",
   "accents": [
    "#A7C9A1",
    "#F7DCC4",
    "#B8C8E4",
    "#F8CFC9"
   ],
   "accentMax": "10%",
   "wordmarkAsset": "assets/logo/kit-wordmark-footer-ground.png",
   "markAsset": "assets/logo/kit-master-ground.png",
   "ratios": {
    "text": 17.02,
    "meta": 12.08,
    "ctaLabel": 11.59,
    "ctaFill": 11.59,
    "chip": 5.59,
    "chipVsGround": 3.05
   }
  }
 ],
 "templates": [
  {
   "id": "ig-portrait",
   "label": "Instagram feed portrait",
   "w": 1080,
   "h": 1350,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2222,
    "w": 0.7222,
    "h": 0.4444
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.8741,
    "w": 0.3519,
    "h": 0.0607,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.3,
    "y": -0.0748,
    "w": 1.55,
    "h": 1.24,
    "strokeWidthPx": 5,
    "clearPx": 51,
    "onCanvasPct": 35
   }
  },
  {
   "id": "ig-square",
   "label": "Instagram feed square",
   "w": 1080,
   "h": 1080,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2222,
    "w": 0.7222,
    "h": 0.4444
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.8426,
    "w": 0.3519,
    "h": 0.0759,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.15,
    "w": 1.3796,
    "h": 1.3796,
    "strokeWidthPx": 5,
    "clearPx": 72,
    "onCanvasPct": 38
   }
  },
  {
   "id": "ig-story",
   "label": "Instagram Story",
   "w": 1080,
   "h": 1920,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2917,
    "w": 0.7222,
    "h": 0.4063
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.7188,
    "w": 0.3519,
    "h": 0.0427,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [
    {
     "x": 0,
     "y": 0,
     "w": 1,
     "h": 0.1302
    },
    {
     "x": 0,
     "y": 0.7813,
     "w": 1,
     "h": 0.2188
    }
   ],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.45,
    "w": 1.1204,
    "h": 0.6302,
    "strokeWidthPx": 5,
    "clearPx": 237,
    "onCanvasPct": 35
   }
  },
  {
   "id": "ig-reel",
   "label": "Instagram Reel cover",
   "w": 1080,
   "h": 1920,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2708,
    "w": 0.7222,
    "h": 0.3438
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.651,
    "w": 0.3519,
    "h": 0.0427,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [
    {
     "x": 0,
     "y": 0,
     "w": 1,
     "h": 0.1146
    },
    {
     "x": 0,
     "y": 0.7396,
     "w": 1,
     "h": 0.2604
    }
   ],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.45,
    "w": 1.1204,
    "h": 0.6302,
    "strokeWidthPx": 5,
    "clearPx": 197,
    "onCanvasPct": 35
   }
  },
  {
   "id": "fb-post",
   "label": "Facebook feed post",
   "w": 1200,
   "h": 630,
   "typeZone": {
    "x": 0.0917,
    "y": 0.1905,
    "w": 0.5417,
    "h": 0.5556
   },
   "markZone": {
    "x": 0.0917,
    "y": 0.7937,
    "w": 0.3,
    "h": 0.1267,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. Asset is 0.213 H/W; this zone is 0.222."
   },
   "safeAreas": [],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "wideOpen",
    "viewBox": "60 280 900 500",
    "x": -0.45,
    "y": -0.3,
    "w": 1.35,
    "h": 1.5524,
    "strokeWidthPx": 5.56,
    "clearPx": 70,
    "onCanvasPct": 24
   }
  },
  {
   "id": "fb-portrait",
   "label": "Facebook feed portrait",
   "w": 1080,
   "h": 1350,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2222,
    "w": 0.7222,
    "h": 0.4444
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.8741,
    "w": 0.3519,
    "h": 0.0607,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.3,
    "y": -0.0748,
    "w": 1.55,
    "h": 1.24,
    "strokeWidthPx": 5,
    "clearPx": 51,
    "onCanvasPct": 35
   }
  },
  {
   "id": "fb-story",
   "label": "Facebook Story",
   "w": 1080,
   "h": 1920,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2917,
    "w": 0.7222,
    "h": 0.4063
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.7188,
    "w": 0.3519,
    "h": 0.0427,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [
    {
     "x": 0,
     "y": 0,
     "w": 1,
     "h": 0.1302
    },
    {
     "x": 0,
     "y": 0.7813,
     "w": 1,
     "h": 0.2188
    }
   ],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.45,
    "w": 1.1204,
    "h": 0.6302,
    "strokeWidthPx": 5,
    "clearPx": 237,
    "onCanvasPct": 35
   }
  },
  {
   "id": "tiktok",
   "label": "TikTok cover / end card",
   "w": 1080,
   "h": 1920,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2604,
    "w": 0.7222,
    "h": 0.3229
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.625,
    "w": 0.3519,
    "h": 0.0427,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [
    {
     "x": 0,
     "y": 0.75,
     "w": 1,
     "h": 0.25
    }
   ],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.45,
    "w": 1.1204,
    "h": 0.6302,
    "strokeWidthPx": 5,
    "clearPx": 177,
    "onCanvasPct": 35
   }
  },
  {
   "id": "line-richmessage",
   "label": "LINE rich message",
   "w": 1040,
   "h": 1040,
   "typeZone": {
    "x": 0.1346,
    "y": 0.2212,
    "w": 0.7308,
    "h": 0.4423
   },
   "markZone": {
    "x": 0.0817,
    "y": 0.8269,
    "w": 0.3173,
    "h": 0.0731,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.230. Height must not exceed the zone."
   },
   "safeAreas": [],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.15,
    "w": 1.3798,
    "h": 1.3798,
    "strokeWidthPx": 4.81,
    "clearPx": 65,
    "onCanvasPct": 38
   }
  },
  {
   "id": "line-cover",
   "label": "LINE OA cover",
   "w": 1080,
   "h": 878,
   "typeZone": {
    "x": 0.1389,
    "y": 0.2278,
    "w": 0.7222,
    "h": 0.4556
   },
   "markZone": {
    "x": 0.0815,
    "y": 0.7973,
    "w": 0.3519,
    "h": 0.0934,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. The asset is 0.213 H/W; this zone is 0.216. Height must not exceed the zone."
   },
   "safeAreas": [],
   "tapGrid": null,
   "curvePlacement": {
    "variant": "open",
    "viewBox": "0 0 1024 1024",
    "x": -0.15,
    "y": -0.2995,
    "w": 1.2398,
    "h": 1.5251,
    "strokeWidthPx": 5,
    "clearPx": 75,
    "onCanvasPct": 30
   }
  },
  {
   "id": "line-richmenu",
   "label": "LINE rich menu (3×2)",
   "w": 2500,
   "h": 1686,
   "typeZone": {
    "x": 0.072,
    "y": 0.1068,
    "w": 0.856,
    "h": 0.6999
   },
   "markZone": {
    "x": 0.072,
    "y": 0.8541,
    "w": 0.232,
    "h": 0.0763,
    "assetAspect": 0.2132,
    "note": "wordmark drawn at width=markZone.w, height auto. Asset is 0.213 H/W; this zone is 0.222."
   },
   "safeAreas": [],
   "tapGrid": [
    3,
    2
   ],
   "curvePlacement": {
    "variant": "wideOpen",
    "viewBox": "60 280 900 500",
    "x": -0.3,
    "y": -0.4502,
    "w": 1.5,
    "h": 1.7248,
    "strokeWidthPx": 11.57,
    "clearPx": 118,
    "onCanvasPct": 9
   }
  }
 ],
 "dots": [
  {
   "id": "quiet-pair",
   "name": "Quiet pair",
   "requested": 2,
   "fullOn": [
    "ig-portrait",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok"
   ],
   "profile": {
    "largest": 0.175,
    "smallest": 0.024,
    "spread": 7.3
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.0305,
      "y": 0.032,
      "w": 0.175,
      "h": 0.1316,
      "accent": 0,
      "shape": "b1",
      "clearPx": 79
     },
     {
      "x": 0.95,
      "y": 0.9524,
      "w": 0.024,
      "h": 0.018,
      "accent": 2,
      "shape": "round",
      "clearPx": 397
     }
    ],
    "ig-square": [
     {
      "x": 0.95,
      "y": 0.95,
      "w": 0.024,
      "h": 0.0226,
      "accent": 2,
      "shape": "round",
      "clearPx": 320
     }
    ],
    "ig-story": [
     {
      "x": 0.0305,
      "y": 0.1648,
      "w": 0.175,
      "h": 0.0925,
      "accent": 0,
      "shape": "b1",
      "clearPx": 65
     },
     {
      "x": 0.95,
      "y": 0.7153,
      "w": 0.024,
      "h": 0.0127,
      "accent": 2,
      "shape": "round",
      "clearPx": 101
     }
    ],
    "ig-reel": [
     {
      "x": 0.0305,
      "y": 0.1488,
      "w": 0.175,
      "h": 0.0925,
      "accent": 0,
      "shape": "b1",
      "clearPx": 56
     },
     {
      "x": 0.918,
      "y": 0.6673,
      "w": 0.024,
      "h": 0.0127,
      "accent": 2,
      "shape": "round",
      "clearPx": 114
     }
    ],
    "fb-post": [
     {
      "x": 0.95,
      "y": 0.9071,
      "w": 0.024,
      "h": 0.043,
      "accent": 2,
      "shape": "round",
      "clearPx": 393
     }
    ],
    "fb-portrait": [
     {
      "x": 0.0305,
      "y": 0.032,
      "w": 0.175,
      "h": 0.1316,
      "accent": 0,
      "shape": "b1",
      "clearPx": 79
     },
     {
      "x": 0.95,
      "y": 0.9524,
      "w": 0.024,
      "h": 0.018,
      "accent": 2,
      "shape": "round",
      "clearPx": 397
     }
    ],
    "fb-story": [
     {
      "x": 0.0305,
      "y": 0.1648,
      "w": 0.175,
      "h": 0.0925,
      "accent": 0,
      "shape": "b1",
      "clearPx": 65
     },
     {
      "x": 0.95,
      "y": 0.7153,
      "w": 0.024,
      "h": 0.0127,
      "accent": 2,
      "shape": "round",
      "clearPx": 101
     }
    ],
    "tiktok": [
     {
      "x": 0.0305,
      "y": 0.0208,
      "w": 0.175,
      "h": 0.0925,
      "accent": 0,
      "shape": "b1",
      "clearPx": 282
     },
     {
      "x": 0.95,
      "y": 0.6512,
      "w": 0.024,
      "h": 0.0127,
      "accent": 2,
      "shape": "round",
      "clearPx": 161
     }
    ],
    "line-richmessage": [
     {
      "x": 0.95,
      "y": 0.95,
      "w": 0.024,
      "h": 0.0226,
      "accent": 2,
      "shape": "round",
      "clearPx": 310
     }
    ],
    "line-cover": [
     {
      "x": 0.95,
      "y": 0.9312,
      "w": 0.024,
      "h": 0.0278,
      "accent": 2,
      "shape": "round",
      "clearPx": 237
     }
    ],
    "line-richmenu": [
     {
      "x": 0.918,
      "y": 0.9282,
      "w": 0.024,
      "h": 0.0335,
      "accent": 2,
      "shape": "round",
      "clearPx": 204
     }
    ]
   }
  },
  {
   "id": "soft-trio",
   "name": "Soft trio",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.085,
    "smallest": 0.032,
    "spread": 2.7
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.8575,
      "y": 0.02,
      "w": 0.085,
      "h": 0.0639,
      "accent": 1,
      "shape": "b2",
      "clearPx": 186
     },
     {
      "x": 0.0265,
      "y": 0.022,
      "w": 0.055,
      "h": 0.0414,
      "accent": 0,
      "shape": "b3",
      "clearPx": 223
     },
     {
      "x": 0.78,
      "y": 0.9472,
      "w": 0.032,
      "h": 0.0241,
      "accent": 2,
      "shape": "round",
      "clearPx": 374
     }
    ],
    "ig-square": [
     {
      "x": 0.8575,
      "y": 0.0275,
      "w": 0.085,
      "h": 0.0799,
      "accent": 1,
      "shape": "b2",
      "clearPx": 124
     },
     {
      "x": 0.0265,
      "y": 0.0325,
      "w": 0.055,
      "h": 0.0517,
      "accent": 0,
      "shape": "b3",
      "clearPx": 161
     },
     {
      "x": 0.716,
      "y": 0.944,
      "w": 0.032,
      "h": 0.0301,
      "accent": 2,
      "shape": "round",
      "clearPx": 299
     }
    ],
    "ig-story": [
     {
      "x": 0.8895,
      "y": 0.1901,
      "w": 0.085,
      "h": 0.0449,
      "accent": 1,
      "shape": "b2",
      "clearPx": 112
     },
     {
      "x": 0.0265,
      "y": 0.2045,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 127
     },
     {
      "x": 0.604,
      "y": 0.727,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 55
     }
    ],
    "ig-reel": [
     {
      "x": 0.8895,
      "y": 0.1741,
      "w": 0.085,
      "h": 0.0449,
      "accent": 1,
      "shape": "b2",
      "clearPx": 104
     },
     {
      "x": 0.0265,
      "y": 0.2845,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 61
     },
     {
      "x": 0.604,
      "y": 0.679,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 83
     }
    ],
    "fb-post": [
     {
      "x": 0.8895,
      "y": 0.053,
      "w": 0.085,
      "h": 0.1522,
      "accent": 1,
      "shape": "b2",
      "clearPx": 307
     },
     {
      "x": 0.892,
      "y": 0.8815,
      "w": 0.032,
      "h": 0.0573,
      "accent": 2,
      "shape": "round",
      "clearPx": 321
     }
    ],
    "fb-portrait": [
     {
      "x": 0.8575,
      "y": 0.02,
      "w": 0.085,
      "h": 0.0639,
      "accent": 1,
      "shape": "b2",
      "clearPx": 186
     },
     {
      "x": 0.0265,
      "y": 0.022,
      "w": 0.055,
      "h": 0.0414,
      "accent": 0,
      "shape": "b3",
      "clearPx": 223
     },
     {
      "x": 0.78,
      "y": 0.9472,
      "w": 0.032,
      "h": 0.0241,
      "accent": 2,
      "shape": "round",
      "clearPx": 374
     }
    ],
    "fb-story": [
     {
      "x": 0.8895,
      "y": 0.1901,
      "w": 0.085,
      "h": 0.0449,
      "accent": 1,
      "shape": "b2",
      "clearPx": 112
     },
     {
      "x": 0.0265,
      "y": 0.2045,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 127
     },
     {
      "x": 0.604,
      "y": 0.727,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 55
     }
    ],
    "tiktok": [
     {
      "x": 0.8575,
      "y": 0.0141,
      "w": 0.085,
      "h": 0.0449,
      "accent": 1,
      "shape": "b2",
      "clearPx": 386
     },
     {
      "x": 0.0265,
      "y": 0.0285,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 394
     },
     {
      "x": 0.604,
      "y": 0.663,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 134
     }
    ],
    "line-richmessage": [
     {
      "x": 0.8575,
      "y": 0.0275,
      "w": 0.085,
      "h": 0.0799,
      "accent": 1,
      "shape": "b2",
      "clearPx": 118
     },
     {
      "x": 0.0265,
      "y": 0.0325,
      "w": 0.055,
      "h": 0.0517,
      "accent": 0,
      "shape": "b3",
      "clearPx": 152
     },
     {
      "x": 0.684,
      "y": 0.944,
      "w": 0.032,
      "h": 0.0301,
      "accent": 2,
      "shape": "round",
      "clearPx": 291
     }
    ],
    "line-cover": [
     {
      "x": 0.8575,
      "y": 0.0337,
      "w": 0.085,
      "h": 0.0983,
      "accent": 1,
      "shape": "b2",
      "clearPx": 84
     },
     {
      "x": 0.0265,
      "y": 0.2662,
      "w": 0.055,
      "h": 0.0636,
      "accent": 0,
      "shape": "b3",
      "clearPx": 61
     },
     {
      "x": 0.636,
      "y": 0.9243,
      "w": 0.032,
      "h": 0.037,
      "accent": 2,
      "shape": "round",
      "clearPx": 211
     }
    ],
    "line-richmenu": [
     {
      "x": 0.604,
      "y": 0.9043,
      "w": 0.032,
      "h": 0.0446,
      "accent": 2,
      "shape": "round",
      "clearPx": 164
     }
    ]
   }
  },
  {
   "id": "corner-tr",
   "name": "Corner — top right",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok"
   ],
   "profile": {
    "largest": 0.18,
    "smallest": 0.022,
    "spread": 8.2
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.794,
      "y": 0.02,
      "w": 0.18,
      "h": 0.1354,
      "accent": 2,
      "shape": "b2",
      "clearPx": 90
     },
     {
      "x": 0.0315,
      "y": 0.034,
      "w": 0.045,
      "h": 0.0338,
      "accent": 1,
      "shape": "round",
      "clearPx": 219
     },
     {
      "x": 0.951,
      "y": 0.9532,
      "w": 0.022,
      "h": 0.0165,
      "accent": 0,
      "shape": "round",
      "clearPx": 398
     }
    ],
    "ig-square": [
     {
      "x": 0.0315,
      "y": 0.0295,
      "w": 0.045,
      "h": 0.0423,
      "accent": 1,
      "shape": "round",
      "clearPx": 175
     },
     {
      "x": 0.951,
      "y": 0.951,
      "w": 0.022,
      "h": 0.0207,
      "accent": 0,
      "shape": "round",
      "clearPx": 322
     }
    ],
    "ig-story": [
     {
      "x": 0.794,
      "y": 0.1534,
      "w": 0.18,
      "h": 0.0952,
      "accent": 2,
      "shape": "b2",
      "clearPx": 44
     },
     {
      "x": 0.0475,
      "y": 0.1993,
      "w": 0.045,
      "h": 0.0238,
      "accent": 1,
      "shape": "round",
      "clearPx": 132
     },
     {
      "x": 0.951,
      "y": 0.7158,
      "w": 0.022,
      "h": 0.0116,
      "accent": 0,
      "shape": "round",
      "clearPx": 102
     }
    ],
    "ig-reel": [
     {
      "x": 0.794,
      "y": 0.1374,
      "w": 0.18,
      "h": 0.0952,
      "accent": 2,
      "shape": "b2",
      "clearPx": 43
     },
     {
      "x": 0.0475,
      "y": 0.1833,
      "w": 0.045,
      "h": 0.0238,
      "accent": 1,
      "shape": "round",
      "clearPx": 132
     },
     {
      "x": 0.919,
      "y": 0.6678,
      "w": 0.022,
      "h": 0.0116,
      "accent": 0,
      "shape": "round",
      "clearPx": 115
     }
    ],
    "fb-post": [
     {
      "x": 0.794,
      "y": 0.0486,
      "w": 0.18,
      "h": 0.3223,
      "accent": 2,
      "shape": "b2",
      "clearPx": 192
     },
     {
      "x": 0.951,
      "y": 0.909,
      "w": 0.022,
      "h": 0.0394,
      "accent": 0,
      "shape": "round",
      "clearPx": 394
     }
    ],
    "fb-portrait": [
     {
      "x": 0.794,
      "y": 0.02,
      "w": 0.18,
      "h": 0.1354,
      "accent": 2,
      "shape": "b2",
      "clearPx": 90
     },
     {
      "x": 0.0315,
      "y": 0.034,
      "w": 0.045,
      "h": 0.0338,
      "accent": 1,
      "shape": "round",
      "clearPx": 219
     },
     {
      "x": 0.951,
      "y": 0.9532,
      "w": 0.022,
      "h": 0.0165,
      "accent": 0,
      "shape": "round",
      "clearPx": 398
     }
    ],
    "fb-story": [
     {
      "x": 0.794,
      "y": 0.1534,
      "w": 0.18,
      "h": 0.0952,
      "accent": 2,
      "shape": "b2",
      "clearPx": 44
     },
     {
      "x": 0.0475,
      "y": 0.1993,
      "w": 0.045,
      "h": 0.0238,
      "accent": 1,
      "shape": "round",
      "clearPx": 132
     },
     {
      "x": 0.951,
      "y": 0.7158,
      "w": 0.022,
      "h": 0.0116,
      "accent": 0,
      "shape": "round",
      "clearPx": 102
     }
    ],
    "tiktok": [
     {
      "x": 0.794,
      "y": 0.0254,
      "w": 0.18,
      "h": 0.0952,
      "accent": 2,
      "shape": "b2",
      "clearPx": 268
     },
     {
      "x": 0.0315,
      "y": 0.0233,
      "w": 0.045,
      "h": 0.0238,
      "accent": 1,
      "shape": "round",
      "clearPx": 415
     },
     {
      "x": 0.951,
      "y": 0.6518,
      "w": 0.022,
      "h": 0.0116,
      "accent": 0,
      "shape": "round",
      "clearPx": 163
     }
    ],
    "line-richmessage": [
     {
      "x": 0.0315,
      "y": 0.0295,
      "w": 0.045,
      "h": 0.0423,
      "accent": 1,
      "shape": "round",
      "clearPx": 166
     },
     {
      "x": 0.951,
      "y": 0.951,
      "w": 0.022,
      "h": 0.0207,
      "accent": 0,
      "shape": "round",
      "clearPx": 312
     }
    ],
    "line-cover": [
     {
      "x": 0.0315,
      "y": 0.0403,
      "w": 0.045,
      "h": 0.052,
      "accent": 1,
      "shape": "round",
      "clearPx": 136
     },
     {
      "x": 0.951,
      "y": 0.9325,
      "w": 0.022,
      "h": 0.0254,
      "accent": 0,
      "shape": "round",
      "clearPx": 239
     }
    ],
    "line-richmenu": [
     {
      "x": 0.919,
      "y": 0.9297,
      "w": 0.022,
      "h": 0.0307,
      "accent": 0,
      "shape": "round",
      "clearPx": 207
     }
    ]
   }
  },
  {
   "id": "corner-br",
   "name": "Corner — bottom right",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "fb-portrait",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.17,
    "smallest": 0.022,
    "spread": 7.7
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.793,
      "y": 0.846,
      "w": 0.17,
      "h": 0.1278,
      "accent": 1,
      "shape": "b3",
      "clearPx": 242
     },
     {
      "x": 0.049,
      "y": 0.034,
      "w": 0.05,
      "h": 0.0376,
      "accent": 2,
      "shape": "b1",
      "clearPx": 207
     },
     {
      "x": 0.951,
      "y": 0.0352,
      "w": 0.022,
      "h": 0.0165,
      "accent": 3,
      "shape": "round",
      "clearPx": 249
     }
    ],
    "ig-square": [
     {
      "x": 0.793,
      "y": 0.813,
      "w": 0.17,
      "h": 0.1598,
      "accent": 1,
      "shape": "b3",
      "clearPx": 158
     },
     {
      "x": 0.033,
      "y": 0.029,
      "w": 0.05,
      "h": 0.047,
      "accent": 2,
      "shape": "b1",
      "clearPx": 169
     },
     {
      "x": 0.951,
      "y": 0.033,
      "w": 0.022,
      "h": 0.0207,
      "accent": 3,
      "shape": "round",
      "clearPx": 206
     }
    ],
    "ig-story": [
     {
      "x": 0.033,
      "y": 0.1999,
      "w": 0.05,
      "h": 0.0264,
      "accent": 2,
      "shape": "b1",
      "clearPx": 133
     },
     {
      "x": 0.951,
      "y": 0.2138,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 159
     }
    ],
    "ig-reel": [
     {
      "x": 0.033,
      "y": 0.1839,
      "w": 0.05,
      "h": 0.0264,
      "accent": 2,
      "shape": "b1",
      "clearPx": 130
     },
     {
      "x": 0.951,
      "y": 0.1978,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 152
     }
    ],
    "fb-post": [
     {
      "x": 0.793,
      "y": 0.6401,
      "w": 0.17,
      "h": 0.3044,
      "accent": 1,
      "shape": "b3",
      "clearPx": 191
     },
     {
      "x": 0.951,
      "y": 0.279,
      "w": 0.022,
      "h": 0.0394,
      "accent": 3,
      "shape": "round",
      "clearPx": 381
     }
    ],
    "fb-portrait": [
     {
      "x": 0.793,
      "y": 0.846,
      "w": 0.17,
      "h": 0.1278,
      "accent": 1,
      "shape": "b3",
      "clearPx": 242
     },
     {
      "x": 0.049,
      "y": 0.034,
      "w": 0.05,
      "h": 0.0376,
      "accent": 2,
      "shape": "b1",
      "clearPx": 207
     },
     {
      "x": 0.951,
      "y": 0.0352,
      "w": 0.022,
      "h": 0.0165,
      "accent": 3,
      "shape": "round",
      "clearPx": 249
     }
    ],
    "fb-story": [
     {
      "x": 0.033,
      "y": 0.1999,
      "w": 0.05,
      "h": 0.0264,
      "accent": 2,
      "shape": "b1",
      "clearPx": 133
     },
     {
      "x": 0.951,
      "y": 0.2138,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 159
     }
    ],
    "tiktok": [
     {
      "x": 0.793,
      "y": 0.6262,
      "w": 0.17,
      "h": 0.0899,
      "accent": 1,
      "shape": "b3",
      "clearPx": 65
     },
     {
      "x": 0.049,
      "y": 0.0239,
      "w": 0.05,
      "h": 0.0264,
      "accent": 2,
      "shape": "b1",
      "clearPx": 405
     },
     {
      "x": 0.951,
      "y": 0.0218,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 446
     }
    ],
    "line-richmessage": [
     {
      "x": 0.793,
      "y": 0.813,
      "w": 0.17,
      "h": 0.1598,
      "accent": 1,
      "shape": "b3",
      "clearPx": 155
     },
     {
      "x": 0.049,
      "y": 0.029,
      "w": 0.05,
      "h": 0.047,
      "accent": 2,
      "shape": "b1",
      "clearPx": 155
     },
     {
      "x": 0.951,
      "y": 0.033,
      "w": 0.022,
      "h": 0.0207,
      "accent": 3,
      "shape": "round",
      "clearPx": 195
     }
    ],
    "line-cover": [
     {
      "x": 0.793,
      "y": 0.7614,
      "w": 0.17,
      "h": 0.1966,
      "accent": 1,
      "shape": "b3",
      "clearPx": 68
     },
     {
      "x": 0.065,
      "y": 0.0392,
      "w": 0.05,
      "h": 0.0578,
      "accent": 2,
      "shape": "b1",
      "clearPx": 117
     },
     {
      "x": 0.951,
      "y": 0.0305,
      "w": 0.022,
      "h": 0.0254,
      "accent": 3,
      "shape": "round",
      "clearPx": 179
     }
    ]
   }
  },
  {
   "id": "drift-diagonal",
   "name": "Drift — diagonal",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage"
   ],
   "profile": {
    "largest": 0.15,
    "smallest": 0.03,
    "spread": 5
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.027,
      "y": 0.032,
      "w": 0.15,
      "h": 0.1128,
      "accent": 0,
      "shape": "b1",
      "clearPx": 104
     },
     {
      "x": 0.9,
      "y": 0.024,
      "w": 0.06,
      "h": 0.0451,
      "accent": 2,
      "shape": "b2",
      "clearPx": 210
     },
     {
      "x": 0.781,
      "y": 0.948,
      "w": 0.03,
      "h": 0.0226,
      "accent": 1,
      "shape": "round",
      "clearPx": 375
     }
    ],
    "ig-square": [
     {
      "x": 0.027,
      "y": 0.033,
      "w": 0.15,
      "h": 0.141,
      "accent": 0,
      "shape": "b1",
      "clearPx": 52
     },
     {
      "x": 0.9,
      "y": 0.034,
      "w": 0.06,
      "h": 0.0564,
      "accent": 2,
      "shape": "b2",
      "clearPx": 148
     },
     {
      "x": 0.717,
      "y": 0.945,
      "w": 0.03,
      "h": 0.0282,
      "accent": 1,
      "shape": "round",
      "clearPx": 300
     }
    ],
    "ig-story": [
     {
      "x": 0.027,
      "y": 0.1618,
      "w": 0.15,
      "h": 0.0793,
      "accent": 0,
      "shape": "b1",
      "clearPx": 60
     },
     {
      "x": 0.9,
      "y": 0.2071,
      "w": 0.06,
      "h": 0.0317,
      "accent": 2,
      "shape": "b2",
      "clearPx": 109
     },
     {
      "x": 0.605,
      "y": 0.7276,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 56
     }
    ],
    "ig-reel": [
     {
      "x": 0.027,
      "y": 0.1458,
      "w": 0.15,
      "h": 0.0793,
      "accent": 0,
      "shape": "b1",
      "clearPx": 59
     },
     {
      "x": 0.9,
      "y": 0.3031,
      "w": 0.06,
      "h": 0.0317,
      "accent": 2,
      "shape": "b2",
      "clearPx": 42
     },
     {
      "x": 0.605,
      "y": 0.6796,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 84
     }
    ],
    "fb-post": [
     {
      "x": 0.9,
      "y": 0.2629,
      "w": 0.06,
      "h": 0.1074,
      "accent": 2,
      "shape": "b2",
      "clearPx": 320
     },
     {
      "x": 0.893,
      "y": 0.8994,
      "w": 0.03,
      "h": 0.0537,
      "accent": 1,
      "shape": "round",
      "clearPx": 326
     }
    ],
    "fb-portrait": [
     {
      "x": 0.027,
      "y": 0.032,
      "w": 0.15,
      "h": 0.1128,
      "accent": 0,
      "shape": "b1",
      "clearPx": 104
     },
     {
      "x": 0.9,
      "y": 0.024,
      "w": 0.06,
      "h": 0.0451,
      "accent": 2,
      "shape": "b2",
      "clearPx": 210
     },
     {
      "x": 0.781,
      "y": 0.948,
      "w": 0.03,
      "h": 0.0226,
      "accent": 1,
      "shape": "round",
      "clearPx": 375
     }
    ],
    "fb-story": [
     {
      "x": 0.027,
      "y": 0.1618,
      "w": 0.15,
      "h": 0.0793,
      "accent": 0,
      "shape": "b1",
      "clearPx": 60
     },
     {
      "x": 0.9,
      "y": 0.2071,
      "w": 0.06,
      "h": 0.0317,
      "accent": 2,
      "shape": "b2",
      "clearPx": 109
     },
     {
      "x": 0.605,
      "y": 0.7276,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 56
     }
    ],
    "tiktok": [
     {
      "x": 0.027,
      "y": 0.0178,
      "w": 0.15,
      "h": 0.0793,
      "accent": 0,
      "shape": "b1",
      "clearPx": 313
     },
     {
      "x": 0.9,
      "y": 0.0151,
      "w": 0.06,
      "h": 0.0317,
      "accent": 2,
      "shape": "b2",
      "clearPx": 412
     },
     {
      "x": 0.605,
      "y": 0.6636,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 135
     }
    ],
    "line-richmessage": [
     {
      "x": 0.027,
      "y": 0.033,
      "w": 0.15,
      "h": 0.141,
      "accent": 0,
      "shape": "b1",
      "clearPx": 49
     },
     {
      "x": 0.9,
      "y": 0.034,
      "w": 0.06,
      "h": 0.0564,
      "accent": 2,
      "shape": "b2",
      "clearPx": 140
     },
     {
      "x": 0.685,
      "y": 0.945,
      "w": 0.03,
      "h": 0.0282,
      "accent": 1,
      "shape": "round",
      "clearPx": 292
     }
    ],
    "line-cover": [
     {
      "x": 0.9,
      "y": 0.2831,
      "w": 0.06,
      "h": 0.0694,
      "accent": 2,
      "shape": "b2",
      "clearPx": 42
     },
     {
      "x": 0.637,
      "y": 0.9255,
      "w": 0.03,
      "h": 0.0347,
      "accent": 1,
      "shape": "round",
      "clearPx": 212
     }
    ],
    "line-richmenu": [
     {
      "x": 0.605,
      "y": 0.9218,
      "w": 0.03,
      "h": 0.0418,
      "accent": 1,
      "shape": "round",
      "clearPx": 194
     }
    ]
   }
  },
  {
   "id": "pebbles",
   "name": "Pebbles",
   "requested": 5,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "fb-post",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.042,
    "smallest": 0.022,
    "spread": 1.9
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.027,
      "y": 0.0312,
      "w": 0.042,
      "h": 0.0316,
      "accent": 2,
      "shape": "round",
      "clearPx": 228
     },
     {
      "x": 0.931,
      "y": 0.02,
      "w": 0.03,
      "h": 0.0226,
      "accent": 1,
      "shape": "round",
      "clearPx": 254
     },
     {
      "x": 0.93,
      "y": 0.9496,
      "w": 0.036,
      "h": 0.0271,
      "accent": 0,
      "shape": "round",
      "clearPx": 389
     },
     {
      "x": 0.053,
      "y": 0.7552,
      "w": 0.022,
      "h": 0.0165,
      "accent": 3,
      "shape": "round",
      "clearPx": 138
     },
     {
      "x": 0.537,
      "y": 0.0236,
      "w": 0.026,
      "h": 0.0196,
      "accent": 4,
      "shape": "round",
      "clearPx": 241
     }
    ],
    "ig-square": [
     {
      "x": 0.027,
      "y": 0.027,
      "w": 0.042,
      "h": 0.0395,
      "accent": 2,
      "shape": "round",
      "clearPx": 184
     },
     {
      "x": 0.931,
      "y": 0.033,
      "w": 0.03,
      "h": 0.0282,
      "accent": 1,
      "shape": "round",
      "clearPx": 189
     },
     {
      "x": 0.93,
      "y": 0.93,
      "w": 0.036,
      "h": 0.0338,
      "accent": 0,
      "shape": "round",
      "clearPx": 293
     },
     {
      "x": 0.037,
      "y": 0.721,
      "w": 0.022,
      "h": 0.0207,
      "accent": 3,
      "shape": "round",
      "clearPx": 104
     },
     {
      "x": 0.537,
      "y": 0.037,
      "w": 0.026,
      "h": 0.0244,
      "accent": 4,
      "shape": "round",
      "clearPx": 173
     }
    ],
    "ig-story": [
     {
      "x": 0.059,
      "y": 0.1962,
      "w": 0.042,
      "h": 0.0222,
      "accent": 2,
      "shape": "round",
      "clearPx": 126
     },
     {
      "x": 0.915,
      "y": 0.1996,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 133
     },
     {
      "x": 0.93,
      "y": 0.7139,
      "w": 0.036,
      "h": 0.019,
      "accent": 0,
      "shape": "round",
      "clearPx": 80
     },
     {
      "x": 0.037,
      "y": 0.6618,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 86
     },
     {
      "x": 0.537,
      "y": 0.2027,
      "w": 0.026,
      "h": 0.0137,
      "accent": 4,
      "shape": "round",
      "clearPx": 139
     }
    ],
    "ig-reel": [
     {
      "x": 0.059,
      "y": 0.1802,
      "w": 0.042,
      "h": 0.0222,
      "accent": 2,
      "shape": "round",
      "clearPx": 125
     },
     {
      "x": 0.915,
      "y": 0.1836,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 132
     },
     {
      "x": 0.898,
      "y": 0.6659,
      "w": 0.036,
      "h": 0.019,
      "accent": 0,
      "shape": "round",
      "clearPx": 104
     },
     {
      "x": 0.537,
      "y": 0.1867,
      "w": 0.026,
      "h": 0.0137,
      "accent": 4,
      "shape": "round",
      "clearPx": 135
     }
    ],
    "fb-post": [
     {
      "x": 0.027,
      "y": 0.056,
      "w": 0.042,
      "h": 0.0752,
      "accent": 2,
      "shape": "round",
      "clearPx": 46
     },
     {
      "x": 0.931,
      "y": 0.1314,
      "w": 0.03,
      "h": 0.0537,
      "accent": 1,
      "shape": "round",
      "clearPx": 357
     },
     {
      "x": 0.93,
      "y": 0.8817,
      "w": 0.036,
      "h": 0.0645,
      "accent": 0,
      "shape": "round",
      "clearPx": 366
     },
     {
      "x": 0.437,
      "y": 0.903,
      "w": 0.022,
      "h": 0.0394,
      "accent": 3,
      "shape": "round",
      "clearPx": 54
     },
     {
      "x": 0.825,
      "y": 0.0572,
      "w": 0.026,
      "h": 0.0466,
      "accent": 4,
      "shape": "round",
      "clearPx": 236
     }
    ],
    "fb-portrait": [
     {
      "x": 0.027,
      "y": 0.0312,
      "w": 0.042,
      "h": 0.0316,
      "accent": 2,
      "shape": "round",
      "clearPx": 228
     },
     {
      "x": 0.931,
      "y": 0.02,
      "w": 0.03,
      "h": 0.0226,
      "accent": 1,
      "shape": "round",
      "clearPx": 254
     },
     {
      "x": 0.93,
      "y": 0.9496,
      "w": 0.036,
      "h": 0.0271,
      "accent": 0,
      "shape": "round",
      "clearPx": 389
     },
     {
      "x": 0.053,
      "y": 0.7552,
      "w": 0.022,
      "h": 0.0165,
      "accent": 3,
      "shape": "round",
      "clearPx": 138
     },
     {
      "x": 0.537,
      "y": 0.0236,
      "w": 0.026,
      "h": 0.0196,
      "accent": 4,
      "shape": "round",
      "clearPx": 241
     }
    ],
    "fb-story": [
     {
      "x": 0.059,
      "y": 0.1962,
      "w": 0.042,
      "h": 0.0222,
      "accent": 2,
      "shape": "round",
      "clearPx": 126
     },
     {
      "x": 0.915,
      "y": 0.1996,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 133
     },
     {
      "x": 0.93,
      "y": 0.7139,
      "w": 0.036,
      "h": 0.019,
      "accent": 0,
      "shape": "round",
      "clearPx": 80
     },
     {
      "x": 0.037,
      "y": 0.6618,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 86
     },
     {
      "x": 0.537,
      "y": 0.2027,
      "w": 0.026,
      "h": 0.0137,
      "accent": 4,
      "shape": "round",
      "clearPx": 139
     }
    ],
    "tiktok": [
     {
      "x": 0.027,
      "y": 0.0202,
      "w": 0.042,
      "h": 0.0222,
      "accent": 2,
      "shape": "round",
      "clearPx": 425
     },
     {
      "x": 0.931,
      "y": 0.0236,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 430
     },
     {
      "x": 0.93,
      "y": 0.6499,
      "w": 0.036,
      "h": 0.019,
      "accent": 0,
      "shape": "round",
      "clearPx": 147
     },
     {
      "x": 0.149,
      "y": 0.7098,
      "w": 0.022,
      "h": 0.0116,
      "accent": 3,
      "shape": "round",
      "clearPx": 54
     },
     {
      "x": 0.537,
      "y": 0.0267,
      "w": 0.026,
      "h": 0.0137,
      "accent": 4,
      "shape": "round",
      "clearPx": 422
     }
    ],
    "line-richmessage": [
     {
      "x": 0.027,
      "y": 0.027,
      "w": 0.042,
      "h": 0.0395,
      "accent": 2,
      "shape": "round",
      "clearPx": 174
     },
     {
      "x": 0.931,
      "y": 0.033,
      "w": 0.03,
      "h": 0.0282,
      "accent": 1,
      "shape": "round",
      "clearPx": 179
     },
     {
      "x": 0.898,
      "y": 0.93,
      "w": 0.036,
      "h": 0.0338,
      "accent": 0,
      "shape": "round",
      "clearPx": 279
     },
     {
      "x": 0.149,
      "y": 0.945,
      "w": 0.022,
      "h": 0.0207,
      "accent": 3,
      "shape": "round",
      "clearPx": 46
     },
     {
      "x": 0.537,
      "y": 0.037,
      "w": 0.026,
      "h": 0.0244,
      "accent": 4,
      "shape": "round",
      "clearPx": 166
     }
    ],
    "line-cover": [
     {
      "x": 0.027,
      "y": 0.0382,
      "w": 0.042,
      "h": 0.0486,
      "accent": 2,
      "shape": "round",
      "clearPx": 145
     },
     {
      "x": 0.931,
      "y": 0.0455,
      "w": 0.03,
      "h": 0.0347,
      "accent": 1,
      "shape": "round",
      "clearPx": 149
     },
     {
      "x": 0.93,
      "y": 0.9259,
      "w": 0.036,
      "h": 0.0416,
      "accent": 0,
      "shape": "round",
      "clearPx": 225
     },
     {
      "x": 0.149,
      "y": 0.9425,
      "w": 0.022,
      "h": 0.0254,
      "accent": 3,
      "shape": "round",
      "clearPx": 45
     },
     {
      "x": 0.537,
      "y": 0.034,
      "w": 0.026,
      "h": 0.0301,
      "accent": 4,
      "shape": "round",
      "clearPx": 143
     }
    ],
    "line-richmenu": [
     {
      "x": 0.882,
      "y": 0.9053,
      "w": 0.036,
      "h": 0.0502,
      "accent": 0,
      "shape": "round",
      "clearPx": 166
     },
     {
      "x": 0.389,
      "y": 0.9237,
      "w": 0.022,
      "h": 0.0307,
      "accent": 3,
      "shape": "round",
      "clearPx": 197
     }
    ]
   }
  },
  {
   "id": "edge-left",
   "name": "Left edge",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.11,
    "smallest": 0.025,
    "spread": 4.4
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.037,
      "y": 0.028,
      "w": 0.11,
      "h": 0.0827,
      "accent": 2,
      "shape": "b2",
      "clearPx": 150
     },
     {
      "x": 0.025,
      "y": 0.552,
      "w": 0.07,
      "h": 0.0526,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.958,
      "w": 0.025,
      "h": 0.0188,
      "accent": 1,
      "shape": "round",
      "clearPx": 403
     }
    ],
    "ig-square": [
     {
      "x": 0.037,
      "y": 0.033,
      "w": 0.11,
      "h": 0.1034,
      "accent": 2,
      "shape": "b2",
      "clearPx": 92
     },
     {
      "x": 0.025,
      "y": 0.545,
      "w": 0.07,
      "h": 0.0658,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.9395,
      "w": 0.025,
      "h": 0.0235,
      "accent": 1,
      "shape": "round",
      "clearPx": 307
     }
    ],
    "ig-story": [
     {
      "x": 0.037,
      "y": 0.1851,
      "w": 0.11,
      "h": 0.0582,
      "accent": 2,
      "shape": "b2",
      "clearPx": 93
     },
     {
      "x": 0.025,
      "y": 0.5603,
      "w": 0.07,
      "h": 0.037,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.721,
      "w": 0.025,
      "h": 0.0132,
      "accent": 1,
      "shape": "round",
      "clearPx": 90
     }
    ],
    "ig-reel": [
     {
      "x": 0.037,
      "y": 0.1691,
      "w": 0.11,
      "h": 0.0582,
      "accent": 2,
      "shape": "b2",
      "clearPx": 83
     },
     {
      "x": 0.025,
      "y": 0.5603,
      "w": 0.07,
      "h": 0.037,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.657,
      "w": 0.025,
      "h": 0.0132,
      "accent": 1,
      "shape": "round",
      "clearPx": 120
     }
    ],
    "fb-post": [
     {
      "x": 0.9435,
      "y": 0.8962,
      "w": 0.025,
      "h": 0.0448,
      "accent": 1,
      "shape": "round",
      "clearPx": 384
     }
    ],
    "fb-portrait": [
     {
      "x": 0.037,
      "y": 0.028,
      "w": 0.11,
      "h": 0.0827,
      "accent": 2,
      "shape": "b2",
      "clearPx": 150
     },
     {
      "x": 0.025,
      "y": 0.552,
      "w": 0.07,
      "h": 0.0526,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.958,
      "w": 0.025,
      "h": 0.0188,
      "accent": 1,
      "shape": "round",
      "clearPx": 403
     }
    ],
    "fb-story": [
     {
      "x": 0.037,
      "y": 0.1851,
      "w": 0.11,
      "h": 0.0582,
      "accent": 2,
      "shape": "b2",
      "clearPx": 93
     },
     {
      "x": 0.025,
      "y": 0.5603,
      "w": 0.07,
      "h": 0.037,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.721,
      "w": 0.025,
      "h": 0.0132,
      "accent": 1,
      "shape": "round",
      "clearPx": 90
     }
    ],
    "tiktok": [
     {
      "x": 0.037,
      "y": 0.0251,
      "w": 0.11,
      "h": 0.0582,
      "accent": 2,
      "shape": "b2",
      "clearPx": 340
     },
     {
      "x": 0.025,
      "y": 0.5603,
      "w": 0.07,
      "h": 0.037,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9275,
      "y": 0.657,
      "w": 0.025,
      "h": 0.0132,
      "accent": 1,
      "shape": "round",
      "clearPx": 153
     }
    ],
    "line-richmessage": [
     {
      "x": 0.037,
      "y": 0.033,
      "w": 0.11,
      "h": 0.1034,
      "accent": 2,
      "shape": "b2",
      "clearPx": 88
     },
     {
      "x": 0.025,
      "y": 0.545,
      "w": 0.07,
      "h": 0.0658,
      "accent": 0,
      "shape": "b3",
      "clearPx": 41
     },
     {
      "x": 0.9435,
      "y": 0.9395,
      "w": 0.025,
      "h": 0.0235,
      "accent": 1,
      "shape": "round",
      "clearPx": 298
     }
    ],
    "line-cover": [
     {
      "x": 0.037,
      "y": 0.0363,
      "w": 0.11,
      "h": 0.1272,
      "accent": 2,
      "shape": "b2",
      "clearPx": 56
     },
     {
      "x": 0.025,
      "y": 0.5369,
      "w": 0.07,
      "h": 0.0809,
      "accent": 0,
      "shape": "b3",
      "clearPx": 47
     },
     {
      "x": 0.9435,
      "y": 0.9366,
      "w": 0.025,
      "h": 0.0289,
      "accent": 1,
      "shape": "round",
      "clearPx": 239
     }
    ],
    "line-richmenu": [
     {
      "x": 0.9275,
      "y": 0.9175,
      "w": 0.025,
      "h": 0.0348,
      "accent": 1,
      "shape": "round",
      "clearPx": 186
     }
    ]
   }
  },
  {
   "id": "edge-right",
   "name": "Right edge",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-reel",
    "fb-post",
    "fb-portrait",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.12,
    "smallest": 0.03,
    "spread": 4
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.848,
      "y": 0.02,
      "w": 0.12,
      "h": 0.0902,
      "accent": 1,
      "shape": "b3",
      "clearPx": 151
     },
     {
      "x": 0.8865,
      "y": 0.878,
      "w": 0.075,
      "h": 0.0564,
      "accent": 2,
      "shape": "b1",
      "clearPx": 286
     },
     {
      "x": 0.039,
      "y": 0.032,
      "w": 0.03,
      "h": 0.0226,
      "accent": 0,
      "shape": "round",
      "clearPx": 238
     }
    ],
    "ig-square": [
     {
      "x": 0.848,
      "y": 0.04,
      "w": 0.12,
      "h": 0.1128,
      "accent": 1,
      "shape": "b3",
      "clearPx": 74
     },
     {
      "x": 0.8865,
      "y": 0.8705,
      "w": 0.075,
      "h": 0.0705,
      "accent": 2,
      "shape": "b1",
      "clearPx": 221
     },
     {
      "x": 0.039,
      "y": 0.029,
      "w": 0.03,
      "h": 0.0282,
      "accent": 0,
      "shape": "round",
      "clearPx": 193
     }
    ],
    "ig-story": [
     {
      "x": 0.848,
      "y": 0.1782,
      "w": 0.12,
      "h": 0.0634,
      "accent": 1,
      "shape": "b3",
      "clearPx": 92
     },
     {
      "x": 0.039,
      "y": 0.2116,
      "w": 0.03,
      "h": 0.0159,
      "accent": 0,
      "shape": "round",
      "clearPx": 144
     }
    ],
    "ig-reel": [
     {
      "x": 0.848,
      "y": 0.1622,
      "w": 0.12,
      "h": 0.0634,
      "accent": 1,
      "shape": "b3",
      "clearPx": 86
     },
     {
      "x": 0.8865,
      "y": 0.6469,
      "w": 0.075,
      "h": 0.0397,
      "accent": 2,
      "shape": "b1",
      "clearPx": 67
     },
     {
      "x": 0.039,
      "y": 0.1956,
      "w": 0.03,
      "h": 0.0159,
      "accent": 0,
      "shape": "round",
      "clearPx": 136
     }
    ],
    "fb-post": [
     {
      "x": 0.848,
      "y": 0.0657,
      "w": 0.12,
      "h": 0.2149,
      "accent": 1,
      "shape": "b3",
      "clearPx": 257
     },
     {
      "x": 0.8865,
      "y": 0.5486,
      "w": 0.075,
      "h": 0.1343,
      "accent": 2,
      "shape": "b1",
      "clearPx": 303
     },
     {
      "x": 0.039,
      "y": 0.0474,
      "w": 0.03,
      "h": 0.0537,
      "accent": 0,
      "shape": "round",
      "clearPx": 62
     }
    ],
    "fb-portrait": [
     {
      "x": 0.848,
      "y": 0.02,
      "w": 0.12,
      "h": 0.0902,
      "accent": 1,
      "shape": "b3",
      "clearPx": 151
     },
     {
      "x": 0.8865,
      "y": 0.878,
      "w": 0.075,
      "h": 0.0564,
      "accent": 2,
      "shape": "b1",
      "clearPx": 286
     },
     {
      "x": 0.039,
      "y": 0.032,
      "w": 0.03,
      "h": 0.0226,
      "accent": 0,
      "shape": "round",
      "clearPx": 238
     }
    ],
    "fb-story": [
     {
      "x": 0.848,
      "y": 0.1782,
      "w": 0.12,
      "h": 0.0634,
      "accent": 1,
      "shape": "b3",
      "clearPx": 92
     },
     {
      "x": 0.039,
      "y": 0.2116,
      "w": 0.03,
      "h": 0.0159,
      "accent": 0,
      "shape": "round",
      "clearPx": 144
     }
    ],
    "tiktok": [
     {
      "x": 0.848,
      "y": 0.0182,
      "w": 0.12,
      "h": 0.0634,
      "accent": 1,
      "shape": "b3",
      "clearPx": 343
     },
     {
      "x": 0.8865,
      "y": 0.6469,
      "w": 0.075,
      "h": 0.0397,
      "accent": 2,
      "shape": "b1",
      "clearPx": 121
     },
     {
      "x": 0.039,
      "y": 0.0196,
      "w": 0.03,
      "h": 0.0159,
      "accent": 0,
      "shape": "round",
      "clearPx": 438
     }
    ],
    "line-richmessage": [
     {
      "x": 0.848,
      "y": 0.04,
      "w": 0.12,
      "h": 0.1128,
      "accent": 1,
      "shape": "b3",
      "clearPx": 71
     },
     {
      "x": 0.8865,
      "y": 0.8705,
      "w": 0.075,
      "h": 0.0705,
      "accent": 2,
      "shape": "b1",
      "clearPx": 216
     },
     {
      "x": 0.039,
      "y": 0.029,
      "w": 0.03,
      "h": 0.0282,
      "accent": 0,
      "shape": "round",
      "clearPx": 183
     }
    ],
    "line-cover": [
     {
      "x": 0.848,
      "y": 0.0422,
      "w": 0.12,
      "h": 0.1388,
      "accent": 1,
      "shape": "b3",
      "clearPx": 41
     },
     {
      "x": 0.8865,
      "y": 0.8619,
      "w": 0.075,
      "h": 0.0867,
      "accent": 2,
      "shape": "b1",
      "clearPx": 159
     },
     {
      "x": 0.039,
      "y": 0.0415,
      "w": 0.03,
      "h": 0.0347,
      "accent": 0,
      "shape": "round",
      "clearPx": 152
     }
    ]
   }
  },
  {
   "id": "top-band",
   "name": "Top band",
   "requested": 3,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.1,
    "smallest": 0.05,
    "spread": 2
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.09,
      "y": 0.02,
      "w": 0.1,
      "h": 0.0752,
      "accent": 0,
      "shape": "b1",
      "clearPx": 171
     },
     {
      "x": 0.475,
      "y": 0.03,
      "w": 0.05,
      "h": 0.0376,
      "accent": 1,
      "shape": "round",
      "clearPx": 208
     },
     {
      "x": 0.8325,
      "y": 0.024,
      "w": 0.075,
      "h": 0.0564,
      "accent": 2,
      "shape": "b2",
      "clearPx": 191
     }
    ],
    "ig-square": [
     {
      "x": 0.09,
      "y": 0.026,
      "w": 0.1,
      "h": 0.094,
      "accent": 0,
      "shape": "b1",
      "clearPx": 110
     },
     {
      "x": 0.475,
      "y": 0.025,
      "w": 0.05,
      "h": 0.047,
      "accent": 1,
      "shape": "round",
      "clearPx": 162
     },
     {
      "x": 0.8325,
      "y": 0.0325,
      "w": 0.075,
      "h": 0.0705,
      "accent": 2,
      "shape": "b2",
      "clearPx": 128
     }
    ],
    "ig-story": [
     {
      "x": 0.09,
      "y": 0.1759,
      "w": 0.1,
      "h": 0.0529,
      "accent": 0,
      "shape": "b1",
      "clearPx": 87
     },
     {
      "x": 0.475,
      "y": 0.1959,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "round",
      "clearPx": 126
     },
     {
      "x": 0.8965,
      "y": 0.1929,
      "w": 0.075,
      "h": 0.0397,
      "accent": 2,
      "shape": "b2",
      "clearPx": 119
     }
    ],
    "ig-reel": [
     {
      "x": 0.09,
      "y": 0.1599,
      "w": 0.1,
      "h": 0.0529,
      "accent": 0,
      "shape": "b1",
      "clearPx": 86
     },
     {
      "x": 0.475,
      "y": 0.1799,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "round",
      "clearPx": 123
     },
     {
      "x": 0.8965,
      "y": 0.1769,
      "w": 0.075,
      "h": 0.0397,
      "accent": 2,
      "shape": "b2",
      "clearPx": 110
     }
    ],
    "fb-post": [
     {
      "x": 0.763,
      "y": 0.0504,
      "w": 0.05,
      "h": 0.0895,
      "accent": 1,
      "shape": "round",
      "clearPx": 158
     },
     {
      "x": 0.8965,
      "y": 0.0466,
      "w": 0.075,
      "h": 0.1343,
      "accent": 2,
      "shape": "b2",
      "clearPx": 315
     }
    ],
    "fb-portrait": [
     {
      "x": 0.09,
      "y": 0.02,
      "w": 0.1,
      "h": 0.0752,
      "accent": 0,
      "shape": "b1",
      "clearPx": 171
     },
     {
      "x": 0.475,
      "y": 0.03,
      "w": 0.05,
      "h": 0.0376,
      "accent": 1,
      "shape": "round",
      "clearPx": 208
     },
     {
      "x": 0.8325,
      "y": 0.024,
      "w": 0.075,
      "h": 0.0564,
      "accent": 2,
      "shape": "b2",
      "clearPx": 191
     }
    ],
    "fb-story": [
     {
      "x": 0.09,
      "y": 0.1759,
      "w": 0.1,
      "h": 0.0529,
      "accent": 0,
      "shape": "b1",
      "clearPx": 87
     },
     {
      "x": 0.475,
      "y": 0.1959,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "round",
      "clearPx": 126
     },
     {
      "x": 0.8965,
      "y": 0.1929,
      "w": 0.075,
      "h": 0.0397,
      "accent": 2,
      "shape": "b2",
      "clearPx": 119
     }
    ],
    "tiktok": [
     {
      "x": 0.09,
      "y": 0.0159,
      "w": 0.1,
      "h": 0.0529,
      "accent": 0,
      "shape": "b1",
      "clearPx": 368
     },
     {
      "x": 0.475,
      "y": 0.0199,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "round",
      "clearPx": 410
     },
     {
      "x": 0.8325,
      "y": 0.0169,
      "w": 0.075,
      "h": 0.0397,
      "accent": 2,
      "shape": "b2",
      "clearPx": 391
     }
    ],
    "line-richmessage": [
     {
      "x": 0.09,
      "y": 0.026,
      "w": 0.1,
      "h": 0.094,
      "accent": 0,
      "shape": "b1",
      "clearPx": 105
     },
     {
      "x": 0.475,
      "y": 0.025,
      "w": 0.05,
      "h": 0.047,
      "accent": 1,
      "shape": "round",
      "clearPx": 155
     },
     {
      "x": 0.8325,
      "y": 0.0325,
      "w": 0.075,
      "h": 0.0705,
      "accent": 2,
      "shape": "b2",
      "clearPx": 122
     }
    ],
    "line-cover": [
     {
      "x": 0.09,
      "y": 0.0305,
      "w": 0.1,
      "h": 0.1156,
      "accent": 0,
      "shape": "b1",
      "clearPx": 71
     },
     {
      "x": 0.475,
      "y": 0.0352,
      "w": 0.05,
      "h": 0.0578,
      "accent": 1,
      "shape": "round",
      "clearPx": 118
     },
     {
      "x": 0.8325,
      "y": 0.0399,
      "w": 0.075,
      "h": 0.0867,
      "accent": 2,
      "shape": "b2",
      "clearPx": 88
     }
    ]
   }
  },
  {
   "id": "twin-medium",
   "name": "Twin medium",
   "requested": 2,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.095,
    "smallest": 0.068,
    "spread": 1.4
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.0425,
      "y": 0.02,
      "w": 0.095,
      "h": 0.0714,
      "accent": 3,
      "shape": "b3",
      "clearPx": 176
     },
     {
      "x": 0.892,
      "y": 0.9148,
      "w": 0.068,
      "h": 0.0511,
      "accent": 0,
      "shape": "b2",
      "clearPx": 336
     }
    ],
    "ig-square": [
     {
      "x": 0.0425,
      "y": 0.0265,
      "w": 0.095,
      "h": 0.0893,
      "accent": 3,
      "shape": "b3",
      "clearPx": 114
     },
     {
      "x": 0.892,
      "y": 0.908,
      "w": 0.068,
      "h": 0.0639,
      "accent": 0,
      "shape": "b2",
      "clearPx": 262
     }
    ],
    "ig-story": [
     {
      "x": 0.0265,
      "y": 0.1913,
      "w": 0.095,
      "h": 0.0502,
      "accent": 3,
      "shape": "b3",
      "clearPx": 98
     },
     {
      "x": 0.892,
      "y": 0.7149,
      "w": 0.068,
      "h": 0.036,
      "accent": 0,
      "shape": "b2",
      "clearPx": 46
     }
    ],
    "ig-reel": [
     {
      "x": 0.0425,
      "y": 0.1593,
      "w": 0.095,
      "h": 0.0502,
      "accent": 3,
      "shape": "b3",
      "clearPx": 85
     },
     {
      "x": 0.876,
      "y": 0.6669,
      "w": 0.068,
      "h": 0.036,
      "accent": 0,
      "shape": "b2",
      "clearPx": 70
     }
    ],
    "fb-post": [
     {
      "x": 0.892,
      "y": 0.8292,
      "w": 0.068,
      "h": 0.1218,
      "accent": 0,
      "shape": "b2",
      "clearPx": 314
     }
    ],
    "fb-portrait": [
     {
      "x": 0.0425,
      "y": 0.02,
      "w": 0.095,
      "h": 0.0714,
      "accent": 3,
      "shape": "b3",
      "clearPx": 176
     },
     {
      "x": 0.892,
      "y": 0.9148,
      "w": 0.068,
      "h": 0.0511,
      "accent": 0,
      "shape": "b2",
      "clearPx": 336
     }
    ],
    "fb-story": [
     {
      "x": 0.0265,
      "y": 0.1913,
      "w": 0.095,
      "h": 0.0502,
      "accent": 3,
      "shape": "b3",
      "clearPx": 98
     },
     {
      "x": 0.892,
      "y": 0.7149,
      "w": 0.068,
      "h": 0.036,
      "accent": 0,
      "shape": "b2",
      "clearPx": 46
     }
    ],
    "tiktok": [
     {
      "x": 0.0425,
      "y": 0.0153,
      "w": 0.095,
      "h": 0.0502,
      "accent": 3,
      "shape": "b3",
      "clearPx": 374
     },
     {
      "x": 0.876,
      "y": 0.6509,
      "w": 0.068,
      "h": 0.036,
      "accent": 0,
      "shape": "b2",
      "clearPx": 121
     }
    ],
    "line-richmessage": [
     {
      "x": 0.0425,
      "y": 0.0265,
      "w": 0.095,
      "h": 0.0893,
      "accent": 3,
      "shape": "b3",
      "clearPx": 109
     },
     {
      "x": 0.876,
      "y": 0.908,
      "w": 0.068,
      "h": 0.0639,
      "accent": 0,
      "shape": "b2",
      "clearPx": 254
     }
    ],
    "line-cover": [
     {
      "x": 0.0425,
      "y": 0.0316,
      "w": 0.095,
      "h": 0.1098,
      "accent": 3,
      "shape": "b3",
      "clearPx": 75
     },
     {
      "x": 0.876,
      "y": 0.8842,
      "w": 0.068,
      "h": 0.0786,
      "accent": 0,
      "shape": "b2",
      "clearPx": 177
     }
    ]
   }
  },
  {
   "id": "scatter-four",
   "name": "Scatter — four",
   "requested": 4,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage"
   ],
   "profile": {
    "largest": 0.13,
    "smallest": 0.018,
    "spread": 7.2
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.031,
      "y": 0.024,
      "w": 0.13,
      "h": 0.0978,
      "accent": 2,
      "shape": "b2",
      "clearPx": 135
     },
     {
      "x": 0.9085,
      "y": 0.026,
      "w": 0.055,
      "h": 0.0414,
      "accent": 0,
      "shape": "b3",
      "clearPx": 215
     },
     {
      "x": 0.865,
      "y": 0.944,
      "w": 0.03,
      "h": 0.0226,
      "accent": 1,
      "shape": "round",
      "clearPx": 374
     },
     {
      "x": 0.799,
      "y": 0.9528,
      "w": 0.018,
      "h": 0.0135,
      "accent": 3,
      "shape": "round",
      "clearPx": 386
     }
    ],
    "ig-square": [
     {
      "x": 0.031,
      "y": 0.027,
      "w": 0.13,
      "h": 0.1222,
      "accent": 2,
      "shape": "b2",
      "clearPx": 78
     },
     {
      "x": 0.9085,
      "y": 0.0365,
      "w": 0.055,
      "h": 0.0517,
      "accent": 0,
      "shape": "b3",
      "clearPx": 153
     },
     {
      "x": 0.865,
      "y": 0.941,
      "w": 0.03,
      "h": 0.0282,
      "accent": 1,
      "shape": "round",
      "clearPx": 296
     },
     {
      "x": 0.719,
      "y": 0.951,
      "w": 0.018,
      "h": 0.0169,
      "accent": 3,
      "shape": "round",
      "clearPx": 307
     }
    ],
    "ig-story": [
     {
      "x": 0.031,
      "y": 0.1674,
      "w": 0.13,
      "h": 0.0687,
      "accent": 2,
      "shape": "b2",
      "clearPx": 71
     },
     {
      "x": 0.9085,
      "y": 0.2085,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 115
     },
     {
      "x": 0.945,
      "y": 0.7076,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 92
     },
     {
      "x": 0.591,
      "y": 0.7309,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 63
     }
    ],
    "ig-reel": [
     {
      "x": 0.031,
      "y": 0.1514,
      "w": 0.13,
      "h": 0.0687,
      "accent": 2,
      "shape": "b2",
      "clearPx": 70
     },
     {
      "x": 0.8925,
      "y": 0.1765,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 118
     },
     {
      "x": 0.945,
      "y": 0.6596,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 123
     },
     {
      "x": 0.591,
      "y": 0.6829,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 90
     }
    ],
    "fb-post": [
     {
      "x": 0.9085,
      "y": 0.1876,
      "w": 0.055,
      "h": 0.0985,
      "accent": 0,
      "shape": "b3",
      "clearPx": 330
     },
     {
      "x": 0.945,
      "y": 0.8954,
      "w": 0.03,
      "h": 0.0537,
      "accent": 1,
      "shape": "round",
      "clearPx": 385
     },
     {
      "x": 0.879,
      "y": 0.9109,
      "w": 0.018,
      "h": 0.0322,
      "accent": 3,
      "shape": "round",
      "clearPx": 312
     }
    ],
    "fb-portrait": [
     {
      "x": 0.031,
      "y": 0.024,
      "w": 0.13,
      "h": 0.0978,
      "accent": 2,
      "shape": "b2",
      "clearPx": 135
     },
     {
      "x": 0.9085,
      "y": 0.026,
      "w": 0.055,
      "h": 0.0414,
      "accent": 0,
      "shape": "b3",
      "clearPx": 215
     },
     {
      "x": 0.865,
      "y": 0.944,
      "w": 0.03,
      "h": 0.0226,
      "accent": 1,
      "shape": "round",
      "clearPx": 374
     },
     {
      "x": 0.799,
      "y": 0.9528,
      "w": 0.018,
      "h": 0.0135,
      "accent": 3,
      "shape": "round",
      "clearPx": 386
     }
    ],
    "fb-story": [
     {
      "x": 0.031,
      "y": 0.1674,
      "w": 0.13,
      "h": 0.0687,
      "accent": 2,
      "shape": "b2",
      "clearPx": 71
     },
     {
      "x": 0.9085,
      "y": 0.2085,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 115
     },
     {
      "x": 0.945,
      "y": 0.7076,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 92
     },
     {
      "x": 0.591,
      "y": 0.7309,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 63
     }
    ],
    "tiktok": [
     {
      "x": 0.031,
      "y": 0.0234,
      "w": 0.13,
      "h": 0.0687,
      "accent": 2,
      "shape": "b2",
      "clearPx": 323
     },
     {
      "x": 0.9085,
      "y": 0.0165,
      "w": 0.055,
      "h": 0.0291,
      "accent": 0,
      "shape": "b3",
      "clearPx": 415
     },
     {
      "x": 0.865,
      "y": 0.6596,
      "w": 0.03,
      "h": 0.0159,
      "accent": 1,
      "shape": "round",
      "clearPx": 143
     },
     {
      "x": 0.591,
      "y": 0.6669,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 141
     }
    ],
    "line-richmessage": [
     {
      "x": 0.031,
      "y": 0.027,
      "w": 0.13,
      "h": 0.1222,
      "accent": 2,
      "shape": "b2",
      "clearPx": 74
     },
     {
      "x": 0.9085,
      "y": 0.0365,
      "w": 0.055,
      "h": 0.0517,
      "accent": 0,
      "shape": "b3",
      "clearPx": 145
     },
     {
      "x": 0.865,
      "y": 0.941,
      "w": 0.03,
      "h": 0.0282,
      "accent": 1,
      "shape": "round",
      "clearPx": 288
     },
     {
      "x": 0.687,
      "y": 0.951,
      "w": 0.018,
      "h": 0.0169,
      "accent": 3,
      "shape": "round",
      "clearPx": 299
     }
    ],
    "line-cover": [
     {
      "x": 0.9085,
      "y": 0.0302,
      "w": 0.055,
      "h": 0.0636,
      "accent": 0,
      "shape": "b3",
      "clearPx": 128
     },
     {
      "x": 0.865,
      "y": 0.9215,
      "w": 0.03,
      "h": 0.0347,
      "accent": 1,
      "shape": "round",
      "clearPx": 209
     },
     {
      "x": 0.639,
      "y": 0.9489,
      "w": 0.018,
      "h": 0.0208,
      "accent": 3,
      "shape": "round",
      "clearPx": 227
     }
    ],
    "line-richmenu": [
     {
      "x": 0.865,
      "y": 0.9178,
      "w": 0.03,
      "h": 0.0418,
      "accent": 1,
      "shape": "round",
      "clearPx": 187
     },
     {
      "x": 0.591,
      "y": 0.9307,
      "w": 0.018,
      "h": 0.0251,
      "accent": 3,
      "shape": "round",
      "clearPx": 209
     }
    ]
   }
  },
  {
   "id": "quintet",
   "name": "Quintet",
   "requested": 5,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover"
   ],
   "profile": {
    "largest": 0.12,
    "smallest": 0.018,
    "spread": 6.7
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.026,
      "y": 0.028,
      "w": 0.12,
      "h": 0.0902,
      "accent": 0,
      "shape": "b1",
      "clearPx": 140
     },
     {
      "x": 0.921,
      "y": 0.024,
      "w": 0.05,
      "h": 0.0376,
      "accent": 1,
      "shape": "b2",
      "clearPx": 226
     },
     {
      "x": 0.885,
      "y": 0.944,
      "w": 0.03,
      "h": 0.0226,
      "accent": 2,
      "shape": "round",
      "clearPx": 375
     },
     {
      "x": 0.803,
      "y": 0.9578,
      "w": 0.018,
      "h": 0.0135,
      "accent": 3,
      "shape": "round",
      "clearPx": 393
     },
     {
      "x": 0.489,
      "y": 0.0252,
      "w": 0.022,
      "h": 0.0165,
      "accent": 4,
      "shape": "round",
      "clearPx": 243
     }
    ],
    "ig-square": [
     {
      "x": 0.026,
      "y": 0.032,
      "w": 0.12,
      "h": 0.1128,
      "accent": 0,
      "shape": "b1",
      "clearPx": 83
     },
     {
      "x": 0.921,
      "y": 0.035,
      "w": 0.05,
      "h": 0.047,
      "accent": 1,
      "shape": "b2",
      "clearPx": 164
     },
     {
      "x": 0.885,
      "y": 0.941,
      "w": 0.03,
      "h": 0.0282,
      "accent": 2,
      "shape": "round",
      "clearPx": 297
     },
     {
      "x": 0.723,
      "y": 0.956,
      "w": 0.018,
      "h": 0.0169,
      "accent": 3,
      "shape": "round",
      "clearPx": 312
     },
     {
      "x": 0.489,
      "y": 0.039,
      "w": 0.022,
      "h": 0.0207,
      "accent": 4,
      "shape": "round",
      "clearPx": 175
     }
    ],
    "ig-story": [
     {
      "x": 0.026,
      "y": 0.1702,
      "w": 0.12,
      "h": 0.0634,
      "accent": 0,
      "shape": "b1",
      "clearPx": 76
     },
     {
      "x": 0.921,
      "y": 0.2059,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "b2",
      "clearPx": 130
     },
     {
      "x": 0.933,
      "y": 0.7236,
      "w": 0.03,
      "h": 0.0159,
      "accent": 2,
      "shape": "round",
      "clearPx": 80
     },
     {
      "x": 0.611,
      "y": 0.7359,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 68
     },
     {
      "x": 0.489,
      "y": 0.2038,
      "w": 0.022,
      "h": 0.0116,
      "accent": 4,
      "shape": "round",
      "clearPx": 141
     }
    ],
    "ig-reel": [
     {
      "x": 0.026,
      "y": 0.1542,
      "w": 0.12,
      "h": 0.0634,
      "accent": 0,
      "shape": "b1",
      "clearPx": 76
     },
     {
      "x": 0.921,
      "y": 0.1899,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "b2",
      "clearPx": 122
     },
     {
      "x": 0.933,
      "y": 0.6596,
      "w": 0.03,
      "h": 0.0159,
      "accent": 2,
      "shape": "round",
      "clearPx": 116
     },
     {
      "x": 0.611,
      "y": 0.6719,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 110
     },
     {
      "x": 0.489,
      "y": 0.1878,
      "w": 0.022,
      "h": 0.0116,
      "accent": 4,
      "shape": "round",
      "clearPx": 137
     }
    ],
    "fb-post": [
     {
      "x": 0.921,
      "y": 0.1724,
      "w": 0.05,
      "h": 0.0895,
      "accent": 1,
      "shape": "b2",
      "clearPx": 345
     },
     {
      "x": 0.933,
      "y": 0.8954,
      "w": 0.03,
      "h": 0.0537,
      "accent": 2,
      "shape": "round",
      "clearPx": 371
     },
     {
      "x": 0.883,
      "y": 0.9159,
      "w": 0.018,
      "h": 0.0322,
      "accent": 3,
      "shape": "round",
      "clearPx": 318
     },
     {
      "x": 0.777,
      "y": 0.061,
      "w": 0.022,
      "h": 0.0394,
      "accent": 4,
      "shape": "round",
      "clearPx": 181
     }
    ],
    "fb-portrait": [
     {
      "x": 0.026,
      "y": 0.028,
      "w": 0.12,
      "h": 0.0902,
      "accent": 0,
      "shape": "b1",
      "clearPx": 140
     },
     {
      "x": 0.921,
      "y": 0.024,
      "w": 0.05,
      "h": 0.0376,
      "accent": 1,
      "shape": "b2",
      "clearPx": 226
     },
     {
      "x": 0.885,
      "y": 0.944,
      "w": 0.03,
      "h": 0.0226,
      "accent": 2,
      "shape": "round",
      "clearPx": 375
     },
     {
      "x": 0.803,
      "y": 0.9578,
      "w": 0.018,
      "h": 0.0135,
      "accent": 3,
      "shape": "round",
      "clearPx": 393
     },
     {
      "x": 0.489,
      "y": 0.0252,
      "w": 0.022,
      "h": 0.0165,
      "accent": 4,
      "shape": "round",
      "clearPx": 243
     }
    ],
    "fb-story": [
     {
      "x": 0.026,
      "y": 0.1702,
      "w": 0.12,
      "h": 0.0634,
      "accent": 0,
      "shape": "b1",
      "clearPx": 76
     },
     {
      "x": 0.921,
      "y": 0.2059,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "b2",
      "clearPx": 130
     },
     {
      "x": 0.933,
      "y": 0.7236,
      "w": 0.03,
      "h": 0.0159,
      "accent": 2,
      "shape": "round",
      "clearPx": 80
     },
     {
      "x": 0.611,
      "y": 0.7359,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 68
     },
     {
      "x": 0.489,
      "y": 0.2038,
      "w": 0.022,
      "h": 0.0116,
      "accent": 4,
      "shape": "round",
      "clearPx": 141
     }
    ],
    "tiktok": [
     {
      "x": 0.026,
      "y": 0.0262,
      "w": 0.12,
      "h": 0.0634,
      "accent": 0,
      "shape": "b1",
      "clearPx": 327
     },
     {
      "x": 0.921,
      "y": 0.0139,
      "w": 0.05,
      "h": 0.0264,
      "accent": 1,
      "shape": "b2",
      "clearPx": 427
     },
     {
      "x": 0.885,
      "y": 0.6596,
      "w": 0.03,
      "h": 0.0159,
      "accent": 2,
      "shape": "round",
      "clearPx": 143
     },
     {
      "x": 0.611,
      "y": 0.6719,
      "w": 0.018,
      "h": 0.0095,
      "accent": 3,
      "shape": "round",
      "clearPx": 131
     },
     {
      "x": 0.489,
      "y": 0.0278,
      "w": 0.022,
      "h": 0.0116,
      "accent": 4,
      "shape": "round",
      "clearPx": 424
     }
    ],
    "line-richmessage": [
     {
      "x": 0.026,
      "y": 0.032,
      "w": 0.12,
      "h": 0.1128,
      "accent": 0,
      "shape": "b1",
      "clearPx": 79
     },
     {
      "x": 0.921,
      "y": 0.035,
      "w": 0.05,
      "h": 0.047,
      "accent": 1,
      "shape": "b2",
      "clearPx": 155
     },
     {
      "x": 0.885,
      "y": 0.941,
      "w": 0.03,
      "h": 0.0282,
      "accent": 2,
      "shape": "round",
      "clearPx": 289
     },
     {
      "x": 0.691,
      "y": 0.956,
      "w": 0.018,
      "h": 0.0169,
      "accent": 3,
      "shape": "round",
      "clearPx": 304
     },
     {
      "x": 0.489,
      "y": 0.039,
      "w": 0.022,
      "h": 0.0207,
      "accent": 4,
      "shape": "round",
      "clearPx": 167
     }
    ],
    "line-cover": [
     {
      "x": 0.026,
      "y": 0.0342,
      "w": 0.12,
      "h": 0.1388,
      "accent": 0,
      "shape": "b1",
      "clearPx": 48
     },
     {
      "x": 0.921,
      "y": 0.0452,
      "w": 0.05,
      "h": 0.0578,
      "accent": 1,
      "shape": "b2",
      "clearPx": 127
     },
     {
      "x": 0.885,
      "y": 0.9215,
      "w": 0.03,
      "h": 0.0347,
      "accent": 2,
      "shape": "round",
      "clearPx": 210
     },
     {
      "x": 0.643,
      "y": 0.9379,
      "w": 0.018,
      "h": 0.0208,
      "accent": 3,
      "shape": "round",
      "clearPx": 223
     },
     {
      "x": 0.489,
      "y": 0.0365,
      "w": 0.022,
      "h": 0.0254,
      "accent": 4,
      "shape": "round",
      "clearPx": 145
     }
    ],
    "line-richmenu": [
     {
      "x": 0.885,
      "y": 0.9178,
      "w": 0.03,
      "h": 0.0418,
      "accent": 2,
      "shape": "round",
      "clearPx": 187
     },
     {
      "x": 0.611,
      "y": 0.9357,
      "w": 0.018,
      "h": 0.0251,
      "accent": 3,
      "shape": "round",
      "clearPx": 217
     }
    ]
   }
  },
  {
   "id": "single-large",
   "name": "Single — large",
   "requested": 1,
   "fullOn": [
    "ig-portrait",
    "ig-story",
    "ig-reel",
    "fb-post",
    "fb-portrait",
    "fb-story",
    "tiktok"
   ],
   "profile": {
    "largest": 0.19,
    "smallest": 0.19,
    "spread": 1
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.773,
      "y": 0.02,
      "w": 0.19,
      "h": 0.1429,
      "accent": 1,
      "shape": "b3",
      "clearPx": 80
     }
    ],
    "ig-story": [
     {
      "x": 0.773,
      "y": 0.1546,
      "w": 0.19,
      "h": 0.1005,
      "accent": 1,
      "shape": "b3",
      "clearPx": 46
     }
    ],
    "ig-reel": [
     {
      "x": 0.773,
      "y": 0.1386,
      "w": 0.19,
      "h": 0.1005,
      "accent": 1,
      "shape": "b3",
      "clearPx": 46
     }
    ],
    "fb-post": [
     {
      "x": 0.773,
      "y": 0.059,
      "w": 0.19,
      "h": 0.3402,
      "accent": 1,
      "shape": "b3",
      "clearPx": 167
     }
    ],
    "fb-portrait": [
     {
      "x": 0.773,
      "y": 0.02,
      "w": 0.19,
      "h": 0.1429,
      "accent": 1,
      "shape": "b3",
      "clearPx": 80
     }
    ],
    "fb-story": [
     {
      "x": 0.773,
      "y": 0.1546,
      "w": 0.19,
      "h": 0.1005,
      "accent": 1,
      "shape": "b3",
      "clearPx": 46
     }
    ],
    "tiktok": [
     {
      "x": 0.773,
      "y": 0.0266,
      "w": 0.19,
      "h": 0.1005,
      "accent": 1,
      "shape": "b3",
      "clearPx": 256
     }
    ]
   }
  },
  {
   "id": "minimal",
   "name": "Minimal",
   "requested": 1,
   "fullOn": [
    "ig-portrait",
    "ig-square",
    "ig-story",
    "ig-reel",
    "fb-post",
    "fb-portrait",
    "fb-story",
    "tiktok",
    "line-richmessage",
    "line-cover",
    "line-richmenu"
   ],
   "profile": {
    "largest": 0.032,
    "smallest": 0.032,
    "spread": 1
   },
   "placements": {
    "ig-portrait": [
     {
      "x": 0.93,
      "y": 0.9432,
      "w": 0.032,
      "h": 0.0241,
      "accent": 2,
      "shape": "round",
      "clearPx": 380
     }
    ],
    "ig-square": [
     {
      "x": 0.93,
      "y": 0.94,
      "w": 0.032,
      "h": 0.0301,
      "accent": 2,
      "shape": "round",
      "clearPx": 304
     }
    ],
    "ig-story": [
     {
      "x": 0.93,
      "y": 0.723,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 79
     }
    ],
    "ig-reel": [
     {
      "x": 0.93,
      "y": 0.659,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 113
     }
    ],
    "fb-post": [
     {
      "x": 0.93,
      "y": 0.8935,
      "w": 0.032,
      "h": 0.0573,
      "accent": 2,
      "shape": "round",
      "clearPx": 367
     }
    ],
    "fb-portrait": [
     {
      "x": 0.93,
      "y": 0.9432,
      "w": 0.032,
      "h": 0.0241,
      "accent": 2,
      "shape": "round",
      "clearPx": 380
     }
    ],
    "fb-story": [
     {
      "x": 0.93,
      "y": 0.723,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 79
     }
    ],
    "tiktok": [
     {
      "x": 0.914,
      "y": 0.659,
      "w": 0.032,
      "h": 0.0169,
      "accent": 2,
      "shape": "round",
      "clearPx": 142
     }
    ],
    "line-richmessage": [
     {
      "x": 0.93,
      "y": 0.94,
      "w": 0.032,
      "h": 0.0301,
      "accent": 2,
      "shape": "round",
      "clearPx": 295
     }
    ],
    "line-cover": [
     {
      "x": 0.914,
      "y": 0.9203,
      "w": 0.032,
      "h": 0.037,
      "accent": 2,
      "shape": "round",
      "clearPx": 215
     }
    ],
    "line-richmenu": [
     {
      "x": 0.914,
      "y": 0.9163,
      "w": 0.032,
      "h": 0.0446,
      "accent": 2,
      "shape": "round",
      "clearPx": 184
     }
    ]
   }
  }
 ],
 "endPages": {
  "about": "The last page of a multi-page post is the full mark, not content. Two sub-versions.",
  "logo": {
   "id": "logo",
   "label": "Full-page logo",
   "asset": "assets/logo/kit-master.png",
   "markWidthPct": 0.52,
   "caption": null,
   "layout": "centred: full mark, optically centred"
  },
  "logo-qr": {
   "label": "Logo + LINE QR",
   "asset": "assets/logo/kit-wordmark-footer.png",
   "assetDark": "assets/logo/kit-wordmark-footer-ground.png",
   "layout": "centred column: one-line wordmark, caption, QR square",
   "markWidthPct": 0.46,
   "gapPct": 0.055,
   "caption": "ติดตามกิจกรรมใหม่ ๆ ได้ที่",
   "captionSizePct": 0.032,
   "subcaption": "LINE Official Account",
   "qr": {
    "qrPct": 0.42,
    "quietZonePct": 0.04,
    "note": "Reserved square, not a placeholder graphic — drop the real LINE OA code in at exactly this size and position; the quiet zone is already inside the reserved area."
   }
  }
 },
 "accents": {
  "sage": "#7EA97C",
  "sand": "#F1C9A7",
  "slate": "#90A7D3",
  "peach": "#F3AFA6",
  "amber": "#FDC26D"
 },
 "curvePaths": {
  "open": "M881.9 798.7C872.2 805.9 841.0 825.4 823.7 841.7C806.4 858.0 795.8 880.8 778.3 896.6C760.9 912.3 739.6 924.0 719.0 936.2C698.4 948.5 677.3 960.8 655.0 970.1C632.7 979.4 609.0 986.8 585.2 992.1C561.4 997.5 536.6 1000.6 512.0 1001.9C487.4 1003.3 462.3 1002.6 437.5 1000.2C412.8 997.8 387.7 993.7 363.3 987.5C338.9 981.4 314.4 973.5 291.2 963.3C268.0 953.1 244.9 940.9 224.1 926.3C203.2 911.7 183.2 894.6 166.1 875.9C149.0 857.2 133.3 836.0 121.2 813.9C109.1 791.8 99.4 767.5 93.3 743.3C87.2 719.2 84.7 693.4 84.4 668.9C84.2 644.5 87.6 619.7 91.9 596.5C96.2 573.4 104.0 551.2 110.1 530.0C116.3 508.8 123.3 489.3 128.9 469.3C134.4 449.4 139.5 430.7 143.5 410.3C147.6 389.9 149.9 369.5 152.9 347.0C156.0 324.6 156.8 299.9 161.9 275.7C167.1 251.5 172.8 224.6 183.8 201.8C194.8 179.0 209.9 156.4 227.8 138.9C245.7 121.3 268.3 106.8 291.1 96.4C313.9 86.0 339.9 80.3 364.7 76.7C389.5 73.2 415.4 72.8 440.0 75.1C464.5 77.4 489.1 83.4 512.0 90.7C534.9 98.0 556.6 108.7 577.1 118.7C597.7 128.7 616.0 141.2 635.2 150.7C654.4 160.3 672.2 168.9 692.4 176.0C712.5 183.2 737.3 183.9 756.3 193.8C775.3 203.7 790.1 221.0 806.4 235.6C822.8 250.1 839.6 264.7 854.4 281.2C869.3 297.7 883.8 315.5 895.5 334.6C907.1 353.8 919.4 385.8 924.2 396.1",
  "wideOpen": "M881.9 642.9C872.2 645.9 841.0 654.1 823.7 660.9C806.4 667.8 795.8 677.4 778.3 684.0C760.8 690.6 739.5 695.5 719.0 700.6C698.5 705.7 677.3 710.9 655.0 714.8C632.7 718.8 609.0 721.9 585.2 724.1C561.4 726.3 536.6 727.6 512.0 728.2C487.4 728.8 462.3 728.5 437.5 727.5C412.7 726.5 387.7 724.7 363.3 722.1C338.9 719.6 314.4 716.3 291.2 712.0C268.0 707.7 244.9 702.6 224.1 696.4C203.3 690.3 183.3 683.1 166.1 675.3C148.9 667.4 133.3 658.5 121.2 649.2C109.1 640.0 99.4 629.7 93.3 619.6C87.2 609.4 84.6 598.6 84.4 588.3C84.2 578.1 87.6 567.7 91.9 557.9C96.2 548.2 103.9 538.9 110.1 530.0C116.3 521.1 123.3 512.9 128.9 504.5C134.5 496.1 139.5 488.3 143.5 479.7C147.5 471.2 149.8 462.6 152.9 453.1C156.0 443.7 156.8 433.4 161.9 423.2C167.1 413.0 172.8 401.7 183.8 392.2C194.8 382.6 209.9 373.1 227.8 365.7C245.7 358.4 268.3 352.2 291.1 347.9C313.9 343.5 339.9 341.1 364.7 339.6C389.5 338.1 415.4 338.0 440.0 338.9C464.6 339.9 489.1 342.4 512.0 345.5C534.9 348.5 556.6 353.1 577.1 357.3C597.6 361.5 616.0 366.7 635.2 370.7C654.4 374.7 672.2 378.3 692.4 381.3C712.6 384.3 737.3 384.6 756.3 388.8C775.3 393.0 790.0 400.2 806.4 406.4C822.8 412.5 839.5 418.6 854.4 425.5C869.3 432.4 883.9 439.9 895.5 447.9C907.1 456.0 919.4 469.5 924.2 473.8"
 },
 "curvePathViewBoxes": {
  "open": "0 0 1024 1024",
  "wideOpen": "60 280 900 500"
 },
 "blankTemplates": {
  "dir": "assets/templates-blank/",
  "prerenderedGrounds": [
   "sand-50",
   "sage-100",
   "slate-1000",
   "ink"
  ],
  "guidesGround": "sand-50",
  "fileCount": 107,
  "naming": [
   "<surface>-<ground>-<framed|frameless>.png",
   "<surface>-guides.png",
   "endpage-<logo|logo-qr>-<ground>.png"
  ],
  "note": "Flat PNG boards for hand-composing outside HTML. Backgrounds are verified to be current panes; regenerate from variants.json whenever the pane set changes."
 }
};
