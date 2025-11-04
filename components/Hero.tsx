import React from 'react';

interface HeroProps {
    onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop')` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-6 flex flex-col items-center animate-fade-in-up">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Wagner Vitorino" className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-xl mb-4 object-cover" />
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                    Proteção Veicular Completa com <span className="text-blue-400">Wagner Vitorino</span>
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl drop-shadow-md">
                    Seu consultor Moove em São Gonçalo e todo o Rio de Janeiro. Segurança e tranquilidade para você e seu veículo, 24h por dia.
                </p>
                <button onClick={onQuoteClick} className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-2xl">
                    <i className="fas fa-shield-alt mr-2"></i> Solicite sua Cotação Agora
                </button>
            </div>
            <div className="absolute bottom-10 w-full flex justify-center">
                <a href="#about" className="animate-bounce">
                   <i className="fas fa-chevron-down text-3xl text-white opacity-70"></i>
                </a>
            </div>
            {/* Fix: The `jsx` prop on the <style> tag is a Next.js feature. Using a standard <style> tag to fix the compatibility issue. */}
            <style>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;