import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { footerSections } from '../data';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '1st Floor, 48 Kustia Road\nKolkata - 700039, West Bengal, India'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98318 87933'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@tathyatech.com'
    }
  ];

  return (
    <footer className="bg-background-secondary border-t border-border-primary">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Logo />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-primary text-text-secondary mb-8 max-w-md leading-relaxed"
            >
              Tathya Technologies delivers innovative SaaS solutions that help businesses thrive in the digital era through cloud technology, AI integration, and digital transformation.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="glass-morphism p-3 rounded-xl text-text-muted hover:text-accent-blue transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} className="group-hover:animate-pulse" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
              className="lg:col-span-2"
            >
              <h3 className="font-primary font-semibold text-text-primary text-lg mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="font-primary text-text-muted hover:text-accent-blue transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-0 h-0.5 bg-accent-blue rounded-full group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-border-primary"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={index}
                className="glass-morphism p-6 rounded-2xl group hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="glass-morphism p-3 rounded-xl group-hover:bg-accent-blue/20 transition-colors duration-300">
                    <IconComponent className="text-accent-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-primary font-semibold text-text-primary mb-2">
                      {info.title}
                    </h4>
                    <p className="font-primary text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-primary text-text-muted text-sm mb-4 md:mb-0"
            >
              &copy; {currentYear} Tathya Technologies Pvt. Ltd. (OPC). All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-8"
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="font-primary text-text-muted hover:text-accent-blue text-sm transition-colors duration-300"
                  whileHover={{ y: -1 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;