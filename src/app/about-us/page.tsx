import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { companyInfo } from "@/data/navigation";
import { ReviewCarousel } from "@/components/review-carousel";

export const metadata: Metadata = {
  title: "About Us | 25+ Years HVAC Experience",
  description:
    "Learn about It's No Sweat Heat & Air — over 25 years of HVAC experience serving Moreno Valley and the Inland Empire. Meet our team and read customer reviews.",
  openGraph: {
    images: [{ url: "/images/team-engaged.webp", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Banner ── */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/team-engaged.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">About Us</span>
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">About Us</h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* ── Hero intro — founder + experience ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-3xl shadow-xl" style={{ overflow: "hidden" }}>
                <Image
                  src="/images/nosweatvan.webp"
                  alt="Justin — Co-Founder of It's No Sweat Heat & Air"
                  fill
                  priority
                  className="rounded-3xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-brand-blue/10" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Who We Are</p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                We have over 25 years experience in the HVAC industry
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                At It&apos;s No Sweat Heat &amp; Air, we believe every homeowner deserves honest, high-quality HVAC service at a fair price. Founded in Moreno Valley by Justin, our company has grown from a one-truck operation into a trusted team of certified technicians serving the Inland Empire and surrounding areas.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                We&apos;re not a franchise. We&apos;re locally owned, family-operated, and personally invested in every job we take on. That means no high-pressure sales, no inflated quotes, and no shortcuts — just straightforward work done right the first time.
              </p>

              {/* Founder signature block */}
              <div className="mt-8 flex items-center gap-5 border-t border-slate-200 pt-6">
                <div>
                  <p className="font-heading text-lg font-extrabold text-navy">Justin Jaszewski</p>
                  <p className="text-sm text-slate-500">Co-Founder</p>
                </div>
                <Image
                  src="/images/signature.png"
                  alt="Justin Jaszewski signature"
                  width={160}
                  height={80}
                  className="h-16 w-auto opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Our Verified Customers Love Us!
          </h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* ── HVAC Technicians + description ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-5/4 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/team-engaged.webp"
                alt="It's No Sweat Heat & Air team working together"
                fill
                className="object-cover object-[60%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Our Team</p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                HVAC — Heating and Cooling Technicians
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We realize that mechanical systems today are far more complex than ever and energy costs continue to rise. Looking for a Moreno Valley HVAC Company? Nothing wears on homeowners like the idea of handling HVAC problems. From the air conditioner to the furnace, we take the pressure off of you.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Our technicians are the most recognized professionals in the area because we&apos;re committed to amazing service. We handle everything from emergency repairs to full system replacements — so call us if you would like a free estimate.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="font-heading text-3xl font-extrabold text-brand-blue">25+</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Years Experience</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="font-heading text-3xl font-extrabold text-brand-blue">500+</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Projects Completed</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="font-heading text-3xl font-extrabold text-brand-blue">1,000+</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Satisfied Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reliable HVAC Services — stat bars ── */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">What We Do</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              We Offer Reliable HVAC Services
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "45%", label: "Energy Consumption Goes to Heating", color: "bg-brand-red" },
              { stat: "90%", label: "Average Indoor Time Spent by Individuals", color: "bg-brand-blue" },
              { stat: "50%", label: "Lower Your HVAC Costs with Maintenance", color: "bg-brand-blue-dark" },
              { stat: "40%", label: "Lower Monthly Costs with Solar Panels", color: "bg-brand-red" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <p className={`inline-flex rounded-lg ${item.color} px-4 py-2 font-heading text-2xl font-extrabold text-white`}>
                  {item.stat}
                </p>
                <p className="mt-3 text-sm font-semibold leading-snug text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Residential & Commercial ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Our Expertise</p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                Residential and Commercial HVAC Technicians
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether it&apos;s a single-family home or a commercial property, our licensed technicians deliver the same standard of excellence. We handle system design, installation, repair, and ongoing maintenance for properties of all sizes.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-navy">Fast, Reliable Service</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Our fully-stocked trucks and experienced technicians ensure most jobs are completed in a single visit — getting your comfort restored fast.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-navy">Emergency Services</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      HVAC emergencies don&apos;t wait for business hours. Our 24/7 emergency line connects you with a real technician — no answering services, no callbacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl shadow-xl" style={{ overflow: "hidden" }}>
                <Image
                  src="/images/technician-working.webp"
                  alt="Professional HVAC technician at work"
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section removed — kept locally for future reimplementation */}

      {/* ── Latest News / Blog ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Latest News
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  <Image src={post.featuredImage} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <span>&bull;</span>
                    <span className="font-bold uppercase tracking-wider text-brand-blue">{post.category}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-base font-extrabold text-navy group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog/" className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark">
              Read All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA bottom ── */}
      <section className="relative overflow-hidden bg-brand-blue py-14">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-center gap-6">
            {/* Mascot */}
            <Image
              src="/images/mascot-head.png"
              alt="No Sweat mascot"
              width={80}
              height={80}
              className="hidden h-20 w-auto drop-shadow-lg sm:block"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Ready to Experience the No Sweat Difference?
              </h2>
              <p className="mt-1 text-sm text-white/70">Schedule your free estimate or call us for immediate assistance.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-base font-extrabold text-white shadow-lg transition-all hover:bg-brand-red-dark hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Estimate <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={companyInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-extrabold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
