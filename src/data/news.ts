export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. "2026-10-01" */
  date: string;
  image?: string;
};

/** Add only official, verified announcements. The UI shows an empty state while this is empty. */
export const news: NewsItem[] = [];
