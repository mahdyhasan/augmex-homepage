import React from 'react';
import { ArrowRight, Star, Zap, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-sm font-medium">Now hiring top 1% global talent</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hire</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  World-Class
                </span>
                <br />
                <span className="text-white">Remote Talent</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl leading-relaxed">
                Skip the hassle. We source, vet, and deliver exceptional professionals 
                who integrate seamlessly with your team.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <div className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  Find My Perfect Hire
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  Watch Live Demo
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">2-3 Weeks</div>
                <div className="text-blue-300 text-sm">Time to Hire</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-blue-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">$50K+</div>
                <div className="text-blue-300 text-sm">Avg. Savings</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Talent Pipeline</h3>
                    <p className="text-blue-200 text-sm">Ready to interview</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">4.9</span>
                </div>
              </div>

              {/* Talent Cards */}
              <div className="space-y-4">
                {[
                  { name: 'Sarah Chen', role: 'Senior Full-Stack Developer', rating: '5.0', skills: 'React, Node.js, AWS' },
                  { name: 'Marcus Rodriguez', role: 'AI/ML Engineer', rating: '4.9', skills: 'Python, TensorFlow, ML' },
                  { name: 'Priya Patel', role: 'UI/UX Designer', rating: '5.0', skills: 'Figma, Design Systems' }
                ].map((talent, index) => (
                  <div key={index} className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {talent.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-white font-medium">{talent.name}</div>
                          <div className="text-blue-200 text-sm">{talent.role}</div>
                          <div className="text-gray-400 text-xs">{talent.skills}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{talent.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Ready to start?</div>
                    <div className="text-blue-200 text-sm">Get matched in 48 hours</div>
                  </div>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                    View All
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-green-500 rounded-2xl p-4 shadow-lg animate-bounce">
              <div className="text-white text-center">
                <div className="text-xl font-bold">500+</div>
                <div className="text-xs">Available</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-purple-500 rounded-2xl p-4 shadow-lg animate-pulse">
              <div className="text-white text-center">
                <Shield className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xs">Vetted</div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 transform scale-110"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <p className="text-blue-300/60 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {['TechCorp', 'InnovateAI', 'DataFlow', 'CloudScale', 'NextGen'].map((company, index) => (
              <div key={index} className="text-white/60 font-medium text-lg">{company}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
