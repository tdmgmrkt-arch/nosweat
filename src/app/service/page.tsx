import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | HVAC & Air Conditioning",
  description:
    "Full-service HVAC solutions: AC repair, furnace installation, maintenance plans, and indoor air quality systems.",
  openGraph: {
    images: [{ url: "/images/services/hvac-maintenance-v2.webp", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO BANNER (Standardized) ── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image 
            src="/images/services/hvac-maintenance-v2.webp" 
            alt="HVAC services by It's No Sweat Heat & Air" 
            fill 
            priority 
            className="object-cover object-[center_40%]" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">Services</span>
            </p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
            <p className="mt-6 text-lg leading-relaxed text-slate-200 drop-shadow-sm sm:text-xl">
              Complete heating, cooling, and air quality services for homes across the Inland Empire.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID (Upgraded Architecture) ── */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((svc) => (
              /* Ghost Link Pattern: <div> wrapper instead of <Link> */
              <div
                key={svc.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/10"
              >
                {/* Invisible overlay link for safe clicking */}
                <Link href={`/service/${svc.slug}/`} className="absolute inset-0 z-20">
                  <span className="sr-only">Learn more about {svc.title}</span>
                </Link>

                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-video">
                  {/* Smoothed zoom effect from scale-110 to scale-105 */}
                  <Image 
                    src={svc.heroImage} 
                    alt={svc.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-navy/20 to-transparent" />
                </div>

                {/* Card Body (Flex-1 to push footer down) */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white shadow-sm">
                    <svc.icon className="h-6 w-6" />
                  </div>
                  
                  <h2 className="font-heading text-xl font-extrabold text-navy transition-colors group-hover:text-brand-blue">
                    {svc.title}
                  </h2>
                  
                  <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-slate-500">
                    {svc.intro}
                  </p>
                  
                  {/* Always-Visible Footer CTA matching the rest of the site */}
                  <div className="mt-auto pt-6">
                    <div className="flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-brand-blue">
                      View Service Details 
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}