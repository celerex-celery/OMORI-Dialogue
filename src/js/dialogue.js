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
  SNAKE: {
    neutral: '../assets/images/portraits/SNAKE/SNAKE.png',
    happy: '../assets/images/portraits/SNAKE/SNAKE.png',
    sad: '../assets/images/portraits/SNAKE/SNAKE.png',
    angry: '../assets/images/portraits/SNAKE/SNAKE.png'
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
  FOREST: '../assets/images/backgrounds/FOREST.png',
  WHITE: '../assets/images/backgrounds/WHITE.png',
  KITCHEN: '../assets/images/backgrounds/KITCHEN.png',
  VOID: '../assets/images/backgrounds/VOID.png',
  BASIL_HOUSE: '../assets/images/backgrounds/BASIL_HOUSE.png',
  WHITE_SPACE: '../assets/images/backgrounds/WHITE_SPACE.png',
  FARAWAY_TOWN: '../assets/images/backgrounds/FARAWAY_TOWN.png',
  PICNIC: '../assets/images/backgrounds/PICNIC.png',
  VAST_FOREST: '../assets/images/backgrounds/VAST_FOREST.png',
  LAKE: '../assets/images/backgrounds/LAKE.png',
  BOATHOUSE: '../assets/images/backgrounds/BOATHOUSE.png',
  PLAYGROUND: '../assets/images/backgrounds/PLAYGROUND.png',
  STUMP: '../assets/images/backgrounds/STUMP.png',
  LOST_LIBRARY: '../assets/images/backgrounds/LOST_LIBRARY.png',
  ABANDONED_HOUSE: '../assets/images/backgrounds/ABANDONED_HOUSE.png',
  SUNNY_FARM: '../assets/images/backgrounds/SUNNY_FARM.png',
  ORANGE_OASIS: '../assets/images/backgrounds/ORANGE_OASIS.png',
  SWEETHEART_CASTLE: '../assets/images/backgrounds/SWEETHEART_CASTLE.png',
  PYREFLY_FOREST: '../assets/images/backgrounds/PYREFLY_FOREST.png',
  BLACK_SPACE: '../assets/images/backgrounds/BLACK_SPACE.png',
  LAST_RESORT: '../assets/images/backgrounds/LAST_RESORT.png',
  HUMPHREY: '../assets/images/backgrounds/HUMPHREY.png',
  HEADSPACE: '../assets/images/backgrounds/HEADSPACE.png'
};

const BG_FALLBACK = {
  FOREST: 'linear-gradient(#2d5a27 0%, #1a3a1a 100%)',
  WHITE: 'radial-gradient(circle at center, #ffffff 0%, #e0e0e0 40%, #c0c0c0 100%)',
  KITCHEN: 'linear-gradient(#f5e6d3 0%, #e8d5c0 100%)',
  VOID: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
  BASIL_HOUSE: 'linear-gradient(#8b4513 0%, #5d2e1c 100%)',
  WHITE_SPACE: 'radial-gradient(circle at center, #ffffff 0%, #e0e0e0 40%, #c0c0c0 100%)',
  FARAWAY_TOWN: 'linear-gradient(#4a6fa5 0%, #2c3e50 100%)',
  PICNIC: 'linear-gradient(#2d5a27 0%, #1a3a1a 100%)',
  VAST_FOREST: 'linear-gradient(#1a2e1a 0%, #0d1a0d 100%)',
  LAKE: 'linear-gradient(#1a5a8a 0%, #0d2e4a 100%)',
  BOATHOUSE: 'linear-gradient(#3d2a1a 0%, #1a100a 100%)',
  PLAYGROUND: 'linear-gradient(#5a4a2d 0%, #3a2e1a 100%)',
  STUMP: 'linear-gradient(#3d5a2d 0%, #2a3a1a 100%)',
  LOST_LIBRARY: 'linear-gradient(#1a1a2e 0%, #0a0a1a 100%)',
  ABANDONED_HOUSE: 'linear-gradient(#2a1a1a 0%, #1a0a0a 100%)',
  SUNNY_FARM: 'linear-gradient(#6a8a2d 0%, #4a5a1a 100%)',
  ORANGE_OASIS: 'linear-gradient(#aa6a2d 0%, #7a4a1a 100%)',
  SWEETHEART_CASTLE: 'linear-gradient(#8a2d5a 0%, #5a1a3a 100%)',
  PYREFLY_FOREST: 'linear-gradient(#1a3a3a 0%, #0a1a1a 100%)',
  BLACK_SPACE: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)',
  LAST_RESORT: 'linear-gradient(#1a1a2e 0%, #0a0a1a 100%)',
  HUMPHREY: 'linear-gradient(#2a2a3e 0%, #1a1a2a 100%)',
  HEADSPACE: 'linear-gradient(#3a5a7a 0%, #2a3a4a 100%)'
};

