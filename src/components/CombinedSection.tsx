import React from 'react';
import { Rocket, TrendingUp, Clock, Star } from 'lucide-react';

const CombinedSection = () => {
  const industries = [
    'Ecommerce',
    'Retail', 
    'Software',
    'Startups',
    'Professional',
    'Fintech'
  ];

  const stats = [
    {
      icon: Rocket,
      number: '35K+',
      text: 'Hours Served',
      color: 'text-orange-400'
    },
    {
      icon: TrendingUp,
      number: '450%',
      text: 'Average ROI Increase',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      number: '90 Days',
      text: 'Average Time to Results',
      color: 'text-green-400'
    },
    {
      icon: Star,
      number: '99%',
      text: 'Client Satisfaction Rate',
      color: 'text-yellow-400'
    }
  ];

  const companyLogos = [
    'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Industries Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industries We Excel In
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Our specialized teams understand the unique challenges and opportunities across diverse sectors. 
              We've successfully placed top talent in companies ranging from innovative startups to established enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-6 gap-4 items-center">
              {/* Floating avatars representing talent */}
              <div className="col-span-6 flex justify-center mb-4">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face"
                    alt="Talent"
                    className="w-16 h-16 rounded-full border-4 border-white/20 shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </div>
              
              <div className="col-span-2 flex justify-end">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                  alt="Talent"
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
              </div>
              
              <div className="col-span-2 flex justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Potential Candidates Found</div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 flex justify-start">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                  alt="Talent"
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
              </div>
              
              <div className="col-span-3 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                  alt="Talent"
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
              </div>
              
              <div className="col-span-3 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                  alt="Talent"
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="w-full h-16 object-cover rounded-lg opacity-70 hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* About Augmex */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Augmex team"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Augmex
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-6">
              We're not just another staffing agency. Augmex is your strategic partner in building exceptional teams 
              that drive real business results. Founded by industry veterans who understand that great teams don't 
              happen by accident - they're carefully crafted.
            </p>
            <p className="text-blue-200 text-lg leading-relaxed">
              Every day, we wake up excited to solve your biggest challenge: finding the right people who don't 
              just fill roles, but elevate your entire organization. Because when you succeed, we succeed.
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;