import { Link } from "react-router-dom";
import { InstagramIcon, FacebookIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-[#ece8e1] border-t-2 border-[#BD6525]/20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-[#BD6525] text-2xl mb-1">Mow & My</p>
          <p className="text-sm text-[#6b6b6b]">
            Restaurant · Coffee Shop · Pornic
          </p>
        </div>
        <div className="flex gap-6 text-sm text-[#6b6b6b]">
          <Link to="/restaurant" className="hover:text-[#BD6525] transition">
            Restaurant
          </Link>
          <Link to="/coffee" className="hover:text-[#BD6525] transition">
            Coffee
          </Link>
          <Link to="/coworking" className="hover:text-[#BD6525] transition">
            Coworking
          </Link>
          <Link to="/ateliers" className="hover:text-[#BD6525] transition">
            Ateliers
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.instagram.com/mowandmy/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Mow & My"
            className="text-[#9caa8e] hover:text-[#BD6525] transition"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100082120245661&locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Mow & My"
            className="text-[#9caa8e] hover:text-[#BD6525] transition"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[#BD6525]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9caa8e]">
        <p>© {new Date().getFullYear()} Mow & My — Tous droits réservés</p>
        <div className="flex items-center gap-4">
          <Link to="/admin" className="hover:text-[#BD6525] transition">
            Espace pro
          </Link>
          <Link
            to="/mentions-legales"
            className="hover:text-[#BD6525] transition"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
