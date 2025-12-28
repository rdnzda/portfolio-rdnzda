"use client";

import AuroraBackground from "@/components/ui/AuroraBackground";
import { useInView } from "@/hooks/useInView";
import Footer from "@/components/layout/Footer";

export default function ConfidentialitePage() {
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
                    <section id="politique-confidentialite" className="py-20 sm:py-32 px-4 sm:px-8 lg:px-20">
                        <div className="max-w-4xl mx-auto">
                            
                            {/* Header avec ton animation */}
                            <div ref={headerRef} className={`transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                                <div className="flex items-center gap-4 sm:gap-6 mb-4 group">
                                    <div className="h-[1px] w-10 sm:w-16 bg-white/40"></div>
                                    <span className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                        Protection des données
                                    </span>
                                </div>
                                <h1 className="font-syncopate text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-16">
                                    Confidentialité
                                </h1>
                            </div>

                            {/* Grille de contenu */}
                            <div ref={mainRef} className={`transition-all duration-700 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-zinc-400 leading-relaxed ${mainInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                                
                                <section className="md:col-span-2 pb-8 border-b border-white/10">
                                    <p className="text-lg">
                                        La présente politique de confidentialité définit la manière dont <span className="text-white">Redean Akunzada</span> utilise et protège les informations que vous transmettez lors de l'utilisation du site <span className="text-white">www.rdnzda.com</span>.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">01. Collecte des données</h2>
                                    <p>
                                        Nous collectons les données que vous nous fournissez volontairement via le formulaire de contact, notamment :
                                    </p>
                                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                        <li>Nom et prénom</li>
                                        <li>Adresse email</li>
                                        <li>Contenu de votre message</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">02. Utilisation des données</h2>
                                    <p>
                                        Ces informations sont utilisées exclusivement pour :
                                    </p>
                                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                        <li>Répondre à vos demandes de contact</li>
                                        <li>Établir des devis personnalisés</li>
                                        <li>Améliorer l'expérience utilisateur</li>
                                    </ul>
                                    <p className="mt-3 text-xs italic">Aucune donnée n'est revendue à des tiers.</p>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">03. Conservation</h2>
                                    <p>
                                        Les données personnelles sont conservées pour la durée nécessaire au traitement de votre demande, avec un maximum de <span className="text-white">3 ans</span> après le dernier échange commercial.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">04. Cookies</h2>
                                    <p>
                                        Le site peut utiliser des cookies techniques pour optimiser les performances (via Vercel). Vous pouvez configurer votre navigateur pour refuser ces cookies, bien que cela puisse affecter certaines fonctionnalités.
                                    </p>
                                </section>

                                <section className="md:col-span-2 pt-8 border-t border-white/10">
                                    <h2 className="text-white font-display uppercase tracking-widest text-sm font-bold mb-4 opacity-50">05. Vos droits (RGPD)</h2>
                                    <p className="text-sm">
                                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données. Pour exercer ces droits, vous pouvez me contacter à tout moment :
                                    </p>
                                    <div className="mt-4 p-4 border border-white/5 bg-white/5 rounded-sm">
                                        <p className="text-white font-medium text-sm">Responsable du traitement : Redean Akunzada</p>
                                        <p className="text-xs mt-1 italic">Contact : akunzada.redean.pro@gmail.com</p>
                                    </div>
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