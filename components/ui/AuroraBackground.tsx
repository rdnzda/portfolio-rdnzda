"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Fond uni très sombre */}
      <div className="absolute inset-0 bg-[#050505]"></div>

      {/* --- ORBE 1 (Haut Gauche) --- */}
      <div className="
          absolute 
          top-[-10%] left-[-20%] md:left-[-10%] 
          w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw] 
          bg-zinc-500/10 rounded-full 
          blur-[80px] md:blur-[100px] 
          animate-blob mix-blend-screen
      "></div>
      
      {/* --- ORBE 2 (Milieu Droite) --- */}
      <div className="
          absolute 
          top-[30%] md:top-[20%] 
          right-[-20%] md:right-[-10%] 
          w-[80vw] h-[80vw] md:w-[35vw] md:h-[35vw] 
          bg-zinc-500/10 rounded-full 
          blur-[80px] md:blur-[100px] 
          animate-blob animation-delay-2000 mix-blend-screen
      "></div>
      
      {/* --- ORBE 3 (Bas Gauche) --- */}
      <div className="
          absolute 
          bottom-[-10%] 
          left-[-10%] md:left-[20%] 
          w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw] 
          bg-zinc-500/10 rounded-full 
          blur-[100px] md:blur-[120px] 
          animate-blob animation-delay-4000 mix-blend-screen
      "></div>

      {/* --- TEXTURE (Indispensable sur mobile pour éviter le 'color banding') --- */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
    </div>
  );
}