import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Special Offers — HVAC Deals & Promotions",
  description:
    "Current HVAC specials: FREE Nest thermostat with purchase, $2600 mini split systems, $79 furnace tune-ups, $97/month complete systems, and $179 maintenance plans.",
  alternates: { canonical: "/service/special-offer/" },
  openGraph: {
    title: "Special Offers | It's No Sweat Heat & Air",
    description: "Exclusive HVAC deals: FREE Nest thermostat, $79 tune-ups, $97/mo systems, and $179 maintenance plans.",
    images: [{ url: "/images/emergency-service.webp", width: 1200, height: 630 }],
  },
};

const specials = [
  {
    badge: "FREE",
    badgeSub: "With Purchase",
    title: "FREE Nest Pro Thermostat",
    description: "Buy a qualifying HVAC System and get a FREE Nest Pro programmable Thermostat. Smart temperature control that learns your schedule and saves up to 15% on energy bills.",
    image: "/images/services/nesthermostat.webp",
    color: "from-brand-red to-red-600",
    accent: "text-brand-red",
  },
  {
    badge: "$2,600",
    badgeSub: "Installed",
    title: "Mini Split Heating & Cooling System",
    description: "12,000 BTU Mini Split for energy-efficient heating and cooling at an affordable price — perfect for additions, garages, or any space without existing ductwork.",
    image: "/images/services/minisplit.webp",
    color: "from-brand-blue to-blue-600",
    accent: "text-brand-blue-light",
  },
  {
    badge: "FREE",
    badgeSub: "With Purchase",
    title: "FREE UV Light Air Purifier",
    description: "Get a free UV light air purifier with every furnace or coil purchased. Eliminates 99.9% of airborne bacteria and viruses for cleaner, healthier indoor air.",
    image: "/images/services/uvlightpurifier.webp",
    color: "from-emerald-500 to-teal-600",
    accent: "text-emerald-400",
  },
];

const tuneUpChecklist = [
  "FREE Air Filter Replacement",
  "Basic System Cleaning",
  "25-Point Safety Inspection",
  "Heat Exchanger Check",
  "Burner Assembly Cleaning",
  "Refrigerant Monitoring",
];

