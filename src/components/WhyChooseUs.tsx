import React from 'react';
import { Award, Clock, Shield, DollarSign, Users, Target, CheckCircle, Star, TrendingUp, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Lightning Fast Results',
      description: 'While others take months, we deliver qualified candidates in 2-3 weeks without compromising on quality.',
      stat: '10x Faster',
      statDesc: 'Than traditional hiring',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. You know exactly what you\'re paying upfront with our flat-rate model.',
      stat: '60-80%',
      statDesc: 'Cost savings vs local hire',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      title: 'Risk-Free Guarantee',
      description: 'We stand behind every placement with our 30-day replacement guarantee and ongoing support.',
      stat: '30 Days',
      statDesc: 'Replacement guarantee',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Our rigorous 7-stage vetting process ensures only the top 1% reach your interview stage.',
      stat: 'Top 1%',
      statDesc: 'Candidate acceptance rate',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Globe,
      title: 'Global Talent Access',
      description: 'Tap into a worldwide pool of exceptional professionals, not limited by geographic boundaries.',
      stat: '50+ Countries',
      statDesc: 'Talent network coverage',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Users,
      title: 'Culture-First Approach',
      description: 'We don\'t just match skills - we ensure cultural alignment for long-term team harmony.',
      stat: '95%',
      statDesc: 'Cultural fit success rate',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    }
  ];

  const clientTypes = [
    {
      icon: TrendingUp,
      title: 'High-Growth Startups',
      description: 'Scale your team rapidly with talent that can keep up with your pace',
      companies: ['TechCorp', 'InnovateAI', 'GrowthLabs']
    },
    {
      icon: Award,
      title: 'Enterprise Companies',
      description: 'Access specialized talent for complex projects and digital transformation',
      companies: ['Fortune 500', 'Global Tech', 'Enterprise Solutions']
    },
    {
      icon: Users,
      title: 'Scale-ups',
      description: 'Build world-class teams without the overhead of traditional hiring',
      companies: ['Series A-C', 'Expanding Teams', 'Market Leaders']
    }
  ];

  const comparisons = [
    {
      aspect: 'Time to Hire',
      us: '2-3 Weeks',
      others: '3-6 Months',
      advantage: 'us'
    },
    {
      aspect: 'Candidate Quality',
      us: 'Top 1% Only',
      others: 'Variable Quality',
      advantage: 'us'
    },
    {
      aspect: 'Cost Structure',
      us: 'Transparent Flat Rate',
      others: 'Hidden Fees + %',
      advantage: 'us'
    },
    {
      aspect: 'Cultural Fit',
      us: '95% Success Rate',
      others: '60% Success Rate',
      advantage: 'us'
    },
    {
      aspect: 'Post-Hire Support',
      us: 'Ongoing Partnership',
      others: 'Limited Follow-up',
      advantage: 'us'
    },
    {
      aspect: 'Replacement Guarantee',
      us: '30 Days Full Coverage',
      others: 'No Guarantee',
      advantage: 'us'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why We're Different
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Leading Companies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Choose StaffAugment
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We've reimagined talent acquisition for the modern world. Here's why industry leaders trust us with their most critical hires.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`group ${reason.bgColor} rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative`}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{reason.stat}</div>
                    <div className="text-xs text-gray-600">{reason.statDesc}</div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Client Types */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Every Type of Company
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From ambitious startups to established enterprises, we scale with your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mb-6">
                  <type.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h4>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {type.companies.map((company, companyIndex) => (
                    <span 
                      key={companyIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Stack Up Against Traditional Hiring
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the difference that modern talent acquisition makes
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="text-lg font-semibold">Comparison Factor</div>
              <div className="text-lg font-semibold text-center">StaffAugment</div>
              <div className="text-lg font-semibold text-center">Traditional Hiring</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 p-6 border-b border-gray-100 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="font-medium text-gray-900">{comparison.aspect}</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    {comparison.us}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-gray-600 text-sm">{comparison.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 500+ companies that have transformed their hiring process and built exceptional teams with StaffAugment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Success Story
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
