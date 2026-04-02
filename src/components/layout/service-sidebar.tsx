"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, ChevronRight } from "lucide-react";
import { servicePages } from "@/data/services";
import { companyInfo } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="space-y-6">
      {/* Service nav list */}
      <nav className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        <div className="bg-navy px-5 py-3.5">
          <p className="text-xs font-bold uppercase tracking-widest text-white/60">Our Services</p>
        </div>
        {servicePages.map((svc) => {
          const href = `/service/${svc.slug}/`;
          const active = pathname === href || pathname === `/service/${svc.slug}`;
          return (
            <Link
              key={svc.slug}
              href={href}
              className={cn(
                "group flex items-center justify-between border-b border-slate-100 px-5 py-3.5 text-sm font-semibold transition-all last:border-b-0",
                active
                  ? "bg-brand-red text-white"
                  : "text-navy hover:bg-brand-blue/5 hover:text-brand-blue hover:pl-6"
              )}
            >
              <span className="flex items-center gap-2.5">
                <svc.icon className={cn("h-4 w-4", active ? "text-white" : "text-brand-blue")} />
                {svc.shortTitle}
              </span>
              <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", active ? "text-white/70" : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-brand-blue")} />
            </Link>
          );
        })}
      </nav>

      {/* CTA card */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        {/* Image */}
        <div className="relative aspect-3/4 overflow-hidden">
          <Image
            src="/images/customer-service-rep.webp"
            alt="Friendly HVAC customer service representative"
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-lg font-extrabold leading-tight text-white">
              Available
            </p>
            <p className="text-sm text-white/70">
              for any type of HVAC Service
            </p>
            <p className="mt-2 font-heading text-2xl font-extrabold text-white">
              We can help
            </p>
            <Link
              href="/contact-us/"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-red-dark hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom — phone */}
        <div className="bg-navy px-6 py-4">
          <a
            href={companyInfo.phoneHref}
            className="flex items-center gap-3 text-white transition-colors hover:text-brand-blue-light"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Call Now</p>
              <p className="text-sm font-extrabold">{companyInfo.phone}</p>
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
}
