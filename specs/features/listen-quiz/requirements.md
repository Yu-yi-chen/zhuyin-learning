# Listen Quiz — Requirements

## 功能需求

### R1：題目生成
- 每題從 37 個符號隨機抽一個作為正確答案
- 提供 4 個選項（含正確答案）
- **Easy**：其他 3 個從全部 37 個符號隨機選
- **Challenge**：其他 3 個優先從正確答案的相似組（`SIMILAR_GROUPS`）選；若同組不足則補隨機

### R2：發音播放
- 進入頁面 700ms 後自動播放第一題發音
- 之後每次換題 300ms 後自動播放
- 提供明顯的播放按鈕（`lq-play-btn`），可手動重播
- 使用 `playZhuyin(symbol)`（Web Audio API，Tone.js AudioContext，來源 `/audio/bopomofo.mp3`）

### R3：選項互動
- 4 個選項按鈕，每個顯示注音字元（大）+ 羅馬拼音（小）
- **Challenge 模式 + 未答對 + 未有錯誤**：隱藏羅馬拼音（增加難度）
- 點擊正確選項：進入 `solved` 狀態，顯示答對覆蓋層
- 點擊錯誤選項：該選項標紅，保持可見，其他選項仍可點擊
- 已答對或已點過的選項 `disabled`

### R4：答對覆蓋層
- 答對後顯示半透明覆蓋層
- **首次答對**（`wrongSet.size === 0`）：顯示 confetti Lottie + 蘋果積分 +10
- **有過錯誤才答對**：只顯示覆蓋層，無 confetti
- 覆蓋層內顯示正確符號的筆順動畫（`StrokePreview`，160px）
- 「下一題 →」按鈕，點擊後生成新題

### R5：積分
- 首次答對（當題未有過錯誤答案）：`addPoints(10)`
- 已有錯誤才答對：不加分
- 分數統計：`score.correct / score.total`（目前只統計，未顯示 UI）

### R6：難度切換
- Sidebar 顯示 Easy / Challenge 兩個按鈕
- 切換難度後立即重置當前題目（新題、清 wrongSet、清 solved）
- 難度偏好存 `localStorage.bopobear_difficulty`

### R7：筆順預覽 Toggle
- 答對覆蓋層旁有 toggle 可開關「筆順預覽」功能（預設開）
- 狀態存 `localStorage.bopobear_listen_stroke`

### R8：BGM 控制
- 進入頁面：記錄目前 BGM 狀態 → `setBGMMuted(true)` + `stopBGM()`
- 離開頁面：若原本未靜音 → `setBGMMuted(false)` + `startBGM()`

## Phase 2 擴充

### R9：主題選擇器
- 頁面頂部 tabs：**符號** / **結合韻**（沿用 syllables-tabs 樣式）
- URL 參數 `?theme=symbol|compound` 決定初始主題；無參數預設 `symbol`
- 切換主題 = 重置題目、wrongSet、solved（同切難度行為）
- Easy / Challenge 對兩主題皆有效
- 筆順預覽 toggle **僅符號主題**顯示

### R10：結合韻主題
- 題目：從 21 個結合韻隨機抽一個，播放其代表詞音檔（`/audio/compounds/{結合韻}.m4a`，如 ㄩㄝ → 月亮）
- 選項：4 個結合韻，直式雙符號呈現（同 CompoundPage 格子的符號排法）+ romanization（小字）
- **Easy**：干擾從全部 21 個隨機選
- **Challenge**：干擾優先選**同介音系**的結合韻（ㄩㄝ 的干擾優先 ㄩㄢ ㄩㄣ ㄩㄥ）；同系不足補隨機；隱藏 romanization（同符號主題規則）
- 答對覆蓋層：顯示該詞**插圖 + 中文詞 + 直式注音 + 譯文**（取代筆順動畫）
- 積分、confetti、錯選標紅規則與符號主題相同

### R11：模組捷徑
- MapPage、CompoundPage 頁首加「聽力測驗」捷徑按鈕（喇叭 icon + 文案，金棕色系）
- MapPage → `/listen?theme=symbol`；CompoundPage → `/listen?theme=compound`
- 文案跟隨 i18n（EN/JP）

## 資料需求

- `ZHUYIN_SYMBOLS`：所有符號（用於題目生成）
- `SIMILAR_GROUPS`：相似組陣列（Challenge 模式干擾選項）
- `COMPOUND_GROUPS`：結合韻資料（結合韻主題題目 + 同介音系干擾）
- `public/audio/compounds/{結合韻}.m4a`：21 個代表詞音檔（Gemini TTS，`generate-word-audio.mjs compounds`）

## 邊界條件

- 相似組不足 3 個干擾時，補充全部隨機符號填滿 4 個選項
- 同一題連續點錯多個選項：所有錯選項都保持紅色 disabled
- 快速點擊「下一題」不應產生競態（每次呼叫 `buildQuestion` 是純函式，無副作用）
