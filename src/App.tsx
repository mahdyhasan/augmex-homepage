import React from 'react';
import Header from './components/Header';
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
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Contact />
      <FAQ />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;