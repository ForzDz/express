"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { clsx } from "clsx";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12",
                "bg-pagani-black/50 backdrop-blur-md border-b border-white/10"
            )}
        >
            <div className="text-xl md:text-2xl font-bold tracking-widest uppercase font-orbitron text-white">
                Renault Express
            </div>
            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 text-sm font-semibold tracking-wider uppercase bg-pagani-gold text-black hover:bg-white transition-colors duration-300"
            >
                Contact
            </button>
        </motion.nav>
    );
}
