import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { PhoneIcon } from "../components/Icons";
import ScrollReveal from "../components/ScrollReveal";

const INCLUS = [
  {
    titre: "Viennoiserie offerte",
    desc: "Chaque matin, une viennoiserie maison pour bien démarrer",
  },
  {
    titre: "Boisson chaude incluse",
    desc: "Café, thé ou chocolat chaud à volonté",
  },
  {
    titre: "-10% sur le midi",
    desc: "Réduction sur tous les plats du restaurant le midi",
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
  { nom: "Demi-journée", prix: "12€", desc: "4 heures de travail" },
  { nom: "Journée complète", prix: "20€", desc: "Accès de 9h à 18h" },
  { nom: "Carnet 10 jours", prix: "160€", desc: "Économisez 40€" },
];

export default function Coworking() {
  return (
    <div className="min-h-screen bg-[#f1f5ed]">
      <Nav />

      {/* Hero style Home - texte à gauche, image à droite */}
      <section className="relative py-20 px-6 bg-[#e7eee0] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-sm mb-3">
                Espace de travail
              </p>
              <h1 className="text-[#9caa8e] mb-6">Coworking</h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Un espace calme et inspirant pour travailler, créer ou
                simplement vous poser. Profitez d'un cadre chaleureux loin de
                l'agitation.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Viennoiserie, boisson chaude et WiFi haut débit inclus.
                Concentrez-vous sur l'essentiel, on s'occupe du reste.
              </p>
            </div>

            {/* Image principale */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                alt="Espace Coworking Mow & My"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#e7eee0]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[#9caa8e]">Ce qui est inclus</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {INCLUS.map((item, index) => (
              <ScrollReveal
                key={item.titre}
                className="bg-[#f6faf2] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
                delay={index * 90}
              >
                <h3 className="text-lg font-semibold text-[#9caa8e] mb-2">
                  {item.titre}
                </h3>
                <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f6faf2]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[#9caa8e]">Tarifs</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {TARIFS.map((tarif, index) => (
              <ScrollReveal
                key={tarif.nom}
                className="bg-[#e7eee0] rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                delay={index * 110}
              >
                <h3 className="text-xl font-semibold text-[#3d3d3d] mb-2">
                  {tarif.nom}
                </h3>
                <p className="text-4xl font-serif text-[#9caa8e] mb-3">
                  {tarif.prix}
                </p>
                <p className="text-sm text-[#6b6b6b]">{tarif.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#9caa8e]">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Réserver votre place</h2>
          <p className="text-white/80 mb-8">
            Appelez-nous pour réserver votre espace de coworking.
          </p>
          <a href="tel:+33240000000" className="btn-reserve">
            <PhoneIcon className="w-5 h-5" />
            Réserver par téléphone
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
