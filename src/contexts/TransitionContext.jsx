import { createContext, useContext, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [state, setState] = useState({ active: false, phase: 'idle', origin: '50% 50%' });
  const pendingPath = useRef(null);

  // Call this instead of navigate() — pass the MouseEvent to origin the circle
  const transitionTo = useCallback((path, event) => {
    if (state.active) return;
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    pendingPath.current = path;
    setState({ active: true, phase: 'expand', origin: `${x}px ${y}px` });
  }, [state.active]);

  const onAnimationEnd = useCallback(() => {
    if (state.phase === 'expand') {
      // Screen is covered → navigate, then start shrink
      navigate(pendingPath.current);
      setState((s) => ({ ...s, phase: 'shrink' }));
    } else {
      // Shrink done → hide overlay
      setState({ active: false, phase: 'idle', origin: '50% 50%' });
    }
  }, [state.phase, navigate]);

  return (
    <TransitionContext.Provider value={{ transitionTo }}>
      {children}
      {state.active && (
        <div
          key={state.phase}
          className={`circle-transition circle-transition--${state.phase}`}
          style={{ '--origin': state.origin }}
          onAnimationEnd={onAnimationEnd}
        />
      )}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
