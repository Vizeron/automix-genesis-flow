import { EnvelopeSimple, LinkedinLogo, TwitterLogo, InstagramLogo, TelegramLogo, WhatsappLogo, DiscordLogo, FacebookLogo } from '@phosphor-icons/react';
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
    label: 'Contact',
    href: '#contact'
  }];
  const socialLinks = [{
    icon: LinkedinLogo,
    href: 'https://www.linkedin.com/in/osmanabliazizov/',
    label: 'LinkedIn'
  }, {
    icon: TwitterLogo,
    href: 'https://x.com/VizeronR',
    label: 'Twitter'
  }, {
    icon: InstagramLogo,
    href: 'https://www.instagram.com/vizeron_mc/',
    label: 'Instagram'
  }, {
    icon: TelegramLogo,
    href: 'https://t.me/vizeron',
    label: 'Telegram'
  }, {
    icon: WhatsappLogo,
    href: 'https://wa.me/380689856594',
    label: 'WhatsApp'
  }, {
    icon: DiscordLogo,
    href: 'https://discordapp.com/users/vizeron_',
    label: 'Discord'
  }, {
    icon: FacebookLogo,
    href: 'https://www.facebook.com/100028199482081',
    label: 'Facebook'
  }];
  return <footer className="py-6 border-t border-border/30 bg-background-secondary/50 pb-6">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-8">
          {/* Brand */}
          <div className="col-span-2 order-1 md:order-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/d85d909e-0dcc-4c1e-8948-4e6e13075421.png" alt="Logo" className="w-40 h-15" />
            </div>
            <p className="text-foreground-secondary mb-6 max-w-md leading-relaxed">
              Transform your business operations with AI-powered automation. 
              We design, build, and deploy custom workflows that save you 30+ hours per week.
            </p>
            <div className="flex items-center space-x-2 glass-card p-3 rounded-lg inline-flex">
              <EnvelopeSimple size={16} className="text-primary" />
              <span className="text-foreground-secondary text-sm">osmautomation@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-2 md:order-2">
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <div className="space-y-4">
              {footerLinks.map(link => <button key={link.label} onClick={() => scrollToSection(link.href)} className="block text-foreground-secondary hover:text-primary transition-colors duration-200">
                  {link.label}
                </button>)}
            </div>
          </div>

          {/* Social & Legal */}
          <div className="order-3 md:order-3">
            <h3 className="font-semibold mb-6 text-lg">Connect</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 group" aria-label={social.label}>
                  <social.icon size={20} className="text-foreground-secondary group-hover:text-primary transition-colors duration-200" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-foreground-muted text-sm">© 2024 OSMAutomation. All rights reserved.</p>
          <p className="text-foreground-muted text-sm">Automate smarter. Grow faster.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;