import React from 'react';
import { ProductHighlight } from './ProductHighlight';
import { ProductFeature } from './ProductFeature';
import type { Product } from '../../lib/types/product';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="group overflow-hidden animate-fade-in" hover={false}>
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="primary">{product.category}</Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white font-bold">{product.price}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {product.highlights.map((highlight, idx) => (
            <ProductHighlight 
              key={idx}
              icon={highlight.icon}
              text={highlight.text}
            />
          ))}
        </div>

        <ul className="space-y-2 mb-4">
          {product.features.map((feature, idx) => (
            <ProductFeature key={idx} text={feature} />
          ))}
        </ul>

        <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 group">
          <span>Umów konsultację</span>
          <svg 
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;