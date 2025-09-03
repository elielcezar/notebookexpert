import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
    Laptop,    
    HardDrive,
    Cpu,
    Battery,
    Wifi,
    Settings
  } from "lucide-react";

export default function Services() {

    const services = [
        {
          icon: <Laptop className="w-8 h-8" />,
          title: "Reparo de Tela",
          description: "Substituição completa de telas LCD, LED e OLED danificadas ou com defeito."
        },
        {
          icon: <HardDrive className="w-8 h-8" />,
          title: "Recuperação de Dados",
          description: "Recuperamos seus arquivos importantes de HDs e SSDs danificados."
        },
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "Upgrade de Hardware",
          description: "Melhoramos a performance do seu notebook com novos componentes."
        },
        {
          icon: <Battery className="w-8 h-8" />,
          title: "Troca de Bateria",
          description: "Substituição de baterias viciadas por baterias originais de qualidade."
        },
        {
          icon: <Wifi className="w-8 h-8" />,
          title: "Problemas de Conectividade",
          description: "Conserto de placas Wi-Fi, Bluetooth e portas USB danificadas."
        },
        {
          icon: <Settings className="w-8 h-8" />,
          title: "Limpeza e Manutenção",
          description: "Limpeza interna, troca de pasta térmica e manutenção preventiva."
        }
      ];

    return (
        <>       
            <section id="servicos" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Nossos Serviços
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Oferecemos uma ampla gama de serviços especializados para manter seu notebook 
                    funcionando perfeitamente.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                        <CardHeader>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            {service.icon}
                            </div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                        </CardHeader>
                        <CardContent>
                        <CardDescription className="text-gray-600">
                            {service.description}
                        </CardDescription>
                        </CardContent>
                    </Card>
                    ))}
                </div>
                </div>
            </section>     
        </>        
    )
}