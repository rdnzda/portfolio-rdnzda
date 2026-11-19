"use client";

import { useInView } from "@/hooks/useInView";
import { Code, Shield, Terminal, ArrowRight } from "lucide-react";
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
    icon: Shield,
    title: "Cybersécurité & réseaux",
    description: "Ma spécialisation en cours : comprendre comment les systèmes communiquent et comment les protéger.",
    features: [
      "Bases des réseaux (cours de L3)",
      "TryHackMe : Pre Security terminé",
      "Cyber Security 101 en cours",
      "Wireshark, machines virtuelles",
    ],
    badge: "Objectif",
  },
  {
    icon: Code,
    title: "Développement sécurisé",
    description: "Des applications web pensées avec la sécurité dès le départ.",
    features: [
      "Authentification et droits d'accès",
      "Mots de passe hachés (bcrypt)",
      "Protection CSRF, limitation des tentatives",
      "Django, Next.js, Node.js, PostgreSQL",
    ],
  },
  {
    icon: Terminal,
    title: "Systèmes & programmation",
    description: "Des bases solides sous le capot, validées par mes résultats en licence.",
    features: [
      "Linux, terminal et Bash",
      "Système Unix : 19,75/20",
      "C, C++, Java, Python, OCaml",
      "Git, Docker (bases)",
    ],
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
              Ce que je sais faire
            </span>
          </div>
          <h2 className="font-syncopate text-3xl sm:text-5xl md:text-6xl text-foreground font-bold uppercase tracking-tight">
            Compétences
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
            Je recherche un stage en cybersécurité à partir du 18 mai 2027 (jusqu&apos;à 3,5 mois), puis une alternance bac+5 en cybersécurité.
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-foreground font-bold uppercase tracking-wider text-xs border-b border-foreground/20 pb-1 hover:border-foreground transition-all font-sans"
          >
            Me contacter
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
