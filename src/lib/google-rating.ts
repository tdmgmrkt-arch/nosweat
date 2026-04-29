const PLACE_ID = "ChIJpXurvIOn3IAR_daHvH0G1jY";

const FALLBACK_RATING = { rating: 4.9, reviewCount: 78 } as const;

export interface LiveRating {
  rating: number;
  reviewCount: number;
}

/**
 * Live reviews returned to the schema and the on-page carousel.
 * Date format is ISO-8601 (matches schema.org/Review datePublished).
 */
export interface LiveReview {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  publishedAt: string; // ISO-8601
  /** Human-readable like "in the last week" — provided by Google. */
  relativeDate?: string;
}

/**
 * Curated fallback reviews used when:
 *   - GOOGLE_PLACES_API_KEY isn't set in the environment (e.g. preview build with stripped envs)
 *   - Places API call fails
 *   - Places API returns no reviews (e.g. brand-new locations)
 *
 * These are real customer reviews captured manually. Keep them 5-star and
 * representative so the page never shows stale-feeling content even on fallback.
 */
const FALLBACK_REVIEWS: LiveReview[] = [
  {
    authorName: "Derrick F.",
    rating: 5,
    text: "He was honest and knowledgeable, and his prices were very reasonable. The system does a great job — my family and I feel comfortable and cool.",
    publishedAt: "2024-06-15T00:00:00Z",
  },
  {
    authorName: "Annette S.",
    rating: 5,
    text: "Justin quickly noticed that all that was needed was for a pipe to be unblocked and sealed. It took less than 30 min to fix. We really appreciated the integrity and honesty.",
    publishedAt: "2024-08-22T00:00:00Z",
  },
  {
    authorName: "Mary W.",
    rating: 5,
    text: "He and his crew installed the new system in less than four hours. It works great. His prices are very reasonable, and he guarantees his work. We recommend using No Sweat.",
    publishedAt: "2024-09-10T00:00:00Z",
  },
];

/**
 * Fetch the live aggregate rating + review count from Places API (New).
 * Cached for 24h via Next.js ISR. Falls back to known-good values on any failure.
 */
export async function getLiveRating(): Promise<LiveRating> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK_RATING;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
        Accept: "application/json",
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK_RATING;

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };
    return {
      rating: data.rating ?? FALLBACK_RATING.rating,
      reviewCount: data.userRatingCount ?? FALLBACK_RATING.reviewCount,
    };
  } catch {
    return FALLBACK_RATING;
  }
}

/**
 * Fetch up to 5 of the most relevant reviews from Places API (New).
 *
 * Notes:
 *  - Google caps reviews at 5 per Place Details call. This is a hard limit.
 *  - Reviews come back in "most relevant" order (Google's signal — newer
 *    reviews and longer comments tend to surface first).
 *  - Adding `reviews` to the field mask moves the call into the
 *    "Place Details (Enterprise + Atmosphere)" SKU at ~$25/1000 calls.
 *    With 24h ISR cache that's <100 calls/month = ~$2/mo. Free tier covers it.
 *  - We filter out reviews under `minRating` (default 4) so the visible
 *    site content stays positive. Adjust if you want to show all reviews.
 */
export async function getRecentReviews(
  options: { limit?: number; minRating?: number } = {}
): Promise<LiveReview[]> {
  const { limit = 5, minRating = 4 } = options;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK_REVIEWS.slice(0, limit);

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews",
        Accept: "application/json",
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK_REVIEWS.slice(0, limit);

    const data = (await res.json()) as {
      reviews?: Array<{
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        publishTime?: string;
        relativePublishTimeDescription?: string;
        authorAttribution?: {
          displayName?: string;
          photoUri?: string;
        };
      }>;
    };

    const mapped: LiveReview[] = (data.reviews ?? [])
      .filter((r) => (r.rating ?? 0) >= minRating)
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? "Verified Customer",
        authorPhotoUrl: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        publishedAt: r.publishTime ?? new Date().toISOString(),
        relativeDate: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.text.length > 0)
      .slice(0, limit);

    return mapped.length > 0 ? mapped : FALLBACK_REVIEWS.slice(0, limit);
  } catch {
    return FALLBACK_REVIEWS.slice(0, limit);
  }
}
