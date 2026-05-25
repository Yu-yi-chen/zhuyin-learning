import { useLang } from '../contexts/LangContext';

export default function AboutModal({ open, onClose }) {
  const { t } = useLang();
  if (!open) return null;

  return (
    <div className="credits-overlay" onClick={onClose}>
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>
        <button className="credits-close" onClick={onClose} aria-label="關閉">✕</button>

        {/* Scrollable body — inner div so scrollbar stays inside border-radius */}
        <div className="about-modal__body">
          {/* Header */}
          <div className="about-header">
            <div className="about-bear-icon">
              <img src="/bopobear_avatar.png" alt="BopoBear" width="64" height="64" />
            </div>
            <div>
              <h2 className="about-title">BopoBear</h2>
              <p className="about-subtitle">{t.slogan}</p>
            </div>
          </div>

          {/* Bear profile */}
          <ul className="about-profile">
            <li><span className="about-profile__key">{t.bearProfileSpecies}</span><span className="about-profile__val">{t.bearProfileSpeciesVal}</span></li>
            <li><span className="about-profile__key">{t.bearProfileFaves}</span><span className="about-profile__val">{t.bearProfileFavesVal}</span></li>
          </ul>

          {/* Intro */}
          <p className="about-desc">{t.aboutDesc}</p>

          {/* Features */}
          <ul className="about-features">
            <li>
              <span className="about-feature-icon">🗺️</span>
              <div>
                <strong>{t.aboutFeature1Title}</strong>
                <span>{t.aboutFeature1Desc}</span>
              </div>
            </li>
            <li>
              <span className="about-feature-icon">🔊</span>
              <div>
                <strong>{t.aboutFeature2Title}</strong>
                <span>{t.aboutFeature2Desc}</span>
              </div>
            </li>
            <li>
              <span className="about-feature-icon">✏️</span>
              <div>
                <strong>{t.aboutFeature3Title}</strong>
                <span>{t.aboutFeature3Desc}</span>
              </div>
            </li>
            <li>
              <span className="about-feature-icon">⭐</span>
              <div>
                <strong>{t.aboutFeature4Title}</strong>
                <span>{t.aboutFeature4Desc}</span>
              </div>
            </li>
          </ul>

          <p className="about-footer">{t.aboutFooter}</p>
        </div>
      </div>
    </div>
  );
}
