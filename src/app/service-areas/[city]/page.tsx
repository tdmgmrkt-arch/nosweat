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

  const firstPClose = content.intro.indexOf("</p>");
  const introFirst = firstPClose !== -1
    ? content.intro.slice(content.intro.indexOf("<p>") + 3, firstPClose)
    : "";
  const introRest = firstPClose !== -1
    ? content.intro.slice(firstPClose + 4).trim()
    : "";

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
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
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

      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── HERO BANNER ── */}
      <section className="relative z-10 overflow-hidden pt-24 pb-20 sm:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 z-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          >
            <Image 
              src="/images/cityslugpagehero.webp" 
              alt={getAltText("hero", city)} 
              fill 
              priority
              className="object-cover object-[center_42%] opacity-30 mix-blend-screen" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:pt-24">
          <div className="max-w-4xl"> 
            
            {/* Luminous Breadcrumbs */}
            <div className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-[10px] font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <Link href="/service-areas/" className="text-slate-400 hover:text-white transition-colors">Service Areas</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{city}</span>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-xs font-bold tracking-wider text-slate-300 uppercase drop-shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>25+ Years Experience</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Licensed & Insured</span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl">
              {page.heading}
            </h1>
            
            <div className="mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            
            <p className="mt-8 text-xl font-extrabold text-white drop-shadow-md">
              {hero.tagline}
            </p>
            
            {introFirst && (
              <p className="mt-4 text-lg leading-relaxed text-slate-300 font-light drop-shadow-sm">
                {introFirst}
              </p>
            )}
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-red-500 to-brand-red px-8 py-4 text-base font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                <Phone className="h-5 w-5 drop-shadow-md" /> Call {companyInfo.phone}
              </a>
              <Link href="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/[0.03] px-8 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5 backdrop-blur-md">
                <CalendarCheck className="h-5 w-5 text-brand-blue-light" /> Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (Glass Strip) ── */}
      <section className="relative z-10 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4">
            {[
              { icon: Star, label: "4.9-Star Rated", sub: "Local HVAC Company", iconClass: "text-amber-400" },
              { icon: Shield, label: "Licensed & Insured", sub: "CA State Certified", iconClass: "text-brand-blue-light" },
              { icon: Clock, label: "Same-Day Service", sub: `Available in ${city}`, iconClass: "text-brand-blue-light" },
              { icon: BadgeCheck, label: "20+ Years Experience", sub: "Inland Empire", iconClass: "text-brand-blue-light" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10">
                  <item.icon className={`h-5 w-5 shrink-0 ${item.iconClass} drop-shadow-[0_0_8px_currentColor]`} />
                </div>
                <div>
                  <p className="text-sm font-extrabold leading-tight text-white">{item.label}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="relative z-10 py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-[2rem] border border-white/5 bg-[#0F172A]/50 px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
            <span className="absolute -top-4 left-6 font-heading text-7xl leading-none text-brand-blue/20 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">&ldquo;</span>
            <figure className="relative z-10 flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-xl font-extrabold text-brand-blue ring-1 ring-brand-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {testimonial.attribution.charAt(0)}
              </div>
              <div className="pt-1">
                <div className="mb-3 flex justify-center sm:justify-start gap-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg leading-relaxed text-slate-300 font-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                  — {testimonial.attribution}
                </figcaption>
              </div>
            </figure>
          </div>
          <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-widest text-slate-500">
            No pressure. No upsells. Just honest HVAC service.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">What We Do</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Heating &amp; Air Conditioning Services in {city}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400 font-light">
              From emergency repairs to complete system replacements, here&apos;s how we help {city} homeowners stay comfortable year-round.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceBlocks.map((svc) => {
              const leadIn = leadIns[svc.title]?.[heroVariation] ?? "";
              return (
                <div 
                  key={svc.title} 
                  className="group relative flex h-full flex-col rounded-[2rem] border border-white/5 bg-[#0F172A]/80 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-[#151E32] hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  <Link href={svc.href} className="absolute inset-0 z-10">
                    <span className="sr-only">Learn more about {svc.title}</span>
                  </Link>

                  <div className="mb-6 flex items-center gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <svc.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-extrabold text-white transition-colors group-hover:text-brand-blue-light">
                      {svc.title}
                    </h3>
                  </div>

                  <div className="flex-1 relative z-20 pointer-events-none"> 
                    {leadIn && (
                      <p className="mb-4 text-[15px] font-bold leading-relaxed text-slate-300">
                        {leadIn}
                      </p>
                    )}
                    <div
                      className="prose prose-invert prose-sm max-w-none line-clamp-3 lg:line-clamp-4 prose-p:leading-relaxed prose-p:text-slate-400 prose-p:font-light"
                      dangerouslySetInnerHTML={{ __html: svc.html }}
                    />
                  </div>

                  <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm font-bold text-slate-400 transition-colors group-hover:text-white">
                    View Service Details 
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="relative z-10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue/20 to-[#0F172A] p-8 sm:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-brand-blue/30 backdrop-blur-md">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="font-heading text-2xl font-extrabold text-white sm:text-3xl">{cta.midHeading}</p>
                <p className="mt-2 text-sm font-medium text-brand-blue-light drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">{cta.midSub}</p>
              </div>
              <div className="flex shrink-0 flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href={companyInfo.phoneHref} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-8 py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" /> {cta.buttonPrimary}
                </a>
                <Link href="/contact-us/" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-8 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5 backdrop-blur-md">
                  <CalendarCheck className="h-4 w-4 text-brand-blue-light" /> {cta.buttonSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY RELIABLE HVAC MATTERS ── */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            <div className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10 lg:block">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image src="/images/fullservice.webp" alt={getAltText("reliable", city)} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="50vw" />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">Why It Matters in {city}</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                Why Reliable HVAC Matters in {city}
              </h2>
              
              {introRest && (
                <div 
                  className="mt-6 prose prose-invert max-w-none prose-p:font-light prose-p:text-slate-400 prose-p:leading-relaxed prose-a:font-semibold prose-a:text-brand-blue-light prose-a:no-underline hover:prose-a:text-brand-blue" 
                  dangerouslySetInnerHTML={{ __html: introRest }} 
                />
              )}
              <div 
                className="mt-6 prose prose-invert max-w-none prose-p:font-light prose-p:text-slate-400 prose-p:leading-relaxed prose-a:font-semibold prose-a:text-brand-blue-light prose-a:no-underline hover:prose-a:text-brand-blue" 
                dangerouslySetInnerHTML={{ __html: content.whyReliable }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA ── */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-red/30 bg-gradient-to-br from-red-950/60 to-[#0F172A] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(220,38,38,0.2)] ring-1 ring-brand-red/20 backdrop-blur-md sm:p-16">
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-red/20 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red-light drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">Don&apos;t Wait — We&apos;re Available Now</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                Fast &amp; Emergency HVAC Repair in {city}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300 font-light drop-shadow-md">{content.emergency}</p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:bg-brand-red-dark hover:-translate-y-0.5 hover:scale-[1.02]">
                  <Phone className="h-5 w-5" /> Call {companyInfo.phone}
                </a>
                <Link href="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.05] px-8 py-4 text-base font-bold text-white ring-1 ring-white/20 transition-all hover:bg-white/[0.1] hover:ring-white/30 backdrop-blur-md">
                  <CalendarCheck className="h-5 w-5 text-brand-red-light" /> Request Service Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">The No Sweat Difference</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Why Homeowners in {city} Choose Us
            </h2>
          </div>

          {/* Stats Bar */}
          <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Clock, value: "Same Day", label: "Response Time", color: "text-brand-blue" },
              { icon: BadgeCheck, value: "25+", label: "Years Experience", color: "text-brand-blue" },
              { icon: Star, value: "4.9★", label: "Customer Rating", color: "text-amber-400" },
              { icon: Shield, value: "100%", label: "Licensed & Insured", color: "text-emerald-400" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <stat.icon className={`h-6 w-6 ${stat.color} drop-shadow-[0_0_8px_currentColor]`} />
                </div>
                <p className="font-heading text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Bullet points + brand ticker (Glass Panel) */}
            <div className="rounded-[2.5rem] border border-white/5 bg-[#0F172A]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden flex flex-col">
              <div className="p-8 sm:p-10 flex-1">
                <ul className="space-y-5">
                  {content.whyChoose.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 ring-1 ring-brand-blue/30">
                        <CheckCircle2 className="h-4 w-4 text-brand-blue-light" />
                      </div>
                      <span className="text-[15px] font-light leading-relaxed text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 bg-white/[0.02] px-8 py-8">
                <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-widest text-slate-500">Brands We Service</p>
                <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                  <div className="brand-ticker flex w-max gap-12">
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex shrink-0 items-center gap-12" aria-hidden={setIndex > 0}>
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
                          <Image key={`${setIndex}-${brand.alt}`} src={brand.src} alt={brand.alt} width={80} height={32} className="h-8 w-auto object-contain opacity-80" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Side CTA Card */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-[#0F172A]/80 p-8 sm:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/10 backdrop-blur-md">
              <div>
                <Image src="/images/mascot-head.png" alt={getAltText("mascot", city)} width={56} height={56} className="mb-6 h-14 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-light">Ready to get started?</p>
                <p className="mt-3 font-heading text-3xl font-extrabold text-white tracking-tight">
                  Get reliable HVAC service in {city} today.
                </p>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-slate-400">
                  Same-day appointments available. No surprise pricing. Just honest work from experienced technicians.
                </p>
                
                <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-[1.5rem] bg-white/[0.02] ring-1 ring-white/10 p-1.5 shadow-inner">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image src="/images/team-engaged.webp" alt={getAltText("team", city)} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 30vw" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <a href={companyInfo.phoneHref} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-6 py-4 text-base font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                  <Phone className="h-5 w-5 drop-shadow-md" /> Call {companyInfo.phone}
                </a>
                <Link href="/contact-us/" className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-6 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5 backdrop-blur-md">
                  <CalendarCheck className="h-4 w-4 text-brand-blue-light" /> Schedule Service Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON PROBLEMS (Dark Red Alert Cards) ── */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">Spot the Warning Signs</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Common HVAC Problems in {city} Homes
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400 font-light">
              Recognizing these issues early can save you hundreds in emergency repair costs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.commonProblems.map((problem) => (
              <div key={problem.title} className="group flex items-start gap-4 rounded-2xl border-l-2 border-l-brand-red/50 bg-[#0F172A]/80 px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-l-brand-red hover:bg-[#151E32]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 ring-1 ring-brand-red/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110">
                  <AlertTriangle className="h-5 w-5 text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                </div>
                <div>
                  <p className="font-heading text-lg font-extrabold text-white">{problem.title}</p>
                  <p className="mt-2 text-[15px] font-light leading-relaxed text-slate-400">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE CTA (Cinematic Radial Gradient) ── */}
      <section className="relative z-10 overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
            <Image src="/images/mascot-head.png" alt={getAltText("mascot", city)} width={48} height={48} className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>
          
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Don&apos;t Wait — We&apos;re Available Now</p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
            Schedule HVAC Service in {city}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-slate-300 drop-shadow-sm">
            {content.scheduleCta}
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
              <CalendarCheck className="h-5 w-5" /> Get Free Same-Day Estimate
            </Link>
            <a href={companyInfo.phoneHref} className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-red-500 to-brand-red px-8 py-4 text-base font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
              <Phone className="h-5 w-5 drop-shadow-md" /> <span className="drop-shadow-md">{companyInfo.phone}</span>
            </a>
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">No pressure. Just honest recommendations from experienced technicians.</p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="relative z-10 py-16 lg:py-24">
        {/* Subtle separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Got Questions?</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Frequently Asked Questions About HVAC in {city}
            </h2>
          </div>
          
          <div className="rounded-[2rem] border border-white/5 bg-[#0F172A]/50 p-6 sm:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-md">
            {/* Note: Ensure the <FaqAccordion /> component styling itself handles dark mode or text colors correctly if it doesn't already inherit them. */}
            <FaqAccordion faqs={content.faqs} />
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS FOOTER ── */}
      <section className="relative z-10 py-14 lg:py-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Proudly Serving</p>
            <h2 className="mt-3 font-heading text-xl font-extrabold text-white sm:text-2xl tracking-tight">
              HVAC Service Areas Across the Inland Empire
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreaCities.map((area) => {
              const isCurrent = area.url === `/service-areas/${slug}/`;
              return isCurrent ? (
                <span key={area.city} className="rounded-full bg-brand-red px-5 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] ring-1 ring-brand-red">
                  {area.city}
                </span>
              ) : (
                <Link key={area.city} href={area.url} className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 text-sm font-semibold text-slate-400 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/50 hover:bg-brand-blue/10 hover:text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  {area.city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
}