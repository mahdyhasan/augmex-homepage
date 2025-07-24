import React from 'react';
import { ArrowRight, Users, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 flex items-center overflow-hidden">
      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Floating Card */}
        <div className="absolute top-12 left-8 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 transform -rotate-6 opacity-80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Remote Talent</div>
              <div className="text-xs text-gray-500">Top 3% Available</div>
            </div>
          </div>
        </div>

        {/* Top Right Badge */}
        <div className="absolute top-16 right-12 bg-white rounded-full shadow-lg px-4 py-2 border border-gray-100 transform rotate-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Verified Talent</span>
            <span className="text-sm text-gray-500">Available Now</span>
            <ArrowRight className="w-3 h-3 text-gray-400" />
          </div>
        </div>

        {/* Bottom Left Stats Card */}
        <div className="absolute bottom-24 left-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform rotate-2 opacity-90">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1" style={{color: '#3519E2'}}>40-60%</div>
            <div className="text-xs text-gray-600">Cost Saving</div>
          </div>
        </div>

        {/* Bottom Right Stats */}
        <div className="absolute bottom-32 right-16 space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 transform -rotate-1">
            <div className="text-center">
              <div className="text-lg font-bold mb-1" style={{color: '#3519E2'}}>7-14</div>
              <div className="text-xs text-gray-600">Days Setup</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 transform rotate-2">
            <div className="text-center">
              <div className="text-lg font-bold mb-1" style={{color: '#3519E2'}}>100%</div>
              <div className="text-xs text-gray-600">Transparent</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-25"></div>
        
        {/* Mouse Cursor Elements */}
        <div className="absolute top-1/4 left-1/3 transform -rotate-12">
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M3 3L10.5 10.5M21 3L13.5 10.5M3 21L10.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 transform rotate-12">
          <div className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M3 3L10.5 10.5M21 3L13.5 10.5M3 21L10.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200 mb-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Staff Augmentation Platform</span>
          <span className="text-gray-500">Scale Instantly</span>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
          <span className="text-gray-900">Build teams of </span>
          <span 
            className="relative"
            style={{
              background: 'linear-gradient(135deg, #3519E2, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            remote experts
          </span>
          <span className="text-gray-900"> that deliver enterprise-quality work</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Skip the lengthy hiring process. Get access to pre-vetted, world-class professionals 
          ready to integrate seamlessly into your workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{backgroundColor: '#3519E2'}}
          >
            Success Stories
          </button>
          
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-gray-700 hover:bg-gray-100 transition-all duration-300">
            Contact Us
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Rapid deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="font-medium">Elite talent pool</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Zero hidden costs</span>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
