import { useEffect, useRef, useState, useCallback } from 'react';
import HanziWriter from 'hanzi-writer';
import { useLang } from '../contexts/LangContext';

const YOUYIN_CDN = 'https://cdn.jsdelivr.net/gh/MadLadSquad/hanzi-writer-data-youyin@latest/data';
// Local overrides take priority over CDN — drop corrected JSON into /public/zhuyin-overrides/{symbol}.json
const OVERRIDE_BASE = '/zhuyin-overrides';

function charDataLoader(char, onLoad, onError) {
  const overrideUrl = `${OVERRIDE_BASE}/${encodeURIComponent(char)}.json`;
  const cdnUrl = `${YOUYIN_CDN}/${encodeURIComponent(char)}.json`;

  fetch(overrideUrl)
    .then((res) => {
      if (res.ok) return res.json();
      // override not found — fall through to CDN
      return fetch(cdnUrl).then((r) => {
        if (!r.ok) throw new Error(`No data for: ${char}`);
        return r.json();
      });
    })
    .then(onLoad)
    .catch(onError);
}

export default function HanziCanvas({ char, strokeColor = '#1e3a5f', size = 260 }) {
  const { t } = useLang();
  const containerRef = useRef(null);
  const writerRef = useRef(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [mode, setMode] = useState('idle'); // idle | animating | quiz
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !char) return;

    const container = containerRef.current;
    container.innerHTML = '';
    writerRef.current = null;
     
    setStatus('loading');
     
    setMode('idle');
     
    setQuizResult(null);

    const writer = HanziWriter.create(containerRef.current, char, {
      width: size,
      height: size,
      padding: 16,
      strokeColor,
      outlineColor: '#e2e8f0',
      drawingColor: '#2563eb',
      highlightColor: '#f59e0b',
      strokeAnimationSpeed: 0.9,
      delayBetweenStrokes: 200,
      showOutline: true,
      charDataLoader,
      onLoadCharDataSuccess: () => setStatus('ready'),
      onLoadCharDataError: () => setStatus('error'),
    });

    writerRef.current = writer;

    return () => {
      container.innerHTML = '';
      writerRef.current = null;
    };
  }, [char, size, strokeColor]);

  const handleAnimate = useCallback(() => {
    const writer = writerRef.current;
    if (!writer) return;
    setMode('animating');
    setQuizResult(null);
    writer.animateCharacter({ onComplete: () => setMode('idle') });
  }, []);

  const handleQuiz = useCallback(() => {
    const writer = writerRef.current;
    if (!writer) return;
    setMode('quiz');
    setQuizResult(null);
    writer.quiz({
      onComplete: (summary) => {
        setMode('idle');
        setQuizResult(summary);
      },
    });
  }, []);

  const handleReset = useCallback(() => {
    const writer = writerRef.current;
    if (!writer) return;
    setMode('idle');
    setQuizResult(null);
    writer.cancelQuiz?.();
    writer.showCharacter();
  }, []);

  return (
    <div className="zhuyin-canvas">
      {status === 'loading' && (
        <div className="canvas-state">
          <span className="loading-spinner" />
          <p>載入筆順資料…</p>
        </div>
      )}
      {status === 'error' && (
        <div className="canvas-state canvas-state--error">
          <span>⚠</span>
          <p>無法載入筆順資料</p>
        </div>
      )}

      <div
        ref={containerRef}
        className="canvas-svg"
        style={{ opacity: status === 'ready' ? 1 : 0, width: size, height: size }}
      />

      {status === 'ready' && (
        <>
          <div className="canvas-toolbar">
            {mode === 'quiz' ? (
              <button className="btn btn-danger" onClick={handleReset}>
                ✕ 結束練習
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  onClick={handleAnimate}
                  disabled={mode === 'animating'}
                >
                  {mode === 'animating' ? '播放中…' : '▶ 播放筆順'}
                </button>
                <button className="btn btn-outline" onClick={handleQuiz}>
                  ✏ 筆順練習
                </button>
              </>
            )}
          </div>

          {mode === 'quiz' && (
            <p className="quiz-hint">依筆順在框內描繪注音符號</p>
          )}

          {quizResult && (
            <div className="quiz-result">
              <span className="quiz-score">
                {quizResult.correctStrokes}/{quizResult.totalStrokes} {t.strokesCorrect}
              </span>
              {quizResult.mistakes === 0
                ? <span className="quiz-badge quiz-badge--perfect">{t.perfect}</span>
                : <span className="quiz-badge">{t.keepGoing}</span>
              }
            </div>
          )}
        </>
      )}
    </div>
  );
}
