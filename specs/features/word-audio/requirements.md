# Word Audio — Requirements

## 音檔

### R1：檔案規格
- 路徑：`public/audio/words/{符號}.m4a`（檔名 = 符號，與插圖一致）
- 格式：AAC (.m4a)、mono、24kHz 源
- 內容：僅唸例詞本身（如「杯子」），無前後綴語

### R2：生成流程
- `node scripts/generate-word-audio.mjs`：讀 `words.js` → Gemini TTS → WAV → `afconvert` 轉 m4a
- TTS prompt：`用台灣國語、清晰親切的兒童教學語氣唸出這個詞：{word}`
- voice：`Leda`；已存在的檔案自動跳過；失敗重試（TTS preview 模型有間歇性 `finishReason: OTHER`）
- 單檔重生成：刪除對應 .m4a 後重跑

## UI

### R3：WordPanel 播放鍵
- 位置：插圖下方、中文詞旁（與詞同列）
- 樣式：圓形按鈕、喇叭 icon（沿用 `/volume.png`），視覺與 app 現有圓形按鈕一致
- 點擊 → `new Audio('/audio/words/{symbol}.m4a').play()`
- 播放中再點 → 從頭重播（不疊音：重播前先 pause 舊的）
- 音檔不存在（載入錯誤）→ 按鈕隱藏，不影響面板其他內容

### R4：不自動播放
- 進入頁面或切換符號時**不**自動播放例詞（符號本身發音已有自動播放，避免重疊）
