import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import ProjetPreview, { type Preview } from "@/components/ui/ProjetPreview";

interface ProjetLink {
  label: string;
  href: string;
}

interface Projet {
  name: string;
  kind: string;
  summary: string;
  security?: string[];
  features?: string[];
  stack: string[];
  links?: ProjetLink[];
  preview?: Preview;
}

interface AutreProjet {
  name: string;
  summary: string;
  stack: string[];
  links: ProjetLink[];
}

const GH = "https://github.com/rdnzda";

const projets: Projet[] = [
  {
    name: "Agora360",
    kind: "Plateforme de participation étudiante",
    summary:
      "Les étudiants votent, proposent des projets et donnent leur avis ; un espace administrateur gère les sessions et modère. Projet individuel, développé avec l'assistance de l'IA.",
    features: ["Votes et budget participatif", "Baromètre et tickets", "Espace administrateur"],
    security: [
      "Mots de passe hachés (bcrypt)",
      "Rôles étudiant / administrateur vérifiés côté serveur",
      "Inscriptions limitées à 5 par IP en 15 min",
      "En-têtes de sécurité HTTP, sessions de 8 h",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "NextAuth"],
    links: [
      { label: "Site", href: "https://agora360.vercel.app" },
      { label: "Code", href: `${GH}/Agora360` },
    ],
    preview: { type: "image", src: "/img/projets/agora360.jpg", alt: "Page d'accueil d'Agora360", url: "https://agora360.vercel.app", width: 1600, height: 1000 },
  },
  {
    name: "Bonnes Lectures",
    kind: "Application web de bibliothèque · projet de L3",
    summary: "Projet individuel de L3, en cours. Le code est hébergé sur Bitbucket.",
    security: [
      "Authentification des utilisateurs",
      "Gestion des droits d'accès",
      "Formulaires protégés contre le CSRF (jeton CSRF de Django)",
    ],
    stack: ["Python", "Django"],
    preview: {
      type: "flow",
      steps: ["Utilisateur connecté ?", "Droits suffisants ?", "Jeton CSRF valide ?", "Action autorisée"],
      caption: "Les contrôles qu'une requête doit passer avant de modifier des données.",
    },
  },
  {
    name: "Mon Vieux Grimoire",
    kind: "API REST de notation de livres · projet OpenClassrooms",
    summary: "Le back end d'un site de notation de livres ; le front end était fourni.",
    security: ["Authentification par jetons JWT", "Mots de passe hachés (bcrypt)"],
    features: ["Envoi et optimisation des images (Multer, Sharp)"],
    stack: ["Node.js", "Express", "MongoDB"],
    links: [{ label: "Code", href: `${GH}/Developpez-le-back-end-d-un-site-de-notation-de-livres` }],
    preview: {
      type: "code",
      file: "routes/book.js",
      highlight: "auth",
      code: `router.post('/', auth, multer, bookCtrl.createBook);
router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestRatingBooks);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);`,
      caption: "Extrait du dépôt : les routes qui modifient les données passent par le middleware auth (JWT).",
    },
  },
  {
    name: "CDM 2026",
    kind: "Jeu de pronostics · bot Discord + site web",
    summary:
      "Pronostics sur la Coupe du monde 2026, en points virtuels uniquement. Le bot Discord et le site partagent la même base de données. Développé en grande partie avec Claude Code.",
    features: [
      "Commandes slash : paris, combinés, défis, classements, profil",
      "Bot et site synchronisés sur une base commune",
    ],
    stack: ["TypeScript", "Node.js", "discord.js", "Next.js", "Tailwind CSS"],
    links: [
      { label: "Site", href: "https://cdm-2026-phi.vercel.app" },
      { label: "Code", href: `${GH}/CDM2026` },
    ],
    preview: { type: "image", src: "/img/projets/cdm2026.jpg", alt: "Page d'accueil du site CDM 2026", url: "https://cdm-2026-phi.vercel.app", width: 1600, height: 1000 },
  },
  {
    name: "Movie Database",
    kind: "Consultation de films et séries",
    summary: "Parcourir films, séries et personnalités à partir de l'API TMDB.",
    features: ["Requêtes à l'API REST TMDB", "Filtrage, tri et affichage dynamique des données JSON"],
    stack: ["Next.js", "React"],
    links: [
      { label: "Site", href: "https://moviedatabase-eta.vercel.app" },
      { label: "Code", href: `${GH}/movie-database` },
    ],
    preview: { type: "image", src: "/img/projets/moviedb.jpg", alt: "Page d'accueil de Movie Database", url: "https://moviedatabase-eta.vercel.app", width: 1600, height: 1000 },
  },
];

