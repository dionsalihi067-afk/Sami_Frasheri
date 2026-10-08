# Gjimnazi “Sami Frashëri” — website

Official-style website for **Gjimnazi “Sami Frashëri”**, Prishtinë, Kosovo.

## Stack

- Next.js 15 (App Router, server components by default)
- TypeScript, Tailwind CSS 4
- react-pdf (magazine reader, loaded on demand)
- three / @react-three/fiber (hero building model, desktop only, loaded on idle)

## Routes

| Route | Content |
| --- | --- |
| `/` | Home |
| `/rreth-nesh` | History, identity, building |
| `/stafi` | Staff directory (8 categories) |
| `/aktivitetet` | Clubs, student life, news |
| `/revista` | Magazine reader + download |
| `/kontakti` | Contact form + Google Maps |
| `/termat-dhe-kushtet` | Terms (draft) |
| `/politika-e-privatesise` | Privacy policy (draft) |

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

See `.env.example`.

- `NEXT_PUBLIC_SITE_URL` — **required for deployment.** Canonical URLs, Open Graph, sitemap and robots use it; without it they point to `http://localhost:3000`.
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — contact form (server-side only). If missing, the form tells the visitor it is not active and shows the school email; it never claims a message was sent.
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` — optional, public Embed API key.

## Validate

```bash
npm run lint
npm run typecheck
npm run check:assets   # every /assets path referenced in src/ exists in public/
npm run build
```

On OneDrive, delete `.next` before building if you see `EINVAL: readlink` errors.

## Assets

- `public/assets/staff/*.jpg` — the official staff cards (shown in the lightbox).
- `public/assets/staff/portraits/*.jpg` — photos cropped from those cards by `scripts/crop-staff-portraits.ps1` (Windows, System.Drawing). Re-run it after replacing or adding a card.
- `public/assets/images/*.jpg` — stills taken from the school video (`campus.jpg` is also the video poster).
- `public/assets/magazine/cover.jpg` — page 1 of `revista.pdf`.

## Content

All content lives in `src/data/` and comes from verified sources (official school website, Kosovo Cultural Heritage registry; Wikipedia only as cross-reference).

- `school.ts` — name, contact, navigation, asset paths
- `about.ts` — history, identity, values, building
- `clubs.ts` — clubs and student life
- `staff.ts` — staff directory; names transcribed from the cards in `public/assets/staff/`
- `news.ts` — **intentionally empty**. Add real items only; the site shows an empty state until then.

## Legal pages

`/termat-dhe-kushtet` and `/politika-e-privatesise` are drafts. **They must be reviewed by a qualified lawyer licensed in Kosovo before publication.** They intentionally omit facts not yet verified (legal entity and registration details, DPO, hosting provider, retention periods, specific legal basis, supervisory authority name). Update the privacy policy whenever analytics, cookies or new third-party services are added.

The school's street address is not stated anywhere on the site: public sources disagree (Nazim Gafurri vs. Ibrahim Lutfiu) and the official site lists only "Prishtinë". Add it to `school.ts` once the school confirms it.
