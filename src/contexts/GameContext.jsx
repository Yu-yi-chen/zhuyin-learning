import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const GameContext = createContext(null);

// localStorage keys
const LS_POINTS   = 'bopobear_points';
const LS_DONE     = 'bopobear_completed';
const LS_EXPLORED = 'bopobear_explored_compounds';

function loadSet(key) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch { return new Set(); }
}

// pts needed to advance from each level: L1→L2, L2→L3, L3→L4, L4→L5, L5→L6
const PTS_TO_NEXT = [50, 80, 150, 200, 300];

// cumulative thresholds to reach each level: [0, 50, 130, 280, 480, 780]
const LEVEL_THRESHOLDS = PTS_TO_NEXT.reduce(
  (acc, pts) => [...acc, acc[acc.length - 1] + pts],
  [0],
);

export function GameProvider({ children }) {
  // 積分：從 localStorage 載入，變動時寫回（修正重整歸零 bug）
  const [points, setPoints] = useState(() => {
    const saved = Number(localStorage.getItem(LS_POINTS));
    return Number.isFinite(saved) ? saved : 0;
  });
  useEffect(() => {
    localStorage.setItem(LS_POINTS, String(points));
  }, [points]);

  const [popup, setPopup] = useState(null); // { amount: 10 }
  const [completedSymbols, setCompletedSymbols] = useState(() => loadSet(LS_DONE));
  // 雙拼音/結合韻「已探索」格子（點開看過即標記；純進度追蹤，不給分）
  const [exploredCompounds, setExploredCompounds] = useState(() => loadSet(LS_EXPLORED));

  // level is 1-based; cap at max level (length of LEVEL_THRESHOLDS)
  const level = Math.min(
    LEVEL_THRESHOLDS.filter((t) => points >= t).length,
    LEVEL_THRESHOLDS.length,
  );
  const levelBase     = LEVEL_THRESHOLDS[level - 1];
  const levelProgress = points - levelBase;
  const PTS_PER_LEVEL = PTS_TO_NEXT[level - 1] ?? PTS_TO_NEXT[PTS_TO_NEXT.length - 1];

  const addPoints = useCallback((amount = 10) => {
    setPoints((p) => p + amount);
    setPopup({ amount });
  }, []);

  const dismissPopup = useCallback(() => setPopup(null), []);

  const completeSymbol = useCallback((symbol) => {
    setCompletedSymbols((prev) => {
      const next = new Set([...prev, symbol]);
      localStorage.setItem(LS_DONE, JSON.stringify([...next]));
      return next;
    });
  }, []);

  // 標記某個雙拼音/結合韻已探索（key = 組合字串，如 'ㄅㄚ' / 'ㄧㄚ'）
  const exploreCompound = useCallback((key) => {
    setExploredCompounds((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set([...prev, key]);
      localStorage.setItem(LS_EXPLORED, JSON.stringify([...next]));
      return next;
    });
  }, []);

  // dev-only helper for testing overlays
  // eslint-disable-next-line react-hooks/immutability
  if (import.meta.env.DEV) window.__addPoints = addPoints;

  return (
    <GameContext.Provider value={{ points, level, levelProgress, PTS_PER_LEVEL, popup, addPoints, dismissPopup, completedSymbols, completeSymbol, exploredCompounds, exploreCompound }}>
      {children}
    </GameContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGame = () => useContext(GameContext);
