import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass-morphism-strong rounded-xl shadow-glass-lg p-6 max-w-sm w-full relative"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto w-16 h-16 mb-4 text-accent-green"
              >
                <CheckCircle size={64} strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-primary text-xl font-semibold text-text-primary mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-text-secondary font-primary">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </div>
          </motion.div>
          <div className="fixed inset-0 bg-background-primary/80 backdrop-blur-glass -z-10" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;