import { JsonLd } from "@/components/json-ld";
import { companyInfo } from "@/data/navigation";
import { getLiveRating } from "@/lib/google-rating";

export async function LocalBusinessSchema() {
  const { rating, reviewCount } = await getLiveRating();
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://www.itsnosweat.net/#business",
    name: companyInfo.name,
    url: "https://www.itsnosweat.net",
    logo: "https://www.itsnosweat.net/images/logo-main.webp",
    image: "https://www.itsnosweat.net/images/nosweatvan.webp",
    telephone: "+19513313310",
    email: "support@itsnosweat.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "27950 Kalmia Ave",
      addressLocality: "Moreno Valley",
      addressRegion: "CA",
      postalCode: "92555",
      addressCountry: "US",
    },
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
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Annette S." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Justin quickly noticed that all that was needed was for a pipe to be unblocked and sealed. It took less than 30 min to fix. We really appreciated the integrity and honesty.",
        datePublished: "2024-08-22",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mary W." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "He and his crew installed the new system in less than four hours. It works great. His prices are very reasonable, and he guarantees his work. We recommend using No Sweat.",
        datePublished: "2024-09-10",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9425,
      longitude: -117.2297,
    },
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
    priceRange: "$$",
    areaServed: [
      "Moreno Valley", "Riverside", "Temecula", "Murrieta", "Perris",
      "Redlands", "Loma Linda", "Colton", "Grand Terrace", "San Bernardino",
      "Beaumont", "Banning", "Calimesa", "Yucaipa", "Highland",
      "Mentone", "Jurupa Valley", "Eastvale", "Norco", "Menifee",
      "Lake Elsinore", "Wildomar", "San Jacinto", "Hemet", "Mead Valley",
      "Woodcrest", "Nuevo", "Homeland", "Highgrove", "Sunnymead",
    ].map((name) => ({ "@type": "City" as const, name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Conditioning Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Conditioning Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furnace Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furnace Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC System Maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Indoor Air Quality" } },
      ],
    },
    sameAs: [
      "https://www.google.com/maps/place/It's+No+Sweat+Heat+%26+Air/@33.9539147,-117.1799244,17z/data=!3m1!4b1!4m6!3m5!1s0x80dca783bcab7ba5:0x36d6067dbc87d6fd!8m2!3d33.9539148!4d-117.1750481!16s%2Fg%2F11j8w554d5",
    ],
  };

  return <JsonLd data={data} />;
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://www.itsnosweat.net",
    logo: "https://www.itsnosweat.net/images/logo-main.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "US",
    },
  };

  return <JsonLd data={data} />;
}
