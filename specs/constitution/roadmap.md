# Roadmap

## 已完成功能（v1.0）

| 功能 | 狀態 | Feature Spec |
|------|------|-------------|
| 首頁入口（Home + Auth） | ✅ 完成 | — |
| 符號地圖（Map） | ✅ 完成 | `features/symbol-map/` |
| 筆順練習（Practice） | ✅ 完成 | `features/stroke-practice/` |
| 聽力測驗（Listen Quiz） | ✅ 完成 | `features/listen-quiz/` |
| 積分 + 升等系統 | ✅ 完成 | `features/game-system/` |
| 完成徽章（localStorage） | ✅ 完成 | `features/game-system/` |
| 語言切換（EN/JP） | ✅ 完成 | — |
| BGM + 音效 | ✅ 完成 | — |
| Google 登入 | ✅ 完成 | — |
| About / Credits Modal | ✅ 完成 | — |
| Feedback 按鈕（EmailJS） | ✅ 完成 | — |

## 進行中（v1.1）

| 功能 | 狀態 | Feature Spec |
|------|------|-------------|
| 學習進度雲端同步 | 🔄 待執行 DB migration | `features/user-progress-sync/` |

> **待辦**：在 Supabase Dashboard → SQL Editor 執行 `supabase/migrations/001_user_progress.sql`，
> 然後逐項驗收 `features/user-progress-sync/validation.md`。

## 下一步迭代（待規劃）

> 開始新功能前：先在 `specs/features/{feature-name}/` 建立 `plan.md` → `requirements.md`，
> 實作後補 `validation.md`，並更新本 roadmap。

| 功能 | 優先 | 說明 |
|------|------|------|
| 行動裝置優化 | 🔴 高 | 觸控筆順練習、RWD 細節 |
| 用戶學習統計 | 🟡 中 | 答題歷史、最常錯的符號 dashboard |
| 拼音輸入練習 | 🟡 中 | 鍵盤打出對應羅馬拼音 |
| 音節組合練習 | 🟢 低 | 聲母 + 韻母組合讀音練習 |
| 學習路徑推薦 | 🟢 低 | 根據弱點自動推薦下一個練習 |

## Replanning 觸發點

當出現以下情況時，需要更新 roadmap + 重新規劃優先級：

- 用戶反饋指出核心流程有問題
- 新增外部依賴（如後端 DB）影響架構
- 有功能需要跨多個現有 spec 修改
