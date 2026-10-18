let idx = 0;
let typeInterval = null;
let frameCount = 0;
let frameTarget = 0;
let rafId = null;
let clams = 0;

const bgEl = document.getElementById('bg');
const sceneEl = document.getElementById('scene');
const portraitImg = document.getElementById('portrait-img');
const portraitWrap = document.getElementById('portrait');
const namebox = document.getElementById('namebox');
const friendshipEl = document.getElementById('friendship');
const clamsEl = document.getElementById('clams');
const textEl = document.getElementById('text');
const emotionEl = document.getElementById('emotion');
const continueEl = document.getElementById('continue');
const endScreen = document.getElementById('end-screen');
const endTitle = document.getElementById('end-title');
const friendshipFinal = document.getElementById('friendship-final');
const endText = document.getElementById('end-text');
const restartBtn = document.getElementById('restart-btn');
const choicesEl = document.createElement('div');
choicesEl.id = 'choices';
document.getElementById('ui').appendChild(choicesEl);

function coloredText(d) {
  let t = d.text;
  if (d.highlight) {
    const idx = t.indexOf(d.highlight);
    if (idx !== -1) {
      t = t.slice(0, idx) + `<span style="color: purple;">${d.highlight}</span>` + t.slice(idx + d.highlight.length);
    }
  }
  return t;
}

function updateFriendship(change) {
  friendship += change;
  if (friendship < 0) friendship = 0;
  friendshipEl.textContent = 'FRIENDSHIP: ' + friendship;
}

function updateClams(change) {
  clams += change;
  if (clams < 0) clams = 0;
  clamsEl.textContent = 'CLAMS: ' + clams;
}

function stopTyping() {
  if (typeInterval) {
    clearInterval(typeInterval);
    typeInterval = null;
  }
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  frameCount = 0;
  frameTarget = 0;
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

function showChoices(choices) {
  choicesEl.innerHTML = '';
  continueEl.style.opacity = '0';
  choices.forEach((c) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = c.text;
    btn.addEventListener('click', () => {
      choicesEl.innerHTML = '';
      if (c.friendship !== undefined) {
        updateFriendship(c.friendship);
      }
      idx = c.next;
      showDialogue(idx);
    });
    choicesEl.appendChild(btn);
  });
}

function frameLoop() {
  if (frameTarget <= 0) {
    rafId = null;
    return;
  }
  frameCount++;
  if (frameCount >= frameTarget) {
    frameCount = 0;
    frameTarget = 0;
    rafId = null;
    next();
    return;
  }
  rafId = requestAnimationFrame(frameLoop);
}

