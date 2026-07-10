// 直式注音欄 — 共用元件（WordPopover / ListenPage 答對覆蓋層）
// 沿用 .wp__zhuyin-* 全域樣式

const TONE_MARKS = new Set(['ˊ', 'ˇ', 'ˋ', '˙']);

export function parseZhuyin(str) {
  if (!str) return { bases: [], tone: '' };
  const chars = [...str];
  let tone = '';
  if (chars[0] === '˙') { tone = '˙'; chars.shift(); }
  else if (TONE_MARKS.has(chars[chars.length - 1])) { tone = chars.pop(); }
  return { bases: chars, tone };
}

const TONE_ALIGN = { 'ˊ': 'flex-start', 'ˇ': 'center', 'ˋ': 'flex-end', '˙': 'flex-start' };

export default function ZhuyinColumn({ zhuyin }) {
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
