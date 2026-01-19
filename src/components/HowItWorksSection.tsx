import { MapPin, Gear, Eye } from '@phosphor-icons/react';
const HowItWorksSection = () => {
  const steps = [{
    number: '01',
    title: 'Map Your Workflows',
    description: 'We analyze your current processes to identify automation opportunities and bottlenecks',
    icon: MapPin
  }, {
    number: '02',
    title: 'Design Automations',
    description: 'Our experts create custom workflows tailored to your specific business needs and goals',
    icon: Gear
  }, {
    number: '03',
    title: 'Run & Monitor',
    description: 'We deploy your automations and provide ongoing monitoring and optimization support',
    icon: Eye
  }];
  return <section id="how-it-works" className="py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            How It 
            <span className="text-primary"> Worked Previously</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            This process is no longer active and is shown for informational purposes only.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => <div key={step.number} className="relative group animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Connection Line */}
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" style={{
            transform: 'translateX(-50%)'
          }}>
                </div>}
              
              <div className="glass-card p-8 rounded-2xl text-center relative z-10 hover:scale-105 transition-all duration-300">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 glow-border">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <step.icon size={48} className="text-primary mx-auto" weight="light" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>)}
        </div>

      </div>
    </section>;
};
export default HowItWorksSection;