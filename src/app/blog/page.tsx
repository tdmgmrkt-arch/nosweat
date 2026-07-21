import type { Metadata } from "next";
import { BlogListView } from "@/components/blog-list-view";
import { getPostsForPage, getTotalPages } from "@/data/blogs";

export const metadata: Metadata = {
  title: "HVAC Tips & Guides Blog",
  description:
    "Expert HVAC tips on AC repair, furnace maintenance, and energy savings for Moreno Valley and Inland Empire homeowners. Read our latest articles and guides.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "HVAC Tips & Guides Blog | It's No Sweat Heat & Air",
    description:
      "Expert HVAC tips on AC repair, furnace maintenance, and energy savings for Inland Empire homeowners.",
    images: [{ url: "/images/blog-hero.webp", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <BlogListView
      posts={getPostsForPage(1)}
      currentPage={1}
      totalPages={getTotalPages()}
    />
  );
}
