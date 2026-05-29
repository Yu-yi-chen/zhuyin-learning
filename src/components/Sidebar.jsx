import { useState, useEffect, useRef } from 'react';
import LevelCard from './LevelCard';
import { useGame } from '../contexts/GameContext';
import { useLang } from '../contexts/LangContext';
import { useAuth } from '../contexts/AuthContext';

const TOTAL = 37;

export default function Sidebar({ children }) {
  const { completedSymbols } = useGame();
  const { t, lang } = useLang();
  const { user } = useAuth();
  const count = completedSymbols.size;
  const pct = Math.round((count / TOTAL) * 100);

  // Rotating tagline
  const taglines = t.taglines;
  const [idx, setIdx]         = useState(() => Math.floor(Math.random() * taglines.length));
  const [visible, setVisible] = useState(true);
  const idxRef                = useRef(idx);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        const next = (idxRef.current + 1) % taglines.length;
        idxRef.current = next;
        setIdx(next);
        setVisible(true);
      }, 3000); // 3s blank before next phrase
    }, 8000); // 5s visible + 3s blank = 8s per cycle
    return () => clearInterval(timer);
  }, [taglines.length]);

  useEffect(() => {
    const next = Math.floor(Math.random() * taglines.length);
    idxRef.current = next;
    setIdx(next);
    setVisible(true);
  }, [lang, taglines.length]);

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        {user && (
          <p className="sidebar-greeting">Hi, {user.user_metadata?.name ?? user.email}！</p>
        )}

        {/* Progress bar */}
        <div className="sidebar-progress">
          <div className="sidebar-progress__labels">
            <span className="sidebar-progress__title">{t.progress}</span>
            <span className="sidebar-progress__count">
              <span className="sidebar-progress__count-current">{count}</span>
              <span className="sidebar-progress__count-total"> / {TOTAL}</span>
            </span>
          </div>
          <div className="sidebar-progress__track">
            <div className="sidebar-progress__fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {children}

        <div className="sidebar-bear">
          <div className={`sidebar-tagline-wrap${visible ? '' : ' sidebar-tagline--hidden'}`}>
            <img src="/images/quote_left.png"  alt="" className="sidebar-quote sidebar-quote--left"  aria-hidden="true" />
            <p className="sidebar-tagline">{taglines[idx]}</p>
            <img src="/images/quote_right.png" alt="" className="sidebar-quote sidebar-quote--right" aria-hidden="true" />
          </div>
          <video
            className="bear-img"
            src="/video/翻頁.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <LevelCard />
      </div>
    </aside>
  );
}
