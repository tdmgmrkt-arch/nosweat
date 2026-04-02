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
  Clock,
  BadgeCheck,
} from "lucide-react";
import { getCityBySlug, getAllCitySlugs, serviceAreaCities } from "@/data/cities";
import { companyInfo } from "@/data/navigation";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";
import { FaqAccordion } from "@/components/faq-accordion";
import { getAltText } from "@/utils/getAltText";

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

const heroVariationMap: Record<string, "A" | "B" | "C" | "D"> = {
  "moreno-valley": "A", "riverside": "B", "perris": "C", "highland": "D",
  "lake-elsinore": "A", "wildomar": "B", "san-jacinto": "C", "hemet": "D",
  "mead-valley": "A", "woodcrest": "B", "nuevo": "C", "highgrove": "D",
  "sunnymead": "A", "homeland": "B", "redlands": "C", "loma-linda": "D",
  "colton": "A", "grand-terrace": "B", "san-bernardino": "C", "beaumont": "D",
  "banning": "A", "calimesa": "B", "yucaipa": "C", "mentone": "D",
  "jurupa-valley": "A", "eastvale": "B", "norco": "C", "menifee": "D",
  "murrieta": "A", "temecula": "B",
};

function getTestimonial(variation: "A" | "B" | "C" | "D", cityName: string) {
  switch (variation) {
    case "A":
      return { quote: "Fixed our AC the same day we called. Showed up on time, explained everything, and didn't try to upsell us.", attribution: `${cityName} homeowner` };
    case "B":
      return { quote: "Honest, fast, and professional. They diagnosed the problem in minutes and had it running before lunch.", attribution: "Local customer" };
    case "C":
      return { quote: "Our furnace quit on the coldest night of the year. They came out the next morning and had it fixed in one visit.", attribution: `${cityName} resident` };
    case "D":
      return { quote: "Best HVAC experience we've had. Fair pricing, clear communication, and the repair has held up perfectly.", attribution: `${cityName} homeowner` };
  }
}

function getCtaText(variation: "A" | "B" | "C" | "D", cityName: string) {
  switch (variation) {
    case "A":
      return { midHeading: `Need HVAC service in ${cityName}?`, midSub: "Get your system fixed today — fast response guaranteed.", buttonPrimary: `Call for Same-Day Service`, buttonSecondary: "Schedule Online" };
    case "B":
      return { midHeading: `Ready to fix your system in ${cityName}?`, midSub: "Talk to a real person and get a straight answer.", buttonPrimary: `Call Now — No Wait`, buttonSecondary: "Request Service" };
    case "C":
      return { midHeading: `HVAC problems in ${cityName}?`, midSub: "We respond the same day with experienced technicians.", buttonPrimary: `Get Help Today`, buttonSecondary: "Book a Visit" };
    case "D":
      return { midHeading: `Schedule HVAC service in ${cityName}`, midSub: "No pressure. Just honest recommendations and fast results.", buttonPrimary: `Call for Fast Service`, buttonSecondary: "Request Estimate" };
  }
}

