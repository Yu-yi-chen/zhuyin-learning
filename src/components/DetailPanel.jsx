import HanziCanvas from './HanziCanvas';
import { TONE_NAMES } from '../data/characters';

const TONE_COLORS = {
  1: '#2563eb',
  2: '#16a34a',
  3: '#9333ea',
  4: '#dc2626',
  5: '#6b7280',
};

export default function DetailPanel({ item }) {
  if (!item) {
    return (
      <div className="detail-panel detail-panel--empty">
        <div className="empty-hint">
          <span className="empty-icon">←</span>
          <p>從左側選擇一個漢字</p>
          <p className="empty-sub">即可查看筆順動畫與注音讀法</p>
        </div>
      </div>
    );
  }

  const toneColor = TONE_COLORS[item.tone] ?? '#374151';

  return (
    <div className="detail-panel">
      <div className="detail-header">
        <span className="detail-char">{item.char}</span>
        <div className="detail-meta">
          <span className="detail-zhuyin" style={{ color: toneColor }}>
            {item.zhuyin}
          </span>
          <span className="detail-pinyin">{item.pinyin}</span>
          <span className="detail-tone" style={{ color: toneColor }}>
            {TONE_NAMES[item.tone]}
          </span>
          <span className="detail-meaning">{item.meaning}</span>
        </div>
      </div>

      <div className="detail-canvas-wrap">
        <HanziCanvas char={item.char} mode="animate" />
      </div>

      <div className="detail-info">
        <h3>注音說明</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>注音</label>
            <span style={{ color: toneColor, fontSize: '1.5rem' }}>{item.zhuyin}</span>
          </div>
          <div className="info-item">
            <label>拼音</label>
            <span>{item.pinyin}</span>
          </div>
          <div className="info-item">
            <label>聲調</label>
            <span style={{ color: toneColor }}>{TONE_NAMES[item.tone]}</span>
          </div>
          <div className="info-item">
            <label>意思</label>
            <span>{item.meaning}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
