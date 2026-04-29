export const SITE_URL = "https://www.itsnosweat.net";

/**
 * Returns a canonical URL for the given path, ensuring a trailing slash
 * to match the site's `trailingSlash: true` Next.js config.
 *
 * Examples:
 *   canonicalFor("/")                       → "https://www.itsnosweat.net/"
 *   canonicalFor("/about-us")               → "https://www.itsnosweat.net/about-us/"
 *   canonicalFor("/blog/some-post/")        → "https://www.itsnosweat.net/blog/some-post/"
 */
export const canonicalFor = (path: string): string => {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalised.endsWith("/") ? normalised : `${normalised}/`;
  return `${SITE_URL}${withSlash}`;
};
