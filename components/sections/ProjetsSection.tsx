"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { FiGithub, FiShoppingCart, FiHeart, FiStar, FiUsers, FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { BiChart } from "react-icons/bi";
import { IconType } from "react-icons";

// Mapping des technologies vers leurs icônes et couleurs
const techIcons: Record<string, { icon: IconType; color: string }> = {
  "react": { icon: SiReact, color: "#61DAFB" },
  "next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "typescript": { icon: SiTypescript, color: "#3178C6" },
  "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
  "node.js": { icon: SiNodedotjs, color: "#339933" },
  "mongodb": { icon: SiMongodb, color: "#47A248" },
  "chart.js": { icon: BiChart, color: "#FF6384" },
};

// Composant Badge Tech
function TechBadge({ name }: { name: string }) {
  const tech = techIcons[name.toLowerCase()];
  const Icon = tech?.icon;
  const color = tech?.color || "#ffffff";

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-md">
      {Icon && <Icon className="w-3 h-3" style={{ color }} />}
      <span className="text-[10px] text-zinc-400">{name}</span>
    </div>
  );
}

// ============================================
// MICRO-UI COMPONENTS POUR LE BENTO
// ============================================

// Carte Produit E-commerce
function ProductCard() {
  return (
    <div className="bg-zinc-800/50 rounded-xl p-3 border border-white/10 w-full max-w-[180px]">
      <div className="relative aspect-square rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 mb-3 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        <button className="absolute top-2 right-2 p-1.5 bg-black/40 rounded-full hover:bg-black/60 transition-colors">
          <FiHeart className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
      <p className="text-white text-xs font-medium mb-1 truncate">Air Max 90</p>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={`w-2.5 h-2.5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-600'}`} />
        ))}
        <span className="text-[10px] text-zinc-500 ml-1">(128)</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-sm">€149</span>
        <button className="p-1.5 bg-white rounded-lg hover:bg-zinc-200 transition-colors">
          <FiShoppingCart className="w-3.5 h-3.5 text-black" />
        </button>
      </div>
    </div>
  );
}

// Carte Stats Dashboard
function StatsCard({ label, value, trend, icon: Icon }: { label: string; value: string; trend: string; icon: IconType }) {
  return (
    <div className="bg-zinc-800/50 rounded-xl p-4 border border-white/10 flex-1 min-w-[120px]">
      <div className="flex items-center justify-between mb-2">
        <div className="p-2 bg-white/5 rounded-lg">
          <Icon className="w-4 h-4 text-zinc-400" />
        </div>
        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
          <FiTrendingUp className="w-2.5 h-2.5" />
          {trend}
        </span>
      </div>
      <p className="text-white text-xl font-bold">{value}</p>
      <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{label}</p>
    </div>
  );
}

// Mini Chart
function MiniChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

