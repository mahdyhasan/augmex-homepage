import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowRight, Star, Award } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Full-Stack Developers', href: '#services' },
        { name: 'AI/ML Engineers', href: '#services' },
        { name: 'Data Scientists', href: '#services' },
        { name: 'UI/UX Designers', href: '#services' },
        { name: 'DevOps Engineers', href: '#services' },
        { name: 'QA Engineers', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Process', href: '#process' },
        { name: 'Success Stories', href: '#testimonials' },
        { name: 'Leadership Team', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Talent Handbook', href: '#' },
        { name: 'Hiring Guide', href: '#' },
        { name: 'Cost Calculator', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'White Papers', href: '#' },
        { name: 'Webinars', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Help Center', href: '#' },
        { name: 'Live Chat', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Status Page', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const achievements = [
    { icon: Star, text: '4.9/5 Client Rating' },
    { icon: Award, text: 'ISO 27001 Certified' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Takes up more space */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <a href="#" className="text-3xl font-bold text-white hover:text-blue-300 transition-colors">
                StaffAugment
              </a>
              <p className="text-blue-200 mt-2 text-lg">
                Connecting Dreams with Opportunities
              </p>
            </div>
            
            <p className="text-blue-100 leading-relaxed mb-8 text-lg">
              We're revolutionizing how companies access world-class remote talent. 
              Join 500+ companies that have built exceptional teams with our vetted professionals.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-blue-100">hello@staffaugment.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-blue-100">+880 1700 000000</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-blue-100">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <achievement.icon className="w-4 h-4 text-yellow-400" />
                  <span className="text-blue-100 text-sm">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {navigationLinks.map((section, index) => (
                <div key={index}>
                  <h4 className="text-white font-semibold text-lg mb-6">{section.title}</h4>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          {link.name}
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay Updated with Industry Insights
              </h3>
              <p className="text-blue-200">
                Get the latest trends in remote work, hiring tips, and exclusive talent spotlights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-blue-200 text-sm">
              © 2025 StaffAugment. All rights reserved. | 
              <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1">Terms of Service</a> | 
              <a href="#" className="hover:text-white ml-1">Cookie Policy</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-blue-200 text-sm mb-4">
                Trusted by startups to Fortune 500 companies worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {/* Mock company logos - replace with actual logos */}
                <div className="text-white/40 text-sm font-medium">TechCorp</div>
                <div className="text-white/40 text-sm font-medium">DataFlow</div>
                <div className="text-white/40 text-sm font-medium">InnovateAI</div>
                <div className="text-white/40 text-sm font-medium">CloudScale</div>
                <div className="text-white/40 text-sm font-medium">NextGen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
