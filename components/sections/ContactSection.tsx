import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const EMAIL = "akunzada.redean.pro@gmail.com";

const liens = [
  { label: "GitHub", href: "https://github.com/rdnzda", handle: "rdnzda" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/redean-akunzada/", handle: "redean-akunzada" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/rdnzda", handle: "rdnzda" },
];

const fieldClass =
  "w-full bg-input-bg border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors";
const labelClass = "block font-mono text-[11px] text-muted-foreground mb-1.5";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="04"
          label="Contact"
          title={<>Parlons de mon stage<span className="text-accent">.</span></>}
          intro="Vous recrutez un stagiaire ou un alternant en cybersécurité ? Je suis disponible pour un stage à partir du 18 mai 2027 (jusqu'à 3,5 mois), puis pour une alternance bac+5."
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Coordonnées */}
          <Reveal className="col-span-12 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-4">
            <p className="font-mono text-[11px] text-muted-foreground mb-2">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-lg sm:text-xl break-all text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
            >
              {EMAIL}
            </a>

            <dl className="mt-10 border-t border-border text-sm">
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3 border-b border-border">
                <dt className="font-mono text-[11px] text-muted-foreground pt-0.5">Localisation</dt>
                <dd className="text-foreground">Orléans, France · télétravail possible</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3 border-b border-border">
                <dt className="font-mono text-[11px] text-muted-foreground pt-0.5">Disponibilité</dt>
                <dd className="text-foreground flex items-center gap-2">
                  <span aria-hidden className="inline-block h-1.5 w-1.5 bg-accent" />
                  Stage dès mai 2027
                </dd>
              </div>
              {liens.map((lien) => (
                <div key={lien.label} className="grid grid-cols-[7rem_1fr] gap-4 py-3 border-b border-border">
                  <dt className="font-mono text-[11px] text-muted-foreground pt-0.5">{lien.label}</dt>
                  <dd>
                    <Link href={lien.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">
                      {lien.handle} ↗
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={100} className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-5 lg:col-start-8">
            <form action="https://formspree.io/f/xaqwzggg" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Nom</label>
                  <input id="name" type="text" name="name" required autoComplete="name" placeholder="Votre nom" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" type="email" name="email" required autoComplete="email" placeholder="nom@entreprise.fr" className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Sujet</label>
                <select id="subject" name="subject" className={`${fieldClass} appearance-none`}>
                  <option value="Stage">Proposition de stage</option>
                  <option value="Alternance">Proposition d&apos;alternance</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Votre message…" className={`${fieldClass} resize-none`} />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
              >
                Envoyer le message →
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
