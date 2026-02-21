/**
 * Interface base para entidades del dominio
 */
export interface Entity {
  id: string;
}

/**
 * Entidad de Usuario del dominio
 */
export interface UserEntity extends Entity {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Entidad de Producto del dominio
 */
export interface ProductEntity extends Entity {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl?: string;
  isAvailable: boolean;
}
