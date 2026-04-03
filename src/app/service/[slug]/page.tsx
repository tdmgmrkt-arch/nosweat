import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, ShieldCheck, CheckCircle2, Star, Phone, CalendarCheck } from "lucide-react";
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
    <>
      <ServiceSchema service={svc} />
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/service/" },
        { name: svc.title, href: `/service/${svc.slug}/` },
      ]} />

      {/* ── HERO BANNER (Aligned with new standard) ── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src={svc.heroImage} alt={svc.title} fill priority className="object-cover object-[center_40%]" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <Link href="/service/" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2 text-white/50">&rsaquo;</span>
              <span className="text-white">{svc.shortTitle}</span>
            </p>

            {/* Trust Signals MOVED ABOVE H1 */}
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

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              {svc.title}
            </h1>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-brand-red" />
          </div>
        </div>
      </section>

      {/* ── TWO COLUMN LAYOUT ── */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] lg:gap-16">
            
            {/* Sidebar */}
            <ServiceSidebar />

            {/* Main Content Area */}
            <div className="min-w-0">
              
              {/* Feature Image */}
              <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-white hidden sm:block">
                <Image src={svc.heroImage} alt={svc.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
              </div>

              {/* Intro Content */}
              <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">{svc.title}</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>{svc.intro}</p>
                <p>{svc.introExtra}</p>
              </div>

              {/* INJECTED INLINE CTA (Massive Conversion Booster) */}
              <div className="my-12 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="text-center sm:text-left">
                  <h3 className="font-heading text-xl font-extrabold text-navy">Need {svc.shortTitle} Service?</h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">Fast response. Upfront pricing. No surprises.</p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row w-full sm:w-auto">
                  <a href={companyInfo.phoneHref} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-red/20 transition-all hover:bg-brand-red-dark hover:-translate-y-0.5">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <Link href="/contact-us/" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-sm font-bold text-navy transition-all hover:border-brand-blue hover:text-brand-blue">
                    <CalendarCheck className="h-4 w-4" /> Book Online
                  </Link>
                </div>
              </div>

              {/* Check Subsection */}
              <div className="mt-14 grid items-center gap-8 sm:grid-cols-2">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg border border-slate-200">
                  <Image src={svc.checkImage} alt={svc.checkTitle} fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-navy">{svc.checkTitle}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{svc.checkContent}</p>
                  <ul className="mt-5 space-y-3">
                    {svc.checkBullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Upgraded Trust Badges (Light, Premium Design) */}
              <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { icon: Award, title: "Award Winning" },
                  { icon: Users, title: "Professional Team" },
                  { icon: ShieldCheck, title: "Licensed & Insured" },
                ].map((badge) => (
                  <div key={badge.title} className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-8 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <badge.icon className="h-7 w-7" />
                    </div>
                    <p className="text-center text-[15px] font-extrabold text-navy">{badge.title}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
                <h3 className="font-heading text-2xl font-extrabold text-navy text-center sm:text-left">Benefits of Service</h3>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand-red sm:mx-0" />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {svc.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                      <span className="text-sm font-semibold text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas We Serve */}
              <div className="mt-16">
                <h3 className="font-heading text-2xl font-extrabold text-navy text-center sm:text-left">Areas We Serve</h3>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand-red sm:mx-0" />
                <p className="mt-5 text-base leading-relaxed text-slate-600 text-center sm:text-left">
                  We provide {svc.shortTitle.toLowerCase()} services across 30 cities in Riverside County and the Inland Empire. Click your city to see local service details.
                </p>
                <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2.5">
                  {serviceAreaCities.map((area) => (
                    <Link
                      key={area.city}
                      href={area.url}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/30 hover:bg-brand-blue/5 hover:text-brand-blue hover:shadow-md"
                    >
                      {area.city}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}