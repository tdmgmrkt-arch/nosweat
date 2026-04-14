import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Phone,
  ArrowRight,
  Wrench,
  MapPin,
  CalendarCheck,
  Snowflake,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Explore our HVAC services, service areas, or contact our team directly.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">

      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/10 blur-[150px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Radial ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent opacity-80 pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">

          {/* Mascot badge */}
          <div className="mx-auto mb-8 sm:mb-10 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.5),_0_0_40px_rgba(220,38,38,0.2)] ring-1 ring-white/10 backdrop-blur-xl">
            <Image
              src="/images/mascot-head.png"
              alt="It's No Sweat Heat & Air mascot"
              width={56}
              height={56}
              className="h-12 sm:h-14 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>

          {/* Luminous "404" label */}
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand-red drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            Error 404 — Page Not Found
          </p>

          {/* Giant 404 number */}
          <h1 className="mt-4 sm:mt-6 font-heading text-[96px] sm:text-[160px] lg:text-[200px] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-500 drop-shadow-2xl">
            404
          </h1>

          {/* Accent line */}
          <div className="mx-auto mt-4 sm:mt-6 h-1.5 w-16 sm:w-20 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />

          {/* Heading + body */}
          <h2 className="mt-6 sm:mt-8 font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-xl">
            Looks like this page cooled off permanently.
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg font-light leading-relaxed text-slate-400 drop-shadow-sm">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Don&apos;t sweat it — we&apos;ll help you find what you need.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
            >
              <Home className="h-4 w-4 sm:h-5 sm:w-5" /> Back to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={companyInfo.phoneHref}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-gradient-to-b from-red-500 to-brand-red px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 drop-shadow-md" />
              <span className="drop-shadow-md">{companyInfo.phone}</span>
            </a>
          </div>

          {/* Divider */}
          <div className="mx-auto my-10 sm:my-14 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Popular links */}
          <p className="mb-5 sm:mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Popular Pages
          </p>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/service/", label: "All Services", icon: Wrench },
              { href: "/service-areas/", label: "Service Areas", icon: MapPin },
              { href: "/service/special-offer/", label: "Current Offers", icon: Snowflake },
              { href: "/contact-us/", label: "Schedule Service", icon: CalendarCheck },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] px-4 sm:px-5 py-3.5 sm:py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] hover:ring-brand-blue/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] ring-1 ring-white/10 transition-all group-hover:bg-brand-blue/20 group-hover:ring-brand-blue/30">
                  <link.icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-brand-blue-light" />
                </div>
                <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
                  {link.label}
                </span>
                <ArrowRight className="ml-auto h-3.5 w-3.5 text-white/10 transition-all group-hover:translate-x-1 group-hover:text-brand-blue-light" />
              </Link>
            ))}
          </div>

          {/* Subtle footer note */}
          <p className="mt-10 sm:mt-14 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-600">
            Still can&apos;t find what you need? Call us anytime — we&apos;re here to help.
          </p>
        </div>
      </section>
    </div>
  );
}
