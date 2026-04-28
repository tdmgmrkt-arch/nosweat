const PLACE_ID = "ChIJpXurvIOn3IAR_daHvH0G1jY";
const FIELD_MASK = "rating,userRatingCount";

const FALLBACK = { rating: 4.9, reviewCount: 78 } as const;

export interface LiveRating {
  rating: number;
  reviewCount: number;
}

export async function getLiveRating(): Promise<LiveRating> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": FIELD_MASK,
          Accept: "application/json",
        },
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };
    return {
      rating: data.rating ?? FALLBACK.rating,
      reviewCount: data.userRatingCount ?? FALLBACK.reviewCount,
    };
  } catch {
    return FALLBACK;
  }
}
