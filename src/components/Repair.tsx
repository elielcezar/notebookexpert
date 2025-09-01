import aboutImg from '../assets/honestidade.webp'

export default function Repair() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex align-center justify-center">
                        <img src={aboutImg} alt="About" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[var(--blue)]">Vale a pena arrumar meu notebook?</h2>
                        <h3 className="text-xl font-semibold mb-4">Em 95% dos casos, vale a pena <strong>sim!</strong></h3>
                        <p className="mb-6">
                            É mais acessível que você imagina e todos os serviços tem garantia.
                            Conheça a melhor assistência de notebooks de Curitiba
                        </p>
                        <p className="mb-6">
                            Traga seu notebook até nosso laboratório para uma análise precisa e totalmente gratuita!
                        </p>                        
                        <button className="btn-primary">
                            Ligue agora! (41) 9999-9999
                        </button>                        
                    </div>                    
                </div>            
            </div>
        </section>        
    )
}