import { TrendUp, Clock, Lightning } from '@phosphor-icons/react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      logo: '🚀',
      company: 'TechStartup Co.',
      problem: 'Manual lead qualification taking 10+ hours weekly',
      solution: 'Automated lead scoring with AI + CRM integration',
      result: 'Saved 35 hrs/week',
      metric: '350%',
      icon: TrendUp
    },
    {
      logo: '🏢',
      company: 'Growth Agency',
      problem: 'Client reporting scattered across 5 tools',
      solution: 'Unified dashboard with auto-generated reports',
      result: 'Saved 20 hrs/week',
      metric: '90%',
      icon: Clock
    },
    {
      logo: '⚡',
      company: 'E-commerce Brand',
      problem: 'Order processing bottlenecks during peak sales',
      solution: 'End-to-end order automation with inventory sync',
      result: 'Saved 45 hrs/week',
      metric: '500%',
      icon: Lightning
    }
  ];

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Real Results from 
            <span className="text-primary"> Real Businesses</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            See how we've helped companies just like yours streamline operations and accelerate growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.company}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Company Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center glow-border">
                  <span className="text-2xl">{study.logo}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{study.company}</h3>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wide mb-2">
                  Problem
                </h4>
                <p className="text-foreground-secondary">{study.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wide mb-2">
                  Solution
                </h4>
                <p className="text-foreground-secondary">{study.solution}</p>
              </div>

              {/* Result */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wide mb-1">
                      Result
                    </h4>
                    <p className="font-semibold text-primary">{study.result}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-primary">
                      <study.icon size={20} weight="bold" />
                      <span className="text-2xl font-bold">{study.metric}</span>
                    </div>
                    <p className="text-xs text-foreground-muted">improvement</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;