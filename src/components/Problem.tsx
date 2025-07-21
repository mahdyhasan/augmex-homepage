import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, Search, X } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Endless Hiring Cycles',
      description: 'Months of posting jobs, screening resumes, and conducting interviews with no quality results.',
      stat: '6+ months',
      statLabel: 'Average hiring time'
    },
    {
      icon: DollarSign,
      title: 'Hidden Recruitment Costs',
      description: 'Expensive agencies, job board fees, and internal time costs that spiral out of control.',
      stat: '$15,000+',
      statLabel: 'Average cost per hire'
    },
    {
      icon: Users,
      title: 'Poor Cultural Fit',
      description: 'Candidates who look good on paper but fail to integrate with your team and values.',
      stat: '89%',
      statLabel: 'Turnover in first year'
    },
    {
      icon: Search,
      title: 'Limited Talent Pool',
      description: 'Restricted to local markets, missing out on global talent willing to work remotely.',
      stat: '3x smaller',
      statLabel: 'Local vs global pool'
    },
    {
      icon: TrendingDown,
      title: 'Declining Quality',
      description: 'Pressure to hire quickly leads to compromised standards and regrettable decisions.',
      stat: '47%',
      statLabel: 'Hiring mistakes'
    },
    {
      icon: X,
      title: 'Failed Remote Integration',
      description: 'Remote hires that struggle with communication, time zones, and company culture.',
      stat: '60%',
      statLabel: 'Remote hire failures'
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Harsh Reality
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Problem Most
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Businesses Face
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hiring exceptional talent has become a nightmare. Companies are stuck in outdated processes that waste time, money, and opportunities.
          </p>
          
          {/* Main Problem Statement */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-red-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">The Hiring Crisis</h3>
                <p className="text-gray-600">It shouldn't take 6 months to find good talent</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              While technology has revolutionized every aspect of business, hiring remains stuck in the stone age. 
              Companies waste months posting jobs that attract the wrong candidates, paying hefty fees to agencies 
              that don't understand their culture, and settling for mediocre talent because they're desperate to fill roles.
            </p>
          </div>
        </div>
        
        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{problem.stat}</div>
                    <div className="text-xs text-gray-500">{problem.statLabel}</div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Impact Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                The Real Cost of Bad Hiring
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-red-400 mb-2">$240K</div>
                  <div className="text-red-200">Average cost of a bad hire</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">18 Months</div>
                  <div className="text-orange-200">Time to recover from bad hire</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">73%</div>
                  <div className="text-yellow-200">Companies that made bad hires</div>
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Every day you delay finding the right talent is another day your competitors gain an advantage. 
                The question isn't whether you can afford to hire well—it's whether you can afford not to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
