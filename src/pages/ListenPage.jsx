import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ZHUYIN_SYMBOLS, SIMILAR_GROUPS } from '../data/zhuyin';
import { COMPOUND_GROUPS } from '../data/compounds';
import { useLang } from '../contexts/LangContext';
import { useGame } from '../contexts/GameContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ZhuyinColumn from '../components/ZhuyinColumn';
import { playZhuyin, preloadZhuyin } from '../utils/speech';
import { playSuccess, setBGMMuted, isBGMMuted, stopBGM, startBGM } from '../utils/sound';
import HanziWriter from 'hanzi-writer';
import { charDataLoader } from '../utils/charData';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// ── 主題資料 ─────────────────────────────────────────────────
// 兩主題統一形狀：key（唯一識別）、display（要顯示的符號陣列）、romanization
const SYMBOL_ITEMS = ZHUYIN_SYMBOLS.map((s) => ({
  ...s, key: s.symbol, display: [s.symbol],
}));

const COMPOUND_ITEMS = COMPOUND_GROUPS.flatMap((g) =>
  g.items.map((it) => ({ ...it, key: it.compound, display: it.symbols, medial: g.medial })));

// Challenge 干擾同組 key 清單
function peersOf(theme, correct) {
  if (theme === 'compound') {
    return COMPOUND_ITEMS.filter((i) => i.medial === correct.medial).map((i) => i.key);
  }
  return SIMILAR_GROUPS.find((g) => g.includes(correct.key)) ?? [];
}

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function pickOptions(theme, all, correct, count = 4, challenge = false) {
  const wrong = all.filter((i) => i.key !== correct.key);
  let distractors;
  if (challenge) {
    const peers  = peersOf(theme, correct);
    const same   = wrong.filter((i) => peers.includes(i.key));
    const others = wrong.filter((i) => !peers.includes(i.key));
    distractors = [...shuffle(same), ...shuffle(others)].slice(0, count - 1);
  } else {
    distractors = shuffle(wrong).slice(0, count - 1);
  }
  return shuffle([...distractors, correct]);
}

