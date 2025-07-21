import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            We Find & Hire
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
              Perfect Talent
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-blue-200 mt-4">
              Based on Your Exact Requirements
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-3xl leading-relaxed">
            Stop struggling with endless hiring processes. We source, vet, and deliver exceptional remote professionals tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
              Tell Us Your Requirements
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              See How We Work
            </button>
          </div>

          {/* Simple Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-200">
            <div className="text-center">
              <span className="text-3xl font-bold text-white block">60-80%</span>
              <span className="text-sm">Cost Savings</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-white block">2-3 Weeks</span>
              <span className="text-sm">Hire Timeline</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-white block">98%</span>
              <span className="text-sm">Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
