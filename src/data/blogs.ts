export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-buy-the-right-solar-panels",
    title: "How to Buy the Right Solar Panels for Your Home",
    excerpt:
      "Choosing solar panels can feel overwhelming. Here's a practical breakdown of panel types, efficiency ratings, and what actually matters for your roof and budget.",
    content: `
      <h2>Why Solar Panel Selection Matters More Than You Think</h2>
      <p>Not all solar panels are created equal. The difference between a tier-one monocrystalline panel and a budget polycrystalline option can mean thousands of dollars in energy savings over a 25-year lifespan. For homeowners in the Capital Region, where seasonal temperature swings affect panel output, choosing the right equipment is critical.</p>

      <h2>Monocrystalline vs. Polycrystalline vs. Thin-Film</h2>
      <p>Monocrystalline panels offer the highest efficiency rates (20–22%) and perform best in limited roof space. Polycrystalline panels are more affordable but slightly less efficient (15–17%). Thin-film panels are lightweight and flexible but require significantly more surface area — rarely practical for residential installs.</p>

      <h2>Key Specs to Compare</h2>
      <p>Focus on these four numbers when comparing quotes: <strong>wattage rating</strong> (look for 370W+ per panel), <strong>temperature coefficient</strong> (lower is better for hot summers), <strong>warranty length</strong> (25 years is the industry standard), and <strong>degradation rate</strong> (under 0.5% per year is excellent).</p>

      <h2>Local Incentives That Offset Your Investment</h2>
      <p>New York State offers the NY-Sun incentive program, plus the federal Investment Tax Credit (ITC) covers 30% of your total installation cost through 2032. Combined with net metering, most homeowners see a full return on investment within 7–9 years.</p>

      <h2>Get a Free Solar Assessment</h2>
      <p>Our team evaluates your roof orientation, shading, and energy usage to recommend the exact system size and panel type that maximizes your savings. No high-pressure sales — just data-driven recommendations from certified NABCEP installers.</p>
    `,
    featuredImage: "/images/blog/solar-panels-guide.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-11-15",
    category: "Solar Energy",
    tags: ["solar panels", "home solar", "energy savings", "New York solar incentives"],
    metaTitle: "How to Buy the Right Solar Panels | It's No Sweat Heating & Air",
    metaDescription:
      "Learn how to choose the best solar panels for your home. Compare monocrystalline vs polycrystalline, key specs, and NY solar incentives. Free assessment available.",
  },
  {
    slug: "signs-that-your-ac-needs-repair",
    title: "5 Warning Signs Your AC Needs Repair Before It Fails Completely",
    excerpt:
      "Strange noises, weak airflow, and rising energy bills are more than minor annoyances — they're your air conditioner asking for help. Catch these red flags early.",
    content: `
      <h2>Don't Wait for a Total Breakdown</h2>
      <p>Most AC failures don't happen overnight. They build gradually, dropping small hints weeks or even months before the system gives out entirely. Recognizing these warning signs saves you from emergency repair bills and sweltering summer days without cooling.</p>

      <h2>1. Warm Air Blowing From Your Vents</h2>
      <p>If your AC is running but pushing warm air, the compressor may be failing or your refrigerant levels could be critically low. Both require professional diagnosis — topping off refrigerant without finding the leak is a temporary fix that wastes money.</p>

      <h2>2. Unusual Grinding, Squealing, or Banging Sounds</h2>
      <p>A healthy AC should operate quietly. Grinding suggests worn motor bearings. Squealing points to a slipping belt or failing blower motor. Banging usually means a loose or broken internal component. None of these resolve on their own.</p>

      <h2>3. Sudden Spike in Energy Bills</h2>
      <p>When your AC works harder to deliver the same cooling, your electric bill reflects it. If your usage habits haven't changed but your bill jumped 20% or more, your system's efficiency has degraded and needs attention.</p>

      <h2>4. Frequent Cycling On and Off</h2>
      <p>Short cycling — where the unit starts, runs briefly, then shuts off — strains the compressor and dramatically shortens the system's lifespan. This is often caused by an oversized unit, thermostat issues, or electrical problems.</p>

      <h2>5. Excess Moisture or Leaking Around the Unit</h2>
      <p>Water pooling around your indoor unit could indicate a blocked condensate drain, which can lead to mold growth. Refrigerant leaks are more serious and require immediate professional service.</p>

      <h2>Schedule a Diagnostic Today</h2>
      <p>Our NATE-certified technicians perform a comprehensive 21-point inspection to pinpoint exactly what's wrong — and what it'll cost to fix — before any work begins. No surprises, no upsells.</p>
    `,
    featuredImage: "/images/blog/ac-repair-signs.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-10-22",
    category: "Air Conditioning",
    tags: ["AC repair", "air conditioning", "HVAC maintenance", "energy efficiency"],
    metaTitle: "5 Signs Your AC Needs Repair | It's No Sweat Heating & Air",
    metaDescription:
      "Warm air, strange noises, high bills? These 5 warning signs mean your AC needs professional repair. Capital Region HVAC experts — call today.",
  },
  {
    slug: "hvac-maintenance-for-optimal-performance",
    title: "HVAC Maintenance: The Seasonal Checklist That Prevents Costly Breakdowns",
    excerpt:
      "A $150 maintenance visit can prevent a $3,000 emergency repair. Here's what professional HVAC maintenance actually covers and why skipping it costs more.",
    content: `
      <h2>Maintenance Isn't Optional — It's Insurance</h2>
      <p>The Department of Energy estimates that neglected HVAC systems lose 5% efficiency every year without maintenance. Over a 10-year system lifespan, that's the equivalent of paying for heating and cooling a house 50% larger than yours.</p>

      <h2>Spring Checklist: Preparing Your AC</h2>
      <p>Before the first heat wave, your technician should inspect refrigerant levels, clean the evaporator and condenser coils, test the thermostat calibration, check electrical connections, and clear the condensate drain. Dirty coils alone can reduce efficiency by 30%.</p>

      <h2>Fall Checklist: Preparing Your Furnace</h2>
      <p>Before winter, a proper tune-up includes inspecting the heat exchanger for cracks (a carbon monoxide risk), testing the ignition system, lubricating moving parts, replacing the air filter, and verifying gas pressure. A cracked heat exchanger is both a safety hazard and an expensive repair if caught late.</p>

      <h2>What Homeowners Can Do Between Visits</h2>
      <p>Change your air filter every 60–90 days (monthly if you have pets). Keep outdoor units clear of debris with at least 2 feet of clearance on all sides. Program your thermostat to reduce workload during unoccupied hours. These small habits extend equipment life significantly.</p>

      <h2>Our Comfort Club Maintenance Plan</h2>
      <p>Members receive two annual tune-ups (spring and fall), priority scheduling, 15% off all repairs, and no overtime charges. Most members save more than the plan costs within the first year through prevented breakdowns and improved efficiency.</p>
    `,
    featuredImage: "/images/blog/hvac-maintenance-guide.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-09-10",
    category: "HVAC Maintenance",
    tags: ["HVAC maintenance", "furnace tune-up", "AC maintenance", "seasonal checklist"],
    metaTitle: "HVAC Maintenance Checklist | It's No Sweat Heating & Air",
    metaDescription:
      "Seasonal HVAC maintenance prevents costly breakdowns and improves efficiency. See our spring and fall checklists. Capital Region maintenance plans available.",
  },
  {
    slug: "how-to-choose-the-right-ac-repair-company",
    title: "How to Choose the Right AC Repair Company (Without Getting Ripped Off)",
    excerpt:
      "Not all HVAC companies operate with integrity. Learn what licenses, certifications, and pricing practices separate trustworthy contractors from the rest.",
    content: `
      <h2>The HVAC Industry Has a Trust Problem</h2>
      <p>Home services consistently rank among the most-complained-about industries with the Better Business Bureau. Unlicensed contractors, inflated quotes, and unnecessary replacements are more common than homeowners realize. Knowing what to look for protects your wallet and your home.</p>

      <h2>Verify Licensing and Insurance — Every Time</h2>
      <p>In New York State, HVAC contractors must hold proper trade licenses and carry both general liability and workers' compensation insurance. Ask for proof. A legitimate company will provide it without hesitation. An uninsured contractor working on your property puts you at legal and financial risk.</p>

      <h2>Look for NATE Certification</h2>
      <p>NATE (North American Technician Excellence) is the gold standard for HVAC technician certification. NATE-certified techs pass rigorous exams covering installation, service, and system design. Only 10% of HVAC technicians nationwide hold this credential — it's a meaningful differentiator.</p>

      <h2>Demand Transparent, Written Estimates</h2>
      <p>Reputable companies provide detailed written estimates before starting work. Be wary of anyone who quotes over the phone without seeing the system, pressures you into same-day decisions, or refuses to itemize labor and parts separately.</p>

      <h2>Check Reviews — But Read Them Critically</h2>
      <p>Look for patterns in Google and BBB reviews, not just star counts. Consistent praise for communication, punctuality, and fair pricing matters more than a perfect 5.0 from 12 reviews. Pay attention to how the company responds to negative reviews — that reveals their character.</p>

      <h2>Why Capital Region Homeowners Trust Us</h2>
      <p>We're fully licensed, insured, and every technician on our team holds NATE certification. We provide written estimates on every job, honor our quoted price, and back all work with a satisfaction guarantee. Our 4.9-star Google rating comes from over 300 verified customer reviews.</p>
    `,
    featuredImage: "/images/blog/choosing-ac-company.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-08-05",
    category: "Tips & Guides",
    tags: ["AC repair", "HVAC company", "contractor tips", "home services"],
    metaTitle: "How to Choose an AC Repair Company | It's No Sweat Heating & Air",
    metaDescription:
      "Learn how to vet HVAC contractors: check licenses, NATE certification, transparent pricing, and reviews. Trusted Capital Region AC repair since day one.",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
