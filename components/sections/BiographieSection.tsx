import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const paragraphs = [
  "Étudiant en L3 Informatique à l'UFR Sciences et Techniques d'Orléans (4e de promotion en L2), je m'oriente vers la cybersécurité : réseaux, systèmes Linux et sécurité des applications web.",
  "En parallèle de mes cours, je me forme en autonomie sur TryHackMe. Je recherche un stage en cybersécurité à partir du 18 mai 2027, que je souhaite prolonger par une alternance bac+5 dans ce domaine.",
  "À côté, je crée des vidéos courtes pour TikTok, avec des outils de montage automatisé.",
];

const experience = [
  { year: "2024 – 2027", title: "Licence Informatique, parcours ingénierie", place: "UFR Sciences et Techniques d'Orléans", detail: "4e de promotion en L2, 1er au semestre 3." },
  { year: "2026", title: "Autoformation en cybersécurité", place: "TryHackMe", detail: "Pre Security terminé, Cyber Security 101 en cours." },
  { year: "2026", title: "Auto-entrepreneur, création de contenu vidéo", place: "Vidéos courtes pour TikTok" },
  { year: "2023 – 2024", title: "Diplôme d'Intégrateur Web (RNCP niveau 5, bac+2)", place: "OpenClassrooms" },
];

const stats = [
  { value: "4e", label: "de promotion en L2" },
  { value: "19,75", label: "/20 en système Unix" },
  { value: "25", label: "dépôts GitHub" },
  { value: "C1", label: "en anglais" },
];

export default function BiographieSection() {
  return (
    <section id="biographie" className="relative w-full py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" label="Biographie" title="À propos" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <Reveal className="col-span-12 md:col-span-5 md:col-start-4 space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-snug text-foreground" : "text-base leading-relaxed text-foreground/80"}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={100} className="col-span-12 md:col-span-9 md:col-start-4">
            <h3 className="font-mono text-xs text-muted-foreground mb-3">Parcours</h3>
            <ol className="border-t border-border">
              {experience.map((exp) => (
                <li key={exp.title} className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-5 border-b border-border">
                  <span className="font-mono text-xs text-muted-foreground pt-1">{exp.year}</span>
                  <div>
                    <p className="text-lg font-medium text-foreground">{exp.title}</p>
                    <p className="text-sm text-muted-foreground">{exp.place}</p>
                    {exp.detail && <p className="mt-1 text-sm text-foreground/80">{exp.detail}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-foreground">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`pt-5 pb-2 pr-4 ${i > 0 ? "md:border-l md:pl-6" : ""} ${i % 2 === 1 ? "border-l pl-4 md:pl-6" : ""} border-border`}>
              <p className="text-4xl sm:text-5xl font-semibold tracking-[-0.05em] text-foreground tabular-nums">{stat.value}</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
