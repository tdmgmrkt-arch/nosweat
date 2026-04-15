import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { companyInfo } from "@/data/navigation";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us — Schedule HVAC Service",
  description:
    "Schedule HVAC service, request a free estimate, or reach our team for emergency repair. Fill out our service request form or call (951) 331-3310.",
  openGraph: {
    title: "Contact Us | It's No Sweat Heat & Air",
    description: "Schedule HVAC service, request a free estimate, or call for emergency repair. Same-day response in the Inland Empire.",
    images: [{ url: "/images/contact-hero.webp", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Contact Us", href: "/contact-us/" },
      ]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact It's No Sweat Heat & Air",
        description: "Schedule HVAC service, request a free estimate, or reach our team for emergency repair.",
        url: "https://www.itsnosweat.net/contact-us/",
        mainEntity: {
          "@type": "HVACBusiness",
          name: "It's No Sweat Heat & Air",
          telephone: "(951) 331-3310",
          email: "support@itsnosweat.net",
          url: "https://www.itsnosweat.net",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Moreno Valley",
            addressRegion: "CA",
            addressCountry: "US",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:30", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "15:00" },
          ],
        },
      }} />

      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── HERO BANNER ── */}
      <section className="relative z-10 overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-20 lg:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 z-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          >
            <Image
              src="/images/contact-hero.webp"
              alt="Contact It's No Sweat Heat & Air"
              fill
              priority
              className="object-cover object-[center_50%] opacity-25 mix-blend-luminosity"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-3xl">
            {/* Luminous Breadcrumbs */}
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Contact Us</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              Contact Us
            </h1>

            <div className="mt-5 sm:mt-8 h-1.5 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />

            <p className="mt-5 sm:mt-8 text-base sm:text-xl leading-relaxed text-slate-300 font-light drop-shadow-md">
              Ready to schedule service or have a question? Reach out — we respond fast and give straight answers.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">

            {/* LEFT — Form Container (Premium Glassmorphic) */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-white/5 bg-[#0F172A]/50 p-5 sm:p-8 md:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
              {/* Ambient inner glow */}
              <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight lg:text-4xl">
                  Request HVAC Service
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                  Fill out the form below and a representative will reach out to you shortly to confirm your appointment or answer your questions.
                </p>
                <div className="mt-6 sm:mt-10 border-t border-white/10 pt-6 sm:pt-10">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="flex flex-col gap-6 sm:gap-8">

              {/* 1. High-Contrast Emergency Card (3D Atmospheric) */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-brand-red/30 bg-gradient-to-br from-red-950/50 to-[#090E1A] p-6 sm:p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(220,38,38,0.2)] ring-1 ring-brand-red/20 backdrop-blur-md">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-red/20 blur-[50px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-brand-red/20 text-brand-red ring-1 ring-brand-red/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red-light drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
                    Emergency Service
                  </p>
                  <p className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md">
                    Available 24/7
                  </p>
                  <a
                    href={companyInfo.phoneHref}
                    className="mt-6 sm:mt-8 relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-6 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5"
                  >
                    Call {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* 2. Clean Contact Info List */}
              <div className="rounded-2xl sm:rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-md">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white">Direct Contact</h3>
                <div className="mt-3 sm:mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-blue to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                <ul className="mt-6 sm:mt-8 flex flex-col gap-5 sm:gap-6">
                  <li>
                    <a href={companyInfo.phoneHref} className="group flex items-start gap-3 sm:gap-4 transition-colors">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="pt-0.5 sm:pt-1">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone</span>
                        <span className="mt-0.5 block text-sm font-extrabold text-white group-hover:text-brand-blue-light transition-colors">{companyInfo.phone}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={companyInfo.emailHref} className="group flex items-start gap-3 sm:gap-4 transition-colors">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="pt-0.5 sm:pt-1">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</span>
                        <span className="mt-0.5 block text-sm font-extrabold text-white group-hover:text-brand-blue-light transition-colors break-all">{companyInfo.email}</span>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="pt-0.5 sm:pt-1">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Location</span>
                      <span className="mt-0.5 block text-sm font-medium text-slate-300 leading-relaxed">{companyInfo.address}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="pt-0.5 sm:pt-1">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">License</span>
                      <span className="mt-0.5 block text-sm font-medium text-slate-300">{companyInfo.license}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. Friendly Customer Service (Integrated Glass Image Card) */}
              <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/5 bg-[#0F172A]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/customer-service-rep2.webp"
                    alt="Friendly HVAC customer service representative"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
                </div>
                <div className="relative z-10 -mt-10 p-6 sm:p-8 text-center">
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white drop-shadow-md">
                    Here to Help
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-light leading-relaxed text-slate-400">
                    Our friendly team is here to give you tailored support, ensuring your home&apos;s comfort and safety.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}