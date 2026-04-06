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
  ShieldCheck,
  Ban,
  Sparkles,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";
import { ReviewCarousel } from "@/components/review-carousel";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      {/* Global Wrapper: Deep midnight base, seamless from top to bottom */}
      
      {/* GLOBAL AMBIENT LIGHTING: These glows sit behind everything to create a cohesive, non-flat canvas */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
      </div>

      {/* ═══════════════════════════════════════════════════
         1. HERO — Layered Depth & Luminous Typography
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 overflow-hidden pb-20">
        
      {/* Fixed Image Visibility with Radial CSS Masking for Flawless Blending */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 z-0"
          // This CSS mask keeps the top and sides solid, and ONLY fades the bottom 40% out smoothly.
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        >
          <Image 
            src="/images/homepagehero1.webp" 
            alt="It's No Sweat Heat & Air service van" 
            fill 
            priority 
            className="object-cover object-[center_42%] opacity-25 mix-blend-luminosity" 
            sizes="100vw" 
          />
          {/* A soft overlay to ensure white text remains perfectly readable */}
          <div className="absolute inset-0 bg-[#090E1A]/30 mix-blend-overlay" />
        </div>
        {/* Bottom fade - inside the full-width background layer, no max-w container */}
        <div className="absolute -bottom-1 left-0 right-0 h-48 bg-linear-to-t from-[#090E1A] from-20% to-transparent" />
      </div>


        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-40">
          <div className="max-w-3xl">
            
            {/* Luminous Pill Badge */}
            <div className="mb-10 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-white/5 bg-white/[0.03] px-5 py-2.5 text-xs font-bold tracking-[0.15em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                </span>
                <span className="text-white/95 uppercase">Same-Day Dispatch</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-white/20"></div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300 uppercase">25+ Yrs Exp</span>
              </div>
            </div>

            <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl drop-shadow-2xl">
              Heater &amp; AC<br />
              Repair Near{" "}
              {/* Soft, expensive metallic gradient text */}
              <span className="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                Moreno Valley
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 font-light drop-shadow-md">
              Licensed, insured, and NATE-certified. Serving Moreno Valley for over 25 years with precision diagnostics, upfront pricing, and a <strong className="text-white font-medium">100% satisfaction guarantee.</strong>
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row items-center">
              {/* Tactile 3D Primary Button */}
              <a href={companyInfo.phoneHref} className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-red-500 to-brand-red px-8 py-4 text-base font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                <Phone className="h-5 w-5 drop-shadow-md" /> 
                <span className="drop-shadow-md">Call {companyInfo.phone}</span>
              </a>
              {/* Premium Ghost Button */}
              <Link href="/contact-us/" className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white/[0.03] px-8 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:ring-white/20 hover:-translate-y-0.5 backdrop-blur-md">
                Get Free Estimate <ArrowRight className="h-4 w-4 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </div>
            {/* ... your existing CTA buttons ... */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row items-center">
              {/* ... (Call Button) ... */}
              {/* ... (Estimate Button) ... */}
            </div>

            {/* ── NEW: Premium Trust Strip ── */}
            <div className="mt-16 sm:mt-20">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Certified & Trusted Excellence</p>
              
              {/* Removed the opacity fade and mix-blend to make it pop immediately */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                
                {/* NATE Certified Badge */}
                <div className="flex items-center gap-3 group">
                  <Shield className="h-8 w-8 text-brand-blue transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <div className="leading-none">
                    <span className="block font-heading text-xl font-extrabold text-white">NATE</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Certified Techs</span>
                  </div>
                </div>

                {/* BBB Badge */}
                <div className="flex items-center gap-3 group">
                  <BadgeCheck className="h-8 w-8 text-amber-500 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="leading-none">
                    <span className="block font-heading text-xl font-extrabold text-white">A+</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">BBB Rated</span>
                  </div>
                </div>

                {/* Licensed Badge */}
                <div className="flex items-center gap-3 group">
                  <ShieldCheck className="h-8 w-8 text-emerald-500 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <div className="leading-none">
                    <span className="block font-heading text-xl font-extrabold text-white">Licensed</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">& Fully Insured</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         2. REVIEWS — Floating Integration
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-20 mt-50 pb-20 sm:mt-16 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Trusted by 1,000+ Local Homeowners
            </h2>
          </div>
          {/* Kept wrapper dark, ensuring the inner ReviewCarousel blends perfectly */}
          <div className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         3. SERVICE CARDS — CSS Mask Fix (Zero Banding)
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">What We Do</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Precision HVAC Solutions
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Snowflake, label: "Cooling", title: "AC Repair", items: ["Fast Diagnostics", "New Installations", "All Makes & Models"], href: "/service/ac-repair/", image: "/images/services/ac-repair-new.webp", color: "from-sky-400 to-blue-600", accent: "text-sky-400" },
              { icon: Flame, label: "Heating", title: "Furnace Repair", items: ["Certified Techs", "System Replacement", "Safety Inspections"], href: "/service/furnace-repair/", image: "/images/services/furnace-repair-v3.webp", color: "from-brand-red to-orange-500", accent: "text-brand-red-light" },
              { icon: Wind, label: "Air Quality", title: "Air Purification", items: ["Whole-Home Systems", "UV Light Scrubbers", "Allergen Reduction"], href: "/service/indoor-air-quality/", image: "/images/services/iaq-hero.webp", color: "from-emerald-400 to-teal-600", accent: "text-emerald-400" },
            ].map((card) => (
              <div 
                key={card.href} 
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-[#151E32] hover:ring-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_30px_50px_-10px_rgba(0,0,0,0.7)]"
              >
                <Link href={card.href} className="absolute inset-0 z-30">
                  <span className="sr-only">Learn more about {card.title}</span>
                </Link>

                <div className={`absolute -top-[100px] left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-gradient-to-br ${card.color} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20 pointer-events-none z-0`} />

                {/* THE ULTIMATE FIX: CSS Masking */}
                <div 
                  className="absolute inset-x-0 top-0 h-[340px] z-0 pointer-events-none"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' 
                  }}
                >
                  <Image src={card.image} alt={card.title} fill className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>

                <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#090E1A]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 backdrop-blur-md z-20">
                  <card.icon className={`h-6 w-6 ${card.accent}`} />
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-8 pt-56 pointer-events-none">
                  <span className={`mb-2 text-[10px] font-bold uppercase tracking-[0.2em] ${card.accent}`}>{card.label}</span>
                  <h3 className="font-heading text-2xl font-extrabold text-white tracking-wide">{card.title}</h3>
                  
                  <ul className="mt-6 flex-1 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${card.color} shadow-[0_0_8px_currentColor]`} /> {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 text-sm font-bold text-slate-400 transition-colors duration-300 group-hover:text-white">
                    <span>Explore Service</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/10">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         4. $79 OFFER — The Heroic Glass Block
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_25px_50px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/10 backdrop-blur-2xl">
            
            {/* Ambient inner glow for the card */}
            <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-brand-red/10 blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-70" />
            
            <div className="grid items-center lg:grid-cols-2 relative z-10">
              
              <div className="p-10 sm:p-16 lg:p-20">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-1.5 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                  <span className="text-xs font-bold tracking-[0.15em] text-brand-red uppercase">First-Time Customers</span>
                </div>
                
                <div className="flex items-baseline gap-6">
                  <span className="font-heading text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tighter sm:text-8xl drop-shadow-xl">$79</span>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-slate-500 line-through decoration-slate-600 decoration-2">$149</span>
                    <span className="text-sm font-extrabold uppercase tracking-widest text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Save $70</span>
                  </div>
                </div>
                
                <h2 className="mt-6 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                  Precision Furnace Tune-Up
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300 font-light">
                  Restore factory performance, prevent surprise breakdowns, and ensure your system is perfectly safe for the winter ahead.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {["Heat Exchanger Inspection", "Burner Assembly Check", "Ignition System Test", "Refrigerant Monitoring"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/20 ring-1 ring-brand-red/30">
                        <CheckCircle2 className="h-3 w-3 text-brand-red" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <Link href="/contact-us/" className="mt-12 group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                  Claim $79 Tune-Up <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="relative h-full min-h-[400px] hidden lg:block opacity-[0.85]">
                <Image src="/images/services/furnace-tuneup.webp" alt="Furnace tune-up service" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#090E1A] via-[#090E1A]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         5. WHY CHOOSE US — Tech Dashboard Aesthetic
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              The No Sweat Guarantee
            </h2>
            <p className="mt-4 text-lg text-slate-400 font-light">We don't just fix HVAC systems; we deliver peace of mind with guarantees the competition won't touch.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Ban, title: "No Fix, No Fee", text: "If we can't repair it, you don't pay a dime. No hidden trip charges." },
              { icon: ThumbsUp, title: "2-Year Warranty", text: "We stand behind our workmanship with a 100% satisfaction guarantee." },
              { icon: Clock, title: "Same-Day Priority", text: "AC goes out in a heatwave? We dispatch technicians immediately." },
              { icon: BadgeCheck, title: "NATE-Certified", text: "Highly trained, background-checked experts in your home." },
            ].map((item) => (
              <div key={item.title} className="group flex flex-col rounded-3xl bg-[#0F172A]/50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#151E32]/80 hover:ring-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-blue/20 group-hover:text-brand-blue group-hover:ring-brand-blue/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         6. COMPREHENSIVE EXPERTISE
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image src="/images/fullservice.webp" alt="Full-service HVAC technician" fill className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-2 lg:-right-8 flex items-center gap-4 rounded-2xl bg-[#0F172A]/90 p-5 pr-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl ring-1 ring-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-brand-blue-light to-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Star className="h-5 w-5 fill-white text-white" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-white">4.9<span className="text-sm font-medium text-slate-400">/5</span></p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Google Rating</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Comprehensive HVAC Expertise
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400 font-light">
                From emergency repairs to complete system engineering, our certified team handles every aspect of your home's climate control with military precision.
              </p>
              
              <div className="mt-12 space-y-4">
                {[
                  { icon: Snowflake, title: "Air Conditioning", text: "Expert AC repair and high-efficiency installations.", href: "/service/ac-repair/" },
                  { icon: Flame, title: "Furnace & Heating", text: "Furnace repair, replacement, and safety diagnostics.", href: "/service/furnace-repair/" },
                  { icon: Wrench, title: "Preventive Maintenance", text: "Comprehensive tune-ups that extend equipment lifespan.", href: "/service/hvac-maintenance/" },
                ].map((svc) => (
                  <Link key={svc.title} href={svc.href} className="group flex items-center gap-6 rounded-2xl bg-white/[0.01] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] ring-1 ring-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_10px_20px_rgba(0,0,0,0.3)] hover:ring-white/10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:ring-brand-blue group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                      <svc.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-200 transition-colors group-hover:text-white">{svc.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{svc.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         7. BRANDS & STATS
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-last lg:order-first">
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                We Service All Major Brands
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400 font-light">
                Our technicians undergo continuous factory training to repair and install any make or model. We don't guess—we diagnose accurately and fix it right the first time.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-8">
                {[
                  { stat: "5K+", label: "Systems Fixed" },
                  { stat: "25+", label: "Years Active" },
                ].map((item, i) => (
                  <div key={item.stat} className="relative">
                    {i > 0 && <div className="absolute -left-6 top-1 bottom-1 w-px bg-white/10 hidden sm:block"></div>}
                    <p className="font-heading text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-sm">{item.stat}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 overflow-hidden border-t border-white/5 pt-8" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <div className="brand-ticker flex w-max gap-16 opacity-80">
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex shrink-0 items-center gap-16" aria-hidden={setIndex > 0}>
                      {[
                        { src: "/images/brands/goodman.webp", alt: "Goodman" },
                        { src: "/images/brands/york.webp", alt: "York" },
                        { src: "/images/brands/rheem.webp", alt: "Rheem" },
                        { src: "/images/brands/carrier.webp", alt: "Carrier" },
                        { src: "/images/brands/lennox.webp", alt: "Lennox" },
                        { src: "/images/brands/trane.webp", alt: "Trane" },
                      ].map((brand) => (
                        <Image key={`${setIndex}-${brand.alt}`} src={brand.src} alt={brand.alt} width={100} height={40} className="h-8 w-auto object-contain brightness-200 contrast-125" />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image src="/images/ac-repair-inprogress.webp" alt="HVAC technician" fill className="object-cover opacity-80 mix-blend-luminosity" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         8. FINAL CTA — Ambient Glow Up
         ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent opacity-80" />
        
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
            <Image src="/images/mascot-head.png" alt="" width={48} height={48} className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>
          
          <h2 className="font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
            Need HVAC Help Today?
          </h2>
          <p className="mx-auto mt-6 text-lg font-light text-slate-300 drop-shadow-sm">
            Get your same-day estimate now — no pressure, no obligation. Just honest pricing.
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
              Get Free Estimate <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={companyInfo.phoneHref} className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white/[0.03] px-8 py-4 text-base font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5">
              <Phone className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}