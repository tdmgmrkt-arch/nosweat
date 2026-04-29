import { JsonLd } from "@/components/json-ld";
import { companyInfo } from "@/data/navigation";
import { getLiveRating, getRecentReviews } from "@/lib/google-rating";

export async function LocalBusinessSchema() {
  const [, recentReviews] = await Promise.all([
    getLiveRating(),
    getRecentReviews({ limit: 3, minRating: 4 }),
  ]);
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
    review: recentReviews.map((r) => ({
      "@type": "Review" as const,
      author: { "@type": "Person" as const, name: r.authorName },
      reviewRating: {
        "@type": "Rating" as const,
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
      // schema.org accepts ISO-8601; we trim to YYYY-MM-DD for cleaner output.
      datePublished: r.publishedAt.slice(0, 10),
    })),
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
    "@id": "https://www.itsnosweat.net/#organization",
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
