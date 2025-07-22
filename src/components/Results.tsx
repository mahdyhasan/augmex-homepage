import React, { useState, useEffect } from 'react';
import { Trophy, Users, Clock, TrendingUp, ArrowRight, CheckCircle, X, Target } from 'lucide-react';

const Results = () => {
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [counters, setCounters] = useState({
    clients: 0,
    placements: 0,
    satisfaction: 0,
    retention: 0
  });

  const metrics = [
    {
      icon: Users,
      label: 'Happy Clients',
      value: 500,
      suffix: '+',
      color: '#3519E2',
      description: 'Companies trust us with their hiring needs'
    },
    {
      icon: Trophy,
      label: 'Successful Placements',
      value: 2400,
      suffix: '+',
      color: '#10b981',
      description: 'Professionals placed in top companies'
    },
    {
      icon: Target,
      label: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      color: '#f59e0b',
      description: 'Would recommend us to others'
    },
    {
      icon: TrendingUp,
      label: 'Talent Retention',
      value: 94,
      suffix: '%',
      color: '#ec4899',
      description: 'Still with companies after 2+ years'
    }
  ];

  const beforeAfter = [
    {
      category: 'Hiring Time',
      before: '6+ months',
      after: '2-3 weeks',
      improvement: '85% faster'
    },
    {
      category: 'Success Rate',
      before: '30% fit',
      after: '98% fit',
      improvement: '225% better'
    },
    {
      category: 'Total Cost',
      before: '$50K+ per hire',
      after: '$15K per hire',
      improvement: '70% savings'
    },
    {
      category: 'Quality Score',
      before: '6/10 average',
      after: '9.5/10 average',
      improvement: '58% higher'
    }
  ];

  const testimonialRotation = [
    {
      quote: "StaffAugment transformed our hiring process. What used to take 6 months now takes 2 weeks.",
      author: "Sarah Chen, CTO at TechFlow",
      metric: "6→2 weeks"
    },
    {
      quote: "The quality of candidates is exceptional. Our last 5 hires are all top performers.",
      author: "Michael Rodriguez, VP Engineering",
      metric: "100% success"
    },
    {
      quote: "Finally, a recruitment partner that actually understands our culture and needs.",
      author: "Emily Watson, Head of People",
      metric: "Perfect fit"
    }
  ];

  // Animate counters on component mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        metrics.forEach((metric, index) => {
          const key = Object.keys(newCounters)[index];
          const target = metric.value;
          const current = newCounters[key];
          
          if (current < target) {
            allComplete = false;
            const increment = Math.ceil((target - current) / 10);
            newCounters[key] = Math.min(current + increment, target);
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }
        
        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6" style={{backgroundColor: '#3519E2'}}>
            <Trophy className="w-3 h-3 mr-2" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Results
            <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #3519E2, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Speak for Themselves
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's how we've transformed hiring for companies worldwide.
          </p>
        </div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedMetric(index)}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{backgroundColor: `${metric.color}15`}}
              >
                <metric.icon className="w-4 h-4" style={{color: metric.color}} />
              </div>
              
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{color: metric.color}}>
                {Object.values(counters)[index]}{metric.suffix}
              </div>
              <div className="text-gray-900 font-medium mb-1">{metric.label}</div>
              <div className="text-gray-600 text-xs">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Before vs After Comparison */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Before vs After StaffAugment</h3>
            <p className="text-gray-600">See the dramatic transformation in hiring outcomes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfter.map((comparison, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-900 mb-4">{comparison.category}</h4>
                
                {/* Before */}
                <div className="bg-red-50 rounded-xl p-4 mb-3 border border-red-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <X className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-600 font-medium">BEFORE</span>
                  </div>
                  <div className="text-red-700 font-medium">{comparison.before}</div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mb-3">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* After */}
                <div className="bg-green-50 rounded-xl p-4 mb-3 border border-green-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">AFTER</span>
                  </div>
                  <div className="text-green-700 font-medium">{comparison.after}</div>
                </div>
                
                {/* Improvement */}
                <div className="text-xs font-semibold px-3 py-1 rounded-full inline-block" style={{backgroundColor: '#3519E215', color: '#3519E2'}}>
                  {comparison.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rotating Testimonials with Visual Impact */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">What Our Clients Say</h3>
            
            <div className="mb-8">
              <div className="text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
                "{testimonialRotation[selectedMetric % testimonialRotation.length].quote}"
              </div>
              <div className="text-gray-300">
                — {testimonialRotation[selectedMetric % testimonialRotation.length].author}
              </div>
              <div className="inline-block mt-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
                {testimonialRotation[selectedMetric % testimonialRotation.length].metric}
              </div>
            </div>
            
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              See More Success Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
