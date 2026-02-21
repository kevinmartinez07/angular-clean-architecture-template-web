/**
 * Interface base para entidades con ID
 */
export interface BaseEntity {
  id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Interface para respuestas paginadas de API
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * Interface para respuestas de API genéricas
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

/**
 * Tipo para estados de carga
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Interface para manejo de errores
 */
export interface ErrorResponse {
  code: string;
  message: string;
  details?: any;
}
