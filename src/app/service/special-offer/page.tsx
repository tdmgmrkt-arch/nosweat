import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Mail,
  CalendarCheck,
  Thermometer,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Special Offers | HVAC Deals & Promotions",
  description:
    "Current HVAC specials: FREE Nest thermostat with purchase, $2600 mini split systems, $79 furnace tune-ups, $97/month complete systems, and $179 maintenance plans.",
  openGraph: {
    images: [{ url: "/images/emergency-service.webp", width: 1200, height: 630 }],
  },
};

const specials = [
  {
    badge: "FREE",
    badgeSub: "With Purchase",
    title: "FREE Nest Pro Thermostat",
    description:
      "Buy a qualifying HVAC System and get a FREE Nest Pro programmable Thermostat. Smart temperature control that learns your schedule and saves up to 15% on energy bills.",
    image: "/images/services/hvac-maintenance.webp",
    color: "bg-brand-red",
  },
  {
    badge: "$2,600",
    badgeSub: "Installed",
    title: "Mini Split Heating and Cooling System",
    description:
      "Buy a 12,000 BTU Mini Split Heating and Cooling system for $2,600. Stay comfortable year-round with a 12,000 BTU Mini Split Heating and Cooling System for energy-efficient heating and cooling at an affordable price — perfect for your home or office.",
    image: "/images/services/ac-install.webp",
    color: "bg-brand-blue",
  },
  {
    badge: "FREE",
    badgeSub: "With Purchase",
    title: "FREE UV Light Air Purifier with Furnace or Coil Purchase",
    description:
      "Upgrade your home heating system and breathe easy — get a free UV light air purifier with every furnace or coil purchased. Eliminates 99.9% of airborne bacteria and viruses.",
    image: "/images/services/indoor-air-quality.webp",
    color: "bg-brand-red",
  },
];

const tuneUpChecklist = [
  "Includes FREE Air Filter Replacement",
  "Basic System Cleaning",
  "25-Point Safety Inspection",
  "Check & Inspect Heat Exchanger",
  "Adjust & Clean Burner Assembly",
  "Monitor Refrigerant Pressure",
];

export default function SpecialOfferPage() {
  return (
    <>
      {/* ── Banner ── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src="/images/emergency-service.webp" alt="Special HVAC offers from It's No Sweat Heat & Air" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <Link href="/service/" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">Specials</span>
            </p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">Specials</h1>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
          </div>
        </div>
      </section>

      {/* ── All Offers — 2-column grid ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* 1. FREE Nest Thermostat */}
            {specials.map((special) => (
              <div key={special.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative aspect-video">
                  <Image src={special.image} alt={special.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className={`absolute left-4 top-4 rounded-lg ${special.color} px-4 py-2 shadow-lg`}>
                    <p className="text-lg font-extrabold leading-tight text-white">{special.badge}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">{special.badgeSub}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-lg font-extrabold text-navy">{special.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">{special.description}</p>
                  <Link href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                    Claim This Offer <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}

            {/* 4. $79 Furnace Tune-Up */}
            <div className="overflow-hidden rounded-2xl bg-navy shadow-lg">
              <div className="relative aspect-video">
                <Image src="/images/services/furnace-install.webp" alt="Furnace tune-up" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute left-4 top-4 rounded-lg bg-brand-red px-4 py-2 shadow-lg">
                  <p className="text-lg font-extrabold leading-tight text-white">$79</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">$149 Value</p>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-heading text-lg font-extrabold text-white">Furnace Tune-Up &amp; Safety Check</h2>
                <ul className="mt-3 space-y-1.5">
                  {tuneUpChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                  <CalendarCheck className="h-4 w-4" /> Schedule Now
                </Link>
              </div>
            </div>

            {/* 5. $97/Month System */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative aspect-video">
                <Image src="/images/services/ac-repair-new.webp" alt="Complete HVAC system" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute left-4 top-4 rounded-lg bg-brand-blue px-4 py-2 shadow-lg">
                  <p className="text-lg font-extrabold leading-tight text-white">$97</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">Per Month - OAC*</p>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-heading text-lg font-extrabold text-navy">Complete HVAC Systems as Low as $97/Month</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Enjoy the benefits of a reliable HVAC system for as little as $97 per month with approved credit.</p>
                <Link href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-blue-dark">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 6. $179 Maintenance Plan */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative aspect-video">
                <Image src="/images/services/hvac-tune-up.webp" alt="Maintenance plan" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute left-4 top-4 rounded-lg bg-brand-red px-4 py-2 shadow-lg">
                  <p className="text-lg font-extrabold leading-tight text-white">$179</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">Maintenance Plan</p>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-heading text-lg font-extrabold text-navy">Preventative Maintenance Plan</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">2 Annual Services with Air Filter Replacement, System Cleaning, and 25-Point Safety Inspection.</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />15% off all parts for members</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />Priority scheduling — No trip charges</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />Extended equipment life</li>
                </ul>
                <Link href="/contact-us/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                  Sign Up Today <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — "Reach Out For All Your HVAC Needs" ── */}
      <section className="bg-navy py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Let&apos;s Work Together</p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Reach Out For All Your HVAC Needs
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Mon - Fri: 7:30 am – 6:00 pm", "Sat-Sun: 8:00 am – 2:00 pm", "After Hrs Plus. Emer. Fee"],
              },
              {
                icon: MapPin,
                title: "Service Areas",
                lines: ["Moreno Valley, CA", "and all surrounding cities"],
              },
              {
                icon: Phone,
                title: "Call Center",
                lines: [companyInfo.phone, "Give us a call 24/7"],
              },
              {
                icon: Mail,
                title: "Write Us",
                lines: [companyInfo.email],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue-light">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="mt-1 text-xs text-white/60">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
