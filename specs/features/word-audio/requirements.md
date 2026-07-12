# Word Audio — Requirements

## 音檔

### R1：檔案規格
- 路徑：`public/audio/{set}/{key}.m4a`（words = 符號、compounds = 結合韻，檔名與插圖一致）
- 格式：AAC (.m4a)、mono、24kHz 源
- 內容：僅唸例詞本身（如「杯子」），無前後綴語

### R2：生成流程
- `node scripts/generate-word-audio.mjs [words|compounds]`：讀資料檔 → Gemini TTS → WAV → `afconvert` 轉 m4a
- 模型：`gemini-2.5-pro-preview-tts`（pro 與 flash 每日額度分開計，觀測各約 13–15 次/日）
- TTS prompt：**指示句必須用英文**（全中文指示會被拒答 `finishReason: OTHER`）：
  `Say this word clearly in Taiwanese Mandarin, in a warm teaching voice for children: {word}`
- voice：`Leda`；已存在的檔案自動跳過；每檔間隔 15 秒
- **額度節流**（重要）：OTHER 失敗只重試 1 次（重試多半仍拒答、每次都消耗額度）；
  429 不重試（額度已空的症狀，非消耗來源），連續 3 次 429 即停止批次，避免空跑燒額度
- 單檔重生成：刪除對應 .m4a 後重跑
- **發音錯誤修正**：prompt 加拼音提示（如 `Pronunciation guide: miàn bāo — the second syllable is bāo…`）
- **頑固詞（單詞被拒）**：改用「相似詞。目標詞」連唸，再以靜音切割取第二段（案例：烏龜、耳機）

## UI

### R3：WordPanel 播放鍵
- 位置：插圖下方、中文詞旁（與詞同列）
- 樣式：36px 圓形、`border: 2px solid #AF9061`、底 `#fdf8ee`、SVG 喇叭 icon——與筆順畫布右上角的發音鈕（`.canvas-sound-btn`）完全同款
- 點擊 → `new Audio('/audio/words/{symbol}.m4a').play()`
- 播放中再點 → 從頭重播（不疊音：重播前先 pause 舊的）
- 音檔不存在（載入錯誤）→ 按鈕隱藏，不影響面板其他內容

### R4：不自動播放
- 進入頁面或切換符號時**不**自動播放例詞（符號本身發音已有自動播放，避免重疊）
