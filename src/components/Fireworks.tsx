import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number };

const PHOTOS = ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg", "/photos/photo4.jpg", "/photos/photo5.jpg", "/photos/photo6.jpg"];

export function Fireworks({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const photosRef = useRef<{ src: string; x: number; y: number; vx: number; vy: number; rot: number; vr: number; life: number }[]>([]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const particles: P[] = [];
    const confetti: P[] = [];
    const colors = ["#FF6B9D", "#FFD700", "#9B59B6", "#FFF5F8"];

    // photo explosion
    const imgs = PHOTOS.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.onerror = () => { img.src = `https://picsum.photos/seed/niso${i}/200/300`; };
      const angle = (Math.PI * 2 * i) / PHOTOS.length;
      const speed = 6 + Math.random() * 3;
      photosRef.current.push({
        src: img.src, x: cx, y: cy,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        rot: 0, vr: (Math.random() - 0.5) * 0.1, life: 1,
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
          x: Math.random() * canvas.width, y: -10,
          vx: (Math.random() - 0.5) * 2, vy: 2 + Math.random() * 3,
          life: 1, color: colors[Math.floor(Math.random() * colors.length)], size: 4 + Math.random() * 4,
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
        p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.life -= 0.015;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      for (let i = confetti.length - 1; i >= 0; i--) {
        const c = confetti[i];
        c.x += c.vx; c.y += c.vy; c.vx += (Math.random() - 0.5) * 0.1;
        if (c.y > canvas.height + 10) { confetti.splice(i, 1); continue; }
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size * 1.5);
      }

      for (const p of photosRef.current) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.rot += p.vr; p.life -= 0.005;
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
    }, 5000);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(fwInterval);
      clearInterval(cInterval);
      clearTimeout(stopT);
    };
  }, [active]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50" />;
}
