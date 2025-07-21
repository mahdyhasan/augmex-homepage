import React from 'react';
import { Heart, Target, Users, Zap, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Solution = () => {
  const beliefs = [
    {
      icon: Heart,
      title: 'People Are Everything',
      description: 'Great companies are built by great people. Every hire should elevate your entire team, not just fill a position.',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'One exceptional hire beats ten mediocre ones. We focus on finding the perfect match, not just any match.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Talent Has No Borders',
      description: 'The best professionals might be on the other side of the world. Geography should never limit your access to excellence.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Speed Without Compromise',
      description: 'Fast hiring doesn\'t mean rushed decisions. With the right process, you can hire quickly and hire well.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Culture Fit Is Critical',
      description: 'Skills can be taught, but culture fit is innate. We prioritize professionals who align with your values and vision.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Transparency Builds Trust',
      description: 'No hidden fees, no surprises. You deserve complete visibility into the hiring process and costs upfront.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const principles = [
    {
      number: '01',
      title: 'Human-First Approach',
      description: 'We treat every candidate as a person, not a resume. This creates better matches and lasting relationships.'
    },
    {
      number: '02',
      title: 'Deep Understanding',
      description: 'We invest time to truly understand your company culture, values, and the specific challenges you face.'
    },
    {
      number: '03',
      title: 'Rigorous Vetting',
      description: 'Our multi-stage evaluation process ensures only the top 1% of candidates reach your interview stage.'
    },
    {
      number: '04',
      title: 'Ongoing Partnership',
      description: 'Our relationship doesn\'t end at placement. We provide ongoing support to ensure long-term success.'
    }
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Here's What
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              We Believe
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hiring doesn't have to be painful. With the right approach, finding exceptional talent can be fast, transparent, and predictable.
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${belief.gradient} mb-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <belief.icon className="h-8 w-8" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {belief.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {belief.description}
                </p>
              </div>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${belief.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Our Principles */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Make This a Reality
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our beliefs aren't just words—they're the foundation of everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="flex gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {principle.number}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Result? Hiring That Actually Works
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              When you align with partners who share your commitment to excellence, magic happens. 
              You get faster results, better candidates, and teams that truly elevate your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Faster Time-to-Hire</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Better Culture Fit</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Lower Total Cost</span>
              </div>
            </div>

            <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto">
              Experience Our Approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
