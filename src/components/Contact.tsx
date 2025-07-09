import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SuccessModal from './SuccessModal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              Any Problem. We'll Solve It
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="font-heading font-semibold text-2xl text-text-primary mb-6">
                Find us at the office
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-text-primary mb-1">Our Location</h4>
                    <p className="font-body text-gray-600">
                      1st Floor, 48 Kustia Road<br />
                      Kolkata - 700039<br />
                      West Bengal<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-text-primary mb-1">Contact Sales</h4>
                    <p className="font-body text-gray-600">+91 98318 87933</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-text-primary mb-1">Business Hours</h4>
                    <p className="font-body text-gray-600">Mon - Sat, 8:00-22:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="font-heading font-semibold text-2xl text-text-primary mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-heading font-medium text-text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-heading font-medium text-text-primary mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-heading font-medium text-text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-heading font-medium text-text-primary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3 px-6 rounded-md font-heading font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default Contact;