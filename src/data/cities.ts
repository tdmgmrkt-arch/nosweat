import { additionalCityPages } from "./city-page-data";

export interface CityPage {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  heading: string;
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
    metaTitle: "HVAC Services in Moreno Valley, CA",
    heading: "Heating & Air Conditioning Services in Moreno Valley",
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
    metaTitle: "AC & Heating Services in Riverside, CA",
    heading: "HVAC Services in Riverside, CA",
    metaDescription: "Riverside's trusted HVAC company — 25+ years serving the Inland Empire. Same-day AC repair, furnace service & maintenance. Licensed & insured. Call 951-331-3310.",
    primaryKeyword: "HVAC services Riverside CA",
    content: {
      intro: `<p>Riverside's housing stock tells the story of the Inland Empire — mid-century neighborhoods where the trees are taller than the houses, 1980s developments that doubled the population, and newer construction still going up along the eastern corridors. Every era brought different building standards, different HVAC equipment, and different infrastructure. The one constant is the climate: summers that push past 105°F for weeks, winters that settle into the 30s overnight, and dry conditions that accelerate wear on every mechanical system in the city.</p>
<p>It's No Sweat Heat & Air has worked across Riverside for over 25 years — in every neighborhood, across every era of construction. Licensed, insured, and rated 5 stars by homeowners who've kept calling us back because the work held up and the pricing stayed honest.</p>
<p>Need someone to look at your system? Call 951-331-3310. We'll tell you what's going on — plainly and without a sales agenda.</p>`,
      acInstallation: 'Homeowners spend weeks researching AC brands and almost no time thinking about ductwork — which is exactly backwards. The duct system determines how much of the equipment\'s output actually reaches your rooms. A top-tier condenser connected to ducts with leaking joints, inadequate return capacity, or runs that create excessive turbulence will underperform a mid-range unit on a well-designed duct system every time. Our <a href="/service/ac-installation/">AC installation process in Riverside</a> evaluates the delivery infrastructure before recommending equipment — because the best system for your home isn\'t the one with the highest rating on paper. It\'s the one matched to what your ductwork can actually support.',
      acRepair: 'There\'s a meaningful difference between a part that\'s failing and one that\'s failed — and intervening at the right stage changes the outcome dramatically. A compressor that\'s drawing elevated amperage is failing: it still runs, but each cycle pushes it closer to seizure. A compressor that won\'t start at all has failed. The first scenario is a repair. The second is often a replacement. We focus our <a href="/service/ac-repair/">AC repair work in Riverside</a> on catching components in the failing stage — where the fix is targeted and the cost is a fraction of what full failure demands. If your system still runs but something about its behavior has changed, that\'s the moment to call.',
      furnaceInstallation: 'What the previous installer left behind matters more than most homeowners realize. When we replace a furnace in Riverside, we\'re not just evaluating the new equipment — we\'re assessing what the last installation did to the infrastructure. Was the flue properly sized, or did the old unit vent through a connector that\'s now corroded and undersized? Was the gas line adequate, or was it already marginal? A <a href="/service/furnace-installation/">new furnace</a> inherits every shortcut the last installer took. Our job is to identify those shortcuts and correct them so the new system starts clean.',
      furnaceRepair: "Not every furnace symptom is an emergency — but some are, and knowing the difference matters. A furnace that won't ignite is inconvenient. A furnace that ignites with a visible flash or boom is dangerous — delayed ignition means gas is accumulating before the flame catches. A furnace that produces a faint, persistent odor of gas near the unit requires immediate action: shut it off, open windows, and call both your gas utility and an HVAC professional. We help Riverside homeowners distinguish between symptoms that can wait for a morning appointment and ones that require same-day response.",
      hvacMaintenance: "Here's something most homeowners don't consider: a system that's been consistently maintained is cheaper to repair when something eventually does go wrong. The technician arrives to a system they've seen before, with documented history, clean components that are easy to access and test, and a baseline that makes anomalies obvious. Compare that to diagnosing a neglected system — components buried under years of buildup, no history to reference, no way to know what's changed versus what's always been marginal. Maintained systems don't just fail less. They're faster to fix, easier to diagnose, and less expensive to repair when they do need attention.",
      indoorAirQuality: 'Riverside\'s dry climate and seasonal wind events carry fine particulate, pollen, and dust into homes year-round. But the air quality challenge here isn\'t just about what enters — it\'s about what stays. In a home where the HVAC system runs 10+ hours a day, contaminants cycle through the living space dozens of times. Each pass through an inadequate filter is a missed opportunity to capture what\'s in the air. We evaluate the specific <a href="/service/indoor-air-quality/">air quality conditions</a> in your home and match the solution to what we find — because the right filtration for a pet-heavy household differs from one dealing with construction dust or seasonal allergies.',
      whyReliable: `<p>Every HVAC breakdown costs you something money can't buy back: time. Time waiting for the call back. Time rearranging your schedule to be home for the technician. Time explaining the problem, waiting for the diagnosis, approving the repair, and waiting again while it's completed. A straightforward repair can consume half a day. A complicated one can stretch across multiple visits and eat an entire weekend.</p>
<p>Reliable HVAC — maintained, evaluated, and kept in good working condition — eliminates those lost hours entirely. Not by preventing every possible failure forever, but by catching developing issues during scheduled visits when the disruption is planned, brief, and on your terms.</p>`,
      emergency: "When you call during an emergency, here's how our dispatch works: we confirm the situation, check technician availability in the Riverside area, and give you a specific arrival window — usually within a few hours for urgent calls. We don't promise a time we can't keep. If there's a delay, we tell you upfront so you can plan. Call 951-331-3310.",
      whyChoose: [
        "25+ years across every part of Riverside — from the oldest neighborhoods to the newest developments",
        "5-star rated by homeowners throughout the Inland Empire, earned through consistent work across thousands of jobs",
        "Licensed and insured — full California credentials and liability coverage on every technician",
        "Same-day availability for most service calls — our scheduling standard, not an exception",
        "We evaluate the full system — equipment, ductwork, and infrastructure — not just the unit that's making noise",
        "Clear, specific communication: what we found, what it means, what the options cost",
      ],
      commonProblems: [
        { title: "System runs but the house takes twice as long to cool as it used to", text: "Gradual capacity loss — usually from a slow refrigerant decline, coil contamination, or a compressor aging past its efficient operating range. The system still functions, but it's working far harder for the same result." },
        { title: "Distinct temperature difference between the supply and return vents", text: "The temperature split across the coil should be roughly 15-20°F. A split below 12°F suggests the system isn't removing enough heat per cycle — often an airflow or refrigerant issue." },
        { title: "Outdoor unit trips the breaker but restarts fine after reset", text: "The system draws within limits most of the time but exceeds them under peak conditions — typically a compressor struggling on startup or a degraded capacitor that can't deliver the full electrical boost." },
        { title: "Furnace produces heat but the blower doesn't turn on", text: "The burners fire and the heat exchanger warms up, but conditioned air never reaches the rooms. Usually a blower relay issue, a failed motor, or a control board not completing the fan sequence." },
        { title: "Condensate pump overflowing or running constantly", text: "In homes where the air handler is below the main drain line, a condensate pump lifts the water out. If it's running nonstop or overflowing, the pump is failing or the drain line downstream is blocked." },
        { title: "System runs fine until someone turns on the dryer or oven", text: "Added heat load from major appliances can overwhelm a system at capacity. Also indicates possible electrical competition if both systems share a circuit or if the panel is near its rated load." },
      ],
      scheduleCta: "Riverside's HVAC demands are year-round, and the systems that handle them best are the ones that get professional attention before each season — not after the first failure. Call 951-331-3310.",
      faqs: [
        { question: "How do I know if my ductwork needs to be replaced or just repaired?", answer: "Age and material are the primary factors. Flex duct over 15 years old often shows significant deterioration — sagging, compression, torn inner liner. Sheet metal ducts last longer but develop leaks at joints over time. A pressure test measures actual leakage. Often, selective sealing and reinforcement is more cost-effective than full replacement." },
        { question: "What's the benefit of a two-speed or variable-speed AC system?", answer: "A variable-speed system adjusts its output to match current demand rather than running at full blast every cycle. This produces longer, quieter cycles with more consistent temperature control and better humidity management. Energy consumption drops because the system isn't constantly surging to full power. For Riverside's long cooling season, the comfort and efficiency gains are substantial." },
        { question: "Should I get a maintenance agreement or just call when I need service?", answer: "A maintenance agreement ensures your system gets serviced on schedule — which is the entire point of preventive care. Without one, tune-ups tend to get postponed until something breaks. Agreements also typically include priority scheduling and sometimes discounts on repairs." },
        { question: "My system is making a buzzing sound from the electrical panel — is that HVAC related?", answer: "Possibly. If the buzzing occurs when the HVAC system starts or runs, it may indicate a breaker under load, a loose connection at the panel, or a contactor vibrating at the outdoor unit and transmitting through the electrical line. Any buzzing from a panel should be evaluated promptly — it can indicate overheating." },
        { question: "Can I add an air purifier to my existing HVAC system without replacing anything?", answer: "Yes — most whole-home air purification and UV treatment systems are designed to integrate with existing equipment. They install inside or adjacent to the air handler and operate whenever the system runs. No ductwork changes or equipment replacement is required." },
      ],
    },
  },
  {
    slug: "perris",
    city: "Perris",
    state: "CA",
    metaTitle: "HVAC Company in Perris, CA",
    heading: "HVAC Repair & Installation in Perris, CA",
    metaDescription: "Reliable HVAC services in Perris, CA — AC repair, furnace installation & tune-ups from a 25+ year Inland Empire company. Same-day service. Call 951-331-3310.",
    primaryKeyword: "HVAC company Perris CA",
    content: {
      intro: `<p>Perris sits in one of the hottest corridors of the Inland Empire — flat terrain, no shade, no ocean breeze, and summer afternoons that routinely exceed 105°F with nothing to blunt the impact. HVAC systems here don't get easy seasons. They work hard for six months of cooling, work again for three months of heating, and spend the brief intervals in between recovering from the last demand cycle and preparing for the next one.</p>
<p>It's No Sweat Heat & Air has been part of the Perris service landscape for over 25 years. Our licensed and insured technicians understand what this climate does to residential equipment — not from a textbook, but from thousands of completed jobs in homes built across every phase of the city's growth. Five-star rated. Same-day availability. Honest assessments.</p>
<p>Not sure what's going on with your system? Call 951-331-3310 and describe what you're seeing. We'll give you a straight answer.</p>`,
      acInstallation: 'Southern California electricity rates are among the highest in the nation — and in Perris, where AC runs five to six months a year, the efficiency rating of your equipment translates directly into real dollars on every bill. The difference between a 14-SEER system and a 17-SEER system can exceed $400 annually in a home that runs cooling as heavily as most Perris properties do. Our <a href="/service/ac-installation/">AC installation process</a> includes a cost-of-ownership analysis so you can see the 5-year and 10-year projections for each option — because the cheapest system to buy is rarely the cheapest system to own.',
      acRepair: 'Certain weather events trigger specific failure modes — and understanding that connection helps us arrive prepared. A power surge during a summer thunderstorm commonly damages control boards and capacitors. The first sustained heat wave of the season exposes compressors that were marginal but masked by milder demand. A dust storm that coats the condenser coil can cause the system to overheat within days. When you call for <a href="/service/ac-repair/">AC repair in Perris</a> and describe both the symptom and the conditions surrounding it, that context tells us what to prioritize before we pull into your driveway.',
      furnaceInstallation: 'If your home has multiple levels, a large open floor plan, or rooms that consistently run colder than others, a single-zone heating system with one thermostat may not be the right configuration — regardless of how new or efficient the furnace is. Zoned heating uses motorized dampers and separate thermostats to direct warmth where it\'s needed, when it\'s needed. Our <a href="/service/furnace-installation/">furnace installation work in Perris</a> evaluates whether your home\'s layout calls for zoning, and if so, we design the system to match — because heating equipment without proper distribution control is power without direction.',
      furnaceRepair: "A furnace that clicks repeatedly without igniting is a nuisance. A furnace that ignites with a visible flash and a thump is a safety concern — that's delayed ignition, and it means gas is pooling in the combustion chamber before the flame catches. A furnace that smells faintly of gas near the cabinet is an emergency — shut it off, ventilate the house, and call immediately. Knowing which category your symptom falls into determines how you respond and how fast we need to get there.",
      hvacMaintenance: "Think of maintenance as establishing a baseline. The first visit documents where everything stands — refrigerant charge, electrical readings, coil condition, airflow measurements, component health. The second visit compares against that baseline and flags anything that's shifted. By the third and fourth visits, we know your system's personality — what's normal for this equipment in this home, and what represents a genuine change worth investigating. That accumulated baseline is what turns a routine tune-up into a predictive tool.",
      indoorAirQuality: 'The flat, open terrain surrounding Perris produces a dust profile that\'s different from denser urban areas — coarser particles in higher volume, carried by consistent wind across flat land with minimal windbreaks. Standard residential filters handle the largest of these particles, but the finer fraction passes through and accumulates on every surface in your home. Our <a href="/service/indoor-air-quality/">air quality approach for Perris homes</a> focuses on matching filtration to the specific particulate load this environment produces, which often means a higher-capacity filter system rather than a higher-rated one — because airflow volume matters as much as capture efficiency.',
      whyReliable: `<p>In Perris, your HVAC system is in active use for roughly nine months out of twelve. Three months of cooling overlap. Three months of heating. Three more where one or the other runs depending on the week. That leaves about ninety days a year where the system isn't working — and even during those days, it's cycling periodically to maintain temperature.</p>
<p>That level of dependence means every day of downtime has a disproportionate impact. A system failure in a climate where HVAC is optional for half the year is an inconvenience. A system failure in Perris is a disruption to the basic functioning of the household. The reliability of your equipment isn't abstract here — it's the thing your daily routine is built on.</p>`,
      emergency: "When calling about an emergency, tell us three things: what the system is doing (or not doing), how long it's been happening, and whether anyone in the home is at elevated risk from the conditions. That information lets us triage effectively and dispatch the right technician with the right focus. Call 951-331-3310 — we handle Perris emergency calls ahead of routine scheduling.",
      whyChoose: [
        "25+ years in the Inland Empire with Perris as core service territory since day one",
        "5-star rated by homeowners across the region — earned through thousands of jobs, not marketing spend",
        "Licensed and insured — full California credentials on every technician who enters your home",
        "Same-day availability for most calls — cooling emergencies in this climate don't wait",
        "We provide cost-of-ownership analysis with every installation quote — not just the purchase price, but what it costs to run",
        "Transparent process from start to finish — we explain what we're checking, what we found, and what each option costs before any decisions are made",
      ],
      commonProblems: [
        { title: "AC compressor hums but won't start — then tries again every few minutes", text: "The compressor is attempting to start but can't overcome the initial electrical load — typically a failing start capacitor or relay. Each failed attempt stresses the compressor windings. The longer this continues, the higher the risk of permanent motor damage." },
        { title: "System cools the house but the air feels stale and recirculated", text: "The temperature is right but the air lacks freshness — common in tightly sealed homes where the system recirculates indoor air without adequate ventilation or filtration to remove accumulated CO2, odors, and off-gassed compounds." },
        { title: "Outdoor unit fan runs in one direction during cooling but doesn't reverse for defrost", text: "In heat pump systems, the fan should reverse during defrost cycles to melt ice accumulation. A stuck reversing valve or a failed defrost control board prevents this, leading to ice buildup that progressively reduces heating capacity." },
        { title: "Thermostat loses its program or resets to default after power flickers", text: "Older thermostats without battery backup lose their programming during any power interruption. In Perris, where summer grid demand causes occasional voltage fluctuations, this can happen repeatedly — resetting schedules and efficiency settings each time." },
        { title: "Supply register in one room is significantly warmer than others during cooling", text: "A single warm register while others are cold typically indicates a duct issue specific to that run — a disconnection, a severe kink, or insulation that's fallen away and allowing the air to heat up before reaching the room." },
        { title: "System cycles normally but produces a faint vibration you can feel in the floor", text: "Different from audible noise — a tactile vibration indicates the air handler or compressor is transmitting mechanical energy into the structure. This often develops gradually as mounting isolators degrade or fasteners work loose over years of operation." },
      ],
      scheduleCta: "Perris doesn't offer your HVAC system much downtime. The systems that handle that demand reliably are the ones that get professional attention ahead of each season. Call 951-331-3310.",
      faqs: [
        { question: "How much can I actually save by upgrading to a higher-efficiency AC system?", answer: "In Perris, where AC runs 5-6 months a year, the difference between a 14-SEER and a 17-SEER system can save $300-$500 annually on electricity. Over a 15-year system life, that's $4,500-$7,500 in reduced operating costs — which often exceeds the price difference between the two systems at the time of purchase. We calculate the specific payback for your home during every installation consultation." },
        { question: "Is it worth getting a second opinion on an HVAC diagnosis?", answer: "If the quote is large, the explanation was unclear, or you feel pressured — yes. A legitimate diagnosis should be explainable in plain language, and a reputable company won't object to you seeking a second opinion. We regularly take second-opinion calls and sometimes confirm the original diagnosis. When we don't, the savings can be significant." },
        { question: "Why does my system perform differently on humid days versus dry days?", answer: "Humidity adds latent heat load that the AC must remove in addition to sensible (temperature) heat. On a humid day, the system works harder to both cool and dehumidify the air, which extends cycle times and reduces the apparent cooling effect. If your system handles dry 100°F days fine but struggles on humid 95°F days, it may be at its capacity limit for latent load removal." },
        { question: "What's the difference between a tune-up and a full system diagnostic?", answer: "A tune-up is preventive — cleaning, checking, and adjusting components to maintain performance. A diagnostic is investigative — tracing a specific symptom to its cause. A tune-up is scheduled when nothing seems wrong. A diagnostic is called for when something does. Both include a system inspection, but the diagnostic goes deeper into the specific area of concern." },
        { question: "Can solar panels reduce my HVAC operating costs?", answer: "Yes, and significantly in Perris's climate. Solar generation peaks during the same hours your AC draws the most power — midday and afternoon. A properly sized solar system can offset a large portion of your cooling electricity costs. However, the HVAC system should be efficient and well-maintained first — solar offsets the cost of running the system, but it doesn't fix an inefficient one." },
      ],
    },
  },
  {
    slug: "highland",
    city: "Highland",
    state: "CA",
    metaTitle: "HVAC Repair & Service in Highland, CA",
    heading: "Heating & Cooling Services in Highland",
    metaDescription: "Highland's trusted HVAC company — 25+ years experience. Same-day AC repair, furnace service, and maintenance. Licensed & insured. Call 951-331-3310.",
    primaryKeyword: "HVAC services Highland CA",
    content: {
      intro: `<p>Highland spreads out along the base of the San Bernardino Mountains, and that positioning creates a climate with more range than most Inland Empire cities. Summer heat reflects off the valley floor and pushes past 105°F. Winter cold rolls downhill from the mountains and settles into the low 30s. The air is dry, the dust is constant, and every HVAC system in the city absorbs the full weight of both seasons without a break.</p>
<p>It's No Sweat Heat & Air has worked in Highland and the surrounding Inland Empire for over 25 years — not as a franchise learning the territory, but as the local company homeowners call back because the work held up. Licensed, insured, and rated 5 stars through results, not requests.</p>
<p>Something going on with your system? Call 951-331-3310. We'd rather catch a small problem now than respond to a big one later.</p>`,
      acInstallation: "Most homeowners replace their air conditioner exactly once — so the decisions made during that single installation determine their comfort and energy costs for the next decade and a half. The question that matters most isn't which brand to buy. It's whether anyone bothered to calculate what the home actually needs before selecting equipment. We measure your home's thermal load — insulation condition, window placement, how much of the roof bakes in afternoon sun, whether the ductwork can actually deliver what the new unit produces — and recommend equipment based on that data. The brand conversation comes after the math is right.",
      acRepair: "Here's what usually happens: the system starts struggling in May — running longer cycles, not quite reaching the set temperature on the hottest afternoons. The homeowner adjusts the thermostat, closes some blinds, decides it's fine. By July, the compressor locks up on a 109°F day and the house hits 95°F indoors before anyone makes a call. That trajectory is preventable. Our <a href=\"/service/ac-repair/\">AC repair service in Highland</a> is built to intervene at the \"struggling\" stage, not just the \"failed\" stage. If something about your system's behavior has changed, that change is worth a call.",
      furnaceInstallation: "Highland's winters bring overnight temperatures that regularly test heating equipment — especially homes near the foothills where cold air settles. A furnace that seemed adequate in milder conditions can fall short when sustained low temperatures demand consistent output over long overnight runs. We size heating equipment to your home's actual cold-weather demand, evaluate the ductwork for leaks that would bleed heat into unconditioned space, and verify that the system delivers even warmth to every room — not just the one closest to the air handler.",
      furnaceRepair: "A furnace issue that costs $150 to fix today can cost $800 next month and $3,000 by next winter — not because the repair gets more expensive, but because the original problem damages adjacent components the longer it runs unchecked. A failing flame sensor forces repeated ignition attempts that stress the gas valve. A restricted airflow condition that causes overheating warps the heat exchanger over dozens of cycles. Every week of continued operation with an active problem adds to the eventual bill. Our approach to furnace repair in Highland is to find the issue early and explain exactly where it sits on that escalation path.",
      hvacMaintenance: "Skipping maintenance is a gamble — and the odds get worse with every season you skip. A system that ran fine last summer has been sitting through winter with whatever issues it developed during the prior cooling season. Dirty coils, drifting refrigerant, loosening connections — none of them fixed themselves during the off-season. They're all still there when the first heat wave hits, plus whatever wear the heating season added on top. Each skipped season stacks more risk onto the first demanding day of the next one. Our maintenance protocol addresses the accumulated exposure from the previous season and prepares the system for what's ahead — because the point isn't to spend less on maintenance. It's to control the risk that something fails when you need it most.",
      indoorAirQuality: "Highland's proximity to open terrain and mountain foothills means more airborne particulate than most homeowners assume — especially during wind events and fire season. If dust returns almost immediately after cleaning, or if allergy symptoms are worse indoors than out, the issue is usually the HVAC system recirculating contaminants rather than filtering them. We offer <a href=\"/service/indoor-air-quality/\">purification and filtration upgrades</a> that integrate with your existing equipment — and homeowners who install them consistently report less dust, fewer symptoms, and air that actually feels clean.",
      whyReliable: `<p>An unreliable HVAC system changes the way you live in your house. You stop using the upstairs bedroom in July because it never cools down. You run a space heater in the bathroom every winter morning because the furnace takes too long to reach that end of the house. You leave the kitchen vent hood off during cooking because you're afraid the extra load will trip something. These small accommodations accumulate until you're living around your HVAC system instead of inside a home it's supposed to make comfortable.</p>
<p>That's what unreliable really means — not a single dramatic failure, but a gradual surrender of rooms, routines, and comfort that most homeowners don't fully recognize until someone fixes the system and they realize how much they'd been working around it.</p>`,
      emergency: "We answer our own phones. When you call during an emergency, you'll talk to someone who can give you a real timeline — not a service queue or a promise to call back. Our technicians arrive with the tools and diagnostic capability to handle the most common failures without needing a return trip. Highland is core territory for us, and our response reflects that.",
      whyChoose: [
        "25+ years working in the Inland Empire — we know Highland's climate and housing patterns and how both break HVAC systems",
        "5-star rated by homeowners who've compared us to the alternatives and kept calling back",
        "Every technician licensed and insured with California state credentials and full liability coverage",
        "Same-day service for most calls — it's how we schedule, not an exception we make",
        "We tell you what we'd do if it were our house — even when the answer is 'you don't need to replace that'",
        "Pricing quoted before work starts — the number doesn't change after",
      ],
      commonProblems: [
        { title: "System performance drops as outdoor temperature rises above 100°F", text: "The equipment may be adequately sized for typical conditions but unable to maintain set temperature during peak heat. Often compounded by poor duct insulation or a condenser location absorbing reflected heat." },
        { title: "Furnace produces heat but doesn't distribute it evenly", text: "Rooms closest to the unit get warm while bedrooms at the far end stay cold. The equipment is working — the duct system isn't delivering. Balancing adjustments typically resolve this without new equipment." },
        { title: "Dust accumulates faster than seems reasonable", text: "Highland's dry environment and open terrain produce more airborne particulate. When the HVAC system has gaps in its filtration path — unsealed filter housings, leaking return ducts — it pulls unfiltered air into the supply side." },
        { title: "AC freezes up on hot days", text: "Restricted airflow or a declining refrigerant charge can drop evaporator coil temperature below freezing even when it's 108°F outside. Continuing to run the system in this state risks serious mechanical damage." },
        { title: "Water pooling or stains near the indoor air handler", text: "Condensate isn't draining properly — the line may be clogged, the overflow pan cracked, or a partially frozen coil is thawing unevenly. Water near electrical components creates both damage and safety concerns." },
        { title: "Outdoor unit vibrating or rattling more than usual", text: "Mounting hardware loosens over time, fan motor bearings degrade, and debris can lodge inside the condenser housing. The noise is a warning — what it's warning about gets more expensive the longer it continues." },
      ],
      scheduleCta: "If your system has been running harder than it used to, making sounds you've been ignoring, or costing more than it should — that's the window where a service call pays for itself several times over.",
      faqs: [
        { question: "What should I expect during a first-time HVAC service call?", answer: "Our technician will inspect the full system — indoor and outdoor units, electrical connections, refrigerant levels, airflow, thermostat operation, and drainage. You'll get a clear explanation of anything found, a written quote for any recommended work, and an honest assessment of the system's overall condition. Most diagnostic visits take about an hour." },
        { question: "Is it worth adding insulation or sealing ducts before replacing HVAC equipment?", answer: "Often, yes. If your ductwork is leaking conditioned air into unconditioned spaces, or if your attic insulation has degraded, a new system will underperform its rating from day one. Addressing the envelope and delivery system first ensures new equipment actually delivers the efficiency you're paying for." },
        { question: "Can a tune-up actually lower my energy bill?", answer: "It's measurable. Dirty coils reduce heat transfer. Low refrigerant forces the compressor to work harder. Loose electrical connections increase resistance. Each adds cost individually; together they can inflate your bill by 15–25%. A tune-up restores the efficiency your system has quietly lost." },
        { question: "How do I know if my ductwork is part of the problem?", answer: "The most common signs: rooms that never reach the right temperature, visible dust around supply registers, and energy bills that seem high relative to your home's size. A duct inspection can quantify exactly how much conditioned air you're losing and where." },
        { question: "What's the difference between a repair and a diagnostic?", answer: "A diagnostic is an evaluation — we inspect the system, identify what's wrong, and provide a written quote. No work is performed until you approve it. A repair is the execution of that work. We never combine the two without your explicit approval." },
      ],
    },
  },
  {
    slug: "lake-elsinore",
    city: "Lake Elsinore",
    state: "CA",
    metaTitle: "Heating & AC Services in Lake Elsinore, CA",
    heading: "Local HVAC Experts in Lake Elsinore, CA",
    metaDescription: "Lake Elsinore HVAC company with 25+ years experience. Same-day AC repair, furnace service & maintenance. Licensed & insured. Call 951-331-3310.",
    primaryKeyword: "HVAC services Lake Elsinore CA",
    content: {
      intro: `<p>Lake Elsinore has a way of surprising people who move in from the coast. The summers are hotter than they expected — days above 110°F aren't unusual. The winters are colder than the brochure suggested. And the energy bills from running the HVAC system through both extremes are higher than they budgeted for. By the second full year, most homeowners here have learned the same lesson: the HVAC system is either your biggest comfort asset or your biggest headache.</p>
<p>It's No Sweat Heat & Air has been handling HVAC work in Lake Elsinore and across the Inland Empire for over 25 years. Our 5-star rating isn't a marketing number — it's the result of thousands of jobs where we showed up, did honest work, and charged what we said we would. Licensed, insured, no games.</p>
<p>Not sure what your system needs? Call 951-331-3310. Even if it's just a question, we'll give you something useful.</p>`,
      acInstallation: 'What would happen if you put a sports car engine in a minivan? It would technically run — but nothing about the experience would make sense. That\'s roughly what happens when an AC system is selected based on brand or price rather than the home\'s actual cooling requirements. Too much capacity and the system lurches through short cycles that waste power and leave moisture in the air. Too little and it grinds all day without reaching the temperature you want. Our approach starts with the home: we calculate what it takes to cool your specific property based on measurable data, then match equipment to those numbers. Every installation is verified under real conditions before we walk away.',
      acRepair: 'Most AC failures don\'t happen without warning — they announce themselves weeks or months in advance through longer run times, reduced output, or unusual sounds. The homeowners who call at the first sign of trouble almost always pay less and get their system back faster. We handle same-day <a href="/service/ac-repair/">AC repair</a> throughout Lake Elsinore and our focus is on accurate diagnosis and lasting fixes — not quick patches that generate callbacks.',
      furnaceInstallation: "Lake Elsinore's winters catch homeowners off guard — overnight lows in the mid-30s are routine, and a furnace that can barely maintain temperature at 40°F will fail outright when it drops below freezing. A struggling furnace runs in long, continuous cycles without ever satisfying the thermostat, keeps certain rooms cold no matter how long it operates, and costs noticeably more to run each month as it fights a losing battle against its own limitations. We size heating equipment to your home's real-world cold-weather demand — not the moderate average, but the worst nights when you need it most — and verify that the system delivers even warmth throughout the house before the job is closed.",
      furnaceRepair: "Ignoring a furnace problem doesn't save money — it borrows from a future repair bill at a steep interest rate. The clicking igniter you reset twice last January? If the underlying cause was a failing sensor, the fix would have been under $200. Left unaddressed, it can progress to conditions that require equipment replacement. We inspect for safety hazards — including carbon monoxide — on every furnace call before diagnosing the mechanical issue. Then we quote the work, explain what we found, and let you decide.",
      hvacMaintenance: "The most common mistake homeowners make with their HVAC system isn't neglect — it's assuming that a system running without obvious problems is a system running well. Efficiency degrades quietly. Components weaken invisibly. By the time a symptom appears, the system has often been underperforming for a full season or more. Our maintenance protocol evaluates the full health of the system — catching degradation at the stage where correction costs a fraction of what failure does. We recommend service ahead of each high-demand season.",
      indoorAirQuality: 'Lake Elsinore\'s valley position and dry climate push dust and particulate into homes year-round. If your home collects dust faster than you can clean it — or if allergy symptoms improve every time you leave — the problem isn\'t housekeeping. It\'s the air handler recirculating particles that your current filter can\'t catch. Our process starts with identifying the specific contaminants and entry points in your home before recommending any <a href="/service/indoor-air-quality/">equipment</a> — because the right solution for a dust-dominant house is different from one dealing with biological growth or chemical off-gassing.',
      whyReliable: `<p>Lake Elsinore's valley geography concentrates summer heat in a way that flat terrain doesn't. Afternoon temperatures build, radiant heat reflects off surrounding hillsides, and the cooling system works harder and longer than most manufacturers' specs assume. A system that's gradually lost capacity doesn't announce the problem — it just runs more hours per day to achieve the same result, and your utility bill absorbs the difference.</p>
<p>The housing here spans a range of ages and build qualities. In all cases, the equipment is only one variable. Homes with conditioned air leaking through unsealed duct joints or poorly insulated runs are paying for comfort they never receive. An honest HVAC evaluation looks at the whole picture — not just the unit outside.</p>`,
      emergency: "We answer our calls directly, dispatch from within the Inland Empire, and Lake Elsinore is territory we've covered for over two decades. When your system goes down and the house is getting worse, call 951-331-3310 and we'll get someone to you the same day with a specific arrival time.",
      whyChoose: [
        "25+ years in the Inland Empire — we've been here through Lake Elsinore's growth and understand the equipment that went into every phase of it",
        "5-star rated through thousands of completed jobs — earned through honest work, not review incentives",
        "Licensed and insured — full California credentials and liability coverage on every technician",
        "Same-day scheduling for most calls, including non-emergencies",
        "We present repair and replacement options side by side with real numbers — no steering toward the more expensive choice",
        "Every major residential brand serviced and installed",
      ],
      commonProblems: [
        { title: "Electric bill spiked but nothing changed in your routine", text: "The system is compensating for a problem you can't see — declining refrigerant, fouled coils, or an electrical component pulling more current than it should." },
        { title: "Cool air at the vent, but not enough of it", text: "The system is producing cold air, but airflow volume has dropped. Typically a blower issue, an evaporator restriction, or ductwork that's partially collapsed or disconnected." },
        { title: "Outdoor unit sounds different than it did last year", text: "Mechanical changes in sound indicate component wear. A hum becomes a buzz, a buzz becomes a rattle. Intervening early in that progression is significantly cheaper." },
        { title: "Rooms that used to be comfortable aren't anymore", text: "The system's output has declined, and the rooms farthest from the air handler feel it first. Often a gradual refrigerant or airflow issue." },
        { title: "System starts fine in the morning but struggles by 3 PM", text: "Peak solar load overwhelms remaining capacity. Can be an equipment issue, but often amplified by duct losses or a condenser absorbing reflected heat from nearby surfaces." },
        { title: "Furnace cycles on, heats briefly, then shuts off", text: "Safety controls are intervening — usually because of restricted airflow, a sensor issue, or an overheating condition. Each interrupted cycle stresses ignition components." },
      ],
      scheduleCta: "The homeowners who call us during a crisis always say the same thing: 'I knew something was off a few months ago.' That earlier version of the problem was the affordable one. If anything about your system has you wondering, call while the fix is still simple.",
      faqs: [
        { question: "Is there a best time of year to replace an HVAC system?", answer: "Late winter and early spring are ideal. Demand is lower, scheduling is more flexible, and you avoid the rush that starts when the first heat wave hits. Replacing during the off-season also means your new system is tested before it faces peak demand." },
        { question: "What does a SEER rating actually mean for my energy bill?", answer: "SEER measures cooling efficiency — higher numbers mean less electricity per unit of cooling. A system rated at SEER 16 uses roughly 25% less electricity than one rated at SEER 12 for the same output. For a home running AC five to six months a year, that difference can exceed $300 annually." },
        { question: "Should I close vents in rooms I don't use to save energy?", answer: "No. Closing vents increases duct pressure, which can cause leaks, reduce efficiency, and force the blower to work harder. The system was designed with all vents open. If certain rooms don't need conditioning, damper adjustments at the duct level are the right approach." },
        { question: "What happens if I keep running my AC after I notice a problem?", answer: "It depends on the problem, but generally: it gets more expensive. A failing capacitor that costs $150 to replace can burn out a compressor motor under continued strain — turning it into a $2,000+ repair. Early intervention almost always costs less." },
        { question: "How can I tell if my thermostat is the problem or the HVAC system?", answer: "Adjust the set temperature by 5 degrees and see if the system responds. If it does, the thermostat is communicating — the issue is likely in the equipment or ductwork. If nothing happens, the thermostat or its wiring may be the culprit. A diagnostic visit can isolate which side the problem is on quickly." },
      ],
    },
  },
  ...additionalCityPages,
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityPages.map((c) => c.slug);
}
