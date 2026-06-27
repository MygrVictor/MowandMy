import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import ReservationCTA from "../components/ReservationCTA";
import { InstagramIcon, FacebookIcon, ArrowIcon } from "../components/Icons";

export default function Home() {
  const [hours] = useState(() => {
    const rawHours = localStorage.getItem("openingHours");
    return rawHours ? JSON.parse(rawHours) : null;
  });

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <Nav />

      {/* Hero avec photos */}
      <section className="relative py-20 px-6 bg-[#f5f2eb] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-sm mb-3">
                Bienvenue chez
              </p>
              <h1 className="text-[#BD6525] mb-6">Mow & My</h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                un lieu où se mêlent originalité, créativité et convivialité.
              </p>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/hero.jpg"
                alt="Intérieur Mow & My"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nos espaces */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-sm mb-3">
              Découvrez
            </p>
            <h2 className="text-[#BD6525] mb-4">Nos espaces</h2>
          </ScrollReveal>

          {/* Restaurant */}
          <ScrollReveal
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            direction="left"
          >
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="restaurant_2.jpeg"
                alt="Restaurant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:pl-8">
              <span className="inline-block px-4 py-1 bg-[#85875C]/20 text-[#85875C] rounded-full text-sm font-medium mb-4">
                Gastronomie locale
              </span>
              <h3 className="text-[#85875C] text-3xl mb-4">Restaurant</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Une cuisine fait maison avec des produits locaux et de saison.
                Du brunch gourmand au déjeuner sain, chaque plat est préparé
                avec passion et créativité.
              </p>
              <Link
                to="/restaurant"
                className="group inline-flex items-center gap-2 text-[#85875C] font-medium transition-all duration-300 hover:text-[#6f7248]"
              >
                Voir la carte
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Coffee Shop */}
          <ScrollReveal
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            direction="right"
          >
            <div className="md:order-2 relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="coffee-shop.jpeg"
                alt="Coffee Shop cosy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:order-1 md:pr-8">
              <span className="inline-block px-4 py-1 bg-[#d4a574]/20 text-[#d4a574] rounded-full text-sm font-medium mb-4">
                Espace cosy
              </span>
              <h3 className="text-[#d4a574] text-3xl mb-4">Coffee Shop</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Un espace chaleureux et intimiste pour prendre le temps.
                Boissons chaudes, pâtisseries maison et jeux de société vous
                attendent.
              </p>
              <Link
                to="/coffee"
                className="group inline-flex items-center gap-2 text-[#d4a574] font-medium transition-all duration-300 hover:text-[#bb8f61]"
              >
                Découvrir le Coffee Shop
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Coworking */}
          <ScrollReveal
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            direction="left"
          >
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="coworking.jpg"
                alt="Espace Coworking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:pl-8">
              <span className="inline-block px-4 py-1 bg-[#bb6f58]/20 text-[#bb6f58] rounded-full text-sm font-medium mb-4">
                Travail & créativité
              </span>
              <h3 className="text-[#bb6f58] text-3xl mb-4">Coworking</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-3">
                Un espace calme et inspirant pour travailler, créer ou
                simplement vous poser.
              </p>
              <ul className="list-disc pl-5 text-[#6b6b6b] space-y-1 mb-6">
                <li>WiFi haut débit</li>
                <li> une Boisson chaude incluse</li>
                <li>Ambiance propice à la concentration</li>
              </ul>
              <Link
                to="/coworking"
                className="group inline-flex items-center gap-2 text-[#bb6f58] font-medium transition-all duration-300 hover:text-[#9f5f4b]"
              >
                Découvrir l'espace
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Ateliers */}
          <ScrollReveal
            className="grid md:grid-cols-2 gap-8 items-center"
            direction="right"
          >
            <div className="md:order-2 relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="atelier.png"
                alt="Ateliers créatifs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:order-1 md:pr-8">
              <span className="inline-block px-4 py-1 bg-[#cd9a18]/20 text-[#cd9a18] rounded-full text-sm font-medium mb-4">
                Partage & apprentissage
              </span>
              <h3 className="text-[#cd9a18] text-3xl mb-4">Ateliers</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Des ateliers de discussion et de création pour tous. Cuisine,
                art, bien-être... Un moment de partage et d'apprentissage dans
                une ambiance conviviale.
              </p>
              <Link
                to="/ateliers"
                className="group inline-flex items-center gap-2 text-[#cd9a18] font-medium transition-all duration-300 hover:text-[#a67f14]"
              >
                Voir les ateliers
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Avis clients */}
      <ScrollReveal>
        <ReviewCarousel />
      </ScrollReveal>

      {/* Infos pratiques */}
      <section className="py-16 px-6 bg-[#f5f2eb]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-[#BD6525]">Nous trouver</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Colonne gauche : adresse, réseaux, horaires */}
            <ScrollReveal direction="left">
              <p className="text-[#6b6b6b] text-lg mb-6">
                Passage du Rocher, Ville haute
                <br />
                44210 Pornic
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="https://www.instagram.com/mowandmy/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Instagram"
                  className="text-[#BD6525] hover:text-[#a85820] transition"
                >
                  <InstagramIcon className="w-8 h-8" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100082120245661&locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Facebook"
                  className="text-[#BD6525] hover:text-[#a85820] transition"
                >
                  <FacebookIcon className="w-8 h-8" />
                </a>
              </div>
              <ReservationCTA className="btn-reserve mb-10" />

              {hours && Object.keys(hours).length > 0 && (
                <div className="mt-2">
                  <p className="text-[#BD6525] font-medium mb-4">
                    Horaires d'ouverture
                  </p>
                  <div className="space-y-2 text-sm">
                    {[
                      "Lundi",
                      "Mardi",
                      "Mercredi",
                      "Jeudi",
                      "Vendredi",
                      "Samedi",
                      "Dimanche",
                    ].map(
                      (day) =>
                        hours[day] && (
                          <div key={day} className="flex justify-between">
                            <span className="text-[#3d3d3d]">{day}</span>
                            <span className="text-[#6b6b6b]">{hours[day]}</span>
                          </div>
                        ),
                    )}
                  </div>
                </div>
              )}
            </ScrollReveal>

            {/* Colonne droite : carte Google Maps */}
            <ScrollReveal
              direction="right"
              className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
            >
              <iframe
                title="Carte mowandmy"
                src="https://maps.google.com/maps?q=mowandmy%2C%20Passage%20du%20Rocher%2C%2044210%20Pornic&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
