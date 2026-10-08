import { PageHeader } from "@/components/ui/PageHeader";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

const num = (i: number) => String(i + 1).padStart(2, "0");

function Toc({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-1 text-sm">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex min-h-10 items-center gap-3 rounded-md py-1 text-muted transition-colors hover:text-graphite focus-visible:text-graphite"
          >
            <span className="w-6 shrink-0 tabular-nums text-red">{num(i)}</span>
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalDocument({
  title,
  lead,
  updated,
  intro,
  sections,
}: {
  title: string;
  lead: string;
  updated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow="Informacion ligjor" title={title} lead={lead} />
      <div className="section pt-8 lg:pt-14">
        <div className="container-x grid gap-10 lg:grid-cols-[17rem_1fr] lg:gap-20">
          <details className="group rounded-2xl border border-line bg-paper lg:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-5 font-medium [&::-webkit-details-marker]:hidden">
              Përmbajtja · {sections.length} nene
              <span aria-hidden className="text-xl leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <nav aria-label="Përmbajtja" className="border-t border-line px-5 pb-4 pt-3">
              <Toc sections={sections} />
            </nav>
          </details>

          <nav
            aria-label="Përmbajtja"
            className="no-scrollbar hidden max-h-[calc(100svh-var(--header-h)-4rem)] overflow-y-auto lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:block lg:self-start"
          >
            <p className="t-eyebrow mb-4 text-muted">Përmbajtja</p>
            <Toc sections={sections} />
          </nav>

          <article className="min-w-0 max-w-3xl">
            <p className="text-sm text-muted">Përditësuar së fundi: {updated}</p>
            {intro && <div className="t-body mt-6 space-y-4 text-graphite">{intro}</div>}
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="mt-10 scroll-mt-[calc(var(--header-h)+1.5rem)] border-t border-line pt-8">
                <h2 className="t-h3 flex gap-3">
                  <span className="pt-1 text-base tabular-nums text-red">{num(i)}</span>
                  <span>{s.title}</span>
                </h2>
                <div className="t-body mt-4 space-y-4 text-muted [&_a]:break-words [&_a]:text-graphite [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:font-medium [&_strong]:text-graphite [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {s.body}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
