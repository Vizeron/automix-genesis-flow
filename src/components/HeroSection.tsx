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
  return <section id="hero" className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden pb-0">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-8xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 glow-text animate-fade-in">
            We Fill Your Schedule While \nYou <span className="text-primary">Focus On Teeth</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>Stop losing patients to busy signals and missed calls. Our 24/7 AI receptionist captures every lead and converts them into booked appointments while you're focused on what matters most.</p>
          
          {/* CTA Button */}
          <div className="mb-12 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <button onClick={scrollToContact} className="neuro-button-primary px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center space-x-2 group">
              <span>Book a Free Audit</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Trusted Integrations Carousel */}
          <div style={{
          animationDelay: '0.6s'
        }} className="animate-fade-in  ">
            <p className="text-foreground-muted text-sm uppercase tracking-wide font-medium mb-8">
              Trusted integrations with
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right space-x-8">
                {['/lovable-uploads/82069c66-9497-4f0d-87ec-450c4199c815.png', '/lovable-uploads/31bf2b70-3166-43b7-92a2-76c544aedb30.png', '/lovable-uploads/69a6f9b5-7bdd-4abd-8eda-02dbace0092f.png', '/lovable-uploads/08acc40c-edad-4def-9b89-e6021c3de26b.png', '/lovable-uploads/f12c8ebc-17fe-45e3-b4ba-71bc05cc9ee5.png', '/lovable-uploads/46924668-e381-455a-a20e-194914b6ed60.png', '/lovable-uploads/f70251fe-b1d1-45af-ae27-73d025ac587f.png', '/lovable-uploads/82069c66-9497-4f0d-87ec-450c4199c815.png', '/lovable-uploads/31bf2b70-3166-43b7-92a2-76c544aedb30.png', '/lovable-uploads/69a6f9b5-7bdd-4abd-8eda-02dbace0092f.png', '/lovable-uploads/08acc40c-edad-4def-9b89-e6021c3de26b.png', '/lovable-uploads/f12c8ebc-17fe-45e3-b4ba-71bc05cc9ee5.png', '/lovable-uploads/82069c66-9497-4f0d-87ec-450c4199c815.png', '/lovable-uploads/31bf2b70-3166-43b7-92a2-76c544aedb30.png', '/lovable-uploads/69a6f9b5-7bdd-4abd-8eda-02dbace0092f.png', '/lovable-uploads/08acc40c-edad-4def-9b89-e6021c3de26b.png', '/lovable-uploads/f12c8ebc-17fe-45e3-b4ba-71bc05cc9ee5.png', '/lovable-uploads/46924668-e381-455a-a20e-194914b6ed60.png', '/lovable-uploads/f70251fe-b1d1-45af-ae27-73d025ac587f.png', '/lovable-uploads/82069c66-9497-4f0d-87ec-450c4199c815.png', '/lovable-uploads/31bf2b70-3166-43b7-92a2-76c544aedb30.png', '/lovable-uploads/69a6f9b5-7bdd-4abd-8eda-02dbace0092f.png', '/lovable-uploads/08acc40c-edad-4def-9b89-e6021c3de26b.png', '/lovable-uploads/f12c8ebc-17fe-45e3-b4ba-71bc05cc9ee5.png'].map((logoPath, index) => <div key={`logo-${index}`} className="flex-shrink-0">
                    <img src={logoPath} alt="Integration logo" className="h-8 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  </div>)}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;