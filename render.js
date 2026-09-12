/* KIT Post Maker — render core.
 *
 * Pure: content object -> real .kit-board DOM, styled by the design system's own
 * data. No UI, no export, no URL handling. app.js drives it interactively; a
 * headless browser imports the same functions for batch preview render (Layer 3).
 *
 * Background geometry (canvas size, ground colour, dot arrangement, curve, mark
 * zone) is read straight from `window.KIT_VARIANTS` — the design system's
 * `social/variants.json`, vendored as `social/variants.js` by build.mjs. This
 * module never hand-places a dot or a curve; see `variants()` accessors below.
 */
import { ARCHETYPES, byId } from './templates.js';

export const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'style') n.style.cssText = v;
    else if (k === 'class') n.className = v;
    else n.setAttribute(k, v);
  }
  for (const kid of kids) n.append(kid);
  return n;
};

const svgEl = (tag, attrs = {}) => {
  const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
};

const brLines = (s) => {
  const frag = document.createDocumentFragment();
  String(s ?? '').split('\n').forEach((line, i) => {
    if (i) frag.append(el('br'));
    frag.append(document.createTextNode(line));
  });
  return frag;
};

const lines = (v) => String(v).split('\n').map((x) => x.trim()).filter(Boolean);

/* ── design-system data accessors ──────────────────────────────────────────────
 * window.KIT_VARIANTS is set by ds/social/variants.js, loaded via a plain
 * <script> tag before this module (see index.html) — no fetch needed. */
export const variants = () => window.KIT_VARIANTS;
export const boardDefs = () => variants().templates;
export const groundDefs = () => variants().grounds;
export const dotDefs = () => variants().dots;
export const boardById = (id) => boardDefs().find((t) => t.id === id) || boardDefs()[0];
export const groundById = (id) => groundDefs().find((g) => g.id === id) || groundDefs()[0];
export const dotsById = (id) => dotDefs().find((d) => d.id === id) || null;

/** Dot arrangements valid for a given board size (some arrangements don't fit every aspect ratio). */
export const dotsOptionsFor = (boardId) => dotDefs().filter((d) => d.placements && Object.prototype.hasOwnProperty.call(d.placements, boardId));

/** Which platform a board id belongs to, for the "platform → post type" post-mode picker. */
export const platformOf = (boardId) => {
  if (boardId.startsWith('ig-')) return 'Instagram';
  if (boardId.startsWith('fb-')) return 'Facebook';
  if (boardId.startsWith('line-')) return 'LINE';
  return 'TikTok';
};

/**
 * Expand a carousel/"post" object into an ordered list of single-board render specs —
 * the content pages, then (if requested) a synthesised end-page spec. Both the preview
 * strip and the ZIP export walk this same list, so they can never drift apart.
 *
 * NOTE on scope (2026-09-12): variants.json specs one independent, solver-verified arc
 * per board — it does not encode the design system's own hand-drawn example of a SINGLE
 * curve running continuously across N carousel slides (see social-templates.html §4).
 * Building that for real needs new geometry data from the design system, not something
 * to approximate by eye here. This ships the documented fallback instead: every page
 * locked to the same ground (the system's own rule — never two panes in one carousel)
 * with its own independently-solved dots/curve, which stays safe and on-brand without
 * pretending to be a continuous arc it isn't.
 */
export function carouselPageSpecs(post) {
  const specs = post.pages.map((pg) => ({
    archetype: pg.archetype, board: post.board, ground: post.ground, dots: pg.dots, frame: post.frame,
    slots: pg.slots,
  }));
  if (post.endPage && post.endPage !== 'none') {
    specs.push({
      archetype: post.endPage === 'logo' ? 'end-logo' : 'end-logo-qr',
      board: post.board, ground: post.ground, dots: null, frame: post.frame,
      slots: { caption: post.endCaption || '' },
    });
  }
  return specs;
}

