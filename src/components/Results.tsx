import React, { useState } from 'react';
import { Trophy, ArrowRight, TrendingUp, Clock, DollarSign, Star, Target, Users, CheckCircle } from 'lucide-react';

const ResultsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const beforeAfter = [
    {
      category: 'Time to Deploy',
      before: '6+ months',
      after: '2-3 weeks',
      improvement: '85% faster',
      icon: Clock,
      description: 'Traditional hiring vs our ready workforce'
    },
    {
      category: 'Team Quality',
      before: '30% fit',
      after: '98% fit',
      improvement: '225% better',
      icon: Star,
      description: 'Pre-vetted professionals vs random hires'
    },
    {
      category: 'Yearly Investment',
      before: '$160K+ per hire',
      after: '$60K per resource',
      improvement: '62.5% savings',
      icon: DollarSign,
      description: 'Hiring + salary + overhead vs all-inclusive cost'
    },
    {
      category: 'Performance Score',
      before: '6/10 average',
      after: '9.2/10 average',
      improvement: '53% higher',
      icon: Target,
      description: 'Client satisfaction ratings'
    }
  ];

  const metrics = [
    { label: 'Project Acceleration', value: '3x faster', color: 'bg-green-500' },
    { label: 'Client Retention', value: '96%', color: 'bg-blue-500' },
    { label: 'Resource Utilization', value: '94%', color: 'bg-purple-500' },
    { label: 'Time to Productivity', value: '< 1 week', color: 'bg-orange-500' }
  ];

  const tabs = ['Overview', 'Comparisons', 'Impact'];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-8">
            <Trophy className="w-4 h-4 mr-2" />
            Measurable Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Results That Transform
            <span className="block text-gray-600">Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how strategic staff augmentation delivers quantifiable improvements across every metric
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          
          {/* Overview Tab */}
          {activeTab === 0 && (
            <div className="space-y-12">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <div className="w-6 h-6 bg-white rounded-lg"></div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Story */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 border border-gray-200">
                    <TrendingUp className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    From Hiring Struggles to Strategic Advantage
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Our clients don't just fill positions – they gain competitive advantages. While competitors struggle with recruitment cycles, our clients are scaling and capturing opportunities.
                    </p>
                    <p>
                      The difference is in professional caliber, seamless integration, and immediate productivity from dedicated, pre-trained teams.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                    <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                    <div className="text-gray-600 font-medium">Successful Placements</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                    <div className="text-4xl font-bold text-gray-900 mb-2">$35M+</div>
                    <div className="text-gray-600 font-medium">Client Savings Generated</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                    <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                    <div className="text-gray-600 font-medium">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Comparisons Tab */}
          {activeTab === 1 && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Traditional Hiring vs Strategic Augmentation
                </h3>
                <p className="text-lg text-gray-600">
                  See the measurable difference our approach makes
                </p>
              </div>
              
              <div className="space-y-8">
                {beforeAfter.map((comparison, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                      
                      {/* Category */}
                      <div className="text-center md:text-left">
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mx-auto md:mx-0 mb-3">
                          <comparison.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">{comparison.category}</h4>
                        <p className="text-sm text-gray-600 mt-1">{comparison.description}</p>
                      </div>
                      
                      {/* Before */}
                      <div className="text-center">
                        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-2">
                          <div className="text-sm text-red-600 font-medium mb-1">Traditional</div>
                          <div className="text-lg font-bold text-red-700">{comparison.before}</div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                      
                      {/* After */}
                      <div className="text-center">
                        <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-2">
                          <div className="text-sm text-green-600 font-medium mb-1">With Us</div>
                          <div className="text-lg font-bold text-green-700">{comparison.after}</div>
                        </div>
                      </div>
                      
                      {/* Improvement */}
                      <div className="text-center">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                          <div className="text-sm text-blue-600 font-medium mb-1">Improvement</div>
                          <div className="text-lg font-bold text-blue-700">{comparison.improvement}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Tab */}
          {activeTab === 2 && (
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Client Success Stories
                  </h3>
                  <p className="text-lg text-gray-600">
                    Real results from real partnerships
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Project Delivery</h4>
                    <p className="text-gray-600">Teams deployed and productive within 1 week, compared to 3-6 months traditional hiring</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Cost Efficiency</h4>
                    <p className="text-gray-600">Average 70% reduction in total hiring costs including recruitment, onboarding, and overhead</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">98% client satisfaction rate with rigorous 7-stage vetting process ensuring perfect fits</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="text-center p-12 bg-gray-900 rounded-3xl">
                <h4 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Team?
                </h4>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that chose strategic staff augmentation over traditional hiring struggles.
                </p>
                
                <a 
                  href="/contact-us"
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Start Your Success Story
                  <ArrowRight className="w-6 h-6 ml-3" />
                </a>
                
                <p className="text-sm text-gray-400 mt-4">
                  No hidden fees • Free consultation
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
