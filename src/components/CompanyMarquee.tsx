import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CompanyMarquee = () => {
  const CompanyMarqueeRef = useRef<HTMLDivElement>(null);

  const technologies = [
    'Cloud Infrastructure', 'AI & Machine Learning', 'Enterprise Security',
    'Data Center Solutions', 'PBX Systems', 'Web Development',
    'Business Automation', 'Server Management', 'Email Solutions',
    'Backup & Recovery', 'Network Architecture', 'VoIP Integration'
  ];

  useEffect(() => {
    if (!CompanyMarqueeRef.current || !window.gsap) return;

    const CompanyMarquee = CompanyMarqueeRef.current;
    const CompanyMarqueeContent = CompanyMarquee.querySelector('.CompanyMarquee-content');

    if (!CompanyMarqueeContent) return;

    window.gsap.to(CompanyMarqueeContent, {
      x: '-50%',
      duration: 40,
      ease: 'none',
      repeat: -1
    });

  }, []);

  return (
    <div className="bg-white/60 py-12 overflow-hidden relative">
      <div className="absolute inset-0 backdrop-blur-md border border-white/20"></div>
      <div ref={CompanyMarqueeRef} className="relative">
        <motion.div
          className="CompanyMarquee-content flex space-x-16 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-blue-700 hover:drop-shadow-lg transition-colors cursor-default tracking-wide"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyMarquee;
