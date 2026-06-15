import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Starfield } from "@/components/Starfield";
import { PhotoCarousel3D } from "@/components/PhotoCarousel3D";
import { PetalsCanvas } from "@/components/PetalsCanvas";
import { useTypewriter } from "@/hooks/useTypewriter";
import { startAudio } from "@/lib/audio-singleton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pour toi, Niso 💖" },
      { name: "description", content: "Quelque chose a été créé rien que pour toi." },
    ],
  }),
  component: Arrivee,
});

function Arrivee() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);
  const text = useTypewriter("Quelque chose a été créé rien que pour toi, Niso...", 60, 1500);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 500);
    return () => clearTimeout(t);
  }, []);

  const enter = () => {
    startAudio();
    setTimeout(() => navigate({ to: "/decouverte" }), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
      className="relative min-h-screen w-full overflow-hidden bg-aurora"
    >
      <Starfield/>
      <PetalsCanvas/>
      <PhotoCarousel3D/>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-5 py-16">
        <div className="flex-1" />
        <h1 className="serif text-glow-rose max-w-3xl text-center text-2xl font-light leading-snug text-pearl sm:text-4xl md:text-6xl">
          {text}
          <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-gold align-middle" />
        </h1>
        <div className="flex-1" />

        <motion.button
          onClick={enter}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="animate-pulse-glow rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md"
        >
          Entrer 💖
        </motion.button>
      </div>
    </motion.div>
  );
}
