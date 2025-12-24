import Link from "next/link";
import Image from "next/image";

interface BackgroundLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export default function BackgroundLayout({ children, showNav = true }: BackgroundLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* BACKGROUND RÉUTILISABLE - Image avec animation drift */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Image de fond avec animation drift */}
        <Image
          src="/img/bg6.jpg"
          alt="Background"
          fill
          priority
          quality={90}
          className="object-cover scale-110 animate-drift"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/20"></div>
        {/* Le flou */}
        <div className="absolute inset-0 backdrop-blur-[12px]"></div>
        {/* Dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* NAVIGATION FIXE */}
      {showNav && (
        <nav className="fixed top-0 w-full p-4 sm:p-6 lg:p-8 flex justify-between items-center z-50 text-xs uppercase tracking-widest text-zinc-400 animate-fade-in-up">
          <Link href="/" className="text-white font-syncopate font-bold text-base sm:text-lg mix-blend-difference hover:scale-105 transition-transform duration-300">RDNZDA</Link>
          
          {/* Navigation Desktop */}
          <div className="space-x-6 sm:space-x-8 hidden md:flex">
            <Link href="#projets" className="cursor-pointer hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Projets</Link>
            <Link href="#services" className="cursor-pointer hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Services</Link>
            <Link href="#biographie" className="cursor-pointer hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Biographie</Link>
            <Link href="#contact" className="cursor-pointer hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Contact</Link>
            
          </div>

          {/* Navigation Mobile - Liens simplifiés */}
          <div className="flex gap-4 md:hidden">
            <Link href="#projets" className="text-[10px] hover:text-white transition-colors">Projets</Link>
            <Link href="#services" className="text-[10px] hover:text-white transition-colors">Services</Link>
            <Link href="#biographie" className="text-[10px] hover:text-white transition-colors">Bio</Link>
            <Link href="#contact" className="text-[10px] hover:text-white transition-colors">Contact</Link>
          </div>
        </nav>
      )}

      {/* CONTENU */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
