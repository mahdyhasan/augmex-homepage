import React from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-300 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Write Your Success Story?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center">
            <Star className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-blue-200">Top 3% Talent</span>
          </div>
          <div className="flex items-center justify-center">
            <Users className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-blue-200">99% Success Rate</span>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-blue-200">90-Day Guarantee</span>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left space-y-4">
          <p className="text-blue-100 leading-relaxed text-lg">
            Look, we know you've probably been burned by recruiters before. Maybe they sent you candidates who looked good on paper but were completely wrong for your team. Or they promised the moon and delivered... well, let's not talk about what they delivered.
          </p>
          <p className="text-blue-100 leading-relaxed text-lg">
            Here's the thing: Your next great hire is out there right now. They might be scrolling LinkedIn, considering their options, or maybe they're not even looking yet - but they'd jump at the right opportunity.
          </p>
          <p className="text-white font-medium text-lg">
            The question isn't whether amazing talent exists. The question is: will you find them before your competitors do?
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-white text-blue-900 font-semibold py-4 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Search Today
          </button>
          <button className="border-2 border-white text-white font-semibold py-4 px-6 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm">
            View Success Stories
          </button>
          <button className="border-2 border-white text-white font-semibold py-4 px-6 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;