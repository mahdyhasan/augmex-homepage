import React, { useState } from 'react';
import { Rocket, TrendingUp, Clock, Star, ArrowRight, Users, Award, Target } from 'lucide-react';

const CombinedSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const industries = [
    { name: 'Ecommerce', icon: '🛒' },
    { name: 'Retail', icon: '🏪' }, 
    { name: 'Software', icon: '💻' },
    { name: 'Startups', icon: '🚀' },
    { name: 'Professional', icon: '💼' },
    { name: 'Fintech', icon: '💳' }
  ];

  const stats = [
    {
      icon: Rocket,
      number: '55K+',
      text: 'Hours Served',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
      description: 'Hours that our resources worked with our clients'
    },
    {
      icon: TrendingUp,
      number: '450%',
      text: 'Average ROI Increase',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      description: 'Return on investment for our client partnerships'
    },
    {
      icon: Clock,
      number: '90 Days',
      text: 'Average Time to Results',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      description: 'From initial consultation to successful placement'
    },
    {
      icon: Star,
      number: '99%',
      text: 'Client Satisfaction Rate',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20',
      description: 'Based on post-placement feedback surveys'
    }
  ];

  const companyLogos = [
    '/images/logos/a2n_infotech.webp',
    '/images/logos/dcastalia.webp',
    '/images/logos/tcl.webp',
    '/images/logos/psd.webp',
    '/images/logos/icon_college.webp',
    '/images/logos/wine_vault.svg'
  ];

  const teamMembers = [
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Award className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Award-Winning Recruitment Agency</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Excellence Across Industries
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through strategic talent acquisition and innovative recruitment solutions
          </p>
        </div>

        {/* Industries Section - Redesigned */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Dominate</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Specialized expertise across diverse sectors, delivering exceptional results for every client
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/10 cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                  {industry.name}
                </h3>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Company Logos */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-blue-200">
              Trusted by Industry Leaders
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 h-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* About Augmex - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm font-medium">About Augmex</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Your Strategic Talent Partner
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                We're not just another staffing agency. Augmex is your strategic partner in building exceptional teams 
                that drive real business results. Founded by industry veterans who understand that great teams don't 
                happen by accident - they're carefully crafted.
              </p>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                Every day, we wake up excited to solve your biggest challenge: finding the right people who don't 
                just fill roles, but elevate your entire organization.
              </p>
            </div>

            {/* Team Avatars */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {teamMembers.slice(0, 4).map((member, index) => (
                  <img
                    key={index}
                    src={member}
                    alt={`Team member ${index + 1}`}
                    className="w-12 h-12 rounded-full border-4 border-white/20 shadow-lg hover:scale-110 transition-transform duration-300"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white/20 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold shadow-lg">
                  +50
                </div>
              </div>
              <div className="text-blue-200">
                <div className="font-semibold">Expert Team</div>
                <div className="text-sm opacity-75">Ready to help you succeed</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Augmex team"
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Impact Numbers - Enhanced */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-medium">Proven Results</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Data-driven results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-white/10 cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                
                <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <div className="text-blue-200 font-semibold text-lg mb-3">
                  {stat.text}
                </div>
                
                <div className={`text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ${hoveredStat === index ? 'block' : 'hidden'}`}>
                  {stat.description}
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/20">
            <div className="mr-6">
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Team?</h3>
              <p className="text-blue-200">Let's discuss how we can help you find exceptional talent</p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;
