import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Fireworks } from "@/components/Fireworks";

export const Route = createFileRoute("/secret")({
  head: () => ({
    meta: [
      { title: "Le secret — pour Niso" },
      { name: "description", content: "Une déclaration." },
    ],
  }),
  component: Secret,
});

const PHRASES = [
  "Tu es mon genre de beau préféré.",
  "Pas à cause de ce que tu montres — mais à cause de ce que tu fais ressentir.",
  "Je suis reconnaissant pour toi. Chaque jour.",
  "C'est ma façon de le dire à voix haute.",
];

function Secret() {
  const [idx, setIdx] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (idx >= PHRASES.length) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 3600);
    return () => clearTimeout(t);
  }, [idx]);

  const trigger = () => {
    setExploded(true);
    setTimeout(() => setShowFinal(true), 1800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden animate-iris-open">
      <AuroraBackground />
      <Fireworks active={exploded} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <div className="flex min-h-[220px] max-w-2xl items-center justify-center">
          <AnimatePresence mode="wait">
            {idx < PHRASES.length && (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 1.2 }}
                className="serif text-glow-rose text-2xl font-light leading-relaxed text-pearl sm:text-5xl"
              >
                {PHRASES[idx]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {idx >= PHRASES.length && !exploded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={trigger}
            className="animate-pulse-glow mt-14 rounded-full border-2 border-gold/70 bg-gradient-to-br from-rose-fuchsia/50 to-violet-soft/40 px-10 py-5 font-sans text-base uppercase tracking-[0.35em] text-pearl backdrop-blur-lg"
          >
            ✨ Appuie ici
          </motion.button>
        )}

        <AnimatePresence>
          {showFinal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-5 text-center"
            >
              <h2 className="serif text-glow-gold text-3xl font-light leading-tight text-pearl sm:text-6xl">
                Tu es magique, Niso.
                <br />
                N'oublie jamais ça. 💖
              </h2>
              <Link
                to="/nous"
                className="mt-12 rounded-full border border-pearl/60 bg-pearl/10 px-8 py-3 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md transition hover:bg-pearl/20"
              >
                Notre histoire 🌸
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
