const YOUYIN_CDN = 'https://cdn.jsdelivr.net/gh/MadLadSquad/hanzi-writer-data-youyin@latest/data';
const OVERRIDE_BASE = '/zhuyin-overrides';
const OVERRIDE_VERSION = 7; // bump to invalidate browser cache

// In-memory cache — persists across symbol changes within a session
const dataCache = new Map();

export function fetchCharData(char) {
  if (dataCache.has(char)) return Promise.resolve(dataCache.get(char));

  const cdnUrl = `${YOUYIN_CDN}/${encodeURIComponent(char)}.json`;
  return fetch(`${OVERRIDE_BASE}/${encodeURIComponent(char)}.json?v=${OVERRIDE_VERSION}`)
    .then((res) => {
      if (!res.ok) throw new Error('no override');
      const ct = res.headers.get('content-type') ?? '';
      if (!ct.includes('json')) throw new Error('not json');
      return res.json();
    })
    .catch(() => fetch(cdnUrl).then((r) => {
      if (!r.ok) throw new Error('no data');
      return r.json();
    }))
    .then((data) => { dataCache.set(char, data); return data; });
}

// HanziWriter-compatible loader (char, onLoad, onError)
export function charDataLoader(char, onLoad, onError) {
  fetchCharData(char).then(onLoad).catch(onError);
}

// Pre-warm the cache for a list of symbols (fire-and-forget)
export function prefetchSymbols(chars) {
  chars.forEach((char) => { fetchCharData(char).catch(() => {}); });
}
