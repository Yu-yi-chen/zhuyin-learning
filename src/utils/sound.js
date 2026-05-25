import * as Tone from 'tone';

// 0.1s lookahead gives the scheduler enough buffer to avoid
// crackling under main-thread load (0.05 was too tight on mobile)
Tone.context.lookAhead = 0.1;

// ── Global audio chain ────────────────────────────────────────
const limiter = new Tone.Limiter(-6).toDestination();
const mainBus = new Tone.Gain(1).connect(limiter);

// User-controllable volume nodes (0 – 1 from UI)
const bgmVolNode = new Tone.Gain(0.4).connect(mainBus);
const sfxVolNode = new Tone.Gain(0.8).connect(mainBus);

// A. BGM — Freeverb (algorithmic, ~80% cheaper than ConvolverNode)
const bgmReverb = new Tone.Freeverb({ roomSize: 0.25, dampening: 4000, wet: 0.12 }).connect(bgmVolNode);
// Chord synth — triangle gives a bright xylophone-like quality
const bgmPiano  = new Tone.PolySynth(Tone.Synth, {
  maxPolyphony: 6,
  volume: -12,
  oscillator: { type: 'triangle' },
  envelope: { attack: 0.01, decay: 0.25, sustain: 0.1, release: 1.0 },
}).connect(bgmReverb);
// Melody synth — sine ping, sits above the chords
const bgmMelody = new Tone.PolySynth(Tone.Synth, {
  maxPolyphony: 2,
  volume: -20,
  oscillator: { type: 'sine' },
  envelope: { attack: 0.01, decay: 0.12, sustain: 0.0, release: 0.4 },
}).connect(bgmReverb);

// B. Enter-game SFX — clean triangle arpeggio (no delay)
const enterSynth = new Tone.PolySynth(Tone.Synth, {
  maxPolyphony: 8,
  oscillator: { type: 'triangle' },
  envelope: { attack: 0.01, decay: 0.15, sustain: 0.2, release: 0.8 },
}).connect(sfxVolNode);

// C. Correct-answer SFX — clean sine ping (no FM, no ping-pong delay)
const correctSynth = new Tone.PolySynth(Tone.Synth, {
  maxPolyphony: 4,
  oscillator: { type: 'sine' },
  envelope: { attack: 0.001, decay: 0.18, sustain: 0, release: 0.4 },
}).connect(sfxVolNode);

// ── BGM ───────────────────────────────────────────────────────
// C major I–IV–V–IV: bright, happy, resolves cleanly on loop
const chords = [
  ['C4', 'E4', 'G4'],
  ['F3', 'A3', 'C4'],
  ['G3', 'B3', 'D4'],
  ['F3', 'A3', 'C4'],
];
// Single-note melody that sits on top — bouncy ascending feel
const melodyNotes = ['G5', 'A5', 'B5', 'A5'];
let bgmSeq       = null;
let _bgmStarting = false;
let _bgmDebounce = null;

export const startBGM = () => {
  clearTimeout(_bgmDebounce);
  _bgmDebounce = setTimeout(_doStartBGM, 80);
};

const _doStartBGM = async () => {
  if (_bgmStarting || Tone.Transport.state === 'started') return;
  if (_bgmMuted) return;
  _bgmStarting = true;
  try {
    await Tone.start();
    if (Tone.Transport.state === 'started' || _bgmMuted) return;
  } finally {
    _bgmStarting = false;
  }

  Tone.Transport.bpm.value = 104;
  let step = 0;

  bgmSeq = new Tone.Sequence(
    (time) => {
      const i = step % 4;
      bgmPiano.triggerAttackRelease(chords[i], '8n', time);
      bgmMelody.triggerAttackRelease(melodyNotes[i], '8n', time + 0.02);
      step++;
    },
    [0, 1, 2, 3],
    '4n',
  );

  bgmSeq.start(0);
  Tone.Transport.start();
};

export const stopBGM = () => {
  clearTimeout(_bgmDebounce);
  bgmSeq?.stop();
  bgmSeq?.dispose();
  bgmSeq = null;
  Tone.Transport.stop();
  Tone.Transport.cancel();
  bgmPiano.releaseAll();
  bgmMelody.releaseAll();
};

// ── SFX ───────────────────────────────────────────────────────
export const playEnterGame = () => {
  if (Tone.context.state !== 'running' || _sfxMuted) return;
  const notes = ['C5', 'E5', 'G5', 'C6'];
  const now = Tone.now();
  notes.forEach((note, i) => {
    enterSynth.triggerAttackRelease(note, '16n', now + i * 0.06);
  });
};

export const playSuccess = () => {
  if (Tone.context.state !== 'running' || _sfxMuted) return;
  const now = Tone.now();
  // C major arpeggio climb — satisfying upward sweep
  correctSynth.triggerAttackRelease('C5', '16n', now);
  correctSynth.triggerAttackRelease('E5', '16n', now + 0.06);
  correctSynth.triggerAttackRelease('G5', '16n', now + 0.12);
  correctSynth.triggerAttackRelease('C6', '8n',  now + 0.18);
  // Sparkle glitter at the top
  correctSynth.triggerAttackRelease('E6', '16n', now + 0.26);
  correctSynth.triggerAttackRelease('G6', '32n', now + 0.31);
};

// ── Mute toggles ──────────────────────────────────────────────
let _bgmMuted = true;
let _sfxMuted = false;

const dispatchSoundChange = () =>
  window.dispatchEvent(new CustomEvent('bopobear:soundchange'));

export const isBGMMuted = () => _bgmMuted;
export const isSFXMuted = () => _sfxMuted;

export const setBGMMuted = (val) => {
  _bgmMuted = val;
  // Stop Transport entirely when muted — no silent audio processing
  if (val) {
    stopBGM();
  } else {
    startBGM();
  }
  dispatchSoundChange();
};

export const setSFXMuted = (val) => {
  _sfxMuted = val;
  sfxVolNode.gain.rampTo(val ? 0 : 0.8, 0.1);
  dispatchSoundChange();
};

export const toggleBGM = () => { setBGMMuted(!_bgmMuted); return _bgmMuted; };
export const toggleSFX = () => { setSFXMuted(!_sfxMuted); return _sfxMuted; };

// Legacy helpers
export const isMuted    = () => _bgmMuted && _sfxMuted;
export const toggleMute = () => {
  const next = !isMuted();
  setBGMMuted(next);
  setSFXMuted(next);
  return next;
};

export const setBGMVolume = (v) => bgmVolNode.gain.rampTo(v * 0.55, 0.05);
export const setSFXVolume = (v) => sfxVolNode.gain.rampTo(v * 0.8,  0.05);
