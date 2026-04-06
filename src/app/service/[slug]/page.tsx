import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, ShieldCheck, CheckCircle2, Star, Phone, CalendarCheck, MapPin } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { serviceAreaCities } from "@/data/cities";
import { companyInfo } from "@/data/navigation";
import { ServiceSidebar } from "@/components/layout/service-sidebar";
import { ServiceSchema } from "@/components/schema/service";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

interface ServiceRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs()
    .filter((slug) => slug !== "special-offer")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };
  return { title: svc.metaTitle, description: svc.metaDescription };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      <ServiceSchema service={svc} />
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/service/" },
        { name: svc.title, href: `/service/${svc.slug}/` },
      ]} />

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
              src={svc.heroImage} 
              alt={svc.title} 
              fill 
              priority 
              className="object-cover object-[center_40%] opacity-25 mix-blend-luminosity" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:pt-24">
          <div className="max-w-3xl">
            {/* Luminous Breadcrumbs */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-[10px] font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <Link href="/service/" className="text-slate-400 hover:text-white transition-colors">Services</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{svc.shortTitle}</span>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-xs font-bold tracking-wider text-slate-300 uppercase drop-shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>25+ Years Exp</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Licensed & Insured</span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {svc.title}
            </h1>
            <div className="mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
          </div>
        </div>
      </section>

      {/* ── TWO COLUMN LAYOUT ── */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] lg:gap-16">
            
            {/* Sidebar (You will likely need to update the internal code of <ServiceSidebar /> to match this dark theme later) */}
            <ServiceSidebar />

            {/* Main Content Area */}
            <div className="min-w-0">
              
              {/* Feature Image Frame */}
              <div className="relative mb-12 aspect-[21/9] hidden sm:block w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image src={svc.heroImage} alt={svc.title} fill priority className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:scale-105" sizes="(max-width: 1024px) 100vw, 65vw" />
                </div>
              </div>

              {/* Intro Content */}
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl tracking-tight">{svc.title}</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-400 font-light">
                <p>{svc.intro}</p>
                <p>{svc.introExtra}</p>
              </div>

              {/* INJECTED INLINE CTA (Massive Conversion Booster - Premiumized) */}
              <div className="relative my-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 p-8 sm:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-brand-blue/30 backdrop-blur-md">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-[60px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="text-center sm:text-left">
                    <h3 className="font-heading text-2xl font-extrabold text-white">Need {svc.shortTitle} Service?</h3>
                    <p className="mt-2 text-sm font-medium text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">Fast response. Upfront pricing. No surprises.</p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-4 w-full sm:w-auto">
                    <a href={companyInfo.phoneHref} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-8 py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                    <Link href="/contact-us/" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/[0.03] px-8 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5 backdrop-blur-md">
                      <CalendarCheck className="h-4 w-4 text-brand-blue-light" /> Book Online
                    </Link>
                  </div>
                </div>
              </div>

              {/* Check Subsection */}
              <div className="mt-16 grid items-center gap-10 sm:grid-cols-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image src={svc.checkImage} alt={svc.checkTitle} fill className="object-cover opacity-80 mix-blend-luminosity" sizes="(max-width: 640px) 100vw, 30vw" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-white tracking-tight">{svc.checkTitle}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-400 font-light">{svc.checkContent}</p>
                  <ul className="mt-6 space-y-4">
                    {svc.checkBullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 ring-1 ring-brand-blue/30">
                          <CheckCircle2 className="h-3 w-3 text-brand-blue-light" />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { icon: Award, title: "Award Winning", color: "text-amber-400", bg: "bg-amber-400/10", ring: "ring-amber-400/30" },
                  { icon: Users, title: "Professional Team", color: "text-brand-blue", bg: "bg-brand-blue/10", ring: "ring-brand-blue/30" },
                  { icon: ShieldCheck, title: "Licensed & Insured", color: "text-emerald-400", bg: "bg-emerald-400/10", ring: "ring-emerald-400/30" },
                ].map((badge) => (
                  <div key={badge.title} className="group flex flex-col items-center justify-center rounded-[2rem] bg-white/[0.02] px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">
                    <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${badge.bg} ${badge.ring} shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110`}>
                      <badge.icon className={`h-8 w-8 ${badge.color} drop-shadow-[0_0_8px_currentColor]`} />
                    </div>
                    <p className="text-center text-sm font-extrabold tracking-wide text-white">{badge.title}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-20 rounded-[2rem] bg-[#0F172A]/50 p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
                <h3 className="font-heading text-2xl font-extrabold text-white text-center sm:text-left tracking-tight">Benefits of Service</h3>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-red to-red-500 sm:mx-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {svc.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-4 rounded-xl bg-white/[0.02] p-5 ring-1 ring-white/10 transition-colors hover:bg-white/[0.04]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                      <span className="text-sm font-medium text-slate-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas We Serve */}
              <div className="mt-20">
                <h3 className="font-heading text-2xl font-extrabold text-white text-center sm:text-left tracking-tight">Areas We Serve</h3>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-blue to-blue-400 sm:mx-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <p className="mt-6 text-base leading-relaxed text-slate-400 font-light text-center sm:text-left">
                  We provide {svc.shortTitle.toLowerCase()} services across 30 cities in Riverside County and the Inland Empire. Click your city to see local service details.
                </p>
                <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-3">
                  {serviceAreaCities.map((area) => (
                    <Link
                      key={area.city}
                      href={area.url}
                      className="group flex items-center gap-2 rounded-full bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-brand-blue/10 hover:text-white hover:ring-brand-blue/30"
                    >
                      <MapPin className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-brand-blue-light" />
                      {area.city}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}