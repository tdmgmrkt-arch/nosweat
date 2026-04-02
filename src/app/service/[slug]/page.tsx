import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
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

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src={svc.heroImage} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/service/" className="hover:text-white">Services</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">{svc.shortTitle}</span>
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">{svc.title}</h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* Two-column */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr]">
            <ServiceSidebar />

            <div>
              {/* Hero image */}
              <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image src={svc.heroImage} alt={svc.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
              </div>

              <h2 className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">{svc.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{svc.intro}</p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{svc.introExtra}</p>

              {/* Check subsection */}
              <div className="mt-12 grid items-start gap-6 sm:grid-cols-2">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md">
                  <Image src={svc.checkImage} alt={svc.checkTitle} fill className="object-cover" sizes="30vw" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-navy">{svc.checkTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{svc.checkContent}</p>
                  <ul className="mt-4 space-y-2">
                    {svc.checkBullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-12 grid grid-cols-3 gap-3">
                {[
                  { icon: Award, title: "Award Winning", color: "bg-brand-blue" },
                  { icon: Users, title: "Professional Team", color: "bg-brand-red" },
                  { icon: ShieldCheck, title: "Licensed & Insured", color: "bg-navy" },
                ].map((badge) => (
                  <div key={badge.title} className={`flex flex-col items-center rounded-xl ${badge.color} px-4 py-5`}>
                    <badge.icon className="h-7 w-7 text-white/80" />
                    <p className="mt-2 text-center text-xs font-bold text-white">{badge.title}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h3 className="font-heading text-xl font-extrabold text-navy">Benefits of Service</h3>
                <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-brand-red sm:mx-0" />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {svc.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                      <span className="text-sm text-slate-700">{b}</span>
                    </div>
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
