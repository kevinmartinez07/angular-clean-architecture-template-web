/**
 * Utilidades para manejo de fechas
 */
export class DateUtils {
  
  /**
   * Formatea una fecha a string
   */
  static formatDate(date: Date, format: string = 'dd/MM/yyyy'): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return format
      .replace('dd', day)
      .replace('MM', month)
      .replace('yyyy', String(year));
  }

  /**
   * Calcula la diferencia en días entre dos fechas
   */
  static daysBetween(date1: Date, date2: Date): number {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffInTime / ONE_DAY);
  }

  /**
   * Verifica si una fecha es válida
   */
  static isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  /**
   * Obtiene la fecha de hoy sin hora
   */
  static today(): Date {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }
}
