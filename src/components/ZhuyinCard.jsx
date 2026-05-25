import { CATEGORY_COLORS } from '../data/zhuyin';

export default function ZhuyinCard({ item, isSelected, onClick }) {
  const colors = CATEGORY_COLORS[item.category];
  return (
    <button
      className={`zhuyin-card ${isSelected ? 'zhuyin-card--selected' : ''} ${item.dataIssue ? 'zhuyin-card--issue' : ''}`}
      onClick={() => onClick(item)}
      title={item.dataIssue ? `${item.symbol}（筆順資料有誤）` : item.symbol}
      style={isSelected ? { background: colors.bg, borderColor: colors.badge } : {}}
    >
      <span className="zhuyin-card__symbol">{item.symbol}</span>
      <span className="zhuyin-card__roman">{item.romanization}</span>
      {item.dataIssue && <span className="zhuyin-card__issue-dot" aria-label="資料有誤" />}
    </button>
  );
}
