/**
 * Staff directory. Names and roles are transcribed from the official staff card images
 * in public/assets/staff; subject classification follows the card filenames.
 */

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  /** Full official staff card. */
  image: string;
  /** Photo cropped from the card by scripts/crop-staff-portraits.ps1. */
  portrait: string;
};

export type StaffSubgroup = {
  id: string;
  title: string;
  members: StaffMember[];
};

export type StaffCategory = {
  id: string;
  index: string;
  title: string;
  subgroups: StaffSubgroup[];
};

type Entry = [name: string, file: string, role?: string];

function group(id: string, title: string, role: string, entries: Entry[]): StaffSubgroup {
  return {
    id,
    title,
    members: entries.map(([name, file, customRole]) => ({
      id: file.replace(/\.jpg$/, ""),
      name,
      role: customRole ?? role,
      image: `/assets/staff/${file}`,
      portrait: `/assets/staff/portraits/${file}`,
    })),
  };
}

export const staffCategories: StaffCategory[] = [
  {
    id: "drejtoria",
    index: "01",
    title: "Drejtoria dhe Shërbimet Mbështetëse",
    subgroups: [
      group("drejtoria-sherbimet", "Drejtoria dhe shërbimet", "", [
        ["Betim Sylejmani", "drejtor-wMYkqCvn.jpg", "Drejtor"],
        ["Daut Selimi", "zv_drejtor-DU11ZU8W.jpg", "Zëvendësdrejtor"],
        ["Shemsije Berisha", "sekretar-z1wqP6NC.jpg", "Sekretare"],
        ["Besarta Murtezaj", "psikologe-C9nNlKaj.jpg", "Psikologe"],
        ["Florie Shala", "infermiere-D9Kpwy53.jpg", "Infermiere"],
      ]),
    ],
  },
  {
    id: "shkencat-natyrore",
    index: "02",
    title: "Shkencat Natyrore",
    subgroups: [
      group("matematika", "Matematika", "Matematikë", [
        ["Ajshe Rexhepi", "matematike_1-ptmenTiZ.jpg"],
        ["Selvije Makolli Limani", "matematike_2-CF9oQWX4.jpg"],
        ["Vlora Hajrullahu", "matematike_3-DdPAyA78.jpg"],
        ["Mirlinda Raci Rullani", "matematike_4-DTpEvng-.jpg"],
        ["Violina Asllani", "matematike_5-Bo9CcKNA.jpg"],
        ["Teuta Zogjani", "matematike_6-Ddk0NBXl.jpg"],
      ]),
      group("fizika", "Fizika", "Fizikë", [
        ["Fetah Zejnullahu", "fizike_1-DsEvHP_g.jpg"],
        ["Zeqirja Zylfiu", "fizike_2-D-1Zzrur.jpg"],
        ["Mirisha Limani", "fizike_3-D1Z1UyKn.jpg"],
        ["Xhevdet Podrimaj", "fizike_4-BQLpy2s0.jpg"],
        ["Tuba Ismaili", "fizike_5-Ch4y98ve.jpg", "Fizikë, Matematikë, Astronomi"],
      ]),
      group("astronomia", "Astronomia", "Astronomi", [
        ["Lulzim Bruçi", "astronomi-w2YkJ1__.jpg"],
      ]),
      group("kimia", "Kimia", "Kimi", [
        ["Flurie Rusinovci", "kimi_1-BztnphbZ.jpg"],
        ["Nadire Humolli Jusufi", "kimi_2-CahpkGgA.jpg"],
        ["Serap Bayrami", "kimi_3-CsYaFWST.jpg", "Kimi, Biologji"],
        ["Kosovare Luma", "kimi_4-UwWD2SJc.jpg"],
        ["Jehona Hasanaj", "kimi_5-CWh7cc2u.jpg"],
        ["Fierza Morina Xhafolli", "kimi_6-DrJo9y8V.jpg"],
      ]),
      group("biologjia", "Biologjia", "Biologji", [
        ["Makfiret Peci", "biologji_1-BWCT8Jh5.jpg"],
        ["Florije Sejdiu", "biologji_2-BLZ-qhus.jpg"],
        ["Nexhat Berisha", "biologji_4-C7smSosd.jpg"],
        ["Mirjeta Nura Dragusha", "biologji_5-B3iY1qyf.jpg"],
      ]),
      group("teknologjia", "Teknologjia", "Teknologji", [
        ["Nerxhivane Rexhepi", "tik_1-DlfZDf2S.jpg"],
        ["Blerta Tolaj", "tik_2-DxI8_hPW.jpg"],
        ["Tringa Tahiri", "tik_4-CWwhzgsl.jpg"],
      ]),
    ],
  },
  {
    id: "shkencat-shoqerore",
    index: "03",
    title: "Shkencat Shoqërore",
    subgroups: [
      group("filozofia", "Filozofia", "Filozofi", [
        ["Arjeta Ibrahimi Kolshi", "filozofi-BmU4_xd1.jpg"],
      ]),
      group("psikologjia", "Psikologjia", "Psikologji", [
        ["Mimoza Gjaka Bllacaku", "psikologji-CWUK3weo.jpg"],
      ]),
      group("historia", "Historia", "Histori", [
        ["Ibush Llapashtica", "histori-CqxA5k25.jpg"],
      ]),
      group("gjeografia", "Gjeografia", "Gjeografi", [
        ["Ilir Krasniqi", "gjeografi_1-B2QcAsIL.jpg"],
        ["Selvete Qela", "gjeografi_2-sO9Fi7nu.jpg"],
        ["Safet Avdiu", "gjeografi_3-Bbqhh9nz.jpg"],
      ]),
    ],
  },
  {
    id: "gjuhet-e-huaja",
    index: "04",
    title: "Gjuhët e Huaja",
    subgroups: [
      group("anglisht", "Anglisht", "Gjuhë Angleze", [
        ["Shpresa Kadriu", "gjuhe_angleze_1-HveHyEco.jpg"],
        ["Yllka Stublla", "gjuhe_angleze_3-DAypUqZA.jpg"],
        ["Venera Çoça", "gjuhe_angleze_4-CML5QXzD.jpg"],
      ]),
      group("frengjisht", "Frëngjisht", "Gjuhë Frënge", [
        ["Ilmi Reqica", "gjuhe_frenge_1-BykrhEwP.jpg"],
      ]),
      group("gjermanisht", "Gjermanisht", "Gjuhë Gjermane", [
        ["Bahrije Babaj", "gjuhe_gjermane_1-BzD0Z8EL.jpg"],
        ["Violeta Veseli", "gjuhe_gjermane_2-BGvzpTe0.jpg"],
        ["Albana Gashi", "gjuhe_gjermane_4-DPBTFrsP.jpg"],
      ]),
      group("turqisht", "Turqisht", "Gjuhë Turke", [
        ["Emsal Süleyman", "gjuhe_turke_1-CGd_N8fY.jpg"],
      ]),
    ],
  },
  {
    id: "gjuha-shqipe",
    index: "05",
    title: "Gjuha Shqipe dhe Letërsi",
    subgroups: [
      group("gjuha-shqipe-letersi", "Gjuha shqipe dhe letërsi", "Gjuhë Shqipe", [
        ["Hyrishahe Korça", "gjuhe_shqipe_1-BNhYHYZL.jpg"],
        ["Fetije Reçica", "gjuhe_shqipe_2-C_T_-DI9.jpg"],
        ["Marigonë Mehmeti Jonuzi", "gjuhe_shqipe_4-Clc8y5Fo.jpg"],
        ["Sarandë Ahmeti Sekiraqa", "gjuhe_shqipe_5-pDwy6jCg.jpg"],
        ["Dorentina Demolli", "gjuhe_shqipe_6-euYmF48a.jpg"],
        ["Argjentina Krasniqi", "gjuhe_shqipe_7-BkwP-fbG.jpg"],
      ]),
    ],
  },
  {
    id: "edukimi-fizik-artistik",
    index: "06",
    title: "Edukimi Fizik dhe Artistik",
    subgroups: [
      group("edukate-fizike", "Edukatë fizike", "Edukatë Fizike", [
        ["Ismet Rama", "ed_fizike_1-DfsrIRuW.jpg"],
        ["Bardhyl Kastrati", "ed_fizike_2-B9a2W_F5.jpg"],
        ["Enver Blakçori", "ed_fizike_3-DyOV_-IV.jpg"],
      ]),
      group("art-figurativ", "Art figurativ", "Art Figurativ", [
        ["Nora Jashari", "art_figurativ-DUuXeK-t.jpg"],
      ]),
      group("art-muzikor", "Art muzikor", "Art Muzikor", [
        ["Mjellma Sadiku", "art_muzikor-CYE7gn_J.jpg"],
      ]),
    ],
  },
  {
    id: "lendet-zgjedhore",
    index: "07",
    title: "Lëndët Zgjedhore",
    subgroups: [
      group("argumentimi-logjik", "Argumentimi logjik", "Argumentim Logjik", [
        ["Ganimete Hyseni Gashi", "argumentim_logjik.jpg"],
        ["Adriatik Zeqiri", "argumentim_logjik_2-oKi3WpoS.jpg"],
      ]),
      group("trashegimia-kulturore", "Trashëgimia kulturore", "Trashëgimi Kulturore", [
        ["Fjolla Gashi", "trashegimi_kulturore-Bpa0mQig.jpg"],
        ["Arbenita Vokshi Dobruna", "trashegimi_kulturor_2-DSHAh5hr.jpg"],
        ["Hamide Beha Sahiti", "trashegimi_kulturore_3-DjABrMNi.jpg"],
      ]),
      group("edukimi-mediatik", "Edukimi mediatik", "Edukim Mediatik", [
        ["Kushtrim Bekteshi", "edukim_mediatik-BHafmXFW.jpg"],
      ]),
    ],
  },
  {
    id: "stafi-teknik",
    index: "08",
    title: "Stafi Teknik",
    subgroups: [
      group("staf-teknik", "Stafi teknik", "Staf Teknik", [
        ["Emine Sopi", "staf_teknik_1-CB7HsKY8.jpg"],
        ["Emine Raifi", "staf_teknik_2-B2yMcWRk.jpg"],
        ["Habibe Muharremi", "staf_teknik_3-BnSKWUrs.jpg"],
        ["Minire Jashari", "staf_teknik_4-DPC7Tfw9.jpg"],
        ["Adem Kalaja", "staf_teknik_5-Bt6dF5Bw.jpg"],
        ["Hanë Avdullahi", "staf_teknik_6-DawdEA0V.jpg"],
        ["Xhevahire Goxhufi", "staf_teknik_7-Bu9_3DWp.jpg"],
        ["Fehmi Isufi", "staf_teknik_8-B0WvKP6c.jpg"],
        ["Sanije Krasniqi", "staf_teknik_9-x7jXLKS5.jpg"],
        ["Fatmire Berisha", "staf_teknik_10-lblnyZJr.jpg"],
        ["Shaban Berisha", "staf_teknik_11-N2Ey-UIP.jpg"],
      ]),
    ],
  },
];

export const allStaff: StaffMember[] = staffCategories.flatMap((c) =>
  c.subgroups.flatMap((s) => s.members),
);

export function categoryCount(category: StaffCategory) {
  return category.subgroups.reduce((sum, s) => sum + s.members.length, 0);
}

/** Native pixel size of every staff card image. */
export const STAFF_CARD_SIZE = { width: 1659, height: 1054 } as const;

/** Native pixel size of every cropped portrait. */
export const STAFF_PORTRAIT_SIZE = { width: 440, height: 400 } as const;
