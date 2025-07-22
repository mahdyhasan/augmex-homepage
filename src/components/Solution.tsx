import React from 'react';
import { Heart, Target, Users, Zap, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Solution = () => {
  const beliefs = [
    {
      icon: Heart,
      title: 'People Are Everything',
      description: 'Great companies are built by great people. Every hire should elevate your entire team, not just fill a position.'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'One exceptional hire beats ten mediocre ones. We focus on finding the perfect match, not just any match.'
    },
    {
      icon: Globe,
      title: 'Talent Has No Borders',
      description: 'The best professionals might be on the other side of the world. Geography should never limit excellence.'
    },
    {
      icon: Zap,
      title: 'Speed Without Compromise',
      description: 'Fast hiring doesn\'t mean rushed decisions. Quality and speed can coexist with the right process.'
    },
    {
      icon: Users,
      title: 'Culture Fit Is Critical',
      description: 'Skills can be taught, but culture fit is innate. We prioritize alignment for long-term success.'
    },
    {
      icon: Shield,
      title: 'Transparency Builds Trust',
      description: 'No hidden fees, no surprises. You deserve complete visibility into process and costs upfront.'
    }
  ];

  const principles = [
    { 
      title: 'Human-First Approach', 
      description: 'We treat every candidate as a person, not a resume. This creates better matches and lasting relationships.' 
    },
    { 
      title: 'Deep Understanding', 
      description: 'We invest time to truly understand your company culture, values, and the specific challenges you face.' 
    },
    { 
      title: 'Rigorous Vetting', 
      description: 'Our multi-stage evaluation process ensures only the top 1% of candidates reach your interview stage.' 
    },
    { 
      title: 'Ongoing Partnership', 
      description: 'Our relationship doesn\'t end at placement. We provide ongoing support to ensure long-term success.' 
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Our Philosophy Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Our Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Here's What We Believe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our beliefs aren't just words—they're the foundation of everything we do and guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <belief.icon className="h-6 w-6 text-gray-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{belief.title}</h3>
                <p className="text-gray-600 leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Make This Reality Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Make This a Reality
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our principles translate into concrete actions that deliver exceptional results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-lg"
                  style={{backgroundColor: '#3519E2'}}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{principle.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Result Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Result? Hiring That Actually Works
            </h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              When you align with partners who share your commitment to excellence, magic happens. 
              You get faster results, better candidates, and teams that truly elevate your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {['Faster Time-to-Hire', 'Better Culture Fit', 'Lower Total Cost'].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900 font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="inline-flex items-center px-10 py-4 rounded-2xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{backgroundColor: '#3519E2'}}
            >
              Experience Our Approach
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
