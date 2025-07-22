import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, Search } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Endless Hiring Cycles',
      description: 'Months of posting jobs and screening with no quality results.',
      stat: '6+ months',
      color: '#ef4444'
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'Expensive agencies and job board fees that spiral out of control.',
      stat: '$15,000+',
      color: '#f59e0b'
    },
    {
      icon: Users,
      title: 'Poor Cultural Fit',
      description: 'Candidates who look good on paper but fail to integrate.',
      stat: '89% turnover',
      color: '#ec4899'
    },
    {
      icon: Search,
      title: 'Limited Talent Pool',
      description: 'Restricted to local markets, missing global talent.',
      stat: '3x smaller pool',
      color: '#8b5cf6'
    },
    {
      icon: TrendingDown,
      title: 'Declining Quality',
      description: 'Pressure to hire quickly leads to regrettable decisions.',
      stat: '47% mistakes',
      color: '#06b6d4'
    }
  ];

  const costMetrics = [
    { value: '$240K', label: 'Average cost of a bad hire', color: '#ef4444' },
    { value: '18 Months', label: 'Time to recover', color: '#f59e0b' },
    { value: '73%', label: 'Companies affected', color: '#ec4899' }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
            <AlertTriangle className="w-3 h-3 mr-2" />
            The Reality
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Problem Most
            <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ef4444, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Businesses Face
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hiring exceptional talent has become a nightmare. Companies are stuck in outdated processes that waste time, money, and opportunities.
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{backgroundColor: `${problem.color}15`}}
              >
                <problem.icon className="h-4 w-4" style={{color: problem.color}} />
              </div>
              
              <div className="text-xl font-bold mb-2" style={{color: problem.color}}>{problem.stat}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Impact */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Real Cost of Bad Hiring</h3>
            <p className="text-gray-600">Understanding the true impact on your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{color: metric.color}}>{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
