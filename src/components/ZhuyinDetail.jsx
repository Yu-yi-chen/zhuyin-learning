import HanziCanvas from './HanziCanvas';
import { CATEGORY_COLORS } from '../data/zhuyin';

const ISSUE_REPO = 'https://github.com/MadLadSquad/hanzi-writer-data-youyin/issues';

export default function ZhuyinDetail({ item }) {
  if (!item) {
    return (
      <div className="detail-empty">
        <div className="detail-empty__inner">
          <span className="detail-empty__icon">ㄅ</span>
          <p>選擇一個注音符號</p>
          <p className="detail-empty__sub">查看筆畫順序與練習書寫</p>
        </div>
      </div>
    );
  }

  const colors = CATEGORY_COLORS[item.category];
  const hasIssue = item.dataIssue;
  const hasOverride = item.dataOverride;

  return (
    <div className="detail-panel">
      {/* 符號標題區 */}
      <div className="detail-header" style={{ background: colors.bg, borderColor: colors.border }}>
        <span className="detail-symbol">{item.symbol}</span>
        <div className="detail-meta">
          <span className="detail-roman" style={{ color: colors.badge }}>
            {item.romanization}
          </span>
          <span className="detail-category-badge" style={{ background: colors.badge }}>
            {item.category}
          </span>
          <p className="detail-description">{item.description}</p>
        </div>
      </div>

      {/* 資料問題提示 */}
      {hasIssue && (
        <div className="data-issue-banner">
          <span className="data-issue-icon">⚠</span>
          <div>
            <strong>此符號的筆順資料來源有誤</strong>
            <p>
              上游資料庫（youyin）此符號的筆畫路徑不正確，動畫顯示可能與標準注音不符。
              {' '}
              <a href={ISSUE_REPO} target="_blank" rel="noreferrer">回報問題 ↗</a>
            </p>
          </div>
        </div>
      )}

      {hasOverride && (
        <div className="data-override-banner">
          <span>✓</span>
          <span>已使用本地修正資料（override）</span>
        </div>
      )}

      {/* 筆順區 */}
      <div className="detail-canvas-area">
        <HanziCanvas
          char={item.symbol}
          strokeColor={hasIssue ? '#b45309' : colors.badge}
          size={280}
        />
      </div>

      {/* 說明區 */}
      <div className="detail-guide">
        <div className="guide-step">
          <span className="guide-num" style={{ background: colors.badge }}>1</span>
          <span>點「▶ 播放筆順」觀看動畫示範</span>
        </div>
        <div className="guide-step">
          <span className="guide-num" style={{ background: colors.badge }}>2</span>
          <span>點「✏ 筆順練習」在框內依序描繪</span>
        </div>
        <div className="guide-step">
          <span className="guide-num" style={{ background: colors.badge }}>3</span>
          <span>系統自動判斷每一筆的方向與順序</span>
        </div>
      </div>
    </div>
  );
}
