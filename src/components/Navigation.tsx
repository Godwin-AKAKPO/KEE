import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

export function Navigation() {
  return (
    <Link
      to="/"
      className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-rose-night/50 px-3 py-2 text-pearl/60 backdrop-blur-sm transition-all hover:bg-rose-night/80 hover:text-gold hover:shadow-lg hover:shadow-gold/20"
    >
      <Home size={16} />
      <span className="text-sm">Accueil</span>
    </Link>
  );
}
