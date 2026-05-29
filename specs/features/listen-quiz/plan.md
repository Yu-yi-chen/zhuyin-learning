# Listen Quiz — Plan

## 目標

透過「聽音辨字」的測驗形式，訓練用戶對注音符號發音的辨識能力。

## 問題背景

學習注音後，用戶需要：
1. 聽到聲音能認出對應符號（聽力辨識）
2. 區分相似發音的符號（難點）
3. 知道自己的正確率（進步感）

## 解決方案

每題播放一個符號的發音，提供 4 個選項（4 選 1）。
- **Easy 模式**：4 個選項從 37 個符號隨機選
- **Challenge 模式**：干擾選項優先選同「相似分組」的符號（如ㄅㄆㄇㄈ同組）

答對第一次 +10 分，答錯保留錯誤選項（標紅），其他選項仍可點擊。

## 技術亮點

### 干擾選項生成
`SIMILAR_GROUPS` 定義 11 個相似組。Challenge 模式下從同組選干擾，使辨識更難。

### 音訊控制
進入此頁時靜音 BGM、停止 BGM，離開時還原（讓注音發音更清晰）。

### 答題狀態機
每題有獨立狀態：`wrongSet`（已錯選項）、`solved`（是否已答對）。
答對後顯示覆蓋層，等用戶按「下一題」才生成新題。

## 涉及的檔案

- `src/pages/ListenPage.jsx`
- `src/data/zhuyin.js`（ZHUYIN_SYMBOLS + SIMILAR_GROUPS）
- `src/utils/speech.js`（playZhuyin）
- `src/utils/sound.js`（BGM 控制 + playSuccess）
- `src/contexts/GameContext.jsx`（addPoints）
