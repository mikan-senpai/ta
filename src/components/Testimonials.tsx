import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
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
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-title-medium text-text-secondary leading-relaxed">
            Hear from organizations that have transformed their operations with our solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-br from-white to-surface-secondary rounded-3xl p-8 lg:p-12 shadow-large border border-primary-100/50"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Quote Content */}
                <div className="lg:w-2/3">
                  <motion.div
                    className="text-accent mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Quote size={48} />
                  </motion.div>
                  
                  <motion.p 
                    className="font-body text-title-medium text-text-primary italic mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {testimonials[currentIndex].quote}
                  </motion.p>
                  
                  {/* Rating */}
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </motion.div>
                </div>
                
                {/* Author Info */}
                <motion.div 
                  className="lg:w-1/3 text-center lg:text-left"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-24 h-24 rounded-full object-cover shadow-large border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Quote className="text-white" size={16} />
                    </div>
                  </motion.div>
                  
                  <h4 className="font-heading font-bold text-title-large text-text-primary mb-2">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="font-body text-body-large text-accent mb-1">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="font-body text-body-medium text-text-secondary">
                    {testimonials[currentIndex].company}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 gap-6">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white shadow-medium text-text-primary hover:text-accent hover:shadow-large transition-all duration-300 border border-primary-200/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent scale-125' : 'bg-primary-300 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white shadow-medium text-text-primary hover:text-accent hover:shadow-large transition-all duration-300 border border-primary-200/50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;