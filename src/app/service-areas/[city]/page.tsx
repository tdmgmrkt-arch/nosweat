import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  AlertTriangle,
  Snowflake,
  Flame,
  Wrench,
  Wind,
  Shield,
  Star,
} from "lucide-react";
import { getCityBySlug, getAllCitySlugs, serviceAreaCities } from "@/data/cities";
import { companyInfo } from "@/data/navigation";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";
import { FaqAccordion } from "@/components/faq-accordion";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const page = getCityBySlug(slug);
  if (!page) return { title: "Service Area Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: "/images/nosweatvan.webp", width: 1200, height: 630 }],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const page = getCityBySlug(slug);
  if (!page) notFound();

  const { city, content } = page;

  const serviceBlocks = [
    { title: "AC Installation", html: content.acInstallation, icon: Snowflake },
    { title: "AC Repair", html: content.acRepair, icon: Snowflake },
    { title: "Furnace Installation", html: content.furnaceInstallation, icon: Flame },
    { title: "Furnace Repair", html: content.furnaceRepair, icon: Flame },
    { title: "HVAC Maintenance", html: content.hvacMaintenance, icon: Wrench },
    { title: "Indoor Air Quality", html: content.indoorAirQuality, icon: Wind },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/service-areas/" },
        { name: `HVAC Services in ${city}`, href: `/service-areas/${slug}/` },
      ]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }} />

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/nosweatvan.webp" alt="" fill className="object-cover object-[center_42%]" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">Service Areas</span>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">{city}</span>
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            HVAC Services in {city}, CA
          </h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* ── INTRO + HERO IMAGE ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="prose max-w-xl" dangerouslySetInnerHTML={{ __html: content.intro }} />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={companyInfo.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" /> Call Now: {companyInfo.phone}
                </a>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-7 py-3.5 text-base font-bold text-navy transition-all hover:border-brand-blue hover:text-brand-blue hover:-translate-y-0.5"
                >
                  Request Service Online
                </Link>
              </div>
              <p className="mt-7 flex items-center gap-1.5 text-[13px] text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue/60" />
                Fast response. No pressure. Just honest recommendations.
              </p>
            </div>
            <div className="relative hidden aspect-4/3 rounded-2xl shadow-xl lg:block" style={{ overflow: "hidden" }}>
              <Image src="/images/ac-repair-inprogress.webp" alt={`HVAC technician servicing a home in ${city}`} fill className="rounded-2xl object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">What We Do</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Heating &amp; Air Conditioning Services in {city}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              From emergency repairs to complete system replacements, here&apos;s how we help {city} homeowners stay comfortable year-round.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceBlocks.map((svc) => (
              <div key={svc.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-xl sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <svc.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-navy">{svc.title}</h3>
                </div>
                <div
                  className="text-[15px] leading-relaxed text-slate-600 [&_a]:font-semibold [&_a]:text-brand-blue [&_a]:underline [&_a]:decoration-brand-blue/30 [&_a]:underline-offset-2 hover:[&_a]:decoration-brand-blue"
                  dangerouslySetInnerHTML={{ __html: svc.html }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RELIABLE HVAC MATTERS ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative hidden aspect-4/3 rounded-2xl shadow-xl lg:block" style={{ overflow: "hidden" }}>
              <Image src="/images/fullservice.webp" alt={`Reliable HVAC service for ${city} homes`} fill className="rounded-2xl object-cover object-[center_55%]" sizes="50vw" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Why It Matters in {city}</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                Why Reliable HVAC Matters in {city}
              </h2>
              <div className="mt-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: content.whyReliable }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA ── */}
      <section className="relative overflow-hidden bg-navy py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/emergency-service.webp" alt="" fill className="object-cover object-[center_75%]" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Don&apos;t Wait — We&apos;re Available Now</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Fast &amp; Emergency HVAC Repair in {city}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{content.emergency}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-base font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
                <Phone className="h-5 w-5" /> Call {companyInfo.phone}
              </a>
              <Link href="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10">
                <CalendarCheck className="h-5 w-5" /> Request Service Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid items-stretch lg:grid-cols-5">
              <div className="p-8 sm:p-10 lg:col-span-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">The No Sweat Difference</p>
                <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                  Why {city} Homeowners Choose Us
                </h2>
                <ul className="mt-8 space-y-4">
                  {content.whyChoose.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                      <span className="text-base text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust card — integrated */}
              <div className="flex flex-col justify-center border-t border-slate-200 bg-slate-50 p-8 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                    <Shield className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-extrabold text-navy">25+</p>
                    <p className="text-xs font-semibold text-slate-500">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-extrabold text-navy">5-Star</p>
                    <p className="text-xs font-semibold text-slate-500">Rated by Homeowners</p>
                  </div>
                </div>
                <a href={companyInfo.phoneHref} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                  <Phone className="h-4 w-4" /> Call {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON PROBLEMS ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Spot the Warning Signs</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Common HVAC Problems in {city} Homes
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Recognizing these issues early can save you hundreds in emergency repair costs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.commonProblems.map((problem) => (
              <div key={problem.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <p className="font-heading text-sm font-bold text-navy">{problem.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE CTA ── */}
      <section className="relative overflow-hidden bg-brand-blue py-20 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ac-repair-inprogress.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue/90 via-brand-blue to-brand-blue-dark" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Image src="/images/mascot-head.png" alt="" width={64} height={64} className="mx-auto mb-4 h-16 w-auto drop-shadow-lg" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Don&apos;t Wait — We&apos;re Available Now</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Schedule HVAC Service in {city}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold text-white/80">
            {content.scheduleCta}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-blue shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5">
              Get Free Same-Day Estimate <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-3 rounded-xl bg-brand-red px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
              <Phone className="h-5 w-5" /> {companyInfo.phone}
            </a>
          </div>
          <p className="mt-5 text-sm text-white/40">No pressure. Just honest recommendations from experienced technicians.</p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Got Questions?</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Frequently Asked Questions About HVAC in {city}
            </h2>
          </div>
          <FaqAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-navy py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Proudly Serving</p>
            <h2 className="mt-2 font-heading text-xl font-extrabold text-white sm:text-2xl">
              HVAC Service Areas Across the Inland Empire
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreaCities.map((area) => {
              const isCurrent = area.url === `/service-areas/${slug}/`;
              return isCurrent ? (
                <span key={area.city} className="rounded-full bg-brand-red px-4 py-1.5 text-sm font-bold text-white shadow-md">
                  {area.city}
                </span>
              ) : (
                <Link key={area.city} href={area.url} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:text-white">
                  {area.city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
