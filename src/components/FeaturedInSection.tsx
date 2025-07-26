const FeaturedInSection = () => {
  const tools = ['/lovable-uploads/82069c66-9497-4f0d-87ec-450c4199c815.png',
  // Zapier
  '/lovable-uploads/31bf2b70-3166-43b7-92a2-76c544aedb30.png',
  // Make
  '/lovable-uploads/69a6f9b5-7bdd-4abd-8eda-02dbace0092f.png',
  // n8n
  '/lovable-uploads/08acc40c-edad-4def-9b89-e6021c3de26b.png',
  // Airtable
  '/lovable-uploads/f12c8ebc-17fe-45e3-b4ba-71bc05cc9ee5.png',
  // OpenAI
  '/lovable-uploads/46924668-e381-455a-a20e-194914b6ed60.png',
  // Slack
  '/lovable-uploads/f70251fe-b1d1-45af-ae27-73d025ac587f.png',
  // Vapi
  '/lovable-uploads/82069c66-9497-4f0d-87ec-450c4199c815.png',
  // Zapier
  '/lovable-uploads/31bf2b70-3166-43b7-92a2-76c544aedb30.png',
  // Make
  '/lovable-uploads/69a6f9b5-7bdd-4abd-8eda-02dbace0092f.png',
  // n8n
  '/lovable-uploads/08acc40c-edad-4def-9b89-e6021c3de26b.png',
  // Airtable
  '/lovable-uploads/f12c8ebc-17fe-45e3-b4ba-71bc05cc9ee5.png' // OpenAI
  ];
  return <section className="py-0 border-b border-border/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-foreground-muted text-sm uppercase tracking-wide font-medium">
            Trusted integrations with
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right space-x-8">
            {tools.map((logoPath, index) => <div key={`logo-${index}`} className="flex-shrink-0">
                <img src={logoPath} alt="Integration logo" className="h-8 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedInSection;