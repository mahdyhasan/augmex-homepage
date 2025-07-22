import React from 'react';
import { Trophy, ArrowRight, CheckCircle, X } from 'lucide-react';

const Results = () => {
  const beforeAfter = [
    {
      category: 'Hiring Time',
      before: '6+ months',
      after: '2-3 weeks',
      improvement: '85% faster'
    },
    {
      category: 'Success Rate',
      before: '30% fit',
      after: '98% fit',
      improvement: '225% better'
    },
    {
      category: 'Total Cost',
      before: '$50K+ per hire',
      after: '$15K per hire',
      improvement: '70% savings'
    },
    {
      category: 'Quality Score',
      before: '6/10 average',
      after: '9.5/10 average',
      improvement: '58% higher'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8">
            <Trophy className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Results Speak for Themselves
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Content */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              The Transformation Our Clients Experience
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Our clients don't just hire - they upgrade their entire capability. They go from struggling to find decent candidates to choosing between multiple exceptional options. From lengthy hiring processes to efficient, streamlined recruitment.
              </p>
              
              <p className="text-lg">
                What's the difference? We treat every placement like our reputation depends on it. Because it does.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4" style={{borderLeftColor: '#3519E2'}}>
                <p className="text-lg font-medium text-gray-900">
                  When your new hire becomes your star performer, that's when we know we've done our job right.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8" style={{backgroundColor: '#3519E215'}}>
                <Trophy className="w-10 h-10" style={{color: '#3519E2'}} />
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                From Hiring Struggles to Success Stories
              </h4>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-700">Before</span>
                  </div>
                  <p className="text-red-700 font-medium">Struggling with hiring</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-700">After</span>
                  </div>
                  <p className="text-green-700 font-medium">Hiring star performers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div className="bg-white rounded-3xl p-10 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Before vs After StaffAugment
            </h3>
            <p className="text-lg text-gray-600">
              See the dramatic transformation in hiring outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfter.map((comparison, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-900 mb-6 text-lg">{comparison.category}</h4>
                
                {/* Before */}
                <div className="bg-red-50 rounded-xl p-4 mb-4 border border-red-100">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-xs text-red-600 font-medium uppercase tracking-wide">Before</span>
                  </div>
                  <div className="text-red-700 font-semibold">{comparison.before}</div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mb-4">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
                
                {/* After */}
                <div className="bg-green-50 rounded-xl p-4 mb-4 border border-green-100">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium uppercase tracking-wide">After</span>
                  </div>
                  <div className="text-green-700 font-semibold">{comparison.after}</div>
                </div>
                
                {/* Improvement */}
                <div className="text-sm font-semibold px-4 py-2 rounded-full inline-block text-white" style={{backgroundColor: '#3519E2'}}>
                  {comparison.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
