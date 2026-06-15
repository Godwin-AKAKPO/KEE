import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PetalsCanvas } from "@/components/PetalsCanvas";
import { HeartMesh } from "@/components/HeartMesh";

export const Route = createFileRoute("/lettre")({
  head: () => ({
    meta: [
      { title: "Une lettre pour Niso" },
      { name: "description", content: "Quelques mots, simplement vrais." },
    ],
  }),
  component: Lettre,
});

const LIGNES = [
  "Je n'ai pas besoin d'une occasion particulière pour dire ce que je ressens.",
  "Juste un moment calme, et un peu de courage.",
  "Chaque instant passé avec toi a une couleur différente — plus chaude, plus douce.",
  "Tu ne réalises peut-être pas l'effet que tu as sur les choses autour de toi.",
  "Mais moi, je le vois. Et je voulais que tu le saches.",
  "Simplement. Sincèrement. 💖",
];

function Lettre() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-rose-night">
      <PetalsCanvas />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-2xl px-5 pb-32 pt-16"
      >
        <div className="animate-letter-unfold rounded-2xl border border-gold/30 bg-rose-night/70 p-6 backdrop-blur-md sm:p-12">
          <h1 className="serif text-glow-gold mb-10 text-center text-4xl font-light text-pearl sm:text-5xl">
            Niso,
          </h1>

          <div className="space-y-10">
            {LIGNES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2 }}
                className="serif relative inline-block text-lg leading-relaxed text-pearl sm:text-2xl"
              >
                {line}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.4, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 block h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
                  style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.7))" }}
                />
              </motion.p>
            ))}

            <div className="flex flex-col items-center pt-6">
              <HeartMesh />
            </div>

            <div className="pt-6 text-center">
              <Link
                to="/secret"
                className="serif inline-block text-base italic text-gold/80 underline decoration-gold/40 underline-offset-8 transition-all hover:text-gold"
              >
                Un dernier secret…
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