function getHeroText(variation: "A" | "B" | "C" | "D", cityName: string) {
  switch (variation) {
    case "A":
      return {
        tagline: `Fast, Reliable HVAC Services in ${cityName}, CA`,
        description: `When your AC or heater stops working, you need it fixed fast — not "sometime this week." Don't wait for a full breakdown. Same-day HVAC service with experienced technicians who diagnose and fix problems quickly.`,
      };
    case "B":
      return {
        tagline: `Trusted Heating & Cooling Services in ${cityName}`,
        description: "Dealing with an HVAC issue? Every hour you wait, the problem gets more expensive. Fast, professional HVAC repairs and installations to help you stay comfortable without delays.",
      };
    case "C":
      return {
        tagline: `HVAC Repair & Installation in ${cityName}, CA`,
        description: "Whether your system stopped working or just isn't keeping up, fix it before it gets worse. Dependable HVAC services with quick response times and experienced technicians.",
      };
    case "D":
      return {
        tagline: `Local HVAC Experts Serving ${cityName}, CA`,
        description: "When your heating or cooling system isn't working right, you need a solution today — not next week. Prompt HVAC service to get reliable comfort back fast.",
      };
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const page = getCityBySlug(slug);
  if (!page) notFound();

  const { city, content } = page;
  const heroVariation = heroVariationMap[slug] ?? "A";
  const hero = getHeroText(heroVariation, city);
  const testimonial = getTestimonial(heroVariation, city);
  const cta = getCtaText(heroVariation, city);

  // Lead-in sentences: 4 variations per service, keyed by hero variation
  const leadIns: Record<string, Record<"A" | "B" | "C" | "D", string>> = {
    "AC Installation": {
      A: `Ready for a cooling system that actually fits your ${city} home? We size it right the first time.`,
      B: `Tired of an AC that can't keep up? A properly matched system changes everything.`,
      C: `What if your next AC system ran quieter, cooled better, and cost less to operate? That starts with the installation.`,
      D: `Your next air conditioner should last 15 years without drama. That outcome depends on how it's installed.`,
    },
    "AC Repair": {
      A: `AC not cooling? We diagnose and fix the problem the same day you call — most repairs in one visit.`,
      B: `When your air conditioning fails in ${city}, every hour matters. We respond fast and fix it right.`,
      C: `Strange noise? Warm air from the vents? Don't wait for a complete breakdown — call at the first sign.`,
      D: `A struggling AC system is telling you something. We find out what — and resolve it before it gets worse.`,
    },
    "Furnace Installation": {
      A: `Cold mornings in ${city} demand a furnace that delivers — not one that struggles to keep up.`,
      B: `If your heating system needs annual repairs just to survive winter, it's time for a conversation about replacement.`,
      C: `Want lower gas bills and more consistent warmth? It starts with equipment matched to your home's actual demand.`,
      D: `A new furnace should heat every room evenly and run efficiently from the first cold night. We make sure it does.`,
    },
    "Furnace Repair": {
      A: `Furnace not igniting? Shutting off mid-cycle? These symptoms escalate fast — get them checked now.`,
      B: `Heating problems in ${city} don't wait for convenient timing. Neither do we.`,
      C: `Not sure if your furnace issue is serious? Call us — we'll tell you honestly before charging anything.`,
      D: `A furnace that's acting differently than last winter is a furnace that needs professional attention.`,
    },
    "HVAC Maintenance": {
      A: `The systems that never break down on the worst day of the year? They're the ones that get maintained.`,
      B: `Skip the emergency — schedule the tune-up. It's the most cost-effective HVAC decision you'll make.`,
      C: `How much is a breakdown going to cost this summer? Maintenance is how you make sure you never find out.`,
      D: `A maintained system performs better, lasts longer, and costs less to run. There's no shortcut that matches it.`,
    },
    "Indoor Air Quality": {
      A: `If dust keeps coming back no matter how often you clean, the problem is upstream — in your HVAC system.`,
      B: `The air inside your ${city} home passes through your HVAC system dozens of times a day. Is it being cleaned?`,
      C: `Allergies worse indoors than out? Your filtration may not be catching what matters most.`,
      D: `Clean air isn't a luxury — it's what your HVAC system should be delivering on every cycle.`,
    },
  };

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
          <Image src="/images/nosweatvan.webp" alt={getAltText("hero", city)} fill className="object-cover object-[center_42%]" sizes="100vw" />
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
            {page.heading}
          </h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
          <p className="mt-4 text-lg font-semibold text-white/80">{hero.tagline}</p>
          <p className="mt-2 max-w-2xl text-base text-slate-300">{hero.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
              <Phone className="h-5 w-5" /> Call {companyInfo.phone}
            </a>
            <Link href="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10">
              Request Service Online
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
            <div className="flex items-center gap-3 py-5 pr-4 sm:justify-center sm:px-4">
              <Star className="h-5 w-5 shrink-0 fill-amber-400 text-amber-400" />
              <div>
                <p className="text-sm font-bold text-navy">4.9-Star Rated</p>
                <p className="text-xs text-slate-500">Local HVAC Company</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-5 pl-4 sm:justify-center sm:px-4">
              <Shield className="h-5 w-5 shrink-0 text-brand-blue" />
              <div>
                <p className="text-sm font-bold text-navy">Licensed &amp; Insured</p>
                <p className="text-xs text-slate-500">CA State Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-200 py-5 pr-4 sm:justify-center sm:border-t-0 sm:px-4">
              <Clock className="h-5 w-5 shrink-0 text-brand-blue" />
              <div>
                <p className="text-sm font-bold text-navy">Same-Day Service</p>
                <p className="text-xs text-slate-500">Available in {city}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-200 py-5 pl-4 sm:justify-center sm:border-t-0 sm:px-4">
              <BadgeCheck className="h-5 w-5 shrink-0 text-brand-blue" />
              <div>
                <p className="text-sm font-bold text-navy">20+ Years Experience</p>
                <p className="text-xs text-slate-500">Inland Empire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL + FRICTION REDUCER ── */}
      <section className="bg-slate-50 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <figure className="flex items-start gap-3">
              <div className="flex gap-0.5 pt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <blockquote className="text-[15px] italic leading-relaxed text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-1.5 text-xs font-semibold text-slate-400">
                  — {testimonial.attribution}
                </figcaption>
              </div>
            </figure>
          </div>
          <p className="mt-4 text-center text-xs font-medium tracking-wide text-slate-400">
            No pressure. No upsells. Just honest HVAC service.
          </p>
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
              <Image src="/images/ac-repair-inprogress.webp" alt={getAltText("tech", city)} fill className="rounded-2xl object-cover" sizes="50vw" />
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
            {serviceBlocks.map((svc) => {
              const leadIn = leadIns[svc.title]?.[heroVariation] ?? "";
              return (
                <div key={svc.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-xl sm:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <svc.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-extrabold text-navy">{svc.title}</h3>
                  </div>
                  {leadIn && (
                    <p className="mb-3 text-[15px] font-semibold leading-relaxed text-navy">{leadIn}</p>
                  )}
                  <div
                    className="text-[15px] leading-relaxed text-slate-600 [&_a]:font-semibold [&_a]:text-brand-blue [&_a]:underline [&_a]:decoration-brand-blue/30 [&_a]:underline-offset-2 hover:[&_a]:decoration-brand-blue"
                    dangerouslySetInnerHTML={{ __html: svc.html }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-navy py-10 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-heading text-xl font-extrabold text-white sm:text-2xl">{cta.midHeading}</p>
            <p className="mt-1 text-sm text-slate-400">{cta.midSub}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
              <Phone className="h-4 w-4" /> {cta.buttonPrimary}
            </a>
            <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10">
              {cta.buttonSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY RELIABLE HVAC MATTERS ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative hidden aspect-4/3 rounded-2xl shadow-xl lg:block" style={{ overflow: "hidden" }}>
              <Image src="/images/fullservice.webp" alt={getAltText("reliable", city)} fill className="rounded-2xl object-cover object-[center_55%]" sizes="50vw" />
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
          <Image src="/images/emergency-service.webp" alt={getAltText("emergency", city)} fill className="object-cover object-[center_75%]" sizes="100vw" />
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
                  Why Homeowners in {city} Choose Us
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: Clock, label: "Fast Response Times" },
                    { icon: Wrench, label: "Experienced Technicians" },
                    { icon: CheckCircle2, label: "Honest Recommendations" },
                    { icon: Shield, label: "Repairs That Last" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 rounded-lg bg-brand-blue/5 px-3 py-2.5">
                      <item.icon className="h-4 w-4 shrink-0 text-brand-blue" />
                      <span className="text-sm font-semibold text-navy">{item.label}</span>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {content.whyChoose.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                      <span className="text-[15px] text-slate-700">{point}</span>
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
          <Image src="/images/ac-repair-inprogress.webp" alt={getAltText("schedule", city)} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue/90 via-brand-blue to-brand-blue-dark" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Image src="/images/mascot-head.png" alt={getAltText("mascot", city)} width={64} height={64} className="mx-auto mb-4 h-16 w-auto drop-shadow-lg" />
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
