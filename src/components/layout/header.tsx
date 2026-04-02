"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Clock, Mail, CalendarCheck, Tag, ArrowRight, MapPin } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { mainNav, services, companyInfo } from "@/data/navigation";

const topCities = [
  { city: "Moreno Valley", url: "/service-areas/moreno-valley/" },
  { city: "Riverside", url: "/service-areas/riverside/" },
  { city: "Temecula", url: "/service-areas/temecula/" },
];
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const areasTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMega = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const openAreas = () => {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setAreasOpen(true);
  };

  const closeAreas = () => {
    areasTimeoutRef.current = setTimeout(() => setAreasOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={cn("sticky top-0 z-30 transition-shadow duration-300", scrolled && "shadow-xl")}>
      {/* ── TOP UTILITY BAR ── */}
      <div className="hidden bg-navy text-white/70 text-xs lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-5">
            <a href={companyInfo.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3 w-3" />
              {companyInfo.phone}
            </a>
            <span className="text-white/20">|</span>
            <a href={companyInfo.emailHref} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Mail className="h-3 w-3" />
              {companyInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {companyInfo.hours}
            </span>
            <span className="text-white/20">|</span>
            <span className="font-semibold text-brand-green">
              {companyInfo.emergencyHours}
            </span>
          </div>
        </div>
      </div>

      {/* ── MIDDLE BAR: Logo | Schedule CTA | Emergency Phone ── */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-main.webp"
              alt="It's No Sweat Heat & Air"
              width={200}
              height={66}
              className="h-20 w-auto sm:h-24 -my-3"
              priority
            />
          </Link>

          {/* Center — Schedule CTA */}
          <div className="hidden md:flex lg:hidden xl:flex">
            <Link href="/contact-us/" className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 transition-all hover:border-brand-blue/30 hover:shadow-sm">
              <CalendarCheck className="h-5 w-5 text-brand-blue" />
              <div className="leading-tight">
                <span className="block text-[11px] font-medium text-slate-400">Book Now</span>
                <span className="block font-heading text-sm font-bold text-navy group-hover:text-brand-blue">Schedule Appointment</span>
              </div>
            </Link>
          </div>

          {/* Right — Emergency Phone */}
          <a
            href={companyInfo.phoneHref}
            className="group hidden items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 transition-all hover:border-brand-red/30 hover:shadow-sm sm:flex"
          >
            <Phone className="h-5 w-5 text-brand-red" />
            <div className="leading-tight">
              <span className="block text-[11px] font-medium text-slate-400">Emergency 24/7</span>
              <span className="block font-heading text-sm font-bold text-navy group-hover:text-brand-red">
                {companyInfo.phone}
              </span>
            </div>
          </a>

          {/* Mobile hamburger */}
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR ── */}
      <nav className="bg-brand-blue">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Desktop nav links */}
          <div className="hidden items-center lg:flex">
            {mainNav.map((item) =>
              item.label === "Services" ? (
                <div key={item.label} className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 border-b-3 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors",
                      isActive("/service/")
                        ? "border-white bg-white/15 text-white"
                        : "border-transparent text-white/85 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    Services
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute -left-20 top-full z-50 w-155"
                      >
                        <div className="overflow-hidden rounded-b-xl border border-t-0 border-slate-200/60 bg-white shadow-2xl shadow-navy/15">
                          {/* Cooling */}
                          <div className="px-5 pt-5 pb-4">
                            <div className="mb-3 flex items-center gap-2">
                              <div className="h-px flex-1 bg-brand-blue/15" />
                              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">Cooling</span>
                              <div className="h-px flex-1 bg-brand-blue/15" />
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {services.filter(s => s.label === "AC Repair" || s.label === "AC Installation").map((service) => (
                                <Link key={service.href} href={service.href} onClick={() => setMegaOpen(false)} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 hover:translate-x-0.5 hover:bg-brand-blue/5">
                                  <service.icon className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-brand-blue" />
                                  <div className="flex-1">
                                    <span className="flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand-blue">
                                      {service.label}
                                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                    </span>
                                    <span className="block text-[11px] leading-snug text-slate-400">{service.description}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Heating */}
                          <div className="bg-slate-50/60 px-5 py-4">
                            <div className="mb-3 flex items-center gap-2">
                              <div className="h-px flex-1 bg-brand-red/15" />
                              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-red">Heating</span>
                              <div className="h-px flex-1 bg-brand-red/15" />
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {services.filter(s => s.label.includes("Furnace")).map((service) => (
                                <Link key={service.href} href={service.href} onClick={() => setMegaOpen(false)} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 hover:translate-x-0.5 hover:bg-brand-red/5">
                                  <service.icon className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-brand-red" />
                                  <div className="flex-1">
                                    <span className="flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand-red">
                                      {service.label}
                                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                    </span>
                                    <span className="block text-[11px] leading-snug text-slate-400">{service.description}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* System Care */}
                          <div className="px-5 py-4">
                            <div className="mb-3 flex items-center gap-2">
                              <div className="h-px flex-1 bg-brand-blue/15" />
                              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">System Care</span>
                              <div className="h-px flex-1 bg-brand-blue/15" />
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {services.filter(s => s.label === "HVAC Maintenance" || s.label === "Indoor Air Quality").map((service) => (
                                <Link key={service.href} href={service.href} onClick={() => setMegaOpen(false)} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 hover:translate-x-0.5 hover:bg-brand-blue/5">
                                  <service.icon className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-brand-blue" />
                                  <div className="flex-1">
                                    <span className="flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand-blue">
                                      {service.label}
                                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                    </span>
                                    <span className="block text-[11px] leading-snug text-slate-400">{service.description}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between border-t border-white/10 bg-navy px-5 py-3.5">
                            <Link href="/service/special-offer/" onClick={() => setMegaOpen(false)} className="group inline-flex items-center gap-2 rounded-md bg-brand-red-light/20 px-3 py-1.5 text-sm font-bold text-brand-red-light transition-all hover:bg-brand-red hover:text-white">
                              <Tag className="h-3.5 w-3.5" />
                              Special Offers
                              <span className="rounded bg-brand-red/30 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-brand-red-light group-hover:bg-white/20 group-hover:text-white">Limited</span>
                            </Link>
                            <Link href="/service/" onClick={() => setMegaOpen(false)} className="text-sm font-semibold text-white/60 transition-colors hover:text-white">
                              All Services &rarr;
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.label === "Service Areas" ? (
                <div key={item.label} className="relative" onMouseEnter={openAreas} onMouseLeave={closeAreas}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 border-b-3 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors",
                      isActive("/service-areas/")
                        ? "border-white bg-white/15 text-white"
                        : "border-transparent text-white/85 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    Service Areas
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", areasOpen && "rotate-180")} />
                  </Link>

                  <AnimatePresence>
                    {areasOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full z-50 w-64"
                      >
                        <div className="overflow-hidden rounded-b-xl border border-t-0 border-slate-200/60 bg-white shadow-2xl shadow-navy/15">
                          <div className="px-3 pt-4 pb-3">
                            <div className="mb-3 flex items-center gap-2">
                              <div className="h-px flex-1 bg-brand-blue/15" />
                              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">Top Cities</span>
                              <div className="h-px flex-1 bg-brand-blue/15" />
                            </div>
                            {topCities.map((area) => (
                              <Link
                                key={area.city}
                                href={area.url}
                                onClick={() => setAreasOpen(false)}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 hover:translate-x-0.5 hover:bg-brand-blue/5"
                              >
                                <MapPin className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-brand-blue" />
                                <div className="flex-1">
                                  <span className="flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand-blue">
                                    {area.city}
                                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-white/10 bg-navy px-4 py-3">
                            <Link
                              href="/service-areas/"
                              onClick={() => setAreasOpen(false)}
                              className="flex items-center justify-between text-sm font-semibold text-white/70 transition-colors hover:text-white"
                            >
                              <span className="flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5" />
                                View All 30 Cities
                              </span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "border-b-3 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors",
                    isActive(item.href)
                      ? "border-white bg-white/15 text-white"
                      : "border-transparent text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA on nav bar — red accent */}
          <Link href="/contact-us/" className="hidden items-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-red-dark hover:shadow-md lg:inline-flex">
            Service Request
          </Link>

          {/* Tablet hamburger */}
          <div className="hidden py-3 sm:block lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
