# Stroke Practice — Validation

## 驗收清單

### Example Mode

- [ ] 進入 `/practice/ㄅ` 後自動播放筆順動畫
- [ ] 動畫每筆依序出現，最後一筆完成後自動進入 practice mode
- [ ] 動畫播放時同時發出注音讀音

### Practice Mode

- [ ] Practice mode 下顯示符號輪廓供描畫
- [ ] 沿著正確方向/位置描畫，筆畫被接受（符號顏色/動畫確認）
- [ ] 畫錯方向或位置，該筆不被接受（可重試）
- [ ] 所有筆完成後顯示 ResultOverlay

### ResultOverlay

- [ ] 完成後出現 overlay
- [ ] 點「再試一次」→ 回到 example mode（動畫重播）
- [ ] 點「下一個」→ 切換到下一個符號，example mode 重新開始

### 符號導航

- [ ] 點左箭頭 → 切換到前一個符號
- [ ] 點右箭頭 → 切換到下一個符號
- [ ] 第一個符號（ㄅ）點左箭頭 → 循環到最後一個符號（ㄦ）
- [ ] 最後一個符號點右箭頭 → 循環到 ㄅ
- [ ] Sidebar 的 5 格快速按鈕顯示當前 ± 2，當前符號有 active 樣式
- [ ] 每個快速按鈕下方顯示 romanization（如 b、p、m…），active 時白字

### Quick-Nav Panel

- [ ] 右上角 grid icon 按鈕可開啟 quick-nav panel
- [ ] Panel 顯示全部 37 個符號
- [ ] 已完成的符號顯示 ✓ 標記
- [ ] 當前符號有 active 樣式
- [ ] 點擊任一符號跳轉，panel 自動關閉
- [ ] 點擊 panel 外的遮罩關閉 panel

### 完成持久化

- [ ] 完成ㄅ後返回地圖，ㄅ的圓圈顯示完成樣式
- [ ] 重新整理後再次進入，完成狀態依然在

### Prefetch

- [ ] 切換到已訪問過的相鄰符號時，幾乎無延遲即顯示筆順動畫

### WordPanel（例詞面板）

- [ ] 筆順練習頁顯示當前符號的代表詞（WordPanel）
- [ ] 桌機：WordPanel 顯示在練習區右側
- [ ] 手機：WordPanel 顯示在練習區下方
- [ ] 切換符號時 WordPanel 內容同步更新
- [ ] EN 模式顯示英文譯文，JP 模式顯示日文譯文
- [ ] 插圖顯示實際圖片（3D 黏土風、透明背景；null 時退回虛線灰框）
- [ ] 注音標記直式排列，調號位置正確（ˊˇˋ 在最後符號右上角、˙ 在欄位正上方）

## 已知限制

- `dataOverride: true` 的符號（ㄇ ㄌ ㄏ ㄖ ㄧ ㄨ ㄚ ㄛ ㄝ ㄟ ㄠ ㄣ）使用本地 override；若新增符號需補對應 JSON
- 部分符號如 ㄩ 無本地 override，依賴 youyin CDN（需網路）
- 注音發音使用 Web Audio API（Tone.js AudioContext），在 iOS Safari 首次互動前需用戶點擊解鎖
