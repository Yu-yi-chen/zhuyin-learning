import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import WordPopover from '../components/WordPopover';
import { COMPOUND_GROUPS } from '../data/compounds';
import { SYLLABLE_TABLE, INITIALS_FOR_MEDIAL } from '../data/syllables';
import { SYLLABLE_WORDS } from '../data/syllable-words';

import { useLang } from '../contexts/LangContext';

const MEDIALS = ['ㄧ', 'ㄨ', 'ㄩ'];

export default function SyllablesPage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [tab, setTab]       = useState('ㄧ');
  const [popover, setPopover] = useState(null); // { entry, anchor }

  const compoundItems = COMPOUND_GROUPS.find((g) => g.medial === tab)?.items ?? [];
  const initials = INITIALS_FOR_MEDIAL[tab] ?? [];
  const table    = SYLLABLE_TABLE[tab] ?? {};

  const handlePlay = useCallback((initial, item, e) => {
    const rect  = e.currentTarget.getBoundingClientRect();
    const key   = initial + item.compound;
    const entry = SYLLABLE_WORDS[key] ?? null;
    setPopover({ entry, anchor: rect, key });
  }, []);

  return (
    <div className="page-layout">
      <Navbar showBack onBack={() => navigate('/')} />

      <div className="page-body">
        <Sidebar />
        <main className="syllables-page">
        <h1 className="syllables-page__title">{t.syllablesTitle ?? '三拼音'}</h1>
        <p className="syllables-page__subtitle">{t.syllablesSubtitle ?? '點擊格子聆聽聲母＋結合韻的組合發音'}</p>

        {/* Tab 切換 */}
        <div className="syllables-tabs">
          {MEDIALS.map((m) => (
            <button
              key={m}
              className={`syllables-tab${tab === m ? ' syllables-tab--active' : ''}`}
              onClick={() => { setTab(m); setPopover(null); }}
            >
              {m} {t.medialGroup ?? '系'}
            </button>
          ))}
        </div>

        {/* 表格 */}
        <div className="syllables-table-wrap">
          <table className="syllables-table">
            <thead>
              <tr>
                <th className="syllables-table__corner" />
                {compoundItems.map((item) => (
                  <th key={item.compound} className="syllables-table__col-header">
                    <span className="syl-sym">{item.symbols[0]}</span>
                    <span className="syl-sym">{item.symbols[1]}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {initials.map((initial) => (
                <tr key={initial}>
                  <td className="syllables-table__row-header">{initial}</td>
                  {compoundItems.map((item) => {
                    const valid = table[initial]?.includes(item.compound);
                    const key   = initial + item.compound;
                    return (
                      <td key={item.compound} className="syllables-table__cell">
                        {valid ? (
                          <button
                            className={`syl-cell${popover?.key === key ? ' syl-cell--active' : ''}`}
                            onClick={(e) => handlePlay(initial, item, e)}
                            aria-label={`${initial}${item.compound}`}
                          >
                            <span className="syl-cell__sym">{initial}</span>
                            <span className="syl-cell__sym">{item.symbols[0]}</span>
                            <span className="syl-cell__sym">{item.symbols[1]}</span>
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
        </main>
      </div>

      <WordPopover
        entry={popover?.entry ?? null}
        anchor={popover?.anchor ?? null}
        onClose={() => setPopover(null)}
      />
    </div>
  );
}
