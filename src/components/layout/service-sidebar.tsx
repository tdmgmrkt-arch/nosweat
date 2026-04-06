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
      
      {/* ── 1. SERVICE NAV LIST (Premium Dark Glassmorphic) ── */}
      <nav className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#0F172A]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
        
        {/* Header Area */}
        <div className="border-b border-white/5 bg-white/[0.02] px-8 py-6">
          <h3 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
            Our Services
          </h3>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex flex-col">
          {servicePages.map((svc) => {
            const href = `/service/${svc.slug}/`;
            const active = pathname === href || pathname === `/service/${svc.slug}`;
            return (
              <li key={svc.slug}>
                <Link
                  href={href}
                  className={cn(
                    "group relative flex items-center justify-between border-b border-white/5 px-8 py-5 text-[15px] font-semibold transition-all last:border-b-0",
                    active
                      ? "bg-white/[0.04] text-white shadow-[inset_4px_0_0_#3B82F6]" 
                      : "text-slate-400 hover:bg-white/[0.02] hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-4">
                    {/* Glowing active icon or muted inactive icon */}
                    <svc.icon className={cn("h-5 w-5 transition-colors", active ? "text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "text-slate-500 group-hover:text-brand-blue-light")} />
                    <span className="tracking-wide">{svc.shortTitle}</span>
                  </span>
                  
                  {/* Subtle chevron animation */}
                  <ChevronRight className={cn("h-4 w-4 transition-transform duration-300", active ? "text-brand-blue" : "text-white/10 group-hover:translate-x-1 group-hover:text-white")} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── 2. HIGH-CONVERSION CTA CARD (Atmospheric 3D) ── */}
      <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#0F172A]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">
        
        {/* Image Header with Dark Gradient Fade */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/customer-service-rep2.webp" 
            alt="Friendly HVAC customer service representative"
            fill
            className="object-cover opacity-80 mix-blend-luminosity"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
        </div>
        
        {/* Atmospheric Body Content */}
        <div className="relative z-10 -mt-12 p-8 text-center">
          
          {/* Pulsing Emergency Indicator */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3 py-1.5 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-brand-red">Available 24/7</span>
          </div>

          <h3 className="mt-2 font-heading text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
            Need Help Fast?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">
            Our team is ready to restore your comfort with same-day service.
          </p>
          
          {/* 3D Tactile Button */}
          <a
            href={companyInfo.phoneHref}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-brand-red px-5 py-4 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/50 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_12px_25px_-6px_rgba(220,38,38,0.8)] hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 drop-shadow-md" /> 
            <span className="drop-shadow-md">Call {companyInfo.phone}</span>
          </a>
        </div>
      </div>

    </aside>
  );
}