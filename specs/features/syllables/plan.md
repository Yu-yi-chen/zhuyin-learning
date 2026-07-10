# 三拼音 — Plan

## 為什麼做

結合韻學完後，學習者需要練習「聲母 + 介音 + 韻母」的完整音節。
三拼音是注音系統的第三層，覆蓋了普通話中所有有效的三元音節組合。

## 解法

新頁面 `/syllables`，以三個分頁呈現：
- ㄧ 系：有哪些聲母可接 ㄧ-系結合韻
- ㄨ 系：有哪些聲母可接 ㄨ-系結合韻
- ㄩ 系：有哪些聲母可接 ㄩ-系結合韻

每個格子顯示三個符號（聲母 + 結合韻兩個符號），點擊後彈出浮動卡片（WordPopover）顯示代表詞。音訊功能暫停用（待後續版本補入）。
無效組合（不存在於普通話中）顯示 —，不可點擊。

## 涉及檔案

| 檔案 | 變動 |
|------|------|
| `src/data/syllables.js` | 新建 — 有效三拼音組合表（SYLLABLE_TABLE + INITIALS_FOR_MEDIAL） |
| `src/data/syllable-words.js` | 新建 — ~120 個三拼音代表詞（keyed by 聲母+結合韻） |
| `src/data/compounds.js` | 相依 — SyllablesPage 用 COMPOUND_GROUPS 當欄標題 |
| `src/pages/SyllablesPage.jsx` | 新建 — 主頁面 |
| `src/components/WordPopover.jsx` | 共用 — 浮動卡片（同 compound-sounds） |
| `src/App.jsx` | 新增 `/syllables` 路由 |
| `src/pages/HomePage.jsx` | 新增第三張卡片（含 `/三拼音.png`） |
| `src/App.css` | 新增樣式 |
