import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Componente de tarjeta reutilizable
 * 
 * @example
 * <app-card [title]="'Mi Tarjeta'">
 *   <p>Contenido de la tarjeta</p>
 * </app-card>
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" *ngIf="title">
        <h3>{{ title }}</h3>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .card-header {
      padding: 1rem;
      border-bottom: 1px solid #e0e0e0;
      background-color: #f8f9fa;
    }

    .card-header h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .card-body {
      padding: 1rem;
    }

    .card-footer {
      padding: 1rem;
      border-top: 1px solid #e0e0e0;
      background-color: #f8f9fa;
    }
  `]
})
export class CardComponent {
  @Input() title?: string;
  @Input() hasFooter: boolean = false;
}
