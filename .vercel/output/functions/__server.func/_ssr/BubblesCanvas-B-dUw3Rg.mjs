import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function BubblesCanvas({ mode = "bubbles", density = 30 }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const items = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * canvas.height,
      vy: 0.3 + Math.random() * 0.9,
      r: 6 + Math.random() * 16,
      sway: Math.random() * Math.PI * 2,
      hue: 330 + Math.random() * 30
    }));
    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const it of items) {
        it.y -= it.vy;
        it.sway += 0.02;
        const x = it.x + Math.sin(it.sway) * 12;
        if (it.y < -30) {
          it.y = canvas.height + 30;
          it.x = Math.random() * canvas.width;
        }
        if (mode === "hearts") {
          ctx.save();
          ctx.translate(x, it.y);
          ctx.scale(it.r / 18, it.r / 18);
          ctx.fillStyle = `hsla(${it.hue}, 90%, 70%, 0.7)`;
          ctx.beginPath();
          ctx.moveTo(0, 4);
          ctx.bezierCurveTo(-12, -6, -12, -16, 0, -8);
          ctx.bezierCurveTo(12, -16, 12, -6, 0, 4);
          ctx.fill();
          ctx.restore();
        } else {
          const grad = ctx.createRadialGradient(x, it.y, 1, x, it.y, it.r);
          grad.addColorStop(0, `hsla(${it.hue}, 100%, 85%, 0.85)`);
          grad.addColorStop(1, `hsla(${it.hue}, 100%, 70%, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, it.y, it.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mode, density]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref, className: "pointer-events-none absolute inset-0" });
}
export {
  BubblesCanvas as B
};
