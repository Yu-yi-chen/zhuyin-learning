import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ZhuyinColumn from '../components/ZhuyinColumn';
import { SYMBOL_WORDS } from '../data/words';
import { scorePronunciation } from '../utils/pronunciation';
import { useLang } from '../contexts/LangContext';

const MAX_MS = 5000; // 錄音上限，避免過長（R3）

const randomWord = () => SYMBOL_WORDS[Math.floor(Math.random() * SYMBOL_WORDS.length)];

export default function PronouncePage() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const [target, setTarget] = useState(randomWord);
  const [status, setStatus] = useState('idle'); // idle | recording | scoring | done | error
  const [result, setResult] = useState(null);   // { score, feedback }
  const [errorMsg, setErrorMsg] = useState('');

  const recorderRef = useRef(null);
  const chunksRef   = useRef([]);
  const stopTimerRef = useRef(null);

  // 離開頁面時確保麥克風關閉
  useEffect(() => () => {
    clearTimeout(stopTimerRef.current);
    recorderRef.current?.stream?.getTracks().forEach((t) => t.stop());
  }, []);

  const playSample = useCallback(() => {
    new Audio(`/audio/words/${target.symbol}.m4a`).play().catch(() => {});
  }, [target.symbol]);

  const nextWord = useCallback(() => {
    setTarget((prev) => {
      let next = randomWord();
      while (next.symbol === prev.symbol) next = randomWord();
      return next;
    });
    setStatus('idle');
    setResult(null);
    setErrorMsg('');
  }, []);

  const stopRecording = useCallback(() => {
    clearTimeout(stopTimerRef.current);
    recorderRef.current?.state === 'recording' && recorderRef.current.stop();
  }, []);

  const startRecording = useCallback(async () => {
    setResult(null);
    setErrorMsg('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());   // 關麥克風
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType });
        chunksRef.current = [];                        // 錄音不留存（隱私）
        setStatus('scoring');
        try {
          setResult(await scorePronunciation(blob, target));
          setStatus('done');
        } catch (err) {
          setErrorMsg(err.message);
          setStatus('error');
        }
      };

      recorder.start();
      setStatus('recording');
      stopTimerRef.current = setTimeout(stopRecording, MAX_MS);
    } catch {
      setErrorMsg('無法使用麥克風——請確認瀏覽器已授權麥克風權限。');
      setStatus('error');
    }
  }, [target, stopRecording]);

  const scoreTier = result
    ? (result.score >= 80 ? 'good' : result.score >= 60 ? 'ok' : 'retry')
    : null;

  return (
    <div className="page-layout">
      <Navbar showBack onBack={() => navigate('/')} />
      <div className="page-body">
        <Sidebar />
        <main className="pronounce-page">
          <h1 className="pronounce-page__title">發音練習</h1>
          <p className="pronounce-page__note">🧪 原型測試中 — 評分僅供參考，尚不精準</p>

          {/* 目標詞卡 */}
          <div className="pronounce-card">
            {target.illustration && (
              <img src={target.illustration} alt={target.word} className="pronounce-card__img" />
            )}
            <div className="pronounce-card__word">
              {target.word.split('').map((char, i) => (
                <div key={i} className="wp__char-wrap">
                  <ZhuyinColumn zhuyin={target.zhuyin?.[i]} />
                  <span className="wp__char">{char}</span>
                </div>
              ))}
            </div>
            <p className="pronounce-card__translation">
              {lang === 'JP' ? target.jp : target.en}
            </p>
          </div>

          {/* 控制列 */}
          <div className="pronounce-actions">
            <button className="pronounce-btn" onClick={playSample} disabled={status === 'recording'}>
              🔊 聽範例
            </button>

            {status === 'recording' ? (
              <button className="pronounce-btn pronounce-btn--stop" onClick={stopRecording}>
                ⏹ 停止錄音
              </button>
            ) : (
              <button
                className="pronounce-btn pronounce-btn--rec"
                onClick={startRecording}
                disabled={status === 'scoring'}
              >
                🎤 {status === 'scoring' ? '評分中…' : '開始錄音'}
              </button>
            )}

            <button className="pronounce-btn" onClick={nextWord} disabled={status === 'recording' || status === 'scoring'}>
              換一個 →
            </button>
          </div>

          {/* 狀態 / 結果 */}
          {status === 'recording' && (
            <p className="pronounce-status pronounce-status--rec">● 錄音中…（最多 5 秒）</p>
          )}
          {status === 'scoring' && <p className="pronounce-status">AI 評分中…</p>}
          {status === 'error' && <p className="pronounce-status pronounce-status--err">{errorMsg}</p>}

          {status === 'done' && result && (
            <div className={`pronounce-result pronounce-result--${scoreTier}`}>
              <span className="pronounce-result__score">{result.score}</span>
              <span className="pronounce-result__unit">分</span>
              <p className="pronounce-result__feedback">{result.feedback}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
