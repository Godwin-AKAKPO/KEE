import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BubblesCanvas } from "@/components/BubblesCanvas";

export const Route = createFileRoute("/nous")({
  head: () => ({
    meta: [
      { title: "Notre histoire — pour Niso" },
      { name: "description", content: "Une timeline d'instants doux." },
    ],
  }),
  component: NosInstants,
});

const ETAPES = [
  { date: "Le tout premier regard", text: "Quelque chose s'est allumé, sans que je sache vraiment quoi.", photo: 1 },
  { date: "La première vraie conversation", text: "J'ai compris que tu n'étais pas comme les autres.", photo: 2 },
  { date: "Ce moment partagé", text: "Un fou rire, et le monde autour devenait flou.", photo: 3 },
  { date: "Une journée ordinaire", text: "Sauf qu'avec toi, rien n'est jamais ordinaire.", photo: 4 },
  { date: "Aujourd'hui", text: "Et je continue d'avoir envie de te le dire.", photo: 5 },
];

function NosInstants() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-rose-dream">
      <BubblesCanvas mode="hearts" density={22} />

      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="serif text-glow-pink text-center text-4xl font-light text-pearl sm:text-6xl"
        >
          Notre histoire en instants 🌸
        </motion.h1>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/0 via-gold/70 to-gold/0" />
          <div className="space-y-16">
            {ETAPES.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9 }}
                  className={`relative flex w-full ${left ? "justify-start" : "justify-end"}`}
                >
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 text-2xl">💗</div>
                  <div className={`w-[46%] min-w-[260px] rounded-2xl border border-pearl/40 bg-rose-night/40 p-4 backdrop-blur-md ${left ? "mr-auto text-right" : "ml-auto text-left"}`}>
                    <p className="serif text-sm italic text-gold">{e.date}</p>
                    <p className="serif mt-2 text-base text-pearl sm:text-lg">{e.text}</p>
                    {e.photo && (
                      <img
                        src={`/photos/photo${e.photo}.jpg`}
                        alt=""
                        onError={(ev) => ((ev.target as HTMLImageElement).src = `https://picsum.photos/seed/niso${e.photo}/400/300`)}
                        className="mt-3 aspect-[4/3] w-full rounded-lg object-cover"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="pt-16 text-center">
          <Link
            to="/"
            className="animate-pulse-glow inline-block rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md"
          >
            Retour au début 🌷
          </Link>
        </div>
      </div>
    </div>
  );
}
