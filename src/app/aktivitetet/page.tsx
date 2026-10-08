import { ClubsList } from "@/components/activities/ClubsList";
import { NewsList } from "@/components/activities/NewsList";
import { ContactCta } from "@/components/ui/ContactCta";
import { Figure } from "@/components/ui/Figure";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clubs, studentLife } from "@/data/clubs";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Aktivitetet",
  description:
    "Klubet dhe jeta shkollore në Gjimnazin “Sami Frashëri”: matematika, debati, sporti, muzika, vullnetarizmi, letërsia, media dhe artet pamore.",
  path: "/aktivitetet",
});

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Aktivitetet"
        title="Jeta e shkollës përtej orës së mësimit."
        lead="Klubet, kultura dhe komuniteti i nxënësve të Gjimnazit “Sami Frashëri”."
      />

      {/* Student life */}
      <section aria-labelledby="life-title" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Jeta shkollore" title="Arritje, kulturë dhe komunitet." id="life-title" />
            <ol className="mt-10">
              {studentLife.map((item, i) => (
                <li key={item.title} className="reveal grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-line-strong py-6">
                  <span className="pt-1.5 text-xs tabular-nums text-red">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="t-h3">{item.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:grid-cols-1 xl:grid-cols-2">
            <Figure image={images.trophies} sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw" imgClassName="aspect-[4/3] xl:aspect-[3/4]" className="reveal" />
            <Figure image={images.telescope} sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw" imgClassName="aspect-[4/3] xl:aspect-[3/4]" className="reveal xl:mt-20" />
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section aria-labelledby="clubs-title" className="section bg-paper" id="klubet">
        <div className="container-x">
          <SectionHeading
            eyebrow="Klubet"
            title={`${clubs.length} klube shkollore.`}
            lead="Hapësira ku nxënësit mësojnë, krijojnë dhe kontribuojnë sipas interesave të tyre."
            id="clubs-title"
            className="mb-10 lg:mb-14"
          />
          <ClubsList clubs={clubs} />
        </div>
      </section>

      {/* News */}
      <section aria-labelledby="news-title" className="section" id="lajme">
        <div className="container-x">
          <SectionHeading eyebrow="Lajme dhe ngjarje" title="Nga jeta e shkollës." id="news-title" className="mb-10 lg:mb-14" />
          <NewsList />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
