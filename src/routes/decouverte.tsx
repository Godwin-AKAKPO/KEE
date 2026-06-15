import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BubblesCanvas } from "@/components/BubblesCanvas";
import { Polaroid } from "@/components/Polaroid";

export const Route = createFileRoute("/decouverte")({
  head: () => ({
    meta: [
      { title: "Il y a des personnes... — pour Niso" },
      { name: "description", content: "Une découverte douce, pour toi." },
    ],
  }),
  component: Decouverte,
});

const BLOCS = [
  "Il y a des personnes qui changent la couleur de tes journées sans même le faire exprès.",
  "Des personnes dont la présence suffit à rendre tout plus léger.",
  "Tu es cette personne-là, Eunice.....tkt c'est moi Godwin.",
  "EMEGAK"
];
  
function Decouverte() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-rose-dream">
      <BubblesCanvas mode="bubbles" density={28} />

      <div className="relative z-10 mx-auto max-w-2xl px-5 pb-32 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="serif text-glow-pink mb-16 text-center text-4xl font-light text-pearl sm:text-6xl"
        >
          Il y a des personnes...
        </motion.h1>

        <div className="space-y-12">
          {BLOCS.map((b, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, delay: 0.15 }}
              className="serif text-glow-pink text-center text-xl leading-relaxed text-pearl sm:text-2xl"
            >
              {b}
            </motion.p>
          ))}

          <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Polaroid key={i} index={i} />
            ))}
          </div>

          <div className="pt-12 text-center">
            <Link
              to="/galerie"
              className="inline-block rounded-full border border-pearl/70 bg-pearl/10 px-8 py-3 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md transition hover:bg-pearl/20"
            >
              Continuer →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
