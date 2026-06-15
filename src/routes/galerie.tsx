import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PhotoCarousel3D } from "@/components/PhotoCarousel3D";
import { Starfield } from "@/components/Starfield";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Des instants qui comptent — pour Niso" },
      { name: "description", content: "Une galerie immersive." },
    ],
  }),
  component: Galerie,
});

const CAPTIONS = [
  "Un sourire que je n'oublie pas.",
  "Une lumière à toi seule.",
  "Un instant suspendu.",
  "Toi, simplement.",
  "Un éclat de toi.",
  "Tout est plus doux près de toi.",
];

function Galerie() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-rose-night">
      <Starfield />

      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="serif text-glow-rose text-center text-4xl font-light text-pearl sm:text-6xl"
        >
          Des instants qui comptent 💫
        </motion.h1>

        <div className="relative my-12 h-[420px]">
          <PhotoCarousel3D />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CAPTIONS.map((c, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
              className="overflow-hidden rounded-2xl border border-rose-fuchsia/40 bg-rose-night/60 p-2 shadow-[0_0_40px_rgba(255,107,157,0.25)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={`/photos/photo${i + 1}.jpg`}
                alt={`Niso ${i + 1}`}
                onError={(e) => ((e.target as HTMLImageElement).src = `https://picsum.photos/seed/niso${i + 1}/600/750`)}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <figcaption className="serif mt-3 px-1 pb-2 text-center text-sm italic text-rose-gold">
                {c}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="pt-14 text-center">
          <Link
            to="/lettre"
            className="animate-pulse-glow inline-block rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md"
          >
            La suite 💌
          </Link>
        </div>
      </div>
    </div>
  );
}
