import { Injectable } from '@angular/core';

/**
 * Servicio para manejar el almacenamiento local de forma segura y tipada
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  /**
   * Guarda un valor en localStorage
   */
  set<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }

  /**
   * Obtiene un valor de localStorage
   */
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error al leer de localStorage:', error);
      return null;
    }
  }

  /**
   * Elimina un valor de localStorage
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Limpia todo el localStorage
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * Verifica si existe una clave en localStorage
   */
  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
