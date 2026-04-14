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
      <p>Not all solar panels are created equal. The difference between a tier-one monocrystalline panel and a budget polycrystalline option can mean thousands of dollars in energy savings over a 25-year lifespan. For homeowners across the Inland Empire — where summer temperatures regularly exceed 100°F and panels face brutal UV exposure — choosing the right equipment is critical to protecting your investment.</p>

      <h2>Monocrystalline vs. Polycrystalline vs. Thin-Film</h2>
      <p>Monocrystalline panels offer the highest efficiency rates (20–22%) and perform best in limited roof space. Polycrystalline panels are more affordable but slightly less efficient (15–17%). Thin-film panels are lightweight and flexible but require significantly more surface area — rarely practical for residential installs in cities like <a href="/service-areas/moreno-valley/">Moreno Valley</a> or <a href="/service-areas/riverside/">Riverside</a> where roof space is limited.</p>

      <h2>Key Specs to Compare</h2>
      <p>Focus on these four numbers when comparing quotes: <strong>wattage rating</strong> (look for 370W+ per panel), <strong>temperature coefficient</strong> (lower is better for hot summers), <strong>warranty length</strong> (25 years is the industry standard), and <strong>degradation rate</strong> (under 0.5% per year is excellent).</p>

      <h2>Pair Solar With an Efficient HVAC System</h2>
      <p>Solar pays back faster when paired with an efficient cooling system that isn't wasting power. Before going solar, it's worth having your HVAC evaluated — an oversized or failing AC can add 30% to your monthly load. Our <a href="/service/hvac-maintenance/">HVAC maintenance service</a> catches efficiency losses early, and a new <a href="/service/ac-installation/">AC installation</a> sized correctly for your home maximizes the return on your solar investment.</p>

      <h2>Federal Incentives That Offset Your Investment</h2>
      <p>The federal Residential Clean Energy Credit covers 30% of your total solar installation cost through 2032. Combined with California's net metering program, most Inland Empire homeowners see a full return on investment within 7–9 years. You can read the full eligibility breakdown at <a href="https://www.energystar.gov/about/federal-tax-credits/solar-energy-systems" target="_blank" rel="noopener noreferrer">ENERGY STAR's solar energy systems tax credit page</a>.</p>

      <h2>Get a Free Solar &amp; HVAC Assessment</h2>
      <p>Our team evaluates your roof orientation, shading, energy usage, and HVAC efficiency to recommend the exact system size that maximizes your savings. No high-pressure sales — just data-driven recommendations. <a href="/contact-us/">Request a free estimate</a> or call (951) 331-3310 today.</p>
    `,
    featuredImage: "/images/blog/solar-panels-guide.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-11-15",
    category: "Solar Energy",
    tags: ["solar panels", "home solar", "energy savings", "California solar"],
    metaTitle: "How to Buy the Right Solar Panels | It's No Sweat Heat & Air",
    metaDescription:
      "Learn how to choose the best solar panels for your Inland Empire home. Compare panel types, key specs, and federal tax credits. Free assessment available.",
  },
  {
    slug: "signs-that-your-ac-needs-repair",
    title: "5 Warning Signs Your AC Needs Repair Before It Fails Completely",
    excerpt:
      "Strange noises, weak airflow, and rising energy bills are more than minor annoyances — they're your air conditioner asking for help. Catch these red flags early.",
    content: `
      <h2>Don't Wait for a Total Breakdown</h2>
      <p>Most AC failures don't happen overnight. They build gradually, dropping small hints weeks or even months before the system gives out entirely. Recognizing these warning signs saves you from emergency <a href="/service/ac-repair/">AC repair</a> bills and sweltering summer days without cooling — especially in the Inland Empire where outdoor temperatures regularly push systems to their limit.</p>

      <h2>1. Warm Air Blowing From Your Vents</h2>
      <p>If your AC is running but pushing warm air, the compressor may be failing or your refrigerant levels could be critically low. Both require professional diagnosis — topping off refrigerant without finding the leak is a temporary fix that wastes money. The <a href="https://www.energy.gov/energysaver/central-air-conditioning" target="_blank" rel="noopener noreferrer">U.S. Department of Energy</a> lists low refrigerant as one of the top three causes of premature compressor failure.</p>

      <h2>2. Unusual Grinding, Squealing, or Banging Sounds</h2>
      <p>A healthy AC should operate quietly. Grinding suggests worn motor bearings. Squealing points to a slipping belt or failing blower motor. Banging usually means a loose or broken internal component. None of these resolve on their own.</p>

      <h2>3. Sudden Spike in Energy Bills</h2>
      <p>When your AC works harder to deliver the same cooling, your electric bill reflects it. If your usage habits haven't changed but your bill jumped 20% or more, your system's efficiency has degraded. Regular <a href="/service/hvac-maintenance/">HVAC maintenance</a> catches this early, before it turns into an emergency replacement.</p>

      <h2>4. Frequent Cycling On and Off</h2>
      <p>Short cycling — where the unit starts, runs briefly, then shuts off — strains the compressor and dramatically shortens the system's lifespan. This is often caused by an oversized unit, thermostat issues, or electrical problems. If your system is over 12 years old and short cycling, it may be time to consider a new <a href="/service/ac-installation/">AC installation</a> sized correctly for your home.</p>

      <h2>5. Excess Moisture or Leaking Around the Unit</h2>
      <p>Water pooling around your indoor unit could indicate a blocked condensate drain, which can lead to mold growth and poor <a href="/service/indoor-air-quality/">indoor air quality</a>. Refrigerant leaks are more serious and require immediate professional service.</p>

      <h2>Schedule a Diagnostic Today</h2>
      <p>Our NATE-certified technicians perform a comprehensive inspection to pinpoint exactly what's wrong — and what it'll cost to fix — before any work begins. No surprises, no upsells. <a href="/contact-us/">Request same-day service</a> online or call (951) 331-3310.</p>
    `,
    featuredImage: "/images/blog/ac-repair-signs.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-10-22",
    category: "Air Conditioning",
    tags: ["AC repair", "air conditioning", "HVAC maintenance", "energy efficiency"],
    metaTitle: "5 Signs Your AC Needs Repair | It's No Sweat Heat & Air",
    metaDescription:
      "Warm air, strange noises, high bills? These 5 warning signs mean your AC needs professional repair. Inland Empire HVAC experts — call today.",
  },
  {
    slug: "hvac-maintenance-for-optimal-performance",
    title: "HVAC Maintenance: The Seasonal Checklist That Prevents Costly Breakdowns",
    excerpt:
      "A $150 maintenance visit can prevent a $3,000 emergency repair. Here's what professional HVAC maintenance actually covers and why skipping it costs more.",
    content: `
      <h2>Maintenance Isn't Optional — It's Insurance</h2>
      <p>The <a href="https://www.energy.gov/energysaver/maintaining-your-air-conditioner" target="_blank" rel="noopener noreferrer">U.S. Department of Energy</a> estimates that neglected HVAC systems lose roughly 5% efficiency every year without maintenance. Over a 10-year system lifespan, that's the equivalent of paying for heating and cooling a house 50% larger than yours. A $150 <a href="/service/hvac-maintenance/">HVAC maintenance visit</a> can prevent a $3,000 emergency repair.</p>

      <h2>Spring Checklist: Preparing Your AC</h2>
      <p>Before the first Inland Empire heat wave, your technician should inspect refrigerant levels, clean the evaporator and condenser coils, test the thermostat calibration, check electrical connections, and clear the condensate drain. Dirty coils alone can reduce efficiency by 30% — and in a region where summer temperatures routinely exceed 100°F, that lost efficiency hits your electric bill hard. If your system is already showing signs of strain, our <a href="/service/ac-repair/">AC repair team</a> can diagnose the issue before it escalates.</p>

      <h2>Fall Checklist: Preparing Your Furnace</h2>
      <p>Before winter, a proper tune-up includes inspecting the heat exchanger for cracks (a carbon monoxide risk), testing the ignition system, lubricating moving parts, replacing the air filter, and verifying gas pressure. A cracked heat exchanger is both a safety hazard and an expensive repair if caught late. Our <a href="/service/furnace-repair/">furnace repair service</a> handles everything from routine tune-ups to full component replacements.</p>

      <h2>What Homeowners Can Do Between Visits</h2>
      <p>Change your air filter every 60–90 days (monthly if you have pets). Keep outdoor units clear of debris with at least 2 feet of clearance on all sides. Program your thermostat to reduce workload during unoccupied hours. These small habits extend equipment life significantly and also improve your home's <a href="/service/indoor-air-quality/">indoor air quality</a>.</p>

      <h2>Our Maintenance Plan</h2>
      <p>Members receive two annual tune-ups (spring and fall), priority scheduling, 15% off all repairs, and no trip charges. Most members save more than the plan costs within the first year. Check our current <a href="/service/special-offer/">maintenance plan offers</a> or <a href="/contact-us/">schedule your first visit</a> today.</p>
    `,
    featuredImage: "/images/blog/hvac-maintenance-guide.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-09-10",
    category: "HVAC Maintenance",
    tags: ["HVAC maintenance", "furnace tune-up", "AC maintenance", "seasonal checklist"],
    metaTitle: "HVAC Maintenance Checklist | It's No Sweat Heat & Air",
    metaDescription:
      "Seasonal HVAC maintenance prevents costly breakdowns and improves efficiency. See our spring and fall checklists. Inland Empire maintenance plans available.",
  },
  {
    slug: "how-to-choose-the-right-ac-repair-company",
    title: "How to Choose the Right AC Repair Company (Without Getting Ripped Off)",
    excerpt:
      "Not all HVAC companies operate with integrity. Learn what licenses, certifications, and pricing practices separate trustworthy contractors from the rest.",
    content: `
      <h2>The HVAC Industry Has a Trust Problem</h2>
      <p>Home services consistently rank among the most-complained-about industries with the Better Business Bureau. Unlicensed contractors, inflated quotes, and unnecessary replacements are more common than homeowners realize. Knowing what to look for protects your wallet and your home — especially in the Inland Empire where summer emergencies create high-pressure sales situations.</p>

      <h2>Verify Licensing and Insurance — Every Time</h2>
      <p>In California, HVAC contractors must hold a valid C-20 license from the Contractors State License Board and carry both general liability and workers' compensation insurance. You can verify any contractor's license for free at the <a href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx" target="_blank" rel="noopener noreferrer">CSLB license lookup tool</a>. A legitimate company will provide their license number without hesitation. An uninsured contractor working on your property puts you at legal and financial risk.</p>

      <h2>Look for NATE Certification</h2>
      <p>NATE (North American Technician Excellence) is the gold standard for HVAC technician certification. NATE-certified techs pass rigorous exams covering installation, service, and system design. Only about 10% of HVAC technicians nationwide hold this credential — it's a meaningful differentiator. Every technician on our <a href="/about-us/">team</a> carries NATE certification.</p>

      <h2>Demand Transparent, Written Estimates</h2>
      <p>Reputable companies provide detailed written estimates before starting work. Be wary of anyone who quotes over the phone without seeing the system, pressures you into same-day decisions, or refuses to itemize labor and parts separately. Whether you need an <a href="/service/ac-repair/">AC repair</a> or a full system replacement, you should always see the numbers in writing first.</p>

      <h2>Check Reviews — But Read Them Critically</h2>
      <p>Look for patterns in Google and BBB reviews, not just star counts. Consistent praise for communication, punctuality, and fair pricing matters more than a perfect 5.0 from 12 reviews. Pay attention to how the company responds to negative reviews — that reveals their character.</p>

      <h2>Why Inland Empire Homeowners Trust Us</h2>
      <p>We're fully licensed (CA #1058772), insured, and every technician on our team holds NATE certification. We provide written estimates on every job, honor our quoted price, and back all work with a satisfaction guarantee. Our 4.9-star rating comes from over 500 verified customer reviews across <a href="/service-areas/">30 cities we serve</a>. Ready to experience the difference? <a href="/contact-us/">Request a free estimate</a> today.</p>
    `,
    featuredImage: "/images/blog/choosing-ac-company.webp",
    author: "It's No Sweat Team",
    publishedDate: "2024-08-05",
    category: "Tips & Guides",
    tags: ["AC repair", "HVAC company", "contractor tips", "home services"],
    metaTitle: "How to Choose an AC Repair Company | It's No Sweat Heat & Air",
    metaDescription:
      "Learn how to vet HVAC contractors: check licenses, NATE certification, transparent pricing, and reviews. Trusted Inland Empire AC repair since day one.",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
