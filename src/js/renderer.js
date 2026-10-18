let idx = 0;
let typeInterval = null;

const bgEl = document.getElementById('bg');
const portraitImg = document.getElementById('portrait-img');
const portraitWrap = document.getElementById('portrait');
const namebox = document.getElementById('namebox');
const friendshipEl = document.getElementById('friendship');
const textEl = document.getElementById('text');
const emotionEl = document.getElementById('emotion');
const continueEl = document.getElementById('continue');
const endScreen = document.getElementById('end-screen');
const endTitle = document.getElementById('end-title');
const friendshipFinal = document.getElementById('friendship-final');
const endText = document.getElementById('end-text');
const restartBtn = document.getElementById('restart-btn');

function updateFriendship(change) {
  friendship += change;
  if (friendship < 0) friendship = 0;
  friendshipEl.textContent = 'FRIENDSHIP: ' + friendship;
}

function stopTyping() {
  if (typeInterval) {
    clearInterval(typeInterval);
    typeInterval = null;
  }
}

function playTextSfx() {
  const textSfx = document.getElementById('textSfx');
  textSfx.volume = 0.25;
  textSfx.currentTime = 0;
  textSfx.play().catch(() => {});
}

function typeText(text, callback) {
  stopTyping();
  textEl.textContent = '';
  let i = 0;
  typeInterval = setInterval(() => {
    textEl.textContent += text.charAt(i);
    playTextSfx();
    i++;
    if (i >= text.length) {
      clearInterval(typeInterval);
      typeInterval = null;
      if (callback) callback();
    }
  }, 35);
}

function showDialogue(i) {
  if (i >= DIALOGUE.length) {
    endScreen.style.display = 'flex';
    endTitle.textContent = 'END';
    friendshipFinal.textContent = 'FINAL FRIENDSHIP: ' + friendship;
    endText.textContent = 'The picnic is over. Everyone went home. Or somewhere else. Omori stayed silent, as always.';
    return;
  }

  const d = DIALOGUE[i];

  bgEl.style.background = d.bg || BG.FOREST;

  if (d.argue) {
    bgEl.classList.add('argue-flash');
    setTimeout(() => bgEl.classList.remove('argue-flash'), 400);
  }

  portraitWrap.style.opacity = d.portrait ? '1' : '0';

  let imgSrc = null;
  if (d.speaker && PORTRAITS[d.speaker]) {
    const char = PORTRAITS[d.speaker];
    imgSrc = char[d.emotion] || char.neutral || null;
  } else if (d.portrait && PORTRAITS[d.portrait]) {
    imgSrc = PORTRAITS[d.portrait];
  }

  if (imgSrc) {
    portraitImg.style.backgroundImage = `url('${imgSrc}')`;
    portraitImg.style.backgroundSize = 'cover';
    portraitImg.style.backgroundPosition = 'center';
    portraitImg.style.backgroundRepeat = 'no-repeat';
  } else {
    portraitImg.style.backgroundImage = 'none';
  }

  if (d.speaker) {
    namebox.textContent = d.speaker;
    namebox.style.color = COLORS[d.speaker] || '#fff';
    namebox.style.borderColor = COLORS[d.speaker] || '#444';
    namebox.style.display = 'inline-block';
  } else {
    namebox.style.display = 'none';
  }

  emotionEl.className = `emotion-${d.emotion || 'neutral'}`;
  emotionEl.textContent = (d.emotion || 'neutral').toUpperCase();

  textEl.textContent = '';
  textEl.classList.remove('typewriter');
  void textEl.offsetWidth;
  textEl.classList.add('typewriter');

  continueEl.style.opacity = '0';

  if (d.friendship !== undefined) {
    updateFriendship(d.friendship);
  }

  playTextSfx();

  typeText(d.text, () => {
    continueEl.style.opacity = '0.7';
  });
}

function next() {
  const d = DIALOGUE[idx];
  stopTyping();

  if (textEl.textContent !== d.text) {
    textEl.textContent = d.text;
    textEl.classList.remove('typewriter');
    continueEl.style.opacity = '0.7';
    playTextSfx();
    return;
  }

  idx++;
  showDialogue(idx);
}

function initGame() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      next();
    }
  });

  continueEl.addEventListener('click', (e) => {
    e.stopPropagation();
    next();
  });

  restartBtn.addEventListener('click', () => {
    idx = 0;
    friendship = 0;
    endScreen.style.display = 'none';
    showDialogue(0);
  });

  showDialogue(0);
}
