import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { PhoneIcon } from "./Icons";

const NAV_LINKS = [
  { to: "/home", label: "Accueil" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/coffee", label: "Coffee Shop" },
  { to: "/coworking", label: "Coworking" },
  { to: "/ateliers", label: "Ateliers" },
];

const NAV_THEME_BY_PATH = {
  "/restaurant": "#85875C",
  "/coffee": "#8EC5B8",
  "/coworking": "#9caa8e",
  "/ateliers": "#cd9a18",
  "/home": "#BD6525",
  "/mentions-legales": "#BD6525",
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const navColor = NAV_THEME_BY_PATH[pathname] || "#BD6525";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: navColor }}
      className={`sticky top-0 z-50 bg-[#BD6525] transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/15" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center">
          {/* Logo */}
          <Link
            to="/home"
            className="text-white font-serif text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Mow & My
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-1 items-center ml-12">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  pathname === to
                    ? "text-white bg-white/20"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="tel:+33240000000"
            style={{ color: navColor }}
            className="hidden md:flex items-center gap-2 ml-auto px-5 py-2.5 bg-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
          >
            <PhoneIcon className="w-4 h-4" />
            Réserver
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-xl text-white hover:bg-white/15 transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-white/20 pt-4 pb-2">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  pathname === to
                    ? "text-white bg-white/20"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+33240000000"
              style={{ color: navColor }}
              className="flex items-center justify-center gap-2 mt-2 px-5 py-2.5 bg-white text-sm font-semibold rounded-full"
            >
              <PhoneIcon className="w-4 h-4" />
              Réserver
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
