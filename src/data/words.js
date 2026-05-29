// 每個注音符號的代表單字
// zhuyin: 每個字的注音（陣列長度 = 字數）
// illustration: Phase 2 補入圖片路徑；Phase 1 為 null

export const SYMBOL_WORDS = [
  // ── 聲母 ──────────────────────────────────────────────────
  { symbol: 'ㄅ', word: '蘋果', zhuyin: ['ㄆㄧㄥˊ', 'ㄍㄨㄛˇ'], en: 'Apple',      jp: 'りんご',         illustration: null },
  { symbol: 'ㄆ', word: '葡萄', zhuyin: ['ㄆㄨˊ',   'ㄊㄠˊ'],   en: 'Grape',      jp: 'ぶどう',         illustration: null },
  { symbol: 'ㄇ', word: '貓',   zhuyin: ['ㄇㄠ'],               en: 'Cat',        jp: 'ねこ',           illustration: null },
  { symbol: 'ㄈ', word: '飛機', zhuyin: ['ㄈㄟ',   'ㄐㄧ'],     en: 'Airplane',   jp: 'ひこうき',       illustration: null },
  { symbol: 'ㄉ', word: '蛋糕', zhuyin: ['ㄉㄢˋ',  'ㄍㄠ'],     en: 'Cake',       jp: 'ケーキ',         illustration: null },
  { symbol: 'ㄊ', word: '兔子', zhuyin: ['ㄊㄨˋ',  '˙ㄗ'],      en: 'Rabbit',     jp: 'うさぎ',         illustration: null },
  { symbol: 'ㄋ', word: '牛奶', zhuyin: ['ㄋㄧㄡˊ','ㄋㄞˇ'],    en: 'Milk',       jp: 'ぎゅうにゅう',   illustration: null },
  { symbol: 'ㄌ', word: '老虎', zhuyin: ['ㄌㄠˇ',  'ㄏㄨˇ'],    en: 'Tiger',      jp: 'とら',           illustration: null },
  { symbol: 'ㄍ', word: '鋼琴', zhuyin: ['ㄍㄤ',   'ㄑㄧㄣˊ'],  en: 'Piano',      jp: 'ピアノ',         illustration: null },
  { symbol: 'ㄎ', word: '恐龍', zhuyin: ['ㄎㄨㄥˇ','ㄌㄨㄥˊ'],  en: 'Dinosaur',   jp: 'きょうりゅう',   illustration: null },
  { symbol: 'ㄏ', word: '蝴蝶', zhuyin: ['ㄏㄨˊ',  'ㄉㄧㄝˊ'],  en: 'Butterfly',  jp: 'ちょうちょ',     illustration: null },
  { symbol: 'ㄐ', word: '雞',   zhuyin: ['ㄐㄧ'],               en: 'Chicken',    jp: 'にわとり',       illustration: null },
  { symbol: 'ㄑ', word: '企鵝', zhuyin: ['ㄑㄧˇ',  'ㄜˊ'],      en: 'Penguin',    jp: 'ペンギン',       illustration: null },
  { symbol: 'ㄒ', word: '西瓜', zhuyin: ['ㄒㄧ',   'ㄍㄨㄚ'],   en: 'Watermelon', jp: 'すいか',         illustration: null },
  { symbol: 'ㄓ', word: '蜘蛛', zhuyin: ['ㄓ',     'ㄓㄨ'],     en: 'Spider',     jp: 'くも',           illustration: null },
  { symbol: 'ㄔ', word: '車',   zhuyin: ['ㄔㄜ'],               en: 'Car',        jp: 'くるま',         illustration: null },
  { symbol: 'ㄕ', word: '獅子', zhuyin: ['ㄕ',     '˙ㄗ'],      en: 'Lion',       jp: 'ライオン',       illustration: null },
  { symbol: 'ㄖ', word: '熱狗', zhuyin: ['ㄖˋ',    'ㄍㄡˇ'],    en: 'Hot Dog',    jp: 'ホットドッグ',   illustration: null },
  { symbol: 'ㄗ', word: '字典', zhuyin: ['ㄗˋ',    'ㄉㄧㄢˇ'],  en: 'Dictionary', jp: 'じしょ',         illustration: null },
  { symbol: 'ㄘ', word: '草莓', zhuyin: ['ㄘㄠˇ',  'ㄇㄟˊ'],    en: 'Strawberry', jp: 'いちご',         illustration: null },
  { symbol: 'ㄙ', word: '松鼠', zhuyin: ['ㄙㄨㄥ', 'ㄕㄨˇ'],    en: 'Squirrel',   jp: 'リス',           illustration: null },

  // ── 介音 ──────────────────────────────────────────────────
  { symbol: 'ㄧ', word: '椅子', zhuyin: ['ㄧˇ',    '˙ㄗ'],      en: 'Chair',      jp: 'いす',           illustration: null },
  { symbol: 'ㄨ', word: '烏龜', zhuyin: ['ㄨ',     'ㄍㄨㄟ'],   en: 'Turtle',     jp: 'かめ',           illustration: null },
  { symbol: 'ㄩ', word: '魚',   zhuyin: ['ㄩˊ'],               en: 'Fish',       jp: 'さかな',         illustration: null },

  // ── 韻母 ──────────────────────────────────────────────────
  { symbol: 'ㄚ', word: '鴨子', zhuyin: ['ㄧㄚ',   '˙ㄗ'],      en: 'Duck',       jp: 'あひる',         illustration: null },
  { symbol: 'ㄛ', word: '菠蘿', zhuyin: ['ㄅㄛ',   'ㄌㄨㄛˊ'],  en: 'Pineapple',  jp: 'パイナップル',   illustration: null },
  { symbol: 'ㄜ', word: '鵝',   zhuyin: ['ㄜˊ'],               en: 'Goose',      jp: 'がちょう',       illustration: null },
  { symbol: 'ㄝ', word: '葉子', zhuyin: ['ㄧㄝˋ',  '˙ㄗ'],      en: 'Leaf',       jp: 'はっぱ',         illustration: null },
  { symbol: 'ㄞ', word: '海豚', zhuyin: ['ㄏㄞˇ',  'ㄊㄨㄣˊ'],  en: 'Dolphin',    jp: 'いるか',         illustration: null },
  { symbol: 'ㄟ', word: '玫瑰', zhuyin: ['ㄇㄟˊ',  'ㄍㄨㄟ'],   en: 'Rose',       jp: 'バラ',           illustration: null },
  { symbol: 'ㄠ', word: '妖怪', zhuyin: ['ㄧㄠ',   'ㄍㄨㄞˋ'],  en: 'Monster',    jp: 'ようかい',       illustration: null },
  { symbol: 'ㄡ', word: '猴子', zhuyin: ['ㄏㄡˊ',  '˙ㄗ'],      en: 'Monkey',     jp: 'さる',           illustration: null },
  { symbol: 'ㄢ', word: '麵包', zhuyin: ['ㄇㄧㄢˋ','ㄅㄠ'],     en: 'Bread',      jp: 'パン',           illustration: null },
  { symbol: 'ㄣ', word: '門',   zhuyin: ['ㄇㄣˊ'],              en: 'Door',       jp: 'ドア',           illustration: null },
  { symbol: 'ㄤ', word: '糖果', zhuyin: ['ㄊㄤˊ',  'ㄍㄨㄛˇ'],  en: 'Candy',      jp: 'キャンディ',     illustration: null },
  { symbol: 'ㄥ', word: '星星', zhuyin: ['ㄒㄧㄥ', 'ㄒㄧㄥ'],   en: 'Star',       jp: 'ほし',           illustration: null },
  { symbol: 'ㄦ', word: '耳朵', zhuyin: ['ㄦˇ',    '˙ㄉㄨㄛ'],  en: 'Ear',        jp: 'みみ',           illustration: null },
];

// 快速查詢 Map：symbol → word entry
export const SYMBOL_WORDS_MAP = new Map(
  SYMBOL_WORDS.map((entry) => [entry.symbol, entry])
);
