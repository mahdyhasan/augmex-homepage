import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you fill our open position?",
      answer: "Most positions are filled within 2-4 weeks, but we can often present qualified candidates within the first week for urgent roles. Timeline depends on role complexity and market conditions."
    },
    {
      question: "What if the candidate doesn't work out?",
      answer: "We offer a 90-day replacement guarantee. If your new hire doesn't meet expectations within the first 90 days, we'll find a replacement at no additional cost."
    },
    {
      question: "Do you only work with large companies?",
      answer: "Not at all! We partner with everyone from ambitious startups to Fortune 500 companies. Our approach scales to match your size, budget, and growth stage."
    },
    {
      question: "How do you find candidates who aren't actively job searching?",
      answer: "This is where we excel! Through relationship building, industry networking, and targeted outreach, we connect with passive candidates who might be perfect for your role but aren't actively looking."
    },
    {
      question: "What's your success rate?",
      answer: "98% of our placements are still with their companies after one year, and 94% receive promotions or expanded responsibilities within 18 months. We're pretty proud of those numbers!"
    },
    {
      question: "How much do your services cost?",
      answer: "Our fees are competitive and typically range from 20-25% of the first year's salary, paid only when you hire. We also offer retained search options for senior executive roles."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our recruiters have deep expertise in technology, healthcare, finance, manufacturing, and professional services. Each recruiter focuses on specific industries to provide specialized knowledge."
    },
    {
      question: "Can you help with contract or temporary positions?",
      answer: "Absolutely! We handle permanent, contract-to-hire, and temporary placements. Whatever your staffing needs, we've got you covered."
    },
    {
      question: "How involved will we need to be in the process?",
      answer: "We handle the heavy lifting, but we'll need your input on candidate feedback and final interviews. Most clients spend 3-5 hours total throughout the entire process."
    },
    {
      question: "What makes you different from other recruiters?",
      answer: "We focus on long-term partnerships, not quick placements. Every candidate goes through rigorous vetting, and we provide ongoing support to ensure successful integration. Plus, we actually return phone calls!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-blue-600 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;