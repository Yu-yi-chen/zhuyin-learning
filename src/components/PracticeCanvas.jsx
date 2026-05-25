import { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { useLang } from '../contexts/LangContext';
import { useGame } from '../contexts/GameContext';
import { playSuccess } from '../utils/sound';
import { playZhuyin } from '../utils/speech';
import { charDataLoader } from '../utils/charData';

const HW = { width: 420, height: 420, padding: 30 };

// Read the actual transform HanziWriter applies to its <g> element.
// HW uses: translate(tx, ty) scale(sc, -sc)
// where sc = (width - 2*padding) / 1024  and  ty = padding + 900*sc
// (NOT height-padding as one might assume — this caused badges to appear
//  too low for strokes near the bottom of the data coordinate space.)
function parseHWTransform(svg) {
  const g = svg?.querySelector('g[transform]');
  if (!g) return null;
  const m = (g.getAttribute('transform') || '')
    .match(/translate\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)\s*scale\(\s*([\d.-]+)/);
  if (!m) return null;
  return { tx: parseFloat(m[1]), ty: parseFloat(m[2]), sc: Math.abs(parseFloat(m[3])) };
}

// Convert data-space coords → SVG user-space coords using HW's actual transform.
// Falls back to HW defaults if transform isn't parsed yet.
function dataToSVG(dx, dy, xform) {
  const tx = xform?.tx ?? HW.padding;
  const ty = xform?.ty ?? (HW.height - HW.padding);
  const sc = xform?.sc ?? ((HW.width - 2 * HW.padding) / 900);
  return { x: tx + dx * sc, y: ty - dy * sc };
}

function computeHints(medians, xform) {
  if (!medians?.length) return [];
  return medians.map((median, i) => {
    const { x, y } = dataToSVG(median[0][0], median[0][1], xform);
    let angle = 0;
    if (median.length > 1) {
      const p2 = dataToSVG(median[1][0], median[1][1], xform);
      angle = Math.atan2(p2.y - y, p2.x - x) * (180 / Math.PI);
    }
    return { x, y, angle, index: i + 1 };
  });
}

export default function PracticeCanvas({ symbol, strokeCount, mode, onDataLoad, onExampleDone, topLeftSlot }) {
  const containerRef = useRef(null);
  const writerRef = useRef(null);
  const charDataRef = useRef(null);
  const [status, setStatus] = useState('loading');
  const [, setQuizResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [strokeHints, setStrokeHints] = useState([]);
  const [currentStroke, setCurrentStroke] = useState(0); // 0-indexed, practice mode only
  const { t } = useLang();
  const { addPoints, completeSymbol } = useGame();

  useEffect(() => {
    if (!containerRef.current || !symbol) return;
    const container = containerRef.current;
    container.innerHTML = '';
    writerRef.current = null;
    charDataRef.current = null;
     
    setStatus('loading');
     
    setQuizResult(null);
     
    setIsAnimating(false);
     
    setStrokeHints([]);
     
    setCurrentStroke(0);

    const writer = HanziWriter.create(container, symbol, {
      width: 420,
      height: 420,
      padding: 30,
      strokeColor: '#2C2825',
      outlineColor: '#EDEBDF',
      drawingColor: '#2C2825',
      highlightColor: '#EFDF80',
      strokeAnimationSpeed: 0.5,
      delayBetweenStrokes: 500,
      showOutline: true,
      charDataLoader,
      onLoadCharDataSuccess: (charData) => {
        charDataRef.current = charData;
        setStatus('ready');
        onDataLoad?.(charData);
      },
      onLoadCharDataError: () => setStatus('error'),
    });
    writerRef.current = writer;

    return () => {
      container.innerHTML = '';
      writerRef.current = null;
    };
   
  }, [symbol, onDataLoad]);

  // Patch SVG viewBox so CSS 100%/100% scales content proportionally (not just clips)
  // and compute stroke hints using HW's actual transform (not hardcoded assumptions).
  useEffect(() => {
    if (status !== 'ready') return;
    const raf = requestAnimationFrame(() => {
      const svg = containerRef.current?.querySelector('svg');
      if (svg && !svg.getAttribute('viewBox')) {
        svg.setAttribute('viewBox', `0 0 ${HW.width} ${HW.height}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      }
      const xform = parseHWTransform(svg);
      setStrokeHints(computeHints(charDataRef.current?.medians, xform));
    });
    return () => cancelAnimationFrame(raf);
  }, [status]);

  // Auto-play on example mode; auto-start quiz on practice mode
  // No remount on mode change — cancel/start directly on the same writer instance
  useEffect(() => {
    if (status !== 'ready' || !writerRef.current) return;

    let cancelled = false; // guard stale closures if effect re-runs

    if (mode === 'example') {
      writerRef.current.cancelQuiz();
      writerRef.current.showCharacter(); // reset to full static char, stop any animation
       
      setIsAnimating(true);
       
      setQuizResult(null);
       
      setCurrentStroke(0);
      writerRef.current.animateCharacter({
        onComplete: () => {
          if (cancelled) return;
          setIsAnimating(false);
          setTimeout(() => { if (!cancelled) onExampleDone?.(); }, 800);
        },
      });
    } else if (mode === 'practice') {
       
      setIsAnimating(false);
       
      setQuizResult(null);
       
      setCurrentStroke(0);
      writerRef.current.quiz({
        onCorrectStroke: ({ strokeNum }) => { if (!cancelled) setCurrentStroke(strokeNum + 1); },
        onComplete: (summary) => {
          if (cancelled) return;
          setQuizResult(summary);
          playSuccess();
          addPoints(summary.mistakes === 0 ? 20 : 10);
          completeSymbol(symbol);
        },
      });
    }

    return () => { cancelled = true; };
   
  }, [mode, status, addPoints, onExampleDone]);

  // Hide hints while animating; in practice mode track current stroke
  const showHints = status === 'ready' && !isAnimating && strokeHints.length > 0;
  const isPractice = mode === 'practice';

  return (
    <div className="practice-canvas-wrap">
      {/* Canvas area — both overlay buttons positioned relative to this */}
      <div className="canvas-area">
        {topLeftSlot}

        {status === 'ready' && (
          <button
            className="canvas-sound-btn"
            onClick={() => playZhuyin(symbol)}
            aria-label="播放發音"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          </button>
        )}

        {/* Canvas with crosshair grid */}
        <div className="canvas-frame">
          <div className="canvas-crosshair">
            <div className="crosshair-v" />
            <div className="crosshair-h" />
          </div>

          {status === 'loading' && (
            <div className="canvas-state-overlay">
              <span className="spinner" />
            </div>
          )}
          {status === 'error' && (
            <div className="canvas-state-overlay canvas-state-overlay--err">
              ⚠ {t.strokeData_error}
            </div>
          )}

          <div
            ref={containerRef}
            className="canvas-svg-inner"
            style={{ opacity: status === 'ready' ? 1 : 0 }}
          />

        {/* Stroke order hint overlay — same viewBox as HanziWriter's SVG */}
        {showHints && (
          <svg
            className="stroke-hints-svg"
            viewBox="0 0 420 420"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="hint-arrow" markerWidth="5" markerHeight="4"
                refX="5" refY="2" orient="auto">
                <polygon points="0 0, 5 2, 0 4" fill="#AF9061" />
              </marker>
            </defs>
            {strokeHints.map(({ x, y, angle, index }) => {
              const strokeIdx = index - 1; // 0-indexed
              // In practice mode: current = full, past = hidden, future = dimmed
              // In example mode (after animation): all visible at normal opacity
              let groupOpacity = 1;
              if (isPractice) {
                if (strokeIdx < currentStroke) groupOpacity = 0;       // already drawn — hide
                else if (strokeIdx > currentStroke) groupOpacity = 0.25; // upcoming — dim
                // strokeIdx === currentStroke → full opacity
              }

              const ARROW_LEN = 18;
              const ax = x + Math.cos((angle * Math.PI) / 180) * ARROW_LEN;
              const ay = y + Math.sin((angle * Math.PI) / 180) * ARROW_LEN;

              const isCurrent = isPractice && strokeIdx === currentStroke;
              const scale = isCurrent ? 1.2 : 1;

              return (
                <g
                  key={index}
                  opacity={groupOpacity}
                  transform={`translate(${x},${y}) scale(${scale}) translate(${-x},${-y})`}
                  style={{ transition: 'opacity 0.2s, transform 0.2s' }}
                >
                  {/* Arrow */}
                  <line
                    x1={x} y1={y} x2={ax} y2={ay}
                    stroke="#AF9061" strokeWidth={1.8}
                    markerEnd="url(#hint-arrow)"
                  />
                  {/* Circle */}
                  <circle cx={x} cy={y} r={11} fill="#AF9061" />
                  <text
                    x={x} y={y}
                    textAnchor="middle" dominantBaseline="central"
                    fill="white" fontSize={10} fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                  >{index}</text>
                </g>
              );
            })}
          </svg>
        )}
        </div>{/* end canvas-frame */}
      </div>{/* end canvas-area */}

      {/* Stroke number row */}
      {strokeCount > 0 && (
        <div className="stroke-numbers">
          {Array.from({ length: strokeCount }, (_, i) => {
            const isActive = isPractice && i === currentStroke;
            const opacity = isPractice && i !== currentStroke ? 0.3 : 1;
            return (
              <span
                key={i}
                className={`stroke-num${isActive ? ' stroke-num--active' : ''}`}
                style={{ opacity, transition: 'opacity 0.2s' }}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
