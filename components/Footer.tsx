export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-black border-t border-white/10 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/30 uppercase tracking-widest">
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <p className="text-sm font-bold text-white mb-1">Renault Express</p>
                    <p className="text-xs">&copy; 2026 Hommage à une Légende.</p>
                </div>
                <div className="flex gap-8">
                    <button className="hover:text-pagani-gold transition-colors text-xs">Histoire</button>
                    <button className="hover:text-pagani-gold transition-colors text-xs">Fiche Technique</button>
                    <button className="hover:text-pagani-gold transition-colors text-xs">Contact</button>
                </div>
            </div>
        </footer>
    );
}
