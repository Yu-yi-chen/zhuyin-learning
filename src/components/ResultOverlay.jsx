import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useGame } from '../contexts/GameContext';
import { useLang } from '../contexts/LangContext';

export default function ResultOverlay({ onAgain, onNext }) {
  const { popup, dismissPopup } = useGame();
  const { t } = useLang();

  if (!popup) return null;

  const handleAgain = () => { dismissPopup(); onAgain(); };
  const handleNext  = () => { dismissPopup(); onNext(); };

  return (
    <div className="result-overlay">
      <DotLottieReact
        src="/Confetti.lottie"
        autoplay
        loop={false}
        className="result-confetti"
      />

      <div className="result-apple">
        <img src="/Score_Apple.png" alt="" className="result-apple__img" aria-hidden="true" />
        <span className="result-apple__label">+{popup.amount}</span>
      </div>
      <div className="result-btns">
        <button className="result-btn" onClick={handleAgain}>{t.again}</button>
        <button className="result-btn" onClick={handleNext}>{t.next}</button>
      </div>
    </div>
  );
}
