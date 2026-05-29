# Word Examples — Plan

## 為什麼做

單獨練習符號筆順時，學習者缺乏語境。看到「ㄅ」，很難記住它的實際用途。
加入代表單字（蘋果、貓、車⋯）能建立符號 → 具體事物的記憶連結，提升學習效率。

## 解法

在 `PracticePage` 的筆畫練習區旁，加入一個**單字展示面板**，顯示：

1. 插圖（Phase 1 先留佔位元素，Phase 2 補入實際插圖）
2. 中文單字（每個字上方標注音）
3. EN / JP 譯文（跟隨 LangContext 切換）

每個符號對應一個代表單字，資料集中管理於 `src/data/words.js`。

## 涉及檔案

| 檔案 | 變動 |
|------|------|
| `src/data/words.js` | 新建 — 37 個符號的單字資料 |
| `src/pages/PracticePage.jsx` | 加入 WordPanel 元件 |
| `src/components/WordPanel.jsx` | 新建 — 單字展示 UI |
| `src/App.css` | 新增 `.word-panel` 相關樣式 |
| `public/images/words/` | 新建資料夾 — 未來放插圖（Phase 2）|

## 分階段

- **Phase 1（本次）**：插圖區留空（佔位框），資料 + UI 先建好
- **Phase 2（之後）**：補入 37 張插圖，替換佔位框

## 不在範圍內

- 多個單字例句（每個符號只有一個代表詞）
- 點擊單字播放發音（未來可加）
- 插圖的設計與製作
