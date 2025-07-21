import { ArrowRight, Devices } from '@phosphor-icons/react';

const FinalCTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 glow-text">
              Take Control
              <br />
              of Your 
              <span className="text-primary"> Operations</span>
            </h2>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
              Stop wasting time on manual processes. Start building the automated business 
              you've always envisioned. Join hundreds of companies already saving 30+ hours per week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="neuro-button-primary px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center justify-center space-x-2 group"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="flex items-center space-x-4 text-sm text-foreground-muted">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full glow-border"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full glow-border"></div>
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Dashboard */}
              <div className="glass-card p-6 rounded-2xl glow-border">
                <div className="flex items-center space-x-3 mb-6">
                  <Devices size={24} className="text-primary" />
                  <span className="font-semibold">Automation Dashboard</span>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">47</div>
                      <div className="text-xs text-foreground-muted">Active Workflows</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">98.7%</div>
                      <div className="text-xs text-foreground-muted">Success Rate</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">156h</div>
                      <div className="text-xs text-foreground-muted">Time Saved</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Lead Processing', status: 'active', efficiency: '94%' },
                      { name: 'Invoice Generation', status: 'active', efficiency: '99%' },
                      { name: 'Customer Onboarding', status: 'active', efficiency: '87%' }
                    ].map((workflow, index) => (
                      <div key={workflow.name} className="glass-card p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full glow-border"></div>
                          <span className="text-sm font-medium">{workflow.name}</span>
                        </div>
                        <span className="text-xs text-primary">{workflow.efficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-xl animate-float">
                <div className="w-full h-full bg-primary/20 rounded-xl"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 glass-card rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full bg-primary-glow/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;