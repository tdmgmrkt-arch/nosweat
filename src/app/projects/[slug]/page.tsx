import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, MapPin, CalendarCheck, Tag } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/data/projects";
import { companyInfo } from "@/data/navigation";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    openGraph: { title: project.metaTitle, description: project.metaDescription, type: "article", images: [{ url: project.featuredImage }] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects/" },
        { name: project.title, href: `/projects/${project.slug}/` },
      ]} />

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 opacity-15">
          <Image src={project.featuredImage} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/projects/" className="hover:text-white">Projects</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-white/60">{project.category}</span>
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold text-white sm:text-4xl">{project.title}</h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* Content — 2 column */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main */}
            <article>
              <Link href="/projects/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark">
                <ArrowLeft className="h-4 w-4" /> All Projects
              </Link>

              {/* Hero image */}
              <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image src={project.featuredImage} alt={project.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
              </div>

              {/* Project meta */}
              <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-slate-100 pb-6 text-sm">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                  {project.location}
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Tag className="h-4 w-4 text-brand-blue" />
                  {project.category}
                </div>
                <span className="rounded-full bg-brand-blue/10 px-3 py-0.5 text-xs font-bold text-brand-blue">
                  Completed {project.completedDate}
                </span>
              </div>

              {/* Description callout */}
              <div className="mb-8 rounded-xl border-l-4 border-brand-blue bg-slate-50 p-5">
                <p className="text-base font-semibold leading-relaxed text-navy">{project.description}</p>
              </div>

              {/* Gallery */}
              {project.gallery.length > 1 && (
                <div className="mb-10 grid grid-cols-3 gap-2">
                  {project.gallery.map((image, index) => (
                    <div key={image} className="group relative aspect-square overflow-hidden rounded-xl">
                      <Image src={image} alt={`${project.title} — photo ${index + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 33vw, 220px" />
                    </div>
                  ))}
                </div>
              )}

              {/* Article body */}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="rounded-2xl bg-navy p-6 text-center shadow-lg">
                <CalendarCheck className="mx-auto h-8 w-8 text-brand-blue-light" />
                <h3 className="mt-3 font-heading text-lg font-extrabold text-white">Start Your Project</h3>
                <p className="mt-2 text-sm text-white/60">Ready for an upgrade? Get a free, no-obligation estimate today.</p>
                <Link href="/contact-us/" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">
                  Get a Free Estimate
                </Link>
                <a href={companyInfo.phoneHref} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/10">
                  <Phone className="h-4 w-4" /> {companyInfo.phone}
                </a>
              </div>

              {/* Related projects */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-navy">More Projects</h3>
                <div className="mt-4 space-y-4">
                  {relatedProjects.map((related) => (
                    <Link key={related.slug} href={`/projects/${related.slug}/`} className="group flex gap-3">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <Image src={related.featuredImage} alt={related.title} fill className="object-cover transition-transform group-hover:scale-110" sizes="64px" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-navy transition-colors group-hover:text-brand-blue line-clamp-2">{related.title}</p>
                        <p className="mt-1 text-[11px] text-slate-400">{related.category} &bull; {related.location}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-navy">By the Numbers</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { stat: "25+", label: "Years" },
                    { stat: "5K+", label: "Jobs Done" },
                    { stat: "4.9", label: "Rating" },
                    { stat: "24/7", label: "Service" },
                  ].map((item) => (
                    <div key={item.stat} className="rounded-lg bg-white p-3 text-center shadow-sm">
                      <p className="font-heading text-lg font-extrabold text-brand-blue">{item.stat}</p>
                      <p className="text-[10px] font-semibold text-slate-400">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service areas */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-navy">Service Areas</h3>
                <ul className="mt-3 space-y-2">
                  {["Moreno Valley", "Riverside", "Perris", "Hemet", "San Jacinto", "Beaumont", "Menifee", "Lake Elsinore"].map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-3 w-3 text-brand-blue" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
