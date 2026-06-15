import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PetalsCanvas } from "./PetalsCanvas-BRMk2Uy0.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { k as Shape, E as ExtrudeGeometry } from "../_libs/three.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Heart() {
  const ref = reactExports.useRef(null);
  const geometry = reactExports.useMemo(() => {
    const shape = new Shape();
    const x = 0, y = 0;
    shape.moveTo(x, y);
    shape.bezierCurveTo(x, y, x - 0.5, y + 0.5, x - 1, y + 0.5);
    shape.bezierCurveTo(x - 2, y + 0.5, x - 2, y - 0.7, x - 2, y - 0.7);
    shape.bezierCurveTo(x - 2, y - 1.5, x - 1, y - 2.3, x, y - 3);
    shape.bezierCurveTo(x + 1, y - 2.3, x + 2, y - 1.5, x + 2, y - 0.7);
    shape.bezierCurveTo(x + 2, y - 0.7, x + 2, y + 0.5, x + 1, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x, y, x, y);
    const geo = new ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelSegments: 8, bevelSize: 0.15, bevelThickness: 0.15 });
    geo.center();
    return geo;
  }, []);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const beat = 1 + Math.abs(Math.sin(t * 2)) * 0.12;
    ref.current.scale.setScalar(beat * 0.4);
    ref.current.rotation.y = Math.sin(t * 0.5) * 0.3;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { ref, geometry, children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#FF6B9D", emissive: "#FF1654", emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.5 }) });
}
function HeartMesh() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-74 w-74", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 50 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [3, 3, 5], intensity: 2, color: "#FFD700" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-3, -2, 3], intensity: 1.5, color: "#FF6B9D" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {})
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const LIGNES = ["Je n'ai pas besoin d'une occasion particulière pour te dire ce que je pense de toi.", "Juste un moment calme, et l'envie de mettre des mots sur ce que je ressens.", "Tu es une personne bien plus forte que tu ne le crois. Derrière ta douceur et ta gentillesse, il y a un courage et une détermination que j'admire énormément.", "Parfois, j'ai l'impression que tu ne réalises pas pleinement toutes les qualités que tu possèdes ni tout ce dont tu es capable. Pourtant, moi je les vois. Je vois une personne intelligente, attentionnée, capable de surmonter bien plus d'obstacles qu'elle ne l'imagine.", "J'aime la façon dont tu avances malgré les doutes, la manière dont tu te bats pour tes études, pour tes objectifs, et la personne que tu es en train de devenir.", "J'espère que chaque jour tu apprendras à croire un peu plus en toi-même, à faire confiance à tes capacités et à ne pas laisser la peur te priver de ce que tu mérites. Il y a en toi un potentiel immense, et je suis convaincu que tu accompliras de très belles choses.", "Je voulais simplement que tu le saches.", "Parce que parfois, les personnes les plus extraordinaires sont aussi celles qui doutent le plus d'elles-mêmes.", "Et toi, tu es une personne vraiment spéciale. 💖"];
function Lettre() {
  const [currentLineIndex, setCurrentLineIndex] = reactExports.useState(0);
  const [displayedLines, setDisplayedLines] = reactExports.useState([]);
  const [isTyping, setIsTyping] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (currentLineIndex < LIGNES.length) {
      const currentLine = LIGNES[currentLineIndex];
      let charIndex = 0;
      const typingSpeed = 60;
      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (newLines[currentLineIndex] === void 0) {
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
          }, 800);
        }
      }, typingSpeed);
      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentLineIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden bg-rose-night", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PetalsCanvas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 1
    }, className: "relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-letter-unfold rounded-2xl border border-gold/70 bg-rose-night/90 p-6 backdrop-blur-md sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: -20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1
      }, className: "mb-12 text-center text-5xl font-light text-gold sm:text-6xl", style: {
        fontFamily: "'Great Vibes', cursive"
      }, children: "Niso," }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        displayedLines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 0.5
        }, className: "text-xl leading-relaxed text-pearl sm:text-3xl", style: {
          fontFamily: "Dancing Script"
        }, children: [
          line,
          i === currentLineIndex && isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
            opacity: [1, 0]
          }, transition: {
            repeat: Infinity,
            duration: 0.8
          }, className: "ml-1 inline-block w-1 h-6 bg-gold" })
        ] }, i)),
        !isTyping && currentLineIndex >= LIGNES.length && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.8
        }, className: "flex flex-col items-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartMesh, {}) }),
        !isTyping && currentLineIndex >= LIGNES.length && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.3
        }, className: "flex flex-col items-center gap-4 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/secret", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "serif text-base animate-pulse-gold bg-gradient-to-r from-gold to-amber-400 text-rose-night hover:from-amber-400 hover:to-gold shadow-lg shadow-gold/30", children: "Un dernier secret…" }) }) })
      ] })
    ] }) })
  ] });
}
export {
  Lettre as component
};
