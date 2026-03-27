"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Spotlight, GridBackground } from "../ui/spotlight-new";

interface BackgroundLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export default function BackgroundLayout({ children, showNav = true }: BackgroundLayoutProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px", 
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `cursor-pointer transition-all duration-300 py-1 ${
      isActive
        ? "text-white border-b border-white"
        : "text-zinc-400 hover:text-white hover:tracking-[0.2em] border-b border-transparent"
    }`;
  };

  const getMobileLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `block w-full text-center py-3 text-sm uppercase tracking-widest transition-all duration-300 ${
      isActive
        ? "text-white font-bold bg-white/10 rounded-lg"
        : "text-zinc-400 hover:text-white"
    }`;
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* NAVIGATION DESKTOP (Inchangée - En bas) */}
      {showNav && (
        <nav className="fixed hidden lg:flex bottom-6 w-full px-4 justify-center items-center z-50 text-xs tracking-widest animate-fade-in-up">
          <div className="items-center space-x-8 bg-[#0a0a0a]/80 px-8 py-3 rounded-full backdrop-blur-md border border-zinc-800/50 shadow-2xl">
            <Link href="#home" className={getLinkClasses("home")}>Accueil</Link>
            <Link href="#projets" className={getLinkClasses("projets")}>Projets</Link>
            <Link href="#services" className={getLinkClasses("services")}>Services</Link>
            <Link href="#biographie" className={getLinkClasses("biographie")}>Biographie</Link>
            <Link href="#contact" className={getLinkClasses("contact")}>Contact</Link>  
          </div>
        </nav>
      )}

      {/* --- NAVIGATION MOBILE (HAUT DROITE) --- */}
      {showNav && (
        // Changement ici : top-6 right-6
        <nav className="fixed lg:hidden top-6 right-6 z-50 flex flex-col items-end gap-4">
          
          {/* LE BOUTON FLOTTANT (Trigger) */}
          {/* Je mets le bouton EN PREMIER dans le HTML pour que le menu (qui est en dessous dans le code) s'affiche visuellement SOUS le bouton grâce au flux naturel ou flex-col */}
          <button 
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/10 transition-transform active:scale-95 z-50"
            aria-label="Menu"
          >
            {/* Icône Hamburger qui se transforme en Croix */}
            <div className="relative h-3 w-5 overflow-hidden">
                <span className={`absolute top-0 left-0 h-[2px] w-full bg-black transition-all duration-300 ${isMobileNavOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`} />
                <span className={`absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-black transition-all duration-300 ${isMobileNavOpen ? "opacity-0 translate-x-full" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-black transition-all duration-300 ${isMobileNavOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`} />
            </div>
          </button>

          {/* LE MENU DÉPLIANT (La liste) */}
          <div 
            className={`
                absolute top-[120%] right-0 w-48 
                bg-[#0a0a0a]/90 backdrop-blur-xl border border-zinc-800 
                rounded-2xl p-2 shadow-2xl origin-top-right transition-all duration-300 ease-out z-40
                ${isMobileNavOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 -translate-y-4 pointer-events-none"}
            `}
          >
            {/* Note: translate-y-0 vs -translate-y-4 : quand c'est fermé, ça remonte un peu vers le bouton */}
            <div className="flex flex-col gap-1">
               <Link href="#home" onClick={() => setIsMobileNavOpen(false)} className={getMobileLinkClasses("home")}>Accueil</Link>
               <Link href="#projets" onClick={() => setIsMobileNavOpen(false)} className={getMobileLinkClasses("projets")}>Projets</Link>
               <Link href="#services" onClick={() => setIsMobileNavOpen(false)} className={getMobileLinkClasses("services")}>Services</Link>
               <Link href="#biographie" onClick={() => setIsMobileNavOpen(false)} className={getMobileLinkClasses("biographie")}>Biographie</Link>
               <Link href="#contact" onClick={() => setIsMobileNavOpen(false)} className={getMobileLinkClasses("contact")}>Contact</Link>
            </div>
          </div>

        </nav>
      )}

      {/* BACKGROUND GLOBAL */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <GridBackground />
        <Spotlight />
      </div>

      {/* CONTENU */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}