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
import { CityServiceAreaSchema } from "@/components/schema/city-service-area";
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

function getTestimonial(variation: "A" | "B" | "C" | "D") {
  switch (variation) {
    case "A":
      return { quote: "He was honest and knowledgeable, and his prices were very reasonable. The system does a great job — my family and I feel comfortable and cool.", attribution: "Derrick F." };
    case "B":
      return { quote: "Justin quickly noticed that all that was needed was for a pipe to be unblocked and sealed. It took less than 30 min to fix. We really appreciated the integrity and honesty.", attribution: "Annette S." };
    case "C":
      return { quote: "He and his crew installed the new system in less than four hours. It works great. His prices are very reasonable, and he guarantees his work. We recommend using No Sweat.", attribution: "Mary W." };
    case "D":
      return { quote: "The entire team was highly professional, arriving on time and completing the job efficiently. The quality of their work was top-notch, and they left my home spotless.", attribution: "Darlene R." };
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
  const testimonial = getTestimonial(heroVariation);
  const cta = getCtaText(heroVariation, city);

  // Split intro: first paragraph → hero, rest → why reliable section
  const firstPClose = content.intro.indexOf("</p>");
  const introFirst = firstPClose !== -1
    ? content.intro.slice(content.intro.indexOf("<p>") + 3, firstPClose)
    : "";
  const introRest = firstPClose !== -1
    ? content.intro.slice(firstPClose + 4).trim()
    : "";

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
    { title: "AC Installation", html: content.acInstallation, icon: Snowflake, href: "/service/ac-installation/" },
    { title: "AC Repair", html: content.acRepair, icon: Snowflake, href: "/service/ac-repair/" },
    { title: "Furnace Installation", html: content.furnaceInstallation, icon: Flame, href: "/service/furnace-installation/" },
    { title: "Furnace Repair", html: content.furnaceRepair, icon: Flame, href: "/service/furnace-repair/" },
    { title: "HVAC Maintenance", html: content.hvacMaintenance, icon: Wrench, href: "/service/hvac-maintenance/" },
    { title: "Indoor Air Quality", html: content.indoorAirQuality, icon: Wind, href: "/service/indoor-air-quality/" },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/service-areas/" },
        { name: `HVAC Services in ${city}`, href: `/service-areas/${slug}/` },
      ]} />
      <CityServiceAreaSchema slug={slug} city={city} />
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
<section className="relative overflow-hidden bg-navy py-24 sm:py-28">
  {/* Background Image with a clean, uniform overlay */}
  <div className="absolute inset-0">
    <Image 
      src="/images/nosweatvan.webp" 
      alt={getAltText("hero", city)} 
      fill 
      priority
      className="object-cover object-[center_42%]" 
      sizes="100vw" 
    />
    {/* A single, clean navy overlay. No messy gradients. */}
    <div className="absolute inset-0 bg-navy/85" />
  </div>
  
  <div className="relative mx-auto max-w-7xl px-6">
    {/* Removed the restrictive box to let the layout breathe */}
    <div className="max-w-3xl"> 
      
      <p className="mb-5 text-sm font-semibold tracking-wide text-brand-red uppercase drop-shadow-sm">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="mx-2 text-white/50">&rsaquo;</span>
        <span className="text-white/70">Service Areas</span>
        <span className="mx-2 text-white/50">&rsaquo;</span>
        <span className="text-white">{city}</span>
      </p>

      {/* Trust Signals */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-sm font-bold tracking-wide text-white drop-shadow-sm">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <span className="hidden sm:inline mx-1 text-white/50">•</span>
        <span>25+ Years Experience</span>
        <span className="hidden sm:inline mx-1 text-white/50">•</span>
        <span>Licensed & Insured</span>
      </div>

      <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
        {page.heading}
      </h1>
      
      <div className="mt-6 h-1 w-16 rounded-full bg-brand-red" />
      
      <p className="mt-6 text-xl font-bold text-white drop-shadow-sm">
        {hero.tagline}
      </p>
      
      {introFirst && (
        <p className="mt-3 text-lg leading-relaxed text-slate-300 drop-shadow-sm">
          {introFirst}
        </p>
      )}
      
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-dark hover:-translate-y-0.5 hover:scale-[1.02]">
          <Phone className="h-5 w-5" /> Call {companyInfo.phone}
        </a>
        {/* Secondary button: Clean border, transparent background */}
        <Link href="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10 hover:-translate-y-0.5">
          <CalendarCheck className="h-5 w-5" /> Book Online
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white py-5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4">
            {[
              { icon: Star, label: "4.9-Star Rated", sub: "Local HVAC Company", iconClass: "fill-amber-400 text-amber-400" },
              { icon: Shield, label: "Licensed & Insured", sub: "CA State Certified", iconClass: "text-brand-blue" },
              { icon: Clock, label: "Same-Day Service", sub: `Available in ${city}`, iconClass: "text-brand-blue" },
              { icon: BadgeCheck, label: "20+ Years Experience", sub: "Inland Empire", iconClass: "text-brand-blue" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                  <item.icon className={`h-4.5 w-4.5 shrink-0 ${item.iconClass}`} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight text-navy">{item.label}</p>
                  <p className="text-[11px] text-slate-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL + FRICTION REDUCER ── */}
      <section className="bg-slate-50/50 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-5 shadow-sm">
            <span className="absolute -top-3 left-5 font-heading text-5xl leading-none text-brand-blue/15">&ldquo;</span>
            <figure className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                {testimonial.attribution.charAt(0)}
              </div>
              <div className="pt-0.5">
                <div className="mb-2 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-[15px] leading-relaxed text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs font-bold text-navy">
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

      {/* ── SERVICES ── */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">What We Do</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Heating &amp; Air Conditioning Services in {city}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              From emergency repairs to complete system replacements, here&apos;s how we help {city} homeowners stay comfortable year-round.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceBlocks.map((svc) => {
              const leadIn = leadIns[svc.title]?.[heroVariation] ?? "";
              
              return (
                /* Changed from <Link> to <div> to prevent nested link hydration errors */
                <div 
                  key={svc.title} 
                  className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
                >
                  {/* Invisible overlay link makes the whole card clickable safely */}
                  <Link href={svc.href} className="absolute inset-0 z-10">
                    <span className="sr-only">Learn more about {svc.title}</span>
                  </Link>

                  {/* Icon & Title Header */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white shadow-sm">
                      <svc.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-extrabold text-navy transition-colors group-hover:text-brand-blue">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Body Content (Flex-1 forces footer to the bottom) */}
                  <div className="flex-1 relative z-20 pointer-events-none"> 
                    {leadIn && (
                      <p className="mb-3 text-sm font-bold leading-relaxed text-slate-800">
                        {leadIn}
                      </p>
                    )}
                    {/* Added line-clamp-3 so cards stay uniform height even if text is super long */}
                    <div
                      className="text-[15px] leading-relaxed text-slate-500 line-clamp-3 lg:line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: svc.html }}
                    />
                  </div>

                  {/* Always-Visible Footer CTA */}
                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-brand-blue">
                    View Service Details 
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA (Properly Grounded) ── */}
      <section className="bg-slate-100 border-y border-slate-200 py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-heading text-xl font-extrabold text-navy sm:text-2xl">{cta.midHeading}</p>
            <p className="mt-1 text-sm font-medium text-slate-600">{cta.midSub}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-red/20 transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
              <Phone className="h-4 w-4" /> {cta.buttonPrimary}
            </a>
            {/* Darkened the border slightly here to contrast with the slate-100 background */}
            <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-sm font-bold text-navy transition-all hover:border-brand-blue hover:text-brand-blue hover:border-brand-blue/30">
              {cta.buttonSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY RELIABLE HVAC MATTERS ── */}
      <section className="bg-slate-50/50 py-16 lg:py-20">
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
              {introRest && (
                <div className="mt-4 prose prose-slate max-w-none prose-a:font-semibold prose-a:text-brand-blue prose-a:no-underline hover:prose-a:text-brand-red" dangerouslySetInnerHTML={{ __html: introRest }} />
              )}
              <div className="mt-4 prose prose-slate max-w-none prose-a:font-semibold prose-a:text-brand-blue prose-a:no-underline hover:prose-a:text-brand-red" dangerouslySetInnerHTML={{ __html: content.whyReliable }} />
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
              <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-base font-bold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5 hover:scale-[1.02]">
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
          {/* Section header */}
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">The No Sweat Difference</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Why Homeowners in {city} Choose Us
            </h2>
          </div>

          {/* Stats bar */}
          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Clock, value: "Same Day", label: "Response Time", color: "bg-brand-blue/10 text-brand-blue" },
              { icon: BadgeCheck, value: "25+", label: "Years Experience", color: "bg-brand-blue/10 text-brand-blue" },
              { icon: Star, value: "4.9★", label: "Customer Rating", color: "bg-amber-50 text-amber-500" },
              { icon: Shield, value: "100%", label: "Licensed & Insured", color: "bg-brand-blue/10 text-brand-blue" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="font-heading text-xl font-extrabold text-navy">{stat.value}</p>
                <p className="mt-0.5 text-xs font-semibold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Bullet points + brand ticker */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-8">
                <ul className="space-y-4">
                  {content.whyChoose.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                      <span className="text-[15px] leading-relaxed text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-100 px-8 py-6">
                <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-widest text-slate-400">Brands We Service</p>
                <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                  <div className="brand-ticker flex w-max gap-10">
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex shrink-0 items-center gap-10" aria-hidden={setIndex > 0}>
                        {[
                          { src: "/images/brands/goodman.webp", alt: "Goodman" },
                          { src: "/images/brands/york.webp", alt: "York" },
                          { src: "/images/brands/rheem.webp", alt: "Rheem" },
                          { src: "/images/brands/amana.webp", alt: "Amana" },
                          { src: "/images/brands/carrier.webp", alt: "Carrier" },
                          { src: "/images/brands/lennox.webp", alt: "Lennox" },
                          { src: "/images/brands/trane.webp", alt: "Trane" },
                          { src: "/images/brands/bryant.webp", alt: "Bryant" },
                        ].map((brand) => (
                          <Image key={`${setIndex}-${brand.alt}`} src={brand.src} alt={brand.alt} width={80} height={32} className="h-6 w-auto object-contain opacity-70" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-navy p-8 shadow-sm">
              <div>
                <Image src="/images/mascot-head.png" alt={getAltText("mascot", city)} width={48} height={48} className="mb-4 h-12 w-auto drop-shadow-lg" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Ready to get started?</p>
                <p className="mt-3 font-heading text-2xl font-extrabold text-white">
                  Get reliable HVAC service in {city} today.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Same-day appointments available. No surprise pricing. Just honest work from experienced technicians.
                </p>
                <div className="relative mt-5 aspect-21/9 overflow-hidden rounded-xl">
                  <Image src="/images/team-engaged.webp" alt={getAltText("team", city)} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <a href={companyInfo.phoneHref} className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-dark hover:-translate-y-0.5 hover:scale-[1.02]">
                  <Phone className="h-5 w-5" /> Call {companyInfo.phone}
                </a>
                <Link href="/contact-us/" className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-white/30 hover:bg-white/10">
                  <CalendarCheck className="h-4 w-4" /> Schedule Service Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON PROBLEMS ── */}
      <section className="bg-white py-14 lg:py-18">
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

          <div className="grid gap-4 sm:grid-cols-2">
            {content.commonProblems.map((problem) => (
              <div key={problem.title} className="flex items-start gap-3.5 rounded-xl border border-slate-200 border-l-2 border-l-brand-red/30 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-l-brand-red/50 hover:shadow-md">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-brand-red/70" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-navy">{problem.title}</p>
                  <p className="mt-1 text-[13px] leading-normal text-slate-500">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE CTA ── */}
      <section className="relative overflow-hidden bg-brand-blue py-20 sm:py-24">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/ac-repair-inprogress.webp" alt={getAltText("schedule", city)} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue/85 via-brand-blue/95 to-brand-blue-dark" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Image src="/images/mascot-head.png" alt={getAltText("mascot", city)} width={64} height={64} className="mx-auto mb-4 h-16 w-auto drop-shadow-lg" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Don&apos;t Wait — We&apos;re Available Now</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Schedule HVAC Service in {city}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg font-semibold text-white/80">
            {content.scheduleCta}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-blue shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 hover:scale-[1.02]">
              Get Free Same-Day Estimate <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-3 rounded-xl bg-brand-red px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-brand-red-dark hover:-translate-y-0.5 hover:scale-[1.02]">
              <Phone className="h-5 w-5" /> {companyInfo.phone}
            </a>
          </div>
          <p className="mt-5 text-sm text-white/40">No pressure. Just honest recommendations from experienced technicians.</p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="bg-slate-50/50 py-16 lg:py-20">
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
                <Link key={area.city} href={area.url} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white">
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
