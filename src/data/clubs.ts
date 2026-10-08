/**
 * Clubs as published on the school's official website (samifrasheri-pr.com).
 * Descriptions are condensed from the official text; no schedules or results are implied.
 */
export type Club = {
  id: string;
  name: string;
  text: string;
};

export const clubs: Club[] = [
  {
    id: "matematika",
    name: "Klubi i Matematikës",
    text: "Angazhime jashtëshkollore dhe pjesëmarrje në gara e kuize të diturisë.",
  },
  {
    id: "debati",
    name: "Klubi i Debatit",
    text: "Zhvillim intelektual përmes argumentimit dhe respektit për mendimin e secilit.",
  },
  {
    id: "sporti",
    name: "Klubi i Sportit",
    text: "Pjesëmarrje në turne, gara dhe përballje me shkollat në qytet e më gjerë.",
  },
  {
    id: "muzika",
    name: "Klubi i Muzikës",
    text: "Degë e veçantë e arteve, e pranishme në çdo eveniment të shkollës.",
  },
  {
    id: "vullnetaret",
    name: "Klubi i Vullnetarëve",
    text: "Punë, ide dhe energji pozitive për ta bërë shkollën një vend edhe më të mirë.",
  },
  {
    id: "letersia",
    name: "Klubi i Letërsisë",
    text: "Hapësirë për letrarët e rinj që ndajnë përvojat e tyre përmes fjalës së shkruar.",
  },
  {
    id: "mediali",
    name: "Klubi Medial",
    text: "Krijimtari mediatike, komunikim virtual dhe veprimtari në gazetari.",
  },
  {
    id: "artet",
    name: "Klubi i Arteve Pamore",
    text: "Eksplorim i artit dhe mundësi për artistët e shkollës të shkëlqejnë.",
  },
];

export const studentLife = [
  {
    title: "Arritjet",
    text: "Nxënësit e shkollës shënojnë suksese në sport, shkencë, letërsi dhe matematikë — si pjesëmarrës dhe si fitues.",
  },
  {
    title: "Kultura",
    text: "Aktivitete kulturore dhe kremtimi i festave janë pjesë e përhershme e jetës së shkollës.",
  },
  {
    title: "Komuniteti",
    text: "Vullnetarizmi dhe ndihma e ndërsjellë ndërtojnë një komunitet të përgjegjshëm nxënësish.",
  },
] as const;
