import { useGame } from '../contexts/GameContext';
import { useLang } from '../contexts/LangContext';
import { LEVEL_TITLES } from '../data/i18n';

export default function LevelCard() {
  const { level, levelProgress, PTS_PER_LEVEL } = useGame();
  const { lang } = useLang();
  const titles = LEVEL_TITLES[lang];
  const title = titles[Math.min(level - 1, titles.length - 1)];
  const pct = Math.min((levelProgress / PTS_PER_LEVEL) * 100, 100);
  const isMaxLevel = level >= titles.length;

  return (
    <div className="level-card">
      {/* Top row */}
      <div className="level-card__header">
        <img src="/apple.png" alt="" className="level-card__star" aria-hidden="true" />

        {/* Title + badge horizontal */}
        <div className="level-card__info">
          <span className="level-title">{title}</span>
          <span className="level-badge">Lv. {level}</span>
        </div>

        {/* Points: big gold current / small muted total */}
        <span className="level-card__pts">
          {isMaxLevel ? 'MAX' : levelProgress}
          <span className="level-card__pts-unit">/{PTS_PER_LEVEL} pt</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="level-bar">
        <div className="level-bar__fill" style={{ width: `${pct}%` }} />
      </div>

      {isMaxLevel && (
        <div className="level-card__footer">
          <span className="level-card__next">🎉 MAX</span>
        </div>
      )}
    </div>
  );
}
