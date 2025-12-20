"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFigma,
  SiGit,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiRedux,
  SiSass,
  SiVite,
  SiExpress,
  SiMysql,
  SiSupabase,
  SiStripe
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiChart } from "react-icons/bi";
import { IconType } from "react-icons";

// Mapping des technologies vers leurs icônes et couleurs
const techIcons: Record<string, { icon: IconType; color: string }> = {
  "react": { icon: SiReact, color: "#61DAFB" },
  "next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "nextjs": { icon: SiNextdotjs, color: "#ffffff" },
  "typescript": { icon: SiTypescript, color: "#3178C6" },
  "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
  "tailwindcss": { icon: SiTailwindcss, color: "#06B6D4" },
  "node.js": { icon: SiNodedotjs, color: "#339933" },
  "nodejs": { icon: SiNodedotjs, color: "#339933" },
  "mongodb": { icon: SiMongodb, color: "#47A248" },
  "javascript": { icon: SiJavascript, color: "#F7DF1E" },
  "html5": { icon: SiHtml5, color: "#E34F26" },
  "html": { icon: SiHtml5, color: "#E34F26" },
  "css3": { icon: SiCss3, color: "#1572B6" },
  "css": { icon: SiCss3, color: "#1572B6" },
  "python": { icon: SiPython, color: "#3776AB" },
  "figma": { icon: SiFigma, color: "#F24E1E" },
  "git": { icon: SiGit, color: "#F05032" },
  "postgresql": { icon: SiPostgresql, color: "#4169E1" },
  "prisma": { icon: SiPrisma, color: "#2D3748" },
  "firebase": { icon: SiFirebase, color: "#FFCA28" },
  "vercel": { icon: SiVercel, color: "#ffffff" },
  "docker": { icon: SiDocker, color: "#2496ED" },
  "redux": { icon: SiRedux, color: "#764ABC" },
  "sass": { icon: SiSass, color: "#CC6699" },
  "vite": { icon: SiVite, color: "#646CFF" },
  "express": { icon: SiExpress, color: "#ffffff" },
  "mysql": { icon: SiMysql, color: "#4479A1" },
  "supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "stripe": { icon: SiStripe, color: "#635BFF" },
  "framer motion": { icon: TbBrandFramerMotion, color: "#0055FF" },
  "chart.js": { icon: BiChart, color: "#FF6384" },
};

// Composant Badge
function TechBadge({ name }: { name: string }) {
  const tech = techIcons[name.toLowerCase()];
  const Icon = tech?.icon;
  const color = tech?.color || "#ffffff";

  return (
    <div className="group/badge flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-default">
      {Icon && (
        <Icon 
          className="w-3.5 h-3.5 text-zinc-500 transition-colors duration-300 group-hover/badge:text-current"
          style={{ "--hover-color": color } as React.CSSProperties}
          onMouseEnter={(e) => (e.currentTarget.style.color = color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
        />
      )}
      <span className="text-xs uppercase tracking-wider text-zinc-400 group-hover/badge:text-zinc-300 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

interface Projet {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjetsSectionProps {
  title?: string;
  subtitle?: string;
  projets?: Projet[];
}

export default function ProjetsSection({
  title = "Projets",
  subtitle = "Mes réalisations",
  projets = [
    {
      title: "Portfolio Personnel",
      description: "Site portfolio moderne avec Next.js, Tailwind CSS et des animations fluides.",
      image: "/img/projets/portfolio.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
      image: "/img/projets/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dashboard Admin",
      description: "Interface d'administration avec graphiques, statistiques et gestion utilisateurs.",
      image: "/img/projets/dashboard.jpg",
      tags: ["React", "TypeScript", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
}: ProjetsSectionProps) {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: projetsRef, isInView: projetsInView } = useInView({ threshold: 0.1 });

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

        {/* GRILLE PROJETS */}
        <div
          ref={projetsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projets.map((projet, index) => (
            <div
              key={index}
              className={`group relative bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden transition-all duration-700 hover:border-white/30 hover:-translate-y-2 ${
                projetsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: projetsInView ? `${index * 150}ms` : "0ms" }}
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={projet.image}
                  alt={projet.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                
                {/* OVERLAY LIENS */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {projet.liveUrl && (
                    <Link
                      href={projet.liveUrl}
                      target="_blank"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                      <FiExternalLink className="w-5 h-5 text-white" />
                    </Link>
                  )}
                  {projet.githubUrl && (
                    <Link
                      href={projet.githubUrl}
                      target="_blank"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                      <FiGithub className="w-5 h-5 text-white" />
                    </Link>
                  )}
                </div>
              </div>

              {/* CONTENU */}
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-syncopate text-base sm:text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-zinc-200 transition-colors duration-300">
                  {projet.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {projet.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {projet.tags.map((tag, tagIndex) => (
                    <TechBadge key={tagIndex} name={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
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
