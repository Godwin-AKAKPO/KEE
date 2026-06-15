import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Starfield, P as PhotoCarousel3D } from "./Starfield-DtbVgqHc.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CAPTIONS = ["Un sourire que je n'oublie pas.", "Une lumière à toi seule.", "Un instant suspendu.", "Toi, simplement.", "Un éclat de toi.", "Tout est plus doux près de toi."];
function Galerie() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden bg-rose-night", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Starfield, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: -20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1.2
      }, className: "serif text-glow-rose text-center text-4xl font-light text-pearl sm:text-6xl", children: "Des instants qui comptent 💫" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative my-12 h-[420px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoCarousel3D, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: CAPTIONS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        amount: 0.3
      }, transition: {
        duration: 0.9,
        delay: i * 0.08
      }, whileHover: {
        rotateX: 4,
        rotateY: -4,
        scale: 1.03
      }, className: "overflow-hidden rounded-2xl border border-rose-fuchsia/40 bg-rose-night/60 p-2 shadow-[0_0_40px_rgba(255,107,157,0.25)]", style: {
        transformStyle: "preserve-3d"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/photos/photo${i + 1}.jpg`, alt: `Niso ${i + 1}`, onError: (e) => e.target.src = `https://picsum.photos/seed/niso${i + 1}/600/750`, className: "aspect-[4/5] w-full rounded-xl object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "serif mt-3 px-1 pb-2 text-center text-sm italic text-rose-gold", children: c })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/lettre", className: "animate-pulse-glow inline-block rounded-full border border-gold/60 bg-rose-fuchsia/30 px-10 py-4 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md", children: "La suite 💌" }) })
    ] })
  ] });
}
export {
  Galerie as component
};
