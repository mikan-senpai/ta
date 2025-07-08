import React from 'react';
import { motion } from 'framer-motion';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-tertiary">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading font-bold text-display-large lg:text-6xl text-white mb-6">
              Contact Us
            </h1>
            <p className="font-body text-title-large text-primary-200 leading-relaxed">
              Ready to start your next project? Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>
      
      <div className="py-8">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;