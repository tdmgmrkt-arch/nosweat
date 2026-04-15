import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Phone, Mail } from "lucide-react";
import { companyInfo } from "@/data/navigation";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and SMS terms and conditions for It's No Sweat Heat & Air. Learn how we collect, use, and protect your data.",
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: "/images/fullservice.webp", width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy/" },
      ]} />

      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── HERO BANNER ── */}
      <section className="relative z-10 overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-20 lg:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 z-0"
            style={{
              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          >
            <Image src="/images/fullservice.webp" alt="" fill priority className="object-cover object-[center_40%] opacity-20 mix-blend-luminosity" sizes="100vw" />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Privacy Policy</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>
            <div className="mt-5 sm:mt-8 h-1.5 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            <p className="mt-5 sm:mt-8 text-base sm:text-xl leading-relaxed text-slate-300 font-light drop-shadow-md">
              How we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-[2rem] bg-[#0F172A]/50 p-5 sm:p-8 md:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md">

            {/* Who We Are */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-brand-blue/10 ring-1 ring-brand-blue/30">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-brand-blue-light" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white">Who We Are</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Our website address is <a href="https://www.itsnosweat.net/" className="font-semibold text-brand-blue-light hover:text-white transition-colors">itsnosweat.net</a>.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 sm:mb-12" />

            {/* SMS Terms */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">SMS Terms &amp; Privacy</h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                {companyInfo.name} respects your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your data.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-7 sm:space-y-10">
              {[
                {
                  title: "Data Collection",
                  content: "We will collect your name, email address, mailing address, and mobile phone number when you sign up for SMS updates. The information will be collected via the website contact form, email, rental agreement, or third-party reservation systems.",
                },
                {
                  title: "Data Usage",
                  content: "We use your data solely for sending messages regarding appointment reminders and customer support.",
                },
                {
                  title: "Data Security",
                  content: "We protect your data with secure storage measures to prevent unauthorized access.",
                },
                {
                  title: "Data Retention",
                  content: "We retain your information as long as you are subscribed to our SMS service. You may request deletion at any time.",
                },
                {
                  title: "Message & Data Rates",
                  content: "MESSAGE AND DATA RATES MAY APPLY. Your mobile carrier may charge fees for sending or receiving text messages, especially if you do not have an unlimited texting or data plan. Messages are recurring, and message frequency varies.",
                },
                {
                  title: "Opt-Out",
                  content: `You can opt out of the SMS list at any time by texting, emailing, or replying STOP or CANCEL. After unsubscribing, you will receive a final SMS to confirm, and we will remove your number from our list within 24 hours.`,
                },
                {
                  title: "Non-Sharing Clause",
                  content: `We do not share your data with third parties for marketing purposes. ${companyInfo.name} will not sell, rent, or share the collected mobile numbers. All sharing mentioned in this policy excludes mobile opt-in and consent; opt-in information is never shared with anyone for any purpose.`,
                },
              ].map((section, i) => (
                <div key={section.title} className="group">
                  <h3 className="flex items-center gap-2.5 sm:gap-3 font-heading text-base sm:text-lg font-extrabold text-white mb-2 sm:mb-3">
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md sm:rounded-lg bg-white/5 text-[10px] sm:text-xs font-bold text-slate-500 ring-1 ring-white/10">{i + 1}</span>
                    {section.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 pl-8 sm:pl-10">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8 sm:my-12" />

            {/* Help & Contact */}
            <div className="rounded-xl sm:rounded-2xl bg-white/[0.02] p-4 sm:p-6 ring-1 ring-white/10">
              <h3 className="font-heading text-base sm:text-lg font-extrabold text-white mb-3 sm:mb-4">Help &amp; Support</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mb-3 sm:mb-4">
                Contact {companyInfo.name} for help or to stop receiving messages:
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href={companyInfo.phoneHref} className="inline-flex items-center justify-center sm:justify-start gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-bold text-white ring-1 ring-white/10 transition-all hover:bg-brand-blue/20 hover:ring-brand-blue/30">
                  <Phone className="h-4 w-4 text-brand-blue-light" /> {companyInfo.phone}
                </a>
                <a href={companyInfo.emailHref} className="inline-flex items-center justify-center sm:justify-start gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-bold text-white ring-1 ring-white/10 transition-all hover:bg-brand-blue/20 hover:ring-brand-blue/30">
                  <Mail className="h-4 w-4 text-brand-blue-light" /> {companyInfo.email}
                </a>
              </div>
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-slate-500">
                Text <strong className="text-white">HELP</strong> for assistance or <strong className="text-white">STOP</strong> to unsubscribe at any time.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
