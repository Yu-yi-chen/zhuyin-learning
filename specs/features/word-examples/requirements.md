# Word Examples — Requirements

## 資料結構

### R1：words.js 資料格式
每筆資料包含：
```js
{
  symbol: 'ㄅ',
  word: '蘋果',           // 中文詞
  zhuyin: ['ㄆㄧㄥˊ', 'ㄍㄨㄛˇ'],  // 每個字的注音（陣列長度 = 字數）
  en: 'Apple',
  jp: 'リンゴ',
  illustration: '/images/words/apple.png',  // Phase 2 填入；Phase 1 為 null
}
```

### R2：資料覆蓋所有 37 個符號
- 每個符號恰好一筆
- 優先選擇：單字形象具體、常見、低難度（適合學習者）
- 若找不到單字首音完全吻合的詞，可選該符號出現在顯眼位置的詞

## UI

### R3：WordPanel 元件
- 接收 `symbol` prop，從 words.js 找到對應資料後渲染
- 若找不到資料，元件不渲染（`return null`）

### R4：插圖區
- Phase 1：顯示灰色佔位框（虛線邊框、固定比例）
- Phase 2：有 `illustration` 路徑時改為 `<img>`

### R5：注音標記
- 中文每個字上方以 `<ruby>` 標籤顯示對應注音
- 樣式：注音字體小、灰色，置於字上方

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
