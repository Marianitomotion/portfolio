# Mariano Rivas — Professional Portfolio

Public portfolio foundation for **Mariano Rivas**, initially focused on the **Unity / C# Developer** candidate track.

## Status

**Phase 8 — Repository & Next.js Foundation**

The repository currently contains the technical foundation only. Final portfolio copy, UNLOCKED screenshots, technical diagrams, CV assets, SEO launch settings and custom-domain configuration are intentionally deferred to later phases.

## Architecture

```text
/
├── unity/
└── work/
    └── unlocked/
```

`/` redirects to `/unity` while Unity is the only published candidate track.

The portfolio architecture follows one rule:

> Tracks are candidate views. Work is reusable evidence.

Future tracks can be added without changing the evidence model.

## Stack

- Next.js 16.x
- React 19.x
- TypeScript
- Tailwind CSS 4.x
- Vercel target deployment

The foundation intentionally avoids unnecessary backend dependencies. Supabase is not required for this version.

## Visual foundation

The V1 design system is technical-editorial and light-first:

- neutral surfaces;
- cobalt track accent;
- Geist Sans + Geist Mono;
- restrained borders and radii;
- responsive 1280px max-width container;
- minimal motion;
- visible keyboard focus;
- reduced-motion support.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Current routes

- `/unity` — Unity / C# candidate-profile foundation
- `/work/unlocked` — UNLOCKED technical case-study foundation

## Publication state

Search indexing is intentionally disabled in this foundation build (`robots: noindex` and `/robots.txt` disallow all). This must be changed only when the portfolio reaches launch QA.

## Confidentiality

UNLOCKED is represented as professional evidence, but its production source repository remains private. This portfolio repository must not contain proprietary source code, credentials, signing assets, receipt-validation data, private store configuration or other confidential project material.
