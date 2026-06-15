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
function Polaroid({ index, caption }) {
  const rotate = (index % 2 === 0 ? -1 : 1) * (3 + index % 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 60, rotate: rotate * 2 },
      whileInView: { opacity: 1, y: 0, rotate },
      viewport: { once: true, amount: 0.4 },
      transition: { duration: 1, ease: "easeOut" },
      whileHover: { rotate: 0, scale: 1.05 },
      className: "mx-auto w-56 max-w-[80vw] rounded-md bg-pearl p-3 pb-10 shadow-[0_20px_50px_rgba(139,30,74,0.45)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `/photos/photo${index}.jpg`,
            alt: `Niso ${index}`,
            onError: (e) => e.target.src = `https://picsum.photos/seed/niso${index}/400/500`,
            className: "aspect-[4/5] w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "serif mt-3 text-center text-sm italic text-rose-deep", children: caption ?? " -- Exaucée Eunice -- " })
      ]
    }
  );
}
const BLOCS = ["Il y a des personnes qui changent la couleur de tes journées sans même le faire exprès.", "Des personnes dont la présence suffit à rendre tout plus léger.", "Tu es cette personne-là, Eunice.....tkt c'est moi Godwin.", "EMEGAK"];
function Decouverte() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden bg-rose-dream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BubblesCanvas, { mode: "bubbles", density: 28 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-2xl px-5 pb-32 pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1.2
      }, className: "serif text-glow-pink mb-16 text-center text-4xl font-light text-pearl sm:text-6xl", children: "Il y a des personnes..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        BLOCS.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 30,
          filter: "blur(8px)"
        }, whileInView: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }, viewport: {
          once: true,
          amount: 0.5
        }, transition: {
          duration: 1.2,
          delay: 0.15
        }, className: "serif text-glow-pink text-center text-xl leading-relaxed text-pearl sm:text-2xl", children: b }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Polaroid, { index: i }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/galerie", className: "inline-block rounded-full border border-pearl/70 bg-pearl/10 px-8 py-3 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md transition hover:bg-pearl/20", children: "Continuer →" }) })
      ] })
    ] })
  ] });
}
export {
  Decouverte as component
};
