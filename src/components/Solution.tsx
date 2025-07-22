import React, { useState } from 'react';
import { Heart, Target, Users, Zap, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Solution = () => {
  const [activeTab, setActiveTab] = useState(0);

  const beliefs = [
    {
      icon: Heart,
      title: 'People Are Everything',
      description: 'Great companies are built by great people. Every hire should elevate your entire team.',
      color: '#ec4899',
      details: 'We believe that the right person in the right role can transform an entire organization. Our approach focuses on finding individuals who not only have the skills but also the passion and drive to make a real difference.'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'One exceptional hire beats ten mediocre ones. We focus on finding the perfect match.',
      color: '#3519E2',
      details: 'Our rigorous vetting process ensures that only the top 1% of candidates make it through. We would rather present you with 2-3 exceptional candidates than 20 average ones.'
    },
    {
      icon: Globe,
      title: 'Talent Has No Borders',
      description: 'The best professionals might be on the other side of the world.',
      color: '#10b981',
      details: 'In our interconnected world, the best talent is distributed globally. We help you tap into this worldwide pool of exceptional professionals who can work seamlessly with your team.'
    },
    {
      icon: Zap,
      title: 'Speed Without Compromise',
      description: 'Fast hiring doesn\'t mean rushed decisions. Quality and speed can coexist.',
      color: '#f59e0b',
      details: 'Our streamlined process eliminates unnecessary delays while maintaining our high standards. Speed and quality are not mutually exclusive when you have the right methodology.'
    },
    {
      icon: Users,
      title: 'Culture Fit Is Critical',
      description: 'Skills can be taught, but culture fit is innate. We prioritize alignment.',
      color: '#8b5cf6',
      details: 'Technical skills are just the foundation. We dive deep into understanding your company culture and values to ensure every candidate will thrive in your unique environment.'
    },
    {
      icon: Shield,
      title: 'Transparency Builds Trust',
      description: 'No hidden fees, no surprises. You deserve complete visibility upfront.',
      color: '#06b6d4',
      details: 'Trust is earned through transparency. From pricing to process, from timelines to expectations, we believe in complete openness at every step of our partnership.'
    }
  ];

  const principles = [
    { title: 'Human-First Approach', description: 'We treat every candidate as a person, not a resume. This creates better matches and lasting relationships.' },
    { title: 'Deep Understanding', description: 'We invest time to truly understand your company culture, values, and the specific challenges you face.' },
    { title: 'Rigorous Vetting', description: 'Our multi-stage evaluation process ensures only the top 1% of candidates reach your interview stage.' },
    { title: 'Ongoing Partnership', description: 'Our relationship doesn\'t end at placement. We provide ongoing support to ensure long-term success.' }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6" style={{backgroundColor: '#3519E2'}}>
            <Heart className="w-3 h-3 mr-2" />
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Here's What
            <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              We Believe
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our beliefs aren't just words—they're the foundation of everything we do
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
              onClick={() => setActiveTab(index)}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{backgroundColor: `${belief.color}15`}}
              >
                <belief.icon className="h-4 w-4" style={{color: belief.color}} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{belief.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{belief.description}</p>
            </div>
          ))}
        </div>

        {/* Active Content */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{backgroundColor: `${beliefs[activeTab].color}15`}}
            >
              {React.createElement(beliefs[activeTab].icon, {
                className: "w-6 h-6",
                style: {color: beliefs[activeTab].color}
              })}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{beliefs[activeTab].title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{beliefs[activeTab].details}</p>
            
            {/* Progress indicator */}
            <div className="flex justify-center gap-2">
              {beliefs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTab ? 'w-8' : ''
                  }`}
                  style={{backgroundColor: index === activeTab ? '#3519E2' : '#d1d5db'}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Principles Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How We Make This a Reality
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto"
                  style={{backgroundColor: '#3519E2'}}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gray-50 rounded-3xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Result? Hiring That Actually Works
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              When you align with partners who share your commitment to excellence, magic happens. 
              You get faster results, better candidates, and teams that truly elevate your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {['Faster Time-to-Hire', 'Better Culture Fit', 'Lower Total Cost'].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-3 bg-white rounded-xl p-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-900 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{backgroundColor: '#3519E2'}}
            >
              Experience Our Approach
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
