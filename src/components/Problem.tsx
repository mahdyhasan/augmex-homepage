import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, Search } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Endless Hiring Cycles',
      description: 'Months of posting jobs and screening with no quality results.',
      stat: '6+ months'
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'Expensive agencies and job board fees that spiral out of control.',
      stat: '$15,000+'
    },
    {
      icon: Users,
      title: 'Poor Cultural Fit',
      description: 'Candidates who look good on paper but fail to integrate.',
      stat: '89% turnover'
    },
    {
      icon: Search,
      title: 'Limited Talent Pool',
      description: 'Restricted to local markets, missing global talent.',
      stat: '3x smaller pool'
    },
    {
      icon: TrendingDown,
      title: 'Declining Quality',
      description: 'Pressure to hire quickly leads to regrettable decisions.',
      stat: '47% mistakes'
    }
  ];

  return (
    <section id="problem" className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Reality
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Problem Most
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Businesses Face
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Hiring exceptional talent has become a nightmare. Companies are stuck in outdated processes that waste time, money, and opportunities.
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-red-100 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="text-xl font-bold text-red-600 mb-2">{problem.stat}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Impact */}
        <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Real Cost of Bad Hiring</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-1">$240K</div>
              <div className="text-red-200 text-sm">Average cost of a bad hire</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-1">18 Months</div>
              <div className="text-orange-200 text-sm">Time to recover</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">73%</div>
              <div className="text-yellow-200 text-sm">Companies affected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
