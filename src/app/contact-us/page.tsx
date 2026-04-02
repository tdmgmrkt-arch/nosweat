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
      {/* ── Banner ── */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/contact-hero.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">Contact Us</span>
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">Contact Us</h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* LEFT — Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                Request HVAC Service
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and a representative will reach out to you shortly.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* RIGHT — Contact info sidebar */}
            <div className="space-y-6">
              {/* Call Us Today card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-extrabold text-navy">Call Us Today</h3>

                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href={companyInfo.phoneHref}
                      className="flex items-center gap-3 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
                        {companyInfo.phone}
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={companyInfo.emailHref}
                      className="flex items-center gap-3 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
                        {companyInfo.email}
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-navy">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Location</span>
                      {companyInfo.address}
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-navy">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">License</span>
                      {companyInfo.license}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Friendly Customer Service card */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/images/customer-service-rep2.webp"
                    alt="Friendly HVAC customer service representative"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                </div>
                <div className="bg-brand-blue p-6">
                  <h3 className="font-heading text-xl font-extrabold text-white">
                    Friendly<br />Customer Service
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Reach out to schedule service. Our friendly HVAC customer service team is here to give you tailored support, ensuring your home&apos;s comfort and safety.
                  </p>
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/images/emergency-service.webp"
                    alt="No Sweat Heat & Air emergency service van at night"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                </div>
                <div className="bg-navy p-6 text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                    Emergency Service
                  </p>
                  <p className="mt-1 font-heading text-lg font-extrabold text-white">
                    Available 24/7
                  </p>
                  <a
                    href={companyInfo.phoneHref}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-base font-extrabold text-white transition-colors hover:bg-brand-red-dark"
                  >
                    <Phone className="h-5 w-5" />
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
