import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "HVAC & Solar Blog",
  description:
    "Expert tips on AC repair, furnace maintenance, and energy savings for Moreno Valley homeowners. Read our latest articles.",
  openGraph: {
    images: [{ url: "/images/blog-hero.webp", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src="/images/blog-hero.webp" alt="HVAC tips and guides from It's No Sweat Heat & Air" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">Blog</span>
            </p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">Our Blog</h1>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
            <p className="mt-6 text-lg leading-relaxed text-slate-300 drop-shadow-sm sm:text-xl">
              HVAC tips, maintenance guides, and honest advice from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.featuredImage} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold uppercase tracking-wider text-brand-blue">{post.category}</span>
                    <span className="text-slate-300">&bull;</span>
                    <time dateTime={post.publishedDate} className="text-slate-400">
                      {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                  </div>
                  <h2 className="mt-2 font-heading text-lg font-extrabold text-navy group-hover:text-brand-blue transition-colors">{post.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
