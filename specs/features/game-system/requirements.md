# Game System — Requirements

## 積分系統

### R1：加分
- `addPoints(amount)` 增加積分，同時設定 `popup: { amount }`
- **聽力測驗**：首次答對（無錯誤）→ `addPoints(10)`
- **筆順練習**：完成全部筆畫 → 零錯誤 `addPoints(20)`，有錯誤 `addPoints(10)`
- 積分只在 session 內持久，重整歸零（登入後由 Supabase 載入）

### R2：積分彈出提示
- `popup` 非 null 時，顯示「+N 分」跳出動畫（由 `Sidebar` 或覆蓋層負責）
- 動畫結束後呼叫 `dismissPopup()` 清除

## 升等系統

### R3：等級計算
- 等級為 1–6（L1 to L6）
- 升級門檻（累積積分）：L1=0, L2=50, L3=130, L4=280, L5=480, L6=780
- `level` 由 `points` 即時計算，無需另存狀態

### R4：等級進度
- `levelProgress`：在當前等級已累積的分數
- `PTS_PER_LEVEL`：升至下一級所需總分
- Sidebar 以進度條顯示 `levelProgress / PTS_PER_LEVEL`

## 完成記錄

### R5：標記完成
- `completeSymbol(symbol)` 將符號加入 `completedSymbols` Set
- 同時更新 `localStorage.bopobear_completed`
- 冪等操作（重複呼叫不重複記錄）

### R6：初始化
- `completedSymbols` 從 `localStorage.bopobear_completed` 初始化
- localStorage 損毀或不存在時，初始化為空 `Set`（不崩潰）

### R7：完成狀態讀取
- 任何元件可透過 `useGame().completedSymbols` 讀取
- `completedSymbols.has(symbol)` 判斷是否完成

## GameContext API

```js
const {
  points,           // number
  level,            // 1–6
  levelProgress,    // number（當前等級已累積）
  PTS_PER_LEVEL,    // number（升級所需）
  popup,            // null | { amount: number }
  addPoints,        // (amount?: number) => void
  dismissPopup,     // () => void
  completedSymbols, // Set<string>
  completeSymbol,   // (symbol: string) => void
} = useGame();
```

## 邊界條件

- 積分達 780（L6）後繼續加分不崩潰（level 鎖在 6）
- `completedSymbols` 加入已存在的符號不產生副作用
- DEV 環境下 `window.__addPoints` 可快速測試積分/升等動畫
