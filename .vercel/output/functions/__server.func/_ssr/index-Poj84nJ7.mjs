import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { P as PhotoCarousel3D } from "./PhotoCarousel3D-Bz-kcvIY.mjs";
import { P as PetalsCanvas } from "./PetalsCanvas-BRMk2Uy0.mjs";
import { s as startAudio } from "./router-GhMxzNY9.mjs";
import "../_libs/howler.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as Color } from "../_libs/three.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Stars({ count = 1500 }) {
  const ref = reactExports.useRef(null);
  const { positions, colors } = reactExports.useMemo(() => {
    const positions2 = new Float32Array(count * 3);
    const colors2 = new Float32Array(count * 3);
    const gold = new Color("#FFD700");
    const pink = new Color("#FF6B9D");
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions2[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions2[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions2[i * 3 + 2] = r * Math.cos(phi);
      const c = Math.random() > 0.5 ? gold : pink;
      colors2[i * 3] = c.r;
      colors2[i * 3 + 1] = c.g;
      colors2[i * 3 + 2] = c.b;
    }
    return { positions: positions2, colors: colors2 };
  }, [count]);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.02;
      ref.current.rotation.x += dt * 5e-3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("bufferGeometry", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-color", args: [colors, 3] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { size: 0.08, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true })
  ] });
}
function GlowSphere() {
  const ref = reactExports.useRef(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.3;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [1.2, 64, 64] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color: "#FF6B9D",
        emissive: "#9B59B6",
        emissiveIntensity: 0.8,
        roughness: 0.3,
        metalness: 0.6
      }
    )
  ] });
}
function Starfield() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 6], fov: 60 }, dpr: [1, 2], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 2, color: "#FFD700" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, 2], intensity: 1.5, color: "#FF6B9D" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlowSphere, {})
  ] }) });
}
function useTypewriter(text, speed = 60, startDelay = 0) {
  const [out, setOut] = reactExports.useState("");
  reactExports.useEffect(() => {
    setOut("");
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);
  return out;
}
function Arrivee() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = reactExports.useState(false);
  const [textComplete, setTextComplete] = reactExports.useState(false);
  const [hideText, setHideText] = reactExports.useState(false);
  const text = useTypewriter("Quelque chose a été créé rien que pour toi, Niso...", 60, 1500);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 500);
    return () => clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    if (text === "Quelque chose a été créé rien que pour toi, Niso...") {
      setTextComplete(true);
      const hideTimeout = setTimeout(() => setHideText(true), 2e3);
      return () => clearTimeout(hideTimeout);
    }
  }, [text]);
  const enter = () => {
    startAudio();
    setTimeout(() => navigate({
      to: "/decouverte"
    }), 300);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: revealed ? 1 : 0
  }, transition: {
    duration: 2.2,
    ease: "easeOut"
  }, className: "relative min-h-screen w-full overflow-hidden bg-aurora", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Starfield, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PetalsCanvas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoCarousel3D, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col items-center justify-between px-5 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0
      }, animate: {
        opacity: hideText ? 0 : 1
      }, transition: {
        duration: 1
      }, className: "serif text-glow-rose max-w-3xl text-center text-2xl font-light leading-snug text-pearl sm:text-4xl md:text-6xl", children: [
        text,
        !textComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-gold align-middle" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { onClick: enter, initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 4,
        duration: 1
      }, whileHover: {
        scale: 1.05
      }, whileTap: {
        scale: 0.97
      }, className: "animate-pulse-glow rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm tracking-[0.3em] text-pearl backdrop-blur-md", children: "Vas-y 💖" })
    ] })
  ] });
}
export {
  Arrivee as component
};
