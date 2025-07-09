import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Zap, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: Award, text: 'Innovative SaaS Solutions', color: 'text-blue-600' },
    { icon: Shield, text: 'Enterprise-Grade Security', color: 'text-green-600' },
    { icon: Globe, text: 'Scalable Cloud Infrastructure', color: 'text-purple-600' },
    { icon: Users, text: 'Expert Technical Support', color: 'text-orange-600' },
    { icon: Zap, text: 'Agile Development Process', color: 'text-pink-600' },
    { icon: CheckCircle2, text: 'Continuous Integration & Deployment', color: 'text-indigo-600' },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', delay: 0.2 },
    { number: '99.9%', label: 'Uptime Guarantee', delay: 0.4 },
    { number: '24/7', label: 'Support Available', delay: 0.6 },
    { number: '50+', label: 'Happy Clients', delay: 0.8 },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading font-bold text-display-medium text-text-primary mb-6">
                About Tathya Technologies
              </h2>
              <div className="h-1 w-24 bg-accent mb-8 rounded-full"></div>
            </motion.div>
            
            <motion.p 
              className="font-body text-title-medium text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Founded in 2020, Tathya Technologies is a forward-thinking SaaS company dedicated to helping businesses leverage the power of technology to achieve their goals.
            </motion.p>
            
            <motion.p 
              className="font-body text-body-large text-text-secondary leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our team of experienced developers, designers, and strategists works collaboratively to deliver tailored solutions that address our clients' unique challenges and drive measurable results.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  >
                    <motion.div
                      className={`p-2 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 mr-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <IconComponent className={`${feature.color}`} size={20} />
                    </motion.div>
                    <span className="font-body text-body-large text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="font-heading font-bold text-headline-medium text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="font-body text-body-medium text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-large"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.6 }}
                style={{ maxHeight: '450px' }}
              >
                <img
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-large border border-primary-200/20"
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft"></div>
                  <span className="font-body text-sm font-medium text-text-primary whitespace-nowrap">Innovation First</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-large border border-primary-200/20"
                initial={{ opacity: 0, rotate: 10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-soft"></div>
                  <span className="font-body text-sm font-medium text-text-primary whitespace-nowrap">Quality Driven</span>
                </div>
              </motion.div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl transform -translate-x-8 translate-y-8 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;