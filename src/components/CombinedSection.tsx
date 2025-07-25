import React from 'react';
import { Rocket, TrendingUp, Clock, Star } from 'lucide-react';

const CombinedSection = () => {
  const industries = ['Ecommerce', 'Retail', 'Software', 'Startups', 'Professional', 'Fintech'];

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
      {/* Gradient Blurs */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-400 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Industries Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Industries We Excel In</h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              From fast-scaling startups to fintech powerhouses, we’ve helped companies across key sectors build elite remote teams that deliver.
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Candidate Display */}
          <div className="grid grid-cols-6 gap-4 items-center">
            <div className="col-span-6 flex justify-center mb-4 relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face"
                className="w-16 h-16 rounded-full border-4 border-white/20 shadow-lg"
                alt="Talent"
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 border-2 border-white rounded-full" />
            </div>
            <div className="col-span-2 flex justify-end">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                className="w-12 h-12 rounded-full border-2 border-white/20" alt="Talent" />
            </div>
            <div className="col-span-2 text-center">
              <div className="text-white text-xl font-bold mb-1">Top Candidates</div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="col-span-2 flex justify-start">
              <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                className="w-12 h-12 rounded-full border-2 border-white/20" alt="Talent" />
            </div>
            <div className="col-span-3 flex justify-center">
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                className="w-12 h-12 rounded-full border-2 border-white/20" alt="Talent" />
            </div>
            <div className="col-span-3 flex justify-center">
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                className="w-12 h-12 rounded-full border-2 border-white/20" alt="Talent" />
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/20 transition"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 object-contain opacity-70 hover:opacity-90 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* About Augmex */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              alt="Augmex Team"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">About Augmex</h2>
            <p className="text-blue-200 text-lg mb-4 leading-relaxed">
              We go beyond staffing — we're your strategic growth partner. Augmex helps companies build remote teams that deliver enterprise-grade results.
            </p>
            <p className="text-blue-200 text-lg leading-relaxed">
              With decades of combined experience, we don't just fill seats. We bring talent that scales culture, velocity, and your bottom line.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-transform duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-white/20 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-200 mt-2">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;
