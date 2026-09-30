# Mariano Rivas — Professional Portfolio

Public professional portfolio for **Mariano Rivas**, currently focused on the **Unity / C# Developer** candidate track.

## Status

**Phase 11 — Integration**

The Unity candidate landing and the UNLOCKED production case study are implemented, responsive and visually reviewed. The repository is now being prepared for deployment and launch QA.

Remaining launch work includes Vercel deployment, production-domain configuration, final indexing settings and candidate assets such as the Unity CV.

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

The current version intentionally avoids unnecessary backend dependencies. Supabase is not required.

## Visual system

The V1 design system is technical-editorial and light-first:

- neutral surfaces;
- cobalt track accent;
- Geist Sans + Geist Mono;
- restrained borders and radii;
- responsive 1280px max-width container;
- desktop, intermediate/tablet and mobile layouts;
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

- `/unity` — Unity / C# candidate landing
- `/work/unlocked` — UNLOCKED production case study

## Publication state

Search indexing remains intentionally disabled (`robots: noindex` and `/robots.txt` disallow all) until deployment, domain configuration and launch QA are complete.

## Confidentiality

UNLOCKED is represented as professional evidence, but its production source repository remains private. This portfolio repository must not contain proprietary source code, credentials, signing assets, receipt-validation data, private store configuration or other confidential project material.
