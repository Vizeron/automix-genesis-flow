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
  return;
};
export default TestimonialsSection;