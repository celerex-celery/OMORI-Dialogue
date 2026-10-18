class AudioManager {
  constructor() {
    this.bgmEl = null;
    this.textSfxEl = null;
    this.audioStarted = false;
    this.bgmList = [];
    this.textSfxPath = '';
    this.currentBGM = null;
  }

  init(bgmElId, textSfxElId, bgmList, textSfxPath) {
    this.bgmEl = document.getElementById(bgmElId);
    this.textSfxEl = document.getElementById(textSfxElId);
    this.bgmList = bgmList;
    this.textSfxPath = textSfxPath;

    if (this.textSfxEl) {
      this.textSfxEl.src = textSfxPath;
    }
  }

  startBGM() {
    if (this.audioStarted || !this.bgmEl) return;
    this.audioStarted = true;

    this.playBGM('forest');
  }

  playBGM(type) {
    if (!this.bgmEl) return;
    let src;
    if (type === 'white') {
      src = '../assets/audio/bgm/white_space.ogg';
    } else {
      src = '../assets/audio/bgm/bs_friend1.ogg';
    }
    if (this.currentBGM === src) return;
    this.currentBGM = src;
    this.bgmEl.src = src;
    this.bgmEl.volume = 0.4;
    this.bgmEl.loop = true;
    this.bgmEl.play().catch(() => {});
  }

  playTextSfx() {
    if (!this.textSfxEl) return;
    this.textSfxEl.volume = 0.25;
    this.textSfxEl.currentTime = 0;
    this.textSfxEl.play().catch(() => {});
  }
}

const audio = new AudioManager();
