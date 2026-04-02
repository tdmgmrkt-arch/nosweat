import {
  Snowflake,
  Flame,
  Wrench,
  ShieldCheck,
  Wind,
  Tag,
  type LucideIcon,
} from "lucide-react";

export interface ServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  heroImage: string;
  checkImage: string;
  intro: string;
  introExtra: string;
  checkTitle: string;
  checkContent: string;
  checkBullets: string[];
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "ac-repair",
    title: "Air Conditioning Repair",
    shortTitle: "AC Repair",
    icon: Snowflake,
    heroImage: "/images/services/ac-repair-new.webp",
    checkImage: "/images/services/ac-repair-check.webp",
    intro:
      "When your air conditioning system breaks down in the middle of summer, you need a team that responds fast and fixes it right the first time. Our NATE-certified technicians diagnose the root cause — not just the symptoms — so you get a lasting repair instead of a temporary patch. We service all major brands including Carrier, Trane, Lennox, Daikin, and more.",
    introExtra:
      "From refrigerant leaks and compressor failures to frozen evaporator coils and faulty thermostats, we've seen and solved it all. Every repair comes with upfront pricing — you'll know the cost before we start, with zero surprise charges when the job is done.",
    checkTitle: "AC Diagnostics & Maintenance",
    checkContent:
      "Regular maintenance catches small problems before they become expensive breakdowns. Our 21-point AC inspection covers every critical component, ensuring your system runs at peak efficiency all season long.",
    checkBullets: [
      "Inspect and clean condenser and evaporator coils",
      "Check refrigerant levels and test for leaks",
      "Verify thermostat calibration and electrical connections",
    ],
    benefits: [
      "Same-day emergency AC repair available",
      "Upfront, flat-rate pricing with no hidden fees",
      "All repairs backed by a 2-year parts and labor warranty",
      "Service all residential AC makes and models",
      "NATE-certified technicians on every call",
      "Flexible financing options for major repairs",
      "Fully licensed and insured in the state",
      "Honest diagnostics — we never upsell unnecessary work",
    ],
    metaTitle: "Air Conditioning Repair | Same-Day AC Service",
    metaDescription:
      "Fast, reliable AC repair from NATE-certified technicians. Same-day service, upfront pricing, all brands serviced. Call now for emergency air conditioning repair.",
  },
  {
    slug: "ac-installation",
    title: "Air Conditioning Installation",
    shortTitle: "AC Installation",
    icon: Snowflake,
    heroImage: "/images/services/ac-install-v3.webp",
    checkImage: "/images/services/ac-install-check.webp",
    intro:
      "A properly sized and installed air conditioning system can cut your energy bills by 20–40% compared to an aging, oversized unit. Our installation team performs a Manual J load calculation on every project to determine the exact cooling capacity your home needs — no guesswork, no one-size-fits-all.",
    introExtra:
      "We install high-efficiency central air systems, ductless mini-splits, and heat pump systems from top-tier manufacturers. Every installation includes a full system test, thermostat programming, and a walkthrough of your new equipment so you know exactly how to use it.",
    checkTitle: "Installation Process & Quality",
    checkContent:
      "Our installation process follows manufacturer specifications to the letter, protecting your warranty and ensuring maximum system lifespan. We also inspect and seal your existing ductwork to prevent energy loss.",
    checkBullets: [
      "Manual J load calculation for precise system sizing",
      "Full ductwork inspection and sealing included",
      "Post-install performance verification and customer walkthrough",
    ],
    benefits: [
      "Expert system sizing — never oversized or undersized",
      "Top-brand equipment: Carrier, Trane, Daikin, Lennox",
      "Complete removal and disposal of your old system",
      "All installations backed by a 2-year labor warranty",
      "Manufacturer warranty registration handled for you",
      "Flexible financing and payment plans available",
      "Quiet, high-efficiency systems that lower energy bills",
      "Clean, respectful installation — we protect your home",
    ],
    metaTitle: "AC Installation | New Air Conditioning Systems",
    metaDescription:
      "Professional AC installation with expert sizing. High-efficiency systems from Carrier, Trane, and more. Free estimates and flexible financing available.",
  },
  {
    slug: "furnace-repair",
    title: "Furnace Repair",
    shortTitle: "Furnace Repair",
    icon: Flame,
    heroImage: "/images/services/furnace-repair-v3.webp",
    checkImage: "/images/services/furnace-repair-check.webp",
    intro:
      "A broken furnace in winter isn't just uncomfortable — it can be dangerous. Our certified furnace technicians respond quickly to restore your heat safely. We diagnose issues with gas furnaces, electric furnaces, oil furnaces, and heat pump heating systems, prioritizing safety checks on every call.",
    introExtra:
      "Whether it's a cracked heat exchanger, a failing igniter, a malfunctioning blower motor, or a tripped safety switch, we carry the most common replacement parts on our trucks so most repairs are completed in a single visit.",
    checkTitle: "Furnace Safety & Diagnostics",
    checkContent:
      "Every furnace repair begins with a comprehensive safety inspection. We check for carbon monoxide leaks, inspect the heat exchanger for cracks, and verify all safety controls are functioning before addressing the reported issue.",
    checkBullets: [
      "Carbon monoxide testing and heat exchanger inspection",
      "Ignition system and gas valve diagnostics",
      "Blower motor, capacitor, and electrical testing",
    ],
    benefits: [
      "24/7 emergency furnace repair — no extra charge",
      "Safety inspection included with every repair call",
      "Most repairs completed in a single visit",
      "Upfront pricing before any work begins",
      "All major furnace brands serviced",
      "2-year warranty on all parts and labor",
      "Background-checked, drug-tested technicians",
      "Carbon monoxide detection included at no extra cost",
    ],
    metaTitle: "Furnace Repair | 24/7 Emergency Heating Service",
    metaDescription:
      "Emergency furnace repair with safety inspection included. Certified technicians, same-day service, all brands. Call now to restore your heat fast.",
  },
  {
    slug: "furnace-installation",
    title: "Furnace Installation",
    shortTitle: "Furnace Installation",
    icon: Flame,
    heroImage: "/images/services/furnace-install-v2.webp",
    checkImage: "/images/services/furnace-install-check.webp",
    intro:
      "If your furnace is over 15 years old, requires frequent repairs, or your heating bills keep climbing, a new high-efficiency furnace can dramatically improve comfort while reducing energy costs. We install 95%+ AFUE gas furnaces and modulating systems that deliver even heat with whisper-quiet operation.",
    introExtra:
      "Our installation team handles everything: equipment selection, old system removal, new system installation, ductwork modifications, thermostat upgrades, and final performance testing. We leave your home cleaner than we found it.",
    checkTitle: "Sizing & Selection",
    checkContent:
      "An improperly sized furnace wastes energy and shortens equipment life. We perform a complete heat load analysis of your home to recommend the right furnace for your specific square footage, insulation levels, and climate zone.",
    checkBullets: [
      "Heat load analysis for precise furnace sizing",
      "Energy efficiency comparison to calculate payback period",
      "Ductwork evaluation and modification as needed",
    ],
    benefits: [
      "Free in-home estimates with no pressure",
      "High-efficiency systems: 95%+ AFUE ratings",
      "Complete old system removal and responsible disposal",
      "All installations meet or exceed local code requirements",
      "Manufacturer warranty registration included",
      "Flexible financing with low monthly payments",
      "2-year labor warranty on all installations",
      "Rebate assistance for qualifying equipment upgrades",
    ],
    metaTitle: "Furnace Installation | High-Efficiency Heating Systems",
    metaDescription:
      "Professional furnace installation with expert sizing. 95%+ AFUE systems, free estimates, flexible financing. Upgrade your heating system today.",
  },
  {
    slug: "hvac-maintenance",
    title: "HVAC System Maintenance",
    shortTitle: "HVAC Maintenance",
    icon: ShieldCheck,
    heroImage: "/images/services/hvac-maintenance-v2.webp",
    checkImage: "/images/services/hvac-maintenance-check.webp",
    intro:
      "Skipping annual HVAC maintenance is like skipping oil changes on your car — it works fine until it doesn't, and the repair bill is always bigger than the maintenance would have been. Our seasonal tune-up program keeps your heating and cooling systems running at peak efficiency year-round.",
    introExtra:
      "The Department of Energy estimates that neglected systems lose 5% efficiency per year. Over a 10-year system life, that's like paying to heat and cool a house 50% larger than yours. Regular maintenance prevents this waste and extends the lifespan of your equipment by years.",
    checkTitle: "What Our Tune-Up Covers",
    checkContent:
      "Our comprehensive maintenance visit covers every component that affects efficiency, safety, and reliability. We follow manufacturer-recommended procedures and document our findings so you always know the condition of your system.",
    checkBullets: [
      "Inspect heat exchanger, burners, and ignition system",
      "Clean coils, check refrigerant, and test electrical",
      "Calibrate thermostat and evaluate system performance",
    ],
    benefits: [
      "$79 seasonal tune-up — heating or cooling",
      "Prevents up to 95% of common breakdowns",
      "Maintains manufacturer warranty compliance",
      "Improves energy efficiency and lowers utility bills",
      "Extends equipment lifespan by 3–5 years",
      "Priority scheduling for maintenance plan members",
      "15% discount on repairs for plan members",
      "No overtime charges for plan members — ever",
    ],
    metaTitle: "HVAC Maintenance | Seasonal Tune-Up Plans",
    metaDescription:
      "Preventive HVAC maintenance starting at $79. Seasonal tune-ups that prevent breakdowns and lower energy bills. Join our maintenance plan today.",
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    shortTitle: "Indoor Air Quality",
    icon: Wind,
    heroImage: "/images/services/iaq-hero.webp",
    checkImage: "/images/services/iaq-check.webp",
    intro:
      "The EPA reports that indoor air can be 2–5 times more polluted than outdoor air. Dust, pet dander, mold spores, volatile organic compounds, and bacteria circulate through your HVAC system every time it runs. Our indoor air quality solutions target these contaminants at the source.",
    introExtra:
      "We install whole-home air purification systems, UV germicidal lights, HEPA filtration upgrades, and humidity control systems. Each solution is designed to integrate seamlessly with your existing HVAC equipment for maximum effectiveness with zero disruption.",
    checkTitle: "IAQ Assessment & Solutions",
    checkContent:
      "We start with a thorough assessment of your home's air quality, identifying specific contaminants and their sources. Based on our findings, we recommend targeted solutions rather than a one-size-fits-all approach.",
    checkBullets: [
      "Air Scrubber and UV light germicidal systems",
      "Whole-home HEPA filtration upgrades",
      "Humidity control — humidifiers and dehumidifiers",
    ],
    benefits: [
      "Residential and commercial air purification",
      "Eliminates 99.9% of airborne viruses and bacteria",
      "Reduces allergens, dust, pet dander, and mold",
      "UV light systems that clean air and surfaces",
      "Whole-home solutions — not just single-room",
      "Integrates with your existing HVAC system",
      "Improves respiratory health for your family",
      "Low maintenance with long-lasting filter life",
    ],
    metaTitle: "Indoor Air Quality | Air Purification Systems",
    metaDescription:
      "Professional indoor air quality solutions. Air scrubbers, UV lights, HEPA filtration. Eliminate 99.9% of viruses and allergens. Free IAQ assessment.",
  },
  {
    slug: "special-offer",
    title: "Special Offers",
    shortTitle: "Special Offers",
    icon: Tag,
    heroImage: "/images/services/special-offers-v2.webp",
    checkImage: "/images/services/hvac-maintenance.webp",
    intro:
      "We believe high-quality HVAC service should be accessible to every homeowner. That's why we offer seasonal promotions, maintenance plan discounts, and financing options that make it easier to keep your home comfortable without breaking the bank.",
    introExtra:
      "Check this page regularly for our latest deals on tune-ups, system replacements, and indoor air quality upgrades. Our promotions change seasonally, but our commitment to honest pricing and excellent service never does.",
    checkTitle: "Current Promotions",
    checkContent:
      "Take advantage of these limited-time offers. All promotions include our standard quality guarantee and can be combined with available manufacturer rebates and utility incentives.",
    checkBullets: [
      "$79 Furnace or AC Tune-Up & Safety Inspection",
      "Free estimate on new system installations",
      "15% off repairs for maintenance plan members",
    ],
    benefits: [
      "$79 seasonal tune-up — furnace or AC",
      "Free in-home estimates on new systems",
      "Flexible financing with approved credit",
      "Maintenance plan members save 15% on all repairs",
      "No overtime charges for plan members",
      "Manufacturer rebate assistance included",
      "Referral bonus for every new customer you send",
      "Military and senior citizen discounts available",
    ],
    metaTitle: "Special Offers | HVAC Deals & Promotions",
    metaDescription:
      "Current HVAC specials and promotions. $79 tune-ups, free estimates on new systems, flexible financing. Check our latest deals and start saving today.",
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug);
}
