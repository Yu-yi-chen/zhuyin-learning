// 批次生成例詞插圖 — Gemini API (gemini-2.5-flash-image)
//
// 用法：
//   node scripts/generate-illustrations.mjs [words|compounds]   # 預設 words
//   （GEMINI_API_KEY 放環境變數或專案根目錄 .env）
//
// 已存在的圖片會自動跳過，重生成單張時先刪掉對應 png 再跑。

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SYMBOL_WORDS } from '../src/data/words.js';
import { COMPOUND_GROUPS } from '../src/data/compounds.js';
import { SYLLABLE_WORDS } from '../src/data/syllable-words.js';
import { DUPLEX_WORDS } from '../src/data/duplex.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STYLE_REF = resolve(ROOT, 'scripts/style-ref-white.png');
const MODEL = 'gemini-2.5-flash-image';

// ── 資料集：key = 檔名，entry 需有 word / en ──
const SETS = {
  words: {
    outDir: 'public/illustrations/words',
    items: SYMBOL_WORDS.map((e) => ({ key: e.symbol, ...e })),
  },
  compounds: {
    outDir: 'public/illustrations/compounds',
    items: COMPOUND_GROUPS.flatMap((g) =>
      g.items.map((e) => ({ key: e.compound, ...e }))),
  },
  syllables: {
    outDir: 'public/illustrations/syllables',
    items: Object.entries(SYLLABLE_WORDS).map(([key, e]) => ({ key, ...e })),
  },
  duplex: {
    outDir: 'public/illustrations/duplex',
    items: Object.entries(DUPLEX_WORDS).map(([key, e]) => ({ key, ...e })),
  },
};

const setName = process.argv[2] ?? 'words';
const SET = SETS[setName];
if (!SET) {
  console.error(`未知資料集 "${setName}"，可用：${Object.keys(SETS).join(' | ')}`);
  process.exit(1);
}
const OUT_DIR = resolve(ROOT, SET.outDir);

// ── API key：環境變數優先，其次 .env ──
let apiKey = process.env.GEMINI_API_KEY;
if (!apiKey && existsSync(resolve(ROOT, '.env'))) {
  const m = readFileSync(resolve(ROOT, '.env'), 'utf8').match(/^GEMINI_API_KEY=(.+)$/m);
  if (m) apiKey = m[1].trim();
}
if (!apiKey) {
  console.error('缺少 GEMINI_API_KEY（環境變數或 .env）');
  process.exit(1);
}

const styleRefB64 = readFileSync(STYLE_REF).toString('base64');

const promptFor = (entry) =>
  `Using the attached image as the exact style reference (soft matte 3D claymation, ` +
  `rounded shapes, gentle studio lighting, solid pure white background #FFFFFF), ` +
  `create an illustration of: ${entry.en} (${entry.word}). ` +
  `Single centered object, children's educational app icon, no text, no border, ` +
  `same rendering style, same lighting. The background MUST be solid pure white, ` +
  `never black, never dark, never transparent.`;

async function generate(entry) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: {
        'x-goog-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { inline_data: { mime_type: 'image/png', data: styleRefB64 } },
            { text: promptFor(entry) },
          ],
        }],
      }),
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }

  const json = await res.json();
  const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
  if (!part) {
    throw new Error(`回應中沒有圖片：${JSON.stringify(json).slice(0, 300)}`);
  }
  return Buffer.from(part.inlineData.data, 'base64');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mkdirSync(OUT_DIR, { recursive: true });

let ok = 0, skipped = 0, failed = [];

for (const entry of SET.items) {
  const outPath = resolve(OUT_DIR, `${entry.key}.png`);
  if (existsSync(outPath)) {
    skipped++;
    continue;
  }

  process.stdout.write(`${entry.key} ${entry.word} (${entry.en}) … `);
  try {
    const img = await generate(entry);
    writeFileSync(outPath, img);
    ok++;
    console.log('✓');
  } catch (err) {
    // 重試一次
    try {
      await sleep(5000);
      const img = await generate(entry);
      writeFileSync(outPath, img);
      ok++;
      console.log('✓ (retry)');
    } catch (err2) {
      failed.push(entry.key);
      console.log(`✗ ${err2.message}`);
    }
  }

  await sleep(6500); // 免費層 rate limit 保險
}

console.log(`\n完成：${ok} 張新生成、${skipped} 張已存在、${failed.length} 張失敗`);
if (failed.length) console.log(`失敗清單：${failed.join(' ')}`);
