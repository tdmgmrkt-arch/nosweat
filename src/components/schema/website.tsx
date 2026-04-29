import { JsonLd } from "@/components/json-ld";

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.itsnosweat.net/#website",
    name: "It's No Sweat Heat & Air",
    url: "https://www.itsnosweat.net",
    publisher: { "@id": "https://www.itsnosweat.net/#organization" },
    // No SearchAction — the site has no search route (?q= or /search/).
    // Including a non-functional SearchAction creates invalid markup.
  };

  return <JsonLd data={data} />;
}
