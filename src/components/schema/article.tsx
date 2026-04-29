import { JsonLd } from "@/components/json-ld";
import type { BlogPost } from "@/data/blogs";

export function ArticleSchema({ post }: { post: BlogPost }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: `https://www.itsnosweat.net${post.featuredImage}`,
      width: post.featuredImageWidth,
      height: post.featuredImageHeight,
    },
    datePublished: post.publishedDate,
    dateModified: post.dateModified ?? post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
      description: post.authorBio,
      worksFor: {
        "@type": "HVACBusiness",
        "@id": "https://www.itsnosweat.net/#business",
        name: "It's No Sweat Heat & Air",
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
      knowsAbout: [
        "HVAC installation",
        "Air conditioning repair",
        "Furnace repair",
        "Indoor air quality",
        "Energy efficiency",
      ],
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.itsnosweat.net/#organization",
      name: "It's No Sweat Heat & Air",
      url: "https://www.itsnosweat.net",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itsnosweat.net/images/logo-main.webp",
        width: 600,
        height: 200,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.itsnosweat.net/blog/${post.slug}/`,
    },
  };

  return <JsonLd data={data} />;
}
