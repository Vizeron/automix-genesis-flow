import { ArrowRight, Play } from '@phosphor-icons/react';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 glow-text animate-fade-in">
            The Modern
            <br />
            <span className="text-primary">Automation</span> Platform
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Transform your business operations with AI-powered automation. 
            We design, build, and deploy custom workflows that save you 30+ hours per week.
          </p>
          
          {/* CTA Button */}
          <div className="mb-16 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <button onClick={scrollToContact} className="neuro-button-primary px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center space-x-2 group">
              <span>Book a Free Audit</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;