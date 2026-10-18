# OMORI-Dialogue

just a game aboue dialogue (wip)

## Asset Attribution

All character portraits, music, and sound effects are property of **omo.cat / Omori Team** (Omori RPG).  
This project is a fan-made dialogue demo and does not claim ownership of any Omori assets.

- Character portraits: Omori (omo.cat)
- Music & SFX: Omori soundtrack (omo.cat)

## Run

```
npm run electron
```

## Controls

- **Enter** — advance dialogue
- **Click** / any key — start audio

## Story

1. **Basil's Shoe House** — Kel calls out to Basil, who says something unexpected, finds a photo, whispers "MARI... SHES.... IN.. M......" then disappears.
2. **White Space** — Omori wakes up, finds a knife, stabs himself, wakes again.
3. **Faraway Town** — Omori enters a door and finds HERO, KEL, and AUBREY heading to the picnic.
4. **Picnic** — The group sees Mari and asks if she's seen Basil.

## Features

- Omori-style dialogue with character portraits
- Kel and Aubrey arguing
- Friendship point tracker
- Random BGM on each launch
- Text beep SFX per letter

## Project Structure

```
src/
  index.html          # Main HTML entry point
  css/
    style.css         # All styles
  js/
    dialogue.js       # Dialogue data, portraits, colors, backgrounds
    audio.js          # Audio manager (BGM + text SFX)
    renderer.js       # Game logic (dialogue flow, typing effect)
electron/
  main.js             # Electron main process
assets/
  images/portraits/   # Character portraits (KEL, AUBREY, HERO, MARI, BASIL)
  audio/bgm/          # Background music tracks
  audio/se/           # Sound effects
```
