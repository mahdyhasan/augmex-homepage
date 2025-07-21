import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "These folks don't just find candidates - they find game-changers. Our new AI engineer didn't just fill the role, she revolutionized our entire approach to machine learning.",
      author: "David Chen",
      role: "CTO at TechFlow Solutions",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "After struggling with hiring for months, they delivered three exceptional candidates in just 10 days. The person we hired has become our top performer.",
      author: "Maria Rodriguez",
      role: "VP Operations at GrowthCorp",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "Finally, recruiters who actually understand our industry. They didn't just read our job description - they understood our vision and found someone who shares it.",
      author: "Jennifer Park",
      role: "Founder of DataBridge Analytics",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "The cultural fit was perfect. It's like they hand-picked someone who was meant to be part of our team. Best hire we've ever made.",
      author: "Michael Thompson",
      role: "CEO at InnovateNow",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Team collaboration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-purple-900/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-200">
            Real feedback from companies that have transformed their teams with us
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <Quote className="h-12 w-12 text-blue-300 mb-6 mx-auto" />
              <p className="text-white leading-relaxed mb-8 text-xl italic text-center">
                "{testimonials[currentSlide].text}"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div className="text-center">
                  <div className="font-bold text-white">{testimonials[currentSlide].author}</div>
                  <div className="text-blue-200 text-sm">{testimonials[currentSlide].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;