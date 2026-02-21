import { ProductEntity } from '@domain/entities';
import { ProductDTO } from '../dtos/product.dto';

/**
 * Mapper para convertir entre ProductDTO y ProductEntity
 */
export class ProductMapper {
  
  /**
   * Convierte ProductDTO (de API) a ProductEntity (dominio)
   */
  static toDomain(dto: ProductDTO): ProductEntity {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      price: dto.price,
      stock: dto.stock,
      category: dto.category,
      imageUrl: dto.image_url,
      isAvailable: dto.is_available
    };
  }

  /**
   * Convierte ProductEntity (dominio) a ProductDTO (para API)
   */
  static toDTO(entity: ProductEntity): ProductDTO {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      price: entity.price,
      stock: entity.stock,
      category: entity.category,
      image_url: entity.imageUrl,
      is_available: entity.isAvailable,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  /**
   * Convierte array de DTOs a array de Entities
   */
  static toDomainArray(dtos: ProductDTO[]): ProductEntity[] {
    return dtos.map(dto => this.toDomain(dto));
  }
}
