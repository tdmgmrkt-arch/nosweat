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
  faqs?: { question: string; answer: string }[];
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
    faqs: [
      {
        question: "How much does AC repair cost in Moreno Valley?",
        answer:
          "AC repair costs vary depending on what failed — a capacitor replacement runs toward the lower end of the range, while a compressor or refrigerant recharge runs significantly higher. It's No Sweat Heat & Air provides upfront flat-rate pricing after diagnosing the problem, so you know the full cost before approving any work. There are no surprise line items on the invoice.",
      },
      {
        question: "What are the warning signs that my AC needs repair?",
        answer:
          "The most common warning signs are warm or weakly blowing air, the system cycling on and off every few minutes, unusual sounds during operation (grinding, banging, or squealing), and a sudden spike in your electric bill without a change in usage. Ice forming on the refrigerant lines or a musty smell from the vents also indicate a problem that needs professional attention before it worsens.",
      },
      {
        question: "What refrigerant does my AC system use, and does it matter?",
        answer:
          "Most systems installed before 2010 use R-22 (Freon), which was phased out of production under federal regulations and is now difficult and expensive to source. Systems manufactured after 2010 typically use R-410A, and newer systems are transitioning to R-454B or R-32 under updated EPA standards. If your older system needs a refrigerant recharge, the cost and long-term availability of R-22 often make replacement the more practical choice.",
      },
      {
        question: "How long does an AC repair take?",
        answer:
          "Most AC repairs are completed in a single visit of two to four hours. Our technicians arrive with the most common replacement parts stocked on the truck — capacitors, contactors, fan motors, and refrigerant — so the majority of failures don't require a return trip for parts. More complex issues like compressor replacement or refrigerant leak repair may take longer or require additional scheduling.",
      },
      {
        question: "Is emergency AC repair available after hours?",
        answer:
          "Yes. It's No Sweat Heat & Air offers emergency HVAC service for situations where waiting until the next business day isn't reasonable — particularly in Inland Empire summers when indoor temperatures can become dangerous within hours of a system failure. Call 951-331-3310 and someone will answer.",
      },
      {
        question: "Is there a warranty on AC repairs?",
        answer:
          "Yes. Parts and labor are warranted on every repair we perform. The specific coverage period depends on the component involved — manufacturer warranties apply to parts, and our workmanship warranty covers the labor. We'll explain exactly what's covered before we begin the repair.",
      },
      {
        question: "How do I know whether to repair or replace my AC system?",
        answer:
          "The practical threshold is this: if the repair costs more than half the price of a comparable new system and the unit is over 10 years old, replacement typically makes more financial sense — especially since a new system will be significantly more efficient. It's No Sweat Heat & Air technicians give honest assessments based on the equipment's age, condition, and repair history, not on which option generates a larger invoice.",
      },
    ],
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
    faqs: [
      {
        question: "How do I know what size AC system my home needs?",
        answer:
          "System size is measured in tons of cooling capacity, and the correct size depends on your home's square footage, insulation quality, window orientation, ceiling height, and local climate. A proper Manual J load calculation is the only accurate way to determine this — rule-of-thumb estimates based on square footage alone routinely result in oversized systems that short-cycle or undersized systems that can't keep up with Inland Empire summers. It's No Sweat Heat & Air performs a full load calculation on every installation.",
      },
      {
        question: "What SEER rating should I look for in a new AC system?",
        answer:
          "SEER (Seasonal Energy Efficiency Ratio) measures how efficiently a system cools relative to the electricity it consumes — higher is more efficient. California's minimum standard is currently 15 SEER for residential systems, and systems rated 18 SEER or higher can meaningfully reduce energy costs over the system's lifespan. For Moreno Valley homeowners running AC four to six months per year, the efficiency difference between a minimum-standard unit and a higher-rated one adds up to real money.",
      },
      {
        question: "How long does a new AC installation take?",
        answer:
          "A standard replacement installation — removing the old system, installing the new equipment, and testing — takes one full day in most cases. Situations that require new ductwork, an electrical panel upgrade, or a change in system configuration may require additional time. We'll give you a clear timeline before the job begins.",
      },
      {
        question: "Do I need a permit to install a new AC system in California?",
        answer:
          "Yes. AC installations in California require a mechanical permit pulled through your local building department, and the work must be inspected. It's No Sweat Heat & Air handles the permitting process as part of every installation — this protects you legally, ensures the work is done to code, and matters when you sell your home.",
      },
      {
        question: "Are there rebates or incentives available for a new AC system in California?",
        answer:
          "Yes. SCE (Southern California Edison) and SoCalGas offer rebates on qualifying high-efficiency systems, and California's TECH Clean California program provides additional incentives for heat pump systems. Federal tax credits are also available for qualifying equipment under the Inflation Reduction Act. Eligible rebates and credits change periodically — we'll walk you through what applies to your specific installation.",
      },
      {
        question: "Can I finance a new AC installation?",
        answer:
          "Financing is available on new system installations with approved credit. Given that a quality installation is a multi-thousand-dollar investment, many Inland Empire homeowners use financing to upgrade to a higher-efficiency system now rather than limping through another summer on aging equipment. Ask about current terms when you call.",
      },
      {
        question: "What warranty comes with a new AC system?",
        answer:
          "New equipment comes with the manufacturer's warranty — typically 5 to 10 years on parts, depending on the brand and model, with some manufacturers offering extended compressor warranties. It's No Sweat Heat & Air also warranties our installation labor separately. We'll register your equipment warranty for you and explain exactly what's covered.",
      },
    ],
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
    faqs: [
      {
        question: "What are the most common furnace problems?",
        answer:
          "The most frequent issues are igniter failure (the furnace clicks but won't light), a dirty or faulty flame sensor that shuts the burner off too quickly, a clogged condensate drain on high-efficiency units, and blower motor problems that reduce heat distribution. A furnace that short-cycles, produces unusual smells, or makes banging or clicking sounds during startup should be diagnosed promptly — these symptoms often precede a complete failure.",
      },
      {
        question: "Is my furnace gas or electric, and does it change what repair costs?",
        answer:
          "Most homes in Moreno Valley and the Inland Empire use gas furnaces, though electric systems are found in some older homes and multi-unit buildings. Gas furnace repairs typically involve ignition components, gas valves, heat exchangers, and control boards. Electric furnace repairs center on heating elements, relays, and sequencers. Both types are well within our technicians' scope — and pricing depends on the specific component, not the fuel type.",
      },
      {
        question: "Is a malfunctioning furnace a carbon monoxide risk?",
        answer:
          "A cracked heat exchanger is the primary CO risk associated with gas furnaces — it allows combustion gases to mix with the air your system distributes through your home. This is not visible to the naked eye and produces no smell, which makes it genuinely dangerous. On every furnace repair call, It's No Sweat Heat & Air includes a CO safety inspection and combustion analysis before addressing the mechanical problem.",
      },
      {
        question: "How much does furnace repair typically cost?",
        answer:
          "Repair costs vary significantly based on the component involved. Minor repairs like an igniter or flame sensor replacement are relatively straightforward. Major repairs involving a heat exchanger, gas valve, or control board cost considerably more, and at that price point the age of the system becomes a factor in whether repair or replacement is the better decision. We provide upfront pricing after diagnosis — you approve the cost before we proceed.",
      },
      {
        question: "How quickly can you repair my furnace?",
        answer:
          "Most furnace repairs in Moreno Valley and the surrounding Inland Empire are completed the same day we diagnose the problem. Our trucks are stocked with common furnace components — igniters, flame sensors, capacitors, and control boards for major brands — to avoid unnecessary return trips. For furnace failures on cold nights, we treat it as a priority call.",
      },
      {
        question: "When does furnace repair stop making sense and replacement become the better choice?",
        answer:
          "If a furnace is over 15 years old and the repair estimate exceeds roughly half the cost of a comparable new system, replacement typically makes more financial sense. A new 96% AFUE furnace will also cost substantially less to operate than the aging equipment it replaces, so the savings can help offset the upfront investment. We'll give you the numbers honestly and let you decide.",
      },
    ],
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
    metaTitle: "Furnace Installation | New Heating Systems",
    metaDescription:
      "Professional furnace installation with expert sizing. 95%+ AFUE systems, free estimates, flexible financing. Upgrade your heating system today.",
    faqs: [
      {
        question: "What does AFUE mean, and what efficiency rating should I look for?",
        answer:
          "AFUE (Annual Fuel Utilization Efficiency) measures how much of the gas your furnace burns actually becomes heat in your home — the rest is lost through exhaust. A furnace rated 80% AFUE wastes 20 cents of every dollar spent on gas; a 96% AFUE unit wastes only 4 cents. California's current minimum for new gas furnace installations is 80% AFUE, but most homeowners in Moreno Valley benefit from upgrading to a 95%+ unit, where the efficiency gains cover a meaningful portion of the installation cost over time.",
      },
      {
        question: "How do I know what size furnace my home needs?",
        answer:
          "Furnace sizing is measured in BTUs (British Thermal Units) of heating output, and the correct capacity depends on your home's square footage, insulation, ceiling height, window area, and local climate. Oversized furnaces short-cycle and create uneven heat; undersized units run continuously and still leave rooms cold on the coldest mornings. It's No Sweat Heat & Air performs a proper heating load calculation on every installation — not a guess based on square footage alone.",
      },
      {
        question: "How long does a furnace installation take?",
        answer:
          "A standard furnace replacement takes one full day for most homes in the Inland Empire. The job includes removing and disposing of the old unit, installing and connecting the new equipment, and a full operational test before we leave. If the project involves ductwork modifications or a gas line change, additional time may be needed.",
      },
      {
        question: "Do I need a permit for a new furnace installation in California?",
        answer:
          "Yes. A mechanical permit is required for furnace installations in California, and the work is subject to inspection by your local building department. It's No Sweat Heat & Air pulls the permit and manages the inspection process as part of every installation. Unpermitted furnace work creates problems with homeowners insurance and home sales — it's not a step worth skipping.",
      },
      {
        question: "Do I need to upgrade my gas line for a new furnace?",
        answer:
          "In most cases, no — existing gas lines in Moreno Valley homes are adequately sized for a standard furnace replacement. Upgrading to a higher-output unit or converting from a different fuel source may require a gas line evaluation. We assess the gas supply, pressure, and connections as part of every installation and flag anything that needs attention before the new equipment goes in.",
      },
      {
        question: "What warranty covers a new furnace installation?",
        answer:
          "New furnaces come with the manufacturer's parts warranty — typically 5 to 10 years, with some brands offering lifetime heat exchanger coverage on qualifying models. It's No Sweat Heat & Air provides a separate labor warranty on the installation work. We register your equipment with the manufacturer and provide documentation of the warranty terms before we leave the job.",
      },
    ],
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
    faqs: [
      {
        question: "How often should I have my HVAC system serviced?",
        answer:
          "Twice per year is the standard recommendation — once in spring before cooling season starts and once in fall before heating season. In Moreno Valley and the broader Inland Empire, where systems run hard for months at a time and dust accelerates component wear, bi-annual service isn't optional if you want the system to reach its expected lifespan. Skipping even one season of maintenance can reduce efficiency measurably and increase the odds of a mid-season failure.",
      },
      {
        question: "What does an HVAC tune-up actually include?",
        answer:
          "A professional tune-up from It's No Sweat Heat & Air covers coil cleaning, refrigerant level verification, electrical connection inspection and tightening, capacitor and contactor testing, blower inspection, condensate drain clearing, thermostat calibration, and filter replacement. We also evaluate overall component condition — not just whether things are running, but how much useful life is left — so you can plan ahead rather than react to failures.",
      },
      {
        question: "How much does an HVAC tune-up cost?",
        answer:
          "We provide upfront pricing before any work begins. Maintenance visit costs are straightforward, and any additional services discovered during the inspection are quoted separately before proceeding. Call 951-331-3310 for current pricing — rates are consistent for homes throughout our Inland Empire service area.",
      },
      {
        question: "What are the real benefits of regular HVAC maintenance?",
        answer:
          "Regular maintenance extends equipment life, lowers monthly energy costs, and reduces the likelihood of a breakdown during the hottest or coldest days of the year — which is when failures almost always happen. Most manufacturers also require documented proof of annual maintenance to honor their equipment warranties, meaning skipped tune-ups can void your coverage. A tune-up costs a fraction of what a single emergency repair typically runs.",
      },
      {
        question: "Do you offer maintenance plans or service agreements?",
        answer:
          "Yes. It's No Sweat Heat & Air offers maintenance agreements that cover bi-annual tune-ups and provide priority scheduling for repair calls. A service agreement is the simplest way to make sure maintenance happens on schedule without needing to remember to book each visit. Call us or ask when you schedule your first appointment for current plan options.",
      },
      {
        question: "Can't I just change the filter and skip the professional tune-up?",
        answer:
          "Filter replacement is important and something every homeowner should do regularly, but it addresses only one of the dozens of components that degrade over time. A filter change does nothing for coil fouling, refrigerant levels, electrical wear, condensate drain blockages, or blower efficiency — all of which affect performance and longevity. Professional maintenance catches what a filter change can't see.",
      },
    ],
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
    faqs: [
      {
        question: "What are the signs that my home has poor indoor air quality?",
        answer:
          "Persistent dust buildup on surfaces shortly after cleaning, allergy or asthma symptoms that are noticeably worse indoors, musty odors from vents, visible mold near vents or in damp areas, and unexplained fatigue or headaches at home are all indicators. Moreno Valley's dry, dusty climate means airborne particulates are a real and ongoing issue — standard 1-inch filters capture only the largest particles and leave the rest circulating.",
      },
      {
        question: "What allergens does HVAC filtration actually remove?",
        answer:
          "A properly equipped system can capture dust mites, pollen, pet dander, mold spores, and some bacteria. Standard 1-inch filters with low MERV ratings allow most of these particles to pass through and recirculate. Upgrading to a media filter with a MERV rating of 11 or higher, or adding a whole-home air purification system, significantly increases what's being removed from the air your family breathes.",
      },
      {
        question: "What's the difference between a whole-home air purifier and a portable room unit?",
        answer:
          "A portable air purifier treats one room — typically 200 to 400 square feet — and requires regular filter replacements. A whole-home system integrates directly with your HVAC equipment and treats all the air passing through your ductwork, covering the entire house in a single installation. For Inland Empire homes where the HVAC runs most of the year, whole-home integration is significantly more effective and requires far less ongoing maintenance.",
      },
      {
        question: "How does a UV air purifier work, and is it worth it?",
        answer:
          "UV germicidal lights are installed inside the air handler or ductwork and use ultraviolet-C radiation to neutralize bacteria, mold spores, and viruses as air passes through. They're particularly effective at preventing biological growth on the evaporator coil, which is one of the main sources of musty odors in HVAC systems. For households dealing with persistent odors, respiratory conditions, or recurring mold concerns, UV systems are a proven and low-maintenance solution.",
      },
      {
        question: "Does my HVAC system affect indoor humidity levels?",
        answer:
          "Yes. A properly sized and functioning AC system naturally removes humidity as part of the cooling process — when it's working correctly, it should maintain indoor relative humidity between 40% and 60%. An oversized system that short-cycles or an aging system that's lost efficiency may fail to adequately dehumidify, leaving the air feeling clammy even at a comfortable temperature. In humid periods, a whole-home dehumidifier integrated with your HVAC can address what the AC alone can't handle.",
      },
      {
        question: "Can you test my home's air quality to find out what's actually in it?",
        answer:
          "Yes. It's No Sweat Heat & Air can perform indoor air quality assessments that identify particulate levels, humidity, and biological contaminants in your home. Rather than guessing at a solution, testing tells you exactly what's present so the recommended equipment addresses the actual problem. Call 951-331-3310 to discuss what an IAQ assessment involves for your specific situation.",
      },
    ],
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
