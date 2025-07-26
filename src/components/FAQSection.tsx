import { useState } from 'react';
import { Plus, Minus, Question } from '@phosphor-icons/react';
const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  const faqs = [{
    question: 'What platforms do you integrate?',
    answer: 'We integrate with 1000+ platforms including Zapier, Make, n8n, Notion, Airtable, HubSpot, Salesforce, Slack, Google Workspace, Microsoft 365, and many more. If you use it, we can probably connect it.'
  }, {
    question: 'How long does setup take?',
    answer: 'Most automation projects are completed within 2-4 weeks. Simple workflows can be deployed in as little as 3-5 business days, while complex enterprise solutions may take 6-8 weeks.'
  }, {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! All plans include monitoring and support. We proactively monitor your automations 24/7 and provide ongoing optimization to ensure peak performance.'
  }, {
    question: 'What if my automation breaks?',
    answer: 'We provide comprehensive warranties and 24/7 monitoring. If something breaks, we fix it immediately at no additional cost. Our systems are designed for 99.9% uptime.'
  }, {
    question: 'Can you work with our existing tools?',
    answer: 'Absolutely! We specialize in connecting your existing tech stack. Our goal is to enhance what you already have, not replace it.'
  }, {
    question: 'Is there a setup fee?',
    answer: 'No hidden fees! Our pricing is transparent and includes everything: strategy, design, development, testing, deployment, and initial training.'
  }];
  return <section className="py-14 bg-background-secondary/30 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Frequently Asked 
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="text-xl text-foreground-secondary">
            Everything you need to know about our automation services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => <div key={index} className="glass-card rounded-xl overflow-hidden animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <button onClick={() => toggleItem(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-background-tertiary/30 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <Question size={20} className="text-primary flex-shrink-0" weight="light" />
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? <Minus size={20} className="text-primary" weight="bold" /> : <Plus size={20} className="text-primary" weight="bold" />}
                </div>
              </button>
              
              {openItems.includes(index) && <div className="px-6 pb-6">
                  <div className="border-t border-border pt-4 ml-9">
                    <p className="text-foreground-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>}
            </div>)}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          <div className="glass-card p-6 rounded-xl inline-block">
            <p className="text-foreground-secondary mb-4">
              Still have questions? We're here to help.
            </p>
            <button onClick={() => {
            const element = document.querySelector('#contact');
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="neuro-button-primary px-6 py-3 rounded-lg font-medium">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;