const autresProjets: AutreProjet[] = [
  {
    name: "Studios vidéo TikTok",
    summary:
      "Production automatisée de vidéos courtes pour mon activité : rendu calé sur la voix, kits graphiques versionnés, outils de contrôle qualité.",
    stack: ["Remotion", "React", "TypeScript"],
    links: [{ label: "Code", href: `${GH}/humind-studio` }],
  },
  {
    name: "ONYX Detailing",
    summary: "Site vitrine d'une entreprise fictive de detailing automobile : calculateur de prix, pages légales.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Site", href: "https://onyx-detailling.vercel.app" },
      { label: "Code", href: `${GH}/onyx-detailling` },
    ],
  },
  {
    name: "Weather App",
    summary: "Météo en temps réel et prévisions, avec recherche par ville.",
    stack: ["Next.js", "React"],
    links: [
      { label: "Site", href: "https://weather-app-pi-nine-98.vercel.app" },
      { label: "Code", href: `${GH}/weather-app` },
    ],
  },
  {
    name: "Ce portfolio",
    summary: "Conçu, développé et déployé par mes soins.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Code", href: `${GH}/portfolio-rdnzda` }],
  },
];

function Links({ links }: { links?: ProjetLink[] }) {
  if (!links?.length) return null;
  return (
    <span className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
        >
          {l.label} ↗
        </Link>
      ))}
    </span>
  );
}

function PointList({ label, items, accent }: { label: string; items: string[]; accent?: boolean }) {
  return (
    <div>
      <p className={`font-mono text-[11px] mb-2 ${accent ? "text-accent" : "text-muted-foreground"}`}>{label}</p>
      <ul className="space-y-1.5 text-sm text-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden className={accent ? "text-accent" : "text-muted-foreground"}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjetsSection() {
  const securityCount = projets.filter((p) => p.security?.length).length;

  return (
    <section id="projets" className="relative w-full py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="01"
          label="Projets"
          title="Ce que j'ai construit"
          intro={`${projets.length} projets principaux, dont ${securityCount} où la sécurité était au cœur du travail : authentification, contrôle d'accès, protection contre les attaques courantes.`}
        />

        {/* En-têtes de colonnes (desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-6 pb-3 border-b border-border font-mono text-[11px] text-muted-foreground">
          <span className="col-span-1">N°</span>
          <span className="col-span-4">Projet</span>
          <span className="col-span-4">Description</span>
          <span className="col-span-3">Détails</span>
        </div>

        <ol>
          {projets.map((projet, i) => {
            const isSecurity = Boolean(projet.security?.length);
            return (
              <Reveal
                as="li"
                key={projet.name}
                delay={i * 60}
                className="group grid grid-cols-12 gap-x-6 gap-y-4 py-8 sm:py-10 border-b border-border"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="col-span-10 md:col-span-4 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-foreground">
                      {projet.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {projet.kind}
                      {isSecurity && <span className="text-accent"> · sécurité</span>}
                    </p>
                  </div>
                  <Links links={projet.links} />
                  {projet.preview && (
                    <div className="pt-2 max-w-md">
                      <ProjetPreview preview={projet.preview} />
                    </div>
                  )}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p className="text-base leading-relaxed text-foreground/85">{projet.summary}</p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground">{projet.stack.join(" / ")}</p>
                </div>

                <div className="col-span-12 md:col-span-3 space-y-5">
                  {projet.security && <PointList label="Côté sécurité" items={projet.security} accent />}
                  {projet.features && <PointList label="Fonctionnalités" items={projet.features} />}
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* Autres projets */}
        <Reveal className="mt-16 grid grid-cols-12 gap-x-6 gap-y-4">
          <h3 className="col-span-12 md:col-span-3 font-mono text-xs text-muted-foreground">Autres projets</h3>
          <ul className="col-span-12 md:col-span-9 border-t border-border">
            {autresProjets.map((p) => (
              <li key={p.name} className="grid grid-cols-1 sm:grid-cols-[11rem_1fr_auto] gap-x-6 gap-y-1 py-4 border-b border-border">
                <p className="font-medium text-foreground">{p.name}</p>
                <div>
                  <p className="text-sm text-foreground/85">{p.summary}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{p.stack.join(" / ")}</p>
                </div>
                <div className="sm:text-right">
                  <Links links={p.links} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Les projets de ma formation OpenClassrooms et mes autres dépôts sont sur GitHub.
          </p>
          <Link
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
          >
            github.com/rdnzda ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
