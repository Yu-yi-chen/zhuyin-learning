import { useNavigate } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

// 模組內的聽力測驗捷徑（R11）— theme: 'symbol' | 'compound'
export default function QuizShortcut({ theme }) {
  const navigate = useNavigate();
  const { t } = useLang();
  return (
    <button
      className="quiz-shortcut"
      onClick={() => navigate(`/listen?theme=${theme}`)}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
      <span>{t.quizShortcut}</span>
    </button>
  );
}
