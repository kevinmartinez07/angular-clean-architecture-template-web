import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Interceptor para agregar el token de autenticación a las peticiones HTTP
 * 
 * @example
 * // En app.config.ts
 * provideHttpClient(
 *   withInterceptors([authInterceptor])
 * )
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO: Obtener token desde servicio de autenticación
  const token = localStorage.getItem('authToken');

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
