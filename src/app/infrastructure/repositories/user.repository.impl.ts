import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG, API_ENDPOINTS } from '@core/constants';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '@data/dtos';
import { UserMapper } from '@data/mappers';
import { UserEntity } from '@domain/entities';
import { IUserRepository } from '@domain/repositories';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Implementación del repositorio de usuarios
 * Conecta con la API real
 */
@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImpl implements IUserRepository {
  private readonly baseUrl = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.USERS.BASE}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserEntity[]> {
    return this.http.get<UserDTO[]>(this.baseUrl).pipe(
      map(dtos => UserMapper.toDomainArray(dtos))
    );
  }

  getById(id: string): Observable<UserEntity> {
    return this.http.get<UserDTO>(API_ENDPOINTS.USERS.BY_ID(id)).pipe(
      map(dto => UserMapper.toDomain(dto))
    );
  }

  create(user: Partial<UserEntity>): Observable<UserEntity> {
    const createDTO: CreateUserDTO = {
      name: user.name!,
      email: user.email!,
      password: 'temp', // TODO: manejar password correctamente
      role: user.role
    };

    return this.http.post<UserDTO>(this.baseUrl, createDTO).pipe(
      map(dto => UserMapper.toDomain(dto))
    );
  }

  update(id: string, user: Partial<UserEntity>): Observable<UserEntity> {
    const updateDTO: UpdateUserDTO = {
      name: user.name,
      email: user.email,
      role: user.role,
      is_active: user.isActive
    };

    return this.http.put<UserDTO>(API_ENDPOINTS.USERS.BY_ID(id), updateDTO).pipe(
      map(dto => UserMapper.toDomain(dto))
    );
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<void>(API_ENDPOINTS.USERS.BY_ID(id)).pipe(
      map(() => true)
    );
  }
}
