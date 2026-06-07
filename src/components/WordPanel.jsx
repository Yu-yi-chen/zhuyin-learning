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

// 規則：
//   ˙（輕聲）→ 標在整個注音欄正上方
//   ˊˇˋ     → 固定在最後一個注音符號的右上角
function ZhuyinAnnotation({ zhuyin }) {
  const { bases, tone } = parseZhuyin(zhuyin);
  const isNeutral = tone === '˙';

  return (
    <div className="word-panel__zhuyin">
      {/* 輕聲：整欄正上方 */}
      {isNeutral && (
        <span className="word-panel__zhuyin-neutral">{tone}</span>
      )}

      {bases.map((ch, j) => {
        const isLast = j === bases.length - 1;
        const showTone = isLast && tone && !isNeutral;

        // 最後一個符號：跟調號包在同一個 row 裡，調號貼右上角
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
  const entry = SYMBOL_WORDS_MAP.get(symbol);
  if (!entry) return null;

  const { word, zhuyin, en, jp, illustration } = entry;
  const translation = lang === 'JP' ? jp : en;

  return (
    <div className="word-panel">
      {/* 插圖區 */}
      <div className="word-panel__illustration">
        {illustration
          ? <img src={illustration} alt={word} className="word-panel__img" />
          : <span className="word-panel__placeholder" aria-hidden="true" />
        }
      </div>

      {/* 單字 + 注音 */}
      <div className="word-panel__word">
        {word.split('').map((char, i) => (
          <div key={i} className="word-panel__char-wrap">
            <ZhuyinAnnotation zhuyin={zhuyin[i]} />
            <span className="word-panel__char">{char}</span>
          </div>
        ))}
      </div>

      {/* 譯文 */}
      <p className="word-panel__translation">{translation}</p>
    </div>
  );
}
