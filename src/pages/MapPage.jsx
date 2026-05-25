import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZHUYIN_SYMBOLS } from '../data/zhuyin';
import { useLang } from '../contexts/LangContext';
import { useGame } from '../contexts/GameContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { startBGM } from '../utils/sound';
import { preloadZhuyin } from '../utils/speech';

export default function MapPage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const { completedSymbols } = useGame();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => { startBGM(); preloadZhuyin(); }, []);

  const tabs = [
    { key: 'all',  label: `${t.all} (37)` },
    { key: '聲母', label: `${t.initials} (21)` },
    { key: '介音', label: `${t.medials} (3)` },
    { key: '韻母', label: `${t.finals} (13)` },
  ];

  const filtered = activeCategory === 'all'
    ? ZHUYIN_SYMBOLS
    : ZHUYIN_SYMBOLS.filter((s) => s.category === activeCategory);

  return (
    <div className="page-layout">
      <Navbar showBack onBack={() => navigate('/')} />
      <div className="page-body">
        <Sidebar />

        <main className="map-main">
          {/* Category tabs */}
          <div className="cat-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`cat-pill ${activeCategory === tab.key ? 'cat-pill--active' : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Symbol grid — key forces remount (re-triggers stagger) on tab change */}
          <div key={activeCategory} className="symbol-grid-round">
            {filtered.map((item, index) => {
              const done = completedSymbols.has(item.symbol);
              return (
                <button
                  key={item.symbol}
                  className={`symbol-circle${item.dataIssue ? ' symbol-circle--issue' : ''}${done ? ' symbol-circle--done' : ''}`}
                  style={{ animationDelay: `${index * 0.022}s` }}
                  onClick={() => navigate(`/practice/${encodeURIComponent(item.symbol)}`)}
                  title={item.description}
                >
                  <span className="symbol-circle__char">{item.symbol}</span>
                  <span className="symbol-circle__roman">{item.romanization}</span>
                  {item.dataIssue && <span className="symbol-issue-dot" />}
                </button>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
