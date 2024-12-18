import React from 'react';

interface ProductFeatureProps {
  text: string;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({ text }) => (
  <li className="flex items-center text-sm text-gray-600">
    <svg className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    {text}
  </li>
);