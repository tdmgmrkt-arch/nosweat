import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | HVAC & Air Conditioning",
  description:
    "Full-service HVAC solutions: AC repair, furnace installation, maintenance plans, and indoor air quality systems.",
  openGraph: {
    images: [{ url: "/images/services/hvac-maintenance-v2.webp", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/services/hvac-maintenance-v2.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">Services</span>
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">Our Services</h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* Grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((svc) => (
              <Link
                key={svc.slug}
                href={`/service/${svc.slug}/`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={svc.heroImage} alt={svc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110">
                    <svc.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-lg font-extrabold text-navy group-hover:text-brand-blue transition-colors">{svc.title}</h2>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">{svc.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
