import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    quote: "Automix transformed our entire operations. What used to take our team 3 days now happens automatically in minutes.",
    result: "Saved 40+ hours per week",
    name: "Sarah Chen",
    role: "Operations Director",
    company: "GrowthTech"
  }, {
    quote: "The ROI was immediate. Within the first month, we had already recouped our investment through time savings alone.",
    result: "300% ROI in month 1",
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "ScaleUp Studios"
  }, {
    quote: "Their automation workflows eliminated our biggest bottleneck. We can now handle 5x more clients with the same team.",
    result: "5x capacity increase",
    name: "Emily Thompson",
    role: "CEO",
    company: "ServicePro"
  }, {
    quote: "The level of customization and attention to detail exceeded our expectations. They truly understood our business needs.",
    result: "95% task automation",
    name: "David Kim",
    role: "CTO",
    company: "InnovateCorp"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <section className="py-20 border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            See how we've helped businesses save time and increase efficiency through automation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <Quotes className="text-primary-glow text-4xl mb-6" weight="light" />
            
            <blockquote className="text-xl lg:text-2xl text-foreground mb-6 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-block glass-card px-4 py-2 rounded-full mb-4">
                  <span className="text-primary-glow font-semibold">
                    {testimonials[currentIndex].result}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-foreground-muted">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="glass-card p-3 rounded-full hover:glow-hover transition-all duration-300"
                >
                  <CaretLeft className="text-foreground" size={20} weight="light" />
                </button>
                <button
                  onClick={goToNext}
                  className="glass-card p-3 rounded-full hover:glow-hover transition-all duration-300"
                >
                  <CaretRight className="text-foreground" size={20} weight="light" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-glow glow-primary' 
                    : 'bg-foreground-muted/30 hover:bg-foreground-muted/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;