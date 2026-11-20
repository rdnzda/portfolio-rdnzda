import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

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
      "Sécurité applicative web",
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
      "Rôles vérifiés côté serveur, en-têtes HTTP",
      "Protection CSRF, limitation des inscriptions",
    ],
  },
  {
    tag: "Acquis en licence",
    title: "Systèmes & programmation",
    description: "Des bases solides sous le capot.",
    evidence: [
      "Linux (Ubuntu), terminal et Bash, Windows",
      "Programmation système Unix (processus)",
      "C, C++, Java, Python, OCaml, SQL",
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
  { category: "Langages", items: ["C", "C++", "Java", "Python", "OCaml", "SQL", "JavaScript", "TypeScript"] },
  { category: "Web", items: ["Django", "Dream (OCaml)", "React", "Next.js", "Node.js", "Express", "HTML/CSS"] },
  { category: "Données", items: ["PostgreSQL", "MongoDB"] },
  { category: "Systèmes", items: ["Linux (Ubuntu)", "Bash", "Windows", "Wireshark", "Machines virtuelles", "Docker (bases)"] },
  { category: "Outils", items: ["Git/GitHub", "Bitbucket", "VS Code", "IntelliJ"] },
  { category: "IA", items: ["Claude Code (agents, consignes, skills)", "Prompt engineering", "Grok Imagine", "ElevenLabs", "Remotion"] },
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
          title="Ce que je sais faire"
          intro="Trois domaines, et pour chacun ce qui le prouve : un projet, un cours ou un parcours suivi."
        />

        {/* Domaines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {domaines.map((d) => (
            <article key={d.title}>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{d.title}</h3>
              <p className="mt-1 text-sm text-accent">{d.tag}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {d.evidence.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span aria-hidden className="text-muted-foreground">–</span>
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Parcours TryHackMe : une vraie séquence, donc numérotée */}
        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg font-semibold text-foreground">Parcours TryHackMe</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-[40ch]">
              Objectif d&apos;ici mai 2027 : valider Cyber Security 101, puis SOC Level 1 et Jr Penetration Tester.
            </p>
            <Link
              href="https://tryhackme.com/p/rdnzda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
            >
              Voir mon profil TryHackMe
            </Link>
          </div>
          <ol className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6">
            {tryhackme.map((step, i) => (
              <li key={step.name}>
                <div className={`h-1.5 ${statusStyles[step.status].bar}`} />
                <p className="mt-3 text-sm font-medium text-foreground">
                  <span className="text-muted-foreground tabular-nums">{i + 1}.</span> {step.name}
                </p>
                <p className={`mt-1 text-xs ${statusStyles[step.status].text}`}>{step.status}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Boîte à outils */}
        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-6">
          <h3 className="col-span-12 md:col-span-4 text-lg font-semibold text-foreground">Boîte à outils</h3>
          <dl className="col-span-12 md:col-span-8">
            {outils.map((group) => (
              <div key={group.category} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 py-4 border-b border-border first:pt-0">
                <dt className="text-sm text-muted-foreground">{group.category}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="font-mono text-xs text-foreground bg-card border border-border px-2 py-1">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
