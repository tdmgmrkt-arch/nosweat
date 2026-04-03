import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { companyInfo } from "@/data/navigation";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Request HVAC Service",
  description:
    "Schedule HVAC service, request a free estimate, or reach our team for emergency repair. Fill out our service request form or call us directly.",
  openGraph: {
    images: [{ url: "/images/contact-hero.webp", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO BANNER (Aligned with new site standards) ── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src="/images/contact-hero.webp" alt="Contact It's No Sweat Heat & Air" fill priority className="object-cover object-[center_40%]" sizes="100vw" />
          {/* Clean, single overlay */}
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            {/* Standardized Breadcrumbs */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">Contact Us</span>
            </p>
            
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
            
            <p className="mt-6 text-lg leading-relaxed text-slate-200 drop-shadow-sm sm:text-xl">
              Ready to schedule service or have a question? Reach out — we respond fast and give straight answers.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
            
            {/* LEFT — Form Container */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-10">
              <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                Request HVAC Service
              </h2>
              <p className="mt-3 text-base text-slate-500">
                Fill out the form below and a representative will reach out to you shortly to confirm your appointment or answer your questions.
              </p>
              <div className="mt-8 border-t border-slate-100 pt-8">
                <ContactForm />
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="flex flex-col gap-6">
              
              {/* 1. High-Contrast Emergency Card */}
              <div className="rounded-2xl bg-brand-red p-8 text-center shadow-lg shadow-brand-red/20">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Emergency Service
                </p>
                <p className="mt-1 font-heading text-2xl font-extrabold text-white">
                  Available 24/7
                </p>
                <a
                  href={companyInfo.phoneHref}
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-extrabold text-brand-red transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
                >
                  Call {companyInfo.phone}
                </a>
              </div>

              {/* 2. Clean Contact Info List */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-extrabold text-navy">Direct Contact</h3>
                <div className="mt-4 h-1 w-10 rounded-full bg-brand-blue/20" />
                
                <ul className="mt-8 flex flex-col gap-6">
                  <li>
                    <a href={companyInfo.phoneHref} className="group flex items-start gap-4 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
                        <span className="mt-0.5 block text-sm font-bold text-navy group-hover:text-brand-blue transition-colors">{companyInfo.phone}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={companyInfo.emailHref} className="group flex items-start gap-4 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
                        <span className="mt-0.5 block text-sm font-bold text-navy group-hover:text-brand-blue transition-colors">{companyInfo.email}</span>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Location</span>
                      <span className="mt-0.5 block text-sm font-semibold text-slate-600 leading-snug">{companyInfo.address}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">License</span>
                      <span className="mt-0.5 block text-sm font-semibold text-slate-600">{companyInfo.license}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. Friendly Customer Service */}
              <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-200">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/customer-service-rep2.webp"
                    alt="Friendly HVAC customer service representative"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                </div>
                <div className="bg-navy p-7 text-center">
                  <h3 className="font-heading text-lg font-extrabold text-white">
                    Here to Help
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    Our friendly team is here to give you tailored support, ensuring your home&apos;s comfort and safety.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}