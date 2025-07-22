import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Zap, Shield, Globe, Award, Headphones } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Global Headquarters',
      details: 'Dhaka Technology Park\nKaliakair, Gazipur 1750\nBangladesh',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      details: '+880 1700 000000\n+1 (555) 123-4567',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@staffaugment.com\ntalent@staffaugment.com',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Initial Response: 1 Hour\nTalent Proposals: 24-48 Hours',
      color: 'from-red-500 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Pre-Vetted Talent',
      description: 'Access to the top 1% of remote professionals worldwide',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: '48-Hour Delivery',
      description: 'Get matched with candidates in 2 days or less',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '30-day replacement guarantee for peace of mind',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access talent from across the world, 24/7 availability',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '95% client satisfaction rate with our talent placements',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Personal account manager for ongoing support',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const contactMethods = [
    {
      title: 'Quick Call',
      description: 'Speak directly with our talent specialists',
      action: 'Call +880 1700 000000',
      icon: Phone,
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Email Inquiry',
      description: 'Send us your requirements and get a detailed proposal',
      action: 'hello@staffaugment.com',
      icon: Mail,
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Quick chat for immediate assistance',
      action: 'Message us on WhatsApp',
      icon: Phone,
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6" style={{backgroundColor: '#3519E2'}}>
            <Phone className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Your
            <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(to right, #3519E2, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Dream Team Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get matched with world-class talent in 48 hours. No lengthy processes, no compromises on quality.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <button 
                className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#3519E2'}}
              >
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Us?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl p-12 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #3519E2, #8b5cf6)'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Team?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have successfully scaled their teams with our top-tier talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{color: '#3519E2'}}>
                  Call +880 1700 000000
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
