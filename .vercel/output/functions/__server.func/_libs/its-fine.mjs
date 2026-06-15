import { r as reactExports } from "./react.mjs";
function i(e, t, r) {
  if (!e) return;
  if (r(e) === true) return e;
  let n = t ? e.return : e.child;
  for (; n; ) {
    const u = i(n, t, r);
    if (u) return u;
    n = t ? null : n.sibling;
  }
}
function l(e) {
  try {
    return Object.defineProperties(e, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch (t) {
    return e;
  }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ reactExports.createContext(null));
class m extends reactExports.Component {
  render() {
    return /* @__PURE__ */ reactExports.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function c() {
  const e = reactExports.useContext(a);
  if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const t = reactExports.useId();
  return reactExports.useMemo(() => {
    for (const n of [e, e == null ? void 0 : e.alternate]) {
      if (!n) continue;
      const u = i(n, false, (d) => {
        let s = d.memoizedState;
        for (; s; ) {
          if (s.memoizedState === t) return true;
          s = s.next;
        }
      });
      if (u) return u;
    }
  }, [e, t]);
}
const p = /* @__PURE__ */ Symbol.for("react.context"), b = (e) => e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
  const e = c(), [t] = reactExports.useState(() => /* @__PURE__ */ new Map());
  t.clear();
  let r = e;
  for (; r; ) {
    const n = r.type;
    b(n) && n !== a && !t.has(n) && t.set(n, reactExports.use(l(n))), r = r.return;
  }
  return t;
}
function x() {
  const e = h();
  return reactExports.useMemo(
    () => Array.from(e.keys()).reduce(
      (t, r) => (n) => /* @__PURE__ */ reactExports.createElement(t, null, /* @__PURE__ */ reactExports.createElement(r.Provider, { ...n, value: e.get(r) })),
      (t) => /* @__PURE__ */ reactExports.createElement(m, { ...t })
    ),
    [e]
  );
}
export {
  c,
  i,
  m,
  x
};
