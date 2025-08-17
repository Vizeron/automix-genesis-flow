
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedInSection from '@/components/FeaturedInSection';
import VSLSection from '@/components/VSLSection';
import MainCTASection from '@/components/MainCTASection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Initial page load animation
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedInSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VSLSection />
        <MainCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
