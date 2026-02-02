export default function SpecsGrid() {
    return (
        <section className="py-20 px-6 bg-black relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 border border-white/10 hover:border-pagani-gold transition-colors duration-300 group">
                    <h3 className="text-4xl font-orbitron text-white mb-2 group-hover:text-pagani-gold transition-colors">1985</h3>
                    <p className="text-white/50 tracking-widest uppercase text-sm">Début de Légende</p>
                </div>
                <div className="p-8 border border-white/10 hover:border-pagani-gold transition-colors duration-300 group">
                    <h3 className="text-4xl font-orbitron text-white mb-2 group-hover:text-pagani-gold transition-colors">775 <span className="text-xl">KG</span></h3>
                    <p className="text-white/50 tracking-widest uppercase text-sm">Charge Utile</p>
                </div>
                <div className="p-8 border border-white/10 hover:border-pagani-gold transition-colors duration-300 group">
                    <h3 className="text-4xl font-orbitron text-white mb-2 group-hover:text-pagani-gold transition-colors">1.9 <span className="text-xl">L</span></h3>
                    <p className="text-white/50 tracking-widest uppercase text-sm">Moteur Diesel Robuste</p>
                </div>
            </div>
        </section>
    );
}
