/**
 * Configuración del entorno de producción
 */
export const environment = {
  production: true,
  apiUrl: 'https://api.production.com/api',
  apiVersion: 'v1',
  appName: 'Angular Clean Architecture',
  enableDebug: false,
  logLevel: 'error' as const,
};
