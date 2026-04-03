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
  Star, // <-- Add this right here
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
    images: [{ url: "/images/nosweatvan.webp", width: 1200, height: 630 }],
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
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/service-areas/" },
      ]} />

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/nosweatvan.webp"
            alt="It's No Sweat Heating & Air Conditioning Van"
            fill
            priority
            className="object-cover object-[center_42%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumbs */}
          <p className="text-sm font-semibold text-white/50 tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white">Service Areas</span>
          </p>

          {/* Trust Signals (Added) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-sm font-bold tracking-wide text-white/90">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="hidden sm:inline mx-1 text-white/40">•</span>
            <span>25+ Years in the Inland Empire</span>
            <span className="hidden sm:inline mx-1 text-white/40">•</span>
            <span>Licensed & Insured</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
            HVAC Service Areas in the Inland Empire
          </h1>
          
          <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
          
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">
            We provide heating, cooling, and air quality services to 30 cities across Riverside County and the Inland Empire — with the same same-day response time, the same quality, and the same honest pricing at every address.
          </p>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Our Coverage</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Cities We Serve
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Click any city below to see the full range of HVAC services we offer in your area — including local service details, common problems we solve, and answers to frequently asked questions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceAreaCities.map((area) => (
              <Link
                key={area.city}
                href={area.url}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-lg"
              >
                <MapPin className="h-4 w-4 shrink-0 text-brand-blue transition-colors group-hover:text-brand-red" />
                <span className="text-base font-semibold text-navy group-hover:text-brand-blue">
                  {area.city}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ACROSS ALL LOCATIONS ── */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Full-Service HVAC</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              HVAC Services Available Across All Locations
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Every city in our service area receives the same complete range of heating, cooling, and air quality services — performed by the same licensed technicians with the same standards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-xl sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <svc.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-extrabold text-navy group-hover:text-brand-blue">{svc.title}</h3>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-600">{svc.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue opacity-0 transition-all group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL EXPERIENCE MATTERS ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative hidden aspect-4/3 rounded-2xl shadow-xl lg:block" style={{ overflow: "hidden" }}>
              <Image src="/images/fullservice.webp" alt="HVAC technician servicing an Inland Empire home" fill className="rounded-2xl object-cover object-[center_55%]" sizes="50vw" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">25+ Years in the Inland Empire</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                Why Local HVAC Experience Matters
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  The Inland Empire&apos;s climate puts more stress on HVAC equipment than most regions in the country. Summers routinely exceed 105°F for weeks at a time. Winter nights drop into the 30s. Dry conditions accelerate dust buildup on outdoor equipment, and seasonal wind events compound the problem. A system that would last 20 years in a mild climate may struggle by year 12 here without consistent professional care.
                </p>
                <p>
                  Working across 30 cities in this region for over 25 years has given us something no certification can replicate: pattern recognition. We know which construction eras produce which problems. We know how housing density, terrain, and elevation affect system performance from city to city. And we know that the contractor who shows up matters as much as the equipment on the pad — because the best system in the world underperforms when it&apos;s installed, maintained, or repaired by someone who doesn&apos;t understand the environment it operates in.
                </p>
                <p>
                  That&apos;s the difference between a company that services the Inland Empire and one that&apos;s from it. We don&apos;t need to look up your city on a map. We&apos;ve been working in it for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE CTA ── */}
      <section className="relative overflow-hidden bg-brand-blue py-20 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ac-repair-inprogress.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue/90 via-brand-blue to-brand-blue-dark" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Image src="/images/mascot-head.png" alt="" width={64} height={64} className="mx-auto mb-4 h-16 w-auto drop-shadow-lg" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Same-Day Service Across 30 Cities</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Schedule Service Anywhere in Our Coverage Area
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold text-white/80">
            Whether you need emergency repair, seasonal maintenance, or a professional evaluation of your system — we respond the same day to every city we serve. Licensed, insured, and rated 5 stars across the Inland Empire.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-blue shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5">
              <CalendarCheck className="h-5 w-5" /> Request Service Online <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-3 rounded-xl bg-brand-red px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
              <Phone className="h-5 w-5" /> {companyInfo.phone}
            </a>
          </div>
          <p className="mt-5 text-sm text-white/40">No pressure. Just honest recommendations from experienced technicians.</p>
        </div>
      </section>

      {/* ── SERVICE AREAS FOOTER ── */}
      <section className="bg-navy py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Proudly Serving</p>
            <h2 className="mt-2 font-heading text-xl font-extrabold text-white sm:text-2xl">
              HVAC Service Areas Across the Inland Empire
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreaCities.map((area) => (
              <Link key={area.city} href={area.url} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:text-white">
                {area.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
