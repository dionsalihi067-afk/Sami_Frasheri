import { school } from "@/data/school";

const query = encodeURIComponent(school.contact.mapQuery);
const embedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;

/**
 * Google Maps embed located by the school's name (no hand-entered coordinates or street).
 * With NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY (a public, referrer-restricted Embed API key) the
 * official Maps Embed API is used; otherwise the keyless embed.
 */
const embedSrc = embedKey
  ? `https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=${query}&language=sq`
  : `https://www.google.com/maps?q=${query}&hl=sq&z=16&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

export function SchoolMap() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] border border-line bg-sand sm:aspect-[16/10] sm:rounded-[1.5rem] lg:aspect-[21/9]">
      <div className="absolute inset-0 flex items-center justify-center text-sm text-muted" aria-hidden>
        Duke ngarkuar hartën…
      </div>
      <iframe
        src={embedSrc}
        title={`Harta: ${school.name}, ${school.city}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
