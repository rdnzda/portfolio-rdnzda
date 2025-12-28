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
              <Link href="#projets" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Projets
              </Link>
              <Link href="#services" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="#biographie" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
                Biographie
              </Link>
              <Link href="#contact" className="text-zinc-400 text-sm hover:text-white transition-colors duration-300">
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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* COPYRIGHT */}
          <p className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-widest text-center sm:text-left">
            © {currentYear} {name}. Tous droits réservés.
          </p>

          {/* BOUTON RETOUR EN HAUT */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-400 text-[10px] sm:text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            <span className="hidden sm:inline">Retour en haut</span>
            <span className="sm:hidden">Haut</span>
            <span className="p-1.5 sm:p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
              <FiArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
