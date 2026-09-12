/* KIT Post Maker — content archetype definitions.
 *
 * As of the 2026-09-12 design-system refresh, ALL background geometry — canvas size,
 * ground colour, dot arrangement, curve placement, mark zone — comes from the design
 * system's own machine-readable spec, `social/variants.json` (loaded as
 * `window.KIT_VARIANTS`; see build.mjs and render.js). This file now holds only the
 * OPERATOR-FACING content types: which text slots an archetype asks for, and how each
 * slot is typeset (the CSS class from the design system's type scale).
 *
 * Every archetype's content flows inside whichever board size's ONE solver-verified
 * typeZone rectangle the operator picked (variants.json gives a single safe content
 * rectangle per board size, valid for any content — that is what makes 11 platform
 * sizes tractable). The pre-refresh version of this file hand-solved a separate
 * typezone/dot/curve geometry per archetype at ONE size (1080×1350 only); that does not
 * scale to 11 sizes and has been retired in favour of the shared rectangle + flexbox
 * centring, which reproduces the same visual variety (a short quote centres itself;
 * a long body fills the zone) without bespoke coordinates.
 *
 * slot.type (unchanged from the previous version):
 *   line       single-line <p>
 *   multiline  <p> with \n → <br>
 *   ol         numbered list, one item per input line, auto 01/02/03
 *   steps      "time | text" per line → <li><b>time</b><span>text</span>
 *   facts      "label | value" per line → <dl><dt>/<dd>
 *   chips      comma-separated → chips (filled / outline, cycling)
 *   cta        single-line button; slot.channel:"line" forces LINE green
 */

