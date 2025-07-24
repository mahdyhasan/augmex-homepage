// components/Hero.tsx
import React from "react";
import { ArrowRight, Users, Clock, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
            Staff Resource Augmentation
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Scale smarter with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3519E2, #8b5cf6)",
              }}
            >
              elite remote teams
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Access world-class talent in days, not months. Pre-vetted professionals,
            transparent pricing, and rapid onboarding — all in one platform.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="px-6 py-3 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              style={{ backgroundColor: "#3519E2" }}
            >
              Explore Talent
            </button>
            <button className="px-6 py-3 text-gray-800 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition">
              Talk to Us
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mt-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Rapid Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Top 3% Talent</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6">
          <StatCard value="40–60%" label="Cost Saving" />
          <StatCard value="7–14" label="Days Setup" />
          <StatCard value="100%" label="Transparent Process" />
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-xl px-6 py-6 text-center w-48">
    <div className="text-3xl font-bold" style={{ color: "#3519E2" }}>
      {value}
    </div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default Hero;
