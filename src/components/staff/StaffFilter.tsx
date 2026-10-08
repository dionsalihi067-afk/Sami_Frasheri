"use client";

import { useState } from "react";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Every query term must match the start of a word, so "kimi" finds Kimi but not "Edukimi". */
function matches(haystack: string, terms: string[]) {
  const words = normalize(haystack).split(/[^a-z0-9]+/);
  return terms.every((t) => words.some((w) => w.startsWith(t)));
}

/**
 * Filters the server-rendered directory in place by toggling `hidden`, so the list itself
 * stays static HTML and needs no client-side rendering.
 */
export function StaffFilter({ total }: { total: number }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(total);

  const apply = (value: string) => {
    setQuery(value);
    const terms = normalize(value).split(/[^a-z0-9]+/).filter(Boolean);
    let visible = 0;
    document.querySelectorAll<HTMLElement>("[data-staff-category]").forEach((category) => {
      let inCategory = 0;
      category.querySelectorAll<HTMLElement>("[data-staff-group]").forEach((group) => {
        let inGroup = 0;
        group.querySelectorAll<HTMLElement>("[data-staff-item]").forEach((item) => {
          const match = terms.length === 0 || matches(item.dataset.search ?? "", terms);
          item.hidden = !match;
          if (match) inGroup++;
        });
        group.hidden = inGroup === 0;
        inCategory += inGroup;
      });
      category.hidden = inCategory === 0;
      visible += inCategory;
    });
    setCount(visible);
    const empty = document.getElementById("staff-empty");
    if (empty) empty.hidden = visible > 0;
  };

  return (
    <div className="relative lg:w-80 lg:shrink-0">
      <label htmlFor="staff-search" className="sr-only">
        Kërko sipas emrit ose lëndës
      </label>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="9" cy="9" r="5.5" />
        <path d="m13.5 13.5 3 3" />
      </svg>
      <input
        id="staff-search"
        type="search"
        value={query}
        onChange={(e) => apply(e.target.value)}
        placeholder="Kërko emër ose lëndë"
        autoComplete="off"
        enterKeyHint="search"
        className="h-12 w-full rounded-full border border-line-strong bg-paper pl-11 pr-24 text-base outline-none transition-colors placeholder:text-muted focus:border-graphite"
      />
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs tabular-nums text-muted" aria-live="polite">
        {query ? `${count} nga ${total}` : `${total} gjithsej`}
      </span>
    </div>
  );
}
