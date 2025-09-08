import { CheckCircle } from '@phosphor-icons/react';
const VSLSection = () => {
  const benefits = [{
    title: 'Zero Learning Curve',
    description: 'We don\'t hand you software and say "good luck." We build, deploy, and manage everything while you focus on dentistry.'
  }, {
    title: 'Dental-Specific Intelligence',
    description: 'Our AI knows dental terminology, insurance processes, and patient concerns. It doesn\'t sound like a generic chatbot.'
  }, {
    title: 'Complete Patient Journey',
    description: 'From first website visit to treatment completion, we automate every touchpoint. Nothing falls through the cracks.'
  }];
  return <section className="py-10 pb-14">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="animate-fade-in">
            <div className="relative glass-card rounded-2xl overflow-hidden glow-border">
              <div style={{padding:"56.26% 0 0 0", position:"relative"}}>
                <iframe 
                  src="https://player.vimeo.com/video/1116850556?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
                  title="Vsl"
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              
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