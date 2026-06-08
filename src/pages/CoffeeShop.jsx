import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function CoffeeShop() {
  return (
    <div className="min-h-screen bg-[#eef8f5]">
      <Nav />

      {/* Hero style Home - texte à gauche, image à droite */}
      <section className="relative py-20 px-6 bg-[#dff1ec] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#5f9f91] uppercase tracking-[0.2em] text-sm mb-3">
                Salon de thé
              </p>
              <h1 className="text-[#8EC5B8] mb-6">Coffee Shop</h1>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Un moment de douceur dans votre journée. Installez-vous
                confortablement et savourez nos boissons chaudes préparées avec
                soin : cafés de spécialité, thés raffinés, chocolats onctueux et
                lattes créatifs.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                Accompagnez le tout de nos pâtisseries maison, adaptées à tous
                les régimes alimentaires. Et pour prolonger le plaisir,
                amusez-vous avec nos jeux de société !
              </p>
            </div>

            {/* Images superposées */}
            <div className="relative h-[500px]">
              {/* Image principale - en arrière */}
              <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="calme2.jpg"
                  alt="Coffee Shop ambiance cosy"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Image secondaire - en avant, décalée */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#faf8f4]">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80"
                  alt="Café latte art"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos offres */}
      <section className="py-20 px-6 bg-[#f4fcfa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#5f9f91] uppercase tracking-[0.2em] text-sm mb-3">
              Ce qui vous attend
            </p>
            <h2 className="text-[#8EC5B8] mb-4">Un espace cosy pour tous</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Boissons chaudes */}
            <div className="bg-[#eaf7f3] rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="w-20 h-20 bg-[#8EC5B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#3d3d3d] text-xl font-semibold mb-4">
                Boissons chaudes
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Cafés de spécialité, thés raffinés, chocolats chauds onctueux et
                lattes créatifs. Chaque boisson est préparée avec soin pour vous
                offrir un moment de réconfort.
              </p>
            </div>

            {/* Pâtisseries */}
            <div className="bg-[#eaf7f3] rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="w-20 h-20 bg-[#8EC5B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <h3 className="text-[#3d3d3d] text-xl font-semibold mb-4">
                Pâtisseries maison
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Gourmandises faites maison pour tous les régimes alimentaires :
                sans gluten, vegan, sans lactose... Il y en a pour tous les
                goûts !
              </p>
            </div>

            {/* Jeux de société */}
            <div className="bg-[#eaf7f3] rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="w-20 h-20 bg-[#8EC5B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#3d3d3d] text-xl font-semibold mb-4">
                Jeux de société
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Amusez-vous entre amis ou en famille avec notre sélection de
                jeux de société. L'occasion parfaite de passer un bon moment
                autour d'un café !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Jeux avec image */}
      <section className="py-20 px-6 bg-[#dff1ec]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/jeux.jpg"
                alt="Jeux de société"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-[#5f9f91] uppercase tracking-[0.2em] text-sm mb-3">
                Détente & convivialité
              </p>
              <h2 className="text-[#8EC5B8] text-3xl md:text-4xl mb-6">
                Jouez entre amis !
              </h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Chez Mow & My, on aime les moments de partage. C'est pourquoi
                nous mettons à disposition une collection de jeux de société
                pour animer vos pauses café.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                Skyjo, Qwixx, Miams et bien d'autres vous attendent ! Parfait
                pour une après-midi détente ou une soirée entre amis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#3d3d3d]">
                  <span className="w-2 h-2 bg-[#8EC5B8] rounded-full"></span>
                  Jeux disponibles gratuitement
                </li>
                <li className="flex items-center gap-3 text-[#3d3d3d]">
                  <span className="w-2 h-2 bg-[#8EC5B8] rounded-full"></span>
                  Pour tous les âges
                </li>
                <li className="flex items-center gap-3 text-[#3d3d3d]">
                  <span className="w-2 h-2 bg-[#8EC5B8] rounded-full"></span>
                  Ambiance chaleureuse garantie
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
