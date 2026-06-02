/**
 * JSON-LD structured data builders. The LocalBusiness graph is the most
 * important for local SEO ("coffee shop Bojongsoang / Bandung"); breadcrumb,
 * website and event schemas support rich results on inner pages.
 */
import {
  SITE,
  CONTACT,
  OPENING_HOURS,
  SOCIAL,
  fullAddress,
} from "./site";
import { AGGREGATE_RATING } from "./reviews-data";
import type { EventItem } from "./events-data";

const ORG_ID = `${SITE.url}/#business`;

function openingHoursSpec() {
  return OPENING_HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    // schema.org expects HH:MM; normalise a midnight close.
    closes: h.closes === "24:00" ? "23:59" : h.closes,
  }));
}

/** CafeOrCoffeeShop LocalBusiness — emitted once in the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["CafeOrCoffeeShop", "Restaurant"],
    "@id": ORG_ID,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    image: [`${SITE.url}/images/interior-atrium.webp`],
    logo: `${SITE.url}/images/logo-mark.png`,
    priceRange: "Rp Rp",
    servesCuisine: [
      "Coffee",
      "Pastry",
      "Indonesian",
      "Western",
      "Italian",
      "Japanese",
    ],
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Debit Card, Credit Card, QRIS, E-wallet",
    acceptsReservations: true,
    foundingDate: String(SITE.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    hasMap: CONTACT.mapsPlaceUrl,
    openingHoursSpecification: openingHoursSpec(),
    menu: `${SITE.url}/menu`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [SOCIAL.instagram.url, SOCIAL.tiktok.url],
    areaServed: [
      "Bojongsoang",
      "Bandung",
      "Kabupaten Bandung",
      "Dayeuhkolot",
      "Buahbatu",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "id-ID",
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function eventSchema(e: EventItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: `${e.date}T${e.startTime}:00+07:00`,
    endDate: `${e.date}T${e.endTime === "24:00" ? "23:59" : e.endTime}:00+07:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: e.description,
    image: [`${SITE.url}${e.image}`],
    location: {
      "@type": "Place",
      name: SITE.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.locality,
        addressRegion: CONTACT.address.region,
        postalCode: CONTACT.address.postalCode,
        addressCountry: CONTACT.address.country,
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

/** Restaurant menu schema, grouped into sections by category. */
export function menuSchema(
  items: { name: string; description: string; price: number; category: string }[],
  categories: string[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `Menu ${SITE.name}`,
    url: `${SITE.url}/menu`,
    inLanguage: "id-ID",
    hasMenuSection: categories.map((cat) => ({
      "@type": "MenuSection",
      name: cat,
      hasMenuItem: items
        .filter((i) => i.category === cat)
        .map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          description: i.description,
          offers: {
            "@type": "Offer",
            price: i.price,
            priceCurrency: "IDR",
          },
        })),
    })),
  };
}

export { fullAddress };
