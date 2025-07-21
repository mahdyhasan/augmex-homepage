import React from 'react';
import { Code, Brain, BarChart3, Headphones, Shield, Zap, Globe, Users } from 'lucide-react';

const Services = () => {
  const industries = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Custom web and mobile applications with modern frameworks and scalable architectures',
      skills: ['React', 'Node.js', 'Python', 'TypeScript'],
      gradient: 'from-blue-600 to-blue-800',
      hoverGradient: 'from-blue-700 to-blue-900',
      bgPattern: 'bg-blue-50'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging artificial intelligence and advanced data science',
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      gradient: 'from-purple-600 to-purple-800',
      hoverGradient: 'from-purple-700 to-purple-900',
      bgPattern: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Transform complex data into actionable business insights and strategic decisions',
      skills: ['Python', 'R', 'SQL', 'Tableau'],
      gradient: 'from-green-600 to-green-800',
      hoverGradient: 'from-green-700 to-green-900',
      bgPattern: 'bg-green-50'
    },
    {
      icon: Headphones,
      title: 'Customer Success & Sales',
      description: 'Building lasting customer relationships and driving sustainable business growth',
      skills: ['CRM', 'Support', 'Training', 'Analytics'],
      gradient: 'from-orange-600 to-orange-800',
      hoverGradient: 'from-orange-700 to-orange-900',
      bgPattern: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'DevOps & Infrastructure',
      description: 'Scalable cloud infrastructure and automated deployment pipelines',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-red-600 to-red-800',
      hoverGradient: 'from-red-700 to-red-900',
      bgPattern: 'bg-red-50'
    },
    {
      icon: Globe,
      title: 'UI/UX Design',
      description: 'User-centered design that creates memorable experiences and drives conversions',
      skills: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
      gradient: 'from-pink-600 to-pink-800',
      hoverGradient: 'from-pink-700 to-pink-900',
      bgPattern: 'bg-pink-50'
    },
    {
      icon: Zap,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies ensuring robust, reliable software delivery',
      skills: ['Automation', 'Manual Testing', 'Performance', 'Security'],
      gradient: 'from-yellow-600 to-yellow-800',
      hoverGradient: 'from-yellow-700 to-yellow-900',
      bgPattern: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Strategic project leadership ensuring on-time, on-budget successful delivery',
      skills: ['Agile', 'Scrum', 'Leadership', 'Strategy'],
      gradient: 'from-teal-600 to-teal-800',
      hoverGradient: 'from-teal-700 to-teal-900',
      bgPattern: 'bg-teal-50'
    }
  ];

  const stats = [
    { label: 'Successful Hires', value: '1,200+' },
    { label: 'Industries Served', value: '15+' },
    { label: 'Client Retention', value: '98%' },
    { label: 'Avg. Hiring Time', value: '2-3 Weeks' }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Industries We Excel In
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We Source & Hire
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              For Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, we understand the unique talent requirements across industries and deliver custom hiring solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${industry.bgPattern} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.gradient} group-hover:${industry.hoverGradient} mb-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <industry.icon className="h-8 w-8" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {industry.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {industry.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {industry.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${industry.gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Hire?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tell us your requirements and we'll source, vet, and deliver the ideal candidate for your specific needs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Share Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
