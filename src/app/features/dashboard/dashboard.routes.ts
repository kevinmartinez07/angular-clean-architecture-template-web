import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';

/**
 * Rutas del módulo de Dashboard
 */
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./components/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  }
];
