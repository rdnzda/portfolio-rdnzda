"use client";

import { useInView } from "@/hooks/useInView";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiLinux,
  SiDjango,
  SiDocker,
  SiWireshark
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color?: string; // couleur au hover
}

interface BiographieSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: Skill[];
  experience?: {
    year: string;
    title: string;
    description?: string;
    company?: string;
  }[];
}

export default function BiographieSection({
  title = "À propos",
  subtitle = "Qui suis-je ?",
  description = "Étudiant en L3 Informatique à l'UFR Sciences et Techniques d'Orléans (4e de promotion en L2), je m'oriente vers la cybersécurité : réseaux, systèmes Linux et sécurité des applications web. En parallèle de mes cours, je me forme en autonomie sur TryHackMe. Je recherche un stage en cybersécurité à partir du 18 mai 2027, que je souhaite prolonger par une alternance bac+5 dans ce domaine. À côté, je crée des vidéos courtes pour TikTok, avec des outils de montage automatisé.",
  skills = [
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#44B78B" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ],
  experience = [
    { year: "2024 – 2027", title: "Licence Informatique, parcours ingénierie", description: "4e de promotion en L2, 1er au semestre 3.", company: "UFR Sciences et Techniques d'Orléans" },
    { year: "2026", title: "Autoformation en cybersécurité", description: "Pre Security terminé, Cyber Security 101 en cours.", company: "TryHackMe" },
    { year: "2026", title: "Auto-entrepreneur, création de contenu vidéo", company: "Vidéos courtes pour TikTok" },
    { year: "2023 – 2024", title: "Diplôme d'Intégrateur Web (RNCP niveau 5, bac+2)", company: "OpenClassrooms" },
  ]
}: BiographieSectionProps) {
  
  // Hooks pour les animations au scroll
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.2 });
  const { ref: expRef, isInView: expInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });

  return (
    <section id="biographie" className="relative z-10 min-h-screen w-full py-20 sm:py-32 px-4 sm:px-8 lg:px-20">
      
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto">
        
        {/* Titre avec ligne décorative */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex items-center gap-4 sm:gap-6 mb-4 group transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-[1px] w-10 sm:w-16 bg-zinc-900/30 dark:bg-white/40 transition-all duration-500 group-hover:w-24 group-hover:bg-zinc-900/50 dark:group-hover:bg-white/60"></div>
          <span className="text-zinc-500 dark:text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-colors duration-300 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
            {subtitle}
          </span>
        </div>

        <h2 
          className={`font-syncopate text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-foreground mb-10 sm:mb-16 transition-all duration-700 delay-100 hover:tracking-tight ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h2>

        {/* CONTENU PRINCIPAL - GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          
          {/* COLONNE GAUCHE - Description */}
          <div 
            ref={descRef as React.RefObject<HTMLDivElement>}
            className={`space-y-8 transition-all duration-700 content-center ${
              descInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed transition-colors duration-300 hover:text-zinc-800 dark:hover:text-zinc-200">
              {description}
            </p>
          </div>

          {/* COLONNE DROITE - Expérience */}
          <div
            ref={expRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-200 ${
              expInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-foreground font-syncopate text-sm uppercase tracking-widest mb-8 transition-all duration-300 hover:tracking-[0.2em]">
              Parcours
            </h3>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative pl-8 border-l border-zinc-300 dark:border-white/20 hover:border-zinc-500 dark:hover:border-white/60 transition-all duration-500 hover:pl-10 cursor-pointer ${
                    expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: expInView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[4.5px] bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:scale-150 transition-all duration-300"></div>

                  <span className="text-zinc-500 text-xs uppercase tracking-widest transition-colors duration-300 group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
                    {exp.year}
                  </span>
                  <h4 className="text-zinc-900 dark:text-white text-lg font-medium mt-1 transition-all duration-300 group-hover:translate-x-1">
                    {exp.title}
                  </h4>
                  {exp.company && (
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                      {exp.company}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* COMPETENCES / SKILLS EN SLIDER */}      
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-16 border-t border-zinc-200 dark:border-white/10 overflow-hidden">
          <h3 className="text-foreground font-syncopate text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">
            Compétences
          </h3>
          
          {/* Slider infini */}
          {/* SLIDER INFINI OPTIMISÉ */}
        <div className="relative w-full overflow-hidden mask-gradient-sides">
            {/* mask-gradient-sides est une classe utilitaire optionnelle pour faire un fondu sur les bords */}
            
            <div 
              className="flex w-max animate-scroll-left hover:pause"
              style={{ animationDuration: '60s' }} // Réglage vitesse ici (20s = plus rapide)
            >
              {/* On répète la liste 4 fois pour être sûr que ça boucle parfaitement sur tous les écrans */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex shrink-0 gap-8 pr-8">
                  {skills.map((skill, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group flex items-center gap-3 px-4 py-2 border border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-900/20 rounded-full backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
                    >
                      <skill.icon
                        className="w-4 h-4 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-white"
                        style={{ color: skill.color }}
                      />
                      <span className="text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CHIFFRES / STATS (optionnel) */}
        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`mt-24 pt-16 border-t border-zinc-200 dark:border-white/10 transition-all duration-700 hover:border-zinc-300 dark:hover:border-white/20 ${
            statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4e", label: "Promo L2" },
              { value: "19,75", label: "/20 en système Unix" },
              { value: "25", label: "Dépôts GitHub" },
              { value: "C1", label: "En anglais" },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 ${
                  statsInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: statsInView ? `${index * 100}ms` : "0ms" }}
              >
                <div className={`text-4xl md:text-5xl font-bold text-foreground font-syncopate transition-all duration-300 group-hover:scale-110 group-hover:text-zinc-600 dark:group-hover:text-zinc-200`}>
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest mt-2 transition-colors duration-300 group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
