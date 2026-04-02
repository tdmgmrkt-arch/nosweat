import { JsonLd } from "@/components/json-ld";
import { companyInfo } from "@/data/navigation";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: companyInfo.name,
    url: "https://itsnosweat.net",
    logo: "https://itsnosweat.net/images/logo-main.webp",
    image: "https://itsnosweat.net/images/nosweatvan.webp",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Moreno Valley",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9425,
      longitude: -117.2297,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Moreno Valley" },
      { "@type": "City", name: "Riverside" },
      { "@type": "City", name: "Perris" },
      { "@type": "City", name: "Hemet" },
      { "@type": "City", name: "San Jacinto" },
      { "@type": "City", name: "Beaumont" },
      { "@type": "City", name: "Menifee" },
      { "@type": "City", name: "Lake Elsinore" },
    ],
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
    sameAs: [],
  };

  return <JsonLd data={data} />;
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://itsnosweat.net",
    logo: "https://itsnosweat.net/images/logo-main.webp",
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
