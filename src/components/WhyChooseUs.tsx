import React from 'react';
import { Clock, DollarSign, Target, Users, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Lightning Fast Results',
      description: 'We deliver vetted candidates in 2–3 weeks. No delays. No compromises.',
      stat: '10x Faster',
      statDesc: 'Than traditional hiring',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Flat monthly rates with zero hidden fees or surprise markups.',
      stat: '60–80%',
      statDesc: 'Cost savings vs local hire',
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Only the top 3% of candidates make it past our 7-step screening.',
      stat: 'Top 3%',
      statDesc: 'Candidate acceptance rate',
    },
    {
      icon: Users,
      title: 'Culture-First Hiring',
      description: 'We match beyond skills—fitting seamlessly into your team culture.',
      stat: '90%',
      statDesc: 'Cultural fit success rate',
    },
  ];

  const comparisons = [
    { aspect: 'Time to Hire', us: '2–3 Weeks', others: '3–6 Months' },
    { aspect: 'Candidate Quality', us: 'Top 3% Only', others: 'Variable Quality' },
    { aspect: 'Cost Structure', us: 'Flat Monthly Rate', others: 'Hidden Fees + %' },
    { aspect: 'Cultural Fit', us: '90% Success Rate', others: '60% Success Rate' },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full" style={{ backgroundColor: '#3519E2' }}>
            Why We're Different
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Why Companies
            <span className="block bg-gradient-to-r from-[#3519E2] to-[#8b5cf6] text-transparent bg-clip-text">
              Choose Augmex
            </span>
          </h2>
          <p className="mt-3 text-gray-600 text-base">
            A faster, smarter, and more human way to scale your team.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-6 md:grid-cols-2 mb-14">
          {reasons.map((item, index) => (
            <div key={index} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50">
              <div className="flex items-center justify-center w-12 h-12 rounded-md" style={{ backgroundColor: '#3519E210' }}>
                <item.icon className="w-5 h-5 text-[#3519E2]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#3519E2]">{item.stat}</div>
                    <div className="text-xs text-gray-500">{item.statDesc}</div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#3519E2] py-3 px-4 text-white text-center text-sm font-medium">
            Augmex vs Traditional Hiring
          </div>
          <div className="divide-y divide-gray-100 text-sm">
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-4 py-3 bg-white">
                <div className="text-gray-700 font-medium">{row.aspect}</div>
                <div className="text-center text-green-700 font-medium flex items-center justify-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {row.us}
                </div>
                <div className="text-center text-gray-500">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
