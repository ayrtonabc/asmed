import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../db/supabase';
import type { Product, ProductFormData } from '../types/product';

const TABLE_NAME = 'products';

class ProductService {
  async getAll(): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  async getById(id: string): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

  async create(product: ProductFormData): Promise<Product | null> {
    try {
      const newProduct = { ...product, id: uuidv4() };
      
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert([newProduct])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating product:', error);
      return null;
    }
  }

  async update(id: string, product: Partial<Product>): Promise<boolean> {
    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .update(product)
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error updating product:', error);
      return false;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from(TABLE_NAME)
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting product:', error);
      return false;
    }
  }

  async getByCategory(category: string): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .eq('category', category)
        .order('name');
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }
  }
}

export const productService = new ProductService();