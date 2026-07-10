// 每個注音符號的代表單字
// zhuyin: 每個字的注音（陣列長度 = 字數）
// illustration: Phase 2 補入圖片路徑；Phase 1 為 null

export const SYMBOL_WORDS = [
  // ── 聲母 ──────────────────────────────────────────────────
  { symbol: 'ㄅ', word: '杯子', zhuyin: ['ㄅㄟ',   '˙ㄗ'],      en: 'Cup',        jp: 'コップ',         illustration: '/illustrations/words/ㄅ.png' },
  { symbol: 'ㄆ', word: '葡萄', zhuyin: ['ㄆㄨˊ',   'ㄊㄠˊ'],   en: 'Grape',      jp: 'ぶどう',         illustration: '/illustrations/words/ㄆ.png' },
  { symbol: 'ㄇ', word: '貓',   zhuyin: ['ㄇㄠ'],               en: 'Cat',        jp: 'ねこ',           illustration: '/illustrations/words/ㄇ.png' },
  { symbol: 'ㄈ', word: '飛機', zhuyin: ['ㄈㄟ',   'ㄐㄧ'],     en: 'Airplane',   jp: 'ひこうき',       illustration: '/illustrations/words/ㄈ.png' },
  { symbol: 'ㄉ', word: '蛋糕', zhuyin: ['ㄉㄢˋ',  'ㄍㄠ'],     en: 'Cake',       jp: 'ケーキ',         illustration: '/illustrations/words/ㄉ.png' },
  { symbol: 'ㄊ', word: '兔子', zhuyin: ['ㄊㄨˋ',  '˙ㄗ'],      en: 'Rabbit',     jp: 'うさぎ',         illustration: '/illustrations/words/ㄊ.png' },
  { symbol: 'ㄋ', word: '牛奶', zhuyin: ['ㄋㄧㄡˊ','ㄋㄞˇ'],    en: 'Milk',       jp: 'ぎゅうにゅう',   illustration: '/illustrations/words/ㄋ.png' },
  { symbol: 'ㄌ', word: '老虎', zhuyin: ['ㄌㄠˇ',  'ㄏㄨˇ'],    en: 'Tiger',      jp: 'とら',           illustration: '/illustrations/words/ㄌ.png' },
  { symbol: 'ㄍ', word: '鋼琴', zhuyin: ['ㄍㄤ',   'ㄑㄧㄣˊ'],  en: 'Piano',      jp: 'ピアノ',         illustration: '/illustrations/words/ㄍ.png' },
  { symbol: 'ㄎ', word: '恐龍', zhuyin: ['ㄎㄨㄥˇ','ㄌㄨㄥˊ'],  en: 'Dinosaur',   jp: 'きょうりゅう',   illustration: '/illustrations/words/ㄎ.png' },
  { symbol: 'ㄏ', word: '蝴蝶', zhuyin: ['ㄏㄨˊ',  'ㄉㄧㄝˊ'],  en: 'Butterfly',  jp: 'ちょうちょ',     illustration: '/illustrations/words/ㄏ.png' },
  { symbol: 'ㄐ', word: '雞',   zhuyin: ['ㄐㄧ'],               en: 'Chicken',    jp: 'にわとり',       illustration: '/illustrations/words/ㄐ.png' },
  { symbol: 'ㄑ', word: '企鵝', zhuyin: ['ㄑㄧˋ',  'ㄜˊ'],      en: 'Penguin',    jp: 'ペンギン',       illustration: '/illustrations/words/ㄑ.png' },
  { symbol: 'ㄒ', word: '西瓜', zhuyin: ['ㄒㄧ',   'ㄍㄨㄚ'],   en: 'Watermelon', jp: 'すいか',         illustration: '/illustrations/words/ㄒ.png' },
  { symbol: 'ㄓ', word: '蜘蛛', zhuyin: ['ㄓ',     'ㄓㄨ'],     en: 'Spider',     jp: 'くも',           illustration: '/illustrations/words/ㄓ.png' },
  { symbol: 'ㄔ', word: '車',   zhuyin: ['ㄔㄜ'],               en: 'Car',        jp: 'くるま',         illustration: '/illustrations/words/ㄔ.png' },
  { symbol: 'ㄕ', word: '獅子', zhuyin: ['ㄕ',     '˙ㄗ'],      en: 'Lion',       jp: 'ライオン',       illustration: '/illustrations/words/ㄕ.png' },
  { symbol: 'ㄖ', word: '熱狗', zhuyin: ['ㄖㄜˋ',   'ㄍㄡˇ'],    en: 'Hot Dog',    jp: 'ホットドッグ',   illustration: '/illustrations/words/ㄖ.png' },
  { symbol: 'ㄗ', word: '字典', zhuyin: ['ㄗˋ',    'ㄉㄧㄢˇ'],  en: 'Dictionary', jp: 'じしょ',         illustration: '/illustrations/words/ㄗ.png' },
  { symbol: 'ㄘ', word: '草莓', zhuyin: ['ㄘㄠˇ',  'ㄇㄟˊ'],    en: 'Strawberry', jp: 'いちご',         illustration: '/illustrations/words/ㄘ.png' },
  { symbol: 'ㄙ', word: '松鼠', zhuyin: ['ㄙㄨㄥ', 'ㄕㄨˇ'],    en: 'Squirrel',   jp: 'リス',           illustration: '/illustrations/words/ㄙ.png' },

  // ── 介音 ──────────────────────────────────────────────────
  { symbol: 'ㄧ', word: '椅子', zhuyin: ['ㄧˇ',    '˙ㄗ'],      en: 'Chair',      jp: 'いす',           illustration: '/illustrations/words/ㄧ.png' },
  { symbol: 'ㄨ', word: '烏龜', zhuyin: ['ㄨ',     'ㄍㄨㄟ'],   en: 'Turtle',     jp: 'かめ',           illustration: '/illustrations/words/ㄨ.png' },
  { symbol: 'ㄩ', word: '魚',   zhuyin: ['ㄩˊ'],               en: 'Fish',       jp: 'さかな',         illustration: '/illustrations/words/ㄩ.png' },

  // ── 韻母 ──────────────────────────────────────────────────
  { symbol: 'ㄚ', word: '鴨子', zhuyin: ['ㄧㄚ',   '˙ㄗ'],      en: 'Duck',       jp: 'あひる',         illustration: '/illustrations/words/ㄚ.png' },
  { symbol: 'ㄛ', word: '菠菜', zhuyin: ['ㄅㄛ',   'ㄘㄞˋ'],    en: 'Spinach',    jp: 'ほうれんそう',   illustration: '/illustrations/words/ㄛ.png' },
  { symbol: 'ㄜ', word: '鵝',   zhuyin: ['ㄜˊ'],               en: 'Goose',      jp: 'がちょう',       illustration: '/illustrations/words/ㄜ.png' },
  { symbol: 'ㄝ', word: '葉子', zhuyin: ['ㄧㄝˋ',  '˙ㄗ'],      en: 'Leaf',       jp: 'はっぱ',         illustration: '/illustrations/words/ㄝ.png' },
  { symbol: 'ㄞ', word: '海豚', zhuyin: ['ㄏㄞˇ',  'ㄊㄨㄣˊ'],  en: 'Dolphin',    jp: 'いるか',         illustration: '/illustrations/words/ㄞ.png' },
  { symbol: 'ㄟ', word: '玫瑰', zhuyin: ['ㄇㄟˊ',  'ㄍㄨㄟ'],   en: 'Rose',       jp: 'バラ',           illustration: '/illustrations/words/ㄟ.png' },
  { symbol: 'ㄠ', word: '妖怪', zhuyin: ['ㄧㄠ',   'ㄍㄨㄞˋ'],  en: 'Monster',    jp: 'ようかい',       illustration: '/illustrations/words/ㄠ.png' },
  { symbol: 'ㄡ', word: '猴子', zhuyin: ['ㄏㄡˊ',  '˙ㄗ'],      en: 'Monkey',     jp: 'さる',           illustration: '/illustrations/words/ㄡ.png' },
  { symbol: 'ㄢ', word: '麵包', zhuyin: ['ㄇㄧㄢˋ','ㄅㄠ'],     en: 'Bread',      jp: 'パン',           illustration: '/illustrations/words/ㄢ.png' },
  { symbol: 'ㄣ', word: '門',   zhuyin: ['ㄇㄣˊ'],              en: 'Door',       jp: 'ドア',           illustration: '/illustrations/words/ㄣ.png' },
  { symbol: 'ㄤ', word: '糖果', zhuyin: ['ㄊㄤˊ',  'ㄍㄨㄛˇ'],  en: 'Candy',      jp: 'キャンディ',     illustration: '/illustrations/words/ㄤ.png' },
  { symbol: 'ㄥ', word: '星星', zhuyin: ['ㄒㄧㄥ', 'ㄒㄧㄥ'],   en: 'Star',       jp: 'ほし',           illustration: '/illustrations/words/ㄥ.png' },
  { symbol: 'ㄦ', word: '耳機', zhuyin: ['ㄦˇ',    'ㄐㄧ'],     en: 'Headphones', jp: 'ヘッドホン',     illustration: '/illustrations/words/ㄦ.png' },
];

// 快速查詢 Map：symbol → word entry
export const SYMBOL_WORDS_MAP = new Map(
  SYMBOL_WORDS.map((entry) => [entry.symbol, entry])
);
