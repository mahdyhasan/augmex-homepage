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
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Paragraph */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Here's what keeps business leaders up at night:</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                You need amazing talent, but finding them feels impossible. You post jobs and get hundreds of resumes, but somehow none feel quite right. Your competitors seem to effortlessly attract top performers while you're stuck sifting through endless applications.
              </p>
              <p>
                The hiring process drags on for months. Your team is overworked. Deadlines are slipping. And that game-changing project? It's still waiting for the right person to make it happen.
              </p>
              <p className="font-semibold text-gray-900">
                Sound familiar? You're definitely not alone in this struggle.
              </p>
            </div>
          </div>

          {/* Right: Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{backgroundColor: `${problem.color}15`}}
                >
                  <problem.icon className="h-4 w-4" style={{color: problem.color}} />
                </div>
                
                <div className="text-lg font-bold mb-2" style={{color: problem.color}}>{problem.stat}</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{problem.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Cost of Bad Hiring */}
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
