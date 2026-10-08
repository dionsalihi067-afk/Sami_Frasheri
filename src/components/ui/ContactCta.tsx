import Link from "next/link";
import { school } from "@/data/school";

export function ContactCta() {
  return (
    <section aria-labelledby="cta-title" className="section">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[1.75rem] bg-sand px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="t-eyebrow flex items-center gap-3 text-muted">
                <span aria-hidden className="h-px w-8 bg-red" />
                Kontakti
              </p>
              <h2 id="cta-title" className="t-h2 mt-5 max-w-xl">
                Keni pyetje për shkollën?
              </h2>
              <p className="t-lead mt-5 max-w-lg text-muted">
                Na shkruani dhe administrata e shkollës do t’ju përgjigjet.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Link href="/kontakti" className="btn btn-primary">
                Shkruani një mesazh
              </Link>
              <a href={`mailto:${school.contact.email}`} className="btn btn-outline bg-paper/60">
                {school.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
