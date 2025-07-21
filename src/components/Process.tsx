import React, { useState } from 'react';
import { Search, Users, CheckCircle, Handshake, Clock, Target, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Process = () => {
  const [currentStep, setCurrentStep] = useState(0);

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
      bgColor: 'bg-blue-50',
      timeline: '1-2 Days'
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
      bgColor: 'bg-purple-50',
      timeline: '3-5 Days'
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
      bgColor: 'bg-green-50',
      timeline: '5-7 Days'
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
      bgColor: 'bg-orange-50',
      timeline: '2-3 Days'
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
      bgColor: 'bg-teal-50',
      timeline: '1-2 Days'
    }
  ];

  const metrics = [
    { icon: Clock, value: '2-3 Weeks', label: 'Total Process Time' },
    { icon: Star, value: '98%', label: 'Success Rate' },
    { icon: Users, value: '2-3', label: 'Candidates Presented' },
    { icon: CheckCircle, value: '7 Stages', label: 'Vetting Process' }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <section id="process" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Proven Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Proven
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Success Process
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            A battle-tested approach that consistently delivers exceptional talent in record time.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl p-4 shadow-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-3">
                    <MetricIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Slider */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* Step Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-blue-600 w-8' 
                      : index < currentStep 
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextStep}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Current Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentStepData.color} rounded-2xl flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Step {currentStepData.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h3>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentStepData.description}
              </p>
              
              <div className="space-y-3">
                {currentStepData.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className={`${currentStepData.bgColor} rounded-2xl p-6 border border-gray-100 relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${currentStepData.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}>
                    {currentStepData.number}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Timeline</div>
                    <div className="text-lg font-semibold text-gray-700">{currentStepData.timeline}</div>
                  </div>
                </div>
                
                <div className="bg-white/60 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">{currentStepData.title}</h4>
                  <div className="space-y-2">
                    {currentStepData.details.slice(0, 2).map((detail, i) => (
                      <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${currentStepData.color} rounded-full opacity-10`}></div>
            </div>
          </div>

          {/* Step Progress */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Step {currentStep + 1} of {steps.length} • 
              <span className="font-medium text-gray-900 ml-1">
                {currentStepData.timeline}
              </span>
            </p>
          </div>
        </div>

        {/* Process Guarantee - Compact */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Process Guarantee</h3>
            <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
              30-day replacement guarantee with 100% process transparency and zero hidden fees.
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Start Your Process Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
