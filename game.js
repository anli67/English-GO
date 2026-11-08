/* 英文默書GO · Invention Critter Go · ?v=ecgo53 */
(function () {
  "use strict";

  const V = "ecgo53";
  // boot-ver: ecgo53 — soft tip S3／S6 唔讀生字；S1／2／4／5／7＋encounter 照舊 EN TTS；背景／音效 tip bust；底 soft ecgo52；唔 promote

  /**
   * ecgo23 WIRE (Anthony PASS parts · Co knife 2026-10-27):
 *   + follow-up: S1 id1-9 ← species_drstone_cute_v0 sheet cutouts; id10+L2/L3 HOLD;
 *     S2 id101/102/120 → assets/species_s2_draft only (vocab bank still DRAFT).
   * ecgo25 KEEP Stage2 DRAFT + PASS LOCK friends_walk pack DRAFT_PLAYTEST (MAP_BG_S2 + id101–121); SPIN exact75=0.60 / 72–78 +0.30pp; throw fly + spin SFX; PASS LOCK friends_walk_cutout_tone_throw_spin pack swap (A–E walk + soft 退地 + throw_orb T0–T4 + sfx);
   * encounter Yeung BACK/SIDE (front = boot title only); friends A/B walk companions near Yeung;
   * block-by-id (id10 microscope cutouts; other ids → generic strip TODO);
   * 退地大 encounter layout (species TR bigger); 75% spin mark asset keep (math PASS LOCK);
   * species sprites REDO HOLD (no S1/S2 swap); ⑥ BGM HOLD; Stage2 vocab DRAFT HOLD.
   * Keep ecgo22: SPIN 0↔1 sweet75×1.4 · fast5s×1.2 · L2@5/L3@10 · catch_rate 0.125.
   */

  /**
   * Asset pack — clean lab map + yeung_hero_walk_v1 / friends+props / Invent-Orb F / map_sprites_3d_idle_v1.
   * ecgo17 PASS: evo_evil_gear L2/L3 id4+id10 · throw+dodge from evo_throw_dodge_samples_v0.
   * ecgo18 PASS LOCK (Anthony/Co): encounter_catch_ui_f4 · chrome_leave_reset · bank keep ecgo16/17 logic.
   * Still placeholder: evo ids 1–3,5–9 until full 10× pack.
   */
  const ASSETS = {
    SPECIES_PACK: "species_go_encounter_v1_2026-10-26",
    MAP_PACK: "map_sprites_3d_idle_v1_2026-10-26",
    HERO_PACK: "yeung_hero_walk_v1_2026-10-26",
    FRIENDS_PACK: "yeung_friends_props_samples_v0_2026-10-26",
    SPECIES_DIR: "assets/species/",
    SPECIES_DIR_MAP: "assets/species_map/",
    SPECIES_DIR_IDLE: "assets/species_idle/",
    GALLERY_SIL_DIR: "assets/gallery_silhouette/",
    HERO_DIR: "assets/hero_yeung/",
    FRIENDS_DIR: "assets/friends/",
    PROPS_DIR: "assets/props/",
    VOCAB_URL: "assets/english_catch_vocab_v0.json",
    VOCAB_S2_URL: "assets/english_catch_stage2_beach_v0.json",
    VOCAB_S3_URL: "assets/english_catch_stage3_passage_blank_v0.json",
    VOCAB_S4_URL: "assets/english_catch_stage4_body_vocab_v0.json",
    VOCAB_S5_URL: "assets/english_catch_stage5_hospital_phrases_v0.json",
    VOCAB_S6_URL: "assets/english_catch_stage6_passage_blank_v0.json",
    VOCAB_S7_URL: "assets/english_catch_stage7_irregular_verbs_v0.json",
    SPECIES_DIR_S7: "assets/species_s7/",
    SPECIES_MAP_URL: "assets/SPECIES_MAP.json",
    SPECIES_MAP_S4_URL: "assets/SPECIES_MAP_S4.json",
    SPECIES_MAP_S5_URL: "assets/SPECIES_MAP_S5.json",
    MAP_BG: "assets/map_lab_clean_go_forward.jpg",
    PLAYER_BACK: "assets/hero_yeung/hero_yeung_idle_back.png",
    PLAYER_FRONT: "assets/hero_yeung/hero_yeung_idle_front.png",
    PLAYER_WALK_BACK: [
      "assets/hero_yeung/hero_yeung_walk_back_01.png",
      "assets/hero_yeung/hero_yeung_walk_back_02.png",
      "assets/hero_yeung/hero_yeung_walk_back_03.png",
      "assets/hero_yeung/hero_yeung_walk_back_04.png",
    ],
    PLAYER_WALK_FRONT: [
      "assets/hero_yeung/hero_yeung_walk_front_01.png",
      "assets/hero_yeung/hero_yeung_walk_front_02.png",
      "assets/hero_yeung/hero_yeung_walk_front_03.png",
      "assets/hero_yeung/hero_yeung_walk_front_04.png",
    ],
    ORB_REF_F: "assets/invent_orb_f_ref.jpg",
    ORB_F: "assets/invent_orb/invent_orb_F.png",
    ORB_SPIN_FX: "assets/invent_orb/invent_orb_F_spin_fx.png",
    LAB_BG_BLUR: "assets/encounter_ui/lab_bg_blur.jpg",
    CHROME_LEAVE: "assets/chrome/btn_leave_map.png",
    CHROME_RESET: "assets/chrome/btn_reset_gallery.png",
    EVOLVE_DIR: "assets/evolve/",
    MAP_BGM: "assets/audio/map_bgm.mp3",
    // throw FRONT PASS; dodge/block: opaque cutout strips PASS LOCK dodge_cutout_encounter_layout_v0
    YEUNG_THROW_FRONT: "assets/hero_yeung/yeung_throw_front_big.png",
    YEUNG_THROW_SIDE: "assets/hero_yeung/yeung_throw_side_small.png", // ecgo33: pack small side
    YEUNG_THROW_SIDE_ALT: "assets/hero_yeung/yeung_throw_sideback.png",
    FX_DODGE: "assets/fx/fx_dodge.jpg", // banked pre_dodge_cutout
    FX_BLOCK: "assets/fx/fx_block.jpg",
    FX_DODGE_SHEET: "assets/fx/sheet_dodge_block.jpg",
    FX_DODGE_STRIP: [
      "assets/fx/dodge/dodge_01.png",
      "assets/fx/dodge/dodge_02.png",
      "assets/fx/dodge/dodge_03.png",
      "assets/fx/dodge/dodge_04.png",
    ],
    FX_BLOCK_STRIP: [
      "assets/fx/block/block_01.png",
      "assets/fx/block/block_02.png",
      "assets/fx/block/block_03.png",
      "assets/fx/block/block_04.png",
    ],
    // ecgo23 PASS — Stage2 beach plate (gate HOLD; Stage1 still MAP_BG lab)
    MAP_BG_S2: "assets/map_beach_s2.jpg",
    // ecgo41 soft — Stage4 body interior / Stage5 hospital (SAMPLE keep bank)
    MAP_BG_S4: "assets/map_s4_body_interior.jpg",
    MAP_BG_S5: "assets/map_s5_hospital.jpg",
    // ecgo23 PASS — encounter Yeung face critter = back/side; front = boot only
    YEUNG_ENCOUNTER_BACK: "assets/hero_yeung/yeung_encounter_back_soft.png",
    YEUNG_ENCOUNTER_SIDE: "assets/hero_yeung/yeung_encounter_side_soft.png",
    BOOT_TITLE_FRONT: "assets/title_boot_yeung_front_v0.jpg",
    // ecgo23 PASS LOCK keep — 75% sweet mark art (SPIN math unchanged)
    SPIN_75_MARK: "assets/invent_orb/invent_orb_bar_75_mark.png",
    SPIN_75_RELEASE: "assets/invent_orb/invent_orb_bar_75_release.png",
    // ecgo24 SPIN SFX (friends_walk_cutout pack sfx — audio only; walk/soft art HOLD for Co PASS)
    SFX_SPIN_CLICK: "assets/audio/spin_btn_click.mp3",
    SFX_SPIN_WHOOSH: "assets/audio/spin_btn_whoosh.mp3",
    SFX_SPIN_CLICK_WHOOSH: "assets/audio/spin_btn_click_whoosh.mp3",
    // ecgo23 PASS — per-species block cutouts (hard rule: id10 = microscope only)
    // TODO: ids 1–9 / 101–121 only have sheets in pack → fallback FX_BLOCK_STRIP
    FX_BLOCK_BY_ID: {
      10: [
        "assets/fx/block_by_id/s1/id10_microscope_block_01.png",
        "assets/fx/block_by_id/s1/id10_microscope_block_02.png",
      ],
    },
    FRIEND_WALK_A: [
      "assets/friends/walk/friend_walk_A1.png",
      "assets/friends/walk/friend_walk_A2.png",
      "assets/friends/walk/friend_walk_A3.png",
      "assets/friends/walk/friend_walk_A4.png",
    ],
    FRIEND_WALK_B: [
      "assets/friends/walk/friend_walk_B1.png",
      "assets/friends/walk/friend_walk_B2.png",
      "assets/friends/walk/friend_walk_B3.png",
      "assets/friends/walk/friend_walk_B4.png",
    ],
    // ecgo25 PASS LOCK pack — friends_walk A–E slim distinct
    FRIEND_WALK_C: [
      "assets/friends/walk/friend_walk_C1.png",
      "assets/friends/walk/friend_walk_C2.png",
      "assets/friends/walk/friend_walk_C3.png",
      "assets/friends/walk/friend_walk_C4.png",
    ],
    FRIEND_WALK_D: [
      "assets/friends/walk/friend_walk_D1.png",
      "assets/friends/walk/friend_walk_D2.png",
      "assets/friends/walk/friend_walk_D3.png",
      "assets/friends/walk/friend_walk_D4.png",
    ],
    FRIEND_WALK_E: [
      "assets/friends/walk/friend_walk_E1.png",
      "assets/friends/walk/friend_walk_E2.png",
      "assets/friends/walk/friend_walk_E3.png",
      "assets/friends/walk/friend_walk_E4.png",
    ],
    // throw_orb T0–T4 flight frames (PASS LOCK strip)
    THROW_ORB_FRAMES: [
      "assets/throw_orb/throw_orb_T0.png",
      "assets/throw_orb/throw_orb_T1.png",
      "assets/throw_orb/throw_orb_T2.png",
      "assets/throw_orb/throw_orb_T3.png",
      "assets/throw_orb/throw_orb_T4.png",
    ],
    // ecgo33 LOCK — CLEAR_VERB use species sprites (no human pose); 101/104/115 cutouts in species_s2
    VERB_POSE_BY_ID: {},
  };

  /** Friend NPCs C–E — ecgo29 OFF (Anthony: map 只留陪洋同行兩位 A/B). */
  const MAP_FRIENDS = [];

  /** ecgo25 PASS LOCK — A/B walk companions (slim distinct, not Yeung clones); clamp to world. */
  const MAP_COMPANIONS = [
    { id: "A", framesKey: "FRIEND_WALK_A", ox: -78, oy: 52, w: 108, h: 196, fallback: "assets/friends/friend_A.png" },
    { id: "B", framesKey: "FRIEND_WALK_B", ox: 86, oy: 58, w: 112, h: 200, fallback: "assets/friends/friend_B.png" },
  ];

  /** Stage gate — ecgo24 OPEN Stage2 DRAFT_PLAYTEST (beach + id101–121 DRAFT; not LOCK). */
  let currentStage = 1; // ecgo31: default S1; boot buttons set 1|2 before map
  function activeMapBg() {
    // ecgo41: exact stage maps (S4/S5 must NOT inherit beach)
    if (currentStage === 5 && ASSETS.MAP_BG_S5) return ASSETS.MAP_BG_S5;
    if (currentStage === 4 && ASSETS.MAP_BG_S4) return ASSETS.MAP_BG_S4;
    if (currentStage === 2 && ASSETS.MAP_BG_S2) return ASSETS.MAP_BG_S2;
    return ASSETS.MAP_BG;
  }

  /** Lab props ×10 — fixed world overlays (not baked). */
  const MAP_PROPS = [
    { id: "01", src: "assets/props/01_workbench.png", x: 640, y: 1260, w: 220, h: 180 },
    { id: "02", src: "assets/props/02_tall_shelf.png", x: 280, y: 900, w: 140, h: 260 },
    { id: "03", src: "assets/props/03_potted_plant.png", x: 1900, y: 1100, w: 110, h: 150 },
    { id: "04", src: "assets/props/04_bench.png", x: 1200, y: 2400, w: 200, h: 120 },
    { id: "05", src: "assets/props/05_invent_orb_booth.png", x: 1080, y: 700, w: 200, h: 220 },
    { id: "06", src: "assets/props/06_word_zone_sign.png", x: 1480, y: 820, w: 160, h: 180 },
    { id: "07", src: "assets/props/07_orange_pipe_flask.png", x: 420, y: 1480, w: 150, h: 200 },
    { id: "08", src: "assets/props/08_microscope_station.png", x: 1780, y: 1680, w: 180, h: 170 },
    { id: "09", src: "assets/props/09_whiteboard.png", x: 760, y: 560, w: 200, h: 160 },
    { id: "10", src: "assets/props/10_greenhouse_booth.png", x: 1860, y: 2400, w: 220, h: 240 },
  ];

  // ecgo32: stable ecgo_v1_* keys; migrate legacy yeung_ecgo_* on first load
  const STORAGE_OWNED = "ecgo_v1_owned";
  const STORAGE_CATCHES = "ecgo_v1_catches";
  const STORAGE_MUTE = "ecgo_v1_mute";
  const STORAGE_PROGRESS = "ecgo_v1_progress";
  const STORAGE_LEGACY_OWNED = "yeung_ecgo_owned_v1";
  const STORAGE_LEGACY_CATCHES = "yeung_ecgo_catches_v1";
  const STORAGE_LEGACY_MUTE = "yeung_ecgo_mute_v1";
  const BALLS_MAX = 3;

  const MAP_W = 720;
  const MAP_H = 960;
  // Scrollable world — larger than viewport so camera pans for real
  const WORLD_W = 2160;
  const WORLD_H = 2880;
  const PLAYER_R = 28;
  const WALK_SPEED = 4.2;
  const WILD_COUNT = 5;
  const WILD_MIN_SEP = 420; // ecgo13: spread wilds (was piled in ~160px lane)
  const CATCH_CHANCE_DEFAULT = 0.125; // ~1 in 8; vocab catch_rate overrides
  const ENCOUNTER_R = 180; // walk-up close (ecgo9 420+AUTO520 pushed spawns off-camera)
  const AUTO_OPEN_R = 180; // keep alias = ENCOUNTER_R (no second mega radius)
  const BASE_DODGE = 0.28; // slide/jump dodge
  const BASE_BLOCK = 0.18; // shield block (separate from dodge)
  const EVO_CATCH_STEP = 5; // ecgo21/44: 5→L2; 10→L3; 15→L4
  const EVO_MAX_LEVEL = 4; // ecgo44 soft: dex strip L1→L4 (Wave A art)
  const TYPE_LIMIT_MS = 15000; // ~15s to type English word
  const FAST_ANSWER_MS = 5000; // ≤5s correct → catch ×1.2
  // ecgo24 BRIEF KNIFE_catch_spin_band: exact75=0.60 abs; else 72–78 +0.30pp; NO ×1.4/×1.3
  const SPIN_EXACT_PCT = 75;
  const SPIN_EXACT_RATE = 0.60;
  const SPIN_BAND_LO = 72;
  const SPIN_BAND_HI = 78;
  const SPIN_BAND_ADD = 0.30; // percentage points on base
  const SPIN_SWEET = 0.75; // UI mark keep
  const SPIN_SWEET_BAND = 0.03; // visual band 72–78
  const CATCH_FAST_MULT = 1.2; // +20% relative if fast answer
  const FLICK_MIN_UP = 280; // px/s upward velocity to throw
  const FLICK_MIN_DIST = 36; // px drag distance


  /** Opaque dodge/block strip player — cycle 01→04 on #dodge-fx-img (PASS LOCK dodge_cutout). */
  let dodgeStripTimer = null;
  function stopDodgeStrip() {
    if (dodgeStripTimer) {
      clearInterval(dodgeStripTimer);
      dodgeStripTimer = null;
    }
  }
  function playDodgeStrip(img, kind, speciesId) {
    stopDodgeStrip();
    if (!img) return;
    let frames = kind === "block" ? ASSETS.FX_BLOCK_STRIP : ASSETS.FX_DODGE_STRIP;
    // ecgo23: per-species block — id10 microscope cutouts; missing ids → generic strip
    if (kind === "block" && speciesId != null && ASSETS.FX_BLOCK_BY_ID) {
      const byId = ASSETS.FX_BLOCK_BY_ID[speciesId];
      if (byId && byId.length) frames = byId;
    }
    if (!frames || !frames.length) return;
    let i = 0;
    img.src = frames[0] + "?v=" + V;
    img.alt = kind === "block" ? "BLOCK" : "DODGE";
    dodgeStripTimer = setInterval(() => {
      i = (i + 1) % frames.length;
      img.src = frames[i] + "?v=" + V;
    }, 140);
  }


  /** @type {{words: any[], species: any[]}} */
  let DATA = { words: [], species: [] };
  /** @type {Set<number>} */
  let owned = new Set();
  /** @type {Record<string, number>} */
  let catchCounts = {};
  /** @type {{s1Caught:number,s2Caught:number,s1Plays:number,s2Plays:number,totalCatches:number,lastStage:number,updatedAt:number}} */
  let progress = {
    s1Caught: 0,
    s2Caught: 0,
    s1Plays: 0,
    s2Plays: 0,
    s3Plays: 0,
    s3Clears: 0,
    totalCatches: 0,
    lastStage: 1,
    updatedAt: 0,
  };
  let muted = false;
  let resetArmedUntil = 0; // ecgo32: double-tap confirm for RESET
  let audioCtx = null;
  /** @type {Record<string, boolean>} */
  let silReady = Object.create(null); // gallery_silhouette file exists?

  // Top-down scrollable map: player walks, camera follows
  let player = { x: WORLD_W * 0.5, y: WORLD_H * 0.72 };
  let cam = { x: 0, y: 0 };
  let facing = 1;
  let bob = 0;
  let walkPhase = 0; // HQ walk frame phase (floor % 4)
  let isWalking = false;
  /** @type {{id:number, x:number, y:number, cooldown:number, uid:number}[]} */
  let wild = [];
  let wildUid = 1;
  let keys = Object.create(null);
  let padDir = { x: 0, y: 0 };
  let dragging = false;
  let dragLast = null;
  let dragPointerId = null;
  let dragMovedPx = 0;
  let dragOrigin = null; // {x,y} client — for tap-vs-drag
  let raf = 0;
  let mapRunning = false;
  let encounterGrace = 0; // frames before walk-up can fire (avoid instant pop)
  /** @type {any|null} */
  let currentEncounter = null;
  // Debug HUD / encounter telemetry (ecgo9)
  let dbgOpenCount = 0;
  let dbgLastOpenReason = "";
  let dbgLastBlock = "";
  let dbgLastProbe = "";
  let dbgLastTap = "";
  let mapProbeTimer = 0;
  let catchBusy = false;
  let ballsLeft = BALLS_MAX;
  let inCatchMode = false;
  let spinCharge = 0;
  let spinChargeDir = 1; // ping-pong: +1 rising, −1 falling
  let spinHolding = false;
  let spinTimer = 0;
  let dexShowAnswers = false;
  let typeTimer = null; // encounter typing countdown
  let typeDeadline = 0;
  let typeStartAt = 0; // performance.now() when typing timer starts
  let typeSpoken = false; // TTS once per reveal
  let answerFastBonus = false; // correct within FAST_ANSWER_MS
  /** @type {HTMLAudioElement|null} */
  let mapBgmEl = null;
  let bgmToneFallback = false; // true = oscillator loop (no mp3)

  // Flick throw state
  let flick = {
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    t0: 0,
    samples: /** @type {{x:number,y:number,t:number}[]} */ ([]),
  };
  let lastThrowAim = 0; // -1..1
  let lastThrowPower = 0.6; // 0..1

  const $ = (id) => document.getElementById(id);
  const screens = {
    boot: $("screen-boot"),
    map: $("screen-map"),
    encounter: $("screen-encounter"),
    s3: $("screen-s3"),
    s7: $("screen-s7"),
    dex: $("screen-dex"),
  };
  const canvas = /** @type {HTMLCanvasElement} */ ($("map-canvas"));
  const ctx = canvas.getContext("2d");

  function show(name) {
    if (name !== "dex") closeDexDetail();
    Object.keys(screens).forEach((k) => {
      if (!screens[k]) return;
      screens[k].classList.toggle("active", k === name);
    });
    const appEl = $("app");
    if (appEl) {
      // ecgo40: allow boot scroll on short viewports; other screens keep overflow hidden
      appEl.classList.toggle("boot-mode", name === "boot");
    }
    if (name === "map") startMap();
    else stopMap();
    if (name === "dex") renderDex();
    if (name !== "s3") {
      const win = $("s3-win");
      if (win) {
        win.classList.add("hidden");
        win.setAttribute("aria-hidden", "true");
      }
    }
    if (name !== "s7") {
      const win7 = $("s7-win");
      if (win7) {
        win7.classList.add("hidden");
        win7.setAttribute("aria-hidden", "true");
      }
    }
  }

  function isTypingTarget(el) {
    if (!el) return false;
    const tag = (el.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return true;
    if (el.isContentEditable) return true;
    return false;
  }

  function speciesFile(sp) {
    if (!sp || !sp.file) return "";
    // paths with "/" are assets-relative (e.g. species_s2/101_….png)
    if (String(sp.file).indexOf("/") >= 0) {
      return "assets/" + String(sp.file).replace(/^assets\//, "");
    }
    // ecgo43a: L1 SPECIES_DIR pack on disk is .jpg; SPECIES_MAP still lists .png
    var f = String(sp.file).replace(/\.png$/i, ".jpg");
    return ASSETS.SPECIES_DIR + f;
  }

  function speciesMapFile(sp) {
    if (!sp) return "";
    const base = sp.map_file || sp.file || "";
    if (String(base).indexOf("/") >= 0) {
      return "assets/" + String(base).replace(/^assets\//, "");
    }
    return ASSETS.SPECIES_DIR_MAP + base;
  }

  function speciesSilFile(sp) {
    const base = String(sp.file || "").replace(/\.jpe?g$/i, ".png");
    return ASSETS.GALLERY_SIL_DIR + base;
  }

  /** Catch count → evolution level: 0–4=L1, 5–9=L2, 10–14=L3, 15+=L4. RESET → L1. */
  function evoLevelFor(id) {
    const n = Number(catchCounts[String(id)] || 0);
    if (n >= EVO_CATCH_STEP * 3) return 4;
    if (n >= EVO_CATCH_STEP * 2) return 3;
    if (n >= EVO_CATCH_STEP) return 2;
    return 1;
  }

  /** Basename stem e.g. 01_lift (strips map/ idle/ dirs). */
  function speciesStem(sp) {
    /* ecgo30: basename only so evolve/L2_117_flavours.png works for species_s2/117_*.png */
    var raw = String((sp && sp.file) || "")
      .replace(/^map\//, "")
      .replace(/^idle\//, "")
      .replace(/\.(jpe?g|png|webp)$/i, "");
    var slash = raw.lastIndexOf("/");
    return slash >= 0 ? raw.slice(slash + 1) : raw;
  }

  /**
   * L2/L3/L4 drop-in paths — ENGLISH_CATCH_EVOLVE_BRIEF_v0 + ecgo44 Wave A:
   *   assets/evolve/L2_01_lift.png … L4_10_microscope.png / L4_401_brain.png …
   * Missing L4 still falls back gracefully via onerror → L1+placeholder.
   */
  function speciesEvoCandidates(sp, level) {
    if (!sp || level < 2) return [];
    const stem = speciesStem(sp); // 01_lift
    if (!stem) return [];
    const L = level >= 4 ? "L4" : level === 3 ? "L3" : "L2";
    // BRIEF primary: evolve/L2_01_lift.png
    return [
      ASSETS.EVOLVE_DIR + L + "_" + stem + ".png",
      ASSETS.EVOLVE_DIR + L + "_" + stem + ".jpg",
    ];
  }


  /** Art path candidates for a given evo level — L1 = speciesFile; L2/L3/L4 = live evolve/ only（唔 touch evo_distinct SAMPLE）. */
  function speciesArtCandidates(sp, level) {
    if (!sp) return [];
    if (level <= 1) {
      const f = speciesFile(sp);
      return f ? [f] : [];
    }
    return speciesEvoCandidates(sp, level);
  }

  function closeDexDetail() {
    const panel = $("dex-detail");
    if (!panel) return;
    panel.classList.add("hidden");
    panel.setAttribute("aria-hidden", "true");
    const grid = $("dex-grid");
    if (grid) grid.style.display = "";
  }

  function openDexDetail(wordId) {
    const panel = $("dex-detail");
    const strip = $("dex-detail-levels");
    const nameEl = $("dex-detail-name");
    const metaEl = $("dex-detail-meta");
    if (!panel || !strip) return;
    const w = (DATA.words || []).find(function (x) { return Number(x.id) === Number(wordId); });
    const sp = speciesById(wordId);
    if (!w || !sp) return;
    const isOwned = owned.has(Number(wordId));
    if (!isOwned) return; // only owned lines open detail
    const curLv = evoLevelFor(wordId);
    const nCatch = catchCounts[String(wordId)] || 1;
    const next = catchesToNextEvo(wordId);
    if (nameEl) nameEl.textContent = w.term + (w.display ? " · " + w.display : "");
    if (metaEl) {
      metaEl.textContent =
        "Caught ×" + nCatch + " · 而家 Lv" + curLv +
        (next > 0 ? " · 再捉" + next + "次進化" : " · MAX") +
        " · 圖鑑 L1→L" + EVO_MAX_LEVEL;
    }
    strip.innerHTML = "";
    for (let lv = 1; lv <= EVO_MAX_LEVEL; lv++) {
      const cell = document.createElement("div");
      const unlocked = lv <= curLv;
      cell.className =
        "dex-level-cell" +
        (unlocked ? " unlocked" : " locked") +
        (lv === curLv ? " current" : "");
      cell.setAttribute("role", "listitem");
      const img = document.createElement("img");
      img.alt = unlocked ? (w.term + " Lv" + lv) : ("Lv" + lv + " silhouette");
      const cands = speciesArtCandidates(sp, lv);
      const fallback = speciesFile(sp);
      if (unlocked) {
        if (cands.length) {
          img.src = cands[0] + "?v=" + V;
          if (lv > 1) {
            img.classList.add("evo-placeholder", "evo-l" + lv);
            const probe = new Image();
            probe.onload = function () {
              img.src = cands[0] + "?v=" + V;
              img.classList.remove("evo-placeholder");
            };
            probe.onerror = function () {
              if (cands[1]) {
                const p2 = new Image();
                p2.onload = function () {
                  img.src = cands[1] + "?v=" + V;
                  img.classList.remove("evo-placeholder");
                };
                p2.onerror = function () {
                  if (fallback) img.src = fallback + "?v=" + V;
                };
                p2.src = cands[1] + "?v=" + V;
              } else if (fallback) {
                img.src = fallback + "?v=" + V;
              }
            };
            probe.src = cands[0] + "?v=" + V;
          }
        } else if (fallback) {
          img.src = fallback + "?v=" + V;
        }
      } else {
        // 未達 = 剪影：優先試該 Lv cutout（有則 silhouette filter）；否則 L1／gallery sil
        const silSrc = speciesSilFile(sp);
        if (cands.length) {
          img.src = cands[0] + "?v=" + V;
          const probe = new Image();
          probe.onerror = function () {
            if (cands[1]) {
              const p2 = new Image();
              p2.onerror = function () {
                if (silReady[silSrc]) {
                  img.src = silSrc + "?v=" + V;
                  img.classList.add("sil-asset");
                } else if (fallback) {
                  img.src = fallback + "?v=" + V;
                }
              };
              p2.src = cands[1] + "?v=" + V;
              p2.onload = function () { img.src = cands[1] + "?v=" + V; };
            } else if (silReady[silSrc]) {
              img.src = silSrc + "?v=" + V;
              img.classList.add("sil-asset");
            } else if (fallback) {
              img.src = fallback + "?v=" + V;
            }
          };
          probe.src = cands[0] + "?v=" + V;
        } else if (silReady[silSrc]) {
          img.src = silSrc + "?v=" + V;
          img.classList.add("sil-asset");
        } else if (fallback) {
          img.src = fallback + "?v=" + V;
        }
      }
      const lab = document.createElement("div");
      lab.className = "lv-label";
      lab.textContent = "Lv" + lv;
      const st = document.createElement("div");
      st.className = "lv-state";
      st.textContent = unlocked ? (lv === curLv ? "而家" : "已達") : "未達 · 剪影";
      cell.appendChild(img);
      cell.appendChild(lab);
      cell.appendChild(st);
      strip.appendChild(cell);
    }
    const grid = $("dex-grid");
    if (grid) grid.style.display = "none";
    panel.classList.remove("hidden");
    panel.setAttribute("aria-hidden", "false");
  }

  function catchesToNextEvo(id) {
    const n = Number(catchCounts[String(id)] || 0);
    const lv = evoLevelFor(id);
    if (lv >= EVO_MAX_LEVEL) return 0;
    // L1→L2 at 5; L2→L3 at 10; L3→L4 at 15 (ecgo44)
    const nextAt = lv * EVO_CATCH_STEP;
    return Math.max(0, nextAt - n);
  }

  /** Idle a→b(+c) frames for map wild sprites (map_sprites_3d_idle_v1). */
  function speciesIdleFrames(sp) {
    if (!sp) return [];
    if (Array.isArray(sp.idle_frames) && sp.idle_frames.length) {
      return sp.idle_frames.map(function (f) {
        const name = String(f).replace(/^idle\//, "");
        // ecgo42: slash path → assets-relative (S4/S5 map idle); else species_idle/
        if (String(name).indexOf("/") >= 0) {
          return "assets/" + String(name).replace(/^assets\//, "");
        }
        return ASSETS.SPECIES_DIR_IDLE + name;
      });
    }
    const base = String(sp.file || "")
      .replace(/\.jpe?g$/i, "")
      .replace(/\.png$/i, "");
    if (!base) return [];
    const frames = [base + "_a.png", base + "_b.png"];
    if (sp.id === 4 || /light_bulb/.test(base)) frames.push(base + "_c.png");
    return frames.map(function (f) {
      return ASSETS.SPECIES_DIR_IDLE + f;
    });
  }

  function applyOrbArt() {
    const url = ASSETS.ORB_F + "?v=" + V;
    const fx = ASSETS.ORB_SPIN_FX + "?v=" + V;
    const invent = $("invent-orb");
    const flick = $("flick-orb");
    if (invent) {
      invent.style.backgroundImage = "url(" + url + ")";
      invent.classList.add("has-art");
      let fxEl = invent.querySelector(".orb-spin-fx");
      if (!fxEl) {
        fxEl = document.createElement("span");
        fxEl.className = "orb-spin-fx";
        fxEl.setAttribute("aria-hidden", "true");
        invent.appendChild(fxEl);
      }
      fxEl.style.backgroundImage = "url(" + fx + ")";
    }
    if (flick) {
      flick.style.backgroundImage = "url(" + url + ")";
      flick.classList.add("has-art");
    }
    const boot = document.querySelector(".boot-orb");
    if (boot) {
      // ecgo23: boot/title uses Yeung FRONT plate; invent-orb stays in-game catch UI
      const title = ASSETS.BOOT_TITLE_FRONT
        ? ASSETS.BOOT_TITLE_FRONT + "?v=" + V
        : url;
      boot.style.backgroundImage = "url(" + title + ")";
      boot.classList.add("has-art", "boot-yeung-front");
    }
    const bootScreen = $("screen-boot");
    if (bootScreen && ASSETS.BOOT_TITLE_FRONT) {
      bootScreen.style.backgroundImage =
        "linear-gradient(rgba(6,24,32,0.35), rgba(6,24,32,0.62)), url(" +
        ASSETS.BOOT_TITLE_FRONT +
        "?v=" +
        V +
        ")";
      bootScreen.style.backgroundSize = "cover";
      bootScreen.style.backgroundPosition = "center top";
      bootScreen.classList.add("has-title-plate");
    }
  }

  /** f4 lab bokeh plate behind encounter critter. */
  function applyEncounterLabBg() {
    const el = document.querySelector(".enc-fullscreen");
    if (!el) return;
    el.style.backgroundImage =
      "linear-gradient(rgba(6,24,32,0.35), rgba(6,24,32,0.55)), url(" +
      ASSETS.LAB_BG_BLUR +
      "?v=" +
      V +
      ")";
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  }

  /** Leave / RESET chrome art (PASS LOCK chrome_leave_reset_v1). */
  function applyChromeArt() {
    const leaveUrl = "url(" + ASSETS.CHROME_LEAVE + "?v=" + V + ")";
    const resetUrl = "url(" + ASSETS.CHROME_RESET + "?v=" + V + ")";
    ["btn-enc-leave", "btn-enc-leave-panel"].forEach(function (id) {
      const b = $(id);
      if (!b) return;
      b.classList.add("chrome-leave");
      b.style.backgroundImage = leaveUrl;
    });
    ["btn-reset", "btn-map-reset"].forEach(function (id) {
      const b = $(id);
      if (!b) return;
      b.classList.add("chrome-reset");
      b.style.backgroundImage = resetUrl;
    });
  }

  function wordById(id) {
    return DATA.words.find((w) => w.id === id);
  }

  function speciesById(id) {
    return DATA.species.find((s) => s.id === id);
  }

  /** ecgo29 — CLEAR_VERB encounter/map art (洋＋朋友 pose); else null → species. */
  function verbPoseSrc(id) {
    const m = ASSETS.VERB_POSE_BY_ID;
    if (!m) return null;
    const src = m[Number(id)];
    return src || null;
  }

  function lsGet(key, legacyKey) {
    try {
      let raw = localStorage.getItem(key);
      if ((raw == null || raw === "") && legacyKey) {
        raw = localStorage.getItem(legacyKey);
        if (raw != null && raw !== "") {
          try { localStorage.setItem(key, raw); } catch (_) {}
        }
      }
      return raw;
    } catch (_) {
      return null;
    }
  }

  function recomputeProgressFromOwned() {
    let s1 = 0;
    let s2 = 0;
    let total = 0;
    owned.forEach(function (id) {
      if (Number(id) >= 101) s2 += 1;
      else s1 += 1;
    });
    Object.keys(catchCounts || {}).forEach(function (k) {
      total += Number(catchCounts[k] || 0);
    });
    progress.s1Caught = s1;
    progress.s2Caught = s2;
    progress.totalCatches = total;
    progress.updatedAt = Date.now();
  }

  function parseIdList(raw) {
    if (raw == null || raw === "") return [];
    try {
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return [];
      return arr.map(Number).filter(function (n) { return Number.isFinite(n); });
    } catch (_) {
      return [];
    }
  }

  function readLsRaw(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }

  /** Merge v1 + legacy lists. Treat "[]" as empty so legacy is not blocked after a bad empty write. */
  function loadOwned() {
    try {
      const rawV1 = readLsRaw(STORAGE_OWNED);
      const rawLeg = readLsRaw(STORAGE_LEGACY_OWNED);
      const a1 = parseIdList(rawV1);
      const a0 = parseIdList(rawLeg);
      const merged = new Set();
      a1.forEach(function (id) { merged.add(id); });
      a0.forEach(function (id) { merged.add(id); });
      owned = merged;
      // If v1 was missing/empty but legacy had data, migrate up immediately
      if ((!rawV1 || rawV1 === "" || rawV1 === "[]") && a0.length) {
        try { localStorage.setItem(STORAGE_OWNED, JSON.stringify([...owned])); } catch (_) {}
      }
    } catch (_) {
      owned = new Set();
    }
    try {
      const rawV1 = readLsRaw(STORAGE_CATCHES);
      const rawLeg = readLsRaw(STORAGE_LEGACY_CATCHES);
      let c1 = {};
      let c0 = {};
      try { c1 = rawV1 ? JSON.parse(rawV1) : {}; } catch (_) { c1 = {}; }
      try { c0 = rawLeg ? JSON.parse(rawLeg) : {}; } catch (_) { c0 = {}; }
      if (!c1 || typeof c1 !== "object") c1 = {};
      if (!c0 || typeof c0 !== "object") c0 = {};
      catchCounts = {};
      Object.keys(c0).forEach(function (k) {
        catchCounts[String(k)] = Number(c0[k] || 0);
      });
      Object.keys(c1).forEach(function (k) {
        const n = Number(c1[k] || 0);
        catchCounts[String(k)] = Math.max(Number(catchCounts[String(k)] || 0), n);
      });
      if ((!rawV1 || rawV1 === "" || rawV1 === "{}") && Object.keys(c0).length) {
        try { localStorage.setItem(STORAGE_CATCHES, JSON.stringify(catchCounts)); } catch (_) {}
      }
    } catch (_) {
      catchCounts = {};
    }
    try {
      const raw = readLsRaw(STORAGE_PROGRESS);
      if (raw) {
        const p = JSON.parse(raw);
        if (p && typeof p === "object") {
          progress = Object.assign({}, progress, p);
        }
      }
    } catch (_) {}
    recomputeProgressFromOwned();
  }

  /**
   * Persist owned/catches/progress. Standing rule: never clear on boot/bump/stage.
   * Guard: refuse to clobber non-empty LS with empty in-memory unless forceClear (清除紀錄).
   */
  function saveOwned(opts) {
    const forceClear = !!(opts && opts.forceClear);
    recomputeProgressFromOwned();
    try {
      if (!forceClear && owned.size === 0) {
        const existing = parseIdList(readLsRaw(STORAGE_OWNED));
        const existingLeg = parseIdList(readLsRaw(STORAGE_LEGACY_OWNED));
        if (existing.length || existingLeg.length) {
          // Accidental empty — restore instead of wipe
          existing.concat(existingLeg).forEach(function (id) { owned.add(Number(id)); });
          console.warn("[ecgo39] saveOwned blocked empty clobber; restored", owned.size);
          recomputeProgressFromOwned();
        }
      }
      localStorage.setItem(STORAGE_OWNED, JSON.stringify([...owned]));
      localStorage.setItem(STORAGE_CATCHES, JSON.stringify(catchCounts));
      localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
      // keep legacy keys in sync so older bookmarks still see data
      localStorage.setItem(STORAGE_LEGACY_OWNED, JSON.stringify([...owned]));
      localStorage.setItem(STORAGE_LEGACY_CATCHES, JSON.stringify(catchCounts));
    } catch (e) {
      console.warn("[ecgo39] saveOwned failed", e);
    }
  }

  /** Clear ALL gallery / caught / catchCounts / progress / evo→L1. Mute kept. Explicit only. */
  function resetGallery() {
    owned = new Set();
    catchCounts = {};
    progress = {
      s1Caught: 0,
      s2Caught: 0,
      s1Plays: 0,
      s2Plays: 0,
      totalCatches: 0,
      lastStage: 1,
      s3Plays: 0,
      s3Clears: 0,
      updatedAt: Date.now(),
    };
    try {
      localStorage.removeItem(STORAGE_OWNED);
      localStorage.removeItem(STORAGE_CATCHES);
      localStorage.removeItem(STORAGE_PROGRESS);
      localStorage.removeItem(STORAGE_LEGACY_OWNED);
      localStorage.removeItem(STORAGE_LEGACY_CATCHES);
    } catch (_) {}
    saveOwned({ forceClear: true });
    updateOwnedHud();
    updateBootRecord();
    if (screens.dex && screens.dex.classList.contains("active")) renderDex();
    updateDbgHud("reset-gallery");
    const hud = $("hud-owned");
    if (hud) {
      hud.textContent = "圖鑑 0/" + (DATA.words.length || 10);
    }
    console.info("[ecgo39] gallery reset — owned+catches+progress cleared", STORAGE_OWNED, STORAGE_CATCHES, STORAGE_PROGRESS);
  }

  /** Double-tap within 2.5s to confirm RESET — prevents accidental wipe on iPhone. */
  function requestResetGallery() {
    const now = Date.now();
    const bootBtn = $("btn-reset");
    const mapBtn = $("btn-map-reset");
    if (now < resetArmedUntil) {
      resetArmedUntil = 0;
      if (bootBtn) bootBtn.textContent = "清除紀錄";
      if (mapBtn) mapBtn.setAttribute("aria-label", "清除紀錄");
      resetGallery();
      const rec = $("boot-record");
      if (rec) {
        rec.textContent = "紀錄已清除";
        rec.classList.add("flash");
        setTimeout(function () { rec.classList.remove("flash"); updateBootRecord(); }, 900);
      }
      return;
    }
    resetArmedUntil = now + 2500;
    if (bootBtn) bootBtn.textContent = "再撳確認清除";
    if (mapBtn) mapBtn.setAttribute("aria-label", "再撳確認清除");
    const rec = $("boot-record");
    if (rec) {
      rec.textContent = "再撳一次先清除紀錄（2.5秒內）";
      rec.classList.add("warn");
      setTimeout(function () {
        if (Date.now() >= resetArmedUntil) {
          resetArmedUntil = 0;
          if (bootBtn) bootBtn.textContent = "清除紀錄";
          if (mapBtn) mapBtn.setAttribute("aria-label", "清除紀錄");
          rec.classList.remove("warn");
          updateBootRecord();
        }
      }, 2600);
    } else {
      setTimeout(function () {
        if (Date.now() >= resetArmedUntil) {
          resetArmedUntil = 0;
          if (bootBtn) bootBtn.textContent = "清除紀錄";
        }
      }, 2600);
    }
  }

  function updateBootRecord() {
    const el = $("boot-record");
    if (!el) return;
    const totalWords = (DATA.words && DATA.words.length) || 0;
    const n = owned.size;
    const s1 = progress.s1Caught || 0;
    const s2 = progress.s2Caught || 0;
    const plays = (progress.s1Plays || 0) + (progress.s2Plays || 0) + (progress.s3Plays || 0);
    const catches = progress.totalCatches || 0;
    const s3c = progress.s3Clears || 0;
    el.classList.remove("warn");
    if (n === 0 && catches === 0 && !s3c) {
      el.textContent = "未有紀錄 · 捉到會自動 KEEP（跨 ?v=）";
    } else {
      el.textContent =
        "已 KEEP · 圖鑑 " + n + (totalWords ? "/" + totalWords : "") +
        " · 捉 " + catches + " 次 · S1:" + s1 + " S2:" + s2 +
        (s3c ? " · S3清" + s3c : "") +
        (plays ? " · 開玩 " + plays + " 次" : "");
    }
  }

  function loadMute() {
    const raw = lsGet(STORAGE_MUTE, STORAGE_LEGACY_MUTE);
    muted = raw === "1";
    syncMuteUI();
  }

  function setMute(on) {
    muted = !!on;
    try {
      localStorage.setItem(STORAGE_MUTE, muted ? "1" : "0");
      localStorage.setItem(STORAGE_LEGACY_MUTE, muted ? "1" : "0");
    } catch (_) {}
    syncMuteUI();
  }

  function syncMuteUI() {
    const label = muted ? "🔇 音效 OFF" : "🔊 音效 ON";
    const btn = $("btn-mute");
    if (btn) {
      btn.textContent = label;
      btn.setAttribute("aria-pressed", muted ? "true" : "false");
    }
    const m = $("btn-map-mute");
    if (m) m.textContent = muted ? "🔇" : "🔊";
  }

  function updateOwnedHud() {
    const n = owned.size;
    const t = DATA.words.length || 10;
    const s = "圖鑑 " + n + "/" + t;
    const a = $("hud-owned");
    const b = $("dex-count");
    if (a) a.textContent = s;
    if (b) b.textContent = n + "/" + t;
    updateBootRecord();
  }

  function updateBallsHud() {
    const hud = $("balls-hud");
    const dots = $("balls-dots");
    const count = $("balls-count");
    const fill = $("balls-bar-fill");
    if (!hud) return;
    if (!inCatchMode) {
      hud.classList.add("hidden");
      return;
    }
    hud.classList.remove("hidden");
    let html = "";
    for (let i = 0; i < BALLS_MAX; i++) {
      if (i < ballsLeft) html += "●";
      else html += '<span class="used">○</span>';
    }
    if (dots) dots.innerHTML = html;
    // E_layout Invent-Orb bar: fill = spin charge (mock 100%); dots = balls left
    const pct = Math.round(Math.max(spinCharge || 0, 0) * 100);
    if (count) count.textContent = pct + "%";
    if (fill) fill.style.width = pct + "%";
  }

  function syncSpinUI() {
    const pct = Math.round(spinCharge * 100);
    const meter = $("spin-meter");
    const label = $("spin-label");
    if (meter) meter.style.width = pct + "%";
    if (label) label.textContent = "Spin " + pct + "%";
    // keep E_layout TL Invent-Orb bar in sync
    const count = $("balls-count");
    const fill = $("balls-bar-fill");
    if (inCatchMode) {
      if (count) count.textContent = pct + "%";
      if (fill) fill.style.width = pct + "%";
    }
  }

  function resetFlickOrb() {
    const orb = $("flick-orb");
    if (!orb) return;
    orb.style.left = "50%";
    orb.style.bottom = "12px";
    orb.style.top = "auto";
    orb.style.transform = "none";
    orb.style.marginLeft = "-32px";
    orb.classList.remove("dragging");
  }

  /* ---------- Audio ---------- */
  function ensureAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function tone(freq, dur, type, gain) {
    if (muted) return;
    const ac = ensureAudio();
    if (!ac) return;
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.value = gain || 0.08;
    o.connect(g);
    g.connect(ac.destination);
    const t0 = ac.currentTime;
    g.gain.setValueAtTime(gain || 0.08, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }

  const spinSfxCache = {};
  function playSpinSfx(which) {
    if (muted) return;
    const key = which || "click_whoosh";
    const src =
      key === "click"
        ? ASSETS.SFX_SPIN_CLICK
        : key === "whoosh"
          ? ASSETS.SFX_SPIN_WHOOSH
          : ASSETS.SFX_SPIN_CLICK_WHOOSH;
    if (!src) return;
    try {
      let a = spinSfxCache[key];
      if (!a) {
        a = new Audio(src + "?v=" + V);
        a.preload = "auto";
        a.volume = 0.55;
        spinSfxCache[key] = a;
      }
      a.currentTime = 0;
      const p = a.play();
      if (p && typeof p.catch === "function") p.catch(function () {});
    } catch (_) {}
  }

  function sfx(kind) {
    if (muted) return;
    ensureAudio();
    switch (kind) {
      case "correct":
        tone(523, 0.08, "triangle", 0.11);
        setTimeout(() => tone(784, 0.12, "triangle", 0.11), 70);
        break;
      case "wrong":
        tone(180, 0.18, "sawtooth", 0.08);
        break;
      case "ui_tap":
        tone(660, 0.04, "square", 0.05);
        break;
      case "orb_spin":
        tone(300 + spinCharge * 200, 0.04, "sine", 0.05);
        break;
      case "orb_toss":
      case "throw":
        tone(220, 0.06, "sine", 0.1);
        setTimeout(() => tone(380, 0.1, "triangle", 0.12), 40);
        setTimeout(() => tone(520, 0.08, "sine", 0.08), 110);
        break;
      case "orb_shake":
        tone(160, 0.05, "square", 0.07);
        setTimeout(() => tone(140, 0.05, "square", 0.06), 120);
        setTimeout(() => tone(180, 0.05, "square", 0.07), 240);
        setTimeout(() => tone(150, 0.06, "square", 0.05), 360);
        break;
      case "catch_ok":
        tone(523, 0.1, "square", 0.12);
        setTimeout(() => tone(659, 0.1, "square", 0.12), 90);
        setTimeout(() => tone(784, 0.12, "triangle", 0.13), 180);
        setTimeout(() => tone(1047, 0.22, "triangle", 0.14), 280);
        setTimeout(() => tone(784, 0.08, "sine", 0.08), 420);
        setTimeout(() => tone(1047, 0.28, "triangle", 0.1), 500);
        break;
      case "catch_fail":
        tone(300, 0.1, "sine", 0.09);
        setTimeout(() => tone(200, 0.2, "triangle", 0.09), 100);
        break;
      case "dodge":
        tone(480, 0.06, "square", 0.08);
        setTimeout(() => tone(320, 0.1, "triangle", 0.07), 60);
        break;
      case "step":
        tone(120 + Math.random() * 40, 0.03, "sine", 0.03);
        break;
      case "encounter":
        tone(392, 0.08, "triangle", 0.09);
        setTimeout(() => tone(523, 0.12, "triangle", 0.09), 80);
        break;
      default:
        break;
    }
  }

  let bgmTimer = null;
  function ensureMapBgmEl() {
    if (mapBgmEl) return mapBgmEl;
    try {
      mapBgmEl = new Audio(ASSETS.MAP_BGM + "?v=" + V);
      mapBgmEl.loop = true;
      mapBgmEl.preload = "auto";
      mapBgmEl.volume = 0.35;
      mapBgmEl.addEventListener("error", function () {
        bgmToneFallback = true;
        console.warn("[ecgo] map_bgm.mp3 missing/fail — tone fallback");
      });
    } catch (_) {
      bgmToneFallback = true;
    }
    return mapBgmEl;
  }
  function startBgm() {
    stopBgm();
    if (muted) return;
    ensureAudio();
    const el = ensureMapBgmEl();
    if (el && !bgmToneFallback) {
      const p = el.play();
      if (p && typeof p.catch === "function") {
        p.catch(function () {
          // autoplay blocked or missing — tone fallback
          startToneBgm();
        });
      }
      return;
    }
    startToneBgm();
  }
  function startToneBgm() {
    if (bgmTimer) return;
    const notes = [262, 330, 392, 523, 392, 330];
    let i = 0;
    bgmTimer = setInterval(() => {
      if (muted) return;
      tone(notes[i % notes.length], 0.15, "sine", 0.018);
      i++;
    }, 420);
  }
  function stopBgm() {
    if (bgmTimer) {
      clearInterval(bgmTimer);
      bgmTimer = null;
    }
    if (mapBgmEl) {
      try {
        mapBgmEl.pause();
        mapBgmEl.currentTime = 0;
      } catch (_) {}
    }
  }
  function pauseBgm() {
    if (bgmTimer) {
      clearInterval(bgmTimer);
      bgmTimer = null;
    }
    if (mapBgmEl) {
      try {
        mapBgmEl.pause();
      } catch (_) {}
    }
  }

  /* ---------- TTS · KNIFE_tts_english_read_2026-10-27 BRIEF ---------- */
  // Stage1: speak term with a/an; Stage2: full display; en-GB prefer; fail silent; optional 🔊
  let ttsVoicesReady = false;
  let ttsPreferredVoice = null;
  let ttsReplayAt = 0;
  /** Hardcode from BRIEF table (vocab JSON unchanged — optional `tts` later). 31 rows. */
  const TTS_TEXT_BY_ID = {
    1: "a lift",
    2: "an air conditioner",
    3: "a magnet",
    4: "a light bulb",
    5: "a photocopier",
    6: "a steam iron",
    7: "a vacuum cleaner",
    8: "a thermometer",
    9: "a first-aid box",
    10: "a microscope",
    101: "shower",
    102: "invention",
    103: "summer day",
    104: "guess",
    105: "coldest winter evening",
    106: "sweet and colourful drink",
    107: "experiment",
    108: "experiments",
    109: "fruit-flavoured mixture",
    110: "stirring stick",
    111: "frozen to the stick",
    112: "delicious",
    113: "wife",
    114: "patent",
    115: "producing",
    116: "ice lollies",
    117: "flavours",
    118: "rich enough",
    119: "machine to manufacture",
    120: "ice lolly Popsicle",
    121: "in honour",
  };
  function resolveTtsText(word) {
    if (!word) return "";
    // 1) optional vocab `tts` if 小學 adds later
    if (word.tts != null && String(word.tts).trim()) return String(word.tts).trim();
    // 2) BRIEF hardcode map
    const id = Number(word.id);
    if (TTS_TEXT_BY_ID[id]) return TTS_TEXT_BY_ID[id];
    // 3) fallback: Stage1 term (keep a/an); Stage2 display|term — NO Chinese
    const stage = word.stage != null ? Number(word.stage) : (id >= 100 ? 2 : 1);
    if (stage === 1) {
      const t = String(word.term || word.display || "").trim();
      return t;
    }
    return String(word.display || word.term || "").trim();
  }
  function pickEnglishVoice() {
    if (typeof window.speechSynthesis === "undefined") return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    // BRIEF: en-GB first (HK primary / British school), then en-US, then any en
    const prefer = [/^en-GB/i, /^en_GB/i, /^en-US/i, /^en_US/i, /^en-/i, /^en_/i];
    for (let i = 0; i < prefer.length; i++) {
      const hit = voices.find((v) => prefer[i].test(v.lang));
      if (hit) return hit;
    }
    return voices.find((v) => /english|british|uk/i.test(v.name)) || null;
  }
  function warmTtsVoices() {
    if (typeof window.speechSynthesis === "undefined") return;
    try {
      ttsPreferredVoice = pickEnglishVoice();
      if (ttsPreferredVoice) ttsVoicesReady = true;
      if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
        window.speechSynthesis.onvoiceschanged = function () {
          ttsPreferredVoice = pickEnglishVoice();
          ttsVoicesReady = !!ttsPreferredVoice || (window.speechSynthesis.getVoices() || []).length > 0;
        };
      }
      window.speechSynthesis.getVoices();
    } catch (_) {}
  }
  /** opts.force — 教學生字 TTS 忽略 mute（SFX mute 仍有效）. Fail silent always. */
  function speakEnglishText(text, opts) {
    opts = opts || {};
    if (!opts.force && muted) return;
    text = String(text == null ? "" : text).trim();
    if (!text || typeof window.speechSynthesis === "undefined") return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.92;
      u.pitch = 1;
      u.volume = 1;
      const voice = ttsPreferredVoice || pickEnglishVoice();
      if (voice) {
        u.voice = voice;
        if (voice.lang) u.lang = voice.lang;
      }
      window.speechSynthesis.speak(u);
    } catch (_) {
      /* BRIEF: fail silently — never block type/throw */
    }
  }
  function speakEnglish(word, opts) {
    if (!word) return;
    speakEnglishText(resolveTtsText(word), opts);
  }
  function replayEncounterTts() {
    if (!currentEncounter || !currentEncounter.word) return;
    const now = performance.now();
    if (now - ttsReplayAt < 300) return; // BRIEF debounce ≥300ms
    ttsReplayAt = now;
    speakEnglish(currentEncounter.word, { force: true });
  }

  /* ---------- Typing timer (~15s) ---------- */
  function clearTypeTimer() {
    if (typeTimer) {
      clearInterval(typeTimer);
      typeTimer = null;
    }
    typeDeadline = 0;
    const bar = $("type-timer");
    if (bar) {
      bar.classList.add("hidden");
      bar.textContent = "";
    }
  }
  function startTypeTimer() {
    clearTypeTimer();
    if (!currentEncounter || inCatchMode) return;
    typeStartAt = performance.now();
    typeDeadline = typeStartAt + TYPE_LIMIT_MS;
    const bar = $("type-timer");
    if (bar) {
      bar.classList.remove("hidden");
      bar.textContent = "00:15";
    }
    typeTimer = setInterval(function () {
      if (!currentEncounter || inCatchMode) {
        clearTypeTimer();
        return;
      }
      const left = Math.max(0, typeDeadline - performance.now());
      const sec = Math.ceil(left / 1000);
      if (bar) {
        const mm = String(Math.floor(sec / 60)).padStart(2, "0");
        const ss = String(sec % 60).padStart(2, "0");
        bar.textContent = mm + ":" + ss;
        bar.classList.toggle("urgent", sec <= 5);
      }
      if (left <= 0) {
        clearTypeTimer();
        onTypeTimeout();
      }
    }, 100);
  }
  function onTypeTimeout() {
    if (!currentEncounter || inCatchMode || catchBusy) return;
    const fb = $("enc-feedback");
    if (fb) {
      fb.textContent = "時間到！逃走咗…";
      fb.className = "enc-feedback bad";
    }
    const hint = $("enc-hint");
    if (hint) hint.textContent = "TIMEOUT · 15s";
    sfx("catch_fail");
    const inp = $("enc-input");
    if (inp) inp.disabled = true;
    setTimeout(function () {
      leaveEncounter({ flee: true });
    }, 900);
  }

  /** Wire Yeung encounter art — knife ④ BACK/SIDE toward critter; FRONT = boot only. */
  function wireYeungThrowStub() {
    const el = $("enc-yeung-throw");
    if (!el) return;
    el.classList.add("hidden");
    el.removeAttribute("src");
    const trySrc = function (url, next) {
      if (!url) {
        if (next) next();
        else el.classList.add("hidden");
        return;
      }
      const probe = new Image();
      probe.onload = function () {
        el.src = url + "?v=" + V;
        el.classList.remove("hidden");
      };
      probe.onerror = function () {
        if (next) next();
        else el.classList.add("hidden");
      };
      probe.src = url + "?v=" + V;
    };
    // ecgo23 PASS: back → side → legacy throw side/sideback (never front on encounter)
    trySrc(ASSETS.YEUNG_ENCOUNTER_BACK, function () {
      trySrc(ASSETS.YEUNG_ENCOUNTER_SIDE, function () {
        trySrc(ASSETS.YEUNG_THROW_SIDE, function () {
          trySrc(ASSETS.YEUNG_THROW_SIDE_ALT, null);
        });
      });
    });
  }

  function clearEncArtFx() {
    const art = $("enc-art");
    if (!art) return;
    art.classList.remove("evo-placeholder", "evo-l2", "evo-l3", "evo-l4", "anim-dodge", "anim-block");
    const badge = $("enc-evo-badge");
    if (badge) {
      badge.classList.add("hidden");
      badge.textContent = "";
    }
  }

  /** Set encounter art to current evo level; placeholder tint+badge if L2/L3/L4 missing. */
  function setEncounterArt(sp, word) {
    const art = $("enc-art");
    if (!art || !sp) return;
    clearEncArtFx();
    const wid = word && word.id != null ? Number(word.id) : Number(sp.id);
    const pose = verbPoseSrc(wid);
    if (pose) {
      art.onload = function () {
        art.style.opacity = "1";
        art.style.visibility = "visible";
      };
      art.onerror = function () {
        // fallback species L1 if pose missing
        art.onerror = function () {
          art.src = speciesMapFile(sp) + "?v=" + V;
        };
        art.src = speciesFile(sp) + "?v=" + V;
      };
      art.alt = (word && (word.display || word.term)) || "verb pose";
      art.className = "";
      art.removeAttribute("hidden");
      art.style.cssText =
        "transform:none;opacity:1;visibility:visible;display:block;object-fit:contain;";
      art.src = pose + "?v=" + V;
      return;
    }
    const lv = evoLevelFor(sp.id);
    const base = speciesFile(sp) + "?v=" + V;
    const badge = $("enc-evo-badge");
    const applyPlaceholder = function (level) {
      art.classList.add("evo-placeholder");
      if (level >= 2) art.classList.add("evo-l" + level);
      if (badge) {
        badge.textContent = "Lv" + level;
        badge.classList.remove("hidden");
      }
    };
    art.onload = function () {
      art.style.opacity = "1";
      art.style.visibility = "visible";
    };
    art.alt = (word && (word.display || word.term)) || "critter";
    art.className = "";
    art.removeAttribute("hidden");
    // ecgo23: leave size to CSS (#enc-art TR bigger / 退地大); only clear transforms
    art.style.cssText =
      "transform:none;opacity:1;visibility:visible;display:block;object-fit:contain;";
    if (lv <= 1) {
      art.onerror = function () {
        art.src = speciesMapFile(sp) + "?v=" + V;
      };
      art.src = base;
      return;
    }
    const cands = speciesEvoCandidates(sp, lv);
    let i = 0;
    const tryNext = function () {
      if (i >= cands.length) {
        // fallback L1 + placeholder badge
        art.onerror = function () {
          art.src = speciesMapFile(sp) + "?v=" + V;
          applyPlaceholder(lv);
        };
        art.onload = function () {
          art.style.opacity = "1";
          art.style.visibility = "visible";
          applyPlaceholder(lv);
        };
        art.src = base;
        return;
      }
      const url = cands[i++] + "?v=" + V;
      art.onerror = tryNext;
      art.onload = function () {
        art.style.opacity = "1";
        art.style.visibility = "visible";
        if (badge) {
          badge.textContent = "Lv" + lv;
          badge.classList.remove("hidden");
        }
      };
      art.src = url;
    };
    tryNext();
  }

  /* ---------- Normalize answer ---------- */
  function normalizeAnswer(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2010-\u2015\u2212]/g, "-")
      .replace(/\s+/g, " ")
      .replace(/\s*-\s*/g, "-");
  }

  function answersFor(word) {
    const set = new Set();
    const display = normalizeAnswer(word.display);
    const term = normalizeAnswer(word.term);
    set.add(display);
    set.add(term);
    if (display.indexOf("-") >= 0) {
      set.add(display.replace(/-/g, " "));
      set.add(display.replace(/-/g, ""));
    }
    if (term.indexOf("-") >= 0) {
      set.add(term.replace(/-/g, " "));
      set.add(term.replace(/-/g, ""));
    }
    const art = word.article ? normalizeAnswer(word.article) : "";
    if (art && display) set.add(art + " " + display.replace(/-/g, " "));
    // ecgo41: honor vocab accept[] (S4/S5 DRAFT; also strengthens S2)
    if (word && Array.isArray(word.accept)) {
      word.accept.forEach(function (a) {
        const n = normalizeAnswer(a);
        if (n) set.add(n);
      });
    }
    return set;
  }

  function checkAnswer(word, raw) {
    const n = normalizeAnswer(raw);
    if (!n) return false;
    return answersFor(word).has(n);
  }

  /* ---------- Wild spawn: random, same species OK many times ---------- */
  function randomWordId() {
    if (!DATA.words.length) return 1;
    // ecgo24 Stage2 DRAFT: prefer words for currentStage (S2 id101–121); fall back to any
    let pool = DATA.words.filter(function (w) {
      var idn = Number(w.id);
      var st;
      if (w.stage != null) st = Number(w.stage);
      else if (idn >= 600) st = 6;
      else if (idn >= 500) st = 5;
      else if (idn >= 400) st = 4;
      else if (idn >= 100) st = 2;
      else st = 1;
      return st === currentStage;
    });
    if (!pool.length) pool = DATA.words;
    const w = pool[(Math.random() * pool.length) | 0];
    return w.id;
  }

  function tooCloseToWilds(x, y) {
    for (let i = 0; i < wild.length; i++) {
      const c = wild[i];
      if (!c || c.cooldown > 0) continue;
      if (Math.hypot(c.x - x, c.y - y) < WILD_MIN_SEP) return true;
    }
    return false;
  }

  function spawnOne() {
    const id = randomWordId();
    // ecgo13: spread across camera + world — wider lane, ring, and world scatter.
    // Camera shows ~MAP_H*0.62 ≈ 595px ahead; keep most spawns visible but not piled.
    let x = player.x;
    let y = player.y;
    let placed = false;
    for (let attempt = 0; attempt < 28; attempt++) {
      const roll = Math.random();
      if (roll < 0.45) {
        // wide ahead cone (was ±80px → ±320px)
        y = Math.max(80, player.y - (260 + Math.random() * 380));
        x = player.x + (Math.random() - 0.5) * 640;
      } else if (roll < 0.75) {
        const ang = Math.random() * Math.PI * 2;
        const dist = 320 + Math.random() * 520; // 320–840
        x = player.x + Math.cos(ang) * dist;
        y = player.y + Math.sin(ang) * dist;
      } else {
        // world scatter so map fills out, not only near player
        x = 120 + Math.random() * (WORLD_W - 240);
        y = 120 + Math.random() * (WORLD_H - 240);
      }
      x = Math.max(80, Math.min(WORLD_W - 80, x));
      y = Math.max(80, Math.min(WORLD_H - 80, y));
      const dx = x - player.x;
      const dy = y - player.y;
      const d = Math.hypot(dx, dy);
      const inVol = d < ENCOUNTER_R + 48 || (dy < -16 && dy > -300 && Math.abs(dx) < 150);
      if (inVol || tooCloseToWilds(x, y)) continue;
      placed = true;
      break;
    }
    if (!placed) {
      // last resort: far ahead, still respect min sep best-effort
      y = Math.max(80, player.y - (480 + Math.random() * 200));
      x = player.x + (Math.random() - 0.5) * 700;
      x = Math.max(80, Math.min(WORLD_W - 80, x));
      y = Math.max(80, Math.min(WORLD_H - 80, y));
    }
    wild.push({ id, x, y, cooldown: 0, uid: wildUid++ });
  }

  function spawnWild(reset) {
    if (reset) {
      wild = [];
      player.x = WORLD_W * 0.5;
      player.y = WORLD_H * 0.72;
      updateCamera();
    }
    while (wild.length < WILD_COUNT) spawnOne();
  }

  function updateCamera() {
    cam.x = player.x - MAP_W / 2;
    cam.y = player.y - MAP_H * 0.62;
    cam.x = Math.max(0, Math.min(WORLD_W - MAP_W, cam.x));
    cam.y = Math.max(0, Math.min(WORLD_H - MAP_H, cam.y));
  }

  /* ---------- Map render / loop (real pan/walk) ---------- */
  const imgCache = Object.create(null);
  function getImg(src) {
    const key = src;
    if (imgCache[key]) return imgCache[key];
    const im = new Image();
    im.src = src + (src.indexOf("?") >= 0 ? "&" : "?") + "v=" + V;
    imgCache[key] = im;
    return im;
  }

  function probeSilhouette(sp) {
    const src = speciesSilFile(sp);
    if (silReady[src] !== undefined) return;
    silReady[src] = false;
    const im = new Image();
    im.onload = () => {
      silReady[src] = true;
      imgCache[src] = im;
    };
    im.onerror = () => {
      silReady[src] = false;
    };
    im.src = src + "?v=" + V;
  }

  function drawMap() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Lab map E tiled/stretched across world — camera scrolls with player
    const bg = getImg(activeMapBg());
    if (bg.complete && bg.naturalWidth) {
      // cover world with map image (scale to world)
      const scale = Math.max(WORLD_W / bg.naturalWidth, WORLD_H / bg.naturalHeight);
      const dw = bg.naturalWidth * scale;
      const dh = bg.naturalHeight * scale;
      const ox = (WORLD_W - dw) / 2 - cam.x;
      const oy = (WORLD_H - dh) / 2 - cam.y;
      ctx.drawImage(bg, ox, oy, dw, dh);
      // soft vignette at bottom for UI
      const g = ctx.createLinearGradient(0, h * 0.55, 0, h);
      g.addColorStop(0, "rgba(8,24,32,0)");
      g.addColorStop(1, "rgba(8,24,32,0.45)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.fillStyle = "#0e3a48";
      ctx.fillRect(0, 0, w, h);
    }

    // grid hint so movement is obvious
    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    const grid = 120;
    const gx0 = -((cam.x % grid) + grid) % grid;
    const gy0 = -((cam.y % grid) + grid) % grid;
    for (let x = gx0; x < w; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = gy0; y < h; y += grid) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.restore();

    // Overlays + wilds + hero — y-sorted far→near (friends/props NOT baked into map)
    const layer = [];

    MAP_PROPS.forEach((p) => {
      layer.push({
        kind: "prop",
        y: p.y,
        sx: p.x - cam.x,
        sy: p.y - cam.y,
        p,
      });
    });
    MAP_FRIENDS.forEach((f) => {
      layer.push({
        kind: "friend",
        y: f.y,
        sx: f.x - cam.x,
        sy: f.y - cam.y,
        f,
      });
    });
    // ecgo23: companions A/B walk near Yeung — full-body, clamp so 唔切邊
    MAP_COMPANIONS.forEach((c) => {
      let wx = player.x + c.ox;
      let wy = player.y + c.oy;
      const marginX = c.w * 0.55;
      const marginY = c.h * 0.85;
      wx = Math.max(marginX, Math.min(WORLD_W - marginX, wx));
      wy = Math.max(marginY, Math.min(WORLD_H - marginY, wy));
      layer.push({
        kind: "companion",
        y: wy,
        sx: wx - cam.x,
        sy: wy - cam.y,
        c,
      });
    });

    wild
      .filter((c) => c.cooldown <= 0)
      .forEach((c) => {
        layer.push({
          kind: "wild",
          y: c.y,
          sx: c.x - cam.x,
          sy: c.y - cam.y,
          c,
        });
      });

    // hero last among same-y (slight bias)
    layer.push({
      kind: "hero",
      y: player.y + 0.5,
      sx: player.x - cam.x,
      sy: player.y - cam.y,
    });

    layer
      .filter((o) => o.sx > -220 && o.sx < w + 220 && o.sy > -280 && o.sy < h + 280)
      .sort((a, b) => a.y - b.y)
      .forEach((o) => {
        if (o.kind === "prop") {
          const p = o.p;
          const im = getImg(p.src);
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(o.sx, o.sy + p.h * 0.28, p.w * 0.38, p.h * 0.08, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,0,0,0.28)";
          ctx.fill();
          if (im.complete && im.naturalWidth) {
            ctx.drawImage(im, o.sx - p.w / 2, o.sy - p.h * 0.82, p.w, p.h);
          }
          ctx.restore();
          return;
        }
        if (o.kind === "friend") {
          const f = o.f;
          const frames = (f.framesKey && ASSETS[f.framesKey]) || [];
          let src = f.src;
          if (frames.length) {
            // soft idle sway on map (slow cycle) — planted 退地
            const fi = Math.floor(walkPhase * 0.45) % frames.length;
            src = frames[fi];
          }
          const im = getImg(src);
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(o.sx, o.sy + f.h * 0.06, f.w * 0.30, f.h * 0.05, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,0,0,0.22)";
          ctx.fill();
          if (im.complete && im.naturalWidth) {
            ctx.drawImage(im, o.sx - f.w / 2, o.sy - f.h * 0.95, f.w, f.h); // soft 退地
          }
          ctx.restore();
          return;
        }
        if (o.kind === "companion") {
          const c = o.c;
          const frames = ASSETS[c.framesKey] || [];
          let src = c.fallback;
          if (frames.length) {
            if (isWalking) {
              const fi = Math.floor(walkPhase) % frames.length;
              src = frames[fi];
            } else {
              src = frames[0];
            }
          }
          const im = getImg(src);
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(o.sx, o.sy + c.h * 0.06, c.w * 0.30, c.h * 0.05, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,0,0,0.22)";
          ctx.fill();
          if (im.complete && im.naturalWidth) {
            // screen-edge nudge so full-body 唔CUT on camera
            let dx = o.sx - c.w / 2;
            let dy = o.sy - c.h * 0.95; // ecgo24 退地收
            if (dx < 4) dx = 4;
            if (dx + c.w > w - 4) dx = w - 4 - c.w;
            if (dy < 4) dy = 4;
            if (dy + c.h > h - 4) dy = h - 4 - c.h;
            ctx.drawImage(im, dx, dy, c.w, c.h);
          }
          ctx.restore();
          return;
        }
        if (o.kind === "wild") {
          const c = o.c;
          const sx = o.sx;
          const sy = o.sy;
          const sp = speciesById(c.id);
          if (!sp) return;
          const size = 128;
          let im = null;
          const pose = verbPoseSrc(c.id);
          if (pose) {
            im = getImg(pose);
          } else {
            const idle = speciesIdleFrames(sp);
            if (idle.length) {
              const fi = Math.floor(performance.now() / 380) % idle.length;
              im = getImg(idle[fi]);
            }
            if (!im || !(im.complete && im.naturalWidth)) {
              im = getImg(speciesMapFile(sp));
            }
          }
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(sx, sy + size * 0.42, size * 0.38, size * 0.12, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,0,0,0.32)";
          ctx.fill();
          if (im && im.complete && im.naturalWidth) {
            ctx.drawImage(im, sx - size / 2, sy - size * 0.92, size, size); // ecgo24 退地收
          } else {
            const fb = getImg(speciesFile(sp));
            if (fb.complete && fb.naturalWidth) {
              ctx.drawImage(fb, sx - size / 2, sy - size / 2, size, size);
            } else {
              ctx.fillStyle = "#1ec8b0";
              ctx.beginPath();
              ctx.arc(sx, sy, size * 0.35, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          if (owned.has(Number(c.id))) {
            ctx.strokeStyle = "rgba(30,200,176,0.85)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(sx, sy, size / 2 + 4, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.restore();
          return;
        }
        if (o.kind === "hero") {
          // yeung_hero_walk_v1 — idle when stopped; walk_front/back ×4 while moving (HERO_MAP)
          const walkFrames = facing >= 0 ? ASSETS.PLAYER_WALK_BACK : ASSETS.PLAYER_WALK_FRONT;
          const idleSrc = facing >= 0 ? ASSETS.PLAYER_BACK : ASSETS.PLAYER_FRONT;
          let pSrc = idleSrc;
          if (isWalking && walkFrames && walkFrames.length) {
            const fi = Math.floor(walkPhase) % walkFrames.length;
            pSrc = walkFrames[fi];
          }
          const pImg = getImg(pSrc);
          const pw = 150;
          const ph = 210;
          const psx = o.sx;
          const psy = o.sy;
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(psx, psy + ph * 0.18, 36, 12, 0, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,0,0,0.3)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,0.55)";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.ellipse(psx, psy + ph * 0.16, 54, 18, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.strokeStyle = "rgba(255,255,255,0.28)";
          ctx.beginPath();
          ctx.ellipse(psx, psy + ph * 0.16, 72, 24, 0, 0, Math.PI * 2);
          ctx.stroke();
          if (pImg.complete && pImg.naturalWidth) {
            ctx.drawImage(pImg, psx - pw / 2, psy - ph * 0.95, pw, ph); // ecgo24 退地收
          } else {
            const fb = getImg(facing >= 0 ? "assets/protagonist_c_back.png" : "assets/protagonist_c_front.png");
            if (fb.complete && fb.naturalWidth) {
              ctx.drawImage(fb, psx - pw / 2, psy - ph * 0.95, pw, ph); // ecgo24 退地收
            } else {
              ctx.fillStyle = "#ff8a3d";
              roundRect(ctx, psx - 20, psy - 40, 40, 56, 14);
              ctx.fill();
            }
          }
          ctx.restore();
        }
      });
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  let stepAcc = 0;

  /** Apply world-space delta (no normalize). Used by drag after CSS→world scale. */
  function movePlayerRaw(wx, wy) {
    if (!wx && !wy) return;
    player.x += wx;
    player.y += wy;
    player.x = Math.max(PLAYER_R, Math.min(WORLD_W - PLAYER_R, player.x));
    player.y = Math.max(PLAYER_R, Math.min(WORLD_H - PLAYER_R, player.y));
    if (Math.abs(wy) >= Math.abs(wx)) facing = wy <= 0 ? 1 : -1;
    isWalking = true;
    bob += 0.35;
    walkPhase += 0.18; // ~8fps ×4 walk cycle
    stepAcc += Math.abs(wx) + Math.abs(wy);
    if (stepAcc > 18) {
      stepAcc = 0;
      sfx("step");
    }
    updateCamera();
  }

  /** Pad/keys: fixed walk speed in a direction (normalized). */
  function movePlayer(dx, dy) {
    if (!dx && !dy) return;
    const len = Math.hypot(dx, dy) || 1;
    movePlayerRaw((dx / len) * WALK_SPEED, (dy / len) * WALK_SPEED);
  }

  /** Client (CSS px) → world, accounting for canvas CSS size vs internal res (iPad). */
  function clientToWorld(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const rw = Math.max(1, rect.width);
    const rh = Math.max(1, rect.height);
    const sx = ((clientX - rect.left) / rw) * canvas.width;
    const sy = ((clientY - rect.top) / rh) * canvas.height;
    return { x: sx + cam.x, y: sy + cam.y };
  }

  /** Wild center in CSS client coords (screen-space hit — immune to world skew). */
  function wildClientPos(c) {
    const rect = canvas.getBoundingClientRect();
    const rw = Math.max(1, rect.width);
    const rh = Math.max(1, rect.height);
    return {
      x: rect.left + ((c.x - cam.x) / canvas.width) * rw,
      y: rect.top + ((c.y - cam.y) / canvas.height) * rh,
    };
  }

  function nearestWild() {
    let best = null;
    let bestD = Infinity;
    for (let i = 0; i < wild.length; i++) {
      const c = wild[i];
      if (!c || c.cooldown > 0) continue;
      const d = Math.hypot(c.x - player.x, c.y - player.y);
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best ? { c: best, d: bestD } : null;
  }

  function wildInTrigger(c) {
    if (!c || c.cooldown > 0) return false;
    const dx = c.x - player.x;
    const dy = c.y - player.y;
    const d = Math.hypot(dx, dy);
    if (d < ENCOUNTER_R) return true;
    // forward corridor — walk ↑ into sprite without exact center aim
    if (dy < -16 && dy > -280 && Math.abs(dx) < 140) return true;
    return false;
  }

  function updateDbgHud(extra) {
    const el = $("dbg-hud");
    if (!el) return;
    const n = nearestWild();
    const lines = [
      "ecgo15 px=" + player.x.toFixed(0) + "," + player.y.toFixed(0),
      "near=" + (n ? "id" + n.c.id + " d=" + n.d.toFixed(0) + " uid" + n.c.uid : "none"),
      "grace=" + encounterGrace + " map=" + (mapRunning ? 1 : 0) + " enc=" + (currentEncounter ? 1 : 0),
      "probe=" + (dbgLastProbe || "-"),
      "tap=" + (dbgLastTap || "-"),
      "open#" + dbgOpenCount + " " + (dbgLastOpenReason || "-"),
      "block=" + (dbgLastBlock || "-"),
    ];
    if (extra) lines.push(String(extra));
    el.textContent = lines.join("\n");
  }

  /** Returns true if an encounter opened (caller should stop map loop). */
  function probeEncounter(reason) {
    reason = reason || "probe";
    if (currentEncounter) {
      dbgLastBlock = "already-enc";
      dbgLastProbe = reason + ":block-enc";
      return false;
    }
    if (!mapRunning) {
      dbgLastBlock = "mapOff";
      dbgLastProbe = reason + ":block-mapOff";
      return false;
    }
    if (encounterGrace > 0) {
      dbgLastBlock = "grace" + encounterGrace;
      dbgLastProbe = reason + ":grace" + encounterGrace;
      updateDbgHud();
      return false;
    }
    // Prefer nearest within ENCOUNTER_R / corridor
    const ranked = wild
      .filter(function (c) { return c && c.cooldown <= 0; })
      .map(function (c) {
        return { c: c, d: Math.hypot(c.x - player.x, c.y - player.y) };
      })
      .sort(function (a, b) { return a.d - b.d; });
    for (let i = 0; i < ranked.length; i++) {
      const c = ranked[i].c;
      if (!wildInTrigger(c)) continue;
      dbgLastProbe = reason + ":hit id" + c.id + " d=" + ranked[i].d.toFixed(0);
      openEncounter(c, reason + "-walk");
      return !!currentEncounter;
    }
    dbgLastProbe = reason + ":miss n=" + ranked.length + (ranked[0] ? " nd=" + ranked[0].d.toFixed(0) : "");
    updateDbgHud();
    return false;
  }

  /**
   * Hard-guarantee tap/click on wild (screen-space CSS hitbox).
   * Ignores encounterGrace — tap must always open.
   */
  function tryTapEncounter(clientX, clientY, reason) {
    reason = reason || "tap";
    if (currentEncounter) {
      dbgLastTap = reason + ":already";
      dbgLastBlock = "already-enc";
      return false;
    }
    const mapActive = screens.map && screens.map.classList.contains("active");
    if (!mapActive) {
      dbgLastTap = reason + ":notMap";
      dbgLastBlock = "not-map";
      return false;
    }
    // Screen-space first (generous finger slop)
    const TAP_CSS = 120; // match larger 128px map sprites (ecgo12)
    let best = null;
    let bestD = TAP_CSS;
    for (let i = 0; i < wild.length; i++) {
      const c = wild[i];
      if (!c || c.cooldown > 0) continue;
      const p = wildClientPos(c);
      const d = Math.hypot(p.x - clientX, p.y - clientY);
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    // World-space fallback
    if (!best) {
      const wpt = clientToWorld(clientX, clientY);
      const TAP_W = 200;
      let bestW = TAP_W;
      for (let i = 0; i < wild.length; i++) {
        const c = wild[i];
        if (!c || c.cooldown > 0) continue;
        const d = Math.hypot(c.x - wpt.x, c.y - wpt.y);
        if (d < bestW) {
          bestW = d;
          best = c;
        }
      }
      if (best) dbgLastTap = reason + ":world d=" + bestW.toFixed(0) + " id" + best.id;
    } else {
      dbgLastTap = reason + ":css d=" + bestD.toFixed(0) + " id" + best.id;
    }
    if (!best) {
      dbgLastTap = reason + ":miss @" + Math.round(clientX) + "," + Math.round(clientY);
      updateDbgHud();
      return false;
    }
    encounterGrace = 0; // tap bypasses grace
    openEncounter(best, reason + "-tap");
    return !!currentEncounter;
  }

  function tick() {
    if (!mapRunning) return;
    let dx = 0;
    let dy = 0;
    if (keys.ArrowUp || keys.w || keys.W) dy -= 1;
    if (keys.ArrowDown || keys.s || keys.S) dy += 1;
    if (keys.ArrowLeft || keys.a || keys.A) dx -= 1;
    if (keys.ArrowRight || keys.d || keys.D) dx += 1;
    dx += padDir.x;
    dy += padDir.y;
    if (dx || dy) movePlayer(dx, dy);
    else if (!dragging) isWalking = false;

    wild.forEach((c) => {
      if (c.cooldown > 0) c.cooldown--;
    });

    // cull very far, respawn
    wild = wild.filter((c) => {
      const d = Math.hypot(c.x - player.x, c.y - player.y);
      return d < 1400 || c.cooldown > 0;
    });
    while (wild.length < WILD_COUNT) spawnOne();

    drawMap();

    if (encounterGrace > 0) encounterGrace--;

    updateDbgHud();

    if (probeEncounter("tick")) {
      return; // openEncounter → stopMap; do not schedule another tick
    }

    raf = requestAnimationFrame(tick);
  }

  function startMap() {
    mapRunning = true;
    encounterGrace = 12; // short anti-instant-pop; tap bypasses
    updateOwnedHud();
    if (!wild.length) spawnWild(true);
    else updateCamera();
    const av = $("player-avatar");
    if (av) av.style.backgroundImage = "url(" + ASSETS.PLAYER_FRONT + ")";
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
    if (mapProbeTimer) clearInterval(mapProbeTimer);
    mapProbeTimer = setInterval(function () {
      if (!mapRunning || currentEncounter) return;
      probeEncounter("interval");
      updateDbgHud();
    }, 100);
    startBgm();
    updateDbgHud("startMap");
  }

  function stopMap() {
    mapRunning = false;
    cancelAnimationFrame(raf);
    if (mapProbeTimer) {
      clearInterval(mapProbeTimer);
      mapProbeTimer = 0;
    }
    stopBgm();
  }

  /* ---------- Encounter ---------- */
  function openEncounter(critter, reason) {
    reason = reason || "open";
    const word = wordById(critter && critter.id);
    const sp = speciesById(critter && critter.id);
    if (!word || !sp) {
      dbgLastBlock = "missing-word/sp id=" + (critter && critter.id);
      console.warn("[ecgo] openEncounter missing word/sp", critter && critter.id, !!word, !!sp);
      updateDbgHud();
      return;
    }
    // end map drag so pointer capture cannot keep moving under encounter UI
    dragging = false;
    dragLast = null;
    dragPointerId = null;
    dragOrigin = null;
    dragMovedPx = 0;
    padDir.x = 0;
    padDir.y = 0;

    ballsLeft = BALLS_MAX;
    inCatchMode = false;
    catchBusy = false;
    spinCharge = 0;
    spinChargeDir = 1;
    spinHolding = false;
    answerFastBonus = false;
    if (screens.encounter) screens.encounter.classList.remove("catch-phase");
    syncSpinUI();
    resetFlickOrb();
    sfx("encounter");

    const art = $("enc-art");
    const hint = $("enc-hint");
    const fb = $("enc-feedback");
    const inp = $("enc-input");
    const submit = $("btn-submit");
    const ca = $("catch-actions");
    const overlay = $("catch-overlay");
    const dodgeFx = $("dodge-fx");
    const encScreen = screens.encounter;

    if (!art || !encScreen || !inp || !hint) {
      dbgLastBlock = "missing-DOM";
      console.warn("[ecgo] openEncounter missing DOM", !!art, !!encScreen, !!inp);
      updateDbgHud();
      return;
    }

    // Wire UI BEFORE mode switch so first paint is not empty black
    pauseBgm();
    clearTypeTimer();
    typeSpoken = false;
    setEncounterArt(sp, word);
    applyEncounterLabBg();
    wireYeungThrowStub();

    const lv = evoLevelFor(sp.id);
    hint.textContent =
      "打出英文詞！ · " +
      (word.display || "") +
      (lv > 1 ? " · Lv" + lv : "") +
      " · 15s";
    hint.classList.remove("hidden");
    if (fb) {
      fb.textContent = "";
      fb.className = "enc-feedback";
    }
    inp.value = "";
    inp.disabled = false;
    inp.classList.remove("hidden");
    if (submit) submit.classList.remove("hidden");
    if (ca) ca.classList.add("hidden");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
    }
    if (dodgeFx) dodgeFx.classList.add("hidden");
    updateBallsHud();

    currentEncounter = { critter: critter, word: word, sp: sp };
    dbgOpenCount += 1;
    dbgLastOpenReason = reason + " id" + critter.id;
    dbgLastBlock = "";

    // Force encounter screen visible (do not rely solely on .active toggle)
    show("encounter");
    encScreen.classList.add("active");
    encScreen.style.display = "flex";
    encScreen.style.position = "absolute";
    encScreen.style.inset = "0";
    encScreen.style.zIndex = "30";
    encScreen.style.visibility = "visible";
    encScreen.style.opacity = "1";
    if (screens.map) {
      screens.map.classList.remove("active");
      screens.map.style.display = "none";
    }

    // ecgo52: English TTS every encounter open (force — teaching word audible even if SFX muted)
    if (!typeSpoken) {
      typeSpoken = true;
      setTimeout(function () {
        warmTtsVoices();
        speakEnglish(word, { force: true });
      }, 160);
      // iPad Safari: voices may arrive late — soft retry
      setTimeout(function () {
        if (!currentEncounter || currentEncounter.word !== word) return;
        warmTtsVoices();
        if (!ttsVoicesReady || !(window.speechSynthesis.getVoices() || []).length) {
          speakEnglish(word, { force: true });
        } else if (!ttsPreferredVoice) {
          speakEnglish(word, { force: true });
        }
      }, 700);
    }
    startTypeTimer();

    console.info("[ecgo] openEncounter", V, reason, critter.id, "evoL" + lv);
    updateDbgHud("OPEN");

    setTimeout(function () {
      try {
        inp.focus();
      } catch (_) {}
    }, 200);
  }

  function leaveEncounter(opts) {
    opts = opts || {};
    const enc = currentEncounter;
    currentEncounter = null;
    inCatchMode = false;
    catchBusy = false;
    ballsLeft = BALLS_MAX;
    spinCharge = 0;
    spinChargeDir = 1;
    spinHolding = false;
    clearTypeTimer();
    typeStartAt = 0;
    typeSpoken = false;
    answerFastBonus = false;
    clearEncArtFx();
    if (screens.encounter) screens.encounter.classList.remove("catch-phase");
    const guideRestore = document.querySelector(".flick-guide");
    if (guideRestore) guideRestore.textContent = "↑ FLICK TO THROW";
    try {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    } catch (_) {}
    const yeungThrow = $("enc-yeung-throw");
    if (yeungThrow) yeungThrow.classList.add("hidden");
    updateBallsHud();
    syncSpinUI();
    resetFlickOrb();
    if (enc && enc.critter) {
      if (opts.caught) {
        wild = wild.filter((c) => c.uid !== enc.critter.uid);
        spawnOne();
      } else if (opts.flee) {
        enc.critter.cooldown = 120;
        const ang = Math.random() * Math.PI * 2;
        enc.critter.x = player.x + Math.cos(ang) * (320 + Math.random() * 200);
        enc.critter.y = player.y + Math.sin(ang) * (320 + Math.random() * 200);
        enc.critter.x = Math.max(80, Math.min(WORLD_W - 80, enc.critter.x));
        enc.critter.y = Math.max(80, Math.min(WORLD_H - 80, enc.critter.y));
      } else {
        enc.critter.cooldown = 70;
        enc.critter.x = player.x + (Math.random() - 0.5) * 400;
        enc.critter.y = player.y - 260 - Math.random() * 160;
      }
    }
    if (wild.filter((c) => c.cooldown <= 0).length < 2) spawnWild(false);
    encounterGrace = 18;
    if (screens.encounter) {
      screens.encounter.style.display = "";
      screens.encounter.style.position = "";
      screens.encounter.style.inset = "";
      screens.encounter.style.zIndex = "";
      screens.encounter.style.visibility = "";
      screens.encounter.style.opacity = "";
    }
    if (screens.map) {
      screens.map.style.display = "";
    }
    const overlay = $("catch-overlay");
    if (overlay) overlay.classList.add("hidden");
    const dodgeFx = $("dodge-fx");
    if (dodgeFx) dodgeFx.classList.add("hidden");
    const orb = $("invent-orb");
    if (orb) {
      orb.className = "invent-orb has-art";
      applyOrbArt();
      orb.style.transition = "";
      orb.style.transform = "";
    }
    const ca = $("catch-actions");
    if (ca) ca.classList.add("hidden");
    const submit = $("btn-submit");
    if (submit) submit.classList.remove("hidden");
    const inp = $("enc-input");
    if (inp) {
      inp.disabled = false;
      inp.value = "";
    }
    const hint = $("enc-hint");
    if (hint) hint.classList.remove("hidden");
    show("map");
    updateDbgHud("leave");
  }

  function enterCatchMode() {
    inCatchMode = true;
    spinCharge = 0;
    spinChargeDir = 1;
    clearTypeTimer(); // typed in time — stop countdown
    const encScreen = screens.encounter;
    if (encScreen) encScreen.classList.add("catch-phase");
    updateBallsHud();
    syncSpinUI();
    resetFlickOrb();
    $("enc-hint").textContent = "FLICK Invent-Orb ↑ · " + ballsLeft + " balls";
    $("enc-input").disabled = true;
    $("btn-submit").classList.add("hidden");
    const ca = $("catch-actions");
    if (ca) ca.classList.remove("hidden");
    // E_layout: feedback lives in hint; panel feedback hidden in catch-phase CSS
    $("enc-feedback").textContent = "手指向上 flick 掟球（可先 Hold Spin；精靈會避／擋！）";
    $("enc-feedback").className = "enc-feedback info";
    // flick guide = Throw ↑ affordance
    const guide = document.querySelector(".flick-guide");
    if (guide) guide.textContent = "↑";
  }

  function trySubmit() {
    if (!currentEncounter || catchBusy || inCatchMode) return;
    const word = currentEncounter.word;
    const raw = $("enc-input").value;
    const fb = $("enc-feedback");
    if (checkAnswer(word, raw)) {
      const elapsed = typeStartAt ? performance.now() - typeStartAt : Infinity;
      answerFastBonus = elapsed <= FAST_ANSWER_MS;
      fb.textContent = answerFastBonus
        ? "啱！快答 +20% · Flick Invent-Orb ↑（每次 3 球）"
        : "啱！Flick Invent-Orb ↑（每次 3 球）";
      fb.className = "enc-feedback ok";
      sfx("correct");
      enterCatchMode();
    } else {
      fb.textContent = "未啱，再試！";
      fb.className = "enc-feedback bad";
      sfx("wrong");
    }
  }

  function startSpinHold() {
    if (!inCatchMode || catchBusy || ballsLeft <= 0) return;
    spinHolding = true;
    playSpinSfx("click_whoosh");
    sfx("ui_tap");
    if (!spinTimer) {
      spinTimer = setInterval(() => {
        if (!spinHolding || !inCatchMode || catchBusy) return;
        // ecgo22: ping-pong 0→1→0→1… (not clamp at 1)
        spinCharge += spinChargeDir * 0.035;
        if (spinCharge >= 1) {
          spinCharge = 1;
          spinChargeDir = -1;
        } else if (spinCharge <= 0) {
          spinCharge = 0;
          spinChargeDir = 1;
        }
        syncSpinUI();
        if (Math.random() < 0.35) sfx("orb_spin");
      }, 50);
    }
  }

  function endSpinHold() {
    spinHolding = false;
  }

  /**
   * @param {{aim?:number, power?:number}} opts
   * aim: -1..1 horizontal; power: 0..1 from flick speed
   */
  function runCatchAttempt(opts) {
    opts = opts || {};
    if (!currentEncounter || catchBusy || !inCatchMode) return;
    if (ballsLeft <= 0) return;

    // Finger flick is primary; allow weak throw if somehow called without flick
    const aim = typeof opts.aim === "number" ? opts.aim : lastThrowAim;
    let power = typeof opts.power === "number" ? opts.power : lastThrowPower;
    // spin boosts power / reduces dodge
    if (spinCharge > 0.1) power = Math.min(1, power + spinCharge * 0.25);
    power = Math.max(0.35, Math.min(1, power));
    lastThrowAim = aim;
    lastThrowPower = power;

    catchBusy = true;
    spinHolding = false;
    const throwToken = currentEncounter; // invalidate if LEAVE mid-throw
    const ca = $("catch-actions");
    if (ca) ca.classList.add("hidden");

    // ecgo13/16: catch ≈ 1/8. Dodge OR block before catch roll.
    // ecgo22: SPIN sweet-spot ×1.4 + fast-answer ×1.2 stack, clamp ≤1 (base keep 0.125).
    const rate = Number(currentEncounter.word.catch_rate);
    let catchRate = isFinite(rate) ? rate : CATCH_CHANCE_DEFAULT;
    // ecgo24 BRIEF: exact 75% → 0.60 abs; else 72–78 → +0.30pp; then type×1.2; clamp≤1 (NO ×1.4/×1.3)
    const spinPct = Math.round((spinCharge || 0) * 100);
    if (spinPct === SPIN_EXACT_PCT) {
      catchRate = SPIN_EXACT_RATE;
    } else if (spinPct >= SPIN_BAND_LO && spinPct <= SPIN_BAND_HI) {
      catchRate = catchRate + SPIN_BAND_ADD;
    }
    if (answerFastBonus) catchRate *= CATCH_FAST_MULT;
    if (catchRate > 1) catchRate = 1;
    const dodgeChance = Math.max(0.08, BASE_DODGE * (1.2 - power * 0.55 - spinCharge * 0.35));
    const blockChance = Math.max(0.06, BASE_BLOCK * (1.15 - power * 0.4 - spinCharge * 0.3));
    const rDefend = Math.random();
    let defend = null; // "dodge" | "block" | null
    if (rDefend < dodgeChance) defend = "dodge";
    else if (rDefend < dodgeChance + blockChance) defend = "block";
    const success = !defend && Math.random() < catchRate;

    const overlay = $("catch-overlay");
    const orb = $("invent-orb");
    const msg = $("catch-msg");
    const dodgeFx = $("dodge-fx");
    const encArt = $("enc-art");
    overlay.classList.remove("hidden");
    stopDodgeStrip();
    if (dodgeFx) dodgeFx.classList.add("hidden");
    if (encArt) encArt.classList.remove("anim-dodge", "anim-block");
    orb.className = "invent-orb has-art spinning";
    // ecgo25 PASS LOCK throw_orb T0–T4 flight frames + arc tween
    const aimPx = aim * 110;
    const flyY = -120 - power * 160;
    const throwFrames = ASSETS.THROW_ORB_FRAMES || [];
    let throwFi = 0;
    function setThrowFrame(i) {
      if (!throwFrames.length) return;
      const src = throwFrames[Math.max(0, Math.min(throwFrames.length - 1, i))] + "?v=" + V;
      orb.style.backgroundImage = "url(" + src + ")";
    }
    setThrowFrame(0);
    orb.style.transition = "none";
    orb.style.transform = "translate(" + aimPx * 0.15 + "px, 100px) scale(0.55)";
    orb.classList.add("flying");
    msg.textContent = "";
    void orb.offsetWidth;
    sfx("orb_spin");
    sfx("throw");
    playSpinSfx("whoosh");

    const throwAnim = setInterval(function () {
      throwFi++;
      if (throwFi >= throwFrames.length) {
        clearInterval(throwAnim);
        return;
      }
      setThrowFrame(throwFi);
    }, 110);

    setTimeout(() => {
      orb.className = "invent-orb has-art flying";
      orb.style.transition = "transform 0.55s cubic-bezier(.15,.85,.25,1)";
      orb.style.transform = "translate(" + aimPx + "px, " + flyY + "px) scale(0.85) rotate(" + (aim * 25) + "deg)";
      sfx("orb_toss");
    }, 180);

    setTimeout(() => {
      orb.style.transition = "";
      if (defend) {
        ballsLeft--;
        updateBallsHud();
        orb.classList.add("miss");
        // PASS LOCK dodge_cutout: opaque strip 01→04 primary + light CSS nudge on #enc-art
        if (encArt) {
          encArt.classList.remove("anim-dodge", "anim-block");
          void encArt.offsetWidth;
          encArt.classList.add(defend === "block" ? "anim-block" : "anim-dodge");
        }
        if (dodgeFx) {
          const label = dodgeFx.querySelector("#dodge-fx-label") || dodgeFx;
          const img = dodgeFx.querySelector("#dodge-fx-img");
          if (label !== dodgeFx) label.textContent = defend === "block" ? "BLOCK!" : "DODGE!";
          else dodgeFx.textContent = defend === "block" ? "BLOCK!" : "DODGE!";
          if (img) playDodgeStrip(img, defend, currentEncounter && currentEncounter.sp && currentEncounter.sp.id);
          dodgeFx.classList.remove("hidden");
        }
        msg.textContent =
          (defend === "block" ? "擋咗！" : "避咗！") + "仲有 " + ballsLeft + " 球";
        msg.style.color = "#ff8a3d";
        sfx("dodge");
        setTimeout(() => {
          overlay.classList.add("hidden");
          stopDodgeStrip();
          if (dodgeFx) dodgeFx.classList.add("hidden");
          if (encArt) encArt.classList.remove("anim-dodge", "anim-block");
          catchBusy = false;
          spinCharge = Math.max(0, spinCharge * 0.35);
          syncSpinUI();
          resetFlickOrb();
          if (ballsLeft > 0) {
            $("enc-hint").textContent = "FLICK Invent-Orb ↑ · " + ballsLeft + " balls";
            $("enc-feedback").textContent = "再 flick ↑！";
            $("enc-feedback").className = "enc-feedback info";
            if (ca) ca.classList.remove("hidden");
          } else {
            msg.textContent = "逃走咗… 下次再試";
            overlay.classList.remove("hidden");
            sfx("catch_fail");
            setTimeout(() => leaveEncounter({ flee: true }), 900);
          }
        }, 900);
        return;
      }

      orb.classList.add("shake");
      sfx("orb_shake");

      setTimeout(() => {
        if (success) {
          orb.classList.remove("shake");
          orb.classList.add("burst");
          if (currentEncounter !== throwToken || !currentEncounter) return;
          const id = Number(currentEncounter.word.id);
          owned.add(id);
          catchCounts[String(id)] = (catchCounts[String(id)] || 0) + 1;
          saveOwned();
          updateOwnedHud();
          const newLv = evoLevelFor(id);
          const nCatch = catchCounts[String(id)];
          let evoNote = "";
          if (nCatch === EVO_CATCH_STEP) evoNote = " → 進化 Lv2！";
          else if (nCatch === EVO_CATCH_STEP * 2) evoNote = " → 進化 Lv3！";
          else if (nCatch === EVO_CATCH_STEP * 3) evoNote = " → 進化 Lv4！";
          else if (newLv > 1) evoNote = " · Lv" + newLv;
          msg.textContent = "捉到！ " + currentEncounter.word.term + evoNote;
          msg.style.color = "#3dd68c";
          sfx("catch_ok");
          setTimeout(() => leaveEncounter({ caught: true }), 1200);
        } else {
          ballsLeft--;
          updateBallsHud();
          orb.classList.remove("shake");
          orb.classList.add("miss");
          if (ballsLeft > 0) {
            msg.textContent = "未入！仲有 " + ballsLeft + " 球";
            msg.style.color = "#ff8a3d";
            sfx("catch_fail");
            setTimeout(() => {
              overlay.classList.add("hidden");
              catchBusy = false;
              spinCharge = Math.max(0, spinCharge * 0.4);
              syncSpinUI();
              resetFlickOrb();
              $("enc-hint").textContent = "FLICK Invent-Orb ↑ · " + ballsLeft + " balls";
              $("enc-feedback").textContent = "Invent-Orb ×" + ballsLeft;
              $("enc-feedback").className = "enc-feedback info";
              if (ca) ca.classList.remove("hidden");
            }, 900);
          } else {
            msg.textContent = "逃走咗… 下次再試";
            msg.style.color = "#ff8a3d";
            sfx("catch_fail");
            setTimeout(() => leaveEncounter({ flee: true }), 1100);
          }
        }
      }, 700 * 3);
    }, 700);
  }

  /* ---------- Dex / Gallery ANSWER ---------- */
  /* ecgo43a: hoist tap so renderDex owned cards can call it (was only inside bind()). */
  function uiTap(fn) {
    return function (e) {
      ensureAudio();
      sfx("ui_tap");
      fn(e);
    };
  }

  function renderDex() {
    const grid = $("dex-grid");
    grid.innerHTML = "";
    const ansBtn = $("btn-dex-answer");
    if (ansBtn) ansBtn.setAttribute("aria-pressed", dexShowAnswers ? "true" : "false");

    DATA.words.forEach((w) => {
      const sp = speciesById(w.id);
      const card = document.createElement("div");
      const isOwned = owned.has(Number(w.id));
      const nCatch = catchCounts[String(w.id)] || (isOwned ? 1 : 0);
      const lv = evoLevelFor(w.id);
      card.className =
        "dex-card" +
        (isOwned ? " owned" : " locked") +
        (!isOwned && dexShowAnswers ? " show-answer" : "") +
        (isOwned && lv > 1 ? " evo-l" + lv : "");

      const img = document.createElement("img");
      if (sp) {
        const silSrc = speciesSilFile(sp);
        if (!isOwned && silReady[silSrc]) {
          img.src = silSrc + "?v=" + V;
          img.classList.add("sil-asset");
        } else if (isOwned && lv > 1) {
          // try evo art; placeholder tint if missing
          const cands = speciesEvoCandidates(sp, lv);
          img.src = speciesFile(sp) + "?v=" + V;
          img.classList.add("evo-placeholder", "evo-l" + lv);
          if (cands.length) {
            const probe = new Image();
            probe.onload = function () {
              img.src = cands[0] + "?v=" + V;
              img.classList.remove("evo-placeholder");
            };
            probe.src = cands[0] + "?v=" + V;
          }
        } else {
          img.src = speciesFile(sp);
        }
      } else {
        img.src = "";
      }
      img.alt = isOwned ? w.term : "silhouette";

      const tag = document.createElement("div");
      tag.className = "answer-tag";
      tag.textContent = isOwned ? (lv > 1 ? "Lv" + lv : "CAUGHT") : dexShowAnswers ? "ANSWER" : "";

      const name = document.createElement("div");
      name.className = "name";
      if (isOwned) {
        name.textContent = w.term + (lv > 1 ? " · Lv" + lv : "");
      } else if (dexShowAnswers) {
        name.textContent = w.term;
      } else {
        name.textContent = "???";
      }

      const meta = document.createElement("div");
      meta.className = "meta";
      if (isOwned) {
        const next = catchesToNextEvo(w.id);
        meta.textContent =
          "Caught ×" +
          nCatch +
          " · Lv" +
          lv +
          (next > 0 ? " · 再捉" + next + "次進化" : " · MAX");
      } else if (dexShowAnswers) {
        meta.textContent = "ENGLISH ANSWER · silhouette only";
      } else {
        meta.textContent = "未開 · 撳 ANSWER 睇英詞";
      }

      card.appendChild(img);
      if (isOwned && lv > 1) {
        const evoBadge = document.createElement("div");
        evoBadge.className = "evo-badge";
        evoBadge.textContent = "Lv" + lv;
        card.appendChild(evoBadge);
      }
      if (tag.textContent) card.appendChild(tag);
      card.appendChild(name);
      card.appendChild(meta);

      if (isOwned && w.display) {
        const secondary = document.createElement("div");
        secondary.className = "meta";
        secondary.style.marginTop = "2px";
        secondary.textContent = w.display;
        card.appendChild(secondary);
      }
      if (!isOwned && dexShowAnswers) {
        const line = document.createElement("div");
        line.className = "answer-line";
        line.textContent = w.term;
        card.appendChild(line);
      }

      if (isOwned) {
        card.setAttribute("role", "button");
        card.tabIndex = 0;
        card.title = "睇晒 L1→L" + EVO_MAX_LEVEL;
        card.addEventListener("click", uiTap(function () {
          openDexDetail(w.id);
        }));
        card.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            openDexDetail(w.id);
          }
        });
      }

      grid.appendChild(card);
    });
    updateOwnedHud();
  }

  /* ---------- Flick throw (PoGO-like) ---------- */
  function bindFlick() {
    const zone = $("flick-zone");
    const orb = $("flick-orb");
    if (!zone || !orb) return;

    const onDown = (e) => {
      if (!inCatchMode || catchBusy || ballsLeft <= 0) return;
      if (e.target && e.target.closest && e.target.closest("#btn-spin")) return;
      e.preventDefault();
      ensureAudio();
      const t = e.touches ? e.touches[0] : e;
      flick.active = true;
      flick.pointerId = e.pointerId != null ? e.pointerId : 1;
      flick.startX = t.clientX;
      flick.startY = t.clientY;
      flick.x = t.clientX;
      flick.y = t.clientY;
      flick.t0 = performance.now();
      flick.samples = [{ x: t.clientX, y: t.clientY, t: flick.t0 }];
      orb.classList.add("dragging");
      startSpinHold(); // charge while holding / dragging
      try {
        zone.setPointerCapture(e.pointerId);
      } catch (_) {}
    };

    const onMove = (e) => {
      if (!flick.active) return;
      if (e.pointerId != null && flick.pointerId != null && e.pointerId !== flick.pointerId) return;
      e.preventDefault();
      const t = e.touches ? e.touches[0] : e;
      flick.x = t.clientX;
      flick.y = t.clientY;
      const now = performance.now();
      flick.samples.push({ x: t.clientX, y: t.clientY, t: now });
      if (flick.samples.length > 8) flick.samples.shift();
      // visual follow finger relative to zone
      const rect = zone.getBoundingClientRect();
      const lx = t.clientX - rect.left;
      const ly = t.clientY - rect.top;
      orb.style.left = Math.max(24, Math.min(rect.width - 24, lx)) + "px";
      orb.style.top = Math.max(8, Math.min(rect.height - 24, ly)) + "px";
      orb.style.bottom = "auto";
      orb.style.marginLeft = "-32px";
      // keep charging spin while dragging
      if (!spinHolding) startSpinHold();
    };

    const onUp = (e) => {
      if (!flick.active) return;
      if (e.pointerId != null && flick.pointerId != null && e.pointerId !== flick.pointerId) return;
      e.preventDefault();
      endSpinHold();
      flick.active = false;
      orb.classList.remove("dragging");

      const t = e.changedTouches ? e.changedTouches[0] : e;
      const now = performance.now();
      const samples = flick.samples.slice();
      samples.push({ x: t.clientX, y: t.clientY, t: now });

      // velocity from last ~120ms
      let vx = 0;
      let vy = 0;
      if (samples.length >= 2) {
        const end = samples[samples.length - 1];
        let start = samples[0];
        for (let i = samples.length - 2; i >= 0; i--) {
          if (end.t - samples[i].t >= 100) {
            start = samples[i];
            break;
          }
          start = samples[i];
        }
        const dt = Math.max(16, end.t - start.t) / 1000;
        vx = (end.x - start.x) / dt;
        vy = (end.y - start.y) / dt;
      }

      const dx = t.clientX - flick.startX;
      const dy = t.clientY - flick.startY;
      const dist = Math.hypot(dx, dy);
      const upSpeed = -vy; // upward positive

      if (upSpeed >= FLICK_MIN_UP && dist >= FLICK_MIN_DIST && dy < -20) {
        const aim = Math.max(-1, Math.min(1, dx / 140 + vx / 1800));
        const power = Math.max(0.4, Math.min(1, upSpeed / 1400));
        runCatchAttempt({ aim, power });
      } else {
        resetFlickOrb();
        if (inCatchMode && !catchBusy) {
          $("enc-feedback").textContent = "向上 flick 掟出（再快啲／再遠啲）";
          $("enc-feedback").className = "enc-feedback bad";
        }
      }
    };

    zone.addEventListener("pointerdown", onDown);
    zone.addEventListener("pointermove", onMove);
    zone.addEventListener("pointerup", onUp);
    zone.addEventListener("pointercancel", onUp);
  }


  /* ---------- ecgo38 Stage3 · passage fill blanks → spawn sprites ---------- */
  /* ecgo41: Stage6 reuses same UI; passageKind 3|6 selects data. S3 JSON／行為保持。 */
  let s3Data = null; // loaded JSON
  let s6Data = null; // ecgo41 Stage6 DRAFT
  let passageKind = 3; // 3 or 6
  let s3BlankById = Object.create(null);
  let s3Filled = Object.create(null); // id -> answer string
  let s3ActiveId = null;
  let s3SpawnCount = 0;
  let s3SpritePool = []; // asset paths

  function activePassageData() {
    return passageKind === 6 ? s6Data : s3Data;
  }
  function rebuildPassageBlankIndex(data) {
    s3BlankById = Object.create(null);
    (data && data.blanks || []).forEach(function (b) {
      s3BlankById[String(b.id)] = b;
    });
  }

  function s3EscapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function s3RebuildSpritePool() {
    const paths = [];
    const seen = Object.create(null);
    (DATA.species || []).forEach(function (sp) {
      const a = speciesMapFile(sp) || speciesFile(sp);
      const sid = sp && sp.id != null ? Number(sp.id) : null;
      if (a && !seen[a]) {
        seen[a] = 1;
        paths.push({ id: sid, src: a });
      }
    });
    // fallback hard list if species map empty
    if (!paths.length) {
      [
        [1, "01_lift"], [2, "02_air_conditioner"], [3, "03_magnet"], [4, "04_light_bulb"],
        [5, "05_photocopier"], [6, "06_steam_iron"], [7, "07_vacuum_cleaner"],
        [8, "08_thermometer"], [9, "09_first_aid_box"], [10, "10_microscope"]
      ].forEach(function (pair) {
        paths.push({ id: pair[0], src: "assets/species_map/" + pair[1] + ".png" });
      });
    }
    s3SpritePool = paths;
  }

  function s3ProgressLabel() {
    const _pd = activePassageData();
    const total = (_pd && (_pd.count || (_pd.blanks || []).length)) || 31;
    const n = Object.keys(s3Filled).length;
    const el = $("s3-progress");
    if (el) el.textContent = n + "/" + total;
    return { n: n, total: total };
  }

  function s3RenderPassage() {
    const host = $("s3-passage");
    const pdata = activePassageData();
    if (!host || !pdata) return;
    const marked = pdata.passage_marked || "";
    const parts = [];
    const re = /\{\{(\d+)\}\}/g;
    let last = 0;
    let m;
    while ((m = re.exec(marked))) {
      if (m.index > last) {
        parts.push(s3EscapeHtml(marked.slice(last, m.index)));
      }
      const id = m[1];
      const blank = s3BlankById[id];
      const filled = s3Filled[id];
      const typ = (blank && blank.type) || "?";
      const tag = typ === "punctuation" ? "punct" : typ === "preposition" ? "prep" : typ === "subject" ? "subject" : (typ === "verb" ? "verb" : (typ || "verb"));
      let cls = "s3-blank";
      if (filled != null) cls += " filled";
      if (String(s3ActiveId) === id && filled == null) cls += " active";
      const label = filled != null ? s3EscapeHtml(filled) : "____";
      parts.push(
        '<button type="button" class="' + cls + '" data-blank-id="' + id + '" aria-label="blank ' + id + ' ' + tag + '">' +
          (filled == null ? '<span class="s3-type-tag">' + tag + "</span>" : "") +
          label +
        "</button>"
      );
      last = m.index + m[0].length;
    }
    if (last < marked.length) parts.push(s3EscapeHtml(marked.slice(last)));
    host.innerHTML = parts.join("");
    host.querySelectorAll(".s3-blank:not(.filled)").forEach(function (btn) {
      btn.addEventListener("click", function () {
        s3SelectBlank(btn.getAttribute("data-blank-id"));
      });
    });
  }

  function s3ChoicePool(type) {
    if (type === "punctuation") return [".", ",", "?", "'"];
    const set = [];
    const seen = Object.create(null);
    const _poolData = activePassageData();
    ((_poolData && _poolData.blanks) || []).forEach(function (b) {
      if (b.type !== type) return;
      const a = b.answer;
      const key = String(a);
      if (!seen[key]) {
        seen[key] = 1;
        set.push(a);
      }
    });
    return set;
  }

  function s3SelectBlank(id) {
    id = String(id);
    if (s3Filled[id] != null) return;
    s3ActiveId = id;
    const blank = s3BlankById[id];
    const meta = $("s3-active-meta");
    const choices = $("s3-choices");
    const inp = $("s3-input");
    const fb = $("s3-feedback");
    if (fb) {
      fb.textContent = "";
      fb.className = "s3-feedback";
    }
    if (meta) {
      const ctx = (blank && blank.context) || "";
      const typ = (blank && blank.type) || "";
      const hint = blank && blank.hint ? " · " + blank.hint : "";
      meta.textContent = "#" + id + " · " + typ + hint + (ctx ? " · " + ctx : "");
    }
    if (choices) {
      choices.innerHTML = "";
      const pool = s3ChoicePool(blank && blank.type);
      if (pool && pool.length) {
        choices.hidden = false;
        pool.forEach(function (ans) {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "s3-chip";
          chip.textContent = ans;
          chip.addEventListener("click", function () {
            if (inp) inp.value = ans;
            s3TrySubmit(ans);
          });
          choices.appendChild(chip);
        });
      } else {
        choices.hidden = true;
      }
    }
    if (inp) {
      inp.value = "";
      try { inp.focus(); } catch (_) {}
    }
    // ecgo53: S3／S6 passage blanks — do NOT speak answer on select／enter
    s3RenderPassage();
  }

  function s3NormalizeGuess(raw, blank) {
    let g = String(raw == null ? "" : raw);
    if (!blank || blank.type !== "punctuation") {
      g = g.trim();
    }
    // curly/smart quotes → straight
    g = g.replace(/[\u2018\u2019\u201A\uFF07]/g, "'").replace(/[\u201C\u201D]/g, '"');
    return g;
  }

  function s3Accepts(blank, guess) {
    if (!blank) return false;
    const g0 = s3NormalizeGuess(guess, blank);
    const list = (blank.accept && blank.accept.length ? blank.accept : [blank.answer]).map(function (a) {
      return s3NormalizeGuess(a, blank);
    });
    if (blank.type === "punctuation") {
      return list.indexOf(g0) >= 0;
    }
    const gl = g0.toLowerCase();
    return list.some(function (a) { return String(a).toLowerCase() === gl; });
  }

  function s3SpawnSprite() {
    const layer = $("s3-sprite-layer");
    if (!layer) return;
    if (!s3SpritePool.length) s3RebuildSpritePool();
    const entry = s3SpritePool[s3SpawnCount % Math.max(1, s3SpritePool.length)] || {
      id: 1,
      src: "assets/species_map/01_lift.png",
    };
    const src = typeof entry === "string" ? entry : entry.src;
    const sid = typeof entry === "string" ? null : entry.id;
    s3SpawnCount += 1;
    // KEEP RECORD: Stage3 correct blank also credits gallery owned (唔清；跟 catch 規則)
    if (sid != null && Number.isFinite(Number(sid))) {
      const id = Number(sid);
      owned.add(id);
      catchCounts[String(id)] = (catchCounts[String(id)] || 0) + 1;
      saveOwned();
      updateOwnedHud();
    }
    const img = document.createElement("img");
    img.className = "s3-spawn";
    img.alt = "";
    img.src = src + (src.indexOf("?") >= 0 ? "&" : "?") + "v=" + V;
    // scatter in layer
    const left = 4 + Math.random() * 82;
    const top = 6 + Math.random() * 78;
    img.style.left = left + "%";
    img.style.top = top + "%";
    img.style.transform = "rotate(" + (Math.random() * 24 - 12) + "deg)";
    layer.appendChild(img);
  }

  function s3ClearSprites() {
    const layer = $("s3-sprite-layer");
    if (layer) layer.innerHTML = "";
    s3SpawnCount = 0;
  }

  function s3ShowWin(on) {
    const win = $("s3-win");
    if (!win) return;
    win.classList.toggle("hidden", !on);
    win.setAttribute("aria-hidden", on ? "false" : "true");
  }

  function s3NextUnfilled() {
    const blanks = (activePassageData() && activePassageData().blanks) || [];
    for (let i = 0; i < blanks.length; i++) {
      const id = String(blanks[i].id);
      if (s3Filled[id] == null) return id;
    }
    return null;
  }

  function s3TrySubmit(forced) {
    if (!activePassageData() || s3ActiveId == null) return;
    const id = String(s3ActiveId);
    if (s3Filled[id] != null) return;
    const blank = s3BlankById[id];
    const inp = $("s3-input");
    const guess = forced != null ? forced : (inp ? inp.value : "");
    const fb = $("s3-feedback");
    if (!s3Accepts(blank, guess)) {
      if (fb) {
        fb.textContent = "未啱 — 再試（" + ((blank && blank.type) || "") + "）";
        fb.className = "s3-feedback bad";
      }
      sfx("ui_tap");
      const btn = document.querySelector('.s3-blank[data-blank-id="' + id + '"]');
      if (btn) {
        btn.classList.add("bad-flash");
        setTimeout(function () { btn.classList.remove("bad-flash"); }, 380);
      }
      return;
    }
    const shown = s3NormalizeGuess(guess, blank);
    // store canonical answer for display (keep capital By etc.)
    s3Filled[id] = blank.answer != null ? blank.answer : shown;
    sfx("ui_tap");
    s3SpawnSprite();
    const prog = s3ProgressLabel();
    if (fb) {
      fb.textContent = "啱！精靈 +" + prog.n;
      fb.className = "s3-feedback ok";
    }
    if (inp) inp.value = "";
    if (prog.n >= prog.total) {
      s3ActiveId = null;
      s3RenderPassage();
      s3ShowWin(true);
      if (passageKind === 6) progress.s6Clears = (progress.s6Clears || 0) + 1;
      else progress.s3Clears = (progress.s3Clears || 0) + 1;
      progress.updatedAt = Date.now();
      saveOwned();
      updateBootRecord();
      return;
    }
    const next = s3NextUnfilled();
    if (next) s3SelectBlank(next);
    else s3RenderPassage();
  }

  function s3ResetRun() {
    s3Filled = Object.create(null);
    s3ActiveId = null;
    s3ClearSprites();
    s3ShowWin(false);
    s3ProgressLabel();
    const first = s3NextUnfilled();
    if (first) s3SelectBlank(first);
    else s3RenderPassage();
  }

  async function ensureStage3Data() {
    if (s3Data) return true;
    if (!ASSETS.VOCAB_S3_URL) return false;
    try {
      const r3 = await fetch(ASSETS.VOCAB_S3_URL + "?v=" + V);
      if (!r3.ok) {
        console.warn("[ecgo41] Stage3 JSON HTTP", r3.status);
        return false;
      }
      s3Data = await r3.json();
      s3BlankById = Object.create(null);
      (s3Data.blanks || []).forEach(function (b) {
        s3BlankById[String(b.id)] = b;
      });
      console.info("[ecgo41] Stage3 blanks lazy-loaded", (s3Data.blanks || []).length);
      return true;
    } catch (e) {
      console.warn("[ecgo41] Stage3 JSON load failed", e);
      return false;
    }
  }

  async function enterStage3() {
    const ok = await ensureStage3Data();
    const btnS3 = $("btn-stage3");
    if (!ok || !s3Data) {
      console.warn("[ecgo41] Stage3 JSON not loaded");
      if (btnS3) {
        btnS3.disabled = false;
        btnS3.title = "Stage3 JSON missing — tap retry";
        btnS3.textContent = "第三關 · 載入失敗 · 再試";
      }
      const rec = $("boot-record");
      if (rec) {
        rec.classList.add("warn");
        rec.textContent = "第三關 JSON 未載入 — 檢查 assets／網路後再撳";
      }
      return;
    }
    if (btnS3) {
      btnS3.disabled = false;
      btnS3.title = "";
      btnS3.textContent = "第三關 · 成段填空";
    }
    passageKind = 3;
    rebuildPassageBlankIndex(s3Data);
    currentStage = 3;
    progress.lastStage = 3;
    progress.s3Plays = (progress.s3Plays || 0) + 1;
    progress.updatedAt = Date.now();
    saveOwned();
    updateBootRecord();
    ensureAudio();
    warmTtsVoices();
    s3RebuildSpritePool();
    const hudTitle = document.querySelector("#screen-s3 .hud span:nth-child(2)");
    if (hudTitle) hudTitle.textContent = "第三關 · Passage fill";
    const lede = document.querySelector("#screen-s3 .s3-lede");
    if (lede) lede.textContent = "默書 Part B · 填 verb／preposition／標點 → 每啱一空多一隻精靈";
    const winP = document.querySelector("#s3-win .s3-win-card p");
    if (winP) winP.textContent = ((s3Data.count || (s3Data.blanks || []).length) || 31) + " 空齊 · 精靈齊晒";
    show("s3");
    s3ResetRun();
  }

  async function ensureStage6Data() {
    if (s6Data) return true;
    if (!ASSETS.VOCAB_S6_URL) return false;
    try {
      const r6 = await fetch(ASSETS.VOCAB_S6_URL + "?v=" + V);
      if (!r6.ok) {
        console.warn("[ecgo41] Stage6 JSON HTTP", r6.status);
        return false;
      }
      s6Data = await r6.json();
      console.info("[ecgo41] Stage6 blanks lazy-loaded", (s6Data.blanks || []).length);
      return true;
    } catch (e) {
      console.warn("[ecgo41] Stage6 JSON load failed", e);
      return false;
    }
  }

  async function enterStage6() {
    const ok = await ensureStage6Data();
    const btnS6 = $("btn-stage6");
    if (!ok || !s6Data) {
      console.warn("[ecgo41] Stage6 JSON not loaded");
      if (btnS6) {
        btnS6.disabled = false;
        btnS6.title = "Stage6 JSON missing — tap retry";
        btnS6.textContent = "第六關 · 載入失敗 · 再試";
      }
      return;
    }
    if (btnS6) {
      btnS6.disabled = false;
      btnS6.title = "";
      btnS6.textContent = "第六關 · 成段填空";
    }
    passageKind = 6;
    rebuildPassageBlankIndex(s6Data);
    currentStage = 6;
    progress.lastStage = 6;
    progress.s6Plays = (progress.s6Plays || 0) + 1;
    progress.updatedAt = Date.now();
    saveOwned();
    updateBootRecord();
    ensureAudio();
    warmTtsVoices();
    s3RebuildSpritePool();
    const hudTitle = document.querySelector("#screen-s3 .hud span:nth-child(2)");
    if (hudTitle) hudTitle.textContent = "第六關 · Passage fill";
    const lede = document.querySelector("#screen-s3 .s3-lede");
    if (lede) lede.textContent = "Dictation (2) · subject／verb／preposition／punctuation → 每啱一空多一隻精靈";
    const winP = document.querySelector("#s3-win .s3-win-card p");
    if (winP) winP.textContent = ((s6Data.count || (s6Data.blanks || []).length) || 37) + " 空齊 · 精靈齊晒";
    show("s3");
    s3ResetRun();
  }


  /* ---------- ecgo52 Stage7 · irregular verb table → fish 三態（page10＋ANSWER＋再練 · Wave A/B） ---------- */
  let s7Data = null;
  let s7Unlocked = Object.create(null); // verbId -> true
  let s7Filled = Object.create(null); // verbId -> { base, past, pp }
  let s7ActiveVerb = null;
  let s7ActiveTense = "present";
  let s7SpawnCount = 0;
  let s7Page = 0;
  let s7ShowAnswers = false;
  const S7_PAGE_SIZE = 10;

  function s7EscapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function s7Norm(raw) {
    return String(raw == null ? "" : raw).trim().toLowerCase()
      .replace(/[\u2018\u2019\u201A\uFF07']/g, "'")
      .replace(/[\u201C\u201D]/g, '"');
  }

  function s7Verbs() {
    return (s7Data && s7Data.verbs) || [];
  }

  /** Playable only: KEEP + NEED_ART with forms. Hide REG / SPECIAL / born stubs. */
  function s7PlayableVerbs() {
    return s7Verbs().filter(function (v) {
      if (!v) return false;
      if (v.playable === false) return false;
      const st = v.art_status || "";
      if (st === "REG" || st === "SPECIAL") return false;
      return true;
    });
  }

  function s7HasCutout(verb) {
    if (!verb) return false;
    if (verb.art_status === "KEEP") return true;
    if (verb.has_art === true) return true;
    if (verb.art_status === "NEED_ART" || verb.art_status === "REG" || verb.art_status === "SPECIAL") return false;
    return false;
  }

  function s7ArtSrc(verbId, tense) {
    const t = tense === "pp" ? "pp" : tense === "past" ? "past" : "present";
    return (ASSETS.SPECIES_DIR_S7 || "assets/species_s7/") + verbId + "_" + t + ".png";
  }

  function s7Canon(verb, field) {
    const accept = (verb.accept && verb.accept[field]) || [verb[field]];
    return accept[0] != null ? accept[0] : verb[field];
  }

  function s7ProgressLabel() {
    const playable = s7PlayableVerbs();
    const total = playable.length || 0;
    const n = playable.filter(function (v) { return !!s7Unlocked[v.id]; }).length;
    const el = $("s7-progress");
    if (el) el.textContent = n + "/" + total;
    return { n: n, total: total };
  }

  function s7UpdateWinCopy() {
    const el = $("s7-win-copy");
    if (!el) return;
    const total = s7PlayableVerbs().length;
    el.textContent = total + " 組不規則動詞齊 · 魚角式齊晒";
  }

  function s7UpdatePager() {
    const playable = s7PlayableVerbs();
    const total = playable.length;
    const pages = Math.max(1, Math.ceil(total / S7_PAGE_SIZE) || 1);
    if (s7Page >= pages) s7Page = pages - 1;
    if (s7Page < 0) s7Page = 0;
    const start = total ? s7Page * S7_PAGE_SIZE + 1 : 0;
    const end = Math.min(total, (s7Page + 1) * S7_PAGE_SIZE);
    const label = $("s7-pager-label");
    if (label) {
      label.textContent = total ? (start + "–" + end + "／" + total) : ("0／0");
    }
    const prev = $("btn-s7-prev");
    const next = $("btn-s7-next");
    if (prev) prev.disabled = s7Page <= 0 || total === 0;
    if (next) next.disabled = s7Page >= pages - 1 || total === 0;
  }

  function s7PageSlice() {
    const playable = s7PlayableVerbs();
    const start = s7Page * S7_PAGE_SIZE;
    return playable.slice(start, start + S7_PAGE_SIZE);
  }

  function s7AcceptsField(verb, field, guess) {
    if (!verb) return false;
    const g = s7Norm(guess);
    if (!g) return false;
    const accept = (verb.accept && verb.accept[field]) || [verb[field]];
    return (accept || []).some(function (a) { return s7Norm(a) === g; });
  }

  function s7RowComplete(verbId) {
    const verb = s7Verbs().find(function (v) { return v.id === verbId; });
    if (!verb) return false;
    const fill = s7Filled[verbId] || {};
    return s7AcceptsField(verb, "base", fill.base) &&
      s7AcceptsField(verb, "past", fill.past) &&
      s7AcceptsField(verb, "pp", fill.pp);
  }

  function s7ShowWin(on) {
    const win = $("s7-win");
    if (!win) return;
    if (on) s7UpdateWinCopy();
    win.classList.toggle("hidden", !on);
    win.setAttribute("aria-hidden", on ? "false" : "true");
  }

  function s7SetFeedback(text, ok) {
    const fb = $("s7-feedback");
    if (!fb) return;
    fb.textContent = text || "";
    fb.className = "s7-feedback" + (ok === true ? " ok" : ok === false ? " bad" : "");
  }

  function s7SpawnFish(verb) {
    const layer = $("s7-sprite-layer");
    if (!layer || !verb) return;
    if (!s7HasCutout(verb)) return; // NEED_ART: no sprite until cutout exists
    // avoid duplicate spawn for same verb
    if (layer.querySelector('.s7-spawn[data-verb="' + verb.id + '"]')) return;
    s7SpawnCount += 1;
    const img = document.createElement("img");
    img.className = "s7-spawn";
    img.setAttribute("data-verb", verb.id);
    img.alt = verb.zh || verb.id;
    const src = s7ArtSrc(verb.id, "present");
    img.src = src + (src.indexOf("?") >= 0 ? "&" : "?") + "v=" + V;
    img.style.left = (6 + Math.random() * 78) + "%";
    img.style.top = (8 + Math.random() * 70) + "%";
    img.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";
    img.addEventListener("click", function () {
      s7ShowFishPanel(verb.id, "present");
    });
    layer.appendChild(img);
  }

  function s7ClearSprites() {
    const layer = $("s7-sprite-layer");
    if (layer) layer.innerHTML = "";
    s7SpawnCount = 0;
  }

  function s7RemoveSpritesFor(verbIds) {
    const layer = $("s7-sprite-layer");
    if (!layer) return;
    const set = Object.create(null);
    (verbIds || []).forEach(function (id) { set[id] = true; });
    Array.prototype.slice.call(layer.querySelectorAll(".s7-spawn")).forEach(function (el) {
      const id = el.getAttribute("data-verb");
      if (id && set[id]) {
        el.remove();
        s7SpawnCount = Math.max(0, s7SpawnCount - 1);
      }
    });
  }

  function s7ShowFishPanel(verbId, tense) {
    const verb = s7Verbs().find(function (v) { return v.id === verbId; });
    const panel = $("s7-fish-panel");
    const art = $("s7-fish-art");
    const title = $("s7-fish-title");
    const story = $("s7-fish-story");
    if (!verb || !panel || !art) return;
    s7ActiveVerb = verbId;
    s7ActiveTense = tense || s7ActiveTense || "present";
    panel.classList.remove("hidden");
    if (title) {
      title.textContent = (verb.zh || "") + " · " + verb.base + " / " + verb.past + " / " + verb.pp +
        (verb.fish_species_zh ? " · " + verb.fish_species_zh : "");
    }
    if (s7HasCutout(verb)) {
      const src = s7ArtSrc(verb.id, s7ActiveTense);
      art.src = src + "?v=" + V;
      art.alt = verb.id + " " + s7ActiveTense;
      art.style.display = "";
    } else {
      art.removeAttribute("src");
      art.alt = "？";
      art.style.display = "none";
    }
    const labels = (s7Data && s7Data.tense_labels) || {};
    const key = s7ActiveTense === "present" ? "base" : s7ActiveTense;
    const lab = labels[key] || labels[s7ActiveTense] || {};
    if (story) {
      story.textContent = s7HasCutout(verb)
        ? (lab.story || (lab.zh || "") || "")
        : "美術未到 · 暫用「？」占位（仍可填表開鎖）";
    }
    document.querySelectorAll(".s7-tense-tab").forEach(function (btn) {
      const on = btn.getAttribute("data-tense") === s7ActiveTense;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    // ecgo52: speak English form for active tense (present→base / past / pp)
    const formText =
      s7ActiveTense === "past" ? (verb.past || "") :
      s7ActiveTense === "pp" ? (verb.pp || "") :
      (verb.base || "");
    if (formText) {
      warmTtsVoices();
      speakEnglishText(formText, { force: true });
    }
  }

  function s7HideFishPanel() {
    const panel = $("s7-fish-panel");
    if (panel) panel.classList.add("hidden");
  }

  function s7UnlockVerb(verb) {
    if (!verb || s7Unlocked[verb.id]) return false;
    s7Unlocked[verb.id] = true;
    if (s7HasCutout(verb)) {
      s7SpawnFish(verb);
    }
    s7ShowFishPanel(verb.id, "present");
    sfx("ui_tap");
    return true;
  }

  function s7RenderFishCell(fishCell, verb) {
    if (!fishCell || !verb) return;
    fishCell.innerHTML = "";
    if (!s7Unlocked[verb.id]) {
      fishCell.innerHTML = '<span class="s7-fish-locked">？</span>';
      return;
    }
    if (s7HasCutout(verb)) {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "s7-fish-thumb";
      thumb.setAttribute("aria-label", "睇 " + verb.id + " 魚");
      const img = document.createElement("img");
      img.src = s7ArtSrc(verb.id, "present") + "?v=" + V;
      img.alt = "";
      thumb.appendChild(img);
      thumb.addEventListener("click", function () {
        s7ShowFishPanel(verb.id, "present");
      });
      fishCell.appendChild(thumb);
    } else {
      const ph = document.createElement("button");
      ph.type = "button";
      ph.className = "s7-fish-placeholder";
      ph.setAttribute("aria-label", verb.id + " 未有圖");
      ph.textContent = "？";
      ph.addEventListener("click", function () {
        s7ShowFishPanel(verb.id, "present");
      });
      fishCell.appendChild(ph);
    }
  }

  function s7CheckRow(verbId, opts) {
    opts = opts || {};
    const verb = s7Verbs().find(function (v) { return v.id === verbId; });
    if (!verb) return;
    const fill = s7Filled[verbId] || (s7Filled[verbId] = {});
    // read live inputs
    ["base", "past", "pp"].forEach(function (field) {
      const inp = document.querySelector('.s7-cell-input[data-verb="' + verbId + '"][data-field="' + field + '"]');
      if (inp) fill[field] = inp.value;
    });
    const fields = ["base", "past", "pp"];
    let anyBad = false;
    let anyEmpty = false;
    fields.forEach(function (field) {
      const inp = document.querySelector('.s7-cell-input[data-verb="' + verbId + '"][data-field="' + field + '"]');
      if (!inp) return;
      const raw = fill[field];
      if (!String(raw == null ? "" : raw).trim()) {
        anyEmpty = true;
        inp.classList.remove("ok", "bad");
        return;
      }
      if (s7AcceptsField(verb, field, raw)) {
        inp.classList.add("ok");
        inp.classList.remove("bad");
        const canon = s7Canon(verb, field);
        if (s7Norm(inp.value) === s7Norm(canon)) inp.value = canon;
        fill[field] = inp.value;
      } else {
        anyBad = true;
        inp.classList.add("bad");
        inp.classList.remove("ok");
      }
    });
    const row = document.querySelector('tr.s7-row[data-verb="' + verbId + '"]');
    if (s7RowComplete(verbId)) {
      fields.forEach(function (field) {
        const inp = document.querySelector('.s7-cell-input[data-verb="' + verbId + '"][data-field="' + field + '"]');
        if (inp) {
          inp.classList.add("ok");
          inp.classList.remove("bad");
          inp.readOnly = true;
          inp.value = s7Canon(verb, field);
        }
      });
      if (row) row.classList.add("unlocked");
      const fishCell = document.querySelector('.s7-fish-cell[data-verb="' + verbId + '"]');
      s7RenderFishCell(fishCell, verb);
      const freshly = s7UnlockVerb(verb);
      const prog = s7ProgressLabel();
      if (freshly) {
        s7SetFeedback("啱！開咗 " + (verb.zh || verb.id) + (s7HasCutout(verb) ? " 魚角式" : "（佔位）") + " · " + prog.n + "/" + prog.total, true);
      } else {
        s7SetFeedback((verb.zh || verb.id) + " 已開 · " + prog.n + "/" + prog.total, true);
      }
      if (prog.total > 0 && prog.n >= prog.total) {
        progress.s7Clears = (progress.s7Clears || 0) + 1;
        progress.updatedAt = Date.now();
        saveOwned();
        updateBootRecord();
        s7ShowWin(true);
      }
      return true;
    }
    if (opts.fromSubmit) {
      if (anyBad) s7SetFeedback("未齊啱 — 再試呢一組三格", false);
      else if (anyEmpty) s7SetFeedback("三格都要填：原形／過去式／過去分詞", false);
      else s7SetFeedback("再對對三格", false);
      sfx("ui_tap");
    }
    return false;
  }

  function s7RenderTable() {
    const tbody = $("s7-tbody");
    if (!tbody) return;
    const verbs = s7PageSlice();
    tbody.innerHTML = "";
    verbs.forEach(function (verb) {
      const tr = document.createElement("tr");
      tr.className = "s7-row" + (s7Unlocked[verb.id] ? " unlocked" : "") + (s7ShowAnswers ? " answers-on" : "");
      tr.setAttribute("data-verb", verb.id);

      const tdZh = document.createElement("td");
      tdZh.className = "s7-zh";
      tdZh.innerHTML = "<strong>" + s7EscapeHtml(verb.zh || "") + "</strong>" +
        (verb.fish_species_zh ? '<span class="s7-zh-sub">' + s7EscapeHtml(verb.fish_species_zh) + "</span>" : "");
      tr.appendChild(tdZh);

      ["base", "past", "pp"].forEach(function (field) {
        const td = document.createElement("td");
        td.className = "s7-cell";
        const inp = document.createElement("input");
        inp.type = "text";
        inp.className = "s7-cell-input";
        inp.setAttribute("data-verb", verb.id);
        inp.setAttribute("data-field", field);
        inp.setAttribute("autocomplete", "off");
        inp.setAttribute("autocorrect", "off");
        inp.setAttribute("autocapitalize", "off");
        inp.setAttribute("spellcheck", "false");
        inp.setAttribute("enterkeyhint", "done");
        const ph = field === "base" ? "base" : field === "past" ? "past" : "pp";
        inp.placeholder = ph;
        inp.setAttribute("aria-label", (verb.zh || verb.id) + " " + ph);
        const fill = s7Filled[verb.id] || {};
        if (fill[field]) inp.value = fill[field];
        if (s7Unlocked[verb.id]) {
          inp.readOnly = true;
          inp.classList.add("ok");
          inp.value = s7Canon(verb, field);
        }
        inp.addEventListener("focus", function () {
          const meta = $("s7-active-meta");
          if (meta) {
            meta.textContent = (verb.zh || "") + " · " +
              (field === "base" ? "原形 Present" : field === "past" ? "過去式 Past" : "過去分詞 PP");
          }
        });
        inp.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            s7CheckRow(verb.id, { fromSubmit: true });
          }
        });
        inp.addEventListener("change", function () {
          s7CheckRow(verb.id, { fromSubmit: false });
        });
        td.appendChild(inp);
        // ANSWER reveal for locked rows only — grey canonical, does not unlock / fill
        if (s7ShowAnswers && !s7Unlocked[verb.id]) {
          const hint = document.createElement("span");
          hint.className = "s7-answer-hint showing";
          hint.textContent = s7Canon(verb, field);
          td.appendChild(hint);
        }
        tr.appendChild(td);
      });

      const tdFish = document.createElement("td");
      tdFish.className = "s7-fish-cell";
      tdFish.setAttribute("data-verb", verb.id);
      s7RenderFishCell(tdFish, verb);
      tr.appendChild(tdFish);
      tbody.appendChild(tr);
    });
    s7ProgressLabel();
    s7UpdatePager();
    const ansBtn = $("btn-s7-answer");
    if (ansBtn) {
      ansBtn.setAttribute("aria-pressed", s7ShowAnswers ? "true" : "false");
      ansBtn.textContent = s7ShowAnswers ? "ANSWER · ON" : "ANSWER";
    }
  }

  function s7ToggleAnswers() {
    s7ShowAnswers = !s7ShowAnswers;
    s7RenderTable();
    s7SetFeedback(s7ShowAnswers ? "ANSWER ON · 本頁未開行顯示正確答案（灰字）" : "ANSWER OFF", true);
    sfx("ui_tap");
  }

  function s7RetryCurrentPage() {
    const slice = s7PageSlice();
    const ids = slice.map(function (v) { return v.id; });
    ids.forEach(function (id) {
      delete s7Unlocked[id];
      delete s7Filled[id];
    });
    s7RemoveSpritesFor(ids);
    if (s7ActiveVerb && ids.indexOf(s7ActiveVerb) >= 0) {
      s7HideFishPanel();
      s7ActiveVerb = null;
    }
    s7ShowWin(false);
    s7ShowAnswers = false;
    s7RenderTable();
    s7SetFeedback("本頁已重置 · 可再練（其他頁唔郁）", true);
    sfx("ui_tap");
  }

  function s7GotoPage(delta) {
    const total = s7PlayableVerbs().length;
    const pages = Math.max(1, Math.ceil(total / S7_PAGE_SIZE) || 1);
    const next = Math.max(0, Math.min(pages - 1, s7Page + delta));
    if (next === s7Page) return;
    s7Page = next;
    s7RenderTable();
    sfx("ui_tap");
  }

  function s7ResetRun() {
    s7Unlocked = Object.create(null);
    s7Filled = Object.create(null);
    s7ActiveVerb = null;
    s7ActiveTense = "present";
    s7Page = 0;
    s7ShowAnswers = false;
    s7ClearSprites();
    s7HideFishPanel();
    s7ShowWin(false);
    s7SetFeedback("");
    s7RenderTable();
  }

  async function ensureStage7Data() {
    if (s7Data && s7Data.verbs && s7Data.verbs.length) return true;
    if (!ASSETS.VOCAB_S7_URL) return false;
    try {
      const r7 = await fetch(ASSETS.VOCAB_S7_URL + "?v=" + V);
      if (!r7.ok) {
        console.warn("[ecgo52] Stage7 JSON HTTP", r7.status);
        return false;
      }
      s7Data = await r7.json();
      console.info("[ecgo52] Stage7 verbs lazy-loaded", (s7Data.verbs || []).length, "playable", s7PlayableVerbs().length);
      return true;
    } catch (e) {
      console.warn("[ecgo52] Stage7 JSON load failed", e);
      return false;
    }
  }

  async function enterStage7() {
    const ok = await ensureStage7Data();
    const btnS7 = $("btn-stage7");
    if (!ok || !s7Data || !(s7Data.verbs || []).length) {
      console.warn("[ecgo52] Stage7 JSON not loaded");
      if (btnS7) {
        btnS7.disabled = false;
        btnS7.title = "Stage7 JSON missing — tap retry";
        btnS7.textContent = "第七關 · 載入失敗 · 再試";
      }
      return;
    }
    if (btnS7) {
      btnS7.disabled = false;
      btnS7.title = "";
      btnS7.textContent = "第七關 · 不規則動詞";
    }
    currentStage = 7;
    progress.lastStage = 7;
    progress.s7Plays = (progress.s7Plays || 0) + 1;
    progress.updatedAt = Date.now();
    saveOwned();
    updateBootRecord();
    ensureAudio();
    warmTtsVoices();
    show("s7");
    s7ResetRun();
    // no auto fish focus — speak first playable verb base on stage enter
    const firstVerb = s7PlayableVerbs()[0];
    if (firstVerb && firstVerb.base) {
      setTimeout(function () {
        warmTtsVoices();
        speakEnglishText(firstVerb.base, { force: true });
      }, 200);
    }
  }


  /* ---------- Input wiring ---------- */
  function bind() {
    const tap = uiTap;

    function enterStage(stage) {
      currentStage = stage;
      progress.lastStage = stage;
      if (stage === 5) progress.s5Plays = (progress.s5Plays || 0) + 1;
      else if (stage === 4) progress.s4Plays = (progress.s4Plays || 0) + 1;
      else if (stage === 2) progress.s2Plays = (progress.s2Plays || 0) + 1;
      else if (stage === 1) progress.s1Plays = (progress.s1Plays || 0) + 1;
      progress.updatedAt = Date.now();
      saveOwned(); // KEEP play counts across sessions
      updateBootRecord();
      warmTtsVoices();
      spawnWild(true);
      show("map");
    }
    const btnPlay = $("btn-play");
    if (btnPlay) {
      btnPlay.addEventListener("click", tap(() => enterStage(currentStage || 1)));
    }
    const btnS1 = $("btn-stage1");
    if (btnS1) {
      btnS1.addEventListener("click", tap(() => enterStage(1)));
    }
    const btnS2 = $("btn-stage2");
    if (btnS2) {
      btnS2.addEventListener("click", tap(() => enterStage(2)));
    }
    const btnS3 = $("btn-stage3");
    if (btnS3) {
      btnS3.disabled = false;
      btnS3.addEventListener("click", tap(() => { enterStage3(); }));
    }
    const btnS4 = $("btn-stage4");
    if (btnS4) {
      btnS4.addEventListener("click", tap(() => enterStage(4)));
    }
    const btnS5 = $("btn-stage5");
    if (btnS5) {
      btnS5.addEventListener("click", tap(() => enterStage(5)));
    }
    const btnS6 = $("btn-stage6");
    if (btnS6) {
      btnS6.disabled = false;
      btnS6.addEventListener("click", tap(() => { enterStage6(); }));
    }
    const btnS7 = $("btn-stage7");
    if (btnS7) {
      btnS7.disabled = false;
      btnS7.addEventListener("click", tap(() => { enterStage7(); }));
    }
    const btnS7Back = $("btn-s7-back");
    if (btnS7Back) {
      btnS7Back.addEventListener("click", tap(() => show("boot")));
    }
    const btnS7WinBoot = $("btn-s7-win-boot");
    if (btnS7WinBoot) {
      btnS7WinBoot.addEventListener("click", tap(() => show("boot")));
    }
    const btnS7WinAgain = $("btn-s7-win-again");
    if (btnS7WinAgain) {
      btnS7WinAgain.addEventListener("click", tap(() => s7ResetRun()));
    }
    const btnS7Prev = $("btn-s7-prev");
    if (btnS7Prev) {
      btnS7Prev.addEventListener("click", tap(() => s7GotoPage(-1)));
    }
    const btnS7Next = $("btn-s7-next");
    if (btnS7Next) {
      btnS7Next.addEventListener("click", tap(() => s7GotoPage(1)));
    }
    const btnS7Answer = $("btn-s7-answer");
    if (btnS7Answer) {
      btnS7Answer.addEventListener("click", tap(() => s7ToggleAnswers()));
    }
    const btnS7RetryPage = $("btn-s7-retry-page");
    if (btnS7RetryPage) {
      btnS7RetryPage.addEventListener("click", tap(() => s7RetryCurrentPage()));
    }
    document.querySelectorAll(".s7-tense-tab").forEach(function (btn) {
      btn.addEventListener("click", tap(function () {
        if (!s7ActiveVerb) return;
        s7ShowFishPanel(s7ActiveVerb, btn.getAttribute("data-tense") || "present");
      }));
    });
    const btnS3Back = $("btn-s3-back");
    if (btnS3Back) {
      btnS3Back.addEventListener("click", tap(() => show("boot")));
    }
    const btnS3Submit = $("btn-s3-submit");
    if (btnS3Submit) {
      btnS3Submit.addEventListener("click", tap(() => s3TrySubmit()));
    }
    const s3Inp = $("s3-input");
    if (s3Inp) {
      s3Inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          s3TrySubmit();
        }
      });
    }
    const btnS3WinBoot = $("btn-s3-win-boot");
    if (btnS3WinBoot) {
      btnS3WinBoot.addEventListener("click", tap(() => show("boot")));
    }
    const btnS3WinAgain = $("btn-s3-win-again");
    if (btnS3WinAgain) {
      btnS3WinAgain.addEventListener("click", tap(() => s3ResetRun()));
    }
    $("btn-dex").addEventListener("click", tap(() => show("dex")));
    $("btn-mute").addEventListener("click", () => {
      ensureAudio();
      setMute(!muted);
      if (!muted) startBgm();
      else stopBgm();
    });
    $("btn-map-mute").addEventListener("click", () => {
      ensureAudio();
      setMute(!muted);
      if (!muted) startBgm();
      else stopBgm();
    });
    $("btn-map-back").addEventListener("click", tap(() => show("boot")));
    $("btn-map-dex").addEventListener("click", tap(() => show("dex")));
    $("btn-dex-back").addEventListener("click", tap(() => {
      const detail = $("dex-detail");
      if (detail && !detail.classList.contains("hidden")) {
        closeDexDetail();
        return;
      }
      if (wild.length) show("map");
      else show("boot");
    }));
    const btnDexDetailClose = $("btn-dex-detail-close");
    if (btnDexDetailClose) {
      btnDexDetailClose.addEventListener("click", tap(function () {
        closeDexDetail();
      }));
    }
    const ansBtn = $("btn-dex-answer");
    if (ansBtn) {
      ansBtn.addEventListener("click", tap(() => {
        dexShowAnswers = !dexShowAnswers;
        renderDex();
      }));
    }
    $("btn-submit").addEventListener("click", tap(trySubmit));
    $("btn-skip").addEventListener("click", tap(() => leaveEncounter({})));
    const btnTts = $("btn-enc-tts");
    if (btnTts) {
      btnTts.addEventListener("click", tap(function () {
        replayEncounterTts();
      }));
    }
    warmTtsVoices();
    const leaveEnc = () => {
      if (!currentEncounter && !(screens.encounter && screens.encounter.classList.contains("active"))) return;
      leaveEncounter({ flee: false });
    };
    const btnEncLeave = $("btn-enc-leave");
    if (btnEncLeave) btnEncLeave.addEventListener("click", tap(leaveEnc));
    const btnEncLeavePanel = $("btn-enc-leave-panel");
    if (btnEncLeavePanel) btnEncLeavePanel.addEventListener("click", tap(leaveEnc));
    const doReset = () => {
      requestResetGallery();
    };
    const btnMapReset = $("btn-map-reset");
    if (btnMapReset) btnMapReset.addEventListener("click", tap(doReset));
    const btnBootReset = $("btn-reset");
    if (btnBootReset) btnBootReset.addEventListener("click", tap(doReset));

    const btnSpin = $("btn-spin");
    if (btnSpin) {
      const down = (e) => {
        e.preventDefault();
        e.stopPropagation();
        ensureAudio();
        startSpinHold();
      };
      const up = (e) => {
        e.preventDefault();
        endSpinHold();
      };
      btnSpin.addEventListener("pointerdown", down);
      btnSpin.addEventListener("pointerup", up);
      btnSpin.addEventListener("pointerleave", up);
      btnSpin.addEventListener("pointercancel", up);
    }

    bindFlick();

    $("enc-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        trySubmit();
      }
    });
    document.addEventListener(
      "pointerdown",
      () => {
        ensureAudio();
      },
      { once: true, passive: true }
    );

    window.addEventListener("keydown", (e) => {
      keys[e.key] = true;
      const typing = isTypingTarget(e.target) || isTypingTarget(document.activeElement);
      const mapActive = screens.map && screens.map.classList.contains("active");
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        if (!typing && mapActive) e.preventDefault();
      }
    });
    window.addEventListener("keyup", (e) => {
      keys[e.key] = false;
    });

    const dpad = $("dpad");
    dpad.querySelectorAll("[data-dir]").forEach((btn) => {
      const dir = btn.getAttribute("data-dir");
      let padPid = null;
      const on = (e) => {
        e.preventDefault();
        ensureAudio();
        padPid = e.pointerId != null ? e.pointerId : 1;
        padDir.x = 0;
        padDir.y = 0;
        if (dir === "up") padDir.y = -1;
        if (dir === "down") padDir.y = 1;
        if (dir === "left") padDir.x = -1;
        if (dir === "right") padDir.x = 1;
        try {
          btn.setPointerCapture(e.pointerId);
        } catch (_) {}
      };
      const off = (e) => {
        if (padPid != null && e.pointerId != null && e.pointerId !== padPid) return;
        // ignore pointerleave while we hold capture — only up/cancel end
        if (e.type === "pointerleave" && padPid != null) return;
        e.preventDefault();
        padDir.x = 0;
        padDir.y = 0;
        padPid = null;
      };
      btn.addEventListener("pointerdown", on);
      btn.addEventListener("pointerup", off);
      btn.addEventListener("pointerleave", off);
      btn.addEventListener("pointercancel", off);
    });

    // Map drag = walk (CSS→world) + HARD tap-on-wild (pointerdown, screen-space)
    const wrap = $("map-wrap");
    wrap.addEventListener(
      "pointerdown",
      (e) => {
        if (!mapRunning && !(screens.map && screens.map.classList.contains("active"))) return;
        if (e.target && e.target.closest && e.target.closest("#dpad")) return;
        if (e.target && e.target.closest && e.target.closest("button")) return;
        ensureAudio();
        // HARD GUARANTEE: tap wild → open immediately (before drag eats the gesture)
        if (!currentEncounter && tryTapEncounter(e.clientX, e.clientY, "pointerdown")) {
          dragging = false;
          dragLast = null;
          dragPointerId = null;
          return;
        }
        dragging = true;
        dragPointerId = e.pointerId != null ? e.pointerId : 1;
        dragMovedPx = 0;
        dragOrigin = { x: e.clientX, y: e.clientY };
        dragLast = { x: e.clientX, y: e.clientY };
        try {
          wrap.setPointerCapture(e.pointerId);
        } catch (_) {}
      },
      { passive: true }
    );
    wrap.addEventListener(
      "pointermove",
      (e) => {
        if (!dragging || !dragLast) return;
        if (dragPointerId != null && e.pointerId != null && e.pointerId !== dragPointerId) return;
        const dx = e.clientX - dragLast.x;
        const dy = e.clientY - dragLast.y;
        dragLast = { x: e.clientX, y: e.clientY };
        dragMovedPx += Math.hypot(dx, dy);
        const rect = canvas.getBoundingClientRect();
        const sx = canvas.width / Math.max(1, rect.width);
        const sy = canvas.height / Math.max(1, rect.height);
        let wx = -dx * sx;
        let wy = -dy * sy;
        const maxStep = 42;
        const len = Math.hypot(wx, wy);
        if (len > maxStep) {
          wx = (wx / len) * maxStep;
          wy = (wy / len) * maxStep;
        }
        movePlayerRaw(wx, wy);
        updateDbgHud();
        if (probeEncounter("drag")) {
          dragging = false;
          dragLast = null;
        }
      },
      { passive: true }
    );
    const endDrag = (e) => {
      if (dragPointerId != null && e && e.pointerId != null && e.pointerId !== dragPointerId) return;
      const wasDrag = dragging;
      const moved = dragMovedPx;
      const ox = dragOrigin && dragOrigin.x;
      const oy = dragOrigin && dragOrigin.y;
      const cx = e && e.clientX != null ? e.clientX : ox;
      const cy = e && e.clientY != null ? e.clientY : oy;
      dragging = false;
      dragLast = null;
      dragPointerId = null;
      dragOrigin = null;
      dragMovedPx = 0;
      // Soft tap / short drag still tries hit (iPad finger jitter often >14px)
      if (wasDrag && moved < 48 && cx != null && cy != null && !currentEncounter) {
        tryTapEncounter(cx, cy, "pointerup");
      }
    };
    wrap.addEventListener("pointerup", endDrag);
    wrap.addEventListener("pointercancel", endDrag);
    // click backup (desktop / some WebViews)
    wrap.addEventListener("click", (e) => {
      if (currentEncounter) return;
      if (e.target && e.target.closest && (e.target.closest("#dpad") || e.target.closest("button"))) return;
      tryTapEncounter(e.clientX, e.clientY, "click");
    });
  }


  /* ---------- ecgo32: iPhone keyboard / visualViewport shell ---------- */
  function applyViewportShell() {
    const vv = window.visualViewport;
    const h = vv && vv.height ? vv.height : window.innerHeight;
    const top = vv && typeof vv.offsetTop === "number" ? vv.offsetTop : 0;
    document.documentElement.style.setProperty("--app-vvh", h + "px");
    document.documentElement.style.setProperty("--app-vv-top", top + "px");
    const app = $("app");
    if (app) {
      app.style.height = h + "px";
      app.style.top = top + "px";
    }
  }

  function setKeyboardOpen(open) {
    const app = $("app");
    const enc = screens.encounter || $("screen-encounter");
    if (app) app.classList.toggle("kb-open", !!open);
    if (enc) enc.classList.toggle("kb-open", !!open);
    applyViewportShell();
    if (open) {
      // keep answer input + panel in view above keyboard
      const panel = document.querySelector("#screen-encounter .enc-panel");
      const input = $("enc-input");
      if (panel && input) {
        try {
          input.scrollIntoView({ block: "nearest", inline: "nearest" });
        } catch (_) {}
      }
    }
  }

  function bindKeyboardLayout() {
    applyViewportShell();
    function wireKb(input) {
      if (!input) return;
      input.addEventListener("focus", function () {
        setKeyboardOpen(true);
        setTimeout(applyViewportShell, 50);
        setTimeout(applyViewportShell, 300);
      });
      input.addEventListener("blur", function () {
        setKeyboardOpen(false);
        setTimeout(applyViewportShell, 50);
      });
    }
    wireKb($("enc-input"));
    wireKb($("s3-input"));
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", applyViewportShell);
      vv.addEventListener("scroll", applyViewportShell);
    }
    window.addEventListener("resize", applyViewportShell);
    window.addEventListener("orientationchange", function () {
      setTimeout(applyViewportShell, 100);
      setTimeout(applyViewportShell, 400);
    });
  }

  /* ---------- Boot ---------- */
  async function boot() {
    loadOwned();
    loadMute();
    bind();
    bindKeyboardLayout();
    updateBootRecord();
    const [vocab, smap] = await Promise.all([
      fetch(ASSETS.VOCAB_URL + "?v=" + V).then((r) => r.json()),
      fetch(ASSETS.SPECIES_MAP_URL + "?v=" + V).then((r) => r.json()),
    ]);
    DATA.words = vocab.words || [];
    // ecgo31: always preload Stage2 beach vocab so either boot button works
    if (ASSETS.VOCAB_S2_URL) {
      try {
        const r2 = await fetch(ASSETS.VOCAB_S2_URL + "?v=" + V);
        if (r2.ok) {
          const v2 = await r2.json();
          const extra = v2.words || v2.vocab || [];
          const byId = {};
          DATA.words.forEach((w) => { byId[w.id] = w; });
          extra.forEach((w) => { byId[w.id] = w; });
          DATA.words = Object.keys(byId).map((k) => byId[k]);
          console.info("[ecgo31] Stage2 vocab preloaded", extra.length, "→ total", DATA.words.length);
        }
      } catch (e) {
        console.warn("[ecgo31] Stage2 vocab load failed", e);
      }
    }
    // ecgo41: Stage4 body vocab + Stage5 hospital phrases (PASS LOCK keep product)
    async function mergeVocabUrl(url, label) {
      if (!url) return;
      try {
        const r = await fetch(url + "?v=" + V);
        if (!r.ok) {
          console.warn("[ecgo41]", label, "HTTP", r.status);
          return;
        }
        const v = await r.json();
        const extra = v.words || v.vocab || [];
        const byId = {};
        DATA.words.forEach(function (w) { byId[w.id] = w; });
        extra.forEach(function (w) { byId[w.id] = w; });
        DATA.words = Object.keys(byId).map(function (k) { return byId[k]; });
        console.info("[ecgo41]", label, "preloaded", extra.length, "→ total", DATA.words.length);
      } catch (e) {
        console.warn("[ecgo41]", label, "load failed", e);
      }
    }
    await mergeVocabUrl(ASSETS.VOCAB_S4_URL, "Stage4");
    await mergeVocabUrl(ASSETS.VOCAB_S5_URL, "Stage5");
    // ecgo38: Stage3 passage blanks
    s3Data = null;
    s3BlankById = Object.create(null);
    if (ASSETS.VOCAB_S3_URL) {
      try {
        const r3 = await fetch(ASSETS.VOCAB_S3_URL + "?v=" + V);
        if (r3.ok) {
          s3Data = await r3.json();
          (s3Data.blanks || []).forEach(function (b) {
            s3BlankById[String(b.id)] = b;
          });
          console.info("[ecgo41] Stage3 blanks loaded", (s3Data.blanks || []).length);
        } else {
          console.warn("[ecgo41] Stage3 JSON HTTP", r3.status);
        }
      } catch (e) {
        console.warn("[ecgo41] Stage3 JSON load failed", e);
      }
    }
    DATA.species = (smap.species || []).map((s) => Object.assign({}, s));
    // ecgo41: merge Stage4/5 species (brain/heart/bones SAMPLE; rest HOLD placeholder)
    async function mergeSpeciesUrl(url, label) {
      if (!url) return;
      try {
        const r = await fetch(url + "?v=" + V);
        if (!r.ok) {
          console.warn("[ecgo41]", label, "species HTTP", r.status);
          return;
        }
        const pack = await r.json();
        const extra = pack.species || [];
        const byId = {};
        DATA.species.forEach(function (s) { byId[s.id] = s; });
        extra.forEach(function (s) { byId[s.id] = s; });
        DATA.species = Object.keys(byId).map(function (k) { return byId[k]; });
        console.info("[ecgo41]", label, "species", extra.length, "→ total", DATA.species.length);
      } catch (e) {
        console.warn("[ecgo41]", label, "species load failed", e);
      }
    }
    await mergeSpeciesUrl(ASSETS.SPECIES_MAP_S4_URL, "S4");
    await mergeSpeciesUrl(ASSETS.SPECIES_MAP_S5_URL, "S5");
    // optional Stage6 JSON preload (lazy on enter still OK)
    s6Data = null;
    if (ASSETS.VOCAB_S6_URL) {
      try {
        const r6 = await fetch(ASSETS.VOCAB_S6_URL + "?v=" + V);
        if (r6.ok) {
          s6Data = await r6.json();
          console.info("[ecgo41] Stage6 blanks loaded", (s6Data.blanks || []).length);
        } else {
          console.warn("[ecgo41] Stage6 JSON HTTP", r6.status);
        }
      } catch (e) {
        console.warn("[ecgo41] Stage6 JSON load failed", e);
      }
    }
    // ecgo52: Stage7 page10＋ANSWER＋再練＋Wave A/B soft tip (lazy on enter still OK)
    s7Data = null;
    if (ASSETS.VOCAB_S7_URL) {
      try {
        const r7 = await fetch(ASSETS.VOCAB_S7_URL + "?v=" + V);
        if (r7.ok) {
          s7Data = await r7.json();
          console.info("[ecgo52] Stage7 verbs loaded", (s7Data.verbs || []).length);
        } else {
          console.warn("[ecgo52] Stage7 JSON HTTP", r7.status);
        }
      } catch (e) {
        console.warn("[ecgo52] Stage7 JSON load failed", e);
      }
    }
    [ASSETS.MAP_BG, ASSETS.MAP_BG_S2, ASSETS.MAP_BG_S4, ASSETS.MAP_BG_S5, ASSETS.PLAYER_BACK, ASSETS.PLAYER_FRONT, ASSETS.ORB_F, ASSETS.ORB_SPIN_FX, ASSETS.LAB_BG_BLUR, ASSETS.CHROME_LEAVE, ASSETS.CHROME_RESET, ASSETS.YEUNG_ENCOUNTER_BACK, ASSETS.YEUNG_ENCOUNTER_SIDE, ASSETS.BOOT_TITLE_FRONT, ASSETS.SPIN_75_MARK]
      .concat(ASSETS.PLAYER_WALK_BACK, ASSETS.PLAYER_WALK_FRONT)
      .concat(ASSETS.FRIEND_WALK_A || [])
      .concat(ASSETS.FRIEND_WALK_B || [])
      .concat(ASSETS.FRIEND_WALK_C || [])
      .concat(ASSETS.FRIEND_WALK_D || [])
      .concat(ASSETS.FRIEND_WALK_E || [])
      .concat(ASSETS.THROW_ORB_FRAMES || [])
      .concat(ASSETS.FX_BLOCK_BY_ID && ASSETS.FX_BLOCK_BY_ID[10] ? ASSETS.FX_BLOCK_BY_ID[10] : [])
      .concat(MAP_FRIENDS.map((f) => f.src))
      .concat(MAP_COMPANIONS.map((c) => c.fallback))
      .concat(MAP_PROPS.map((p) => p.src))
      .forEach((src) => getImg(src));
    applyOrbArt();
    applyEncounterLabBg();
    applyChromeArt();
    // ecgo29 preload CLEAR_VERB poses
    Object.keys(ASSETS.VERB_POSE_BY_ID || {}).forEach(function (k) {
      getImg(ASSETS.VERB_POSE_BY_ID[k]);
    });
    DATA.species.forEach((sp) => {
      getImg(speciesFile(sp));
      getImg(speciesMapFile(sp));
      speciesIdleFrames(sp).forEach((f) => getImg(f));
      probeSilhouette(sp); // optional Art pack; CSS filter interim
    });
    updateOwnedHud();
    window.ECGO = {
      V,
      ASSETS,
      WORLD_W,
      WORLD_H,
      ENCOUNTER_R,
      AUTO_OPEN_R,
      features: {
        mapPanWalk: true,
        encounterFullscreenStill: true,
        flickThrow: true,
        galleryAnswer: true,
        gallerySilhouetteSwap: ASSETS.GALLERY_SIL_DIR,
        tapWildEncounter: true,
        dragCssToWorld: true,
        screenSpaceTap: true,
        debugHud: true,
        encAbsoluteFix: true,
        mapIdleLoop: true,
        inventOrbF: true,
        inventOrbSpinFx: true,
        mapSprites3dIdleV1: true,
        yeungHeroWalkV1: true,
        friendsPropsOverlays: true,
        encLeaveBtn: true,
        resetGalleryBtn: true,
        keepRecord: true,
        keyboardViewportShell: true,
        evolutionCatch10: true,
        ttsEnglishReveal: true,
        typeTimer15s: true,
        stage3PassageFill: true,
        stage456Soft: true,
        stage7IrregularFish: true,
        keepRecordGuard: true,
        mapBgmMp3: true,
        yeungThrowStub: true,
        dodgeBlockCss: true,
      },
      debugState: function () {
        return {
          V,
          mapRunning,
          encounterGrace,
          currentEncounter: !!currentEncounter,
          dbgOpenCount,
          dbgLastOpenReason,
          dbgLastBlock,
          dbgLastProbe,
          dbgLastTap,
          player: { x: player.x, y: player.y },
          cam: { x: cam.x, y: cam.y },
          wild: wild.map(function (c) {
            return {
              id: c.id,
              uid: c.uid,
              d: Math.hypot(c.x - player.x, c.y - player.y),
              dx: c.x - player.x,
              dy: c.y - player.y,
              cd: c.cooldown,
              trig: wildInTrigger(c),
            };
          }),
        };
      },
      forceNearest: function () {
        const n = nearestWild();
        if (!n) return false;
        encounterGrace = 0;
        openEncounter(n.c, "forceNearest");
        return !!currentEncounter;
      },
      reloadPack: async function (packMeta) {
        if (packMeta && packMeta.SPECIES_DIR) ASSETS.SPECIES_DIR = packMeta.SPECIES_DIR;
        if (packMeta && packMeta.SPECIES_DIR_MAP) ASSETS.SPECIES_DIR_MAP = packMeta.SPECIES_DIR_MAP;
        if (packMeta && packMeta.GALLERY_SIL_DIR) ASSETS.GALLERY_SIL_DIR = packMeta.GALLERY_SIL_DIR;
        if (packMeta && packMeta.SPECIES_PACK) ASSETS.SPECIES_PACK = packMeta.SPECIES_PACK;
        if (packMeta && packMeta.SPECIES_MAP_URL) ASSETS.SPECIES_MAP_URL = packMeta.SPECIES_MAP_URL;
        Object.keys(imgCache).forEach((k) => delete imgCache[k]);
        silReady = Object.create(null);
        const m = await fetch(ASSETS.SPECIES_MAP_URL + "?v=" + V).then((r) => r.json());
        DATA.species = m.species || [];
        DATA.species.forEach((sp) => {
          getImg(speciesFile(sp));
          getImg(speciesMapFile(sp));
          speciesIdleFrames(sp).forEach((f) => getImg(f));
          probeSilhouette(sp);
        });
        applyOrbArt();
    applyEncounterLabBg();
    applyChromeArt();
        return ASSETS.SPECIES_PACK;
      },
    };
    const play = $("btn-play");
    if (play) {
      play.disabled = false;
      play.textContent = "Play";
    }
    ["btn-stage1", "btn-stage2", "btn-stage3", "btn-stage4", "btn-stage5", "btn-stage6", "btn-stage7"].forEach(function (id) {
      const b = $(id);
      if (b) b.disabled = false;
    });
    const btnStage3 = $("btn-stage3");
    if (btnStage3) {
      btnStage3.disabled = false;
      if (!s3Data) {
        btnStage3.title = "將即場載入 Stage3 JSON";
      } else {
        btnStage3.title = "";
      }
      btnStage3.textContent = "第三關 · 成段填空";
    }
    s3RebuildSpritePool();
    updateBootRecord();
    // Multi-tab / resume: re-merge LS so another tab's catches are not lost
    try {
      window.addEventListener("storage", function (ev) {
        if (!ev) return;
        const k = ev.key;
        if (
          k === STORAGE_OWNED || k === STORAGE_CATCHES || k === STORAGE_PROGRESS ||
          k === STORAGE_LEGACY_OWNED || k === STORAGE_LEGACY_CATCHES
        ) {
          loadOwned();
          updateOwnedHud();
          if (screens.dex && screens.dex.classList.contains("active")) renderDex();
        }
      });
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
          loadOwned();
          updateOwnedHud();
        }
      });
    } catch (_) {}
    console.info("[ecgo] ready", V, ASSETS.SPECIES_PACK, DATA.words.length + " words", "ecgo53-soft tip s3s6-no-blank-tts base-ecgo52", s3Data ? (s3Data.blanks || []).length + " s3" : "s3-lazy", s6Data ? (s6Data.blanks || []).length + " s6" : "s6-lazy", s7Data ? (s7Data.verbs || []).length + " s7" : "s7-lazy", "owned", owned.size);
  }

  boot().catch((err) => {
    console.error(err);
    const card = document.querySelector(".boot-card");
    if (card) {
      const p = document.createElement("p");
      p.style.color = "#ff5d6c";
      p.textContent = "Load failed: " + err.message;
      card.appendChild(p);
    }
  });
})();
