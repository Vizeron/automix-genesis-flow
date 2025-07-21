import { useState } from 'react';
import { Rocket, Building, Users } from '@phosphor-icons/react';

const WhyUsSection = () => {
  const [activeTab, setActiveTab] = useState('startups');

  const scenarios = {
    startups: {
      title: 'For Startups',
      icon: Rocket,
      description: 'Move fast and scale efficiently with automation that grows with you',
      examples: [
        'Automated lead nurturing sequences that convert 40% better',
        'Customer onboarding flows that reduce support tickets by 60%',
        'Financial reporting that updates in real-time across all platforms'
      ]
    },
    agencies: {
      title: 'For Agencies',
      icon: Building,
      description: 'Deliver better results for clients while reducing operational overhead',
      examples: [
        'Client reporting dashboards that update automatically',
        'Campaign optimization workflows that run 24/7',
        'Resource allocation systems that maximize team efficiency'
      ]
    },
    ops: {
      title: 'For Ops Teams',
      icon: Users,
      description: 'Eliminate manual processes and focus on strategic initiatives',
      examples: [
        'Invoice processing that handles 99% of transactions automatically',
        'Compliance monitoring that prevents issues before they occur',
        'Data synchronization across all business systems'
      ]
    }
  };

  const tabs = Object.keys(scenarios) as Array<keyof typeof scenarios>;

  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Why Choose 
            <span className="text-primary"> Automix?</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8">
            We're not just another automation agency. We're your strategic partner in building 
            scalable, intelligent systems that transform how you work.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-2 rounded-xl inline-flex space-x-2">
            {tabs.map((tab) => {
              const scenario = scenarios[tab];
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'neuro-button-primary'
                      : 'hover:bg-background-tertiary/50'
                  }`}
                >
                  <scenario.icon size={20} weight={isActive ? 'fill' : 'light'} />
                  <span className="font-medium">{scenario.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Scenario Content */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8 lg:p-12 rounded-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-border">
                {(() => {
                  const Icon = scenarios[activeTab as keyof typeof scenarios].icon;
                  return <Icon size={32} className="text-primary" weight="light" />;
                })()}
              </div>
              <h3 className="text-2xl font-bold mb-4">{scenarios[activeTab as keyof typeof scenarios].title}</h3>
              <p className="text-xl text-foreground-secondary">
                {scenarios[activeTab as keyof typeof scenarios].description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {scenarios[activeTab as keyof typeof scenarios].examples.map((example, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl border border-primary/20"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 glow-border"></div>
                    <p className="text-foreground-secondary">{example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;