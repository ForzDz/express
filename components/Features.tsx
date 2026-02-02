export default function Features() {
    return (
        <section className="py-20 px-6 bg-black relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl mb-12 text-center font-orbitron text-white">L'ESPRIT DE L'ALGERIE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
                    <div className="h-64 md:h-96 bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative group">
                        <img
                            src="/images/zonda-sequence/3.jpg"
                            alt="Renault Express Oran"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="text-center z-20 p-6 relative">
                            <h4 className="text-pagani-gold text-xl font-orbitron mb-2">Oran 1995</h4>
                            <p className="text-white/80 text-sm font-medium">depuis 1995 dans nos rues.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-left">
                        <h3 className="text-2xl text-pagani-gold mb-4 uppercase tracking-widest font-orbitron">Le Partenaire Fiable</h3>
                        <p className="text-white/70 leading-relaxed font-light text-lg mb-6">
                            Des rues étroites de la Casbah aux routes des Hauts Plateaux, le Renault Express a transporté les rêves et le labeur de toute une génération.
                            Sa silhouette carrée et sa robustesse légendaire en font bien plus qu'un véhicule : c'est un membre de la famille.
                        </p>
                        <ul className="space-y-4 text-white/50">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-pagani-gold rounded-full" />
                                <span className="tracking-wide text-white/80">Suspension renforcée pour routes difficiles</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-pagani-gold rounded-full" />
                                <span className="tracking-wide text-white/80">Volume de chargement "Cube" optimisé</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-pagani-gold rounded-full" />
                                <span className="tracking-wide text-white/80">Mécanique simple et indestructible</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
