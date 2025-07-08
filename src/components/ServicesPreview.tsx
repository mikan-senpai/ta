import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Phone, Cloud, Code, Layers, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const previewServices = [
    {
      id: 1,
      title: 'Infrastructure Support',
      description: 'Complete server management, hosting solutions, and data center services',
      icon: Server,
      gradient: 'from-blue-500/10 to-blue-600/10',
      iconColor: 'text-blue-600',
    },
    {
      id: 2,
      title: 'Telephony Services',
      description: 'Advanced PBX systems and modern communication infrastructure',
      icon: Phone,
      gradient: 'from-green-500/10 to-green-600/10',
      iconColor: 'text-green-600',
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure with optimization and management',
      icon: Cloud,
      gradient: 'from-purple-500/10 to-purple-600/10',
      iconColor: 'text-purple-600',
    },
    {
      id: 4,
      title: 'Website Development',
      description: 'Modern, responsive websites with cutting-edge technologies',
      icon: Code,
      gradient: 'from-orange-500/10 to-orange-600/10',
      iconColor: 'text-orange-600',
    },
    {
      id: 5,
      title: 'SaaS Development',
      description: 'Custom software-as-a-service solutions built to scale',
      icon: Layers,
      gradient: 'from-pink-500/10 to-pink-600/10',
      iconColor: 'text-pink-600',
    },
    {
      id: 6,
      title: 'AI Integration',
      description: 'Smart systems that enhance processes with automation',
      icon: Brain,
      gradient: 'from-indigo-500/10 to-indigo-600/10',
      iconColor: 'text-indigo-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="font-heading font-bold text-display-medium text-text-primary mb-6">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-title-medium text-text-secondary leading-relaxed">
            We provide comprehensive software solutions designed to help your business thrive in the digital era.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {previewServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:shadow-large border border-primary-200/50 group cursor-pointer`}
              >
                <motion.div 
                  className="bg-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <IconComponent className={`${service.iconColor}`} size={28} />
                </motion.div>
                
                <h3 className="font-heading font-bold text-title-large text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-body text-body-large text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  {service.description}
                </p>
                
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="text-accent" size={20} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 shadow-large group"
            >
              View All Services
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;