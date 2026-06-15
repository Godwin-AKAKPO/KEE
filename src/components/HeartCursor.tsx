import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; life: number; vx: number; vy: number };

export function HeartCursor() {
  const heartRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (heartRef.current) {
        heartRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      }
      if (Math.random() > 0.4) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6 + 0.3,
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0);
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        const r = Math.max(0.1, 2 * p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 180, 210, ${p.life * 0.7})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
      />
      <div
        ref={heartRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] text-rose"
        style={{ filter: "drop-shadow(0 0 6px rgb(255 107 157 / 0.8))" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8C19 16.5 12 21 12 21z" />
        </svg>
      </div>
    </>
  );
}