/* Numbered / labelled rows as a CSS TABLE.
   The design system's own CSS uses flex/grid here, but the foreignObject export
   libraries (html-to-image, modern-screenshot) pin every element's computed height,
   so a flex/grid row whose Thai text wraps overflows and overlaps the next row.
   `display:table` sizes each row to its tallest cell and reflows identically in the
   clone — the most robust content-height primitive there is. Visually the same
   hanging-indent / two-column list. */
function labelledRows(items, { labelWidth = 96, rowGap = 24, size = 36, lh = 1.6, labelColor }) {
  const table = el('div', { style: `display:table;border-collapse:collapse;font-size:calc(${size} * var(--u));line-height:${lh}` });
  items.forEach(({ label, text }, i) => {
    const last = i === items.length - 1;
    const pad = last ? '' : `;padding-bottom:calc(${rowGap} * var(--u))`;
    const row = el('div', { style: 'display:table-row' });
    row.append(el('div', {
      style: `display:table-cell;vertical-align:top;width:calc(${labelWidth} * var(--u));padding-right:calc(20 * var(--u));font-weight:500;font-variant-numeric:tabular-nums;color:${labelColor}${pad}`,
    }, label));
    row.append(el('div', { style: `display:table-cell;vertical-align:top${pad}` }, text));
    table.append(row);
  });
  return table;
}

export function renderSlot(slot, value, ground) {
  const v = value ?? '';
  const metaStyle = slot.meta ? { style: `color:${ground.meta}` } : {};
  switch (slot.type) {
    case 'line':
      return el('p', { class: slot.cls, ...metaStyle }, String(v));
    case 'multiline':
      return el('p', { class: slot.cls, ...metaStyle }, brLines(v));
    case 'ol':
      return labelledRows(
        lines(v).map((text, i) => ({ label: String(i + 1).padStart(2, '0'), text })),
        { labelWidth: 70, rowGap: 24, size: 36, labelColor: ground.meta },
      );
    case 'steps':
      return labelledRows(
        lines(v).map((line) => { const [label, ...rest] = line.split('|'); return { label: label.trim(), text: rest.join('|').trim() }; }),
        { labelWidth: 150, rowGap: 30, size: 36, labelColor: ground.meta },
      );
    case 'facts':
      return labelledRows(
        lines(v).map((line) => { const [term, ...rest] = line.split('|'); return { label: term.trim(), text: rest.join('|').trim() }; }),
        { labelWidth: 220, rowGap: 18, size: 32, labelColor: ground.meta },
      );
    case 'chips': {
      // inline-block chips in a plain block container — flex-wrap height is also pinned in the clone.
      // Every third chip renders outline (border only) for the same visual rhythm the old 3-way
      // plain/sand/outline cycle had; colours come from the ground's own chip/chipText, not a fixed hue.
      const wrap = el('div', { style: 'line-height:1' });
      String(v).split(',').map((x) => x.trim()).filter(Boolean).forEach((label, i) => {
        const outline = i % 3 === 2;
        const style = `display:inline-block;margin:0 calc(16 * var(--u)) calc(14 * var(--u)) 0;white-space:nowrap;` +
          (outline
            ? `background:transparent;box-shadow:inset 0 0 0 calc(2 * var(--u)) ${ground.chip};color:${ground.text}`
            : `background:${ground.chip};color:${ground.chipText}`);
        wrap.append(el('span', { class: 'kit-chip', style }, label));
      });
      return wrap;
    }
    case 'cta': {
      const line = slot.channel === 'line';
      const bg = line ? '#06C755' : ground.ctaFill;
      const color = line ? '#fff' : ground.ctaLabel;
      return el('span', { class: 'kit-cta', style: `align-self:flex-start;background:${bg};color:${color}` }, String(v));
    }
    default:
      return el('p', { class: slot.cls }, String(v));
  }
}

/** Inline <svg> for the enclosing-line curve, built straight from variants.json's path
 * data + the per-board solved placement — the exact recipe in the design system's own
 * contract.render. Never rasterised, never loaded as an <img src=*.svg> (see the
 * design system's own warning: that mis-scales/letterboxes the stroke off the type). */
