/*
 * INTERNAL NOTE — LEGAL REVIEW REQUIRED
 * This policy is a carefully drafted website document, not legal advice. It must be reviewed and approved
 * by a qualified lawyer licensed in the Republic of Kosovo before it is relied upon.
 * Not yet verified, and therefore intentionally not stated: the school's legal entity name and registration
 * details, a data protection officer, the hosting provider, fixed retention periods, the specific legal basis
 * under Kosovo data-protection law, and the name of the supervisory authority.
 * Keep in sync with the code: the site sets no cookies and loads no analytics. If that changes, or a new
 * third-party service is added, this policy must be updated before release.
 */
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { school } from "@/data/school";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Politika e Privatësisë",
  description: `Si i trajton ${school.name} të dhënat personale të vizitorëve të faqes së saj zyrtare.`,
  path: "/politika-e-privatesise",
});

const email = <a href={`mailto:${school.contact.email}`}>{school.contact.email}</a>;

const intro = (
  <p>
    Privatësia e vizitorëve, nxënësve, prindërve dhe stafit është e rëndësishme për ne. Kjo politikë shpjegon me
    gjuhë të qartë cilat të dhëna personale përpunohen kur përdorni këtë faqe, pse përpunohen, kush ka qasje në
    to dhe si mund t’i ushtroni të drejtat tuaja.
  </p>
);

