import Image from "next/image";
import { StaffFilter } from "@/components/staff/StaffFilter";
import { StaffLightbox } from "@/components/staff/StaffLightbox";
import { PageHeader } from "@/components/ui/PageHeader";
import { allStaff, categoryCount, STAFF_PORTRAIT_SIZE, staffCategories } from "@/data/staff";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Stafi",
  description:
    "Drejtoria, mësimdhënësit sipas fushave mësimore dhe stafi teknik i Gjimnazit “Sami Frashëri” në Prishtinë.",
  path: "/stafi",
});

const indexById = new Map(allStaff.map((m, i) => [m.id, i]));

export default function StaffPage() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Stafi"
        title="Njerëzit që i japin jetë shkollës."
        lead={`${allStaff.length} anëtarë të stafit, të renditur sipas fushave mësimore: nga drejtoria te mësimdhënësit dhe stafi teknik.`}
      />

      <div className="sticky top-[var(--header-h)] z-30 border-b border-line bg-ivory/92 backdrop-blur-md">
        <div className="container-x flex flex-col gap-2 py-3 lg:flex-row lg:items-center lg:gap-6">
          <StaffFilter total={allStaff.length} />
          <nav aria-label="Fushat" className="-mx-[var(--gutter)] lg:mx-0 lg:min-w-0 lg:flex-1">
            <ul className="no-scrollbar flex gap-1.5 overflow-x-auto px-[var(--gutter)] lg:px-0">
              {staffCategories.map((c) => (
                <li key={c.id} className="shrink-0">
                  <a
                    href={`#${c.id}`}
                    className="flex min-h-10 items-center gap-2 rounded-full border border-line px-3.5 text-[0.8125rem] text-muted transition-colors hover:border-line-strong hover:bg-paper hover:text-graphite"
                  >
                    <span className="tabular-nums text-red">{c.index}</span>
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container-x pb-[clamp(4.5rem,12vw,9rem)]">
        <p id="staff-empty" hidden className="py-24 text-center">
          <span className="t-h3 block">Asnjë rezultat.</span>
          <span className="mt-3 block text-sm text-muted">Provoni një emër tjetër ose një lëndë, p.sh. “Kimi”.</span>
        </p>

        {staffCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            data-staff-category
            aria-labelledby={`${category.id}-title`}
            className="grid gap-8 border-b border-line py-12 last:border-b-0 lg:grid-cols-[17rem_1fr] lg:gap-12 lg:py-20"
          >
            <header className="lg:sticky lg:top-[calc(var(--header-h)+6.5rem)] lg:self-start">
              <p className="font-serif text-[3.5rem] leading-none tracking-tight text-stone lg:text-[5rem]">{category.index}</p>
              <h2 id={`${category.id}-title`} className="t-h3 mt-3">
                {category.title}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {categoryCount(category)} {categoryCount(category) === 1 ? "anëtar" : "anëtarë"}
              </p>
            </header>

            <div className="space-y-10">
              {category.subgroups.map((sub) => (
                <div key={sub.id} data-staff-group>
                  {category.subgroups.length > 1 && (
                    <h3 className="mb-4 flex items-baseline gap-3 border-b border-line pb-3">
                      <span className="text-[0.9375rem] font-semibold">{sub.title}</span>
                      <span className="text-xs tabular-nums text-muted">{sub.members.length}</span>
                    </h3>
                  )}
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 xl:grid-cols-4">
                    {sub.members.map((m) => (
                      <li key={m.id} data-staff-item data-search={`${m.name} ${m.role} ${sub.title}`}>
                        <button
                          type="button"
                          data-staff-index={indexById.get(m.id)}
                          className="group block w-full rounded-xl text-left"
                          aria-label={`${m.name}, ${m.role}. Shfaq kartelën zyrtare`}
                        >
                          <span className="relative block aspect-[11/10] overflow-hidden rounded-xl bg-[#5a5a5a]">
                            <Image
                              src={m.portrait}
                              alt=""
                              width={STAFF_PORTRAIT_SIZE.width}
                              height={STAFF_PORTRAIT_SIZE.height}
                              sizes="(min-width:1280px) 200px, (min-width:640px) 30vw, 46vw"
                              className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                            />
                            <span
                              aria-hidden
                              className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-sm text-graphite opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                            >
                              ↗
                            </span>
                          </span>
                          <span className="mt-3 block text-[0.9375rem] font-medium leading-snug">{m.name}</span>
                          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">{m.role}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <StaffLightbox members={allStaff} />
    </>
  );
}
