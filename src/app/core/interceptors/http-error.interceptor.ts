import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor para manejar errores HTTP globalmente
 * 
 * @example
 * // En app.config.ts
 * provideHttpClient(
 *   withInterceptors([httpErrorInterceptor])
 * )
 */
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ha ocurrido un error';

      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Error del lado del servidor
        errorMessage = `Código: ${error.status}\nMensaje: ${error.message}`;
      }

      console.error(errorMessage);
      
      // TODO: Mostrar notificación al usuario
      // TODO: Logging a servicio externo
      
      return throwError(() => error);
    })
  );
};
