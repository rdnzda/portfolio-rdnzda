import Link from "next/link";
import FooterMeta from "../ui/FooterMeta";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
        
        {/* CONTAINER CENTRÉ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 text-left lg:text-center">
          
          {/* TITRE */}
          <div className="animate-slide-in-left">
            <h1 className="font-switzer font-bold text-6xl sm:text-[7rem] md:text-[9rem] leading-[0.9] text-white tracking-tight uppercase mb-8">
              A<span className="text-zinc-500">k</span>unzada <br/>
              <span className="text-white">
                <span className="italic mr-1.5 sm:mr-2 md:mr-4">R</span>
                ed
                <span className="inline-block text-zinc-500 scale-x-[-1]">Æ</span>
                n
                <span className="text-zinc-500">.</span>
              </span>
            </h1>
          </div>

          {/* PARAGRAPHE */}
          <div className="animate-slide-in-right mb-12">
            <p className="font-switzer text-zinc-400 text-sm sm:text-base max-w-2xl lg:mx-auto leading-relaxed">
              Développeur Full-Stack & Créateur de solutions digitales <span className="italic hidden sm:inline-block text-white">sur mesure</span>. <br/>
              J'aide les entreprises à concrétiser leurs idées grâce à des sites web performants.
            </p>
          </div>

          {/* --- AJOUT MOBILE : BLOC D'IDENTITÉ TECHNIQUE --- */}
          <div className="lg:mx-auto w-full max-w-[300px] animate-fade-in-up-delay-2">
            
            {/* Petite ligne de séparation esthétique */}
            <div className="h-[1px] w-16 bg-zinc-800 mb-6"></div>

            {/* La Grille d'Infos */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                
                {/* 1. Statut (Avec le point vert qui pulse) */}
                <div className="flex flex-col gap-2">
                    <span className="text-zinc-700">Statut</span>
                    <div className="flex items-center gap-2 text-zinc-200 font-bold">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Disponible</span>
                    </div>
                </div>

                 {/* 4. Lien vers Portfolio (Subtil) */}
                 <div className="flex flex-col gap-2">
                    <span className="text-zinc-700">Index</span>
                    <Link href="#projets" className="text-white border-b border-zinc-700 hover:border-white transition-colors w-fit pb-0.5">
                        Voir Projets ↗
                    </Link>
                </div>

            </div>
          </div>

        </div>
        
        <FooterMeta />
        
        <div className="absolute bottom-6 left-6">
          <span className="text-white font-switzer uppercase cursor-default tracking-widest font-bold text-base sm:text-md">rdnzda</span>
        </div>
    </section>
  );
}