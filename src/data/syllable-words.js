// 三拼音每個有效音節的代表單字
// key = 聲母 + 結合韻（即完整音節字串）
// illustration: Phase 2 補入；Phase 1 為 null

export const SYLLABLE_WORDS = {

  // ── ㄧ 系 ─────────────────────────────────────────────────
  // ㄅ
  'ㄅㄧㄝ': { word: '別',   zhuyin: ['ㄅㄧㄝˊ'],             en: 'Farewell',   jp: 'さようなら', illustration: null },
  'ㄅㄧㄠ': { word: '錶',   zhuyin: ['ㄅㄧㄠˇ'],             en: 'Watch',      jp: 'とけい',     illustration: null },
  'ㄅㄧㄢ': { word: '便當', zhuyin: ['ㄅㄧㄢˋ', 'ㄉㄤ'],     en: 'Lunchbox',   jp: 'べんとう',   illustration: null },
  'ㄅㄧㄣ': { word: '賓士', zhuyin: ['ㄅㄧㄣ', 'ㄕˋ'],       en: 'Benz',       jp: 'ベンツ',     illustration: null },
  'ㄅㄧㄥ': { word: '冰',   zhuyin: ['ㄅㄧㄥ'],              en: 'Ice',        jp: 'こおり',     illustration: null },
  // ㄆ
  'ㄆㄧㄝ': { word: '撇',   zhuyin: ['ㄆㄧㄝ'],              en: 'Stroke',     jp: 'はらい',     illustration: null },
  'ㄆㄧㄠ': { word: '票',   zhuyin: ['ㄆㄧㄠˋ'],             en: 'Ticket',     jp: 'チケット',   illustration: null },
  'ㄆㄧㄢ': { word: '片',   zhuyin: ['ㄆㄧㄢˋ'],             en: 'Slice',      jp: 'かけら',     illustration: null },
  'ㄆㄧㄣ': { word: '拼圖', zhuyin: ['ㄆㄧㄣ', 'ㄊㄨˊ'],     en: 'Puzzle',     jp: 'パズル',     illustration: null },
  'ㄆㄧㄥ': { word: '蘋果', zhuyin: ['ㄆㄧㄥˊ', 'ㄍㄨㄛˇ'], en: 'Apple',      jp: 'りんご',     illustration: null },
  // ㄇ
  'ㄇㄧㄝ': { word: '咩',   zhuyin: ['ㄇㄧㄝ'],              en: 'Baa!',       jp: 'めえ',       illustration: null },
  'ㄇㄧㄠ': { word: '苗',   zhuyin: ['ㄇㄧㄠˊ'],             en: 'Sprout',     jp: 'めばえ',     illustration: null },
  'ㄇㄧㄡ': { word: '謬',   zhuyin: ['ㄇㄧㄡˋ'],             en: 'Error',      jp: 'まちがい',   illustration: null },
  'ㄇㄧㄢ': { word: '麵',   zhuyin: ['ㄇㄧㄢˋ'],             en: 'Noodles',    jp: 'めん',       illustration: null },
  'ㄇㄧㄣ': { word: '敏',   zhuyin: ['ㄇㄧㄣˇ'],             en: 'Sensitive',  jp: 'びんかん',   illustration: null },
  'ㄇㄧㄥ': { word: '鳴',   zhuyin: ['ㄇㄧㄥˊ'],             en: 'Chirp',      jp: 'さえずり',   illustration: null },
  // ㄉ
  'ㄉㄧㄝ': { word: '蝶',   zhuyin: ['ㄉㄧㄝˊ'],             en: 'Butterfly',  jp: 'ちょうちょ', illustration: null },
  'ㄉㄧㄠ': { word: '釣魚', zhuyin: ['ㄉㄧㄠˋ', 'ㄩˊ'],      en: 'Fishing',    jp: 'つり',       illustration: null },
  'ㄉㄧㄡ': { word: '丟',   zhuyin: ['ㄉㄧㄡ'],              en: 'Lose',       jp: 'なくす',     illustration: null },
  'ㄉㄧㄢ': { word: '電燈', zhuyin: ['ㄉㄧㄢˋ', 'ㄉㄥ'],     en: 'Light Bulb', jp: 'でんきゅう', illustration: null },
  // ㄊ
  'ㄊㄧㄝ': { word: '鐵',   zhuyin: ['ㄊㄧㄝˇ'],             en: 'Iron',       jp: 'てつ',       illustration: null },
  'ㄊㄧㄠ': { word: '跳',   zhuyin: ['ㄊㄧㄠˋ'],             en: 'Jump',       jp: 'ジャンプ',   illustration: null },
  'ㄊㄧㄢ': { word: '天空', zhuyin: ['ㄊㄧㄢ', 'ㄎㄨㄥ'],    en: 'Sky',        jp: 'そら',       illustration: null },
  // ㄋ
  'ㄋㄧㄝ': { word: '捏',   zhuyin: ['ㄋㄧㄝ'],              en: 'Pinch',      jp: 'つまむ',     illustration: null },
  'ㄋㄧㄠ': { word: '鳥',   zhuyin: ['ㄋㄧㄠˇ'],             en: 'Bird',       jp: 'とり',       illustration: null },
  'ㄋㄧㄡ': { word: '牛',   zhuyin: ['ㄋㄧㄡˊ'],             en: 'Cow',        jp: 'うし',       illustration: null },
  'ㄋㄧㄢ': { word: '年糕', zhuyin: ['ㄋㄧㄢˊ', 'ㄍㄠ'],     en: 'Rice Cake',  jp: 'もち',       illustration: null },
  'ㄋㄧㄣ': { word: '您',   zhuyin: ['ㄋㄧㄣˊ'],             en: 'You (pol.)', jp: 'あなた',     illustration: null },
  'ㄋㄧㄤ': { word: '娘',   zhuyin: ['ㄋㄧㄤˊ'],             en: 'Mother',     jp: 'おかあさん', illustration: null },
  'ㄋㄧㄥ': { word: '檸檬', zhuyin: ['ㄋㄧㄥˊ', 'ㄇㄥˊ'],   en: 'Lemon',      jp: 'レモン',     illustration: null },
  // ㄌ
  'ㄌㄧㄝ': { word: '列車', zhuyin: ['ㄌㄧㄝˋ', 'ㄔㄜ'],     en: 'Train',      jp: 'れっしゃ',   illustration: null },
  'ㄌㄧㄠ': { word: '聊天', zhuyin: ['ㄌㄧㄠˊ', 'ㄊㄧㄢ'],   en: 'Chat',       jp: 'おしゃべり', illustration: null },
  'ㄌㄧㄡ': { word: '流星', zhuyin: ['ㄌㄧㄡˊ', 'ㄒㄧㄥ'],   en: 'Meteor',     jp: 'ながれぼし', illustration: null },
  'ㄌㄧㄢ': { word: '蓮花', zhuyin: ['ㄌㄧㄢˊ', 'ㄏㄨㄚ'],   en: 'Lotus',      jp: 'はす',       illustration: null },
  'ㄌㄧㄣ': { word: '林',   zhuyin: ['ㄌㄧㄣˊ'],             en: 'Forest',     jp: 'もり',       illustration: null },
  'ㄌㄧㄤ': { word: '兩',   zhuyin: ['ㄌㄧㄤˇ'],             en: 'Two',        jp: 'ふたつ',     illustration: null },
  'ㄌㄧㄥ': { word: '鈴',   zhuyin: ['ㄌㄧㄥˊ'],             en: 'Bell',       jp: 'すず',       illustration: null },
  // ㄐ
  'ㄐㄧㄚ': { word: '家',   zhuyin: ['ㄐㄧㄚ'],              en: 'Home',       jp: 'いえ',       illustration: null },
  'ㄐㄧㄝ': { word: '街',   zhuyin: ['ㄐㄧㄝ'],              en: 'Street',     jp: 'まち',       illustration: null },
  'ㄐㄧㄠ': { word: '腳',   zhuyin: ['ㄐㄧㄠˇ'],             en: 'Foot',       jp: 'あし',       illustration: null },
  'ㄐㄧㄡ': { word: '九',   zhuyin: ['ㄐㄧㄡˇ'],             en: 'Nine',       jp: 'きゅう',     illustration: null },
  'ㄐㄧㄢ': { word: '箭',   zhuyin: ['ㄐㄧㄢˋ'],             en: 'Arrow',      jp: 'や',         illustration: null },
  'ㄐㄧㄣ': { word: '金',   zhuyin: ['ㄐㄧㄣ'],              en: 'Gold',       jp: 'きん',       illustration: null },
  'ㄐㄧㄤ': { word: '薑',   zhuyin: ['ㄐㄧㄤ'],              en: 'Ginger',     jp: 'しょうが',   illustration: null },
  'ㄐㄧㄥ': { word: '鏡子', zhuyin: ['ㄐㄧㄥˋ', '˙ㄗ'],      en: 'Mirror',     jp: 'かがみ',     illustration: null },
  // ㄑ
  'ㄑㄧㄚ': { word: '掐',   zhuyin: ['ㄑㄧㄚ'],              en: 'Nip',        jp: 'つまむ',     illustration: null },
  'ㄑㄧㄝ': { word: '切',   zhuyin: ['ㄑㄧㄝ'],              en: 'Cut',        jp: 'きる',       illustration: null },
  'ㄑㄧㄠ': { word: '橋',   zhuyin: ['ㄑㄧㄠˊ'],             en: 'Bridge',     jp: 'はし',       illustration: null },
  'ㄑㄧㄡ': { word: '球',   zhuyin: ['ㄑㄧㄡˊ'],             en: 'Ball',       jp: 'ボール',     illustration: null },
  'ㄑㄧㄢ': { word: '錢',   zhuyin: ['ㄑㄧㄢˊ'],             en: 'Money',      jp: 'おかね',     illustration: null },
  'ㄑㄧㄣ': { word: '琴',   zhuyin: ['ㄑㄧㄣˊ'],             en: 'Instrument', jp: 'がっき',     illustration: null },
  'ㄑㄧㄤ': { word: '牆',   zhuyin: ['ㄑㄧㄤˊ'],             en: 'Wall',       jp: 'かべ',       illustration: null },
  'ㄑㄧㄥ': { word: '青蛙', zhuyin: ['ㄑㄧㄥ', 'ㄨㄚ'],      en: 'Tree Frog',  jp: 'あおがえる', illustration: null },
  // ㄒ
  'ㄒㄧㄚ': { word: '蝦',   zhuyin: ['ㄒㄧㄚ'],              en: 'Shrimp',     jp: 'えび',       illustration: null },
  'ㄒㄧㄝ': { word: '鞋子', zhuyin: ['ㄒㄧㄝˊ', '˙ㄗ'],      en: 'Shoes',      jp: 'くつ',       illustration: null },
  'ㄒㄧㄠ': { word: '小狗', zhuyin: ['ㄒㄧㄠˇ', 'ㄍㄡˇ'],   en: 'Puppy',      jp: 'こいぬ',     illustration: null },
  'ㄒㄧㄡ': { word: '袖子', zhuyin: ['ㄒㄧㄡˋ', '˙ㄗ'],      en: 'Sleeve',     jp: 'そで',       illustration: null },
  'ㄒㄧㄢ': { word: '線',   zhuyin: ['ㄒㄧㄢˋ'],             en: 'Thread',     jp: 'いと',       illustration: null },
  'ㄒㄧㄣ': { word: '心',   zhuyin: ['ㄒㄧㄣ'],              en: 'Heart',      jp: 'こころ',     illustration: null },
  'ㄒㄧㄤ': { word: '香蕉', zhuyin: ['ㄒㄧㄤ', 'ㄐㄧㄠ'],    en: 'Banana',     jp: 'バナナ',     illustration: null },
  'ㄒㄧㄥ': { word: '星星', zhuyin: ['ㄒㄧㄥ', 'ㄒㄧㄥ'],    en: 'Stars',      jp: 'ほし',       illustration: null },

  // ── ㄨ 系 ─────────────────────────────────────────────────
  // ㄉ
  'ㄉㄨㄛ': { word: '多',   zhuyin: ['ㄉㄨㄛ'],              en: 'Many',       jp: 'おおい',     illustration: null },
  'ㄉㄨㄟ': { word: '對',   zhuyin: ['ㄉㄨㄟˋ'],             en: 'Correct',    jp: 'せいかい',   illustration: null },
  'ㄉㄨㄢ': { word: '短',   zhuyin: ['ㄉㄨㄢˇ'],             en: 'Short',      jp: 'みじかい',   illustration: null },
  'ㄉㄨㄣ': { word: '頓',   zhuyin: ['ㄉㄨㄣˋ'],             en: 'Pause',      jp: 'やすむ',     illustration: null },
  'ㄉㄨㄥ': { word: '東',   zhuyin: ['ㄉㄨㄥ'],              en: 'East',       jp: 'ひがし',     illustration: null },
  // ㄊ
  'ㄊㄨㄛ': { word: '駝',   zhuyin: ['ㄊㄨㄛˊ'],             en: 'Camel',      jp: 'らくだ',     illustration: null },
  'ㄊㄨㄟ': { word: '腿',   zhuyin: ['ㄊㄨㄟˇ'],             en: 'Leg',        jp: 'あし',       illustration: null },
  'ㄊㄨㄢ': { word: '糰子', zhuyin: ['ㄊㄨㄢˊ', '˙ㄗ'],      en: 'Rice Ball',  jp: 'だんご',     illustration: null },
  'ㄊㄨㄣ': { word: '吞',   zhuyin: ['ㄊㄨㄣ'],              en: 'Swallow',    jp: 'のむ',       illustration: null },
  'ㄊㄨㄥ': { word: '桶',   zhuyin: ['ㄊㄨㄥˇ'],             en: 'Bucket',     jp: 'バケツ',     illustration: null },
  // ㄋ
  'ㄋㄨㄛ': { word: '糯米', zhuyin: ['ㄋㄨㄛˋ', 'ㄇㄧˇ'],   en: 'Sticky Rice',jp: 'もちごめ',   illustration: null },
  'ㄋㄨㄢ': { word: '暖',   zhuyin: ['ㄋㄨㄢˇ'],             en: 'Warm',       jp: 'あたたかい', illustration: null },
  'ㄋㄨㄥ': { word: '農',   zhuyin: ['ㄋㄨㄥˊ'],             en: 'Farmer',     jp: 'のうか',     illustration: null },
  // ㄌ
  'ㄌㄨㄛ': { word: '落葉', zhuyin: ['ㄌㄨㄛˋ', 'ㄧㄝˋ'],    en: 'Fallen Leaf',jp: 'おちば',     illustration: null },
  'ㄌㄨㄢ': { word: '卵',   zhuyin: ['ㄌㄨㄢˇ'],             en: 'Egg',        jp: 'たまご',     illustration: null },
  'ㄌㄨㄣ': { word: '輪子', zhuyin: ['ㄌㄨㄣˊ', '˙ㄗ'],      en: 'Wheel',      jp: 'しゃりん',   illustration: null },
  'ㄌㄨㄥ': { word: '龍',   zhuyin: ['ㄌㄨㄥˊ'],             en: 'Dragon',     jp: 'りゅう',     illustration: null },
  // ㄍ
  'ㄍㄨㄚ': { word: '瓜',   zhuyin: ['ㄍㄨㄚ'],              en: 'Melon',      jp: 'うり',       illustration: null },
  'ㄍㄨㄛ': { word: '鍋',   zhuyin: ['ㄍㄨㄛ'],              en: 'Wok',        jp: 'なべ',       illustration: null },
  'ㄍㄨㄞ': { word: '乖',   zhuyin: ['ㄍㄨㄞ'],              en: 'Obedient',   jp: 'おとなしい', illustration: null },
  'ㄍㄨㄟ': { word: '鬼',   zhuyin: ['ㄍㄨㄟˇ'],             en: 'Ghost',      jp: 'おばけ',     illustration: null },
  'ㄍㄨㄢ': { word: '冠',   zhuyin: ['ㄍㄨㄢ'],              en: 'Crown',      jp: 'かんむり',   illustration: null },
  'ㄍㄨㄣ': { word: '棍子', zhuyin: ['ㄍㄨㄣˋ', '˙ㄗ'],      en: 'Stick',      jp: 'ぼう',       illustration: null },
  'ㄍㄨㄤ': { word: '光',   zhuyin: ['ㄍㄨㄤ'],              en: 'Light',      jp: 'ひかり',     illustration: null },
  'ㄍㄨㄥ': { word: '弓',   zhuyin: ['ㄍㄨㄥ'],              en: 'Bow',        jp: 'ゆみ',       illustration: null },
  // ㄎ
  'ㄎㄨㄚ': { word: '誇',   zhuyin: ['ㄎㄨㄚ'],              en: 'Boast',      jp: 'じまん',     illustration: null },
  'ㄎㄨㄛ': { word: '闊',   zhuyin: ['ㄎㄨㄛˋ'],             en: 'Broad',      jp: 'ひろい',     illustration: null },
  'ㄎㄨㄞ': { word: '筷子', zhuyin: ['ㄎㄨㄞˋ', '˙ㄗ'],      en: 'Chopsticks', jp: 'おはし',     illustration: null },
  'ㄎㄨㄟ': { word: '葵花', zhuyin: ['ㄎㄨㄟˊ', 'ㄏㄨㄚ'],   en: 'Sunflower',  jp: 'ひまわり',   illustration: null },
  'ㄎㄨㄢ': { word: '寬',   zhuyin: ['ㄎㄨㄢ'],              en: 'Wide',       jp: 'ひろい',     illustration: null },
  'ㄎㄨㄣ': { word: '困',   zhuyin: ['ㄎㄨㄣˋ'],             en: 'Sleepy',     jp: 'ねむい',     illustration: null },
  'ㄎㄨㄤ': { word: '礦石', zhuyin: ['ㄎㄨㄤˋ', 'ㄕˊ'],      en: 'Ore',        jp: 'こうせき',   illustration: null },
  'ㄎㄨㄥ': { word: '空',   zhuyin: ['ㄎㄨㄥ'],              en: 'Sky/Empty',  jp: 'そら',       illustration: null },
  // ㄏ
  'ㄏㄨㄚ': { word: '花',   zhuyin: ['ㄏㄨㄚ'],              en: 'Flower',     jp: 'はな',       illustration: null },
  'ㄏㄨㄛ': { word: '火',   zhuyin: ['ㄏㄨㄛˇ'],             en: 'Fire',       jp: 'ひ',         illustration: null },
  'ㄏㄨㄞ': { word: '壞',   zhuyin: ['ㄏㄨㄞˋ'],             en: 'Bad',        jp: 'わるい',     illustration: null },
  'ㄏㄨㄟ': { word: '灰',   zhuyin: ['ㄏㄨㄟ'],              en: 'Ash',        jp: 'はいいろ',   illustration: null },
  'ㄏㄨㄢ': { word: '浣熊', zhuyin: ['ㄏㄨㄢˋ', 'ㄒㄩㄥˊ'], en: 'Raccoon',    jp: 'アライグマ', illustration: null },
  'ㄏㄨㄣ': { word: '婚禮', zhuyin: ['ㄏㄨㄣ', 'ㄌㄧˇ'],     en: 'Wedding',    jp: 'けっこん',   illustration: null },
  'ㄏㄨㄤ': { word: '黃',   zhuyin: ['ㄏㄨㄤˊ'],             en: 'Yellow',     jp: 'きいろ',     illustration: null },
  'ㄏㄨㄥ': { word: '紅',   zhuyin: ['ㄏㄨㄥˊ'],             en: 'Red',        jp: 'あか',       illustration: null },
  // ㄓ
  'ㄓㄨㄚ': { word: '抓',   zhuyin: ['ㄓㄨㄚ'],              en: 'Grab',       jp: 'つかむ',     illustration: null },
  'ㄓㄨㄛ': { word: '桌子', zhuyin: ['ㄓㄨㄛ', '˙ㄗ'],        en: 'Table',      jp: 'テーブル',   illustration: null },
  'ㄓㄨㄟ': { word: '追',   zhuyin: ['ㄓㄨㄟ'],              en: 'Chase',      jp: 'おいかける', illustration: null },
  'ㄓㄨㄢ': { word: '轉',   zhuyin: ['ㄓㄨㄢˇ'],             en: 'Rotate',     jp: 'まわる',     illustration: null },
  'ㄓㄨㄣ': { word: '準',   zhuyin: ['ㄓㄨㄣˇ'],             en: 'Accurate',   jp: 'せいかく',   illustration: null },
  'ㄓㄨㄤ': { word: '妝',   zhuyin: ['ㄓㄨㄤ'],              en: 'Makeup',     jp: 'おけしょう', illustration: null },
  'ㄓㄨㄥ': { word: '鐘',   zhuyin: ['ㄓㄨㄥ'],              en: 'Bell/Clock', jp: 'かね',       illustration: null },
  // ㄔ
  'ㄔㄨㄛ': { word: '戳',   zhuyin: ['ㄔㄨㄛ'],              en: 'Poke',       jp: 'つつく',     illustration: null },
  'ㄔㄨㄟ': { word: '吹',   zhuyin: ['ㄔㄨㄟ'],              en: 'Blow',       jp: 'ふく',       illustration: null },
  'ㄔㄨㄢ': { word: '船',   zhuyin: ['ㄔㄨㄢˊ'],             en: 'Boat',       jp: 'ふね',       illustration: null },
  'ㄔㄨㄣ': { word: '春天', zhuyin: ['ㄔㄨㄣ', 'ㄊㄧㄢ'],    en: 'Spring',     jp: 'はる',       illustration: null },
  'ㄔㄨㄤ': { word: '窗戶', zhuyin: ['ㄔㄨㄤ', 'ㄏㄨˋ'],     en: 'Window',     jp: 'まど',       illustration: null },
  'ㄔㄨㄥ': { word: '蟲',   zhuyin: ['ㄔㄨㄥˊ'],             en: 'Bug',        jp: 'むし',       illustration: null },
  // ㄕ
  'ㄕㄨㄚ': { word: '刷',   zhuyin: ['ㄕㄨㄚ'],              en: 'Brush',      jp: 'ブラシ',     illustration: null },
  'ㄕㄨㄛ': { word: '說話', zhuyin: ['ㄕㄨㄛ', 'ㄏㄨㄚˋ'],   en: 'Speak',      jp: 'はなす',     illustration: null },
  'ㄕㄨㄞ': { word: '摔',   zhuyin: ['ㄕㄨㄞ'],              en: 'Fall down',  jp: 'ころぶ',     illustration: null },
  'ㄕㄨㄟ': { word: '水',   zhuyin: ['ㄕㄨㄟˇ'],             en: 'Water',      jp: 'みず',       illustration: null },
  'ㄕㄨㄢ': { word: '拴',   zhuyin: ['ㄕㄨㄢ'],              en: 'Tie up',     jp: 'しばる',     illustration: null },
  'ㄕㄨㄣ': { word: '順',   zhuyin: ['ㄕㄨㄣˋ'],             en: 'Smooth',     jp: 'なめらか',   illustration: null },
  'ㄕㄨㄤ': { word: '雙',   zhuyin: ['ㄕㄨㄤ'],              en: 'Pair',       jp: 'ペア',       illustration: null },
  // ㄖ
  'ㄖㄨㄛ': { word: '弱',   zhuyin: ['ㄖㄨㄛˋ'],             en: 'Weak',       jp: 'よわい',     illustration: null },
  'ㄖㄨㄟ': { word: '睿智', zhuyin: ['ㄖㄨㄟˋ', 'ㄓˋ'],      en: 'Wise',       jp: 'かしこい',   illustration: null },
  'ㄖㄨㄢ': { word: '軟',   zhuyin: ['ㄖㄨㄢˇ'],             en: 'Soft',       jp: 'やわらかい', illustration: null },
  'ㄖㄨㄣ': { word: '潤',   zhuyin: ['ㄖㄨㄣˋ'],             en: 'Moist',      jp: 'しっとり',   illustration: null },
  'ㄖㄨㄥ': { word: '熔',   zhuyin: ['ㄖㄨㄥˊ'],             en: 'Melt',       jp: 'とける',     illustration: null },
  // ㄗ
  'ㄗㄨㄛ': { word: '坐',   zhuyin: ['ㄗㄨㄛˋ'],             en: 'Sit',        jp: 'すわる',     illustration: null },
  'ㄗㄨㄟ': { word: '嘴巴', zhuyin: ['ㄗㄨㄟˇ', '˙ㄅㄚ'],    en: 'Mouth',      jp: 'くち',       illustration: null },
  'ㄗㄨㄢ': { word: '鑽石', zhuyin: ['ㄗㄨㄢˋ', 'ㄕˊ'],      en: 'Diamond',    jp: 'ダイヤ',     illustration: null },
  'ㄗㄨㄣ': { word: '尊',   zhuyin: ['ㄗㄨㄣ'],              en: 'Respect',    jp: 'そんけい',   illustration: null },
  'ㄗㄨㄥ': { word: '粽子', zhuyin: ['ㄗㄨㄥˋ', '˙ㄗ'],      en: 'Rice Dumpling',jp: 'ちまき',   illustration: null },
  // ㄘ
  'ㄘㄨㄛ': { word: '錯',   zhuyin: ['ㄘㄨㄛˋ'],             en: 'Wrong',      jp: 'まちがい',   illustration: null },
  'ㄘㄨㄟ': { word: '脆',   zhuyin: ['ㄘㄨㄟˋ'],             en: 'Crispy',     jp: 'さくさく',   illustration: null },
  'ㄘㄨㄢ': { word: '竄',   zhuyin: ['ㄘㄨㄢˋ'],             en: 'Scurry',     jp: 'はしりまわる',illustration: null },
  'ㄘㄨㄣ': { word: '村',   zhuyin: ['ㄘㄨㄣ'],              en: 'Village',    jp: 'むら',       illustration: null },
  'ㄘㄨㄥ': { word: '蔥',   zhuyin: ['ㄘㄨㄥ'],              en: 'Onion',      jp: 'ねぎ',       illustration: null },
  // ㄙ
  'ㄙㄨㄛ': { word: '鎖',   zhuyin: ['ㄙㄨㄛˇ'],             en: 'Lock',       jp: 'かぎ',       illustration: null },
  'ㄙㄨㄟ': { word: '歲',   zhuyin: ['ㄙㄨㄟˋ'],             en: 'Age/Year',   jp: 'さい',       illustration: null },
  'ㄙㄨㄢ': { word: '蒜',   zhuyin: ['ㄙㄨㄢˋ'],             en: 'Garlic',     jp: 'にんにく',   illustration: null },
  'ㄙㄨㄣ': { word: '孫子', zhuyin: ['ㄙㄨㄣ', '˙ㄗ'],        en: 'Grandchild', jp: 'まご',       illustration: null },
  'ㄙㄨㄥ': { word: '松鼠', zhuyin: ['ㄙㄨㄥ', 'ㄕㄨˇ'],      en: 'Squirrel',   jp: 'リス',       illustration: null },

  // ── ㄩ 系 ─────────────────────────────────────────────────
  // ㄐ
  'ㄐㄩㄝ': { word: '覺',   zhuyin: ['ㄐㄩㄝˊ'],             en: 'Feel',       jp: 'かんじる',   illustration: null },
  'ㄐㄩㄢ': { word: '卷',   zhuyin: ['ㄐㄩㄢˇ'],             en: 'Scroll',     jp: 'まきもの',   illustration: null },
  'ㄐㄩㄣ': { word: '軍',   zhuyin: ['ㄐㄩㄣ'],              en: 'Army',       jp: 'ぐんたい',   illustration: null },
  'ㄐㄩㄥ': { word: '窘',   zhuyin: ['ㄐㄩㄥˇ'],             en: 'Awkward',    jp: 'きまずい',   illustration: null },
  // ㄑ
  'ㄑㄩㄝ': { word: '缺',   zhuyin: ['ㄑㄩㄝ'],              en: 'Lack',       jp: 'たりない',   illustration: null },
  'ㄑㄩㄢ': { word: '泉',   zhuyin: ['ㄑㄩㄢˊ'],             en: 'Spring',     jp: 'いずみ',     illustration: null },
  'ㄑㄩㄣ': { word: '裙子', zhuyin: ['ㄑㄩㄣˊ', '˙ㄗ'],      en: 'Skirt',      jp: 'スカート',   illustration: null },
  'ㄑㄩㄥ': { word: '窮',   zhuyin: ['ㄑㄩㄥˊ'],             en: 'Poor',       jp: 'びんぼう',   illustration: null },
  // ㄒ
  'ㄒㄩㄝ': { word: '雪',   zhuyin: ['ㄒㄩㄝˇ'],             en: 'Snow',       jp: 'ゆき',       illustration: null },
  'ㄒㄩㄢ': { word: '旋轉', zhuyin: ['ㄒㄩㄢˊ', 'ㄓㄨㄢˇ'], en: 'Spin',       jp: 'まわる',     illustration: null },
  'ㄒㄩㄣ': { word: '熏',   zhuyin: ['ㄒㄩㄣ'],              en: 'Smoke/Cure', jp: 'くんせい',   illustration: null },
  'ㄒㄩㄥ': { word: '熊',   zhuyin: ['ㄒㄩㄥˊ'],             en: 'Bear',       jp: 'くま',       illustration: null },
  // ㄋ
  'ㄋㄩㄝ': { word: '虐',   zhuyin: ['ㄋㄩㄝˋ'],             en: 'Cruel',      jp: 'ざんこく',   illustration: null },
  // ㄌ
  'ㄌㄩㄝ': { word: '略',   zhuyin: ['ㄌㄩㄝˋ'],             en: 'Outline',    jp: 'あらすじ',   illustration: null },
};
