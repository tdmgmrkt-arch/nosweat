import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse completed HVAC and solar projects. Furnace installations, AC systems, commercial heating — see our results.",
  openGraph: {
    images: [{ url: "/images/technician-working.webp", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/technician-working.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">Projects</span>
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">Our Projects</h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* Grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image src={project.featuredImage} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-brand-blue px-2.5 py-1 text-xs font-bold text-white">{project.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-slate-400">{project.location}</p>
                  <h2 className="mt-1 font-heading text-lg font-extrabold text-navy group-hover:text-brand-blue transition-colors">{project.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{project.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                    View Project <ArrowRight className="h-3.5 w-3.5" />
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
