# GROK BUILD PROMPT — "PIG COMMANDO 3D: Vs Bots & Spammers"

Copy everything below the line into Grok. Do not soften it.

---

You are building a complete, self-contained browser game in **ONE single HTML file**. No external libraries fetched at runtime except **Three.js loaded from a CDN `<script>` tag** (that is the only allowed external dependency — no textures, no models, no audio files, no fonts). Everything else is procedural: geometry, materials, sound. Do not hold back. Make it feel like a polished PS1/N64-era arcade shooter, not a tech demo.

## THE HERO — get this right or start over
The player is the famous meme: a **chubby pink pig sniper in full desert military loadout** ("Nikia" meme — pig prone in the desert with a camo ghillie hood, tactical vest, rifle). Build him in low-poly 3D from Three.js primitives:
- Round fat pink body (capsule/sphere), stubby legs, curly tail (small torus segments).
- Big pig head with a clearly visible **pink snout with two nostrils**, floppy ears.
- **Desert camo ghillie hood/helmet** draped over the head (tan/khaki cones+planes), **tan tactical vest with pouches** (boxes strapped to the torso), a small **radio antenna** sticking up from a backpack, and an American-flag-style shoulder patch (tiny colored quad).
- He must read as "that pig meme" from 10 feet away. Chunky, low-poly, flat-shaded (MeshLambert/Toon), warm desert lighting.

## THE WEAPON — the X Boomerang
Primary attack: the pig **throws a glowing "X" boomerang** (two crossed elongated boxes forming an ✕, emissive white/cyan edge glow).
- Click / X key to throw toward the aim direction. It spins fast, flies out ~15–20 units, **arcs and returns to the pig**, damaging every enemy it touches on the way out AND back.
- Only 1–2 boomerangs airborne at once; catching a returning boomerang gives a tiny "clink" sound and instantly re-arms.
- Hold to charge: a charged throw is bigger, faster, pierces everything, and screen-shakes on release.
- Secondary: keep a rapid "ban hammer" pellet shot (right-click or C) as backup with limited ammo drops.

## SETTING & CAMERA
- 3D desert battlefield: sandy dunes (displaced plane), sparse dark-green bushes, rocks, distant low-poly mountains, huge clear blue sky with a hot sun and light fog for depth.
- **Third-person camera** behind/above the pig (slightly over-the-shoulder), smooth-follow with slight lag and screen shake on hits/explosions. WASD/arrows to run, Space to jump (fat pig = short comedic hop with dust puff), mouse to aim/turn.
- Day tint shifts slightly warmer each wave; heat-haze feel via subtle fog color.

## ENEMIES
1. **Bots** — blocky gunmetal robots with glowing red eye-visors, marching in from the dunes. Slow, tanky, fire slow red laser bolts. Explode into cube-shrapnel.
2. **Spammers** — garish SPAM-can cylinders with arms, blue/yellow labels, faster and erratic (zig-zag), lob spinning "!!!", "🚨BREAKING", "follow4follow" text sprites (canvas-texture sprites) that arc toward the player.
3. Every 5th wave: a **boss** — a giant "Blue Check Mecha" bot that spawns minions and requires charged boomerang hits on a glowing weak point.

## GAMEPLAY LOOP
- Wave-based survival. Short sessions, escalating count/speed/HP. Wave banner + klaxon between waves.
- 3 lives, brief invulnerability + flashing on hit, knockback.
- Score: bots 100, spammers 150, boss 1000, +combo multiplier for multi-hits on a single boomerang pass ("2x MASS BAN!", "5x PURGE!!" popups as floating 3D text sprites).
- Pickups dropped by enemies: bacon (extra life, rare), coffee (speed), golden X (temporary triple-boomerang), NUKE ("SERVER WIPE" — clears the screen with a white flash and giant shockwave ring).
- High score persisted in localStorage. Game-over screen with rank titles ("INTERN JANITOR" → "CHIEF BAN OFFICER" → "X COMMANDO ELITE") and instant restart on Enter.

## JUICE — mandatory, not optional
- Web Audio API only: procedural boomerang whoosh (filtered noise + LFO), throw/catch clinks, explosions (noise burst + pitch-down), enemy chatter bleeps, a simple 4-channel chiptune-ish background loop (square/triangle oscillators) that speeds up as waves rise.
- Particles everywhere: dust when running/landing, sparks on hits, cube debris, muzzle flash, shockwave rings.
- Hit-stop (2–3 frame freeze) on kills, screen shake scaled to impact, damage vignette flash.
- Pig idle animation (breathing wobble, ear flick), run waddle, comedic jump squash-and-stretch.

## UI
- Retro HUD: pixel-style font (CSS, system monospace with letter-spacing is fine), lives as pig-head icons, score, wave, boomerang-charge meter, boss health bar.
- Title screen with the pig posing, "PIG COMMANDO 3D" in big chunky letters, "CLICK TO ENLIST". Pause on P/Esc.

## TECH REQUIREMENTS
- One `index.html`. Three.js via CDN script tag only. Vanilla JS otherwise. 60 FPS target: reuse geometries/materials, object pools for projectiles/particles, cap particle counts, no per-frame allocations in the hot loop.
- Pointer lock for mouse aim, with graceful fallback. Works in desktop Chrome. Handle resize.
- Audio initializes on first user gesture (browser autoplay rules).
- Clean structure: init / assets(procedural builders) / input / update / render, fixed-timestep update.

Build the ENTIRE game, fully playable, in one response. Do not stub anything, do not leave TODOs, do not say "you could add". If it doesn't compile-and-run when saved as index.html and opened in Chrome, it's wrong.
