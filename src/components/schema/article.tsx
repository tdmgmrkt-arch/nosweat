import { JsonLd } from "@/components/json-ld";
import type { BlogPost } from "@/data/blogs";

export function ArticleSchema({ post }: { post: BlogPost }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.itsnosweat.net${post.featuredImage}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
      description: post.authorBio,
      worksFor: {
        "@type": "HVACBusiness",
        name: "It's No Sweat Heat & Air",
        url: "https://www.itsnosweat.net",
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
      name: "It's No Sweat Heat & Air",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itsnosweat.net/images/logo-main.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.itsnosweat.net/blog/${post.slug}/`,
    },
  };

  return <JsonLd data={data} />;
}
