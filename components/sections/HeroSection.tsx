import Link from "next/link";
import FooterMeta from "../ui/FooterMeta";

const SPECS = [
  { label: "Formation", value: "L3 Informatique, Université d'Orléans" },
  { label: "Cible", value: "Cybersécurité : réseaux, systèmes, web" },
  { label: "Recherche", value: "Stage dès le 18 mai 2027, puis alternance bac+5" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col px-4 sm:px-8 pt-24 pb-10">
      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col">
        {/* Ligne de métadonnées */}
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground animate-fade-in">
          <span>Portfolio — Redean Akunzada</span>
          <span>
            Orléans, FR · <FooterMeta />
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-end">
          <h1 className="animate-fade-in-up text-[17vw] sm:text-[14vw] lg:text-[11.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-foreground">
            Redean
            <br />
            Akunzada<span className="text-accent">.</span>
          </h1>

          <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-foreground pt-6">
            <p className="animate-fade-in-up-delay-1 col-span-12 md:col-span-5 text-lg sm:text-xl leading-snug text-foreground">
              Étudiant en informatique, je me spécialise en cybersécurité. J&apos;apprends à
              comprendre comment les systèmes communiquent, et comment les protéger.
            </p>

            <dl className="animate-fade-in-up-delay-2 col-span-12 md:col-span-6 md:col-start-7 text-sm">
              {SPECS.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[7rem_1fr] gap-4 py-2 border-b border-border first:pt-0">
                  <dt className="font-mono text-xs text-muted-foreground pt-0.5">{spec.label}</dt>
                  <dd className="text-foreground">{spec.value}</dd>
                </div>
              ))}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-5">
                <Link href="#projets" className="text-foreground underline decoration-accent underline-offset-4 hover:text-accent">
                  Voir les projets ↓
                </Link>
                <Link href="#contact" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">
                  Me contacter
                </Link>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
