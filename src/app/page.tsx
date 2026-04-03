import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "It's No Sweat Heat & Air | Moreno Valley HVAC & AC Repair",
  description:
    "Top-rated HVAC company in Moreno Valley. Same-day AC repair, furnace installation, maintenance plans, and indoor air quality. Licensed, insured, 25+ years experience. Call (951) 331-3310.",
  openGraph: {
    title: "It's No Sweat Heat & Air | Moreno Valley HVAC",
    description: "Top-rated HVAC company serving Moreno Valley & the Inland Empire. Same-day service, 25+ years experience.",
    images: [{ url: "/images/nosweatvan.webp", width: 1200, height: 630 }],
  },
};
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Snowflake,
  Flame,
  Wind,
  Wrench,
  Zap,
  Thermometer,
  Gauge,
  Fan,
  AirVent,
  CircuitBoard,
  CalendarCheck,
  Shield,
  Star,
  Clock,
  BadgeCheck,
  ThumbsUp,
  Ban,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";
import { ReviewCarousel } from "@/components/review-carousel";

export default function HomePage() {
  return (
    <>
     {/* ═══════════════════════════════════════════════════
         1. HERO — Aligned with new City Page architecture
         ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy">
        
        {/* Crisp background: Full opacity image + clean uniform overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/images/nosweatvan.webp" 
            alt="It's No Sweat Heat & Air service van" 
            fill 
            priority 
            className="object-cover object-[center_42%]" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
          {/* Removed the restricted max-w-2xl width to let the layout breathe */}
          <div className="max-w-3xl">
            
            {/* Trust Signals MOVED ABOVE H1 for immediate authority */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-sm font-bold tracking-wide text-white drop-shadow-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span className="text-white/90">Same-Day Service</span>
              </div>
              <span className="hidden sm:inline mx-1 text-white/50">•</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="hidden sm:inline mx-1 text-white/50">•</span>
              <span>25+ Years Experience</span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl drop-shadow-md">
              Heater &amp; AC<br />
              Repair Near{" "}
              {/* Removed the gradient text, it gets lost. Solid red is punchier. */}
              <span className="text-brand-red">Moreno Valley</span>
            </h1>

            <div className="mt-6 h-1 w-16 rounded-full bg-brand-red" />

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200 drop-shadow-sm">
              Licensed, insured, and NATE-certified. Serving Moreno Valley and the Inland Empire for over 25 years with upfront pricing and a satisfaction guarantee.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Button Hierarchy Flipped: Phone is now the Primary Red Action */}
              <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-dark hover:-translate-y-0.5 hover:scale-[1.02]">
                <Phone className="h-5 w-5" /> Call {companyInfo.phone}
              </a>
              <Link href="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10 hover:-translate-y-0.5">
                <CalendarCheck className="h-5 w-5" /> Get Free Estimate
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Separator - Kept intact, but added z-10 so it sits perfectly above the overlay */}
        <div className="absolute -bottom-px left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="block w-full" preserveAspectRatio="none">
            <path d="M0 80L0 40C360 80 720 0 1080 40C1260 60 1380 70 1440 40L1440 80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. REVIEWS — moved UP for immediate trust
         ═══════════════════════════════════════════════════ */}
      <section className="bg-white pb-20 pt-10 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-xs font-bold text-amber-700">4.9/5</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Top-Rated HVAC Company in Moreno Valley
            </h2>
            <p className="mt-2 text-sm text-slate-500">Join 1,000+ happy homeowners across Moreno Valley</p>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         3. THREE SERVICE CARDS (Upgraded Architecture)
         ═══════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Snowflake, label: "Cooling", title: "AC Repair & Service", items: ["Air Conditioning Repair", "New System Installation", "Service All Makes and Models"], href: "/service/ac-repair/", image: "/images/services/ac-repair-new.webp", accent: "text-sky-400", accentBg: "bg-sky-400" },
              { icon: Flame, label: "Heating", title: "Furnace Repair", items: ["Certified Furnace Technicians", "Heating System Replacement", "Furnace Safety Inspections"], href: "/service/furnace-repair/", image: "/images/services/furnace-repair-v3.webp", accent: "text-brand-red-light", accentBg: "bg-brand-red" },
              { icon: Wind, label: "Air Quality", title: "Air Purification", items: ["Residential Air Purification", "Air Scrubber & UV Light Systems", "Cleans 99.9% of Viruses"], href: "/service/indoor-air-quality/", image: "/images/services/iaq-hero.webp", accent: "text-emerald-400", accentBg: "bg-emerald-400" },
            ].map((card) => (
              /* Changed from <Link> to <div> for safe Ghost Link pattern */
              <div 
                key={card.href} 
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/20"
              >
                
                {/* Invisible Ghost Link over the entire card */}
                <Link href={card.href} className="absolute inset-0 z-20">
                  <span className="sr-only">Learn more about {card.title}</span>
                </Link>

                {/* Image Header */}
                <div className="relative h-48 overflow-hidden sm:h-56">
                  {/* Smoothed out the image zoom on hover */}
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-transparent" />
                  <div className={`absolute bottom-0 left-0 h-1 w-full ${card.accentBg}`} />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <card.icon className={`h-5 w-5 ${card.accent}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${card.accent}`}>{card.label}</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-extrabold text-white">{card.title}</h3>
                  
                  <ul className="mt-4 flex-1 space-y-2 relative z-10 pointer-events-none">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[15px] text-white/70">
                        {/* Slightly enlarged the bullet points for better visibility */}
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${card.accentBg}`} /> {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Standardized Footer CTA matching the City Pages */}
                  <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-white/80 transition-colors duration-300 group-hover:text-white">
                    View Service Details 
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. $79 OFFER — moved WAY up for conversion
         ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image src="/images/services/furnace-tuneup.webp" alt="" fill className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-red/20 px-3 py-1">
                <Clock className="h-3.5 w-3.5 text-brand-red" />
                <span className="text-xs font-bold text-brand-red">Limited Time — First-Time Customers</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-6xl font-extrabold text-white sm:text-7xl">$79</span>
                <div>
                  <span className="block text-sm font-bold text-white/40 line-through">$149</span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-brand-red">Save $70</span>
                </div>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Furnace Tune-Up &amp; Safety Inspection
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
                Prevent breakdowns, restore factory performance, and keep your warranty valid — all in one visit.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2.5">
                {["Heat Exchanger Inspection", "Burner Assembly Cleaning", "Ignition System Check", "Refrigerant Monitoring", "Safety Controls Test", "Air Filter Replacement"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red" /> {item}
                  </div>
                ))}
              </div>

              <Link href="/contact-us/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-base font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
                <CalendarCheck className="h-5 w-5" /> Claim $79 Tune-Up
              </Link>
            </div>

            <div className="relative hidden lg:col-span-2 lg:block">
              <div className="relative aspect-3/4 rounded-2xl shadow-2xl" style={{ overflow: "hidden" }}>
                <Image src="/images/services/furnace-tuneup.webp" alt="Furnace tune-up service" fill className="rounded-2xl object-cover" sizes="40vw" />
              </div>
              <div className="absolute -left-6 top-8 rounded-xl bg-brand-red px-5 py-3 shadow-xl">
                <p className="text-xs font-bold text-white/70">You Save</p>
                <p className="font-heading text-2xl font-extrabold text-white">$70</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. WHY CHOOSE US — comparison section (NEW)
         ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">The No Sweat Difference</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Why Homeowners Choose Us Over the Competition
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Ban, title: "No Fix, No Fee", text: "If we can't fix it, you don't pay. Period." },
              { icon: ThumbsUp, title: "100% Satisfaction", text: "We guarantee our work for 2 full years." },
              { icon: Clock, title: "Same-Day Service", text: "Emergency? We respond within the hour." },
              { icon: BadgeCheck, title: "Licensed & Insured", text: "NATE-certified, background-checked team." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-brand-blue/30 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-extrabold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. SERVICES — asymmetric layout
         ═══════════════════════════════════════════════════ */}
      <section className="relative bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <div className="relative aspect-3/4 rounded-2xl shadow-2xl" style={{ overflow: "hidden" }}>
                <Image src="/images/fullservice.webp" alt="Full-service HVAC technician" fill className="rounded-2xl object-cover object-bottom" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className="stat-badge stat-badge--primary -bottom-5 -right-4 lg:-right-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Star className="h-5 w-5 fill-white text-white" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold leading-none">4.9<span className="text-sm font-bold opacity-70">/5</span></p>
                  <p className="text-[11px] font-semibold opacity-70">Google Rating</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">What We Do</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">Full-Service HVAC Experts</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                From emergency repairs to complete system installations, our certified team handles every aspect of residential and commercial HVAC.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Snowflake, title: "Air Conditioning", text: "Expert AC repair and installation to keep you cool.", href: "/service/ac-repair/" },
                  { icon: Flame, title: "Furnace & Heating", text: "Certified furnace repair, installation, and inspections.", href: "/service/furnace-repair/" },
                  { icon: Wrench, title: "HVAC Maintenance", text: "Preventive tune-ups that save money and extend life.", href: "/service/hvac-maintenance/" },
                  { icon: Wind, title: "Indoor Air Quality", text: "Air purification for cleaner, healthier indoor air.", href: "/service/indoor-air-quality/" },
                ].map((svc) => (
                  <Link key={svc.title} href={svc.href} className="group flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                      <svc.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-extrabold text-navy group-hover:text-brand-blue transition-colors">{svc.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{svc.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. ABOUT / BRANDS
         ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl shadow-2xl" style={{ overflow: "hidden" }}>
                <Image src="/images/ac-repair-inprogress.webp" alt="HVAC technician with homeowners" fill className="rounded-2xl object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="stat-badge stat-badge--neutral -bottom-5 -right-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10">
                  <Shield className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold leading-none text-navy">25+</p>
                  <p className="text-[11px] font-semibold text-slate-500">Years Experience</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">About Us</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">We Service All Makes &amp; Models</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                With over 25 years of experience, our NATE-certified technicians deliver honest, high-quality HVAC service. From emergency repairs to complete system replacements — we handle it all with upfront pricing and a satisfaction guarantee.
              </p>
              <div className="mt-8 flex gap-8">
                {[
                  { stat: "5K+", label: "Repairs & Installs" },
                  { stat: "1K+", label: "Happy Customers" },
                  { stat: "4.9", label: "Google Rating" },
                ].map((item, i) => (
                  <div key={item.stat} className={i > 0 ? "border-l border-slate-200 pl-8" : ""}>
                    <p className="font-heading text-3xl font-extrabold text-brand-blue">{item.stat}</p>
                    <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
                <div className="brand-ticker flex w-max gap-12">
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex shrink-0 items-center gap-12" aria-hidden={setIndex > 0}>
                      {[
                        { src: "/images/brands/goodman.webp", alt: "Goodman" },
                        { src: "/images/brands/york.webp", alt: "York" },
                        { src: "/images/brands/rheem.webp", alt: "Rheem" },
                        { src: "/images/brands/amana.webp", alt: "Amana" },
                        { src: "/images/brands/carrier.webp", alt: "Carrier" },
                        { src: "/images/brands/lennox.webp", alt: "Lennox" },
                        { src: "/images/brands/trane.webp", alt: "Trane" },
                        { src: "/images/brands/bryant.webp", alt: "Bryant" },
                      ].map((brand) => (
                        <Image key={`${setIndex}-${brand.alt}`} src={brand.src} alt={brand.alt} width={100} height={40} className="h-8 w-auto object-contain sm:h-10" />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. HVAC PARTS — compact strip
         ═══════════════════════════════════════════════════ */}
      <section className="bg-navy py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-center font-heading text-xl font-extrabold text-white sm:text-2xl">
            We Repair Every Part of Your HVAC System
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {[
              { icon: Zap, title: "Compressor" },
              { icon: AirVent, title: "Evaporator" },
              { icon: Fan, title: "Condenser" },
              { icon: Gauge, title: "Refrigerant" },
              { icon: CircuitBoard, title: "Air Handler" },
              { icon: Thermometer, title: "Thermostat" },
            ].map((part) => (
              <div key={part.title} className="flex flex-col items-center rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                <part.icon className="mb-1.5 h-6 w-6 text-brand-blue-light" />
                <span className="text-xs font-bold text-white">{part.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects section removed — kept locally for future reimplementation */}

      {/* ═══════════════════════════════════════════════════
          10. CTA — final push before footer
         ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-blue py-16 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ac-repair-inprogress.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue/90 via-brand-blue to-brand-blue-dark" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Image src="/images/mascot-head.png" alt="" width={64} height={64} className="mx-auto mb-4 h-16 w-auto drop-shadow-lg" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Don&apos;t Wait — We&apos;re Available Now</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Need HVAC Help Today?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg font-semibold text-white/80">
            Get your same-day estimate now — no pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-blue shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5">
              Get Free Same-Day Estimate <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-3 rounded-xl bg-brand-red px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
              <Phone className="h-5 w-5" /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
