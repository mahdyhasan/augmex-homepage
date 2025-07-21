import React from 'react';

const Footer = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Scale Your Team?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              Join hundreds of companies that have transformed their teams with our vetted talent. Stop struggling with lengthy hiring processes and start building your dream team today.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With 40-60% cost savings, 7-14 day turnaround, and 100% transparent pricing, we make exceptional talent accessible to businesses of all sizes.
            </p>
            <p className="text-blue-600 font-semibold text-lg">
              Your next star performer is just one conversation away.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
              View Success Stories
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
              Meet Our Team
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
              Get In Touch
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <a href="#" className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              StaffAugment
            </a>
            <p className="text-gray-400 mt-4">
              Your dream team is waiting to be discovered.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              &copy; 2025 StaffAugment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;