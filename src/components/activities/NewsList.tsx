import Image from "next/image";
import { news } from "@/data/news";
import { school } from "@/data/school";

const dateFormat = new Intl.DateTimeFormat("sq-AL", { day: "numeric", month: "long", year: "numeric" });

export function NewsList() {
  if (news.length === 0) {
    return (
      <div className="reveal relative overflow-hidden rounded-[1.5rem] border border-line bg-paper px-6 py-14 sm:px-12 sm:py-20">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-md text-center">
          <span aria-hidden className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-ivory">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 5h11v14H6a1 1 0 0 1-1-1V5Zm11 4h3v9a1 1 0 0 1-1 1h-2M8 9h5M8 12h5M8 15h3" />
            </svg>
          </span>
          <p className="t-h3 mt-6">Ende nuk ka lajme të publikuara.</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            Njoftimet zyrtare të shkollës do të shfaqen këtu sapo të publikohen. Ndërkohë, ndiqni shkollën në kanalet
            e saj zyrtare.
          </p>
          {school.social.length > 0 && (
            <div className="mt-8 flex justify-center gap-3">
              {school.social.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-ivory">
                  {s.label}
                  <span className="sr-only"> (hapet në dritare të re)</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <li key={item.slug} className="reveal">
          <article>
            {item.image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-sand">
                <Image src={item.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
            )}
            <p className="t-eyebrow mt-5 text-muted">
              {item.category} · <time dateTime={item.date}>{dateFormat.format(new Date(item.date))}</time>
            </p>
            <h3 className="t-h3 mt-3">{item.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{item.excerpt}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
