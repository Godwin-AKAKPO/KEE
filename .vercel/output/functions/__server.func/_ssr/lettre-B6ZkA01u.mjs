import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PetalsCanvas } from "./PetalsCanvas-BRMk2Uy0.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
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
    geo.rotateZ(Math.PI);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 50 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [3, 3, 5], intensity: 2, color: "#FFD700" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-3, -2, 3], intensity: 1.5, color: "#FF6B9D" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {})
  ] }) });
}
const LIGNES = ["Je n'ai pas besoin d'une occasion particulière pour dire ce que je ressens.", "Juste un moment calme, et un peu de courage.", "Chaque instant passé avec toi a une couleur différente — plus chaude, plus douce.", "Tu ne réalises peut-être pas l'effet que tu as sur les choses autour de toi.", "Mais moi, je le vois. Et je voulais que tu le saches.", "Simplement. Sincèrement. 💖"];
function Lettre() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden bg-rose-night", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PetalsCanvas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 1
    }, className: "relative z-10 mx-auto max-w-2xl px-5 pb-32 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-letter-unfold rounded-2xl border border-gold/30 bg-rose-night/70 p-6 backdrop-blur-md sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "serif text-glow-gold mb-10 text-center text-4xl font-light text-pearl sm:text-5xl", children: "Niso," }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
        LIGNES.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.6
        }, transition: {
          duration: 1.2
        }, className: "serif relative inline-block text-lg leading-relaxed text-pearl sm:text-2xl", children: [
          line,
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
            scaleX: 0
          }, whileInView: {
            scaleX: 1
          }, viewport: {
            once: true,
            amount: 0.6
          }, transition: {
            duration: 1.4,
            delay: 0.5
          }, className: "absolute -bottom-2 left-0 block h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-gold to-transparent", style: {
            filter: "drop-shadow(0 0 6px rgba(255,215,0,0.7))"
          } })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartMesh, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/secret", className: "serif inline-block text-base italic text-gold/80 underline decoration-gold/40 underline-offset-8 transition-all hover:text-gold", children: "Un dernier secret…" }) })
      ] })
    ] }) })
  ] });
}
export {
  Lettre as component
};
