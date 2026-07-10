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
    <div className="wsp__zhuyin-col">
      {isNeutral && <span className="wsp__zhuyin-neutral">{tone}</span>}
      {bases.map((ch, j) => {
        const isLast = j === bases.length - 1;
        const showTone = isLast && tone && !isNeutral;
        if (showTone) {
          return (
            <div key={j} className="wsp__zhuyin-last">
              <span className="wsp__zhuyin-sym">{ch}</span>
              <span className="wsp__zhuyin-tone" style={{ alignSelf: TONE_ALIGN[tone] ?? 'center' }}>{tone}</span>
            </div>
          );
        }
        return <span key={j} className="wsp__zhuyin-sym">{ch}</span>;
      })}
    </div>
  );
}

// entry: { word, zhuyin, en, jp, illustration }
export default function WordSidePanel({ entry }) {
  const { lang } = useLang();

  return (
    <aside className="word-side-panel">
      {entry ? (
        <>
          {/* 插圖區 */}
          <div className="wsp__illustration">
            {entry.illustration
              ? <img src={entry.illustration} alt={entry.word} className="wsp__img" />
              : <span className="wsp__placeholder" aria-hidden="true" />
            }
          </div>

          {/* 單字 + 注音 */}
          <div className="wsp__word">
            {entry.word.split('').map((char, i) => (
              <div key={i} className="wsp__char-wrap">
                <ZhuyinCol zhuyin={entry.zhuyin?.[i]} />
                <span className="wsp__char">{char}</span>
              </div>
            ))}
          </div>

          {/* 譯文 */}
          <p className="wsp__translation">{lang === 'JP' ? entry.jp : entry.en}</p>
        </>
      ) : (
        <p className="wsp__hint">點擊格子查看單字</p>
      )}
    </aside>
  );
}
