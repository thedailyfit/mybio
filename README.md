# Akhilesh Reddy — Portfolio

A cinematic personal portfolio for **Akhilesh Reddy** — performance marketer, creative director, and founder of [ZeroDesk](https://zerodesk.in).

Black-and-gold cinematic design: massive Bebas Neue gradient headlines, gold corner brackets, ambient glows, a custom spring cursor, smooth-scroll stacking project cards, a 3D-tilt monogram card, and a scroll-driven gold timeline.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 4** (CSS-first, via `@tailwindcss/vite`)
- **framer-motion** — scroll reveals, 3D tilt, timeline, cursor
- **lenis** — smooth scrolling for the project card stack

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build   # tsc -b && vite build
npm run preview
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`. (Auto-detected.)
4. Deploy.

## Customizing Content

All text lives in **`src/data/profile.ts`** — one file to edit:

- `hero` — headline lines, roles, bio, CTAs
- `about` — bio paragraph + 4 stat tiles
- `projects` — the 4 stacking cards
- `skillCategories` — the bento grid
- `journey` — the experience timeline
- `contact` — email, socials

Fields marked `[TODO: LinkedIn]` are placeholders awaiting real data from
[linkedin.com/in/thealexgrey](https://www.linkedin.com/in/thealexgrey/).

## Adding Visuals Later

The site currently ships with **styled placeholders** (no image/video files):

- **Hero emblem** — replace the "AR" monogram div in `HeroSection.tsx` with an `<img>` (drop the file in `src/assets/`).
- **Portrait** — replace the monogram canvas in `AboutSection.tsx` with your photo (`src/assets/about.png`).
- **Favicon** — swap `public/favicon.svg`.

## Design Credit

Visual design language inspired by
[lohithadamisetti123/cinematic-portfolio](https://github.com/lohithadamisetti123/cinematic-portfolio).
All code in this repo was written fresh for this site.
