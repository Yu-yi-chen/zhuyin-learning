import { useLang } from '../contexts/LangContext';
import { SYMBOL_WORDS_MAP } from '../data/words';

const TONE_MARKS = new Set(['ˊ', 'ˇ', 'ˋ', '˙']);

// 聲調符號對應的垂直對齊位置
// ˊ 二聲：頂部  ˇ 三聲：中間  ˋ 四聲：底部  ˙ 輕聲：頂部
const TONE_ALIGN = { 'ˊ': 'flex-start', 'ˇ': 'center', 'ˋ': 'flex-end', '˙': 'flex-start' };

// 把注音字串拆成 { bases: string[], tone: string }
// 例: 'ㄆㄧㄥˊ' → { bases: ['ㄆ','ㄧ','ㄥ'], tone: 'ˊ' }
//     '˙ㄗ'     → { bases: ['ㄗ'],           tone: '˙' }
//     'ㄇㄠ'    → { bases: ['ㄇ','ㄠ'],       tone: ''  }
function parseZhuyin(str) {
  if (!str) return { bases: [], tone: '' };
  const chars = [...str];
  let tone = '';
  // 輕聲 ˙ 在字首
  if (chars[0] === '˙') { tone = '˙'; chars.shift(); }
  // 其他聲調在字尾
  else if (TONE_MARKS.has(chars[chars.length - 1])) { tone = chars.pop(); }
  return { bases: chars, tone };
}

function ZhuyinAnnotation({ zhuyin }) {
  const { bases, tone } = parseZhuyin(zhuyin);
  return (
    <div className="word-panel__zhuyin">
      <div className="word-panel__zhuyin-col">
        {bases.map((ch, j) => (
          <span key={j} className="word-panel__zhuyin-sym">{ch}</span>
        ))}
      </div>
      {tone && (
        <span
          className="word-panel__zhuyin-tone"
          style={{ alignSelf: TONE_ALIGN[tone] ?? 'center' }}
        >
          {tone}
        </span>
      )}
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
