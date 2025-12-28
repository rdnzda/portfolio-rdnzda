"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView"; 
import { FiGithub, FiArrowUpRight, FiCheck, FiZap, FiLayout, FiSmartphone } from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFramer,
  SiVercel
} from "react-icons/si";
import { IconType } from "react-icons";

// --- CONFIGURATION ---

const techIcons: Record<string, { icon: IconType; color: string }> = {
  "react": { icon: SiReact, color: "#61DAFB" },
  "next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "typescript": { icon: SiTypescript, color: "#3178C6" },
  "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
  "node.js": { icon: SiNodedotjs, color: "#339933" },
  "framer motion": { icon: SiFramer, color: "#0055FF" },
  "vercel": { icon: SiVercel, color: "#ffffff" },
};

function TechBadge({ name }: { name: string }) {
  const tech = techIcons[name.toLowerCase()];
  const Icon = tech?.icon;
  const color = tech?.color || "#ffffff";

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-md whitespace-nowrap">
      {Icon && <Icon className="w-3 h-3" style={{ color }} />}
      <span className="text-[10px] text-zinc-300">{name}</span>
    </div>
  );
}

// ============================================
// MICRO-UI 1 : ONYX PREVIEW
// ============================================
function OnyxPreview() {
  return (
    <div className="w-full max-w-[200px] bg-[#161616] border-2 border-[#C5A086] rounded-xl p-4 shadow-2xl relative overflow-hidden transform transition-transform">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#C5A086] text-black text-[8px] font-black px-3 py-0.5 rounded-b-md tracking-widest uppercase">
            Signature
        </div>
        <div className="mt-2 flex items-center justify-between mb-3">
            <div className="flex flex-col">
                <span className="text-[#C5A086] text-[10px] font-bold">CORRECTION</span>
                <span className="text-white text-[8px] opacity-60">Restaurer & Sublimer</span>
            </div>
            <div className="w-4 h-4 rounded-full border border-[#C5A086] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#C5A086] rounded-full"></div>
            </div>
        </div>
        <div className="flex items-baseline mb-4">
            <span className="text-[#C5A086] text-sm font-bold mr-1">€</span>
            <span className="text-white text-2xl font-bold tracking-tighter">450</span>
        </div>
        <div className="space-y-1.5">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#C5A086]/20 flex items-center justify-center">
                        <FiCheck className="w-2 h-2 text-[#C5A086]" />
                    </div>
                    <div className="h-1.5 w-12 bg-zinc-800 rounded-full"></div>
                </div>
            ))}
        </div>
        <div className="mt-4 w-full h-6 bg-[#C5A086] rounded flex items-center justify-center">
            <span className="text-black text-[8px] font-bold uppercase">Choisir ce pack</span>
        </div>
    </div>
  );
}

// ============================================
// MICRO-UI 2 : PERFORMANCE (LIGHTHOUSE)
// ============================================
function PerformanceRing({ score, label }: { score: number, label: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-zinc-800">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981" // Vert Émeraude
                        strokeWidth="3"
                        strokeDasharray={`${score}, 100`}
                    />
                </svg>
                <span className="text-xs font-bold text-emerald-400">{score}</span>
            </div>
            <span className="text-[8px] uppercase tracking-wider text-zinc-500">{label}</span>
        </div>
    )
}

function LighthousePreview() {
    return (
        <div className="flex gap-3 sm:gap-4">
            <PerformanceRing score={100} label="SEO" />
            <PerformanceRing score={98} label="Perf" />
            <PerformanceRing score={100} label="Access" />
        </div>
    )
}

