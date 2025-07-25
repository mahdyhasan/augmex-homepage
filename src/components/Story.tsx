import React, { useState } from 'react';
import { Clock, Target, Users, ArrowRight, CheckCircle, Zap, Trophy, Rocket } from 'lucide-react';

const Story = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const urgencyPoints = [
    {
      icon: Clock,
      title: 'Time is Critical',
      description: 'Every day without the right team means lost opportunities and delayed growth',
      stat: '48 hours',
      statLabel: 'Average time top talent stays available',
      color: '#ef4444',
      bgGradient: 'from-red-50 to-orange-50'
    },
    {
      icon: Target,
      title: 'Competition is Fierce',
      description: 'Your competitors are actively hunting the same skilled professionals you need',
      stat: '5-8',
      statLabel: 'Companies competing for each candidate',
      color: '#f59e0b',
      bgGradient: 'from-orange-50 to-yellow-50'
    },
    {
      icon: Users,
      title: 'Your Growth Depends on It',
      description: 'The right team can accelerate your business beyond what you thought possible',
      stat: '300%',
      statLabel: 'Faster growth with optimal teams',
      color: '#3519E2',
      bgGradient: 'from-blue-50 to-indigo-50'
    }
  ];

  const benefits = [
    'Pre-vetted professionals ready to start',
    'Flexible scaling based on your needs',
    'Dedicated workspace and infrastructure',
    'Ongoing training and development',
    'Direct integration with your workflows'
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
                <Trophy className="w-4 h-4 mr-2" />
                Your Success Story Starts Here
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Stop Searching.
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Start Scaling.
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                We know you've been down this road before. Endless interviews, disappointing hires, 
                and the constant pressure to find that perfect team member who can actually deliver.
              </p>
              
              <p>
                But here's what's different: Your next breakthrough isn't hiding in a resume database. 
                They're working with us right now - skilled, motivated, and ready to transform your business.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xl mb-2">
                        The game-changer you need isn't job hunting.
                      </p>
                      <p className="text-gray-700">
                        They're already part of our trained, dedicated workforce - ready to integrate 
                        seamlessly with your team and hit your deadlines from day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-gray-900">
                While your competitors scramble to hire, you could be scaling effortlessly.
              </p>
            </div>

  
          {/* Right: Enhanced Image Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/images/augmex_success_stories.webp" 
                alt="Success stories" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">Success in Action</div>
                      <div className="text-sm text-gray-600">Real results, real impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">2 Weeks</div>
                  <div className="text-sm text-gray-600">To full productivity</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Zero Risk</div>
                  <div className="text-sm text-gray-600">Guaranteed results</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Section - Redesigned */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-12 shadow-xl border border-gray-200">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 text-red-700 text-sm font-semibold mb-8">
              <Clock className="w-4 h-4 mr-2" />
              Time-Sensitive Opportunity
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every Moment Counts
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While you're considering your options, your ideal solution is ready and waiting. 
              The question is: will you act before your competition does?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {urgencyPoints.map((point, index) => (
              <div 
                key={index}
                className={`group text-center p-8 bg-gradient-to-br ${point.bgGradient} rounded-3xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer relative overflow-hidden`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-full blur-xl" style={{backgroundColor: point.color}}></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: `${point.color}15`}}>
                    <point.icon className="w-10 h-10" style={{color: point.color}} />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2" style={{color: point.color}}>
                      {point.stat}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {point.statLabel}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                  
                  {/* Arrow indicator on hover */}
                  <div className={`mt-6 transition-all duration-500 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
                      <ArrowRight className="w-5 h-5" style={{color: point.color}} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4">
                Your Perfect Team is One Decision Away
              </h4>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Stop losing sleep over hiring challenges. Start building the team that will transform your business.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center">
                Transform Your Business Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;