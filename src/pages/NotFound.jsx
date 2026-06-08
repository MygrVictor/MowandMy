import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f4] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-serif text-[#BD6525] mb-4">404</p>
        <h1 className="text-3xl font-serif text-[#3d3d3d] mb-4">
          Page introuvable
        </h1>
        <p className="text-[#6b6b6b] mb-8 leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#BD6525] to-[#d4844e] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#BD6525]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
