import React from 'react';
import { Code, Brain, BarChart3, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Developers',
      description: 'Building tomorrow\'s digital solutions with cutting-edge technology today',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI/ML Engineers',
      description: 'Transforming data into intelligent systems that drive business growth',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Converting complex numbers into clear insights for smarter decisions',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Headphones,
      title: 'Sales & Support Staff',
      description: 'Creating lasting customer relationships that fuel sustainable business expansion',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vetted Talents
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Connecting talent with opportunity, perfectly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;