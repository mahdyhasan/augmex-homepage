import React from 'react';
import { Heart, CheckCircle, Award, Users, Target, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Rigorous Vetting Process',
      description: 'Every professional goes through our comprehensive 7-step screening process, ensuring only the top 1% make it through.'
    },
    {
      icon: Target,
      title: 'Cultural Alignment',
      description: 'We match not just skills, but personalities and values to ensure seamless team integration and long-term success.'
    },
    {
      icon: Heart,
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end at placement. We provide continuous support to ensure lasting partnerships.'
    }
  ];

  const metrics = [
    { icon: Award, label: 'Success Rate', value: '98%', color: '#10b981' },
    { icon: Users, label: 'Talent Pool', value: '50K+', color: '#3519E2' },
    { icon: Globe, label: 'Countries', value: '25+', color: '#f59e0b' },
    { icon: Heart, label: 'Years Experience', value: '15+', color: '#ec4899' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6" style={{backgroundColor: '#3519E2'}}>
              <Heart className="w-3 h-3 mr-2" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connecting Dreams
              <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                With Opportunities
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just recruiters – we're dream makers, connecting exceptional talent with visionary companies across the globe.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#3519E2'}}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Global team collaboration"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              
              {/* Floating metric cards */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10b98115'}}>
                    <Award className="w-4 h-4" style={{color: '#10b981'}} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Success</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#3519E215'}}>
                    <Users className="w-4 h-4" style={{color: '#3519E2'}} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">50K+</div>
                    <div className="text-xs text-gray-600">Talent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-600">Building bridges between talent and opportunity worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: `${metric.color}15`}}>
                  <metric.icon className="w-5 h-5" style={{color: metric.color}} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
