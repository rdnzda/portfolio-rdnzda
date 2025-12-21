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
  SiCss3,
  SiGit,
  SiPython,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";
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
  description = "Actuellement étudiant en informatique à l'UFR Sciences et Techniques de Orléans, je poursuis une licence en informatique tout en me formant au développement web. Passionné par la création de sites web modernes et fonctionnels, j'ai acquis des compétences solides en développement front-end et back-end. En parallèle de mes études, je travaille en tant que développeur et designer web freelance, ce qui me permet de mettre en pratique mes connaissances et de collaborer avec divers clients sur des projets variés.",
  skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
  experience = [
    { year: "2024", title: "Formation Développeur & Intégrateur Web", description: "Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles au niveau 5 (code 326t) par décision de France compétences publiée le 15 décembre 2021.", company: "OpenClassrooms" },
    { year: "2024-2027", title: "Licence Informatique", description: "Actuellement étudiant en informatique à l'UFR Sciences et Techniques de Orléans.", company: "UFR Sciences et Techniques de Orléans" },
    { year: "2026", title: "Développeur & Designer Web Freelance", company: "Auto-entrepreneur" },
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
          <div className="h-[1px] w-10 sm:w-16 bg-white/40 transition-all duration-500 group-hover:w-24 group-hover:bg-white/60"></div>
          <span className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-colors duration-300 group-hover:text-zinc-300">
            {subtitle}
          </span>
        </div>

        <h2 
          className={`font-syncopate text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-10 sm:mb-16 transition-all duration-700 delay-100 hover:tracking-tight ${
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
            <p className="text-zinc-300 text-lg leading-relaxed transition-colors duration-300 hover:text-zinc-200">
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
            <h3 className="text-white font-syncopate text-sm uppercase tracking-widest mb-8 transition-all duration-300 hover:tracking-[0.2em]">
              Parcours
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className={`group relative pl-8 border-l border-white/20 hover:border-white/60 transition-all duration-500 hover:pl-10 cursor-pointer ${
                    expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: expInView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[4.5px] bg-zinc-600 group-hover:bg-white group-hover:scale-150 transition-all duration-300"></div>
                  
                  <span className="text-zinc-500 text-xs uppercase tracking-widest transition-colors duration-300 group-hover:text-zinc-400">
                    {exp.year}
                  </span>
                  <h4 className="text-white text-lg font-medium mt-1 transition-all duration-300 group-hover:translate-x-1">
                    {exp.title}
                  </h4>
                  {exp.company && (
                    <span className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      {exp.company}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* COMPETENCES / SKILLS EN SLIDER */}      
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-16 border-t border-white/10 overflow-hidden">
          <h3 className="text-white font-syncopate text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">
            Compétences
          </h3>
          
          {/* Slider infini */}
          <div className="relative">
            
            <div className="flex animate-scroll-left">
              {/* Premier groupe */}
              <div className="flex mb-1 shrink-0 gap-6 pr-6">
                {skills.map((skill, index) => (
                  <div
                    key={`a-${index}`}
                    className="group flex items-center gap-4 px-5 py-3 whitespace-nowrap"
                  >
                    <skill.icon 
                      className="w-5 h-5 text-zinc-400 transition-all duration-300"
                      style={{ 
                        color: skill.color || '#fff'
                      }}
                    />
                    <span className="text-zinc-300 text-sm uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Deuxième groupe (duplicate pour boucle infinie) */}
              <div className="flex shrink-0 gap-6 pr-6">
                {skills.map((skill, index) => (
                  <div
                    key={`b-${index}`}
                    className="group flex items-center gap-4 px-5 py-3 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <skill.icon 
                      className="w-5 h-5 text-zinc-400 transition-all duration-300"
                      style={{ 
                        color: skill.color || '#fff' 
                      }}
                    />
                    <span className="text-zinc-300 text-sm uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CHIFFRES / STATS (optionnel) */}
        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`mt-24 pt-16 border-t border-white/10 transition-all duration-700 hover:border-white/20 ${
            statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3+", label: "Années de Pratique" },
              { value: "10+", label: "Projets réalisés" },
              { value: "100%", label: "Engagé" },
              { value: "∞", label: "Passion", rotate: true },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 ${
                  statsInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: statsInView ? `${index * 100}ms` : "0ms" }}
              >
                <div className={`text-4xl md:text-5xl font-bold text-white font-syncopate transition-all duration-300 group-hover:scale-110 group-hover:text-zinc-200 ${stat.rotate ? "group-hover:rotate-180" : ""}`}>
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest mt-2 transition-colors duration-300 group-hover:text-zinc-400">
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
