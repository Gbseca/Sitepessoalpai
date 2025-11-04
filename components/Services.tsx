
import React from 'react';

const ServiceCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
            <i className={`fas ${icon} text-3xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const coverages = [
        { icon: "fa-car", title: "Carros", description: "Proteção completa para seu veículo de passeio." },
        { icon: "fa-motorcycle", title: "Motos", description: "Segurança para você rodar com tranquilidade." },
        { icon: "fa-truck-pickup", title: "Utilitários", description: "Cobertura para seu instrumento de trabalho." },
        { icon: "fa-truck", title: "Caminhões", description: "Proteção para quem move o Brasil." },
    ];

    const mainCoverages = [
        { icon: "fa-fire-extinguisher", title: "Roubo, Colisão e Incêndio" },
        { icon: "fa-car-burst", title: "Proteção para Terceiros" },
        { icon: "fa-car-on", title: "Carro Reserva" },
        { icon: "fa-user-shield", title: "AP/APP Acidente Pessoal" },
        { icon: "fa-globe-americas", title: "Cobertura Nacional" },
        { icon: "fa-map-marked-alt", title: "Rastreador com monitoramento" },
        { icon: "fa-gavel", title: "Assistência Jurídica" },
        { icon: "fa-life-ring", title: "Assistência 24H" },
        { icon: "fa-window-maximize", title: "Proteção de Vidros e Faróis"},
        { icon: "fa-hammer", title: "Oficina de Funilaria Própria"},
        { icon: "fa-file-invoice-dollar", title: "100% da Fipe (sem leilão)"},
        { icon: "fa-id-card", title: "Sem Análise de Perfil"},
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Proteção Veicular para Todos</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Oferecemos o melhor custo-benefício para carros, motos, utilitários e caminhões.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {coverages.map(service => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
                
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Nossas Coberturas Detalhadas</h3>
                     <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Confira tudo o que a proteção Moove oferece para você.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                    {mainCoverages.map(item => (
                        <div key={item.title} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                           <i className={`fas ${item.icon} text-3xl text-blue-600 mb-3`}></i>
                           <p className="font-semibold text-gray-700">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
