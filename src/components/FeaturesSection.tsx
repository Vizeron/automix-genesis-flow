import { Gear, Phone, Robot, Magnet } from '@phosphor-icons/react';
const FeaturesSection = () => {
  const features = [{
    title: 'Automations',
    description: 'Streamline your dental practice with custom automated workflows',
    icon: Gear
  }, {
    title: 'Voice Agents',
    description: 'AI-powered phone assistants that handle calls and appointments',
    icon: Phone
  }, {
    title: 'AI Agents',
    description: 'Intelligent chatbots for patient communication and support',
    icon: Robot
  }, {
    title: 'Lead Generators',
    description: 'Advanced systems to attract and convert potential patients',
    icon: Magnet
  }];
  return <section id="features" className="py-12 pb-14">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Powerful 
            <span className="text-primary "> Services</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">We leverage cutting-edge AI automation to fill your dental practice
with qualified patients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={feature.title} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto glow-border group-hover:animate-glow-pulse">
                  <feature.icon size={32} className="text-primary" weight="light" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-foreground-secondary leading-relaxed">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;