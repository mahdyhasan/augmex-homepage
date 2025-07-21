import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Award, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "StaffAugment didn't just find us a developer - they found us a game-changer. Our new full-stack engineer revolutionized our entire development process and became our tech lead within 6 months.",
      author: "Sarah Johnson",
      role: "CTO at TechFlow Solutions",
      company: "TechFlow",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      rating: 5,
      metric: "40% faster delivery",
      industry: "SaaS"
    },
    {
      text: "After struggling with hiring for 8 months, they delivered three exceptional AI engineers in just 2 weeks. The person we hired became our top performer and is now leading our ML initiatives.",
      author: "Marcus Chen",
      role: "VP of Engineering at DataVision",
      company: "DataVision",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      rating: 5,
      metric: "60% cost reduction",
      industry: "AI/ML"
    },
    {
      text: "Finally, recruiters who actually understand our startup culture. They didn't just read our job description - they understood our vision and found someone who shares our passion for innovation.",
      author: "Jennifer Park",
      role: "Founder & CEO at InnovateNow",
      company: "InnovateNow",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      rating: 5,
      metric: "Perfect culture fit",
      industry: "Fintech"
    },
    {
      text: "The quality of candidates was exceptional. We hired 3 developers and a UI/UX designer through them, and all four are still with us 2 years later. Outstanding retention rate.",
      author: "Michael Rodriguez",
      role: "Head of Product at GrowthCorp",
      company: "GrowthCorp",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      rating: 5,
      metric: "100% retention",
      industry: "E-commerce"
    },
    {
      text: "Their vetting process is incredible. Every candidate they sent was interview-ready and technically sound. We ended up hiring the first person they recommended and couldn't be happier.",
      author: "Lisa Thompson",
      role: "Senior Director at CloudTech",
      company: "CloudTech",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      rating: 5,
      metric: "First choice hire",
      industry: "Cloud Solutions"
    }
  ];

  const stats = [
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '95%', label: 'Retention Rate' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/10 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders Worldwide
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success Stories From
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Discover how companies have transformed their teams and accelerated growth with our elite remote talent
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 mb-4">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Main Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Quote icon and rating */}
            <div className="flex items-center justify-between mb-8">
              <Quote className="h-12 w-12 text-blue-300" />
              <div className="flex items-center gap-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            {/* Testimonial text */}
            <p className="text-white leading-relaxed mb-8 text-xl lg:text-2xl italic">
              "{testimonials[currentSlide].text}"
            </p>
            
            {/* Author info and metrics */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].author}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-white/20"
                />
                <div>
                  <div className="font-bold text-white text-lg">{testimonials[currentSlide].author}</div>
                  <div className="text-blue-200">{testimonials[currentSlide].role}</div>
                  <div className="text-blue-300 text-sm">{testimonials[currentSlide].company} • {testimonials[currentSlide].industry}</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 rounded-xl px-4 py-2">
                <div className="text-white font-semibold">{testimonials[currentSlide].metric}</div>
                <div className="text-blue-200 text-sm">Key Result</div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:text-blue-300 transition-colors" />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 h-3 bg-blue-400' 
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:text-blue-300 transition-colors" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 text-center">
            <p className="text-blue-300 text-sm">
              {currentSlide + 1} of {testimonials.length} testimonials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
