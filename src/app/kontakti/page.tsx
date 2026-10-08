import { ContactForm } from "@/components/contact/ContactForm";
import { mapsLink, SchoolMap } from "@/components/contact/SchoolMap";
import { PageHeader } from "@/components/ui/PageHeader";
import { school } from "@/data/school";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kontakti",
  description: `Kontaktoni Gjimnazin “Sami Frashëri” në Prishtinë — email ${school.contact.email}.`,
  path: "/kontakti",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Kontakti"
        title="Na shkruani."
        lead="Për pyetje rreth shkollës, regjistrimit ose aktiviteteve, përdorni formularin ose na shkruani me email."
      />

      <section aria-label="Kontakti" className="section pt-10 lg:pt-16">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <dl className="divide-y divide-line-strong border-y border-line-strong">
              <div className="py-6">
                <dt className="t-eyebrow text-muted">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${school.contact.email}`}
                    className="link-line break-all font-serif text-[1.625rem] leading-tight tracking-tight sm:text-3xl"
                  >
                    {school.contact.email}
                  </a>
                </dd>
              </div>
              <div className="py-6">
                <dt className="t-eyebrow text-muted">Vendndodhja</dt>
                <dd className="mt-2 leading-relaxed">
                  <address className="not-italic">
                    {school.name}
                    <br />
                    {school.contact.locality}
                  </address>
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium">
                    <span className="link-line">Udhëzime në Google Maps</span>
                    <span aria-hidden>↗</span>
                  </a>
                </dd>
              </div>
              {school.social.length > 0 && (
                <div className="py-6">
                  <dt className="t-eyebrow text-muted">Rrjetet sociale</dt>
                  <dd className="mt-2">
                    {school.social.map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium">
                        <span className="link-line">{s.label}</span>
                        <span aria-hidden>↗</span>
                        <span className="sr-only"> (hapet në dritare të re)</span>
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="order-1 rounded-[1.5rem] border border-line bg-paper p-5 sm:p-10 lg:order-2 lg:col-span-7">
            <h2 className="t-h3">Formulari i kontaktit</h2>
            <p className="mt-2 text-sm text-muted">Të gjitha fushat janë të detyrueshme.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="map-title" className="pb-[clamp(4.5rem,12vw,9rem)]">
        <div className="container-x">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-eyebrow flex items-center gap-3 text-muted">
                <span aria-hidden className="h-px w-8 bg-red" />
                Vendndodhja
              </p>
              <h2 id="map-title" className="t-h2 mt-4">
                Si të na gjeni.
              </h2>
            </div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline self-start sm:self-auto">
              Hap në Google Maps ↗
            </a>
          </div>
          <SchoolMap />
        </div>
      </section>
    </>
  );
}
