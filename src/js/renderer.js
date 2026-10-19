let idx = 0;
let typeInterval = null;
let frameCount = 0;
let frameTarget = 0;
let rafId = null;
let clams = 0;
let history = [];
let visitedRewards = new Set();
let achievements = new Set();
let inventory = new Set();
let skills = ['ATTACK', 'GUARD', 'RUN', 'ITEM'];
let menuOpen = false;

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

const achBtn = document.createElement('button');
achBtn.id = 'ach-btn';
achBtn.textContent = 'ACHIEVEMENTS: 0/0';
achBtn.onclick = toggleAchievementMenu;
achBtn.style.cssText = 'margin-top:20px;padding:14px 20px;background:#2a2a2a;border:4px solid #ffd700;color:#ffd700;font-family:inherit;font-size:18px;font-weight:bold;cursor:pointer;border-radius:8px;min-width:280px;';
document.getElementById('top-bar').appendChild(achBtn);

const menuBtn = document.createElement('button');
menuBtn.id = 'menu-btn';
menuBtn.textContent = 'MENU';
menuBtn.onclick = toggleMainMenu;
menuBtn.style.cssText = 'margin-top:20px;padding:14px 20px;background:#2a2a2a;border:4px solid #ff80ab;color:#ff80ab;font-family:inherit;font-size:18px;font-weight:bold;cursor:pointer;border-radius:8px;min-width:140px;';
document.getElementById('top-bar').appendChild(menuBtn);

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
  checkAchievements();
}

const ACHIEVEMENTS = [
  { id: 'first_steps', name: 'First Steps', desc: 'View your first dialogue line', hidden: false },
  { id: 'snake_friend', name: 'Snake Charmer', desc: 'Receive 70 clams from Snake', hidden: false },
  { id: 'stuffed_toy', name: 'Lost & Found', desc: 'Help Aubrey find her stuffed toy', hidden: false },
  { id: 'basil_photo', name: 'A Thousand Words', desc: 'See Basil\'s mysterious photo', hidden: true },
  { id: 'white_space', name: 'Blank Canvas', desc: 'Wake up in White Space', hidden: false },
  { id: 'self_harm', name: 'Knife to Meet You', desc: 'Stab yourself in White Space', hidden: true },
  { id: 'reunion', name: 'The Gang\'s All Here', desc: 'Reunite with Hero, Kel, and Aubrey', hidden: false },
  { id: 'picnic', name: 'Perfect Picnic', desc: 'Reach the picnic with Mari', hidden: true },
  { id: 'tetherball', name: 'Ball Game', desc: 'Find the lost tetherball', hidden: true },
  { id: 'berly_gift', name: 'Generous Berly', desc: 'Receive 40 clams from Berly', hidden: true },
  { id: 'flower_crown', name: 'Crown of Thorns', desc: 'Receive Basil\'s flower crown', hidden: true },
  { id: 'max_friendship', name: 'Best Friends Forever', desc: 'Reach 50 friendship', hidden: false },
  { id: 'rich', name: 'Clam Hoarder', desc: 'Accumulate 500 clams', hidden: false },
  { id: 'backtracker', name: 'Second Thoughts', desc: 'Use Backspace to revisit a line', hidden: false },
  { id: 'completionist', name: 'True Ending', desc: 'Reach the end of the story', hidden: true },
];

function loadAchievements() {
  try {
    const saved = localStorage.getItem('omori_achievements');
    if (saved) {
      const arr = JSON.parse(saved);
      achievements = new Set(arr);
      updateAchievementUI();
    }
  } catch (e) {}
}

function saveAchievements() {
  try {
    localStorage.setItem('omori_achievements', JSON.stringify([...achievements]));
  } catch (e) {}
}

function unlockAchievement(id) {
  if (!achievements.has(id)) {
    achievements.add(id);
    saveAchievements();
    updateAchievementUI();
    showAchievementToast(id);
  }
}