export default function SpecialOfferPage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">

      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-250 w-250 rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-200 w-200 rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── HERO BANNER ── */}
      <section className="relative z-10 overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-20 lg:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 z-0"
            style={{
              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          >
            <Image src="/images/special-offer-hero.webp" alt="Special HVAC offers" fill priority className="object-cover object-[center_40%] opacity-25 mix-blend-luminosity" sizes="100vw" />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-linear-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/5 bg-white/3 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-widest text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                <span className="text-white/30">&rsaquo;</span>
                <Link href="/service/" className="text-slate-400 hover:text-white transition-colors">Services</Link>
                <span className="text-white/30">&rsaquo;</span>
                <span className="text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">Specials</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-brand-red/15 px-3 sm:px-4 py-1.5 sm:py-2 ring-1 ring-brand-red/30">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-red" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-red uppercase">Limited Time Offers</span>
              </div>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              Special Offers
            </h1>
            <div className="mt-5 sm:mt-8 h-1.5 w-12 sm:w-16 rounded-full bg-linear-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            <p className="mt-5 sm:mt-8 text-base sm:text-xl leading-relaxed text-slate-300 font-light drop-shadow-md">
              Exclusive deals on HVAC installations, tune-ups, and maintenance plans. Save big on the services your home needs most.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED OFFERS ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specials.map((special) => (
              <div
                key={special.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-[2rem] bg-[#0F172A]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Image with CSS mask */}
                <div
                  className="absolute inset-x-0 top-0 h-[180px] sm:h-[220px] z-0 pointer-events-none"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                >
                  <Image src={special.image} alt={special.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>

                {/* Badge */}
                <div className={`absolute top-4 left-4 sm:top-6 sm:left-6 z-20 rounded-lg sm:rounded-xl bg-linear-to-b ${special.color} px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_0_20px_rgba(0,0,0,0.5)] ring-1 ring-white/20`}>
                  <p className="text-lg sm:text-xl font-extrabold leading-none text-white">{special.badge}</p>
                  <p className="mt-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white/80">{special.badgeSub}</p>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col p-5 pt-44 sm:p-8 sm:pt-56">
                  <h2 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-tight">{special.title}</h2>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-light leading-relaxed text-slate-400">{special.description}</p>

                  <Link
                    href="/contact-us/"
                    className="mt-auto pt-5 sm:pt-6 group/btn inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-red"
                  >
                    Claim This Offer <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── $79 TUNE-UP + $97/MONTH + $179 PLAN ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* $79 Furnace Tune-Up */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-linear-to-br from-brand-red/20 to-brand-red/5 p-5 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-brand-red/30 backdrop-blur-md">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/15 blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400">$79</span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-500 line-through">$149</span>
                    <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-red">Save $70</span>
                  </div>
                </div>

                <h2 className="font-heading text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-4">Furnace Tune-Up &amp; Safety Check</h2>

                <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                  {tuneUpChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/20 ring-1 ring-brand-red/30">
                        <CheckCircle2 className="h-3 w-3 text-brand-red" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contact-us/" className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-red-500 to-brand-red px-6 py-3.5 sm:py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_15px_rgba(220,38,38,0.3)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(220,38,38,0.5)] hover:-translate-y-0.5">
                  <CalendarCheck className="h-4 w-4" /> Claim $79 Tune-Up
                </Link>
              </div>
            </div>

            {/* $97/Month System */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-linear-to-br from-brand-blue/20 to-brand-blue/5 p-5 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-brand-blue/30 backdrop-blur-md">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/15 blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400">$97</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">/month</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue-light mb-3 sm:mb-4">With Approved Credit</p>

                <h2 className="font-heading text-lg sm:text-xl font-extrabold text-white mb-2 sm:mb-3">Complete HVAC System</h2>
                <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-400 mb-6 sm:mb-8">
                  Enjoy the benefits of a brand-new, reliable HVAC system for as little as $97 per month. Full installation, warranty, and professional sizing included.
                </p>

                <Link href="/contact-us/" className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-blue-500 to-brand-blue px-6 py-3.5 sm:py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_15px_rgba(59,130,246,0.3)] ring-1 ring-brand-blue/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-0.5">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* $179 Maintenance Plan */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-linear-to-br from-emerald-500/20 to-emerald-500/5 p-5 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-emerald-500/30 backdrop-blur-md sm:col-span-2 lg:col-span-1">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400">$179</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">/year</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3 sm:mb-4">Maintenance Plan</p>

                <h2 className="font-heading text-lg sm:text-xl font-extrabold text-white mb-2 sm:mb-3">Preventative Maintenance</h2>

                <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                  {[
                    "2 Annual Service Visits",
                    "Air Filter Replacement Included",
                    "15% Off All Parts for Members",
                    "Priority Scheduling — No Trip Charges",
                    "Extended Equipment Lifespan",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contact-us/" className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-emerald-400 to-emerald-600 px-6 py-3.5 sm:py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(16,185,129,0.5)] hover:-translate-y-0.5">
                  Sign Up Today <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative z-10 overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/15 via-transparent to-transparent opacity-80" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="mx-auto mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
            <Image src="/images/mascot-head.png" alt="It's No Sweat Heat & Air mascot" width={48} height={48} className="h-9 sm:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white lg:text-5xl tracking-tight drop-shadow-xl">
            Ready to Save?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 text-base sm:text-lg font-light text-slate-300 drop-shadow-sm">
            Call now or schedule online to claim any of our current offers. No pressure — just honest pricing.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-5 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
              Schedule Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={companyInfo.phoneHref} className="group flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-white/3 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5">
              <Phone className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
