import React from 'react';
import { ArrowRight, Play, Shield, Clock, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating grid pattern */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <span className="text-white/80 text-sm">Trusted by 500+ companies worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Elite Remote
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                Talent Delivered
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-blue-200 mt-2">
                In 48 Hours or Less
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/90 mb-8 max-w-2xl leading-relaxed">
              Access the top 1% of vetted remote professionals from Bangladesh. 
              Build your dream team with world-class talent at unbeatable value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Hiring Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </button>
            </div>

            {/* Trust indicators with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-blue-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 rounded-xl">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white block">60-80%</span>
                  <span className="text-sm">Cost Savings</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-600/20 rounded-xl">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white block">24-48H</span>
                  <span className="text-sm">Quick Delivery</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-600/20 rounded-xl">
                  <Star className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white block">99.5%</span>
                  <span className="text-sm">Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Sarah Chen</h3>
                    <p className="text-blue-200 text-sm">Senior AI Engineer</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Availability</span>
                    <span className="text-white">Immediate</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Rate</span>
                    <span className="text-white">$45-65/hr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Experience</span>
                    <span className="text-white">8+ Years</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs">Available Now</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-4 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">48H</div>
                  <div className="text-xs">Avg. Hire Time</div>
                </div>
              </div>
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
