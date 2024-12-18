import { openDB } from 'idb';
import type { DBSchema } from 'idb';
import type { Product } from '../types/product';

interface ProductDB extends DBSchema {
  products: {
    key: string;
    value: Product;
    indexes: { 'by-category': string };
  };
}

export const initIndexedDB = () => openDB<ProductDB>('products-db', 1, {
  upgrade(db) {
    const store = db.createObjectStore('products', {
      keyPath: 'id'
    });
    store.createIndex('by-category', 'category');
  },
});