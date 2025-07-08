import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { teamMembers } from '../data';

const Team: React.FC = () => {
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
    <section id="team" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Our Team
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-gray-600 leading-relaxed">
              Meet our talented team of professionals who are passionate about creating innovative solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 flex space-x-3 mb-2">
                    <a href="#" className="bg-white p-2 rounded-full text-accent hover:text-accent-dark transition-colors duration-200">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-accent hover:text-accent-dark transition-colors duration-200">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-accent hover:text-accent-dark transition-colors duration-200">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-accent mb-3">{member.position}</p>
                <p className="font-body text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;