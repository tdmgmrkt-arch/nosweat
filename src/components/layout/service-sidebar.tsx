"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronRight } from "lucide-react";
import { servicePages } from "@/data/services";
import { companyInfo } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="space-y-8">
      
      {/* ── 1. SERVICE NAV LIST (Modern SaaS-Style) ── */}
      <nav className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Lightened the header for a cleaner look */}
        <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
          <h3 className="font-heading text-sm font-extrabold uppercase tracking-widest text-navy">
            Our Services
          </h3>
        </div>
        <ul className="flex flex-col">
          {servicePages.map((svc) => {
            const href = `/service/${svc.slug}/`;
            const active = pathname === href || pathname === `/service/${svc.slug}`;
            return (
              <li key={svc.slug}>
                <Link
                  href={href}
                  className={cn(
                    "group relative flex items-center justify-between border-b border-slate-100 px-6 py-4 text-[15px] font-semibold transition-all last:border-b-0",
                    active
                      ? "bg-brand-blue/5 text-brand-blue" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
                  )}
                >
                  {/* Modern Active Indicator: A sleek vertical bar on the left */}
                  {active && (
                    <span className="absolute bottom-0 left-0 top-0 w-1 bg-brand-blue" />
                  )}
                  <span className="flex items-center gap-3">
                    <svc.icon className={cn("h-4.5 w-4.5 transition-colors", active ? "text-brand-blue" : "text-slate-400 group-hover:text-brand-blue")} />
                    {svc.shortTitle}
                  </span>
                  {/* Smoothed the arrow hover animation */}
                  <ChevronRight className={cn("h-4 w-4 transition-transform duration-300", active ? "text-brand-blue" : "text-slate-300 group-hover:translate-x-1 group-hover:text-brand-blue")} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── 2. HIGH-CONVERSION CTA CARD ── */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Image Header */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/customer-service-rep2.webp" // Updated to match the contact page
            alt="Friendly HVAC customer service representative"
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
        
        {/* Clean, Bright Body Content */}
        <div className="p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Available 24/7
          </p>
          <h3 className="mt-1 font-heading text-xl font-extrabold text-navy">
            Need Help Fast?
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
            Our team is ready to restore your comfort with same-day service.
          </p>
          
          {/* Big Red Button - Replaces the dark bottom block */}
          <a
            href={companyInfo.phoneHref}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-red/20 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
          >
            <Phone className="h-4 w-4" /> Call {companyInfo.phone}
          </a>
        </div>
      </div>

    </aside>
  );
}