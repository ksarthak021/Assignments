import { BRAND, MAP, SITE_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: BRAND.name,
    alternateName: BRAND.established,
    description:
      "SVTP Events is Shree Vishal Tent Palace, a Jaipur house for weddings and gatherings, working in tents, mandaps, floral décor, lighting, staging, and event direction.",
    url: SITE_URL,
    image: `${SITE_URL}/images/floral-ceiling.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BRAND.city,
      addressRegion: BRAND.region,
      postalCode: BRAND.postalCode,
      addressCountry: BRAND.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.lat,
      longitude: BRAND.lng,
    },
    areaServed: {
      "@type": "City",
      name: "Jaipur",
    },
    hasMap: MAP.google,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
