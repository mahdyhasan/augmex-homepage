import React from 'react';
import { AlertCircle, Clock, Users, TrendingDown } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Lengthy Hiring Process',
      description: 'Traditional hiring takes 3-6 months, delaying critical projects'
    },
    {
      icon: Users,
      title: 'Overworked Teams',
      description: 'Current staff burning out while waiting for new hires'
    },
    {
      icon: TrendingDown,
      title: 'Missed Deadlines',
      description: 'Projects stalling due to lack of skilled resources'
    },
    {
      icon: AlertCircle,
      title: 'High Recruitment Costs',
      description: 'Internal hiring costs spiraling with poor success rates'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          The Problem Most Businesses Face
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Here's what keeps business leaders up at night:
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <problem.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {problem.description}
              </p>
            </div>
            ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              You need amazing talent, but finding them feels impossible. You post jobs and get hundreds of resumes, but somehow none feel quite right. Your competitors seem to effortlessly attract top performers while you're stuck sifting through endless applications.
            </p>
            <p className="text-blue-600 font-semibold text-lg">
              Sound familiar? You're definitely not alone in this struggle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;