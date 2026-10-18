const COLORS = {
  OMORI: '#666666',
  MARI: '#ffd700',
  KEL: '#4fc3f7',
  AUBREY: '#ff80ab',
  HERO: '#ffb74d',
  BASIL: '#aed581'
};

const PORTRAITS = {
  OMORI: {
    neutral: '../assets/images/portraits/OMORI/OMORI ALWAYS NEUTRAL.png',
    happy: '../assets/images/portraits/OMORI/OMORI ALWAYS NEUTRAL.png',
    sad: '../assets/images/portraits/OMORI/OMORI ALWAYS NEUTRAL.png',
    angry: '../assets/images/portraits/OMORI/OMORI ALWAYS NEUTRAL.png'
  },
  MARI: {
    neutral: '../assets/images/portraits/MARI/MARI SMILE.png',
    happy: '../assets/images/portraits/MARI/MARI BIG SMILE.png',
    sad: '../assets/images/portraits/MARI/MARI SMILE.png',
    angry: '../assets/images/portraits/MARI/MARI SMIRK.png'
  },
  KEL: {
    neutral: '../assets/images/portraits/KEL/KEL SWEAT.png',
    happy: '../assets/images/portraits/KEL/KEL DETERMINED.png',
    sad: '../assets/images/portraits/KEL/KEL SAD.png',
    angry: '../assets/images/portraits/KEL/KEL SUPER ANGRY.png'
  },
  AUBREY: {
    neutral: '../assets/images/portraits/AUBREY/AUBREY NEUTRAL.png',
    happy: '../assets/images/portraits/AUBREY/AUBREYHAPPY.png',
    sad: '../assets/images/portraits/AUBREY/AUBREY SAD.png',
    angry: '../assets/images/portraits/AUBREY/AUBREY ANGRY.png'
  },
  HERO: {
    neutral: '../assets/images/portraits/HERO/HERO NEUTRAL.png',
    happy: '../assets/images/portraits/HERO/HERO HAPPY.png',
    sad: '../assets/images/portraits/HERO/HERO SAD.png',
    angry: '../assets/images/portraits/HERO/HERO SURPRISED.png'
  },
  BASIL: {
    neutral: '../assets/images/portraits/BASIL/BASIL SLIGHT SMILE.png',
    happy: '../assets/images/portraits/BASIL/BASIL SLIGHT SMILE.png',
    sad: '../assets/images/portraits/BASIL/BASIL SCARED.png',
    angry: '../assets/images/portraits/BASIL/BASIL ANGRY.png'
  },
  BLANK: null
};

const BG = {
  FOREST: 'linear-gradient(#2d5a27 0%, #1a3a1a 100%)',
  WHITE: 'radial-gradient(circle at center, #ffffff 0%, #e0e0e0 40%, #c0c0c0 100%)',
  KITCHEN: 'linear-gradient(#f5e6d3 0%, #e8d5c0 100%)',
  VOID: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
  SHOE_HOUSE: 'linear-gradient(#8b4513 0%, #5d2e1c 100%)',
  WHITE_SPACE: 'radial-gradient(circle at center, #ffffff 0%, #e0e0e0 40%, #c0c0c0 100%)',
  FARAWAY_TOWN: 'linear-gradient(#4a6fa5 0%, #2c3e50 100%)',
  PICNIC: 'linear-gradient(#2d5a27 0%, #1a3a1a 100%)'
};

const BGM_LIST = [
  '../assets/audio/bgm/pyrefly_forest.ogg',
  '../assets/audio/bgm/event_maris_theme.ogg',
  '../assets/audio/bgm/bs_friend1.ogg'
];

const TEXT_SFX_PATH = '../assets/audio/se/SYS_text.ogg';

let friendship = 0;

const DIALOGUE = [
  {
    speaker: 'KEL',
    text: "Basil! Why is your house shaped like a shoe?",
    emotion: 'happy',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "My house isn't shaped like a shoe... it's shaped like a memory.",
    emotion: 'sad',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "It's literally a shoe, Basil.",
    emotion: 'happy',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'BASIL',
    text: "I found something... on the ground...",
    emotion: 'sad',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "MARI... SHES.... IN.. M......",
    emotion: 'angry',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: -2
  },
  {
    speaker: null,
    text: "Basil disappears.",
    emotion: 'neutral',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "Omori wakes up in White Space.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "Omori finds a knife lying on the white floor.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "Omori stabs himself.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "Omori wakes up again.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "Omori enters a door.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "Omori! You're here! We're going to the picnic.",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "Yeah! We need to see Mari and ask if she's seen Basil!",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "And don't make it weird this time, Kel.",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "The group heads to the picnic.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Hi everyone! I was wondering when you'd show up.",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'KEL',
    text: "Mari! Have you seen Basil?",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'MARI',
    text: "Um... no, I haven't seen him. I think he's just gone on a walk! Always remember to stay positive.",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: -1,
    choices: [
      { text: "Stay positive!", next: 237, friendship: +1 },
      { text: "That's creepy...", next: 239, friendship: -1 }
    ]
  },
  {
    speaker: 'HERO',
    text: "Stay positive...",
    emotion: 'sad',
    bg: BG.PICNIC,
    portrait: PORTRAITS.HERO,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "See! Mari knows! Basil's just on a walk!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "She sounds creepy when she says that.",
    emotion: 'angry',
    bg: BG.PICNIC,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "Mari's smile doesn't flicker.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "Basil? Where did you go?",
    emotion: 'sad',
    bg: BG.PICNIC,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "Maybe he's hiding again.",
    emotion: 'sad',
    bg: BG.PICNIC,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "Or maybe he doesn't want us to find him.",
    emotion: 'angry',
    bg: BG.PICNIC,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "Something rustles in the woods behind you.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Don't look! Just stay positive!",
    emotion: 'angry',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: -2
  }
];
