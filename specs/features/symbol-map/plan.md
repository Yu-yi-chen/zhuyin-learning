# Symbol Map — Plan

## 目標

提供一個讓用戶看到全部 37 個注音符號、快速找到想練習的符號、並看到自己學習進度的總覽頁面。

## 問題背景

學習者需要：
1. 知道注音符號有哪些（總覽）
2. 依分類（聲母/介音/韻母）理解系統性
3. 看到自己已練習過哪些（成就感 + 方向感）
4. 快速進入任一符號的練習

## 解決方案

Grid 佈局展示所有符號，每個符號一個圓形按鈕。提供分類 Tab 過濾，完成的符號顯示綠色勾勾。

## 實作路徑

1. 從 `ZHUYIN_SYMBOLS` 渲染 37 個符號圓圈
2. Tab 切換過濾（all / 聲母 / 介音 / 韻母）
3. 從 `GameContext.completedSymbols` 讀取完成狀態
4. 點擊符號導航到 `/practice/:symbol`
5. 頁面載入時 `preloadZhuyin()` 預熱語音

## 涉及的檔案

- `src/pages/MapPage.jsx`
- `src/data/zhuyin.js`（資料來源）
- `src/contexts/GameContext.jsx`（完成狀態）
- `src/utils/speech.js`（preload）