export const ARCHETYPES = [
  /* ─────────────────────────────── content frame ─────────────────────────────── */
  {
    id: 'frame-default',
    group: 'พื้นฐาน · Content frame',
    label: 'Content frame — ปกติ (~40 คำ)',
    slots: [
      { key: 'headline', cls: 'head', type: 'multiline', label: 'หัวเรื่อง', rows: 2 },
      { key: 'body', cls: 'body', type: 'multiline', label: 'เนื้อหา', rows: 4 },
    ],
  },
  {
    id: 'frame-short',
    group: 'พื้นฐาน · Content frame',
    label: 'Content frame — สั้น (~8 คำ)',
    slots: [{ key: 'headline', cls: 'head-xl', type: 'multiline', label: 'หัวเรื่อง (สั้น)', rows: 2 }],
  },
  {
    id: 'frame-long',
    group: 'พื้นฐาน · Content frame',
    label: 'Content frame — ยาว (~120 คำ)',
    gap: 30,
    warn: 'ถ้าเกินพื้นที่นี้ ให้ทำเป็น carousel — อย่าลดขนาดตัวอักษร',
    slots: [
      { key: 'headline', cls: 'head-sm', type: 'multiline', label: 'หัวเรื่อง', rows: 2 },
      { key: 'body', cls: 'body-sm', type: 'multiline', label: 'ย่อหน้าหลัก', rows: 5 },
      { key: 'body2', cls: 'body-sm', type: 'multiline', label: 'ย่อหน้าที่สอง (ไม่บังคับ)', rows: 4, optional: true },
    ],
  },

  /* ─────────────────────────────── 7 archetypes ─────────────────────────────── */
  {
    id: 'knowledge-card',
    group: 'อาร์คีไทป์ · Archetypes',
    label: '1 · Knowledge card ★ (การ์ดความรู้)',
    gap: 34,
    slots: [
      { key: 'eyebrow', cls: 'eyebrow', type: 'line', label: 'บรรทัดนำ' },
      { key: 'headline', cls: 'head-sm', type: 'multiline', label: 'หัวเรื่อง', rows: 2 },
      { key: 'list', cls: '', type: 'ol', label: 'รายการ (บรรทัดละ 1 ข้อ)', rows: 4 },
    ],
  },
  {
    id: 'quote',
    group: 'อาร์คีไทป์ · Archetypes',
    label: '3 · Quote / single line (คำพูดสั้น)',
    heart: true,
    slots: [{ key: 'quote', cls: 'head', type: 'multiline', label: 'คำพูด', rows: 4 }],
  },
  {
    id: 'event',
    group: 'อาร์คีไทป์ · Archetypes',
    label: '4 · Event announcement ★ (ประกาศอีเวนต์)',
    gap: 30,
    slots: [
      { key: 'themes', cls: '', type: 'chips', label: 'แท็ก (คั่นด้วยจุลภาค)' },
      { key: 'headline', cls: 'head-sm', type: 'multiline', label: 'ชื่ออีเวนต์', rows: 2 },
      { key: 'facts', cls: '', type: 'facts', label: 'รายละเอียด ("หัวข้อ | ค่า" บรรทัดละ 1)', rows: 4 },
      { key: 'reassurance', cls: 'body-xs', type: 'multiline', label: 'ข้อความให้ความมั่นใจ', rows: 2, meta: true },
      { key: 'cta', cls: '', type: 'cta', channel: 'line', label: 'ปุ่ม (LINE)' },
    ],
  },
  {
    id: 'question',
    group: 'อาร์คีไทป์ · Archetypes',
    label: '5 · Engagement prompt (คำถามชวนคุย)',
    slots: [
      { key: 'eyebrow', cls: 'eyebrow', type: 'line', label: 'บรรทัดนำ' },
      { key: 'question', cls: 'head', type: 'multiline', label: 'คำถาม', rows: 2 },
      { key: 'body', cls: 'body-sm', type: 'multiline', label: 'คำอธิบาย', rows: 3, meta: true },
    ],
  },
  {
    id: 'member-voice',
    group: 'อาร์คีไทป์ · Archetypes',
    label: '6 · Member voice (เสียงสมาชิก) — ข้อความล้วน',
    wash: true,
    slots: [
      { key: 'quote', cls: 'head-sm', type: 'multiline', label: 'คำพูดของสมาชิก', rows: 4 },
      { key: 'attribution', cls: 'meta', type: 'multiline', label: 'ที่มา (โดยได้รับอนุญาต)', rows: 2 },
    ],
  },
  {
    id: 'format-explainer',
    group: 'อาร์คีไทป์ · Archetypes',
    label: '7 · Format explainer ★ (อธิบายรูปแบบงาน)',
    gap: 36,
    slots: [
      { key: 'eyebrow', cls: 'eyebrow', type: 'line', label: 'บรรทัดนำ' },
      { key: 'headline', cls: 'head-sm', type: 'multiline', label: 'หัวเรื่อง', rows: 2 },
      { key: 'steps', cls: '', type: 'steps', label: 'ลำดับเวลา ("เวลา | รายละเอียด" บรรทัดละ 1)', rows: 4 },
      { key: 'note', cls: 'body-xs', type: 'multiline', label: 'หมายเหตุ', rows: 2, meta: true },
    ],
  },

  /* ─────────────────────────────── end pages ─────────────────────────────── */
  // The last page of a multi-page post, per the design system's `endPages` spec —
  // no dots, no curve, no per-archetype typezone. See render.js renderEndPage().
  {
    id: 'end-logo',
    group: 'ปิดท้าย · End page',
    label: 'End page — โลโก้เต็มหน้า',
    endPage: 'logo',
    slots: [],
  },
  {
    id: 'end-logo-qr',
    group: 'ปิดท้าย · End page',
    label: 'End page — โลโก้ + LINE QR',
    endPage: 'logo-qr',
    slots: [{ key: 'caption', cls: 'body-sm', type: 'line', label: 'ข้อความใต้โลโก้ (ไม่บังคับ — ค่าเริ่มต้นจาก design system)', optional: true }],
  },
];

export const byId = (id) => ARCHETYPES.find((a) => a.id === id);
