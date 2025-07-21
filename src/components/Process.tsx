import React from 'react';
import { Search, Users, CheckCircle, Handshake, Clock, Target, Shield, Star } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Target,
      title: 'Requirement Deep Dive',
      description: 'We start with a comprehensive consultation to understand your exact needs, company culture, and project requirements.',
      details: [
        'Technical skills assessment',
        'Cultural fit evaluation',
        'Timeline and budget discussion',
        'Success metrics definition'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      number: '02',
      icon: Search,
      title: 'Strategic Talent Sourcing',
      description: 'Our expert recruiters leverage global networks and advanced screening to identify top-tier candidates.',
      details: [
        'Global talent pool access',
        'Multi-channel sourcing',
        'Advanced skill matching',
        'Industry expertise leverage'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      number: '03',
      icon: Shield,
      title: 'Rigorous Vetting Process',
      description: 'Every candidate goes through our comprehensive 7-stage evaluation to ensure quality and fit.',
      details: [
        'Technical skill assessment',
        'Communication evaluation',
        'Cultural fit interview',
        'Reference verification'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      number: '04',
      icon: Users,
      title: 'Candidate Presentation',
      description: 'We present 2-3 pre-qualified candidates with detailed profiles and our recommendation.',
      details: [
        'Comprehensive candidate profiles',
        'Skill match analysis',
        'Interview scheduling',
        'Decision support'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      number: '05',
      icon: Handshake,
      title: 'Seamless Integration',
      description: 'We facilitate the hiring process and ensure smooth onboarding with ongoing support.',
      details: [
        'Contract negotiation',
        'Onboarding facilitation',
        '30-day check-ins',
        'Performance monitoring'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const metrics = [
    {
      icon: Clock,
      value: '2-3 Weeks',
      label: 'Average Process Time',
      description: 'From requirement to hire'
    },
    {
      icon: Star,
      value: '98%',
      label: 'Success Rate',
      description: 'Successful long-term placements'
    },
    {
      icon: Users,
      value: '2-3',
      label: 'Candidates Presented',
      description: 'Quality over quantity'
    },
    {
      icon: CheckCircle,
      value: '7 Stages',
      label: 'Vetting Process',
      description: 'Comprehensive evaluation'
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Proven Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Proven
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Success Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A battle-tested approach that consistently delivers exceptional talent in record time. No guesswork, just results.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Step {step.number}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`${step.bgColor} rounded-3xl p-8 border border-gray-100 relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white text-2xl font-bold`}>
                        {step.number}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="text-lg font-semibold text-gray-700">
                          {index === 0 ? '1-2 Days' : 
                           index === 1 ? '3-5 Days' :
                           index === 2 ? '5-7 Days' :
                           index === 3 ? '2-3 Days' : '1-2 Days'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/60 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">{step.title}</h4>
                      <div className="space-y-2">
                        {step.details.slice(0, 2).map((detail, i) => (
                          <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${step.color} rounded-full opacity-10`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r ${step.color} rounded-full opacity-5`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Our Process Guarantee
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                If you're not completely satisfied with our process or the candidates we present, 
                we'll refund your investment and find you a replacement at no additional cost.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold mb-2">30-Day</div>
                  <div className="text-green-200">Replacement Guarantee</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold mb-2">100%</div>
                  <div className="text-blue-200">Process Transparency</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold mb-2">Zero</div>
                  <div className="text-teal-200">Hidden Fees</div>
                </div>
              </div>

              <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Process Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
