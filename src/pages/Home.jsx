import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReviewCarousel from "../components/ReviewCarousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  InstagramIcon,
  FacebookIcon,
  PhoneIcon,
  ArrowIcon,
} from "../components/Icons";

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-sm mb-3">
                Bienvenue chez
              </p>
              <h1 className="text-[#BD6525] mb-6">Mow & My</h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                Un lieu unique à Pornic où se mêlent gastronomie, créativité et
                convivialité. Restaurant, coffee shop, coworking et ateliers
                créatifs — tout sous le même toit, en ville haute.
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
          </div>
        </div>
      </section>

      {/* Nos espaces */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-sm mb-3">
              Découvrez
            </p>
            <h2 className="text-[#BD6525] mb-4">Nos espaces</h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              Un lieu unique qui réunit gastronomie, détente et créativité sous
              le même toit
            </p>
          </div>

          {/* Coffee Shop */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Coffee Shop cosy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:pl-8">
              <span className="inline-block px-4 py-1 bg-[#8EC5B8]/20 text-[#8EC5B8] rounded-full text-sm font-medium mb-4">
                Espace cosy
              </span>
              <h3 className="text-[#8EC5B8] text-3xl mb-4">Coffee Shop</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Un espace chaleureux et intimiste où prendre le temps de
                savourer un café d'exception ou un thé délicat. Fauteuils
                confortables, lumière douce et pâtisseries maison vous
                attendent.
              </p>
              <Link
                to="/coffee"
                className="group inline-flex items-center gap-2 text-[#8EC5B8] font-medium transition-all duration-300 hover:text-[#6ea99c]"
              >
                Découvrir le Coffee Shop
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Restaurant */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="md:order-2 relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="restaurant.jpg"
                alt="Restaurant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:order-1 md:pr-8">
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
          </div>

          {/* Coworking */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Espace Coworking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="md:pl-8">
              <span className="inline-block px-4 py-1 bg-[#9caa8e]/20 text-[#7a8c6c] rounded-full text-sm font-medium mb-4">
                Travail & créativité
              </span>
              <h3 className="text-[#9caa8e] text-3xl mb-4">Coworking</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Un espace calme et inspirant pour travailler, créer ou
                simplement vous poser. WiFi haut débit, café à volonté et une
                ambiance propice à la concentration.
              </p>
              <Link
                to="/coworking"
                className="group inline-flex items-center gap-2 text-[#9caa8e] font-medium transition-all duration-300 hover:text-[#7a8c6c]"
              >
                Découvrir l'espace
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Ateliers */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 relative h-80 md:h-96 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&q=80"
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
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <ReviewCarousel />

      {/* Infos pratiques */}
      <section className="py-16 px-6 bg-[#f5f2eb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#BD6525] mb-10 text-center">Nous trouver</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Colonne gauche : adresse, réseaux, horaires */}
            <div>
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
              <a
                href="tel:+33240000000"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#BD6525] to-[#d4844e] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#BD6525]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 mb-10"
              >
                <PhoneIcon className="w-5 h-5" />
                Réserver
              </a>

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
            </div>

            {/* Colonne droite : carte Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                title="Carte Mow & My — Pornic"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5!2d-2.1025!3d47.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e4d5f4e9c9c7%3A0x0!2sPassage+du+Rocher%2C+44210+Pornic!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
