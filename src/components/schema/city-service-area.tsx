import { JsonLd } from "@/components/json-ld";
import { companyInfo } from "@/data/navigation";
import { getLiveRating } from "@/lib/google-rating";

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  "moreno-valley": { lat: 33.9425, lng: -117.2297 },
  "riverside": { lat: 33.9533, lng: -117.3962 },
  "perris": { lat: 33.7825, lng: -117.2286 },
  "redlands": { lat: 34.0556, lng: -117.1825 },
  "loma-linda": { lat: 34.0483, lng: -117.2612 },
  "colton": { lat: 34.0739, lng: -117.3136 },
  "grand-terrace": { lat: 34.0339, lng: -117.3131 },
  "san-bernardino": { lat: 34.1083, lng: -117.2898 },
  "beaumont": { lat: 33.9294, lng: -116.9770 },
  "banning": { lat: 33.9256, lng: -116.8764 },
  "calimesa": { lat: 33.9972, lng: -117.0628 },
  "yucaipa": { lat: 34.0336, lng: -117.0431 },
  "highland": { lat: 34.1283, lng: -117.2086 },
  "mentone": { lat: 34.0700, lng: -117.1336 },
  "jurupa-valley": { lat: 33.9825, lng: -117.4856 },
  "eastvale": { lat: 33.9525, lng: -117.5631 },
  "norco": { lat: 33.9311, lng: -117.5486 },
  "menifee": { lat: 33.6781, lng: -117.1464 },
  "murrieta": { lat: 33.5539, lng: -117.2139 },
  "temecula": { lat: 33.4936, lng: -117.1484 },
  "lake-elsinore": { lat: 33.6681, lng: -117.3273 },
  "wildomar": { lat: 33.5989, lng: -117.2800 },
  "san-jacinto": { lat: 33.7839, lng: -116.9586 },
  "hemet": { lat: 33.7475, lng: -116.9719 },
  "mead-valley": { lat: 33.8350, lng: -117.2964 },
  "woodcrest": { lat: 33.8792, lng: -117.3578 },
  "nuevo": { lat: 33.8003, lng: -117.1456 },
  "homeland": { lat: 33.7478, lng: -117.1122 },
  "highgrove": { lat: 34.0153, lng: -117.3339 },
  "sunnymead": { lat: 33.9650, lng: -117.2100 },
};

interface CityServiceAreaSchemaProps {
  slug: string;
  city: string;
}

export async function CityServiceAreaSchema({ slug, city }: CityServiceAreaSchemaProps) {
  const coords = cityCoordinates[slug];
  if (!coords) return null;

  const { rating, reviewCount } = await getLiveRating();
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `https://www.itsnosweat.net/service-areas/${slug}/#business`,
    name: `${companyInfo.name} — ${city}`,
    url: `https://www.itsnosweat.net/service-areas/${slug}/`,
    telephone: "+19513313310",
    email: "support@itsnosweat.net",
    image: "https://www.itsnosweat.net/images/nosweatvan.webp",
    logo: "https://www.itsnosweat.net/images/logo-main.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "27950 Kalmia Ave",
      addressLocality: "Moreno Valley",
      addressRegion: "CA",
      postalCode: "92555",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "California",
      },
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toFixed(1),
      reviewCount: String(reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Derrick F." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "He was honest and knowledgeable, and his prices were very reasonable. The system does a great job — my family and I feel comfortable and cool.",
        datePublished: "2024-06-15",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `HVAC Services in ${city}`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `AC Repair in ${city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `AC Installation in ${city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Furnace Repair in ${city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Furnace Installation in ${city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `HVAC Maintenance in ${city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Indoor Air Quality in ${city}` } },
      ],
    },
    sameAs: [
      "https://www.google.com/maps/place/It's+No+Sweat+Heat+%26+Air/@33.9539147,-117.1799244,17z/data=!3m1!4b1!4m6!3m5!1s0x80dca783bcab7ba5:0x36d6067dbc87d6fd!8m2!3d33.9539148!4d-117.1750481!16s%2Fg%2F11j8w554d5",
    ],
  };

  return <JsonLd data={data} />;
}
