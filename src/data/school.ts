export const school = {
  name: "Gjimnazi “Sami Frashëri”",
  namePlain: "Gjimnazi Sami Frashëri",
  shortName: "Sami Frashëri",
  city: "Prishtinë",
  country: "Kosovë",
  contact: {
    email: "samifrasherihs@gmail.com",
    locality: "Prishtinë, Kosovë",
    mapQuery: "Gjimnazi Sami Frashëri, Prishtinë",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/SamiFrasheriOfficial" },
  ],
  principal: { name: "Betim Sylejmani", title: "Drejtor i shkollës" },
  description:
    "Gjimnazi “Sami Frashëri” në Prishtinë — një ndër shkollat më të vjetra të mesme në Kosovë, me drejtimet e shkencave natyrore dhe shoqërore.",
} as const;

export const navigation = [
  { href: "/", label: "Ballina" },
  { href: "/rreth-nesh", label: "Rreth Nesh" },
  { href: "/stafi", label: "Stafi" },
  { href: "/aktivitetet", label: "Aktivitetet" },
  { href: "/revista", label: "Revista" },
  { href: "/kontakti", label: "Kontakti" },
] as const;

export const legalNavigation = [
  { href: "/termat-dhe-kushtet", label: "Termat dhe Kushtet" },
  { href: "/politika-e-privatesise", label: "Politika e Privatësisë" },
] as const;

export const assets = {
  logo: "/assets/logo.png",
  video: "/assets/video/ambienti-shkolles.mp4",
  videoPoster: "/assets/images/campus.jpg",
  magazine: "/assets/magazine/revista.pdf",
  magazineCover: "/assets/magazine/cover.jpg",
} as const;
