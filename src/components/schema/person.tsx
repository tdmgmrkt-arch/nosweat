import { JsonLd } from "@/components/json-ld";

export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.itsnosweat.net/about-us/#justin-jaszewski",
    name: "Justin Jaszewski",
    jobTitle: "Co-Founder",
    worksFor: { "@id": "https://www.itsnosweat.net/#organization" },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional certification",
        name: "NATE Certified Technician",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California Contractor License",
        identifier: "1058772",
      },
    ],
  };

  return <JsonLd data={data} />;
}
