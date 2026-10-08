"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/data/school";
import { magazine } from "@/data/magazine";

const MagazineReader = dynamic(() => import("./MagazineReader"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-charcoal" role="status">
      <span aria-hidden className="h-10 w-10 animate-spin rounded-full border-2 border-line-dark border-t-on-dark" />
      <span className="sr-only">Duke ngarkuar lexuesin</span>
    </div>
  ),
});

/** The PDF engine and the magazine file are fetched only after the visitor opens the reader. */
export function MagazineLauncher() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="h-[min(calc(100svh-var(--header-h)-2rem),62rem)] min-h-[30rem] overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
        <MagazineReader onClose={() => setOpen(false)} />
      </div>
    );
  }

  return (
    <div className="grid items-center gap-10 overflow-hidden rounded-[1.25rem] bg-sand px-6 py-12 sm:rounded-[1.75rem] sm:px-12 md:grid-cols-[1fr_1fr] lg:gap-16 lg:px-20 lg:py-20">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mx-auto block w-[min(17rem,72vw)] [perspective:1400px] md:w-full md:max-w-[22rem]"
        aria-label="Hap revistën në lexuesin online"
      >
        <span className="relative block origin-left transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:[transform:rotateY(-8deg)]">
          <Image
            src={assets.magazineCover}
            alt={magazine.coverAlt}
            width={magazine.coverWidth}
            height={magazine.coverHeight}
            sizes="(min-width: 768px) 352px, 72vw"
            className="block h-auto w-full rounded-[3px] shadow-[0_2px_4px_rgb(0_0_0/0.08),0_30px_60px_-25px_rgb(28_27_26/0.55)]"
          />
          <span aria-hidden className="absolute inset-y-0 left-0 w-[6%] rounded-l-[3px] bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
          <span aria-hidden className="absolute inset-0 rounded-[3px] bg-gradient-to-tr from-transparent via-white/0 to-white/20" />
        </span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-5 mx-auto block h-6 w-[85%] rounded-[50%] bg-black/15 blur-xl" aria-hidden />
      </button>

      <div className="text-center md:text-left">
        <p className="t-eyebrow text-muted">{magazine.edition}</p>
        <h2 className="t-h2 mt-4">Revista e shkollës</h2>
        <dl className="mx-auto mt-8 grid max-w-sm grid-cols-3 divide-x divide-line-strong border-y border-line-strong md:mx-0">
          {magazine.facts.map((f) => (
            <div key={f.label} className="px-3 py-4 first:pl-0 md:px-4">
              <dt className="text-xs text-muted">{f.label}</dt>
              <dd className="mt-1 font-serif text-2xl leading-none">{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
          <a href={assets.magazine} download className="btn btn-primary">
            <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M10 3v10m0 0 4-4m-4 4-4-4M4 16h12" />
            </svg>
            Shkarko Revistën
          </a>
          <button type="button" onClick={() => setOpen(true)} className="btn btn-outline bg-paper/60">
            Lexo online
          </button>
        </div>
        <p className="mt-5 text-xs text-muted">Lexuesi ngarkon vetëm faqet që shfletoni.</p>
      </div>
    </div>
  );
}
