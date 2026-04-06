"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        
        return (
          <div 
            key={faq.question}
            className={cn(
              "overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300",
              isOpen ? "bg-white/[0.05] ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]" : "hover:bg-white/[0.04]"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={cn(
                "font-heading text-lg font-extrabold transition-colors",
                isOpen ? "text-brand-blue-light drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]" : "text-white group-hover:text-brand-blue-light"
              )}>
                {faq.question}
              </span>
              
              {/* Sleek circular indicator for the chevron */}
              <div className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                isOpen ? "bg-brand-blue/20 text-brand-blue-light ring-1 ring-brand-blue/30" : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"
              )}>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
              </div>
            </button>
            
            {/* Smooth CSS Grid expansion animation */}
            <div className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pt-2 text-[15px] font-light leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}