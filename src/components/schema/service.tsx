import { JsonLd } from "@/components/json-ld";
import type { ServicePage } from "@/data/services";

export function ServiceSchema({ service }: { service: ServicePage }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    image: `https://www.itsnosweat.net${service.heroImage}`,
    url: `https://www.itsnosweat.net/service/${service.slug}/`,
    serviceType: service.title,
    provider: {
      "@type": "HVACBusiness",
      "@id": "https://www.itsnosweat.net/#business",
      name: "It's No Sweat Heat & Air",
      telephone: "+19513313310",
      url: "https://www.itsnosweat.net",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27950 Kalmia Ave",
        addressLocality: "Moreno Valley",
        addressRegion: "CA",
        postalCode: "92555",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
  };

  return <JsonLd data={data} />;
}
