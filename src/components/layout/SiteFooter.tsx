import Image from "next/image";
import Link from "next/link";
import { assets, legalNavigation, navigation, school } from "@/data/school";

export function SiteFooter() {
  return (
    <footer className="surface-dark">
      <div className="container-x pb-10 pt-16 lg:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image src={assets.logo} alt="" width={56} height={58} className="h-14 w-auto" />
              <div className="leading-none">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-on-dark-muted">Gjimnazi</p>
                <p className="mt-1.5 font-serif text-[1.75rem] tracking-tight">Sami Frashëri</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-dark-muted">
              Shkollë e mesme e lartë në {school.city}, me mësim në gjuhën shqipe që nga viti 1941.
            </p>
          </div>

          <nav aria-label="Navigimi i faqes" className="md:col-span-3">
            <p className="t-eyebrow text-on-dark-muted">Faqet</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 text-[0.9375rem] md:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-white">
                    <span className="link-line">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="t-eyebrow text-on-dark-muted">Kontakti</p>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                <a href={`mailto:${school.contact.email}`} className="link-line break-all">
                  {school.contact.email}
                </a>
              </li>
              <li className="text-on-dark-muted">
                {school.contact.locality}
              </li>
              {school.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-line">
                    {s.label}
                    <span className="sr-only"> (hapet në dritare të re)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line-dark pt-6 text-xs text-on-dark-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {school.name}, {school.city}
          </p>
          <ul className="flex flex-wrap gap-x-6">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-on-dark">
                  <span className="link-line">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
