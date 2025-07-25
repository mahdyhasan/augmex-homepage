import React from 'react';
import { Clock, DollarSign, Target, Users, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Lightning Fast Results',
      description: 'While others take months, we deliver qualified candidates in 2-3 weeks without compromising on quality.',
      stat: '10x Faster',
      statDesc: 'Than traditional hiring'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. You know exactly what you\'re paying upfront with our flat-rate model.',
      stat: '60-80%',
      statDesc: 'Cost savings vs local hire'
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Our rigorous 7-stage vetting process ensures only the top 3% reach your interview stage.',
      stat: 'Top 3%',
      statDesc: 'Candidate acceptance rate'
    },
    {
      icon: Users,
      title: 'Culture-First Approach',
      description: 'We don\'t just match skills - we ensure cultural alignment for long-term team harmony.',
      stat: '90%',
      statDesc: 'Cultural fit success rate'
    }
  ];

  const comparisons = [
    {
      aspect: 'Time to Hire',
      us: '2-3 Weeks',
      others: '3-6 Months'
    },
    {
      aspect: 'Candidate Quality',
      us: 'Top 3% Only',
      others: 'Variable Quality'
    },
    {
      aspect: 'Cost Structure',
      us: 'Transparent Flat Rate',
      others: 'Hidden Fees + %'
    },
    {
      aspect: 'Cultural Fit',
      us: '90% Success Rate',
      others: '60% Success Rate'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6" style={{backgroundColor: '#3519E2'}}>
            Why We're Different
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Leading Companies
            <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Choose Augmex
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've reimagined talent acquisition for the modern world. Here's why industry leaders trust us with their most critical hires.
          </p>
        </div>

        {/* WordPress Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: '#3519E2'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#3519E215'}}>
                  <reason.icon className="w-5 h-5" style={{color: '#3519E2'}} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{color: '#3519E2'}}>{reason.stat}</div>
                      <div className="text-xs text-gray-500">{reason.statDesc}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200" style={{backgroundColor: '#3519E2'}}>
            <h3 className="text-xl font-semibold text-white text-center">StaffAugment vs Traditional Hiring</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="font-medium text-gray-900">{comparison.aspect}</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {comparison.us}
                  </span>
                </div>
                <div className="text-center text-gray-600">{comparison.others}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
