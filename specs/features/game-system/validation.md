# Game System — Validation

## 驗收清單

### 積分與彈出提示

- [ ] 聽力題首次答對 → Sidebar 積分數字增加 10
- [ ] 積分增加時顯示「+10」跳出動畫
- [ ] 動畫結束後消失（不殘留）
- [ ] 有錯再答對 → 積分不增加

### 升等

- [ ] 初始積分 0 → L1
- [ ] 累積 50 分 → L2，Sidebar 顯示 L2
- [ ] 累積 130 分 → L3
- [ ] 累積 780 分 → L6（最高等），繼續加分不崩潰
- [ ] Sidebar 進度條正確反映 `levelProgress / PTS_PER_LEVEL`

### 完成記錄

- [ ] 完成 ㄅ 的筆順練習 → 返回地圖，ㄅ 圓圈顯示完成樣式
- [ ] 重新整理頁面 → ㄅ 仍顯示完成
- [ ] 清除 localStorage 後重整 → 完成記錄消失（正常行為）
- [ ] 完成所有 37 個符號後，地圖頁所有圓圈都顯示完成樣式

### 邊界情況

- [ ] 開啟 DevTools → `window.__addPoints(200)` 可快速加分測試升等（DEV only）
- [ ] localStorage 手動設為非法 JSON → 頁面不崩潰，完成記錄從空開始

## 測試工具

在 DEV 環境中，可用以下方式快速驗證：

```js
// 在瀏覽器 console 執行
window.__addPoints(50)   // +50 分，觀察升等
window.__addPoints(200)  // +200 分，跳級測試
```

## 已知限制

- 積分只存 session memory，重整歸零（設計決策，見 plan.md）
- 完成標記存 localStorage，清除瀏覽器資料後丟失（設計限制）
- 未來接 Supabase 持久化積分時，需決定如何處理「已有的 localStorage 完成記錄」遷移
