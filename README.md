# Portfolio – rdnzda.com

My personal portfolio, live at **[rdnzda.com](https://rdnzda.com)** and deployed on Vercel.

A single-page site with smooth scrolling that presents my projects, my skills, my background and a contact form, plus legal notice and privacy policy pages. The site content is in French.

## Features

- Smooth-scroll sections: home, projects, skills, biography, contact
- Restrained editorial design: paper/ink palette, one accent colour, numbered sections, light and dark modes
- Scroll-reveal animations driven by an Intersection Observer hook (`hooks/useInView.ts`)
- Contact form handled by Formspree (no backend)
- Legal notice (`/mentions-legales`) and privacy policy (`/politique-confidentialite`) pages
- Responsive, mobile-first layout

## Tech stack

- **Next.js** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4** (utility classes only)
- Animations: Framer Motion, GSAP, custom CSS keyframes
- 3D elements: Three.js and Spline
- Vercel Analytics

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Project structure

```text
app/                    routes: /, /mentions-legales, /politique-confidentialite
components/layout/      BackgroundLayout (navigation), Footer
components/sections/    one file per section (Hero, Projects, Skills, Biography, Contact)
components/ui/          SectionHeader, Reveal, FooterMeta
hooks/                  useInView
public/                 images and icons
```

## Contact

akunzada.redean.pro@gmail.com
