import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

export const metadata: Metadata = {
  title: "HVAC Tips & Guides Blog",
  description:
    "Expert HVAC tips on AC repair, furnace maintenance, and energy savings for Moreno Valley and Inland Empire homeowners. Read our latest articles and guides.",
  openGraph: {
    title: "HVAC Tips & Guides Blog | It's No Sweat Heat & Air",
    description: "Expert HVAC tips on AC repair, furnace maintenance, and energy savings for Inland Empire homeowners.",
    images: [{ url: "/images/blog-hero.webp", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
      ]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "HVAC & Solar Blog",
        description: "Expert tips on AC repair, furnace maintenance, and energy savings for Moreno Valley homeowners.",
        url: "https://itsnosweat.net/blog/",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: blogPosts.length,
          itemListElement: blogPosts.map((post, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: post.title,
            url: `https://itsnosweat.net/blog/${post.slug}/`,
          })),
        },
      }} />

      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── HERO BANNER ── */}
      <section className="relative z-10 overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-20 lg:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 z-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          >
            <Image
              src="/images/blog-hero.webp"
              alt="HVAC tips and guides from It's No Sweat Heat & Air"
              fill
              priority
              className="object-cover object-[center_43%] opacity-40 mix-blend-screen"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-3xl">
            {/* Luminous Breadcrumbs */}
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Blog</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              Our Blog
            </h1>
            <div className="mt-5 sm:mt-8 h-1.5 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            <p className="mt-5 sm:mt-8 text-base sm:text-xl leading-relaxed text-slate-300 font-light drop-shadow-md">
              HVAC tips, maintenance guides, and honest advice from our team.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID SECTION ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-[2rem] bg-[#0F172A]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#151E32] hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >

                {/* CSS Masking image */}
                <div
                  className="absolute inset-x-0 top-0 h-[180px] sm:h-[220px] bg-white/[0.02] z-0 pointer-events-none"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Body Content */}
                <div className="relative z-10 flex flex-1 flex-col p-5 pt-44 sm:p-8 sm:pt-57">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span className="text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">{post.category}</span>
                    <span className="text-white/20">&bull;</span>
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                  </div>

                  <h2 className="mt-3 sm:mt-4 font-heading text-lg sm:text-xl font-extrabold text-white leading-snug tracking-wide group-hover:text-brand-blue-light transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2 sm:mt-3 line-clamp-2 text-xs sm:text-sm font-light leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mt-auto pt-6 sm:pt-8 transition-colors group-hover:text-white">
                    Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}