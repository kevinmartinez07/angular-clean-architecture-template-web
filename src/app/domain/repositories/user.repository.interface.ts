import { Observable } from 'rxjs';
import { UserEntity } from '../entities';

/**
 * Interface del repositorio de usuarios (contrato)
 * La implementación estará en la capa de infraestructura
 */
export interface IUserRepository {
  getAll(): Observable<UserEntity[]>;
  getById(id: string): Observable<UserEntity>;
  create(user: Partial<UserEntity>): Observable<UserEntity>;
  update(id: string, user: Partial<UserEntity>): Observable<UserEntity>;
  delete(id: string): Observable<boolean>;
}
