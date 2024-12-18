import React from 'react';

interface ProductFormFieldProps {
  label: string;
  children: React.ReactNode;
}

export const ProductFormField: React.FC<ProductFormFieldProps> = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);