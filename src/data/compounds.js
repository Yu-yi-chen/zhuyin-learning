// 結合韻：介音（ㄧ/ㄨ/ㄩ）+ 韻母 的合法組合
// symbols: 播放時依序送入 playZhuyinSequence 的符號陣列
// word / zhuyin / en / jp / illustration: 右側單字面板用

export const COMPOUND_GROUPS = [
  {
    medial: 'ㄧ',
    items: [
      { compound: 'ㄧㄚ', symbols: ['ㄧ', 'ㄚ'], romanization: 'ya',   word: '牙',   zhuyin: ['ㄧㄚˊ'],              en: 'Tooth',    jp: 'は',         illustration: '/illustrations/compounds/ㄧㄚ.png' },
      { compound: 'ㄧㄛ', symbols: ['ㄧ', 'ㄛ'], romanization: 'yo',   word: '讚唷', zhuyin: ['ㄗㄢˋ', 'ㄧㄛ'],      en: 'Awesome!', jp: 'いいね！',   illustration: '/illustrations/compounds/ㄧㄛ.png' },
      { compound: 'ㄧㄝ', symbols: ['ㄧ', 'ㄝ'], romanization: 'ye',   word: '葉子', zhuyin: ['ㄧㄝˋ', '˙ㄗ'],       en: 'Leaf',     jp: 'はっぱ',     illustration: '/illustrations/compounds/ㄧㄝ.png' },
      { compound: 'ㄧㄠ', symbols: ['ㄧ', 'ㄠ'], romanization: 'yao',  word: '藥',   zhuyin: ['ㄧㄠˋ'],              en: 'Medicine', jp: 'くすり',     illustration: '/illustrations/compounds/ㄧㄠ.png' },
      { compound: 'ㄧㄡ', symbols: ['ㄧ', 'ㄡ'], romanization: 'you',  word: '油',   zhuyin: ['ㄧㄡˊ'],              en: 'Oil',      jp: 'あぶら',     illustration: '/illustrations/compounds/ㄧㄡ.png' },
      { compound: 'ㄧㄢ', symbols: ['ㄧ', 'ㄢ'], romanization: 'yan',  word: '眼睛', zhuyin: ['ㄧㄢˇ', 'ㄐㄧㄥ'],    en: 'Eyes',     jp: 'め',         illustration: '/illustrations/compounds/ㄧㄢ.png' },
      { compound: 'ㄧㄣ', symbols: ['ㄧ', 'ㄣ'], romanization: 'yin',  word: '銀',   zhuyin: ['ㄧㄣˊ'],              en: 'Silver',   jp: 'ぎん',       illustration: '/illustrations/compounds/ㄧㄣ.png' },
      { compound: 'ㄧㄤ', symbols: ['ㄧ', 'ㄤ'], romanization: 'yang', word: '羊',   zhuyin: ['ㄧㄤˊ'],              en: 'Sheep',    jp: 'ひつじ',     illustration: '/illustrations/compounds/ㄧㄤ.png' },
      { compound: 'ㄧㄥ', symbols: ['ㄧ', 'ㄥ'], romanization: 'ying', word: '鷹',   zhuyin: ['ㄧㄥ'],               en: 'Eagle',    jp: 'わし',       illustration: '/illustrations/compounds/ㄧㄥ.png' },
    ],
  },
  {
    medial: 'ㄨ',
    items: [
      { compound: 'ㄨㄚ', symbols: ['ㄨ', 'ㄚ'], romanization: 'wa',   word: '蛙',   zhuyin: ['ㄨㄚ'],               en: 'Frog',     jp: 'かえる',     illustration: '/illustrations/compounds/ㄨㄚ.png' },
      { compound: 'ㄨㄛ', symbols: ['ㄨ', 'ㄛ'], romanization: 'wo',   word: '窩',   zhuyin: ['ㄨㄛ'],               en: 'Nest',     jp: 'す',         illustration: '/illustrations/compounds/ㄨㄛ.png' },
      { compound: 'ㄨㄞ', symbols: ['ㄨ', 'ㄞ'], romanization: 'wai',  word: '外套', zhuyin: ['ㄨㄞˋ', 'ㄊㄠˋ'],     en: 'Coat',     jp: 'コート',     illustration: '/illustrations/compounds/ㄨㄞ.png' },
      { compound: 'ㄨㄟ', symbols: ['ㄨ', 'ㄟ'], romanization: 'wei',  word: '圍巾', zhuyin: ['ㄨㄟˊ', 'ㄐㄧㄣ'],    en: 'Scarf',    jp: 'マフラー',   illustration: '/illustrations/compounds/ㄨㄟ.png' },
      { compound: 'ㄨㄢ', symbols: ['ㄨ', 'ㄢ'], romanization: 'wan',  word: '晚上', zhuyin: ['ㄨㄢˇ', 'ㄕㄤˋ'],     en: 'Evening',  jp: 'よる',       illustration: '/illustrations/compounds/ㄨㄢ.png' },
      { compound: 'ㄨㄣ', symbols: ['ㄨ', 'ㄣ'], romanization: 'wen',  word: '蚊子', zhuyin: ['ㄨㄣˊ', '˙ㄗ'],       en: 'Mosquito', jp: 'か',         illustration: '/illustrations/compounds/ㄨㄣ.png' },
      { compound: 'ㄨㄤ', symbols: ['ㄨ', 'ㄤ'], romanization: 'wang', word: '汪汪', zhuyin: ['ㄨㄤ', 'ㄨㄤ'],       en: 'Woof',     jp: 'ワンワン',   illustration: '/illustrations/compounds/ㄨㄤ.png' },
      { compound: 'ㄨㄥ', symbols: ['ㄨ', 'ㄥ'], romanization: 'weng', word: '嗡嗡', zhuyin: ['ㄨㄥ', 'ㄨㄥ'],       en: 'Buzz',     jp: 'ぶーん',     illustration: '/illustrations/compounds/ㄨㄥ.png' },
    ],
  },
  {
    medial: 'ㄩ',
    items: [
      { compound: 'ㄩㄝ', symbols: ['ㄩ', 'ㄝ'], romanization: 'yue',  word: '月亮', zhuyin: ['ㄩㄝˋ', 'ㄌㄧㄤˋ'],   en: 'Moon',     jp: 'つき',       illustration: '/illustrations/compounds/ㄩㄝ.png' },
      { compound: 'ㄩㄢ', symbols: ['ㄩ', 'ㄢ'], romanization: 'yuan', word: '圓',   zhuyin: ['ㄩㄢˊ'],              en: 'Circle',   jp: 'まる',       illustration: '/illustrations/compounds/ㄩㄢ.png' },
      { compound: 'ㄩㄣ', symbols: ['ㄩ', 'ㄣ'], romanization: 'yun',  word: '雲',   zhuyin: ['ㄩㄣˊ'],              en: 'Cloud',    jp: 'くも',       illustration: '/illustrations/compounds/ㄩㄣ.png' },
      { compound: 'ㄩㄥ', symbols: ['ㄩ', 'ㄥ'], romanization: 'yong', word: '勇士', zhuyin: ['ㄩㄥˇ', 'ㄕˋ'],       en: 'Warrior',  jp: 'ゆうしゃ',   illustration: '/illustrations/compounds/ㄩㄥ.png' },
    ],
  },
];
