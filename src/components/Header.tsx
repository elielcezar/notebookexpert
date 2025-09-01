import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header className="bg-white">
            <div className="container">
                <div className="flex justify-between items-center">                
                    <div className="w-1/3 flex items-center">
                        <p className="text-xl tracking-tight text-[var(--blue)]"><strong>Suporte 24h</strong> (41) 3029-8746</p>
                    </div>
                    <div className="w-1/3 flex items-start h-26 pt-2 justify-center">
                        <img src={logo} alt="NotebookExpert" className="h-auto w-[140px] block"/>
                    </div>
                    <div className="w-1/3 flex items-center justify-end">              
                        <a href="#contact" className="btn-primary">
                            Área do Cliente
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}