import React from 'react';
import Hero from './components/Hero';
import CombinedSection from './components/CombinedSection';
import Services from './components/Services';
import About from './components/About';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <CombinedSection />
      <About />
      <Problem />
      <Solution />
      <Process />
      <Results />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}

export default App;
