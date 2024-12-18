import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Product } from '../../lib/types/product';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-bold text-white">{product.name}</h3>
              <p className="text-emerald-200">{product.price}</p>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onEdit(product)}
                className="p-2 text-blue-600 hover:text-blue-800"
                title="Edytuj produkt"
              >
                <Edit2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Czy na pewno chcesz usunąć ten produkt?')) {
                    onDelete(product.id);
                  }
                }}
                className="p-2 text-red-600 hover:text-red-800"
                title="Usuń produkt"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};