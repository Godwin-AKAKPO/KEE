import { Howl } from "howler";

let instance: Howl | null = null;
let started = false;

export function getAudio(): Howl {
  if (!instance) {
    instance = new Howl({
      src: ["/audio/song.mp3"],
      loop: true,
      volume: 0,
      html5: true,
    });
  }
  return instance;
}

export function startAudio() {
  if (started) return;
  const sound = getAudio();
  sound.play();
  sound.fade(0, 0.5, 3000);
  started = true;
}

export function setVolume(v: number) {
  getAudio().volume(v);
}

export function isStarted() {
  return started;
}
