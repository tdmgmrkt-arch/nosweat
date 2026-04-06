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
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      
      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── HERO BANNER ── */}
      <section className="relative z-10 overflow-hidden pt-24 pb-20 sm:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 z-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          >
            <Image 
              src="/images/services/hvac-maintenance-v2.webp" 
              alt="HVAC services by It's No Sweat Heat & Air" 
              fill 
              priority 
              className="object-cover object-[center_40%] opacity-25 mix-blend-luminosity" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:pt-24">
          <div className="max-w-3xl">
            {/* Luminous Breadcrumbs */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-[10px] font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Services</span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Our Services
            </h1>
            <div className="mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            <p className="mt-8 text-xl leading-relaxed text-slate-300 font-light drop-shadow-md">
              Complete heating, cooling, and air quality services for homes across the Inland Empire.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID (Zero Banding Fix) ── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((svc) => (
              <div
                key={svc.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-[#0F172A]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-[#151E32] hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Invisible overlay link for safe clicking */}
                <Link href={`/service/${svc.slug}/`} className="absolute inset-0 z-30">
                  <span className="sr-only">Learn more about {svc.title}</span>
                </Link>

                {/* THE ULTIMATE FIX: CSS Masking (Zero Banding) applied directly to the image wrapper */}
                <div 
                  className="absolute inset-x-0 top-0 h-[260px] z-0 pointer-events-none"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
                  }}
                >
                  <Image 
                    src={svc.heroImage} 
                    alt={svc.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  />
                </div>

                {/* Card Body - Uses pt-44 (padding-top) to push the content safely below the image fade */}
                <div className="relative z-10 flex flex-1 flex-col p-8 pt-44 pointer-events-none">
                  {/* Glowing Floating Icon */}
                  <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_0_15px_rgba(59,130,246,0.2)] transition-all duration-500 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <svc.icon className="h-6 w-6" />
                  </div>
                  
                  <h2 className="font-heading text-2xl font-extrabold text-white tracking-tight transition-colors group-hover:text-brand-blue-light">
                    {svc.title}
                  </h2>
                  
                  <p className="mt-3 line-clamp-3 text-sm font-light leading-relaxed text-slate-400">
                    {svc.intro}
                  </p>
                  
                  {/* Footer CTA */}
                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-2 border-t border-white/10 pt-6 text-sm font-bold text-slate-400 transition-colors group-hover:text-white">
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
    </div>
  );
}