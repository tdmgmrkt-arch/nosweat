import {
  Snowflake,
  Flame,
  Wind,
  Wrench,
  ShieldCheck,
  Sparkles,
  Tag,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceLink extends NavLink {
  description: string;
  icon: LucideIcon;
}

export const services: ServiceLink[] = [
  {
    label: "AC Repair",
    href: "/service/ac-repair/",
    description: "Fast, reliable cooling system diagnostics and repair.",
    icon: Wrench,
  },
  {
    label: "AC Installation",
    href: "/service/ac-installation/",
    description: "Energy-efficient air conditioning systems, sized right.",
    icon: Snowflake,
  },
  {
    label: "Furnace Repair",
    href: "/service/furnace-repair/",
    description: "Same-day furnace repair to restore your heat fast.",
    icon: Flame,
  },
  {
    label: "Furnace Installation",
    href: "/service/furnace-installation/",
    description: "High-efficiency furnace upgrades with expert sizing.",
    icon: Flame,
  },
  {
    label: "HVAC Maintenance",
    href: "/service/hvac-maintenance/",
    description: "Preventive tune-ups that extend equipment life.",
    icon: ShieldCheck,
  },
  {
    label: "Indoor Air Quality",
    href: "/service/indoor-air-quality/",
    description: "Cleaner, healthier air for your home and family.",
    icon: Wind,
  },
  {
    label: "Special Offers",
    href: "/service/special-offer/",
    description: "Current promotions and seasonal savings.",
    icon: Tag,
  },
];

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/service/" },
  { label: "Projects", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const companyInfo = {
  name: "It's No Sweat Heat & Air",
  phone: "(951) 331-3310",
  phoneHref: "tel:+19513313310",
  email: "support@itsnosweat.net",
  emailHref: "mailto:support@itsnosweat.net",
  address: "Moreno Valley, CA",
  license: "Lic#: 1058772",
  hours: "Mon – Fri: 8AM – 6PM",
  emergencyHours: "24/7 Emergency Service",
} as const;

export const footerLinks = {
  services: services.map(({ label, href }) => ({ label, href })),
  company: [
    { label: "About Us", href: "/about-us/" },
    { label: "Our Projects", href: "/projects/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
  ],
} as const;
