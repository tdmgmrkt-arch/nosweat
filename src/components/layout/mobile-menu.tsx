"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { mainNav, services, companyInfo } from "@/data/navigation";
import { cn } from "@/lib/utils";

const topCities = [
  { city: "Moreno Valley", url: "/service-areas/moreno-valley/" },
  { city: "Riverside", url: "/service-areas/riverside/" },
  { city: "Temecula", url: "/service-areas/temecula/" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-colors hover:bg-white/10 backdrop-blur-md"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#090E1A]/80 backdrop-blur-md"
              onClick={close}
            />

            {/* Drawer - Upgraded to Dark Glass */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col border-l border-white/10 bg-[#0F172A]/95 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            >
              {/* Close bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <Image src="/images/logo-main.webp" alt="It's No Sweat Heat & Air" width={120} height={40} className="h-10 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                <button
                  onClick={close}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-slate-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-2">
                  {mainNav.map((item) =>
                    item.label === "Services" ? (
                      <li key={item.label}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-heading font-extrabold text-white transition-colors hover:bg-white/[0.05]"
                        >
                          Services
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-brand-blue-light transition-transform duration-300",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="my-2 ml-4 space-y-1 border-l border-white/10 pl-4">
                                {/* "All Services" link */}
                                <li>
                                  <Link
                                    href="/service/"
                                    onClick={close}
                                    className="block rounded-lg px-4 py-2 text-sm font-bold text-brand-blue-light transition-colors hover:bg-white/[0.05] hover:text-white drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                                  >
                                    View All Services
                                  </Link>
                                </li>
                                {services.map((service) => (
                                  <li key={service.href}>
                                    <Link
                                      href={service.href}
                                      onClick={close}
                                      className="group flex items-center gap-3 rounded-lg px-4 py-2.5 text-[15px] text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                                    >
                                      <service.icon className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-brand-blue-light" />
                                      {service.label}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : item.label === "Service Areas" ? (
                      <li key={item.label}>
                        <button
                          onClick={() => setAreasOpen(!areasOpen)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-heading font-extrabold text-white transition-colors hover:bg-white/[0.05]"
                        >
                          Service Areas
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-brand-blue-light transition-transform duration-300",
                              areasOpen && "rotate-180"
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {areasOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="my-2 ml-4 space-y-1 border-l border-white/10 pl-4">
                                <li>
                                  <Link
                                    href="/service-areas/"
                                    onClick={close}
                                    className="block rounded-lg px-4 py-2 text-sm font-bold text-brand-blue-light transition-colors hover:bg-white/[0.05] hover:text-white drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                                  >
                                    View All Areas
                                  </Link>
                                </li>
                                {topCities.map((area) => (
                                  <li key={area.city}>
                                    <Link
                                      href={area.url}
                                      onClick={close}
                                      className="group flex items-center gap-3 rounded-lg px-4 py-2.5 text-[15px] text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                                    >
                                      <MapPin className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-brand-blue-light" />
                                      {area.city}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="block rounded-xl px-4 py-3.5 text-lg font-heading font-extrabold text-white transition-colors hover:bg-white/[0.05]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
              {/* Bottom CTA - Upgraded to Cinematic Buttons */}
              <div className="border-t border-white/10 bg-black/20 p-6 space-y-4">
                <Link
                  href="/contact-us/"
                  onClick={close}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-b from-red-500 to-brand-red py-4 text-base font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_0_20px_rgba(220,38,38,0.3)] ring-1 ring-brand-red/50 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                >
                  Get a Free Estimate
                </Link>
                
                {/* The Call Button - Sleek Glassmorphic Ghost Style */}
                <a
                  href={companyInfo.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.03] py-4 text-base font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08]"
                >
                  <Phone className="h-5 w-5 text-brand-blue-light drop-shadow-sm" />
                  {companyInfo.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}