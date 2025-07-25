import React from 'react';
import { Clock, DollarSign, Target, Users, CheckCircle, Zap, Percent, Award, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Results',
      description: 'We deliver vetted candidates in 2–3 weeks. No delays. No compromises.',
      stat: '10x Faster',
      statDesc: 'Than traditional hiring',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Flat monthly rates with zero hidden fees or surprise markups.',
      stat: '60–80%',
      statDesc: 'Cost savings vs local hire',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      title: 'Precision Matching',
      description: 'Only the top 3% of candidates make it past our 7-step screening.',
      stat: 'Top 3%',
      statDesc: 'Candidate acceptance rate',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Heart,
      title: 'Culture-First Hiring',
      description: 'We match beyond skills—fitting seamlessly into your team culture.',
      stat: '90%',
      statDesc: 'Cultural fit success rate',
      color: 'bg-pink-100 text-pink-600'
    },
  ];

  const comparisons = [
    { aspect: 'Time to Hire', us: '2–3 Weeks', others: '3–6 Months', icon: Clock },
    { aspect: 'Candidate Quality', us: 'Top 3% Only', others: 'Variable Quality', icon: Target },
    { aspect: 'Cost Structure', us: 'Flat Monthly Rate', others: 'Hidden Fees + %', icon: DollarSign },
    { aspect: 'Cultural Fit', us: '90% Success Rate', others: '60% Success Rate', icon: Users },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
            Why We're Different
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            The Augmex Advantage
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transform your hiring process with our unique approach to talent acquisition
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${item.color} mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="mt-auto">
                <span className="text-2xl font-bold text-gray-900">{item.stat}</span>
                <p className="text-sm text-gray-500">{item.statDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-6 text-white">
            <h3 className="text-xl font-semibold text-center">
              Augmex vs. Traditional Hiring
            </h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            <div className="grid grid-cols-12 px-6 py-4 bg-gray-50 text-sm font-medium text-gray-500">
              <div className="col-span-6 lg:col-span-4">Hiring Aspect</div>
              <div className="col-span-3 lg:col-span-4 text-center">Augmex</div>
              <div className="col-span-3 lg:col-span-4 text-center">Others</div>
            </div>
            
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-gray-50 transition-colors">
                <div className="col-span-6 lg:col-span-4 flex items-center gap-3">
                  <row.icon className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">{row.aspect}</span>
                </div>
                <div className="col-span-3 lg:col-span-4 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {row.us}
                  </span>
                </div>
                <div className="col-span-3 lg:col-span-4 text-center text-gray-500">
                  {row.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