function buildCurveSvg(boardDef, ground, V) {
  const cp = boardDef.curvePlacement;
  if (!cp) return null;
  const d = V.curvePaths[cp.variant];
  const [vbX, vbY, vbW, vbH] = cp.viewBox.split(' ').map(Number);
  const W = boardDef.w, H = boardDef.h;
  const tx = cp.x * W, ty = cp.y * H;
  const sx = (cp.w * W) / vbW, sy = (cp.h * H) / vbH;
  const svg = svgEl('svg', {
    viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'none', width: String(W), height: String(H),
  });
  svg.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none';
  const g = svgEl('g', { transform: `translate(${tx},${ty}) scale(${sx},${sy}) translate(${-vbX},${-vbY})` });
  g.append(svgEl('path', {
    d, 'vector-effect': 'non-scaling-stroke', stroke: ground.curve, 'stroke-width': String(cp.strokeWidthPx),
    fill: 'none', 'stroke-linecap': 'round',
  }));
  svg.append(g);
  return svg;
}

function renderDots(board, boardDef, ground, dotsDef) {
  const list = dotsDef?.placements?.[boardDef.id] || [];
  for (const d of list) {
    const shapeCls = d.shape && d.shape !== 'round' ? ' ' + d.shape : ''; // b1/b2/b3, or bare (round default)
    board.append(el('div', {
      class: 'kit-dot' + shapeCls,
      style: `left:${d.x * boardDef.w}px;top:${d.y * boardDef.h}px;width:${d.w * boardDef.w}px;height:${d.h * boardDef.h}px;background:${ground.accents[d.accent]}`,
    }));
  }
}

function renderMark(board, boardDef, ground, archetype) {
  const mk = boardDef.markZone;
  const W = boardDef.w, H = boardDef.h;
  const markW = mk.w * W;
  const mark = el('div', { class: 'kit-mark', style: `left:${mk.x * W}px;top:${mk.y * H}px;bottom:auto;right:auto;width:${markW}px` });
  mark.append(el('img', { src: 'ds/' + ground.wordmarkAsset, alt: 'Keeps in Touch', style: `width:${markW}px;height:auto` }));
  if (archetype.heart) {
    mark.append(el('img', { class: 'kit-heart', alt: '', src: 'ds/assets/brand/' + (ground.kind === 'dark' ? 'heart-ground.png' : 'heart.png') }));
  }
  board.append(mark);
}

function renderWash(board, boardDef, ground, tz) {
  // No wash geometry is specified in variants.json (it is an archetype-only device, not
  // part of the shared background system) — approximate it as the typezone rectangle
  // expanded by a fixed margin, tinted from the ground's own tone rather than a fixed hue.
  const W = boardDef.w, H = boardDef.h;
  const padX = tz.w * W * 0.08, padY = tz.h * H * 0.06;
  const tint = ground.kind === 'dark' ? 'rgba(253,249,246,.08)' : 'rgba(20,24,29,.05)';
  board.append(el('div', {
    class: 'kit-wash',
    style: `left:${tz.x * W - padX}px;top:${tz.y * H - padY}px;width:${tz.w * W + padX * 2}px;height:${tz.h * H + padY * 2}px;border-radius:90px 70px 96px 64px;background:${tint}`,
  }));
}

/** The dot-row page indicator shown on every page of a multi-page post — matches the
 * design system's own `.kit-pager` treatment, coloured from the current ground instead
 * of the fixed global tokens the CSS class defaults to (those don't survive a dark pane). */
function renderPager(board, ground, index, total) {
  const pager = el('div', { class: 'kit-pager', style: 'right:calc(88 * var(--u));bottom:calc(104 * var(--u))' });
  for (let i = 0; i < total; i++) {
    pager.append(el('i', { style: `background:${i === index ? ground.text : ground.meta}` }));
  }
  board.append(pager);
}

