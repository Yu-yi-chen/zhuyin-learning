import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ZHUYIN_SYMBOLS, CATEGORY_COLORS } from '../data/zhuyin';
import { useGame } from '../contexts/GameContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PracticeCanvas from '../components/PracticeCanvas';
import { prefetchSymbols } from '../utils/charData';
import ResultOverlay from '../components/ResultOverlay';
import WordPanel from '../components/WordPanel';
import { playZhuyin } from '../utils/speech';

export default function PracticePage() {
  const { symbol: encodedSymbol } = useParams();
  const symbol = decodeURIComponent(encodedSymbol);
  const navigate = useNavigate();
  const { completedSymbols } = useGame();

  const [mode, setMode] = useState('example'); // 'example' | 'practice'
  const [strokeCount, setStrokeCount] = useState(0);
  const [quickOpen, setQuickOpen] = useState(false);

  const allSymbols = ZHUYIN_SYMBOLS;
  const currentIndex = allSymbols.findIndex((s) => s.symbol === symbol);
  const currentItem = allSymbols[currentIndex] ?? allSymbols[0];

  // Prefetch neighbours so switching feels instant
  useEffect(() => {
    const neighbours = [-2, -1, 1, 2].map(
      (offset) => allSymbols[(currentIndex + offset + allSymbols.length) % allSymbols.length].symbol,
    );
    prefetchSymbols(neighbours);
  }, [currentIndex, allSymbols]);

  const goTo = useCallback((idx) => {
    const target = allSymbols[(idx + allSymbols.length) % allSymbols.length];
    navigate(`/practice/${encodeURIComponent(target.symbol)}`, { replace: true });
    setMode('example');
    setStrokeCount(0);
  }, [allSymbols, navigate]);

  const handleDataLoad = useCallback((charData) => {
    setStrokeCount(charData?.strokes?.length ?? 0);
  }, []);

  const handleExampleDone = useCallback(() => {
    setMode('practice');
    playZhuyin(symbol);
  }, [symbol]);

  return (
    <div className="page-layout">
      <Navbar showBack onBack={() => navigate('/map')} />
      <div className="page-body">
        <Sidebar>
          {/* Symbol navigator */}
          <div className="sym-nav">
            <button className="sym-nav__arrow" onClick={() => goTo(currentIndex - 1)} aria-label="previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12l6-6M5 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="sym-nav__char">{currentItem.symbol}</span>
            <button className="sym-nav__arrow" onClick={() => goTo(currentIndex + 1)} aria-label="next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M19 12l-6-6M19 12l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* 5-symbol quick-nav strip */}
          <div className="symbol-options">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const idx = (currentIndex + offset + allSymbols.length) % allSymbols.length;
              const item = allSymbols[idx];
              const isCurrent = offset === 0;
              return (
                <button
                  key={item.symbol}
                  className={`symbol-option${isCurrent ? ' symbol-option--active' : ''}`}
                  onClick={() => { if (!isCurrent) goTo(idx); }}
                  aria-current={isCurrent ? 'true' : undefined}
                >
                  {item.symbol}
                </button>
              );
            })}
          </div>
        </Sidebar>

        <main className="practice-main">
          <div className="practice-body">
          <PracticeCanvas
            key={symbol}
            symbol={symbol}
            strokeCount={strokeCount}
            mode={mode}
            onDataLoad={handleDataLoad}
            onExampleDone={handleExampleDone}
            topLeftSlot={
              <>
                <button
                  className="practice-quicknav-btn"
                  onClick={() => setQuickOpen((v) => !v)}
                  aria-label="所有符號"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                  </svg>
                </button>
                {quickOpen && (
                  <>
                    <div className="practice-quicknav-backdrop" onClick={() => setQuickOpen(false)} />
                    <div className="practice-quicknav-panel">
                      <div className="practice-quicknav-grid">
                        {ZHUYIN_SYMBOLS.map(({ symbol: sym }) => {
                          const done = completedSymbols.has(sym);
                          const isCurrent = sym === symbol;
                          return (
                            <button
                              key={sym}
                              className={`practice-quicknav-cell${isCurrent ? ' practice-quicknav-cell--active' : ''}${done && !isCurrent ? ' practice-quicknav-cell--done' : ''}`}
                              onClick={() => { navigate(`/practice/${encodeURIComponent(sym)}`); setQuickOpen(false); }}
                            >
                              {sym}
                              {done && <span className="practice-quicknav-check">✓</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </>
            }
          />
          <WordPanel symbol={symbol} />
          </div>

          <ResultOverlay
            onAgain={() => setMode('example')}
            onNext={() => goTo(currentIndex + 1)}
          />
        </main>
      </div>
    </div>
  );
}
