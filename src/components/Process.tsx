import React from 'react';
import { useState } from 'react';
import { Search, Users, CheckCircle, Handshake, HeadphonesIcon } from 'lucide-react';

const Process = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Deep Discovery',
      description: 'We dive into your company culture, goals, and the specific challenges this role needs to solve. Because understanding your "why" helps us find your "who."',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Talent Intelligence',
      description: 'Using our extensive network and advanced sourcing techniques, we identify candidates who aren\'t just qualified - they\'re excited about your mission.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: CheckCircle,
      title: 'Rigorous Vetting',
      description: 'Every candidate goes through our comprehensive evaluation process: skills assessment, cultural fit analysis, and reference verification.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Handshake,
      title: 'Perfect Matchmaking',
      description: 'We present you with candidates who are ready to contribute from day one, complete with insights on how they\'ll integrate with your team.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'We don\'t disappear after placement. We ensure successful integration and provide ongoing support to guarantee long-term success.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Success Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach that consistently delivers exceptional results
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Tabs */}
            <div className="lg:w-1/2 bg-gray-50">
              <div className="p-8">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          activeTab === index ? 'bg-white/20' : 'bg-blue-100'
                        }`}>
                          <step.icon className={`h-6 w-6 ${
                            activeTab === index ? 'text-white' : 'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">
                            {step.title}
                          </h3>
                          <div className={`text-sm ${
                            activeTab === index ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            Step {index + 1}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2">
              <div className="p-8 h-full flex flex-col justify-center">
                <div className="mb-8">
                  <img
                    src={steps[activeTab].image}
                    alt={steps[activeTab].title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {steps[activeTab].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {steps[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;