function applyDialogue(d) {
  try {
    bgEl.style.background = d.bg || BG.FOREST;

    if (d.bg === BG.WHITE_SPACE) {
      audio.playBGM('white');
    } else if (d.speaker === 'MARI' || d.bg === BG.PICNIC) {
      audio.playBGM('maris', d.speaker);
    } else {
      audio.playBGM('forest');
    }
  } catch (e) {
    console.error('Audio error:', e);
  }

  try {
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

    emotionEl.style.display = '';
    emotionEl.className = `emotion-${d.emotion || 'neutral'}`;
    emotionEl.textContent = (d.emotion || 'neutral').toUpperCase();

    textEl.style.color = d.textColor || '#fff';
    textEl.style.fontFamily = d.fontFamily ? `'${d.fontFamily}', monospace` : '';

    textEl.textContent = '';
    textEl.classList.remove('typewriter');
    void textEl.offsetWidth;
    textEl.classList.add('typewriter');

    const imageSlideEl = document.getElementById('image-slide');

    if (d.blackScreen) {
      bgEl.style.background = '#000000';
      bgEl.style.transition = 'none';
      textEl.style.display = 'block';
      textEl.style.textAlign = 'center';
      textEl.style.position = 'absolute';
      textEl.style.left = '50%';
      textEl.style.top = '50%';
      textEl.style.transform = 'translate(-50%, -50%)';
      textEl.style.width = 'auto';
      textEl.style.margin = '0';
      portraitWrap.style.opacity = '0';
      namebox.style.display = 'none';
      emotionEl.style.display = 'none';
      document.getElementById('top-bar').style.display = 'none';
      document.getElementById('text').style.maxHeight = 'none';
      const bgmEl = document.getElementById('bgm');
      bgmEl.pause();
    } else {
      textEl.style.textAlign = 'left';
      textEl.style.position = 'static';
      textEl.style.transform = 'none';
      textEl.style.width = '100%';
      textEl.style.margin = '';
      bgEl.style.transition = 'background 1s ease-in-out';
      document.getElementById('top-bar').style.display = '';
      document.getElementById('text').style.maxHeight = '150px';
      const bgmEl = document.getElementById('bgm');
      if (bgmEl.src && bgmEl.paused) {
        bgmEl.play().catch(() => {});
      }
    }

    if (d.imageSlide) {
      imageSlideEl.style.display = 'block';
      imageSlideEl.style.backgroundImage = `url('${d.imageSlide}')`;
      imageSlideEl.style.backgroundSize = 'contain';
      imageSlideEl.style.backgroundPosition = 'center';
      imageSlideEl.style.backgroundRepeat = 'no-repeat';
      portraitWrap.style.opacity = '0';
      namebox.style.display = 'none';
      emotionEl.style.display = 'none';
      frameCount = 0;
      frameTarget = 120;
      if (!rafId) {
        rafId = requestAnimationFrame(frameLoop);
      }
    } else {
      imageSlideEl.style.display = 'none';
      textEl.style.display = 'block';
      frameCount = 0;
      frameTarget = 0;
    }

    if (d.shake) {
      textEl.classList.add('shake-text');
    } else {
      textEl.classList.remove('shake-text');
    }

    if (d.argue) {
      sceneEl.classList.add('argue-flash');
    } else {
      sceneEl.classList.remove('argue-flash');
    }

    if (d.friendship !== undefined) {
      updateFriendship(d.friendship);
    }

    if (d.clams !== undefined) {
      updateClams(d.clams);
    }

    playTextSfx();

    if (d.choices) {
      typeText(d.text, () => {
        if (d.highlight) textEl.innerHTML = coloredText(d);
        continueEl.style.opacity = '0';
        showChoices(d.choices);
      });
    } else if (d.instant) {
      textEl.innerHTML = d.highlight ? coloredText(d) : d.text;
      textEl.classList.remove('typewriter');
      continueEl.style.opacity = '0.7';
    } else {
      choicesEl.innerHTML = '';
      typeText(d.text, () => {
        if (d.highlight) textEl.innerHTML = coloredText(d);
        continueEl.style.opacity = '0.7';
      });
    }
  } catch (e) {
    textEl.textContent = 'ERROR: ' + e.message;
    textEl.style.color = '#ff0000';
    console.error('Renderer error:', e);
  }
}

function showDialogue(i) {
  if (i >= DIALOGUE.length) {
    endScreen.style.display = 'flex';
    friendshipFinal.textContent = 'FRIENDSHIP: ' + friendship;
    endText.textContent = 'Thanks for playing.';
    continueEl.style.opacity = '0';
    choicesEl.innerHTML = '';
    return;
  }

  const d = DIALOGUE[i];

  if (d.fade) {
    sceneEl.classList.add('scene-fade-out');
    setTimeout(() => {
      sceneEl.classList.remove('scene-fade-out');
      applyDialogue(d);
    }, 1000);
    return;
  }

  applyDialogue(d);
}

function next() {
  if (idx >= DIALOGUE.length) return;
  const d = DIALOGUE[idx];
  stopTyping();

  if (textEl.textContent !== d.text) {
    textEl.innerHTML = d.highlight ? coloredText(d) : d.text;
    textEl.classList.remove('typewriter');
    continueEl.style.opacity = '0.7';
    playTextSfx();
    return;
  }

  idx++;
  showDialogue(idx);
}

function frameLoop() {
  if (frameTarget <= 0) {
    rafId = null;
    return;
  }
  frameCount++;
  if (frameCount >= frameTarget) {
    frameCount = 0;
    frameTarget = 0;
    rafId = null;
    next();
    return;
  }
  rafId = requestAnimationFrame(frameLoop);
}

function initGame() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (choicesEl && choicesEl.children.length > 0) return;
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
    clams = 0;
    endScreen.style.display = 'none';
    showDialogue(0);
  });

  showDialogue(0);
}

window.onerror = function (msg, url, line, col, error) {
  if (textEl) {
    textEl.textContent = 'JS ERROR: ' + (msg || 'unknown');
    textEl.style.color = '#ff0000';
  }
  console.error('Uncaught error:', msg, error);
  return true;
};
