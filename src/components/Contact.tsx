import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Users, Zap, Shield, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    teamSize: '',
    timeline: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Global Headquarters',
      details: 'Dhaka Technology Park\nKaliakair, Gazipur 1750\nBangladesh',
      color: 'from-blue-500 to-blue-600'
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
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Initial Response: 1 Hour\nTalent Proposals: 24-48 Hours',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Pre-Vetted Talent',
      description: 'Access to the top 1% of remote professionals'
    },
    {
      icon: Zap,
      title: '48-Hour Delivery',
      description: 'Get matched with candidates in 2 days or less'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '30-day replacement guarantee for peace of mind'
    }
  ];

  const services = [
    'Full-Stack Developers',
    'AI/ML Engineers', 
    'Data Scientists',
    'UI/UX Designers',
    'DevOps Engineers',
    'QA Engineers',
    'Customer Success',
    'Project Managers'
  ];

  const teamSizes = [
    '1-2 professionals',
    '3-5 professionals',
    '6-10 professionals',
    '11-20 professionals',
    '20+ professionals'
  ];

  const timelines = [
    'ASAP (Within 48 hours)',
    'Within 1 week',
    '1-2 weeks',
    '1 month',
    'Flexible timeline'
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Send className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Dream Team Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get matched with world-class talent in 48 hours. No lengthy processes, no compromises on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Start Your Project</h3>
                  <p className="text-gray-600">Tell us about your requirements</p>
                </div>
              </div>

              <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                {/* Project Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Needed *
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Team Size
                    </label>
                    <select 
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    When do you need them to start?
                  </label>
                  <select 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
                
                {/* Project Details */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Details & Requirements
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project requirements, tech stack, team culture, and any specific skills you're looking for..."
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Get My Custom Talent Proposal
                </button>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No spam, ever
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    1 hour response
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free consultation
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h4>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{benefit.title}</h5>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h4>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{info.title}</h5>
                      <p className="text-gray-600 text-sm whitespace-pre-line">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Not ready for a formal request?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a free 15-minute consultation to discuss your needs and see if we're a good fit.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
