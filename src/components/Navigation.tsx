import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  
  // Cacher le bouton sur la page d'accueil
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link
      to="/"
      className="fixed left-6 top-6 z-50 flex items-center justify-center rounded-full bg-rose-night/70 p-3 text-pearl/80 backdrop-blur-md transition-all hover:bg-rose-night hover:text-gold hover:shadow-lg hover:shadow-gold/30"
    >
      <ArrowLeft size={20} />
    </Link>
  );
}
