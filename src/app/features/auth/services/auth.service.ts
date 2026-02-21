import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from '@core/constants';
import { StorageService } from '@core/services';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

/**
 * Servicio de autenticación
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Señal para el estado de autenticación (Angular 21)
  private isAuthenticatedSignal = signal<boolean>(false);
  private currentUserSignal = signal<User | null>(null);

  // Exponer señales como solo lectura
  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  readonly currentUser = this.currentUserSignal.asReadonly();

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {
    this.checkAuthStatus();
  }

  /**
   * Verifica el estado de autenticación al iniciar
   */
  private checkAuthStatus(): void {
    const token = this.storageService.get<string>(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      // TODO: Validar token con backend
      this.isAuthenticatedSignal.set(true);
      // TODO: Cargar datos del usuario
    }
  }

  /**
   * Inicia sesión
   */
  async login(email: string, password: string): Promise<boolean> {
    try {
      // TODO: Llamar API real
      console.log('Login:', { email, password });

      // Simulación
      const mockToken = 'mock-jwt-token-' + Date.now();
      const mockUser: User = {
        id: '1',
        name: 'Usuario Demo',
        email: email,
        role: 'user'
      };

      this.storageService.set(STORAGE_KEYS.AUTH_TOKEN, mockToken);
      this.isAuthenticatedSignal.set(true);
      this.currentUserSignal.set(mockUser);

      await this.router.navigate(['/dashboard']);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  /**
   * Registra un nuevo usuario
   */
  async register(name: string, email: string, password: string): Promise<boolean> {
    try {
      // TODO: Llamar API real
      console.log('Register:', { name, email, password });

      // Simulación - auto-login después del registro
      return await this.login(email, password);
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  }

  /**
   * Cierra sesión
   */
  async logout(): Promise<void> {
    this.storageService.remove(STORAGE_KEYS.AUTH_TOKEN);
    this.isAuthenticatedSignal.set(false);
    this.currentUserSignal.set(null);
    await this.router.navigate(['/auth/login']);
  }

  /**
   * Refresca el token
   */
  async refreshToken(): Promise<boolean> {
    try {
      // TODO: Implementar refresh de token
      return true;
    } catch (error) {
      console.error('Refresh token error:', error);
      await this.logout();
      return false;
    }
  }
}
