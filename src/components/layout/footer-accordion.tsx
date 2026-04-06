"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile: clickable toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-0 flex w-full items-center justify-between sm:hidden"
        aria-expanded={open}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          {title}
        </h3>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-slate-500 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Desktop: static heading */}
      <h3 className="mb-6 hidden sm:block text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        {title}
      </h3>

      {/* Mobile: collapsible content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 sm:!max-h-none sm:!opacity-100 sm:!mt-0",
          open ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface FooterLinkListProps {
  links: readonly { href: string; label: string }[];
}

export function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul className="space-y-2.5 sm:space-y-3 text-sm text-slate-400">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group flex items-center gap-2 transition-colors hover:text-white"
          >
            <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 text-brand-blue" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
