/**
 * DTO para Usuario (Data Transfer Object)
 * Representa la estructura de datos que viene/va a la API
 */
export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean; // snake_case como viene del backend
  created_at: string; // ISO string desde API
  updated_at: string;
}

/**
 * DTO para crear usuario
 */
export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role?: string;
}

/**
 * DTO para actualizar usuario
 */
export interface UpdateUserDTO {
  name?: string;
  email?: string;
  role?: string;
  is_active?: boolean;
}
