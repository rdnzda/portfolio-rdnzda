import Link from "next/link";

const SPECS = [
  { label: "Formation", value: "L3 Informatique, Université d'Orléans" },
  { label: "Recherche", value: "Stage dès le 18 mai 2027, puis alternance bac+5 dès septembre 2027" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col justify-end px-4 sm:px-8 pt-28 pb-14">
      <div className="max-w-6xl w-full mx-auto">
        {/* L'élément marquant du site : le nom, posé sur le quadrillage */}
        <h1 className="animate-fade-in-up text-[17vw] sm:text-[14vw] lg:text-[11.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-foreground">
          Redean
          <br />
          Akunzada
        </h1>

        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="animate-fade-in-up-delay-1 col-span-12 md:col-span-5">
            <p className="text-lg sm:text-xl leading-snug text-foreground max-w-[42ch]">
              Étudiant en informatique, je me spécialise en cybersécurité. J&apos;apprends à
              comprendre comment les systèmes communiquent, et comment les protéger.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projets"
                className="px-5 py-3 bg-accent text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Voir mes projets
              </Link>
              <a
                href="/CV_Redean_Akunzada.pdf"
                download
                className="px-5 py-3 border border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          <dl className="animate-fade-in-up-delay-2 col-span-12 md:col-span-6 md:col-start-7 text-sm self-end">
            {SPECS.map((spec) => (
              <div key={spec.label} className="grid grid-cols-[8rem_1fr] gap-4 py-3 border-b border-border last:border-b-0">
                <dt className="text-muted-foreground">{spec.label}</dt>
                <dd className="text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
