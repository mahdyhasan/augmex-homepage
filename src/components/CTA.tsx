import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Dream Team?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop struggling with hiring. Get matched with world-class talent in 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{backgroundColor: '#3519E2'}}
            >
              Start Hiring Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-100 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
