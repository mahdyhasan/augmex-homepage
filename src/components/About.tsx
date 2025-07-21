import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              More than recruiters - we're your growth partners
            </p>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Building Success Stories Together
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We're not just another staffing agency. We're the bridge between ambitious companies and exceptional talent. Founded by industry veterans who understand that great teams don't happen by accident - they're carefully crafted.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every day, we wake up excited to solve your biggest challenge: finding the right people who don't just fill roles, but elevate your entire organization. Because when you succeed, we succeed. And honestly? There's nothing we love more than celebrating your wins.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Successful Placements</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;