class AudioManager {
  constructor() {
    this.bgmEl = null;
    this.textSfxEl = null;
    this.audioStarted = false;
    this.bgmList = [];
    this.textSfxPath = '';
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

    const randomBgm = this.bgmList[Math.floor(Math.random() * this.bgmList.length)];
    this.bgmEl.src = randomBgm;
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
