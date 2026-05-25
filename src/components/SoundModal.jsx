import { useEffect, useRef } from 'react';
import { useLang } from '../contexts/LangContext';

function Toggle({ on, onChange }) {
  return (
    <button
      className={`snd-toggle${on ? ' snd-toggle--on' : ''}`}
      onClick={() => onChange(!on)}
      aria-pressed={on}
      aria-label={on ? '關閉' : '開啟'}
    />
  );
}

function VolumeSlider({ value, onChange, disabled }) {
  const pct = Math.round(value * 100);
  return (
    <input
      className="snd-slider"
      type="range"
      min="0"
      max="100"
      value={pct}
      disabled={disabled}
      style={{ '--pct': `${pct}%` }}
      onChange={(e) => onChange(Number(e.target.value) / 100)}
    />
  );
}

export default function SoundModal({
  open, onClose,
  bgmOn, sfxOn, bgmVol, sfxVol,
  onBGMToggle, onSFXToggle, onBGMVol, onSFXVol,
}) {
  const { t } = useLang();
  const backdropRef = useRef(null);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="snd-backdrop"
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
    >
      <div className="snd-modal" role="dialog" aria-modal="true" aria-label="音效設定">
        {/* Header */}
        <div className="snd-header">
          <div className="snd-title">
            <span className="snd-icon">🔊</span>
            <span>{t.soundSettings}</span>
          </div>
          <button className="snd-close" onClick={onClose} aria-label="關閉">✕</button>
        </div>

        {/* BGM row */}
        <div className="snd-row">
          <div className="snd-row__info">
            <span className="snd-row__emoji">🎵</span>
            <div>
              <p className="snd-row__name">{t.bgmLabel}</p>
              <p className="snd-row__desc">{t.bgmDesc}</p>
            </div>
          </div>
          <div className="snd-row__ctrl">
            <Toggle on={bgmOn} onChange={onBGMToggle} />
            <VolumeSlider value={bgmVol} onChange={onBGMVol} disabled={!bgmOn} />
          </div>
        </div>

        <div className="snd-divider" />

        {/* SFX row */}
        <div className="snd-row">
          <div className="snd-row__info">
            <span className="snd-row__emoji">✨</span>
            <div>
              <p className="snd-row__name">{t.sfxLabel}</p>
              <p className="snd-row__desc">{t.sfxDesc}</p>
            </div>
          </div>
          <div className="snd-row__ctrl">
            <Toggle on={sfxOn} onChange={onSFXToggle} />
            <VolumeSlider value={sfxVol} onChange={onSFXVol} disabled={!sfxOn} />
          </div>
        </div>
      </div>
    </div>
  );
}
