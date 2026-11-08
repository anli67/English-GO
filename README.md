# English GO / 英文默書 GO（English Catch GO）

廣東話／English · kids learning game（靜態網頁）

用「捕捉精靈」感覺去練英文詞彙／默書／不規則動詞。本 repo 係 **公開 scrub 版**：已剔走私人路徑、學校名、內部 WIRE／QC 筆記。

A static browser game for kids to practise English vocab / dictation-style banks / irregular verbs with a light creature-catch loop. This is the **public scrubbed pack** (no private paths, school names, or internal ops notes).

## Clone

```bash
git clone https://github.com/anli67/English-GO.git
cd English-GO
```

## Run（本機）

需要一個 local static server（唔好直接用 `file://`）：

```bash
python3 -m http.server 8767
```

然後開：http://127.0.0.1:8767/

（或者任何 static server 指住 repo root。）

## What’s inside

- `index.html` / `game.js` / `style.css` — game shell
- `assets/` — species art, maps, audio, JSON word banks
- `CREDITS.md` — audio/art notes
- `LICENSE` — MIT for code; check CREDITS for assets

## License note

Code: MIT. Assets: educational demo — see `CREDITS.md`. Replace BGM with a track you clearly own / CC0 if you need a stricter public release.

## Privacy

This public pack redacts school source labels to generic placeholders. Do not re-add real student / school / tutor branding before publishing.
