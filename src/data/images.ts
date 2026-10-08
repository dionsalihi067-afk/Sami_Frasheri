/** Stills taken from the school's own video (public/assets/video/ambienti-shkolles.mp4). */
export const images = {
  campus: {
    src: "/assets/images/campus.jpg",
    alt: "Oborri i shkollës me gjelbërim dhe ndërtesa e gjimnazit në sfond",
  },
  stairs: {
    src: "/assets/images/shkallet.jpg",
    alt: "Shkallët e brendshme të shkollës me dritare të mëdha dhe bimë",
  },
  telescope: {
    src: "/assets/images/teleskopi.jpg",
    alt: "Teleskop në një klasë të shkollës, pranë dritares dhe tabelës",
  },
  trophies: {
    src: "/assets/images/trofete.jpg",
    alt: "Vitrinë me trofe në korridorin e shkollës",
  },
} as const;

export const IMAGE_SIZE = { width: 1280, height: 720 } as const;