function buildQuestion(theme, challenge = false) {
  const all = theme === 'compound' ? COMPOUND_ITEMS : SYMBOL_ITEMS;
  const correct = all[Math.floor(Math.random() * all.length)];
  return { correct, options: pickOptions(theme, all, correct, 4, challenge) };
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
  const { t, lang }   = useLang();
  const { addPoints } = useGame();
  const [searchParams] = useSearchParams();

  const [theme, setTheme] = useState(
    () => (searchParams.get('theme') === 'compound' ? 'compound' : 'symbol')
  );
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

  const [question, setQuestion]     = useState(() => buildQuestion(
    searchParams.get('theme') === 'compound' ? 'compound' : 'symbol',
    (localStorage.getItem('bopobear_difficulty') ?? 'easy') === 'challenge'));
  // wrongSet: option keys the user already tried and got wrong this round
  const [wrongSet, setWrongSet]     = useState(() => new Set());
  const [solved, setSolved]         = useState(false);
  const [score, setScore]           = useState({ correct: 0, total: 0 });
  const [showStroke, setShowStroke] = useState(
    () => localStorage.getItem('bopobear_listen_stroke') !== 'false'
  );

  const { correct, options } = question;
  const hadWrong = wrongSet.size > 0;
  const isCompound = theme === 'compound';

  // 播放當前題目（符號 → playZhuyin；結合韻 → 代表詞音檔）
  const wordAudioRef = useRef(null);
  const playCurrent = useCallback(() => {
    if (correct.compound) {
      wordAudioRef.current?.pause();
      const audio = new Audio(`/audio/compounds/${correct.compound}.m4a`);
      wordAudioRef.current = audio;
      audio.play().catch(() => {});
    } else {
      playZhuyin(correct.symbol);
    }
  }, [correct]);

  const switchDifficulty = useCallback((d) => {
    setDifficulty(d);
    localStorage.setItem('bopobear_difficulty', d);
    setSolved(false);
    setWrongSet(new Set());
    setQuestion(buildQuestion(theme, d === 'challenge'));
  }, [theme]);

  const switchTheme = useCallback((next) => {
    if (next === theme) return;
    setTheme(next);
    setSolved(false);
    setWrongSet(new Set());
    setQuestion(buildQuestion(next, isChallenge));
  }, [theme, isChallenge]);

  const isFirstMount = useRef(true);
  useEffect(() => {
    const delay = isFirstMount.current ? 700 : 300;
    isFirstMount.current = false;
    const id = setTimeout(playCurrent, delay);
    return () => clearTimeout(id);
  }, [playCurrent]);

  const handleSelect = useCallback((key) => {
    if (solved || wrongSet.has(key)) return;

    if (key === correct.key) {
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
      setWrongSet((prev) => new Set([...prev, key]));
    }
  }, [solved, wrongSet, correct.key, addPoints]);

  const handleNext = useCallback(() => {
    setSolved(false);
    setWrongSet(new Set());
    setQuestion(buildQuestion(theme, isChallenge));
  }, [theme, isChallenge]);

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

          {/* ── 主題切換 ────────────────────────────────────── */}
          <div className="syllables-tabs lq-theme-tabs">
            <button
              className={`syllables-tab${!isCompound ? ' syllables-tab--active' : ''}`}
              onClick={() => switchTheme('symbol')}
            >{t.listenThemeSymbol}</button>
            <button
              className={`syllables-tab${isCompound ? ' syllables-tab--active' : ''}`}
              onClick={() => switchTheme('compound')}
            >{t.listenThemeCompound}</button>
          </div>

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

              {isCompound ? (
                /* 結合韻：插圖 + 詞 + 直式注音 + 譯文 */
                <div className="lq-result-word">
                  {correct.illustration && (
                    <img src={correct.illustration} alt={correct.word} className="lq-result-word__img" />
                  )}
                  <div className="lq-result-word__row">
                    {correct.word.split('').map((char, i) => (
                      <div key={i} className="lq-result-word__char-wrap">
                        <ZhuyinColumn zhuyin={correct.zhuyin?.[i]} />
                        <span className="lq-result-word__char">{char}</span>
                      </div>
                    ))}
                  </div>
                  <p className="lq-result-word__translation">
                    {lang === 'JP' ? correct.jp : correct.en}
                  </p>
                </div>
              ) : (
                /* 符號：筆順動畫 */
                showStroke && (
                  <div className="lq-result-stroke">
                    <StrokePreview key={correct.symbol} symbol={correct.symbol} size={160} />
                  </div>
                )
              )}

              <button className="lq-result-next" onClick={handleNext}>
                {t.listenNext} →
              </button>
            </div>
          )}

          {/* Play button */}
          <button className="lq-play-btn" onClick={playCurrent} aria-label={t.listenPlay}>
            <PlayIcon />
            <span>{t.listenPlay}</span>
          </button>

          <p className="lq-prompt">{isCompound ? t.listenPromptCompound : t.listenPrompt}</p>

          {/* Options — wrong ones stay red & disabled; others remain clickable */}
          <div key={correct.key} className="lq-options">
            {options.map(({ key, display, romanization }, index) => {
              const isWrong   = wrongSet.has(key);
              const isRight   = key === correct.key;
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
                  key={key}
                  className={`lq-option lq-option--${state}`}
                  style={{ animationDelay: `${index * 0.07}s` }}
                  onClick={() => handleSelect(key)}
                  disabled={solved || isWrong}
                >
                  <span className={`lq-option__symbol${display.length > 1 ? ' lq-option__symbol--stack' : ''}`}>
                    {display.map((sym) => <span key={sym}>{sym}</span>)}
                  </span>
                  {(!isChallenge || solved || hadWrong) && (
                    <span className="lq-option__roman">{romanization}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Stroke toggle — 僅符號主題 */}
          {!isCompound && (
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
          )}

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
