const FeaturedInSection = () => {
  const tools = [
    { name: 'Zapier', logo: '⚡' },
    { name: 'Make', logo: '🔧' },
    { name: 'n8n', logo: '🔗' },
    { name: 'Notion', logo: '📝' },
    { name: 'Airtable', logo: '📊' },
    { name: 'OpenAI', logo: '🤖' }
  ];

  return (
    <section className="py-20 border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-foreground-muted text-sm uppercase tracking-wide font-medium">
            Trusted integrations with
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex items-center space-x-3 glass-card px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-2xl">{tool.logo}</span>
              <span className="text-foreground-secondary font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;