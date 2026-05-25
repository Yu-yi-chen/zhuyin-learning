import { useEffect } from 'react';
import { useLang } from '../contexts/LangContext';
import { useTransition } from '../contexts/TransitionContext';
import { useAuth } from '../contexts/AuthContext';
import { startBGM, playEnterGame } from '../utils/sound';
import VolumeButton from '../components/VolumeButton';

const IMG_LANDSCAPE = '/首頁草地.png';
const IMG_CLOUD     = '/cloud.png';
const IMG_MAP_CARD  = '/Bopo Explore Map.png';
const IMG_LISTEN    = '/Listening Test.png';

export default function HomePage() {
  const { transitionTo } = useTransition();
  const { lang, setLang, t } = useLang();
  const { user, signInWithGoogle, signOut } = useAuth();

  useEffect(() => {
    startBGM();
  }, []);

  return (
    <div className="home-v2">
      {/* Gradient + landscape background */}
      <div className="home-v2__bg" aria-hidden="true">
        <img src={IMG_LANDSCAPE} alt="" className="home-v2__bg-img" />
        <img src={IMG_CLOUD} alt="" className="home-v2__cloud home-v2__cloud--3" />
        <img src={IMG_CLOUD} alt="" className="home-v2__cloud home-v2__cloud--4" />
        <img src={IMG_CLOUD} alt="" className="home-v2__cloud home-v2__cloud--5" />
      </div>

      {/* Navbar */}
      <nav className="home-v2__nav">
        <span className="home-v2__logo">BopoBear</span>
        <div className="home-v2__nav-right">
          <div className="home-v2__lang-toggle">
            <button
              className={`home-v2__lang-btn${lang === 'EN' ? ' home-v2__lang-btn--active' : ''}`}
              onClick={() => setLang('EN')}
            >EN</button>
            <button
              className={`home-v2__lang-btn${lang === 'JP' ? ' home-v2__lang-btn--active' : ''}`}
              onClick={() => setLang('JP')}
            >JP</button>
          </div>
          {user ? (
            <button className="home-v2__google-btn" onClick={signOut}>
              {(user.user_metadata?.avatar_url || user.user_metadata?.picture)
                ? <img src={user.user_metadata.avatar_url ?? user.user_metadata.picture} alt="" className="home-v2__google-icon" style={{borderRadius:'50%'}} />
                : <img src="/google-logo-icon-gsuite.png" alt="Google" className="home-v2__google-icon" />
              }
              <span>{user.user_metadata?.name ?? user.email}</span>
            </button>
          ) : (
            <button className="home-v2__google-btn" onClick={signInWithGoogle}>
              <img src="/google-logo-icon-gsuite.png" alt="Google" className="home-v2__google-icon" />
              <span>Sign in</span>
            </button>
          )}
          <VolumeButton className="home-v2__vol-btn" iconClassName="home-v2__vol-icon" />
        </div>
      </nav>

      {/* Body */}
      <div className="home-v2__body">
        {/* Left — KV / bear panel */}
        <div className="home-v2__kv">
          <img src={IMG_CLOUD} alt="" className="home-v2__cloud home-v2__cloud--1" aria-hidden="true" />
          <img src={IMG_CLOUD} alt="" className="home-v2__cloud home-v2__cloud--2" aria-hidden="true" />
          <div className="home-v2__bear-wrap">
            {/* Single looping video — browser handles loop at codec level, zero flicker */}
            <video
              className="home-v2__bear"
              src="/video/有loop.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        {/* Right — action cards */}
        <div className="home-v2__canvas">
          <div className="home-v2__cards">
            <button
              className="home-v2__card"
              onClick={(e) => { playEnterGame(); transitionTo('/map', e); }}
            >
              <span className="home-v2__card-title">{t.mapCard}</span>
              <img src={IMG_MAP_CARD} alt={t.mapCard} className="home-v2__card-img" />
            </button>

            <button
              className="home-v2__card"
              onClick={(e) => { playEnterGame(); transitionTo('/listen', e); }}
            >
              <span className="home-v2__card-title">{t.listenCard}</span>
              <img src={IMG_LISTEN} alt={t.listenCard} className="home-v2__card-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
