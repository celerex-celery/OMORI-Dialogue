const COLORS = {
  OMORI: '#666666',
  MARI: '#ffd700',
  KEL: '#4fc3f7',
  AUBREY: '#ff80ab',
  HERO: '#ffb74d',
  BASIL: '#aed581'
};

const PORTRAITS = {
  OMORI: null,
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
  VOID: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)'
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
    text: "Alright, team! Picnic time! Hero, did you bring the spaghetti?",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'HERO',
    text: "I did. I also brought extra garlic bread, just in case Aubrey decides to eat her feelings again.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "I don't eat my feelings, I eat spaghetti. There's a difference.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "Sure you don't, Aubrey. Sure you don't.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "Shut up, Kel! I can eat whatever I want!",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2,
    argue: true
  },
  {
    speaker: 'KEL',
    text: "Make me!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -2,
    argue: true
  },
  {
    speaker: 'HERO',
    text: "Guys... please...",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "I brought... um... some flowers. For the table. If that's okay.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: +2
  },
  {
    speaker: 'KEL',
    text: "Always okay, Basil! You know Mari would love flowers.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "Flowers are gonna die anyway. Just like everything else.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'MARI',
    text: "I would. Thank you, Basil.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'HERO',
    text: "She would. Always did.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "Can we please stop acting like she's gonna walk out of the woods and join us? It's creepy.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: 'KEL',
    text: "Aubrey! She's right here, in spirit! And in our hearts! And in that photo album Basil keeps showing everyone.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "That's exactly what's creepy, Kel.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "You're just grumpy because you didn't get garlic bread.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "I HATE YOU.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -3,
    argue: true
  },
  {
    speaker: 'KEL',
    text: "I hate you too!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -3,
    argue: true
  },
  {
    speaker: 'HERO',
    text: "You two don't hate each other. You're just... loud.",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "I just... I like taking pictures. So we don't forget.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: +1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: 'HERO',
    text: "Omori? You okay, buddy? You've been real quiet.",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'KEL',
    text: "He's always quiet! That's Omori! Strong, silent, mysterious!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "He's weird. That's what he is.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'MARI',
    text: "He's not weird. He's just... listening.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'KEL',
    text: "So! Who wants seconds? I made a deal with the forest spirits—",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'HERO',
    text: "Kel, you didn't make a deal with anything.",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "I traded them a shiny rock for eternal happiness! It's basically a contract.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "You traded them a pebble you found near the junkyard.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "It was a very special pebble!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "It was a rock, Kel. A dumb rock.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'BASIL',
    text: "The flowers... they're wilting again. Just like last time.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: -1
  },
  {
    speaker: 'HERO',
    text: "Basil, it's fine. They're probably just... tired.",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "They're not tired. They're dying. Everything's dying. Even the happy things.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: -2
  },
  {
    speaker: 'MARI',
    text: "Basil... take a picture. Before it's gone.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'BASIL',
    text: "I already did. I have hundreds. But they don't... they don't move anymore. They don't smile when I look back.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "Ugh. Can we talk about something else? Please? Something not depressing?",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "Like what?",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: 0
  },
  {
    speaker: 'AUBREY',
    text: "I don't know! Like... how Omori never says anything. Like how he just stares at us like we're made of glass.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "He's not staring! He's... thinking! Deeply!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "About what? The void under his bed? The knife in the drawer?",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: 'HERO',
    text: "Aubrey, stop it.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "Haha! Good one, Aubrey! You're so funny! Remember that time we all went to the bakery and Mari got flour on her nose?",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +2
  },
  {
    speaker: 'MARI',
    text: "I did! And Hero tried to wipe it off but he got it on his cheek instead.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'HERO',
    text: "I remember. You laughed for ten minutes.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +2
  },
  {
    speaker: 'AUBREY',
    text: "That was years ago.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "It was yesterday! Time's weird in Headspace! Everything's yesterday and tomorrow at once!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "Nothing's ever yesterday in Headspace if you don't let it be.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -1
  },
  {
    speaker: 'BASIL',
    text: "Except here it's never tomorrow.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: -1
  },
  {
    speaker: 'KEL',
    text: "Stop it. Just stop. We're happy here. We're together. That's all that matters.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +2
  },
  {
    speaker: 'AUBREY',
    text: "We're not together if half of us are pretending the other half is dead.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: 'HERO',
    text: "Kel...",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "No! It IS all that matters! As long as we're together, nothing bad can happen! Right, Omori? Right, Mari?",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "No it's not. None of this is okay. We're sitting on a picnic blanket in a forest made of paper and pretending our dead friend is gonna show up with lemonade.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -3
  },
  {
    speaker: 'MARI',
    text: "I'm not dead, Aubrey. I'm right here.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.MARI,
    friendship: +1
  },
  {
    speaker: 'AUBREY',
    text: "No you're not. You're not here. You're gone. And Omori—Omori knows. He knows what happened.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: 'KEL',
    text: "Stop lying, Aubrey! Mari's right here! You can't just say she's gone!",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: -1,
    argue: true
  },
  {
    speaker: 'AUBREY',
    text: "I'm not lying! She's DEAD, Kel! DEAD!",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -4,
    argue: true
  },
  {
    speaker: 'HERO',
    text: "Aubrey, that's enough!",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: -1
  },
  {
    speaker: 'AUBREY',
    text: "No! Someone has to say it!",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: -2
  },
  {
    speaker: 'HERO',
    text: "We should go back. Before it gets dark. Before the forest... changes.",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "If I take a picture now... will you be in it? All of you? Even Mari?",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: +1
  },
  {
    speaker: 'MARI',
    text: "Only if you remember to develop it.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.MARI,
    friendship: +2
  },
  {
    speaker: 'KEL',
    text: "...I miss her.",
    emotion: 'happy',
    bg: BG.FOREST,
    portrait: PORTRAITS.KEL,
    friendship: +2
  },
  {
    speaker: 'HERO',
    text: "We all do.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.HERO,
    friendship: +2
  },
  {
    speaker: 'AUBREY',
    text: "I miss her too. I just... I didn't know how to say it without breaking.",
    emotion: 'angry',
    bg: BG.FOREST,
    portrait: PORTRAITS.AUBREY,
    friendship: +1
  },
  {
    speaker: 'BASIL',
    text: "Then don't say it. Just... take the picture.",
    emotion: 'sad',
    bg: BG.FOREST,
    portrait: PORTRAITS.BASIL,
    friendship: +2
  },
  {
    speaker: 'OMORI',
    text: "...",
    emotion: 'neutral',
    bg: BG.FOREST,
    portrait: PORTRAITS.OMORI,
    friendship: 0
  },
  {
    speaker: null,
    text: "The shutter clicks. The sound is too loud. Too final.",
    emotion: 'neutral',
    bg: BG.VOID,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  },
  {
    speaker: null,
    text: "Blackout.",
    emotion: 'neutral',
    bg: BG.VOID,
    portrait: PORTRAITS.BLANK,
    friendship: 0
  }
];
