"use client";

import { motion } from "framer-motion";

export default function LightEffect() {
    return (
        <div className="absolute inset-0 z-0 flex items-start justify-center overflow-hidden pointer-events-none mix-blend-screen">
            {/* Main central glow - Warm Gold for Premium Feel */}
            <div className="absolute top-0 -translate-y-1/2 z-40 h-96 w-[40rem] rounded-full bg-pagani-gold/40 opacity-60 blur-3xl" />

            {/* Secondary glow - Hints of orange/warmth */}
            <div className="absolute top-0 -translate-y-1/3 z-40 h-64 w-[30rem] rounded-full bg-orange-500/20 opacity-40 blur-3xl" />

            {/* Lamp effect - animated - Gold */}
            <motion.div
                initial={{ width: "12rem", opacity: 0.3 }}
                animate={{ width: "28rem", opacity: 0.6 }}
                transition={{
                    ease: "easeInOut",
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-0 translate-y-12 z-30 h-72 rounded-full bg-pagani-gold/50 blur-3xl"
            />

            {/* Top horizontal line - Sharp Elegant Gold Line */}
            <motion.div
                initial={{ width: "20rem", opacity: 0.6 }}
                animate={{ width: "60rem", opacity: 0.9 }}
                transition={{
                    ease: "easeInOut",
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-24 z-50 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            />

            {/* Left gradient cone - Subtle Golden Atmosphere */}
            <motion.div
                initial={{ opacity: 0.2, width: "25rem" }}
                animate={{ opacity: 0.4, width: "45rem" }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute right-1/2 top-0 h-96 w-[45rem] overflow-visible bg-gradient-conic from-pagani-gold/30 via-pagani-gold/5 to-transparent [--conic-position:from_70deg_at_center_top]"
            />

            {/* Right gradient cone - Subtle Golden Atmosphere */}
            <motion.div
                initial={{ opacity: 0.2, width: "25rem" }}
                animate={{ opacity: 0.4, width: "45rem" }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute left-1/2 top-0 h-96 w-[45rem] bg-gradient-conic from-transparent via-pagani-gold/5 to-pagani-gold/30 [--conic-position:from_290deg_at_center_top]"
            />
        </div>
    );
}
