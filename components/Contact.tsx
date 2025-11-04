
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log({ name, phone, vehicle });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto bg-white p-12 rounded-lg shadow-xl">
                       <i className="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
                       <h2 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h2>
                       <p className="text-lg text-gray-600">Sua solicitação de cotação foi recebida com sucesso. Wagner Vitorino entrará em contato com você em breve!</p>
                    </div>
                </div>
            </section>
        );
    }
    

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Faça sua Cotação Gratuita</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Preencha os dados abaixo e receba uma proposta personalizada sem compromisso.</p>
                </div>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome Completo</label>
                            <input 
                                type="text" 
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                placeholder="Seu nome"
                                required 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefone / WhatsApp</label>
                            <input 
                                type="tel" 
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                placeholder="(21) 99999-9999"
                                required 
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="vehicle" className="block text-gray-700 font-bold mb-2">Veículo (Modelo e Ano)</label>
                            <input 
                                type="text" 
                                id="vehicle"
                                value={vehicle}
                                onChange={(e) => setVehicle(e.target.value)}
                                className="w-full px-4 py-3 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                placeholder="Ex: Honda Civic 2022"
                                required 
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg text-lg">
                            <i className="fas fa-paper-plane mr-2"></i> Enviar para Cotação
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
