"use client";

import AuroraBackground from "@/components/ui/AuroraBackground";
import { useInView } from "@/hooks/useInView";
import Footer from "@/components/layout/Footer";

export default function MentionsLegalesPage() {
    const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
    const { ref: mainRef, isInView: mainInView } = useInView({ threshold: 0.1 });

    return (
        <div className="relative min-h-screen w-full text-white font-sans selection:bg-white selection:text-black">

            <div className="fixed inset-0 z-0">
                <AuroraBackground />
            </div>

            {/* Le contenu qui peut scroller */}
            <div className="relative z-10">
                <main className="w-full">
                    <section id="mentions-legales" className="py-20 sm:py-32 px-4 sm:px-8 lg:px-20">
                        <div className="max-w-4xl mx-auto"> {/* Réduit à max-w-4xl pour une meilleure lisibilité du texte */}

                            {/* Header avec ton animation */}
                            <div ref={headerRef} className={`transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                                <div className="flex items-center gap-4 sm:gap-6 mb-4 group">
                                    <div className="h-[1px] w-10 sm:w-16 bg-white/40"></div>
                                    <span className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                        Informations Légales
                                    </span>
                                </div>
                                <h1 className="font-syncopate text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-16">
                                    Mentions Légales
                                </h1>
                            </div>

                            {/* Grille de contenu plus aérée */}
                            <div ref={mainRef} className={`transition-all duration-700 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-zinc-400 leading-relaxed ${mainInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                                <section className="md:col-span-2 pb-8 border-b border-white/10">
                                    <p className="text-lg">
                                        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé l'identité des intervenants du site <span className="text-white">rdnzda</span>.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">01. Édition du site</h2>
                                    <p>
                                        Le présent site, accessible à l’URL <span className="text-white">www.rdnzda.com</span>, est édité par :
                                    </p>
                                    <div className="mt-2 text-white font-medium">
                                        <p>Redean Akunzada</p>
                                        <p className="text-zinc-400 font-normal text-sm">
                                            SIRET : <span className="text-white">En cours d'attribution</span>
                                        </p>
                                        <p className="text-zinc-400 font-normal text-sm italic">
                                            99 rue d'Illiers 45000 ORLÉANS
                                        </p>
                                        <p className="text-zinc-400 font-normal text-sm italic">
                                            TVA non applicable, art. 293 B du CGI.
                                        </p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">02. Hébergement</h2>
                                    <p>
                                        Le Site est hébergé par la société <span className="text-white font-medium">Vercel Inc.</span><br />
                                        <span className="text-sm">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</span><br />
                                        <a href="mailto:privacy@vercel.com" className="text-xs underline hover:text-white transition-colors">privacy@vercel.com</a>
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">03. Publication</h2>
                                    <p>
                                        Le Directeur de la publication du Site est <br />
                                        <span className="text-white font-medium">Redean Akunzada</span>.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">04. Contact</h2>
                                    <div className="space-y-1 text-sm">
                                        <p>Tél : <span className="text-white">+33 7 69 15 54 90</span></p>
                                        <p>Email : <span className="text-white">akunzada.redean.pro@gmail.com</span></p>
                                    </div>
                                </section>

                                <section className="md:col-span-2 pt-8 border-t border-white/10">
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">05. Données personnelles</h2>
                                    <p className="max-w-2xl text-sm">
                                        Le traitement de vos données est régi par le Règlement Général sur la Protection des Données (RGPD) 2016/679 du 27 avril 2016. Vous disposez d'un droit d'accès et de rectification.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}