import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/90 text-blue-800 text-sm font-medium backdrop-blur-sm">
              🚀 Top 3% Remote Talent Available Now
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Strategic Staff
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Resource Augmentation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Hire exceptional remote talent from Bangladesh without the complexity of traditional hiring. 
            Scale your team with professionals who integrate seamlessly and deliver results from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-xl">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 text-blue-200">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white mr-2">40-60%</span>
              <span className="text-sm">Cost Saving</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white mr-2">7-14 Days</span>
              <span className="text-sm">Turnaround</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white mr-2">100%</span>
              <span className="text-sm">Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;