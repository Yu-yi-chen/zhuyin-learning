# 雙拼音（結合韻 + 聲韻拼）— Requirements

> 2026-07-09 合併決策：本頁擴充為「雙拼音」，涵蓋兩種二符號組合，頁內 tab 切換：
> - **聲母+韻母**（ㄅㄚ、ㄇㄟ…）— 新增，見 R12–R14
> - **介音+韻母（結合韻）**（ㄧㄚ、ㄨㄛ…）— 原功能不變，R1–R6
>
> 首頁卡片改名「雙拼音」（維持 4 卡佈局），路由沿用 `/compound`。

## 資料

### R1：compounds.js 資料格式
```js
{
  medial: 'ㄧ',
  items: [
    { compound: 'ㄧㄚ', symbols: ['ㄧ', 'ㄚ'], romanization: 'ya' },
    ...
  ]
}
```
- 三個介音群組：ㄧ 系（9個）、ㄨ 系（8個）、ㄩ 系（4個），共 21 個結合韻

### R2：音訊（例詞發音）
- 結合韻 21 個代表詞音檔：`public/audio/compounds/{結合韻}.m4a` ✅ 完成
- 聲韻拼 130 個代表詞音檔：`public/audio/duplex/{聲母+韻母}.m4a` 🔄 3/130（TTS 每日額度，分日續跑）
- 兩個 tab 點格子開啟 WordPopover 時**自動播放**該例詞發音（點格子的本意就是「聽」）
- 卡片內提供**播放鍵**可重播（同 WordPanel 播放鍵樣式，36px 圓形 + SVG 喇叭）
- 音檔不存在 → 不自動播放、播放鍵隱藏（聲韻拼音檔逐批就緒時自動生效，程式不用改）
- 生成規格見 `features/word-audio/`；歷史：原 `playZhuyinSequence` 拼接方案聆聽效果不佳，棄用

## UI

### R3：頁面佈局
- 路由：`/compound`
- Navbar 返回首頁（`/`）
- 三個區塊，各以介音符號為標題（ㄧ 系 / ㄨ 系 / ㄩ 系）

### R4：格子樣式
- 與符號地圖的 `.symbol-circle` 一致：白底、`box-shadow: 0px 4px 0 0 #edebdf`、hover 上浮 + 棕色陰影
- 每格顯示：上方符號 + 下方符號 + romanization
- 點擊後進入 active 狀態（黃底 + 下壓效果）

### R4-B：置中大卡（WordPopover）
- 點擊格子後，**畫面中央**彈出大卡（modal 模式），背景加半透明遮罩
- 卡片寬 400px（手機為 `min(400px, calc(100vw - 48px))`），置中定位不需錨點量測
- 卡片內容：插圖區（240×240，Phase 1 佔位框）、中文詞（大字）、直式注音標記、EN/JP 譯文
- 卡片**右上角有關閉按鈕（✕）**
- 點擊 ✕、點擊遮罩、或按 Escape 關閉；卡片開啟期間格子保持 active 樣式

> 歷史：原設計為錨定於按鈕旁的小浮動卡（176px），因插圖與注音太小改為置中大卡。

### R5：語言
- romanization 固定顯示英文拼音，不隨語言切換
- 頁面標題與副標題跟隨 `t.compoundTitle / t.compoundSubtitle`

## 首頁入口

### R6：首頁第二張卡片（雙拼音）
- 位置：四張 2×2 grid 中的右上角（第二格）
- 卡片文案改為「雙拼音」（`t.compoundCard`，EN: Sound Pairs / JP: 音のペア）
- 點擊導航至 `/compound`
- 卡片圖片：暫沿用 `/結合韻.png`（後續可重製）
- 四張卡片等高等寬：`grid-template-rows: 1fr 1fr`，grid 高度 `clamp(320px, calc(100svh - 200px), 500px)`

## 雙拼音擴充（聲母+韻母 tab）

### R12：頁內 tab
- 頁面標題改為「雙拼音」（`t.compoundTitle`）
- 標題下方兩個 tab（沿用 `.syllables-tab` 樣式）：**聲母+韻母** / **結合韻**
- 預設 tab：聲母+韻母（學習順序在結合韻之前）
- 切換 tab 時關閉已開啟的 WordPopover

### R13：duplex.js 資料格式
```js
// key = 聲母 + 韻母；value 給 WordPopover 用
export const DUPLEX_WORDS = {
  'ㄅㄚ': { word: '爸爸', zhuyin: ['ㄅㄚˋ', '˙ㄅㄚ'], en: 'Dad', jp: 'パパ', illustration: null },
  ...
};
export const DUPLEX_INITIALS = ['ㄅ', 'ㄆ', ...];  // 列順序
export const DUPLEX_FINALS   = ['ㄚ', 'ㄛ', ...];  // 欄順序
```
- **收錄原則**：只收錄有適齡例詞的組合（生僻音節如 ㄆㄡ、ㄋㄥ 不收）；
  有效格 = `DUPLEX_WORDS` 中存在該 key，表格由資料推導，無獨立組合表
- 例詞注音**優先**以該格的聲母+韻母開頭；找不到適齡詞時，可用該音節出現在明顯位置的詞（如 ㄗㄞ → 盆栽）

### R14：聲母+韻母表格
- 表格呈現同三拼音頁（`.syllables-table` 樣式共用）：列=聲母、欄=韻母、sticky 標題
- 有效格：直式雙符號按鈕，點擊 → WordPopover（同 R4-B 置中大卡）
- 無效格：顯示 —，不可點
- 插圖 Phase：`illustration` 先為 null（佔位框），之後與其他插圖同 pipeline 生成

### R15：探索進度追蹤
- 兩個 tab 的格子點開看例詞時，呼叫 `exploreCompound(key)` 標記已探索（見 `game-system` R8）
- 已探索格子換米棕底色（`.syl-cell--explored` / `.compound-cell--explored`），優先度低於 `--active`
- Tab 列右側顯示「已探索 X/N」（聲韻拼 /130、結合韻 /21，隨 tab 切換）
- 純進度追蹤**不加分**；記錄持久化於 localStorage，重整保留
