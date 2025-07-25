import React from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700 text-sm font-medium">Work With Top 3% Talent</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Strategic Staff</span>
              <br />
              <span 
                className="text-transparent bg-clip-text" 
                style={{
                  backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Augmentation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8 lg:mb-12">
              Scale your team with exceptional remote talent from Bangladesh. 
              Seamless integration, immediate impact, transparent pricing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#3519E2'}}
              >
                Start Hiring&nbsp;
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                <CheckCircle className="mr-2 h-4 w-4" />
                Success Stories
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold mb-1" style={{color: '#3519E2'}}>40-60%</div>
                <div className="text-gray-600 text-sm">Cost Saving</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold mb-1" style={{color: '#3519E2'}}>7-14</div>
                <div className="text-gray-600 text-sm">Days Turnaround</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold mb-1" style={{color: '#3519E2'}}>100%</div>
                <div className="text-gray-600 text-sm">Transparent</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Main Card */}
              <div className="absolute top-0 right-0 w-80 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Growth Analytics</h3>
                    <p className="text-gray-500 text-sm">Real-time performance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Team Productivity</span>
                    <span className="font-semibold text-green-600">+100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Efficiency</span>
                    <span className="font-semibold text-blue-600">+100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute bottom-0 left-0 w-72 bg-white rounded-3xl shadow-xl p-6 border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">5-Star Rating</h4>
                  <p className="text-gray-600 text-sm mb-4">98% satisfied clients worldwide</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl shadow-lg transform rotate-12 animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-lg transform -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
