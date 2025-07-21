import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const logos = [
    {
      name: 'Logo 4',
      url: '/4.png',
      width: 120,
      height: 40
    },
    {
      name: 'Logo 5',
      url: '/5.png',
      width: 120,
      height: 40
    },
    {
      name: 'Logo 6',
      url: '/6.png',
      width: 120,
      height: 40
    },
    {
      name: 'Logo 7',
      url: '/7.png',
      width: 120,
      height: 40
    },
    {
      name: 'Logo 8',
      url: '/8.png',
      width: 120,
      height: 40
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Join hundreds of companies that rely on our enterprise-grade solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-row flex-nowrap justify-center items-center gap-x-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.2 }
              }}
              className="flex items-center justify-center p-2 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 min-h-[160px]"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                width={logo.width * 2.2}
                height={logo.height * 2.2}
                className="max-w-full h-auto transition-transform duration-300"
                style={{ maxHeight: '110px', objectFit: 'contain' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
