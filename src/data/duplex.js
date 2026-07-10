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
  'ㄅㄚ': { word: '爸爸',   zhuyin: ['ㄅㄚˋ', '˙ㄅㄚ'],           en: 'Dad',           jp: 'パパ',             illustration: null },
  'ㄅㄛ': { word: '玻璃',   zhuyin: ['ㄅㄛ', 'ㄌㄧˊ'],            en: 'Glass',         jp: 'ガラス',           illustration: null },
  'ㄅㄞ': { word: '白雲',   zhuyin: ['ㄅㄞˊ', 'ㄩㄣˊ'],           en: 'White Cloud',   jp: 'しろいくも',       illustration: null },
  'ㄅㄟ': { word: '背包',   zhuyin: ['ㄅㄟ', 'ㄅㄠ'],             en: 'Backpack',      jp: 'リュック',         illustration: null },
  'ㄅㄠ': { word: '包子',   zhuyin: ['ㄅㄠ', '˙ㄗ'],              en: 'Steamed Bun',   jp: 'にくまん',         illustration: null },
  'ㄅㄢ': { word: '斑馬',   zhuyin: ['ㄅㄢ', 'ㄇㄚˇ'],            en: 'Zebra',         jp: 'シマウマ',         illustration: null },
  'ㄅㄣ': { word: '本子',   zhuyin: ['ㄅㄣˇ', '˙ㄗ'],             en: 'Notebook',      jp: 'ノート',           illustration: null },
  'ㄅㄤ': { word: '棒球',   zhuyin: ['ㄅㄤˋ', 'ㄑㄧㄡˊ'],         en: 'Baseball',      jp: 'やきゅう',         illustration: null },
  'ㄅㄥ': { word: '繃帶',   zhuyin: ['ㄅㄥ', 'ㄉㄞˋ'],            en: 'Bandage',       jp: 'ほうたい',         illustration: null },

  // ── ㄆ ──────────────────────────────────────────────────
  'ㄆㄚ': { word: '爬山',   zhuyin: ['ㄆㄚˊ', 'ㄕㄢ'],            en: 'Hiking',        jp: 'やまのぼり',       illustration: null },
  'ㄆㄛ': { word: '婆婆',   zhuyin: ['ㄆㄛˊ', '˙ㄆㄛ'],           en: 'Granny',        jp: 'おばあちゃん',     illustration: null },
  'ㄆㄞ': { word: '拍手',   zhuyin: ['ㄆㄞ', 'ㄕㄡˇ'],            en: 'Clap',          jp: 'はくしゅ',         illustration: null },
  'ㄆㄟ': { word: '配對',   zhuyin: ['ㄆㄟˋ', 'ㄉㄨㄟˋ'],         en: 'Matching',      jp: 'ペア',             illustration: null },
  'ㄆㄠ': { word: '跑步',   zhuyin: ['ㄆㄠˇ', 'ㄅㄨˋ'],           en: 'Running',       jp: 'ランニング',       illustration: null },
  'ㄆㄢ': { word: '盤子',   zhuyin: ['ㄆㄢˊ', '˙ㄗ'],             en: 'Plate',         jp: 'おさら',           illustration: null },
  'ㄆㄣ': { word: '噴泉',   zhuyin: ['ㄆㄣ', 'ㄑㄩㄢˊ'],          en: 'Fountain',      jp: 'ふんすい',         illustration: null },
  'ㄆㄤ': { word: '胖胖',   zhuyin: ['ㄆㄤˋ', 'ㄆㄤˋ'],           en: 'Chubby',        jp: 'ぽっちゃり',       illustration: null },
  'ㄆㄥ': { word: '碰碰車', zhuyin: ['ㄆㄥˋ', 'ㄆㄥˋ', 'ㄔㄜ'],   en: 'Bumper Car',    jp: 'バンパーカー',     illustration: null },

  // ── ㄇ ──────────────────────────────────────────────────
  'ㄇㄚ': { word: '媽媽',   zhuyin: ['ㄇㄚ', '˙ㄇㄚ'],            en: 'Mom',           jp: 'ママ',             illustration: null },
  'ㄇㄛ': { word: '蘑菇',   zhuyin: ['ㄇㄛˊ', 'ㄍㄨ'],            en: 'Mushroom',      jp: 'きのこ',           illustration: null },
  'ㄇㄞ': { word: '買菜',   zhuyin: ['ㄇㄞˇ', 'ㄘㄞˋ'],           en: 'Grocery Run',   jp: 'かいもの',         illustration: null },
  'ㄇㄟ': { word: '妹妹',   zhuyin: ['ㄇㄟˋ', '˙ㄇㄟ'],           en: 'Little Sister', jp: 'いもうと',         illustration: null },
  'ㄇㄠ': { word: '帽子',   zhuyin: ['ㄇㄠˋ', '˙ㄗ'],             en: 'Hat',           jp: 'ぼうし',           illustration: null },
  'ㄇㄢ': { word: '饅頭',   zhuyin: ['ㄇㄢˊ', '˙ㄊㄡ'],           en: 'Mantou',        jp: 'マントウ',         illustration: null },
  'ㄇㄣ': { word: '門鈴',   zhuyin: ['ㄇㄣˊ', 'ㄌㄧㄥˊ'],         en: 'Doorbell',      jp: 'よびりん',         illustration: null },
  'ㄇㄤ': { word: '芒果',   zhuyin: ['ㄇㄤˊ', 'ㄍㄨㄛˇ'],         en: 'Mango',         jp: 'マンゴー',         illustration: null },
  'ㄇㄥ': { word: '夢',     zhuyin: ['ㄇㄥˋ'],                    en: 'Dream',         jp: 'ゆめ',             illustration: null },

  // ── ㄈ ──────────────────────────────────────────────────
  'ㄈㄚ': { word: '發芽',   zhuyin: ['ㄈㄚ', 'ㄧㄚˊ'],            en: 'Sprout',        jp: 'めばえ',           illustration: null },
  'ㄈㄟ': { word: '肥皂',   zhuyin: ['ㄈㄟˊ', 'ㄗㄠˋ'],           en: 'Soap',          jp: 'せっけん',         illustration: null },
  'ㄈㄢ': { word: '飯糰',   zhuyin: ['ㄈㄢˋ', 'ㄊㄨㄢˊ'],         en: 'Rice Ball',     jp: 'おにぎり',         illustration: null },
  'ㄈㄣ': { word: '粉紅色', zhuyin: ['ㄈㄣˇ', 'ㄏㄨㄥˊ', 'ㄙㄜˋ'], en: 'Pink',          jp: 'ピンク',           illustration: null },
  'ㄈㄤ': { word: '房子',   zhuyin: ['ㄈㄤˊ', '˙ㄗ'],             en: 'House',         jp: 'いえ',             illustration: null },
  'ㄈㄥ': { word: '風箏',   zhuyin: ['ㄈㄥ', 'ㄓㄥ'],             en: 'Kite',          jp: 'たこ',             illustration: null },

  // ── ㄉ ──────────────────────────────────────────────────
  'ㄉㄚ': { word: '打鼓',   zhuyin: ['ㄉㄚˇ', 'ㄍㄨˇ'],           en: 'Drumming',      jp: 'たいこ',           illustration: null },
  'ㄉㄜ': { word: '得分',   zhuyin: ['ㄉㄜˊ', 'ㄈㄣ'],            en: 'Score',         jp: 'とくてん',         illustration: null },
  'ㄉㄞ': { word: '袋鼠',   zhuyin: ['ㄉㄞˋ', 'ㄕㄨˇ'],           en: 'Kangaroo',      jp: 'カンガルー',       illustration: null },
  'ㄉㄠ': { word: '刀子',   zhuyin: ['ㄉㄠ', '˙ㄗ'],              en: 'Knife',         jp: 'ナイフ',           illustration: null },
  'ㄉㄡ': { word: '豆腐',   zhuyin: ['ㄉㄡˋ', '˙ㄈㄨ'],           en: 'Tofu',          jp: 'とうふ',           illustration: null },
  'ㄉㄢ': { word: '單車',   zhuyin: ['ㄉㄢ', 'ㄔㄜ'],             en: 'Bicycle',       jp: 'じてんしゃ',       illustration: null },
  'ㄉㄤ': { word: '盪鞦韆', zhuyin: ['ㄉㄤˋ', 'ㄑㄧㄡ', 'ㄑㄧㄢ'], en: 'Swing',         jp: 'ブランコ',         illustration: null },
  'ㄉㄥ': { word: '燈籠',   zhuyin: ['ㄉㄥ', 'ㄌㄨㄥˊ'],          en: 'Lantern',       jp: 'ちょうちん',       illustration: null },

  // ── ㄊ ──────────────────────────────────────────────────
  'ㄊㄚ': { word: '塔',     zhuyin: ['ㄊㄚˇ'],                    en: 'Tower',         jp: 'とう',             illustration: null },
  'ㄊㄜ': { word: '特別',   zhuyin: ['ㄊㄜˋ', 'ㄅㄧㄝˊ'],         en: 'Special',       jp: 'とくべつ',         illustration: null },
  'ㄊㄞ': { word: '太陽',   zhuyin: ['ㄊㄞˋ', 'ㄧㄤˊ'],           en: 'Sun',           jp: 'たいよう',         illustration: null },
  'ㄊㄠ': { word: '桃子',   zhuyin: ['ㄊㄠˊ', '˙ㄗ'],             en: 'Peach',         jp: 'もも',             illustration: null },
  'ㄊㄡ': { word: '頭髮',   zhuyin: ['ㄊㄡˊ', 'ㄈㄚˇ'],           en: 'Hair',          jp: 'かみのけ',         illustration: null },
  'ㄊㄢ': { word: '毯子',   zhuyin: ['ㄊㄢˇ', '˙ㄗ'],             en: 'Blanket',       jp: 'もうふ',           illustration: null },
  'ㄊㄤ': { word: '湯',     zhuyin: ['ㄊㄤ'],                     en: 'Soup',          jp: 'スープ',           illustration: null },
  'ㄊㄥ': { word: '疼',     zhuyin: ['ㄊㄥˊ'],                    en: 'Sore',          jp: 'いたい',           illustration: null },

  // ── ㄋ ──────────────────────────────────────────────────
  'ㄋㄚ': { word: '拿',     zhuyin: ['ㄋㄚˊ'],                    en: 'Take',          jp: 'とる',             illustration: null },
  'ㄋㄞ': { word: '奶油',   zhuyin: ['ㄋㄞˇ', 'ㄧㄡˊ'],           en: 'Butter',        jp: 'バター',           illustration: null },
  'ㄋㄠ': { word: '鬧鐘',   zhuyin: ['ㄋㄠˋ', 'ㄓㄨㄥ'],          en: 'Alarm Clock',   jp: 'めざましどけい',   illustration: null },
  'ㄋㄢ': { word: '南瓜',   zhuyin: ['ㄋㄢˊ', 'ㄍㄨㄚ'],          en: 'Pumpkin',       jp: 'かぼちゃ',         illustration: null },

  // ── ㄌ ──────────────────────────────────────────────────
  'ㄌㄚ': { word: '拉麵',   zhuyin: ['ㄌㄚ', 'ㄇㄧㄢˋ'],          en: 'Ramen',         jp: 'ラーメン',         illustration: null },
  'ㄌㄜ': { word: '樂高',   zhuyin: ['ㄌㄜˋ', 'ㄍㄠ'],            en: 'Lego',          jp: 'レゴ',             illustration: null },
  'ㄌㄞ': { word: '來',     zhuyin: ['ㄌㄞˊ'],                    en: 'Come',          jp: 'くる',             illustration: null },
  'ㄌㄟ': { word: '雷',     zhuyin: ['ㄌㄟˊ'],                    en: 'Thunder',       jp: 'かみなり',         illustration: null },
  'ㄌㄠ': { word: '老師',   zhuyin: ['ㄌㄠˇ', 'ㄕ'],              en: 'Teacher',       jp: 'せんせい',         illustration: null },
  'ㄌㄡ': { word: '樓梯',   zhuyin: ['ㄌㄡˊ', 'ㄊㄧ'],            en: 'Stairs',        jp: 'かいだん',         illustration: null },
  'ㄌㄢ': { word: '藍色',   zhuyin: ['ㄌㄢˊ', 'ㄙㄜˋ'],           en: 'Blue',          jp: 'あお',             illustration: null },
  'ㄌㄤ': { word: '狼',     zhuyin: ['ㄌㄤˊ'],                    en: 'Wolf',          jp: 'オオカミ',         illustration: null },
  'ㄌㄥ': { word: '冷',     zhuyin: ['ㄌㄥˇ'],                    en: 'Cold',          jp: 'さむい',           illustration: null },

  // ── ㄍ ──────────────────────────────────────────────────
  'ㄍㄜ': { word: '哥哥',   zhuyin: ['ㄍㄜ', '˙ㄍㄜ'],            en: 'Big Brother',   jp: 'おにいちゃん',     illustration: null },
  'ㄍㄞ': { word: '蓋子',   zhuyin: ['ㄍㄞˋ', '˙ㄗ'],             en: 'Lid',           jp: 'ふた',             illustration: null },
  'ㄍㄟ': { word: '給',     zhuyin: ['ㄍㄟˇ'],                    en: 'Give',          jp: 'あげる',           illustration: null },
  'ㄍㄠ': { word: '高山',   zhuyin: ['ㄍㄠ', 'ㄕㄢ'],             en: 'High Mountain', jp: 'たかいやま',       illustration: null },
  'ㄍㄡ': { word: '狗',     zhuyin: ['ㄍㄡˇ'],                    en: 'Dog',           jp: 'いぬ',             illustration: null },
  'ㄍㄢ': { word: '乾杯',   zhuyin: ['ㄍㄢ', 'ㄅㄟ'],             en: 'Cheers',        jp: 'かんぱい',         illustration: null },
  'ㄍㄣ': { word: '跟',     zhuyin: ['ㄍㄣ'],                     en: 'Follow',        jp: 'ついていく',       illustration: null },
  'ㄍㄤ': { word: '港口',   zhuyin: ['ㄍㄤˇ', 'ㄎㄡˇ'],           en: 'Harbor',        jp: 'みなと',           illustration: null },

  // ── ㄎ ──────────────────────────────────────────────────
  'ㄎㄚ': { word: '卡片',   zhuyin: ['ㄎㄚˇ', 'ㄆㄧㄢˋ'],         en: 'Card',          jp: 'カード',           illustration: null },
  'ㄎㄜ': { word: '蝌蚪',   zhuyin: ['ㄎㄜ', 'ㄉㄡˇ'],            en: 'Tadpole',       jp: 'おたまじゃくし',   illustration: null },
  'ㄎㄞ': { word: '開門',   zhuyin: ['ㄎㄞ', 'ㄇㄣˊ'],            en: 'Open the Door', jp: 'ドアをあける',     illustration: null },
  'ㄎㄠ': { word: '烤肉',   zhuyin: ['ㄎㄠˇ', 'ㄖㄡˋ'],           en: 'BBQ',           jp: 'やきにく',         illustration: null },
  'ㄎㄡ': { word: '口罩',   zhuyin: ['ㄎㄡˇ', 'ㄓㄠˋ'],           en: 'Mask',          jp: 'マスク',           illustration: null },
  'ㄎㄢ': { word: '看書',   zhuyin: ['ㄎㄢˋ', 'ㄕㄨ'],            en: 'Reading',       jp: 'どくしょ',         illustration: null },

  // ── ㄏ ──────────────────────────────────────────────────
  'ㄏㄚ': { word: '哈密瓜', zhuyin: ['ㄏㄚ', 'ㄇㄧˋ', 'ㄍㄨㄚ'],   en: 'Cantaloupe',    jp: 'メロン',           illustration: null },
  'ㄏㄜ': { word: '河馬',   zhuyin: ['ㄏㄜˊ', 'ㄇㄚˇ'],           en: 'Hippo',         jp: 'カバ',             illustration: null },
  'ㄏㄞ': { word: '海星',   zhuyin: ['ㄏㄞˇ', 'ㄒㄧㄥ'],          en: 'Starfish',      jp: 'ヒトデ',           illustration: null },
  'ㄏㄟ': { word: '黑板',   zhuyin: ['ㄏㄟ', 'ㄅㄢˇ'],            en: 'Blackboard',    jp: 'こくばん',         illustration: null },
  'ㄏㄠ': { word: '好吃',   zhuyin: ['ㄏㄠˇ', 'ㄔ'],              en: 'Yummy',         jp: 'おいしい',         illustration: null },
  'ㄏㄢ': { word: '漢堡',   zhuyin: ['ㄏㄢˋ', 'ㄅㄠˇ'],           en: 'Burger',        jp: 'ハンバーガー',     illustration: null },
  'ㄏㄣ': { word: '很棒',   zhuyin: ['ㄏㄣˇ', 'ㄅㄤˋ'],           en: 'Great',         jp: 'すばらしい',       illustration: null },

  // ── ㄓ ──────────────────────────────────────────────────
  'ㄓㄚ': { word: '眨眼',   zhuyin: ['ㄓㄚˇ', 'ㄧㄢˇ'],           en: 'Blink',         jp: 'まばたき',         illustration: null },
  'ㄓㄜ': { word: '這裡',   zhuyin: ['ㄓㄜˋ', 'ㄌㄧˇ'],           en: 'Here',          jp: 'ここ',             illustration: null },
  'ㄓㄞ': { word: '摘水果', zhuyin: ['ㄓㄞ', 'ㄕㄨㄟˇ', 'ㄍㄨㄛˇ'], en: 'Pick Fruit',   jp: 'くだものがり',     illustration: null },
  'ㄓㄠ': { word: '照相機', zhuyin: ['ㄓㄠˋ', 'ㄒㄧㄤˋ', 'ㄐㄧ'],  en: 'Camera',        jp: 'カメラ',           illustration: null },
  'ㄓㄡ': { word: '粥',     zhuyin: ['ㄓㄡ'],                     en: 'Porridge',      jp: 'おかゆ',           illustration: null },
  'ㄓㄢ': { word: '站',     zhuyin: ['ㄓㄢˋ'],                    en: 'Stand',         jp: 'たつ',             illustration: null },
  'ㄓㄣ': { word: '枕頭',   zhuyin: ['ㄓㄣˇ', '˙ㄊㄡ'],           en: 'Pillow',        jp: 'まくら',           illustration: null },
  'ㄓㄤ': { word: '章魚',   zhuyin: ['ㄓㄤ', 'ㄩˊ'],              en: 'Octopus',       jp: 'タコ',             illustration: null },
  'ㄓㄥ': { word: '蒸氣',   zhuyin: ['ㄓㄥ', 'ㄑㄧˋ'],            en: 'Steam',         jp: 'ゆげ',             illustration: null },

  // ── ㄔ ──────────────────────────────────────────────────
  'ㄔㄚ': { word: '叉子',   zhuyin: ['ㄔㄚ', '˙ㄗ'],              en: 'Fork',          jp: 'フォーク',         illustration: null },
  'ㄔㄜ': { word: '車輪',   zhuyin: ['ㄔㄜ', 'ㄌㄨㄣˊ'],          en: 'Wheel',         jp: 'しゃりん',         illustration: null },
  'ㄔㄞ': { word: '拆禮物', zhuyin: ['ㄔㄞ', 'ㄌㄧˇ', 'ㄨˋ'],      en: 'Unwrap a Gift', jp: 'プレゼントをあける', illustration: null },
  'ㄔㄠ': { word: '炒飯',   zhuyin: ['ㄔㄠˇ', 'ㄈㄢˋ'],           en: 'Fried Rice',    jp: 'チャーハン',       illustration: null },
  'ㄔㄡ': { word: '抽屜',   zhuyin: ['ㄔㄡ', '˙ㄊㄧ'],            en: 'Drawer',        jp: 'ひきだし',         illustration: null },
  'ㄔㄢ': { word: '蟬',     zhuyin: ['ㄔㄢˊ'],                    en: 'Cicada',        jp: 'セミ',             illustration: null },
  'ㄔㄤ': { word: '唱歌',   zhuyin: ['ㄔㄤˋ', 'ㄍㄜ'],            en: 'Singing',       jp: 'うたう',           illustration: null },
  'ㄔㄥ': { word: '城堡',   zhuyin: ['ㄔㄥˊ', 'ㄅㄠˇ'],           en: 'Castle',        jp: 'おしろ',           illustration: null },

  // ── ㄕ ──────────────────────────────────────────────────
  'ㄕㄚ': { word: '沙子',   zhuyin: ['ㄕㄚ', '˙ㄗ'],              en: 'Sand',          jp: 'すな',             illustration: null },
  'ㄕㄜ': { word: '蛇',     zhuyin: ['ㄕㄜˊ'],                    en: 'Snake',         jp: 'ヘビ',             illustration: null },
  'ㄕㄞ': { word: '曬太陽', zhuyin: ['ㄕㄞˋ', 'ㄊㄞˋ', 'ㄧㄤˊ'],   en: 'Sunbathe',      jp: 'ひなたぼっこ',     illustration: null },
  'ㄕㄟ': { word: '誰',     zhuyin: ['ㄕㄟˊ'],                    en: 'Who',           jp: 'だれ',             illustration: null },
  'ㄕㄠ': { word: '勺子',   zhuyin: ['ㄕㄠˊ', '˙ㄗ'],             en: 'Spoon',         jp: 'おたま',           illustration: null },
  'ㄕㄡ': { word: '手套',   zhuyin: ['ㄕㄡˇ', 'ㄊㄠˋ'],           en: 'Gloves',        jp: 'てぶくろ',         illustration: null },
  'ㄕㄢ': { word: '山',     zhuyin: ['ㄕㄢ'],                     en: 'Mountain',      jp: 'やま',             illustration: null },
  'ㄕㄣ': { word: '身體',   zhuyin: ['ㄕㄣ', 'ㄊㄧˇ'],            en: 'Body',          jp: 'からだ',           illustration: null },
  'ㄕㄤ': { word: '上學',   zhuyin: ['ㄕㄤˋ', 'ㄒㄩㄝˊ'],         en: 'Go to School',  jp: 'とうこう',         illustration: null },
  'ㄕㄥ': { word: '繩子',   zhuyin: ['ㄕㄥˊ', '˙ㄗ'],             en: 'Rope',          jp: 'なわ',             illustration: null },

  // ── ㄖ ──────────────────────────────────────────────────
  'ㄖㄜ': { word: '熱氣球', zhuyin: ['ㄖㄜˋ', 'ㄑㄧˋ', 'ㄑㄧㄡˊ'], en: 'Hot Air Balloon', jp: 'ききゅう',      illustration: null },
  'ㄖㄠ': { word: '繞圈圈', zhuyin: ['ㄖㄠˋ', 'ㄑㄩㄢ', 'ㄑㄩㄢ'], en: 'Spin Around',   jp: 'ぐるぐる',         illustration: null },
  'ㄖㄡ': { word: '肉',     zhuyin: ['ㄖㄡˋ'],                    en: 'Meat',          jp: 'おにく',           illustration: null },
  'ㄖㄣ': { word: '人',     zhuyin: ['ㄖㄣˊ'],                    en: 'Person',        jp: 'ひと',             illustration: null },
  'ㄖㄥ': { word: '扔球',   zhuyin: ['ㄖㄥ', 'ㄑㄧㄡˊ'],          en: 'Throw a Ball',  jp: 'ボールなげ',       illustration: null },

  // ── ㄗ ──────────────────────────────────────────────────
  'ㄗㄞ': { word: '盆栽',   zhuyin: ['ㄆㄣˊ', 'ㄗㄞ'],            en: 'Potted Plant',  jp: 'ぼんさい',         illustration: null },
  'ㄗㄠ': { word: '早安',   zhuyin: ['ㄗㄠˇ', 'ㄢ'],              en: 'Good Morning',  jp: 'おはよう',         illustration: null },
  'ㄗㄡ': { word: '走路',   zhuyin: ['ㄗㄡˇ', 'ㄌㄨˋ'],           en: 'Walking',       jp: 'あるく',           illustration: null },
  'ㄗㄢ': { word: '讚',     zhuyin: ['ㄗㄢˋ'],                    en: 'Awesome',       jp: 'いいね',           illustration: null },
  'ㄗㄤ': { word: '髒',     zhuyin: ['ㄗㄤ'],                     en: 'Dirty',         jp: 'きたない',         illustration: null },

  // ── ㄘ ──────────────────────────────────────────────────
  'ㄘㄚ': { word: '擦桌子', zhuyin: ['ㄘㄚ', 'ㄓㄨㄛ', '˙ㄗ'],     en: 'Wipe the Table', jp: 'テーブルふき',    illustration: null },
  'ㄘㄞ': { word: '彩虹',   zhuyin: ['ㄘㄞˇ', 'ㄏㄨㄥˊ'],         en: 'Rainbow',       jp: 'にじ',             illustration: null },
  'ㄘㄠ': { word: '草地',   zhuyin: ['ㄘㄠˇ', 'ㄉㄧˋ'],           en: 'Grass Field',   jp: 'くさはら',         illustration: null },
  'ㄘㄢ': { word: '餐廳',   zhuyin: ['ㄘㄢ', 'ㄊㄧㄥ'],           en: 'Restaurant',    jp: 'レストラン',       illustration: null },
  'ㄘㄤ': { word: '倉鼠',   zhuyin: ['ㄘㄤ', 'ㄕㄨˇ'],            en: 'Hamster',       jp: 'ハムスター',       illustration: null },

  // ── ㄙ ──────────────────────────────────────────────────
  'ㄙㄜ': { word: '色紙',   zhuyin: ['ㄙㄜˋ', 'ㄓˇ'],             en: 'Colored Paper', jp: 'おりがみ',         illustration: null },
  'ㄙㄞ': { word: '賽跑',   zhuyin: ['ㄙㄞˋ', 'ㄆㄠˇ'],           en: 'Race',          jp: 'かけっこ',         illustration: null },
  'ㄙㄠ': { word: '掃地',   zhuyin: ['ㄙㄠˇ', 'ㄉㄧˋ'],           en: 'Sweeping',      jp: 'そうじ',           illustration: null },
  'ㄙㄢ': { word: '三明治', zhuyin: ['ㄙㄢ', 'ㄇㄧㄥˊ', 'ㄓˋ'],    en: 'Sandwich',      jp: 'サンドイッチ',     illustration: null },
  'ㄙㄣ': { word: '森林',   zhuyin: ['ㄙㄣ', 'ㄌㄧㄣˊ'],          en: 'Forest',        jp: 'もり',             illustration: null },
};
