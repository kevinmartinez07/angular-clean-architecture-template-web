import { Observable } from 'rxjs';
import { UserEntity } from '../entities';
import { IUserRepository } from '../repositories';

/**
 * Use Case: Obtener todos los usuarios
 * 
 * @example
 * constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}
 * 
 * this.getAllUsersUseCase.execute().subscribe(users => {
 *   console.log(users);
 * });
 */
export class GetAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(): Observable<UserEntity[]> {
    return this.userRepository.getAll();
  }
}

/**
 * Use Case: Obtener usuario por ID
 */
export class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(id: string): Observable<UserEntity> {
    return this.userRepository.getById(id);
  }
}

/**
 * Use Case: Crear usuario
 */
export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(user: Partial<UserEntity>): Observable<UserEntity> {
    // Aquí se puede agregar lógica de negocio antes de crear
    return this.userRepository.create(user);
  }
}

/**
 * Use Case: Actualizar usuario
 */
export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(id: string, user: Partial<UserEntity>): Observable<UserEntity> {
    // Aquí se puede agregar validaciones de negocio
    return this.userRepository.update(id, user);
  }
}

/**
 * Use Case: Eliminar usuario
 */
export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(id: string): Observable<boolean> {
    return this.userRepository.delete(id);
  }
}
