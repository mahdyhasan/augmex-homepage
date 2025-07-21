import React from 'react';
import { Trophy, Users, Clock, TrendingUp } from 'lucide-react';

const Results = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Upgraded Capability',
      description: 'Transform your team\'s potential with top-tier talent'
    },
    {
      icon: Users,
      title: 'Multiple Options',
      description: 'Choose from carefully vetted exceptional candidates'
    },
    {
      icon: Clock,
      title: 'Streamlined Process',
      description: 'Efficient recruitment without compromising quality'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Consistent success across diverse industries'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Results Speak for Themselves
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                    <achievement.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-800 leading-relaxed text-lg">
                Our clients don't just hire - they upgrade their entire capability. They go from struggling to find decent candidates to choosing between multiple exceptional options. From lengthy hiring processes to efficient, streamlined recruitment.
              </p>
              <p className="text-gray-800 leading-relaxed text-lg">
                What's the difference? We treat every placement like our reputation depends on it. Because it does.
              </p>
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <p className="text-gray-800 font-medium text-lg">
                  When your new hire becomes your star performer, that's when we know we've done our job right.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Success results"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;