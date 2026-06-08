import { useState, useEffect } from "react";
import { DEFAULT_AVIS } from "../data/defaults";

function loadAvis() {
  const rawAvis = localStorage.getItem("avis");
  return rawAvis ? JSON.parse(rawAvis) : DEFAULT_AVIS;
}

export default function ReviewCarousel() {
  const [avis] = useState(loadAvis);
  const [currentAvis, setCurrentAvis] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvis((prev) => (prev + 1) % avis.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [avis.length]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[#BD6525] mb-12">Ce que nos clients disent</h2>
        <div className="relative h-48 overflow-hidden">
          {avis.map((a, index) => (
            <div
              key={a.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentAvis
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-[#faf8f4] rounded-2xl p-8">
                <div
                  className="flex justify-center gap-1 mb-4"
                  role="img"
                  aria-label={`Note : ${a.note} sur 5`}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < a.note ? "text-[#BD6525]" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#3d3d3d] text-lg italic mb-4">
                  &laquo;&nbsp;{a.texte}&nbsp;&raquo;
                </p>
                <p className="text-[#9caa8e] font-medium">{a.nom}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {avis.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAvis(index)}
              aria-label={`Voir avis ${index + 1}`}
              className={`w-2 h-2 rounded-full transition ${
                index === currentAvis ? "bg-[#BD6525]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
