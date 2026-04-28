import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, CalendarCheck, Clock, User, Tag } from "lucide-react";
import { getBlogBySlug, getAllBlogSlugs, blogPosts } from "@/data/blogs";
import { companyInfo } from "@/data/navigation";
import { ArticleSchema } from "@/components/schema/article";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";
import { getLiveRating } from "@/lib/google-rating";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: { title: post.metaTitle, description: post.metaDescription, type: "article", publishedTime: post.publishedDate, images: [{ url: post.featuredImage }] },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const { rating, reviewCount } = await getLiveRating();
  const renderedContent = post.content
    .replace(/\{\{RATING\}\}/g, rating.toFixed(1))
    .replace(/\{\{REVIEW_COUNT\}\}/g, String(reviewCount));

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: post.title, href: `/blog/${post.slug}/` },
      ]} />

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
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover object-[center_40%] opacity-20 mix-blend-luminosity"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#090E1A]/60 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-4xl">
            {/* Luminous Breadcrumbs */}
            <div className="mb-6 sm:mb-8 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <Link href="/blog/" className="text-slate-400 hover:text-white transition-colors">Blog</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{post.category}</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl leading-[1.1]">
              {post.title}
            </h1>
            <div className="mt-5 sm:mt-8 h-1.5 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
          </div>
        </div>
      </section>

      {/* ── TWO COLUMN LAYOUT ── */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">

            {/* Main Article */}
            <article className="min-w-0">
              <Link href="/blog/" className="group mb-6 sm:mb-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue-light transition-colors hover:text-white">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Articles
              </Link>

              {/* Glassmorphic Featured Image Frame */}
              <div className="relative mb-8 sm:mb-10 aspect-video overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white/[0.02] p-1.5 sm:p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-xl sm:rounded-3xl">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                </div>
              </div>

              {/* Meta Row */}
              <div className="mb-8 sm:mb-10 flex flex-wrap items-center gap-3 sm:gap-6 border-b border-white/10 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-blue/10 ring-1 ring-brand-blue/30">
                    <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-blue-light" />
                  </div>
                  <span className="font-semibold text-white">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-500" />
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </div>
                <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue-light">
                  {post.category}
                </span>
              </div>

              {/* Prose Content */}
              <div
                className="prose prose-invert max-w-none prose-sm sm:prose-lg prose-headings:font-heading prose-headings:font-extrabold prose-img:rounded-xl sm:prose-img:rounded-2xl [&_h2]:!text-white [&_h3]:!text-white [&_p]:!text-slate-300 [&_p]:leading-relaxed [&_li]:!text-slate-300 [&_strong]:!text-white [&_strong]:font-bold [&_a]:!text-sky-400 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-sky-400/60 hover:[&_a]:!text-sky-300"
                dangerouslySetInnerHTML={{ __html: renderedContent }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 sm:mt-16 flex items-center gap-3 border-t border-white/10 pt-6 sm:pt-8">
                  <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-lg bg-white/[0.03] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08] hover:text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-[2rem] border border-white/5 bg-[#0F172A]/50 p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                  <div className="relative shrink-0">
                    <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-brand-blue/10 ring-1 ring-brand-blue/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_0_25px_rgba(59,130,246,0.25)]">
                      <User className="h-10 w-10 sm:h-12 sm:w-12 text-brand-blue-light drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">About the Author</p>
                    <h3 className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {post.author}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                      {post.authorTitle}
                    </p>
                    <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-slate-300">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 sm:space-y-8">

              {/* 1. HIGH-CONVERSION CTA CARD */}
              <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/5 bg-[#0F172A]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md text-center p-6 sm:p-8">
                <div className="mx-auto mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <CalendarCheck className="h-6 w-6 sm:h-8 sm:w-8 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                  Need HVAC Service?
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
                  Schedule a free estimate or call us for same-day service.
                </p>
                <Link href="/contact-us/" className="mt-6 sm:mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-5 py-3 sm:py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                  Get a Free Estimate
                </Link>
                <a href={companyInfo.phoneHref} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-5 py-3 sm:py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5 backdrop-blur-md">
                  <Phone className="h-4 w-4 text-brand-blue-light" /> {companyInfo.phone}
                </a>
              </div>

              {/* 2. RELATED POSTS */}
              <div className="rounded-2xl sm:rounded-[2rem] border border-white/5 bg-[#0F172A]/50 p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-md">
                <h3 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  More Articles
                </h3>
                <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}/`} className="group flex gap-3 sm:gap-4 transition-all">
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg sm:rounded-xl bg-white/[0.02] ring-1 ring-white/10">
                        <Image src={related.featuredImage} alt={related.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="80px" />
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-xs sm:text-sm font-bold leading-snug text-slate-200 transition-colors group-hover:text-brand-blue-light line-clamp-2">{related.title}</p>
                        <p className="mt-1 sm:mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">{related.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 3. $79 OFFER MINI CARD */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-brand-red/20 bg-gradient-to-br from-red-950/40 to-[#0F172A] p-5 sm:p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(220,38,38,0.1)] ring-1 ring-brand-red/20 backdrop-blur-md">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-red/20 blur-[40px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-baseline justify-center gap-3 drop-shadow-md">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">$79</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-500 line-through decoration-slate-600">$149</span>
                  </div>
                  <p className="mt-2 font-heading text-base sm:text-lg font-extrabold text-white">Furnace Tune-Up</p>
                  <p className="mt-1 text-[10px] sm:text-xs text-brand-red-light font-bold uppercase tracking-wider">Safety Inspection Included</p>
                  <Link href="/service/special-offer/" className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.05] px-5 py-2.5 sm:py-3 text-sm font-bold text-white ring-1 ring-white/20 transition-all hover:bg-white/[0.1] hover:ring-white/30 hover:-translate-y-0.5">
                    Claim Offer <ArrowRight className="h-4 w-4 text-brand-red" />
                  </Link>
                </div>
              </div>

              {/* 4. SERVICES QUICK LINKS */}
              <div className="rounded-2xl sm:rounded-[2rem] border border-white/5 bg-[#0F172A]/50 p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-md">
                <h3 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  Our Services
                </h3>
                <ul className="mt-4 sm:mt-5 flex flex-col">
                  {[
                    { label: "AC Repair", href: "/service/ac-repair/" },
                    { label: "Furnace Repair", href: "/service/furnace-repair/" },
                    { label: "HVAC Maintenance", href: "/service/hvac-maintenance/" },
                    { label: "Indoor Air Quality", href: "/service/indoor-air-quality/" },
                    { label: "AC Installation", href: "/service/ac-installation/" },
                    { label: "Special Offers", href: "/service/special-offer/" },
                  ].map((svc) => (
                    <li key={svc.href}>
                      <Link href={svc.href} className="group flex items-center justify-between border-b border-white/5 py-3 sm:py-3.5 text-sm font-medium text-slate-400 transition-colors hover:text-white last:border-b-0">
                        {svc.label}
                        <ArrowRight className="h-3.5 w-3.5 text-white/10 transition-transform group-hover:translate-x-1 group-hover:text-brand-blue-light" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}