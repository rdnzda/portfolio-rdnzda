import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}

/**
 * En-tête commun aux sections : numéro + libellé en mono à gauche,
 * titre à droite, séparés du reste par un filet.
 */
export default function SectionHeader({ index, label, title, intro }: SectionHeaderProps) {
  return (
    <Reveal className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-foreground pt-5 mb-14 sm:mb-20">
      <p className="col-span-12 md:col-span-3 font-mono text-xs text-muted-foreground">
        <span className="text-accent">{index}</span> / {label}
      </p>
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] leading-[0.95] text-foreground">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
