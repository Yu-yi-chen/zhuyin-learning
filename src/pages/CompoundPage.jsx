import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import QuizShortcut from '../components/QuizShortcut';
import WordPopover from '../components/WordPopover';
import { COMPOUND_GROUPS } from '../data/compounds';
import { DUPLEX_WORDS, DUPLEX_INITIALS, DUPLEX_FINALS } from '../data/duplex';

import { useLang } from '../contexts/LangContext';

export default function CompoundPage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [tab, setTab] = useState('duplex'); // 'duplex'（聲母+韻母）| 'medial'（結合韻）
  const [popover, setPopover] = useState(null); // { entry, key }

  const handlePlayCompound = useCallback((item) => {
    setPopover({ entry: item, key: item.compound });
  }, []);

  const handlePlayDuplex = useCallback((initial, final) => {
    const key = initial + final;
    setPopover({ entry: DUPLEX_WORDS[key], key });
  }, []);

  const switchTab = useCallback((next) => {
    setTab(next);
    setPopover(null);
  }, []);

  return (
    <div className="page-layout">
      <Navbar showBack onBack={() => navigate('/')} />

      <div className="page-body">
        <Sidebar />
        <main className="compound-page">
          <div className="compound-page__header">
            <h1 className="compound-page__title">{t.compoundTitle ?? '雙拼音'}</h1>
            <QuizShortcut theme="compound" />
          </div>
          <p className="compound-page__subtitle">{t.compoundSubtitle ?? '點擊格子看例詞'}</p>

          {/* Tab 切換：聲母+韻母 / 結合韻 */}
          <div className="syllables-tabs">
            <button
              className={`syllables-tab${tab === 'duplex' ? ' syllables-tab--active' : ''}`}
              onClick={() => switchTab('duplex')}
            >{t.duplexTabSV ?? '聲母+韻母'}</button>
            <button
              className={`syllables-tab${tab === 'medial' ? ' syllables-tab--active' : ''}`}
              onClick={() => switchTab('medial')}
            >{t.duplexTabMedial ?? '結合韻'}</button>
          </div>

          {tab === 'duplex' ? (
            /* ── 聲母+韻母 表格（樣式共用三拼音頁） ── */
            <div className="syllables-table-wrap">
              <table className="syllables-table">
                <thead>
                  <tr>
                    <th className="syllables-table__corner" />
                    {DUPLEX_FINALS.map((f) => (
                      <th key={f} className="syllables-table__col-header">
                        <span className="syl-sym">{f}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DUPLEX_INITIALS.map((initial) => (
                    <tr key={initial}>
                      <td className="syllables-table__row-header">{initial}</td>
                      {DUPLEX_FINALS.map((final) => {
                        const key = initial + final;
                        const valid = key in DUPLEX_WORDS;
                        return (
                          <td key={final} className="syllables-table__cell">
                            {valid ? (
                              <button
                                className={`syl-cell${popover?.key === key ? ' syl-cell--active' : ''}`}
                                onClick={() => handlePlayDuplex(initial, final)}
                                aria-label={key}
                              >
                                <span className="syl-cell__sym">{initial}</span>
                                <span className="syl-cell__sym">{final}</span>
                              </button>
                            ) : (
                              <span className="syl-cell--empty">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* ── 結合韻（原功能不變） ── */
            COMPOUND_GROUPS.map((group) => (
              <section key={group.medial} className="compound-group">
                <div className="compound-group__header">
                  <span className="compound-group__medial">{group.medial}</span>
                  <span className="compound-group__label">{t.medialGroup ?? '系'}</span>
                </div>

                <div className="compound-group__grid">
                  {group.items.map((item) => (
                    <button
                      key={item.compound}
                      className={`compound-cell${popover?.key === item.compound ? ' compound-cell--active' : ''}`}
                      onClick={() => handlePlayCompound(item)}
                      aria-label={item.romanization}
                    >
                      <span className="compound-cell__sym">{item.symbols[0]}</span>
                      <span className="compound-cell__sym">{item.symbols[1]}</span>
                      <span className="compound-cell__roman">{item.romanization}</span>
                    </button>
                  ))}
                </div>
              </section>
            ))
          )}
        </main>
      </div>

      <WordPopover
        entry={popover?.entry ?? null}
        audioSrc={popover
          ? (popover.entry?.compound
              ? `/audio/compounds/${popover.entry.compound}.m4a`
              : `/audio/duplex/${popover.key}.m4a`)
          : null}
        onClose={() => setPopover(null)}
      />
    </div>
  );
}
