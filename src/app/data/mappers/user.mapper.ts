import { UserEntity } from '@domain/entities';
import { UserDTO } from '../dtos/user.dto';

/**
 * Mapper para convertir entre UserDTO y UserEntity
 * Transforma los datos de la API al modelo del dominio y viceversa
 */
export class UserMapper {
  
  /**
   * Convierte UserDTO (de API) a UserEntity (dominio)
   */
  static toDomain(dto: UserDTO): UserEntity {
    return {
      id: dto.id,
      name: dto.name,
      email: dto.email,
      role: dto.role,
      isActive: dto.is_active, // Conversión de snake_case a camelCase
      createdAt: new Date(dto.created_at), // Conversión de string a Date
      updatedAt: new Date(dto.updated_at)
    };
  }

  /**
   * Convierte UserEntity (dominio) a UserDTO (para API)
   */
  static toDTO(entity: UserEntity): UserDTO {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      role: entity.role,
      is_active: entity.isActive, // Conversión de camelCase a snake_case
      created_at: entity.createdAt.toISOString(), // Conversión de Date a string
      updated_at: entity.updatedAt.toISOString()
    };
  }

  /**
   * Convierte array de DTOs a array de Entities
   */
  static toDomainArray(dtos: UserDTO[]): UserEntity[] {
    return dtos.map(dto => this.toDomain(dto));
  }

  /**
   * Convierte array de Entities a array de DTOs
   */
  static toDTOArray(entities: UserEntity[]): UserDTO[] {
    return entities.map(entity => this.toDTO(entity));
  }
}
