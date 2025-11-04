
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onQuoteClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'Sobre' },
        { href: '#services', label: 'Coberturas' },
        { href: '#benefits', label: 'Vantagens' },
        { href: '#testimonials', label: 'Depoimentos' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-800">Wagner Vitorino</a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>{link.label}</a>
                    ))}
                </nav>
                <div className="flex items-center">
                    <button onClick={onQuoteClick} className="hidden md:block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                        Fazer Cotação
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 focus:outline-none">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl ${isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'}`}></i>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-xl">
                    <div className="flex flex-col items-center py-4 space-y-4">
                         {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-gray-800 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
                        ))}
                        <button onClick={() => { onQuoteClick(); setIsMenuOpen(false); }} className="w-full mx-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                            Fazer Cotação
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
