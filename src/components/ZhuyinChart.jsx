import { ZHUYIN_CHART } from '../data/characters';

export default function ZhuyinChart() {
  return (
    <section className="zhuyin-chart">
      <h2 className="section-title">注音符號表</h2>
      <p className="section-subtitle">台灣標準注音符號（ㄅㄆㄇㄈ）共 37 個</p>
      <div className="zhuyin-grid">
        {ZHUYIN_CHART.map(({ symbol, name, romanization }) => (
          <div key={symbol} className="zhuyin-cell">
            <span className="zhuyin-cell__symbol">{symbol}</span>
            <span className="zhuyin-cell__char">{name}</span>
            <span className="zhuyin-cell__roman">{romanization}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
