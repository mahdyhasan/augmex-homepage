import React, { useState } from 'react';
import { Heart, Target, Users, Zap, Globe, Shield, CheckCircle, ArrowRight, Search, Clock, Star, ChevronRight } from 'lucide-react';

const SolutionProcessSection = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const beliefs = [
    {
      icon: Heart,
      title: 'People-First Approach',
      description: 'Every hire should elevate your team, not just fill a position.'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'One exceptional hire beats ten mediocre ones from our rigorous selection.'
    },
    {
      icon: Globe,
      title: 'Global Talent Access',
      description: 'Access Bangladesh\'s top tech talent with international standards.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: Target,
      title: 'Deep Discovery',
      description: 'Understanding your needs, culture, and success metrics',
      timeline: '1-2 Days'
    },
    {
      number: '02',
      icon: Search,
      title: 'Strategic Sourcing',
      description: 'Leveraging our network to find top-tier Bangladeshi talent',
      timeline: '3-5 Days'
    },
    {
      number: '03',
      icon: Shield,
      title: 'Rigorous Vetting',
      description: '7-stage evaluation ensuring technical and cultural fit',
      timeline: '5-7 Days'
    },
    {
      number: '04',
      icon: Users,
      title: 'Perfect Match',
      description: 'Present 2-3 pre-qualified candidates with seamless integration',
      timeline: '2-3 Days'
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

        {/* Core Beliefs & Hero Image Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Beliefs */}
            <div className="space-y-8">
              {beliefs.map((belief, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <belief.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{belief.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{belief.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Hero Image - Modern Office/Team */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                {/* Placeholder for office/team image */}
                <div className="aspect-[3/2] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/20">
                  <div className="text-center">
{/*                     <Users className="w-16 h-16 text-white/40 mx-auto mb-4" /> */}
                    <img src="/images/team_working_at_augmex.webp"></img>
                  </div>
                </div>
                
                {/* Floating stats overlay */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-cyan-100 text-sm">Professionals Placed</div>
                  </div>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Process Steps */}
            <div className="space-y-6">
              {/* Key Metrics Row */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {metrics.slice(0, 2).map((metric, index) => {
                  const MetricIcon = metric.icon;
                  return (
                    <div key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg mb-2">
                        <MetricIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-blue-200">{metric.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Process Steps */}
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = activeProcess === index;
                
                return (
                  <div 
                    key={index}
                    className={`group cursor-pointer transition-all duration-300 ${
                      isActive ? 'transform scale-105' : ''
                    }`}
                    onMouseEnter={() => setActiveProcess(index)}
                  >
                    <div className={`bg-white/5 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300 ${
                      isActive ? 'border-cyan-400/50 bg-white/10' : 'border-white/10 hover:border-white/20'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                            : 'bg-white/20'
                        }`}>
                          {step.number}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-white">{step.title}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isActive ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/10 text-blue-200'
                            }`}>
                              {step.timeline}
                            </span>
                          </div>
                          <p className="text-sm text-blue-100">{step.description}</p>
                        </div>
                        
                        <StepIcon className={`w-5 h-5 ${
                          isActive ? 'text-cyan-400' : 'text-white/60'
                        }`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Process Visualization/Workstation Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                {/* Placeholder for workstation/development image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/20">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <img src="/images/software_developers_augmex.webp"></img>
                  </div>
                </div>
                
                {/* Process indicator overlay */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Process Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results & CTA Section */}
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

            {/* Single CTA */}
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
