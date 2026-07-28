# PIG COMMANDO — vs Bots & Spammers

A silly 90s-style retro arcade game in a **single HTML file**. No build step, no dependencies, no external assets.

## Play

Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

Or from this folder:

```bash
# optional local server
npx --yes serve .
```

## Controls

| Action | Keys |
|--------|------|
| Move | ← → or A D |
| Jump | Space / W / ↑ |
| Shoot (ban / mute) | Left click or X |
| Pause | P |
| Start / Restart | Any key / Enter / Click |

## Gameplay

You are **Commando Pig** — a chubby pink pig in desert camo tactical gear — cleaning bots and spammers off the platform.

- **Bots** march toward you (+10 pts)
- **Spammers** fire emoji spam projectiles (+25 pts)
- **Combos** multiply score for rapid kills
- **Power-ups**: Rapid fire, Verified shield, Nuke (screen clear)
- **3 lives** · waves get harder · beat your high score

## Stack

- HTML + CSS + vanilla JS
- Canvas low-res (320×180) scaled up for chunky pixels
- Web Audio API beeps only

## License

MIT — go forth and ban spam.
