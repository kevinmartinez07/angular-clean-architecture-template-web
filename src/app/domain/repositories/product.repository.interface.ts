import { Observable } from 'rxjs';
import { ProductEntity } from '../entities';

/**
 * Interface del repositorio de productos (contrato)
 */
export interface IProductRepository {
  getAll(filters?: ProductFilters): Observable<ProductEntity[]>;
  getById(id: string): Observable<ProductEntity>;
  create(product: Partial<ProductEntity>): Observable<ProductEntity>;
  update(id: string, product: Partial<ProductEntity>): Observable<ProductEntity>;
  delete(id: string): Observable<boolean>;
  search(query: string): Observable<ProductEntity[]>;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  available?: boolean;
}
