import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZHUYIN_SYMBOLS, SIMILAR_GROUPS } from '../data/zhuyin';
import { useLang } from '../contexts/LangContext';
import { useGame } from '../contexts/GameContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { playZhuyin, preloadZhuyin } from '../utils/speech';
import { playSuccess, setBGMMuted, isBGMMuted, stopBGM, startBGM } from '../utils/sound';
import HanziWriter from 'hanzi-writer';
import { charDataLoader } from '../utils/charData';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function pickOptions(all, correct, count = 4, challenge = false) {
  const wrong = all.filter((s) => s.symbol !== correct.symbol);
  let distractors;
  if (challenge) {
    const group = SIMILAR_GROUPS.find((g) => g.includes(correct.symbol)) ?? [];
    const sameGroup = wrong.filter((s) => group.includes(s.symbol));
    const others    = wrong.filter((s) => !group.includes(s.symbol));
    distractors = [...sameGroup.sort(() => Math.random() - 0.5),
                   ...others.sort(() => Math.random() - 0.5)].slice(0, count - 1);
  } else {
    distractors = wrong.sort(() => Math.random() - 0.5).slice(0, count - 1);
  }
  return [...distractors, correct].sort(() => Math.random() - 0.5);
}

function buildQuestion(all, challenge = false) {
  const correct = all[Math.floor(Math.random() * all.length)];
  return { correct, options: pickOptions(all, correct, 4, challenge) };
}

// Auto-animating stroke preview
function StrokePreview({ symbol, size = 130 }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';
    const writer = HanziWriter.create(container, symbol, {
      width: size, height: size, padding: size * 0.08,
      strokeColor: '#1e3a5f', outlineColor: '#e2e8f0',
      strokeAnimationSpeed: 0.75, delayBetweenStrokes: 220,
      showOutline: true, charDataLoader,
    });
    const id = setTimeout(() => writer.animateCharacter(), 250);
    return () => { clearTimeout(id); container.innerHTML = ''; };
  }, [symbol, size]);
  return <div ref={containerRef} className="lq-stroke-preview" style={{ width: size, height: size }} />;
}

