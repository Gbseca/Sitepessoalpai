
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Wagner Vitorino</h3>
                        <p className="text-gray-400">Consultor de Proteção Veicular Moove</p>
                        <p className="text-gray-400">São Gonçalo - Rio de Janeiro</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contato Rápido</h3>
                        <p className="text-gray-400 mb-2">
                           <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <i className="fab fa-whatsapp mr-2"></i> (21) 99999-9999
                           </a>
                        </p>
                        <p className="text-gray-400">
                           <a href="mailto:contato@wagnervitorino.com" className="hover:text-blue-400 transition-colors">
                            <i className="fas fa-envelope mr-2"></i> contato@wagnervitorino.com
                           </a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                           <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-facebook-f"></i></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Wagner Vitorino | Todos os direitos reservados.</p>
                    <p className="text-sm">Desenvolvido com tecnologia de ponta.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
