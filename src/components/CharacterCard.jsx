import { TONE_NAMES } from '../data/characters';

const TONE_COLORS = {
  1: '#2563eb',
  2: '#16a34a',
  3: '#9333ea',
  4: '#dc2626',
  5: '#6b7280',
};

export default function CharacterCard({ item, isSelected, onClick }) {
  const toneColor = TONE_COLORS[item.tone] ?? '#374151';

  return (
    <button
      className={`char-card ${isSelected ? 'char-card--selected' : ''}`}
      onClick={() => onClick(item)}
      title={item.meaning}
    >
      <span className="char-card__zhuyin" style={{ color: toneColor }}>
        {item.zhuyin}
      </span>
      <span className="char-card__hanzi">{item.char}</span>
      <span className="char-card__tone" style={{ color: toneColor }}>
        {TONE_NAMES[item.tone]}
      </span>
    </button>
  );
}
