import logo from '../assets/logo-w.svg'

export default function Footer() {
    return (
        <footer className="bg-[var(--darkblue)] text-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src={logo} alt="NotebookExpert Logo" className="w-40 mb-4"/>                    
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-xl">Serviços</h4>
                    <ul className="space-y-2 text-sm text-white">
                        <li>Conserto de Notebooks</li>
                        <li>Manutenção Preventiva</li>
                        <li>Recuperação de Dados</li>
                        <li>Upgrade de Hardware</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-xl">Contato</h4>
                    <ul className="space-y-2 text-sm text-white">
                        <li>(41) 9999-9999</li>
                        <li>contato@notebookexpert.com.br</li>
                        <li>Rua Exemplo, 123</li>
                        <li>Curitiba - PR</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-xl">Redes Sociais</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-white transition-colors text-2xl mr-9">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white hover:text-white transition-colors text-2xl mr-9">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-white hover:text-white transition-colors text-2xl">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-400 mt-12 py-4 text-center text-sm text-gray-400">
                <p>&copy; 2024 NotebookExpert. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
        
    )
}