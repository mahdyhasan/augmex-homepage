import React from "react";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white relative px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Tag (optional badge) */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-gray-700 text-sm font-medium">
            Work With Top 3% Talent
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Build agile remote teams that{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #3519E2, #8b5cf6)",
            }}
          >
            deliver enterprise-quality work
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Augmex helps growing teams scale fast with enterprise-ready professionals — vetted, onboarded, and performance-ready from day one.

        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/success-stories">
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white text-base shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: "#3519E2" }}
            >
              Success Stories
            </button>
          </a>
          
          <a href="/contact-us">
            <button className="px-6 py-3 rounded-xl border border-gray-300 text-base font-semibold text-gray-800 hover:bg-gray-100 transition">
              Contact Us
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <StatItem value="40–60%" label="Cost Saving" />
          <StatItem value="7–14" label="Days Setup" />
          <StatItem value="100%" label="Transparent Process" />
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl font-bold" style={{ color: "#3519E2" }}>
      {value}
    </div>
    <div className="text-sm text-gray-600 mt-1">{label}</div>
  </div>
);

export default Hero;
