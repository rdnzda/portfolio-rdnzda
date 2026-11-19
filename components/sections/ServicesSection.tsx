import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface Domaine {
  tag: string;
  title: string;
  description: string;
  evidence: string[];
}

const domaines: Domaine[] = [
  {
    tag: "Spécialisation visée",
    title: "Cybersécurité & réseaux",
    description: "Comprendre comment les systèmes communiquent, et comment les protéger.",
    evidence: [
      "Bases des réseaux (cours de L3)",
      "Wireshark, machines virtuelles",
      "Autoformation sur TryHackMe",
    ],
  },
  {
    tag: "Mis en pratique en projet",
    title: "Développement sécurisé",
    description: "Des applications web pensées avec la sécurité dès le départ.",
    evidence: [
      "Authentification et droits d'accès",
      "Hachage des mots de passe (bcrypt), JWT",
      "Protection CSRF, limitation des tentatives",
      "Audit de sécurité de mon propre code",
    ],
  },
  {
    tag: "Validé en licence",
    title: "Systèmes & programmation",
    description: "Des bases solides sous le capot.",
    evidence: [
      "Linux, terminal et Bash",
      "Système Unix : 19,75/20",
      "Programmation en C, C++, Java, Python, OCaml",
      "Git, Docker (bases)",
    ],
  },
];

type StepStatus = "terminé" | "en cours" | "prévu";

const tryhackme: { name: string; status: StepStatus }[] = [
  { name: "Pre Security", status: "terminé" },
  { name: "Cyber Security 101", status: "en cours" },
  { name: "SOC Level 1", status: "prévu" },
  { name: "Jr Penetration Tester", status: "prévu" },
];

const outils: { category: string; items: string[] }[] = [
  { category: "Langages", items: ["C", "C++", "Java", "Python", "OCaml", "JavaScript", "TypeScript"] },
  { category: "Web", items: ["Django", "Next.js", "React", "Node.js"] },
  { category: "Données", items: ["PostgreSQL", "MongoDB"] },
  { category: "Systèmes & outils", items: ["Linux", "Bash", "Git", "Docker (bases)", "Wireshark", "Machines virtuelles"] },
];

const statusStyles: Record<StepStatus, { bar: string; text: string }> = {
  "terminé": { bar: "bg-accent", text: "text-accent" },
  "en cours": { bar: "bg-[linear-gradient(90deg,var(--accent)_50%,var(--border)_50%)]", text: "text-foreground" },
  "prévu": { bar: "bg-border", text: "text-muted-foreground" },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          label="Compétences"
          title="Ce que je sais faire"
          intro="Trois domaines, et pour chacun ce qui le prouve : un projet, une note ou un parcours suivi."
        />

        {/* --- DOMAINES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {domaines.map((d, i) => (
            <Reveal
              as="article"
              key={d.title}
              delay={i * 80}
              className={`py-8 md:px-6 border-b md:border-b-0 border-border ${i > 0 ? "md:border-l" : "md:pl-0"} ${i === domaines.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-mono text-[11px] text-muted-foreground">
                <span className="text-accent">{String.fromCharCode(65 + i)}</span> — {d.tag}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {d.evidence.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span aria-hidden className="text-accent">—</span>
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* --- PARCOURS TRYHACKME --- */}
        <Reveal className="mt-20 grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <h3 className="font-mono text-xs text-muted-foreground">Parcours TryHackMe</h3>
            <Link
              href="https://tryhackme.com/p/rdnzda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
            >
              Voir mon profil ↗
            </Link>
          </div>
          <ol className="col-span-12 md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6">
            {tryhackme.map((step, i) => (
              <li key={step.name}>
                <div className={`h-1 ${statusStyles[step.status].bar}`} />
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">Étape {i + 1}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{step.name}</p>
                <p className={`mt-1 font-mono text-[11px] ${statusStyles[step.status].text}`}>{step.status}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* --- BOÎTE À OUTILS --- */}
        <Reveal className="mt-20 grid grid-cols-12 gap-x-6 gap-y-6">
          <h3 className="col-span-12 md:col-span-3 font-mono text-xs text-muted-foreground">Boîte à outils</h3>
          <dl className="col-span-12 md:col-span-9 border-t border-border">
            {outils.map((group) => (
              <div key={group.category} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-4 border-b border-border">
                <dt className="text-sm text-muted-foreground">{group.category}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="font-mono text-xs text-foreground border border-border px-2 py-1">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* --- CTA --- */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-foreground pt-6">
          <p className="text-base text-foreground max-w-xl">
            Je recherche un stage en cybersécurité à partir du 18 mai 2027 (jusqu&apos;à 3,5 mois),
            puis une alternance bac+5.
          </p>
          <Link href="#contact" className="text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent">
            Me contacter →
          </Link>
        </div>
      </div>
    </section>
  );
}
