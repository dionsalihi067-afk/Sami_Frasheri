/**
 * Institutional content. Sources:
 * - Official school website (samifrasheri-pr.com): identity, values, principal's message, clubs
 * - Kosovo Cultural Heritage registry (dtk.rks-gov.net): building description
 * - Oral History Kosovo and Albanian Wikipedia (cross-referenced): historical timeline
 */

export const history = [
  {
    period: "1888 – 1910",
    title: "Zanafilla",
    text: "Kërkesa për një shkollë të mesme në Prishtinë daton nga viti 1888. Gjimnazi u hap fillimisht në gjuhën turke, sepse pushteti i kohës nuk lejonte shkollë në gjuhën shqipe.",
  },
  {
    period: "Dhjetor 1941",
    title: "Mësimi në gjuhën shqipe",
    text: "Shkolla me emrin “Sami Frashëri” filloi punën në gjuhën shqipe — shkolla e parë e këtij rangu në Prishtinë dhe në Kosovë.",
  },
  {
    period: "1955 – 1990",
    title: "Gjimnaz i përzier",
    text: "Gjimnazi funksionoi si shkollë e përzier, me emrin “Ivo Lola Ribar”. Nga viti 1960 filloi edhe mësimi në gjuhën turke.",
  },
  {
    period: "1991 – 1999",
    title: "Shtëpitë-shkolla",
    text: "Nxënësit dhe mësimdhënësit shqiptarë u larguan me dhunë nga objekti. Mësimi vazhdoi në shtëpi-shkolla, nën emrin “Sami Frashëri”.",
  },
  {
    period: "1999 – sot",
    title: "Kthimi",
    text: "Pas luftës gjimnazi u kthye në objektin e vet. Sot mësimi zhvillohet në gjuhën shqipe dhe në gjuhën turke.",
  },
] as const;

export const facts = [
  { value: "1941", label: "Mësimi i parë në gjuhën shqipe" },
  { value: "2", label: "Drejtime: shkencat natyrore dhe shoqërore" },
  { value: "2", label: "Gjuhë mësimi: shqip dhe turqisht" },
  { value: "8", label: "Klube shkollore" },
] as const;

export const pathways = [
  {
    title: "Shkencat Natyrore",
    text: "Drejtim me theks në matematikë, fizikë, astronomi, kimi dhe biologji.",
  },
  {
    title: "Shkencat Shoqërore",
    text: "Drejtim me theks në filozofi, psikologji, histori dhe gjeografi.",
  },
] as const;

export const identity = {
  lead: "Gjimnazi “Sami Frashëri” është institucion gjithëpërfshirës që edukon dhe arsimon të rinjtë e moshës 15 deri 18 vjeç.",
  body: "Shkolla përgatit nxënësit për jetesë të përgjegjshme në frymën e mirëkuptimit, paqes, tolerancës dhe barazisë gjinore — në miqësi me pjesëtarët e të gjitha komuniteteve në Kosovë e më gjerë.",
};

export const values = [
  "Respekti",
  "Toleranca",
  "Përgjegjësia",
  "Miqësia",
  "Vetëkontrolli",
  "Dashuria",
] as const;

export const building = {
  source: "Trashëgimia Kulturore e Kosovës",
  text: "Ndërtesa ka planimetri tre krahësh në formë të shkronjës “U”, e ngritur në tri etazhe. Pjesa qendrore theksohet me risalitin, ndërsa hyrja kryesore me portalin e mbështetur në shtylla masive.",
};

export const principalMessage = {
  quote:
    "Rezultati për ju nxënës është thjesht një ngjarje, jo një person. Edhe pse do të bini 10 herë, dijeni se jeni plotësisht të fortë dhe të aftë të qëndroni në këmbë 11 herë.",
  author: "Betim Sylejmani",
  role: "Drejtor i shkollës",
};
