# English GO public pack QC — 2026-11-08 (Asia/Hong_Kong)

## Source used
- Primary live playable: `/workspace/_live_ports/ecgo/` (game.js / index.html / style.css + assets; ecgo48-era soft)
- Supplemented missing hero walk / encounter / audio / title / friends-walk / invent-orb / maps from:
  - `/workspace/Desktop/Grok/Yeung_小學溫習/english_catch_go/web_v0/`
  - `/workspace/yeung_chinese/english_catch_go/web_v0/` (fallback)
- **Excluded from pack:** all `WIRE_*.md`, `*_KEEP_*`, `_qc/`, `prep_ecgo33_verb_cutout/`, AppleDouble `._*`, bak files, ops READMEs

## Output
- Absolute path: `/workspace/Games/english_go_public_2026-11-08`
- Size: **441.3 MB** (606 files)
- Root: `index.html`, `game.js`, `style.css`, `assets/`, `README.md`, `.gitignore`, `LICENSE`, `CREDITS.md`, this QC

## Scrub actions
- Renamed `assets/hero_yeung/` → `assets/hero/` and `yeung_*` / `hero_yeung_*` art filenames → `hero_*`
- Renamed title boot `title_boot_yeung_front_v0.jpg` → `title_boot_hero_front_v0.jpg`
- Updated JS/HTML/CSS ids/classes/paths (`enc-hero-throw`, `boot-hero-front`, `HERO_*` asset keys)
- Redacted school labels (`YAUMATI CATHOLIC PRIMARY SCHOOL` → `School`)
- Redacted operator name tokens / private Mac paths / LAN IPs / WIRE doc refs
- Replaced Pokémon trademark phrases in game JSON with generic wording
- Scrubbed legacy localStorage key brand prefixes to `legacy_ecgo_*`

## rg hit counts (text files; binary assets excluded)

| pattern | hits |
|---|---|
| anthonyli | 0 |
| /Users/anthony | 0 |
| Desktop/Grok | 0 |
| Yeung_ | 0 |
| Yeung | 0 |
| yeung | 0 |
| anthony (broad) | 0 |
| Anthony | 0 |
| Pokémon / Pokemon / Poké | 0 / 0 / 0 |
| WIRE_ | 0 |
| ntfy | 0 |
| 192.168 | 0 |
| YAUMATI / Yaumati / Catholic | 0 / 0 / 0 |
| hero_yeung | 0 |
| whatsapp / @gmail | 0 / 0 |

## Residual risks
1. **Dictation content provenance:** Word banks are still clearly school-dictation style English (now labeled `School …`), even with the school name removed. Publishing educational worksheets derived from a named school’s dictation may still need the owner’s judgment / permission.
2. **Audio provenance:** `map_bgm.mp3` is reused from the tower-defense project BGM; CREDITS notes possible CC0 lineage but is not a hard legal clearance. Swap for a clearly owned/CC0 track before commercial use.
3. **Likeness / private art:** Hero / friends / invent-orb art may still visually resemble private tutoring characters even after filename scrub. Owner should confirm before wide public launch.
4. **Trademark feel:** Catch-loop UX is intentionally creature-catch style; no official franchise art shipped, but marketing copy should avoid third-party marks.
5. **Large binary weight (~443MB):** mostly `species_s7` + `evolve` art — fine for GitHub LFS or Release zip; raw git push may be heavy.
6. **No automated playtest in this QC pass:** asset paths referenced by `game.js` resolve on disk (0 missing after fill); full browser play smoke still recommended before push.

## Run reminder
```bash
cd /workspace/Games/english_go_public_2026-11-08
python3 -m http.server 8767
# open http://127.0.0.1:8767/
```

## Push
**Not pushed** by this pack job. Parent / Co / CloudAgent (or Anthony with his own GitHub link) should publish to `anli67/English-GO`.
