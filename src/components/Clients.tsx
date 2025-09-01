import { useEffect } from 'react';
import { loadReviews } from '../utils/helpers';

export default function Clients() {
    
    useEffect(() => {    
        loadReviews();
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex text-yellow-500 text-2xl mr-4">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="text-gray-600">
                            <span id="average-rating" className="text-3xl font-bold text-gray-800">4.8</span>
                            <span className="text-lg">/ 5.0</span>
                        </div>
                    </div>
                    <p id="reviews-count" className="text-gray-600">Baseado em mais de 150 avaliações no Google</p>
                    <div className="flex items-center justify-center mt-4 space-x-4">
                        <div className="bg-white px-4 py-2 rounded-lg shadow-md border">
                            <div className="flex items-center">
                                <i className="fab fa-google text-blue-600 mr-2"></i>
                                <span className="text-sm font-medium text-gray-700">Empresa Verificada</span>
                            </div>
                        </div>
                        <a href="https://www.google.com/search?q=notebook+expert+curitiba" 
                        target="_blank" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
                            Ver todas as avaliações no Google →
                        </a>
                    </div>
                </div>
                
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper" id="reviews-container">                        
                        <div className="reviews-loading">
                            <div className="loading-spinner mr-3"></div>
                            <span>Carregando avaliações do Google...</span>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>                
               
            </div>
        </section>
    )
}