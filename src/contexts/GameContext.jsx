import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import { loadProgress, saveProgress } from '../utils/progressSync';

const GameContext = createContext(null);

// pts needed to advance from each level: L1→L2, L2→L3, L3→L4, L4→L5, L5→L6
const PTS_TO_NEXT = [50, 80, 150, 200, 300];

// cumulative thresholds to reach each level: [0, 50, 130, 280, 480, 780]
const LEVEL_THRESHOLDS = PTS_TO_NEXT.reduce(
  (acc, pts) => [...acc, acc[acc.length - 1] + pts],
  [0],
);

export function GameProvider({ children }) {
  const { user } = useAuth();
  const hasSyncedRef    = useRef(false);
  const wasLoggedInRef  = useRef(false);
  const saveTimerRef    = useRef(null);

  const [points, setPoints] = useState(0);
  const [popup, setPopup] = useState(null); // { amount: 10 }
  const [completedSymbols, setCompletedSymbols] = useState(() => {
    try {
      const saved = localStorage.getItem('bopobear_completed');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });

  // On login: load from Supabase and merge with localStorage.
  // On logout: reset points, revert completedSymbols to localStorage.
  useEffect(() => {
    if (!user) {
      // Skip the initial mount when user was never logged in (avoids needless re-render)
      if (!wasLoggedInRef.current) return;
      wasLoggedInRef.current = false;
      hasSyncedRef.current = false;
      setPoints(0);
      try {
        const saved = localStorage.getItem('bopobear_completed');
        setCompletedSymbols(saved ? new Set(JSON.parse(saved)) : new Set());
      } catch {
        setCompletedSymbols(new Set());
      }
      return;
    }

    wasLoggedInRef.current = true;
    loadProgress(user.id)
      .then(({ completed_symbols: remote, points: remotePoints }) => {
        setCompletedSymbols((prev) => {
          const merged = new Set([...prev, ...remote]);
          localStorage.setItem('bopobear_completed', JSON.stringify([...merged]));
          return merged;
        });
        setPoints((p) => Math.max(p, remotePoints));
        hasSyncedRef.current = true;
      })
      .catch((err) => {
        console.error(err);
        // Allow saves to proceed with local state even if cloud load failed
        hasSyncedRef.current = true;
      });
  }, [user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Debounced save to Supabase after any progress change (skips before initial sync)
  useEffect(() => {
    if (!user || !hasSyncedRef.current) return;
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveProgress(user.id, { completedSymbols, points }).catch(console.error);
    }, 1500);
    return () => clearTimeout(saveTimerRef.current);
  }, [points, completedSymbols, user]);

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
      localStorage.setItem('bopobear_completed', JSON.stringify([...next]));
      return next;
    });
  }, []);

  // dev-only helper for testing overlays
  // eslint-disable-next-line react-hooks/immutability
  if (import.meta.env.DEV) window.__addPoints = addPoints;

  return (
    <GameContext.Provider value={{ points, level, levelProgress, PTS_PER_LEVEL, popup, addPoints, dismissPopup, completedSymbols, completeSymbol }}>
      {children}
    </GameContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGame = () => useContext(GameContext);
