# Lounge Hero + Mobile Updates

This branch is prepared for the full update containing:

- Updated index.html / game.html (584853 bytes) with lounge UI, social interactions, buildLoungeHero, setLoungeHeroVisible, activateSocialLounge, mobile stick/touch controls.
- New asset: lounge-bond-hero.jpg (219502 bytes)

**Why this PR approach:** index.html is too large (~585 KB) for reliable single-shot rewrite via the GitHub contents API from the agent environment. 

Recommended next steps for the maintainer:
1. Replace index.html and game.html with the updated versions from the local artifacts.
2. Add lounge-bond-hero.jpg to the repo root.
3. Merge this PR (or the files directly to main).
4. The updated deploy.yml will handle publishing (including the recent workflow_run trigger fix).

Local file checksums for verification:
- index.html / game.html MD5: 3945a33c98747c3560837c892c36087e
- lounge-bond-hero.jpg size: 219502 bytes
