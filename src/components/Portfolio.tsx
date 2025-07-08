import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../data';

const categories = ['All', 'SaaS', 'Healthcare', 'Finance', 'E-commerce'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

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
    <section id="portfolio" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Our Portfolio
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              Explore our innovative solutions that have helped businesses overcome challenges and drive growth.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-heading font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-white scale-105 shadow-md'
                  : 'bg-white text-text-primary hover:bg-primary-200'
              }`}
              whileHover={{ scale: activeCategory === category ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl bg-white shadow-md group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-heading font-medium text-accent hover:text-accent-dark transition-colors duration-200"
                  >
                    View Case Study
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;