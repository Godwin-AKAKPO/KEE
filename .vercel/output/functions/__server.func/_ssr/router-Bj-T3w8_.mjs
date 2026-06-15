import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as howlerExports } from "../_libs/howler.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BAl2ew8z.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
let instance = null;
let started = false;
function getAudio() {
  if (!instance) {
    instance = new howlerExports.Howl({
      src: ["/audio/song.mp3"],
      loop: true,
      volume: 0,
      html5: true
    });
  }
  return instance;
}
function startAudio() {
  if (started) return;
  const sound = getAudio();
  sound.play();
  sound.fade(0, 0.5, 3e3);
  started = true;
}
function setVolume(v) {
  getAudio().volume(v);
}
function isStarted() {
  return started;
}
function AudioPlayer() {
  const [muted, setMuted] = reactExports.useState(false);
  const [playing, setPlaying] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const i = setInterval(() => setPlaying(isStarted()), 500);
    return () => clearInterval(i);
  }, []);
  const toggle = () => {
    const sound = getAudio();
    if (muted) {
      sound.fade(0, 0.5, 400);
      setVolume(0.5);
    } else {
      sound.fade(sound.volume(), 0, 400);
    }
    setMuted(!muted);
  };
  if (!playing) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": muted ? "Activer la musique" : "Couper la musique",
      className: "fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-midnight/60 text-gold backdrop-blur-md transition-all hover:scale-110 hover:border-gold animate-float-slow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4L8 8H4v8h4l4 4V4zm7.5 4l-1.4 1.4L20.6 12l-2.5 2.5L19.5 16 22 13.4 24.5 16l1.4-1.4L23.4 12l2.5-2.5L24.5 8 22 10.6 19.5 8z" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3v18l-5-4H3V7h4l5-4zm3 5a4 4 0 010 8M17 5a7 7 0 010 14", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round" }) })
    }
  );
}
function Navigation() {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/",
      className: "fixed left-6 top-6 z-50 flex items-center justify-center rounded-full bg-rose-night/70 p-3 text-pearl/80 backdrop-blur-md transition-all hover:bg-rose-night hover:text-gold hover:shadow-lg hover:shadow-gold/30",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 })
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pour toi, Niso 💖" },
      { name: "description", content: "Une déclaration en plusieurs pages, faite rien que pour toi." },
      { property: "og:title", content: "Pour toi, Niso 💖" },
      { property: "og:description", content: "Une déclaration en plusieurs pages, faite rien que pour toi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Poppins:wght@300;400;500;600&family=Great+Vibes&family=Dancing+Script:wght@400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AudioPlayer, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./secret-BB1T-dYl.mjs");
const Route$5 = createFileRoute("/secret")({
  head: () => ({
    meta: [{
      title: "Le secret — pour Niso"
    }, {
      name: "description",
      content: "Une déclaration."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./nous-BIvBdYe7.mjs");
const Route$4 = createFileRoute("/nous")({
  head: () => ({
    meta: [{
      title: "Notre histoire — pour Niso"
    }, {
      name: "description",
      content: "Une timeline d'instants doux."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./lettre-B5qI51WC.mjs");
const Route$3 = createFileRoute("/lettre")({
  head: () => ({
    meta: [{
      title: "Une lettre pour Niso"
    }, {
      name: "description",
      content: "Quelques mots, simplement vrais."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./galerie-nwDa3bTF.mjs");
const Route$2 = createFileRoute("/galerie")({
  head: () => ({
    meta: [{
      title: "Des instants qui comptent — pour Niso"
    }, {
      name: "description",
      content: "Une galerie immersive."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./decouverte-CVVLG4_n.mjs");
const Route$1 = createFileRoute("/decouverte")({
  head: () => ({
    meta: [{
      title: "Il y a des personnes... — pour Niso"
    }, {
      name: "description",
      content: "Une découverte douce, pour toi."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B9uDcHkz.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Pour toi, Niso 💖"
    }, {
      name: "description",
      content: "Quelque chose a été créé rien que pour toi."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SecretRoute = Route$5.update({
  id: "/secret",
  path: "/secret",
  getParentRoute: () => Route$6
});
const NousRoute = Route$4.update({
  id: "/nous",
  path: "/nous",
  getParentRoute: () => Route$6
});
const LettreRoute = Route$3.update({
  id: "/lettre",
  path: "/lettre",
  getParentRoute: () => Route$6
});
const GalerieRoute = Route$2.update({
  id: "/galerie",
  path: "/galerie",
  getParentRoute: () => Route$6
});
const DecouverteRoute = Route$1.update({
  id: "/decouverte",
  path: "/decouverte",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  DecouverteRoute,
  GalerieRoute,
  LettreRoute,
  NousRoute,
  SecretRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  startAudio as s
};
