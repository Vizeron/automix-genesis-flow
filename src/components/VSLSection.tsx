import { CheckCircle } from '@phosphor-icons/react';
const VSLSection = () => {
  const benefits = [{
    title: 'Save 30+ Hours Weekly',
    description: 'Automate repetitive tasks and focus on what matters most'
  }, {
    title: 'Reduce Human Error',
    description: 'Eliminate mistakes with precision-built workflows'
  }, {
    title: 'Scale Operations',
    description: 'Handle 10x more work without hiring additional staff'
  }];
  return <section className="py-10 pb-14">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="animate-fade-in">
            <div className="relative glass-card rounded-2xl overflow-hidden glow-border">
              <div className="aspect-video bg-background-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-border">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-primary-foreground border-y-4 border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <p className="text-foreground-muted">Demo Video Coming Soon</p>
                </div>
              </div>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
                Why Choose{" "}
                <span className="text-primary">OSMAutomation?</span>
              </h2>
              <p className="text-xl text-foreground-secondary">
                Transform your business operations with our proven automation strategies
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => <div key={benefit.title} className="flex items-start space-x-4 glass-card p-6 rounded-xl animate-fade-in" style={{
              animationDelay: `${0.4 + index * 0.1}s`
            }}>
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" weight="fill" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-foreground-secondary">{benefit.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default VSLSection;