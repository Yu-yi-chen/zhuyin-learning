import { useEffect, useRef, useState } from 'react';
import { useLang } from '../contexts/LangContext';
import { SYMBOL_WORDS_MAP } from '../data/words';

const TONE_MARKS = new Set(['ˊ', 'ˇ', 'ˋ', '˙']);

// 把注音字串拆成 { bases: string[], tone: string }
// 'ㄆㄧㄥˊ' → { bases: ['ㄆ','ㄧ','ㄥ'], tone: 'ˊ' }
// '˙ㄗ'     → { bases: ['ㄗ'],           tone: '˙' }
// 'ㄇㄠ'    → { bases: ['ㄇ','ㄠ'],       tone: ''  }
function parseZhuyin(str) {
  if (!str) return { bases: [], tone: '' };
  const chars = [...str];
  let tone = '';
  if (chars[0] === '˙') { tone = '˙'; chars.shift(); }
  else if (TONE_MARKS.has(chars[chars.length - 1])) { tone = chars.pop(); }
  return { bases: chars, tone };
}

function ZhuyinAnnotation({ zhuyin }) {
  const { bases, tone } = parseZhuyin(zhuyin);
  const isNeutral = tone === '˙';

  return (
    <div className="word-panel__zhuyin">
      {isNeutral && (
        <span className="word-panel__zhuyin-neutral">{tone}</span>
      )}

      {bases.map((ch, j) => {
        const isLast = j === bases.length - 1;
        const showTone = isLast && tone && !isNeutral;

        if (showTone) {
          return (
            <div key={j} className="word-panel__zhuyin-last">
              <span className="word-panel__zhuyin-sym">{ch}</span>
              <span className="word-panel__zhuyin-tone">{tone}</span>
            </div>
          );
        }

        return <span key={j} className="word-panel__zhuyin-sym">{ch}</span>;
      })}
    </div>
  );
}

export default function WordPanel({ symbol }) {
  const { lang } = useLang();
  const audioRef = useRef(null);
  const [hasAudio, setHasAudio] = useState(false);
  const audioSrc = `/audio/words/${symbol}.m4a`;

  // 音檔不存在時隱藏播放鍵（R3）
  useEffect(() => {
    setHasAudio(false);
    const probe = new Audio(audioSrc);
    probe.addEventListener('canplaythrough', () => setHasAudio(true), { once: true });
    probe.load();
    return () => { probe.src = ''; };
  }, [audioSrc]);

  const entry = SYMBOL_WORDS_MAP.get(symbol);
  if (!entry) return null;

  const { word, zhuyin, en, jp, illustration } = entry;
  const translation = lang === 'JP' ? jp : en;

  const playWord = () => {
    audioRef.current?.pause();
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    audio.play();
  };

  return (
    <div className="word-panel">
      {/* 插圖區 */}
      <div className="word-panel__illustration">
        {illustration
          ? <img src={illustration} alt={word} className="word-panel__img" />
          : <span className="word-panel__placeholder" aria-hidden="true" />
        }
      </div>

      {/* 單字 + 注音 + 播放 */}
      <div className="word-panel__word">
        {word.split('').map((char, i) => (
          <div key={i} className="word-panel__char-wrap">
            <ZhuyinAnnotation zhuyin={zhuyin[i]} />
            <span className="word-panel__char">{char}</span>
          </div>
        ))}
        {hasAudio && (
          <button className="word-panel__play" onClick={playWord} aria-label={`播放 ${word}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          </button>
        )}
      </div>

      {/* 譯文 */}
      <p className="word-panel__translation">{translation}</p>
    </div>
  );
}
