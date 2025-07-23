import React from 'react';
import { Clock, Target, Users } from 'lucide-react';

const Story = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Ready to Write Your Success Story?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Look, we know you've probably been burned by recruiters before. Maybe they sent you candidates who looked good on paper but were completely wrong for your team. Or they promised the moon and delivered... well, let's not talk about what they delivered.
              </p>
              
              <p>
                Here's the thing: Your next great hire is out there right now. They might be scrolling LinkedIn, considering their options, or maybe they're not even looking yet - but they'd jump at the right opportunity.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4" style={{borderLeftColor: '#3519E2'}}>
                <p className="font-semibold text-gray-900 text-lg">
                  The question isn't whether amazing talent exists. The question is: will you find them before your competitors do?
                </p>
              </div>
              
              <p>
                Every day you wait is another day your competition might snag that perfect candidate. Another day your team stays overwhelmed. Another day that game-changing project stays on hold.
              </p>
              
              <p className="text-xl font-semibold text-gray-900">
                But here's the good news: <span style={{fontWeight: 'normal'}}>You don't have to do this alone anymore.</span>
              </p>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">Success Story Image</p>
                  <p className="text-sm">Team collaboration & success</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#3519E215'}}>
                  <Target className="w-5 h-5" style={{color: '#3519E2'}} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Perfect Match</div>
                  <div className="text-sm text-gray-600">Found in 2 weeks</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#3519E215'}}>
                  <Clock className="w-5 h-5" style={{color: '#3519E2'}} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">85% Faster</div>
                  <div className="text-sm text-gray-600">Than traditional hiring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Urgency */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Clock is Ticking
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              While you're reading this, your ideal candidate might be accepting an offer from someone else. 
              The best talent doesn't stay available for long in today's competitive market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#ef444415'}}>
                  <Clock className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Every Day Counts</h4>
                <p className="text-gray-600 text-sm">Top talent gets snapped up quickly</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#f59e0b15'}}>
                  <Target className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Your Competition</h4>
                <p className="text-gray-600 text-sm">Is actively hunting the same talent</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#3519E215'}}>
                  <Users className="w-8 h-8" style={{color: '#3519E2'}} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Your Team</h4>
                <p className="text-gray-600 text-sm">Is waiting for that game-changer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
