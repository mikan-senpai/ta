import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Marquee from 'react-fast-marquee';

const CompanyMarquee: React.FC = () => {
  const sloganRef = useRef<HTMLDivElement>(null);

  const companies = [
    {
      name: 'TCS',
      logo: '/Tata Consultancy Services (TCS) New Logo PNG Vector.png',
    },
    {
      name: 'CONSAM',
      logo: '/CONSAM-LOGO-SITE.png',
    },
    {
      name: 'AKD Network',
      logo: '/image.png',
    },
  ];

  const slogans = [
    "Powering Innovation",
    "Building Tomorrow",
    "Transforming Business",
    "Driving Excellence",
    "Creating Solutions"
  ];

  useEffect(() => {
    if (sloganRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      
      slogans.forEach((slogan, index) => {
        tl.to(sloganRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -20,
          ease: "power2.inOut"
        })
        .call(() => {
          if (sloganRef.current) {
            sloganRef.current.textContent = slogan;
          }
        })
        .to(sloganRef.current, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.inOut"
        })
        .to({}, { duration: 2 }); // Hold for 2 seconds
      });
    }
  }, []);

  return (
    <section className="py-16 bg-background-secondary border-y border-border-primary overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-primary font-semibold text-headline-medium text-text-secondary mb-4">
            Trusted by Leading Companies
          </h3>
          <div className="h-0.5 w-16 bg-accent-blue mx-auto rounded-full mb-6"></div>
          <motion.div
            ref={sloganRef}
            className="font-primary text-body-large text-accent-blue font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Powering Innovation
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
        >
          <Marquee
            gradient={true}
            gradientColor={[10, 10, 10]}
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="mx-8 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-40 h-20 glass-morphism rounded-xl shadow-glass flex items-center justify-center overflow-hidden group-hover:shadow-glow transition-all duration-300">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500 p-4"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/160x80/1a1a2e/ffffff?text=${encodeURIComponent(company.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <motion.p
                  className="text-center mt-3 font-primary text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {company.name}
                </motion.p>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyMarquee;