import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { ICON_OPTIONS } from '../../lib/constants/icons';
import type { Product, ProductFormData } from '../../lib/types/product';
import { ProductFormField } from './ProductFormField';
import { ImageUpload } from './ImageUpload';

interface ProductFormProps {
  product?: Product;
  onSave: (product: ProductFormData) => void;
  onCancel: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState<ProductFormData>(
    product || {
      name: '',
      image: '',
      description: '',
      price: '',
      category: '',
      features: [''],
      highlights: [{ icon: 'Zap', text: '' }]
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({ ...prev, image: url }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-8 space-y-6">
      <ProductFormField label="Nazwa produktu">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          placeholder="Wprowadź nazwę produktu"
        />
      </ProductFormField>

      <ImageUpload
        currentImage={formData.image}
        onImageUpload={handleImageUpload}
      />

      <ProductFormField label="Opis">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
          required
          placeholder="Wprowadź opis produktu"
        />
      </ProductFormField>

      <ProductFormField label="Cena">
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          placeholder="np. 2999 PLN"
        />
      </ProductFormField>

      <ProductFormField label="Kategoria">
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Wybierz kategorię</option>
          <option value="Aparaty wewnątrzuszne">Aparaty wewnątrzuszne</option>
          <option value="Aparaty zauszne">Aparaty zauszne</option>
          <option value="Akcesoria">Akcesoria</option>
        </select>
      </ProductFormField>

      <div className="space-y-4">
        <h3 className="font-medium">Cechy produktu</h3>
        {formData.features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => {
                const newFeatures = [...formData.features];
                newFeatures[index] = e.target.value;
                setFormData(prev => ({ ...prev, features: newFeatures }));
              }}
              className="flex-1 p-2 border rounded"
              placeholder="Wprowadź cechę produktu"
            />
            {index === formData.features.length - 1 ? (
              <button
                type="button"
                onClick={() => setFormData(prev => ({
                  ...prev,
                  features: [...prev.features, '']
                }))}
                className="p-2 bg-emerald-100 text-emerald-600 rounded hover:bg-emerald-200"
                title="Dodaj cechę"
              >
                <Plus className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setFormData(prev => ({
                  ...prev,
                  features: prev.features.filter((_, i) => i !== index)
                }))}
                className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                title="Usuń cechę"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Anuluj
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          {product ? 'Aktualizuj' : 'Utwórz'} produkt
        </button>
      </div>
    </form>
  );
};