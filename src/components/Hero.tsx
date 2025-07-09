import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transform Your Business with Innovative SaaS Solutions';

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    if (titleRef.current) {
      tl.fromTo(titleRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
    }
    
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }
    
    if (buttonsRef.current) {
      tl.fromTo(buttonsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
    }

    // Typewriter effect
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    setTimeout(typeWriter, 1000);
  }, []);

  const floatingElements = [
    { icon: Zap, color: 'text-accent-blue', delay: 0 },
    { icon: Shield, color: 'text-accent-green', delay: 0.5 },
    { icon: Globe, color: 'text-accent-purple', delay: 1 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark particle-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0], 
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#00d4ff" fillOpacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8"
            >
              <motion.div 
                className="inline-flex items-center px-6 py-3 glass-morphism rounded-full mb-8 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="text-accent-blue mr-3 group-hover:animate-pulse" size={18} />
                <span className="text-accent-blue font-primary font-medium text-sm">
                  Next-Generation Technology Solutions
                </span>
              </motion.div>
              
              <div className="overflow-hidden">
                <h1 
                  ref={titleRef}
                  className="font-primary font-bold text-display-xl lg:text-display-xl xl:text-display-xl leading-tight text-text-primary mb-8"
                >
                  <span className="block">Transform Your</span>
                  <span className="block gradient-text">Business with</span>
                  <span className="block">Innovative SaaS</span>
                </h1>
              </div>

              {/* Typewriter Effect */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <p className="font-primary text-title-large text-text-secondary leading-relaxed">
                  {typedText}
                  <span className="animate-blink">|</span>
                </p>
              </motion.div>
            </motion.div>
            
            <p 
              ref={subtitleRef}
              className="font-primary text-body-large text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We build custom software solutions that drive efficiency, growth, and digital transformation for businesses of all sizes. From cloud infrastructure to AI integration.
            </p>
            
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center neon-button text-lg px-8 py-4"
                >
                  Explore Services
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="glass-button inline-flex items-center justify-center px-8 py-4 rounded-xl font-primary font-semibold text-lg transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {[
                { number: '500+', label: 'Projects' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-primary font-bold text-headline-large text-accent-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="font-primary text-body-medium text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Visual Elements */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Main Visual */}
              <motion.div
                className="relative z-10 glass-morphism-strong rounded-3xl p-8 shadow-glass-lg"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-square bg-gradient-accent rounded-2xl p-8 flex items-center justify-center">
                  <motion.div
                    className="text-white text-6xl font-bold"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Code2 size={120} />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              {floatingElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <motion.div
                    key={index}
                    className={`absolute glass-morphism p-4 rounded-2xl shadow-glow ${
                      index === 0 ? 'top-4 right-4' : 
                      index === 1 ? 'bottom-4 left-4' : 
                      'top-1/2 -right-8'
                    }`}
                    initial={{ opacity: 0, y: 20, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + element.delay }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <IconComponent className={`${element.color}`} size={24} />
                  </motion.div>
                );
              })}
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-accent rounded-3xl transform translate-x-8 translate-y-8 -z-10 opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-accent-blue rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;