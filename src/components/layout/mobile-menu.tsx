"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { mainNav, services, companyInfo } from "@/data/navigation";

const topCities = [
  { city: "Moreno Valley", url: "/service-areas/moreno-valley/" },
  { city: "Riverside", url: "/service-areas/riverside/" },
  { city: "Temecula", url: "/service-areas/temecula/" },
];
import { cn } from "@/lib/utils";

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
        className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-slate-100"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={close}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col bg-white shadow-2xl"
            >
              {/* Close bar */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
                <Image src="/images/logo-main.webp" alt="It's No Sweat Heat & Air" width={120} height={40} className="h-10 w-auto" />
                <button
                  onClick={close}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-1">
                  {mainNav.map((item) =>
                    item.label === "Services" ? (
                      <li key={item.label}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-slate-50"
                        >
                          Services
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-slate-400 transition-transform duration-200",
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
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {/* "All Services" link */}
                              <li>
                                <Link
                                  href="/service/"
                                  onClick={close}
                                  className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-slate-50"
                                >
                                  View All Services
                                </Link>
                              </li>
                              {services.map((service) => (
                                <li key={service.href}>
                                  <Link
                                    href={service.href}
                                    onClick={close}
                                    className="flex items-center gap-3 rounded-lg py-2.5 pl-8 pr-3 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy"
                                  >
                                    <service.icon className="h-4 w-4 shrink-0 text-brand-blue" />
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : item.label === "Service Areas" ? (
                      <li key={item.label}>
                        <button
                          onClick={() => setAreasOpen(!areasOpen)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-slate-50"
                        >
                          Service Areas
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-slate-400 transition-transform duration-200",
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
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <li>
                                <Link
                                  href="/service-areas/"
                                  onClick={close}
                                  className="flex items-center gap-3 rounded-lg py-2 pl-8 pr-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-slate-50"
                                >
                                  <MapPin className="h-4 w-4 shrink-0" />
                                  View All Areas
                                </Link>
                              </li>
                              {topCities.map((area) => (
                                <li key={area.city}>
                                  <Link
                                    href={area.url}
                                    onClick={close}
                                    className="flex items-center gap-3 rounded-lg py-2.5 pl-8 pr-3 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy"
                                  >
                                    <MapPin className="h-4 w-4 shrink-0 text-brand-blue" />
                                    {area.city}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="block rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-slate-50"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              {/* Bottom CTA */}
              <div className="border-t border-slate-200 p-6 space-y-3">
                <Link
                  href="/contact-us/"
                  onClick={close}
                  className="flex w-full items-center justify-center rounded-lg bg-brand-orange py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={companyInfo.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-navy py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <Phone className="h-4 w-4" />
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
