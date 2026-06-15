import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
function AuroraBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden bg-midnight", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -inset-1/4 animate-aurora-shift opacity-70",
        style: {
          background: "radial-gradient(ellipse at 30% 40%, rgba(155,89,182,0.6), transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(80,220,170,0.45), transparent 55%), radial-gradient(ellipse at 50% 80%, rgba(255,107,157,0.55), transparent 60%)",
          filter: "blur(40px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -inset-1/4 animate-aurora-shift opacity-50",
        style: {
          animationDelay: "-7s",
          background: "radial-gradient(ellipse at 80% 60%, rgba(255,215,0,0.35), transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(155,89,182,0.55), transparent 55%)",
          filter: "blur(60px)"
        }
      }
    )
  ] });
}
const PHOTOS = ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg", "/photos/photo4.jpg", "/photos/photo5.jpg", "/photos/photo6.jpg"];
function Fireworks({ active }) {
  const canvasRef = reactExports.useRef(null);
  const photosRef = reactExports.useRef([]);
  reactExports.useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const particles = [];
    const confetti = [];
    const colors = ["#FF6B9D", "#FFD700", "#9B59B6", "#FFF5F8"];
    const imgs = PHOTOS.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.onerror = () => {
        img.src = `https://picsum.photos/seed/niso${i}/200/300`;
      };
      const angle = Math.PI * 2 * i / PHOTOS.length;
      const speed = 6 + Math.random() * 3;
      photosRef.current.push({
        src: img.src,
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rot: 0,
        vr: (Math.random() - 0.5) * 0.1,
        life: 1
      });
      return img;
    });
    const launch = () => {
      const fx = Math.random() * canvas.width;
      const fy = Math.random() * canvas.height * 0.6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 2 + Math.random() * 5;
        particles.push({ x: fx, y: fy, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, color, size: 2 + Math.random() * 2 });
      }
    };
    const dropConfetti = () => {
      for (let i = 0; i < 4; i++) {
        confetti.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 2,
          vy: 2 + Math.random() * 3,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 4 + Math.random() * 4
        });
      }
    };
    let raf = 0;
    let t0 = performance.now();
    const fwInterval = setInterval(launch, 350);
    const cInterval = setInterval(dropConfetti, 40);
    const loop = () => {
      ctx.fillStyle = "rgba(15, 8, 30, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.life -= 0.015;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (let i = confetti.length - 1; i >= 0; i--) {
        const c = confetti[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vx += (Math.random() - 0.5) * 0.1;
        if (c.y > canvas.height + 10) {
          confetti.splice(i, 1);
          continue;
        }
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size * 1.5);
      }
      for (const p of photosRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.rot += p.vr;
        p.life -= 5e-3;
        const img = imgs.find((im) => im.src === p.src);
        if (img && img.complete) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.drawImage(img, -40, -60, 80, 120);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
      if (performance.now() - t0 < 5500) {
        raf = requestAnimationFrame(loop);
      }
    };
    loop();
    const stopT = setTimeout(() => {
      clearInterval(fwInterval);
      clearInterval(cInterval);
    }, 5e3);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(fwInterval);
      clearInterval(cInterval);
      clearTimeout(stopT);
    };
  }, [active]);
  if (!active) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "pointer-events-none fixed inset-0 z-50" });
}
const PHRASES = ["Tu es mon genre de beau préféré.", "Pas à cause de ce que tu montres — mais à cause de ce que tu fais ressentir.", "Je suis reconnaissant pour toi. Chaque jour.", "C'est ma façon de le dire à voix haute."];
function Secret() {
  const [idx, setIdx] = reactExports.useState(0);
  const [exploded, setExploded] = reactExports.useState(false);
  const [showFinal, setShowFinal] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (idx >= PHRASES.length) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 3600);
    return () => clearTimeout(t);
  }, [idx]);
  const trigger = () => {
    setExploded(true);
    setTimeout(() => setShowFinal(true), 1800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden animate-iris-open", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuroraBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fireworks, { active: exploded }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[220px] max-w-2xl items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: idx < PHRASES.length && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20,
        filter: "blur(10px)"
      }, animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }, exit: {
        opacity: 0,
        y: -20,
        filter: "blur(10px)"
      }, transition: {
        duration: 1.2
      }, className: "serif text-glow-rose text-2xl font-light leading-relaxed text-pearl sm:text-5xl", children: PHRASES[idx] }, idx) }) }),
      idx >= PHRASES.length && !exploded && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { initial: {
        opacity: 0,
        scale: 0.8
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1
      }, whileHover: {
        scale: 1.08
      }, whileTap: {
        scale: 0.95
      }, onClick: trigger, className: "animate-pulse-glow mt-14 rounded-full border-2 border-gold/70 bg-gradient-to-br from-rose-fuchsia/50 to-violet-soft/40 px-10 py-5 font-sans text-base uppercase tracking-[0.35em] text-pearl backdrop-blur-lg", children: "✨ Appuie ici" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showFinal && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.7
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1.6,
        ease: "easeOut"
      }, className: "absolute inset-0 z-[60] flex flex-col items-center justify-center px-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "serif text-glow-gold text-3xl font-light leading-tight text-pearl sm:text-6xl", children: [
          "Tu es magique, Niso.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "N'oublie jamais ça. 💖"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/nous", className: "mt-12 rounded-full border border-pearl/60 bg-pearl/10 px-8 py-3 font-sans text-sm uppercase tracking-[0.3em] text-pearl backdrop-blur-md transition hover:bg-pearl/20", children: "Notre histoire 🌸" })
      ] }) })
    ] })
  ] });
}
export {
  Secret as component
};
