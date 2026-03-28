"use client";

import { useInView } from "@/hooks/useInView";
import { Code, Palette, Zap, ArrowRight } from "lucide-react";
import { RevealServiceCard, ServiceCardBody } from "@/components/ui/animated-service-card";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Transformation de maquettes en sites web performants, interactifs et pixel-perfect.",
    features: [
      "Sites Vitrines (Présentation)",
      "Landing Pages (Conversion)",
      "Applications Web (React/Next.js)",
      "Code propre & maintenable",
    ],
    badge: "Core",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Conception d'interfaces modernes centrées sur l'expérience utilisateur et l'esthétique.",
    features: ["Maquettage (Figma)", "Design Systems", "Prototypage Interactif", "Animations fluides"],
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "Optimisation technique pour garantir une visibilité maximale et un chargement instantané.",
    features: ["Audit de Performance", "SEO Technique & Sémantique", "Accessibilité (RGAA)", "Responsive Mobile First"],
  },
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
        {/* items-stretch ensures all cards share the same height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className={`h-full transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <RevealServiceCard
                base={
                  <ServiceCardBody
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    badge={service.badge}
                    scheme="plain"
                  />
                }
                overlay={
                  <ServiceCardBody
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    badge={service.badge}
                    scheme="accented"
                    cardCss={{
                      backgroundColor: "var(--foreground)",
                      "--on-accent-foreground": "var(--background)",
                    } as React.CSSProperties}
                  />
                }
              />
            </div>
          ))}
        </div>

        {/* --- BANDEAU BAS (CTA) --- */}
        <div className={`mt-16 md:mt-24 pt-10 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <p className="text-foreground/60 text-sm md:text-base max-w-xl text-center md:text-left font-sans">
            Chaque projet est unique. Je m&apos;adapte à vos besoins spécifiques pour délivrer une solution sur-mesure.
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
  );
}
