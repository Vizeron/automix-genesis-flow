import { CheckCircle, VideoCamera } from '@phosphor-icons/react';
const VSLSection = () => {
  const benefits = [{
    title: 'Zero Learning Curve',
    description: 'We don\'t just hand you software and wish you luck. We build, launch, and manage everything — while you focus on running your business and serving customers.'
  }, {
    title: 'Industry-Specific Intelligence',
    description: 'Our AI understands home service calls — from leak repairs and HVAC tune-ups to deep cleanings. It sounds natural, handles real customer questions, and knows how to book the right job every time.'
  }, {
    title: 'Complete Customer Journey',
    description: 'From the first call or website visit to job completion and follow-up, our automations cover every touchpoint. No more lost leads, missed appointments, or forgotten follow-ups.'
  }];
  return <section className="py-10 pb-14">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="animate-fade-in">
            <div className="relative glass-card rounded-2xl overflow-hidden glow-border aspect-video flex items-center justify-center">
              <div className="text-center space-y-4">
                <VideoCamera size={64} className="text-primary mx-auto" weight="fill" />
                <p className="text-2xl font-semibold text-foreground-secondary">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
                Why Choose Our{" "}
                <span className="text-primary">AI Solutions?</span>
              </h2>
              <p className="text-xl text-foreground-secondary">
                What makes our approach different (and more profitable)
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