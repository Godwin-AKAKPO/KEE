import { useEffect, useState } from "react";
import { getAudio, setVolume, isStarted } from "@/lib/audio-singleton";

export function AudioPlayer() {
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const i = setInterval(() => setPlaying(isStarted()), 500);
    return () => clearInterval(i);
  }, []);

  const toggle = () => {
    const sound = getAudio();
    if (muted) {
      sound.fade(0, 0.5, 400);
      setVolume(0.5);
    } else {
      sound.fade(sound.volume(), 0, 400);
    }
    setMuted(!muted);
  };

  if (!playing) return null;

  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Activer la musique" : "Couper la musique"}
      className="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-midnight/60 text-gold backdrop-blur-md transition-all hover:scale-110 hover:border-gold animate-float-slow"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        {muted ? (
          <path d="M12 4L8 8H4v8h4l4 4V4zm7.5 4l-1.4 1.4L20.6 12l-2.5 2.5L19.5 16 22 13.4 24.5 16l1.4-1.4L23.4 12l2.5-2.5L24.5 8 22 10.6 19.5 8z" />
        ) : (
          <path d="M12 3v18l-5-4H3V7h4l5-4zm3 5a4 4 0 010 8M17 5a7 7 0 010 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </button>
  );
}
