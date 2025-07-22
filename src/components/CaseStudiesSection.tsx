import { TrendUp, Clock, Lightning } from '@phosphor-icons/react';
const CaseStudiesSection = () => {
  const caseStudies = [{
    logo: '🚀',
    company: 'TechStartup Co.',
    problem: 'Manual lead qualification taking 10+ hours weekly',
    solution: 'Automated lead scoring with AI + CRM integration',
    result: 'Saved 35 hrs/week',
    metric: '350%',
    icon: TrendUp
  }, {
    logo: '🏢',
    company: 'Growth Agency',
    problem: 'Client reporting scattered across 5 tools',
    solution: 'Unified dashboard with auto-generated reports',
    result: 'Saved 20 hrs/week',
    metric: '90%',
    icon: Clock
  }, {
    logo: '⚡',
    company: 'E-commerce Brand',
    problem: 'Order processing bottlenecks during peak sales',
    solution: 'End-to-end order automation with inventory sync',
    result: 'Saved 45 hrs/week',
    metric: '500%',
    icon: Lightning
  }];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our automation solutions transformed these companies' operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{study.logo}</span>
                  <h3 className="font-semibold text-foreground">{study.company}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Problem:</p>
                    <p className="text-foreground">{study.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Solution:</p>
                    <p className="text-foreground">{study.solution}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Result</p>
                      <p className="font-semibold text-foreground">{study.result}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <IconComponent size={20} />
                      <span className="text-2xl font-bold">{study.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CaseStudiesSection;