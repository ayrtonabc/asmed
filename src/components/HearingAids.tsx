import React, { useState, useEffect } from 'react';
import { productService } from '../lib/services/productService';
import type { Product } from '../lib/types/product';
import SectionTitle from './ui/SectionTitle';
import ProductCard from './products/ProductCard';
import LoadingSpinner from './ui/LoadingSpinner';

const HearingAids = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      console.error('Error loading products:', err);
      setError('Error al cargar los productos. Por favor, intente más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section id="produkty" className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Nowoczesne Aparaty Słuchowe" 
          subtitle="Odkryj naszą kolekcję zaawansowanych aparatów słuchowych dostosowanych do Twoich potrzeb"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HearingAids;