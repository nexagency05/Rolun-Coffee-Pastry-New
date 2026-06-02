import Image from "next/image";
import { Clock, Ticket } from "lucide-react";
import type { EventItem } from "@/lib/events-data";
import { formatEventDate, eventDateParts } from "@/lib/events-data";

export function EventCard({ event }: { event: EventItem }) {
  const { day, month } = eventDateParts(event.date);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-coffee-100/60 bg-white shadow-sm transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
        {/* Date chip */}
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-cream-50/95 px-3 py-2 text-center shadow-soft backdrop-blur">
          <span className="font-serif text-2xl font-bold leading-none text-forest-800">
            {day}
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-wider2 text-gold-600">
            {month}
          </span>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-forest-800/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-cream-100">
          {event.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold leading-snug text-forest-800">
          {event.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-coffee-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold-600" aria-hidden />
            {event.startTime.replace(":", ".")} –{" "}
            {(event.endTime === "24:00" ? "00:00" : event.endTime).replace(":", ".")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Ticket className="h-3.5 w-3.5 text-gold-600" aria-hidden />
            {event.entry}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-coffee-500">
          {event.description}
        </p>
        <p className="mt-4 text-xs font-medium text-coffee-300">
          {formatEventDate(event.date)}
        </p>
      </div>
    </article>
  );
}
