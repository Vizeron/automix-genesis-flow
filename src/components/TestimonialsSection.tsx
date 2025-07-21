import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Automix transformed our entire operations. What used to take our team 3 days now happens automatically in minutes.",
      result: "Saved 40+ hours per week",
      name: "Sarah Chen",
      role: "Operations Director",
      company: "GrowthTech"
    },
    {
      quote: "The ROI was immediate. Within the first month, we had already recouped our investment through time savings alone.",
      result: "300% ROI in month 1",
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "ScaleUp Studios"
    },
    {
      quote: "Their automation workflows eliminated our biggest bottleneck. We can now handle 5x more clients with the same team.",
      result: "5x capacity increase",
      name: "Emily Thompson",
      role: "CEO",
      company: "ServicePro"
    },
    {
      quote: "The level of customization and attention to detail exceeded our expectations. They truly understood our business needs.",
      result: "95% task automation",
      name: "David Kim",
      role: "CTO",
      company: "InnovateCorp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
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
    <section className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            What Our 
            <span className="text-primary"> Clients Say</span>
          </h2>
          <p className="text-xl text-foreground-secondary">
            Don't just take our word for it
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass-card p-8 lg:p-12 rounded-2xl text-center animate-fade-in">
              <Quotes size={40} className="text-primary mx-auto mb-8 glow-border" weight="fill" />
              
              <blockquote className="text-xl lg:text-2xl mb-8 italic text-foreground leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full glow-border"></div>
                  <span className="text-primary font-semibold">
                    {testimonials[currentIndex].result}
                  </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-foreground-secondary">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={goToPrevious}
                className="neuro-button p-3 rounded-full hover:scale-110 transition-transform duration-200"
              >
                <CaretLeft size={20} />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary glow-border scale-125'
                        : 'bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="neuro-button p-3 rounded-full hover:scale-110 transition-transform duration-200"
              >
                <CaretRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;