const BATTLE_BG = {
  NORMAL: 'radial-gradient(ellipse at center, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
  BOSS: 'radial-gradient(ellipse at center, #3a1a1a 0%, #2a0a0a 50%, #1a0a0a 100%)',
  MARI: 'radial-gradient(ellipse at center, #3a3a1a 0%, #2a2a0a 50%, #1a1a0a 100%)',
  BASIL: 'radial-gradient(ellipse at center, #1a3a2a 0%, #0a2a1a 50%, #0a1a0a 100%)',
  OMORI: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)',
  SWEETHEART: 'radial-gradient(ellipse at center, #3a1a3a 0%, #2a0a2a 50%, #1a0a1a 100%)',
  HUMPHREY: 'radial-gradient(ellipse at center, #2a2a3a 0%, #1a1a2a 50%, #0a0a1a 100%)',
  PLUTO: 'radial-gradient(ellipse at center, #1a1a3a 0%, #0a0a2a 50%, #0a0a1a 100%)',
  SPROUT_MOLE: 'radial-gradient(ellipse at center, #2a3a1a 0%, #1a2a0a 50%, #0a1a0a 100%)',
  LOST_SPROUT: 'radial-gradient(ellipse at center, #2a2a1a 0%, #1a1a0a 50%, #0a0a0a 100%)',
  HAPPY: 'radial-gradient(ellipse at center, #3a2a1a 0%, #2a1a0a 50%, #1a0a0a 100%)',
  ANGRY: 'radial-gradient(ellipse at center, #3a0a0a 0%, #2a0a0a 50%, #1a0a0a 100%)',
  SAD: 'radial-gradient(ellipse at center, #0a1a3a 0%, #0a0a2a 50%, #0a0a1a 100%)',
  NEUTRAL: 'radial-gradient(ellipse at center, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
  UNUSED: 'radial-gradient(ellipse at center, #1a2a3a 0%, #0a1a2a 50%, #0a0a1a 100%)'
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
    speaker: null,
    text: "OMORI wakes up in White Space.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "OMORI talks to MEWO",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'MEWO',
    text: "MEOW (Waiting for something to happen?)",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "OMORI enters a white door.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    fade: true
  },
  {
    speaker: 'HERO',
    text: "Omori! You're here!",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "Hey OMORI!",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "OMORI. DUMB KEL STOLE MY STUFFED TOY. CAN YOU FIND IT FOR ME PLEASE",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: -1,
    highlight: 'STUFFED TOY'
  },
  {
    speaker: null,
    text: "OMORI finds the stuffed toy.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "I didn't steal anything!",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "You totally did!",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'HERO',
    text: "Now, now. Let's all calm down. Aubrey, Kel... there's no need to fight.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "Hmph! Fine. But if my stuffed toy is missing, I'm blaming Kel.",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "Why does it always have to be MY fault?! I didn't even touch your dumb toy!",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'HERO',
    text: "Omori, could you help Aubrey look for it? It might be somewhere nearby.",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.HERO,
    friendship: +1
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
    text: "You search around Faraway Town. The toy isn't in the playground, or by the fountain, or near the stump where you all used to sit.",
    emotion: 'neutral',
    bg: BG.PLAYGROUND,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "Finally, you spot something pink caught on a low branch of the big tree in the center of town.",
    emotion: 'neutral',
    bg: BG.STUMP,
    portrait: PORTRAITS.BLANK,
    friendship: 0
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
    text: "You climb up and retrieve the stuffed toy. It's a little dirty, but otherwise fine.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "You found it! My Mr. Plantegg!",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: +2
  },
  {
    speaker: 'KEL',
    text: "Mr. Plantegg...? That's the stupidest name I've ever heard.",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "IT'S NOT STUPID! HE'S A PLANT AND AN EGG! IT MAKES PERFECT SENSE!",
    emotion: 'angry',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'HERO',
    text: "It's a very creative name, Aubrey. I like it.",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "See? Hero gets it. Thanks, Omori. Here, take this.",
    emotion: 'happy',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.AUBREY,
    friendship: +1,
    item: 'STICKER'
  },
  {
    speaker: null,
    text: "You received a STICKER!",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'SNAKE',
    text: "SSSSSSSsssssss. (going out, OMORI?)",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.SNAKE,
    friendship: 0
  },
  {
    speaker: 'SNAKE',
    text: "SSSSSSSsssssss (Heres 70 CLAMS)",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.SNAKE,
    friendship: 0,
    clams: +70
  },
  {
    speaker: null,
    text: "Something feels wrong. But you can't remember what.",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    textColor: 'red'
  },
  {
    speaker: 'KEL',
    text: "Hey, Basil said he had something important to show us. Something about... a photo?",
    emotion: 'happy',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: +2
  },
  {
    speaker: 'BASIL',
    text: "H-Hi guys!",
    emotion: 'happy',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: +3
  },
  {
    speaker: 'KEL',
    text: "HEY BASIL! Why is your house shaped like a shoe?",
    emotion: 'happy',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "My house isn't shaped like a shoe... it's shaped like a memory.",
    emotion: 'sad',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "It's literally a shoe, BASIL.",
    emotion: 'happy',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'BASIL',
    text: "Hmph. W-Well... I guess you're right.",
    emotion: 'sad',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: 0
  },
  {
    speaker: null,
    text: "(goes into BASIL's house)",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'BASIL',
    text: "Hey, wanna see my photo collection...",
    emotion: 'sad',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: +2
  },
  {
    speaker: 'BASIL',
    text: "What is this photo? It wasn't in my photo album...",
    emotion: 'sad',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "MARI.... SHES...",
    emotion: 'angry',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BASIL,
    friendship: -2,
    textColor: 'red',
    fontFamily: 'OMORI-CURSED'
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "Omori grabs Basil and drags him into the darkness.",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: -3,
    shake: true
  },
  {
    speaker: 'KEL',
    text: "B-BASIL?! WHERE DID HE GO?!",
    emotion: 'angry',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "HE WAS RIGHT HERE! DID YOU SEE THAT?!",
    emotion: 'angry',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'HERO',
    text: "He just... vanished? That's impossible.",
    emotion: 'sad',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.HERO,
    friendship: -1
  },
  {
    speaker: null,
    text: "Basil is gone. No trace. No sound. Just... gone.",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    shake: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/lookatallofus1.png'
  },
  {
    speaker: null,
    text: "They're sad now.",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    shake: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/lookatallofus2.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/lookatalofus3.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/BASILOMORIPHOTO1.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/BASILOMORIPHOTO2.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/BASILOMORIPHOTO3.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/THESEAREALLOFTHEMEMORIESTOGETHER1.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/THESEAREALLOFTHEMEMORIESTOGETHER2.png'
  },
  {
    speaker: null,
    text: "",
    emotion: 'neutral',
    bg: BG.BASIL_HOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    blackScreen: true,
    imageSlide: '../assets/images/memories/THESEAREALLOFTHEMEMORIESTOGETHER3.png'
  },
  {
    speaker: null,
    text: "OMORI wakes up in White Space.",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    fade: true
  },
  {
    speaker: null,
    text: "OMORI talks to MEWO",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'MEWO',
    text: "MEOW (Theres nothing to do except...)",
    emotion: 'neutral',
    bg: BG.WHITE_SPACE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "A sharp object falls nearby",
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
    friendship: 0,
    fade: true
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
    text: "OMORI enters a white door.",
    emotion: 'neutral',
    bg: BG.FARAWAY_TOWN,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    fade: true
  },
  {
    speaker: 'HERO',
    text: "Oh, OMORI! You're here! We all have been worried sick!",
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
    text: "YEAH, We thought you vanished...",
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
    text: "Oh my, Basil? Let me think... He was here earlier, helping me set out the blanket. He said something about the light being perfect for photos today.",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "What time was that? He wasn't there when we arrived.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Hmm, maybe an hour ago? He ran off saying something about 'catching the morning light on the water.' You know Basil - once he gets an idea for a photo, nothing stops him!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'HERO',
    text: "That does sound like him. But he'd usually tell us if he was leaving...",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Oh, I'm sure he just got distracted! He probably found a really interesting bug or a weird rock. He'll turn up when he's hungry - I made his favorite sandwiches!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "Your sandwiches are the best, Mari! He'll definitely come back for those!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "...Yeah. His favorite. Turkey and lettuce, crusts cut off.",
    emotion: 'sad',
    bg: BG.PICNIC,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'MARI',
    text: "Exactly! So don't worry, okay? He'll turn up. Now, who's hungry? I have potato salad too!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +1
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
    text: "Oh, you guys should check by the lake! I saw some pretty water lilies blooming there this morning. Perfect for photos!",
    emotion: 'happy',
    bg: BG.PICNIC,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'HERO',
    text: "The lake sounds like a good place to start. Let's go check it out.",
    emotion: 'neutral',
    bg: BG.PICNIC,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: null,
    text: "The group walks toward the lake, the afternoon sun filtering through the trees.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    fade: true
  },
  {
    speaker: null,
    text: "The lake comes into view - calm water reflecting the sky, lily pads dotting the surface.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "WOAH! Look at all those lily pads! They're everywhere!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "It's... actually really pretty. Basil would love this.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "Spread out. Check near the water's edge, the dock, the boathouse. Basil's small, he could be anywhere.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "The group splits up. You walk along the shoreline, the mud squelching under your shoes.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "Ahead, an old wooden dock extends into the water. A small rowboat is tied to it.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "Over here! I found something!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.AUBREY,
    friendship: +1
  },
  {
    speaker: null,
    text: "You rush over. Aubrey is crouched by the dock, holding a damp camera strap.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "Is that... Basil's camera?",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "Yeah. It's wet. Like someone dropped it in the water recently.",
    emotion: 'sad',
    bg: BG.LAKE,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'HERO',
    text: "That means he was here recently. He couldn't have gone far.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "Unless... someone took him from here.",
    emotion: 'angry',
    bg: BG.LAKE,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "What? Who would do that?",
    emotion: 'sad',
    bg: BG.LAKE,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "A chill runs down your spine. You know exactly what happened. But you can't tell them.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.OMORI,
    friendship: 0,
    shake: true
  },
  {
    speaker: null,
    text: "Footsteps on the grass behind you. Light. Deliberate. You all turn.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true
  },
  {
    speaker: 'MARI',
    text: "Oh my! What are you all doing by the water? You'll catch a cold!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "MARI! When did you get here?",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'MARI',
    text: "I followed you! Picnic food gets cold fast, so I brought a basket down. Here, have some sandwiches!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'AUBREY',
    text: "Mari... did you see Basil? His camera is here. Wet.",
    emotion: 'sad',
    bg: BG.LAKE,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'MARI',
    text: "Oh dear... a wet camera? That's not good for photos at all. But I'm sure he's fine! He probably just went to dry it off.",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "Yeah! He's probably at the boathouse or something!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: null,
    text: "Mari hands out sandwiches. The group eats in uneasy silence. You stare at the camera strap in Aubrey's hand.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true
  },
  {
    speaker: 'HERO',
    text: "We should check the boathouse. And the trail that goes around the lake.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "I'll stay here with the picnic! Just in case Basil comes back hungry!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "Your sandwich is... really good, Mari. As always.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Oh, thank you, Aubrey! I added a little honey to the ham this time. Thought it might be a nice surprise.",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "You remember that? From years ago?",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Of course! I remember everyone's favorites. Kel - extra pickles. Hero - no crusts. Aubrey - honey ham. Basil - turkey, no crusts. And Omori...",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'MARI',
    text: "Omori, you always just ate whatever was given to you. Never complained. Such a good listener.",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: 0
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "Her eyes linger on you a moment too long. The smile doesn't waver.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true,
    shake: true
  },
  {
    speaker: 'AUBREY',
    text: "We should go. The boathouse first.",
    emotion: 'neutral',
    bg: BG.BOATHOUSE,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Be careful near the water! The dock gets slippery. And don't stay out too late - it gets cold fast!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "We will. Stay safe, Mari.",
    emotion: 'neutral',
    bg: BG.LAKE,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'MARI',
    text: "Always! Now go on, before the sandwiches get cold!",
    emotion: 'happy',
    bg: BG.LAKE,
    portrait: PORTRAITS.MARI,
    friendship: 0
  },
  {
    speaker: null,
    text: "The group splits up. Aubrey grabs your arm, pulling you toward the boathouse. Mari waves, picnic basket in hand, watching until you're out of sight.",
    emotion: 'neutral',
    bg: BG.BOATHOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    instant: true
  },
  {
    speaker: null,
    text: "The boathouse looms ahead - weathered wood, peeling paint, a single window dark as an eye.",
    emotion: 'neutral',
    bg: BG.BOATHOUSE,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    fade: true
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
      { text: "Go up ladder", next: 60 },
      { text: "Go back to the picnic", next: 62 }
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
      { text: "Go up ladder", next: 61 }
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
      { text: "Go back", next: 52 },
      { text: "Go up ladder", next: 51 }
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
    text: "WOAH A WATERMELON",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: null,
    text: "Should AUBREY break it?",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    choices: [
      { text: "YES", next: 61 },
      { text: "NO", next: 70 }
    ]
  },
  {
    speaker: 'AUBREY',
    text: "IM GONNA BREAK THE WATERMELON",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -3,
    argue: true
  },
  {
    speaker: null,
    text: "AUBREY breaks the watermelon. Juice splatters all over KEL's face.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: 'KEL',
    text: "AUBREY!",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "WHAT IS WRONG WITH YOU!",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -2,
    argue: true
  },
  {
    speaker: 'AUBREY',
    text: "Well you shouldn't have been standing right next to it, Kel. It's not my fault you got juice on your face.",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2,
    argue: true
  },
  {
    speaker: 'KEL',
    text: "IT WAS A WATERMELON! YOU DIDN'T HAVE TO SMASH IT!",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -2,
    argue: true
  },
  {
    speaker: 'AUBREY',
    text: "It was just a watermelon. Calm down.",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1,
    argue: true
  },
  {
    speaker: 'HERO',
    text: "Guys... please stop.",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.OMORI,
    friendship: 0
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
    speaker: 'BERLY',
    text: "Oh! You found it! Thanks! Here, take this!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BERLY,
    friendship: +1,
    clams: +40
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
  },
  {
    speaker: 'AUBREY',
    text: "Wait... what about BASIL?",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "BERLY. Did you see BASIL?",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'BERLY',
    text: "I... I woke up at 3:33 AM.",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BERLY,
    friendship: -1
  },
  {
    speaker: 'BERLY',
    text: "I heard shouting. Screaming. Really loud.",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BERLY,
    friendship: -1
  },
  {
    speaker: 'BERLY',
    text: "When I went outside... there was a flower crown on my doorstep.",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BERLY,
    friendship: -1
  },
  {
    speaker: null,
    text: "BERLY places the flower crown gently into KEL's hands.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "You got FLOWER CROWN",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "Oh no... that's BASIL's flower crown...",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: null,
    text: "There's blood on it.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "BASIL...",
    emotion: 'sad',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -2
  },
  {
    speaker: 'HERO',
    text: "We have to find him.",
    emotion: 'angry',
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
  },
  {
    speaker: 'AUBREY',
    text: "Wait, another watermelon!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: +1
  },
  {
    speaker: null,
    text: "AUBREY smashes the watermelon.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.BLANK,
    friendship: 0,
    argue: true
  },
  {
    speaker: 'AUBREY',
    text: "Another one bites the dust!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: null,
    text: "Watermelon juice splatters all over AUBREY.",
    emotion: 'neutral',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "HAHAHA! AUBREY you're covered in juice!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +2
  },
  {
    speaker: 'AUBREY',
    text: "It's not funny, Kel!",
    emotion: 'angry',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "It totally is!",
    emotion: 'happy',
    bg: BG.VAST_FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'HERO',
    text: "Guys, we should keep moving.",
    emotion: 'neutral',
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
