import { JsonLd } from "@/components/json-ld";
import type { BlogPost } from "@/data/blogs";

export function ArticleSchema({ post }: { post: BlogPost }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://itsnosweat.net${post.featuredImage}`,
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://itsnosweat.net",
    },
    publisher: {
      "@type": "Organization",
      name: "It's No Sweat Heat & Air",
      logo: {
        "@type": "ImageObject",
        url: "https://itsnosweat.net/images/logo-main.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://itsnosweat.net/blog/${post.slug}/`,
    },
  };

  return <JsonLd data={data} />;
}
