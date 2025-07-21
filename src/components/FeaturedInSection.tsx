const FeaturedInSection = () => {
  const tools = [
    { name: 'Zapier', logo: '⚡' },
    { name: 'Make', logo: '🔧' },
    { name: 'n8n', logo: '🔗' },
    { name: 'Notion', logo: '📝' },
    { name: 'Airtable', logo: '📊' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Make', logo: '🔧' },
    { name: 'n8n', logo: '🔗' },
    { name: 'Notion', logo: '📝' },
    { name: 'Airtable', logo: '📊' },
    { name: 'OpenAI', logo: '🤖' }
  ];

  return (
    <section className="py-20 border-b border-border/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-foreground-muted text-sm uppercase tracking-wide font-medium">
            Trusted integrations with
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right space-x-8">
            {tools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex items-center space-x-3 glass-card px-6 py-3 rounded-lg flex-shrink-0"
              >
                <span className="text-2xl">{tool.logo}</span>
                <span className="text-foreground-secondary font-medium whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;