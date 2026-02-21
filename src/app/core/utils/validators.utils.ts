/**
 * Utilidades para validaciones
 */
export class ValidatorUtils {
  
  /**
   * Valida un email
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Valida un teléfono (formato internacional)
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s\-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  /**
   * Verifica si un string está vacío o solo tiene espacios
   */
  static isEmpty(value: string | null | undefined): boolean {
    return !value || value.trim().length === 0;
  }

  /**
   * Valida la longitud mínima
   */
  static hasMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  /**
   * Valida la longitud máxima
   */
  static hasMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }
}
