/**
 * DTO para Producto
 */
export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url?: string;
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * DTO para crear producto
 */
export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url?: string;
}

/**
 * DTO para actualizar producto
 */
export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: string;
  image_url?: string;
  is_available?: boolean;
}