// Mockup Portfolio Mobile
function PortfolioMockup() {
  return (
    <div className="relative w-24 h-44 bg-zinc-900 rounded-2xl border-4 border-zinc-700 overflow-hidden shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-zinc-700 rounded-b-xl"></div>
      {/* Screen Content */}
      <div className="p-2 pt-5 h-full flex flex-col">
        <div className="w-full h-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-md mb-2"></div>
        <div className="flex-1 bg-zinc-800/50 rounded-lg p-2">
          <div className="w-full h-2 bg-zinc-700 rounded mb-1.5"></div>
          <div className="w-3/4 h-2 bg-zinc-700 rounded mb-3"></div>
          <div className="grid grid-cols-2 gap-1">
            <div className="aspect-square bg-zinc-700 rounded"></div>
            <div className="aspect-square bg-zinc-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SECTION PRINCIPALE BENTO GRID
// ============================================

interface ProjetsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ProjetsSection({
  title = "Projets",
  subtitle = "Mes réalisations",
}: ProjetsSectionProps) {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: bentoRef, isInView: bentoInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projets" className="relative z-10 min-h-screen w-full py-20 sm:py-32 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-4 group">
            <div className="h-[1px] w-10 sm:w-16 bg-white/40 transition-all duration-500 group-hover:w-24 group-hover:bg-white/60"></div>
            <span className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-colors duration-300 group-hover:text-zinc-300">
              {subtitle}
            </span>
          </div>

          <h2 className="font-syncopate text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-10 sm:mb-16">
            {title}
          </h2>
        </div>

        {/* BENTO GRID */}
        <div
          ref={bentoRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]"
        >
          
          {/* BENTO 1 - E-Commerce (Grande carte) */}
          <div
            className={`group relative md:col-span-2 lg:col-span-2 lg:row-span-2 bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${
              bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: bentoInView ? "0ms" : "0ms" }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-syncopate text-lg font-bold uppercase tracking-wide mb-1">
                    E-Commerce
                  </h3>
                  <p className="text-zinc-500 text-xs max-w-xs">
                    Plateforme complète avec panier, paiement Stripe et gestion des commandes
                  </p>
                </div>
                <Link
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <FiArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </div>

              {/* Micro-UI Preview */}
              <div className="flex-1 flex items-center justify-center">
                <ProductCard />
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                <TechBadge name="React" />
                <TechBadge name="Node.js" />
                <TechBadge name="MongoDB" />
              </div>
            </div>

            {/* Gradient Glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* BENTO 2 - Dashboard */}
          <div
            className={`group relative bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${
              bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: bentoInView ? "100ms" : "0ms" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-syncopate text-sm font-bold uppercase tracking-wide">
                  Dashboard
                </h3>
                <Link
                  href="#"
                  className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <FiArrowUpRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>

              {/* Mini Chart */}
              <div className="flex-1 flex flex-col justify-center">
                <MiniChart />
                <div className="flex justify-between mt-2 text-[9px] text-zinc-600">
                  <span>Lun</span>
                  <span>Mar</span>
                  <span>Mer</span>
                  <span>Jeu</span>
                  <span>Ven</span>
                  <span>Sam</span>
                  <span>Dim</span>
                </div>
              </div>

              <div className="flex gap-1.5 mt-3">
                <TechBadge name="React" />
                <TechBadge name="Chart.js" />
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* BENTO 3 - Stats Cards */}
          <div
            className={`group relative bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${
              bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: bentoInView ? "200ms" : "0ms" }}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-white font-syncopate text-sm font-bold uppercase tracking-wide mb-3">
                Analytics
              </h3>

              <div className="flex gap-2 flex-1">
                <StatsCard label="Utilisateurs" value="2.4k" trend="+12%" icon={FiUsers} />
              </div>

              <div className="flex gap-1.5 mt-3">
                <TechBadge name="TypeScript" />
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* BENTO 4 - Portfolio */}
          <div
            className={`group relative bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${
              bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: bentoInView ? "300ms" : "0ms" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-syncopate text-sm font-bold uppercase tracking-wide">
                  Portfolio
                </h3>
                <Link
                  href="#"
                  className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <FiArrowUpRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <PortfolioMockup />
              </div>

              <div className="flex gap-1.5 mt-3">
                <TechBadge name="Next.js" />
                <TechBadge name="Tailwind CSS" />
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* BENTO 5 - Tech Stack Overview */}
          <div
            className={`group relative md:col-span-2 bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${
              bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: bentoInView ? "400ms" : "0ms" }}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-white font-syncopate text-sm font-bold uppercase tracking-wide mb-4">
                Stack Technique
              </h3>

              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-wrap gap-4 justify-center">
                  {Object.entries(techIcons).slice(0, 6).map(([name, { icon: Icon, color }]) => (
                    <div
                      key={name}
                      className="group/icon p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 transition-colors duration-300" style={{ color }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

        </div>

        {/* BOUTON VOIR PLUS */}
        <div className="mt-10 sm:mt-16 text-center">
          <Link
            href="https://github.com/rdnzda"
            target="_blank"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full text-zinc-300 text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <FiGithub className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="hidden sm:inline">Voir plus sur GitHub</span>
            <span className="sm:hidden">GitHub</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
