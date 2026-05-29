# Stroke Practice — Plan

## 目標

讓用戶先**看**正確筆順，再**自己練習**，最後**完成**該符號的學習記錄。

## 問題背景

注音符號的筆順對記憶非常重要，但傳統教材是靜態圖片。用戶需要：
1. 看到動態的筆順示範（每一筆順序）
2. 自己試著照著畫出來
3. 知道「這個符號我學過了」

## 解決方案

兩段式流程：
- **Example mode**：hanzi-writer 自動播放筆順動畫，播完後自動進入 practice mode
- **Practice mode**：用戶跟著用滑鼠/觸控畫，hanzi-writer 判斷每筆是否正確

完成所有筆後，`GameContext.completeSymbol()` 記錄完成，顯示 `ResultOverlay`。

## 關鍵技術決策

### hanzi-writer charData 載入
優先載入 `/zhuyin-overrides/{symbol}.json`（本地 override），失敗時 fallback 到 youyin CDN。Session 內 cache，鄰近符號預先 prefetch。

### URL 設計
`/practice/:symbol`：symbol 為 URL encode 的注音 Unicode 字元（如 `%E3%84%85`）。`encodeURIComponent` / `decodeURIComponent` 處理編解碼。

### 鄰近符號 Prefetch
每次 currentIndex 改變，預先 fetch `[-2, -1, +1, +2]` 的 charData，讓切換符號時即時。

## 涉及的檔案

- `src/pages/PracticePage.jsx`
- `src/components/PracticeCanvas.jsx`（核心 hanzi-writer 整合）
- `src/components/ResultOverlay.jsx`（完成覆蓋層）
- `src/utils/charData.js`（資料載入 + cache）
- `src/contexts/GameContext.jsx`（completeSymbol）
- `src/utils/speech.js`（完成後播音）
