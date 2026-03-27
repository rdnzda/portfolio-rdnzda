# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Description

Portfolio personnel de Rtan Jda — développeur web freelance. Site vitrine monopage avec défilement fluide présentant les projets, services, biographie et un formulaire de contact. Conçu avec une esthétique moderne (fond aurora animé, curseur personnalisé, animations au scroll) pour refléter un positionnement créatif et professionnel. Entièrement en français, déployé en production.

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

**Page structure:** `app/page.tsx` composes all sections inside `BackgroundLayout`, which provides the navigation and Aurora animated background. Scroll anchors: `#home`, `#projets`, `#services`, `#biographie`, `#contact`.

**Components:**
- `components/layout/` — `BackgroundLayout` (nav + aurora wrapper), `Footer`
- `components/sections/` — one file per scroll section (`HeroSection`, `ProjetsSection`, `ServicesSection`, `BiographieSection`, `ContactSection`)
- `components/ui/` — `CustomCursor`, `AuroraBackground`, `FooterMeta`

**Hooks:** `hooks/useInView.ts` — generic Intersection Observer hook that triggers once on first viewport entry; used for scroll-reveal animations throughout sections.

**Animations:** Custom keyframes (`fadeInUp`, `slideInRight`, `slideInLeft`, `lineExpand`, `blob`, `drift`, `scroll-left`) defined in `app/globals.css`. Delay utilities applied via Tailwind class names.

**Styling:** Utility-first Tailwind CSS only — no CSS modules. Responsive via `sm:` / `lg:` breakpoints with mobile-first defaults.

**State:** No external state management. `BackgroundLayout` holds local state for active section and mobile nav. `CustomCursor` uses `useRef` + `requestAnimationFrame`.

**Contact form:** Formspree (`https://formspree.io/f/xaqwzggg`) — no backend.

**Path alias:** `@/*` maps to the project root (configured in `tsconfig.json`).
