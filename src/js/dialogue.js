const COLORS = {
  OMORI: '#666666',
  MARI: '#ffd700',
  KEL: '#4fc3f7',
  AUBREY: '#ff80ab',
  HERO: '#ffb74d',
  BASIL: '#aed581',
  NOSE: '#ffffff',
  BERLY: '#ff69b4'
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
  NOSE: {
    neutral: '../assets/images/portraits/NOSE/NOSE.png',
    happy: '../assets/images/portraits/NOSE/NOSE.png',
    sad: '../assets/images/portraits/NOSE/NOSE.png',
    angry: '../assets/images/portraits/NOSE/NOSE.png'
  },
  BERLY: {
    neutral: '../assets/images/portraits/BERLY/BERLY.png',
    happy: '../assets/images/portraits/BERLY/BERLY.png',
    sad: '../assets/images/portraits/BERLY/BERLY.png',
    angry: '../assets/images/portraits/BERLY/BERLY.png'
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
  PICNIC: 'linear-gradient(#2d5a27 0%, #1a3a1a 100%)',
  VAST_FOREST: 'linear-gradient(#1a2e1a 0%, #0d1a0d 100%)'
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
    text: "BASIL! Why is your house shaped like a shoe?",
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
    text: "It's literally a shoe, BASIL.",
    emotion: 'happy',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'BASIL',
    text: "What is this photo? It wasn't in my photo album...",
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
    text: "BASIL disappears.",
    emotion: 'neutral',
    bg: BG.SHOE_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "OMORI wakes up in White Space.",
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
    text: "OMORI finds a knife lying on the white floor.",
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
    text: "OMORI stabs himself.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "OMORI wakes up again.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "OMORI enters a door.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "OMORI! You're here! We're going to the picnic.",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "Yeah! We need to see MARI and ask if she's seen BASIL!",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "And don't make it weird this time, KEL.",
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
    text: "MARI! Have you seen BASIL?",
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
    friendship: -1
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
    text: "See! MARI knows! BASIL's just on a walk!",
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
    speaker: 'MARI',
    text: "Don't look! Just stay positive!",
    emotion: 'angry',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: -2
  },
  {
    speaker: 'HERO',
    text: "We should go east to talk to people to see if they saw BASIL.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: null,
    text: "They go east.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "Hey, NOSE! Have you seen BASIL?",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'NOSE',
    text: "NOSE Goes",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.NOSE,
    friendship: 0
  },
  {
    speaker: null,
    text: "You see a ladder going up.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    choices: [
      { text: "Go up ladder", next: 31 },
      { text: "Go back to the picnic", next: 33 }
    ]
  },
  {
    speaker: null,
    text: "You go near a pink ladder.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    choices: [
      { text: "Go up ladder", next: 32 }
    ]
  },
  {
    speaker: null,
    text: "OMORI is afraid of heights.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.OMORI,
    friendship: 0,
    choices: [
      { text: "Go back", next: 33 },
      { text: "Go up ladder", next: 32 }
    ]
  },
  {
    speaker: 'BERLY',
    text: "VANNN WHY DID YOU DO THAT!!!!",
    emotion: 'angry',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BERLY,
    friendship: -1
  },
  {
    speaker: 'BERLY',
    text: "Oh, hey!!!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BERLY,
    friendship: +1
  },
  {
    speaker: 'BERLY',
    text: "VAN here used his arms and swung too hard, and now the ball's gone far off somewhere... Dumb VAN...",
    emotion: 'sad',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BERLY,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Oh, I saw the tetherball going SOUTH into the VAST FOREST.",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'BERLY',
    text: "Into the VAST FOREST? Ugh... We'll never find it now. It might as well be lost forever!",
    emotion: 'sad',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BERLY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "Oh we can go there!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'BERLY',
    text: "Heh. You sure you want to do that? VAST FOREST is a pretty dangerous place, y'know?",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BERLY,
    friendship: 0
  },
  {
    speaker: 'BERLY',
    text: "One time, I even got into a super grizzly brawl with this ugly plant creature with dead, empty eyes and a gaping mouth.",
    emotion: 'angry',
    bg: BG.PICNIC,
    portrait: PORTRAITS.BERLY,
    friendship: 0
  },
  {
    speaker: null,
    text: "They go to the VAST FOREST.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "Look! A watermelon!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "I broke it.",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: null,
    text: "They found a white big bone.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "(That's later on.)",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "They go WEST of the VAST FOREST.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "There's the tetherball!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'HERO',
    text: "VAN really did swing too hard.",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  }
];
