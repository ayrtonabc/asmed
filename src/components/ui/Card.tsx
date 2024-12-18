import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
}

const Card = ({ children, className = '', hover = true, bordered = false }: CardProps) => {
  return (
    <div 
      className={`
        bg-white rounded-xl 
        ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''}
        ${bordered ? 'border border-emerald-100' : 'shadow-lg'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;