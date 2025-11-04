
import React, { useRef } from 'react';

const TestimonialCard: React.FC<{ name: string; location: string; text: string; avatar: string; }> = ({ name, location, text, avatar }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full transform hover:scale-105 transition-transform duration-300">
        <img className="w-20 h-20 rounded-full mb-4 object-cover" src={avatar} alt={name} />
        <p className="text-gray-600 mb-4 italic flex-grow">"{text}"</p>
        <div className="font-bold text-gray-800 mt-auto">{name}</div>
        <div className="text-sm text-gray-500">{location}</div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Carlos Silva",
            location: "Niterói, RJ",
            text: "Atendimento nota 10! O Wagner foi super atencioso e resolveu meu problema com o reboque rapidamente. Recomendo demais!",
            avatar: "https://picsum.photos/100/100?random=4"
        },
        {
            name: "Mariana Costa",
            location: "São Gonçalo, RJ",
            text: "Tive uma colisão e o suporte da Moove foi impecável. Sem dor de cabeça, tudo resolvido pela equipe. Estou muito satisfeita!",
            avatar: "https://picsum.photos/100/100?random=5"
        },
        {
            name: "José Ferreira",
            location: "Rio de Janeiro, RJ",
            text: "O preço é muito justo pelas coberturas que oferece. Finalmente achei uma proteção que cabe no meu bolso e é de confiança.",
            avatar: "https://picsum.photos/100/100?random=6"
        },
        {
            name: "Ana Pereira",
            location: "Maricá, RJ",
            text: "A indicação de um amigo valeu a pena! Economizei muito com o programa de indicação e a proteção é excelente.",
            avatar: "https://picsum.photos/100/100?random=7"
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth / 2; // Scroll by half the visible container width
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };


    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">O que nossos associados dizem</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">A satisfação de quem confia no nosso trabalho é a nossa maior propaganda.</p>
                </div>

                <div className="relative">
                    <button 
                        onClick={() => scroll('left')} 
                        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 z-10 transition-transform hover:scale-110"
                        aria-label="Anterior"
                    >
                        <i className="fas fa-chevron-left text-blue-600"></i>
                    </button>
                    <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide py-4 -mx-3 px-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] snap-center px-3">
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => scroll('right')} 
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 z-10 transition-transform hover:scale-110"
                        aria-label="Próximo"
                    >
                        <i className="fas fa-chevron-right text-blue-600"></i>
                    </button>
                </div>
            </div>
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
