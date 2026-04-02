export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  featuredImage: string;
  gallery: string[];
  category: string;
  location: string;
  completedDate: string;
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    slug: "hr-smith-inverter-installation",
    title: "HR Smith Residence — Solar Inverter Installation",
    description:
      "Complete solar inverter upgrade for a 6.5kW residential system in Clifton Park, NY. Replaced an aging string inverter with a high-efficiency Enphase microinverter setup, boosting system output by 18%.",
    content: `
      <h2>Project Overview</h2>
      <p>The Smith family's 2018 solar array was underperforming due to partial shading from a neighboring property's tree growth. Their original string inverter meant one shaded panel dragged down the entire array's output. We designed a microinverter retrofit that eliminated this bottleneck entirely.</p>

      <h2>The Challenge</h2>
      <p>String inverters wire panels in series — if one panel's output drops, every panel in that string suffers. With two panels now receiving intermittent shade during peak afternoon hours, the Smiths were losing an estimated 22% of their potential solar generation during the highest-value production window.</p>

      <h2>Our Solution</h2>
      <p>We replaced the single SolarEdge string inverter with 20 Enphase IQ8+ microinverters — one per panel. Each panel now operates independently, so shading on one or two panels no longer cascades across the system. We also upgraded the monitoring to Enphase's IQ Gateway for real-time per-panel production tracking.</p>

      <h2>Results</h2>
      <p>Post-installation monitoring confirmed an 18% increase in total system output during the first full month. The Smiths are now generating an estimated 8,200 kWh annually — up from 6,900 kWh — saving an additional $390/year at current utility rates. The upgrade will pay for itself within 4 years through increased energy production alone.</p>
    `,
    featuredImage: "/images/projects/hr-smith-inverter.webp",
    gallery: [
      "/images/projects/hr-smith-inverter.webp",
      "/images/projects/hr-smith-panels.webp",
      "/images/projects/hr-smith-monitoring.webp",
    ],
    category: "Solar",
    location: "Clifton Park, NY",
    completedDate: "2024-09-20",
    metaTitle: "Solar Inverter Installation — Clifton Park, NY | It's No Sweat",
    metaDescription:
      "Residential solar inverter upgrade in Clifton Park. Replaced string inverter with Enphase microinverters for 18% output boost. View project details.",
  },
  {
    slug: "massry-center-heating-panel",
    title: "Massry Center Restaurant — Commercial Heating Panel System",
    description:
      "Designed and installed a zoned radiant heating panel system for a 4,200 sq ft restaurant space at the Massry Center. Achieved even heat distribution across dining and kitchen zones with independent temperature control.",
    content: `
      <h2>Project Overview</h2>
      <p>The Massry Center's ground-floor restaurant needed a heating solution that could handle the wildly different thermal demands of an open kitchen, a 120-seat dining room, and a glass-enclosed entrance vestibule — all without visible ductwork that would compromise the architect's design vision.</p>

      <h2>The Challenge</h2>
      <p>Commercial kitchens generate enormous waste heat from cooking equipment, while dining areas near exterior walls and windows lose heat rapidly in Capital Region winters. A single-zone forced-air system would have left diners either freezing or the kitchen staff overheating. The client also required silent operation to maintain the restaurant's upscale ambiance.</p>

      <h2>Our Solution</h2>
      <p>We installed a four-zone radiant ceiling panel system with independent thermostatic control. The kitchen zone runs at reduced output to supplement — not fight — equipment heat. The dining room operates at full capacity with panels positioned to counteract window heat loss. The vestibule has its own high-output zone to create a warm transition from the outside.</p>

      <h2>Results</h2>
      <p>The system maintains consistent 71°F comfort across the dining room while the kitchen stays at a manageable 74°F — a 6-degree improvement over the previous forced-air setup. Energy consumption dropped 24% compared to the prior system. The restaurant owner reports zero guest complaints about temperature since installation, even during the January cold snap when outdoor temps hit -8°F.</p>
    `,
    featuredImage: "/images/projects/massry-center-heating.webp",
    gallery: [
      "/images/projects/massry-center-heating.webp",
      "/images/projects/massry-center-panels.webp",
      "/images/projects/massry-center-dining.webp",
    ],
    category: "Commercial HVAC",
    location: "Albany, NY",
    completedDate: "2024-06-15",
    metaTitle: "Commercial Heating Panel Installation — Albany, NY | It's No Sweat",
    metaDescription:
      "Zoned radiant heating panel system for a 4,200 sq ft restaurant at the Massry Center. 24% energy savings with independent climate zones. View project.",
  },
  {
    slug: "hubo-group-solar-maintenance",
    title: "Hubo Group — Commercial Solar Panel Maintenance Program",
    description:
      "Established an ongoing preventive maintenance contract for Hubo Group's 85kW commercial rooftop solar array. Restored 12% lost efficiency through deep cleaning, connection tightening, and inverter recalibration.",
    content: `
      <h2>Project Overview</h2>
      <p>Hubo Group's three-year-old commercial solar installation had never received professional maintenance. Production data showed a steady decline in output that exceeded normal panel degradation rates, indicating correctable performance issues.</p>

      <h2>The Challenge</h2>
      <p>The 220-panel rooftop array accumulated significant grime from nearby construction dust, bird droppings, and pollen buildup. Several panel connections had loosened due to thermal cycling, creating resistance points. The monitoring system was reporting intermittent communication errors with 15% of the microinverters.</p>

      <h2>Our Solution</h2>
      <p>We performed a full-array deep clean using deionized water and soft-bristle equipment to avoid micro-scratching. Our electricians re-torqued all DC connections to manufacturer spec and replaced corroded MC4 connectors on 8 panels. We updated microinverter firmware and replaced 3 units that failed diagnostic testing.</p>

      <h2>Results</h2>
      <p>The array's output increased 12% within the first week post-maintenance — recovering over 10,000 kWh of annual production worth approximately $2,800 in utility savings. Hubo Group signed a semi-annual maintenance contract to prevent future degradation, protecting their $180,000 solar investment long-term.</p>
    `,
    featuredImage: "/images/projects/hubo-group-solar.webp",
    gallery: [
      "/images/projects/hubo-group-solar.webp",
      "/images/projects/hubo-group-cleaning.webp",
      "/images/projects/hubo-group-inverters.webp",
    ],
    category: "Solar",
    location: "Saratoga Springs, NY",
    completedDate: "2024-04-10",
    metaTitle: "Commercial Solar Maintenance — Saratoga Springs, NY | It's No Sweat",
    metaDescription:
      "Commercial solar panel maintenance for an 85kW rooftop array. Restored 12% lost efficiency through professional cleaning and inverter service. View project.",
  },
  {
    slug: "sensor-technologies-solar-cooling",
    title: "Sensor Technologies Ltd — Solar-Powered Cooling System",
    description:
      "Integrated a 45kW solar array with a high-efficiency VRF cooling system for Sensor Technologies' 8,000 sq ft office and lab facility. Achieved near-zero daytime cooling costs during peak summer months.",
    content: `
      <h2>Project Overview</h2>
      <p>Sensor Technologies operates sensitive testing equipment that requires precise temperature control year-round. Their existing cooling system was consuming over $1,800/month in electricity during summer. They wanted to offset this cost with solar while maintaining the tight ±1°F temperature tolerances their lab demands.</p>

      <h2>The Challenge</h2>
      <p>Lab cooling loads are constant and non-negotiable — the equipment generates heat 10 hours a day regardless of weather. Any solar-cooling integration had to guarantee uninterrupted cooling with seamless grid fallback. The roof had limited space due to existing HVAC equipment and skylights.</p>

      <h2>Our Solution</h2>
      <p>We designed a hybrid system pairing a 45kW SunPower Maxeon panel array with a Daikin VRV IV heat recovery system. The VRF system simultaneously cools the lab while recovering waste heat to warm office spaces — eliminating redundant energy use. Solar production is prioritized to the cooling system via a smart load controller, with grid power as automatic backup.</p>

      <h2>Results</h2>
      <p>Summer cooling costs dropped from $1,800/month to under $200/month — an 89% reduction. The lab maintains its ±1°F tolerance without interruption. Annual energy savings exceed $19,000, putting the system on track for a 6-year payback. The heat recovery feature cut winter heating costs by an additional 30%.</p>
    `,
    featuredImage: "/images/projects/sensor-tech-cooling.webp",
    gallery: [
      "/images/projects/sensor-tech-cooling.webp",
      "/images/projects/sensor-tech-panels.webp",
      "/images/projects/sensor-tech-lab.webp",
    ],
    category: "Solar + HVAC",
    location: "Troy, NY",
    completedDate: "2024-02-28",
    metaTitle: "Solar-Powered Cooling System — Troy, NY | It's No Sweat",
    metaDescription:
      "Solar-integrated VRF cooling for an 8,000 sq ft lab facility. 89% reduction in summer cooling costs with ±1°F precision. View project details.",
  },
  {
    slug: "furnace-install",
    title: "Residential High-Efficiency Furnace Installation — Schenectady",
    description:
      "Replaced a 20-year-old 80% AFUE furnace with a 98.5% AFUE Carrier Infinity modulating gas furnace. Homeowner's heating bills dropped 35% in the first winter season.",
    content: `
      <h2>Project Overview</h2>
      <p>A Schenectady homeowner contacted us after their aging furnace started producing inconsistent heat and triggering frequent cycling. Rather than invest in repairing a system well past its expected lifespan, they opted for a full replacement with the highest-efficiency unit available.</p>

      <h2>The Challenge</h2>
      <p>The existing furnace was an 80% AFUE single-stage unit with oversized ductwork connections. The home had uneven heating — bedrooms upstairs ran 4–6°F colder than the main floor. The homeowner wanted whisper-quiet operation since the furnace closet shares a wall with the master bedroom.</p>

      <h2>Our Solution</h2>
      <p>We installed a Carrier Infinity 59MN7 modulating gas furnace with a variable-speed ECM blower. The modulating gas valve adjusts heat output in 0.5% increments between 40% and 100% capacity, eliminating the temperature swings of single-stage systems. We also rebalanced the ductwork and added a bypass damper to resolve the upstairs/downstairs temperature differential.</p>

      <h2>Results</h2>
      <p>The homeowner's first winter gas bill dropped 35% compared to the previous year's average. The upstairs-downstairs temperature difference narrowed from 6°F to under 1.5°F. Operating noise dropped from 72 dB to 40 dB — quieter than a library. The unit qualifies for a $1,200 NYSERDA rebate and the homeowner's utility company added a $500 efficiency incentive.</p>
    `,
    featuredImage: "/images/projects/furnace-install.webp",
    gallery: [
      "/images/projects/furnace-install.webp",
      "/images/projects/furnace-install-before.webp",
      "/images/projects/furnace-install-complete.webp",
    ],
    category: "Heating",
    location: "Schenectady, NY",
    completedDate: "2024-01-12",
    metaTitle: "High-Efficiency Furnace Installation — Schenectady, NY | It's No Sweat",
    metaDescription:
      "98.5% AFUE Carrier Infinity furnace installation in Schenectady. 35% heating bill reduction with whisper-quiet modulating operation. View project.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
