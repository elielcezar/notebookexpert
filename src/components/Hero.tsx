import heroBg from '../assets/bg-top.webp'
import { openWhatsApp } from '../utils/helpers'

export default function Hero() {
    const handleWhatsAppClick = () => {
        openWhatsApp('Olá! Vi o site e gostaria de solicitar um orçamento para assistência técnica do meu notebook.');
    };
    return (
        <section 
            className="py-[150px] 2xl:py-[200px] bg-center bg-no-repeat bg-cover 2xl:bg-auto text-white"
            style={{
                backgroundImage: `url(${heroBg}), linear-gradient(90deg, rgb(17, 109, 180) 0%, rgb(34, 142, 218) 100%)`
            }}
        >
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Assistência técnica para<br/>
                            <span className="text-blue-200">notebooks em Curitiba</span>
                        </h1>
                        <p className="text-xl mb-8 text-white">
                            A melhor de Curitiba em conserto de notebooks e computadores, com atendimento personalizado e garantia total.
                        </p>
                        <button 
                            onClick={handleWhatsAppClick}
                            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
                        >
                            <i className="fab fa-whatsapp mr-2"></i>
                            Ligue agora! (41) 9999-9999
                        </button>
                    </div>
                    <div className="relative">
                    
                    </div>
                </div>
            </div>
        </section>
    )
}