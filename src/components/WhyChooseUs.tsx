import React from 'react';
import { Clock, DollarSign, Target, Users, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Results',
      description: 'Vetted candidates delivered in 2–3 weeks.',
      stat: '10x Faster',
      statDesc: 'Than traditional hiring',
    },
    {
      icon: DollarSign,
      title: 'Clear Pricing',
      description: 'Flat monthly rates with no hidden fees.',
      stat: '60–80%',
      statDesc: 'Cost savings vs local hire',
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Top 3% candidates through 7-step screening.',
      stat: 'Top 3%',
      statDesc: 'Acceptance rate',
    },
    {
      icon: Users,
      title: 'Cultural Fit',
      description: 'Matches that align with your team’s culture.',
      stat: '90%',
      statDesc: 'Fit success rate',
    },
  ];

  const comparisons = [
    { aspect: 'Time to Hire', us: '2–3 Weeks', others: '3–6 Months' },
    { aspect: 'Candidate Quality', us: 'Top 3% Only', others: 'Variable' },
    { aspect: 'Cost', us: 'Flat Rate', others: 'Hidden Fees' },
    { aspect: 'Cultural Fit', us: '90% Success', others: '60% Success' },
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-2 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded">
            Why We're Different
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-gray-900">
            Why Choose Augmex
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            A smarter way to scale your team.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          {reasons.map((item, index) => (
            <div key={index} className="flex gap-3 p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-50">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-gray-700">{item.stat}</div>
                    <div className="text-xs text-gray-400">{item.statDesc}</div>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="border border-gray-100 rounded-lg">
          <div className="bg-gray-50 py-2 px-4 text-gray-700 text-center text-sm font-medium">
            Augmex vs Traditional Hiring
          </div>
          <div className="divide-y divide-gray-100 text-sm">
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-4 py-2">
                <div className="text-gray-600 font-medium">{row.aspect}</div>
                <div className="text-center text-gray-700 font-medium flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3 text-gray-500" />
                  {row.us}
                </div>
                <div className="text-center text-gray-400">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
