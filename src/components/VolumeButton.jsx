import { useState, useCallback, useRef, useEffect } from 'react';
import { isBGMMuted, isSFXMuted, toggleBGM, toggleSFX } from '../utils/sound';
import { useLang } from '../contexts/LangContext';

export default function VolumeButton({ className = 'volume-btn', iconClassName = 'volume-icon' }) {
  const { t } = useLang();
  const [bgmMuted, setBgmMuted] = useState(isBGMMuted);
  const [sfxMuted, setSfxMuted] = useState(isSFXMuted);
  const [open, setOpen]         = useState(false);
  const wrapRef = useRef(null);

  // Sync with external changes (e.g. page auto-muting BGM)
  useEffect(() => {
    // Re-read on mount — catches events that fired before this listener registered
    setBgmMuted(isBGMMuted());
    setSfxMuted(isSFXMuted());

    const handler = () => {
      setBgmMuted(isBGMMuted());
      setSfxMuted(isSFXMuted());
    };
    window.addEventListener('bopobear:soundchange', handler);
    return () => window.removeEventListener('bopobear:soundchange', handler);
  }, []);

  // Click outside to close (works on both desktop and mobile)
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setOpen((v) => !v);
  }, []);

  const handleToggleBGM = useCallback(() => setBgmMuted(toggleBGM()), []);
  const handleToggleSFX = useCallback(() => setSfxMuted(toggleSFX()), []);

  const anyMuted = bgmMuted || sfxMuted;

  return (
    <div className="vol-wrap" ref={wrapRef}>
      <button
        className={`${className}${anyMuted ? ` ${className}--muted` : ''}`}
        aria-label="音效設定"
        aria-expanded={open}
        onClick={handleButtonClick}
      >
        <img src="/images/volume.png" alt="volume" className={iconClassName} />
      </button>

      {open && (
        <div className="vol-popover" onClick={(e) => e.stopPropagation()}>
          <div className="vol-popover__row">
            <span className="vol-popover__label">{t.bgmLabel}</span>
            <div
              className={`lq-toggle-switch${!bgmMuted ? ' lq-toggle-switch--on' : ''}`}
              onClick={handleToggleBGM}
              role="switch"
              aria-checked={!bgmMuted}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleToggleBGM()}
            >
              <div className="lq-toggle-knob" />
            </div>
          </div>
          <div className="vol-popover__row">
            <span className="vol-popover__label">{t.sfxLabel}</span>
            <div
              className={`lq-toggle-switch${!sfxMuted ? ' lq-toggle-switch--on' : ''}`}
              onClick={handleToggleSFX}
              role="switch"
              aria-checked={!sfxMuted}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleToggleSFX()}
            >
              <div className="lq-toggle-knob" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
