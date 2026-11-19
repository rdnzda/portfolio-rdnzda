import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full px-4 sm:px-8 pb-10">
      <div className="max-w-6xl mx-auto border-t border-foreground pt-6 grid grid-cols-12 gap-x-6 gap-y-6 text-sm">
        <div className="col-span-12 md:col-span-3">
          <Link href="/" className="font-mono font-medium text-foreground">
            rdnzda<span className="text-accent">_</span>
          </Link>
        </div>

        <p className="col-span-12 md:col-span-4 text-muted-foreground">
          Redean Akunzada — étudiant en L3 Informatique à Orléans, cap sur la cybersécurité.
        </p>

        <nav aria-label="Liens du pied de page" className="col-span-12 md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
          <Link href="/mentions-legales" className="text-muted-foreground hover:text-foreground">Mentions légales</Link>
          <Link href="/politique-confidentialite" className="text-muted-foreground hover:text-foreground">Confidentialité</Link>
          <Link href="/#home" className="text-foreground hover:text-accent">Haut de page ↑</Link>
        </nav>

        <p className="col-span-12 font-mono text-[11px] text-muted-foreground">
          © {currentYear} Redean Akunzada. Conçu et développé par mes soins.
        </p>
      </div>
    </footer>
  );
}
