import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../contexts/LangContext';

const EMAILJS_SERVICE  = 'service_qepe44h';
const EMAILJS_TEMPLATE = 'template_4p87f0w';
const EMAILJS_KEY      = 'f-FJdsySXkpi-ACjz';

export default function FeedbackButton() {
  const { t } = useLang();
  const [open, setOpen]       = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = useCallback(async () => {
    if (!message.trim() || status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          title:   t.feedbackSubject,
          message: message.trim(),
          name:    '匿名用戶',
          time:    new Date().toLocaleString('zh-TW'),
          email:   '',
        },
        EMAILJS_KEY,
      );
      setStatus('sent');
      setMessage('');
      setTimeout(() => { setOpen(false); setStatus('idle'); }, 1500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  }, [message, status, t.feedbackSubject]);

  return (
    <>
      <button
        className="feedback-btn"
        onClick={() => setOpen(true)}
        aria-label={t.feedbackBtn}
        title={t.feedbackBtn}
      >
        <MailIcon />
      </button>

      {open && (
        <div className="credits-overlay" onClick={() => setOpen(false)}>
          <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
            <button className="credits-close" onClick={() => setOpen(false)} aria-label="關閉">✕</button>

            <div className="feedback-modal__header">
              <MailIcon size={22} />
              <h2 className="feedback-modal__title">{t.feedbackTitle}</h2>
            </div>
            <p className="feedback-modal__desc">{t.feedbackDesc}</p>

            <textarea
              className="feedback-modal__textarea"
              placeholder={t.feedbackPlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              autoFocus
            />

            <div className="feedback-modal__actions">
              <button className="feedback-modal__cancel" onClick={() => setOpen(false)}>
                {t.feedbackCancel}
              </button>
              <button
                className="feedback-modal__submit"
                onClick={handleSubmit}
                disabled={!message.trim() || status === 'sending' || status === 'sent'}
              >
                {status === 'sending' ? '傳送中…' : status === 'sent' ? '✓ 已送出' : status === 'error' ? '傳送失敗，請重試' : t.feedbackSend}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="2,4 12,13 22,4"/>
    </svg>
  );
}
