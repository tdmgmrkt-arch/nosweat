import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListView } from "@/components/blog-list-view";
import { getPostsForPage, getTotalPages } from "@/data/blogs";

interface BlogPageNumProps {
  params: Promise<{ num: string }>;
}

export function generateStaticParams() {
  const total = getTotalPages();
  const pages: { num: string }[] = [];
  for (let i = 2; i <= total; i++) pages.push({ num: String(i) });
  return pages;
}

export async function generateMetadata({ params }: BlogPageNumProps): Promise<Metadata> {
  const { num } = await params;
  const page = Number(num);
  return {
    title: `HVAC Tips & Guides Blog — Page ${page}`,
    description:
      "Expert HVAC tips on AC repair, furnace maintenance, and energy savings for Moreno Valley and Inland Empire homeowners.",
    alternates: { canonical: `/blog/page/${page}/` },
    robots: { index: true, follow: true },
  };
}

export default async function BlogNumberedPage({ params }: BlogPageNumProps) {
  const { num } = await params;
  const page = Number(num);
  const total = getTotalPages();

  if (!Number.isInteger(page) || page < 2 || page > total) notFound();

  return (
    <BlogListView posts={getPostsForPage(page)} currentPage={page} totalPages={total} />
  );
}
