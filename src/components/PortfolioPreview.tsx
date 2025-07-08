import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data';

const PortfolioPreview: React.FC = () => {
  const previewItems = portfolioItems.slice(0, 4);

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
    <section className="py-24 lg:py-32 bg-surface-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="font-heading font-bold text-display-medium text-text-primary mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-title-medium text-text-secondary leading-relaxed">
            Explore some of our innovative solutions that have helped businesses overcome challenges and drive growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {previewItems.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-large transition-all duration-500 border border-primary-100/50">
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 w-full">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-accent text-white text-sm rounded-full mb-3"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.category}
                      </motion.span>
                      <motion.h3 
                        className="font-heading font-bold text-title-large text-white mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        className="flex items-center text-white/80"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <motion.div whileHover={{ x: 4 }}>
                          <ExternalLink size={16} className="mr-2" />
                        </motion.div>
                          <ExternalLink size={16} className="mr-2" />
                        </motion.div>
                        <span className="font-body text-sm">View Project</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-heading font-bold text-title-large text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-body-large text-text-secondary mb-6 leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                    <motion.div
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              to="/portfolio"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 shadow-large group"
            >
              View All Projects
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

export default PortfolioPreview;