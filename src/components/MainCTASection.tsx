const MainCTASection = () => {
  return (
    <section id="contact" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
              Let's Automate
              <span className="text-primary"> Your Business</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Pick a time — we'll audit your system for free and show you exactly 
              how automation can transform your operations
            </p>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="glass-card rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/3] bg-background-tertiary rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-border">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
                <p className="text-foreground-secondary mb-4">
                  Embed your Calendly link here to allow instant booking
                </p>
                <button className="neuro-button-primary px-6 py-3 rounded-lg">
                  Schedule Your Free Audit
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-foreground-muted animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Free 30-minute audit</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Expert analysis included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCTASection;