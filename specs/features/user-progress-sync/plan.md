# User Progress Sync — Plan

## 目標

讓登入的用戶能夠跨裝置、跨 session 保留學習進度（已完成符號 + 積分）。

## 問題背景

目前限制：
- `completedSymbols` 只存 localStorage → 換裝置或清瀏覽器後消失
- `points` 只存 session memory → 每次重整歸零

有 Google 登入功能但沒有連接到任何持久化後端，登入目前只是「UI 裝飾」。

## 解決方案

用 Supabase 的 `user_progress` 資料表存每位用戶的學習進度。
登入時從雲端載入 → 與本地合併 → 之後的變更自動同步。

## 行為設計

| 狀態 | completedSymbols 來源 | points 來源 |
|------|----------------------|-------------|
| 未登入 | localStorage only | session memory（重整歸零） |
| 登入 | Supabase + localStorage 合集 | Supabase（持久化） |
| 登出 | 回到 localStorage only | 重置為 0 |

## 合併策略（登入時）

1. 取出 Supabase 的 `{ completed_symbols, points }`
2. 合併 completed：`union(supabase, localStorage)`（兩邊都保留）
3. 合併 points：`Math.max(supabase.points, session.points)`
4. 將合併結果寫回 Supabase + 更新 localStorage

## 同步策略（登入後的每次變更）

- `completedSymbols` 變更 → debounce 1.5s → upsert Supabase
- `points` 變更 → debounce 1.5s → upsert Supabase
- 兩者合用同一個 debounce timer（一起寫）

## 資料庫設計

```sql
user_progress (
  user_id UUID PK → auth.users
  completed_symbols JSONB  -- string[] of Unicode 注音字元
  points INTEGER
  updated_at TIMESTAMPTZ
)
```

Row Level Security：每位用戶只能讀寫自己的資料。

## 涉及的檔案

| 動作 | 檔案 |
|------|------|
| 新建 | `src/utils/progressSync.js` |
| 修改 | `src/contexts/GameContext.jsx` |
| 新建（migration） | `supabase/migrations/001_user_progress.sql` |
