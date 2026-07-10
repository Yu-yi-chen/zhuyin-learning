import { useEffect } from 'react';
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
// 置中 modal + 遮罩；anchor 已不需要（保留參數位置讓呼叫端不用改）
export default function WordPopover({ entry, onClose }) {
  const { lang } = useLang();

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

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

        {/* 單字 + 注音 */}
        <div className="wp__word">
          {entry.word.split('').map((char, i) => (
            <div key={i} className="wp__char-wrap">
              <ZhuyinCol zhuyin={entry.zhuyin?.[i]} />
              <span className="wp__char">{char}</span>
            </div>
          ))}
        </div>

        {/* 譯文 */}
        <p className="wp__translation">{translation}</p>
      </div>
    </div>
  );
}
