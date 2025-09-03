export default function Highlights() {
    return (
        <>
            <section id="destaques">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-30 justify-end items-end py-10">
                        <div className="text-center p-8 justify-self-end">
                            <i className="fab fa-windows text-8xl text-[var(--blue)] mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Notebooks & Netbooks</h3>
                            <p className="text-gray-600">
                                Instalação Sistema Operacional,<br/>
                                Instalação de Software, Gestão<br/>
                                de Aplicações,<br/>
                                Recuperação de Dados,<br/>
                                Manutenção Preventiva
                            </p>
                        </div>
                        <div className="text-center p-8 justify-self-start">
                            <i className="fab fa-apple text-8xl text-gray-800 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">MacBook & iMac</h3>
                            <p className="text-gray-600">
                                Instalação macOS,<br/>
                                Instalação de Software, Gestão<br/>
                                de Aplicações,<br/>
                                Recuperação de Dados,<br/>
                                Todos os Serviços em geral
                            </p>
                        </div>
                    </div>            
                </div>
            </section>
            <section id="services" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center service-card">
                            <i className="fas fa-clock text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Atendimento Rápido</h3>
                            <p className="text-gray-600">
                                Ligamos em menos de 2 horas<br/>
                                para te informar sobre o<br/>
                                diagnóstico
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center service-card">
                            <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Garantia de Serviço</h3>
                            <p className="text-gray-600">
                                Todos os reparos com<br/>
                                garantia de 6 meses
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center service-card">
                            <i className="fas fa-user-tie text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Equipe Especializada</h3>
                            <p className="text-gray-600">
                                Laboratório próprio e<br/>
                                técnicos experientes
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}