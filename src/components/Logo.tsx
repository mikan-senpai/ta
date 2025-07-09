import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <motion.div
        className="relative"
        whileHover={{ rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-accent-blue/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
        <div className="relative bg-gradient-to-br from-accent-blue to-accent-purple p-2 rounded-xl">
          <Code2 size={28} strokeWidth={2} className="text-white" />
        </div>
      </motion.div>
      
      <div className="flex flex-col">
        <motion.div 
          className="flex items-baseline space-x-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-primary font-bold text-text-primary text-xl tracking-tight">
            Tathya
          </span>
          <span className="font-primary font-light text-accent-blue text-xl tracking-tight">
            Tech
          </span>
        </motion.div>
        <motion.div 
          className="text-xs text-text-muted font-medium tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Technologies
        </motion.div>
      </div>
    </Link>
  );
};

export default Logo;