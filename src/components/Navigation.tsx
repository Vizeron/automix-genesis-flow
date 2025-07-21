import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur border-b border-border' : ''
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg glow-border"></div>
              <span className="text-xl font-bold glow-text">Automix</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground-secondary hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="neuro-button-primary px-6 py-2.5 rounded-lg text-sm font-medium"
              >
                Book Free Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-card"
            >
              {isMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <List size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`absolute top-0 right-0 h-full w-80 glass-card border-l border-border transform transition-transform duration-300 ${
            isMenuOpen ? 'animate-slide-in-right' : 'animate-slide-out-right'
          }`}>
            <div className="p-6 pt-20">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full neuro-button-primary px-6 py-3 rounded-lg font-medium"
                  >
                    Book Free Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;