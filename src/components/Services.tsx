import React from 'react';
import { Code, Brain, BarChart3, Headphones, Shield, Zap, Palette, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Custom web and mobile applications with modern frameworks',
      skills: ['React', 'Node.js', 'Python', 'TypeScript'],
      color: '#3519E2',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging artificial intelligence',
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      color: '#8b5cf6',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Transform complex data into actionable business insights',
      skills: ['Python', 'R', 'SQL', 'Tableau'],
      color: '#10b981',
      bgColor: 'bg-green-50'
    },
    {
      icon: Headphones,
      title: 'Customer Success',
      description: 'Building lasting customer relationships and growth',
      skills: ['CRM', 'Support', 'Training', 'Analytics'],
      color: '#f59e0b',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'DevOps & Infrastructure',
      description: 'Scalable cloud infrastructure and deployment pipelines',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      color: '#ef4444',
      bgColor: 'bg-red-50'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design creating memorable experiences',
      skills: ['Figma', 'Sketch', 'Prototyping', 'Research'],
      color: '#ec4899',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Zap,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies ensuring reliability',
      skills: ['Automation', 'Manual', 'Performance', 'Security'],
      color: '#eab308',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Strategic project leadership ensuring successful delivery',
      skills: ['Agile', 'Scrum', 'Leadership', 'Strategy'],
      color: '#06b6d4',
      bgColor: 'bg-cyan-50'
    }
  ];

  const stats = [
    { label: 'Successful Hires', value: '1,200+' },
    { label: 'Industries Served', value: '15+' },
    { label: 'Client Retention', value: '98%' },
    { label: 'Avg. Hiring Time', value: '2-3 Weeks' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6" style={{backgroundColor: '#3519E2'}}>
            <Zap className="w-3 h-3 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Source & Hire
            <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Top Talent Across Industries
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, we understand unique talent requirements and deliver custom hiring solutions.
          </p>
          

        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{backgroundColor: `${service.color}15`}}
              >
                <service.icon className="h-5 w-5" style={{color: service.color}} />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {service.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect Hire?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Tell us your requirements and we'll source, vet, and deliver the ideal candidate for your specific needs.
            </p>
            <button 
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{backgroundColor: '#3519E2'}}
            >
              <Users className="w-4 h-4 mr-2" />
              Share Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
