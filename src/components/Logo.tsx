import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="text-accent">
        <Code2 size={28} strokeWidth={2} />
      </span>
      <div>
        <span className="font-heading font-bold text-text-primary text-xl">Tathya</span>
        <span className="font-heading font-light text-text-secondary text-xl">Tech</span>
      </div>
    </Link>
  );
};

export default Logo;