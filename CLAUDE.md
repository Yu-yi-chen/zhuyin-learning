# BopoBear — Zhuyin Learning App

注音符號學習應用，目標用戶為非母語學習者（支援 EN / JP 介面）。
提供筆順練習與聽力測驗，涵蓋全部 37 個注音符號。

## Tech Stack

| 層級 | 技術 |
|------|------|
| Framework | React 19 + Vite 8（純 SPA，無 SSR） |
| Router | React Router v7（BrowserRouter） |
| Auth | Supabase（Google OAuth） |
| Stroke | hanzi-writer（youyin CDN + 本地 override） |
| Audio BGM/SFX | Tone.js（`src/utils/sound.js`） |
| 注音發音 | Web Audio API（Tone.js AudioContext，clips from `/audio/bopomofo.mp3`） |
| Animation | @lottiefiles/dotlottie-react |
| Analytics | @vercel/analytics |
| Deploy | Vercel（靜態 SPA） |

## Folder Structure

```
src/
  pages/        # Route 元件：HomePage, MapPage, PracticePage, ListenPage
  components/   # 共用 UI 元件
  contexts/     # React Context：Auth, Lang, Game, Transition
  data/         # 靜態資料：zhuyin.js（37 個符號）、i18n.js（EN/JP 翻譯）、characters.js（ZHUYIN_CHART + TONE_NAMES）
  utils/        # 工具：sound.js、speech.js、charData.js、progressSync.js
  lib/          # 第三方設定：supabase.js
public/
  images/            # 所有圖片（PNG）
  lottie/            # Lottie 動畫（Confetti.lottie）
  audio/             # bopomofo.mp3（BGM）
  video/             # bear 動畫 webm
  zhuyin-overrides/  # 自訂筆順 JSON（優先於 CDN）
supabase/
  migrations/        # DB migration SQL（需手動在 Supabase Dashboard 執行）
specs/
  constitution/      # 穩定基礎文件（mission、tech-stack、roadmap）
  features/          # 各功能規格（plan → requirements → validation）
```

## Routing

| Route | Page |
|-------|------|
| `/` | HomePage |
| `/map` | MapPage（37 符號 Grid） |
| `/practice/:symbol` | PracticePage（URL-encoded 注音字元） |
| `/listen` | ListenPage（聽力測驗） |
| `*` | → `/` |

## Key Conventions

- **語言**：純 JSX，無 TypeScript
- **樣式**：`App.css` + `index.css`，BEM 前綴命名，無 CSS Modules
- **全域狀態**：React Context（Auth / Lang / Game / Transition），禁止跨層 prop drilling
- **資料來源**：`src/data/zhuyin.js` 是所有符號資料的唯一來源
- **筆順資料**：`/zhuyin-overrides/{symbol}.json` 優先，失敗才回退 youyin CDN
- **Cache key**：`charData.js` 的 `OVERRIDE_VERSION` 常數手動 bump
- **進度儲存**：未登入 → localStorage only；登入後 → Supabase `user_progress`（1.5s debounce）

## localStorage Keys

| Key | 型態 | 說明 |
|-----|------|------|
| `bopobear_completed` | `string[]` JSON | 已完成練習的符號 |
| `bopobear_difficulty` | `'easy'` \| `'challenge'` | 聽力測驗難度 |
| `bopobear_listen_stroke` | `'true'` \| `'false'` | 筆順預覽開關 |

## Contexts API

| Context | 提供 |
|---------|------|
| AuthContext | `user`, `loading`, `signInWithGoogle`, `signOut` |
| LangContext | `lang`, `setLang`, `t`（翻譯物件） |
| GameContext | `points`, `level`, `levelProgress`, `PTS_PER_LEVEL`, `addPoints`, `dismissPopup`, `popup`, `completedSymbols`, `completeSymbol` |
| TransitionContext | `transitionTo(path, event)` |

## Specs Structure

```
specs/
  constitution/
    mission.md       ← 產品目標、用戶、設計原則
    tech-stack.md    ← 技術選型、架構約束、關鍵決策
    roadmap.md       ← 已完成功能 + 未來迭代清單
  features/
    symbol-map/      ← 符號地圖頁
    stroke-practice/ ← 筆順練習頁
    listen-quiz/     ← 聽力測驗頁
    game-system/     ← 積分 + 升等 + 完成記錄
      plan.md        ← 為什麼做、解法、涉及檔案
      requirements.md ← 功能需求、驗收條件
      validation.md  ← 驗收清單、已知限制
```

### 新功能迭代流程

1. 在 `specs/features/{feature-name}/` 建立 `plan.md`
2. 寫 `requirements.md`（需求確認後開始實作）
3. 實作完成後補 `validation.md` 並逐項驗收
4. 更新 `specs/constitution/roadmap.md`
