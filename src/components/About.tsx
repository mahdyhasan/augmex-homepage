import React from 'react';
import { Award, Users, Clock, Globe, CheckCircle, Target, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Active Professionals', color: 'text-blue-600' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'text-purple-600' },
    { icon: Globe, value: '50+', label: 'Countries Served', color: 'text-green-600' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', color: 'text-orange-600' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'We don\'t just match skills; we match culture, values, and long-term potential.'
    },
    {
      icon: Clock,
      title: 'Speed & Quality',
      description: 'Lightning-fast delivery without compromising on the quality of talent.'
    },
    {
      icon: Heart,
      title: 'Human-Centric',
      description: 'Technology-enabled but human-driven approach to talent acquisition.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Head of Talent Acquisition',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'AI/ML Specialists'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Technical Recruiter',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Full-Stack Developers'
    },
    {
      name: 'Priya Patel',
      role: 'Client Success Manager',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Enterprise Solutions'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connecting Dreams
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                With Opportunities
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just recruiters – we're dream makers, connecting exceptional talent with visionary companies across the globe.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rigorous Vetting Process</h4>
                  <p className="text-gray-600">Every professional goes through our comprehensive 7-step screening process, ensuring only the top 1% make it through.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cultural Alignment</h4>
                  <p className="text-gray-600">We match not just skills, but personalities and values to ensure seamless team integration and long-term success.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                  <p className="text-gray-600">Our relationship doesn't end at placement. We provide continuous support to ensure lasting partnerships.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Global team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">98%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">48H</div>
                      <div className="text-sm text-gray-600">Avg. Match Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans dedicated to finding your perfect match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