function showAchievementToast(id) {
  const ach = ACHIEVEMENTS.find(a => a.id === id);
  if (!ach) return;
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = `<strong>ACHIEVEMENT UNLOCKED</strong><br>${ach.name}<br><small>${ach.desc}</small>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

function updateAchievementUI() {
  const btn = document.getElementById('ach-btn');
  if (btn) btn.textContent = `ACHIEVEMENTS: ${achievements.size}/${ACHIEVEMENTS.length}`;
}

function checkAchievements() {
  if (friendship >= 50) unlockAchievement('max_friendship');
  if (clams >= 500) unlockAchievement('rich');
  if (idx >= DIALOGUE.length - 1) unlockAchievement('completionist');
}

function addToInventory(item) {
  if (!inventory.has(item)) {
    inventory.add(item);
    showItemToast(item);
    saveInventory();
  }
}

function showItemToast(item) {
  const toast = document.createElement('div');
  toast.className = 'item-toast';
  toast.innerHTML = `<strong>ITEM OBTAINED</strong><br>${item}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function saveInventory() {
  try {
    localStorage.setItem('omori_inventory', JSON.stringify([...inventory]));
  } catch (e) {}
}

function loadInventory() {
  try {
    const saved = localStorage.getItem('omori_inventory');
    if (saved) {
      inventory = new Set(JSON.parse(saved));
    }
  } catch (e) {}
}

function toggleAchievementMenu() {
  let menu = document.getElementById('ach-menu');
  if (menu) { menu.remove(); return; }
  menu = document.createElement('div');
  menu.id = 'ach-menu';
  menu.innerHTML = '<h3>ACHIEVEMENTS</h3>' + ACHIEVEMENTS.map(a => {
    const unlocked = achievements.has(a.id);
    return `<div class="ach-item ${unlocked ? 'unlocked' : 'locked'}">
      <span class="ach-name">${unlocked ? a.name : '???'}</span>
      <span class="ach-desc">${unlocked ? a.desc : (a.hidden ? '???' : a.desc)}</span>
    </div>`;
  }).join('') + '<button onclick="toggleAchievementMenu()">CLOSE</button>';
  document.body.appendChild(menu);
}

function toggleMainMenu() {
  let menu = document.getElementById('main-menu');
  if (menu) { menu.remove(); menuOpen = false; return; }
  menuOpen = true;
  menu = document.createElement('div');
  menu.id = 'main-menu';
  menu.innerHTML = `
    <div class="menu-tabs">
      <button class="menu-tab active" data-tab="skills">SKILLS</button>
      <button class="menu-tab" data-tab="inventory">INVENTORY</button>
    </div>
    <div class="menu-content">
      <div class="menu-panel" id="skills-panel">
        ${skills.map(s => `<div class="skill-item">${s}</div>`).join('')}
      </div>
      <div class="menu-panel hidden" id="inventory-panel">
        ${inventory.size > 0 ? Array.from(inventory).map(item => `<div class="inventory-item">${item}</div>`).join('') : '<div class="inventory-empty">(Empty)</div>'}
      </div>
    </div>
    <button onclick="toggleMainMenu()">CLOSE</button>
  `;
  document.body.appendChild(menu);
  
  menu.querySelectorAll('.menu-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      menu.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      menu.querySelectorAll('.menu-panel').forEach(p => p.classList.add('hidden'));
      document.getElementById(btn.dataset.tab + '-panel').classList.remove('hidden');
    });
  });
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

function applyDialogue(d, dialogueIdx = idx) {
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

    if (!visitedRewards.has(dialogueIdx)) {
      if (d.friendship !== undefined) {
        updateFriendship(d.friendship);
      }

      if (d.clams !== undefined) {
        updateClams(d.clams);
      }

      if (d.item) {
        addToInventory(d.item);
      }
      visitedRewards.add(dialogueIdx);
    }

    // Achievement triggers
    if (dialogueIdx === 0) unlockAchievement('first_steps');
    if (dialogueIdx === 14) unlockAchievement('snake_friend'); // Snake gives 70 clams
    if (dialogueIdx === 6) unlockAchievement('stuffed_toy'); // Aubrey stuffed toy
    if (dialogueIdx >= 20 && dialogueIdx <= 28) unlockAchievement('basil_photo'); // Memory slides
    if (dialogueIdx === 3) unlockAchievement('white_space'); // First White Space
    if (dialogueIdx === 35) unlockAchievement('self_harm'); // Stab self
    if (dialogueIdx === 39) unlockAchievement('reunion'); // Meet Hero/Kel/Aubrey
    if (dialogueIdx === 55) unlockAchievement('picnic'); // Reach picnic
    if (dialogueIdx === 840) unlockAchievement('tetherball'); // Find tetherball
    if (dialogueIdx === 842) unlockAchievement('berly_gift'); // Berly gives 40 clams
    if (dialogueIdx === 895) unlockAchievement('flower_crown'); // Receive flower crown
    checkAchievements();

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

  if (i !== idx) {
    history.push(idx);
    if (history.length > 100) history.shift();
  }

  const d = DIALOGUE[i];

  if (d.fade) {
    sceneEl.classList.add('scene-fade-out');
    setTimeout(() => {
      sceneEl.classList.remove('scene-fade-out');
      applyDialogue(d, i);
    }, 1000);
    return;
  }

  applyDialogue(d, i);
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

  history.push(idx);
  if (history.length > 100) history.shift();
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

function prev() {
  if (history.length === 0) return;
  unlockAchievement('backtracker');
  stopTyping();
  idx = history.pop();
  showDialogue(idx);
}

function initGame() {
  loadAchievements();
  loadInventory();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (choicesEl && choicesEl.children.length > 0) return;
      e.preventDefault();
      next();
    }
    if (e.key === 'Backspace') {
      e.preventDefault();
      prev();
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
    visitedRewards.clear();
    history.length = 0;
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
