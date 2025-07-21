import { Check, Star } from '@phosphor-icons/react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,497',
      period: 'one-time',
      description: 'Perfect for small teams getting started with automation',
      features: [
        'Up to 3 automated workflows',
        '2 platform integrations',
        'Basic monitoring & alerts',
        'Email support',
        '30-day warranty'
      ],
      cta: 'Start Now',
      popular: false
    },
    {
      name: 'Pro',
      price: '$4,997',
      period: 'one-time',
      description: 'Advanced automation for growing businesses',
      features: [
        'Up to 10 automated workflows',
        'Unlimited integrations',
        'Advanced AI logic',
        'Real-time monitoring',
        'Priority support',
        '90-day warranty',
        'Monthly optimization calls'
      ],
      cta: 'Start Now',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Complete automation transformation for large organizations',
      features: [
        'Unlimited workflows',
        'Custom integrations & APIs',
        'Dedicated automation engineer',
        '24/7 monitoring & support',
        'Advanced analytics & reporting',
        '1-year warranty',
        'Quarterly strategy sessions'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Flexible 
            <span className="text-primary"> Pricing</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your automation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card p-8 rounded-2xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular ? 'ring-2 ring-primary glow-border' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="neuro-button-primary px-4 py-2 rounded-full flex items-center space-x-2">
                    <Star size={16} weight="fill" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period !== 'pricing' && (
                    <span className="text-foreground-muted"> {plan.period}</span>
                  )}
                </div>
                <p className="text-foreground-secondary">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" weight="bold" />
                    <span className="text-foreground-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'neuro-button-primary'
                    : 'neuro-button hover:scale-105'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-6 rounded-xl inline-flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center glow-border">
              <Check size={16} className="text-primary" weight="bold" />
            </div>
            <span className="text-foreground-secondary">
              30-day money-back guarantee on all plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;