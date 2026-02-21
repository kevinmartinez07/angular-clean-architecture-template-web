import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { authInterceptor, httpErrorInterceptor } from '@core/interceptors';
import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación
 * Incluye providers para routing, HTTP y otros servicios globales
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        httpErrorInterceptor
      ])
    )
  ]
};
