import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-rajdhani",
});

export const metadata: Metadata = {
    title: "Express | The Ultimate Performance",
    description: "Experience the legend of the Express.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${orbitron.variable} ${rajdhani.variable} antialiased bg-black text-white selection:bg-pagani-gold selection:text-black`}
            >
                {children}
            </body>
        </html>
    );
}
