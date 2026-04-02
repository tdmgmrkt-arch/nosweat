import { JsonLd } from "@/components/json-ld";
import type { ServicePage } from "@/data/services";

export function ServiceSchema({ service }: { service: ServicePage }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    image: `https://itsnosweat.net${service.heroImage}`,
    url: `https://itsnosweat.net/service/${service.slug}/`,
    provider: {
      "@type": "HVACBusiness",
      name: "It's No Sweat Heat & Air",
      telephone: "(951) 331-3310",
      url: "https://itsnosweat.net",
      areaServed: {
        "@type": "City",
        name: "Moreno Valley",
      },
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
  };

  return <JsonLd data={data} />;
}
