# Game System — Plan

## 目標

透過積分、升等與完成標記，給學習者持續的成就感與方向感。

## 問題背景

純粹的學習應用容易無聊。需要：
1. 每個正確答案都有即時獎勵感（積分 + 動畫）
2. 長期目標（升等）讓用戶持續回來
3. 完成進度可視化（哪些符號學過了）

## 解決方案

**積分**：答對聽力題 +10 分，顯示跳出動畫。  
**升等**：積分累積達門檻自動升級（L1–L6），Sidebar 顯示進度條。  
**完成標記**：練習完筆順後符號標為「完成」，存 localStorage 持久化。  

## 架構決策

### GameContext 作為唯一狀態管理
積分和完成記錄都在 `GameContext`，任何元件都可透過 `useGame()` 存取，不需 prop drilling。

### 積分只存記憶體
積分重整後歸零是有意為之的設計（目前），避免首次進入就「已滿級」的問題。未來接 Supabase 持久化時需要版本遷移。

### 完成記錄存 localStorage
`bopobear_completed` 存已完成符號的陣列，`Set` 結構在記憶體中使用，轉 JSON 陣列存儲。

## 涉及的檔案

- `src/contexts/GameContext.jsx`（核心）
- `src/components/Sidebar.jsx`（顯示積分 + 進度）
- `src/components/ResultOverlay.jsx`（練習完成畫面）
- `src/pages/ListenPage.jsx`（呼叫 addPoints）
- `src/pages/PracticePage.jsx` + `PracticeCanvas.jsx`（呼叫 completeSymbol）
