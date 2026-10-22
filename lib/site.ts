import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const BRAND = {
  name: "SVTP Events",
  established: "Shree Vishal Tent Palace",
  city: "Jaipur",
  region: "Rajasthan",
  country: "IN",
  postalCode: "302001",
  area: "Tonk Phatak / Pratap Nagar",
  lat: 26.8720184,
  lng: 75.7905572,
} as const;

export const MAP = {
  google:
    "https://www.google.com/maps/place/Shree+Vishal+Tent+Palace/@26.8720184,75.7905572,17z",
  osm: "https://www.openstreetmap.org/?mlat=26.8720184&mlon=75.7905572#map=17/26.8720184/75.7905572",
  embed:
    "https://www.openstreetmap.org/export/embed.html?bbox=75.7805572%2C26.8620184%2C75.8005572%2C26.8820184&layer=mapnik&marker=26.8720184%2C75.7905572",
} as const;

export const NAV = [
  { href: "/weddings", label: "Weddings" },
  { href: "/celebrations", label: "Celebrations" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const EVENT_TYPES = [
  { id: "Wedding", detail: "Mandap, baraat, pheras, reception" },
  { id: "Celebration", detail: "Birthdays, parties, family days" },
  { id: "Corporate", detail: "Dinners, launches, hosted meetings" },
  { id: "Another gathering", detail: "Describe it in the inquiry" },
] as const;

export const GUEST_RANGES = ["Under 100", "100–250", "250–500", "500 or more"] as const;

export const SEASONS = [
  { id: "Winter", detail: "November to February" },
  { id: "Spring", detail: "March and April" },
  { id: "Summer", detail: "May and June" },
  { id: "Monsoon", detail: "July to September" },
  { id: "Autumn", detail: "October" },
] as const;

export type PackageId = "nivaas" | "darbar" | "rajmahal";

export type PackagePlan = {
  id: PackageId;
  name: string;
  meaning: string;
  summary: string;
  forWhom: string;
  rows: {
    scale: string;
    guests: string;
    ceremonies: string;
    tent: string;
    floral: string;
    lighting: string;
    staging: string;
    hospitality: string;
    direction: string;
    planning: string;
  };
};

export const packages: PackagePlan[] = [
  {
    id: "nivaas",
    name: "Nivaas",
    meaning: "The dwelling",
    summary:
      "One ceremony, held with proportion. A tent or courtyard, a floral mandap, and a producer who keeps the hour.",
    forWhom: "Engagements, intimate weddings, birthdays, and gatherings under about 150 guests.",
    rows: {
      scale: "One ceremony",
      guests: "Comfortable under about 150",
      ceremonies: "A single rite or party",
      tent: "One tent or courtyard, dressed as a room, with a mandap",
      floral: "Mandap flowers and a considered entrance",
      lighting: "Warm practical light and a simple evening wash",
      staging: "Entrance, seating, and a modest stage if the night needs one",
      hospitality: "A welcome point, water, and a clear way in",
      direction: "A producer present for the ceremony",
      planning: "Two planning conversations and a ground visit",
    },
  },
  {
    id: "darbar",
    name: "Darbar",
    meaning: "The court",
    summary:
      "A full wedding day, or a celebration large enough to need a court of its own. Procession, rite, and reception under one plan.",
    forWhom: "Wedding days and sangeet-scale parties from about 100 to 500 guests.",
    rows: {
      scale: "A full day",
      guests: "About 100 to 500",
      ceremonies: "Baraat, pheras, and reception — or one long celebration",
      tent: "Primary tent plus a dressed threshold and guest paths",
      floral: "Layered mandap, entrance, and stage flowers",
      lighting: "A designed plot for dusk and the reception",
      staging: "Procession entry, mandap, and a reception stage",
      hospitality: "Guest desk, water, and seating that can be hosted",
      direction: "Day-of direction for the order of ceremonies",
      planning: "A sequence of conversations from ground visit to run of show",
    },
  },
  {
    id: "rajmahal",
    name: "Rajmahal",
    meaning: "Palace scale",
    summary:
      "A multi-day weekend. Sangeet, wedding, and reception share one director, with hospitality for guests who have travelled.",
    forWhom: "Weddings that occupy a weekend, large guest lists, and palace or lawn settings.",
    rows: {
      scale: "A weekend",
      guests: "Large lists, including 500 and more",
      ceremonies: "Sangeet, wedding rites, and reception",
      tent: "Palace ground or a large tent complex, with rooms for each rite",
      floral: "A floral programme that changes with each ceremony",
      lighting: "Full plot, including paths, mandap, and the night",
      staging: "Distinct stages and entries for each gathering",
      hospitality: "Care for travelling guests, welcome, and wayfinding",
      direction: "One director across every ceremony",
      planning: "A season’s planning, with rehearsed timing",
    },
  },
];

export const comparisonRows: { key: keyof PackagePlan["rows"]; label: string }[] = [
  { key: "scale", label: "Scale" },
  { key: "guests", label: "Guests" },
  { key: "ceremonies", label: "Ceremonies" },
  { key: "tent", label: "Tent and mandap" },
  { key: "floral", label: "Floral and décor" },
  { key: "lighting", label: "Lighting" },
  { key: "staging", label: "Staging" },
  { key: "hospitality", label: "Hospitality" },
  { key: "direction", label: "Direction" },
  { key: "planning", label: "Planning" },
];

export function packageById(id: string | null | undefined) {
  return packages.find((item) => item.id === id) ?? null;
}

export function recommendPackage(eventType: string, guests: string, season: string) {
  const large = guests === "250–500" || guests === "500 or more";
  const mid = guests === "100–250";
  const intimate = guests === "Under 100";
  const peak = season === "Winter" || season === "Autumn";
  const guestsLabel = guests.toLowerCase();
  const seasonLabel = season.toLowerCase();

  let id: PackageId = "nivaas";
  let reason = "";

  if (eventType === "Wedding" && guests === "500 or more") {
    id = "rajmahal";
    reason = `A ${seasonLabel} wedding of ${guestsLabel} guests is a matter of routes, light, and timing across more than one gathering. Rajmahal keeps sangeet, wedding rites, and reception with one director.`;
  } else if (eventType === "Wedding" && guests === "250–500" && peak) {
    id = "rajmahal";
    reason = `${season} is a crowded season in Jaipur, and a wedding of ${guestsLabel} guests usually becomes a weekend. Rajmahal plans sangeet, the wedding day, and the reception together.`;
  } else if (eventType === "Wedding" && (mid || guests === "250–500")) {
    id = "darbar";
    reason = `A wedding of ${guestsLabel} guests needs the full day — baraat, pheras, and reception — composed as one sequence. Darbar is that day.`;
  } else if (eventType === "Wedding" && intimate && peak) {
    id = "darbar";
    reason = `The list is intimate, and ${seasonLabel} in Jaipur is still a ceremonial day with a procession and a reception. Darbar covers that arc. Rajmahal waits for a true multi-day weekend.`;
  } else if (eventType === "Wedding") {
    id = "nivaas";
    reason = `A smaller wedding outside the most crowded months can be one beautifully held ceremony. Nivaas keeps the mandap, the flowers, and the hour in proportion.`;
  } else if (eventType === "Corporate") {
    if (large) {
      id = "darbar";
      reason = `A corporate gathering of ${guestsLabel} guests needs staging, light, and a clear run of show. Darbar treats it as a directed day.`;
    } else {
      id = "nivaas";
      reason = `A corporate gathering of ${guestsLabel} guests fits a single dressed room. Nivaas covers the tent or hall, the light, and a producer.`;
    }
  } else if (eventType === "Celebration") {
    if (guests === "500 or more") {
      id = "rajmahal";
      reason = `A celebration of ${guestsLabel} guests needs paths, light, and hospitality at palace scale. Rajmahal is the plan, even when it is a single night.`;
    } else if (large || (mid && peak)) {
      id = "darbar";
      reason = `A ${seasonLabel} celebration of ${guestsLabel} guests fills a tent and asks for an entrance, a stage, and someone keeping the night in order. That is Darbar.`;
    } else {
      id = "nivaas";
      reason = `This celebration can be one generous room. Nivaas dresses the tent or courtyard and keeps hospitality simple and exact.`;
    }
  } else if (guests === "500 or more") {
    id = "rajmahal";
    reason = `At 500 or more guests the day becomes a matter of paths, water, light, and timing. Rajmahal is the plan that holds that many people.`;
  } else if (large || mid) {
    id = "darbar";
    reason = `This guest count asks for a directed day: staging, a real entrance, and hospitality. Darbar is the fit.`;
  } else {
    id = "nivaas";
    reason = `A smaller gathering is often one room, done properly. Nivaas is the place to begin.`;
  }

  const plan = packages.find((item) => item.id === id);
  if (!plan) return null;
  return { plan, reason };
}

export function pickAllowed<T extends string>(value: string | null, list: readonly T[]): T | "" {
  if (!value) return "";
  return list.includes(value as T) ? (value as T) : "";
}

export const services = [
  {
    numeral: "01",
    title: "Tent and mandap",
    text: "Canvas engineered for wind, rain, and a rite that cannot be moved. The mandap is drawn with proportion, whether it stands on a lawn, in a courtyard, or inside the tent.",
  },
  {
    numeral: "02",
    title: "Floral and décor",
    text: "Marigold, mogra, and foliage used as architecture. Garlands, a threshold, a mandap that reads from the last row, and tables that do not compete with the ceremony.",
  },
  {
    numeral: "03",
    title: "Lighting",
    text: "Daylight for the pheras, a warmer hour at dusk, and a reception that can be seen and heard. Paths stay lit. The mandap is never a dark centre.",
  },
  {
    numeral: "04",
    title: "Staging",
    text: "The sangeet stage, the reception, the baraat’s entrance. Levels, sightlines, and a place for elders to sit without being hidden by a speaker.",
  },
  {
    numeral: "05",
    title: "Guest hospitality",
    text: "Welcome, water, wayfinding, and a seat that matches the invitation. Travelling guests should know where they are before they are asked to celebrate.",
  },
  {
    numeral: "06",
    title: "Full event direction",
    text: "The order of the day, rehearsed. Who enters, when the music drops, how the pheras stay audible, and who is holding the next hour.",
  },
] as const;

export const weddingChapters = [
  {
    numeral: "01",
    title: "Mandap",
    image: "/images/mandap-floral.jpg",
    alt: "Guests seated beneath a red and white floral canopy during a wedding ceremony.",
    text: "The mandap is the room inside the room. We draw its height, its four sides, and the way elders sit close enough to witness. Flowers carry the structure. They do not bury it.",
  },
  {
    numeral: "02",
    title: "Sangeet",
    image: "/images/stage-celebration.jpg",
    alt: "A celebration stage dressed with flowers, warm light, and a floral floor.",
    text: "A sangeet fails when it is only a stage in a field. It wants a ceiling, a front row that can see, and light that flatters both dance and the people watching.",
  },
  {
    numeral: "03",
    title: "Baraat",
    image: "/images/entrance.jpg",
    alt: "An outdoor celebration entrance framed by red drapes and strings of hanging lights.",
    text: "The procession needs a path with width, shade, and an end. We design the threshold the baraat arrives through, and the pause before the family is received.",
  },
  {
    numeral: "04",
    title: "Pheras",
    image: "/images/pheras.jpg",
    alt: "A couple in ceremonial dress seated beside a ritual fire while family watches.",
    text: "The fire is small and the moment is not. Seating, sound, and the ring around the agni are planned so the vows can be heard and the photographers are not the ceremony.",
  },
  {
    numeral: "05",
    title: "Reception",
    image: "/images/chandelier.jpg",
    alt: "A reception stage with a chandelier, white florals, and warm stage lighting.",
    text: "By evening the tent should feel like another climate. The couple’s entry, the elders’ blessing, and dinner each need a different light and a different volume of music.",
  },
  {
    numeral: "06",
    title: "Palace and tent",
    image: "/images/tents.jpg",
    alt: "Long tables set inside a colourful tent, with chandeliers and striped canvas overhead.",
    text: "Some families marry on palace grounds. Some marry under canvas built for the week. The house works in both, and often in a marriage of the two: stone at the edge, a tent for the rite.",
  },
] as const;

export const celebrations = [
  {
    title: "Family and social days",
    text: "An engagement, a naming, a reception that is not attached to a full wedding week. One room, dressed fully, with hospitality that does not feel borrowed from a banquet hall.",
  },
  {
    title: "Birthdays",
    text: "A milestone that deserves more than a cake table. We scale the tent, the flowers, and the evening so the person being honoured is visible, and the guests are looked after.",
  },
  {
    title: "Corporate gatherings",
    text: "Dinners, launches, and meetings that host clients in Jaipur. The same discipline as a wedding: a clear entrance, light that can handle a speech, and a run of show.",
  },
  {
    title: "Sangeet-scale parties",
    text: "Music, dance, and a guest list large enough to need a stage. These nights borrow the energy of a sangeet and the structure of a directed event.",
  },
] as const;

export const processSteps = [
  {
    numeral: "01",
    title: "Listen",
    text: "The rites you will keep, the ones you will shorten, and the people who must be close to them. A plan that ignores the family will be decorated and still wrong.",
  },
  {
    numeral: "02",
    title: "Walk the ground",
    text: "Wind, kitchen access, the width of a baraat, where elders sit, where rain would travel. The ground decides what the tent can be.",
  },
  {
    numeral: "03",
    title: "Draw the room",
    text: "Mandap, paths, stage, and light. Flowers follow the drawing. They are not asked to hide a structure that was never resolved.",
  },
  {
    numeral: "04",
    title: "Host the day",
    text: "A producer holds the order. Guests are received. The next ceremony begins because someone was already there.",
  },
] as const;

export const compositeNotes = [
  {
    text: "The mandap held the morning quietly. Marigold, a low canopy, and enough hush that the pheras could be followed from the family seats.",
  },
  {
    text: "Guests found water, their seats, and the way back to the tent without being herded. That is the part of the weekend people still describe.",
  },
  {
    text: "The sangeet felt like a room rather than a stage set down in a field. The light came down. The music had somewhere to sit.",
  },
] as const;

export const faqs = [
  {
    q: "How early should a family begin?",
    a: "For a winter wedding in Jaipur, begin while the date can still move. Grounds and tent crews are promised months ahead. A single ceremony can start closer to the date, once the ground is known.",
  },
  {
    q: "Do you work only in Jaipur?",
    a: "The house is in Jaipur. Most gatherings are in the city, on palace grounds, on lawns, and in family courtyards. Work farther out is discussed once the ground and the date are real.",
  },
  {
    q: "Can the mandap stand in a palace ground, or only under a tent?",
    a: "Both. The mandap is its own structure. It can stand in a courtyard, on a lawn, or inside a tent dressed to feel like a room. The ground decides the engineering. The rite decides the form.",
  },
  {
    q: "What separates the three packages?",
    a: "Nivaas is one ceremony. Darbar is a full wedding day or a large celebration, from procession to reception. Rajmahal is a multi-day weekend with hospitality and one director across sangeet, wedding, and reception. Fees are quoted after a conversation. They are not listed here.",
  },
  {
    q: "How are monsoon and summer dates handled?",
    a: "Winter is the crowded season. Summer needs shade, water, and a later evening. Monsoon needs a tent that can take rain, covered guest paths, and a ceremony plan if the sky opens. The season is part of the design, which is why the planner asks for it.",
  },
  {
    q: "Does this form send the inquiry?",
    a: "No. The form checks the note and shows it back on this page. It does not send email or a message, and it does not store the note on a server. A telephone number is not published here because none was confirmed from the public listing.",
  },
] as const;

export type GalleryCategory = "Weddings" | "Tents" | "Décor" | "Evenings";

export const galleryFilters = ["All", "Weddings", "Tents", "Décor", "Evenings"] as const;

export const gallery: {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  frame: "tall" | "wide" | "std";
}[] = [
  {
    src: "/images/palace-courtyard.jpg",
    alt: "A palace courtyard set for a wedding, with a floral arch, a cream aisle, and carved stone balconies.",
    title: "Palace courtyard",
    category: "Weddings",
    frame: "tall",
  },
  {
    src: "/images/pheras.jpg",
    alt: "A couple beside a ceremonial fire, with elders gathered around them.",
    title: "Beside the fire",
    category: "Weddings",
    frame: "wide",
  },
  {
    src: "/images/garland.jpg",
    alt: "A bride and groom exchange garlands during a wedding ceremony.",
    title: "The exchange",
    category: "Weddings",
    frame: "tall",
  },
  {
    src: "/images/ceremony-color.jpg",
    alt: "A traditional wedding gathering with colourful ceremonial dress.",
    title: "The gathering",
    category: "Weddings",
    frame: "std",
  },
  {
    src: "/images/seating.jpg",
    alt: "An outdoor ceremony with rows of seating dressed in white.",
    title: "Open-air seating",
    category: "Weddings",
    frame: "wide",
  },
  {
    src: "/images/tents.jpg",
    alt: "A long dining table inside a colourful striped event tent.",
    title: "Canvas dining room",
    category: "Tents",
    frame: "wide",
  },
  {
    src: "/images/mandap-floral.jpg",
    alt: "People seated under a dense red and white floral canopy.",
    title: "Floral canopy",
    category: "Tents",
    frame: "tall",
  },
  {
    src: "/images/entrance.jpg",
    alt: "A celebration entrance with red drapes and hanging lights.",
    title: "The threshold",
    category: "Tents",
    frame: "std",
  },
  {
    src: "/images/floral-ceiling.jpg",
    alt: "A ceiling of white and gold flowers above a wedding aisle.",
    title: "A ceiling of flowers",
    category: "Décor",
    frame: "wide",
  },
  {
    src: "/images/wedding-stage.jpg",
    alt: "A wedding stage covered in white florals and warm light.",
    title: "Wedding stage",
    category: "Décor",
    frame: "tall",
  },
  {
    src: "/images/floral-sofa.jpg",
    alt: "A sofa set dressed in red and white flowers for a ceremony.",
    title: "Seating, in flower",
    category: "Décor",
    frame: "std",
  },
  {
    src: "/images/flowers.jpg",
    alt: "A vessel of mixed flowers on a table.",
    title: "The table",
    category: "Décor",
    frame: "tall",
  },
  {
    src: "/images/red-chairs.jpg",
    alt: "Red and green chairs arranged inside a decorated room.",
    title: "A coloured room",
    category: "Décor",
    frame: "wide",
  },
  {
    src: "/images/stage-celebration.jpg",
    alt: "A floral stage prepared for an evening celebration.",
    title: "Evening stage",
    category: "Décor",
    frame: "std",
  },
  {
    src: "/images/palace-night.jpg",
    alt: "A sandstone palace illuminated at night, reflected in water.",
    title: "Palace, after dark",
    category: "Evenings",
    frame: "wide",
  },
  {
    src: "/images/candles.jpg",
    alt: "Many candles lit along a low table in a dim room.",
    title: "Candlelight",
    category: "Evenings",
    frame: "tall",
  },
  {
    src: "/images/chandelier.jpg",
    alt: "A chandelier above a floral reception stage.",
    title: "Chandelier and stage",
    category: "Evenings",
    frame: "std",
  },
];

export const homeMeta = (): Metadata => {
  const title = "SVTP Events · Shree Vishal Tent Palace, Jaipur";
  const description =
    "SVTP Events is Shree Vishal Tent Palace, a Jaipur house for weddings and gatherings: mandap, tent, floral décor, lighting, and full event direction.";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, url: "/" },
  };
};

export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
