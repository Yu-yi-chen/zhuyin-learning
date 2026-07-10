import { useEffect, useRef, useState } from 'react';
import { useLang } from '../contexts/LangContext';

const TONE_MARKS = new Set(['ˊ', 'ˇ', 'ˋ', '˙']);

function parseZhuyin(str) {
  if (!str) return { bases: [], tone: '' };
  const chars = [...str];
  let tone = '';
  if (chars[0] === '˙') { tone = '˙'; chars.shift(); }
  else if (TONE_MARKS.has(chars[chars.length - 1])) { tone = chars.pop(); }
  return { bases: chars, tone };
}

const TONE_ALIGN = { 'ˊ': 'flex-start', 'ˇ': 'center', 'ˋ': 'flex-end', '˙': 'flex-start' };

function ZhuyinCol({ zhuyin }) {
  const { bases, tone } = parseZhuyin(zhuyin);
  const isNeutral = tone === '˙';
  return (
    <div className="wp__zhuyin-col">
      {isNeutral && <span className="wp__zhuyin-neutral">{tone}</span>}
      {bases.map((ch, j) => {
        const isLast = j === bases.length - 1;
        const showTone = isLast && tone && !isNeutral;
        if (showTone) {
          return (
            <div key={j} className="wp__zhuyin-last">
              <span className="wp__zhuyin-sym">{ch}</span>
              <span className="wp__zhuyin-tone" style={{ alignSelf: TONE_ALIGN[tone] ?? 'center' }}>{tone}</span>
            </div>
          );
        }
        return <span key={j} className="wp__zhuyin-sym">{ch}</span>;
      })}
    </div>
  );
}

// entry: { word, zhuyin[], en, jp, illustration }
// audioSrc: 例詞音檔路徑（有提供且載入成功時：開卡自動播放 + 顯示播放鍵）
// 置中 modal + 遮罩
export default function WordPopover({ entry, audioSrc, onClose }) {
  const { lang } = useLang();
  const audioRef = useRef(null);
  const [hasAudio, setHasAudio] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // 音檔載入 + 開卡自動播放；關卡或換詞時停止
  useEffect(() => {
    setHasAudio(false);
    if (!entry || !audioSrc) return undefined;
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    audio.addEventListener('canplaythrough', () => {
      setHasAudio(true);
      audio.play().catch(() => {});   // iOS 首次互動前可能被擋，播放鍵可補救
    }, { once: true });
    audio.load();
    return () => { audio.pause(); audio.src = ''; };
  }, [entry, audioSrc]);

  const playWord = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  if (!entry) return null;

  const translation = lang === 'JP' ? entry.jp : entry.en;

  return (
    <div className="word-popover-overlay" onClick={onClose}>
      <div
        className="word-popover"
        role="dialog"
        aria-label={entry.word}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉 */}
        <button className="wp__close" onClick={onClose} aria-label="關閉">✕</button>

        {/* 插圖 */}
        <div className="wp__illustration">
          {entry.illustration
            ? <img src={entry.illustration} alt={entry.word} className="wp__img" />
            : <span className="wp__placeholder" aria-hidden="true" />
          }
        </div>

        {/* 單字 + 注音 + 播放 */}
        <div className="wp__word">
          {entry.word.split('').map((char, i) => (
            <div key={i} className="wp__char-wrap">
              <ZhuyinCol zhuyin={entry.zhuyin?.[i]} />
              <span className="wp__char">{char}</span>
            </div>
          ))}
          {hasAudio && (
            <button className="wp__play" onClick={playWord} aria-label={`播放 ${entry.word}`}>
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
        <p className="wp__translation">{translation}</p>
      </div>
    </div>
  );
}
