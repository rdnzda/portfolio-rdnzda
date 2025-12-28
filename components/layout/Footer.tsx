"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { SiX } from "react-icons/si";

interface FooterProps {
  name?: string;
  email?: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function Footer({
  name = "RDNZDA",
  email = "akunzada.redean.pro@gmail.com",
  socials = {
    github: "https://github.com/rdnzda",
    linkedin: "https://www.linkedin.com/in/redean-akunzada/"
  },
}: FooterProps) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* COLONNE 1 - LOGO & DESCRIPTION */}
          <div className="space-y-4">
            <Link href="/" className="text-white font-syncopate font-bold text-2xl hover:text-zinc-300 transition-colors duration-300">
              {name}
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Développeur & Designer Web passionné par la création d&apos;expériences digitales uniques.
            </p>
          </div>

          {/* COLONNE 2 - NAVIGATION */}
          <div className="space-y-4">
            <h2 className="text-white font-syncopate text-xs uppercase tracking-widest">
              Navigation
            </h2>
            <nav className="flex flex-col gap-2">
              <Link href="/#projets" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Projets
              </Link>
              <Link href="/#services" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="/#biographie" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Biographie
              </Link>
              <Link href="/#contact" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* COLONNE 3 - CONTACT & SOCIALS */}
          <div className="space-y-4">
            <h2 className="text-white font-syncopate text-xs uppercase tracking-widest">
              Contact
            </h2>
            <Link
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-zinc-400 text-sm hover:text-white transition-colors duration-300 group"
            >
              <FiMail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              {email}
            </Link>

            {/* RÉSEAUX SOCIAUX */}
            <div className="flex items-center gap-4 pt-2">
              {socials.github && (
                <Link
                  href={socials.github}
                  target="_blank"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </Link>
              )}
              {socials.linkedin && (
                <Link
                  href={socials.linkedin}
                  target="_blank"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* LIGNE SÉPARATRICE */}
        <div className="h-[1px] w-full bg-white/10 mb-8"></div>

        {/* BAS DU FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-white/5">

          {/* BLOC GAUCHE : NAVIGATION & COPYRIGHT */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/mentions-legales"
                className="group relative text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:text-white transition-colors duration-300"
              >
                Mentions Légales
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="/politique-confidentialite"
                className="group relative text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:text-white transition-colors duration-300"
              >
                Confidentialité
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <p className="text-zinc-300 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-light">
              © {currentYear} <span className="text-zinc-300">{name}</span> — Code & Design
            </p>
          </div>

          {/* BOUTON RETOUR EN HAUT (Bloc Droite) */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-zinc-300 text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:text-white transition-all duration-500"
          >
            <span className="relative overflow-hidden inline-block">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">Retour en haut</span>
              <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-white">Vers le sommet</span>
            </span>

            <div className="relative flex items-center justify-center p-3 border border-white/10 rounded-full overflow-hidden transition-all duration-500 group-hover:border-white/40 group-hover:bg-white">
              <FiArrowUp className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-black" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
