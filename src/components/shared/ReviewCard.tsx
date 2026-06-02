import { Star, Quote } from "lucide-react";
import type { Review } from "@/lib/reviews-data";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-gold-400 text-gold-400" : "text-coffee-200"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-coffee-100/60 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <Quote className="h-7 w-7 text-gold-200" aria-hidden />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-coffee-600">
        “{review.body}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-coffee-100/60 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-sm font-semibold text-cream-50">
          {review.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-forest-800">
            {review.author}
          </span>
          <span className="block text-xs text-coffee-400">
            {review.source} · {review.date}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
