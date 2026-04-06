import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Phone,
  Clock,
  CheckCircle2,
  Star,
  MapPin
} from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { companyInfo } from "@/data/navigation";
import { ReviewCarousel } from "@/components/review-carousel";

export const metadata: Metadata = {
  title: "About Us | 25+ Years HVAC Experience",
  description:
    "Learn about It's No Sweat Heat & Air — over 25 years of HVAC experience serving Moreno Valley and the Inland Empire. Meet our team and read customer reviews.",
  openGraph: {
    images: [{ url: "/images/team-engaged.webp", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#090E1A] text-slate-300 selection:bg-brand-red/30 selection:text-white font-sans">
      
      {/* GLOBAL AMBIENT LIGHTING */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] h-[800px] w-[800px] rounded-full bg-brand-red/5 blur-[150px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] h-[1000px] w-[1000px] rounded-full bg-brand-blue/10 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── Banner ── */}
      <section className="relative z-10 overflow-hidden pt-24 pb-20 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          >
            <Image 
              src="/images/team-engaged.webp" 
              alt="The It's No Sweat Heat & Air team" 
              fill 
              priority 
              className="object-cover object-[center_30%] opacity-25 mix-blend-luminosity" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-[#090E1A]/40 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-[#090E1A] from-20% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:pt-24">
          <div className="max-w-3xl">
            {/* Luminous Breadcrumb */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-xs font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">HOME</Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="text-brand-blue-light drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">ABOUT US</span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              About Us
            </h1>
            <div className="mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-red to-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            <p className="mt-8 text-xl leading-relaxed text-slate-300 font-light drop-shadow-md">
              Over 25 years of honest HVAC work across the Inland Empire. Meet the team behind the reputation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Hero intro — founder + experience ── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Glassmorphic Image Frame */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/nosweatvan.webp"
                    alt="Justin — Co-Founder of It's No Sweat Heat & Air"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Floating ambient glow behind image */}
              <div className="absolute -bottom-10 -right-10 -z-10 h-64 w-64 rounded-full bg-brand-blue/20 blur-[80px]" />
            </div>

            {/* Text Content */}
            <div className="lg:pl-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">Who We Are</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                We have over 25 years experience in the HVAC industry
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-400 font-light">
                At It&apos;s No Sweat Heat &amp; Air, we believe every homeowner deserves honest, high-quality HVAC service at a fair price. Founded in Moreno Valley by Justin, our company has grown from a one-truck operation into a trusted team of certified technicians serving the Inland Empire and surrounding areas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400 font-light">
                We&apos;re not a franchise. We&apos;re locally owned, family-operated, and personally invested in every job we take on. That means no high-pressure sales, no inflated quotes, and no shortcuts — just straightforward work done right the first time.
              </p>

              {/* Founder signature block */}
              <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-8">
                <div>
                  <p className="font-heading text-lg font-extrabold text-white">Justin Jaszewski</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Co-Founder</p>
                </div>
                <Image
                  src="/images/signature.png"
                  alt="Justin Jaszewski signature"
                  width={160}
                  height={80}
                  // Inverting the signature so dark ink shows up as glowing white on the dark background
                  className="h-14 w-auto opacity-70 invert grayscale brightness-200 contrast-125" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews (Floating Integration) ── */}
      <section className="relative z-20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Our Verified Customers Love Us!
            </h2>
          </div>
          <div className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      {/* ── HVAC Technicians + description ── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Image */}
            <div className="relative order-last lg:order-first">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/team-engaged.webp"
                    alt="It's No Sweat Heat & Air team working together"
                    fill
                    className="object-cover object-[60%_center] opacity-80 mix-blend-luminosity transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pr-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Team</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Heating and Cooling Technicians
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-400 font-light">
                We realize that mechanical systems today are far more complex than ever and energy costs continue to rise. Looking for a Moreno Valley HVAC Company? Nothing wears on homeowners like the idea of handling HVAC problems. From the air conditioner to the furnace, we take the pressure off of you.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400 font-light">
                Our technicians are the most recognized professionals in the area because we&apos;re committed to amazing service. We handle everything from emergency repairs to full system replacements — so call us if you would like a free estimate.
              </p>

              {/* Glassmorphic Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { value: "25+", label: "Years Exp" },
                  { value: "500+", label: "Projects" },
                  { value: "1k+", label: "Customers" }
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center rounded-2xl bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/[0.05] hover:-translate-y-1">
                    <p className="font-heading text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-sm">{stat.value}</p>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-slate-500 text-center">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reliable HVAC Services — stat bars ── */}
      <section className="relative z-10 py-16 sm:py-24">
        {/* Subtle ambient divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">What We Do</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              We Offer Reliable HVAC Services
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "45%", label: "Energy Consumption Goes to Heating", color: "text-brand-red" },
              { stat: "90%", label: "Average Indoor Time Spent by Individuals", color: "text-brand-blue-light" },
              { stat: "50%", label: "Lower Your HVAC Costs with Maintenance", color: "text-emerald-400" },
              { stat: "40%", label: "Lower Monthly Costs with Solar Panels", color: "text-amber-400" },
            ].map((item) => (
              <div key={item.label} className="group flex flex-col items-center rounded-3xl bg-[#0F172A]/50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#151E32]/80 hover:ring-white/10">
                <p className={`font-heading text-5xl font-extrabold ${item.color} drop-shadow-[0_0_15px_currentColor] transition-transform group-hover:scale-110`}>
                  {item.stat}
                </p>
                <p className="mt-6 text-sm font-medium leading-relaxed text-slate-300 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Residential & Commercial ── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Our Expertise</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Residential and Commercial Technicians
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-400 font-light">
                Whether it&apos;s a single-family home or a commercial property, our licensed technicians deliver the same standard of excellence. We handle system design, installation, repair, and ongoing maintenance for properties of all sizes.
              </p>

              <div className="mt-10 space-y-6">
                <div className="group flex items-start gap-5 rounded-2xl bg-white/[0.01] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] ring-1 ring-white/5 transition-all duration-300 hover:bg-white/[0.03] hover:ring-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-blue/20 group-hover:ring-brand-blue/30">
                    <Zap className="h-5 w-5 text-slate-300 group-hover:text-brand-blue-light" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-slate-200 group-hover:text-white transition-colors">Fast, Reliable Service</h3>
                    <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                      Our fully-stocked trucks and experienced technicians ensure most jobs are completed in a single visit — getting your comfort restored fast.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-5 rounded-2xl bg-white/[0.01] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] ring-1 ring-white/5 transition-all duration-300 hover:bg-white/[0.03] hover:ring-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-red/20 group-hover:ring-brand-red/30">
                    <ShieldCheck className="h-5 w-5 text-slate-300 group-hover:text-brand-red-light" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-slate-200 group-hover:text-white transition-colors">Emergency Services</h3>
                    <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                      HVAC emergencies don&apos;t wait for business hours. Our 24/7 emergency line connects you with a real technician — no answering services, no callbacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white/[0.02] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/technician-working.webp"
                    alt="Professional HVAC technician at work"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 hover:opacity-100 hover:mix-blend-normal hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest News / Blog ── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Latest Insights
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[#0F172A]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#151E32] hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[220px] bg-white/[0.02] z-0 pointer-events-none"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                >
                  <Image src={post.featuredImage} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-8 pt-57">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span className="text-brand-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">{post.category}</span>
                    <span className="text-white/20">&bull;</span>
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-extrabold text-white leading-snug tracking-wide group-hover:text-brand-blue-light transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400 mt-auto transition-colors group-hover:text-white">
                    Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog/" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white/[0.03] px-8 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:ring-white/20 hover:-translate-y-0.5 backdrop-blur-md">
              View All Articles <ArrowRight className="h-4 w-4 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA bottom ── */}
      <section className="relative z-10 overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
            <Image src="/images/mascot-head.png" alt="" width={48} height={48} className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>
          
          <h2 className="font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
            Ready to Experience the No Sweat Difference?
          </h2>
          <p className="mx-auto mt-6 text-lg font-light text-slate-300 drop-shadow-sm">
            Schedule your free estimate or call us for immediate assistance.
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link href="/contact-us/" className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-[#090E1A] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
              Get a Free Estimate <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={companyInfo.phoneHref} className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white/[0.03] px-8 py-4 text-base font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20 transition-all duration-300 hover:bg-white/[0.08] hover:ring-white/30 hover:-translate-y-0.5">
              <Phone className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}