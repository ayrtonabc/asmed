import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  className?: string;
  href?: string;
}

const Button = ({ children, variant = 'primary', icon: Icon, className = '', href }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl",
    secondary: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
  };

  const Comp = href ? 'a' : 'button';
  
  return (
    <Comp
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="h-5 w-5 mr-2" />}
      {children}
    </Comp>
  );
};

export default Button;