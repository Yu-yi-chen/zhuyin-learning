// 每個注音符號在 bopomofo.mp3 裡的時間區間（秒）
// 來源：教育部終身教育司《注音符號手冊》CC BY 4.0
// 時間點由 ffmpeg silencedetect 分析實際音訊邊界取得
const CLIPS = {
  'ㄅ': [0.000, 0.597],
  'ㄆ': [0.850, 1.515],
  'ㄇ': [1.659, 2.377],
  'ㄈ': [2.504, 3.208],
  'ㄉ': [3.356, 3.959],
  'ㄊ': [4.152, 4.808],
  'ㄋ': [4.949, 5.719],
  'ㄌ': [5.791, 6.514],
  'ㄍ': [6.603, 7.251],
  'ㄎ': [7.440, 8.213],
  'ㄏ': [8.305, 9.000],
  'ㄐ': [9.115, 9.786],
  'ㄑ': [9.935, 10.652],
  'ㄒ': [10.773, 11.546],
  'ㄓ': [11.615, 12.309],
  'ㄔ': [12.423, 13.121],
  'ㄕ': [13.220, 13.974],
  'ㄖ': [14.073, 14.794],
  'ㄗ': [14.877, 15.601],
  'ㄘ': [15.706, 16.474],
  'ㄙ': [16.526, 17.281],
  'ㄚ': [17.338, 18.032],
  'ㄛ': [18.141, 18.822],
  'ㄜ': [18.940, 19.541],
  'ㄝ': [19.751, 20.415],
  'ㄞ': [20.575, 21.308],
  'ㄟ': [21.396, 22.163],
  'ㄠ': [22.222, 22.947],
  'ㄡ': [23.048, 23.799],
  'ㄢ': [23.882, 24.654],
  'ㄣ': [24.711, 25.462],
  'ㄤ': [25.541, 26.311],
  'ㄥ': [26.355, 27.115],
  'ㄦ': [27.163, 27.950],
  'ㄧ': [27.995, 28.697],
  'ㄨ': [28.800, 29.587],
  'ㄩ': [29.640, 30.380],
};

// ── Web Audio API — sample-accurate playback ──────────────────
// Reuses Tone.js's underlying AudioContext so the whole app runs
// on a single AudioContext. Two separate AudioContexts running
// simultaneously can cause buffer scheduling conflicts → crackling.

import * as Tone from 'tone';

let _buffer = null;
let _loadP  = null;           // shared load promise (fetch once)
let _src    = null;           // currently playing BufferSourceNode

function getCtx() {
  return Tone.context.rawContext;
}

async function getBuffer() {
  if (_buffer) return _buffer;
  if (_loadP)  return _loadP;

  _loadP = (async () => {
    const ctx = getCtx();
    const res = await fetch('/audio/bopomofo.mp3');
    const ab  = await res.arrayBuffer();
    _buffer   = await ctx.decodeAudioData(ab);
    return _buffer;
  })();

  return _loadP;
}

// Call on any page that uses Zhuyin to pre-fetch the audio buffer
export function preloadZhuyin() {
  getBuffer().catch(() => {});
}

export async function playZhuyin(symbol) {
  const clip = CLIPS[symbol];
  if (!clip) return;

  const [start, end] = clip;
  const ctx = getCtx();

  // Resume via Tone.start() so it works with the shared context
  if (ctx.state === 'suspended') await Tone.start();

  // Stop the previous clip immediately (no fade — crisp cut)
  if (_src) {
    try { _src.stop(0); } catch {}
    _src = null;
  }

  const buffer = await getBuffer();

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);

  // start(contextTime, offset, duration) — stops exactly at `duration`
  // with sample-level accuracy. No polling needed.
  source.start(0, start, end - start);
  _src = source;

  source.onended = () => {
    if (_src === source) _src = null;
  };
}
