import { BuildingSketch } from "@/components/home/BuildingSketch";
import { ContactCta } from "@/components/ui/ContactCta";
import { Figure } from "@/components/ui/Figure";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { building, history, identity, pathways, principalMessage, values } from "@/data/about";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Rreth Nesh",
  description:
    "Historia, identiteti dhe vlerat e Gjimnazit “Sami Frashëri” në Prishtinë — nga mësimi i parë në gjuhën shqipe më 1941 deri sot.",
  path: "/rreth-nesh",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Rreth Nesh"
        title="Një shkollë që mban brenda historinë e arsimit shqip në Prishtinë."
        lead={identity.lead}
      />

      {/* Mission */}
      <section aria-labelledby="mission-title" className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="reveal lg:col-span-6">
            <SectionHeading eyebrow="Misioni" title="Edukim për një jetë të përgjegjshme." id="mission-title" />
            <p className="t-lead mt-6 text-muted">{identity.body}</p>
            <h3 className="t-eyebrow mt-10 text-muted">Vlerat</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {values.map((v) => (
                <li key={v} className="rounded-full border border-line-strong bg-paper px-4 py-2 text-[0.9375rem]">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <Figure
            image={images.campus}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="reveal lg:col-span-6"
            imgClassName="aspect-[4/3]"
          />
        </div>
      </section>

      {/* History */}
      <section aria-labelledby="history-title" className="section bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:col-span-4 lg:self-start">
            <SectionHeading eyebrow="Historia" title="Nga 1888 deri sot." id="history-title" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
              Pesë periudha që shënojnë rrugëtimin e gjimnazit dhe të arsimit në gjuhën shqipe në Prishtinë.
            </p>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {history.map((item, i) => (
              <li key={item.period} className="reveal relative grid grid-cols-[auto_1fr] gap-x-5 pb-12 last:pb-0 sm:gap-x-8">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-ivory text-xs tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < history.length - 1 && <span aria-hidden className="mt-2 w-px flex-1 bg-line-strong" />}
                </div>
                <div className="pt-1.5">
                  <p className="t-eyebrow text-red">{item.period}</p>
                  <h3 className="t-h3 mt-2">{item.title}</h3>
                  <p className="t-body mt-3 max-w-xl text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pathways */}
      <section aria-labelledby="pathways-title" className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Drejtimet"
            title="Dy drejtime gjimnaziale."
            lead="Mësimi zhvillohet në gjuhën shqipe dhe në gjuhën turke."
            id="pathways-title"
            className="mb-10 lg:mb-14"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {pathways.map((p, i) => (
              <li key={p.title} className="reveal flex min-h-56 flex-col justify-between rounded-[1.25rem] bg-sand p-7 sm:p-10">
                <span className="text-xs tabular-nums text-red">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="t-h3">{p.title}</h3>
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Building */}
      <section aria-labelledby="building-title" className="surface-dark section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <SectionHeading tone="dark" eyebrow="Ndërtesa" title="Arkitektura e gjimnazit." id="building-title" />
            <p className="t-body mt-6 max-w-xl text-on-dark-muted">{building.text}</p>
            <p className="mt-5 text-xs text-on-dark-muted">Burimi: {building.source}</p>
          </div>
          <div className="reveal aspect-[5/4] rounded-[1.5rem] border border-line-dark p-6 text-on-dark sm:p-10">
            <BuildingSketch className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Principal */}
      <section aria-labelledby="principal-title" className="section">
        <div className="container-x">
          <figure className="reveal mx-auto max-w-4xl">
            <p id="principal-title" className="t-eyebrow flex items-center gap-3 text-muted">
              <span aria-hidden className="h-px w-8 bg-red" />
              Fjala e drejtorit
            </p>
            <blockquote className="mt-8 font-serif text-[clamp(1.75rem,4.6vw,3.25rem)] leading-[1.14] tracking-tight text-balance">
              “{principalMessage.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-line-strong pt-6 text-[0.9375rem]">
              <span className="font-medium">{principalMessage.author}</span>
              <span className="text-muted">{principalMessage.role}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
