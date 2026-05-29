# User Progress Sync — Validation

## 前置作業

在 Supabase Dashboard 執行以下 SQL（一次性）：
→ 檔案位置：`supabase/migrations/001_user_progress.sql`

```
Supabase Dashboard → SQL Editor → 貼上 migration SQL → Run
```

## 驗收清單

### 未登入行為不變

- [ ] 未登入狀態下，完成練習後重整頁面，完成標記仍在（localStorage）
- [ ] 未登入答對聽力題，積分 +10（但重整後歸零）
- [ ] 未登入時，Supabase 不會發出任何 network request（DevTools 確認）

### 登入後載入進度

- [ ] 點擊「Sign in」→ Google OAuth → 登入成功後，Supabase `user_progress` 自動載入
- [ ] 若為首次登入（Supabase 無記錄）→ 進度空白，不崩潰，不出錯
- [ ] 若在另一裝置已有進度 → 登入後正確顯示雲端積分與完成符號

### 合併策略

- [ ] 未登入時已完成 ㄅ（localStorage）→ 登入後 ㄅ 仍顯示完成（合集保留）
- [ ] 未登入時積分 30，Supabase 已存積分 100 → 登入後顯示 100（取 max）
- [ ] 未登入時積分 150，Supabase 已存積分 50 → 登入後顯示 150（取 max）

### 登入後自動同步

- [ ] 登入後答對聽力題 → 1.5s 後 DevTools Network 看到 Supabase PATCH/POST 請求
- [ ] 登入後完成筆順練習 → Supabase `user_progress` 的 `completed_symbols` 更新
- [ ] Supabase Dashboard → Table Editor → `user_progress` → 看到該用戶的最新資料

### 跨裝置驗證

- [ ] 裝置 A 登入，完成 ㄅ ㄆ ㄇ，積分 30
- [ ] 裝置 B 開新瀏覽器，登入同一帳號 → 看到 ㄅ ㄆ ㄇ 已完成，積分 30

### 登出行為

- [ ] 點擊用戶頭像登出 → 積分歸零
- [ ] 登出後，localStorage 的完成記錄仍在（不清除）
- [ ] 登出後，Supabase 不再接收任何寫入請求（DevTools 確認）

### 錯誤降級

- [ ] 斷開網路 → 登入後仍可正常使用，只是 Supabase 同步靜默失敗
- [ ] Console 顯示 error log 但頁面不崩潰、無白屏

## 已知限制

- 積分只取 `Math.max(local, remote)`，不做加總（不同裝置分別得到的分數不合計）
- Supabase 寫入為 1.5s debounce，快速切換頁面可能漏掉最後一次寫入
- 登出後重新登入同帳號，會重新載入雲端進度（不影響 localStorage 的本地記錄）
