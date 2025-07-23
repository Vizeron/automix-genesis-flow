import { EnvelopeSimple, LinkedinLogo, TwitterLogo, InstagramLogo } from '@phosphor-icons/react';
const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const footerLinks = [{
    label: 'Home',
    href: '#hero'
  }, {
    label: 'How It Works',
    href: '#how-it-works'
  }, {
    label: 'Features',
    href: '#features'
  }, {
    label: 'Case Studies',
    href: '#case-studies'
  }, {
    label: 'Pricing',
    href: '#pricing'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const socialLinks = [{
    icon: LinkedinLogo,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: TwitterLogo,
    href: '#',
    label: 'Twitter'
  }, {
    icon: InstagramLogo,
    href: '#',
    label: 'Instagram'
  }];
  return <footer className="py-6 border-t border-border/30 bg-background-secondary/50 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-48 bg-primary rounded-lg glow-border"></div>
              <span className="text-2xl font-bold glow-text">Automix</span>
            </div>
            <p className="text-foreground-secondary mb-6 max-w-md leading-relaxed">
              Transform your business operations with AI-powered automation. 
              We design, build, and deploy custom workflows that save you 30+ hours per week.
            </p>
            <div className="flex items-center space-x-2 glass-card p-3 rounded-lg inline-flex">
              <EnvelopeSimple size={16} className="text-primary" />
              <span className="text-foreground-secondary text-sm">hello@automix.agency</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <div className="space-y-4">
              {footerLinks.map(link => <button key={link.label} onClick={() => scrollToSection(link.href)} className="block text-foreground-secondary hover:text-primary transition-colors duration-200">
                  {link.label}
                </button>)}
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Connect</h3>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 group" aria-label={social.label}>
                  <social.icon size={20} className="text-foreground-secondary group-hover:text-primary transition-colors duration-200" />
                </a>)}
            </div>
            
            <div className="space-y-3">
              <a href="#" className="block text-foreground-secondary hover:text-primary transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-foreground-secondary hover:text-primary transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-foreground-muted text-sm">
            © 2024 Automix. All rights reserved.
          </p>
          <p className="text-foreground-muted text-sm">
            Built with precision and powered by automation
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;