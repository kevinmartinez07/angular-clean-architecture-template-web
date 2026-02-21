import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Guard para proteger rutas que requieren autenticación
 * 
 * @example
 * {
 *   path: 'dashboard',
 *   component: DashboardComponent,
 *   canActivate: [authGuard]
 * }
 */
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // TODO: Implementar lógica de autenticación
  const isAuthenticated = false; // Reemplazar con servicio real
  
  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};
