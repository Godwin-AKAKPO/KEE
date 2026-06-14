import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PetalsCanvas } from "@/components/PetalsCanvas";
import { HeartMesh } from "@/components/HeartMesh";
import { Button } from "@/components/ui/button";

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
  "Je n'ai pas besoin d'une occasion particulière pour te dire ce que je pense de toi.",
  "Juste un moment calme, et l'envie de mettre des mots sur ce que je ressens.",
  "Tu es une personne bien plus forte que tu ne le crois. Derrière ta douceur et ta gentillesse, il y a un courage et une détermination que j'admire énormément.",
  "Parfois, j'ai l'impression que tu ne réalises pas pleinement toutes les qualités que tu possèdes ni tout ce dont tu es capable. Pourtant, moi je les vois. Je vois une personne intelligente, attentionnée, capable de surmonter bien plus d'obstacles qu'elle ne l'imagine.",
  "J'aime la façon dont tu avances malgré les doutes, la manière dont tu te bats pour tes études, pour tes objectifs, et la personne que tu es en train de devenir.",
  "J'espère que chaque jour tu apprendras à croire un peu plus en toi-même, à faire confiance à tes capacités et à ne pas laisser la peur te priver de ce que tu mérites. Il y a en toi un potentiel immense, et je suis convaincu que tu accompliras de très belles choses.",
  "Je voulais simplement que tu le saches.",
  "Parce que parfois, les personnes les plus extraordinaires sont aussi celles qui doutent le plus d'elles-mêmes.",
  "Et toi, tu es une personne vraiment spéciale. 💖",
];

function Lettre() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex < LIGNES.length) {
      const currentLine = LIGNES[currentLineIndex];
      let charIndex = 0;
      const typingSpeed = 60; // vitesse de frappe en ms

      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (newLines[currentLineIndex] === undefined) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] = currentLine.slice(0, charIndex);
            return newLines;
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 800); // pause entre les lignes
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentLineIndex]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-rose-night">
      <PetalsCanvas />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-16"
      >
        <div className="animate-letter-unfold rounded-2xl border border-gold/70 bg-rose-night/90 p-6 backdrop-blur-md sm:p-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 text-center text-5xl font-light text-gold sm:text-6xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Niso,
          </motion.h1>

          <div className="space-y-8">
            {displayedLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl leading-relaxed text-pearl sm:text-3xl"
                style={{ fontFamily: "Dancing Script" }}
              >
                {line}
                {i === currentLineIndex && isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1 inline-block w-1 h-6 bg-gold"
                  />
                )}
              </motion.p>
            ))}

            {!isTyping && currentLineIndex >= LIGNES.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center "
              >
                <HeartMesh />
              </motion.div>
            )}

            {!isTyping && currentLineIndex >= LIGNES.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col items-center gap-4 "
              >
                <Link to="/secret">
                  <Button
                    size="lg"
                    className="serif text-base animate-pulse-gold bg-gradient-to-r from-gold to-amber-400 text-rose-night hover:from-amber-400 hover:to-gold shadow-lg shadow-gold/30"
                  >
                    Un dernier secret…
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
