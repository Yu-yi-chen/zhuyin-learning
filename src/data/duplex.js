// 雙拼音（聲母 + 韻母）例詞資料
// key = 聲母 + 韻母；有效格 = key 存在於 DUPLEX_WORDS（表格由本資料推導）
// 收錄原則：只收錄有適齡例詞的組合，生僻音節（ㄆㄡ、ㄋㄥ…）不收
// 例詞注音第一個音節 = 該格的聲母 + 韻母

export const DUPLEX_INITIALS = [
  'ㄅ', 'ㄆ', 'ㄇ', 'ㄈ',
  'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ',
  'ㄍ', 'ㄎ', 'ㄏ',
  'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ',
  'ㄗ', 'ㄘ', 'ㄙ',
];

export const DUPLEX_FINALS = ['ㄚ', 'ㄛ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ'];

export const DUPLEX_WORDS = {
  // ── ㄅ ──────────────────────────────────────────────────
  'ㄅㄚ': { word: '爸爸',   zhuyin: ['ㄅㄚˋ', '˙ㄅㄚ'],           en: 'Dad',           jp: 'パパ',             illustration: '/illustrations/duplex/ㄅㄚ.webp' },
  'ㄅㄛ': { word: '玻璃',   zhuyin: ['ㄅㄛ', 'ㄌㄧˊ'],            en: 'Glass',         jp: 'ガラス',           illustration: '/illustrations/duplex/ㄅㄛ.webp' },
  'ㄅㄞ': { word: '白雲',   zhuyin: ['ㄅㄞˊ', 'ㄩㄣˊ'],           en: 'White Cloud',   jp: 'しろいくも',       illustration: '/illustrations/duplex/ㄅㄞ.webp' },
  'ㄅㄟ': { word: '背包',   zhuyin: ['ㄅㄟ', 'ㄅㄠ'],             en: 'Backpack',      jp: 'リュック',         illustration: '/illustrations/duplex/ㄅㄟ.webp' },
  'ㄅㄠ': { word: '包子',   zhuyin: ['ㄅㄠ', '˙ㄗ'],              en: 'Steamed Bun',   jp: 'にくまん',         illustration: '/illustrations/duplex/ㄅㄠ.webp' },
  'ㄅㄢ': { word: '斑馬',   zhuyin: ['ㄅㄢ', 'ㄇㄚˇ'],            en: 'Zebra',         jp: 'シマウマ',         illustration: '/illustrations/duplex/ㄅㄢ.webp' },
  'ㄅㄣ': { word: '本子',   zhuyin: ['ㄅㄣˇ', '˙ㄗ'],             en: 'Notebook',      jp: 'ノート',           illustration: '/illustrations/duplex/ㄅㄣ.webp' },
  'ㄅㄤ': { word: '棒球',   zhuyin: ['ㄅㄤˋ', 'ㄑㄧㄡˊ'],         en: 'Baseball',      jp: 'やきゅう',         illustration: '/illustrations/duplex/ㄅㄤ.webp' },
  'ㄅㄥ': { word: '繃帶',   zhuyin: ['ㄅㄥ', 'ㄉㄞˋ'],            en: 'Bandage',       jp: 'ほうたい',         illustration: '/illustrations/duplex/ㄅㄥ.webp' },

  // ── ㄆ ──────────────────────────────────────────────────
  'ㄆㄚ': { word: '爬山',   zhuyin: ['ㄆㄚˊ', 'ㄕㄢ'],            en: 'Hiking',        jp: 'やまのぼり',       illustration: '/illustrations/duplex/ㄆㄚ.webp' },
  'ㄆㄛ': { word: '婆婆',   zhuyin: ['ㄆㄛˊ', '˙ㄆㄛ'],           en: 'Granny',        jp: 'おばあちゃん',     illustration: '/illustrations/duplex/ㄆㄛ.webp' },
  'ㄆㄞ': { word: '拍手',   zhuyin: ['ㄆㄞ', 'ㄕㄡˇ'],            en: 'Clap',          jp: 'はくしゅ',         illustration: '/illustrations/duplex/ㄆㄞ.webp' },
  'ㄆㄟ': { word: '配對',   zhuyin: ['ㄆㄟˋ', 'ㄉㄨㄟˋ'],         en: 'Matching',      jp: 'ペア',             illustration: '/illustrations/duplex/ㄆㄟ.webp' },
  'ㄆㄠ': { word: '跑步',   zhuyin: ['ㄆㄠˇ', 'ㄅㄨˋ'],           en: 'Running',       jp: 'ランニング',       illustration: '/illustrations/duplex/ㄆㄠ.webp' },
  'ㄆㄢ': { word: '盤子',   zhuyin: ['ㄆㄢˊ', '˙ㄗ'],             en: 'Plate',         jp: 'おさら',           illustration: '/illustrations/duplex/ㄆㄢ.webp' },
  'ㄆㄣ': { word: '噴泉',   zhuyin: ['ㄆㄣ', 'ㄑㄩㄢˊ'],          en: 'Fountain',      jp: 'ふんすい',         illustration: '/illustrations/duplex/ㄆㄣ.webp' },
  'ㄆㄤ': { word: '胖胖',   zhuyin: ['ㄆㄤˋ', 'ㄆㄤˋ'],           en: 'Chubby',        jp: 'ぽっちゃり',       illustration: '/illustrations/duplex/ㄆㄤ.webp' },
  'ㄆㄥ': { word: '碰碰車', zhuyin: ['ㄆㄥˋ', 'ㄆㄥˋ', 'ㄔㄜ'],   en: 'Bumper Car',    jp: 'バンパーカー',     illustration: '/illustrations/duplex/ㄆㄥ.webp' },

  // ── ㄇ ──────────────────────────────────────────────────
  'ㄇㄚ': { word: '媽媽',   zhuyin: ['ㄇㄚ', '˙ㄇㄚ'],            en: 'Mom',           jp: 'ママ',             illustration: '/illustrations/duplex/ㄇㄚ.webp' },
  'ㄇㄛ': { word: '蘑菇',   zhuyin: ['ㄇㄛˊ', 'ㄍㄨ'],            en: 'Mushroom',      jp: 'きのこ',           illustration: '/illustrations/duplex/ㄇㄛ.webp' },
  'ㄇㄞ': { word: '買菜',   zhuyin: ['ㄇㄞˇ', 'ㄘㄞˋ'],           en: 'Grocery Run',   jp: 'かいもの',         illustration: '/illustrations/duplex/ㄇㄞ.webp' },
  'ㄇㄟ': { word: '妹妹',   zhuyin: ['ㄇㄟˋ', '˙ㄇㄟ'],           en: 'Little Sister', jp: 'いもうと',         illustration: '/illustrations/duplex/ㄇㄟ.webp' },
  'ㄇㄠ': { word: '帽子',   zhuyin: ['ㄇㄠˋ', '˙ㄗ'],             en: 'Hat',           jp: 'ぼうし',           illustration: '/illustrations/duplex/ㄇㄠ.webp' },
  'ㄇㄢ': { word: '饅頭',   zhuyin: ['ㄇㄢˊ', '˙ㄊㄡ'],           en: 'Mantou',        jp: 'マントウ',         illustration: '/illustrations/duplex/ㄇㄢ.webp' },
  'ㄇㄣ': { word: '門鈴',   zhuyin: ['ㄇㄣˊ', 'ㄌㄧㄥˊ'],         en: 'Doorbell',      jp: 'よびりん',         illustration: '/illustrations/duplex/ㄇㄣ.webp' },
  'ㄇㄤ': { word: '芒果',   zhuyin: ['ㄇㄤˊ', 'ㄍㄨㄛˇ'],         en: 'Mango',         jp: 'マンゴー',         illustration: '/illustrations/duplex/ㄇㄤ.webp' },
  'ㄇㄥ': { word: '夢',     zhuyin: ['ㄇㄥˋ'],                    en: 'Dream',         jp: 'ゆめ',             illustration: '/illustrations/duplex/ㄇㄥ.webp' },

  // ── ㄈ ──────────────────────────────────────────────────
  'ㄈㄚ': { word: '發芽',   zhuyin: ['ㄈㄚ', 'ㄧㄚˊ'],            en: 'Sprout',        jp: 'めばえ',           illustration: '/illustrations/duplex/ㄈㄚ.webp' },
  'ㄈㄟ': { word: '肥皂',   zhuyin: ['ㄈㄟˊ', 'ㄗㄠˋ'],           en: 'Soap',          jp: 'せっけん',         illustration: '/illustrations/duplex/ㄈㄟ.webp' },
  'ㄈㄢ': { word: '飯糰',   zhuyin: ['ㄈㄢˋ', 'ㄊㄨㄢˊ'],         en: 'Rice Ball',     jp: 'おにぎり',         illustration: '/illustrations/duplex/ㄈㄢ.webp' },
  'ㄈㄣ': { word: '粉紅色', zhuyin: ['ㄈㄣˇ', 'ㄏㄨㄥˊ', 'ㄙㄜˋ'], en: 'Pink',          jp: 'ピンク',           illustration: '/illustrations/duplex/ㄈㄣ.webp' },
  'ㄈㄤ': { word: '房子',   zhuyin: ['ㄈㄤˊ', '˙ㄗ'],             en: 'House',         jp: 'いえ',             illustration: '/illustrations/duplex/ㄈㄤ.webp' },
  'ㄈㄥ': { word: '風箏',   zhuyin: ['ㄈㄥ', 'ㄓㄥ'],             en: 'Kite',          jp: 'たこ',             illustration: '/illustrations/duplex/ㄈㄥ.webp' },

  // ── ㄉ ──────────────────────────────────────────────────
  'ㄉㄚ': { word: '打鼓',   zhuyin: ['ㄉㄚˇ', 'ㄍㄨˇ'],           en: 'Drumming',      jp: 'たいこ',           illustration: '/illustrations/duplex/ㄉㄚ.webp' },
  'ㄉㄜ': { word: '得分',   zhuyin: ['ㄉㄜˊ', 'ㄈㄣ'],            en: 'Score',         jp: 'とくてん',         illustration: '/illustrations/duplex/ㄉㄜ.webp' },
  'ㄉㄞ': { word: '袋鼠',   zhuyin: ['ㄉㄞˋ', 'ㄕㄨˇ'],           en: 'Kangaroo',      jp: 'カンガルー',       illustration: '/illustrations/duplex/ㄉㄞ.webp' },
  'ㄉㄠ': { word: '刀子',   zhuyin: ['ㄉㄠ', '˙ㄗ'],              en: 'Knife',         jp: 'ナイフ',           illustration: '/illustrations/duplex/ㄉㄠ.webp' },
  'ㄉㄡ': { word: '豆腐',   zhuyin: ['ㄉㄡˋ', '˙ㄈㄨ'],           en: 'Tofu',          jp: 'とうふ',           illustration: '/illustrations/duplex/ㄉㄡ.webp' },
  'ㄉㄢ': { word: '單車',   zhuyin: ['ㄉㄢ', 'ㄔㄜ'],             en: 'Bicycle',       jp: 'じてんしゃ',       illustration: '/illustrations/duplex/ㄉㄢ.webp' },
  'ㄉㄤ': { word: '盪鞦韆', zhuyin: ['ㄉㄤˋ', 'ㄑㄧㄡ', 'ㄑㄧㄢ'], en: 'Swing',         jp: 'ブランコ',         illustration: '/illustrations/duplex/ㄉㄤ.webp' },
  'ㄉㄥ': { word: '燈籠',   zhuyin: ['ㄉㄥ', 'ㄌㄨㄥˊ'],          en: 'Lantern',       jp: 'ちょうちん',       illustration: '/illustrations/duplex/ㄉㄥ.webp' },

  // ── ㄊ ──────────────────────────────────────────────────
  'ㄊㄚ': { word: '塔',     zhuyin: ['ㄊㄚˇ'],                    en: 'Tower',         jp: 'とう',             illustration: '/illustrations/duplex/ㄊㄚ.webp' },
  'ㄊㄜ': { word: '特別',   zhuyin: ['ㄊㄜˋ', 'ㄅㄧㄝˊ'],         en: 'Special',       jp: 'とくべつ',         illustration: '/illustrations/duplex/ㄊㄜ.webp' },
  'ㄊㄞ': { word: '太陽',   zhuyin: ['ㄊㄞˋ', 'ㄧㄤˊ'],           en: 'Sun',           jp: 'たいよう',         illustration: '/illustrations/duplex/ㄊㄞ.webp' },
  'ㄊㄠ': { word: '桃子',   zhuyin: ['ㄊㄠˊ', '˙ㄗ'],             en: 'Peach',         jp: 'もも',             illustration: '/illustrations/duplex/ㄊㄠ.webp' },
  'ㄊㄡ': { word: '頭髮',   zhuyin: ['ㄊㄡˊ', 'ㄈㄚˇ'],           en: 'Hair',          jp: 'かみのけ',         illustration: '/illustrations/duplex/ㄊㄡ.webp' },
  'ㄊㄢ': { word: '毯子',   zhuyin: ['ㄊㄢˇ', '˙ㄗ'],             en: 'Blanket',       jp: 'もうふ',           illustration: '/illustrations/duplex/ㄊㄢ.webp' },
  'ㄊㄤ': { word: '湯',     zhuyin: ['ㄊㄤ'],                     en: 'Soup',          jp: 'スープ',           illustration: '/illustrations/duplex/ㄊㄤ.webp' },
  'ㄊㄥ': { word: '疼',     zhuyin: ['ㄊㄥˊ'],                    en: 'Sore',          jp: 'いたい',           illustration: '/illustrations/duplex/ㄊㄥ.webp' },

  // ── ㄋ ──────────────────────────────────────────────────
  'ㄋㄚ': { word: '拿',     zhuyin: ['ㄋㄚˊ'],                    en: 'Take',          jp: 'とる',             illustration: '/illustrations/duplex/ㄋㄚ.webp' },
  'ㄋㄞ': { word: '奶油',   zhuyin: ['ㄋㄞˇ', 'ㄧㄡˊ'],           en: 'Butter',        jp: 'バター',           illustration: '/illustrations/duplex/ㄋㄞ.webp' },
  'ㄋㄠ': { word: '鬧鐘',   zhuyin: ['ㄋㄠˋ', 'ㄓㄨㄥ'],          en: 'Alarm Clock',   jp: 'めざましどけい',   illustration: '/illustrations/duplex/ㄋㄠ.webp' },
  'ㄋㄢ': { word: '南瓜',   zhuyin: ['ㄋㄢˊ', 'ㄍㄨㄚ'],          en: 'Pumpkin',       jp: 'かぼちゃ',         illustration: '/illustrations/duplex/ㄋㄢ.webp' },

  // ── ㄌ ──────────────────────────────────────────────────
  'ㄌㄚ': { word: '拉麵',   zhuyin: ['ㄌㄚ', 'ㄇㄧㄢˋ'],          en: 'Ramen',         jp: 'ラーメン',         illustration: '/illustrations/duplex/ㄌㄚ.webp' },
  'ㄌㄜ': { word: '樂高',   zhuyin: ['ㄌㄜˋ', 'ㄍㄠ'],            en: 'Lego',          jp: 'レゴ',             illustration: '/illustrations/duplex/ㄌㄜ.webp' },
  'ㄌㄞ': { word: '來',     zhuyin: ['ㄌㄞˊ'],                    en: 'Come',          jp: 'くる',             illustration: '/illustrations/duplex/ㄌㄞ.webp' },
  'ㄌㄟ': { word: '雷',     zhuyin: ['ㄌㄟˊ'],                    en: 'Thunder',       jp: 'かみなり',         illustration: '/illustrations/duplex/ㄌㄟ.webp' },
  'ㄌㄠ': { word: '老師',   zhuyin: ['ㄌㄠˇ', 'ㄕ'],              en: 'Teacher',       jp: 'せんせい',         illustration: '/illustrations/duplex/ㄌㄠ.webp' },
  'ㄌㄡ': { word: '樓梯',   zhuyin: ['ㄌㄡˊ', 'ㄊㄧ'],            en: 'Stairs',        jp: 'かいだん',         illustration: '/illustrations/duplex/ㄌㄡ.webp' },
  'ㄌㄢ': { word: '藍色',   zhuyin: ['ㄌㄢˊ', 'ㄙㄜˋ'],           en: 'Blue',          jp: 'あお',             illustration: '/illustrations/duplex/ㄌㄢ.webp' },
  'ㄌㄤ': { word: '狼',     zhuyin: ['ㄌㄤˊ'],                    en: 'Wolf',          jp: 'オオカミ',         illustration: '/illustrations/duplex/ㄌㄤ.webp' },
  'ㄌㄥ': { word: '冷',     zhuyin: ['ㄌㄥˇ'],                    en: 'Cold',          jp: 'さむい',           illustration: '/illustrations/duplex/ㄌㄥ.webp' },

  // ── ㄍ ──────────────────────────────────────────────────
  'ㄍㄜ': { word: '哥哥',   zhuyin: ['ㄍㄜ', '˙ㄍㄜ'],            en: 'Big Brother',   jp: 'おにいちゃん',     illustration: '/illustrations/duplex/ㄍㄜ.webp' },
  'ㄍㄞ': { word: '蓋子',   zhuyin: ['ㄍㄞˋ', '˙ㄗ'],             en: 'Lid',           jp: 'ふた',             illustration: '/illustrations/duplex/ㄍㄞ.webp' },
  'ㄍㄟ': { word: '給',     zhuyin: ['ㄍㄟˇ'],                    en: 'Give',          jp: 'あげる',           illustration: '/illustrations/duplex/ㄍㄟ.webp' },
  'ㄍㄠ': { word: '高山',   zhuyin: ['ㄍㄠ', 'ㄕㄢ'],             en: 'High Mountain', jp: 'たかいやま',       illustration: '/illustrations/duplex/ㄍㄠ.webp' },
  'ㄍㄡ': { word: '狗',     zhuyin: ['ㄍㄡˇ'],                    en: 'Dog',           jp: 'いぬ',             illustration: '/illustrations/duplex/ㄍㄡ.webp' },
  'ㄍㄢ': { word: '乾杯',   zhuyin: ['ㄍㄢ', 'ㄅㄟ'],             en: 'Cheers',        jp: 'かんぱい',         illustration: '/illustrations/duplex/ㄍㄢ.webp' },
  'ㄍㄣ': { word: '跟',     zhuyin: ['ㄍㄣ'],                     en: 'Follow',        jp: 'ついていく',       illustration: '/illustrations/duplex/ㄍㄣ.webp' },
  'ㄍㄤ': { word: '港口',   zhuyin: ['ㄍㄤˇ', 'ㄎㄡˇ'],           en: 'Harbor',        jp: 'みなと',           illustration: '/illustrations/duplex/ㄍㄤ.webp' },

  // ── ㄎ ──────────────────────────────────────────────────
  'ㄎㄚ': { word: '卡片',   zhuyin: ['ㄎㄚˇ', 'ㄆㄧㄢˋ'],         en: 'Card',          jp: 'カード',           illustration: '/illustrations/duplex/ㄎㄚ.webp' },
  'ㄎㄜ': { word: '蝌蚪',   zhuyin: ['ㄎㄜ', 'ㄉㄡˇ'],            en: 'Tadpole',       jp: 'おたまじゃくし',   illustration: '/illustrations/duplex/ㄎㄜ.webp' },
  'ㄎㄞ': { word: '開門',   zhuyin: ['ㄎㄞ', 'ㄇㄣˊ'],            en: 'Open the Door', jp: 'ドアをあける',     illustration: '/illustrations/duplex/ㄎㄞ.webp' },
  'ㄎㄠ': { word: '烤肉',   zhuyin: ['ㄎㄠˇ', 'ㄖㄡˋ'],           en: 'BBQ',           jp: 'やきにく',         illustration: '/illustrations/duplex/ㄎㄠ.webp' },
  'ㄎㄡ': { word: '口罩',   zhuyin: ['ㄎㄡˇ', 'ㄓㄠˋ'],           en: 'Mask',          jp: 'マスク',           illustration: '/illustrations/duplex/ㄎㄡ.webp' },
  'ㄎㄢ': { word: '看書',   zhuyin: ['ㄎㄢˋ', 'ㄕㄨ'],            en: 'Reading',       jp: 'どくしょ',         illustration: '/illustrations/duplex/ㄎㄢ.webp' },

  // ── ㄏ ──────────────────────────────────────────────────
  'ㄏㄚ': { word: '哈密瓜', zhuyin: ['ㄏㄚ', 'ㄇㄧˋ', 'ㄍㄨㄚ'],   en: 'Cantaloupe',    jp: 'メロン',           illustration: '/illustrations/duplex/ㄏㄚ.webp' },
  'ㄏㄜ': { word: '河馬',   zhuyin: ['ㄏㄜˊ', 'ㄇㄚˇ'],           en: 'Hippo',         jp: 'カバ',             illustration: '/illustrations/duplex/ㄏㄜ.webp' },
  'ㄏㄞ': { word: '海星',   zhuyin: ['ㄏㄞˇ', 'ㄒㄧㄥ'],          en: 'Starfish',      jp: 'ヒトデ',           illustration: '/illustrations/duplex/ㄏㄞ.webp' },
  'ㄏㄟ': { word: '黑板',   zhuyin: ['ㄏㄟ', 'ㄅㄢˇ'],            en: 'Blackboard',    jp: 'こくばん',         illustration: '/illustrations/duplex/ㄏㄟ.webp' },
  'ㄏㄠ': { word: '好吃',   zhuyin: ['ㄏㄠˇ', 'ㄔ'],              en: 'Yummy',         jp: 'おいしい',         illustration: '/illustrations/duplex/ㄏㄠ.webp' },
  'ㄏㄢ': { word: '漢堡',   zhuyin: ['ㄏㄢˋ', 'ㄅㄠˇ'],           en: 'Burger',        jp: 'ハンバーガー',     illustration: '/illustrations/duplex/ㄏㄢ.webp' },
  'ㄏㄣ': { word: '很棒',   zhuyin: ['ㄏㄣˇ', 'ㄅㄤˋ'],           en: 'Great',         jp: 'すばらしい',       illustration: '/illustrations/duplex/ㄏㄣ.webp' },

  // ── ㄓ ──────────────────────────────────────────────────
  'ㄓㄚ': { word: '柵欄',   zhuyin: ['ㄓㄚˋ', 'ㄌㄢˊ'],           en: 'Fence',         jp: 'さく',             illustration: '/illustrations/duplex/ㄓㄚ.webp' },
  'ㄓㄜ': { word: '這裡',   zhuyin: ['ㄓㄜˋ', 'ㄌㄧˇ'],           en: 'Here',          jp: 'ここ',             illustration: '/illustrations/duplex/ㄓㄜ.webp' },
  'ㄓㄞ': { word: '摘水果', zhuyin: ['ㄓㄞ', 'ㄕㄨㄟˇ', 'ㄍㄨㄛˇ'], en: 'Pick Fruit',   jp: 'くだものがり',     illustration: '/illustrations/duplex/ㄓㄞ.webp' },
  'ㄓㄠ': { word: '照相機', zhuyin: ['ㄓㄠˋ', 'ㄒㄧㄤˋ', 'ㄐㄧ'],  en: 'Camera',        jp: 'カメラ',           illustration: '/illustrations/duplex/ㄓㄠ.webp' },
  'ㄓㄡ': { word: '粥',     zhuyin: ['ㄓㄡ'],                     en: 'Porridge',      jp: 'おかゆ',           illustration: '/illustrations/duplex/ㄓㄡ.webp' },
  'ㄓㄢ': { word: '站',     zhuyin: ['ㄓㄢˋ'],                    en: 'Stand',         jp: 'たつ',             illustration: '/illustrations/duplex/ㄓㄢ.webp' },
  'ㄓㄣ': { word: '枕頭',   zhuyin: ['ㄓㄣˇ', '˙ㄊㄡ'],           en: 'Pillow',        jp: 'まくら',           illustration: '/illustrations/duplex/ㄓㄣ.webp' },
  'ㄓㄤ': { word: '章魚',   zhuyin: ['ㄓㄤ', 'ㄩˊ'],              en: 'Octopus',       jp: 'タコ',             illustration: '/illustrations/duplex/ㄓㄤ.webp' },
  'ㄓㄥ': { word: '蒸氣',   zhuyin: ['ㄓㄥ', 'ㄑㄧˋ'],            en: 'Steam',         jp: 'ゆげ',             illustration: '/illustrations/duplex/ㄓㄥ.webp' },

  // ── ㄔ ──────────────────────────────────────────────────
  'ㄔㄚ': { word: '叉子',   zhuyin: ['ㄔㄚ', '˙ㄗ'],              en: 'Fork',          jp: 'フォーク',         illustration: '/illustrations/duplex/ㄔㄚ.webp' },
  'ㄔㄜ': { word: '車輪',   zhuyin: ['ㄔㄜ', 'ㄌㄨㄣˊ'],          en: 'Wheel',         jp: 'しゃりん',         illustration: '/illustrations/duplex/ㄔㄜ.webp' },
  'ㄔㄞ': { word: '拆禮物', zhuyin: ['ㄔㄞ', 'ㄌㄧˇ', 'ㄨˋ'],      en: 'Unwrap a Gift', jp: 'プレゼントをあける', illustration: '/illustrations/duplex/ㄔㄞ.webp' },
  'ㄔㄠ': { word: '炒飯',   zhuyin: ['ㄔㄠˇ', 'ㄈㄢˋ'],           en: 'Fried Rice',    jp: 'チャーハン',       illustration: '/illustrations/duplex/ㄔㄠ.webp' },
  'ㄔㄡ': { word: '抽屜',   zhuyin: ['ㄔㄡ', '˙ㄊㄧ'],            en: 'Drawer',        jp: 'ひきだし',         illustration: '/illustrations/duplex/ㄔㄡ.webp' },
  'ㄔㄢ': { word: '蟬',     zhuyin: ['ㄔㄢˊ'],                    en: 'Cicada',        jp: 'セミ',             illustration: '/illustrations/duplex/ㄔㄢ.webp' },
  'ㄔㄤ': { word: '唱歌',   zhuyin: ['ㄔㄤˋ', 'ㄍㄜ'],            en: 'Singing',       jp: 'うたう',           illustration: '/illustrations/duplex/ㄔㄤ.webp' },
  'ㄔㄥ': { word: '城堡',   zhuyin: ['ㄔㄥˊ', 'ㄅㄠˇ'],           en: 'Castle',        jp: 'おしろ',           illustration: '/illustrations/duplex/ㄔㄥ.webp' },

  // ── ㄕ ──────────────────────────────────────────────────
  'ㄕㄚ': { word: '沙子',   zhuyin: ['ㄕㄚ', '˙ㄗ'],              en: 'Sand',          jp: 'すな',             illustration: '/illustrations/duplex/ㄕㄚ.webp' },
  'ㄕㄜ': { word: '蛇',     zhuyin: ['ㄕㄜˊ'],                    en: 'Snake',         jp: 'ヘビ',             illustration: '/illustrations/duplex/ㄕㄜ.webp' },
  'ㄕㄞ': { word: '曬太陽', zhuyin: ['ㄕㄞˋ', 'ㄊㄞˋ', 'ㄧㄤˊ'],   en: 'Sunbathe',      jp: 'ひなたぼっこ',     illustration: '/illustrations/duplex/ㄕㄞ.webp' },
  'ㄕㄟ': { word: '誰',     zhuyin: ['ㄕㄟˊ'],                    en: 'Who',           jp: 'だれ',             illustration: '/illustrations/duplex/ㄕㄟ.webp' },
  'ㄕㄠ': { word: '勺子',   zhuyin: ['ㄕㄠˊ', '˙ㄗ'],             en: 'Spoon',         jp: 'おたま',           illustration: '/illustrations/duplex/ㄕㄠ.webp' },
  'ㄕㄡ': { word: '手套',   zhuyin: ['ㄕㄡˇ', 'ㄊㄠˋ'],           en: 'Gloves',        jp: 'てぶくろ',         illustration: '/illustrations/duplex/ㄕㄡ.webp' },
  'ㄕㄢ': { word: '山',     zhuyin: ['ㄕㄢ'],                     en: 'Mountain',      jp: 'やま',             illustration: '/illustrations/duplex/ㄕㄢ.webp' },
  'ㄕㄣ': { word: '身體',   zhuyin: ['ㄕㄣ', 'ㄊㄧˇ'],            en: 'Body',          jp: 'からだ',           illustration: '/illustrations/duplex/ㄕㄣ.webp' },
  'ㄕㄤ': { word: '上學',   zhuyin: ['ㄕㄤˋ', 'ㄒㄩㄝˊ'],         en: 'Go to School',  jp: 'とうこう',         illustration: '/illustrations/duplex/ㄕㄤ.webp' },
  'ㄕㄥ': { word: '繩子',   zhuyin: ['ㄕㄥˊ', '˙ㄗ'],             en: 'Rope',          jp: 'なわ',             illustration: '/illustrations/duplex/ㄕㄥ.webp' },

  // ── ㄖ ──────────────────────────────────────────────────
  'ㄖㄜ': { word: '熱氣球', zhuyin: ['ㄖㄜˋ', 'ㄑㄧˋ', 'ㄑㄧㄡˊ'], en: 'Hot Air Balloon', jp: 'ききゅう',      illustration: '/illustrations/duplex/ㄖㄜ.webp' },
  'ㄖㄠ': { word: '繞圈圈', zhuyin: ['ㄖㄠˋ', 'ㄑㄩㄢ', 'ㄑㄩㄢ'], en: 'Spin Around',   jp: 'ぐるぐる',         illustration: '/illustrations/duplex/ㄖㄠ.webp' },
  'ㄖㄡ': { word: '肉',     zhuyin: ['ㄖㄡˋ'],                    en: 'Meat',          jp: 'おにく',           illustration: '/illustrations/duplex/ㄖㄡ.webp' },
  'ㄖㄣ': { word: '人',     zhuyin: ['ㄖㄣˊ'],                    en: 'Person',        jp: 'ひと',             illustration: '/illustrations/duplex/ㄖㄣ.webp' },
  'ㄖㄥ': { word: '扔球',   zhuyin: ['ㄖㄥ', 'ㄑㄧㄡˊ'],          en: 'Throw a Ball',  jp: 'ボールなげ',       illustration: '/illustrations/duplex/ㄖㄥ.webp' },

  // ── ㄗ ──────────────────────────────────────────────────
  'ㄗㄞ': { word: '盆栽',   zhuyin: ['ㄆㄣˊ', 'ㄗㄞ'],            en: 'Potted Plant',  jp: 'ぼんさい',         illustration: '/illustrations/duplex/ㄗㄞ.webp' },
  'ㄗㄠ': { word: '早安',   zhuyin: ['ㄗㄠˇ', 'ㄢ'],              en: 'Good Morning',  jp: 'おはよう',         illustration: '/illustrations/duplex/ㄗㄠ.webp' },
  'ㄗㄡ': { word: '走路',   zhuyin: ['ㄗㄡˇ', 'ㄌㄨˋ'],           en: 'Walking',       jp: 'あるく',           illustration: '/illustrations/duplex/ㄗㄡ.webp' },
  'ㄗㄢ': { word: '讚',     zhuyin: ['ㄗㄢˋ'],                    en: 'Awesome',       jp: 'いいね',           illustration: '/illustrations/duplex/ㄗㄢ.webp' },
  'ㄗㄤ': { word: '髒',     zhuyin: ['ㄗㄤ'],                     en: 'Dirty',         jp: 'きたない',         illustration: '/illustrations/duplex/ㄗㄤ.webp' },

  // ── ㄘ ──────────────────────────────────────────────────
  'ㄘㄚ': { word: '擦桌子', zhuyin: ['ㄘㄚ', 'ㄓㄨㄛ', '˙ㄗ'],     en: 'Wipe the Table', jp: 'テーブルふき',    illustration: '/illustrations/duplex/ㄘㄚ.webp' },
  'ㄘㄞ': { word: '彩虹',   zhuyin: ['ㄘㄞˇ', 'ㄏㄨㄥˊ'],         en: 'Rainbow',       jp: 'にじ',             illustration: '/illustrations/duplex/ㄘㄞ.webp' },
  'ㄘㄠ': { word: '草地',   zhuyin: ['ㄘㄠˇ', 'ㄉㄧˋ'],           en: 'Grass Field',   jp: 'くさはら',         illustration: '/illustrations/duplex/ㄘㄠ.webp' },
  'ㄘㄢ': { word: '餐廳',   zhuyin: ['ㄘㄢ', 'ㄊㄧㄥ'],           en: 'Restaurant',    jp: 'レストラン',       illustration: '/illustrations/duplex/ㄘㄢ.webp' },
  'ㄘㄤ': { word: '倉鼠',   zhuyin: ['ㄘㄤ', 'ㄕㄨˇ'],            en: 'Hamster',       jp: 'ハムスター',       illustration: '/illustrations/duplex/ㄘㄤ.webp' },

  // ── ㄙ ──────────────────────────────────────────────────
  'ㄙㄜ': { word: '色紙',   zhuyin: ['ㄙㄜˋ', 'ㄓˇ'],             en: 'Colored Paper', jp: 'おりがみ',         illustration: '/illustrations/duplex/ㄙㄜ.webp' },
  'ㄙㄞ': { word: '賽跑',   zhuyin: ['ㄙㄞˋ', 'ㄆㄠˇ'],           en: 'Race',          jp: 'かけっこ',         illustration: '/illustrations/duplex/ㄙㄞ.webp' },
  'ㄙㄠ': { word: '掃地',   zhuyin: ['ㄙㄠˇ', 'ㄉㄧˋ'],           en: 'Sweeping',      jp: 'そうじ',           illustration: '/illustrations/duplex/ㄙㄠ.webp' },
  'ㄙㄢ': { word: '三明治', zhuyin: ['ㄙㄢ', 'ㄇㄧㄥˊ', 'ㄓˋ'],    en: 'Sandwich',      jp: 'サンドイッチ',     illustration: '/illustrations/duplex/ㄙㄢ.webp' },
  'ㄙㄣ': { word: '森林',   zhuyin: ['ㄙㄣ', 'ㄌㄧㄣˊ'],          en: 'Forest',        jp: 'もり',             illustration: '/illustrations/duplex/ㄙㄣ.webp' },
};
