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
  return;
};
export default CaseStudiesSection;