# Stroke Practice — Requirements

## 功能需求

### R1：Example Mode（示範模式）
- 進入頁面或切換符號後，預設為 example mode
- 自動播放 hanzi-writer 筆順動畫（每筆依序播出）
- 動畫播完後自動切換到 practice mode
- 同時播放該符號的注音發音（`playZhuyin(symbol)`）

### R2：Practice Mode（練習模式）
- 顯示符號輪廓，用戶用滑鼠/觸控沿著筆順描畫
- hanzi-writer 判斷每筆是否正確
- 所有筆完成後呼叫 `completeSymbol(symbol)` 並顯示 ResultOverlay

### R3：ResultOverlay
- 顯示完成 overlay
- 提供「再試一次」按鈕 → 回到 example mode
- 提供「下一個」按鈕 → 切換到下一個符號

### R4：符號導航
- Sidebar 顯示左右箭頭，可切換到前/後一個符號（循環）
- Sidebar 顯示當前符號 ± 2 的 5 個符號快速按鈕
- 頁面右上角有「所有符號」grid panel（quick-nav），可直接跳轉任一符號
- Quick-nav panel 有遮罩，點擊遮罩關閉

### R5：完成標記
- Quick-nav panel 中已完成的符號顯示 ✓
- 當前符號在 quick-nav 中有 active 樣式

### R6：Sidebar 內容
- 顯示當前符號的導航控制（R4 的元素）
- 上方共用 Sidebar 組件（顯示積分/進度）

### R7：頁面初始化
- 進入頁面時預先 prefetch 鄰近 ±2 符號的 charData

## 資料需求

- `symbol`：從 URL params decode
- `ZHUYIN_SYMBOLS`：符號陣列（用於 index 計算和導航）
- `completedSymbols`：Set（from GameContext）

## 邊界條件

- URL 中的 symbol 找不到時，fallback 到第一個符號
- charData 無論從 override 或 CDN 都載入失敗時：hanzi-writer 顯示 error 狀態（不崩潰）
- 切換符號時 `key={symbol}` 強制重新 mount PracticeCanvas（清除前一個符號的狀態）

## 非功能需求

- 切換到已 prefetch 的符號應在 50ms 內顯示 canvas
- 筆順動畫播放流暢，無卡頓
