/**
 * Facts about public/assets/magazine/revista.pdf, read from the file itself
 * (cover page and page count). The cover image is page 1 rendered to JPEG.
 */
export const magazine = {
  edition: "Botimi · Prishtinë 2025",
  coverAlt: "Kopertina e revistës së Gjimnazit “Sami Frashëri”, Prishtinë 2025",
  coverWidth: 868,
  coverHeight: 1124,
  facts: [
    { label: "Viti", value: "2025" },
    { label: "Faqe", value: "16" },
    { label: "PDF", value: "46 MB" },
  ],
} as const;
