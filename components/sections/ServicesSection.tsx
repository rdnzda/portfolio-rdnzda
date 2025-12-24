"use client";

import { useInView } from "@/hooks/useInView";
import { 
  Code, 
  Palette, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Star
} from "lucide-react";

// --- DONNÉES ---
const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Transformation de maquettes en sites web performants, interactifs et pixel-perfect.",
    features: [
        "Sites Vitrines (Présentation)", // Au lieu de E-commerce
        "Landing Pages (Conversion)",    // C'est ça, la page unique pour vendre un produit/service
        "Applications Web (React/Next.js)", 
        "Code propre & maintenable"
    ],
    isFeatured: true 
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Conception d'interfaces modernes centrées sur l'expérience utilisateur et l'esthétique.",
    features: ["Maquettage (Figma)", "Design Systems", "Prototypage Interactif", "Animations fluides"],
    isFeatured: false
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "Optimisation technique pour garantir une visibilité maximale et un chargement instantané.",
    features: ["Audit de Performance", "SEO Technique & Sémantique", "Accessibilité (RGAA)", "Responsive Mobile First"],
    isFeatured: false
  }
];

export default function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="relative z-10 min-h-screen w-full py-20 sm:py-32 px-4 sm:px-8 lg:px-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 md:mb-24 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-foreground/20"></div>
             <span className="text-foreground/60 text-xs uppercase tracking-[0.2em] font-sans">
               Ce que je propose
             </span>
          </div>
          
          <h2 className="font-syncopate text-3xl sm:text-5xl md:text-6xl text-foreground font-bold uppercase tracking-tight">
            Mes Expertises
          </h2>
        </div>

        {/* --- GRID SERVICES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                group relative p-8 rounded-2xl backdrop-blur-sm
                /* VITESSE DE TRANSITION : Passée à duration-300 pour plus de réactivité */
                transition-all duration-300 ease-out
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                
                bg-zinc-900/60
                
                ${service.isFeatured 
                    /* FEATURED : bg-zinc-800 par défaut, devient zinc-700 au hover */
                    ? "border border-foreground shadow-2xl shadow-foreground/5 scale-[1.02] bg-zinc-800 hover:bg-zinc-700" 
                    /* STANDARD : transparent par défaut, devient zinc-800 au hover */
                    : "border border-white/10 hover:border-foreground/50 hover:bg-zinc-800"
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              
              {/* BADGE "CORE" */}
              {service.isFeatured && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <div className="bg-foreground text-background text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Core</span>
                    </div>
                </div>
              )}

              {/* Icône */}
              <div className={`
                w-12 h-12 border flex items-center justify-center mb-6 transition-all duration-300
                ${service.isFeatured 
                    ? "bg-foreground text-background border-foreground" 
                    : "border-foreground/20 group-hover:bg-foreground group-hover:text-background" 
                }
              `}>
                <service.icon className={`w-5 h-5 transition-colors ${service.isFeatured ? "text-background" : "text-foreground group-hover:text-background"}`} />
              </div>

              {/* Titre */}
              <h3 className="text-xl text-foreground font-bold mb-3 font-syncopate uppercase tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-8 font-sans">
                {service.description}
              </p>

              {/* Liste des features */}
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm font-sans transition-opacity ${service.isFeatured ? "text-foreground opacity-90" : "text-foreground/50 group-hover:text-foreground"}`}>
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${service.isFeatured ? "text-foreground" : "opacity-50 group-hover:opacity-100"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- BANDEAU BAS (CTA) --- */}
        <div className={`mt-16 md:mt-24 pt-10 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <p className="text-foreground/60 text-sm md:text-base max-w-xl text-center md:text-left font-sans">
                Chaque projet est unique. Je m'adapte à vos besoins spécifiques pour délivrer une solution sur-mesure.
            </p>
            <a 
                href="#contact"
                className="group flex items-center gap-2 text-foreground font-bold uppercase tracking-wider text-xs border-b border-foreground/20 pb-1 hover:border-foreground transition-all font-sans"
            >
                Demander un devis
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  )
}