import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) => {
  return (
    <div className={`relative mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <div className="h-1 w-24 bg-emerald-600 rounded-full"></div>
        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-1"></div>
      </div>
    </div>
  );
};

export default SectionTitle;