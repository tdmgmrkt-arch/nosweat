import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Star, MapPin, Clock } from "lucide-react";
import { companyInfo, footerLinks } from "@/data/navigation";
import { serviceAreaCities } from "@/data/cities";
import { CtaBanner } from "./cta-banner";
import { FooterAccordion, FooterLinkList } from "./footer-accordion";
import { getLiveRating } from "@/lib/google-rating";

export async function Footer() {
  const year = new Date().getFullYear();
  const { rating, reviewCount } = await getLiveRating();

  return (
    <>
      <CtaBanner />

      <footer className="relative z-10 overflow-hidden bg-[#090E1A] border-t border-white/5 font-sans text-slate-300">
        
        {/* Ambient Footer Lighting */}
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

            {/* Column 1 — Brand + Contact */}
            <div>
              <div className="mb-6 sm:mb-8">
                <Image src="/images/logo-main.webp" alt="It's No Sweat Heat & Air" width={160} height={53} className="h-10 sm:h-12 w-auto brightness-110" />
              </div>
              <ul className="space-y-3 sm:space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.03] ring-1 ring-white/10">
                    <MapPin className="h-3.5 w-3.5 text-brand-blue-light" />
                  </div>
                  <span className="mt-0.5 leading-relaxed">{companyInfo.address}</span>
                </li>
                <li>
                  <a href={companyInfo.phoneHref} className="group flex items-center gap-3 transition-colors hover:text-white">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.03] ring-1 ring-white/10 transition-colors group-hover:bg-brand-red/10 group-hover:ring-brand-red/30">
                      <Phone className="h-3.5 w-3.5 text-brand-red transition-colors group-hover:text-brand-red-light" />
                    </div>
                    <span className="font-semibold text-slate-300 transition-colors group-hover:text-white">{companyInfo.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={companyInfo.emailHref} className="group flex items-center gap-3 transition-colors hover:text-white">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.03] ring-1 ring-white/10 transition-colors group-hover:bg-brand-blue/10 group-hover:ring-brand-blue/30">
                      <Mail className="h-3.5 w-3.5 text-brand-blue-light transition-colors group-hover:text-white" />
                    </div>
                    <span className="break-all sm:break-normal">{companyInfo.email}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.03] ring-1 ring-white/10">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <span>{companyInfo.hours}</span>
                </li>
              </ul>
            </div>

            {/* Column 2 — Quick Links (Accordion on mobile) */}
            <div>
              <FooterAccordion title="Quick Links">
                <FooterLinkList links={footerLinks.company} />
              </FooterAccordion>
            </div>

            {/* Column 3 — Services (Accordion on mobile) */}
            <div>
              <FooterAccordion title="Services">
                <FooterLinkList links={footerLinks.services} />
              </FooterAccordion>
            </div>

            {/* Column 4 — 24-Hour Emergency */}
            <div className="sm:col-span-2 lg:col-span-1">
              {/* Premium Glassmorphic Emergency Card */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0F172A]/50 p-6 sm:p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-sm transition-all hover:bg-[#151E32]/80 hover:ring-white/10">
                {/* Subtle inner glow */}
                <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-brand-red/20 blur-[30px]" />

                <Image src="/images/mascot-head.png" alt="No Sweat mascot" width={64} height={64} className="mx-auto mb-3 sm:mb-4 h-12 sm:h-16 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                <p className="font-heading text-base sm:text-lg font-extrabold text-white">24-Hour Emergency</p>
                <p className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Service Available</p>

                {/* 3D Tactile Button */}
                <a
                  href={companyInfo.phoneHref}
                  className="mt-5 sm:mt-6 flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-red-500 to-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_0_15px_rgba(220,38,38,0.2)] ring-1 ring-brand-red/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 drop-shadow-sm" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Strip */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-t border-white/5 pt-8 sm:pt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
            <a
              href={companyInfo.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-white/[0.03] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/[0.06] hover:ring-white/20"
            >
              <div className="flex items-center gap-1 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-extrabold text-white">{rating.toFixed(1)} stars · {reviewCount} reviews</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rated on Google</span>
              </div>
            </a>
            <a
              href={companyInfo.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-blue-500 to-brand-blue px-5 py-3 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(59,130,246,0.6)] ring-1 ring-brand-blue/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(59,130,246,0.8)] hover:-translate-y-0.5"
            >
              <Star className="h-4 w-4 fill-white drop-shadow-sm" />
              Leave Us a Review
            </a>
          </div>
        </div>

        {/* Service Areas (Accordion on mobile) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="border-t border-white/5 pt-8 sm:pt-10 mt-8 sm:mt-10">
            <FooterAccordion title="Service Areas">
              <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-1.5 sm:gap-y-2">
                {serviceAreaCities.map((area, i) => (
                  <span key={area.city} className="inline-flex items-center">
                    <Link href={area.url} className="text-xs sm:text-sm font-medium text-slate-400 transition-colors hover:text-brand-blue-light">
                      {area.city}
                    </Link>
                    {i < serviceAreaCities.length - 1 && (
                      <span className="ml-1.5 sm:ml-2 text-white/10">&bull;</span>
                    )}
                  </span>
                ))}
              </div>
            </FooterAccordion>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-white/5 bg-[#090E1A]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-5 sm:py-6 text-[10px] sm:text-xs text-slate-500 sm:flex-row">
            <p className="font-medium">&copy; {year} {companyInfo.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link href="/privacy-policy/" className="font-medium transition-colors hover:text-white">Privacy Policy</Link>
              <span className="text-white/10">|</span>
              <p className="font-medium flex items-center gap-1.5">
                Serving Moreno Valley, Riverside &amp; the Inland Empire
                <Star className="h-3 w-3 text-amber-500/50 fill-amber-500/50" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}