// ============================================
// MICRO-UI 3 : PORTFOLIO MOBILE MOCKUP
// ============================================
function PortfolioMockup() {
  return (
    <div className="relative w-24 h-44 bg-zinc-900 rounded-2xl border-4 border-zinc-700 overflow-hidden shadow-2xl transform rotate-[-5deg] group-hover:rotate-0 transition-all duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-zinc-700 rounded-b-md"></div>
      <div className="p-2 pt-4 h-full flex flex-col gap-2">
        {/* Fake Header */}
        <div className="w-full h-6 bg-white/5 rounded flex items-center px-2 gap-1">
            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
            <div className="w-8 h-1.5 bg-zinc-700 rounded-full"></div>
        </div>
        {/* Fake Grid */}
        <div className="flex-1 grid grid-cols-1 gap-2 overflow-hidden opacity-50">
            <div className="w-full h-16 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg border border-white/10"></div>
            <div className="w-full h-12 bg-zinc-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SECTION PRINCIPALE
// ============================================

interface ProjetsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ProjetsSection({
  title = "Projets",
  subtitle = "Mes Réalisations",
}: ProjetsSectionProps) {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: bentoRef, isInView: bentoInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projets" className="relative z-10 min-h-screen w-full py-20 sm:py-32 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div ref={headerRef} className={`transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 sm:gap-6 mb-4 group">
            <div className="h-[1px] w-10 sm:w-16 bg-white/40 transition-all duration-500 group-hover:w-24 group-hover:bg-white/60"></div>
            <span className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] group-hover:text-zinc-300 transition-colors">
              {subtitle}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-10 sm:mb-16">
            {title}
          </h2>
        </div>

        {/* BENTO GRID */}
        <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          
          {/* --- 1. PROJET STAR : ONYX DETAILING (2x2) --- */}
          <div className={`group relative md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-700 hover:border-[#C5A086]/50 hover:bg-[#141414] ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-display text-xl sm:text-2xl font-bold uppercase tracking-wide">
                      ONYX Detailing
                    </h3>
                    <span className="px-2 py-0.5 bg-foreground text-background text-[10px] font-bold uppercase rounded-full">Client</span>
                  </div>
                  <p className="text-zinc-400 text-sm max-w-sm leading-relaxed hidden sm:block">
                    Site vitrine complet pour un centre de rénovation. Calculateur de prix, animations, et conformité légale (RGPD/CGV).
                  </p>
                </div>
                <Link href="https://onyx-detailling.vercel.app/" aria-label="Onyx Detailing" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#C5A086] hover:text-black transition-all group-hover:scale-110 shrink-0">
                  <FiArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Preview */}
              <div className="flex-1 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 py-2">
                <OnyxPreview />
              </div>

              {/* Stack */}
              <div className="mt-auto pt-2 flex flex-wrap gap-2 relative z-20">
                <TechBadge name="Next.js" />
                <TechBadge name="Tailwind CSS" />
                <TechBadge name="TypeScript" />
              </div>
            </div>
            {/* Glow ONYX */}
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#C5A086]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
          </div>


          {/* --- 2. PROJET SECONDAIRE : CE PORTFOLIO (1x2 Vertical) --- */}
          <div className={`group relative lg:row-span-2 bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "100ms" }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <div>
                    <h3 className="text-white font-display text-lg font-bold uppercase tracking-wide">Portfolio</h3>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Personal Branding</span>
                </div>
                <Link href="#" aria-label="Portfolio Link" className="p-3 bg-white/5 rounded-full hover:bg-[#C5A086] hover:text-black transition-all group-hover:scale-110 shrink-0">
                  <FiArrowUpRight className="w-5 h-5 text-white" />
                </Link>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                  <PortfolioMockup />
              </div>
              
              <p className="text-zinc-500 text-xs mt-4 mb-3 leading-relaxed">
                  Design sombre, Bento Grid, Micro-interactions et animations Framer Motion.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                  <TechBadge name="React" />
                  <TechBadge name="Framer Motion" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* --- 3. PERFORMANCE & SEO (Compétence) --- */}
          <div className={`group relative bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "200ms" }}>
            <div className="flex flex-col h-full justify-between">
              <h3 className="text-white font-display text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                <FiZap className="text-emerald-400" /> Performance
              </h3>
              
              <div className="flex-1 flex items-center justify-center">
                  <LighthousePreview />
              </div>
              
              <p className="text-[10px] text-zinc-500 text-center">Scores Lighthouse optimisés</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* --- 4. STACK TECHNIQUE (Résumé) --- */}
          <div className={`group relative md:col-span-2 bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "300ms" }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-white font-display text-sm font-bold uppercase tracking-wide">Stack Technique</h3>
                 <span className="text-[10px] text-zinc-500">2024 - 2025</span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-wrap gap-4 justify-center">
                  {Object.entries(techIcons).slice(0, 5).map(([name, { icon: Icon, color }]) => (
                    <div key={name} className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group/icon">
                      <Icon className="w-6 h-6 transition-colors duration-300 grayscale group-hover/icon:grayscale-0" style={{ color: "inherit" }} />
                      {/* Note: Pour la couleur au survol, on laisse le style inline gérer ou on retire le grayscale */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
             <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

        </div>

        {/* FOOTER LIEN */}
        <div className="mt-10 sm:mt-16 text-center">
          <Link href="https://github.com/rdnzda" target="_blank" className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full text-zinc-300 text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group">
            <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Voir mon GitHub</span>
          </Link>
        </div>

      </div>
    </section>
  );
}