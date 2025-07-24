const FeaturedInSection = () => {
  const tools = [{
    name: 'Zapier',
    logo: '/lovable-uploads/c9a18ee8-9b5a-423b-a2de-e0e106a0c170.png'
  }, {
    name: 'Make',
    logo: '/lovable-uploads/b70d2638-ee83-4933-8eda-5d759d55fe77.png'
  }, {
    name: 'n8n',
    logo: '/lovable-uploads/af0fa5d2-673d-4100-bfa8-0757cbd79333.png'
  }, {
    name: 'Airtable',
    logo: '/lovable-uploads/a2282ce0-eb8d-4cec-b60f-448dbb00f669.png'
  }, {
    name: 'OpenAI',
    logo: '/lovable-uploads/e94a7a9e-c615-4442-a8fd-3bb3af75f526.png'
  }, {
    name: 'Slack',
    logo: '/lovable-uploads/918a9ebb-c51d-481e-afd2-b780460f07e6.png'
  }, {
    name: 'Vapi',
    logo: '/lovable-uploads/5f9b2575-7ebf-411e-93ea-047385368232.png'
  }, {
    name: 'Zapier',
    logo: '/lovable-uploads/c9a18ee8-9b5a-423b-a2de-e0e106a0c170.png'
  }, {
    name: 'Make',
    logo: '/lovable-uploads/b70d2638-ee83-4933-8eda-5d759d55fe77.png'
  }, {
    name: 'n8n',
    logo: '/lovable-uploads/af0fa5d2-673d-4100-bfa8-0757cbd79333.png'
  }, {
    name: 'Airtable',
    logo: '/lovable-uploads/a2282ce0-eb8d-4cec-b60f-448dbb00f669.png'
  }, {
    name: 'OpenAI',
    logo: '/lovable-uploads/e94a7a9e-c615-4442-a8fd-3bb3af75f526.png'
  }, {
    name: 'Slack',
    logo: '/lovable-uploads/918a9ebb-c51d-481e-afd2-b780460f07e6.png'
  }, {
    name: 'Vapi',
    logo: '/lovable-uploads/5f9b2575-7ebf-411e-93ea-047385368232.png'
  }];
  return <section className="py-20 border-b border-border/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-foreground-muted text-sm uppercase tracking-wide font-medium">
            Trusted integrations with
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right space-x-8">
            {tools.map((tool, index) => <div key={`${tool.name}-${index}`} className="flex items-center space-x-3 glass-card px-6 py-3 rounded-lg flex-shrink-0">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="h-8 w-auto brightness-0 invert"
                />
                <span className="text-foreground-secondary font-medium whitespace-nowrap">{tool.name}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedInSection;