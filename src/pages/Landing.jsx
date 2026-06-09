import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);
  const timeoutRef = useRef(null);

  function handleDiscover() {
    if (isOpening) return;
    setIsOpening(true);

    timeoutRef.current = setTimeout(() => {
      navigate("/home");
    }, 420);
  }

  return (
    <div className="min-h-screen bg-[#BD6525] flex items-center justify-center px-6 relative overflow-hidden">
      <div
        className={`relative z-10 text-center transition-all duration-500 ${
          isOpening ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Logo image */}
        <img
          src="/logo.jpg"
          alt="Mow & My - Restaurant Coffee Shop Coworking"
          className="w-80 md:w-[28rem] lg:w-[32rem] mx-auto mb-12"
        />

        {/* Bouton Découvrir - style vert sauge */}
        <button
          type="button"
          onClick={handleDiscover}
          disabled={isOpening}
          className="group px-14 py-4 bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-sm text-[#BD6525] font-semibold rounded-full transition-all duration-500 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] tracking-wide"
        >
          Découvrir
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      <div
        aria-hidden="true"
        className={`landing-curtain ${isOpening ? "landing-curtain--open" : ""}`}
      />
    </div>
  );
}
