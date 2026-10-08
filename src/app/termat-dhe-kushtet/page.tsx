/*
 * INTERNAL NOTE — LEGAL REVIEW REQUIRED
 * This text is a carefully drafted website document, not legal advice. Before it is relied upon it must be
 * reviewed and approved by a qualified lawyer licensed in the Republic of Kosovo. It deliberately names no
 * legal entity, registration number, authority or statute that has not been verified; add those only after
 * confirmation from the school administration and counsel.
 */
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { school } from "@/data/school";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Termat dhe Kushtet",
  description: `Kushtet që rregullojnë përdorimin e faqes zyrtare të internetit të ${school.name} në Prishtinë.`,
  path: "/termat-dhe-kushtet",
});

const email = <a href={`mailto:${school.contact.email}`}>{school.contact.email}</a>;

const sections: LegalSection[] = [
  {
    id: "qellimi",
    title: "Qëllimi dhe fushëveprimi",
    body: (
      <>
        <p>
          Këto Terma dhe Kushte (në vijim: “Kushtet”) rregullojnë qasjen dhe përdorimin e faqes zyrtare të
          internetit të {school.name} (në vijim: “Shkolla”), përfshirë të gjitha nënfaqet, materialet dhe
          funksionalitetet e saj (në vijim: “Faqja”).
        </p>
        <p>
          Faqja ka karakter informues. Ajo paraqet historinë, stafin, aktivitetet dhe botimet e Shkollës dhe ofron
          mjete kontakti. Faqja nuk është kanal për procedura zyrtare administrative, si regjistrimi, ankesat
          formale apo lëshimi i dokumenteve.
        </p>
        <p>
          Duke hyrë ose duke përdorur Faqen, ju konfirmoni se i keni lexuar dhe i pranoni këto Kushte. Nëse nuk
          pajtoheni me to, ju lutemi ndërprisni përdorimin e Faqes.
        </p>
      </>
    ),
  },
  {
    id: "perkufizimet",
    title: "Përkufizimet",
    body: (
      <ul>
        <li>
          <strong>Shkolla</strong> — {school.name}, Prishtinë, si institucion arsimor që publikon Faqen.
        </li>
        <li>
          <strong>Faqja</strong> — faqja e internetit ku publikohen këto Kushte, me të gjitha nënfaqet e saj.
        </li>
        <li>
          <strong>Përdoruesi</strong> — çdo person fizik ose juridik që viziton ose përdor Faqen.
        </li>
        <li>
          <strong>Përmbajtja</strong> — tekstet, fotografitë, videot, dokumentet, botimet, logoja, elementet grafike
          dhe çdo material tjetër i publikuar në Faqe.
        </li>
        <li>
          <strong>Dërgesë e Përdoruesit</strong> — çdo informacion që Përdoruesi e dërgon përmes Faqes, përfshirë
          mesazhet e formularit të kontaktit.
        </li>
      </ul>
    ),
  },
  {
    id: "pronesia",
    title: "Pronësia e Faqes",
    body: (
      <p>
        Faqja publikohet nga Shkolla ose në emër të saj. Të gjitha të drejtat që nuk janë dhënë shprehimisht me
        këto Kushte mbeten të rezervuara për Shkollën ose për mbajtësit përkatës të të drejtave.
      </p>
    ),
  },
  {
    id: "perdorimi-lejuar",
    title: "Përdorimi i lejuar",
    body: (
      <>
        <p>Përdoruesi mund ta përdorë Faqen në mënyrë të ligjshme dhe në mirëbesim, për:</p>
        <ul>
          <li>marrjen e informacionit për Shkollën dhe veprimtarinë e saj;</li>
          <li>shikimin dhe shkarkimin e materialeve për përdorim personal, arsimor dhe jo-komercial;</li>
          <li>kontaktimin e Shkollës për pyetje të arsyeshme dhe të ligjshme.</li>
        </ul>
      </>
    ),
  },
  {
    id: "perdorimi-ndaluar",
    title: "Përdorimi i ndaluar",
    body: (
      <>
        <p>Gjatë përdorimit të Faqes, Përdoruesit i ndalohet:</p>
        <ul>
          <li>dërgimi i përmbajtjes fyese, kërcënuese, diskriminuese, shpifëse ose të paligjshme;</li>
          <li>dërgimi i mesazheve të padëshiruara, masive ose të automatizuara (spam);</li>
          <li>paraqitja në emër të një personi apo institucioni tjetër;</li>
          <li>
            përpjekja për qasje të paautorizuar në Faqe, në serverët ose në sistemet e lidhura me të, si dhe
            testimi i cenueshmërisë pa leje paraprake me shkrim;
          </li>
          <li>
            ndërhyrja në funksionimin e Faqes, mbingarkimi i qëllimshëm i saj ose shpërndarja e programeve
            dashakeqe;
          </li>
          <li>mbledhja e automatizuar e të dhënave (scraping) të stafit ose të përmbajtjes;</li>
          <li>
            përdorimi i fotografive ose i të dhënave të stafit dhe të nxënësve për qëllime që nuk lidhen me
            informimin për Shkollën, përfshirë profilizimin, ngacmimin ose përdorimin komercial.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "pronesia-intelektuale",
    title: "Pronësia intelektuale",
    body: (
      <>
        <p>
          Përmbajtja e Faqes mbrohet nga të drejtat e autorit dhe të drejtat e tjera të pronësisë intelektuale.
          Ajo i përket Shkollës ose autorëve dhe mbajtësve të tjerë të të drejtave, që e kanë lejuar publikimin e
          saj.
        </p>
        <p>
          Riprodhimi, ripublikimi, përpunimi, shpërndarja ose përdorimi komercial i Përmbajtjes, tërësisht ose
          pjesërisht, nuk lejohet pa leje paraprake me shkrim nga Shkolla ose nga mbajtësi përkatës i të drejtave,
          përveç rasteve kur ligji në fuqi e lejon shprehimisht. Citimi i shkurtër me qëllim informimi lejohet,
          me kusht që të përmendet burimi.
        </p>
      </>
    ),
  },
  {
    id: "logoja",
    title: "Logoja dhe identiteti vizual",
    body: (
      <p>
        Emri, logoja dhe elementet e identitetit vizual të Shkollës nuk mund të përdoren në mënyrë që krijon
        përshtypjen e përfaqësimit, të miratimit ose të bashkëpunimit me Shkollën, pa pëlqimin e saj paraprak me
        shkrim. Ndryshimi i logos ose përdorimi i saj në materiale fyese a mashtruese ndalohet.
      </p>
    ),
  },
  {
    id: "media",
    title: "Fotografitë, videot dhe të dhënat e stafit",
    body: (
      <>
        <p>
          Fotografitë, videot dhe kartelat e stafit publikohen me qëllim informimi të nxënësve, prindërve dhe
          publikut. Ato nuk mund të shkarkohen për t’u ripublikuar, ndryshuar ose përdorur jashtë këtij qëllimi.
        </p>
        <p>
          Çdo person që shfaqet në Përmbajtje dhe dëshiron korrigjimin ose heqjen e një fotografie, videoje ose të
          dhëne që e prek, mund t’i drejtohet Shkollës në {email}. Kërkesa do të shqyrtohet pa vonesa të
          panevojshme.
        </p>
      </>
    ),
  },
  {
    id: "dergesat",
    title: "Dërgesat e Përdoruesit",
    body: (
      <>
        <p>
          Përdoruesi është përgjegjës për saktësinë dhe ligjshmërinë e informacionit që dërgon përmes Faqes. Ju
          lutemi mos dërgoni të dhëna të ndjeshme, dokumente zyrtare ose të dhëna të personave të tjerë pa
          autorizimin e tyre.
        </p>
        <p>
          Dërgimi i një mesazhi nuk krijon detyrim për përgjigje brenda një afati të caktuar dhe nuk zëvendëson
          procedurat zyrtare me shkrim të Shkollës. Shkolla mund të mos u përgjigjet mesazheve që cenojnë këto
          Kushte. Përpunimi i të dhënave personale në dërgesa rregullohet nga{" "}
          <Link href="/politika-e-privatesise">Politika e Privatësisë</Link>.
        </p>
      </>
    ),
  },
  {
    id: "saktesia",
    title: "Saktësia e informacionit",
    body: (
      <p>
        Shkolla përpiqet që Përmbajtja të jetë e saktë dhe e përditësuar, por nuk garanton që ajo të jetë në çdo
        kohë e plotë, aktuale ose pa gabime. Informacioni në Faqe ka karakter të përgjithshëm. Për vendime që
        lidhen me regjistrimin, afatet, dokumentet ose çështje të tjera zyrtare, informacioni duhet verifikuar
        drejtpërdrejt me administratën e Shkollës. Gabimet e vërejtura mund të raportohen në {email}.
      </p>
    ),
  },
  {
    id: "faqet-jashtme",
    title: "Lidhjet dhe faqet e jashtme",
    body: (
      <p>
        Faqja mund të përmbajë lidhje drejt faqeve të jashtme, si rrjetet sociale. Këto faqe nuk kontrollohen nga
        Shkolla. Shkolla nuk mban përgjegjësi për përmbajtjen, disponueshmërinë, sigurinë ose praktikat e
        privatësisë së tyre. Vendosja e një lidhjeje nuk nënkupton miratim të faqes ose të përmbajtjes së saj.
      </p>
    ),
  },
  {
    id: "pale-treta",
    title: "Shërbimet e palëve të treta",
    body: (
      <p>
        Disa funksionalitete mbështeten në shërbime të palëve të treta, si harta e integruar nga Google Maps dhe
        shërbimi i dërgimit të email-ave për formularin e kontaktit. Përdorimi i këtyre shërbimeve mund t’u
        nënshtrohet edhe kushteve dhe politikave të ofruesve përkatës. Shkolla nuk mban përgjegjësi për
        ndërprerjet ose ndryshimet e shërbimeve që nuk i kontrollon.
      </p>
    ),
  },
  {
    id: "disponueshmeria",
    title: "Disponueshmëria dhe mirëmbajtja",
    body: (
      <p>
        Faqja ofrohet “ashtu siç është” dhe “sipas disponueshmërisë”. Shkolla nuk garanton qasje të pandërprerë.
        Faqja mund të jetë përkohësisht e padisponueshme për shkak të mirëmbajtjes, përditësimeve, problemeve
        teknike ose rrethanave të tjera. Shkolla mund të ndryshojë, pezullojë ose heqë çdo pjesë të Faqes pa
        njoftim paraprak.
      </p>
    ),
  },
  {
    id: "siguria",
    title: "Siguria kibernetike",
    body: (
      <>
        <p>
          Shkolla synon të zbatojë masa teknike dhe organizative të arsyeshme për mbrojtjen e Faqes, si
          verifikimi i të dhënave në server dhe masat kundër dërgesave të automatizuara. Megjithatë, asnjë sistem i lidhur me internetin
          nuk mund të konsiderohet plotësisht i sigurt, dhe Shkolla nuk mund të garantojë mungesën e plotë të
          gabimeve, viruseve ose ndërhyrjeve.
        </p>
        <p>
          Nëse vëreni një cenueshmëri sigurie, ju lutemi na njoftoni me përgjegjësi në {email}, pa e shfrytëzuar
          dhe pa e bërë publike para se Shkolla të ketë pasur kohë të arsyeshme për ta adresuar.
        </p>
      </>
    ),
  },
  {
    id: "pergjegjesia",
    title: "Kufizimi i përgjegjësisë",
    body: (
      <p>
        Në masën maksimale të lejuar nga ligji në fuqi, Shkolla nuk mban përgjegjësi për dëme të tërthorta,
        rastësore ose pasuese që rrjedhin nga përdorimi ose pamundësia e përdorimit të Faqes, nga mbështetja në
        Përmbajtjen e saj ose nga shërbimet e palëve të treta. Asgjë në këto Kushte nuk e përjashton dhe nuk e
        kufizon përgjegjësinë që sipas ligjit në fuqi nuk mund të përjashtohet ose kufizohet.
      </p>
    ),
  },
  {
    id: "forca-madhore",
    title: "Forca madhore",
    body: (
      <p>
        Shkolla nuk mban përgjegjësi për mospërmbushje ose vonesa të shkaktuara nga rrethana jashtë kontrollit të
        saj të arsyeshëm, si fatkeqësi natyrore, ndërprerje të energjisë ose të rrjetit, sulme kibernetike,
        veprime të autoriteteve publike, ose dështime të ofruesve të shërbimeve.
      </p>
    ),
  },
  {
    id: "pezullimi",
    title: "Pezullimi i qasjes",
    body: (
      <p>
        Në rast të shkeljes së këtyre Kushteve ose të dyshimit të bazuar për veprimtari të dëmshme, Shkolla mund të
        kufizojë ose të bllokojë qasjen në Faqe ose në funksionalitete të caktuara të saj, si dhe mund t’ua
        raportojë rastin autoriteteve kompetente kur kjo kërkohet ose lejohet me ligj.
      </p>
    ),
  },
  {
    id: "ndryshimet",
    title: "Ndryshimet e Kushteve",
    body: (
      <p>
        Shkolla mund t’i ndryshojë këto Kushte në çdo kohë. Versioni në fuqi është ai i publikuar në këtë faqe,
        me datën e përditësimit të fundit të shënuar në krye. Përdorimi i vazhdueshëm i Faqes pas publikimit të
        ndryshimeve nënkupton pranimin e tyre.
      </p>
    ),
  },
  {
    id: "ligji",
    title: "Ligji i zbatueshëm",
    body: (
      <p>
        Këto Kushte rregullohen dhe interpretohen në përputhje me legjislacionin në fuqi të Republikës së Kosovës.
      </p>
    ),
  },
  {
    id: "mosmarreveshjet",
    title: "Zgjidhja e mosmarrëveshjeve",
    body: (
      <p>
        Palët përpiqen që çdo mosmarrëveshje që lidhet me Faqen ta zgjidhin fillimisht me mirëkuptim, duke iu
        drejtuar Shkollës me shkrim në {email}. Nëse mosmarrëveshja nuk zgjidhet në këtë mënyrë, ajo i
        nënshtrohet juridiksionit të gjykatës kompetente në Republikën e Kosovës, në përputhje me ligjin në fuqi.
      </p>
    ),
  },
  {
    id: "ndashmeria",
    title: "Ndashmëria",
    body: (
      <p>
        Nëse ndonjë dispozitë e këtyre Kushteve shpallet e pavlefshme ose e pazbatueshme, kjo nuk ndikon në
        vlefshmërinë e dispozitave të tjera, të cilat mbeten në fuqi të plotë.
      </p>
    ),
  },
  {
    id: "heqja-dore",
    title: "Mosheqja dorë nga të drejtat",
    body: (
      <p>
        Mosushtrimi ose vonesa në ushtrimin e një të drejte sipas këtyre Kushteve nuk konsiderohet heqje dorë nga
        ajo e drejtë.
      </p>
    ),
  },
  {
    id: "marreveshja",
    title: "Marrëveshja e plotë",
    body: (
      <p>
        Këto Kushte, së bashku me <Link href="/politika-e-privatesise">Politikën e Privatësisë</Link>, përbëjnë
        tërësinë e kushteve që rregullojnë përdorimin e Faqes. Ato nuk zëvendësojnë rregulloret, aktet e
        brendshme ose marrëveshjet e tjera të Shkollës me nxënësit, prindërit ose stafin.
      </p>
    ),
  },
  {
    id: "kontakti",
    title: "Kontakti",
    body: (
      <p>
        Për pyetje, kërkesa ose njoftime në lidhje me këto Kushte, i drejtohuni Shkollës në {email}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Termat dhe Kushtet"
      lead="Kushtet që rregullojnë qasjen dhe përdorimin e faqes zyrtare të internetit të shkollës."
      updated="8 tetor 2026"
      sections={sections}
    />
  );
}
