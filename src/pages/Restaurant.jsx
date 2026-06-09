import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import { useState } from "react";
import { PhoneIcon } from "../components/Icons";
import { DEFAULT_MENU, DEFAULT_BRUNCH } from "../data/defaults";
import ScrollReveal from "../components/ScrollReveal";

export default function Restaurant() {
  const [hours] = useState(() => {
    const rawHours = localStorage.getItem("openingHours");
    return rawHours ? JSON.parse(rawHours) : null;
  });
  const [menu] = useState(() => {
    const savedMenu = localStorage.getItem("restaurantMenu");
    return savedMenu ? JSON.parse(savedMenu) : DEFAULT_MENU;
  });
  const [brunch] = useState(() => {
    const savedBrunch = localStorage.getItem("restaurantBrunch");
    return savedBrunch ? JSON.parse(savedBrunch) : DEFAULT_BRUNCH;
  });

  return (
    <div className="min-h-screen bg-[#f7f7ef]">
      <Nav />

      {/* Hero style Home - texte à gauche, image à droite */}
      <section className="relative py-20 px-6 bg-[#ececd9] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#73754f] uppercase tracking-[0.2em] text-sm mb-3">
                Cuisine fait maison
              </p>
              <h1 className="text-[#85875C] mb-6">Restaurant</h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Une cuisine healthy et gourmande, élaborée chaque jour avec des
                produits locaux et de saison. Du petit-déjeuner au déjeuner,
                savourez des plats faits maison avec amour.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Le dimanche, retrouvez notre brunch généreux pour un moment de
                partage en famille ou entre amis.
              </p>
            </div>

            {/* Image principale */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="restaurant.jpg"
                alt="Restaurant Mow & My"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#fcfcf7]">
        <div className="max-w-4xl mx-auto">
          {/* En-tête carte */}
          <ScrollReveal className="text-center mb-16">
            <div className="inline-block mb-6">
              <svg
                className="w-12 h-12 text-[#85875C] mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <p className="text-[#73754f] uppercase tracking-[0.3em] text-xs mb-3">
              Fait maison avec amour
            </p>
            <h2 className="text-[#85875C] mb-4 font-serif">La Carte</h2>
            <div className="w-24 h-[1px] bg-[#85875C]/30 mx-auto"></div>
          </ScrollReveal>

          {/* Menu style restaurant */}
          <ScrollReveal className="bg-gradient-to-b from-[#f7f7ef] to-[#fcfcf7] rounded-3xl p-8 md:p-12 shadow-lg border border-[#dfdfca]">
            <div className="space-y-0">
              {menu.map((item, index) => (
                <div key={item.id || item.name}>
                  <div className="flex items-baseline gap-4 py-5 group">
                    {/* Nom du plat */}
                    <h3 className="text-lg md:text-xl font-serif text-[#3d3d3d] group-hover:text-[#85875C] transition-colors whitespace-nowrap">
                      {item.name}
                    </h3>

                    {/* Ligne pointillée */}
                    <div className="flex-1 border-b-2 border-dotted border-[#85875C]/20 mb-1"></div>

                    {/* Prix */}
                    <span className="text-xl font-serif text-[#85875C] font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#6b6b6b] italic -mt-3 mb-2 pl-1">
                    {item.desc}
                  </p>

                  {/* Séparateur sauf dernier élément */}
                  {index < menu.length - 1 && (
                    <div className="border-b border-[#dfdfca] mt-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Note bas de menu */}
            <div className="mt-10 pt-8 border-t border-[#85875C]/20 text-center">
              <p className="text-sm text-[#73754f] italic">
                Tous nos plats sont préparés avec des produits frais et locaux
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <span className="text-xs bg-[#85875C]/20 text-[#57593b] px-3 py-1 rounded-full">
                  🌱 Options végétariennes
                </span>
                <span className="text-xs bg-[#85875C]/20 text-[#57593b] px-3 py-1 rounded-full">
                  🥜 Allergènes sur demande
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#ececd9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[#73754f] uppercase tracking-[0.2em] text-sm mb-3">
              Chaque dimanche
            </p>
            <h2 className="text-[#85875C] mb-4">Brunch</h2>
            <p className="text-[#6b6b6b]">
              Tous les dimanches de 10h à 15h. Découvrez nos plats spécifiques
              du brunch, selon l'inspiration du moment.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {brunch.map((item, index) => (
              <ScrollReveal
                key={item.id || item.name}
                className="bg-[#fcfcf7] rounded-xl p-6 hover:shadow-md transition border border-[#dfdfca]"
                delay={index * 100}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-[#85875C]">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="text-xl font-serif text-[#85875C] whitespace-nowrap">
                      {item.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <ReviewCarousel />
      </ScrollReveal>

      <section className="py-16 px-6 bg-[#85875C]">
        <ScrollReveal className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-white mb-6">Horaires</h2>
            {hours ? (
              <ul className="space-y-2">
                {Object.entries(hours).map(([day, val]) => (
                  <li key={day} className="flex justify-between text-white/90">
                    <span>{day}</span>
                    <span>{val || "Fermé"}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-white/90 space-y-1">
                <p>Mardi - Samedi : 9h - 18h</p>
                <p>Dimanche (Brunch) : 10h - 15h</p>
                <p className="italic">Fermé le lundi</p>
              </div>
            )}
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl mb-4">Réserver une table</h3>
            <p className="text-white/80 mb-6">Appelez-nous pour réserver !</p>
            <a href="tel:+33240000000" className="btn-reserve">
              <PhoneIcon className="w-5 h-5" />
              02 40 XX XX XX
            </a>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
