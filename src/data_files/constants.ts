import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Eichhorn Bau- & Baumanagement",
  tagline: "Bau- & Baumanagement",
  description: "Eichhornbau liefert passende Dienste und Know-How für Ihre Bedürfnisse rund um das Thema Bauen",
  description_short: "Eichhornbau liefert passende Dienste und Know-How für Ihre Bedürfnisse rund um das Thema Bauen",
  url: "https://eichhornbau.de",
  author: "Max Eichhorn",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Bau- & Baumanagement`,
  description: "Eichhornbau liefert passende Dienste und Know-How für Ihre Bedürfnisse rund um das Thema Bauen",
  image: ogImageSrc,
};
