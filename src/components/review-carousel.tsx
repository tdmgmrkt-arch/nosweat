import { Star, CheckCircle2, Quote } from "lucide-react";
import { getRecentReviews, type LiveReview } from "@/lib/google-rating";

/**
 * Format an ISO-8601 timestamp into a "X weeks ago" style string.
 * Used as fallback when Google didn't supply a `relativeDate`.
 */
function formatRelativeDate(iso: string): string {
  const reviewDate = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - reviewDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "today";
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

/** Trims long reviews so cards stay visually balanced. */
function truncate(text: string, maxLength = 220): string {
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");
  return trimmed.slice(0, lastSpace > 0 ? lastSpace : maxLength) + "…";
}

export async function ReviewCarousel() {
  // Server Component — fetched at build time / per-request via 24h ISR cache.
  // Google caps Places API reviews at 5; we show 3 for a clean single-row grid.
  const reviews = await getRecentReviews({ limit: 3, minRating: 4 });

  return (
    <div className="w-full">
      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((review: LiveReview, index: number) => (
          <div
            key={`${review.authorName}-${index}`}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-[#0F172A]/50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-[#151E32]/80 hover:ring-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Ambient Background Glow (Reveals smoothly on hover) */}
            <div className="absolute -right-10 -top-10 h-[150px] w-[150px] rounded-full bg-brand-blue/20 blur-[60px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

            <div className="relative z-10">
              {/* Header: Stars & Quote Icon */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex gap-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-white/5 transition-colors duration-500 group-hover:text-brand-blue/10" />
              </div>

              {/* Review Text */}
              <p className="text-[15px] leading-relaxed text-slate-300 font-light">
                &ldquo;{truncate(review.text)}&rdquo;
              </p>
            </div>

            {/* Footer: Author Info */}
            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex items-center gap-4">
                {/* Interactive Avatar Box */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/10 font-heading text-lg font-extrabold text-brand-blue-light shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300 group-hover:bg-brand-blue/10 group-hover:ring-brand-blue/30">
                  {review.authorName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white tracking-wide transition-colors group-hover:text-brand-blue-light">
                    {review.authorName}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">Google Review</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 text-brand-blue-light drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
                </div>
                <span className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                  {review.relativeDate ?? formatRelativeDate(review.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
