# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Description

Portfolio personnel de Redean Akunzada (rdnzda) — étudiant en L3 Informatique à Orléans, en route vers la cybersécurité, à la recherche d'un stage (dès mai 2027) puis d'une alternance bac+5. Site monopage avec défilement fluide présentant les projets, les compétences, la biographie et un formulaire de contact. Esthétique « plan technique » : papier gris-bleu et encre marine avec quadrillage discret (`--grid-color`), un seul accent bleu (`--accent`), Switzer pour tout le texte, Geist Mono réservé aux données techniques (stack, code). Le nom en grand dans le hero est le seul élément marquant ; une seule animation (l'entrée du hero). À éviter : numérotation décorative, libellés en petites capitales au-dessus des titres, flèches ajoutées aux liens, métadonnées séparées par « · », glow, blobs, apparitions au scroll. Entièrement en français, déployé en production. Le site ne propose pas de prestations : tout contenu doit rester cohérent avec le CV (aucun client ni mission inventés).

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm start        # Start production server
```

No test framework is configured.

## Architecture

**Stack:** Next.js (App Router) + React 19 + TypeScript + Tailwind CSS 4

**Routing:** File-based App Router with three routes:
- `/` — single-page portfolio with smooth-scroll sections
- `/mentions-legales` — legal notices
- `/politique-confidentialite` — privacy policy

**Page structure:** `app/page.tsx` composes all sections inside `BackgroundLayout`, which provides the fixed top navigation. Scroll anchors: `#home`, `#projets`, `#services` (labelled « Compétences » in the nav), `#biographie`, `#contact`.

**Components:**
- `components/layout/` — `BackgroundLayout` (top nav wrapper), `Footer`
- `components/sections/` — one file per scroll section (`HeroSection`, `ProjetsSection`, `ServicesSection` (skills), `BiographieSection`, `ContactSection`)
- `components/ui/` — `SectionHeader` (section title + intro), `ProjetPreview` (screenshot, code excerpt or flow preview of a project)

**Hooks:** `hooks/useInView.ts` — Intersection Observer hook, still used by the legal pages.

**Animations:** Only the hero entrance (`fadeInUp` keyframes in `app/globals.css`). No scroll-reveal.

**Content data:** projects, skills, TryHackMe steps and timeline are plain arrays at the top of each section file — edit them there, staying faithful to the CV.

**Styling:** Utility-first Tailwind CSS only — no CSS modules. Responsive via `sm:` / `lg:` breakpoints with mobile-first defaults.

**State:** No external state management. `BackgroundLayout` holds local state for active section and mobile nav.

**Contact form:** Formspree (`https://formspree.io/f/xaqwzggg`) — no backend.

**Path alias:** `@/*` maps to the project root (configured in `tsconfig.json`).
