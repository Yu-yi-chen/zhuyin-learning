import { useLang } from '../contexts/LangContext';

const PACKAGES = [
  { name: 'React',                        version: 'v19', license: 'MIT', url: 'https://react.dev' },
  { name: 'React Router DOM',             version: 'v7',  license: 'MIT', url: 'https://reactrouter.com' },
  { name: 'Vite',                         version: 'v8',  license: 'MIT', url: 'https://vite.dev' },
  { name: 'Tone.js',                      version: 'v15', license: 'MIT', url: 'https://tonejs.github.io' },
  { name: 'HanziWriter',                  version: 'v3',  license: 'MIT', url: 'https://hanziwriter.org' },
  { name: '@lottiefiles/dotlottie-react',              license: 'MIT', url: 'https://dotlottie.io' },
  { name: '@emailjs/browser',                          license: 'MIT', url: 'https://www.emailjs.com' },
];

export default function CreditsModal({ open, onClose }) {
  const { t } = useLang();
  if (!open) return null;

  return (
    <div className="credits-overlay" onClick={onClose}>
      <div className="credits-modal" onClick={(e) => e.stopPropagation()}>
        <button className="credits-close" onClick={onClose} aria-label="close">✕</button>

        {/* Scrollable body — inner div keeps scrollbar inside border-radius */}
        <div className="credits-modal__body">
          <h2 className="credits-title">{t.creditsTitle}</h2>

          {/* Open-source packages */}
          <section className="credits-section">
            <h3 className="credits-category">{t.creditsCatPackages}</h3>
            <ul className="credits-list">
              {PACKAGES.map(({ name, version, license, url }) => (
                <li key={name} className="credits-item">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="credits-name">
                    {name}{version ? ` ${version}` : ''}
                  </a>
                  <span className="credits-license">{license}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Character data */}
          <section className="credits-section">
            <h3 className="credits-category">{t.creditsCatData}</h3>
            <ul className="credits-list">
              <li className="credits-item">
                <a href="https://github.com/MadLadSquad/hanzi-writer-data-youyin" target="_blank" rel="noopener noreferrer" className="credits-name">
                  hanzi-writer-data-youyin
                </a>
                <span className="credits-license">CC BY 4.0</span>
                <span className="credits-note">{t.creditsNoteYouyin}</span>
              </li>
            </ul>
          </section>

          {/* Audio */}
          <section className="credits-section">
            <h3 className="credits-category">{t.creditsCatAudio}</h3>
            <ul className="credits-list">
              <li className="credits-item">
                <a href="https://www.mdnkids.com/bopomo/" target="_blank" rel="noopener noreferrer" className="credits-name">
                  注音符號手冊
                </a>
                <span className="credits-license">CC BY 4.0</span>
                <span className="credits-note">{t.creditsNoteAudio}</span>
              </li>
            </ul>
          </section>

          <p className="credits-footer">{t.creditsFooter}</p>
        </div>
      </div>
    </div>
  );
}
