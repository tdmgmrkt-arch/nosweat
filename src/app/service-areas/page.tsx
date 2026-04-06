import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  MapPin,
  Snowflake,
  Flame,
  Wrench,
  Wind,
  CalendarCheck,
  Star, 
} from "lucide-react";
import { serviceAreaCities } from "@/data/cities";
import { companyInfo } from "@/data/navigation";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

export const metadata: Metadata = {
  title: "HVAC Service Areas | Riverside & Inland Empire | It's No Sweat Heat & Air",
  description:
    "We serve 30 cities across Riverside County and the Inland Empire with same-day HVAC service. AC repair, furnace installation, maintenance & more. Licensed & insured. Call 951-331-3310.",
  openGraph: {
    title: "HVAC Service Areas | Riverside & Inland Empire",
    description:
      "We serve 30 cities across Riverside County and the Inland Empire with same-day HVAC service. Licensed & insured. Call 951-331-3310.",
    images: [{ url: "/images/serviceareahero.webp", width: 1200, height: 630 }],
  },
};

const serviceHighlights = [
  {
    title: "AC Installation",
    href: "/service/ac-installation/",
    description: "Load-calculated, properly sized cooling systems matched to your home — not a rough estimate based on square footage.",
    icon: Snowflake,
  },
  {
    title: "AC Repair",
    href: "/service/ac-repair/",
    description: "Same-day diagnostics and repair for cooling failures, with the parts and experience to resolve most issues in one visit.",
    icon: Snowflake,
  },
  {
    title: "Furnace Installation",
    href: "/service/furnace-installation/",
    description: "High-efficiency heating systems sized to your home's actual demand, with ductwork evaluation and performance verification.",
    icon: Flame,
  },
  {
    title: "Furnace Repair",
    href: "/service/furnace-repair/",
    description: "Safety-first furnace diagnostics including CO testing, with clear explanations and honest recommendations.",
    icon: Flame,
  },
  {
    title: "HVAC Maintenance",
    href: "/service/hvac-maintenance/",
    description: "Seasonal tune-ups that catch developing issues, maintain efficiency, and extend the life of your equipment.",
    icon: Wrench,
  },
  {
    title: "Indoor Air Quality",
    href: "/service/indoor-air-quality/",
    description: "Filtration, purification, and ventilation solutions matched to what's actually circulating in your home.",
    icon: Wind,
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/service-areas/" },
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
              src="/images/serviceareahero.webp"
              alt="It's No Sweat Heating & Air Conditioning Van"
              fill
              priority
              className="object-cover object-[center_38%] opacity-30 mix-blend-luminosity"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
          {/* Luminous Breadcrumbs */}
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">&rsaquo;</span>
            <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Service Areas</span>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase drop-shadow-sm">
            <div className="flex items-center gap-1 sm:gap-1.5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
              ))}
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>25+ Years in the Inland Empire</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Licensed & Insured</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl max-w-4xl drop-shadow-2xl">
            HVAC Service Areas in the Inland Empire
          </h1>

          <div className="mt-5 sm:mt-8 h-1.5 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />

          <p className="mt-5 sm:mt-8 max-w-2xl text-base sm:text-xl text-slate-300 font-light leading-relaxed drop-shadow-md">
            We provide heating, cooling, and air quality services to 30 cities across Riverside County and the Inland Empire — with the same same-day response time, the same quality, and the same honest pricing at every address.
          </p>
        </div>
      </section>

      {/* ── AREAS WE SERVE (Glass Grid) ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Coverage</p>
            <h2 className="mt-3 sm:mt-4 font-heading text-2xl sm:text-3xl font-extrabold text-white lg:text-4xl tracking-tight">
              Cities We Serve
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Click any city below to see the full range of HVAC services we offer in your area — including local service details, common problems we solve, and answers to frequently asked questions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {serviceAreaCities.map((area) => (
              <Link
                key={area.city}
                href={area.url}
                className="group flex items-center gap-2.5 sm:gap-4 rounded-xl sm:rounded-2xl bg-white/[0.02] px-3 sm:px-6 py-3.5 sm:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:ring-brand-blue/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_10px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.03] ring-1 ring-white/10 transition-colors group-hover:bg-brand-blue/20 group-hover:ring-brand-blue/30">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-500 transition-colors group-hover:text-brand-blue-light" />
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-300 transition-colors group-hover:text-white truncate">
                  {area.city}
                </span>
                <ArrowRight className="ml-auto h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-blue-light" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ACROSS ALL LOCATIONS (Tactile Glass Cards) ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        {/* Subtle separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Full-Service HVAC</p>
            <h2 className="mt-3 sm:mt-4 font-heading text-2xl sm:text-3xl font-extrabold text-white lg:text-4xl tracking-tight">
              Available Across All Locations
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Every city in our service area receives the same complete range of heating, cooling, and air quality services — performed by the same licensed technicians with the same standards.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group flex flex-col rounded-2xl sm:rounded-[2rem] bg-[#0F172A]/50 p-5 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#151E32]/80 hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <svc.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white transition-colors group-hover:text-brand-blue-light">{svc.title}</h3>
                </div>
                <p className="text-xs sm:text-[15px] font-light leading-relaxed text-slate-400 flex-1">{svc.description}</p>
                <span className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors group-hover:text-white">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL EXPERIENCE MATTERS (Cinematic Feature) ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="relative hidden aspect-4/3 w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10 lg:block">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image src="/images/fullservice.webp" alt="HVAC technician servicing an Inland Empire home" fill className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:scale-105" sizes="50vw" />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">25+ Years in the Inland Empire</p>
              <h2 className="mt-3 sm:mt-4 font-heading text-2xl sm:text-3xl font-extrabold text-white lg:text-4xl tracking-tight">
                Why Local HVAC Experience Matters
              </h2>
              <div className="mt-5 sm:mt-8 space-y-4 sm:space-y-6 text-sm sm:text-base font-light leading-relaxed text-slate-400">
                <p>
                  The Inland Empire&apos;s climate puts more stress on HVAC equipment than most regions in the country. Summers routinely exceed 105°F for weeks at a time. Winter nights drop into the 30s. Dry conditions accelerate dust buildup on outdoor equipment, and seasonal wind events compound the problem. A system that would last 20 years in a mild climate may struggle by year 12 here without consistent professional care.
                </p>
                <p>
                  Working across 30 cities in this region for over 25 years has given us something no certification can replicate: pattern recognition. We know which construction eras produce which problems. We know how housing density, terrain, and elevation affect system performance from city to city. And we know that the contractor who shows up matters as much as the equipment on the pad — because the best system in the world underperforms when it&apos;s installed, maintained, or repaired by someone who doesn&apos;t understand the environment it operates in.
                </p>
                <p className="font-semibold text-slate-300">
                  That&apos;s the difference between a company that services the Inland Empire and one that&apos;s from it. We don&apos;t need to look up your city on a map. We&apos;ve been working in it for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE CTA ── */}
      <section className="relative z-10 overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent opacity-80 pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
            <Image src="/images/mascot-head.png" alt="" width={48} height={48} className="h-9 sm:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Same-Day Service Across 30 Cities</p>
          <h2 className="mt-3 sm:mt-4 font-heading text-2xl sm:text-4xl font-extrabold text-white lg:text-5xl xl:text-6xl tracking-tight drop-shadow-xl">
            Schedule Service Anywhere in Our Coverage Area
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg font-light text-slate-300 drop-shadow-sm">
            Whether you need emergency repair, seasonal maintenance, or a professional evaluation of your system — we respond the same day to every city we serve. Licensed, insured, and rated 5 stars across the Inland Empire.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-5 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
              <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5" /> Request Service Online <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={companyInfo.phoneHref} className="group flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
              <Phone className="h-4 w-4 drop-shadow-md" /> <span className="drop-shadow-md">{companyInfo.phone}</span>
            </a>
          </div>
          <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">No pressure. Just honest recommendations from experienced technicians.</p>
        </div>
      </section>

    </div>
  );
}