function renderEndPage(board, boardDef, ground, archetype, post, V) {
  const ep = V.endPages[archetype.endPage];
  const W = boardDef.w, H = boardDef.h;
  if (archetype.endPage === 'logo') {
    const markW = ep.markWidthPct * W;
    board.append(el('img', {
      src: 'ds/' + ep.asset, alt: 'Keeps in Touch',
      style: `position:absolute;left:${(W - markW) / 2}px;top:50%;width:${markW}px;height:auto;transform:translateY(-50%)`,
    }));
    return;
  }
  // logo-qr
  const asset = ground.kind === 'dark' ? ep.assetDark : ep.asset;
  const markW = ep.markWidthPct * W;
  const col = el('div', {
    style: `position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;gap:${ep.gapPct * H}px`,
  });
  col.append(el('img', { src: 'ds/' + asset, alt: 'Keeps in Touch', style: `width:${markW}px;height:auto` }));
  const captionText = (post.slots?.caption || '').trim() || ep.caption;
  col.append(el('p', { class: 'body-sm', style: `text-align:center;color:${ground.text};margin:0` }, captionText));
  const qrSize = ep.qr.qrPct * Math.min(W, H);
  col.append(el('div', {
    style: `width:${qrSize}px;height:${qrSize}px;border:2px dashed ${ground.meta};border-radius:16px;` +
      `display:flex;align-items:center;justify-content:center;color:${ground.meta};font-size:${0.03 * Math.min(W, H)}px;text-align:center`,
  }, 'LINE QR'));
  col.append(el('p', { class: 'meta', style: `text-align:center;color:${ground.meta};margin:0` }, ep.subcaption));
  board.append(col);
}

/**
 * @param {object} p     content object { archetype, board, ground, dots, frame, slots }
 * @param {object} opts  { scale=1, guides=false, pager=null }
 *   opts.pager: { index, total } — draws the multi-page dot indicator when a post has
 *   more than one page (see carouselPageSpecs). Omitted entirely for a single image.
 * @returns {{ board: HTMLElement, boardDef: object, w:number, h:number }}
 */
export function renderBoard(p, { scale = 1, guides = false, pager = null } = {}) {
  const V = variants();
  const archetype = byId(p.archetype) || ARCHETYPES[0];
  const boardDef = boardById(p.board);
  const ground = groundById(p.ground);

  const board = el('div', {
    class: 'kit-board',
    style: `--w:${boardDef.w}px;--h:${boardDef.h}px;--s:${scale};background:${ground.bg};color:${ground.text}`,
  });

  if (archetype.endPage) {
    renderEndPage(board, boardDef, ground, archetype, p, V);
  } else {
    const tz = boardDef.typeZone;
    if (archetype.wash) renderWash(board, boardDef, ground, tz);

    renderDots(board, boardDef, ground, p.frame === 'frameless' ? null : dotsById(p.dots));

    if (p.frame !== 'frameless') {
      const svg = buildCurveSvg(boardDef, ground, V);
      if (svg) board.append(svg);
    }

    const zone = el('div', {
      class: 'kit-typezone',
      style: `left:${tz.x * boardDef.w}px;top:${tz.y * boardDef.h}px;width:${tz.w * boardDef.w}px;height:${tz.h * boardDef.h}px` +
        (archetype.gap ? `;gap:calc(${archetype.gap} * var(--u))` : ''),
    });
    for (const slot of archetype.slots) {
      const val = p.slots?.[slot.key];
      if (slot.optional && !String(val ?? '').trim()) continue;
      zone.append(renderSlot(slot, val, ground));
    }
    board.append(zone);

    renderMark(board, boardDef, ground, archetype);

    if (guides) {
      board.append(el('div', {
        class: 'kit-guide',
        style: `left:${tz.x * boardDef.w}px;top:${tz.y * boardDef.h}px;width:${tz.w * boardDef.w}px;height:${tz.h * boardDef.h}px`,
      }, el('span', {}, 'type zone')));
    }
  }

  if (pager && pager.total > 1) renderPager(board, ground, pager.index, pager.total);

  return { board, boardDef, w: boardDef.w, h: boardDef.h };
}
