export interface CityPage {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  content: {
    intro: string;
    acInstallation: string;
    acRepair: string;
    furnaceInstallation: string;
    furnaceRepair: string;
    hvacMaintenance: string;
    indoorAirQuality: string;
    whyReliable: string;
    emergency: string;
    whyChoose: string[];
    commonProblems: { title: string; text: string }[];
    scheduleCta: string;
    faqs: { question: string; answer: string }[];
  };
}

export const serviceAreaCities = [
  { city: "Moreno Valley", url: "/service-areas/moreno-valley/" },
  { city: "Riverside", url: "/service-areas/riverside/" },
  { city: "Temecula", url: "/service-areas/temecula/" },
  { city: "Murrieta", url: "/service-areas/murrieta/" },
  { city: "Perris", url: "/service-areas/perris/" },
  { city: "Redlands", url: "/service-areas/redlands/" },
  { city: "Loma Linda", url: "/service-areas/loma-linda/" },
  { city: "Colton", url: "/service-areas/colton/" },
  { city: "Grand Terrace", url: "/service-areas/grand-terrace/" },
  { city: "San Bernardino", url: "/service-areas/san-bernardino/" },
  { city: "Beaumont", url: "/service-areas/beaumont/" },
  { city: "Banning", url: "/service-areas/banning/" },
  { city: "Calimesa", url: "/service-areas/calimesa/" },
  { city: "Yucaipa", url: "/service-areas/yucaipa/" },
  { city: "Highland", url: "/service-areas/highland/" },
  { city: "Mentone", url: "/service-areas/mentone/" },
  { city: "Jurupa Valley", url: "/service-areas/jurupa-valley/" },
  { city: "Eastvale", url: "/service-areas/eastvale/" },
  { city: "Norco", url: "/service-areas/norco/" },
  { city: "Menifee", url: "/service-areas/menifee/" },
  { city: "Lake Elsinore", url: "/service-areas/lake-elsinore/" },
  { city: "Wildomar", url: "/service-areas/wildomar/" },
  { city: "San Jacinto", url: "/service-areas/san-jacinto/" },
  { city: "Hemet", url: "/service-areas/hemet/" },
  { city: "Mead Valley", url: "/service-areas/mead-valley/" },
  { city: "Woodcrest", url: "/service-areas/woodcrest/" },
  { city: "Nuevo", url: "/service-areas/nuevo/" },
  { city: "Homeland", url: "/service-areas/homeland/" },
  { city: "Highgrove", url: "/service-areas/highgrove/" },
  { city: "Sunnymead", url: "/service-areas/sunnymead/" },
];

