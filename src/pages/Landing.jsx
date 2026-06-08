import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#BD6525] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="relative z-10 text-center">
        {/* Logo image */}
        <img
          src="/logo.jpg"
          alt="Mow & My - Restaurant Coffee Shop Coworking"
          className="w-80 md:w-[28rem] lg:w-[32rem] mx-auto mb-12"
        />

        {/* Bouton Découvrir - style vert sauge */}
        <button
          onClick={() => navigate("/home")}
          className="group px-14 py-4 bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-sm text-[#BD6525] font-semibold rounded-full transition-all duration-500 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] tracking-wide"
        >
          Découvrir
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
