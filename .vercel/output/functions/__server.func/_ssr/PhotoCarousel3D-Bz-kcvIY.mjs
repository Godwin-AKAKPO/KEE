import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
export {
  PhotoCarousel3D as P
};
