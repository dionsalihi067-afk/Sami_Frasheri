"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assets, navigation, school } from "@/data/school";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-b border-line bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-ivory/0",
      )}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link
          href="/"
          className="-ml-1 flex min-h-11 shrink-0 items-center gap-3 rounded-lg pl-1 pr-2"
          aria-label={`${school.name} — Ballina`}
        >
          <Image src={assets.logo} alt="" width={44} height={45} priority className="h-9 w-auto lg:h-10" />
          <span className="leading-none">
            <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted">Gjimnazi</span>
            <span className="mt-1 block font-serif text-[1.25rem] tracking-tight">Sami Frashëri</span>
          </span>
        </Link>

        <nav aria-label="Navigimi kryesor" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-line bg-paper/70 p-1">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 text-sm transition-colors",
                      active ? "bg-graphite text-paper" : "text-muted hover:bg-sand hover:text-graphite",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/kontakti" className="btn btn-primary hidden min-h-10 px-5 text-sm xl:inline-flex">
          Na kontaktoni
        </Link>

        <button
          type="button"
          className="flex h-11 items-center gap-2.5 rounded-full border border-line-strong bg-paper/60 pl-4 pr-3.5 text-sm font-medium lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Mbyll" : "Menu"}
          <span aria-hidden className="relative block h-2.5 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                open && "translate-y-[4.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                open && "-translate-y-[4.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-var(--header-h))] overflow-y-auto bg-ivory lg:hidden"
      >
        <nav
          aria-label="Navigimi mobil"
          className="container-x flex min-h-full flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4"
        >
          <ul className="flex-1">
            {navigation.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-16 items-center justify-between gap-4 py-3"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="w-5 text-xs tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className={cn("font-serif text-[2rem] leading-none tracking-tight", !active && "text-graphite/75")}>
                        {item.label}
                      </span>
                    </span>
                    {active && <span aria-hidden className="h-2 w-2 rounded-full bg-red" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/kontakti" className="btn btn-primary w-full">
              Na kontaktoni
            </Link>
            <a href={`mailto:${school.contact.email}`} className="btn btn-outline w-full">
              {school.contact.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
