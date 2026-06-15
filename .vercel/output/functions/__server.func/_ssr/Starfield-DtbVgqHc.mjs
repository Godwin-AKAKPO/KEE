import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { e as Color } from "../_libs/three.mjs";
const PHOTOS = ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg", "/photos/photo4.jpg", "/photos/photo5.jpg", "/photos/photo6.jpg", "/photos/photo7.jpg", "/photos/photo8.jpg"];
function PhotoCarousel3D() {
  const [angle, setAngle] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1e3;
      last = now;
      setAngle((a) => a + dt * 12);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      style: { perspective: "1200px" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative h-64 w-64",
          style: { transformStyle: "preserve-3d", transform: `rotateY(${angle}deg)` },
          children: PHOTOS.map((src, i) => {
            const rot = 360 / PHOTOS.length * i;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-1/2 top-1/2 h-42 w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-gold/40 bg-midnight shadow-[0_0_40px_rgba(255,107,157,0.4)]",
                style: {
                  transform: `rotateY(${rot}deg) translateZ(260px)`,
                  backfaceVisibility: "hidden"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src,
                    alt: "",
                    onError: (e) => {
                      e.target.src = `https://picsum.photos/seed/niso${i}/200/300`;
                    },
                    className: "h-full w-full object-cover"
                  }
                )
              },
              i
            );
          })
        }
      )
    }
  );
}
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
export {
  PhotoCarousel3D as P,
  Starfield as S
};
