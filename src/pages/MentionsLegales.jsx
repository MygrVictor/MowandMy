import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <Nav />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h1 className="text-[#BD6525] font-serif">Mentions légales</h1>

          <h2 className="text-[#3d3d3d]">Éditeur du site</h2>
          <p className="text-[#6b6b6b]">
            <strong>Mow &amp; My</strong>
            <br />
            Adresse : Pornic, France
            <br />
            Téléphone :{" "}
            <a
              href="tel:+33240000000"
              className="text-[#BD6525] hover:underline"
            >
              02 40 00 00 00
            </a>
          </p>

          <h2 className="text-[#3d3d3d]">Hébergement</h2>
          <p className="text-[#6b6b6b]">
            Ce site est hébergé par :<br />
            [Nom de l'hébergeur]
            <br />
            [Adresse de l'hébergeur]
          </p>

          <h2 className="text-[#3d3d3d]">Propriété intellectuelle</h2>
          <p className="text-[#6b6b6b]">
            L'ensemble du contenu de ce site (textes, images, logos, icônes) est
            protégé par le droit d'auteur. Toute reproduction, même partielle,
            est interdite sans autorisation préalable.
          </p>

          <h2 className="text-[#3d3d3d]">Données personnelles</h2>
          <p className="text-[#6b6b6b]">
            Ce site ne collecte aucune donnée personnelle. Aucun cookie de
            traçage n'est utilisé. Les données de l'interface d'administration
            sont stockées localement dans votre navigateur (localStorage).
          </p>

          <h2 className="text-[#3d3d3d]">Crédits photos</h2>
          <p className="text-[#6b6b6b]">
            Certaines images proviennent d'
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BD6525] hover:underline"
            >
              Unsplash
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
