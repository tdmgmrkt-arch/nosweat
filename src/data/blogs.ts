export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  author: string;
  authorTitle: string;
  authorBio: string;
  publishedDate: string;
  dateModified?: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const defaultAuthor = {
  name: "Justin Jaszewski",
  title: "Co-Founder & NATE-Certified Technician",
  bio: "Justin is the co-founder of It's No Sweat Heat & Air and a NATE-certified HVAC technician with over 25 years of hands-on experience across Moreno Valley and the Inland Empire. He leads the company's technical standards, trains every technician on the team, and personally inspects complex installations. Justin holds California HVAC license #1058772 and specializes in residential system design, load calculations, and energy-efficiency upgrades.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-cooling-tips-moreno-valley",
    title: "12 Cooling Hacks to Slash Your Summer Electric Bill in Moreno Valley",
    excerpt:
      "Inland Empire summers push your AC — and your budget — to the limit. Here are 12 professional-grade cooling strategies that cut kilowatt-hours without sacrificing comfort.",
    content: `
      <h2>Summer Cooling in the Inland Empire Isn't Cheap — But It Doesn't Have to Hurt</h2>
      <p>Between June and September, Moreno Valley homeowners routinely see summer electric bills triple their winter baseline. Southern California Edison's tiered pricing punishes heavy AC use, and once you cross into the highest tier, every additional kilowatt-hour costs nearly double. The good news: most of that waste is preventable. These 12 tactics come straight from our field technicians and consistently save homeowners across <a href="/service-areas/moreno-valley/">Moreno Valley</a> and neighboring <a href="/service-areas/riverside/">Riverside</a> between 15% and 30% on their summer bills.</p>

      <h2>1. Set Your Thermostat to 78°F When You're Home</h2>
      <p>Every degree below 78°F increases cooling costs by roughly 3–5%. If 78 feels warm, add a ceiling fan (spinning counter-clockwise) — moving air makes 78°F feel like 74°F at a fraction of the energy cost.</p>

      <h2>2. Program a Setback for When You're Out</h2>
      <p>Bumping the thermostat up 7–10°F for eight hours a day can trim 10% off your annual cooling bill. A modern programmable or smart thermostat pays for itself in one summer.</p>

      <h2>3. Change Your Air Filter Every 30–60 Days During Summer</h2>
      <p>A dirty filter forces your blower motor to work harder, shortening equipment life and driving up runtime. It's the cheapest maintenance step you can perform — and one our <a href="/service/hvac-maintenance/">HVAC maintenance</a> team catches on every visit.</p>

      <h2>4. Close Blinds and Curtains on West-Facing Windows After Noon</h2>
      <p>Solar heat gain through unshaded windows can add 5–7°F to a room by 4 p.m. Blackout curtains or cellular shades are especially effective in stucco tract homes common across the Inland Empire.</p>

      <h2>5. Cook Outside When You Can</h2>
      <p>Running an oven at 400°F for an hour can raise your indoor temperature by 2–3°F and force your AC into overtime for the rest of the evening. The grill isn't just for flavor — it's cheaper cooling.</p>

      <h2>6. Seal the Leaks Around Doors, Windows, and Attic Hatches</h2>
      <p>The average home loses 20–30% of its conditioned air through unsealed gaps. Weatherstripping and caulk cost under $30 and take an afternoon.</p>

      <h2>7. Insulate Your Attic to R-38 or Higher</h2>
      <p>California Title 24 requires R-30 for existing homes, but R-38 to R-49 is the sweet spot for cutting summer cooling loads in the Inland Empire.</p>

      <h2>8. Clear the Space Around Your Outdoor Condenser</h2>
      <p>Overgrown shrubs, weeds, or storage items within 2 feet of the outdoor unit choke airflow and drop efficiency by up to 15%. A quick trim is free horsepower for your system.</p>

      <h2>9. Have Your Ductwork Inspected</h2>
      <p>Leaky ducts in an attic can waste 20–40% of the air your AC produces before it ever reaches a vent. If some rooms cool poorly, this is often the culprit. Our team pressure-tests duct systems during a full <a href="/service/hvac-maintenance/">HVAC tune-up</a>.</p>

      <h2>10. Upgrade to a High-Efficiency System If Yours Is 12+ Years Old</h2>
      <p>Modern SEER2-rated systems use 30–50% less electricity than a 15-year-old unit doing the same cooling work. If yours is limping into another summer, a new <a href="/service/ac-installation/">AC installation</a> often pays for itself in energy savings within 7–8 years.</p>

      <h2>11. Consider Solar to Offset Peak Rates</h2>
      <p>Rooftop solar in the Inland Empire produces its most power exactly when your AC needs it most — hot afternoons. Combined with a right-sized HVAC system, solar can eliminate the tier-3 rate exposure entirely.</p>

      <h2>12. Book a Pre-Summer Diagnostic</h2>
      <p>A single tune-up can restore lost efficiency, catch failing capacitors, and top off refrigerant before a heat wave turns a small problem into an emergency <a href="/service/ac-repair/">AC repair</a> call. The U.S. Department of Energy's <a href="https://www.energy.gov/energysaver/tips-cooling-your-home" target="_blank" rel="noopener noreferrer">official cooling guide</a> confirms professional maintenance as the single highest-ROI cooling investment homeowners can make.</p>

      <h2>Ready to Cut Your Summer Bill?</h2>
      <p>Our NATE-certified technicians serve every neighborhood in Moreno Valley and across the Inland Empire. Book a same-day diagnostic or a full seasonal tune-up online, or call (951) 331-3310. <a href="/contact-us/">Request your free estimate</a> today.</p>
    `,
    featuredImage: "/images/services/ac-repair-new.webp",
    featuredImageWidth: 1344,
    featuredImageHeight: 768,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-07-15",
    category: "Energy Efficiency",
    tags: ["summer cooling", "electric bill", "Moreno Valley", "AC efficiency"],
    metaTitle: "12 Summer Cooling Hacks for Moreno Valley Homes",
    metaDescription:
      "Cut your summer electric bill in Moreno Valley with 12 professional AC and cooling strategies from NATE-certified Inland Empire HVAC technicians.",
  },
  {
    slug: "heat-wave-ac-prep-inland-empire",
    title: "Heat Wave Ready: How to Prep Your Inland Empire AC for 110°F Days",
    excerpt:
      "When the Inland Empire hits triple digits, your AC either performs or fails — no middle ground. Here's what to check before the next heat dome parks over Riverside County.",
    content: `
      <h2>Heat Waves Are Getting Worse — And Your AC Knows It</h2>
      <p>The National Weather Service has issued more excessive heat warnings for Riverside County in the last five years than in the previous fifteen combined. When outdoor temperatures push past 110°F, air conditioners work at the very edge of their design limits. A system that runs "just fine" at 95°F can fail spectacularly at 112°F. The <a href="https://www.weather.gov/safety/heat" target="_blank" rel="noopener noreferrer">NWS heat safety guide</a> lists air conditioning access as the single most important factor in preventing heat-related illness — so prep matters.</p>

      <h2>Start With a Full Pre-Season Tune-Up</h2>
      <p>Most heat-wave AC failures trace back to problems that were detectable weeks earlier: weak capacitors, low refrigerant, dirty coils, or a fan motor pulling too many amps. A comprehensive <a href="/service/hvac-maintenance/">HVAC maintenance visit</a> catches all of them before the mercury climbs.</p>

      <h2>Check the Age of Your Capacitor</h2>
      <p>Run capacitors are the #1 heat-wave failure point. They cost about $20 in parts but cause 100% of your cooling to stop when they blow. If your capacitor is over five years old — and especially if it's the original from a 10+ year old system — replace it proactively. It's cheap insurance.</p>

      <h2>Clean the Outdoor Condenser Coil</h2>
      <p>A layer of dust, pollen, and cottonwood fluff on your outdoor coil can raise refrigerant pressures dangerously high on a 110°F day. This is the leading cause of compressor trips during extreme heat. A garden hose (never a pressure washer) run gently top-down clears most of it — but a professional cleaning goes deeper.</p>

      <h2>Verify Refrigerant Charge</h2>
      <p>An undercharged system doesn't just cool less — it works harder, runs hotter, and dies faster. On the flip side, an overcharged system can flood the compressor. Only a licensed technician with gauges can properly verify charge. If a technician says "let me top it off" without finding a leak first, get a second opinion. Our <a href="/service/ac-repair/">AC repair team</a> always locates and repairs leaks before recharging.</p>

      <h2>Pre-Cool Before Peak Heat</h2>
      <p>On a forecasted 110°F day, drop your thermostat to 72°F between 6 a.m. and 10 a.m. while outdoor temps are still manageable. Then raise it to 78°F for the afternoon. Your system will coast on the cool mass of the house rather than fighting a losing battle at 4 p.m.</p>

      <h2>Know When to Call for Help</h2>
      <p>If your indoor temperature keeps climbing despite the AC running, your outdoor unit is icing up, or you hear unusual clicking, buzzing, or grinding — shut the system off and call. Continuing to run a struggling AC in extreme heat is how a $300 repair becomes a $6,000 replacement. We serve <a href="/service-areas/riverside/">Riverside</a>, <a href="/service-areas/moreno-valley/">Moreno Valley</a>, and <a href="/service-areas/temecula/">Temecula</a> with same-day emergency dispatch.</p>

      <h2>If Your System Is 12+ Years Old, Plan the Replacement Now</h2>
      <p>Modern high-efficiency systems handle extreme heat dramatically better than the units engineered a decade ago. If yours is on borrowed time, replacing it in the spring beats replacing it during a heat emergency when supply is thin and prices spike. See our <a href="/service/ac-installation/">AC installation options</a> or <a href="/contact-us/">request a free assessment</a>.</p>

      <h2>Beat the Heat With a Plan</h2>
      <p>Every summer, we field emergency calls that could have been prevented in April. Don't be that call. Book a pre-heat-wave tune-up or claim our current <a href="/service/special-offer/">seasonal offer</a> today.</p>
    `,
    featuredImage: "/images/services/ac-install-v3.webp",
    featuredImageWidth: 5504,
    featuredImageHeight: 3072,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-06-12",
    category: "Air Conditioning",
    tags: ["heat wave", "AC preparation", "Inland Empire", "extreme heat"],
    metaTitle: "Heat Wave AC Prep for Inland Empire Homeowners",
    metaDescription:
      "Extreme heat demands a bulletproof AC. Riverside County HVAC pros share the pre-heat-wave checklist that prevents 110°F breakdowns and emergency repairs.",
  },
  {
    slug: "smart-thermostats-worth-it-perris-menifee",
    title: "Are Smart Thermostats Actually Worth It for Perris and Menifee Homes?",
    excerpt:
      "Smart thermostats promise big savings, but the ROI depends heavily on your home, your HVAC system, and your habits. Here's an honest breakdown for Inland Empire homeowners.",
    content: `
      <h2>The Short Answer: Yes — But With Caveats</h2>
      <p>For most homeowners in <a href="/service-areas/perris/">Perris</a> and <a href="/service-areas/menifee/">Menifee</a>, a properly configured smart thermostat saves between 8% and 15% on annual heating and cooling costs. That's real money in a region where summer AC bills routinely exceed $300 a month. But the savings are highly dependent on getting the installation, configuration, and system compatibility right.</p>

      <h2>Why Smart Thermostats Actually Save Money</h2>
      <p>The savings don't come from magic — they come from removing human error. Most homeowners forget to raise the setpoint when they leave for work, don't cut back at night, and set unrealistic temperature targets. A smart thermostat learns your schedule, uses geofencing to know when the house is empty, and often integrates with your utility's peak-hour signals to avoid the most expensive kilowatt-hours. <a href="https://www.energystar.gov/products/smart_thermostats" target="_blank" rel="noopener noreferrer">ENERGY STAR certified smart thermostats</a> are independently verified to deliver measurable savings.</p>

      <h2>Compatibility: Not Every System Plays Nice</h2>
      <p>Smart thermostats need a "C-wire" (common wire) to power themselves. Many older Inland Empire homes — especially those built in the 1980s and early 1990s — don't have one. Adapters exist, but they're finicky. Multi-stage or variable-speed systems also require specific thermostat models to unlock their full efficiency. Our technicians verify compatibility during any <a href="/service/hvac-maintenance/">HVAC maintenance</a> visit.</p>

      <h2>Which Model to Buy</h2>
      <p>The three that consistently perform well in the Inland Empire climate:</p>
      <ul>
        <li><strong>Ecobee Premium</strong> — best-in-class remote sensors solve the "hot bedroom" problem that plagues two-story stucco homes.</li>
        <li><strong>Google Nest Learning Thermostat</strong> — easiest interface, best geofencing, but less flexibility for advanced HVAC configurations.</li>
        <li><strong>Honeywell T9 or T10 Pro</strong> — pro-installer favorite for reliability and compatibility with older systems.</li>
      </ul>

      <p>Skip the $79 no-name Amazon models. They fail early, lose Wi-Fi connection often, and rarely deliver the promised savings.</p>

      <h2>The "Set It and Forget It" Trap</h2>
      <p>A smart thermostat still needs a proper schedule to save money. If you set it to 72°F and never change it, you'll pay the same as an old dial thermostat. Take 20 minutes to configure home/away schedules, sleep setbacks, and eco temperatures — that's where the savings actually live.</p>

      <h2>SCE Rebates in Riverside County</h2>
      <p>Southern California Edison periodically offers rebates of $50–$120 on qualifying smart thermostats. These programs come and go — check current offers before purchasing. Some models also qualify for federal tax credits under the Inflation Reduction Act's home energy incentives.</p>

      <h2>Should You Install It Yourself?</h2>
      <p>If you have a standard single-stage system with a C-wire and comfortable DIY skills, self-installation is realistic. If you have a heat pump, a two-stage system, no C-wire, or you're not 100% sure what the wires do — hire it out. A miswired thermostat can damage the control board and turn a $200 upgrade into a $1,500 repair. When we swap a thermostat during an <a href="/service/ac-repair/">AC repair</a> visit, it takes 30 minutes and comes with a warranty.</p>

      <h2>The Bottom Line</h2>
      <p>For a Perris or Menifee homeowner with a system less than 15 years old and typical summer usage, a quality smart thermostat pays for itself in 12–18 months and continues delivering savings for a decade. <a href="/contact-us/">Request a compatibility check</a> or call (951) 331-3310 — we'll tell you honestly whether an upgrade makes sense for your specific setup.</p>
    `,
    featuredImage: "/images/services/nesthermostat.webp",
    featuredImageWidth: 1920,
    featuredImageHeight: 1500,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-05-08",
    category: "Energy Efficiency",
    tags: ["smart thermostat", "Perris", "Menifee", "energy savings"],
    metaTitle: "Smart Thermostat Worth It? Perris & Menifee Guide",
    metaDescription:
      "Honest guide to smart thermostats for Perris and Menifee homeowners: real savings, compatibility, top models, and SCE rebates. Free compatibility check.",
  },
  {
    slug: "april-ac-tune-up-riverside",
    title: "Why April Is the Best Month to Book Your AC Tune-Up in Riverside",
    excerpt:
      "Booking your AC tune-up in April instead of July means faster scheduling, better pricing, and a cooling system that's actually ready when the heat hits. Here's why timing matters.",
    content: `
      <h2>The April Advantage Nobody Talks About</h2>
      <p>Every May, our phones start ringing off the hook. By late June, we're scheduling emergency AC repairs three weeks out. The homeowners who booked their tune-up in April? They cruise into summer with a fully inspected, fully calibrated system — and they paid less to do it. Timing your <a href="/service/hvac-maintenance/">annual HVAC maintenance</a> matters more than most Inland Empire homeowners realize.</p>

      <h2>Reason 1: Availability</h2>
      <p>April technician calendars are 60–70% booked. July calendars are 100% booked with emergency work, meaning routine tune-ups get pushed to August or September — sometimes after your system has already failed once. Booking in April guarantees the appointment slot you actually want, not the leftover 3 p.m. weekday nobody else took.</p>

      <h2>Reason 2: Pricing</h2>
      <p>Spring maintenance specials are real. HVAC companies offer them because they need to fill April and May calendars before the summer rush. By July, discounts vanish because demand is unmanageable. This month's <a href="/service/special-offer/">seasonal offers</a> reflect that pattern.</p>

      <h2>Reason 3: You Actually Catch Problems Before They Fail</h2>
      <p>The <a href="https://www.epa.gov/indoor-air-quality-iaq/what-you-should-know-air-quality-and-inspections" target="_blank" rel="noopener noreferrer">EPA recommends</a> pre-season HVAC inspections specifically because most component failures are progressive — capacitors weaken, refrigerant levels drop slowly, and blower motors show warning signs weeks before they die. In April, we can order a replacement capacitor and swap it during a routine visit. In July, that same capacitor blows on a 108°F Sunday and requires emergency service.</p>

      <h2>What a Real Tune-Up Includes</h2>
      <p>A proper AC tune-up is not a 20-minute filter change. Our full inspection covers:</p>
      <ul>
        <li>Refrigerant pressure and superheat/subcool measurements</li>
        <li>Electrical component testing (capacitor microfarads, contactor condition, wire integrity)</li>
        <li>Blower motor amp draw and belt condition</li>
        <li>Evaporator and condenser coil inspection and cleaning</li>
        <li>Thermostat calibration and cycle verification</li>
        <li>Condensate drain flush and safety switch test</li>
        <li>Duct static pressure reading</li>
        <li>Full safety and combustion check on gas equipment</li>
      </ul>
      <p>If your last "tune-up" took 15 minutes and cost $49 — you didn't get a tune-up. You got a filter swap with a receipt.</p>

      <h2>Signs You Shouldn't Wait Even Until April</h2>
      <p>If your system is already exhibiting warning signs — unusual noise, weak airflow, higher-than-normal bills, or short cycling — don't wait. Book an <a href="/service/ac-repair/">AC diagnostic</a> now. Small problems in April become expensive problems in July.</p>

      <h2>Serving Riverside and the Full Inland Empire</h2>
      <p>Our technicians run tune-ups across <a href="/service-areas/riverside/">Riverside</a>, <a href="/service-areas/moreno-valley/">Moreno Valley</a>, <a href="/service-areas/temecula/">Temecula</a>, and every service area in between. Every visit includes a written report of what we found, what we serviced, and what to keep an eye on. No pressure, no upsells — just data. <a href="/contact-us/">Book your April tune-up</a> today.</p>
    `,
    featuredImage: "/images/services/hvac-maintenance-v2.webp",
    featuredImageWidth: 1344,
    featuredImageHeight: 768,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-04-10",
    category: "HVAC Maintenance",
    tags: ["AC tune-up", "spring maintenance", "Riverside", "HVAC service"],
    metaTitle: "Why April Is the Best Time for AC Tune-Ups (Riverside)",
    metaDescription:
      "Booking your AC tune-up in April means faster scheduling, spring pricing, and a system that survives summer. Riverside HVAC pros explain why.",
  },
  {
    slug: "allergy-season-hvac-filter-inland-empire",
    title: "Allergy Season in the Inland Empire: How Your HVAC Filter Fights Back",
    excerpt:
      "Spring pollen counts in Riverside County are among the highest in California. Your HVAC filter is your first — and most affordable — line of defense against indoor allergy symptoms.",
    content: `
      <h2>Why Inland Empire Allergy Season Is So Brutal</h2>
      <p>Between February and May, the Inland Empire sees pollen counts that regularly hit the "very high" range on national allergy trackers. A mix of grasses, oak, olive, and mulberry pollen combines with wind and low humidity to keep airborne particulates elevated for weeks at a time. The <a href="https://www.epa.gov/indoor-air-quality-iaq/introduction-indoor-air-quality" target="_blank" rel="noopener noreferrer">EPA notes</a> that indoor pollutant concentrations are often two to five times higher than outdoor levels — a direct result of forced-air heating and cooling recirculating particles trapped inside your home.</p>

      <h2>Your Air Filter Is Doing Real Work — If You Let It</h2>
      <p>Every time your HVAC system runs, 100% of the air moving through it passes across your filter. That's 300–500 cubic feet of air per minute, filtered continuously through a piece of cardboard-framed pleated media. A properly rated filter can capture 90%+ of the particles that trigger allergy symptoms. A cheap fiberglass filter captures maybe 20%. The difference is dramatic.</p>

      <h2>MERV Ratings — Explained Without the Jargon</h2>
      <p>MERV (Minimum Efficiency Reporting Value) measures how well a filter traps particles. Higher = finer filtration.</p>
      <ul>
        <li><strong>MERV 1–4:</strong> Blocks dust bunnies. That's it. Skip.</li>
        <li><strong>MERV 8:</strong> Captures pollen, dust mite debris, mold spores. Good baseline.</li>
        <li><strong>MERV 11:</strong> Adds fine dust and pet dander. Best pick for most allergy sufferers.</li>
        <li><strong>MERV 13:</strong> Captures bacteria and smoke particles. Excellent — but check that your system's blower can handle the resistance.</li>
        <li><strong>MERV 14+:</strong> HEPA-grade. Usually requires a dedicated media cabinet, not a slot filter.</li>
      </ul>

      <h2>The Trap: Higher MERV Isn't Always Better</h2>
      <p>Stuffing a MERV 13 filter into a system designed for MERV 8 restricts airflow enough to freeze your evaporator coil, overheat the blower motor, or crack a heat exchanger over time. Our <a href="/service/hvac-maintenance/">HVAC maintenance</a> visits include a static pressure reading that tells us exactly which MERV rating your system can safely handle.</p>

      <h2>Filter Frequency for Allergy Sufferers</h2>
      <p>During pollen season, change filters every 30 days, not every 90. In homes with pets and allergies, even that may not be enough. Hold your filter up to a light source once a month — if you can't see light through it, it's overdue.</p>

      <h2>Beyond the Filter: Whole-Home Solutions</h2>
      <p>Filters catch particles that reach the return. They don't do anything about pollutants living in ductwork, humidity issues, or biological contamination. Our <a href="/service/indoor-air-quality/">indoor air quality solutions</a> — UV lights, media air cleaners, whole-home humidifiers, and duct sanitization — address the parts of the picture a filter alone can't.</p>

      <h2>Signs Your Indoor Air Is Making Allergies Worse</h2>
      <p>Waking up congested, symptoms that improve when you leave the house, visible dust settling on surfaces within a day of cleaning, or a musty smell when the AC first kicks on — all point to indoor air quality problems. These are fixable, and often affordably.</p>

      <h2>Book an Indoor Air Quality Assessment</h2>
      <p>We serve homeowners across the Inland Empire including <a href="/service-areas/moreno-valley/">Moreno Valley</a>, <a href="/service-areas/riverside/">Riverside</a>, and beyond. A comprehensive IAQ assessment includes particulate measurement, humidity check, duct inspection, and a written report of what's actually in your air. <a href="/contact-us/">Schedule yours today</a>.</p>
    `,
    featuredImage: "/images/services/iaq-hero.webp",
    featuredImageWidth: 1536,
    featuredImageHeight: 880,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-03-14",
    category: "Indoor Air Quality",
    tags: ["allergies", "air filter", "indoor air quality", "MERV rating"],
    metaTitle: "Allergy Season HVAC Filter Guide — Inland Empire",
    metaDescription:
      "Cut indoor allergy symptoms in the Inland Empire with the right HVAC filter. MERV ratings explained, upgrade paths, and whole-home IAQ solutions.",
  },
  {
    slug: "furnace-strange-noises-diagnostic",
    title: "Furnace Making Strange Noises? A Moreno Valley Homeowner's Diagnostic Guide",
    excerpt:
      "A furnace should hum quietly, not bang, screech, or rumble. Learn what each specific noise means, which ones are urgent, and when to shut the system off immediately.",
    content: `
      <h2>Every Furnace Noise Means Something Specific</h2>
      <p>Furnaces don't complain for no reason. Each type of noise — banging, screeching, rumbling, popping — points to a specific mechanical or combustion issue with a specific level of urgency. Some are cosmetic. Others mean shut the system off right now. This guide walks through the noises we hear about most often in <a href="/service-areas/moreno-valley/">Moreno Valley</a> homes, what they typically mean, and when to call for <a href="/service/furnace-repair/">professional furnace repair</a>.</p>

      <h2>Banging or Booming on Startup</h2>
      <p><strong>What it means:</strong> Delayed ignition. Gas builds up in the combustion chamber before the igniter fires it, causing a small explosion. Common causes include a dirty burner, a weak igniter, or misaligned flame sensor.</p>
      <p><strong>Urgency:</strong> High. Repeated ignition explosions can crack the heat exchanger, which is both expensive and a carbon monoxide hazard. Schedule service within days, not weeks.</p>

      <h2>High-Pitched Squealing</h2>
      <p><strong>What it means:</strong> Almost always a blower motor issue — either a slipping belt (on older belt-drive furnaces) or a failing motor bearing. Occasionally an inducer motor going bad.</p>
      <p><strong>Urgency:</strong> Moderate. The furnace will keep running, but the bearing will eventually seize and take the motor with it. A $200 bearing job now beats a $900 motor replacement later.</p>

      <h2>Grinding or Metal-on-Metal</h2>
      <p><strong>What it means:</strong> The blower wheel is loose on its shaft and physically contacting the housing, or the motor bearings have completely failed.</p>
      <p><strong>Urgency:</strong> Very high. Shut the system off. Continued operation will destroy the blower assembly and can damage the control board.</p>

      <h2>Rumbling That Continues After the Heat Cycle Ends</h2>
      <p><strong>What it means:</strong> Dirty burners or a fuel supply issue causing incomplete combustion. If the rumble persists after the burners shut off, it's often oil-canning of the heat exchanger from thermal stress — a serious warning sign.</p>
      <p><strong>Urgency:</strong> High. Cracked heat exchangers leak carbon monoxide. The <a href="https://www.energy.gov/energysaver/furnaces-and-boilers" target="_blank" rel="noopener noreferrer">U.S. Department of Energy</a> lists heat exchanger inspection as a top annual maintenance priority for exactly this reason.</p>

      <h2>Clicking That Won't Stop</h2>
      <p><strong>What it means:</strong> Failing igniter, faulty flame sensor, or a bad control board relay. The furnace attempts to start, fails to detect ignition, and cycles the safety relay repeatedly.</p>
      <p><strong>Urgency:</strong> Moderate. The safety system is doing exactly what it should — but the underlying part needs replacement or your furnace won't provide heat.</p>

      <h2>Popping or Pinging From Ductwork</h2>
      <p><strong>What it means:</strong> Thermal expansion. Sheet metal ducts expand when hot air flows through them and contract when they cool. Usually harmless.</p>
      <p><strong>Urgency:</strong> Low. If it's new or dramatically louder, worth mentioning during your next <a href="/service/hvac-maintenance/">tune-up</a>.</p>

      <h2>Whistling From Vents</h2>
      <p><strong>What it means:</strong> Restricted return airflow — usually a clogged filter or blocked return grille. Occasionally a duct leak or an oversized blower.</p>
      <p><strong>Urgency:</strong> Low, but easily fixed. Change the filter first. If it persists, get a static pressure test.</p>

      <h2>When to Shut It Off Immediately</h2>
      <p>Turn the furnace off at the thermostat AND the gas valve, then call us if you notice: a gas smell, repeated banging or explosions on startup, grinding metal noise, or any noise combined with visible smoke or soot. These are safety issues, not maintenance issues.</p>

      <h2>Same-Day Furnace Service Across the Inland Empire</h2>
      <p>Our team responds to furnace service calls same-day across <a href="/service-areas/moreno-valley/">Moreno Valley</a>, <a href="/service-areas/riverside/">Riverside</a>, and beyond. Every diagnostic starts with a written estimate — never work first, price later. <a href="/contact-us/">Book service online</a> or call (951) 331-3310.</p>
    `,
    featuredImage: "/images/services/furnace-repair-new.webp",
    featuredImageWidth: 1408,
    featuredImageHeight: 768,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-02-11",
    category: "Furnace Repair",
    tags: ["furnace repair", "furnace noises", "diagnostic guide", "Moreno Valley"],
    metaTitle: "Furnace Making Strange Noises? Diagnostic Guide",
    metaDescription:
      "Banging, squealing, or grinding furnace? Learn what each noise means and how urgent it is. Moreno Valley furnace repair with same-day service.",
  },
  {
    slug: "home-energy-audit-2026-riverside-county",
    title: "The 2026 Home Energy Audit: What Every Riverside County Homeowner Should Check",
    excerpt:
      "A DIY energy audit takes an afternoon and pays dividends for years. Here's the exact checklist we use when assessing Inland Empire homes for efficiency gains.",
    content: `
      <h2>Why Start the Year With an Energy Audit</h2>
      <p>January is when Southern California Edison bills from December's heating and November's transition costs land in mailboxes. It's also the ideal time to walk through your home with fresh eyes and identify the efficiency losses you've been paying for. The <a href="https://www.energy.gov/energysaver/do-it-yourself-home-energy-assessments" target="_blank" rel="noopener noreferrer">U.S. Department of Energy's DIY home energy assessment guide</a> is a solid foundation, but this checklist adapts it for the specific realities of Riverside County housing stock.</p>

      <h2>Section 1: The Envelope</h2>
      <p>Your home's envelope — walls, roof, windows, and doors — determines how hard your HVAC has to work. Losses here dwarf everything else.</p>
      <ul>
        <li><strong>Attic insulation:</strong> Pull down the attic stairs and look. If you see joists, you have less than R-19. Inland Empire homes should be at R-38 or higher.</li>
        <li><strong>Weatherstripping:</strong> On a windy day, run your hand around door and window frames. Any draft = money leaking.</li>
        <li><strong>Recessed lights:</strong> Old non-IC-rated cans dump conditioned air straight into the attic. LED retrofits with airtight trim are cheap fixes.</li>
        <li><strong>Attic hatch:</strong> Usually the single largest air leak in a home. Weatherstrip and insulate it.</li>
      </ul>

      <h2>Section 2: The HVAC System</h2>
      <p>Even a perfectly sealed home wastes energy with an inefficient HVAC system.</p>
      <ul>
        <li><strong>Age of equipment:</strong> Anything over 12 years old should be evaluated for replacement. Modern systems are 30–50% more efficient. Our <a href="/service/ac-installation/">AC installation team</a> can quote a right-sized replacement.</li>
        <li><strong>Last professional tune-up:</strong> If it's been more than 12 months, schedule <a href="/service/hvac-maintenance/">HVAC maintenance</a>.</li>
        <li><strong>Duct condition:</strong> Peek into the attic. Are duct joints sealed? Any obvious tears? Leaky ducts waste 20–40% of your HVAC's output.</li>
        <li><strong>Thermostat schedule:</strong> If you're not using programmed setbacks, you're leaving 10%+ savings on the table.</li>
      </ul>

      <h2>Section 3: Water Heating</h2>
      <p>Water heating is the second-biggest energy load in most Inland Empire homes.</p>
      <ul>
        <li><strong>Water heater age:</strong> Tank heaters over 10 years old are candidates for replacement — often with a heat pump or tankless model that cuts operating costs by 50%.</li>
        <li><strong>Hot water pipe insulation:</strong> The first 6 feet of hot water pipe out of the heater should be insulated. Foam sleeves cost pennies.</li>
        <li><strong>Water heater temperature:</strong> Should be set to 120°F. Anything higher wastes energy.</li>
      </ul>

      <h2>Section 4: Lighting and Appliances</h2>
      <ul>
        <li><strong>LED conversion:</strong> Any incandescent or halogen bulbs still in service? Replace them. Payback is under a year.</li>
        <li><strong>Refrigerator seal:</strong> Slip a dollar bill in the door. If it slides out easily, replace the gasket.</li>
        <li><strong>Phantom loads:</strong> Electronics that draw power when "off" can add 5–10% to your bill. Smart power strips solve this.</li>
      </ul>

      <h2>Section 5: The Big-Picture Upgrades</h2>
      <p>Once you've done the basics, consider the compounding upgrades:</p>
      <ul>
        <li><strong>Solar:</strong> Federal tax credits still cover 30% of installation costs through 2032. Details in our <a href="/blog/how-to-buy-the-right-solar-panels/">solar panel buying guide</a>.</li>
        <li><strong>Heat pump HVAC:</strong> Modern cold-climate heat pumps outperform traditional gas furnace + AC combos in Inland Empire climates.</li>
        <li><strong>Whole-home energy monitor:</strong> Devices like Sense track exactly which circuits are drawing power — invaluable diagnostic data.</li>
      </ul>

      <h2>Book a Professional Assessment</h2>
      <p>DIY audits catch 60–70% of the opportunities. A professional load calculation and duct pressure test catches the rest — and quantifies exactly what each upgrade will actually save. <a href="/contact-us/">Schedule a full HVAC efficiency assessment</a> or call (951) 331-3310. Every visit includes a written report with prioritized recommendations and honest cost estimates.</p>
    `,
    featuredImage: "/images/services/hvac-maintenance-new.webp",
    featuredImageWidth: 1280,
    featuredImageHeight: 853,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2026-01-09",
    category: "Energy Efficiency",
    tags: ["energy audit", "home efficiency", "Riverside County", "utility savings"],
    metaTitle: "2026 Home Energy Audit Checklist — Riverside County",
    metaDescription:
      "Complete DIY home energy audit checklist for Riverside County homeowners. Cut utility bills in 2026 with pro-level inspection steps and upgrade paths.",
  },
  {
    slug: "christmas-furnace-emergency",
    title: "Furnace Died on Christmas? What Every Inland Empire Family Should Do Next",
    excerpt:
      "A holiday furnace failure is stressful and dangerous — especially when temperatures drop overnight. Here's the exact playbook for the next 60 minutes.",
    content: `
      <h2>Don't Panic — Work the Checklist</h2>
      <p>A furnace failure on Christmas Eve or Christmas Day is one of the most common emergency calls we receive. Even in the Inland Empire, overnight temperatures in December regularly drop into the 30s. If yours just quit, follow this checklist in order — many "furnace emergencies" resolve in five minutes without a technician.</p>

      <h2>Step 1: Check the Thermostat</h2>
      <p>It sounds obvious, but this is the fix in about 15% of emergency calls. Confirm:</p>
      <ul>
        <li>Thermostat is set to HEAT (not AUTO or COOL)</li>
        <li>Setpoint is at least 3°F above current room temperature</li>
        <li>Batteries are fresh (if applicable)</li>
        <li>Screen is on and responsive</li>
      </ul>

      <h2>Step 2: Check the Air Filter</h2>
      <p>A completely clogged filter can trigger a safety shutdown. If you can't remember when you last changed it, change it now. This resolves another 20% of "emergency" calls.</p>

      <h2>Step 3: Check the Furnace Switch and Breaker</h2>
      <p>There's usually a wall switch near the furnace that looks like a light switch — often labeled or unlabeled. Make sure it's ON. Then check your electrical panel for a tripped breaker labeled "furnace" or "HVAC." Reset if tripped, but if it trips again immediately, stop — that's a professional issue.</p>

      <h2>Step 4: Check the Gas Supply</h2>
      <p>If your stove uses gas, try to light a burner. No gas at the stove = no gas to the furnace. Contact your utility.</p>

      <h2>Step 5: Look at the Furnace Itself</h2>
      <p>Most modern furnaces have a small window or LED indicator. A blinking pattern indicates a specific error code — check the sticker inside the access panel or your owner's manual. Common codes:</p>
      <ul>
        <li><strong>Slow flash:</strong> Normal, waiting for call for heat</li>
        <li><strong>Rapid flash:</strong> Ignition failure or flame sensor issue</li>
        <li><strong>Solid or off:</strong> Control board failure or power issue</li>
      </ul>

      <h2>Step 6: STOP if You Smell Gas or Notice a Sooty Smell</h2>
      <p>Leave the house immediately. Do not turn switches on or off. Call your gas utility from outside. This is a safety event, not a repair. Carbon monoxide is a serious risk with furnace malfunctions — the <a href="https://www.cdc.gov/carbon-monoxide/prevention/index.html" target="_blank" rel="noopener noreferrer">CDC's carbon monoxide guidance</a> makes clear that any suspected exposure warrants immediate action.</p>

      <h2>What to Do Overnight if Repair Has to Wait Until Morning</h2>
      <ul>
        <li>Gather everyone into a single small room and close the door</li>
        <li>Layer clothing — thin layers trap heat better than one heavy one</li>
        <li>Use safe space heaters (never propane or kerosene heaters indoors)</li>
        <li>Open cabinets under sinks on exterior walls to prevent pipe freeze</li>
        <li>Let a small trickle of water run from a faucet on the coldest wall</li>
        <li>Keep everyone hydrated — even in cold, hydration matters</li>
      </ul>

      <h2>Emergency Service — Even on Holidays</h2>
      <p>We keep a technician on-call for genuine heating emergencies year-round, including Christmas Day. Our <a href="/service/furnace-repair/">furnace repair service</a> covers <a href="/service-areas/moreno-valley/">Moreno Valley</a> and the full Inland Empire with same-day response. If you're in the middle of an emergency now, don't work through a phone tree — <a href="/contact-us/">request emergency service</a> or call (951) 331-3310.</p>

      <h2>How to Prevent Next Year's Emergency</h2>
      <p>Almost every Christmas furnace failure was preventable. A fall <a href="/service/hvac-maintenance/">tune-up</a> catches the components that fail during the first cold snap — ignitors, capacitors, gas valves, pressure switches. Book your fall service in September or October and take Christmas off from HVAC worry. Ask about our current <a href="/service/special-offer/">maintenance plan</a> — members get priority emergency dispatch.</p>
    `,
    featuredImage: "/images/services/furnace-repair-v3.webp",
    featuredImageWidth: 1344,
    featuredImageHeight: 768,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2025-12-16",
    category: "Emergency Service",
    tags: ["furnace emergency", "holiday breakdown", "furnace repair", "no heat"],
    metaTitle: "Furnace Died on Christmas? Emergency Playbook",
    metaDescription:
      "Step-by-step playbook when your Inland Empire furnace fails on a holiday. DIY checks, safety steps, and same-day emergency HVAC service.",
  },
  {
    slug: "fall-carbon-monoxide-safety-checks",
    title: "Fall Furnace Safety: 7 Carbon Monoxide Checks Every Inland Empire Home Needs",
    excerpt:
      "Carbon monoxide from faulty furnaces kills more Americans than most people realize. These seven fall safety checks protect your family before you turn the heat on.",
    content: `
      <h2>The Silent Season Begins in November</h2>
      <p>Every fall, when Inland Empire homeowners fire up furnaces that sat dormant since March, carbon monoxide incidents spike. According to the CDC, over 400 Americans die from unintentional CO poisoning each year, and more than 100,000 visit emergency rooms. Nearly all of it is preventable. The <a href="https://www.cdc.gov/carbon-monoxide/prevention/index.html" target="_blank" rel="noopener noreferrer">CDC's carbon monoxide prevention guidelines</a> make clear that furnace inspections and functioning CO alarms are the two highest-impact safeguards.</p>

      <h2>Check 1: Test Every Carbon Monoxide Alarm in Your Home</h2>
      <p>Press and hold the test button on every alarm. If it doesn't beep loudly within a few seconds, replace it — not just the battery. CO alarms have an internal sensor lifespan of 5–10 years. Look at the manufacture date on the back. If it's over 7 years old, replace the unit even if it still tests.</p>

      <h2>Check 2: Verify You Have Enough Alarms — In the Right Places</h2>
      <p>California code requires a CO alarm on every level of the home and near every sleeping area. In practice, that usually means at least 3 alarms in a typical Inland Empire single-family home. If your bedrooms are far from an alarm, add one.</p>

      <h2>Check 3: Inspect the Furnace Flue and Vent Pipe</h2>
      <p>Before firing up the system, visually inspect the flue pipe running from the furnace to the roof or wall. Look for corrosion, disconnection, or physical damage. Rodents and birds sometimes nest in vents — a blocked flue is one of the most common CO poisoning causes. If you're unsure, our <a href="/service/furnace-repair/">furnace service technicians</a> inspect this on every visit.</p>

      <h2>Check 4: Look at the Burner Flame Color</h2>
      <p>When your furnace is running, remove the front panel and observe the burner flame. It should be a steady, mostly blue flame. Yellow, orange, flickering, or lifting flames signal incomplete combustion — the exact condition that produces excess CO. Shut the system off and call for service.</p>

      <h2>Check 5: Check for Soot Around the Furnace Cabinet</h2>
      <p>Black soot deposits on or near the furnace, especially around the burner compartment or the flue collar, indicate combustion problems. Any soot warrants immediate professional inspection.</p>

      <h2>Check 6: Have the Heat Exchanger Inspected</h2>
      <p>A cracked heat exchanger allows combustion gases — including CO — to leak into the air your family breathes. Cracks are impossible to detect without proper tools and access to the interior of the furnace. This is the single most important reason to have annual professional <a href="/service/hvac-maintenance/">HVAC maintenance</a>. Every one of our fall tune-ups includes a full heat exchanger inspection.</p>

      <h2>Check 7: Ensure Adequate Combustion Air</h2>
      <p>Furnaces need oxygen to burn safely. If yours is in a closet, small utility room, or garage with modifications that limit airflow, it can starve for oxygen and produce CO. Storing paint, gasoline, or cleaning products near the furnace is also dangerous — combustion can vaporize chemicals into your air stream. Combined with poor <a href="/service/indoor-air-quality/">indoor air quality</a>, this creates a compounding health risk.</p>

      <h2>Warning Signs of CO Exposure</h2>
      <p>CO is odorless and colorless, so alarms are your only reliable early warning. Symptoms of exposure include headache, dizziness, nausea, weakness, confusion, and blurred vision. If multiple family members feel sick when at home and better when away, suspect CO. Leave immediately and call 911.</p>

      <h2>Book Your Fall Furnace Safety Inspection</h2>
      <p>We recommend all Inland Empire homeowners schedule a professional furnace safety inspection every fall before the first serious cold snap. Our comprehensive tune-up includes combustion analysis, heat exchanger inspection, gas pressure verification, and safety control testing — all documented in a written report. <a href="/contact-us/">Book your inspection</a> today or claim our current <a href="/service/special-offer/">fall furnace safety offer</a>.</p>
    `,
    featuredImage: "/images/services/furnace-repair-v2.webp",
    featuredImageWidth: 1280,
    featuredImageHeight: 853,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2025-11-13",
    category: "Home Safety",
    tags: ["carbon monoxide", "furnace safety", "CO detector", "fall maintenance"],
    metaTitle: "7 Fall Carbon Monoxide Safety Checks for Your Home",
    metaDescription:
      "Protect your family from carbon monoxide with 7 essential fall furnace safety checks. Inland Empire HVAC pros share the pro checklist.",
  },
  {
    slug: "mini-split-vs-central-ac-inland-empire",
    title: "Ductless Mini-Split vs. Central AC: Which Is Right for Your Inland Empire Home?",
    excerpt:
      "Mini-splits and central AC each solve different problems. Here's a straight comparison of costs, efficiency, and which system actually makes sense for common Inland Empire homes.",
    content: `
      <h2>Two Very Different Answers to the Same Question</h2>
      <p>When homeowners in <a href="/service-areas/temecula/">Temecula</a> or <a href="/service-areas/murrieta/">Murrieta</a> ask us "should I go mini-split or central AC?", the honest answer starts with a question of our own: what problem are you actually trying to solve? Both technologies cool homes efficiently — but they're optimized for very different situations. Getting the wrong one wastes thousands of dollars.</p>

      <h2>Central AC in 60 Seconds</h2>
      <p>A single outdoor condenser paired with an indoor air handler pushes conditioned air through ductwork to every room in the house. Great when: you have existing ductwork in good condition, you want whole-home cooling from a single thermostat, and your home layout is relatively conventional.</p>

      <h2>Ductless Mini-Splits in 60 Seconds</h2>
      <p>Individual indoor "heads" mount on walls or ceilings, each connected by refrigerant lines to a small outdoor unit. Each head can be controlled independently. Great when: you don't have ductwork, you're adding conditioning to a specific area (garage conversion, addition, sunroom), or you want zone-by-zone temperature control.</p>

      <h2>Efficiency Head-to-Head</h2>
      <p>Modern ductless mini-splits routinely hit SEER2 ratings of 22–30, significantly outperforming most central systems in raw efficiency. But — and this is critical — that efficiency edge shrinks or disappears if you're using a mini-split for whole-home cooling, because you're running multiple compressors. The <a href="https://www.energystar.gov/products/ductless_heating_cooling" target="_blank" rel="noopener noreferrer">ENERGY STAR ductless heating and cooling guide</a> outlines where the technology genuinely shines.</p>

      <h2>Cost Comparison</h2>
      <p>Ballpark installed pricing for a 2,000 sq ft Inland Empire home:</p>
      <ul>
        <li><strong>Central AC (replacing existing system, ducts in place):</strong> $8,000–$14,000</li>
        <li><strong>Central AC (new install, no existing ducts):</strong> $15,000–$25,000</li>
        <li><strong>Ductless multi-zone mini-split (4-zone whole home):</strong> $16,000–$24,000</li>
        <li><strong>Single-zone mini-split (one room):</strong> $4,000–$7,000</li>
      </ul>

      <h2>When Central AC Wins</h2>
      <ul>
        <li>You already have functional ductwork</li>
        <li>You want one thermostat for the whole house</li>
        <li>You prefer no visible indoor equipment</li>
        <li>You're on a tighter budget for whole-home replacement</li>
        <li>You want the simplest possible system to maintain</li>
      </ul>
      <p>Our <a href="/service/ac-installation/">central AC installation team</a> handles complete replacements across every Inland Empire city we serve.</p>

      <h2>When Mini-Splits Win</h2>
      <ul>
        <li>No existing ductwork, or ducts in unsalvageable condition</li>
        <li>Additions, garage conversions, or sunrooms</li>
        <li>Two-story homes with major hot/cold zone problems on the second floor</li>
        <li>Casitas, ADUs, or detached structures</li>
        <li>You want per-room control (nursery cooler than the rest of the house)</li>
        <li>You need heating and cooling and want the efficiency of a heat pump</li>
      </ul>

      <h2>The Hybrid Approach</h2>
      <p>Many Inland Empire homes benefit from a hybrid: central AC for the main living areas paired with a single-zone mini-split for a problem room (upstairs master, converted garage, home office over a garage). This often costs less than upsizing central AC or going full ductless, and delivers better comfort.</p>

      <h2>Maintenance Realities</h2>
      <p>Mini-splits require regular filter cleaning at each head (every 4–6 weeks in the Inland Empire), and coils are more exposed than central systems — leading to earlier degradation without care. Central systems have fewer maintenance touch-points but concentrated failure risk. Either way, professional annual <a href="/service/hvac-maintenance/">HVAC maintenance</a> extends system life significantly. And when repairs are needed, our <a href="/service/ac-repair/">AC repair team</a> works on both systems.</p>

      <h2>Get an Honest Recommendation</h2>
      <p>We install and service both technologies, so we have no incentive to steer you toward one over the other. A free in-home assessment includes a load calculation, ductwork condition review, and zoning analysis — you get a real recommendation grounded in your specific home. <a href="/contact-us/">Request your free assessment</a> or call (951) 331-3310 today.</p>
    `,
    featuredImage: "/images/services/minisplit.webp",
    featuredImageWidth: 836,
    featuredImageHeight: 557,
    author: defaultAuthor.name,
    authorTitle: defaultAuthor.title,
    authorBio: defaultAuthor.bio,
    publishedDate: "2025-10-21",
    category: "AC Installation",
    tags: ["mini-split", "central AC", "AC installation", "system comparison"],
    metaTitle: "Mini-Split vs. Central AC — Inland Empire Guide",
    metaDescription:
      "Ductless mini-split vs. central AC for Inland Empire homes: honest cost, efficiency, and use-case comparison from NATE-certified HVAC pros.",
  },
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
    featuredImageWidth: 1920,
    featuredImageHeight: 1100,
    author: "Justin Jaszewski",
    authorTitle: "Co-Founder & NATE-Certified Technician",
    authorBio: "Justin is the co-founder of It's No Sweat Heat & Air and a NATE-certified HVAC technician with over 25 years of hands-on experience across Moreno Valley and the Inland Empire. He leads the company's technical standards, trains every technician on the team, and personally inspects complex installations. Justin holds California HVAC license #1058772 and specializes in residential system design, load calculations, and energy-efficiency upgrades.",
    publishedDate: "2024-11-15",
    category: "Solar Energy",
    tags: ["solar panels", "home solar", "energy savings", "California solar"],
    metaTitle: "How to Buy the Right Solar Panels",
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
    featuredImageWidth: 640,
    featuredImageHeight: 1280,
    author: "Justin Jaszewski",
    authorTitle: "Co-Founder & NATE-Certified Technician",
    authorBio: "Justin is the co-founder of It's No Sweat Heat & Air and a NATE-certified HVAC technician with over 25 years of hands-on experience across Moreno Valley and the Inland Empire. He leads the company's technical standards, trains every technician on the team, and personally inspects complex installations. Justin holds California HVAC license #1058772 and specializes in residential system design, load calculations, and energy-efficiency upgrades.",
    publishedDate: "2024-10-22",
    category: "Air Conditioning",
    tags: ["AC repair", "air conditioning", "HVAC maintenance", "energy efficiency"],
    metaTitle: "5 Signs Your AC Needs Repair",
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
    featuredImageWidth: 640,
    featuredImageHeight: 1280,
    author: "Justin Jaszewski",
    authorTitle: "Co-Founder & NATE-Certified Technician",
    authorBio: "Justin is the co-founder of It's No Sweat Heat & Air and a NATE-certified HVAC technician with over 25 years of hands-on experience across Moreno Valley and the Inland Empire. He leads the company's technical standards, trains every technician on the team, and personally inspects complex installations. Justin holds California HVAC license #1058772 and specializes in residential system design, load calculations, and energy-efficiency upgrades.",
    publishedDate: "2024-09-10",
    category: "HVAC Maintenance",
    tags: ["HVAC maintenance", "furnace tune-up", "AC maintenance", "seasonal checklist"],
    metaTitle: "HVAC Maintenance Checklist",
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
      <p>We're fully licensed (CA #1058772), insured, and every technician on our team holds NATE certification. We provide written estimates on every job, honor our quoted price, and back all work with a satisfaction guarantee. Our {{RATING}}-star rating comes from {{REVIEW_COUNT}}+ verified customer reviews across <a href="/service-areas/">30 cities we serve</a>. Ready to experience the difference? <a href="/contact-us/">Request a free estimate</a> today.</p>
    `,
    featuredImage: "/images/blog/choosing-ac-company.webp",
    featuredImageWidth: 1280,
    featuredImageHeight: 1280,
    author: "Justin Jaszewski",
    authorTitle: "Co-Founder & NATE-Certified Technician",
    authorBio: "Justin is the co-founder of It's No Sweat Heat & Air and a NATE-certified HVAC technician with over 25 years of hands-on experience across Moreno Valley and the Inland Empire. He leads the company's technical standards, trains every technician on the team, and personally inspects complex installations. Justin holds California HVAC license #1058772 and specializes in residential system design, load calculations, and energy-efficiency upgrades.",
    publishedDate: "2024-08-05",
    category: "Tips & Guides",
    tags: ["AC repair", "HVAC company", "contractor tips", "home services"],
    metaTitle: "How to Choose an AC Repair Company",
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

export const POSTS_PER_PAGE = 9;

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
);

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number): BlogPost[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return sortedPosts.slice(start, start + POSTS_PER_PAGE);
}
