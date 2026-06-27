import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Mow & My";
const SITE_DESCRIPTION =
  "Mow & My à Pornic : restaurant fait maison, coffee shop cosy, coworking et ateliers créatifs dans un lieu chaleureux et convivial.";
const SITE_IMAGE = "/logo.jpg";

const SEO_BY_PATH = {
  "/": {
    title: "Mow & My — Restaurant, Coffee Shop & Coworking à Pornic",
    description:
      "Découvrez Mow & My à Pornic : un lieu chaleureux avec restaurant fait maison, coffee shop cosy, coworking et ateliers créatifs.",
    noindex: true,
  },
  "/home": {
    title: "Mow & My à Pornic | Restaurant, Coffee Shop & Coworking",
    description:
      "Mow & My à Pornic : restaurant healthy, coffee shop cosy, espace coworking et ateliers créatifs dans un lieu convivial.",
  },
  "/restaurant": {
    title: "Restaurant à Pornic — Mow & My",
    description:
      "Découvrez le restaurant Mow & My à Pornic : cuisine maison, produits locaux et de saison, brunch généreux le dimanche.",
  },
  "/coffee": {
    title: "Coffee Shop à Pornic — Mow & My",
    description:
      "Installez-vous au coffee shop Mow & My à Pornic : boissons chaudes, pâtisseries maison et ambiance cosy.",
  },
  "/coworking": {
    title: "Coworking à Pornic — Mow & My",
    description:
      "Travaillez dans un espace de coworking calme à Pornic avec WiFi, boisson chaude incluse et ambiance inspirante.",
  },
  "/ateliers": {
    title: "Ateliers créatifs à Pornic — Mow & My",
    description:
      "Retrouvez les ateliers Mow & My à Pornic : cuisine, bien-être et moments de partage dans une ambiance conviviale.",
  },
  "/mentions-legales": {
    title: "Mentions légales — Mow & My",
    description: "Mentions légales du site Mow & My à Pornic.",
    noindex: true,
  },
  "/admin": {
    title: "Administration — Mow & My",
    description: "Espace d'administration privé de Mow & My.",
    noindex: true,
  },
};

function buildAbsoluteUrl(pathname) {
  if (typeof window === "undefined") return pathname;
  return new URL(pathname, window.location.origin).toString();
}

function getSeoData(pathname) {
  if (pathname.startsWith("/admin")) return SEO_BY_PATH["/admin"];
  if (SEO_BY_PATH[pathname]) return SEO_BY_PATH[pathname];
  return {
    title: "Page introuvable — Mow & My",
    description:
      "La page demandée n'existe pas. Retournez sur le site Mow & My à Pornic.",
    noindex: true,
  };
}

export default function PageEffects() {
  const location = useLocation();
  const seo = getSeoData(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const canonicalPath = location.pathname === "/" ? "/home" : location.pathname;
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);
  const imageUrl = buildAbsoluteUrl(SITE_IMAGE);
  const robots = seo.noindex ? "noindex,nofollow" : "index,follow";

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description || SITE_DESCRIPTION} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta
        property="og:description"
        content={seo.description || SITE_DESCRIPTION}
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta
        name="twitter:description"
        content={seo.description || SITE_DESCRIPTION}
      />
      <meta name="twitter:image" content={imageUrl} />

      {!seo.noindex && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            url: canonicalUrl,
            image: imageUrl,
            telephone: "+33 9 84 67 40 99",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Passage du Rocher",
              addressLocality: "Pornic",
              postalCode: "44210",
              addressCountry: "FR",
            },
            sameAs: [
              "https://www.instagram.com/mowandmy/?hl=fr",
              "https://www.facebook.com/profile.php?id=100082120245661&locale=fr_FR",
            ],
          })}
        </script>
      )}
    </Helmet>
  );
}
