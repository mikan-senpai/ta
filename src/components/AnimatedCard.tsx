import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  hover?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  hover = true
}) => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return { y: 60, x: 0 };
      case 'down': return { y: -60, x: 0 };
      case 'left': return { x: 60, y: 0 };
      case 'right': return { x: -60, y: 0 };
      default: return { y: 60, x: 0 };
    }
  };

  const initial = getInitialTransform();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      ...initial,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = hover ? {
    whileHover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    whileTap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  } : {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      {...hoverVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;