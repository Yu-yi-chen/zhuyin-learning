import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LangProvider } from './contexts/LangContext';
import { GameProvider } from './contexts/GameContext';
import { TransitionProvider } from './contexts/TransitionContext';
import CreditsModal from './components/CreditsModal';
import AboutModal from './components/AboutModal';
import FeedbackButton from './components/FeedbackButton';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import PracticePage from './pages/PracticePage';
import ListenPage from './pages/ListenPage';
import './App.css';

export default function App() {
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [aboutOpen, setAboutOpen]     = useState(false);

  return (
    <AuthProvider>
    <LangProvider>
      <GameProvider>
        <BrowserRouter>
          <TransitionProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/practice/:symbol" element={<PracticePage />} />
              <Route path="/listen" element={<ListenPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <button
              className="about-btn"
              onClick={() => setAboutOpen(true)}
              aria-label="關於 BopoBear"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8"  cy="9"  r="4.5" fill="#AF9061"/>
                <circle cx="24" cy="9"  r="4.5" fill="#AF9061"/>
                <circle cx="8"  cy="9"  r="2.5" fill="#fef6e4"/>
                <circle cx="24" cy="9"  r="2.5" fill="#fef6e4"/>
                <circle cx="16" cy="18" r="11"   fill="#AF9061"/>
                <ellipse cx="16" cy="21.5" rx="4.5" ry="3" fill="#fef6e4"/>
                <circle cx="12.5" cy="16" r="1.5" fill="#fef6e4"/>
                <circle cx="19.5" cy="16" r="1.5" fill="#fef6e4"/>
                <ellipse cx="16" cy="20" rx="1.5" ry="1" fill="#AF9061"/>
              </svg>
            </button>
            <button
              className="credits-btn"
              onClick={() => setCreditsOpen(true)}
              aria-label="資料來源"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="8" x2="12" y2="8.01" strokeWidth="3.5"/>
                <line x1="12" y1="12" x2="12" y2="17"/>
              </svg>
            </button>
            <FeedbackButton />
            <CreditsModal open={creditsOpen} onClose={() => setCreditsOpen(false)} />
            <AboutModal  open={aboutOpen}   onClose={() => setAboutOpen(false)} />
          </TransitionProvider>
        </BrowserRouter>
      </GameProvider>
    </LangProvider>
    </AuthProvider>
  );
}
