
import React from 'react';

interface BenefitsProps {
    onQuoteClick: () => void;
}

const BenefitItem: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <i className={`fas ${icon} text-xl`}></i>
            </div>
        </div>
        <div className="ml-4">
            <h3 className="text-lg leading-6 font-bold text-white">{title}</h3>
            <p className="mt-2 text-base text-blue-200">{text}</p>
        </div>
    </div>
);


const Benefits: React.FC<BenefitsProps> = ({ onQuoteClick }) => {
    return (
        <section id="benefits" className="py-20 bg-blue-700 bg-opacity-90" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485291571150-772b6c19da12?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <div className="container mx-auto px-6">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-300 font-semibold tracking-wide uppercase">Vantagens</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Proteção para seu veículo com o melhor custo-benefício!
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-blue-200 lg:mx-auto">
                        Fácil, sem burocracia e com a solidez de uma das maiores do Brasil.
                    </p>
                </div>

                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
                        <BenefitItem icon="fa-credit-card" title="Sem consulta SPC/Serasa" text="Aprovação facilitada para você proteger seu veículo sem complicações." />
                        <BenefitItem icon="fa-user-check" title="Sem análise de perfil" text="O valor da sua proteção não muda por idade, local ou tempo de CNH." />
                        <BenefitItem icon="fa-rocket" title="Fácil e sem burocracia" text="Processo de adesão rápido e simples para você não perder tempo." />
                        <BenefitItem icon="fa-hand-holding-dollar" title="Preço justo" text="O melhor custo-benefício do mercado para proteger seu patrimônio." />
                        <BenefitItem icon="fa-building-shield" title="Solidez e Confiança" text="Conte com a estrutura de uma das maiores associações do Brasil." />
                        <BenefitItem icon="fa-tools" title="As melhores oficinas" text="Rede credenciada com os melhores profissionais para cuidar do seu veículo." />
                    </dl>
                </div>
                <div className="text-center mt-16">
                     <button onClick={onQuoteClick} className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-2xl">
                        <i className="fas fa-file-signature mr-2"></i> Quero Minha Cotação
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Benefits;