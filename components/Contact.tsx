"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formState);
        alert("Message envoyé (Simulation)");
    };

    return (
        <section id="contact" className="py-20 px-6 bg-black relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Form */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-orbitron text-white mb-2 uppercase">Nous Contacter</h2>
                    <p className="text-white/60 mb-8 font-light tracking-wide">Une question sur la légende Renault Express ?</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-pagani-gold text-xs uppercase tracking-widest">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/20 p-3 text-white focus:border-pagani-gold focus:outline-none transition-colors"
                                placeholder="Votre Nom"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-pagani-gold text-xs uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/20 p-3 text-white focus:border-pagani-gold focus:outline-none transition-colors"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-pagani-gold text-xs uppercase tracking-widest">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows={4}
                                className="bg-white/5 border border-white/20 p-3 text-white focus:border-pagani-gold focus:outline-none transition-colors resize-none"
                                placeholder="Votre message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 px-8 py-3 bg-pagani-gold text-black font-orbitron font-bold text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 clip-path-slant self-start"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

                {/* Right Column: Image */}
                <div className="h-[400px] md:h-[500px] w-full relative overflow-hidden group border border-white/10 bg-black/50">
                    <img
                        src="/images/zonda-sequence/21.jpg"
                        alt="Renault Express - Vue Arrière"
                        className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-6 left-6 z-20">
                        <span className="text-pagani-gold text-sm font-orbitron tracking-widest uppercase block mb-1">Détail</span>
                        <span className="text-white text-2xl font-bold">Renault Express</span>
                    </div>
                </div>

            </div>
        </section >
    );
}
