import React from 'react';
import { Lightbulb, Heart, Target, CheckCircle } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our beliefs in action"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Here's What We Believe
        </h2>
        
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4 flex-shrink-0">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Passionate Teams</h3>
                  <p className="text-gray-600">Every company deserves skilled, passionate professionals who care about the mission</p>
                </div>
          </div>
          
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mr-4 flex-shrink-0">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transformative Hires</h3>
                  <p className="text-gray-600">The right hire doesn't just fill a position - they transform possibilities into realities</p>
                </div>
          </div>
          
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-4 flex-shrink-0">
              <Lightbulb className="h-8 w-8 text-green-600" />
            </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Perfect Matching</h3>
                  <p className="text-gray-600">We match dreams to opportunities, cultures to personalities, and visions to people</p>
                </div>
          </div>
            </div>
        
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                We believe every company deserves a team that's not just skilled, but passionate about what they do. The right hire doesn't just fill a position - they transform possibilities into realities.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                But here's our secret sauce: We don't just match resumes to job descriptions. We match dreams to opportunities, cultures to personalities, and visions to the people who can make them happen.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-lg">
                    The best talent isn't always actively looking - sometimes they need to be inspired by the right opportunity. That's where we come in.
            </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;