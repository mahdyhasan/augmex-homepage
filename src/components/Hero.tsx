import React from "react";

const Hero = () => {
  return (
    <section className="bg-white relative px-6 py-28 md:py-36 lg:py-40">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Tag (optional badge) */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-6">
          Remote Staffing Simplified
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
          Instantly access pre-vetted engineers, designers, and sales agents — all
          ready to integrate and perform from day one.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="px-6 py-3 rounded-xl font-semibold text-white text-base shadow-md hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: "#3519E2" }}
          >
            Success Stories
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-300 text-base font-semibold text-gray-800 hover:bg-gray-100 transition">
            Contact Us
          </button>
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
