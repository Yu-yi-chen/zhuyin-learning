# Word Audio — Plan

## 為什麼做

例詞面板（WordPanel）目前只有插圖 + 文字，學習者看得到「杯子」卻聽不到怎麼唸。
加上發音播放，符號 → 詞 → 音的學習迴路才完整。

## 範圍

- **完成**：注音地圖 37 個例詞（`words.js`）音檔 + WordPanel 播放鍵 ✅
- **進行中**：結合韻 21 詞（`compounds.js`，詞已定稿；供聽力測驗結合韻主題使用）
- **暫緩**：三拼音 156 詞（詞彙尚可能調整，定稿後再生成）

## 解法

1. **音檔來源**：Gemini TTS（`gemini-2.5-flash-preview-tts`，voice: Leda）
   - 批次腳本生成，prompt 指定台灣國語、兒童教學語氣
   - 已測試「杯子」品質獲用戶認可
2. **檔案**：`public/audio/words/{符號}.m4a`（TTS 輸出 24kHz PCM → WAV → afconvert 轉 AAC）
3. **UI**：WordPanel 加播放按鈕，點擊播放該例詞發音

## 涉及檔案

| 檔案 | 變動 |
|------|------|
| `scripts/generate-word-audio.mjs` | 新建 — TTS 批次生成 |
| `public/audio/words/` | 新建 — 37 個 .m4a |
| `src/components/WordPanel.jsx` | 加播放按鈕 |
| `src/App.css` | 播放按鈕樣式 |

## 不在範圍內

- 結合韻 / 三拼音例詞音檔（詞彙定稿後另批生成）
- WordPopover 的播放鍵（等上述音檔就緒一起加）
- 符號本身的發音（沿用現有教育部音檔機制）
