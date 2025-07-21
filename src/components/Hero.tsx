import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Professional team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-white text-sm font-medium">🚀 Top 3% Remote Talent Available Now</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Strategic Staff</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Resource Augmentation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed mb-12">
            Hire exceptional remote talent from Bangladesh without the complexity of traditional hiring. 
            Scale your team with professionals who integrate seamlessly and deliver results from day one.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-start">
              <div className="text-4xl font-bold mb-1">40-60%</div>
              <div className="text-blue-200 text-sm">Cost Saving</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-4xl font-bold mb-1">7-14 Days</div>
              <div className="text-blue-200 text-sm">Turnaround</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-blue-200 text-sm">Transparent Pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
