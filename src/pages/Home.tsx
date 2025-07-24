import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Banner } from '@/components/Banner';
import { ProductSection } from '@/components/ProductSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header scrolled={scrolled} />
      <Banner />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}