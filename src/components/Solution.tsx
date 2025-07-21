import React, { useState } from 'react';
import { Heart, Target, Users, Zap, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Solution = () => {
  const [activeTab, setActiveTab] = useState(0);

  const beliefs = [
    {
      icon: Heart,
      title: 'People Are Everything',
      description: 'Great companies are built by great people. Every hire should elevate your entire team, not just fill a position.',
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-50',
      details: 'We believe that the right person in the right role can transform an entire organization. Our approach focuses on finding individuals who not only have the skills but also the passion and drive to make a real difference.'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'One exceptional hire beats ten mediocre ones. We focus on finding the perfect match, not just any match.',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50',
      details: 'Our rigorous vetting process ensures that only the top 1% of candidates make it through. We would rather present you with 2-3 exceptional candidates than 20 average ones.'
    },
    {
      icon: Globe,
      title: 'Talent Has No Borders',
      description: 'The best professionals might be on the other side of the world. Geography should never limit your access to excellence.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      details: 'In our interconnected world, the best talent is distributed globally. We help you tap into this worldwide pool of exceptional professionals who can work seamlessly with your team.'
    },
    {
      icon: Zap,
      title: 'Speed Without Compromise',
      description: 'Fast hiring doesn\'t mean rushed decisions. With the right process, you can hire quickly and hire well.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      details: 'Our streamlined process eliminates unnecessary delays while maintaining our high standards. Speed and quality are not mutually exclusive when you have the right methodology.'
    },
    {
      icon: Users,
      title: 'Culture Fit Is Critical',
      description: 'Skills can be taught, but culture fit is innate. We prioritize professionals who align with your values and vision.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      details: 'Technical skills are just the foundation. We dive deep into understanding your company culture and values to ensure every candidate will thrive in your unique environment.'
    },
    {
      icon: Shield,
      title: 'Transparency Builds Trust',
      description: 'No hidden fees, no surprises. You deserve complete visibility into the hiring process and costs upfront.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      details: 'Trust is earned through transparency. From pricing to process, from timelines to expectations, we believe in complete openness at every step of our partnership.'
    }
  ];

  const principles = [
    'Human-First Approach',
    'Deep Understanding', 
    'Rigorous Vetting',
    'Ongoing Partnership'
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
            Our beliefs aren't just words—they're the foundation of everything we do
          </p>
        </div>

        {/* Interactive Belief System */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Navigation Pills */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {beliefs.map((belief, index) => {
                const IconComponent = belief.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeTab === index 
                        ? `${belief.bgColor} border-2 border-gray-200 shadow-lg transform scale-105` 
                        : 'bg-white border border-gray-100 hover:bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${belief.color} flex items-center justify-center transition-transform duration-300 ${
                        activeTab === index ? 'scale-110' : ''
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-bold transition-colors ${
                          activeTab === index ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {belief.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{belief.description.slice(0, 50)}...</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 min-h-[500px]">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${beliefs[activeTab].color} flex items-center justify-center`}>
                  {React.createElement(beliefs[activeTab].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{beliefs[activeTab].title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-600 text-sm font-medium">Core Belief {activeTab + 1}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {beliefs[activeTab].description}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Deep Dive</h4>
                <p className="text-gray-600 leading-relaxed">
                  {beliefs[activeTab].details}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {beliefs.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTab ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">
                  {activeTab + 1} of {beliefs.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Principles Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Make This a Reality
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-8">
              {principles.map((principle, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{principle}</h4>
                    <p className="text-gray-600">
                      {index === 0 && "We treat every candidate as a person, not a resume. This creates better matches and lasting relationships."}
                      {index === 1 && "We invest time to truly understand your company culture, values, and the specific challenges you face."}
                      {index === 2 && "Our multi-stage evaluation process ensures only the top 1% of candidates reach your interview stage."}
                      {index === 3 && "Our relationship doesn't end at placement. We provide ongoing support to ensure long-term success."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
