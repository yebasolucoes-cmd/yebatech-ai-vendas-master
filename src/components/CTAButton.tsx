
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  link, 
  variant = 'primary',
  fullWidth = false,
  className = '',
  onClick
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 text-center py-3 px-6";
  
  const variantClasses = {
    primary: "bg-yebatech-green text-white hover:bg-yebatech-green/90 shadow-md hover:shadow-lg",
    secondary: "bg-yebatech-blue text-white hover:bg-yebatech-blue/90 shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-yebatech-blue text-yebatech-blue hover:bg-yebatech-blue/10"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  return (
    <Link to={link} className={buttonClasses} onClick={onClick}>
      {text}
    </Link>
  );
};

export default CTAButton;
