import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe para filtrar arrays de objetos
 * 
 * @example
 * <div *ngFor="let item of items | filter:'name':searchTerm">
 */
@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items || !value || !field) {
      return items;
    }

    return items.filter(item => {
      const fieldValue = item[field];
      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(value.toLowerCase());
      }
      return String(fieldValue).toLowerCase().includes(value.toLowerCase());
    });
  }
}
