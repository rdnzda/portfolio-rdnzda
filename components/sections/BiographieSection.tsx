import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const paragraphs = [
  "Étudiant en L3 Informatique à l'UFR Sciences et Techniques d'Orléans, je m'oriente vers la cybersécurité : réseaux, systèmes Linux et sécurité des applications web.",
  "En parallèle de mes cours, je me forme en autonomie sur TryHackMe. Je recherche un stage en cybersécurité à partir du 18 mai 2027, que je souhaite prolonger par une alternance bac+5 dans ce domaine dès septembre 2027.",
  "À côté, je crée des vidéos courtes pour TikTok, avec des outils de montage automatisé.",
];

interface Entry {
  year: string;
  title: string;
  place: string;
  detail?: string;
}

const formation: Entry[] = [
  {
    year: "2024 – auj.",
    title: "Licence Informatique, parcours ingénierie",
    place: "UFR Sciences et Techniques, Université d'Orléans",
    detail: "L3 : réseaux, C, C++ et Java, algorithmique, conception orientée objet, frameworks web (Django, Dream), logique et lambda-calcul.",
  },
  {
    year: "2026",
    title: "Autoformation en cybersécurité",
    place: "TryHackMe",
    detail: "Pre Security terminé, Cyber Security 101 en cours.",
  },
  {
    year: "2023 – 2024",
    title: "Diplôme d'Intégrateur Web (RNCP niveau 5, bac+2)",
    place: "OpenClassrooms",
    detail: "12 projets validés : sites responsives, React, API REST, Git, SEO, débogage.",
  },
];

const experience: Entry[] = [
  {
    year: "2026",
    title: "Auto-entrepreneur, création de contenu vidéo",
    place: "Vidéos courtes pour TikTok",
  },
  {
    year: "2025 – 2026",
    title: "Agent logistique / employé polyvalent",
    place: "Intérim (Pyrex, CIS Prod, Darty…)",
    detail: "Plus de 10 missions : conditionnement, manutention, livraison, dans le respect des procédures de sécurité (HSE).",
  },
  {
    year: "2023 – 2024",
    title: "Équipier polyvalent",
    place: "McDonald's, Saint-Maur",
    detail: "Formation des nouveaux équipiers, ouverture et fermeture du restaurant, caisse et accueil client.",
  },
];

const langues = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "C1", note: "EF SET 64/100", href: "https://cert.efset.org/PkdU5D" },
  { name: "Espagnol", level: "B1" },
  { name: "Khmer", level: "B1" },
];

function Timeline({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <ol className="border-t border-border">
        {entries.map((e) => (
          <li key={e.title} className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-5 border-b border-border">
            <span className="text-sm text-muted-foreground tabular-nums pt-1">{e.year}</span>
            <div>
              <p className="text-lg font-medium text-foreground">{e.title}</p>
              <p className="text-sm text-muted-foreground">{e.place}</p>
              {e.detail && <p className="mt-1 text-sm text-foreground/80">{e.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function BiographieSection() {
  return (
    <section id="biographie" className="relative w-full py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="À propos" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-5 md:col-start-4 space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-snug text-foreground" : "text-base leading-relaxed text-foreground/80"}>
                {p}
              </p>
            ))}
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4 space-y-14">
            <Timeline title="Formation" entries={formation} />
            <Timeline title="Expérience" entries={experience} />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-4">
          <h3 className="col-span-12 md:col-span-3 text-lg font-semibold text-foreground">Langues</h3>
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-4 border-t border-border">
            {langues.map((l, i) => (
              <div key={l.name} className={`pt-5 pb-2 pr-4 border-border ${i % 2 === 1 ? "border-l pl-4" : ""} ${i > 0 ? "md:border-l md:pl-6" : ""}`}>
                <p className="text-3xl sm:text-4xl font-semibold tracking-[-0.05em] text-foreground">{l.level}</p>
                <p className="mt-1 text-sm text-foreground">{l.name}</p>
                {l.note && l.href && (
                  <Link href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 hover:text-accent">
                    {l.note}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
