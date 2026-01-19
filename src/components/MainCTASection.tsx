const MainCTASection = () => {
  return <section id="contact" className="py-14 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
              Services
              <span className="text-primary"> Discontinued</span>
            </h2>
            <p className="text-xl text-foreground-secondary mb-8">
              I'm no longer accepting automation projects or consultations.
            </p>
            <div className="glass-card p-8 rounded-2xl inline-block">
              <p className="text-foreground-muted">
                Thank you for your past interest in OSMAutomation. This website is preserved as a portfolio of previous work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MainCTASection;