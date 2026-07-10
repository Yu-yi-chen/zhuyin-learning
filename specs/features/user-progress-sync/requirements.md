# User Progress Sync — Requirements

## 功能需求

### R1：登入時載入雲端進度
- 用戶完成 Google 登入後，自動從 Supabase `user_progress` 讀取進度
- 若 Supabase 無此用戶的記錄（首次登入），視為空進度
- 載入後與本地狀態合併（見 plan.md 合併策略）
- 合併結果同步回 Supabase + localStorage

### R2：登入後自動持久化
- 每次 `completedSymbols` 或 `points` 改變，1.5s debounce 後 upsert Supabase
- Supabase 寫入失敗時 → `console.error` 記錄，不影響 UI 運作（靜默降級）

### R3：登出時重置
- 登出後 `points` 重置為 0（session 概念不變）
- `completedSymbols` 回到 localStorage 的值（不清除 localStorage）

### R4：未登入行為不變
- 未登入時行為與現在完全相同（localStorage + session memory）
- 不應因為 Supabase 邏輯而影響未登入的效能或行為

### R5：資料庫 RLS 安全
- 每位用戶只能 SELECT / INSERT / UPDATE 自己的 `user_progress` 行
- 不能讀取或修改其他用戶的資料

## 資料需求

### Supabase Table: `user_progress`
```sql
user_id          UUID  PRIMARY KEY  REFERENCES auth.users(id)
completed_symbols JSONB             DEFAULT '[]'
points           INTEGER            DEFAULT 0
updated_at       TIMESTAMPTZ        DEFAULT now()
```

### progressSync.js API
```js
loadProgress(userId) → Promise<{ completed_symbols: string[], points: number }>
saveProgress(userId, { completedSymbols: Set<string>, points: number }) → Promise<void>
```

## 邊界條件

- `user_progress` 不存在時（首次登入）→ `loadProgress` 回傳空預設值，不拋出錯誤
- Supabase 連線逾時 → 靜默降級，維持本地狀態
- `completed_symbols` 在 JSONB 中存為 string array（`[...set]` 序列化）
- 同一 user 重複 `completeSymbol` → upsert 冪等，不重複計算

## 非功能需求

- `loadProgress` 讀取應在 1s 內完成（Supabase 同區域延遲）
- 登入後 UI 不應有明顯的「讀取中」閃爍（進度載入不影響頁面渲染）
- Supabase 寫入為背景非同步操作，不阻塞任何用戶互動
