import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Server, Phone, Cloud, Code, Layers, Brain, Shuffle, ArrowRight, CheckCircle } from 'lucide-react';
import { enhancedServices } from '../data/enhancedServices';
import { Link } from 'react-router-dom';

const iconComponents = {
  server: Server,
  phone: Phone,
  cloud: Cloud,
  code: Code,
  layers: Layers,
  brain: Brain,
  shuffle: Shuffle,
};

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(1);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-surface-tertiary">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-white via-surface-secondary to-primary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#000000" fillOpacity="0.05"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="font-heading font-bold text-display-large lg:text-6xl xl:text-7xl text-text-primary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive Technology
              <span className="block text-accent"> Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="font-body text-title-large text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From infrastructure to AI integration, we provide end-to-end solutions that help your business stay competitive in the digital landscape.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#services-grid"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 shadow-large"
              >
                Explore Services
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-transparent hover:bg-primary-100 text-text-primary border-2 border-primary-300 hover:border-accent px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Get Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="font-heading font-bold text-display-medium text-text-primary mb-6">
              Our Service Portfolio
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full"></div>
            <p className="font-body text-title-medium text-text-secondary leading-relaxed">
              Click on any service card to explore detailed offerings and capabilities. Our comprehensive approach ensures all your technology needs are met under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {enhancedServices.map((service, index) => {
              const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-soft border border-primary-200/50 overflow-hidden hover:shadow-large transition-all duration-500"
                  style={{ minHeight: isExpanded ? 'auto' : '140px' }}
                >
                  {/* Service Card Header */}
                  <motion.div
                    className="p-8 lg:p-10 cursor-pointer"
                    onClick={() => toggleService(service.id)}
                    whileHover={{ backgroundColor: 'rgba(0, 122, 255, 0.02)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 flex-1">
                        <motion.div 
                          className="bg-accent/10 p-4 rounded-2xl flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="text-accent" size={32} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-headline-large text-text-primary mb-3">
                            {service.title}
                          </h3>
                          <p className="font-body text-body-large text-text-secondary leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex-shrink-0 ml-6"
                      >
                        <div className="p-2 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors duration-200">
                          <ChevronDown className="text-accent" size={24} />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="border-t border-primary-200/50"
                      >
                        <div className="p-8 lg:p-10 bg-surface-secondary">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {service.categories.map((category, categoryIndex) => (
                              <motion.div 
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-soft"
                              >
                                <h4 className="font-heading font-bold text-title-large text-text-primary mb-6 flex items-center">
                                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                  {category.name}
                                </h4>
                                <ul className="space-y-4">
                                  {category.items.map((item, itemIndex) => (
                                    <motion.li 
                                      key={itemIndex} 
                                      className="flex items-start group"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                                    >
                                      <CheckCircle className="text-accent mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" size={16} />
                                      <span className="font-body text-body-medium text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-200">
                                        {item}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                          
                          {service.benefits && (
                            <motion.div 
                              className="mt-10 p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              <h4 className="font-heading font-bold text-title-large text-text-primary mb-6 flex items-center">
                                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                                Key Benefits
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <motion.div 
                                    key={benefitIndex} 
                                    className="flex items-center group"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: benefitIndex * 0.05 }}
                                  >
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                                    <span className="font-body text-body-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                                      {benefit}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-100 via-surface-secondary to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#000000" fillOpacity="0.05"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="font-heading font-bold text-display-medium text-text-primary mb-8">
              Why Choose Our Services?
            </h2>
            <p className="font-body text-title-medium text-text-secondary mb-16 leading-relaxed">
              Our comprehensive approach ensures that all your technology needs are met under one roof. From infrastructure setup to AI integration, we provide end-to-end solutions that help your business stay competitive in the digital landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                'Complete technology stack management',
                'Seamless integration across all services',
                '24/7 support and maintenance',
                'Scalable solutions that grow with your business',
                'Expert consultation and implementation',
                'Cost-effective bundled solutions'
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center text-left group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <span className="font-body text-body-large text-text-secondary group-hover:text-text-primary transition-colors duration-200">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 shadow-large"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center bg-transparent hover:bg-primary-100 text-text-primary border-2 border-primary-300 hover:border-accent px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;