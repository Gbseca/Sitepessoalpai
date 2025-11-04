
import React from 'react';

interface ReferralProps {
    onQuoteClick: () => void;
}

const Referral: React.FC<ReferralProps> = ({ onQuoteClick }) => {
    return (
        <section id="referral" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-blue-600 rounded-2xl shadow-xl text-white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seja um Associado Indicador!</h2>
                        <p className="text-xl md:text-2xl mb-2">
                           Ganhe <span className="font-extrabold text-yellow-300">20% de Desconto</span> em sua Mensalidade a Cada Indicação.
                        </p>
                        <p className="text-blue-200 text-lg">
                           Com apenas 5 indicações bem-sucedidas, sua mensalidade pode sair de graça! Aproveite para economizar e compartilhar a segurança que nossa proteção veicular oferece. Fale comigo e saiba mais!
                        </p>
                    </div>
                    <div className="lg:w-1/3 flex justify-center lg:justify-end">
                        <button onClick={onQuoteClick} className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-2xl">
                           <i className="fas fa-users mr-2"></i> Quero Indicar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Referral;
