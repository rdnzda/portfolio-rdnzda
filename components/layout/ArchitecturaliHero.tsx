import Image from "next/image";

export default function ArchitecturalHero() {
  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* 1. CORRECTION DU BACKGROUND : Le conteneur doit être absolu et z-0 */}
      <div className="absolute inset-0 z-0">
        <Image
            src="/img/bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-50 pointer-events-none animate-drift scale-110"
            priority
        />
        {/* Le flou et le dégradé */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px]"></div>
        {/* Correction syntaxe gradient : on utilise souvent bg-gradient-to-t ou une valeur arbitraire */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* NAVIGATION */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-50 text-xs uppercase tracking-widest text-zinc-400">
        <div className="text-white font-syncopate font-bold text-lg mix-blend-difference">RDNZDA</div>
        <div className="space-x-8 hidden md:block">
          <span className="cursor-pointer hover:text-white transition-colors">Biographie</span>
          <span className="cursor-pointer hover:text-white transition-colors">Projets</span>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      {/* J'ai retiré la GRID ici. Pour le style "Liquide", centrer le contenu verticalement est souvent plus élégant */}
      <div className="relative z-10 h-screen w-full flex flex-col justify-center px-8 lg:px-20">
        
        {/* GROUPE TEXTE */}
        <div className="relative max-w-4xl">
            
            {/* TEXTE ARRIÈRE-PLAN (Outlined) - Positionné pour dépasser derrière */}
            <h1 
                className="absolute -top-20 -left-10 text-[6rem] md:text-[10rem] font-bold uppercase leading-none opacity-10 select-none pointer-events-none whitespace-nowrap"
                style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 1)',
                color: 'transparent'
                }}
            >
                Akunzada<br /> Redean
            </h1>

            {/* TITRE PRINCIPAL */}
            <h2 className="relative font-syncopate text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.9] text-white mix-blend-overlay drop-shadow-2xl">
              RDNZDA
            </h2>
            
            {/* LIGNE & SOUS-TITRE */}
            <div className="ml-3 mt-8 flex items-center gap-6 relative z-20">
                <div className="h-[1px] w-20 bg-white/60"></div>
                <p className="text-zinc-200 font-syncopate font-bold text-sm tracking-[0.2em] uppercase drop-shadow-md">
                Web Developer & Designer
                </p>
            </div>
        </div>
      </div>

      {/* TEXTE VERTICAL (Milieu Droite) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 z-20 hidden lg:block">
         <div className="text-xs uppercase tracking-[0.3em] text-zinc-500" style={{ writingMode: 'vertical-rl' }}>
            Scroller pour découvrir
         </div>
      </div>

    </main>
  );
}