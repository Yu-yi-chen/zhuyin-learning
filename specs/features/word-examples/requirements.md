# Word Examples — Requirements

## 資料結構

### R1：words.js 資料格式
每筆資料包含：
```js
{
  symbol: 'ㄅ',
  word: '杯子',           // 中文詞
  zhuyin: ['ㄅㄟ', '˙ㄗ'],  // 每個字的注音（陣列長度 = 字數）
  en: 'Cup',
  jp: 'コップ',
  illustration: '/illustrations/words/ㄅ.png',  // 檔名 = 符號
}
```

### R2：資料覆蓋所有 37 個符號
- 每個符號恰好一筆
- **例詞的注音必須包含該符號**（如 ㄅ → 杯子 ㄅㄟ；蘋果 ㄆㄧㄥˊ 不合格）
- 優先選擇：單字形象具體、常見、低難度（適合學習者）

## UI

### R3：WordPanel 元件
- 接收 `symbol` prop，從 words.js 找到對應資料後渲染
- 若找不到資料，元件不渲染（`return null`）

### R4：插圖區
- 有 `illustration` 路徑時顯示 `<img>`；為 `null` 時顯示灰色佔位框（虛線邊框、固定比例）
- 插圖規格：3D 黏土風格、透明背景 PNG、1024×1024
- 產製流程：`scripts/generate-illustrations.mjs`（Gemini API 生成白底圖，以 `scripts/style-ref-white.png` 為風格參考）→ `scripts/remove-background.py`（去背為透明）
- 重生成單張：刪除 `public/illustrations/words/{符號}.png` 後重跑上述兩個腳本

### R5：注音標記
- 使用自訂 flex 佈局（非原生 `<ruby>`），每個字對應一個 `.word-panel__char-wrap`
- 注音符號**直式排列**：聲母在上、韻母在下，符號垂直疊放
- 聲調符號規則：
  - **ˊ ˇ ˋ（二三四聲）**：以 `position: absolute` 固定在**最後一個注音符號的右上角**，不佔欄寬
  - **˙（輕聲）**：顯示在整個注音欄的**正上方置中**
  - **一聲**：無標記
- 所有符號對齊欄位中心線（不靠左）

### R6：語言切換
- EN 模式：顯示 `en` 欄位
- JP 模式：顯示 `jp` 欄位
- 中文詞本身與注音標記**不隨語言切換**（恆顯示）

## 版面

### R7：桌機版
- WordPanel 顯示在筆畫練習區的**右側**
- 兩欄等高，垂直置中對齊

### R8：手機版
- WordPanel 顯示在筆畫練習區的**下方**
- 全寬顯示

### R9：不影響現有功能
- 筆順動畫、評分邏輯、完成記錄 完全不變
- WordPanel 是純展示元件，無互動副作用
