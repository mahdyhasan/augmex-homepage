import React from 'react';
import {
  Code,
  Brain,
  BarChart3,
  Headphones,
  Shield,
  Zap,
  Palette,
  Users,
  DollarSign,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Developers',
      description: 'Skilled engineers for web and mobile projects using modern frameworks.',
      skills: ['React', 'Node.js', 'Laravel', 'TypeScript'],
      color: '#3519E2'
    },
    {
      icon: Brain,
      title: 'AI & ML Engineers',
      description: 'Experts in machine learning, NLP, and computer vision for AI-driven products.',
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Vision'],
      color: '#8b5cf6'
    },
    {
      icon: BarChart3,
      title: 'Data Scientists & Analysts',
      description: 'Professionals who turn raw data into business intelligence.',
      skills: ['Python', 'SQL', 'Power BI', 'Tableau'],
      color: '#10b981'
    },
    {
      icon: Shield,
      title: 'DevOps Engineers',
      description: 'Infrastructure and automation experts for scalable deployments.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      color: '#ef4444'
    },
    {
      icon: Headphones,
      title: 'Customer Success',
      description: 'Support reps who boost retention, loyalty, and satisfaction.',
      skills: ['CRM Tools', 'Support', 'Onboarding', 'Analytics'],
      color: '#f59e0b'
    },
    {
      icon: Zap,
      title: 'QA Engineers',
      description: 'Manual and automated testers ensuring your product works flawlessly.',
      skills: ['Automation', 'Manual', 'Performance', 'Security'],
      color: '#eab308'
    },
    {
      icon: Users,
      title: 'B2B/D2C Sales Agents',
      description: 'Sales reps trained to close deals and grow revenue across channels.',
      skills: ['Outbound', 'CRM', 'Email', 'Calls'],
      color: '#06b6d4'
    },
    {
      icon: DollarSign,
      title: 'Accountants',
      description: 'Financial professionals for day-to-day operations and compliance.',
      skills: ['QuickBooks', 'Xero', 'Invoicing', 'Reconciliation'],
      color: '#16a34a'
    }
  ];

  const stats = [
    { label: 'Candidates Onboarded', value: '200+' },
    { label: 'Hiring Speed', value: '7–14 Days' },
    { label: 'Client Retention Rate', value: '98%' },
    { label: 'Avg. Cost Savings', value: '40–60%' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
            style={{ backgroundColor: '#3519E2' }}
          >
            <Zap className="w-3 h-3 mr-2" />
            Talent Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Assess, Recruit & Onboard
            <span className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              High-Performing Remote Teams
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            From startups to scaleups, we help you build elite tech and ops teams without the overhead.
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
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="h-5 w-5" style={{ color: service.color }} />
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Hire Fast, Save Big, Scale Confidently
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our team handle talent sourcing and onboarding while you focus on growth.
            </p>
            <button
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#3519E2' }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
