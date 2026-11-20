import Image from "next/image";
import Link from "next/link";

export type Preview =
  | { type: "image"; src: string; alt: string; url: string; width: number; height: number }
  | { type: "code"; file: string; code: string; highlight: string; caption: string }
  | { type: "flow"; steps: string[]; caption: string };

/** Cadre commun : barre de titre en mono + contenu. */
function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="border border-border bg-card overflow-hidden">
      <div className="px-3 py-1.5 border-b border-border">
        <span className="font-mono text-[10px] text-muted-foreground truncate">{title}</span>
      </div>
      {children}
    </figure>
  );
}

/** Colore en accent chaque occurrence du mot `highlight` (mot entier). */
function highlightCode(line: string, word: string) {
  const parts = line.split(new RegExp(`\\b(${word})\\b`));
  return parts.map((part, i) =>
    part === word ? (
      <span key={i} className="text-accent font-medium">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ProjetPreview({ preview }: { preview: Preview }) {
  if (preview.type === "image") {
    return (
      <Link href={preview.url} target="_blank" rel="noopener noreferrer" className="block group/preview">
        <Frame title={preview.url.replace("https://", "")}>
          <Image
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            sizes="(min-width: 768px) 360px, 100vw"
            className="w-full h-auto transition-opacity group-hover/preview:opacity-90"
          />
        </Frame>
      </Link>
    );
  }

  if (preview.type === "code") {
    return (
      <Frame title={preview.file}>
        <pre className="overflow-x-auto px-3 py-3 font-mono text-[10.5px] leading-relaxed text-foreground/85">
          <code>
            {preview.code.split("\n").map((line, i) => (
              <span key={i} className="block">
                <span aria-hidden className="inline-block w-5 select-none text-muted-foreground/60">{i + 1}</span>
                {highlightCode(line, preview.highlight)}
              </span>
            ))}
          </code>
        </pre>
        <figcaption className="px-3 py-2 border-t border-border text-[11px] text-muted-foreground">
          {preview.caption}
        </figcaption>
      </Frame>
    );
  }

  return (
    <Frame title="schéma">
      <ol className="px-3 py-3 space-y-1.5 font-mono text-[11px]">
        {preview.steps.map((step, i) => {
          const last = i === preview.steps.length - 1;
          return (
            <li key={step} className="flex items-center gap-2">
              <span className={last ? "text-accent" : "text-muted-foreground"}>{`${i + 1}.`}</span>
              <span className={last ? "text-foreground font-medium" : "text-foreground/85"}>{step}</span>
              {!last && <span className="ml-auto text-muted-foreground">sinon refus</span>}
            </li>
          );
        })}
      </ol>
      <figcaption className="px-3 py-2 border-t border-border text-[11px] text-muted-foreground">
        {preview.caption}
      </figcaption>
    </Frame>
  );
}
