/**
 * Constantes relacionadas con la API
 */
export const API_CONFIG = {
  BASE_URL: 'https://api.example.com',
  VERSION: 'v1',
  TIMEOUT: 30000, // 30 segundos
} as const;

/**
 * Endpoints de la API
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
    PROFILE: '/users/profile',
  },
} as const;
