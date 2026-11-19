import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface Projet {
  name: string;
  kind: string;
  summary: string;
  /** Libellé de la colonne de droite. */
  pointsLabel: "Côté sécurité" | "Fonctionnalités";
  points: string[];
  stack: string[];
  link?: { label: string; href: string };
}

const projets: Projet[] = [
  {
    name: "Agora360",
    kind: "Application web",
    summary:
      "Application web en Next.js avec une base PostgreSQL, avec un soin particulier pour l'authentification et le contrôle d'accès.",
    pointsLabel: "Côté sécurité",
    points: [
      "Mots de passe hachés avec bcrypt",
      "Gestion des rôles utilisateurs",
      "Limitation des tentatives de connexion",
      "En-têtes HTTP de sécurité",
    ],
    stack: ["Next.js", "PostgreSQL"],
  },
  {
    name: "API de notation",
    kind: "API",
    summary:
      "API en Node.js avec MongoDB. Une fois l'API écrite, j'ai mené un audit de sécurité de mon propre code.",
    pointsLabel: "Côté sécurité",
    points: [
      "Authentification par JWT",
      "Mots de passe hachés avec bcrypt",
      "Audit de sécurité du code",
    ],
    stack: ["Node.js", "MongoDB"],
  },
  {
    name: "Bonnes Lectures",
    kind: "Application web",
    summary:
      "Application web en Django, avec gestion des comptes et des droits d'accès.",
    pointsLabel: "Côté sécurité",
    points: [
      "Authentification des utilisateurs",
      "Droits d'accès",
      "Protection CSRF",
    ],
    stack: ["Python", "Django"],
  },
  {
    name: "ONYX Detailing",
    kind: "Site vitrine · projet démo",
    summary:
      "Site vitrine pour une entreprise fictive de detailing automobile, réalisé pour mon portfolio.",
    pointsLabel: "Fonctionnalités",
    points: ["Calculateur de prix", "Animations", "Pages légales (RGPD, CGV)"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: { label: "Voir le site", href: "https://onyx-detailling.vercel.app/" },
  },
  {
    name: "Ce portfolio",
    kind: "Site personnel",
    summary: "Le site que vous lisez, conçu, développé et déployé par mes soins.",
    pointsLabel: "Fonctionnalités",
    points: [
      "Formulaire de contact (Formspree)",
      "Mentions légales et politique de confidentialité",
      "Déployé sur Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export default function ProjetsSection() {
  const securityCount = projets.filter((p) => p.pointsLabel === "Côté sécurité").length;

  return (
    <section id="projets" className="relative w-full py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="01"
          label="Projets"
          title="Ce que j'ai construit"
          intro={`${projets.length} projets, dont ${securityCount} où la sécurité était au cœur du travail : authentification, contrôle d'accès, protection contre les attaques courantes.`}
        />

        {/* En-têtes de colonnes (desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-6 pb-3 border-b border-border font-mono text-[11px] text-muted-foreground">
          <span className="col-span-1">N°</span>
          <span className="col-span-4">Projet</span>
          <span className="col-span-4">Description</span>
          <span className="col-span-3">Détails</span>
        </div>

        <ol>
          {projets.map((projet, i) => {
            const isSecurity = projet.pointsLabel === "Côté sécurité";
            return (
              <Reveal
                as="li"
                key={projet.name}
                delay={i * 60}
                className="group grid grid-cols-12 gap-x-6 gap-y-4 py-8 sm:py-10 border-b border-border"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-foreground">
                    {projet.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {projet.kind}
                    {isSecurity && <span className="text-accent"> · sécurité</span>}
                  </p>
                  {projet.link && (
                    <Link
                      href={projet.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
                    >
                      {projet.link.label} ↗
                    </Link>
                  )}
                </div>

                <div className="col-span-12 md:col-span-4 md:col-start-6 col-start-1">
                  <p className="text-base leading-relaxed text-foreground/85">{projet.summary}</p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground">
                    {projet.stack.join(" / ")}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-[11px] text-muted-foreground mb-2">{projet.pointsLabel}</p>
                  <ul className="space-y-1.5 text-sm text-foreground">
                    {projet.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden className={isSecurity ? "text-accent" : "text-muted-foreground"}>
                          —
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Mes autres dépôts sont sur GitHub.
          </p>
          <Link
            href="https://github.com/rdnzda"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
          >
            github.com/rdnzda ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
