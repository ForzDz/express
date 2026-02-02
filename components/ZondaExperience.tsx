"use client";

import React, { useState } from "react";
import { MotionValue, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { carData } from "../data/carData";
import { clsx } from "clsx";

interface ZondaExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
    const [phase, setPhase] = useState<"hero" | "specs" | "contact" | null>("hero");

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.15) {
            setPhase("hero");
        } else if (latest >= 0.15 && latest < 0.45) {
            setPhase(null); // Clear view for animation
        } else if (latest >= 0.45 && latest < 0.65) {
            setPhase("specs");
        } else if (latest >= 0.65 && latest < 0.85) {
            setPhase(null); // Clear view for animation
        } else {
            setPhase("contact");
        }
    });

    const variants = {
        initial: { opacity: 0, y: 30, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -30, filter: "blur(8px)" },
    };

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6 md:p-20 overflow-hidden">
            <AnimatePresence mode="wait">

                {/* PHASE 1: HERO */}
                {phase === "hero" && (
                    <motion.div
                        key="hero"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-12 left-8 md:top-24 md:left-24 max-w-2xl"
                    >
                        <h2 className="text-pagani-gold font-orbitron text-lg md:text-xl tracking-[0.3em] uppercase mb-2">
                            {carData.hero.subtitle}
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white drop-shadow-2xl mb-4">
                            {carData.hero.title}
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light tracking-wide mb-8 border-l-2 border-pagani-gold pl-4">
                            {carData.hero.tagline}
                        </p>

                        <div className="pointer-events-auto">
                            <button className="px-8 py-3 bg-pagani-gold text-black font-rajdhani font-bold text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 clip-path-slant">
                                {carData.hero.cta}
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* PHASE 2: SPECS */}
                {phase === "specs" && (
                    <motion.div
                        key="specs"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute bottom-12 md:bottom-24 left-8 md:left-24 max-w-xl"
                    >
                        <h2 className="text-white font-orbitron text-3xl uppercase mb-8 border-b border-pagani-gold/50 pb-2 inline-block">
                            {carData.specs.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {carData.specs.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <span className="text-pagani-gold text-xs uppercase tracking-widest mb-1">{item.label}</span>
                                    <span className="text-2xl md:text-3xl font-rajdhani font-bold text-white">{item.value}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="pointer-events-auto mt-8">
                            <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                                <span className="uppercase text-sm tracking-widest border-b border-transparent group-hover:border-white transition-all">Télécharger la Brochure</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* PHASE 3: CONTACT */}
                {phase === "contact" && (
                    <motion.div
                        key="contact"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center pointer-events-auto translate-y-32 md:translate-y-48"
                    >
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-12 py-4 bg-pagani-gold text-black font-orbitron font-bold text-xl uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                        >
                            Nous Contacter
                        </button>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Scroll Progress Indicator - Always Visible */}
            <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
                <span className="text-white/30 text-xs uppercase tracking-widest">Scroll Progress</span>
                <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-pagani-gold"
                        style={{ width: useMotionValueEvent(scrollYProgress, "change", (latest) => `${latest * 100}%`) as any }}
                    />
                </div>
            </div>

        </div>
    );
}
