import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, CalendarCheck, Clock, User } from "lucide-react";
import { getBlogBySlug, getAllBlogSlugs, blogPosts } from "@/data/blogs";
import { companyInfo } from "@/data/navigation";
import { ArticleSchema } from "@/components/schema/article";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

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

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: post.title, href: `/blog/${post.slug}/` },
      ]} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src={post.featuredImage} alt={post.title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">{post.category}</span>
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
          </div>
        </div>
      </section>

      {/* Content area — 2 column on desktop */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main article */}
            <article>
              <Link href="/blog/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark">
                <ArrowLeft className="h-4 w-4" /> All Articles
              </Link>

              {/* Featured image */}
              <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image src={post.featuredImage} alt={post.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
              </div>

              {/* Meta row */}
              <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-slate-100 pb-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-brand-blue" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-blue" />
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </div>
                <span className="rounded-full bg-brand-blue/10 px-3 py-0.5 text-xs font-bold text-brand-blue">{post.category}</span>
              </div>

              {/* Article body */}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="rounded-2xl bg-brand-blue p-6 text-center shadow-lg">
                <CalendarCheck className="mx-auto h-8 w-8 text-white/80" />
                <h3 className="mt-3 font-heading text-lg font-extrabold text-white">Need HVAC Service?</h3>
                <p className="mt-2 text-sm text-white/70">Schedule a free estimate or call us for same-day service.</p>
                <Link href="/contact-us/" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                  Get a Free Estimate
                </Link>
                <a href={companyInfo.phoneHref} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/10">
                  <Phone className="h-4 w-4" /> {companyInfo.phone}
                </a>
              </div>

              {/* Related posts */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-navy">More Articles</h3>
                <div className="mt-4 space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}/`} className="group flex gap-3">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <Image src={related.featuredImage} alt={related.title} fill className="object-cover transition-transform group-hover:scale-110" sizes="64px" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-navy transition-colors group-hover:text-brand-blue line-clamp-2">{related.title}</p>
                        <p className="mt-1 text-[11px] text-slate-400">{related.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* $79 Offer mini card */}
              <div className="rounded-2xl bg-navy p-6 text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-heading text-3xl font-extrabold text-white">$79</span>
                  <span className="text-sm font-bold text-white/40 line-through">$149</span>
                </div>
                <p className="mt-1 font-heading text-sm font-extrabold text-white">Furnace Tune-Up</p>
                <p className="mt-1 text-xs text-white/50">Safety Inspection Included</p>
                <Link href="/service/special-offer/" className="mt-4 inline-flex w-full items-center justify-center gap-1 rounded-xl bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                  Claim Offer <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Services quick links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-navy">Our Services</h3>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { label: "AC Repair", href: "/service/ac-repair/" },
                    { label: "Furnace Repair", href: "/service/furnace-repair/" },
                    { label: "HVAC Maintenance", href: "/service/hvac-maintenance/" },
                    { label: "Indoor Air Quality", href: "/service/indoor-air-quality/" },
                    { label: "AC Installation", href: "/service/ac-installation/" },
                    { label: "Special Offers", href: "/service/special-offer/" },
                  ].map((svc) => (
                    <li key={svc.href}>
                      <Link href={svc.href} className="flex items-center justify-between text-sm text-slate-600 transition-colors hover:text-brand-blue">
                        {svc.label}
                        <ArrowRight className="h-3 w-3 text-slate-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
