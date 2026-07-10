# 結合韻 — Plan

## 為什麼做

37 個單符號學完後，學習者需要練習「介音 + 韻母」的組合發音。
結合韻是注音系統的第二層，也是進入三拼音前的必備基礎。

## 解法

新頁面 `/compound`，以格子表呈現 21 個結合韻，分三組：
- ㄧ 系（9個）：ㄧㄚ ㄧㄛ ㄧㄝ ㄧㄠ ㄧㄡ ㄧㄢ ㄧㄣ ㄧㄤ ㄧㄥ
- ㄨ 系（8個）：ㄨㄚ ㄨㄛ ㄨㄞ ㄨㄟ ㄨㄢ ㄨㄣ ㄨㄤ ㄨㄥ
- ㄩ 系（4個）：ㄩㄝ ㄩㄢ ㄩㄣ ㄩㄥ

點擊格子 → 彈出浮動卡片（WordPopover）顯示代表詞。音訊功能暫停用（待後續版本補入）。

## 涉及檔案

| 檔案 | 變動 |
|------|------|
| `src/data/compounds.js` | 新建 — 21 個結合韻資料（含代表詞） |
| `src/pages/CompoundPage.jsx` | 新建 — 主頁面 |
| `src/components/WordPopover.jsx` | 新建 — 浮動卡片（結合韻與三拼音共用） |
| `src/utils/speech.js` | 新增 `playZhuyinSequence`（暫未呼叫，音訊待補） |
| `src/App.jsx` | 新增 `/compound` 路由 |
| `src/pages/HomePage.jsx` | 新增第二張卡片（含 `/結合韻.png`） |
| `src/App.css` | 新增樣式 |
