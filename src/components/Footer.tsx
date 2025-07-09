import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { footerSections } from '../data';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white inline-block p-2 rounded-lg mb-4">
              <Logo />
            </div>
            <p className="font-body text-primary-200 mb-6 max-w-md">
              Tathya Technologies delivers innovative SaaS solutions that help businesses thrive in the digital era through cloud technology, AI integration, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-heading font-semibold text-white text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="font-body text-primary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-primary-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Tathya Technologies Pvt. Ltd. (OPC). All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-body text-primary-300 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-primary-300 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="font-body text-primary-300 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;