import React, { useState } from 'react';
import { Trophy, ArrowRight, TrendingUp, Clock, DollarSign, Star, Target } from 'lucide-react';

const Results = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      category: 'Total Investment',
      before: '$85K+ per hire',
      after: '$25K per resource',
      improvement: '70% savings',
      icon: DollarSign,
      description: 'Including overhead vs all-inclusive cost'
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
    { label: 'Average project acceleration', value: '3x faster', color: '#10b981' },
    { label: 'Client retention rate', value: '96%', color: '#3b82f6' },
    { label: 'Resource utilization', value: '94%', color: '#8b5cf6' },
    { label: 'Time to productivity', value: '< 1 week', color: '#f59e0b' }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold mb-8 shadow-sm">
            <Trophy className="w-4 h-4 mr-2" />
            Measurable Impact
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Results That
            <span className="block text-gray-600">Transform Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how strategic staff augmentation delivers quantifiable improvements across every metric that matters
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold mb-2" style={{color: metric.color}}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Content */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                From Hiring Headaches to Strategic Advantage
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Our clients don't just fill positions – they gain strategic advantages. While competitors 
                struggle with recruitment cycles and onboarding delays, our clients are already scaling, 
                delivering, and capturing market opportunities.
              </p>
              
              <p>
                The difference isn't just in speed. It's in the caliber of professionals, the seamless 
                integration, and the immediate productivity that comes from working with dedicated, 
                pre-trained teams who understand your industry.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  "The transformation was immediate and measurable."
                </p>
                <p className="text-gray-700">
                  Our clients consistently report faster delivery times, higher quality output, 
                  and significantly reduced operational overhead within the first month.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Stats */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Success by the Numbers
              </h4>
            </div>
            
            <div className="space-y-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Industries Served</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl">  
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Successful Deployments</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-gray-900 mb-2">$50M+</div>
                <div className="text-sm text-gray-600 font-medium">Client Savings Generated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Traditional Hiring vs Strategic Augmentation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare the outcomes and see why leading companies choose our approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfter.map((comparison, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                    <comparison.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{comparison.category}</h4>
                </div>
                
                {/* Before */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100 text-center">
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">
                    Traditional Approach
                  </div>
                  <div className="text-xl font-bold text-gray-700 mb-2">{comparison.before}</div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                
                {/* After */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-6 text-center group-hover:bg-gray-800 transition-colors duration-300">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">
                    With Augmex
                  </div>
                  <div className="text-xl font-bold text-white mb-2">{comparison.after}</div>
                </div>
                
                {/* Improvement */}
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">{comparison.improvement}</span>
                  </div>
                </div>

                {/* Description on hover */}
                <div className={`mt-4 text-center transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-3">
                    {comparison.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              The Bottom Line
            </h4>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              While traditional hiring drains resources and delays progress, strategic staff augmentation 
              delivers immediate results, cost savings, and the flexibility to scale with confidence.
            </p>
            
            <a 
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
