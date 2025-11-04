
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Referral from './components/Referral';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white text-gray-800 font-sans leading-normal tracking-tight">
            <Header onQuoteClick={scrollToContact} />
            <main>
                <Hero onQuoteClick={scrollToContact} />
                <About />
                <Services />
                <Benefits onQuoteClick={scrollToContact} />
                <Testimonials />
                <Referral onQuoteClick={scrollToContact} />
                <Contact />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default App;
