"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Clock, MapPin, Star, CheckCircle2, ShieldCheck, Tag, ArrowRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { mainNav, services, companyInfo } from "@/data/navigation";
import { serviceAreaCities } from "@/data/cities";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeAll = () => {
    setMegaOpen(false);
    setAreasOpen(false);
  };

  return (
    <header 
      onMouseLeave={closeAll}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500",
        scrolled 
          ? "bg-[#090E1A]/85 backdrop-blur-md border-b border-white/[0.04]" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      {/* ── MAIN HEADER BAR ── */}
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="shrink-0 transition-transform hover:scale-[1.02]">
          <Image
            src="/images/logo-main.webp"
            alt="It's No Sweat Heat & Air"
            width={180}
            height={59}
            className="h-14 w-auto sm:h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            priority
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden h-full items-center gap-2 lg:flex">
          {mainNav.map((item) => {
            
            if (item.label === "Services") {
              return (
                <div key={item.label} className="flex h-full items-center px-3" onMouseEnter={() => { setMegaOpen(true); setAreasOpen(false); }}>
                  <Link href={item.href} className={cn("flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300", megaOpen || isActive("/service/") ? "bg-white/[0.05] text-white ring-1 ring-white/10" : "text-slate-300 hover:text-white")}>
                    Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", megaOpen && "rotate-180 text-brand-blue")} />
                  </Link>
                </div>
              );
            }

            if (item.label === "Service Areas") {
              return (
                <div key={item.label} className="flex h-full items-center px-3" onMouseEnter={() => { setAreasOpen(true); setMegaOpen(false); }}>
                  <Link href={item.href} className={cn("flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300", areasOpen || isActive("/service-areas/") ? "bg-white/[0.05] text-white ring-1 ring-white/10" : "text-slate-300 hover:text-white")}>
                    Service Areas <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", areasOpen && "rotate-180 text-brand-blue")} />
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="flex h-full items-center px-3" onMouseEnter={closeAll}>
                <Link href={item.href} className={cn("rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300", isActive(item.href) ? "bg-white/[0.05] text-white ring-1 ring-white/10" : "text-slate-300 hover:text-white")}>
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={companyInfo.phoneHref} className="group flex items-center gap-2 rounded-xl bg-white/[0.03] px-5 py-2.5 text-sm font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Phone className="h-4 w-4 text-brand-red transition-colors group-hover:text-brand-red-light" /> {companyInfo.phone}
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          MEGA MENU 1: SERVICES (Premium Glassmorphic)
          ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full overflow-hidden border-t border-white/10 bg-[#090E1A]/95 backdrop-blur-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-40 left-[20%] h-80 w-80 rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none" />
            <div className="absolute -top-40 right-[10%] h-80 w-80 rounded-full bg-brand-red/5 blur-[80px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl">
              <div className="grid grid-cols-[280px_1fr_300px]">
                
                {/* Column 1: Business Info (Structured Framed Panel) */}
                <div className="flex flex-col bg-white/[0.02] border-r border-white/5 p-10 shadow-[inset_-1px_0_0_rgba(255,255,255,0.02)]">
                  <p className="text-sm font-extrabold text-white">{companyInfo.name}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{companyInfo.license}</p>

                  <div className="mt-6 border-t border-white/5 pt-6">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Business Hours</p>
                    <div className="space-y-2.5 text-xs text-slate-400">
                      <div className="flex justify-between items-center"><span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-slate-500" /> Mon – Fri</span><span className="font-bold text-slate-200">8AM – 6PM</span></div>
                      <div className="flex justify-between items-center"><span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-slate-500" /> Sat – Sun</span><span className="font-bold text-slate-200">8AM – 2PM</span></div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span></span>
                          <span className="text-brand-red-light font-semibold">Emergency</span>
                        </span>
                        <span className="font-bold text-brand-red-light">24/7</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-6">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Why Choose Us</p>
                    <div className="space-y-2.5">
                      {[
                        { icon: CheckCircle2, text: "Same-Day Service", color: "text-brand-blue-light" },
                        { icon: Star, text: "4.9★ Customer Rating", color: "text-amber-400" },
                        { icon: ShieldCheck, text: "Licensed & Insured", color: "text-emerald-400" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2.5 text-xs text-slate-400">
                          <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/service/special-offer/" onClick={closeAll} className="mt-8 group flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3.5 text-xs font-bold text-white ring-1 ring-white/10 transition-all duration-300 hover:bg-brand-red hover:ring-brand-red hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:-translate-y-0.5">
                    <Tag className="h-4 w-4 text-brand-red transition-colors group-hover:text-white" /> View Special Offers
                  </Link>
                </div>

                {/* Column 2: The Services (Tactile Hover Cards) */}
                <div className="p-10">
                  <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Precision Solutions</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {services.filter(s => s.label !== "Special Offers").map((service) => (
                      <Link key={service.href} href={service.href} onClick={closeAll} className="group flex items-start gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-transparent hover:ring-white/10">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:ring-brand-blue">
                          <service.icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
                        </div>
                        <div className="flex flex-col justify-center pt-0.5">
                          <span className="block text-sm font-extrabold tracking-wide text-slate-200 transition-colors group-hover:text-white">{service.label}</span>
                          <span className="block mt-1 text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-slate-400">{service.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Emergency (High-Impact 3D Card) */}
                <div className="bg-white/[0.01] border-l border-white/5 p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-2 w-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">Emergency Fast Track</p>
                  </div>
                  
                  <div className="group relative aspect-[9/10] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-all duration-500 hover:ring-brand-red/50">
                    <Image src="/images/customer-service-rep.webp" alt="HVAC emergency service" fill className="object-cover opacity-70 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal" sizes="220px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-[#090E1A]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute bottom-5 left-0 right-0 text-center transform transition-transform duration-500 group-hover:-translate-y-1">
                      <p className="text-sm font-extrabold text-white drop-shadow-md">Need Help Right Now?</p>
                    </div>
                  </div>

                  {/* 3D Primary Button */}
                  <a href={companyInfo.phoneHref} onClick={closeAll} className="mt-8 relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-4 py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                    <Phone className="h-4 w-4 drop-shadow-md" /> 
                    <span className="drop-shadow-md">Call {companyInfo.phone}</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════
          MEGA MENU 2: SERVICE AREAS (Premium Glassmorphic)
          ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {areasOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full overflow-hidden border-t border-white/10 bg-[#090E1A]/95 backdrop-blur-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-40 right-[30%] h-80 w-80 rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl">
              <div className="grid grid-cols-[300px_1fr]">
                
                {/* Left Column: Summary Frame */}
                <div className="bg-white/[0.02] border-r border-white/5 p-10 shadow-[inset_-1px_0_0_rgba(255,255,255,0.02)]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10">
                      <MapPin className="h-6 w-6 text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </div>
                    <div>
                      <p className="text-lg font-heading font-extrabold text-white tracking-wide">Service Areas</p>
                      <p className="text-xs text-slate-400 mt-0.5">Inland Empire Coverage</p>
                    </div>
                  </div>

                  <div className="space-y-5 mb-10 border-t border-white/5 pt-8">
                    {[
                      { icon: CheckCircle2, text: "30+ Local Cities Served", color: "text-brand-blue" },
                      { icon: Star, text: "4.9★ Average Rating", color: "text-amber-400" },
                      { icon: Tag, text: "No Travel Fees", color: "text-emerald-400" }
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <item.icon className={`h-5 w-5 ${item.color} drop-shadow-md`} />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/service-areas/" onClick={closeAll} className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-blue-500 to-brand-blue px-4 py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(59,130,246,0.6)] ring-1 ring-brand-blue/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(59,130,246,0.8)] hover:-translate-y-0.5">
                    <MapPin className="h-4 w-4 drop-shadow-md" /> 
                    <span className="drop-shadow-md">View Interactive Map</span>
                  </Link>
                </div>

                {/* Right Column: Interactive City Grid */}
                <div className="p-10">
                  <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 drop-shadow-sm">Select Your City</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                    {serviceAreaCities.map((area) => (
                      <Link
                        key={area.city}
                        href={area.url}
                        onClick={closeAll}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-300 hover:bg-white/[0.04] ring-1 ring-transparent hover:ring-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-600 transition-colors duration-300 group-hover:text-brand-blue" />
                        <span className="text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-100">{area.city}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}