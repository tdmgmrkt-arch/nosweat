import Image from "next/image";
import { Phone } from "lucide-react";
import { companyInfo } from "@/data/navigation";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-red shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 bg-linear-to-r from-brand-red-dark/50 via-transparent to-brand-red-dark/50" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <Image
            src="/images/mascot-head.png"
            alt="No Sweat mascot"
            width={56}
            height={56}
            className="hidden h-14 w-auto drop-shadow-lg sm:block"
          />
          <div>
            <p className="font-heading text-lg font-extrabold text-white sm:text-xl">
              Free Estimates on Complete System Replacement
            </p>
            <p className="text-sm text-white/70">
              Licensed, insured, and NATE-certified technicians.
            </p>
          </div>
        </div>
        <a
          href={companyInfo.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-red shadow-md transition-all hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" />
          Call Now: {companyInfo.phone}
        </a>
      </div>
    </section>
  );
}
