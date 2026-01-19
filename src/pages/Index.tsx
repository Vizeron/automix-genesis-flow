
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import NoticeBanner from '@/components/NoticeBanner';
import HeroSection from '@/components/HeroSection';
import VSLSection from '@/components/VSLSection';
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
    <div className="min-h-screen pt-10">
      <NoticeBanner />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VSLSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