const sections: LegalSection[] = [
  {
    id: "kontrolluesi",
    title: "Kush i përpunon të dhënat",
    body: (
      <p>
        Përgjegjës për përpunimin e të dhënave personale të mbledhura përmes kësaj faqeje është {school.name},
        Prishtinë (në vijim: “Shkolla”). Për çdo çështje që lidhet me të dhënat personale, Shkolla mund të
        kontaktohet në {email}.
      </p>
    ),
  },
  {
    id: "fushevepri",
    title: "Fushëveprimi",
    body: (
      <p>
        Kjo politikë zbatohet vetëm për faqen zyrtare të internetit të Shkollës dhe për formularin e kontaktit në
        të. Ajo nuk zbatohet për faqet e jashtme drejt të cilave mund të çojnë lidhjet, si rrjetet sociale, të
        cilat kanë politikat e tyre të privatësisë.
      </p>
    ),
  },
  {
    id: "kategorite",
    title: "Kategoritë e të dhënave",
    body: (
      <>
        <p>
          <strong>Të dhënat që na i jepni vetë.</strong> Kur përdorni formularin e kontaktit, përpunohen emri, adresa
          e email-it dhe përmbajtja e mesazhit, si dhe çdo informacion tjetër që zgjidhni ta përfshini në mesazh.
        </p>
        <p>
          <strong>Të dhënat teknike.</strong> Si çdo faqe interneti, serverët ku hostohet faqja mund të regjistrojnë
          automatikisht të dhëna teknike të kërkesës, si adresa IP, lloji i shfletuesit, faqja e kërkuar dhe koha e
          kërkesës. Këto të dhëna nevojiten për dërgimin e faqes, për funksionimin e saj dhe për mbrojtjen nga
          keqpërdorimi.
        </p>
        <p>
          <strong>Të dhënat që nuk i kërkojmë.</strong> Faqja nuk kërkon krijim llogarie dhe nuk mbledh qëllimisht
          të dhëna të ndjeshme. Ju lutemi mos përfshini në mesazh të dhëna shëndetësore, dokumente identifikimi
          apo të dhëna të personave të tjerë.
        </p>
      </>
    ),
  },
  {
    id: "formulari",
    title: "Formulari i kontaktit",
    body: (
      <>
        <p>
          Mesazhi i dërguar përmes formularit nuk ruhet në një bazë të dhënash të faqes. Ai i përcillet me email
          adresës së Shkollës, përmes shërbimit të jashtëm për dërgimin e email-ave Resend. Adresa juaj e email-it
          vendoset si adresë përgjigjeje, që Shkolla t’ju përgjigjet drejtpërdrejt.
        </p>
        <p>
          Për mbrojtje nga dërgesat e automatizuara, formulari përdor një fushë të fshehur dhe kontroll të kohës së
          plotësimit. Këto kontrolle nuk përdorin cookies dhe nuk ndjekin sjelljen tuaj.
        </p>
      </>
    ),
  },
  {
    id: "qellimet",
    title: "Qëllimet e përpunimit",
    body: (
      <ul>
        <li>për t’iu përgjigjur mesazhit ose kërkesës suaj;</li>
        <li>për dërgimin teknik, funksionimin dhe sigurinë e faqes;</li>
        <li>për parandalimin e keqpërdorimit, si mesazhet e padëshiruara;</li>
        <li>për përmbushjen e detyrimeve ligjore të Shkollës, kur ato zbatohen.</li>
      </ul>
    ),
  },
  {
    id: "baza",
    title: "Baza e përpunimit",
    body: (
      <p>
        Të dhënat e formularit përpunohen sepse ju zgjidhni vullnetarisht ta kontaktoni Shkollën, dhe vetëm për t’iu
        përgjigjur kësaj kërkese. Të dhënat teknike përpunohen për aq sa është e nevojshme për funksionimin dhe
        sigurinë e faqes. Çdo përpunim kryhet në përputhje me legjislacionin në fuqi për mbrojtjen e të dhënave
        personale në Republikën e Kosovës.
      </p>
    ),
  },
  {
    id: "minimizimi",
    title: "Minimizimi i të dhënave",
    body: (
      <p>
        Faqja kërkon vetëm të dhënat e domosdoshme për t’iu përgjigjur: emrin, email-in dhe mesazhin. Të dhënat
        nuk përdoren për marketing, nuk shiten, nuk përdoren për profilizim dhe nuk u jepen palëve të treta për
        qëllimet e tyre.
      </p>
    ),
  },
  {
    id: "ruajtja",
    title: "Ruajtja e të dhënave",
    body: (
      <p>
        Mesazhet ruhen në postën elektronike të Shkollës vetëm për aq kohë sa është e nevojshme për trajtimin e
        kërkesës suaj dhe për përmbushjen e detyrimeve që mund t’i ketë Shkolla sipas ligjit. Mund të kërkoni në
        çdo kohë fshirjen e mesazhit tuaj, me përjashtim të rasteve kur ruajtja kërkohet me ligj. Të dhënat teknike
        ruhen nga ofruesi i hostimit sipas praktikave të tij operative.
      </p>
    ),
  },
  {
    id: "siguria",
    title: "Siguria dhe kontrolli i qasjes",
    body: (
      <p>
        Shkolla synon të zbatojë masa teknike dhe organizative të arsyeshme për të mbrojtur të dhënat nga qasja,
        humbja ose ndryshimi i paautorizuar. Qasje në mesazhet e formularit ka vetëm personeli i autorizuar i
        Shkollës që i trajton ato. Çelësat dhe kredencialet e shërbimeve ruhen vetëm në server dhe nuk i
        dërgohen shfletuesit. Megjithatë, asnjë transmetim në internet apo sistem elektronik nuk është plotësisht i
        sigurt, prandaj siguria absolute nuk mund të garantohet.
      </p>
    ),
  },
  {
    id: "pale-treta",
    title: "Palët e treta dhe hostimi",
    body: (
      <>
        <p>Të dhënat mund të përpunohen nga ofruesit e mëposhtëm të shërbimeve, vetëm për qëllimet e përshkruara:</p>
        <ul>
          <li>
            <strong>Ofruesi i hostimit</strong> — që e mban faqen në internet dhe përpunon të dhënat teknike të
            kërkesave.
          </li>
          <li>
            <strong>Resend</strong> — shërbim për dërgimin e email-ave, që përcjell mesazhet e formularit te
            Shkolla.
          </li>
          <li>
            <strong>Google</strong> — ofruesi i hartës së integruar në faqen e kontaktit (shihni nenin vijues).
          </li>
        </ul>
        <p>Ofruesit e shërbimeve përpunojnë të dhënat sipas kushteve dhe politikave të tyre të privatësisë.</p>
      </>
    ),
  },
  {
    id: "google-maps",
    title: "Google Maps dhe përmbajtja e integruar",
    body: (
      <p>
        Faqja e kontaktit përfshin një hartë të integruar nga Google Maps. Kur harta ngarkohet, shfletuesi juaj
        lidhet drejtpërdrejt me serverët e Google, i cili mund të marrë adresën tuaj IP dhe të dhëna të tjera
        teknike dhe mund të vendosë cookies sipas{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Politikës së Privatësisë së Google
        </a>
        . Harta ngarkohet vetëm në faqen e kontaktit. Nëse nuk dëshironi këtë lidhje, mos e hapni atë faqe dhe
        përdorni drejtpërdrejt adresën e email-it.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies dhe analitika",
    body: (
      <p>
        Faqja vetë nuk vendos cookies dhe nuk përdor mjete analitike, ndjekje ose reklamimi. Videoja, revista dhe
        fotografitë shërbehen nga vetë faqja. Cookies mund të vendosen vetëm nga shërbimet e integruara të palëve
        të treta, siç përshkruhet më lart për Google Maps.
      </p>
    ),
  },
  {
    id: "minoret",
    title: "Të miturit",
    body: (
      <p>
        Faqja u drejtohet edhe nxënësve, të cilët mund të jenë nën moshën 18 vjeç. Rekomandojmë që të miturit të
        mos dërgojnë të dhëna personale përmes formularit pa dijeninë e prindit ose kujdestarit. Prindi ose
        kujdestari mund të kërkojë qasje ose fshirje të të dhënave të dërguara nga një i mitur, duke na shkruar në{" "}
        {email}.
      </p>
    ),
  },
  {
    id: "te-drejtat",
    title: "Të drejtat tuaja",
    body: (
      <>
        <p>Në përputhje me legjislacionin në fuqi, ju keni të drejtë të kërkoni:</p>
        <ul>
          <li>
            <strong>qasje</strong> — konfirmim nëse përpunohen të dhëna për ju dhe një kopje të tyre;
          </li>
          <li>
            <strong>korrigjim</strong> — ndreqjen e të dhënave të pasakta ose të paplota;
          </li>
          <li>
            <strong>fshirje</strong> — fshirjen e të dhënave, kur nuk ka arsye të ligjshme për ruajtjen e tyre;
          </li>
          <li>
            <strong>kufizim</strong> — kufizimin e përpunimit në rrethana të caktuara;
          </li>
          <li>
            <strong>kundërshtim</strong> — kundërshtimin e përpunimit, për arsye që lidhen me situatën tuaj;
          </li>
          <li>
            <strong>bartshmëri</strong> — marrjen e të dhënave që na keni dhënë në një format të strukturuar dhe të
            zakonshëm, kur kjo zbatohet.
          </li>
        </ul>
        <p>
          Kërkesat dërgohen në {email}. Për t’ju mbrojtur, Shkolla mund t’ju kërkojë informacion të arsyeshëm për
          verifikimin e identitetit para se t’i përgjigjet kërkesës. Kërkesat trajtohen pa vonesa të panevojshme.
        </p>
      </>
    ),
  },
  {
    id: "ankesat",
    title: "Ankesat",
    body: (
      <p>
        Nëse mendoni se të dhënat tuaja përpunohen në kundërshtim me ligjin, ju lutemi na kontaktoni fillimisht në{" "}
        {email}, që të përpiqemi ta zgjidhim çështjen. Ju keni gjithashtu të drejtë të paraqisni ankesë te
        autoriteti mbikëqyrës kompetent për mbrojtjen e të dhënave personale në Republikën e Kosovës.
      </p>
    ),
  },
  {
    id: "transferimet",
    title: "Transferimet ndërkombëtare",
    body: (
      <p>
        Disa nga ofruesit e shërbimeve të përmendur më lart, si shërbimi i dërgimit të email-ave dhe Google, mund
        t’i përpunojnë të dhënat në serverë jashtë Republikës së Kosovës. Në këto raste, të dhënat përpunohen
        sipas kushteve të ofruesve përkatës dhe vetëm për qëllimet e përshkruara në këtë politikë.
      </p>
    ),
  },
  {
    id: "ndryshimet",
    title: "Ndryshimet e politikës",
    body: (
      <p>
        Kjo politikë përditësohet kur ndryshon mënyra e funksionimit të faqes ose kur kërkohet me ligj. Versioni në
        fuqi është ai i publikuar në këtë faqe, me datën e përditësimit të fundit të shënuar në krye. Shihni edhe{" "}
        <Link href="/termat-dhe-kushtet">Termat dhe Kushtet</Link>.
      </p>
    ),
  },
  {
    id: "kontakti",
    title: "Kontakti",
    body: <p>Për çdo pyetje ose kërkesë në lidhje me privatësinë, na shkruani në {email}.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Politika e Privatësisë"
      lead="Si përpunohen dhe mbrohen të dhënat personale kur vizitoni faqen zyrtare të shkollës."
      updated="8 tetor 2026"
      intro={intro}
      sections={sections}
    />
  );
}
