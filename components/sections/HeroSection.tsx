export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-4 sm:px-8 lg:px-20">
      
      {/* GROUPE TEXTE */}
      <div className="relative max-w-4xl">
          
          {/* TEXTE ARRIÈRE-PLAN (Outlined) - Visible sur tous les écrans */}
          <h1 
              className="absolute -top-8 sm:-top-16 md:-top-20 -left-1 sm:-left-4 md:-left-1 text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold uppercase leading-none select-none pointer-events-none whitespace-nowrap animate-fade-in"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                color: 'transparent'
              }}
          >
              Akunzada<br /> Redean
          </h1>

          {/* TITRE PRINCIPAL */}
          <h2 className="relative font-syncopate text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9] text-white mix-blend-overlay drop-shadow-2xl animate-fade-in-up">
            RDNZDA
          </h2>
          
          {/* LIGNE & SOUS-TITRE */}
          <div className="ml-1 sm:ml-3 mt-6 sm:mt-8 flex items-center gap-3 sm:gap-6 relative z-20">
              <div className="h-[1px] bg-white/60 animate-line-expand"></div>
              <p className="text-zinc-200 font-syncopate font-bold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase drop-shadow-md animate-fade-in-up-delay-2">
                Développeur & Designer Web
              </p>
          </div>
      </div>

      {/* INDICATEUR SCROLL - Version mobile en bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 lg:hidden animate-fade-in-up-delay-3">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* TEXTE VERTICAL (Milieu Droite) - Desktop uniquement */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 lg:right-10 z-20 hidden lg:block animate-slide-in-right">
         <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-zinc-300" style={{ writingMode: 'vertical-rl' }}>
            Scroller pour découvrir
         </div>
      </div>
    </section>
  );
}
