export interface ProductHighlight {
  icon: string;
  text: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  highlights: ProductHighlight[];
}

export type ProductFormData = Omit<Product, 'id'>;