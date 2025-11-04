
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="lg:flex items-center justify-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                         <div className="relative">
                            <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7185743?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Homem ao lado de um carro moderno" className="rounded-lg shadow-2xl w-full" />
                            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                                <i className="fas fa-quote-left text-2xl opacity-50 mb-2"></i>
                                <p className="text-lg font-semibold">"Meu compromisso é com sua segurança e paz de espírito."</p>
                                <p className="text-sm mt-2">- Wagner Vitorino</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Moove Proteção: Você <span className="text-blue-600">24h</span> protegido!</h2>
                        <p className="text-lg text-gray-600 mb-6">
                           A Moove Proteção Veicular, representada por Wagner Vitorino em São Gonçalo, é uma associação que oferece um serviço completo de Assistência 24h em todo território nacional, proporcionando tranquilidade e segurança inigualáveis aos nossos beneficiários.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                           Com a Moove, você conta com suporte contínuo e eficiente. Viaje tranquilo com sua família ou a trabalho, sabendo que em qualquer eventualidade, desde um pneu furado até a necessidade de um reboque, estaremos prontos para te socorrer, 365 dias por ano.
                        </p>
                        <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                           <i className="fas fa-map-marker-alt text-4xl text-blue-500 mr-4"></i>
                           <div>
                                <h3 className="font-bold text-xl text-gray-800">Atendimento em São Gonçalo e todo o Rio de Janeiro</h3>
                                <p className="text-gray-600">Sede local com a força de uma das maiores do Brasil para te atender onde você estiver.</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;