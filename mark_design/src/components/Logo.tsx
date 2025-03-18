
import React from 'react';
import '../styles/logo.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  color = 'currentColor',
  className = '' 
}) => {
  return (
    <div className={`logo logo-${size} ${className}`}>
      <div 
        className="logo-border"
        style={{ color }}
      />
      <div className="logo-content">
        <span className="logo-text" style={{ color }}>MD</span>
      </div>
    </div>
  );
};

export default Logo;
