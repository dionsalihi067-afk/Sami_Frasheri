import { MagazineLauncher } from "@/components/magazine/MagazineLauncher";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Revista",
  description:
    "Revista e Gjimnazit “Sami Frashëri” (Prishtinë, 2025) — lexojeni online faqe pas faqeje ose shkarkojeni në format PDF.",
  path: "/revista",
});

export default function MagazinePage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Revista"
        title="Revista e shkollës."
        lead="Shfletojeni online faqe pas faqeje, ose shkarkojeni për ta lexuar në pajisjen tuaj."
      />

      <section aria-label="Revista" className="pb-[clamp(4.5rem,12vw,9rem)] pt-8 lg:pt-12">
        <div className="container-x">
          <MagazineLauncher />
          <p className="mt-5 hidden text-xs text-muted lg:block">
            Tastiera: ← → për faqet, + / − për zmadhimin, F për ekran të plotë, Esc për t’u kthyer te kopertina.
          </p>
          <p className="mt-5 text-xs text-muted lg:hidden">Në celular, rrëshqitni majtas ose djathtas për të kthyer faqet.</p>
        </div>
      </section>
    </>
  );
}
