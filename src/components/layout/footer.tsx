import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo, footerLinks } from "@/data/navigation";
import { serviceAreaCities } from "@/data/cities";
import { CtaBanner } from "./cta-banner";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <CtaBanner />

      <footer className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 — Brand + Contact */}
            <div>
              <div className="mb-6">
                <Image src="/images/logo-main.webp" alt="It's No Sweat Heat & Air" width={160} height={53} className="h-12 w-auto" />
              </div>
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
                  {companyInfo.address}
                </li>
                <li>
                  <a href={companyInfo.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <Phone className="h-4 w-4 shrink-0 text-brand-blue-light" />
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={companyInfo.emailHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <Mail className="h-4 w-4 shrink-0 text-brand-blue-light" />
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-brand-blue-light" />
                  {companyInfo.hours}
                </li>
              </ul>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Services</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — 24-Hour Emergency */}
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <Image src="/images/mascot-head.png" alt="No Sweat mascot" width={56} height={56} className="mx-auto mb-3 h-14 w-auto drop-shadow-lg" />
                <p className="font-heading text-base font-extrabold text-white">24-Hour Emergency</p>
                <p className="text-sm text-brand-blue-light">Service Available</p>
                <a
                  href={companyInfo.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="border-t border-white/10 pt-10">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Service Areas</h3>
            <div className="flex flex-wrap gap-x-1.5 gap-y-1.5">
              {serviceAreaCities.map((area, i) => (
                <span key={area.city} className="inline-flex items-center">
                  <Link href={area.url} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {area.city}
                  </Link>
                  {i < serviceAreaCities.length - 1 && (
                    <span className="ml-1.5 text-white/15">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row">
            <p>&copy; {year} {companyInfo.name}. All rights reserved.</p>
            <p>Serving Moreno Valley, Riverside &amp; the Inland Empire</p>
          </div>
        </div>
      </footer>
    </>
  );
}
