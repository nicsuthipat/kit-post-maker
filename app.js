/* KIT Post Maker — interactive UI.
 *
 * Two modes, one render path (render.js):
 *   Single  — one artboard: archetype × board × ground × dots × frame. Unchanged from v2.
 *   Post    — platform → post type → page count → one or more content pages sharing a
 *             ground/frame, plus an optional end page. Exports a ZIP, not one PNG.
 *             See render.js's carouselPageSpecs() for the scope note on what "continuity"
 *             means here (independently-solved pages on a locked ground, not a literally
 *             continuous curve across slides — that needs new design-system data).
 *
 * A headless browser drives the same renderBoard()/carouselPageSpecs() by loading
 *   ?d=<base64url content json>
 * and calling window.kitExport() (single) or window.kitExportZip() (post).
 */
import { ARCHETYPES, byId } from './templates.js';
import {
  renderBoard, el, boardDefs, groundDefs, dotsOptionsFor, boardById, platformOf, carouselPageSpecs,
} from './render.js';

const $ = (s, r = document) => r.querySelector(s);
const CONTENT_ARCHETYPES = ARCHETYPES.filter((a) => !a.endPage);
const firstDotsFor = (boardId) => dotsOptionsFor(boardId)[0]?.id || null;

const b64urlEncode = (obj) =>
  btoa(unescape(encodeURIComponent(JSON.stringify(obj)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64urlDecode = (s) => {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/')))));
  } catch { return null; }
};

/* ══════════════════════════════════════════ mode switch ══════════════════════════════════════════ */
function setMode(mode) {
  $('#mode-single').setAttribute('aria-pressed', String(mode === 'single'));
  $('#mode-post').setAttribute('aria-pressed', String(mode === 'post'));
  $('#singlePanel').hidden = mode !== 'single';
  $('#postPanel').hidden = mode !== 'post';
  $('#stage').hidden = mode !== 'single';
  $('#carouselStage').hidden = mode !== 'post';
  currentMode = mode;
}
let currentMode = 'single';

/* ══════════════════════════════════════════ SINGLE mode ══════════════════════════════════════════ */
const DEFAULT_BOARD = 'ig-portrait';
const DEFAULT_GROUND = 'sand-50';

const EMPTY = (archetypeId) => ({
  archetype: archetypeId,
  board: DEFAULT_BOARD,
  ground: DEFAULT_GROUND,
  dots: firstDotsFor(DEFAULT_BOARD),
  frame: 'framed',
  slots: {},
  meta: { source: 'manual', status: 'draft', createdAt: new Date().toISOString(), aiComment: null },
});

let post = EMPTY(CONTENT_ARCHETYPES[0].id);

const stage = $('#stage');

function paint() {
  const t = boardById(post.board);
  const previewScale = Math.min((stage.clientWidth || 380) / t.w, 0.62);
  stage.innerHTML = '';
  const { board } = renderBoard(post, { scale: previewScale, guides: $('#guides').checked });
  const holder = el('div', { style: `width:${t.w * previewScale}px;height:${t.h * previewScale}px;position:relative` });
  holder.append(board);
  stage.append(holder);

  requestAnimationFrame(() => {
    const zone = board.querySelector('.kit-typezone');
    const overflowFlag = !!zone && zone.scrollHeight > zone.clientHeight + 1;
    $('#overflow').hidden = !overflowFlag;
    const a = byId(post.archetype);
    const warnEl = $('#tplwarn');
    warnEl.hidden = !a.warn;
    warnEl.textContent = a.warn || '';
  });
}

function buildForm() {
  const a = byId(post.archetype);
  const host = $('#slots');
  host.innerHTML = '';
  for (const slot of a.slots) {
    const id = 'slot-' + slot.key;
    host.append(el('label', { for: id }, slot.label));
    const ta = el('textarea', { id, rows: String(slot.rows || 1) });
    ta.value = post.slots[slot.key] ?? '';
    ta.addEventListener('input', () => { post.slots[slot.key] = ta.value; paint(); syncUrl(); });
    host.append(ta);
  }
}

function optgroupsFor(select, archetypes) {
  select.innerHTML = '';
  const groups = {};
  for (const a of archetypes) (groups[a.group] ||= []).push(a);
  for (const [g, list] of Object.entries(groups)) {
    const og = el('optgroup', { label: g });
    for (const a of list) og.append(el('option', { value: a.id }, a.label));
    select.append(og);
  }
}

function buildArchetypePicker() {
  const sel = $('#archetype');
  optgroupsFor(sel, ARCHETYPES);
  sel.value = post.archetype;
  sel.addEventListener('change', () => {
    post.archetype = sel.value;
    post.slots = {};
    for (const s of byId(post.archetype).slots) post.slots[s.key] = '';
    buildForm(); paint(); syncUrl();
  });
}

function buildBoardPicker() {
  const sel = $('#board');
  sel.innerHTML = '';
  for (const t of boardDefs()) sel.append(el('option', { value: t.id }, `${t.label} · ${t.w}×${t.h}`));
  sel.value = post.board;
  sel.addEventListener('change', () => {
    post.board = sel.value;
    buildDotsPicker();
    paint(); syncUrl();
  });
}

function buildGroundPicker(selectEl, current, onChange) {
  selectEl.innerHTML = '';
  for (const g of groundDefs()) {
    selectEl.append(el('option', { value: g.id }, `${g.id} — ${g.note} (${g.kind === 'dark' ? 'เข้ม' : 'อ่อน'})`));
  }
  selectEl.value = current;
  selectEl.addEventListener('change', () => onChange(selectEl.value));
}

function buildDotsPicker() {
  const sel = $('#dots');
  const options = dotsOptionsFor(post.board);
  sel.innerHTML = '';
  for (const d of options) sel.append(el('option', { value: d.id }, `${d.name} · ${d.requested} จุด`));
  if (!options.some((d) => d.id === post.dots)) post.dots = options[0]?.id || null;
  sel.value = post.dots;
  sel.addEventListener('change', () => { post.dots = sel.value; paint(); syncUrl(); });
}

function updateBgControlsVisibility() {
  const isEnd = !!byId(post.archetype).endPage;
  $('#dotsRow').hidden = isEnd;
  $('#frameRow').hidden = isEnd;
}

function syncUrl() {
  const u = new URL(location.href);
  u.searchParams.set('d', b64urlEncode({ mode: 'single', ...post }));
  history.replaceState(null, '', u);
}

async function renderPageDataUrl(spec, w, h, bg, pagerOpts) {
  const off = el('div', { style: 'position:fixed;left:-99999px;top:0' });
  const { board } = renderBoard(spec, { scale: 1, guides: false, pager: pagerOpts });
  off.append(board);
  document.body.append(off);
  try {
    await Promise.all([...board.querySelectorAll('img')].map((img) => img.decode?.().catch(() => {})));
    await new Promise((r) => setTimeout(r, 30));
    return await modernScreenshot.domToPng(board, { width: w, height: h, scale: 1, backgroundColor: bg });
  } finally {
    off.remove();
  }
}

async function exportDataUrl() {
  const t = boardById(post.board);
  const g = groundDefs().find((x) => x.id === post.ground);
  await document.fonts.ready;
  return renderPageDataUrl(post, t.w, t.h, g.bg, null);
}

window.kitExport = () => exportDataUrl();
window.kitPost = () => post;

/* ══════════════════════════════════════════ POST (multi-page) mode ══════════════════════════════════════════ */
const defaultPage = (boardId) => ({ archetype: 'knowledge-card', dots: firstDotsFor(boardId), slots: {} });

let carouselPost = {
  board: DEFAULT_BOARD,
  ground: DEFAULT_GROUND,
  frame: 'framed',
  sharedEyebrow: '',
  endPage: 'none',
  endCaption: '',
  pages: [defaultPage(DEFAULT_BOARD)],
  meta: { source: 'manual', status: 'draft', createdAt: new Date().toISOString(), aiComment: null },
};

function buildPlatformPicker() {
  const sel = $('#platform');
  sel.innerHTML = '';
  const platforms = [...new Set(boardDefs().map((t) => platformOf(t.id)))];
  for (const p of platforms) sel.append(el('option', { value: p }, p));
  sel.value = platformOf(carouselPost.board);
  sel.addEventListener('change', () => {
    const firstOfPlatform = boardDefs().find((t) => platformOf(t.id) === sel.value);
    carouselPost.board = firstOfPlatform.id;
    buildPostTypePicker();
    onCarouselBoardChanged();
  });
}

function buildPostTypePicker() {
  const sel = $('#postType');
  sel.innerHTML = '';
  const platform = platformOf(carouselPost.board);
  for (const t of boardDefs().filter((t) => platformOf(t.id) === platform)) {
    sel.append(el('option', { value: t.id }, `${t.label} · ${t.w}×${t.h}`));
  }
  sel.value = carouselPost.board;
  sel.addEventListener('change', () => {
    carouselPost.board = sel.value;
    onCarouselBoardChanged();
  });
}

function onCarouselBoardChanged() {
  // Dot-arrangement availability depends on board size — re-check every page.
  for (const pg of carouselPost.pages) {
    const opts = dotsOptionsFor(carouselPost.board);
    if (!opts.some((d) => d.id === pg.dots)) pg.dots = opts[0]?.id || null;
  }
  buildPagesForm(); paintCarousel(); syncCarouselUrl();
}

function buildPageCountControl() {
  const input = $('#pageCount');
  input.value = String(carouselPost.pages.length);
  input.addEventListener('input', () => {
    const n = Math.max(1, Math.min(8, parseInt(input.value || '1', 10) || 1));
    input.value = String(n);
    while (carouselPost.pages.length < n) carouselPost.pages.push(defaultPage(carouselPost.board));
    carouselPost.pages.length = n;
    buildPagesForm(); paintCarousel(); syncCarouselUrl();
  });
}

function buildEndPagePicker() {
  const sel = $('#endPage');
  sel.value = carouselPost.endPage;
  sel.addEventListener('change', () => {
    carouselPost.endPage = sel.value;
    $('#endCaptionRow').hidden = carouselPost.endPage !== 'logo-qr';
    paintCarousel(); syncCarouselUrl();
  });
  $('#endCaptionRow').hidden = carouselPost.endPage !== 'logo-qr';
  const cap = $('#endCaption');
  cap.value = carouselPost.endCaption;
  cap.addEventListener('input', () => { carouselPost.endCaption = cap.value; paintCarousel(); syncCarouselUrl(); });
}

function buildSharedEyebrow() {
  const input = $('#sharedEyebrow');
  input.value = carouselPost.sharedEyebrow;
  input.addEventListener('input', () => {
    carouselPost.sharedEyebrow = input.value;
    for (const pg of carouselPost.pages) {
      if (byId(pg.archetype).slots.some((s) => s.key === 'eyebrow')) pg.slots.eyebrow = carouselPost.sharedEyebrow;
    }
    buildPagesForm(); paintCarousel(); syncCarouselUrl();
  });
}

function buildPagesForm() {
  const host = $('#pagesForm');
  host.innerHTML = '';
  carouselPost.pages.forEach((pg, i) => {
    const card = el('div', { class: 'pageCard' });
    card.append(el('h4', {}, i === 0 ? `หน้า ${i + 1} · ปก` : `หน้า ${i + 1}`));

    const aSel = el('select', {});
    optgroupsFor(aSel, CONTENT_ARCHETYPES);
    aSel.value = pg.archetype;
    aSel.addEventListener('change', () => {
      pg.archetype = aSel.value;
      pg.slots = {};
      for (const s of byId(pg.archetype).slots) pg.slots[s.key] = '';
      if (carouselPost.sharedEyebrow && byId(pg.archetype).slots.some((s) => s.key === 'eyebrow')) {
        pg.slots.eyebrow = carouselPost.sharedEyebrow;
      }
      buildPagesForm(); paintCarousel(); syncCarouselUrl();
    });
    card.append(el('label', {}, 'รูปแบบเนื้อหา'), aSel);

    const dSel = el('select', {});
    const dotsOpts = dotsOptionsFor(carouselPost.board);
    for (const d of dotsOpts) dSel.append(el('option', { value: d.id }, `${d.name} · ${d.requested} จุด`));
    if (!dotsOpts.some((d) => d.id === pg.dots)) pg.dots = dotsOpts[0]?.id || null;
    dSel.value = pg.dots;
    dSel.addEventListener('change', () => { pg.dots = dSel.value; paintCarousel(); syncCarouselUrl(); });
    card.append(el('label', {}, 'จุดตกแต่ง'), dSel);

    for (const slot of byId(pg.archetype).slots) {
      const id = `page-${i}-slot-${slot.key}`;
      card.append(el('label', { for: id }, slot.label));
      const ta = el('textarea', { id, rows: String(slot.rows || 1) });
      ta.value = pg.slots[slot.key] ?? '';
      ta.addEventListener('input', () => { pg.slots[slot.key] = ta.value; paintCarousel(); syncCarouselUrl(); });
      card.append(ta);
    }

    if (carouselPost.pages.length > 1) {
      const rm = el('button', { type: 'button', class: 'secondary small' }, 'ลบหน้านี้');
      rm.addEventListener('click', () => {
        carouselPost.pages.splice(i, 1);
        $('#pageCount').value = String(carouselPost.pages.length);
        buildPagesForm(); paintCarousel(); syncCarouselUrl();
      });
      card.append(rm);
    }
    host.append(card);
  });
}

function paintCarousel() {
  const t = boardById(carouselPost.board);
  const scale = Math.min(280 / t.w, 0.42);
  const strip = $('#carouselStage');
  strip.innerHTML = '';
  const specs = carouselPageSpecs(carouselPost);
  specs.forEach((spec, i) => {
    const { board } = renderBoard(spec, { scale, guides: false, pager: { index: i, total: specs.length } });
    const holder = el('div', { style: `width:${t.w * scale}px;height:${t.h * scale}px;position:relative;flex:0 0 auto` });
    holder.append(board);
    strip.append(holder);
  });
}

function syncCarouselUrl() {
  const u = new URL(location.href);
  u.searchParams.set('d', b64urlEncode({ mode: 'post', ...carouselPost }));
  history.replaceState(null, '', u);
}

async function buildZipBase64() {
  const t = boardById(carouselPost.board);
  const g = groundDefs().find((x) => x.id === carouselPost.ground);
  const specs = carouselPageSpecs(carouselPost);
  await document.fonts.ready;
  const zip = new JSZip();
  for (let i = 0; i < specs.length; i++) {
    const isEnd = carouselPost.endPage !== 'none' && i === specs.length - 1;
    $('#status2').textContent = `กำลังสร้างหน้า ${i + 1}/${specs.length}…`;
    const dataUrl = await renderPageDataUrl(specs[i], t.w, t.h, g.bg, { index: i, total: specs.length });
    const base64 = dataUrl.split(',')[1];
    const name = i === 0 ? '01-cover.png' : isEnd ? `${String(i + 1).padStart(2, '0')}-end.png` : `${String(i + 1).padStart(2, '0')}.png`;
    zip.file(name, base64, { base64: true });
  }
  return zip.generateAsync({ type: 'base64' });
}

window.kitExportZip = () => buildZipBase64();
window.kitCarouselPost = () => carouselPost;

$('#saveZip').addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  btn.disabled = true;
  try {
    const b64 = await buildZipBase64();
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const blob = new Blob([bytes], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    el('a', { download: `kit-post-${carouselPost.board}.zip`, href: url }).click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    $('#status2').textContent = `ได้ไฟล์ ${carouselPageSpecs(carouselPost).length} หน้า (ZIP)`;
  } catch (err) {
    $('#status2').textContent = 'ผิดพลาด: ' + err.message;
  } finally {
    btn.disabled = false;
  }
});

/* ══════════════════════════════════════════ URL load + boot ══════════════════════════════════════════ */
function loadFromUrl() {
  const u = new URL(location.href);
  const d = u.searchParams.get('d');
  if (!d) return;
  const parsed = b64urlDecode(d);
  if (!parsed) return;
  if (parsed.mode === 'post' && Array.isArray(parsed.pages)) {
    carouselPost = { ...carouselPost, ...parsed };
    setMode('post');
  } else if (parsed.archetype && byId(parsed.archetype)) {
    const empty = EMPTY(parsed.archetype);
    post = { ...empty, ...parsed, meta: { ...empty.meta, ...(parsed.meta || {}) } };
    setMode('single');
  }
}

loadFromUrl();
for (const s of byId(post.archetype).slots) if (!(s.key in post.slots)) post.slots[s.key] = '';

buildArchetypePicker();
buildBoardPicker();
buildGroundPicker($('#ground'), post.ground, (v) => { post.ground = v; paint(); syncUrl(); });
buildDotsPicker();
$('#frame').checked = post.frame !== 'frameless';
$('#frame').addEventListener('change', () => { post.frame = $('#frame').checked ? 'framed' : 'frameless'; paint(); syncUrl(); });
updateBgControlsVisibility();
buildForm();
paint();
syncUrl();

$('#guides').addEventListener('change', paint);
window.addEventListener('resize', () => { if (currentMode === 'single') paint(); else paintCarousel(); });

$('#save').addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  btn.disabled = true;
  $('#status').textContent = 'กำลังสร้างไฟล์…';
  try {
    const dataUrl = await exportDataUrl();
    const t = boardById(post.board);
    el('a', { download: `kit-${post.board}-${post.archetype}-${post.ground}.png`, href: dataUrl }).click();
    $('#status').textContent = `ได้ไฟล์ ${t.w}×${t.h} px`;
  } catch (err) {
    $('#status').textContent = 'ผิดพลาด: ' + err.message;
  } finally {
    btn.disabled = false;
  }
});

$('#copylink').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    $('#status').textContent = 'คัดลอกลิงก์แล้ว';
  } catch {
    $('#status').textContent = 'คัดลอกไม่สำเร็จ — ใช้ลิงก์จากแถบที่อยู่';
  }
});

buildPlatformPicker();
buildPostTypePicker();
buildPageCountControl();
buildGroundPicker($('#carouselGround'), carouselPost.ground, (v) => { carouselPost.ground = v; paintCarousel(); syncCarouselUrl(); });
$('#carouselFrame').checked = carouselPost.frame !== 'frameless';
$('#carouselFrame').addEventListener('change', () => {
  carouselPost.frame = $('#carouselFrame').checked ? 'framed' : 'frameless';
  paintCarousel(); syncCarouselUrl();
});
buildEndPagePicker();
buildSharedEyebrow();
buildPagesForm();
setMode(currentMode); // force the DOM (hidden panels, aria-pressed) to match whatever loadFromUrl decided
if (currentMode === 'post') { paintCarousel(); syncCarouselUrl(); } else { syncUrl(); }

$('#mode-single').addEventListener('click', () => { setMode('single'); syncUrl(); });
$('#mode-post').addEventListener('click', () => { setMode('post'); paintCarousel(); syncCarouselUrl(); });
