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
  return <section id="hero" className="top-20 flex items-center justify-center relative overflow-hidden">
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
          
          {/* 3D Floating Object */}
          <div className="relative flex justify-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="relative">
              {/* Main Cube */}
              <div className="w-40 h-40 lg:w-60 lg:h-60 glass-card rounded-3xl transform rotate-12 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-6 flex items-center justify-center">
                  <div className="w-20 h-20 lg:w-32 lg:h-32 bg-primary/30 rounded-2xl glow-border animate-glow-pulse">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                      <Play size={32} className="text-primary-foreground" weight="fill" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl animate-float" style={{
              animationDelay: '0.5s'
            }}>
                <div className="w-full h-full bg-primary/20 rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 glass-card rounded-xl animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <div className="w-full h-full bg-primary-glow/30 rounded-xl"></div>
              </div>
              <div className="absolute top-8 -left-8 w-8 h-8 bg-primary rounded-full glow-border animate-float" style={{
              animationDelay: '2s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;