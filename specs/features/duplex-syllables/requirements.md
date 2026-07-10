# 雙拼音 — Requirements

## 資料

### R1：duplex.js 資料格式

```js
// 有效雙拼音組合表：{ [聲母]: [可接的單韻母陣列] }
export const DUPLEX_TABLE = {
  'ㄅ': ['ㄚ', 'ㄛ', 'ㄟ', 'ㄠ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄆ': ['ㄚ', 'ㄛ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄇ': ['ㄚ', 'ㄛ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄈ': ['ㄚ', 'ㄛ', 'ㄟ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄉ': ['ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄤ', 'ㄥ'],
  'ㄊ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄤ', 'ㄥ'],
  'ㄋ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄌ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄤ', 'ㄥ'],
  'ㄍ': ['ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄎ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄏ': ['ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄓ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄔ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄕ': ['ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄖ': ['ㄜ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄗ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄘ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
  'ㄙ': ['ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'],
};

// 欄標題順序（固定）
export const DUPLEX_FINALS = ['ㄚ', 'ㄛ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'];

// 列標題順序（固定）
export const DUPLEX_INITIALS = [
  'ㄅ', 'ㄆ', 'ㄇ', 'ㄈ',
  'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ',
  'ㄍ', 'ㄎ', 'ㄏ',
  'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ',
  'ㄗ', 'ㄘ', 'ㄙ',
];

// 代表詞資料：key = 聲母 + 韻母（如 'ㄅㄚ'）
export const DUPLEX_WORDS = {
  'ㄅㄚ':  { word: '爸爸', zhuyin: ['ㄅㄚˋ', '˙ㄅㄚ'],  en: 'Dad',      jp: 'お父さん',   illustration: null },
  'ㄅㄛ':  { word: '波浪', zhuyin: ['ㄅㄛ', 'ㄌㄤˋ'],   en: 'Wave',     jp: 'なみ',       illustration: null },
  // ... 其餘項目於實作時填入
};
```

- `DUPLEX_TABLE` 決定哪些格子有效（可點擊）
- `DUPLEX_FINALS` 決定欄位順序
- `DUPLEX_INITIALS` 決定列順序
- `DUPLEX_WORDS` 提供代表詞給 WordPopover；key 不存在的組合 popover 顯示「（待補充）」佔位

### R2：音訊
- ⚠️ **暫時停用**：與結合韻、三拼音一致，音訊待後續版本補入
- 格子僅觸發 WordPopover，不播放音訊

## UI

### R3：頁面佈局
- 路由：`/duplex`
- Navbar 返回首頁（`/`）
- Sidebar 顯示（與其他頁面一致）
- 標題：`t.duplexTitle ?? '雙拼音'`
- 副標題：`t.duplexSubtitle ?? '點擊格子查看聲母＋韻母的組合'`

### R4：格子樣式
- 格子外觀與 SyllablesPage 的 `.syl-cell` 一致：
  - 顯示 2 個符號（聲母 + 韻母），上下排列
  - hover：上浮 + 棕色陰影
  - active（popover 開啟中）：黃底
- 欄標題（韻母）：`duplex-table__col-header`
- 列標題（聲母）：`duplex-table__row-header`
- 空格：`<span className="dup-cell--empty">—</span>`

### R4-B：置中大卡（WordPopover）
- 與結合韻、三拼音完全共用同一個 `WordPopover` 元件（置中 modal + 遮罩模式），介面不變
- 傳入 `entry = DUPLEX_WORDS[initial + final] ?? null`
- `entry` 為 null 時，WordPopover 顯示「（待補充）」佔位文字

### R5：語言
- romanization 可選擇性顯示於格子下方（如 ba、po）
  - 格式與 PracticePage symbol-option 一致（`dup-cell__roman`，0.6rem）
- 頁面標題、副標題跟隨 `t`，romanization 固定顯示英文拼音

### R6：表格捲動與頁面邊距
- `.duplex-page` 容器：`flex: 1`、`overflow-y: auto`，跟 SyllablesPage 一致
- `.duplex-table-wrap`：`overflow-x: auto`，讓表格寬度超出時橫向捲動
- `.duplex-table`：`min-width: 100%`，不設 `max-width`（全寬使用 content area）
- 左右邊距由 `.page-body`（`padding: 0 24px 24px`）提供，不需在 duplex-page 額外設定
- 桌機：sidebar（320px）+ page-body padding（48px）後的 content area 約 1000px+，11 欄表格（約 700px）不需橫向捲動
- 手機（≤ 900px）：`.page-body` 縮為 `padding: 0 12px 12px`；表格觸發 `overflow-x: auto`
- 欄標題（韻母）：`position: sticky; top: 0`（同 SyllablesPage）
- 列標題（聲母）：`position: sticky; left: 0`（保持可見，與 `.syllables-table__corner` 一致）

## 首頁入口

### R7：5 張卡片佈局
- 原有 4 張卡片為 2×2 grid
- 加入雙拼音後改為：前 4 張維持 2×2，第 5 張（聽力測驗）橫跨全寬
- 卡片順序（依學習路徑）：
  1. 注音地圖（`/map`）
  2. 雙拼音（`/duplex`）← 新增，位置為右上角（原為結合韻）
  3. 結合韻（`/compound`）← 移至左下角
  4. 三拼音（`/syllables`）← 移至右下角
  5. 聽力測驗（`/listen`）← 橫跨全寬，高度 `clamp(80px, 100px, 120px)`
- 卡片圖片：`/雙拼音.png`（Phase 2 製作，暫用佔位圖或文字卡）
