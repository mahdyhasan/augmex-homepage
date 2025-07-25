import React, { useState } from 'react';
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, Search, Building2, HeadphonesIcon, Target } from 'lucide-react';

const Problem = () => {
  const [hoveredProblem, setHoveredProblem] = useState(null);

  const problems = [
    {
      icon: Clock,
      title: 'Lengthy Recruitment Cycles',
      description: 'Months spent searching for skilled professionals while projects remain stalled.',
      stat: '8+ months',
      color: '#ef4444',
      impact: 'Projects delayed, opportunities missed'
    },
    {
      icon: DollarSign,
      title: 'Escalating Overhead Costs',
      description: 'Office space, equipment, benefits, and training expenses spiraling beyond budgets.',
      stat: '$85K+ yearly',
      color: '#f59e0b',
      impact: 'Per employee operational overhead'
    },
    {
      icon: Users,
      title: 'Skill Gap Management',
      description: 'Finding professionals with exact technical expertise and domain knowledge.',
      stat: '67% mismatch',
      color: '#ec4899',
      impact: 'Between required vs available skills'
    },
    {
      icon: Building2,
      title: 'Infrastructure Scaling',
      description: 'Rapid expansion requires office space, IT setup, and administrative overhead.',
      stat: '6-12 weeks',
      color: '#8b5cf6',
      impact: 'Setup time for new team scaling'
    },
    {
      icon: TrendingDown,
      title: 'Resource Flexibility',
      description: 'Inability to scale teams up or down based on project demands and market changes.',
      stat: '3x higher',
      color: '#06b6d4',
      impact: 'Cost compared to flexible staffing'
    },
    {
      icon: HeadphonesIcon,
      title: 'Training & Development',
      description: 'Continuous upskilling and professional development programs drain resources.',
      stat: '$12K+ annually',
      color: '#10b981',
      impact: 'Per employee training investment'
    }
  ];

  const costMetrics = [
    { 
      value: '$150K+', 
      label: 'Average annual cost per in-house developer', 
      color: '#ef4444',
      breakdown: 'Salary + Benefits + Infrastructure'
    },
    { 
      value: '6 Months', 
      label: 'Time to build effective team from scratch', 
      color: '#f59e0b',
      breakdown: 'Hiring + Onboarding + Team Sync'
    },
    { 
      value: '89%', 
      label: 'Companies struggling with scaling challenges', 
      color: '#ec4899',
      breakdown: 'Based on enterprise surveys'
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 text-red-700 text-sm font-semibold mb-8 shadow-sm">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Challenge
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Scaling Teams
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
              Shouldn't Be This Hard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Growing businesses face mounting challenges when building and scaling their technical teams
          </p>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Left: Story */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Reality Every Business Faces</h3>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Your business is growing. Projects are coming in faster than ever. But finding skilled professionals 
                  who can hit the ground running? That's where everything slows down.
                </p>
                <p>
                  You need developers, designers, analysts - but hiring full-time means months of searching, 
                  interviewing, and onboarding. Plus office space, equipment, benefits, and ongoing training costs.
                </p>
                <p>
                  Meanwhile, your competitors with flexible teams are moving faster, delivering better, 
                  and capturing market opportunities while you're still building your foundation.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-500 mt-6">
                  <p className="font-semibold text-gray-900 text-lg">
                    "We needed to scale fast, but traditional hiring was holding us back."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">— Common feedback from growing companies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Problem Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredProblem(index)}
                  onMouseLeave={() => setHoveredProblem(null)}
                >
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    style={{background: `linear-gradient(135deg, ${problem.color}20, ${problem.color}10)`}}
                  ></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm"
                        style={{backgroundColor: `${problem.color}15`}}
                      >
                        <problem.icon className="h-6 w-6" style={{color: problem.color}} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold mb-1" style={{color: problem.color}}>
                          {problem.stat}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          AVERAGE
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {problem.description}
                    </p>
                    
                    {/* Impact shown on hover */}
                    <div className={`text-xs font-medium transition-all duration-500 ${hoveredProblem === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      <div className="bg-gray-100 rounded-lg px-3 py-2" style={{borderLeft: `3px solid ${problem.color}`}}>
                        <span className="text-gray-600">Impact: </span>
                        <span className="text-gray-800">{problem.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Analysis */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-200">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 text-orange-700 text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Financial Impact
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The True Cost of Traditional Scaling
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the hidden expenses that impact your bottom line
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costMetrics.map((metric, index) => (
              <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: metric.color}}>
                    {metric.value}
                  </div>
                  <div className="h-1 w-16 mx-auto rounded-full mb-4" style={{backgroundColor: metric.color}}></div>
                </div>
                <div className="text-gray-900 font-semibold text-lg mb-3">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-2 group-hover:bg-gray-100 transition-colors duration-300">
                  {metric.breakdown}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA hint */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">What if there was a better way?</span>
            </p>
            <p className="text-gray-600">
              A solution that eliminates these challenges while delivering exceptional results...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;