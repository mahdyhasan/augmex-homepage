import React, { useState } from 'react';
import { Heart, Target, Users, Zap, Globe, Shield, CheckCircle, ArrowRight, Search, Clock, Star, ChevronRight } from 'lucide-react';

const SolutionProcessSection = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const beliefs = [
    {
      icon: Heart,
      title: 'People-First Approach',
      description: 'Every hire should elevate your team, not just fill a position.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'One exceptional hire beats ten mediocre ones from our rigorous selection.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Globe,
      title: 'Global Talent Access',
      description: 'Access Bangladesh\'s top tech talent with international standards.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: Target,
      title: 'Deep Discovery',
      description: 'Understanding your needs, culture, and success metrics',
      timeline: '1-2 Days',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center'
    },
    {
      number: '02',
      icon: Search,
      title: 'Strategic Sourcing',
      description: 'Leveraging our network to find top-tier Bangladeshi talent',
      timeline: '3-5 Days',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      number: '03',
      icon: Shield,
      title: 'Rigorous Vetting',
      description: '7-stage evaluation ensuring technical and cultural fit',
      timeline: '5-7 Days',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces'
    },
    {
      number: '04',
      icon: Users,
      title: 'Perfect Match',
      description: 'Present 2-3 pre-qualified candidates with seamless integration',
      timeline: '2-3 Days',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const metrics = [
    { icon: Clock, value: '2-3 Weeks', label: 'Total Process Time' },
    { icon: Star, value: '98%', label: 'Success Rate' },
    { icon: Users, value: '2-3', label: 'Candidates Presented' },
    { icon: CheckCircle, value: '7 Stages', label: 'Vetting Process' }
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
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Heart className="w-4 h-4 mr-2" />
            Our Approach
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Bangladesh's Top
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Tech Talent Chooses Us
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology delivers exceptional Bangladeshi professionals who seamlessly integrate with your team and culture.
          </p>
        </div>

        {/* Core Beliefs with Images */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={belief.image} 
                    alt={belief.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <belief.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{belief.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From discovery to integration in just 2-3 weeks
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl mb-4">
                    <MetricIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-blue-200">{metric.label}</div>
                </div>
              );
            })}
          </div>

          {/* Process Steps with Interactive Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = activeProcess === index;
              
              return (
                <div 
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'transform scale-105' : 'hover:transform hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveProcess(index)}
                >
                  <div className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 overflow-hidden transition-all duration-500 ${
                    isActive ? 'border-cyan-400/50 bg-white/10' : 'border-white/10 hover:border-white/20'
                  }`}>
                    
                    {/* Background Image */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive ? 'opacity-30' : 'opacity-10 group-hover:opacity-20'
                    }`}>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Step Number */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg' 
                          : 'bg-white/20 group-hover:bg-white/30'
                      }`}>
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="mb-4">
                        <StepIcon className={`w-8 h-8 transition-colors duration-300 ${
                          isActive ? 'text-cyan-400' : 'text-white group-hover:text-cyan-300'
                        }`} />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-sm text-blue-100 mb-4 leading-relaxed">{step.description}</p>
                      
                      {/* Timeline */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                        isActive 
                          ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' 
                          : 'bg-white/10 text-blue-200'
                      }`}>
                        <Clock className="w-3 h-3 mr-1" />
                        {step.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Result? Exceptional Talent, Delivered
            </h3>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              When you partner with Bangladesh's leading staff augmentation specialists, you get faster results, better cultural fit, and teams that truly elevate your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {['Faster Integration', 'Perfect Culture Fit', '40% Cost Savings'].map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-semibold text-lg">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative">
              <button className="group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Building Your Dream Team</span>
                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="text-sm text-blue-200 mt-4">
                30-day guarantee • No hidden fees • Free consultation
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionProcessSection;
