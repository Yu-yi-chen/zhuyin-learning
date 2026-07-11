// 批次生成例詞發音 — Gemini TTS (gemini-2.5-flash-preview-tts)
//
// 用法：node scripts/generate-word-audio.mjs [words|compounds]   # 預設 words
// 輸出：public/audio/{set}/{key}.m4a
// 已存在的自動跳過；單檔重生成請先刪除對應 .m4a。

import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { SYMBOL_WORDS } from '../src/data/words.js';
import { COMPOUND_GROUPS } from '../src/data/compounds.js';
import { DUPLEX_WORDS } from '../src/data/duplex.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// pro 模型另有獨立額度；指示句必須用英文（全中文指示會被拒答 finishReason: OTHER）
const MODEL = 'gemini-2.5-pro-preview-tts';
const VOICE = 'Leda';
const RETRIES = 2; // 每日 100 請求上限（per model），重試次數保守以免燒光額度

const SETS = {
  words: {
    outDir: 'public/audio/words',
    items: SYMBOL_WORDS.map((e) => ({ key: e.symbol, word: e.word })),
  },
  compounds: {
    outDir: 'public/audio/compounds',
    items: COMPOUND_GROUPS.flatMap((g) =>
      g.items.map((e) => ({ key: e.compound, word: e.word }))),
  },
  duplex: {
    outDir: 'public/audio/duplex',
    items: Object.entries(DUPLEX_WORDS).map(([key, e]) => ({ key, word: e.word })),
  },
};

const setName = process.argv[2] ?? 'words';
const SET = SETS[setName];
if (!SET) {
  console.error(`未知資料集 "${setName}"，可用：${Object.keys(SETS).join(' | ')}`);
  process.exit(1);
}
const OUT_DIR = resolve(ROOT, SET.outDir);

let apiKey = process.env.GEMINI_API_KEY;
if (!apiKey && existsSync(resolve(ROOT, '.env'))) {
  const m = readFileSync(resolve(ROOT, '.env'), 'utf8').match(/^GEMINI_API_KEY=(.+)$/m);
  if (m) apiKey = m[1].trim();
}
if (!apiKey) {
  console.error('缺少 GEMINI_API_KEY');
  process.exit(1);
}

// PCM 16-bit LE 24kHz mono → WAV
function pcmToWav(pcm) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + pcm.length, 4); h.write('WAVE', 8);
  h.write('fmt ', 12); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20);
  h.writeUInt16LE(1, 22); h.writeUInt32LE(24000, 24); h.writeUInt32LE(48000, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

async function tts(word) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Say this word clearly in Taiwanese Mandarin, in a warm teaching voice for children: ${word}` }],
        }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } },
          },
        },
      }),
    },
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
  if (!part) throw new Error(json.candidates?.[0]?.finishReason ?? 'no audio');
  return Buffer.from(part.inlineData.data, 'base64');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mkdirSync(OUT_DIR, { recursive: true });

let ok = 0, skipped = 0, failed = [];

for (const entry of SET.items) {
  const m4aPath = resolve(OUT_DIR, `${entry.key}.m4a`);
  if (existsSync(m4aPath)) { skipped++; continue; }

  process.stdout.write(`${entry.key} ${entry.word} … `);
  let pcm = null;
  for (let attempt = 1; attempt <= RETRIES && !pcm; attempt++) {
    try {
      pcm = await tts(entry.word);
    } catch (err) {
      if (attempt === RETRIES) {
        failed.push(entry.key);
        console.log(`✗ ${err.message}`);
      } else {
        // 429 等更久讓 quota 視窗重置
        await sleep(err.message.includes('429') ? 30000 : 8000);
      }
    }
  }
  if (pcm) {
    const wavPath = resolve(OUT_DIR, `${entry.key}.wav`);
    writeFileSync(wavPath, pcmToWav(pcm));
    execFileSync('afconvert', ['-f', 'm4af', '-d', 'aac', wavPath, m4aPath]);
    unlinkSync(wavPath);
    ok++;
    console.log('✓');
  }
  await sleep(15000); // TTS rate limit 較嚴，拉大間隔
}

console.log(`\n完成：${ok} 個新生成、${skipped} 個已存在、${failed.length} 個失敗`);
if (failed.length) console.log(`失敗清單：${failed.join(' ')}`);
