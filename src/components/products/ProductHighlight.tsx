import React from 'react';
import { ICON_MAP } from '../../lib/constants/icons';

interface ProductHighlightProps {
  icon: string;
  text: string;
}

export const ProductHighlight: React.FC<ProductHighlightProps> = ({ icon, text }) => {
  const IconComponent = ICON_MAP[icon];

  return (
    <div className="flex flex-col items-center text-center group">
      <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-100 transition-colors">
        {IconComponent && <IconComponent className="h-5 w-5" />}
      </div>
      <span className="text-xs text-gray-500 mt-1">{text}</span>
    </div>
  );
};