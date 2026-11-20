interface SectionHeaderProps {
  title: React.ReactNode;
  intro?: React.ReactNode;
}

/** Titre de section + introduction facultative. */
export default function SectionHeader({ title, intro }: SectionHeaderProps) {
  return (
    <header className="mb-12 sm:mb-16 max-w-3xl">
      <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.045em] leading-[0.95] text-foreground">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-[62ch] text-base sm:text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </header>
  );
}
