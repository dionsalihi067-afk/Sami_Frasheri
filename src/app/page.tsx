import Image from "next/image";
import Link from "next/link";
import { ClubsList } from "@/components/activities/ClubsList";
import { BuildingSketch } from "@/components/home/BuildingSketch";
import { HeroVisual } from "@/components/home/HeroVisual";
import { CampusVideo } from "@/components/media/CampusVideo";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ContactCta } from "@/components/ui/ContactCta";
import { Figure } from "@/components/ui/Figure";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { building, facts, identity, pathways } from "@/data/about";
import { clubs, studentLife } from "@/data/clubs";
import { images } from "@/data/images";
import { magazine } from "@/data/magazine";
import { assets, school } from "@/data/school";
import { pageMetadata, siteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${school.name} · Prishtinë`,
  description: school.description,
  path: "/",
  absoluteTitle: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HighSchool",
  name: school.namePlain,
  url: siteUrl,
  logo: `${siteUrl}${assets.logo}`,
  image: `${siteUrl}${images.campus.src}`,
  email: school.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: school.city,
    addressCountry: "XK",
  },
  sameAs: school.social.map((s) => s.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-x relative grid gap-10 pb-10 pt-[calc(var(--header-h)+2rem)] lg:min-h-[min(100svh,58rem)] lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-[calc(var(--header-h)+2.5rem)]">
          <div className="hero-in">
            <p className="t-eyebrow flex items-center gap-3 text-muted">
              <span aria-hidden className="h-px w-8 bg-red" />
              {school.city} · {school.country}
            </p>
            <h1 id="hero-title" className="t-display mt-6">
              <span className="block text-[0.4em] leading-[1.1] tracking-[-0.02em] text-muted">Gjimnazi</span>
              <span className="block">“Sami</span>
              <span className="block">Frashëri”</span>
            </h1>
            <p className="t-lead mt-7 max-w-md text-muted">
              Shkollë e mesme e lartë me traditë që nga viti 1941, kur nisi mësimi në gjuhën shqipe.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/rreth-nesh" className="btn btn-primary">
                Njihuni me shkollën
              </Link>
              <Link href="/stafi" className="btn btn-outline">
                Stafi i shkollës
              </Link>
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] border border-line bg-paper sm:rounded-[2rem]">
              <div className="absolute inset-0 p-6 text-graphite sm:p-10">
                <HeroVisual>
                  <BuildingSketch animate className="h-full w-full" />
                </HeroVisual>
              </div>
              <span className="t-eyebrow absolute left-5 top-5 text-muted sm:left-7 sm:top-7">Pl. 01</span>
              <span className="absolute right-5 top-5 text-[0.6875rem] text-muted sm:right-7 sm:top-7">Aksonometri</span>
            </div>
            <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs text-muted">
              <span>Ndërtesa: planimetri “U”, tri etazhe, portal me shtylla</span>
              <span>Burimi: {building.source}</span>
            </figcaption>
          </figure>
        </div>

        {/* Verified facts */}
        <div className="container-x relative pb-4">
          <dl className="grid grid-cols-2 gap-px border-y border-line-strong bg-line-strong lg:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-2 bg-ivory py-6 pr-4 even:pl-5 lg:py-8 lg:[&:not(:first-child)]:pl-6"
              >
                <dd className="font-serif text-[2.75rem] leading-none tracking-tight lg:text-[3.5rem]">{fact.value}</dd>
                <dt className="text-[0.8125rem] leading-snug text-muted">{fact.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Identity — image-led editorial split */}
      <section aria-labelledby="identity-title" className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Figure
            image={images.stairs}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="reveal lg:col-span-5"
            imgClassName="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]"
          />
          <div className="reveal lg:col-span-6 lg:col-start-7 lg:self-center">
            <p className="t-eyebrow flex items-center gap-3 text-muted">
              <span aria-hidden className="h-px w-8 bg-red" />
              Identiteti
            </p>
            <h2 id="identity-title" className="t-h2 mt-5">
              Arsim për të rinjtë 15 deri 18 vjeç.
            </h2>
            <p className="t-lead mt-6 text-muted">{identity.body}</p>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {pathways.map((p) => (
                <li key={p.title} className="bg-paper p-6">
                  <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
            <ArrowLink href="/rreth-nesh" className="mt-8">
              Historia dhe misioni
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Environment — media band */}
      <section aria-labelledby="video-title" className="surface-dark section">
        <div className="container-x">
          <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading tone="dark" eyebrow="Ambienti" title="Një shikim brenda shkollës." id="video-title" />
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-on-dark-muted">
              Oborri, korridoret dhe klasat — ambienti ku mësojnë nxënësit e gjimnazit çdo ditë.
            </p>
          </div>
          <CampusVideo />
        </div>
      </section>

      {/* Student life */}
      <section aria-labelledby="life-title" className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Jeta shkollore" title="Më shumë se ora e mësimit." id="life-title" className="mb-10 lg:mb-16" />
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <Figure image={images.telescope} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" imgClassName="aspect-[4/3]" className="reveal" />
              <Figure image={images.trophies} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" imgClassName="aspect-[4/3]" className="reveal sm:mt-16" />
            </div>
            <ol className="lg:col-span-5">
              {studentLife.map((item, i) => (
                <li key={item.title} className="reveal border-t border-line-strong py-6 first:border-t-0 first:pt-0 lg:first:pt-2">
                  <p className="text-xs tabular-nums text-red">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="t-h3 mt-2">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section aria-labelledby="clubs-title" className="section bg-paper">
        <div className="container-x">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-14">
            <SectionHeading
              eyebrow="Klubet"
              title="Ku nxënësit ndjekin interesat e tyre."
              id="clubs-title"
            />
            <ArrowLink href="/aktivitetet" className="shrink-0">
              Të gjitha klubet ({clubs.length})
            </ArrowLink>
          </div>
          <ClubsList clubs={clubs.slice(0, 6)} />
        </div>
      </section>

      {/* Magazine */}
      <section aria-labelledby="magazine-title" className="section">
        <div className="container-x grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Link
            href="/revista"
            className="reveal group relative mx-auto block w-[min(16rem,70vw)] md:order-2 md:w-full md:max-w-[22rem]"
            aria-label="Hap faqen e revistës"
          >
            <Image
              src={assets.magazineCover}
              alt={magazine.coverAlt}
              width={magazine.coverWidth}
              height={magazine.coverHeight}
              sizes="(min-width: 768px) 352px, 70vw"
              className="block h-auto w-full rounded-[3px] shadow-[0_2px_4px_rgb(0_0_0/0.08),0_30px_60px_-25px_rgb(28_27_26/0.55)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1.5"
            />
            <span aria-hidden className="absolute inset-y-0 left-0 w-[6%] rounded-l-[3px] bg-gradient-to-r from-black/25 to-transparent" />
          </Link>
          <div className="reveal md:order-1">
            <SectionHeading
              eyebrow={magazine.edition}
              title="Revista e shkollës."
              lead="Lexojeni online faqe pas faqeje ose shkarkojeni në format PDF."
              id="magazine-title"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/revista" className="btn btn-dark">
                Lexo revistën
              </Link>
              <a href={assets.magazine} download className="btn btn-outline">
                Shkarko Revistën
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
