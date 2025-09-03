import aboutImg from '../assets/honestidade.webp'

export default function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--blue)]">Sobre a Notebook Expert</h2>
                        <h3 className="text-2xl font-semibold mb-4">MORE THAN JUST REPAIR YOUR PRODUCTS.</h3>
                        <p className="text-gray-600 mb-6">
                        Fundada em 2014, a Notebook Expert é uma empresa especializada em conserto e manutenção de notebooks, com foco na excelência técnica e no atendimento personalizado.
                        </p>
                        <p className="text-gray-600 mb-6">
                        Nossa equipe é composta por técnicos certificados com vasta experiência em diversas marcas e modelos. Utilizamos apenas peças originais e oferecemos garantia estendida em todos os nossos serviços.
                        </p>
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                                    <i className="fas fa-certificate text-2xl text-[var(--blue)]"></i>
                                </div>
                                <span className="text-sm text-gray-600">ISO</span>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                                    <i className="fas fa-award text-2xl text-[var(--blue)]"></i>
                                </div>
                                <span className="text-sm text-gray-600">Certified</span>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                                    <i className="fas fa-check-circle text-2xl text-[var(--blue)]"></i>
                                </div>
                                <span className="text-sm text-gray-600">Verified</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex align-center justify-center">
                        <img src={aboutImg} alt="About" className="w-full h-full object-cover" />                        
                    </div>
                </div>
            </div>
        </section>
    )
}