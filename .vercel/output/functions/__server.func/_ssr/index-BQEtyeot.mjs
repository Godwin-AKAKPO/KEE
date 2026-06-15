import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { S as Starfield, P as PhotoCarousel3D } from "./Starfield-DtbVgqHc.mjs";
import { P as PetalsCanvas } from "./PetalsCanvas-BRMk2Uy0.mjs";
import { s as startAudio } from "./router-DAGB0VT0.mjs";
import "../_libs/howler.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/react-three__fiber.mjs";
import "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
  const text = useTypewriter("Quelque chose a été créé rien que pour toi, Niso...", 60, 1500);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 500);
    return () => clearTimeout(t);
  }, []);
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "serif text-glow-rose max-w-3xl text-center text-2xl font-light leading-snug text-pearl sm:text-4xl md:text-6xl", children: [
        text,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-gold align-middle" })
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
      }, className: "animate-pulse-glow rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md", children: "Entrer 💖" })
    ] })
  ] });
}
export {
  Arrivee as component
};
