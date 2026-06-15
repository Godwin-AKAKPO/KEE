import { r as reactExports } from "./react.mjs";
function g(n, t) {
  let o;
  return (...i) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...i), t);
  };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = { debounce: 0, scroll: false, offsetSize: false }) {
  const a = o || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c, h] = reactExports.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), e = reactExports.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c, orientationHandler: null }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = reactExports.useRef(false);
  reactExports.useEffect(() => (w.current = true, () => void (w.current = false)));
  const [z, m, s] = reactExports.useMemo(() => {
    const r = () => {
      if (!e.current.element) return;
      const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R };
      e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
    };
    return [r, f ? g(r, f) : r, d ? g(r, d) : r];
  }, [h, i, d, f]);
  function v() {
    e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, true)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
  }
  function b() {
    e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, { capture: true, passive: true })), e.current.orientationHandler = () => {
      s();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
  }
  const L = (r) => {
    !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
  };
  return X(s, !!t), W(m), reactExports.useEffect(() => {
    v(), b();
  }, [t, s, m]), reactExports.useEffect(() => v, []), [L, c, z];
}
function W(n) {
  reactExports.useEffect(() => {
    const t = n;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [n]);
}
function X(n, t) {
  reactExports.useEffect(() => {
    if (t) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: true, passive: true }), () => void window.removeEventListener("scroll", o, true);
    }
  }, [n, t]);
}
function E(n) {
  const t = [];
  if (!n || n === document.body) return t;
  const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
  return [o, i, a].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
const k = ["x", "y", "top", "bottom", "left", "right", "width", "height"], D = (n, t) => k.every((o) => n[o] === t[o]);
export {
  j
};
