// 發音評分 — Phase A 原型（Gemini）
//
// ⚠️ 原型階段：Gemini 非訓練過的發音評分器，能抓「唸錯字」但細微音準/聲調不可靠。
//    上線品質請見 specs/features/pronunciation-scoring/plan.md（Phase B 換 Azure）。
//
// ⚠️ 金鑰：目前用 VITE_ 前綴的環境變數，會被打包進前端 → 僅限本機測試，勿部署。
//    Phase B 須改為 Vercel Serverless Function 代理。

// flash-lite：不做 thinking，評分約 2–3 秒（3.5-flash 會思考 400+ tokens，要 11 秒）
// 實測辨識力未降：唸錯字照樣給 0 分
const MODEL = 'gemini-flash-lite-latest';

/** Blob → base64（去掉 data URL 前綴） */
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * 評分一段錄音
 * @param {Blob} audioBlob 使用者錄音
 * @param {{word: string, zhuyin: string[]}} target 目標詞
 * @returns {Promise<{score: number, feedback: string}>}
 */
export async function scorePronunciation(audioBlob, target) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error('缺少 VITE_GEMINI_API_KEY（.env 需設定，僅供本機測試）');

  const audio = await blobToBase64(audioBlob);
  const zhuyin = (target.zhuyin ?? []).join(' ');
  const prompt =
    `你是注音發音評分老師，對象是學中文的初學者（可能是小朋友）。\n` +
    `學習者要唸的目標詞是「${target.word}」（注音：${zhuyin}）。\n` +
    `聽附上的錄音，評估發音準確度（字音是否正確、聲調是否到位）。\n` +
    `評分寬鬆友善，鼓勵為主，但唸錯字要如實指出。\n` +
    `只回傳 JSON：{"score": 0-100整數, "feedback": "一句中文回饋，20字內"}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { inline_data: { mime_type: audioBlob.type || 'audio/webm', data: audio } },
            { text: prompt },
          ],
        }],
        generationConfig: { responseMimeType: 'application/json' },
      }),
    },
  );

  if (!res.ok) throw new Error(`評分服務錯誤（HTTP ${res.status}）`);

  const json = await res.json();
  const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('評分服務沒有回應內容');

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('評分結果格式錯誤');
  }

  const score = Math.max(0, Math.min(100, Math.round(Number(parsed.score) || 0)));
  return { score, feedback: String(parsed.feedback ?? '') };
}
