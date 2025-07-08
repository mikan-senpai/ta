import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Phone, Shuffle, Layers, Brain } from 'lucide-react';
import { services } from '../data';

const iconComponents = {
  cloud: Cloud,
  code: Code,
  phone: Phone,
  shuffle: Shuffle,
  layers: Layers,
  brain: Brain,
};

const Services: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              We provide comprehensive software solutions designed to help your business thrive in the digital era.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="bg-primary-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 border border-primary-200"
              >
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-sm mb-6">
                  <IconComponent className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;