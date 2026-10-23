import { BRAND, MAP, SITE_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.established,
    alternateName: BRAND.name,
    description:
      "Shree Vishal Tent Palace, also called SVTP Events, is a Jaipur house for weddings and gatherings, working in tents, mandaps, floral decor, lighting, staging, and event direction.",
    url: SITE_URL,
    image: `${SITE_URL}/images/floral-ceiling.jpg`,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.streetAddress,
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