export const cityPages: CityPage[] = [
  {
    slug: "moreno-valley",
    city: "Moreno Valley",
    state: "CA",
    metaTitle: "HVAC Services in Moreno Valley, CA | It's No Sweat Heat & Air",
    metaDescription: "Moreno Valley's trusted HVAC company with 25+ years experience. Same-day AC repair, furnace service, and maintenance. Licensed & insured. Call 951-331-3310.",
    primaryKeyword: "HVAC services Moreno Valley",
    content: {
      intro: `<p>Your air conditioner shouldn't quit on the hottest day of the year — but in Moreno Valley, that's exactly when most systems fail. When indoor temps climb past 85°F and your family is counting on you to fix it, you need an HVAC company that answers the phone, shows up the same day, and gets it done right.</p>
<p>It's No Sweat Heat & Air has provided HVAC services in Moreno Valley for over 25 years. We're licensed, insured, and rated 5 stars by hundreds of homeowners across the Inland Empire. Whether your AC stopped blowing cold, your furnace won't ignite, or you just need a tune-up before summer hits, our team handles it — with same-day availability and honest pricing.</p>
<p>Stop guessing. Call 951-331-3310 and talk to a real person who can help today.</p>`,
      acInstallation: 'An aging air conditioner doesn\'t just cool poorly — it drives up your electricity bill every month it runs. Many Moreno Valley homes still operate on units installed over a decade ago, rated far below current efficiency standards. Our <a href="/service/ac-installation/">AC installation in Moreno Valley</a> starts with a precise load calculation based on your home\'s square footage, insulation, ductwork, and sun exposure — not a rough estimate. Getting the sizing right means lower bills, fewer repairs, and a system that actually keeps up when it\'s 110°F outside. Skipping the load calculation is the most common mistake we see — and the most expensive one to fix later.',
      acRepair: 'When your AC stops cooling in the middle of a Moreno Valley summer, every hour matters. Indoor temps can hit 90°F fast, turning your home into a health risk for kids, elderly family members, and pets. Our technicians carry the most common replacement parts on every truck — capacitors, contactors, fan motors, and refrigerant — so most jobs are completed in one visit. We\'ve seen every failure mode this climate produces, from frozen evaporator coils to compressors that give out under sustained heat load. If your system is blowing warm air or shutting off too quickly, it\'s usually a sign you need <a href="/service/ac-repair/">air conditioning repair in Moreno Valley</a> before the issue turns into a full system failure.',
      furnaceInstallation: 'Moreno Valley winters are deceptively cold — overnight lows regularly dip into the upper 30s, and a furnace that can\'t keep up makes every morning miserable. If your system is over 15 years old or needs repairs every season, a <a href="/service/furnace-installation/">high-efficiency furnace installation</a> can cut your gas bill significantly while delivering more even, consistent heat. We handle everything: equipment selection, old system removal, ductwork evaluation, and post-install testing. Running an old 80% AFUE furnace means 20 cents of every dollar you spend on gas is wasted — that adds up to hundreds per year.',
      furnaceRepair: 'A furnace that short-cycles, clicks without igniting, or produces unusual smells needs professional attention immediately — not a wait-and-see approach. These symptoms can point to cracked heat exchangers, gas valve failures, or igniter problems that carry real safety risks, including carbon monoxide exposure. Our <a href="/service/furnace-repair/">Moreno Valley furnace repair service</a> includes CO testing and a full safety inspection on every call before we touch the mechanical issue. We\'ve repaired thousands of furnaces across the Inland Empire, and our rule is simple: fix the root cause, not just the symptom. Delaying furnace repair doesn\'t save money — it turns a $300 fix into a $3,000 replacement.',
      hvacMaintenance: 'The difference between a system that breaks down during the worst heat wave of the year and one that runs reliably for 15+ years almost always comes down to maintenance. Our <a href="/service/hvac-maintenance/">seasonal HVAC tune-up</a> covers coil cleaning, refrigerant verification, electrical testing, thermostat calibration, blower inspection, and filter replacement. For Moreno Valley homeowners, this isn\'t optional — it\'s the single most cost-effective thing you can do for your HVAC system. Skipping even one season of maintenance can reduce efficiency by 5%, and that loss compounds every year.',
      indoorAirQuality: 'Dust is a constant in the Inland Empire, and Moreno Valley is no exception. Every time your system cycles, it circulates whatever is in your air — dust mites, pet dander, pollen, bacteria, and volatile organic compounds. Standard 1-inch filters catch only the largest particles. Our <a href="/service/indoor-air-quality/">indoor air quality solutions</a> include whole-home air purification, UV germicidal lights, and HEPA filtration upgrades that integrate directly with your existing equipment. If your family deals with allergies, asthma, or persistent dust despite regular cleaning, your HVAC system\'s filtration is likely the missing piece.',
      whyReliable: `<p>Energy costs in the Inland Empire have climbed steadily over the past decade. A system that's lost even 10% of its efficiency due to neglected maintenance can add hundreds of dollars to your annual utility bill. When temperatures exceed 105°F for consecutive days — which happens multiple times every summer in Moreno Valley — an underperforming AC unit doesn't just waste money. It fails exactly when you need it most.</p>
<p>Many homes in Moreno Valley were built during periods of rapid growth, which means original HVAC equipment is well past its expected lifespan. Ductwork in these homes is often undersized or poorly sealed, compounding the efficiency problem. Addressing these issues now with a qualified HVAC technician is significantly cheaper than dealing with a catastrophic mid-summer failure.</p>`,
      emergency: "When your AC stops working during a 100-degree Moreno Valley afternoon, waiting even a few hours can feel unbearable — and for elderly residents, young children, or anyone with respiratory conditions, it's a genuine health risk. Our emergency HVAC repair team responds fast with fully stocked trucks, diagnostic tools, and the hands-on experience to resolve most failures the same day. You'll speak directly with our team — no call center, no voicemail loop, no 3-day waiting list. Just a straight answer and a technician headed your way.",
      whyChoose: [
        "25+ years working specifically in Inland Empire homes — not a franchise learning your area, not a startup figuring it out",
        "5-star rated by hundreds of real homeowners — earned one job at a time, not bought",
        "Licensed and insured — every technician carries proper state credentials and liability coverage",
        "Same-day service is our standard, not our exception — most calls get a tech the same afternoon",
        "Emergency response when your system fails and tomorrow isn't soon enough",
        "Written, upfront pricing before a single wrench turns — no surprise invoices, ever",
        "We work on every major brand — Carrier, Trane, Lennox, Goodman, Rheem, York, Amana, Bryant, Daikin",
      ],
      commonProblems: [
        { title: "Weak or uneven airflow", text: "Clogged filters, ductwork leaks, or a failing blower motor. Rooms farthest from the unit suffer most." },
        { title: "AC blowing warm air", text: "Low refrigerant, a failed compressor, or a malfunctioning condenser. Requires professional diagnosis." },
        { title: "System short-cycling", text: "Unit turns on and off every few minutes, straining the compressor and spiking energy costs." },
        { title: "Unusually high energy bills", text: "If habits haven't changed but your bill jumped 20%+, system efficiency has degraded." },
        { title: "Strange noises during operation", text: "Grinding, squealing, or banging indicate loose parts, worn bearings, or a failing motor." },
        { title: "Thermostat inaccuracy", text: "Displayed temperature doesn't match the room, causing the system to over-run or under-run." },
        { title: "Musty odors from vents", text: "Mold in the ductwork or a clogged condensate drain that needs immediate attention." },
      ],
      scheduleCta: "Don't wait for a small problem to become an expensive emergency. Whether you need a seasonal tune-up, a second opinion, or a complete system replacement, our Moreno Valley team is ready.",
      faqs: [
        { question: "How often should HVAC systems be serviced in Moreno Valley homes?", answer: "Twice per year — once in spring before cooling season and once in fall before heating season. The extreme heat and dust in Moreno Valley make bi-annual tune-ups essential for catching small issues before they become expensive repairs." },
        { question: "What size AC unit do most Moreno Valley homes need?", answer: "It depends on square footage, insulation, window orientation, and ductwork. A 1,500 sq ft home typically needs a 3–3.5 ton system, but the only accurate method is a professional load calculation. Oversized units short-cycle and waste energy; undersized units can't keep up with Moreno Valley's summer heat." },
        { question: "Can I get same-day AC repair in Moreno Valley?", answer: "Yes. We offer same-day service for most AC and furnace repair calls in Moreno Valley. Calls placed before noon typically receive a same-afternoon appointment. Emergency service is also available after hours." },
        { question: "When should I replace my HVAC system instead of repairing it in Moreno Valley?", answer: "If the repair costs more than 50% of a new system's price and your equipment is over 10 years old, replacement is usually the smarter investment. Our technicians give honest assessments — we don't push replacements when a repair makes more financial sense." },
        { question: "Why are Moreno Valley electric bills so high in summer?", answer: "Summer bills spike because AC systems run nearly continuously during heat waves. If your bill seems disproportionately high, it could indicate a refrigerant leak, dirty coils, a failing compressor, or an aging system that's lost efficiency. A professional tune-up can identify the exact cause and often resolves the issue in a single visit." },
      ],
    },
  },
  {
    slug: "riverside",
    city: "Riverside",
    state: "CA",
    metaTitle: "HVAC Services in Riverside, CA | It's No Sweat Heat & Air",
    metaDescription: "Riverside's trusted HVAC company with 25+ years experience. Same-day AC repair, furnace service & maintenance. Licensed & insured. Call 951-331-3310.",
    primaryKeyword: "HVAC services Riverside CA",
    content: {
      intro: `<p>As the largest city in the Inland Empire, Riverside deals with a climate that's genuinely hard on heating and cooling equipment. Summers push past 100°F for weeks at a time, winters bring dry overnight lows in the 30s, and seasonal wind events carry dust into every mechanical system exposed to the elements. A reliable HVAC company isn't optional here — it's essential.</p>
<p>It's No Sweat Heat & Air has served Riverside and the surrounding Inland Empire for over 25 years. Our licensed and insured technicians handle AC repair, furnace service, system installations, and preventive maintenance for homeowners across the city. Same-day service is available for most calls, and our 5-star rating reflects thousands of jobs completed with honest pricing and consistent results.</p>
<p>Whether your system is struggling to keep up or you're planning ahead for next season, our team is ready. Call 951-331-3310 to talk through what you're dealing with.</p>`,
      acInstallation: "An air conditioning system that was properly sized when it was installed ten or fifteen years ago may no longer match your home's current needs — especially if you've added square footage, replaced windows, or improved insulation. Our AC installation service starts with a load calculation specific to your property so the equipment we recommend actually fits the job. Oversized units waste electricity through short-cycling. Undersized units run constantly without reaching your set temperature. Getting the sizing right eliminates both problems.",
      acRepair: "Riverside's cooling season stretches well beyond the typical summer months, and that extended runtime accelerates wear on every component in the system. Capacitors, contactors, fan motors, and compressors all have finite lifespans that shorten under heavy use. When something fails, our AC repair technicians arrive with common replacement parts already on the truck so most issues are resolved in a single visit. Same-day appointments are available for calls placed in the morning.",
      furnaceInstallation: "Gas furnaces installed before 2010 typically operate at 80% AFUE or lower, which means 20 cents of every dollar spent on gas goes straight out the exhaust vent. Modern high-efficiency systems rated at 95%+ AFUE recover almost all of that waste. If your current furnace is aging, requires frequent repairs, or heats unevenly, a new furnace installation is often more cost-effective over a 3–5 year window than continuing to patch an old system.",
      furnaceRepair: "A furnace that short-cycles, produces unusual odors, or fails to ignite consistently needs professional evaluation — not a reset-and-hope approach. These symptoms can indicate heat exchanger cracks, gas valve malfunctions, or igniter failures that carry safety implications beyond simple discomfort. Our furnace repair process includes carbon monoxide testing and a full safety inspection before we address the mechanical issue. Written estimates are provided before any work begins.",
      hvacMaintenance: "The difference between a system that breaks down during the hottest week of the year and one that runs reliably for 15+ years almost always comes down to maintenance. Our seasonal HVAC maintenance covers coil cleaning, refrigerant level verification, electrical connection testing, thermostat calibration, blower inspection, and filter replacement. Two visits per year — spring and fall — is the standard that keeps your system efficient and catches developing problems early.",
      indoorAirQuality: "Dry conditions and seasonal wind events push dust, pollen, and fine particulate matter into Riverside homes on a near-constant basis. Standard 1-inch filters capture only the largest particles, leaving everything smaller circulating through your ductwork and living spaces. Our indoor air quality solutions include whole-home air purification systems, UV germicidal lights, and HEPA-grade filtration upgrades that integrate with your existing HVAC equipment. If respiratory issues or persistent dust are a concern in your home, filtration is the right place to start.",
      whyReliable: `<p>Electricity rates in Southern California rank among the highest in the country, and Riverside homeowners feel that reality every billing cycle. An HVAC system that's lost 10–15% of its rated efficiency — due to dirty coils, low refrigerant, or aging components — doesn't just cool poorly. It inflates every utility bill it touches, compounding costs month after month without any visible sign of the problem.</p>
<p>Riverside's housing stock spans several decades, from mid-century builds to recent construction. Older homes often have original ductwork that was never designed for current efficiency standards — undersized returns, poorly sealed joints, and runs through unconditioned attic space that can exceed 140°F in summer. For these homes, even a brand-new HVAC system will underperform until the ductwork is evaluated and corrected. Addressing the full system — not just the equipment — is what separates a good HVAC investment from a wasted one.</p>`,
      emergency: "When your air conditioning stops working during a Riverside heat wave, indoor temperatures can climb past 90°F within hours. That's not an inconvenience — it's a safety issue, especially for households with children, elderly residents, or pets. Our emergency HVAC repair service provides priority dispatching to Riverside addresses with technicians who arrive equipped to diagnose and resolve most failures the same day. No call center. No 3-day waiting list. You speak directly with our team, receive an honest assessment, and get a clear arrival window.",
      whyChoose: [
        "25+ years of hands-on Inland Empire experience — not a national franchise learning your area on the job",
        "5-star customer rating earned through consistent results across thousands of completed jobs",
        "Licensed and insured — every technician carries proper state credentials and liability coverage",
        "Same-day service available for most repair and diagnostic calls",
        "Emergency response for heating and cooling failures that can't wait until tomorrow",
        "All major equipment brands serviced and installed — Carrier, Trane, Goodman, Lennox, Rheem, York, Bryant, Amana, Daikin",
        "Written estimates before work begins — the number we quote is the number you pay",
      ],
      commonProblems: [
        { title: "Outdoor condenser coils packed with dust and debris", text: "Riverside's dry, windy climate coats outdoor units faster than homeowners expect, restricting airflow and forcing the compressor to work harder than it should." },
        { title: "Ductwork leaks bleeding conditioned air into the attic", text: "Attic temperatures in the Inland Empire regularly exceed 140°F in summer. Every duct leak in that space means you're paying to cool dead air instead of your living room." },
        { title: "System runs continuously without reaching the set temperature", text: "Usually caused by low refrigerant, undersized equipment, or excessive heat gain from poor insulation and sun-facing windows." },
        { title: "Hot and cold spots between rooms", text: "Single-zone systems serving multiple rooms with different heat loads can't distribute air evenly without damper adjustments or zoning modifications." },
        { title: "Thermostat reads one temperature while rooms feel different", text: "A failing temperature sensor, poor thermostat placement, or airflow imbalance can cause the system to over-run or under-run." },
        { title: "Sudden spike in utility bills with no change in habits", text: "Efficiency loss from a slow refrigerant leak, degraded coils, or a compressor working beyond its rated capacity are common hidden causes." },
      ],
      scheduleCta: "Waiting for a small issue to become an expensive breakdown is the most common — and most avoidable — mistake Riverside homeowners make with their HVAC systems. Whether you need a diagnostic, a seasonal tune-up, or a full system replacement, getting ahead of the problem saves money every time.",
      faqs: [
        { question: "How often should a Riverside homeowner schedule HVAC maintenance?", answer: "Twice per year is the standard — once in the spring before cooling season and once in the fall before heating season. Riverside's extreme summer temperatures and dusty conditions make these visits especially important. Skipping even one season of maintenance can result in efficiency losses that show up as higher bills and reduced cooling capacity." },
        { question: "What are the signs that my AC unit needs to be replaced rather than repaired?", answer: "Age is the strongest indicator. If your system is over 12 years old and the repair estimate exceeds roughly half the cost of a new unit, replacement is typically the better financial decision. Other signals include rising utility bills despite maintenance, inconsistent cooling, and the need for repairs more than once per year. Our technicians provide honest assessments — we don't push replacements when a repair is the smarter call." },
        { question: "Can you service any brand of HVAC equipment in Riverside?", answer: "Yes. We work on all major residential brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Bryant, Amana, and Daikin. Regardless of who installed your system or how old it is, our technicians have the training and parts access to service it." },
        { question: "How fast can I get a technician to my Riverside home?", answer: "For standard service calls placed before noon, we typically have a technician on-site the same afternoon. Emergency calls receive priority scheduling, and in most cases we can respond within a few hours. Response times vary with seasonal demand, but same-day service is our standard — not our exception." },
        { question: "My energy bills keep climbing even though I haven't changed anything — why?", answer: "This is one of the most common concerns we hear from Riverside homeowners. The usual causes are a slow refrigerant leak reducing cooling efficiency, dirty evaporator or condenser coils forcing the system to work harder, or aging components that draw more electricity than they did when new. A professional tune-up can isolate the specific cause and often resolves the issue in a single visit." },
      ],
    },
  },
  {
    slug: "perris",
    city: "Perris",
    state: "CA",
    metaTitle: "Perris, CA HVAC Company | It's No Sweat Heat & Air",
    metaDescription: "Reliable HVAC services in Perris, CA — AC repair, furnace installation & tune-ups from a 25+ year Inland Empire company. Same-day service. Call 951-331-3310.",
    primaryKeyword: "HVAC company Perris CA",
    content: {
      intro: `<p>Summers in Perris hit different. The flat, open terrain of the Perris Valley offers no shade, no ocean breeze, and no relief once temperatures climb above 105°F — which they do regularly from June through September. For homeowners here, a properly functioning air conditioning system is the difference between a livable house and an oven.</p>
<p>It's No Sweat Heat & Air has provided heating and cooling services across the Inland Empire for over 25 years, and Perris has been part of our service territory since day one. Our licensed and insured technicians understand the specific challenges that Perris homes face — from the dust kicked up by surrounding open land to the strain that extreme heat places on aging equipment. We offer same-day service, and our 5-star rating reflects a consistent track record of getting the job done right.</p>
<p>Not sure where to start? Call our team at 951-331-3310 and describe what's happening. We'll give you a straight answer — no sales pitch attached.</p>`,
      acInstallation: "Much of Perris's residential growth happened in the early 2000s, which means a significant number of homes are now running original AC equipment that's approaching — or past — the end of its useful life. Replacing a 13-SEER unit with a modern 16+ SEER system doesn't just improve cooling — it can reduce your electricity bill by 20% or more. Our AC installation process includes a detailed assessment of your home's thermal load, existing ductwork, and electrical capacity before we recommend any equipment.",
      acRepair: "Nothing about a broken air conditioner in Perris is minor. Indoor temperatures can exceed 90°F within a couple of hours once the system stops running, and waiting multiple days for a repair slot isn't realistic. Our AC repair service prioritizes fast turnaround — most calls are completed same-day. We troubleshoot everything from capacitor and contactor failures to complete compressor replacements, and we explain what we find before doing any work.",
      furnaceInstallation: "Perris sits at a lower elevation than neighboring foothill communities, but overnight winter temperatures still regularly drop into the mid-30s. Homes relying on furnaces with 80% AFUE ratings or below are burning significantly more gas than necessary to maintain comfortable temperatures. A modern furnace installation rated at 95% AFUE or higher captures almost all of that fuel as usable heat, cutting waste and lowering your gas bill every month it runs.",
      furnaceRepair: "A furnace that clicks on and off repeatedly, produces a sulfur-like smell, or fails to ignite altogether needs professional attention — not a YouTube troubleshooting session. These symptoms can indicate gas valve issues, heat exchanger cracks, or electrical faults that pose genuine safety risks. Our furnace repair technicians test every safety component as part of the diagnostic process and provide written estimates before proceeding with any repair.",
      hvacMaintenance: "In a climate as punishing as the Perris Valley, the gap between a maintained HVAC system and a neglected one shows up fast — usually as a breakdown during the hottest week of the year. Our seasonal maintenance service covers coil cleaning, refrigerant verification, blower inspection, thermostat calibration, and a full electrical safety check. Two visits per year — spring and fall — is the standard that protects both your equipment and your wallet.",
      indoorAirQuality: "Dust from surrounding open land, pollen, and the fine particulate matter stirred up by constant development make Perris a challenging environment for indoor air. If anyone in your household deals with allergies, asthma, or chronic sinus issues, your HVAC system's filtration may be part of the problem. We install air quality upgrades including HEPA filtration, UV light sanitizers, and whole-home air purification systems that trap and neutralize contaminants your standard filter misses entirely.",
      whyReliable: `<p>Perris has grown rapidly over the past two decades, attracting families priced out of more expensive Inland Empire cities. That growth means many homes were built to meet demand — not necessarily to exceed energy efficiency standards. Builder-grade HVAC equipment, minimal insulation upgrades, and standard single-pane windows are common in developments from the early 2000s. The result is homes that work their heating and cooling systems harder than they should, driving up costs and accelerating equipment wear.</p>
<p>Compounding the issue, electricity rates in Southern California are among the highest in the nation. A system running at 85% of its rated capacity due to a slow refrigerant leak or clogged coil isn't just underperforming — it's silently inflating your bill month after month. For Perris homeowners, investing in regular maintenance and addressing efficiency issues early is one of the most practical financial decisions available.</p>`,
      emergency: "An HVAC failure in Perris during peak summer doesn't allow for patience. When the outdoor temperature is 108°F and your indoor temperature is climbing past 85°F, every hour counts. Our emergency repair service provides priority dispatching to Perris addresses with technicians who carry the tools and parts to resolve most failures on the spot. We don't route your call through a third-party answering service. You speak directly with our team, get an honest assessment of the urgency, and receive a realistic arrival window. No runaround.",
      whyChoose: [
        "Quarter-century of Inland Empire experience — we've worked on thousands of homes with the same construction and climate challenges as yours",
        "Verified 5-star customer reviews — our reputation is earned project by project, not manufactured",
        "Licensed and insured technicians — fully credentialed, properly trained, and accountable for every job",
        "Same-day appointments for most service calls — no multi-day waiting periods when your comfort is on the line",
        "Emergency HVAC response — available when your system fails outside normal hours",
        "Brand-agnostic service — we repair and install Carrier, Trane, Goodman, Lennox, Rheem, York, Bryant, Amana, Daikin, and others",
        "Upfront written pricing — you approve the cost before we pick up a tool",
      ],
      commonProblems: [
        { title: "Clogged outdoor condenser from dust and debris", text: "The flat, arid landscape around Perris means outdoor units collect grime rapidly, restricting airflow and forcing the system to overheat." },
        { title: "Refrigerant leaks causing gradual cooling loss", text: "Subtle enough that homeowners don't notice until the system can't maintain temperature during a heat wave. Coils may also freeze as a secondary symptom." },
        { title: "Duct connections separated in the attic", text: "Attic temperatures in Perris can exceed 150°F in summer. Flexible ductwork expands, contracts, and eventually pulls loose at connection points, dumping conditioned air into dead space." },
        { title: "AC unit freezing up despite high outdoor temperatures", text: "Almost always caused by restricted airflow (dirty filter or blocked return) or low refrigerant. Running the system in this state damages the compressor." },
        { title: "Inconsistent temperatures between floors", text: "Common in two-story Perris homes where a single-zone system serves both levels. The upstairs runs 5–8°F warmer than the main floor, especially in afternoon hours." },
        { title: "Furnace pilot light or igniter failing repeatedly", text: "Dust contamination is a frequent cause in this area. The igniter or flame sensor corrodes faster in dusty environments and needs cleaning or replacement more often than in cleaner climates." },
      ],
      scheduleCta: "Small issues become expensive problems when they're ignored — especially in a climate that doesn't give your HVAC system a break. If something feels off with your heating or cooling, trust that instinct and get it checked.",
      faqs: [
        { question: "How much does AC repair typically cost in Perris?", answer: "Costs vary based on the specific failure, but most residential AC repairs in Perris fall between $150 and $650 for parts and labor. Compressor replacements and refrigerant recharges tend to be on the higher end. We always provide a written estimate before starting so there are no surprises — you'll know the exact cost and can make an informed decision." },
        { question: "Why does my AC seem to struggle more in Perris than it did at my previous home?", answer: "Perris sits in an open valley with minimal natural shade and higher average temperatures than many coastal or foothill communities. That means your AC runs longer cycles and works against a greater temperature differential. If your previous home was in a milder climate, the same equipment would have performed better simply because it had less work to do. A system properly sized for Perris conditions makes a significant difference." },
        { question: "Are two-story homes in Perris harder to keep cool evenly?", answer: "Yes — and it's one of the most common complaints we hear. Heat rises naturally, and a single-zone HVAC system can't compensate for the physics involved. Options include adding a zoning system with motorized dampers, installing a ductless mini-split for the upper floor, or optimizing your ductwork to deliver more airflow upstairs. Each situation is different, and we can recommend the most cost-effective solution after evaluating your home." },
        { question: "When is the best time of year to replace an HVAC system in Perris?", answer: "Late winter through early spring — roughly February through April — is ideal. Demand for installations is lower, scheduling is more flexible, and you'll have your new system tested and running well before the first serious heat arrives. Waiting until mid-summer often means longer lead times and higher urgency, which limits your ability to compare options carefully." },
        { question: "What's included in a standard HVAC tune-up for a Perris home?", answer: "Our seasonal tune-up covers a complete inspection of both the indoor and outdoor units: coil cleaning, refrigerant level check, electrical connection tightening, thermostat calibration, blower motor inspection, condensate drain clearing, and air filter replacement. We document our findings and flag any developing issues so you can address them on your terms — not during an emergency." },
      ],
    },
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityPages.map((c) => c.slug);
}
