import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/navigation";

export function CtaBanner() {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-linear-to-b from-[#0C1220] via-[#101828] to-[#090E1A] py-14 sm:py-18">

      {/* Top fade line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-brand-blue/8 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-red/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row">
        
        <div className="flex items-center gap-6 text-center sm:text-left">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:flex">
            <Image
              src="/images/mascot-head.png"
              alt="No Sweat mascot"
              width={56}
              height={56}
              className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </div>
          
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl tracking-tight drop-shadow-md">
              Free Estimates on <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">System Replacement</span>
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 sm:justify-start">
              <ShieldCheck className="h-4 w-4 text-brand-blue-light" />
              <p className="text-sm font-medium text-slate-300">
                Licensed, insured, and NATE-certified technicians.
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <a
            href={companyInfo.phoneHref}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-b from-red-500 to-brand-red px-8 py-4 text-base font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_20px_rgba(220,38,38,0.3)] ring-1 ring-brand-red/50 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-0.5 sm:w-auto"
          >
            <Phone className="h-5 w-5 drop-shadow-sm" />
            <span>Call Now: {companyInfo.phone}</span>
            <ArrowRight className="hidden h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1 sm:block" />
          </a>
        </div>

      </div>
    </section>
  );
}