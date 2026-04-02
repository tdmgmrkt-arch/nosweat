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
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq, i) => (
        <div key={faq.question}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
          >
            <span className="font-heading text-base font-bold text-navy">{faq.question}</span>
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200", openIndex === i && "rotate-180")} />
          </button>
          <div className={cn("grid transition-all duration-200", openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