export default function ListenPage() {
  const navigate      = useNavigate();
  const { t }         = useLang();
  const { addPoints } = useGame();

  const all = ZHUYIN_SYMBOLS;
  const [difficulty, setDifficulty] = useState(
    () => localStorage.getItem('bopobear_difficulty') ?? 'easy'
  );
  const isChallenge = difficulty === 'challenge';

  useEffect(() => {
    preloadZhuyin();
    const wasMuted = isBGMMuted();
    setBGMMuted(true);
    stopBGM();
    return () => { if (!wasMuted) { setBGMMuted(false); startBGM(); } };
  }, []);

  const [question, setQuestion]     = useState(() => buildQuestion(all, false));
  // wrongSet: symbols the user already tried and got wrong this round
  const [wrongSet, setWrongSet]     = useState(() => new Set());
  const [solved, setSolved]         = useState(false);
  const [score, setScore]           = useState({ correct: 0, total: 0 });
  const [showStroke, setShowStroke] = useState(
    () => localStorage.getItem('bopobear_listen_stroke') !== 'false'
  );

  const { correct, options } = question;
  const hadWrong = wrongSet.size > 0;

  const switchDifficulty = useCallback((d) => {
    setDifficulty(d);
    localStorage.setItem('bopobear_difficulty', d);
    setSolved(false);
    setWrongSet(new Set());
    setQuestion(buildQuestion(all, d === 'challenge'));
  }, [all]);

  const isFirstMount = useRef(true);
  useEffect(() => {
    const delay = isFirstMount.current ? 700 : 300;
    isFirstMount.current = false;
    const id = setTimeout(() => playZhuyin(correct.symbol), delay);
    return () => clearTimeout(id);
  }, [correct.symbol]);

  const handleSelect = useCallback((symbol) => {
    if (solved || wrongSet.has(symbol)) return;

    if (symbol === correct.symbol) {
      // Correct!
      const firstTry = wrongSet.size === 0;
      setSolved(true);
      if (firstTry) {
        addPoints(10);
        setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
      }
      playSuccess();
    } else {
      // Wrong — mark it, keep others clickable
      const isFirstWrong = wrongSet.size === 0;
      if (isFirstWrong) {
        setScore((s) => ({ ...s, total: s.total + 1 }));
      }
      setWrongSet((prev) => new Set([...prev, symbol]));
    }
  }, [solved, wrongSet, correct.symbol, addPoints]);

  const handleNext = useCallback(() => {
    setSolved(false);
    setWrongSet(new Set());
    setQuestion(buildQuestion(all, isChallenge));
  }, [all, isChallenge]);

  const toggleStroke = useCallback(() => {
    setShowStroke((v) => {
      const next = !v;
      localStorage.setItem('bopobear_listen_stroke', String(next));
      return next;
    });
  }, []);

  return (
    <div className="page-layout">
      <Navbar showBack onBack={() => navigate('/')} />
      <div className="page-body">
        <Sidebar>
          <div className="difficulty-btns">
            <button
              className={`difficulty-btn${!isChallenge ? ' difficulty-btn--active' : ''}`}
              onClick={() => switchDifficulty('easy')}
            >{t.difficultyEasy}</button>
            <button
              className={`difficulty-btn${isChallenge ? ' difficulty-btn--active' : ''}`}
              onClick={() => switchDifficulty('challenge')}
            >{t.difficultyHard}</button>
          </div>
        </Sidebar>

        <main className="listen-quiz">

          {/* ── Correct-answer overlay (only when solved) ──────── */}
          {solved && (
            <div className="lq-result-overlay">
              {/* Confetti + apple only on first-try correct */}
              {!hadWrong && (
                <>
                  <DotLottieReact
                    src="/Confetti.lottie" autoplay loop={false}
                    className="lq-result-confetti"
                  />
                  <div className="result-apple lq-result-apple">
                    <img src="/Score_Apple.png" alt="" className="result-apple__img" aria-hidden="true" />
                    <span className="result-apple__label">+10</span>
                  </div>
                </>
              )}

              {/* Stroke animation — always shown */}
              <div className="lq-result-stroke">
                <StrokePreview key={correct.symbol} symbol={correct.symbol} size={160} />
              </div>

              <button className="lq-result-next" onClick={handleNext}>
                {t.listenNext} →
              </button>
            </div>
          )}

          {/* Play button */}
          <button className="lq-play-btn" onClick={() => playZhuyin(correct.symbol)} aria-label={t.listenPlay}>
            <PlayIcon />
            <span>{t.listenPlay}</span>
          </button>

          <p className="lq-prompt">{t.listenPrompt}</p>

          {/* Options — wrong ones stay red & disabled; others remain clickable */}
          <div key={correct.symbol} className="lq-options">
            {options.map(({ symbol, romanization }, index) => {
              const isWrong   = wrongSet.has(symbol);
              const isRight   = symbol === correct.symbol;
              // Determine visual state
              let state = 'idle';
              if (solved) {
                if (isRight)     state = 'correct';
                else if (isWrong) state = 'wrong';
                else              state = 'dim';
              } else if (isWrong) {
                state = 'wrong'; // already tried, stays red
              }
              return (
                <button
                  key={symbol}
                  className={`lq-option lq-option--${state}`}
                  style={{ animationDelay: `${index * 0.07}s` }}
                  onClick={() => handleSelect(symbol)}
                  disabled={solved || isWrong}
                >
                  <span className="lq-option__symbol">{symbol}</span>
                  {(!isChallenge || solved || hadWrong) && (
                    <span className="lq-option__roman">{romanization}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Stroke toggle */}
          <div className="lq-stroke-toggle-wrap">
            <div className="lq-stroke-toggle" onClick={toggleStroke} role="button" tabIndex={0}
              aria-pressed={showStroke} aria-label={t.strokeToggle}
              onKeyDown={(e) => e.key === 'Enter' && toggleStroke()}
            >
              <span className="lq-stroke-toggle__label">{t.strokeToggle}</span>
              <div className={`lq-toggle-switch${showStroke ? ' lq-toggle-switch--on' : ''}`}>
                <div className="lq-toggle-knob" />
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  );
}
