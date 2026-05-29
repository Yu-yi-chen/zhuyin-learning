# Symbol Map — Requirements

## 功能需求

### R1：符號總覽 Grid
- 顯示全部 37 個注音符號，每個為圓形可點擊按鈕
- 每個按鈕同時顯示：注音字元（大）+ 羅馬拼音（小）
- Grid 有進場 stagger 動畫（`animationDelay: index * 0.022s`）
- 切換 Tab 時 key 改變，觸發重新 stagger

### R2：分類 Tab 過濾
- 提供 4 個 Tab：全部(37) / 聲母(21) / 介音(3) / 韻母(13)
- Active Tab 有視覺強調（`cat-pill--active`）
- 切換後只顯示該分類的符號

### R3：完成狀態顯示
- 已完成練習的符號：圓圈樣式變為 `symbol-circle--done`（綠色勾勾）
- 完成資料來源：`GameContext.completedSymbols`（Set）
- 完成狀態在切換分類或重進頁面後持久

### R4：導航到練習頁
- 點擊任一符號圓圈 → 跳轉到 `/practice/{encodeURIComponent(symbol)}`
- 跳轉時不需確認對話框

### R5：頁面初始化
- 進入頁面時啟動 BGM（`startBGM()`）
- 進入頁面時預熱語音（`preloadZhuyin()`）

### R6：頁面布局
- 左側 Sidebar（顯示積分/升等進度）
- 右側 main 區域顯示 tabs + grid
- 頂部 Navbar 含返回首頁按鈕

## 資料需求

- 符號陣列：`ZHUYIN_SYMBOLS`（37 項，含 symbol / romanization / category）
- 完成狀態：`completedSymbols: Set<string>`（從 GameContext）

## 邊界條件

- 如果 localStorage 損毀，`completedSymbols` 初始化為空 Set（不應崩潰）
- 所有 37 個符號在任何螢幕寬度下都應可見並可點擊

## 非功能需求

- Grid 項目點擊到頁面跳轉應在 100ms 內（無加載感）
- 切換 Tab 應立刻更新，無 loading 狀態
