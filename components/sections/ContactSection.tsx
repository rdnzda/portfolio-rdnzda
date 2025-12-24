"use client";

import { useInView } from "@/hooks/useInView";
import {
    Mail,
    MapPin,
    Github,
    Linkedin,
    ArrowRight,
    Send
} from "lucide-react";

export default function ContactSection() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section id="contact" className="relative z-10 py-20 sm:py-32 px-4 sm:px-8 lg:px-20 border-t border-white/5">

            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* --- COLONNE GAUCHE : INFOS --- */}
                    <div
                        ref={ref as React.RefObject<HTMLDivElement>}
                        className={`flex flex-col justify-between transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-[1px] w-8 bg-foreground/20"></div>
                                <span className="text-foreground/60 text-xs uppercase tracking-[0.2em] font-sans">
                                    Contact
                                </span>
                            </div>

                            <h2 className="font-syncopate text-4xl sm:text-5xl md:text-6xl text-foreground font-bold uppercase tracking-tight mb-8">
                                Parlons de <br /> votre projet.
                            </h2>

                            <p className="text-foreground text-base leading-relaxed max-w-md font-sans mb-12">
                                Une idée en tête ? Un besoin spécifique ? <br />
                                Je suis actuellement disponible pour de nouvelles collaborations en freelance.
                            </p>

                            {/* Status "Disponible" */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-sans">Disponible</span>
                            </div>
                        </div>

                        {/* Coordonnées */}
                        <div className="space-y-6">
                            {/* Email Block */}
                            <a
                                href="mailto:akunzada.redean.pro@gmail.com"
                                className="group block p-6 border border-white/10 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-foreground/30 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-bold mb-0.5">M'écrire</p>
                                            <p className="text-sm font-sans text-foreground">akunzada.redean.pro@gmail.com</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                                </div>
                            </a>

                            {/* Localisation */}
                            <div className="flex items-center gap-4 px-6 text-foreground">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-sans">Orléans, France & Remote</span>
                            </div>

                            {/* Réseaux Sociaux */}
                            <div className="flex gap-4 px-6 pt-4 border-t border-white/5">
                                <a href="https://github.com/rdnzda" target="_blank" className="text-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
                                <a href="https://linkedin.com/in/redean-akunzada" target="_blank" className="text-foreground hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>


                    {/* --- COLONNE DROITE : FORMULAIRE --- */}
                    <div
                        className={`transition-all duration-700 my-auto delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        <form
                            /* 1. COLLE TON LIEN FORMSPREE ICI */
                            action="https://formspree.io/f/xaqwzggg"
                            method="POST"
                            className="bg-zinc-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-xl"
                        >

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                {/* Nom */}
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-foreground/60 font-bold ml-1">Nom</label>
                                    <input
                                        type="text"
                                        name="name" /* IMPORTANT */
                                        required
                                        placeholder="Votre nom"
                                        className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground/50 focus:bg-zinc-900 transition-all placeholder:text-foreground/40 font-sans"
                                    />
                                </div>
                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-foreground/60 font-bold ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email" /* IMPORTANT */
                                        required
                                        placeholder="nom@exemple.com"
                                        className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground/50 focus:bg-zinc-900 transition-all placeholder:text-foreground/40 font-sans"
                                    />
                                </div>
                            </div>

                            {/* Sujet */}
                            <div className="space-y-2 mb-6">
                                <label className="text-xs uppercase tracking-wider text-foreground/60 font-bold ml-1">Sujet</label>
                                <select
                                    name="subject" /* IMPORTANT */
                                    className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground/50 focus:bg-zinc-900 transition-all font-sans appearance-none cursor-pointer"
                                >
                                    <option className="bg-zinc-900 text-foreground" value="Devis">Demande de devis</option>
                                    <option className="bg-zinc-900 text-foreground" value="Mission">Proposition de mission</option>
                                    <option className="bg-zinc-900 text-foreground" value="Autre">Autre</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="space-y-2 mb-8">
                                <label className="text-xs uppercase tracking-wider text-foreground/60 font-bold ml-1">Message</label>
                                <textarea
                                    name="message" /* IMPORTANT */
                                    required
                                    rows={4}
                                    placeholder="Parlez-moi de votre projet..."
                                    className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground/50 focus:bg-zinc-900 transition-all placeholder:text-foreground/40 font-sans resize-none"
                                ></textarea>
                            </div>

                            {/* Bouton Submit */}
                            <button
                                type="submit"
                                className="w-full group bg-foreground text-background font-bold uppercase tracking-wider text-xs py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Envoyer le message
                                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}