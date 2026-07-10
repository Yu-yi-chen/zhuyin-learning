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
  'ㄅㄚ': { word: '爸爸',   zhuyin: ['ㄅㄚˋ', '˙ㄅㄚ'],           en: 'Dad',           jp: 'パパ',             illustration: '/illustrations/duplex/ㄅㄚ.png' },
  'ㄅㄛ': { word: '玻璃',   zhuyin: ['ㄅㄛ', 'ㄌㄧˊ'],            en: 'Glass',         jp: 'ガラス',           illustration: '/illustrations/duplex/ㄅㄛ.png' },
  'ㄅㄞ': { word: '白雲',   zhuyin: ['ㄅㄞˊ', 'ㄩㄣˊ'],           en: 'White Cloud',   jp: 'しろいくも',       illustration: '/illustrations/duplex/ㄅㄞ.png' },
  'ㄅㄟ': { word: '背包',   zhuyin: ['ㄅㄟ', 'ㄅㄠ'],             en: 'Backpack',      jp: 'リュック',         illustration: '/illustrations/duplex/ㄅㄟ.png' },
  'ㄅㄠ': { word: '包子',   zhuyin: ['ㄅㄠ', '˙ㄗ'],              en: 'Steamed Bun',   jp: 'にくまん',         illustration: '/illustrations/duplex/ㄅㄠ.png' },
  'ㄅㄢ': { word: '斑馬',   zhuyin: ['ㄅㄢ', 'ㄇㄚˇ'],            en: 'Zebra',         jp: 'シマウマ',         illustration: '/illustrations/duplex/ㄅㄢ.png' },
  'ㄅㄣ': { word: '本子',   zhuyin: ['ㄅㄣˇ', '˙ㄗ'],             en: 'Notebook',      jp: 'ノート',           illustration: '/illustrations/duplex/ㄅㄣ.png' },
  'ㄅㄤ': { word: '棒球',   zhuyin: ['ㄅㄤˋ', 'ㄑㄧㄡˊ'],         en: 'Baseball',      jp: 'やきゅう',         illustration: '/illustrations/duplex/ㄅㄤ.png' },
  'ㄅㄥ': { word: '繃帶',   zhuyin: ['ㄅㄥ', 'ㄉㄞˋ'],            en: 'Bandage',       jp: 'ほうたい',         illustration: '/illustrations/duplex/ㄅㄥ.png' },

  // ── ㄆ ──────────────────────────────────────────────────
  'ㄆㄚ': { word: '爬山',   zhuyin: ['ㄆㄚˊ', 'ㄕㄢ'],            en: 'Hiking',        jp: 'やまのぼり',       illustration: '/illustrations/duplex/ㄆㄚ.png' },
  'ㄆㄛ': { word: '婆婆',   zhuyin: ['ㄆㄛˊ', '˙ㄆㄛ'],           en: 'Granny',        jp: 'おばあちゃん',     illustration: '/illustrations/duplex/ㄆㄛ.png' },
  'ㄆㄞ': { word: '拍手',   zhuyin: ['ㄆㄞ', 'ㄕㄡˇ'],            en: 'Clap',          jp: 'はくしゅ',         illustration: '/illustrations/duplex/ㄆㄞ.png' },
  'ㄆㄟ': { word: '配對',   zhuyin: ['ㄆㄟˋ', 'ㄉㄨㄟˋ'],         en: 'Matching',      jp: 'ペア',             illustration: '/illustrations/duplex/ㄆㄟ.png' },
  'ㄆㄠ': { word: '跑步',   zhuyin: ['ㄆㄠˇ', 'ㄅㄨˋ'],           en: 'Running',       jp: 'ランニング',       illustration: '/illustrations/duplex/ㄆㄠ.png' },
  'ㄆㄢ': { word: '盤子',   zhuyin: ['ㄆㄢˊ', '˙ㄗ'],             en: 'Plate',         jp: 'おさら',           illustration: '/illustrations/duplex/ㄆㄢ.png' },
  'ㄆㄣ': { word: '噴泉',   zhuyin: ['ㄆㄣ', 'ㄑㄩㄢˊ'],          en: 'Fountain',      jp: 'ふんすい',         illustration: '/illustrations/duplex/ㄆㄣ.png' },
  'ㄆㄤ': { word: '胖胖',   zhuyin: ['ㄆㄤˋ', 'ㄆㄤˋ'],           en: 'Chubby',        jp: 'ぽっちゃり',       illustration: '/illustrations/duplex/ㄆㄤ.png' },
  'ㄆㄥ': { word: '碰碰車', zhuyin: ['ㄆㄥˋ', 'ㄆㄥˋ', 'ㄔㄜ'],   en: 'Bumper Car',    jp: 'バンパーカー',     illustration: '/illustrations/duplex/ㄆㄥ.png' },

  // ── ㄇ ──────────────────────────────────────────────────
  'ㄇㄚ': { word: '媽媽',   zhuyin: ['ㄇㄚ', '˙ㄇㄚ'],            en: 'Mom',           jp: 'ママ',             illustration: '/illustrations/duplex/ㄇㄚ.png' },
  'ㄇㄛ': { word: '蘑菇',   zhuyin: ['ㄇㄛˊ', 'ㄍㄨ'],            en: 'Mushroom',      jp: 'きのこ',           illustration: '/illustrations/duplex/ㄇㄛ.png' },
  'ㄇㄞ': { word: '買菜',   zhuyin: ['ㄇㄞˇ', 'ㄘㄞˋ'],           en: 'Grocery Run',   jp: 'かいもの',         illustration: '/illustrations/duplex/ㄇㄞ.png' },
  'ㄇㄟ': { word: '妹妹',   zhuyin: ['ㄇㄟˋ', '˙ㄇㄟ'],           en: 'Little Sister', jp: 'いもうと',         illustration: '/illustrations/duplex/ㄇㄟ.png' },
  'ㄇㄠ': { word: '帽子',   zhuyin: ['ㄇㄠˋ', '˙ㄗ'],             en: 'Hat',           jp: 'ぼうし',           illustration: '/illustrations/duplex/ㄇㄠ.png' },
  'ㄇㄢ': { word: '饅頭',   zhuyin: ['ㄇㄢˊ', '˙ㄊㄡ'],           en: 'Mantou',        jp: 'マントウ',         illustration: '/illustrations/duplex/ㄇㄢ.png' },
  'ㄇㄣ': { word: '門鈴',   zhuyin: ['ㄇㄣˊ', 'ㄌㄧㄥˊ'],         en: 'Doorbell',      jp: 'よびりん',         illustration: '/illustrations/duplex/ㄇㄣ.png' },
  'ㄇㄤ': { word: '芒果',   zhuyin: ['ㄇㄤˊ', 'ㄍㄨㄛˇ'],         en: 'Mango',         jp: 'マンゴー',         illustration: '/illustrations/duplex/ㄇㄤ.png' },
  'ㄇㄥ': { word: '夢',     zhuyin: ['ㄇㄥˋ'],                    en: 'Dream',         jp: 'ゆめ',             illustration: '/illustrations/duplex/ㄇㄥ.png' },

  // ── ㄈ ──────────────────────────────────────────────────
  'ㄈㄚ': { word: '發芽',   zhuyin: ['ㄈㄚ', 'ㄧㄚˊ'],            en: 'Sprout',        jp: 'めばえ',           illustration: '/illustrations/duplex/ㄈㄚ.png' },
  'ㄈㄟ': { word: '肥皂',   zhuyin: ['ㄈㄟˊ', 'ㄗㄠˋ'],           en: 'Soap',          jp: 'せっけん',         illustration: '/illustrations/duplex/ㄈㄟ.png' },
  'ㄈㄢ': { word: '飯糰',   zhuyin: ['ㄈㄢˋ', 'ㄊㄨㄢˊ'],         en: 'Rice Ball',     jp: 'おにぎり',         illustration: '/illustrations/duplex/ㄈㄢ.png' },
  'ㄈㄣ': { word: '粉紅色', zhuyin: ['ㄈㄣˇ', 'ㄏㄨㄥˊ', 'ㄙㄜˋ'], en: 'Pink',          jp: 'ピンク',           illustration: '/illustrations/duplex/ㄈㄣ.png' },
  'ㄈㄤ': { word: '房子',   zhuyin: ['ㄈㄤˊ', '˙ㄗ'],             en: 'House',         jp: 'いえ',             illustration: '/illustrations/duplex/ㄈㄤ.png' },
  'ㄈㄥ': { word: '風箏',   zhuyin: ['ㄈㄥ', 'ㄓㄥ'],             en: 'Kite',          jp: 'たこ',             illustration: '/illustrations/duplex/ㄈㄥ.png' },

  // ── ㄉ ──────────────────────────────────────────────────
  'ㄉㄚ': { word: '打鼓',   zhuyin: ['ㄉㄚˇ', 'ㄍㄨˇ'],           en: 'Drumming',      jp: 'たいこ',           illustration: '/illustrations/duplex/ㄉㄚ.png' },
  'ㄉㄜ': { word: '得分',   zhuyin: ['ㄉㄜˊ', 'ㄈㄣ'],            en: 'Score',         jp: 'とくてん',         illustration: '/illustrations/duplex/ㄉㄜ.png' },
  'ㄉㄞ': { word: '袋鼠',   zhuyin: ['ㄉㄞˋ', 'ㄕㄨˇ'],           en: 'Kangaroo',      jp: 'カンガルー',       illustration: '/illustrations/duplex/ㄉㄞ.png' },
  'ㄉㄠ': { word: '刀子',   zhuyin: ['ㄉㄠ', '˙ㄗ'],              en: 'Knife',         jp: 'ナイフ',           illustration: '/illustrations/duplex/ㄉㄠ.png' },
  'ㄉㄡ': { word: '豆腐',   zhuyin: ['ㄉㄡˋ', '˙ㄈㄨ'],           en: 'Tofu',          jp: 'とうふ',           illustration: '/illustrations/duplex/ㄉㄡ.png' },
  'ㄉㄢ': { word: '單車',   zhuyin: ['ㄉㄢ', 'ㄔㄜ'],             en: 'Bicycle',       jp: 'じてんしゃ',       illustration: '/illustrations/duplex/ㄉㄢ.png' },
  'ㄉㄤ': { word: '盪鞦韆', zhuyin: ['ㄉㄤˋ', 'ㄑㄧㄡ', 'ㄑㄧㄢ'], en: 'Swing',         jp: 'ブランコ',         illustration: '/illustrations/duplex/ㄉㄤ.png' },
  'ㄉㄥ': { word: '燈籠',   zhuyin: ['ㄉㄥ', 'ㄌㄨㄥˊ'],          en: 'Lantern',       jp: 'ちょうちん',       illustration: '/illustrations/duplex/ㄉㄥ.png' },

  // ── ㄊ ──────────────────────────────────────────────────
  'ㄊㄚ': { word: '塔',     zhuyin: ['ㄊㄚˇ'],                    en: 'Tower',         jp: 'とう',             illustration: '/illustrations/duplex/ㄊㄚ.png' },
  'ㄊㄜ': { word: '特別',   zhuyin: ['ㄊㄜˋ', 'ㄅㄧㄝˊ'],         en: 'Special',       jp: 'とくべつ',         illustration: '/illustrations/duplex/ㄊㄜ.png' },
  'ㄊㄞ': { word: '太陽',   zhuyin: ['ㄊㄞˋ', 'ㄧㄤˊ'],           en: 'Sun',           jp: 'たいよう',         illustration: '/illustrations/duplex/ㄊㄞ.png' },
  'ㄊㄠ': { word: '桃子',   zhuyin: ['ㄊㄠˊ', '˙ㄗ'],             en: 'Peach',         jp: 'もも',             illustration: '/illustrations/duplex/ㄊㄠ.png' },
  'ㄊㄡ': { word: '頭髮',   zhuyin: ['ㄊㄡˊ', 'ㄈㄚˇ'],           en: 'Hair',          jp: 'かみのけ',         illustration: '/illustrations/duplex/ㄊㄡ.png' },
  'ㄊㄢ': { word: '毯子',   zhuyin: ['ㄊㄢˇ', '˙ㄗ'],             en: 'Blanket',       jp: 'もうふ',           illustration: '/illustrations/duplex/ㄊㄢ.png' },
  'ㄊㄤ': { word: '湯',     zhuyin: ['ㄊㄤ'],                     en: 'Soup',          jp: 'スープ',           illustration: '/illustrations/duplex/ㄊㄤ.png' },
  'ㄊㄥ': { word: '疼',     zhuyin: ['ㄊㄥˊ'],                    en: 'Sore',          jp: 'いたい',           illustration: '/illustrations/duplex/ㄊㄥ.png' },

  // ── ㄋ ──────────────────────────────────────────────────
  'ㄋㄚ': { word: '拿',     zhuyin: ['ㄋㄚˊ'],                    en: 'Take',          jp: 'とる',             illustration: '/illustrations/duplex/ㄋㄚ.png' },
  'ㄋㄞ': { word: '奶油',   zhuyin: ['ㄋㄞˇ', 'ㄧㄡˊ'],           en: 'Butter',        jp: 'バター',           illustration: '/illustrations/duplex/ㄋㄞ.png' },
  'ㄋㄠ': { word: '鬧鐘',   zhuyin: ['ㄋㄠˋ', 'ㄓㄨㄥ'],          en: 'Alarm Clock',   jp: 'めざましどけい',   illustration: '/illustrations/duplex/ㄋㄠ.png' },
  'ㄋㄢ': { word: '南瓜',   zhuyin: ['ㄋㄢˊ', 'ㄍㄨㄚ'],          en: 'Pumpkin',       jp: 'かぼちゃ',         illustration: '/illustrations/duplex/ㄋㄢ.png' },

  // ── ㄌ ──────────────────────────────────────────────────
  'ㄌㄚ': { word: '拉麵',   zhuyin: ['ㄌㄚ', 'ㄇㄧㄢˋ'],          en: 'Ramen',         jp: 'ラーメン',         illustration: '/illustrations/duplex/ㄌㄚ.png' },
  'ㄌㄜ': { word: '樂高',   zhuyin: ['ㄌㄜˋ', 'ㄍㄠ'],            en: 'Lego',          jp: 'レゴ',             illustration: '/illustrations/duplex/ㄌㄜ.png' },
  'ㄌㄞ': { word: '來',     zhuyin: ['ㄌㄞˊ'],                    en: 'Come',          jp: 'くる',             illustration: '/illustrations/duplex/ㄌㄞ.png' },
  'ㄌㄟ': { word: '雷',     zhuyin: ['ㄌㄟˊ'],                    en: 'Thunder',       jp: 'かみなり',         illustration: '/illustrations/duplex/ㄌㄟ.png' },
  'ㄌㄠ': { word: '老師',   zhuyin: ['ㄌㄠˇ', 'ㄕ'],              en: 'Teacher',       jp: 'せんせい',         illustration: '/illustrations/duplex/ㄌㄠ.png' },
  'ㄌㄡ': { word: '樓梯',   zhuyin: ['ㄌㄡˊ', 'ㄊㄧ'],            en: 'Stairs',        jp: 'かいだん',         illustration: '/illustrations/duplex/ㄌㄡ.png' },
  'ㄌㄢ': { word: '藍色',   zhuyin: ['ㄌㄢˊ', 'ㄙㄜˋ'],           en: 'Blue',          jp: 'あお',             illustration: '/illustrations/duplex/ㄌㄢ.png' },
  'ㄌㄤ': { word: '狼',     zhuyin: ['ㄌㄤˊ'],                    en: 'Wolf',          jp: 'オオカミ',         illustration: '/illustrations/duplex/ㄌㄤ.png' },
  'ㄌㄥ': { word: '冷',     zhuyin: ['ㄌㄥˇ'],                    en: 'Cold',          jp: 'さむい',           illustration: '/illustrations/duplex/ㄌㄥ.png' },

  // ── ㄍ ──────────────────────────────────────────────────
  'ㄍㄜ': { word: '哥哥',   zhuyin: ['ㄍㄜ', '˙ㄍㄜ'],            en: 'Big Brother',   jp: 'おにいちゃん',     illustration: '/illustrations/duplex/ㄍㄜ.png' },
  'ㄍㄞ': { word: '蓋子',   zhuyin: ['ㄍㄞˋ', '˙ㄗ'],             en: 'Lid',           jp: 'ふた',             illustration: '/illustrations/duplex/ㄍㄞ.png' },
  'ㄍㄟ': { word: '給',     zhuyin: ['ㄍㄟˇ'],                    en: 'Give',          jp: 'あげる',           illustration: '/illustrations/duplex/ㄍㄟ.png' },
  'ㄍㄠ': { word: '高山',   zhuyin: ['ㄍㄠ', 'ㄕㄢ'],             en: 'High Mountain', jp: 'たかいやま',       illustration: '/illustrations/duplex/ㄍㄠ.png' },
  'ㄍㄡ': { word: '狗',     zhuyin: ['ㄍㄡˇ'],                    en: 'Dog',           jp: 'いぬ',             illustration: '/illustrations/duplex/ㄍㄡ.png' },
  'ㄍㄢ': { word: '乾杯',   zhuyin: ['ㄍㄢ', 'ㄅㄟ'],             en: 'Cheers',        jp: 'かんぱい',         illustration: '/illustrations/duplex/ㄍㄢ.png' },
  'ㄍㄣ': { word: '跟',     zhuyin: ['ㄍㄣ'],                     en: 'Follow',        jp: 'ついていく',       illustration: '/illustrations/duplex/ㄍㄣ.png' },
  'ㄍㄤ': { word: '港口',   zhuyin: ['ㄍㄤˇ', 'ㄎㄡˇ'],           en: 'Harbor',        jp: 'みなと',           illustration: '/illustrations/duplex/ㄍㄤ.png' },

  // ── ㄎ ──────────────────────────────────────────────────
  'ㄎㄚ': { word: '卡片',   zhuyin: ['ㄎㄚˇ', 'ㄆㄧㄢˋ'],         en: 'Card',          jp: 'カード',           illustration: '/illustrations/duplex/ㄎㄚ.png' },
  'ㄎㄜ': { word: '蝌蚪',   zhuyin: ['ㄎㄜ', 'ㄉㄡˇ'],            en: 'Tadpole',       jp: 'おたまじゃくし',   illustration: '/illustrations/duplex/ㄎㄜ.png' },
  'ㄎㄞ': { word: '開門',   zhuyin: ['ㄎㄞ', 'ㄇㄣˊ'],            en: 'Open the Door', jp: 'ドアをあける',     illustration: '/illustrations/duplex/ㄎㄞ.png' },
  'ㄎㄠ': { word: '烤肉',   zhuyin: ['ㄎㄠˇ', 'ㄖㄡˋ'],           en: 'BBQ',           jp: 'やきにく',         illustration: '/illustrations/duplex/ㄎㄠ.png' },
  'ㄎㄡ': { word: '口罩',   zhuyin: ['ㄎㄡˇ', 'ㄓㄠˋ'],           en: 'Mask',          jp: 'マスク',           illustration: '/illustrations/duplex/ㄎㄡ.png' },
  'ㄎㄢ': { word: '看書',   zhuyin: ['ㄎㄢˋ', 'ㄕㄨ'],            en: 'Reading',       jp: 'どくしょ',         illustration: '/illustrations/duplex/ㄎㄢ.png' },

  // ── ㄏ ──────────────────────────────────────────────────
  'ㄏㄚ': { word: '哈密瓜', zhuyin: ['ㄏㄚ', 'ㄇㄧˋ', 'ㄍㄨㄚ'],   en: 'Cantaloupe',    jp: 'メロン',           illustration: '/illustrations/duplex/ㄏㄚ.png' },
  'ㄏㄜ': { word: '河馬',   zhuyin: ['ㄏㄜˊ', 'ㄇㄚˇ'],           en: 'Hippo',         jp: 'カバ',             illustration: '/illustrations/duplex/ㄏㄜ.png' },
  'ㄏㄞ': { word: '海星',   zhuyin: ['ㄏㄞˇ', 'ㄒㄧㄥ'],          en: 'Starfish',      jp: 'ヒトデ',           illustration: '/illustrations/duplex/ㄏㄞ.png' },
  'ㄏㄟ': { word: '黑板',   zhuyin: ['ㄏㄟ', 'ㄅㄢˇ'],            en: 'Blackboard',    jp: 'こくばん',         illustration: '/illustrations/duplex/ㄏㄟ.png' },
  'ㄏㄠ': { word: '好吃',   zhuyin: ['ㄏㄠˇ', 'ㄔ'],              en: 'Yummy',         jp: 'おいしい',         illustration: '/illustrations/duplex/ㄏㄠ.png' },
  'ㄏㄢ': { word: '漢堡',   zhuyin: ['ㄏㄢˋ', 'ㄅㄠˇ'],           en: 'Burger',        jp: 'ハンバーガー',     illustration: '/illustrations/duplex/ㄏㄢ.png' },
  'ㄏㄣ': { word: '很棒',   zhuyin: ['ㄏㄣˇ', 'ㄅㄤˋ'],           en: 'Great',         jp: 'すばらしい',       illustration: '/illustrations/duplex/ㄏㄣ.png' },

  // ── ㄓ ──────────────────────────────────────────────────
  'ㄓㄚ': { word: '柵欄',   zhuyin: ['ㄓㄚˋ', 'ㄌㄢˊ'],           en: 'Fence',         jp: 'さく',             illustration: '/illustrations/duplex/ㄓㄚ.png' },
  'ㄓㄜ': { word: '這裡',   zhuyin: ['ㄓㄜˋ', 'ㄌㄧˇ'],           en: 'Here',          jp: 'ここ',             illustration: '/illustrations/duplex/ㄓㄜ.png' },
  'ㄓㄞ': { word: '摘水果', zhuyin: ['ㄓㄞ', 'ㄕㄨㄟˇ', 'ㄍㄨㄛˇ'], en: 'Pick Fruit',   jp: 'くだものがり',     illustration: '/illustrations/duplex/ㄓㄞ.png' },
  'ㄓㄠ': { word: '照相機', zhuyin: ['ㄓㄠˋ', 'ㄒㄧㄤˋ', 'ㄐㄧ'],  en: 'Camera',        jp: 'カメラ',           illustration: '/illustrations/duplex/ㄓㄠ.png' },
  'ㄓㄡ': { word: '粥',     zhuyin: ['ㄓㄡ'],                     en: 'Porridge',      jp: 'おかゆ',           illustration: '/illustrations/duplex/ㄓㄡ.png' },
  'ㄓㄢ': { word: '站',     zhuyin: ['ㄓㄢˋ'],                    en: 'Stand',         jp: 'たつ',             illustration: '/illustrations/duplex/ㄓㄢ.png' },
  'ㄓㄣ': { word: '枕頭',   zhuyin: ['ㄓㄣˇ', '˙ㄊㄡ'],           en: 'Pillow',        jp: 'まくら',           illustration: '/illustrations/duplex/ㄓㄣ.png' },
  'ㄓㄤ': { word: '章魚',   zhuyin: ['ㄓㄤ', 'ㄩˊ'],              en: 'Octopus',       jp: 'タコ',             illustration: '/illustrations/duplex/ㄓㄤ.png' },
  'ㄓㄥ': { word: '蒸氣',   zhuyin: ['ㄓㄥ', 'ㄑㄧˋ'],            en: 'Steam',         jp: 'ゆげ',             illustration: '/illustrations/duplex/ㄓㄥ.png' },

  // ── ㄔ ──────────────────────────────────────────────────
  'ㄔㄚ': { word: '叉子',   zhuyin: ['ㄔㄚ', '˙ㄗ'],              en: 'Fork',          jp: 'フォーク',         illustration: '/illustrations/duplex/ㄔㄚ.png' },
  'ㄔㄜ': { word: '車輪',   zhuyin: ['ㄔㄜ', 'ㄌㄨㄣˊ'],          en: 'Wheel',         jp: 'しゃりん',         illustration: '/illustrations/duplex/ㄔㄜ.png' },
  'ㄔㄞ': { word: '拆禮物', zhuyin: ['ㄔㄞ', 'ㄌㄧˇ', 'ㄨˋ'],      en: 'Unwrap a Gift', jp: 'プレゼントをあける', illustration: '/illustrations/duplex/ㄔㄞ.png' },
  'ㄔㄠ': { word: '炒飯',   zhuyin: ['ㄔㄠˇ', 'ㄈㄢˋ'],           en: 'Fried Rice',    jp: 'チャーハン',       illustration: '/illustrations/duplex/ㄔㄠ.png' },
  'ㄔㄡ': { word: '抽屜',   zhuyin: ['ㄔㄡ', '˙ㄊㄧ'],            en: 'Drawer',        jp: 'ひきだし',         illustration: '/illustrations/duplex/ㄔㄡ.png' },
  'ㄔㄢ': { word: '蟬',     zhuyin: ['ㄔㄢˊ'],                    en: 'Cicada',        jp: 'セミ',             illustration: '/illustrations/duplex/ㄔㄢ.png' },
  'ㄔㄤ': { word: '唱歌',   zhuyin: ['ㄔㄤˋ', 'ㄍㄜ'],            en: 'Singing',       jp: 'うたう',           illustration: '/illustrations/duplex/ㄔㄤ.png' },
  'ㄔㄥ': { word: '城堡',   zhuyin: ['ㄔㄥˊ', 'ㄅㄠˇ'],           en: 'Castle',        jp: 'おしろ',           illustration: '/illustrations/duplex/ㄔㄥ.png' },

  // ── ㄕ ──────────────────────────────────────────────────
  'ㄕㄚ': { word: '沙子',   zhuyin: ['ㄕㄚ', '˙ㄗ'],              en: 'Sand',          jp: 'すな',             illustration: '/illustrations/duplex/ㄕㄚ.png' },
  'ㄕㄜ': { word: '蛇',     zhuyin: ['ㄕㄜˊ'],                    en: 'Snake',         jp: 'ヘビ',             illustration: '/illustrations/duplex/ㄕㄜ.png' },
  'ㄕㄞ': { word: '曬太陽', zhuyin: ['ㄕㄞˋ', 'ㄊㄞˋ', 'ㄧㄤˊ'],   en: 'Sunbathe',      jp: 'ひなたぼっこ',     illustration: '/illustrations/duplex/ㄕㄞ.png' },
  'ㄕㄟ': { word: '誰',     zhuyin: ['ㄕㄟˊ'],                    en: 'Who',           jp: 'だれ',             illustration: '/illustrations/duplex/ㄕㄟ.png' },
  'ㄕㄠ': { word: '勺子',   zhuyin: ['ㄕㄠˊ', '˙ㄗ'],             en: 'Spoon',         jp: 'おたま',           illustration: '/illustrations/duplex/ㄕㄠ.png' },
  'ㄕㄡ': { word: '手套',   zhuyin: ['ㄕㄡˇ', 'ㄊㄠˋ'],           en: 'Gloves',        jp: 'てぶくろ',         illustration: '/illustrations/duplex/ㄕㄡ.png' },
  'ㄕㄢ': { word: '山',     zhuyin: ['ㄕㄢ'],                     en: 'Mountain',      jp: 'やま',             illustration: '/illustrations/duplex/ㄕㄢ.png' },
  'ㄕㄣ': { word: '身體',   zhuyin: ['ㄕㄣ', 'ㄊㄧˇ'],            en: 'Body',          jp: 'からだ',           illustration: '/illustrations/duplex/ㄕㄣ.png' },
  'ㄕㄤ': { word: '上學',   zhuyin: ['ㄕㄤˋ', 'ㄒㄩㄝˊ'],         en: 'Go to School',  jp: 'とうこう',         illustration: '/illustrations/duplex/ㄕㄤ.png' },
  'ㄕㄥ': { word: '繩子',   zhuyin: ['ㄕㄥˊ', '˙ㄗ'],             en: 'Rope',          jp: 'なわ',             illustration: '/illustrations/duplex/ㄕㄥ.png' },

  // ── ㄖ ──────────────────────────────────────────────────
  'ㄖㄜ': { word: '熱氣球', zhuyin: ['ㄖㄜˋ', 'ㄑㄧˋ', 'ㄑㄧㄡˊ'], en: 'Hot Air Balloon', jp: 'ききゅう',      illustration: '/illustrations/duplex/ㄖㄜ.png' },
  'ㄖㄠ': { word: '繞圈圈', zhuyin: ['ㄖㄠˋ', 'ㄑㄩㄢ', 'ㄑㄩㄢ'], en: 'Spin Around',   jp: 'ぐるぐる',         illustration: '/illustrations/duplex/ㄖㄠ.png' },
  'ㄖㄡ': { word: '肉',     zhuyin: ['ㄖㄡˋ'],                    en: 'Meat',          jp: 'おにく',           illustration: '/illustrations/duplex/ㄖㄡ.png' },
  'ㄖㄣ': { word: '人',     zhuyin: ['ㄖㄣˊ'],                    en: 'Person',        jp: 'ひと',             illustration: '/illustrations/duplex/ㄖㄣ.png' },
  'ㄖㄥ': { word: '扔球',   zhuyin: ['ㄖㄥ', 'ㄑㄧㄡˊ'],          en: 'Throw a Ball',  jp: 'ボールなげ',       illustration: '/illustrations/duplex/ㄖㄥ.png' },

  // ── ㄗ ──────────────────────────────────────────────────
  'ㄗㄞ': { word: '盆栽',   zhuyin: ['ㄆㄣˊ', 'ㄗㄞ'],            en: 'Potted Plant',  jp: 'ぼんさい',         illustration: '/illustrations/duplex/ㄗㄞ.png' },
  'ㄗㄠ': { word: '早安',   zhuyin: ['ㄗㄠˇ', 'ㄢ'],              en: 'Good Morning',  jp: 'おはよう',         illustration: '/illustrations/duplex/ㄗㄠ.png' },
  'ㄗㄡ': { word: '走路',   zhuyin: ['ㄗㄡˇ', 'ㄌㄨˋ'],           en: 'Walking',       jp: 'あるく',           illustration: '/illustrations/duplex/ㄗㄡ.png' },
  'ㄗㄢ': { word: '讚',     zhuyin: ['ㄗㄢˋ'],                    en: 'Awesome',       jp: 'いいね',           illustration: '/illustrations/duplex/ㄗㄢ.png' },
  'ㄗㄤ': { word: '髒',     zhuyin: ['ㄗㄤ'],                     en: 'Dirty',         jp: 'きたない',         illustration: '/illustrations/duplex/ㄗㄤ.png' },

  // ── ㄘ ──────────────────────────────────────────────────
  'ㄘㄚ': { word: '擦桌子', zhuyin: ['ㄘㄚ', 'ㄓㄨㄛ', '˙ㄗ'],     en: 'Wipe the Table', jp: 'テーブルふき',    illustration: '/illustrations/duplex/ㄘㄚ.png' },
  'ㄘㄞ': { word: '彩虹',   zhuyin: ['ㄘㄞˇ', 'ㄏㄨㄥˊ'],         en: 'Rainbow',       jp: 'にじ',             illustration: '/illustrations/duplex/ㄘㄞ.png' },
  'ㄘㄠ': { word: '草地',   zhuyin: ['ㄘㄠˇ', 'ㄉㄧˋ'],           en: 'Grass Field',   jp: 'くさはら',         illustration: '/illustrations/duplex/ㄘㄠ.png' },
  'ㄘㄢ': { word: '餐廳',   zhuyin: ['ㄘㄢ', 'ㄊㄧㄥ'],           en: 'Restaurant',    jp: 'レストラン',       illustration: '/illustrations/duplex/ㄘㄢ.png' },
  'ㄘㄤ': { word: '倉鼠',   zhuyin: ['ㄘㄤ', 'ㄕㄨˇ'],            en: 'Hamster',       jp: 'ハムスター',       illustration: '/illustrations/duplex/ㄘㄤ.png' },

  // ── ㄙ ──────────────────────────────────────────────────
  'ㄙㄜ': { word: '色紙',   zhuyin: ['ㄙㄜˋ', 'ㄓˇ'],             en: 'Colored Paper', jp: 'おりがみ',         illustration: '/illustrations/duplex/ㄙㄜ.png' },
  'ㄙㄞ': { word: '賽跑',   zhuyin: ['ㄙㄞˋ', 'ㄆㄠˇ'],           en: 'Race',          jp: 'かけっこ',         illustration: '/illustrations/duplex/ㄙㄞ.png' },
  'ㄙㄠ': { word: '掃地',   zhuyin: ['ㄙㄠˇ', 'ㄉㄧˋ'],           en: 'Sweeping',      jp: 'そうじ',           illustration: '/illustrations/duplex/ㄙㄠ.png' },
  'ㄙㄢ': { word: '三明治', zhuyin: ['ㄙㄢ', 'ㄇㄧㄥˊ', 'ㄓˋ'],    en: 'Sandwich',      jp: 'サンドイッチ',     illustration: '/illustrations/duplex/ㄙㄢ.png' },
  'ㄙㄣ': { word: '森林',   zhuyin: ['ㄙㄣ', 'ㄌㄧㄣˊ'],          en: 'Forest',        jp: 'もり',             illustration: '/illustrations/duplex/ㄙㄣ.png' },
};
