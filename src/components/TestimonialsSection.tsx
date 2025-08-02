import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    quote: "OSMAutomation transformed our entire operations. What used to take our team 3 days now happens automatically in minutes.",
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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their operations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border">
            <Quotes className="absolute top-6 left-6 text-primary opacity-20" size={40} />
            
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                <p className="text-primary font-semibold text-lg">
                  {testimonials[currentIndex].result}
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <CaretLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
                aria-label="Next testimonial"
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