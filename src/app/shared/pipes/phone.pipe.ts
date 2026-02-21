import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe para formatear números de teléfono
 * 
 * @example
 * {{ '1234567890' | phone }}  // Resultado: (123) 456-7890
 */
@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Eliminar todo excepto números
    const cleaned = value.replace(/\D/g, '');

    // Formatear según la longitud
    if (cleaned.length === 10) {
      return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
    }

    return value;
  }
}
