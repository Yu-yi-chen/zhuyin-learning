import { useLang } from '../contexts/LangContext';
import { useAuth } from '../contexts/AuthContext';
import VolumeButton from './VolumeButton';

export default function Navbar({ showBack, onBack }) {
  const { lang, setLang } = useLang();
  const { user, signOut } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {showBack && (
          <button className="back-btn" onClick={onBack}>
            <img src="/Icon/house.png" alt="home" className="back-icon" />
          </button>
        )}
      </div>
      <div className="navbar-right">
        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === 'EN' ? 'lang-btn--active' : ''}`}
            onClick={() => setLang('EN')}
          >EN</button>
          <button
            className={`lang-btn ${lang === 'JP' ? 'lang-btn--active' : ''}`}
            onClick={() => setLang('JP')}
          >JP</button>
        </div>
        {user && (
          <button className="home-v2__google-btn" onClick={signOut}>
            {(user.user_metadata?.avatar_url || user.user_metadata?.picture)
              ? <img src={user.user_metadata.avatar_url ?? user.user_metadata.picture} alt="" className="home-v2__google-icon" style={{borderRadius:'50%'}} />
              : <img src="/google-logo-icon-gsuite.png" alt="Google" className="home-v2__google-icon" />
            }
            <span>{user.user_metadata?.name ?? user.email}</span>
          </button>
        )}
        <VolumeButton className="volume-btn" iconClassName="volume-icon" />
      </div>
    </nav>
  );
}
