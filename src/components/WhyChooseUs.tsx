import React from 'react';
import { Zap, Award, GraduationCap, Shield, Handshake, DollarSign, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning-Fast Results',
      description: 'Present qualified candidates within 2 weeks while others take months.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Award,
      title: 'Quality Over Quantity',
      description: '3 perfect candidates instead of 30 mediocre ones. Every introduction matters.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: GraduationCap,
      title: 'Industry Expertise',
      description: 'Specialized recruiters who understand your industry\'s unique challenges.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Shield,
      title: '90-Day Guarantee',
      description: 'Risk-free hiring with our comprehensive replacement guarantee.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: 'Continuous support ensuring successful long-term integration.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Save 40-60% on hiring costs while accessing premium talent.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional team background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Leading Companies Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Experience the difference that expertise, dedication, and results-driven approach can make for your business
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
                <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Join hundreds of companies that have transformed their teams with our proven approach. 
                Let's discuss how we can help you find exceptional talent that will drive your business forward.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;