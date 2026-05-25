export const CATEGORIES = ['聲母', '介音', '韻母'];

export const ZHUYIN_SYMBOLS = [
  // ── 聲母 (Initials) ──────────────────────────────────
  { symbol: 'ㄅ', romanization: 'b',  description: '雙唇不送氣清塞音', category: '聲母' },
  { symbol: 'ㄆ', romanization: 'p',  description: '雙唇送氣清塞音',   category: '聲母' },
  { symbol: 'ㄇ', romanization: 'm',  description: '雙唇鼻音',         category: '聲母' },
  { symbol: 'ㄈ', romanization: 'f',  description: '唇齒清擦音',       category: '聲母' },
  { symbol: 'ㄉ', romanization: 'd',  description: '舌尖不送氣清塞音', category: '聲母' },
  { symbol: 'ㄊ', romanization: 't',  description: '舌尖送氣清塞音',   category: '聲母' },
  { symbol: 'ㄋ', romanization: 'n',  description: '舌尖鼻音',         category: '聲母' },
  { symbol: 'ㄌ', romanization: 'l',  description: '舌尖邊音',         category: '聲母', dataOverride: true },
  { symbol: 'ㄍ', romanization: 'g',  description: '舌根不送氣清塞音', category: '聲母' },
  { symbol: 'ㄎ', romanization: 'k',  description: '舌根送氣清塞音',   category: '聲母' },
  { symbol: 'ㄏ', romanization: 'h',  description: '舌根清擦音',       category: '聲母', dataOverride: true },
  { symbol: 'ㄐ', romanization: 'j',  description: '舌面不送氣清塞擦音', category: '聲母' },
  { symbol: 'ㄑ', romanization: 'q',  description: '舌面送氣清塞擦音', category: '聲母' },
  { symbol: 'ㄒ', romanization: 'x',  description: '舌面清擦音',       category: '聲母' },
  { symbol: 'ㄓ', romanization: 'zh', description: '舌尖後不送氣清塞擦音', category: '聲母' },
  { symbol: 'ㄔ', romanization: 'ch', description: '舌尖後送氣清塞擦音',   category: '聲母' },
  { symbol: 'ㄕ', romanization: 'sh', description: '舌尖後清擦音',     category: '聲母' },
  { symbol: 'ㄖ', romanization: 'r',  description: '舌尖後濁擦音',     category: '聲母', dataOverride: true },
  { symbol: 'ㄗ', romanization: 'z',  description: '舌尖前不送氣清塞擦音', category: '聲母' },
  { symbol: 'ㄘ', romanization: 'c',  description: '舌尖前送氣清塞擦音',   category: '聲母' },
  { symbol: 'ㄙ', romanization: 's',  description: '舌尖前清擦音',     category: '聲母' },
  // ── 介音 (Medials) ───────────────────────────────────
  { symbol: 'ㄧ', romanization: 'i',  description: '舌面前高元音',     category: '介音', dataOverride: true },
  { symbol: 'ㄨ', romanization: 'u',  description: '舌面後高圓唇元音', category: '介音', dataOverride: true },
  { symbol: 'ㄩ', romanization: 'ü',  description: '舌面前高圓唇元音', category: '介音' },
  // ── 韻母 (Finals) ────────────────────────────────────
  { symbol: 'ㄚ', romanization: 'a',   description: '低元音',           category: '韻母', dataOverride: true },
  { symbol: 'ㄛ', romanization: 'o',   description: '後半高圓唇元音',   category: '韻母' },
  { symbol: 'ㄜ', romanization: 'e',   description: '後半高非圓唇元音', category: '韻母' },
  { symbol: 'ㄝ', romanization: 'ê',   description: '前中低元音',       category: '韻母', dataOverride: true },
  { symbol: 'ㄞ', romanization: 'ai',  description: '前低複元音',       category: '韻母' },
  { symbol: 'ㄟ', romanization: 'ei',  description: '前高複元音',       category: '韻母' },
  { symbol: 'ㄠ', romanization: 'ao',  description: '後低複元音',       category: '韻母' },
  { symbol: 'ㄡ', romanization: 'ou',  description: '後高複元音',       category: '韻母' },
  { symbol: 'ㄢ', romanization: 'an',  description: '前鼻韻母',         category: '韻母' },
  { symbol: 'ㄣ', romanization: 'en',  description: '前鼻韻母',         category: '韻母' },
  { symbol: 'ㄤ', romanization: 'ang', description: '後鼻韻母',         category: '韻母' },
  { symbol: 'ㄥ', romanization: 'eng', description: '後鼻韻母',         category: '韻母' },
  { symbol: 'ㄦ', romanization: 'er',  description: '捲舌元音',         category: '韻母' },
];

// Groups of phonetically similar symbols — used for challenge-mode distractors
export const SIMILAR_GROUPS = [
  ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ'],       // labials
  ['ㄉ', 'ㄊ', 'ㄋ', 'ㄌ'],       // dentals
  ['ㄍ', 'ㄎ', 'ㄏ'],             // velars
  ['ㄐ', 'ㄑ', 'ㄒ'],             // palatals
  ['ㄓ', 'ㄔ', 'ㄕ', 'ㄖ'],       // retroflexes
  ['ㄗ', 'ㄘ', 'ㄙ'],             // sibilants
  ['ㄧ', 'ㄨ', 'ㄩ'],             // medials
  ['ㄚ', 'ㄛ', 'ㄜ', 'ㄝ'],       // open vowels
  ['ㄞ', 'ㄟ'],                   // front diphthongs
  ['ㄠ', 'ㄡ'],                   // back diphthongs
  ['ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'], // nasals + er
];

export const CATEGORY_COLORS = {
  '聲母': { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', badge: '#2563eb' },
  '介音': { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d', badge: '#16a34a' },
  '韻母': { bg: '#fdf4ff', border: '#e9d5ff', text: '#7e22ce', badge: '#9333ea' },
};
