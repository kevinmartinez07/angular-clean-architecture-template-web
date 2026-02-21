/**
 * Constantes generales de la aplicación
 */
export const APP_CONSTANTS = {
  APP_NAME: 'Angular Clean Architecture',
  VERSION: '1.0.0',
  LOCALE: 'es-ES',
} as const;

/**
 * Claves para localStorage
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
} as const;

/**
 * Configuración de paginación
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 25, 50, 100],
} as const;
