import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { PhoneIcon } from "../components/Icons";
import ScrollReveal from "../components/ScrollReveal";

const INCLUS = [
  {
    titre: "1 boisson chaude incluse",
    desc: "Café, thé ou chocolat chaud (une boisson)",
  },
  {
    titre: "Réduction sur le midi",
    desc: "Réduction sur les formules du midi en vitrine",
  },
  {
    titre: "WiFi haut débit",
    desc: "Connexion fibre pour travailler sereinement",
  },
  { titre: "Prises électriques", desc: "Chaque place équipée de prises" },
  {
    titre: "Ambiance calme",
    desc: "Espace dédié, loin du bruit du restaurant",
  },
];

const TARIFS = [
  { nom: "1 heure", prix: "3€", desc: "Accès coworking pendant 1 heure" },
  {
    nom: "Demi-journée",
    prix: "8€",
    desc: "De 9h à 12h · 1 boisson chaude incluse",
  },
  {
    nom: "Journée",
    prix: "14€",
    desc: "De 9h à 18h · 1 boisson chaude incluse",
  },
];

const HERO_PHOTOS = [
  { src: "/coworking.jpg", alt: "Espace Coworking Mow & My" },
];

export default function Coworking() {
  return (
    <div className="min-h-screen bg-[#faf6f4]">
      <Nav />

      {/* Hero style Home - image principale + deux vignettes */}
      <section className="relative py-20 px-6 bg-[#ffffff] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-[#A14D3A] uppercase tracking-[0.2em] text-sm mb-3">
                Espace de travail
              </p>
              <h1 className="text-[#A14D3A] mb-6">Coworking</h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Un espace calme et inspirant pour travailler, créer ou
                simplement vous poser. Profitez d'un cadre chaleureux loin de
                l'agitation.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Tout ce qui est inclus est détaillé juste en dessous, pour vous
                aider à choisir la formule qui vous convient.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={HERO_PHOTOS[0].src}
                  alt={HERO_PHOTOS[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {HERO_PHOTOS.slice(1).map((photo) => (
                  <div
                    key={photo.src}
                    className="relative h-44 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f6ebe8]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[#A14D3A]">Ce qui est inclus</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {INCLUS.map((item, index) => (
              <ScrollReveal
                key={item.titre}
                className="bg-[#fffaf8] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
                delay={index * 90}
              >
                <h3 className="text-lg font-semibold text-[#a14d3a] mb-2">
                  {item.titre}
                </h3>
                <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#fff5f2]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[#A14D3A]">Tarifs</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {TARIFS.map((tarif, index) => (
              <ScrollReveal
                key={tarif.nom}
                className="bg-[#f6ebe8] rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                delay={index * 110}
              >
                <h3 className="text-xl font-semibold text-[#3d3d3d] mb-2">
                  {tarif.nom}
                </h3>
                <p className="text-4xl font-serif text-[#A14D3A] mb-3">
                  {tarif.prix}
                </p>
                <p className="text-sm text-[#6b6b6b]">{tarif.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
