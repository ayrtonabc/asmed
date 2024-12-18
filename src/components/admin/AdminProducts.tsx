import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { productService } from '../../lib/services/productService';
import type { Product } from '../../lib/types/product';
import { ProductForm } from './ProductForm';
import { ProductList } from './ProductList';
import LoadingSpinner from '../ui/LoadingSpinner';

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (productData: Omit<Product, 'id'>) => {
    try {
      if (selectedProduct) {
        await productService.update(selectedProduct.id, productData);
      } else {
        await productService.create(productData);
      }
      await loadProducts();
      setIsFormVisible(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Zarządzanie Produktami
        </h1>
        <button
          onClick={() => {
            setSelectedProduct(null);
            setIsFormVisible(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nowy Produkt
        </button>
      </div>

      {isFormVisible && (
        <ProductForm
          product={selectedProduct || undefined}
          onSave={handleSave}
          onCancel={() => {
            setIsFormVisible(false);
            setSelectedProduct(null);
          }}
        />
      )}

      <ProductList
        products={products}
        onEdit={(product) => {
          setSelectedProduct(product);
          setIsFormVisible(true);
        }}
        onDelete={async (id) => {
          await productService.delete(id);
          await loadProducts();
        }}
      />
    </div>
  );
};

export default AdminProducts;