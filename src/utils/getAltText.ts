export type ImageType =
  | "hero"
  | "tech"
  | "reliable"
  | "emergency"
  | "schedule"
  | "mascot"
  | "ac"
  | "heating"
  | "iaq"
  | "team";

/**
 * Returns deterministic, city-specific alt text for HVAC service images.
 * Each image type maps to a unique description to avoid repetition within a page.
 */
export function getAltText(type: ImageType, city: string): string {
  switch (type) {
    case "hero":
      return `It's No Sweat Heat & Air service van in ${city}, CA`;
    case "tech":
      return `HVAC technician servicing a home in ${city}, CA`;
    case "reliable":
      return `Reliable heating and cooling service for ${city} homes`;
    case "emergency":
      return `Emergency HVAC repair service available in ${city}, CA`;
    case "schedule":
      return `Schedule AC and heating service in ${city}, CA`;
    case "mascot":
      return `No Sweat HVAC mascot — serving ${city}, CA`;
    case "ac":
      return `AC installation and repair in ${city}, CA`;
    case "heating":
      return `Furnace repair and heating service in ${city}`;
    case "iaq":
      return `Indoor air quality service in a ${city} home`;
    case "team":
      return `It's No Sweat Heat & Air team ready to serve ${city}, CA`;
    default:
      return `HVAC service in ${city}`;
  }
}
