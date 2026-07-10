# Roadmap

> 開始新功能前：先在 `specs/features/{feature-name}/` 建立 `plan.md` → `requirements.md`，
> 實作後補 `validation.md`，並更新本 roadmap。

---

## ✅ Phase 1 — 核心學習功能（已完成）

| 功能 | Feature Spec |
|------|-------------|
| 首頁入口（Home + Auth + 語言切換 EN/JP） | — |
| 符號地圖（37 符號總覽、分類 tab、完成標記） | `features/symbol-map/` |
| 筆順練習（示範動畫 + 描字 + 完成記錄） | `features/stroke-practice/` |
| 聽力測驗：37 符號（Easy / Challenge） | `features/listen-quiz/` |
| 積分 + 升等系統（L1–L6、confetti） | `features/game-system/` |
| 雲端進度同步（Google 登入 + Supabase） | `features/user-progress-sync/` |
| BGM + 音效 | — |
| About / Credits Modal + Feedback 按鈕 | — |

---

## 🔄 Phase 2 — 組合音節學習（進行中）

**Merge 條件：音訊 ✅ + 插圖 ✅ 全部就緒才 merge 至 main**

### Branch: `feature/word-examples`

| 功能 | 狀態 | Feature Spec |
|------|------|-------------|
| 筆順練習例詞面板（WordPanel） | 🔄 待插圖（37 張） | `features/word-examples/` |

### Branch: `feature/compound-syllables`

| 功能 | 狀態 | Feature Spec |
|------|------|-------------|
| 雙拼音頁（/compound，聲母+韻母 tab + 結合韻 tab 合併） | 🔄 程式完成，聲韻拼待插圖（~130 張） | `features/compound-sounds/`（R12–R14） |
| 三拼音練習（/syllables） | 🔄 待音訊、待插圖（~120 張） | `features/syllables/` |
| 聽力測驗擴充：結合韻主題 + 模組捷徑 | 🔄 程式完成，待 21 個詞音檔（TTS 每日額度限制） | `features/listen-quiz/`（R9–R11） |
| 聽力測驗擴充：三拼音主題 | ⏸ 詞彙定稿後再規劃 | — |
| 首頁 5 卡片佈局（加入雙拼音） | 📋 待實作 | — |
| 首頁 4 卡片 2×2 grid | ✅ 完成 | — |
| 浮動卡片（WordPopover，動態定位） | ✅ 完成 | — |

### Phase 2 待辦清單

- [x] 實作雙拼音（與結合韻合併於 `/compound`，tab 切換；`duplex.js` 130 個聲韻組合例詞）
- [x] ~~首頁 5 卡片佈局~~（合併方案不需要，維持 4 卡，卡片改名「雙拼音／Sound Pairs」）
- [ ] 找到結合韻 / 三拼音 / 雙拼音錄音來源
- [x] 製作 37 個注音例詞插圖（Gemini AI 生成，`scripts/generate-illustrations.mjs` + 去背 `scripts/remove-background.py`）
- [x] 製作 21 個結合韻插圖（Gemini AI 生成，同例詞插圖 pipeline）
- [ ] 製作 ~130 個雙拼音詞插圖
- [ ] 製作 ~120 個三拼音詞插圖
- [ ] 實作聽力測驗擴充（結合韻 + 三拼音 + 雙拼音主題）
- [ ] `feature/word-examples` merge 至 main
- [ ] `feature/compound-syllables` merge 至 main

---

## 📋 Backlog — 待規劃

### 學習路徑延伸

| 功能 | 說明 | 依賴 |
|------|------|------|
| 聲調辨認（Stage 4） | 同音節四聲辨別，聽音選調號 | 四聲錄音來源 |
| 拼讀練習（Stage 5） | 看漢字拼出注音 / 聽詞選漢字 | 聲調完成後 |

### 產品完善

| 功能 | 說明 |
|------|------|
| 行動裝置優化 | 觸控筆順、RWD 細節 |
| 贊助 / 金流 | 串接第三方支付 |
| 用戶學習統計 | 答題歷史、弱點符號 dashboard |
| 學習路徑推薦 | 根據弱點自動推薦下一個練習 |

---

## Replanning 觸發點

當出現以下情況時，需要更新 roadmap + 重新規劃優先級：

- 用戶反饋指出核心流程有問題
- 新增外部依賴（如後端 DB、音訊服務）影響架構
- 有功能需要跨多個現有 spec 修改
