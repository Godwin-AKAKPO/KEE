import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BubblesCanvas } from "./BubblesCanvas-B-dUw3Rg.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ETAPES = [{
  date: "Le tout premier regard",
  text: "Quelque chose s'est allumé, sans que je sache vraiment quoi.",
  photo: 1
}, {
  date: "La première vraie conversation",
  text: "J'ai compris que tu n'étais pas comme les autres.",
  photo: 2
}, {
  date: "Ce moment partagé",
  text: "Un fou rire, et le monde autour devenait flou.",
  photo: 3
}, {
  date: "Une journée ordinaire",
  text: "Sauf qu'avec toi, rien n'est jamais ordinaire.",
  photo: 4
}, {
  date: "Aujourd'hui",
  text: "Et je continue d'avoir envie de te le dire.",
  photo: 5
}];
function NosInstants() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden bg-rose-dream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BubblesCanvas, { mode: "hearts", density: 22 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: -20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1
      }, className: "serif text-glow-pink text-center text-4xl font-light text-pearl sm:text-6xl", children: "Notre histoire en instants 🌸" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/0 via-gold/70 to-gold/0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: ETAPES.map((e, i) => {
          const left = i % 2 === 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: left ? -40 : 40
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true,
            amount: 0.4
          }, transition: {
            duration: 0.9
          }, className: `relative flex w-full ${left ? "justify-start" : "justify-end"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-6 -translate-x-1/2 text-2xl", children: "💗" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-[46%] min-w-[260px] rounded-2xl border border-pearl/40 bg-rose-night/40 p-4 backdrop-blur-md ${left ? "mr-auto text-right" : "ml-auto text-left"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "serif text-sm italic text-gold", children: e.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "serif mt-2 text-base text-pearl sm:text-lg", children: e.text }),
              e.photo && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/photos/photo${e.photo}.jpg`, alt: "", onError: (ev) => ev.target.src = `https://picsum.photos/seed/niso${e.photo}/400/300`, className: "mt-3 aspect-[4/3] w-full rounded-lg object-cover" })
            ] })
          ] }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "animate-pulse-glow inline-block rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md", children: "Retour au début 🌷" }) })
    ] })
  ] });
}
export {
  NosInstants as component
};
