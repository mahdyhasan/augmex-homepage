import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "We hired a team of full-stack developers through Augmex, and within weeks they were driving product improvements that directly impacted user growth.",
      author: "A2N Info Tech",
      rating: 5,
      metric: "Improved feature velocity",
    },
    {
      text: "Thanks to their fast turnaround, we onboarded an AI engineer just in time for a critical project deadline.",
      author: "Tech Cloud Ltd.",
      rating: 5,
      metric: "3-week onboarding",
    },
    {
      text: "We scaled our data team with two excellent analysts who delivered actionable dashboards in record time.",
      author: "Dcastalia Ltd",
      rating: 5,
      metric: "Faster insights",
    },
    {
      text: "We have been working with Augmex for a long time now and they always hire on-demand, effectively.",
      author: "Wine Vault",
      rating: 5,
      metric: "70% cost reduction",
    },
    {
      text: "The customer success reps we onboarded are proactive, well-trained, and already driving renewals.",
      author: "PSD",
      rating: 5,
      metric: "Boosted retention",
    }
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/10 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            What Our Clients Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Feedback From
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Happy Partner
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Hear how companies have used our strategic staff resource augmentation to scale faster and smarter
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Quote className="h-12 w-12 text-blue-300" />
              <div className="flex items-center gap-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-white leading-relaxed mb-8 text-xl lg:text-2xl italic">
              "{testimonials[currentSlide].text}"
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="font-bold text-white text-lg mb-2 md:mb-0">
                {testimonials[currentSlide].author}
              </div>
              <div className="bg-blue-600/20 rounded-xl px-4 py-2">
                <div className="text-white font-semibold">{testimonials[currentSlide].metric}</div>
                <div className="text-blue-200 text-sm">Key Result</div>
              </div>
            </div>
          </div>

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
