# Tech Stack

## 核心技術選型

| 層級 | 技術 | 版本 | 選型理由 |
|------|------|------|---------|
| UI Framework | React | 19 | 生態成熟，hooks 模型適合互動邏輯 |
| Build Tool | Vite | 8 | 開發速度快，SPA 靜態部署友好 |
| Router | React Router | v7 | 聲明式路由，BrowserRouter 支援 Vercel SPA |
| Auth | Supabase | 2.x | Google OAuth 零設定，未來可擴展 DB |
| Stroke Data | hanzi-writer | 3.x | 唯一支援注音筆順動畫的函式庫 |
| Audio BGM/SFX | Tone.js | 15 | Web Audio 抽象，播放控制方便 |
| 注音發音 | Web Audio API（Tone.js AudioContext） | 原生 | 複用 Tone.js 的 AudioContext，避免雙 AudioContext 衝突；音訊來自 `/audio/bopomofo.mp3` |
| 動畫 | dotlottie-react | 0.19 | Lottie 格式 confetti，小巧 |
| Deploy | Vercel | — | 靜態 SPA，零設定部署 |
| Analytics | @vercel/analytics | 2 | 匿名 pageview，GDPR 友好 |

## 架構約束

- **純 SPA**：無 Server Route、無 API Route、無 SSR
- **無 TypeScript**：全程 JSX，保持入門門檻低
- **無 CSS Modules**：App.css + index.css 單一樣式檔（按組件加 BEM 前綴）
- **Context 優先**：全域狀態走 React Context，不做 prop drilling

## 資料夾結構

```
src/
  pages/        # Route 元件（每個 Route 一個檔案）
  components/   # 共用 UI 元件（無路由職責）
  contexts/     # React Context（Auth, Lang, Game, Transition）
  data/         # 靜態純資料（zhuyin.js, i18n.js）
  utils/        # 純函式工具（sound.js, speech.js, charData.js）
  lib/          # 第三方客戶端初始化（supabase.js）
public/
  zhuyin-overrides/  # 自訂筆順 JSON（優先於 CDN）
  audio/             # BGM mp3
  video/             # Bear webm 動畫
specs/
  constitution/      # 穩定基礎文件（本目錄）
  features/          # 各功能規格（plan → requirements → validation）
```

## 關鍵決策記錄

### 筆順資料策略
- **主 CDN**：`cdn.jsdelivr.net/gh/MadLadSquad/hanzi-writer-data-youyin`
- **本地 Override**：`/public/zhuyin-overrides/{symbol}.json`（優先）
- **Cache busting**：`charData.js` 中的 `OVERRIDE_VERSION` 常數，手動 bump 讓瀏覽器重抓
- **Session cache**：`dataCache` Map 讓同 session 內符號切換零延遲

### BGM 音量狀態
- 全域靜音狀態存在記憶體（`isBGMMuted()`），`VolumeButton` 切換
- 進入 Listen 頁自動靜音 BGM，離開時還原（由 useEffect cleanup 負責）

### localStorage Keys
```
bopobear_completed     → JSON string[]  已完成符號陣列
bopobear_difficulty    → 'easy' | 'challenge'
bopobear_listen_stroke → 'true' | 'false'
```

### 路由設計
```
/                    → HomePage
/map                 → MapPage（符號地圖）
/practice/:symbol    → PracticePage（URL encode 注音字元）
/listen              → ListenPage（聽力測驗）
*                    → Navigate to /（404 導回首頁）
```

### Supabase Auth & Progress
- 僅 Google OAuth，`redirectTo: window.location.origin`
- 用戶資料存 Supabase session（`user_metadata.avatar_url / name`）
- 登入後：積分 + 完成記錄存 Supabase `user_progress` 資料表（1.5s debounce）
- 未登入：積分只存 session memory（重整歸零），完成記錄只存 localStorage
- 登入時合併策略：completed = union(local, remote)、points = max(local, remote)

## 開發指令

```bash
npm run dev      # 開發 server（Vite HMR）
npm run build    # 生產 build → dist/
npm run preview  # 本地預覽 build 結果
npm run lint     # ESLint 檢查
```
